"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TiltStackCard {
  title: string;
  kicker?: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  image?: string;
}

export interface TiltStackScrollProps {
  eyebrow?: string;
  heading?: string;
  cards: TiltStackCard[];
  className?: string;
}

export interface CardPose {
  y: number;
  yUnit: "%" | "px";
  rotateX: number;
  scale: number;
  opacity: number;
  brightness: number;
  zIndex: number;
}

/**
 * Calculates the 3D pose for a card at `index` given continuous scroll `progress`.
 * d = progress - index
 * d < 0: incoming card from below (tilted forward, sliding up to 0)
 * d = 0: active card (flat, scale 1, full opacity & brightness)
 * d > 0: past card (tips back, shrinks, darkens)
 */
export function pose(
  progress: number,
  index: number,
  prefersReducedMotion: boolean = false
): CardPose {
  const d = progress - index;

  if (prefersReducedMotion) {
    if (d < -0.5) {
      return { y: 0, yUnit: "%", rotateX: 0, scale: 1, opacity: 0, brightness: 1, zIndex: index };
    }
    if (d < 0) {
      const op = (d + 0.5) / 0.5;
      return {
        y: 0,
        yUnit: "%",
        rotateX: 0,
        scale: 1,
        opacity: Math.max(0, Math.min(1, op)),
        brightness: 1,
        zIndex: 10 + index,
      };
    }
    return {
      y: 0,
      yUnit: "%",
      rotateX: 0,
      scale: 1,
      opacity: Math.max(0, 1 - d * 0.9),
      brightness: 1,
      zIndex: 10 + index,
    };
  }

  // Incoming card (below screen)
  if (d <= -1) {
    return {
      y: 110,
      yUnit: "%",
      rotateX: -16,
      scale: 0.92,
      opacity: 0,
      brightness: 1,
      zIndex: 10 + index,
    };
  }

  if (d < 0) {
    // d in (-1, 0): card slides up into view
    const enterProgress = 1 + d; // 0 -> 1
    const y = (-d) * 105; // 105% down to 0%
    const rotateX = d * 16; // -16deg up to 0deg
    const scale = 0.92 + enterProgress * 0.08; // 0.92 -> 1.0
    const opacity = Math.min(1, Math.max(0, enterProgress * 1.6));
    return {
      y,
      yUnit: "%",
      rotateX,
      scale,
      opacity,
      brightness: 1,
      zIndex: 10 + index,
    };
  }

  // Active or past card (d >= 0)
  // At d = 0: flat & bright
  // As d increases: tips back away (+rotateX), shrinks slightly, and darkens
  const pastD = Math.min(d, 4);
  const y = -pastD * 18; // shifts upward slightly
  const rotateX = Math.min(22, d * 13); // tilts backwards
  const scale = Math.max(0.76, 1 - d * 0.06);
  const opacity = Math.max(0.12, 1 - d * 0.22);
  const brightness = Math.max(0.25, 1 - d * 0.25);

  return {
    y,
    yUnit: "px",
    rotateX,
    scale,
    opacity,
    brightness,
    zIndex: 10 + index,
  };
}

/**
 * Converts a CardPose into a CSS 3D transform string
 */
export function toTransform(p: CardPose): string {
  const yStr = `${p.y}${p.yUnit}`;
  return `translate3d(0, ${yStr}, 0) rotateX(${p.rotateX}deg) scale(${p.scale})`;
}

