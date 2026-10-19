"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Tunable Constants ──────────────────────────────────────────────────────
type LenisInstance = {
  scrollTo: (target: number | HTMLElement | string, options?: { duration?: number; offset?: number; immediate?: boolean }) => void;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  off: (event: string, callback: (...args: unknown[]) => void) => void;
};

type WindowWithLenis = Window & {
  __lenis?: LenisInstance | null;
};

export const TOTAL_FRAMES         = 300;
export const SEQUENCE_PATH        = "/hero-frames";
export const SEQUENCE_PATH_MOBILE = "/hero-frames/mobile";
export const FRAME_PREFIX         = "frame_";
export const FRAME_EXT            = ".webp";
export const BG_COLOR             = "#e8e8e6";    // Studio-grey, matches frames

// Product placement: centred full-width coverage across all viewports
export const PRODUCT_SCALE        = 1.0;         // Cover scale (desktop)
export const PRODUCT_ANCHOR_X     = 0.5;         // Centred horizontally (50%)
export const PRODUCT_ANCHOR_Y     = 0.5;         // Centred vertically (50%)

// Mobile Safe-Rect Fit Constants (<1024px)
export const MOBILE_SIDE_MARGIN   = 0.03;        // 3% margin each side
export const MOBILE_ANCHOR_Y      = 0.50;        // Centred vertically (50% of viewport height)
export const MOBILE_SCALE_BOOST   = 1.0;         // Gentle mobile zoom constant (1.0 up to 1.15)
export const SAFE_RECT            = { x: 0.11, y: 0.11, width: 0.815, height: 0.73 };

// Tunable constants for Stage Dwell, Velocity cap & Overlap
export const STAGE_DWELL_VH        = 85;          // ~70-90vh per stage
export const MAX_PROGRESS_PER_SECOND = 1.2;       // max progress velocity cap for flicks
export const STAGE_OVERLAP         = 0.09;        // 9% stage cross-fade overlap (8-10%)

// Tunable constants for Hold and Cover
export const SCROLL_LENGTH        = "450vh";     // frame scrubbing length (~85-90vh dwell per stage + buffer)
export const HOLD_COVER           = "100svh";    // hold travel distance while next section covers
export const COVER_SCALE          = 0.94;        // hero content scale at full cover
export const COVER_LIFT           = 40;          // hero content translateY (px) at full cover
export const COVER_DIM            = 0;           // optional hero dimming overlay (default 0)
export const CORNER_RADIUS        = 32;          // px (32px desktop, 24px mobile)

export const EASE                 = 0.14;        // lerp factor

// ── Helpers ────────────────────────────────────────────────────────────────
function smootherstep(min: number, max: number, v: number) {
  if (v <= min) return 0;
  if (v >= max) return 1;
  const x = (v - min) / (max - min);
  return x * x * x * (x * (6 * x - 15) + 10);
}

function framePad(n: number) {
  return String(n).padStart(3, "0");
}

