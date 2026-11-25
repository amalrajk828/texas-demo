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
  theme?: string;
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
                className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-[56px] select-none bg-white"
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
            const THEME_CYCLE = ["red", "navy", "orange", "green", "purple", "teal"] as const;
            const cardTheme = card.theme || THEME_CYCLE[idx % THEME_CYCLE.length];

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
                {/* ── Card Box (Scoped Palette Design matching Products/Analyzers Cards) ── */}
                <div
                  className={`capability-card--solid capability-card--${cardTheme} relative w-full h-full text-white select-none ${hasImage ? "has-bg-image" : ""}`}
                  data-theme={cardTheme}
                >
                  {/* Soft Radial Highlight in top-left (matching Products card .flow-card::before) */}
                  <div className="capability-card-highlight" aria-hidden="true" />

                  {hasImage && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        loading="eager"
                        decoding="async"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 z-1"
                        aria-hidden="true"
                      />
                    </>
                  )}

                  {/* ── Top-Right Slide Number (matching Products card .flow-num) ── */}
                  <div className="capability-card-num" aria-hidden="true">
                    ({String(idx + 1).padStart(2, "0")})
                  </div>

                  {/* ── Top-Left: Label (kicker), Heading, Description ── */}
                  <div className="capability-card-main">
                    {card.kicker && (
                      <div className="capability-card-kicker">
                        {card.kicker}
                      </div>
                    )}
                    <h3 className="capability-card-title">{card.title}</h3>
                    <p className="capability-card-desc">{card.description}</p>
                  </div>

                  {/* ── Bottom-Left: Small text meta (matching Products card .flow-meta) ── */}
                  <div className="capability-card-meta">
                    <b className="capability-card-meta-label">{card.kicker || "CAPABILITY"}</b>
                    <span className="capability-card-meta-sub">
                      Capability {String(idx + 1).padStart(2, "0")} · Approved Engineering
                    </span>
                  </div>

                  {/* ── Bottom-Right: Action Area (Tags pills + Translucent Icon box) ── */}
                  <div className="capability-card-action">
                    {card.tags && card.tags.length > 0 && (
                      <div className="capability-card-tags">
                        {card.tags.map((tag) => (
                          <span key={tag} className="capability-card-tag">
                            <span className="capability-card-tag-dot" aria-hidden="true" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Translucent white icon box with rounded corners */}
                    <div className="capability-card-icon" aria-hidden="true">
                      {card.icon ? (
                        card.icon
                      ) : (
                        <span className="font-mono font-bold text-base">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>
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
        /* ==========================================================================
           Core Capabilities Palette Card (.capability-card--solid)
           Scoped palette design matching Products & Analyzers cards
           ========================================================================== */
        :root, .tss-deck {
          --card-red: #a11d1d;
          --card-navy: #1f2c4b;
          --card-orange: #ba4913;
          --card-green: #1b4d3e;
          --card-purple: #3e2752;
          --card-teal: #1d4354;
        }

        .capability-card--solid {
          --card-color: var(--card-red, #a11d1d);
          background-color: var(--card-color);
          color: #ffffff;
          padding: 40px 46px 36px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          grid-template-rows: auto 1fr auto;
          column-gap: 36px;
          box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(255, 255, 255, 0.18) inset;
          overflow: hidden;
          height: 100%;
          border-radius: 22px;
          position: relative;
          box-sizing: border-box;
          transition: background-color 0.35s ease;
        }

        /* ── Slide Theme Mappings (derived via single --card-color variable) ── */
        .capability-card--solid[data-theme="red"],
        .capability-card--red {
          --card-color: var(--card-red, #a11d1d);
        }

        .capability-card--solid[data-theme="navy"],
        .capability-card--navy {
          --card-color: var(--card-navy, #1f2c4b);
        }

        .capability-card--solid[data-theme="orange"],
        .capability-card--orange {
          --card-color: var(--card-orange, #ba4913);
        }

        .capability-card--solid[data-theme="green"],
        .capability-card--green {
          --card-color: var(--card-green, #1b4d3e);
        }

        .capability-card--solid[data-theme="purple"],
        .capability-card--purple {
          --card-color: var(--card-purple, #3e2752);
        }

        .capability-card--solid[data-theme="teal"],
        .capability-card--teal {
          --card-color: var(--card-teal, #1d4354);
        }

        /* Very soft lighter highlight toward top-left (exact replica of .flow-card::before) */
        .capability-card-highlight {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: radial-gradient(90% 70% at 15% 0%, rgba(255, 255, 255, 0.14), transparent 60%);
          z-index: 1;
        }

        /* Slide Number in top-right (matching Products card .flow-num) */
        .capability-card-num {
          grid-column: 2;
          grid-row: 1;
          justify-self: end;
          font-family: var(--font-heading, "Sora", sans-serif);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.70);
          z-index: 2;
          line-height: 1;
        }

        /* Top-Left Main Content */
        .capability-card-main {
          grid-column: 1;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          z-index: 2;
          max-width: 520px;
        }

        /* Small uppercase label / kicker (~70% white) */
        .capability-card-kicker {
          font-family: var(--font-heading, "Sora", sans-serif);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.70);
          margin-bottom: 8px;
        }

        /* Heading: bold white, same font size, weight, line-height as Products card */
        .capability-card-title {
          font-family: var(--font-heading, "Sora", sans-serif);
          font-weight: 700;
          font-size: clamp(24px, 2.7vw, 36px);
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
        }

        /* Description: white at ~85% opacity, matching Products card paragraph */
        .capability-card-desc {
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: clamp(13px, 1.05vw, 14.5px);
          line-height: 1.65;
          opacity: 0.85;
          color: #ffffff;
          margin-top: 14px;
          margin-bottom: 0;
        }

        /* Bottom-Left Meta: matching Products card .flow-meta */
        .capability-card-meta {
          grid-column: 1;
          grid-row: 3;
          align-self: end;
          z-index: 2;
          margin-top: 18px;
        }

        .capability-card-meta-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          font-family: var(--font-heading, "Sora", sans-serif);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .capability-card-meta-sub {
          display: block;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.70);
          font-family: var(--font-body, "Inter", sans-serif);
          margin-top: 2px;
        }

        /* Bottom-Right Action Area: tags and translucent icon box */
        .capability-card-action {
          grid-column: 2;
          grid-row: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 18px;
          z-index: 2;
        }

        .capability-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: flex-end;
          max-width: 380px;
        }

        /* Tags: translucent white pills (rgba(255,255,255,0.15)) with white text and thin light border */
        .capability-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 11.5px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          letter-spacing: 0.01em;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .capability-card-tag:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .capability-card-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.75);
          flex-shrink: 0;
        }

        /* Icon Box: translucent white background, white icon, same rounded corners as now (rounded-2xl) */
        .capability-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.30);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.25);
          flex-shrink: 0;
        }

        .capability-card-icon svg {
          width: 24px;
          height: 24px;
          stroke: #ffffff;
        }

        /* Responsive: Tablet and Mobile adjustments */
        @media (max-width: 767px) {
          .capability-card--solid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            padding: 24px 20px 20px;
            column-gap: 0;
            row-gap: 12px;
            border-radius: 20px;
          }

          .capability-card-num {
            position: absolute;
            top: 22px;
            right: 20px;
            grid-column: 1;
            grid-row: 1;
          }

          .capability-card-main {
            grid-column: 1;
            grid-row: 1;
            max-width: calc(100% - 44px);
          }

          .capability-card-title {
            font-size: 20px;
            line-height: 1.15;
          }

          .capability-card-desc {
            font-size: 12px;
            line-height: 1.55;
            margin-top: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .capability-card-action {
            grid-column: 1;
            grid-row: 2;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-top: 2px;
          }

          .capability-card-tags {
            justify-content: flex-start;
            max-width: 100%;
            gap: 6px;
          }

          .capability-card-tag {
            padding: 4px 9px;
            font-size: 10.5px;
          }

          .capability-card-icon {
            width: 38px;
            height: 38px;
            border-radius: 12px;
          }

          .capability-card-icon svg {
            width: 18px;
            height: 18px;
          }

          .capability-card-meta {
            grid-column: 1;
            grid-row: 3;
            margin-top: 2px;
          }

          .capability-card-meta-label {
            font-size: 11px;
          }

          .capability-card-meta-sub {
            font-size: 9.5px;
          }
        }
      `}</style>
    </section>
  );
}

export default TiltStackScroll;
