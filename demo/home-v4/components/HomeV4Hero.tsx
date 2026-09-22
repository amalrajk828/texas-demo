"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import "./hero-v4.css";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — industrial flow measurement and control systems facility",
    tag: "Industrial Services",
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Industrial Process Automation — PLC SCADA automation systems by leading automation company TTS",
    tag: "Automation",
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    poster: "/homevideos/newproduct-poster.jpg",
    alt: "Flow Measurement and Control System Solutions — liquid hydrocarbon and gas metering by TTS",
    tag: "Metering",
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing services — NDT, mechanical testing, and specialized inspection by TTS",
    tag: "NDT & Testing",
  },
] as const;

const STATS = [
  { num: "18+", label: "Years" },
  { num: "8",   label: "Industries" },
  { num: "200+", label: "Clients" },
  { num: "16+", label: "Vendors" },
];

const DURATION = 7000;

export default function HomeV4Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Right-side slider state
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const slideVideoRef = useRef<HTMLVideoElement | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    startRef.current = null;
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
    startRef.current = null;
  }, []);

  // Auto-advance timer for right-side slider
  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent((c) => (c + 1) % SLIDES.length);
        startRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [current, paused]);

  // Restart slide video when current slide changes
  useEffect(() => {
    const v = slideVideoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [current]);

  // Motion-preference listener: pause on prefers-reduced-motion, play otherwise
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) {
        videoRef.current?.pause();
        slideVideoRef.current?.pause();
      } else {
        videoRef.current?.play().catch(() => {});
        slideVideoRef.current?.play().catch(() => {});
      }
    };

    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="hero-v4-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 1. Looping video background with forest-green fallback */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 90% 65% at 50% 15%, #3d5c47 0%, #1a2e1a 52%, #0d1810 100%)",
        }}
      >
        <video
          ref={videoRef}
          src="/assets/integrated-loop.mp4"
          poster="/assets/integrated-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Dark forest overlay preserves the existing foreground contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle 800px at 50% 12%, rgba(61,92,71,0.26) 0%, transparent 70%), linear-gradient(90deg, rgba(13,24,16,0.78) 0%, rgba(13,24,16,0.52) 50%, rgba(13,24,16,0.68) 100%), linear-gradient(180deg, rgba(13,24,16,0.20) 45%, rgba(13,24,16,0.90) 100%)",
          }}
        />
      </div>

      {/* 2. Hero Content: Standard Container + 2-Column Grid */}
      <div className="hero-v4-container">
        <div className="hero-v4-grid">

          {/* LEFT COLUMN */}
          <div className="hero-v4-left">
            {/* 1. Badge pill (top): light green-gray (#B8C9B8), uppercase, letter-spaced */}
            <div className="hero-v4-badge">
              <Sparkles className="w-3 h-3 text-[#B8C9B8]" />
              <span>FLOW MEASUREMENT</span>
            </div>

            {/* 2. Heading (H1): white (#FFFFFF) for primary words, accent gradient (peach-to-orange #F4C9A0 → #E8935A) */}
            <h1 className="hero-v4-heading">
              <span className="block">Flow Measurement &</span>
              <span className="block">
                <span className="gradient-word">Control System</span> Solutions
              </span>
            </h1>

            {/* 3. Sub-paragraph below heading: soft muted white/sage (#C9D4C9) */}
            <p className="hero-v4-paragraph">
              Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
            </p>

            {/* 4. Two CTA buttons in a row */}
            <div className="hero-v4-cta-group">
              <Link
                href="/service/flow-measurement-solutions/"
                className="hero-v4-btn-primary"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/"
                className="hero-v4-btn-secondary"
              >
                <span>Our Products</span>
              </Link>
            </div>

            {/* 5. Stats row below buttons: numbers white, bold; labels muted sage-gray, uppercase, small */}
            <div className="hero-v4-stats">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="hero-v4-stat-divider" />}
                  <div className="hero-v4-stat-item">
                    <span className="hero-v4-stat-num">{s.num}</span>
                    <span className="hero-v4-stat-label">{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Media Slider (01/04) & Thumbnail Strip */}
          <div className="hero-v4-right">
            {/* Main media frame */}
            <div className="hero-v4-main-slide">
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
              ) : (
                <video
                  ref={slideVideoRef}
                  key={slide.src}
                  src={slide.src}
                  poster={"poster" in slide ? slide.poster : undefined}
                  aria-label={slide.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Gradient Scrim Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">
                  {slide.type === "video" && (
                    <Play className="w-2.5 h-2.5 fill-[#E8935A] text-[#E8935A]" />
                  )}
                  {slide.tag}
                </span>
              </div>

              {/* Counter 01 / 04 */}
              <div className="absolute bottom-3.5 right-3.5 text-white/80 text-[11px] font-mono tracking-[2px] select-none bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>

              {/* Orange Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#E8935A]" />
              <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#E8935A]" />

              {/* Certifications overlay */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate-white.png"].map((src) => (
                  <Link key={src} href="/certifications/" className="relative w-8 h-8 sm:w-10 sm:h-10 block hover:opacity-80 transition-opacity">
                    <Image src={src} alt="" fill className="object-contain" sizes="40px" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Thumbnail filmstrip */}
            <div className="hero-v4-thumb-strip">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                  className={`hero-v4-thumb-btn ${i === current ? "active" : "inactive"}`}
                >
                  <Image
                    src={"poster" in s && s.poster ? s.poster : s.src}
                    alt={s.tag}
                    fill
                    sizes="160px"
                    className="object-cover"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                  <div className="absolute bottom-1 left-1.5 right-1.5 text-left pointer-events-none">
                    <p className="text-[10px] font-medium text-white/90 truncate leading-tight font-sans">
                      {s.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* "NEXT →" control bottom-right below the thumbs */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="hero-v4-next-btn"
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