export default function ScrollSequenceHero() {
  const sectionRef          = useRef<HTMLElement>(null);
  const stickyRef           = useRef<HTMLDivElement>(null);
  const heroContentRef      = useRef<HTMLDivElement>(null);
  const overlayRef          = useRef<HTMLDivElement>(null);
  const stageIndicatorRef   = useRef<HTMLElement>(null);
  const dimOverlayRef       = useRef<HTMLDivElement>(null);
  const canvasRef           = useRef<HTMLCanvasElement>(null);

  const [posterVisible, setPosterVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeStage, setActiveStage]     = useState(1);
  const activeStageRef                    = useRef(1);

  // ImageBitmap store
  const bitmaps   = useRef<(ImageBitmap | null)[]>(
    Array.from({ length: TOTAL_FRAMES }, () => null)
  );
  const destroyed = useRef(false);

  // Scroll state (refs, no re-renders)
  const rawTarget     = useRef(0);   // float frame index from scroll
  const current       = useRef(0);   // float frame index being animated
  const lastDrawn     = useRef(-1);  // rounded index last drawn
  const isVisible     = useRef(true);

  // ── Scroll to Stage Function (interactive stage indicator) ───────────────
  const scrollToStage = useCallback((stageNum: number) => {
    const sec = sectionRef.current;
    if (!sec) return;
    const scrollY       = window.scrollY || window.pageYOffset;
    const sectionTop    = sec.getBoundingClientRect().top + scrollY;
    const viewH         = window.innerHeight;
    const isShort       = viewH < 500;
    const holdPx        = isShort ? 0.6 * viewH : viewH;
    const bufferPx      = Math.round(0.18 * viewH);
    const aboutTop      = sectionTop + sec.offsetHeight - holdPx;
    const coverStartScroll = aboutTop - holdPx;
    const frameTravelPx = Math.max(1, coverStartScroll - sectionTop - bufferPx);

    let targetY = sectionTop;
    if (stageNum === 2) targetY = sectionTop + frameTravelPx * 0.46;
    if (stageNum === 3) targetY = sectionTop + frameTravelPx * 0.86;

    const lenis = (window as WindowWithLenis).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(targetY, { duration: 1.0 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }, []);

  // ── Draw ────────────────────────────────────────────────────────────────
  const draw = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find nearest loaded bitmap
    const store = bitmaps.current;
    let bmp = store[index];
    if (!bmp) {
      for (let d = 1; d < TOTAL_FRAMES; d++) {
        if (store[index - d]) { bmp = store[index - d]; break; }
        if (store[index + d]) { bmp = store[index + d]; break; }
      }
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Use clientWidth / clientHeight of the wrapper so scrollbar is not counted
    const wrapper = stickyRef.current;
    const W = wrapper ? wrapper.clientWidth : (canvas.clientWidth || canvas.offsetWidth);
    const H = wrapper ? wrapper.clientHeight : (canvas.clientHeight || canvas.offsetHeight);
    if (!W || !H) return;

    const rW = Math.round(W * dpr);
    const rH = Math.round(H * dpr);
    if (canvas.width !== rW || canvas.height !== rH) {
      canvas.width  = rW;
      canvas.height = rH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled    = true;
    ctx.imageSmoothingQuality    = "high";
    ctx.fillStyle                = BG_COLOR;
    ctx.fillRect(0, 0, W, H);

    if (bmp) {
      const isDesk = W >= 1024;
      if (isDesk) {
        // Desktop (>= 1024px): keep current layout and cover fit untouched
        const coverS = Math.max(W / bmp.width, H / bmp.height);
        const effS   = coverS * PRODUCT_SCALE;
        const sw     = bmp.width  * effS;
        const sh     = bmp.height * effS;
        const ax     = PRODUCT_ANCHOR_X;
        const ay     = PRODUCT_ANCHOR_Y;
        ctx.drawImage(bmp, W * ax - sw / 2, H * ay - sh / 2, sw, sh);
      } else {
        // Mobile & small tablets (< 1024px): safe-rect fit
        const isShort = H < 500;
        let scale: number;
        if (isShort) {
          // In landscape phones (height below 500px), use safe-rect fit by HEIGHT
          scale = ((H * (1 - 2 * MOBILE_SIDE_MARGIN)) / (SAFE_RECT.height * bmp.height)) * MOBILE_SCALE_BOOST;
        } else {
          // Portrait phones & small tablets: safe-rect fits canvas width exactly (plus side margin)
          scale = ((W * (1 - 2 * MOBILE_SIDE_MARGIN)) / (SAFE_RECT.width * bmp.width)) * MOBILE_SCALE_BOOST;
        }

        const sw = bmp.width  * scale;
        const sh = bmp.height * scale;

        // Centre the safe rect horizontally
        const safeCenterX = (SAFE_RECT.x + SAFE_RECT.width * 0.5) * sw;
        const drawX = W * 0.5 - safeCenterX;

        // Place vertically at MOBILE_ANCHOR_Y (or 0.5 in landscape)
        const safeCenterY = (SAFE_RECT.y + SAFE_RECT.height * 0.5) * sh;
        const anchorY = isShort ? 0.5 : MOBILE_ANCHOR_Y;
        const drawY = H * anchorY - safeCenterY;

        ctx.drawImage(bmp, drawX, drawY, sw, sh);

        // Seamless edge blending: fade top and bottom 24-32px into fill colour
        // to prevent any visible edge line or colour variance from the render
        const fadePx = Math.min(32, Math.max(16, sh * 0.08));
        if (drawY > -fadePx) {
          const topGrad = ctx.createLinearGradient(0, drawY, 0, drawY + fadePx);
          topGrad.addColorStop(0, BG_COLOR);
          topGrad.addColorStop(1, "rgba(232, 232, 230, 0)");
          ctx.fillStyle = topGrad;
          ctx.fillRect(0, drawY - 1, W, fadePx + 1);
        }
        if (drawY + sh < H + fadePx) {
          const botGrad = ctx.createLinearGradient(0, drawY + sh - fadePx, 0, drawY + sh);
          botGrad.addColorStop(0, "rgba(232, 232, 230, 0)");
          botGrad.addColorStop(1, BG_COLOR);
          ctx.fillStyle = botGrad;
          ctx.fillRect(0, drawY + sh - fadePx, W, fadePx + 1);
        }
      }
    }

    ctx.restore();
  }, []);

  // ── Overlay opacity (no CSS transitions — pure JS for sync) ─────────────
  const applyStage = useCallback((id: string, opacity: number, yPx: number) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.opacity        = opacity.toFixed(3);
    el.style.transform      = `translateY(${yPx.toFixed(1)}px)`;
    el.style.pointerEvents  = opacity > 0.05 ? "auto" : "none";
    el.style.visibility     = opacity > 0.05 ? "visible" : "hidden";
  }, []);

  const updateCards = useCallback((p: number) => {
    // Stage 1 (hero intro): 0.00 → 0.38
    // Active 0.00 → 0.29; cross-fades out 0.29 → 0.38 (9% overlap)
    {
      let op = 0;
      let y = 0;
      if (p <= 0.29) {
        op = 1;
        y = 0;
      } else if (p < 0.38) {
        const t = smootherstep(0.29, 0.38, p);
        op = 1 - t;
        y = -28 * t;
      } else {
        op = 0;
        y = -28;
      }
      applyStage("hero-screen", op, y);
    }

    // Stage 2 (what we do & 01/02/03 cards): 0.29 → 0.72
    // Cross-fades in 0.29 → 0.38; active 0.38 → 0.63; cross-fades out 0.63 → 0.72 (9% overlap)
    {
      let op = 0;
      let y = 24;
      if (p >= 0.29 && p <= 0.72) {
        if (p < 0.38) {
          const t = smootherstep(0.29, 0.38, p);
          op = t;
          y = 24 * (1 - t);
        } else if (p > 0.63) {
          const t = smootherstep(0.63, 0.72, p);
          op = 1 - t;
          y = -24 * t;
        } else {
          op = 1;
          y = 0;
        }
      } else if (p > 0.72) {
        op = 0;
        y = -24;
      } else {
        op = 0;
        y = 24;
      }
      applyStage("what-we-do-screen", op, y);
    }

    // Stage 3 (custody metering & automation): 0.63 → 1.00+
    // Cross-fades in 0.63 → 0.72; STAYS FULLY VISIBLE (opacity 1) from 0.72 to 1.00 and through cover!
    {
      let op = 0;
      let y = 24;
      if (p >= 0.63) {
        if (p < 0.72) {
          const t = smootherstep(0.63, 0.72, p);
          op = t;
          y = 24 * (1 - t);
        } else {
          op = 1;
          y = 0;
        }
      } else {
        op = 0;
        y = 24;
      }
      applyStage("card-c", op, y);

      // On mobile devices, fade the background canvas out when stage 3 card appears
      // so the canvas flange does not extend outside the card boundary on the left.
      // The card's internal background layer contains the clipped flange image.
      if (typeof window !== "undefined" && window.innerWidth < 1024 && canvasRef.current) {
        if (p >= 0.63) {
          const t = smootherstep(0.63, 0.72, p);
          canvasRef.current.style.opacity = Math.max(0, 1 - t).toFixed(3);
        } else {
          canvasRef.current.style.opacity = "1";
        }
      } else if (canvasRef.current && canvasRef.current.style.opacity !== "1") {
        canvasRef.current.style.opacity = "1";
      }
    }
  }, [applyStage]);

  // ── Cover reaction (transform & opacity only, driven by coverProgress 0 → 1) ──
  const applyCoverReaction = useCallback((coverP: number) => {
    // 1) Parallax scale (1.0 → COVER_SCALE) & lift (0 → -COVER_LIFT)
    if (heroContentRef.current) {
      const scale = 1 - (1 - COVER_SCALE) * coverP;
      const translateY = -COVER_LIFT * coverP;
      heroContentRef.current.style.transform = `scale(${scale.toFixed(4)}) translateY(${translateY.toFixed(2)}px)`;
    }

    // 2) Hero text and cards fade to 0 opacity by 60% of cover
    if (overlayRef.current) {
      const fade = coverP <= 0 ? 1 : Math.max(0, 1 - coverP / 0.6);
      overlayRef.current.style.opacity = fade.toFixed(3);
    }

    // 3) Hero stage indicator fades out during hold-and-cover so it never shows over the next section
    if (stageIndicatorRef.current) {
      const fade = coverP <= 0 ? 1 : Math.max(0, 1 - coverP / 0.6);
      stageIndicatorRef.current.style.opacity = fade.toFixed(3);
      stageIndicatorRef.current.style.pointerEvents = fade <= 0.05 ? "none" : "auto";
    }

    // 4) Optional dimming (default COVER_DIM = 0, disabled)
    if (dimOverlayRef.current && COVER_DIM > 0) {
      dimOverlayRef.current.style.opacity = (COVER_DIM * coverP).toFixed(3);
    }
  }, []);

  // ── Main effect ─────────────────────────────────────────────────────────
  useEffect(() => {
    destroyed.current = false;
    const section     = sectionRef.current;
    if (!section) return;

    const mq             = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduced = mq.matches;
    setReducedMotion(prefersReduced);
    const isMobile       = window.innerWidth < 768;

    if (prefersReduced) {
      // Reduced motion: static last frame, no hold, no cover animation
      rawTarget.current = TOTAL_FRAMES - 1;
      current.current   = TOTAL_FRAMES - 1;
      const base = isMobile ? SEQUENCE_PATH_MOBILE : SEQUENCE_PATH;
      fetch(`${base}/${FRAME_PREFIX}300${FRAME_EXT}`)
        .then(r => r.blob())
        .then(b => createImageBitmap(b))
        .then(bmp => {
          if (destroyed.current) { bmp.close(); return; }
          bitmaps.current[TOTAL_FRAMES - 1] = bmp;
          setPosterVisible(false);
          draw(TOTAL_FRAMES - 1);
          lastDrawn.current = TOTAL_FRAMES - 1;
        })
        .catch(() => {});
      return;
    }

    const nav = navigator as unknown as {
      connection?:   { saveData?: boolean };
      deviceMemory?: number;
    };
    const saveData    = nav.connection?.saveData === true;
    const lowMemory   = (nav.deviceMemory ?? 8) <= 4;
    const step        = isMobile || saveData || lowMemory ? 2 : 1;
    const base        = isMobile ? SEQUENCE_PATH_MOBILE : SEQUENCE_PATH;

    // ── Preload ──────────────────────────────────────────────────────────
    let active = 0;
    const loading = new Set<number>();
    const queue: number[] = [];
    for (let i = 2; i <= TOTAL_FRAMES; i += step) queue.push(i - 1);

    function fetchFrame(idx: number, url: string) {
      if (destroyed.current || bitmaps.current[idx] || loading.has(idx)) return;
      loading.add(idx);
      active++;
      fetch(url)
        .then(r => r.blob())
        .then(b => createImageBitmap(b))
        .then(bmp => {
          if (destroyed.current) { bmp.close(); return; }
          bitmaps.current[idx] = bmp;
          if (lastDrawn.current === idx) draw(idx);
        })
        .catch(() => {})
        .finally(() => { loading.delete(idx); active--; pump(); });
    }

    function pump() {
      if (destroyed.current || active >= 8 || queue.length === 0) return;
      const target = Math.round(rawTarget.current);
      queue.sort((a, b) => Math.abs(a - target) - Math.abs(b - target));
      while (active < 8 && queue.length > 0) {
        const fi = queue.shift()!;
        const pad = framePad(fi + 1);
        fetchFrame(fi, `${base}/${FRAME_PREFIX}${pad}${FRAME_EXT}`);
      }
    }

    // Frame 0 (LCP) immediately
    fetch(`${base}/${FRAME_PREFIX}001${FRAME_EXT}`)
      .then(r => r.blob())
      .then(b => createImageBitmap(b))
      .then(bmp => {
        if (destroyed.current) { bmp.close(); return; }
        bitmaps.current[0] = bmp;
        setPosterVisible(false);
        draw(0);
        lastDrawn.current = 0;
        pump();
      })
      .catch(() => {});

    // ── Scroll → progress ────────────────────────────────────────────────
    function readScroll() {
      const sec = sectionRef.current;
      if (!sec) return;
      const scrollY       = window.scrollY || window.pageYOffset;
      const rect          = sec.getBoundingClientRect();
      const sectionTop    = rect.top + scrollY;
      const viewH         = window.innerHeight;
      const isShort       = viewH < 500;
      // On very short screens (<500px), reduce HOLD_COVER to 60svh
      const holdPx        = isShort ? 0.6 * viewH : viewH;
      const bufferPx      = Math.round(0.18 * viewH); // short buffer ensuring stage 3 is fully visible before cover starts

      // The next section has margin-top: -holdPx, so its document top is:
      const aboutTop         = sectionTop + sec.offsetHeight - holdPx;
      const coverEndScroll   = aboutTop;
      const coverStartScroll = coverEndScroll - holdPx;
      const frameTravelPx    = Math.max(1, coverStartScroll - sectionTop - bufferPx);
      const scrolledInHero   = Math.max(0, scrollY - sectionTop);

      // 1) Frame progress maps ONLY to the first frame travel of the wrapper
      const frameProgress = Math.max(0, Math.min(1, scrolledInHero / frameTravelPx));
      rawTarget.current   = frameProgress * (TOTAL_FRAMES - 1);

      // 2) Cover progress (0 to 1 over the HOLD_COVER distance, starting strictly after frameProgress reaches 1 + buffer)
      const coverProgress = scrollY < coverStartScroll
        ? 0
        : Math.max(0, Math.min(1, (scrollY - coverStartScroll) / holdPx));

      applyCoverReaction(coverProgress);

      if (stageIndicatorRef.current) {
        stageIndicatorRef.current.style.opacity = coverProgress <= 0 ? "1" : Math.max(0, 1 - coverProgress / 0.5).toFixed(3);
      }

      pump();
    }

    // ── rAF loop — always running while mounted ───────────────────────────
    let lastTime = performance.now();
    let raf = 0;
    function loop(time?: number) {
      if (destroyed.current) return;
      raf = requestAnimationFrame(loop);      // schedule FIRST so it never stops

      if (!isVisible.current) {
        if (time) lastTime = time;
        return;
      }

      const now = time || performance.now();
      const dt = Math.min(0.1, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;

      if (prefersReduced) {
        current.current = rawTarget.current;
      } else {
        const diff = rawTarget.current - current.current;
        let step = diff * EASE;

        // Fast-scroll protection: Cap maximum progress change per second on rapid flicks
        // so flicking doesn't skip intermediate stages.
        const maxStep = MAX_PROGRESS_PER_SECOND * (TOTAL_FRAMES - 1) * dt;
        if (Math.abs(step) > maxStep) {
          step = Math.sign(step) * maxStep;
        }

        current.current += step;
        if (Math.abs(rawTarget.current - current.current) < 0.01) {
          current.current = rawTarget.current;
        }
      }

      // Drive all stage text, cards and indicators from the SAME eased progress value
      const easedProgress = Math.max(0, Math.min(1, current.current / (TOTAL_FRAMES - 1)));
      updateCards(easedProgress);

      const stage = easedProgress < 0.33 ? 1 : easedProgress < 0.68 ? 2 : 3;
      if (stage !== activeStageRef.current) {
        activeStageRef.current = stage;
        setActiveStage(stage);
      }

      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(current.current)));
      if (idx !== lastDrawn.current) {
        draw(idx);
        lastDrawn.current = idx;
      }
    }

    // ── Showcase slider ───────────────────────────────────────────────────
    function initSlider() {
      const card = document.getElementById("hero-showcase");
      if (!card) return;
      const items    = card.querySelectorAll<HTMLElement>(".showcase-media-item");
      const tagEl    = document.getElementById("showcase-tag");
      const counter  = document.getElementById("showcase-counter");
      const tabs     = card.querySelectorAll<HTMLElement>(".showcase-tab");
      const prevBtn  = document.getElementById("showcase-prev");
      const nextBtn  = document.getElementById("showcase-next");
      const TAGS     = ["INDUSTRIAL SERVICES", "AUTOMATION", "METERING", "NDT & TESTING"];
      let cur        = 1;
      const total    = items.length;
      let timer: ReturnType<typeof setInterval> | null = null;
      let paused     = false;

      function go(n: number) {
        cur = ((n % total) + total) % total;
        items.forEach((el, i) => {
          el.classList.toggle("active", i === cur);
          if (el.tagName === "VIDEO") {
            const v = el as HTMLVideoElement;
            if (i === cur) { v.currentTime = 0; v.play().catch(() => {}); }
            else v.pause();
          }
        });
        tabs.forEach((t, i) => t.classList.toggle("active", i === cur));
        if (tagEl)   tagEl.textContent  = TAGS[cur] ?? "";
        if (counter) counter.textContent = `0${cur + 1} / 0${total}`;
      }

      function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(() => { if (!paused && !document.hidden) go(cur + 1); }, 5000);
      }

      tabs.forEach(t => t.addEventListener("click", () => {
        go(parseInt(t.getAttribute("data-index") ?? "0", 10));
        startTimer();
      }));
      prevBtn?.addEventListener("click", () => { go(cur - 1); startTimer(); });
      nextBtn?.addEventListener("click", () => { go(cur + 1); startTimer(); });
      card.addEventListener("mouseenter", () => { paused = true;  });
      card.addEventListener("mouseleave", () => { paused = false; });

      go(1);
      startTimer();
    }

    // ── Intersection observer (pause when off-screen) ─────────────────────
    const io = new IntersectionObserver(([e]) => {
      isVisible.current = e.isIntersecting;
      if (e.isIntersecting && lastDrawn.current >= 0) draw(lastDrawn.current);
    }, { threshold: 0.05 });
    io.observe(section);

    // ── ResizeObserver on wrapper for exact clientWidth (excludes scrollbar) ─
    const ro = new ResizeObserver(() => {
      if (lastDrawn.current >= 0) draw(lastDrawn.current);
    });
    if (stickyRef.current) ro.observe(stickyRef.current);

    // ── Window events ─────────────────────────────────────────────────────
    let resizeT: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => { if (lastDrawn.current >= 0) draw(lastDrawn.current); }, 80);
    };

    const onVisibility = () => {
      isVisible.current = !document.hidden;
      if (!document.hidden && lastDrawn.current >= 0) draw(lastDrawn.current);
    };

    const lenis = (window as WindowWithLenis).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", readScroll);
    }

    window.addEventListener("scroll",            readScroll,    { passive: true });
    window.addEventListener("resize",            onResize,      { passive: true });
    window.addEventListener("orientationchange", onResize,      { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    readScroll();
    initSlider();
    loop();                 // start the always-on rAF

    return () => {
      destroyed.current = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      clearTimeout(resizeT);
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", readScroll);
      }
      window.removeEventListener("scroll",            readScroll);
      window.removeEventListener("resize",            onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      bitmaps.current.forEach(b => b?.close());
      bitmaps.current = Array.from({ length: TOTAL_FRAMES }, () => null);
    };
  }, [draw, updateCards, applyCoverReaction]);

  return (
    <section
      id="sequence"
      ref={sectionRef}
      className="relative"
      style={{
        height: reducedMotion ? "100svh" : `calc(${SCROLL_LENGTH} + ${HOLD_COVER})`,
        backgroundColor: BG_COLOR,
      }}
    >
      {/* ── Sticky viewport: w-full (clientWidth without scrollbar), 100svh ─── */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden"
        style={{ backgroundColor: BG_COLOR }}
      >
        {/* ── Reactive Hero Content Container (scales & lifts during cover) ─ */}
        <div
          ref={heroContentRef}
          className="relative w-full h-full"
          style={{
            willChange: "transform",
            transformOrigin: "center center",
          }}
        >
          {/* LCP poster – absolutely positioned parent so next/image fill is happy */}
          <div
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{
              opacity:    posterVisible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Image
              src="/hero-frames/frame_001.webp"
              alt="Texas Technical Services Custody Ultrasonic Flow Meter"
              fill
              priority
              sizes="100vw"
              className="hero-poster-img"
              style={{
                objectPosition: "50% 50%",
              }}
              suppressHydrationWarning
            />
          </div>

          {/* Full-screen canvas */}
          <canvas
            ref={canvasRef}
            id="hero-canvas"
            role="img"
            aria-label="Exploded 3-D view of a custody ultrasonic flow meter"
            className="absolute inset-0 w-full h-full block z-[1]"
          />

          {/* ── Dedicated Overlay Layer for Cards (fades during cover) ───── */}
          <div
            ref={overlayRef}
            className="overlay absolute inset-0 pointer-events-none z-10"
            style={{ willChange: "opacity" }}
          >

        {/* ── Stage A: hero intro (0 – 25%) — uses .hero-screen CSS class ── */}
        <div
          id="hero-screen"
          className="hero-screen"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="hero-main-row">
            {/* Left glass card */}
            <div className="hero-glass-card hero-stage-card">
              <div className="hero-card-content">
                <div className="hero-badge">
                  <span className="badge-dot" />
                  <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
                </div>
                <h1 className="hero-title">
                  Flow Measurement &amp;<br />Control System Solutions
                </h1>
                <p className="hero-desc">
                  Where flow measurement challenges meet solutions. Expert metering consultants
                  with in-depth knowledge of API, AGA, and custody metering standards.
                </p>
              </div>
              <div className="hero-cta-group">
                <Link href="/services/" className="btn btn-primary" id="hero-btn-know-more">Know More &rarr;</Link>
                <Link href="/products/" className="btn btn-secondary" id="hero-btn-products">Our Products</Link>
              </div>
            </div>

            {/* Right showcase slider */}
            <div className="hero-right-col">
              <div className="hero-showcase-card" id="hero-showcase">
                <div className="showcase-top-bar">
                  <div className="showcase-tag-pill">
                    <span className="play-icon">&#9658;</span>
                    <span id="showcase-tag">AUTOMATION</span>
                  </div>
                  <div className="showcase-certs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/about/cert-iso9001.png"       alt="ISO 9001"    className="showcase-cert-icon" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/about/cert-iso14001.png"      alt="ISO 14001"   className="showcase-cert-icon" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/about/cert-iso45001.png"      alt="ISO 45001"   className="showcase-cert-icon" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/about/cert-accurate-white.png" alt="Accredited" className="showcase-cert-icon" />
                  </div>
                </div>
                <div className="showcase-media-stage" id="showcase-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img  src="/homevideos/homebannerimage.jpg"                alt="Industrial Services" className="showcase-media-item" data-index="0" />
                  <video src="/homevideos/Automated-1-2.mp4"  poster="/homevideos/Automated-1-2-poster.jpg"  className="showcase-media-item active" data-index="1" autoPlay muted loop playsInline />
                  <video src="/homevideos/newproduct.mp4"     poster="/homevideos/newproduct-poster.jpg"     className="showcase-media-item"        data-index="2" muted loop playsInline />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img  src="/homevideos/INSPECTION-AND-TESTING1.jpg"       alt="NDT and Testing"    className="showcase-media-item" data-index="3" />
                </div>
                <div className="showcase-tabs">
                  <button type="button" className="showcase-tab"       data-index="0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/homevideos/homebannerimage.jpg"           alt="" className="tab-thumb" /><span>Industrial</span>
                  </button>
                  <button type="button" className="showcase-tab active" data-index="1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/homevideos/Automated-1-2-poster.jpg"     alt="" className="tab-thumb" /><span>Automation</span>
                  </button>
                  <button type="button" className="showcase-tab"       data-index="2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/homevideos/newproduct-poster.jpg"        alt="" className="tab-thumb" /><span>Metering</span>
                  </button>
                  <button type="button" className="showcase-tab"       data-index="3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/homevideos/INSPECTION-AND-TESTING1.jpg" alt="" className="tab-thumb" /><span>NDT &amp; Test</span>
                  </button>
                </div>
                <div className="showcase-nav-bar">
                  <button type="button" className="showcase-arrow"    id="showcase-prev" aria-label="Previous slide">&larr;</button>
                  <span   className="showcase-counter"                id="showcase-counter">02 / 04</span>
                  <button type="button" className="showcase-next-btn" id="showcase-next">NEXT &rarr;</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="hero-stats-strip" id="hero-stats-strip">
            <div className="stat-strip-item"><span className="stat-strip-prefix">/01</span><span className="stat-strip-num">18+</span><span className="stat-strip-label">Years Experience</span></div>
            <div className="stat-strip-item"><span className="stat-strip-prefix">/02</span><span className="stat-strip-num">8</span><span className="stat-strip-label">Industries Served</span></div>
            <div className="stat-strip-item"><span className="stat-strip-prefix">/03</span><span className="stat-strip-num">200+</span><span className="stat-strip-label">Approved Clients</span></div>
            <div className="stat-strip-item"><span className="stat-strip-prefix">/04</span><span className="stat-strip-num">16+</span><span className="stat-strip-label">Global Vendors</span></div>
          </div>
        </div>

        {/* ── Stage B: what we do (22–64%) — uses .what-we-do-screen CSS ── */}
        <div
          id="what-we-do-screen"
          className="what-we-do-screen"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="what-we-do-container">
            <div className="what-we-do-left hero-stage-card">
              <div className="what-we-do-eyebrow">
                <span className="eyebrow-bar" />
                <span>WHAT WE DO</span>
                <span className="eyebrow-bar" />
              </div>
              <h2 className="what-we-do-title">
                Precision solutions for critical industries
              </h2>
              <p className="what-we-do-desc">
                Precision-engineered turnkey architectures across flow measurement,
                in-situ inspection, and industrial automation — trusted by leading
                operators since 2008.
              </p>
            </div>
            <div className="what-we-do-cards">
              <div className="solution-card card-interactive is-clickable">
                <div className="solution-card-top">
                  <div className="solution-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <span className="solution-badge">01</span>
                </div>
                <h3 className="solution-title">Flow Measurement &amp; Control</h3>
                <Link href="/service/flow-measurement-solutions/" className="solution-link"><span>EXPLORE</span><span className="chevron">&rsaquo;</span></Link>
                <span className="solution-watermark">01</span>
              </div>
              <div className="solution-card card-interactive is-clickable">
                <div className="solution-card-top">
                  <div className="solution-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31L4.15 19.8A2 2 0 0 0 5.86 23h12.28a2 2 0 0 0 1.71-3.2L14 9.31V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="6" y1="18" x2="18" y2="18"/></svg>
                  </div>
                  <span className="solution-badge">02</span>
                </div>
                <h3 className="solution-title">Inspection &amp; Testing</h3>
                <Link href="/service/inspection-testing/" className="solution-link"><span>EXPLORE</span><span className="chevron">&rsaquo;</span></Link>
                <span className="solution-watermark">02</span>
              </div>
              <div className="solution-card card-interactive is-clickable">
                <div className="solution-card-top">
                  <div className="solution-icon-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>
                  </div>
                  <span className="solution-badge">03</span>
                </div>
                <h3 className="solution-title">Industrial Automation</h3>
                <Link href="/service/industrial-automation/" className="solution-link"><span>EXPLORE</span><span className="chevron">&rsaquo;</span></Link>
                <span className="solution-watermark">03</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stage C: custody metering (60–98%) — uses .card-custody-automation CSS ── */}
        <div
          id="card-c"
          className="card-c card-custody-automation hero-stage-card"
          style={{ willChange: "opacity, transform" }}
        >
          {/* Top red accent bar following the card's rounded corners */}
          <div className="card-top-accent-bar" aria-hidden="true" />

          {/* Background pipe/flange image clipped inside card */}
          <div className="card-bg-flange-layer" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-frames/frame_300.webp"
              alt=""
              className="card-bg-flange-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Gradient overlay above image and below text */}
          <div className="card-bg-gradient-overlay" aria-hidden="true" />

          {/* Foreground content wrapper */}
          <div className="card-content-wrapper">
            <div className="pill-badge">WHAT WE DO</div>
            <h2 className="card-title">
              Engineered Excellence in<br />Custody Metering &amp; Automation
            </h2>
            <p className="card-desc">
              Extensive expertise in liquid and gas custody metering, Industrial Automation, and
              Inspection &amp; Testing. Our services cover metering control upgrades, maintenance,
              validation, and specialised consultancy.
            </p>
            <p className="card-desc sub">
              Committed to end-to-end metering solutions through strategic OEM partnerships —
              metering skids, flow computers, CEMS analysers, and field instruments across oil
              &amp; gas, power, and commercial sectors.
            </p>
            <div className="card-cta-group">
              <Link href="/contacts/" className="btn btn-primary"   id="btn-custody-contact">Contact Us &rarr;</Link>
              <Link href="/services/" className="btn btn-secondary" id="btn-custody-services">Our Services &rsaquo;</Link>
            </div>
          </div>
        </div>

          {/* ── End Overlay Layer ────────────────────────────────────────── */}
          </div>

        {/* ── End Reactive Hero Content Container ────────────────────────── */}
        </div>

        {/* ── Accessible Interactive Stage Indicator (3 Plain Dots) ────────── */}
        <nav
          ref={stageIndicatorRef}
          className="hero-stage-indicator"
          aria-label="Hero stages"
        >
          {[
            { id: 1, name: "Flow Measurement" },
            { id: 2, name: "Industrial Automation" },
            { id: 3, name: "Inspection & Testing" },
          ].map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                aria-label={`Show stage ${stage.id}: ${stage.name}`}
                aria-current={isActive ? "true" : undefined}
                className={`hero-stage-dot ${isActive ? "active" : ""}`}
                onClick={() => scrollToStage(stage.id)}
              >
                <span className="hero-stage-dot-shape" />
              </button>
            );
          })}
        </nav>

        {/* Optional dim overlay (COVER_DIM default 0 = disabled) */}
        {COVER_DIM > 0 && (
          <div
            ref={dimOverlayRef}
            className="absolute inset-0 pointer-events-none z-20 bg-black opacity-0"
          />
        )}

      </div>
    </section>
  );
}
