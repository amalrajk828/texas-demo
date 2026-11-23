"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useAutoplay } from "@/hooks/use-autoplay";

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  image: string;
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  autoPlay?: boolean;
  intervalMs?: number;
}

/**
 * Featured portrait with subtle brand-red edge sheen and crisp focus
 */
function Featured({
  image,
  alt,
  active = true,
  priority = false,
}: {
  image: string;
  alt: string;
  active?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 transition-all duration-500 ease-out will-change-transform ${
        active
          ? "opacity-100 scale-100 ring-2 ring-[#9b2c2c]/25 shadow-[0_12px_28px_-6px_rgba(155,44,44,0.25)] z-20"
          : "opacity-60 scale-[0.96] shadow-sm z-10"
      }`}
      style={{
        transition:
          "filter 0.5s ease, opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease",
      }}
    >
      <Image
        src={image}
        alt={alt}
        width={242}
        height={242}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover object-[center_18%]"
        style={{
          filter: active
            ? "grayscale(0) contrast(1.06) saturate(1.05)"
            : "grayscale(0.6) contrast(1.02) saturate(0.9)",
          imageRendering: "auto",
          transform: "translateZ(0)",
          transition: "filter 0.5s ease",
        }}
      />
      {/* Subtle brand-red edge light sheen (opacity ~0.22, mix-blend-overlay, no blur) */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.22]"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(155,44,44,0) 35%, rgba(155,44,44,0.4) 55%, rgba(155,44,44,0.85) 100%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * Subtle placeholder cell for empty grid slots (blur 0.5px)
 */
function PlaceholderCell() {
  return (
    <div
      className="w-full h-full rounded-2xl bg-gradient-to-br from-white/90 to-[#f1efed]/80 border border-black/[0.05] backdrop-blur-[0.5px] opacity-70"
      aria-hidden="true"
    />
  );
}

/**
 * Neutral side tile: white-to-#f1efed gradient with a small brand-red user icon (lucide-react User, 28px, 15% opacity)
 */
function SideCell() {
  return (
    <div
      className="w-full h-full rounded-2xl bg-gradient-to-br from-white to-[#f1efed] border border-black/[0.06] flex items-center justify-center opacity-85 shadow-xs"
      aria-hidden="true"
    >
      <User className="w-7 h-7 text-[#9b2c2c]/15" strokeWidth={1.5} />
    </div>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  className = "",
  autoPlay = true,
  intervalMs = 6000,
}: ScrollReelTestimonialsProps) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mq.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    } catch {
      // ignore in older browsers
    }
  }, []);

  const total = testimonials.length;
  const activeTestimonial = testimonials[displayIndex] || testimonials[0];

  // Longest quote text to reserve stable height and prevent layout shift
  const longestQuote = useMemo(() => {
    return testimonials.reduce(
      (max, t) => (t.quote.length > max.length ? t.quote : max),
      testimonials[0]?.quote || ""
    );
  }, [testimonials]);

  const go = useCallback(
    (target: number) => {
      if (isExiting || target === displayIndex) return;
      if (prefersReducedMotion) {
        setDisplayIndex(target);
        return;
      }
      setIsExiting(true);
      setTimeout(() => {
        setDisplayIndex(target);
        setIsExiting(false);
      }, 240);
    },
    [isExiting, displayIndex, prefersReducedMotion]
  );

  const handlePrev = useCallback(() => {
    go(displayIndex === 0 ? total - 1 : displayIndex - 1);
  }, [go, displayIndex, total]);

  const handleNext = useCallback(() => {
    go(displayIndex === total - 1 ? 0 : displayIndex + 1);
  }, [go, displayIndex, total]);

  // Wire up autoplay hook
  const { rootRef, handlers, paused } = useAutoplay<HTMLDivElement>({
    onNext: () => go(displayIndex === total - 1 ? 0 : displayIndex + 1),
    intervalMs,
    enabled: autoPlay && total > 1,
    resetKey: displayIndex,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Calculations for counter-rotating reel vertical translation
  // Cell height approx 110px on desktop, 68px on mobile
  const cellStepDesktop = 118;
  const cellStepMobile = 76;

  // Middle column moves opposite to outer columns
  const middleY = -displayIndex * cellStepDesktop;
  const outerY = displayIndex * (cellStepDesktop * 0.7);

  const middleYMobile = -displayIndex * cellStepMobile;
  const outerYMobile = displayIndex * (cellStepMobile * 0.7);

  const currentFormatted = String(displayIndex + 1).padStart(2, "0");
  const totalFormatted = String(total).padStart(2, "0");

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Testimonials"
      aria-live={paused ? "polite" : "off"}
      {...handlers}
      className={`relative w-full max-w-[1294px] mx-auto rounded-3xl bg-white border border-black/[0.08] border-t-[3px] border-t-[#9b2c2c] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)] overflow-hidden p-6 sm:p-8 lg:p-12 ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14">
        {/* ── Left Column: Counter-Rotating Portrait Reel ── */}
        <div
          className="w-full md:w-[380px] h-48 sm:h-56 md:h-[380px] shrink-0 overflow-hidden relative rounded-2xl bg-[#f7f6f4] border border-black/[0.05] p-2.5 sm:p-3"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          {/* 3 Counter-Rotating Columns */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 h-full">
            {/* Column 1 (Left): Neutral filler reel moving downward */}
            <div
              className="flex flex-col gap-2.5 sm:gap-3 will-change-transform"
              style={{
                transform: `translate3d(0, ${
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? outerYMobile
                    : outerY
                }px, 0)`,
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="aspect-square w-full">
                <PlaceholderCell />
              </div>
              {testimonials.map((_, idx) => (
                <div key={`left-${idx}`} className="aspect-square w-full">
                  <SideCell />
                </div>
              ))}
              <div className="aspect-square w-full">
                <PlaceholderCell />
              </div>
            </div>

            {/* Column 2 (Middle): Active portrait reel moving upward (opposite direction) */}
            <div
              className="flex flex-col gap-2.5 sm:gap-3 will-change-transform"
              style={{
                transform: `translate3d(0, ${
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? middleYMobile
                    : middleY
                }px, 0)`,
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {testimonials.map((t, idx) => {
                const isFeatured = idx === displayIndex;
                return (
                  <div
                    key={`mid-${idx}`}
                    className="aspect-square w-full relative"
                  >
                    <Featured
                      image={t.image}
                      alt={t.alt || `Portrait of ${t.author}`}
                      active={isFeatured}
                      priority={idx < 2}
                    />
                  </div>
                );
              })}
              <div className="aspect-square w-full">
                <PlaceholderCell />
              </div>
            </div>

            {/* Column 3 (Right): Neutral filler reel moving with Column 1 */}
            <div
              className="flex flex-col gap-2.5 sm:gap-3 will-change-transform"
              style={{
                transform: `translate3d(0, ${
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? outerYMobile
                    : outerY
                }px, 0)`,
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {testimonials.map((_, idx) => (
                <div key={`right-${idx}`} className="aspect-square w-full">
                  <SideCell />
                </div>
              ))}
              <div className="aspect-square w-full">
                <PlaceholderCell />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: Text Stage & Controls ── */}
        <div className="flex-1 w-full max-w-[560px] flex flex-col justify-between">
          <div>
            {/* Brand Red Quote Icon (20% opacity) */}
            <Quote
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#9b2c2c]/20 mb-3 sm:mb-4 shrink-0"
              strokeWidth={2.5}
              aria-hidden="true"
            />

            {/* Quote Stage with Invisible Sizer */}
            <div className="relative w-full">
              {/* Invisible sizing copy: min-h-[200px] ensures no layout shift */}
              <div
                className="invisible pointer-events-none select-none min-h-[200px] text-base md:text-lg italic leading-relaxed text-[#555]"
                aria-hidden="true"
              >
                &ldquo;{longestQuote}&rdquo;
              </div>

              {/* Active Animating Quote */}
              <div
                key={displayIndex}
                className={`absolute inset-0 text-base md:text-lg italic leading-relaxed text-[#555] ${
                  isExiting ? "scroll-reel-exit" : ""
                }`}
              >
                &ldquo;
                {activeTestimonial.quote.split("").map((char, i) => (
                  <span
                    key={i}
                    className="scroll-reel-char"
                    style={{
                      animationDelay: prefersReducedMotion
                        ? "0ms"
                        : `${Math.min(i * 3, 260)}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                &rdquo;
              </div>
            </div>
          </div>

          {/* Author, Role & Navigation Row */}
          <div className="mt-6 sm:mt-8 pt-5 border-t border-black/[0.06] flex items-center justify-between gap-4">
            {/* Author info */}
            <div>
              <h4 className="font-heading font-bold text-base sm:text-[17px] text-[#1a1a1a] tracking-tight">
                {activeTestimonial.author}
              </h4>
              {activeTestimonial.role && (
                <p className="text-[13px] text-[#9b2c2c] font-semibold mt-0.5">
                  {activeTestimonial.role}
                </p>
              )}
            </div>

            {/* Navigation: Counter + Arrow Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              {/* "01 / 03" Monospace Counter */}
              <span className="font-mono text-xs sm:text-sm font-medium text-neutral-400 tabular-nums select-none">
                <span className="text-[#1a1a1a] font-semibold">
                  {currentFormatted}
                </span>
                {" / "}
                {totalFormatted}
              </span>

              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-black/10 bg-white hover:border-[#9b2c2c] hover:text-[#9b2c2c] text-neutral-700 flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b2c2c]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-black/10 bg-white hover:border-[#9b2c2c] hover:text-[#9b2c2c] text-neutral-700 flex items-center justify-center transition-colors duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b2c2c]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress bar: 2px, brand red #9b2c2c, 25% opacity track ── */}
      {autoPlay && total > 1 && (
        <div
          className="absolute inset-x-0 bottom-0 h-[2px] bg-[#9b2c2c]/25 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            key={displayIndex}
            className="h-full bg-[#9b2c2c] w-0 scroll-reel-progress-bar"
            style={{
              animation: `scroll-reel-progress ${intervalMs}ms linear forwards`,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ScrollReelTestimonials;
