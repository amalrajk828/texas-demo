"use client";

/**
 * CrossFadeStage
 * ──────────────
 * Renders all sections on a single FIXED viewport stage (position:fixed, inset:0).
 * An invisible scroll track beside it provides the scroll distance that drives the
 * cross-fade. Nothing moves on the Y axis — only opacity (+ a micro scale) changes.
 *
 * Requirements enforced:
 *   1. Progress-based snapping in the scroll engine: when scrolling stops (~120ms idle,
 *      touch ended, momentum settled), animate to the nearest section's plateau center
 *      using Lenis scrollTo (duration ~0.6s, easeOutCubic).
 *   2. Intent-based direction: if last scroll direction was forward and >= 20% into
 *      the next section, snap forward; otherwise snap back.
 *   3. Tight crossfade: outgoing section fades out FIRST and incoming fades in AFTER
 *      with a gap so combined visible opacity never exceeds 1.0. No overlapping text!
 *   4. Layering: strictly only the active section receives pointer-events, highest z-index,
 *      and is exposed to assistive technology. Inactive sections are inert, aria-hidden,
 *      and visibility: hidden once opacity < 0.02.
 *   5. Fallback snap points in track with CSS scroll-snap-type: y proximity.
 */

import {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  SECTION_SCROLL_LENGTH,
  SECTION_SCROLL_LENGTH_MOBILE,
  PLATEAU,
  FADE_OUT_RANGE,
  FADE_IN_DELAY,
  FADE_IN_RANGE,
} from "@/lib/site";

/* ─── Types ──────────────────────────────────────────────────── */
export interface StageSectionDef {
  id: string;
  label: string;
  content: ReactNode;
}

/* ─── Smoothstep helper ──────────────────────────────────────── */
function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

/* ─── Opacity math ───────────────────────────────────────────── */
/**
 * Outgoing section (d > 0): fades out first (gone by 30% of transition).
 * Incoming section (d < 0): appears only after outgoing is mostly gone.
 * Plateau: opacity = 1 while |d| <= PLATEAU (0.10).
 * Sum of visible layers is never > 1.0; no overlapping text layers!
 */
export function computeOpacity(active: number, index: number): number {
  const d = active - index;
  const absD = Math.abs(d);

  // Plateau: full opacity while |d| <= PLATEAU
  if (absD <= PLATEAU) {
    return 1;
  }

  if (d > 0) {
    // Outgoing section (active > index, user scrolling past this section to next)
    const fadeProgress = (d - PLATEAU) / FADE_OUT_RANGE;
    if (fadeProgress >= 1) return 0;
    return 1 - smoothstep(0, 1, fadeProgress);
  } else {
    // Incoming section (d < 0, active < index, user scrolling towards this section)
    const fadeProgress = 1 - (absD - FADE_IN_DELAY) / FADE_IN_RANGE;
    if (fadeProgress <= 0) return 0;
    if (fadeProgress >= 1) return 1;
    return smoothstep(0, 1, fadeProgress);
  }
}

/* ─── Per-section layer ──────────────────────────────────────── */
function SectionLayer({
  section,
  index,
  smoothActive,
  isReducedMotion,
}: {
  section: StageSectionDef;
  index: number;
  smoothActive: MotionValue<number>;
  isReducedMotion: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  // Derive opacity from the smoothed active float
  const opacity = useTransform(smoothActive, (active) => {
    if (isReducedMotion) {
      // Quick boundary switch in reduced motion
      return Math.abs(active - index) <= 0.5 ? 1 : 0;
    }
    return computeOpacity(active, index);
  });

  // Micro-scale: 0.985 when faded, 1 when fully visible — NO translateY
  const scale = useTransform(opacity, [0, 1], [0.985, 1]);

  // Keep inert, visibility, z-index, and accessibility in sync without React state re-renders
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    return smoothActive.on("change", (active) => {
      const op = isReducedMotion
        ? (Math.abs(active - index) <= 0.5 ? 1 : 0)
        : computeOpacity(active, index);

      // Section with highest opacity (nearest center) is the active winner
      const isWinner = Math.round(active) === index;
      const isVisible = op >= 0.02;

      // Pointer events: only the active winner gets auto
      el.style.pointerEvents = (isWinner && op > 0.3) ? "auto" : "none";
      // Visibility: hidden once opacity < 0.02
      el.style.visibility = isVisible ? "visible" : "hidden";
      // Z-index: active section sits above siblings
      el.style.zIndex = isWinner ? "10" : "1";
      // Inert & accessibility: only winner exposed to assistive tech
      (el as any).inert = !isWinner;
      el.setAttribute("aria-hidden", isWinner ? "false" : "true");
    });
  }, [smoothActive, index, isReducedMotion]);

  if (isReducedMotion) {
    // Static stacked layout fallback
    return (
      <div
        id={section.id}
        style={{ position: "relative", isolation: "isolate" }}
        tabIndex={-1}
        aria-label={section.label}
      >
        {section.content}
      </div>
    );
  }

  return (
    <motion.div
      ref={divRef}
      id={section.id}
      tabIndex={-1}
      aria-label={section.label}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        scale,
        willChange: "opacity, transform",
        overflow: "hidden",
        isolation: "isolate",
        visibility: index === 0 ? "visible" : "hidden",
        pointerEvents: index === 0 ? "auto" : "none",
        zIndex: index === 0 ? 10 : 1,
      }}
    >
      {section.content}
    </motion.div>
  );
}

