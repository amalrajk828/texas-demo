"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import "./hero-v5.css";

// Dynamic import with ssr: false so WebGL animation does not block LCP
const MoltenMetal = dynamic(
  () => import("@/components/MoltenMetal/MoltenMetal"),
  { ssr: false }
);

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
  { prefix: "/01", num: "18+", label: "Years Experience" },
  { prefix: "/02", num: "8",   label: "Industries Served" },
  { prefix: "/03", num: "200+", label: "Approved Clients" },
  { prefix: "/04", num: "16+", label: "Global Vendors" },
];

const DURATION = 7000;

export default function HomeV5Hero() {
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
        slideVideoRef.current?.pause();
      } else {
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
      id="hero-home-v5"
      className="hero-v5-section v5-grid-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background MoltenMetal WebGL animation layer from Home V2 */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <MoltenMetal
          color1="#3D0A0A"
          color2="#E63329"
          color3="#FFD9A0"
          speed={0.3}
          scale={3}
          detail={4}
          glow={1.8}
          coreSize={0.09}
          swirl={0.8}
          fold={-0.2}
          blackPoint={0.08}
          brightness={1.2}
          colorMode="ember"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.25}
          opacity={0.9}
        />
      </div>

      {/* Scrim for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      {/* Hairline subtle top and bottom borders matching Home V2 */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* Hero Content */}
      <div className="hero-v5-container">
        <div className="hero-v5-grid">

          {/* LEFT COLUMN */}
          <div className="hero-v5-left">
            {/* Badge pill: uppercase, letter-spaced, with square accent indicator */}
            <div className="hero-v5-badge">
              <span className="hero-v5-badge-dot" />
              <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
            </div>

            {/* Heading: large scale ~64-72px, bold, tight line-height */}
            <h1 className="hero-v5-heading">
              <span className="block">Flow Measurement &amp;</span>
              <span className="block">Control System Solutions</span>
            </h1>

            {/* Body paragraph */}
            <p className="hero-v5-paragraph">
              Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
            </p>

            {/* CTA buttons */}
            <div className="hero-v5-cta-group">
              <Link
                href="/service/flow-measurement-solutions/"
                className="hero-v5-btn-primary"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/"
                className="hero-v5-btn-secondary"
              >
                <span>Our Products</span>
              </Link>
            </div>

            {/* Stats row with red /01 style prefixes */}
            <div className="hero-v5-stats">
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <div className="hero-v5-stat-divider" />}
                  <div className="hero-v5-stat-item">
                    <span className="hero-v5-stat-prefix">{s.prefix}</span>
                    <span className="hero-v5-stat-num">{s.num}</span>
                    <span className="hero-v5-stat-label">{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Media Slider & Thumbnail Strip */}
          <div className="hero-v5-right">
            {/* Main media frame */}
            <div className="hero-v5-main-slide">
              <span className="v5-corner-indicator" />

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

              {/* Gradient scrim overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-mono font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-[4px]">
                  {slide.type === "video" && (
                    <Play className="w-2.5 h-2.5 fill-[#E53935] text-[#E53935]" />
                  )}
                  {slide.tag}
                </span>
              </div>

              {/* Counter 01 / 04 */}
              <div className="absolute bottom-3.5 right-3.5 text-white/90 text-[11px] font-mono tracking-[2px] select-none bg-black/70 px-2.5 py-1 rounded-[4px] backdrop-blur-sm border border-white/10">
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>

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
            <div className="hero-v5-thumb-strip">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                  className={`hero-v5-thumb-btn ${i === current ? "active" : "inactive"}`}
                >
                  <Image
                    src={"poster" in s && s.poster ? s.poster : s.src}
                    alt={s.tag}
                    fill
                    sizes="160px"
                    className="object-cover"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-black/35 pointer-events-none" />
                  <div className="absolute bottom-1 left-1.5 right-1.5 text-left pointer-events-none">
                    <p className="text-[10px] font-mono font-medium text-white/90 truncate leading-tight">
                      {s.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* "NEXT →" control */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="hero-v5-next-btn"
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
