"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import {
  HERO_SLIDES,
  HERO_CERT_BADGES,
  type HeroSlide,
} from "@/src/config/heroSlides";

export interface HeroSliderProps {
  variant?: "v1-bleed" | "v2-boxed";
  slides?: readonly HeroSlide[];
  duration?: number;
  className?: string;
}

export default function HeroSlider({
  variant = "v1-bleed",
  slides = HERO_SLIDES,
  duration = 6000,
  className = "",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  // Reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver to pause when off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (paused || prefersReducedMotion || !isIntersecting) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, duration);

    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion, isIntersecting, total, duration]);

  // Play/pause videos according to active state
  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === current && !prefersReducedMotion) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current, prefersReducedMotion]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Touch swipe support (<640px)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Detect horizontal swipe if deltaX > 40px and dominant over vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const activeSlide = slides[current];

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      role="region"
      aria-label="Flow Measurement and Automation Projects Slider"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ outline: "none" }}
    >
      {/* ── Main Media Panel (Full-bleed right, rounded-3xl) ── */}
      <div
        className="hero-slider-panel relative w-full overflow-hidden"
        style={{
          borderRadius: 24,
          border: "1px solid rgba(58, 110, 165, 0.16)",
          backgroundColor: "#ffffff",
          background: "#ffffff",
          boxShadow: "0 20px 48px rgba(20, 50, 90, 0.10), 0 0 1px rgba(58, 110, 165, 0.12) inset",
          minHeight: "clamp(220px, 30vh, 520px)",
          height: "100%",
        }}
      >
        {/* Red corner accent */}
        <span
          className="absolute z-30 pointer-events-none"
          style={{
            top: 14,
            right: 14,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#8a302f",
            boxShadow: "0 0 10px rgba(138,48,47,0.6)",
          }}
        />

        {/* Slides stack with cross-fade and 1.04→1 scale */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#ffffff]" aria-live="polite">
          {slides.map((s, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={s.src}
                className="hero-slider-slide absolute inset-0 w-full h-full overflow-hidden bg-[#ffffff]"
                style={{
                  borderRadius: 24,
                  opacity: isActive ? 1 : 0,
                  transform:
                    isActive || prefersReducedMotion
                      ? "scale(1)"
                      : "scale(1.04)",
                  transition: prefersReducedMotion
                    ? "opacity 500ms ease"
                    : "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 2 : 1,
                }}
                aria-hidden={!isActive}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${total}: ${s.tag}`}
              >
                {s.type === "image" ? (
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover rounded-[24px]"
                    quality={idx === 0 ? 88 : 75}
                  />
                ) : (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={s.src}
                    poster={s.poster}
                    aria-label={s.alt}
                    muted
                    loop
                    playsInline
                    preload={idx <= 1 ? "metadata" : "none"}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Gradient Scrims: Overlap left edge gradient for depth */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.70) 0%, rgba(238,243,248,0.25) 25%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,50,90,0.15) 0%, transparent 35%, rgba(20,50,90,0.30) 100%)",
          }}
        />

        {/* ── Top-Left: Tag chip ── */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="inline-flex items-center gap-1.5"
            style={{
              background: "rgba(255,255,255,0.94)",
              border: "1px solid rgba(58,110,165,0.16)",
              fontSize: "0.68rem",
              fontFamily: "var(--font-mono, monospace)",
              fontWeight: 700,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: 8,
              color: "#16202b",
              boxShadow: "0 4px 16px rgba(20,50,90,0.08)",
            }}
          >
            {activeSlide.type === "video" && (
              <Play className="w-2.5 h-2.5 fill-[#8a302f] text-[#8a302f]" />
            )}
            {activeSlide.tag}
          </span>
        </div>

        {/* ── Top-Right: Certification badges strip ── */}
        <div className="absolute top-4 right-8 z-20 hidden sm:flex items-center">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(58,110,165,0.16)",
              boxShadow: "0 4px 20px rgba(20,50,90,0.08)",
            }}
          >
            {HERO_CERT_BADGES.map((b) => (
              <Link
                key={b.src}
                href="/certifications/"
                title={b.alt}
                className="relative w-6 h-6 sm:w-7 sm:h-7 block opacity-85 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Desktop: Vertical Thumbnails Stack (along left edge of image) ── */}
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-2.5"
          style={{ width: 140 }}
          role="tablist"
          aria-label="Slider thumbnails"
        >
          {slides.map((s, i) => {
            const isActive = i === current;
            return (
              <button
                key={s.tag}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Show ${s.tag}`}
                onClick={() => goTo(i)}
                className="group relative flex items-center gap-2.5 p-1.5 rounded-xl text-left cursor-pointer transition-all duration-200"
                style={{
                  background: isActive
                    ? "#ffffff"
                    : "rgba(255,255,255,0.90)",
                  border: isActive
                    ? "1.5px solid #8a302f"
                    : "1px solid rgba(58,110,165,0.14)",
                  boxShadow: isActive
                    ? "0 4px 16px rgba(138,48,47,0.22)"
                    : "0 2px 8px rgba(20,50,90,0.06)",
                  backdropFilter: "none",
                }}
              >
                {/* Thumbnail mini preview */}
                <div
                  className="relative w-11 h-8 rounded-lg overflow-hidden shrink-0"
                  style={{ border: "1px solid rgba(58,110,165,0.14)" }}
                >
                  <Image
                    src={s.poster || s.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                  {s.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-2 h-2 fill-white text-white" />
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <span
                    className="block text-[10px] font-mono tracking-wider truncate leading-tight transition-colors"
                    style={{
                      color: isActive ? "#8a302f" : "#16202b",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Bottom-Right: Floating Pill with Prev, Counter, and Next ── */}
        <div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.94)",
            border: "1px solid rgba(58,110,165,0.16)",
            boxShadow: "0 6px 20px rgba(20,50,90,0.10)",
          }}
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="min-w-[40px] min-h-[44px] flex items-center justify-center rounded-full text-[#4a5568] hover:text-[#16202b] transition-colors cursor-pointer"
            style={{ background: "transparent", border: "none" }}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Counter "01 / 04" */}
          <span
            className="font-mono text-[11px] px-2 tracking-widest text-[#16202b] select-none font-semibold"
            style={{ borderLeft: "1px solid rgba(58,110,165,0.16)", borderRight: "1px solid rgba(58,110,165,0.16)" }}
          >
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Next button with "NEXT" text and arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="min-h-[44px] inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono font-bold tracking-wider text-[#16202b] hover:text-[#8a302f] transition-colors cursor-pointer"
            style={{ background: "transparent", border: "none" }}
          >
            <span>NEXT</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8a302f]" />
          </button>
        </div>
      </div>

      {/* ── Tablet (640px-1023px): Horizontal Thumbnails Row ── */}
      <div
        className="hidden sm:flex lg:hidden items-center gap-2 mt-3 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Slider thumbnails mobile"
      >
        {slides.map((s, i) => {
          const isActive = i === current;
          return (
            <button
              key={s.tag}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Slide ${i + 1}: ${s.tag}`}
              onClick={() => goTo(i)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl shrink-0 cursor-pointer transition-all"
              style={{
                background: isActive ? "#ffffff" : "rgba(255,255,255,0.90)",
                border: isActive
                  ? "1.5px solid #8a302f"
                  : "1px solid rgba(58,110,165,0.14)",
                boxShadow: isActive ? "0 0 12px rgba(138,48,47,0.20)" : "none",
              }}
            >
              <div className="relative w-6 h-5 rounded overflow-hidden shrink-0">
                <Image
                  src={s.poster || s.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span
                className="text-[11px] font-mono truncate"
                style={{
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {s.tag}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