/* ─── Dot navigation ─────────────────────────────────────────── */
function DotNav({
  sections,
  smoothActive,
  onDotClick,
  isMobile,
  reduced,
}: {
  sections: StageSectionDef[];
  smoothActive: MotionValue<number>;
  onDotClick: (index: number) => void;
  isMobile: boolean;
  reduced: boolean;
}) {
  const DOT_PITCH = 20; // 20px center-to-center => 14px gap between 6px inactive dots

  // Active pill translation along the rail
  const activeY = useTransform(smoothActive, (active) => {
    const clamped = Math.max(0, Math.min(sections.length - 1, active));
    return clamped * DOT_PITCH;
  });

  // Elongation: when moving between dots, pill stretches vertically then settles
  const pillHeight = useTransform(smoothActive, (active) => {
    const distFromInt = Math.abs(active - Math.round(active)); // 0 at integer, 0.5 at midpoint
    const stretch = Math.sin(distFromInt * Math.PI) * 6; // peaks at +6px at midpoint
    return 10 + stretch; // 10px -> 16px -> 10px
  });

  return isMobile ? (
    /* Mobile/Tablet: slim horizontal progress bar at bottom */
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 right-0 h-[3px] bg-white/10 z-[60] lg:hidden"
    >
      <motion.div
        className="h-full bg-[#8a302f]"
        style={{
          scaleX: useTransform(smoothActive, [0, sections.length - 1], [0, 1]),
          transformOrigin: "left",
        }}
      />
    </div>
  ) : (
    /* Desktop: vertical dot rail */
    <motion.nav
      aria-label="Page sections"
      className="hidden lg:flex"
      style={{
        position: "fixed",
        top: "50%",
        right: 24,
        zIndex: 60,
        transform: "translateY(-50%)",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Continuous thin connecting track behind dots */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 10,
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            background: "rgba(255, 255, 255, 0.08)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Sliding & morphing active pill (standard motion only) */}
        {!reduced && (
          <motion.div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              x: "-50%",
              y: activeY,
              height: pillHeight,
              width: 10,
              borderRadius: 9999,
              background: "#8a302f",
              boxShadow: "0 0 8px rgba(138, 48, 47, 0.6)",
              pointerEvents: "none",
              zIndex: 3,
              marginTop: useTransform(pillHeight, (h) => 10 - h / 2),
            }}
          />
        )}

        {/* Dot buttons */}
        {sections.map((s, i) => (
          <DotButton
            key={s.id}
            label={s.label}
            index={i}
            smoothActive={smoothActive}
            onClick={() => onDotClick(i)}
            reduced={reduced}
          />
        ))}
      </div>
    </motion.nav>
  );
}

