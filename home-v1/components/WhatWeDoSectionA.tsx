"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Gauge, FlaskConical, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const SERVICES = [
  {
    Icon: Gauge,
    num: "01",
    title: "Flow Measurement & Control",
    desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications.",
    href: "/services/",
  },
  {
    Icon: FlaskConical,
    num: "02",
    title: "Inspection & Testing",
    desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support.",
    href: "/services/",
  },
  {
    Icon: Cpu,
    num: "03",
    title: "Industrial Automation",
    desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors.",
    href: "/services/",
  },
];

// Fanned stack configuration for resting positions (spread deck of cards)
const FAN_CONFIGS = [
  {
    rotate: -5,
    restingX: -36,
    restingY: 6,
    baseZIndex: 30, // Card 1: front-most in resting fan
    bg: "#5a86ad",
  },
  {
    rotate: 0,
    restingX: 0,
    restingY: 0,
    baseZIndex: 20, // Card 2: middle
    bg: "#5a86ad",
  },
  {
    rotate: 5,
    restingX: 36,
    restingY: 6,
    baseZIndex: 10, // Card 3: slightly behind/right
    bg: "#4d7699", // Subtle tonal variation from the same blue family
  },
];

export default function WhatWeDoSectionA() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });

  // References to the desktop cards for GSAP pop-in and pop-up animation
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  // References to mobile cards for GSAP pop-in
  const mobileCardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Entrance pop-in animation: ONE-BY-ONE with distinct time interval (360ms apart)
  const runEntranceAnimation = useCallback(() => {
    const desktopCards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    const mobileCards = mobileCardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    const allCards = [...desktopCards, ...mobileCards];
    if (!allCards.length) return;

    if (reducedMotion) {
      gsap.killTweensOf(allCards);
      gsap.set(allCards, { scale: 1, rotate: 0, x: 0, y: 0 });
      gsap.to(allCards, { opacity: 1, duration: 0.35, overwrite: "auto" });
      return;
    }

    // Desktop Cards: pop in one at a time at their fanned position
    desktopCards.forEach((card, i) => {
      const cfg = FAN_CONFIGS[i % FAN_CONFIGS.length];
      gsap.killTweensOf(card);
      gsap.fromTo(
        card,
        {
          scale: 0,
          opacity: 0,
          rotate: cfg.rotate,
          x: cfg.restingX,
          y: cfg.restingY,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: cfg.rotate,
          x: cfg.restingX,
          y: cfg.restingY,
          duration: 0.95,
          ease: "elastic.out(1, 0.5)",
          delay: i * 0.36, // 0ms, 360ms, 720ms: clear visible time interval
          overwrite: "auto",
        }
      );
    });

    // Mobile Cards: pop in one at a time
    mobileCards.forEach((card, i) => {
      const rot = [-3, 0, 3][i % 3];
      gsap.killTweensOf(card);
      gsap.fromTo(
        card,
        {
          scale: 0,
          opacity: 0,
          rotate: rot,
          y: 10,
        },
        {
          scale: 1,
          opacity: 1,
          rotate: rot,
          y: 0,
          duration: 0.95,
          ease: "elastic.out(1, 0.5)",
          delay: i * 0.36,
          overwrite: "auto",
        }
      );
    });
  }, [reducedMotion]);

  // Reset cards to scale 0, opacity 0 when leaving section so it replays fresh
  const resetCards = useCallback(() => {
    const desktopCards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    const mobileCards = mobileCardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    const allCards = [...desktopCards, ...mobileCards];
    if (!allCards.length) return;

    gsap.killTweensOf(allCards);
    setHoveredIdx(null);

    desktopCards.forEach((card, i) => {
      const cfg = FAN_CONFIGS[i % FAN_CONFIGS.length];
      gsap.set(card, {
        scale: reducedMotion ? 1 : 0,
        opacity: 0,
        rotate: reducedMotion ? 0 : cfg.rotate,
        x: reducedMotion ? 0 : cfg.restingX,
        y: reducedMotion ? 0 : cfg.restingY,
      });
    });

    mobileCards.forEach((card, i) => {
      const rot = [-3, 0, 3][i % 3];
      gsap.set(card, {
        scale: reducedMotion ? 1 : 0,
        opacity: 0,
        rotate: reducedMotion ? 0 : rot,
        y: 0,
      });
    });
  }, [reducedMotion]);

  // Handle hover pop-up on desktop cards
  const handleCardHover = useCallback(
    (idx: number) => {
      setHoveredIdx(idx);
      const cards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      cards.forEach((card, i) => {
        const cfg = FAN_CONFIGS[i % FAN_CONFIGS.length];
        if (i === idx) {
          if (reducedMotion) {
            gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
          } else {
            // Popped-up card: lifts up -18px, scales 1.05, straightens toward 0deg
            gsap.to(card, {
              scale: 1.05,
              x: cfg.restingX,
              y: cfg.restingY - 18,
              rotate: 0,
              opacity: 1,
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else {
          // Push non-hovered cards slightly away to give clear space to the active card
          const shift = i < idx ? -22 : 22;
          if (reducedMotion) {
            gsap.to(card, { opacity: 0.78, duration: 0.2, overwrite: "auto" });
          } else {
            // Non-hovered cards: stay in fanned resting position, softly dim
            gsap.to(card, {
              scale: 0.98,
              x: cfg.restingX + shift,
              y: cfg.restingY,
              rotate: cfg.rotate,
              opacity: 0.78,
              duration: 0.32,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        }
      });
    },
    [reducedMotion]
  );

  // Handle mouse leave on cards container: return all cards smoothly to resting fan
  const handleCardLeave = useCallback(() => {
    setHoveredIdx(null);
    const cards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    cards.forEach((card, i) => {
      const cfg = FAN_CONFIGS[i % FAN_CONFIGS.length];
      if (reducedMotion) {
        gsap.to(card, { opacity: 1, duration: 0.2, overwrite: "auto" });
      } else {
        gsap.to(card, {
          scale: 1,
          x: cfg.restingX,
          y: cfg.restingY,
          rotate: cfg.rotate,
          opacity: 1,
          duration: 0.32,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
  }, [reducedMotion]);

  // Re-trigger animation on stage visibility events (CrossFadeStage fixed-viewport scroll engine)
  useEffect(() => {
    const handleSectionVisibility = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; isWinner: boolean; isVisible: boolean }>;
      if (customEvent.detail?.id === "section-whatwedo-a") {
        if (customEvent.detail.isWinner) {
          runEntranceAnimation();
        } else {
          resetCards();
        }
      }
    };

    window.addEventListener("v1-section-visibility", handleSectionVisibility);
    return () => window.removeEventListener("v1-section-visibility", handleSectionVisibility);
  }, [runEntranceAnimation, resetCards]);

  // Secondary trigger using IntersectionObserver (useInView) for stacked mode / fallback
  const prevInViewRef = useRef(false);
  useEffect(() => {
    if (isInView && !prevInViewRef.current) {
      runEntranceAnimation();
    } else if (!isInView && prevInViewRef.current) {
      resetCards();
    }
    prevInViewRef.current = isInView;
  }, [isInView, runEntranceAnimation, resetCards]);

  // Initial mount check
  useEffect(() => {
    const parent = containerRef.current?.closest('[data-stage-active="true"]');
    if (parent || isInView) {
      runEntranceAnimation();
    } else {
      resetCards();
    }
  }, [runEntranceAnimation, resetCards, isInView]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = hoveredIdx === null ? 0 : (hoveredIdx + 1) % SERVICES.length;
      handleCardHover(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = hoveredIdx === null ? SERVICES.length - 1 : (hoveredIdx - 1 + SERVICES.length) % SERVICES.length;
      handleCardHover(prev);
    } else if (e.key === "Escape") {
      handleCardLeave();
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="What We Do"
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{
        paddingLeft: "clamp(16px, 3.5vw, 48px)",
        paddingRight: "clamp(16px, 3.5vw, 48px)",
      }}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90,134,173,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10 my-auto">
        {/* ══ LEFT COLUMN (~40%): Label, Heading, Subtext, Indicators ══ */}
        <div className="w-full lg:w-[40%] shrink-0 flex flex-col justify-center">
          {/* Label with animated red line */}
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-[#8a302f]">
              WHAT WE DO
            </span>
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.85rem] font-extrabold tracking-tight text-[#16202b] leading-[1.12] mb-5">
            What precision solutions do we deliver for critical industries?
          </h2>

          {/* Subtext */}
          <motion.p
            className="text-[15px] sm:text-base leading-[1.8] text-[#4a5568] max-w-lg mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Texas Technical Services delivers precision-engineered solutions across flow
            measurement, inspection, and industrial automation — trusted by leading
            operators since 2008.
          </motion.p>

          {/* Panel Hint Indicators (01 / 02 / 03) */}
          <div
            className="flex items-center gap-3"
            role="tablist"
            aria-label="Service panels indicator"
          >
            {SERVICES.map((s, idx) => {
              const isSelected = hoveredIdx === idx;
              return (
                <button
                  key={s.num}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Select ${s.title}`}
                  onClick={() => (hoveredIdx === idx ? handleCardLeave() : handleCardHover(idx))}
                  onMouseEnter={() => handleCardHover(idx)}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    background: isSelected ? "rgba(138,48,47,0.12)" : "rgba(90,134,173,0.14)",
                    border: isSelected
                      ? "1.5px solid #8a302f"
                      : "1px solid rgba(90,134,173,0.28)",
                    boxShadow: "0 2px 8px rgba(20,40,60,0.06)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: isSelected ? "#8a302f" : "#5a86ad",
                      boxShadow: isSelected ? "0 0 8px #8a302f" : "none",
                    }}
                  />
                  <span
                    className="font-mono text-[11px] font-bold tracking-wider"
                    style={{
                      color: isSelected ? "#8a302f" : "#16202b",
                    }}
                  >
                    {s.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ══ RIGHT COLUMN (~60%): Fanned Overlapping Stack Layout ══ */}
        <div className="w-full lg:w-[60%] shrink-0">
          {/* Desktop & Tablet: Horizontal Fanned Overlapping Deck */}
          <div
            className="hidden sm:flex items-center justify-center w-full min-h-[380px] md:min-h-[460px] lg:min-h-[490px] relative py-4 lg:py-6 overflow-visible"
            onMouseLeave={handleCardLeave}
            style={{ perspective: 1200 }}
          >
            {SERVICES.map((svc, idx) => {
              const cfg = FAN_CONFIGS[idx % FAN_CONFIGS.length];
              const isPopped = hoveredIdx === idx;

              // Dynamic z-index layering:
              // - Hovered card is always 50 (front-most)
              // - When a card is hovered, non-hovered cards stack cleanly so they never obscure neighbor text
              // - When no card is hovered, use baseZIndex (Card 0: 30, Card 1: 20, Card 2: 10)
              const cardZIndex = isPopped
                ? 50
                : hoveredIdx !== null
                  ? idx === 1
                    ? 25
                    : idx === 0
                      ? 20
                      : 15
                  : cfg.baseZIndex;

              return (
                <div
                  key={svc.num}
                  ref={(el) => {
                    cardElementsRef.current[idx] = el;
                  }}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isPopped}
                  aria-label={svc.title}
                  onClick={() => (isPopped ? handleCardLeave() : handleCardHover(idx))}
                  onMouseEnter={() => handleCardHover(idx)}
                  onFocus={() => handleCardHover(idx)}
                  onBlur={(e) => {
                    if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                      handleCardLeave();
                    }
                  }}
                  className={`relative rounded-[26px] overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${
                    idx !== 0 ? "-ml-3 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-10" : ""
                  }`}
                  style={{
                    width: "clamp(230px, 21vw, 320px)",
                    minHeight: "clamp(340px, 40vh, 460px)",
                    zIndex: cardZIndex,
                    background: cfg.bg,
                    border: isPopped
                      ? "1.5px solid rgba(255, 255, 255, 0.40)"
                      : "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: isPopped
                      ? "0 24px 50px rgba(15, 30, 50, 0.32), 0 0 24px rgba(138, 48, 47, 0.20)"
                      : "0 12px 30px rgba(20, 40, 60, 0.18)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Top-edge gradient line that lengthens when popped */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] pointer-events-none transition-all duration-300 z-10"
                    style={{
                      width: isPopped ? "90%" : "45%",
                      background: isPopped
                        ? "linear-gradient(90deg, transparent 0%, #8a302f 30%, #ff8583 50%, #8a302f 70%, transparent 100%)"
                        : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    }}
                  />

                  {/* Oversized background outlined number watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 right-2 font-mono text-[92px] lg:text-[110px] font-black pointer-events-none select-none z-0 leading-none transition-opacity duration-300"
                    style={{
                      color: "rgba(255,255,255,0.06)",
                      WebkitTextStroke: "1px rgba(255,255,255,0.12)",
                      opacity: isPopped ? 0.9 : 0.6,
                    }}
                  >
                    {svc.num}
                  </span>

                  {/* Card Content Container */}
                  <div className="relative z-10 p-6 lg:p-7 flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Top row: Rotating Dashed Ring around Icon + Badge Monospace Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative flex items-center justify-center">
                          {/* Radial glow behind active icon */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 w-14 h-14 rounded-full pointer-events-none transition-opacity duration-300"
                            style={{
                              background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                              filter: "blur(8px)",
                              opacity: isPopped ? 1 : 0.35,
                            }}
                          />

                          {/* Rotating Dashed SVG Border */}
                          <svg
                            className="w-13 h-13 animate-spin-slow pointer-events-none"
                            style={{ animation: "spin 18s linear infinite" }}
                            viewBox="0 0 60 60"
                          >
                            <circle
                              cx="30"
                              cy="30"
                              r="27"
                              fill="none"
                              stroke={isPopped ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.32)"}
                              strokeWidth="1.5"
                              strokeDasharray="6 5"
                            />
                          </svg>

                          {/* Icon Container inside ring */}
                          <div
                            className="absolute w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                              background: isPopped ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.14)",
                              border: "1px solid rgba(255,255,255,0.30)",
                            }}
                          >
                            <svc.Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                          </div>
                        </div>

                        {/* Badge Number */}
                        <span
                          className="font-mono text-xs sm:text-sm font-bold tracking-[2px] px-3 py-1 rounded-xl transition-colors duration-300"
                          style={{
                            color: "#ffffff",
                            background: isPopped ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          {svc.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl lg:text-[21px] font-bold text-white leading-snug mb-2 sm:mb-3 tracking-tight">
                        {svc.title}
                      </h3>

                      {/* Description: ONLY rendered/expanded on the active hovered card */}
                      <div
                        className="transition-all duration-300 overflow-hidden"
                        style={{
                          maxHeight: isPopped ? "180px" : "0px",
                          opacity: isPopped ? 1 : 0,
                          marginTop: isPopped ? "0.75rem" : "0rem",
                        }}
                      >
                        <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.65] text-[#dce6f0]">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Link or Resting Indicator */}
                    <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-white/20 min-h-[46px] flex items-center">
                      {isPopped ? (
                        <Link
                          href={svc.href}
                          className="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-[#16202b] shadow-md hover:bg-[#f0f4f8] transition-all text-xs sm:text-[13px] font-bold uppercase tracking-wider"
                        >
                          <span>Learn more about our services</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#8a302f] transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-widest">
                          <span>Explore</span>
                          <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile (<640px): Vertically Compressed Fanned Stack with Tap Pop-Up */}
          <div className="flex sm:hidden flex-col items-center w-full max-w-[340px] mx-auto py-2 overflow-x-hidden">
            {SERVICES.map((svc, idx) => {
              const isPopped = hoveredIdx === idx;
              const rot = [-3, 0, 3][idx % 3];
              const zIndex = isPopped ? 50 : 30 - idx * 10;

              return (
                <div
                  key={svc.num}
                  ref={(el) => {
                    mobileCardElementsRef.current[idx] = el;
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isPopped}
                  onClick={() => setHoveredIdx(isPopped ? null : idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setHoveredIdx(isPopped ? null : idx);
                    }
                  }}
                  className={`w-full rounded-[22px] overflow-hidden p-5 transition-all duration-300 cursor-pointer ${
                    idx !== 0 ? "-mt-16" : ""
                  }`}
                  style={{
                    background: idx === 2 ? "#4d7699" : "#5a86ad",
                    transform: isPopped ? "scale(1.03) translateY(-8px)" : `rotate(${rot}deg)`,
                    zIndex,
                    border: isPopped
                      ? "1.5px solid rgba(255, 255, 255, 0.40)"
                      : "1px solid rgba(255, 255, 255, 0.22)",
                    boxShadow: isPopped
                      ? "0 16px 36px rgba(15, 30, 50, 0.30)"
                      : "0 8px 24px rgba(20, 40, 60, 0.16)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.18)",
                          border: "1px solid rgba(255, 255, 255, 0.25)",
                        }}
                      >
                        <svc.Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                      </div>
                      <span className="text-[16px] font-bold text-white leading-snug">
                        {svc.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-white/90">
                      {svc.num}
                    </span>
                  </div>

                  {/* Expanded details visible when tapped on mobile */}
                  {isPopped && (
                    <div className="mt-4 pt-3 border-t border-white/20">
                      <p className="text-sm text-[#dce6f0] leading-relaxed mb-4">
                        {svc.desc}
                      </p>
                      <Link
                        href={svc.href}
                        className="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-[#16202b] text-xs font-bold uppercase tracking-wider hover:bg-[#f0f4f8] transition-colors"
                      >
                        <span>Learn more about our services</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8a302f]" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