export function TiltStackScroll({
  eyebrow = "What we do",
  heading = "Our Core Capabilities",
  cards,
  className = "",
}: TiltStackScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressRatio, setProgressRatio] = useState(0);

  const applyPoses = useCallback(
    (currentP: number, reducedMotion: boolean) => {
      cards.forEach((_, idx) => {
        const el = cardRefs.current[idx];
        if (!el) return;
        const currentPose = pose(currentP, idx, reducedMotion);
        el.style.transform = toTransform(currentPose);
        el.style.opacity = currentPose.opacity.toFixed(3);
        el.style.filter = `brightness(${currentPose.brightness.toFixed(3)})`;
        el.style.zIndex = String(currentPose.zIndex);

        // Allow interaction only on active or nearly active card
        const dist = Math.abs(currentP - idx);
        el.style.pointerEvents = dist < 0.4 ? "auto" : "none";
      });
    },
    [cards]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !trackRef.current) return;

    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let lastActive = 0;

    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      reduced = false;
    }

    // Set initial poses and initial active card attribute
    applyPoses(0, reduced);
    cardRefs.current.forEach((el, i) =>
      el?.setAttribute("data-active", String(i === 0))
    );

    // Sync with smooth scroll (Lenis) if present
    const win = window as any;
    const lenis = win.__lenis;
    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };
    if (lenis) {
      lenis.on("scroll", handleLenisScroll);
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        snap: {
          snapTo: 1 / Math.max(1, cards.length - 1),
          duration: { min: 0.25, max: 0.6 },
          ease: "power2.out",
          delay: 0.08,
        },
        onUpdate: (self) => {
          trackRef.current?.classList.add("tss-scrolling");
          clearTimeout(idleTimer);
          idleTimer = setTimeout(() => {
            trackRef.current?.classList.remove("tss-scrolling");
          }, 180);

          const rawP = self.progress * (cards.length - 1);
          setProgressRatio(self.progress);
          const currentActive = Math.min(
            cards.length - 1,
            Math.max(0, Math.round(rawP))
          );
          if (currentActive !== lastActive) {
            lastActive = currentActive;
            setActiveIndex(currentActive);
            cardRefs.current.forEach((el, i) =>
              el?.setAttribute("data-active", String(i === currentActive))
            );
          }
          applyPoses(rawP, reduced);
        },
      });
    }, trackRef);

    return () => {
      clearTimeout(idleTimer);
      if (lenis) {
        lenis.off("scroll", handleLenisScroll);
      }
      ctx.revert();
    };
  }, [cards, applyPoses]);

  const totalCards = cards.length;
  const currentFormatted = String(activeIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalCards).padStart(2, "0");

  return (
    <section
      ref={trackRef}
      className={`tss-track relative w-full ${className}`}
      style={{
        // 100vh of scroll per card ensures smooth pacing
        height: `${Math.max(1, totalCards) * 100}vh`,
      }}
    >
      {/* ── Sticky Stage: 100svh viewport pinned while track scrolls ── */}
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-[56px] select-none bg-gradient-to-b from-[#e8e8e6] via-[#ecece9] to-[#e8e8e6]"
      >
        {/* Subtle Ambient Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* ── Top Header Row (Eyebrow + Heading on left, Counter + Rail on right) ── */}
        <div className="relative z-[5] max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0">
          {/* Left: Eyebrow + Heading */}
          <div className="max-w-xl">
            {eyebrow && (
              <div className="inline-block text-[#9b2c2c] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em] mb-2">
                {eyebrow}
              </div>
            )}
            {heading && (
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
                {heading}
              </h2>
            )}
          </div>

          {/* Right: Counter "01 / 06" and Progress Rail */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
            <div className="flex items-baseline font-mono text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight">
              <span className="text-[#9b2c2c] transition-colors duration-200">
                {currentFormatted}
              </span>
              <span className="text-neutral-400 font-normal text-base sm:text-lg mx-1.5">
                /
              </span>
              <span className="text-neutral-400 text-base sm:text-lg">
                {totalFormatted}
              </span>
            </div>

            {/* Slim Progress Rail */}
            <div
              className="w-28 sm:w-36 h-1.5 bg-neutral-300/80 rounded-full overflow-hidden relative"
              aria-hidden="true"
            >
              <div
                className="h-full bg-[#9b2c2c] rounded-full transition-all duration-150 ease-out"
                style={{
                  width: `${Math.max(8, progressRatio * 100).toFixed(1)}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Card 3D Stage (Cards live here) ── */}
        <div
          className="tss-deck relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center px-4 sm:px-6 my-auto mt-[clamp(28px,6vh,64px)]"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 65%",
          }}
        >
          {cards.map((card, idx) => {
            const hasImage = Boolean(card.image);

            return (
              <div
                key={card.title || idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="tss-card absolute w-full max-w-[880px] h-[min(450px,calc(100%-24px))]"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "50% 90%",
                  willChange: "transform, opacity, filter",
                }}
              >
                {/* ── Card Box ── */}
                <div className="relative w-full h-full rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.38),0_8px_20px_-6px_rgba(0,0,0,0.22)] border border-white/15 text-white flex flex-col justify-between p-6 sm:p-9 md:p-11 select-none">
                  {/* Brand Red Top Line */}
                  <div
                    className="absolute top-0 inset-x-0 h-[4px] bg-[#9b2c2c] z-30"
                    aria-hidden="true"
                  />

                  {/* ── Background ── */}
                  {hasImage ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        loading="eager"
                        decoding="async"
                      />
                      {/* Dark Overlay for Readability */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 z-10"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <>
                      {/* Rich Dark-Red Gradient */}
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #7a1f1f 0%, #461111 48%, #2b0a0a 100%)",
                        }}
                      />
                      {/* Subtle Dot Grid Pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.14] pointer-events-none z-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                        aria-hidden="true"
                      />
                      {/* Subtle Technical Linear Grid Accent */}
                      <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                          backgroundSize: "48px 48px",
                        }}
                        aria-hidden="true"
                      />
                      {/* Ambient Brand Glow in Corner */}
                      <div
                        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#9b2c2c]/30 blur-3xl pointer-events-none z-10"
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {/* ── Glazing Light-Sweep Streak ── */}
                  <span className="tss-glaze-wrap" aria-hidden="true">
                    <span className="tss-glaze" />
                  </span>

                  {/* ── Card Content (Above Overlays) ── */}
                  <div className="relative z-20 w-full flex items-start justify-between gap-4">
                    {/* Top Left Icon */}
                    {card.icon ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#9b2c2c] border border-white/20 text-white flex items-center justify-center shadow-lg shadow-[#9b2c2c]/40 shrink-0">
                        {card.icon}
                      </div>
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#9b2c2c]/60 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    )}

                    {/* Top Right Tag Chips */}
                    {card.tags && card.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-end max-w-xs sm:max-w-md">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-black/40 backdrop-blur-md border border-white/10 text-white/90 select-none"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#9b2c2c] shrink-0"
                              aria-hidden="true"
                            />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Block (Kicker, Title, Description) */}
                  <div className="relative z-20 w-full mt-auto pt-6">
                    {card.kicker && (
                      <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#f28a8a] mb-2">
                        {card.kicker}
                      </div>
                    )}
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white tracking-tight leading-snug sm:leading-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-neutral-200/90 text-xs sm:text-[14.5px] md:text-[15.5px] leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Indicator Hint ── */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between text-[11px] sm:text-xs text-neutral-500 font-medium shrink-0 pt-2">
          <span>Scroll to explore capabilities</span>
          <div className="flex items-center gap-1.5">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === activeIndex
                    ? "w-6 bg-[#9b2c2c]"
                    : "w-1.5 bg-neutral-300"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tss-glaze-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          border-radius: inherit;
          pointer-events: none;
          opacity: 1;
          transition: opacity .25s ease;
        }
        .tss-glaze {
          position: absolute;
          top: -20%;
          left: 0;
          width: 38%;
          height: 140%;
          opacity: 0;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,.04) 30%,
            rgba(255,255,255,.16) 50%,
            rgba(255,255,255,.04) 70%,
            rgba(255,255,255,0) 100%
          );
          filter: blur(10px);
          mix-blend-mode: soft-light;
          transform: translate3d(-160%, 0, 0) skewX(-18deg);
          will-change: transform, opacity;
        }

        /* Only the visible (active) card sweeps, once after it settles, then every ~5s */
        .tss-card[data-active="true"] .tss-glaze {
          animation: tss-glaze-sweep 5s cubic-bezier(.45,.05,.25,1) .5s infinite;
        }
        @keyframes tss-glaze-sweep {
          0%   { transform: translate3d(-160%,0,0) skewX(-18deg); opacity: 0; }
          6%   { opacity: 1; }
          28%  { transform: translate3d(380%,0,0) skewX(-18deg); opacity: 0; }
          100% { transform: translate3d(380%,0,0) skewX(-18deg); opacity: 0; }
        }

        /* Hide while scrolling */
        .tss-track.tss-scrolling .tss-glaze-wrap { opacity: 0; }
        .tss-track.tss-scrolling .tss-glaze { animation: none; }

        @media (prefers-reduced-motion: reduce) {
          .tss-glaze-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}

export default TiltStackScroll;