function DotButton({
  label,
  index,
  smoothActive,
  onClick,
  reduced,
}: {
  label: string;
  index: number;
  smoothActive: MotionValue<number>;
  onClick: () => void;
  reduced: boolean;
}) {
  const isCurrent = useTransform(smoothActive, (active) => Math.round(active) === index);
  const activeDotSize = useTransform(isCurrent, (curr) => (curr ? 10 : 6));
  const activeDotBg = useTransform(isCurrent, (curr) =>
    curr ? "#8a302f" : "rgba(255, 255, 255, 0.25)"
  );
  const activeDotGlow = useTransform(isCurrent, (curr) =>
    curr ? "0 0 8px rgba(138, 48, 47, 0.6)" : "none"
  );

  return (
    <button
      onClick={onClick}
      aria-label={`Go to ${label} section`}
      className="group relative flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#c0483f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0E]"
      style={{
        width: 20,
        height: 20,
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Hover tooltip label (desktop) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#0b0d12]/95 border border-white/10 text-[11px] font-medium tracking-wide text-white/90 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0"
        style={{
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
        }}
      >
        {label}
      </span>

      {/* Visual Dot */}
      {reduced ? (
        /* Reduced motion: instant size and color swap, no morphing */
        <motion.span
          style={{
            display: "block",
            width: activeDotSize,
            height: activeDotSize,
            borderRadius: "50%",
            background: activeDotBg,
            boxShadow: activeDotGlow,
            zIndex: 2,
          }}
        />
      ) : (
        /* Normal motion: clean 6px circle, covered by sliding pill when active */
        <span
          style={{
            display: "block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.25)",
            zIndex: 2,
          }}
        />
      )}
    </button>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function CrossFadeStage({
  sections,
}: {
  sections: StageSectionDef[];
}) {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTabletOrMobile = useMediaQuery("(max-width: 1023px)");

  const N = sections.length;
  const sectionLengthVh = isMobile
    ? SECTION_SCROLL_LENGTH_MOBILE
    : SECTION_SCROLL_LENGTH;

  // Raw active float driven by scroll
  const rawActive = useMotionValue(0);
  // Smoothed via lerp inside useAnimationFrame
  const smoothActive = useMotionValue(0);

  // Snapping & scroll tracking refs
  const isSnappingRef = useRef(false);
  const touchActiveRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  const lastIntentDirectionRef = useRef(1); // 1 = forward/down, -1 = backward/up
  const idleTimeoutRef = useRef<number | null>(null);

  // Pixel distance per section
  const getSectionPx = useCallback(() => {
    return (sectionLengthVh * window.innerHeight) / 100;
  }, [sectionLengthVh]);

  // Cancel any running snap animation immediately when user interacts
  const cancelActiveSnap = useCallback(() => {
    if (idleTimeoutRef.current !== null) {
      clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = null;
    }
    if (isSnappingRef.current) {
      isSnappingRef.current = false;
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
        lenis.start();
      }
    }
  }, []);

  // Programmatic snap to section center using Lenis scrollTo with easeOutCubic
  const executeSnapToSection = useCallback(
    (targetIndex: number) => {
      const sectionPx = getSectionPx();
      const targetY = Math.round(targetIndex * sectionPx);
      if (Math.abs(window.scrollY - targetY) < 3) {
        return; // already centered
      }

      isSnappingRef.current = true;
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(targetY, {
          duration: 0.6,
          easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          onComplete: () => {
            isSnappingRef.current = false;
          },
        });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
        setTimeout(() => {
          isSnappingRef.current = false;
        }, 650);
      }
    },
    [getSectionPx]
  );

  // Trigger snap evaluation on idle
  const triggerSnap = useCallback(() => {
    if (reduced || isSnappingRef.current || touchActiveRef.current) return;

    const raw = rawActive.get();
    const baseIndex = Math.floor(raw);
    const frac = raw - baseIndex;
    const dir = lastIntentDirectionRef.current;

    let targetIndex = Math.round(raw);
    // Intent-based snapping: if forward velocity & >= 20% into next section, advance; otherwise hold
    if (dir > 0) {
      targetIndex = frac >= 0.20 ? baseIndex + 1 : baseIndex;
    } else if (dir < 0) {
      targetIndex = frac <= 0.80 ? baseIndex : baseIndex + 1;
    }
    targetIndex = Math.max(0, Math.min(N - 1, targetIndex));

    executeSnapToSection(targetIndex);
  }, [reduced, rawActive, N, executeSnapToSection]);

  // Sync scroll → rawActive and handle idle snapping
  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      const now = performance.now();
      const dt = Math.max(1, now - lastScrollTimeRef.current);
      const dy = currentY - lastScrollYRef.current;
      const velocity = dy / dt; // px per ms

      lastScrollYRef.current = currentY;
      lastScrollTimeRef.current = now;
      scrollVelocityRef.current = velocity;

      // Track last intentional scroll direction
      if (Math.abs(velocity) > 0.03) {
        lastIntentDirectionRef.current = velocity > 0 ? 1 : -1;
      }

      const sectionPx = getSectionPx();
      const raw = currentY / sectionPx;
      rawActive.set(Math.max(0, Math.min(N - 1, raw)));

      // While programmatic snap runs or in reduced motion, ignore idle timer
      if (isSnappingRef.current || reduced) return;

      if (idleTimeoutRef.current !== null) {
        clearTimeout(idleTimeoutRef.current);
      }

      // 120ms idle timeout for snapping to nearest section
      idleTimeoutRef.current = window.setTimeout(() => {
        if (touchActiveRef.current) return;

        // Debounce trackpad inertia until velocity is near zero
        if (Math.abs(scrollVelocityRef.current) > 0.06) {
          idleTimeoutRef.current = window.setTimeout(triggerSnap, 60);
          return;
        }

        triggerSnap();
      }, 120);
    }

    // Attach scroll listener to Lenis or window
    function attachLenis() {
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.on === "function") {
        lenis.on("scroll", onScroll);
        return () => lenis.off("scroll", onScroll);
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    let cleanup = attachLenis();
    if (!(window as any).lenis) {
      const id = setTimeout(() => {
        cleanup();
        cleanup = attachLenis();
      }, 800);
      return () => {
        clearTimeout(id);
        cleanup();
      };
    }
    return cleanup;
  }, [rawActive, N, getSectionPx, reduced, triggerSnap]);

  // User input cancellation listeners (wheel, touch, keydown)
  useEffect(() => {
    function onTouchStart() {
      touchActiveRef.current = true;
      cancelActiveSnap();
    }
    function onTouchEnd() {
      touchActiveRef.current = false;
      if (idleTimeoutRef.current !== null) {
        clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = window.setTimeout(triggerSnap, 120);
    }
    function onWheel() {
      cancelActiveSnap();
    }
    function onKeyDown() {
      cancelActiveSnap();
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cancelActiveSnap, triggerSnap]);

  // Lerp smoothing (raf loop)
  useAnimationFrame(() => {
    if (reduced) return;
    const current = smoothActive.get();
    const target = rawActive.get();
    const next = current + (target - current) * 0.12;
    if (Math.abs(next - current) > 0.0001) {
      smoothActive.set(next);
    }
  });


  // Scroll to section helper (for dot click, nav, keyboard)
  const scrollToSection = useCallback(
    (index: number) => {
      cancelActiveSnap();
      executeSnapToSection(index);
    },
    [cancelActiveSnap, executeSnapToSection]
  );

  // Expose scrollToSection to global for DockNavbar
  useEffect(() => {
    (window as any).__v1ScrollToSection = scrollToSection;
    return () => {
      delete (window as any).__v1ScrollToSection;
    };
  }, [scrollToSection]);

  // Keyboard navigation: PageDown / PageUp / Arrow / Home / End / Space
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Don't hijack keyboard inside form inputs / textareas
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (["PageDown", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        const cur = Math.round(rawActive.get());
        scrollToSection(Math.min(cur + 1, N - 1));
      } else if (["PageUp", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        const cur = Math.round(rawActive.get());
        scrollToSection(Math.max(cur - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(N - 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [rawActive, scrollToSection, N]);

  /* ── Reduced-motion: normal stacked layout ── */
  if (reduced) {
    return (
      <div style={{ position: "relative", zIndex: 30 }}>
        {sections.map((s, i) => (
          <SectionLayer
            key={s.id}
            section={s}
            index={i}
            smoothActive={smoothActive}
            isReducedMotion
          />
        ))}
        {/* Dot / progress nav (instant size/color switch, no morphing pill animation) */}
        <DotNav
          sections={sections}
          smoothActive={smoothActive}
          onDotClick={scrollToSection}
          isMobile={isTabletOrMobile}
          reduced={true}
        />
      </div>
    );
  }

  return (
    <>
      {/* Invisible scroll track with fallback CSS scroll-snap points */}
      <div
        aria-hidden="true"
        className="cross-fade-track"
        style={{
          height: `${N * sectionLengthVh}vh`,
          pointerEvents: "none",
          visibility: "hidden",
          position: "relative",
          zIndex: -1,
          scrollSnapType: "y proximity",
        }}
      >
        {Array.from({ length: N }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${(i / Math.max(1, N - 1)) * 100}%`,
              height: 1,
              width: 1,
              scrollSnapAlign: "center",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* Fixed stage — all sections layered here */}
      <div
        aria-live="polite"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 30,
          overflow: "hidden",
        }}
      >
        {sections.map((s, i) => (
          <SectionLayer
            key={s.id}
            section={s}
            index={i}
            smoothActive={smoothActive}
            isReducedMotion={false}
          />
        ))}
      </div>

      {/* Dot / progress nav */}
      <DotNav
        sections={sections}
        smoothActive={smoothActive}
        onDotClick={scrollToSection}
        isMobile={isTabletOrMobile}
        reduced={false}
      />
    </>
  );
}
