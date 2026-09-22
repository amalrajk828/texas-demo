"use client";

import "../home-v2-theme.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

// Dynamic import with ssr: false so WebGL animation does not block LCP
const MoltenMetal = dynamic(
  () => import("@/components/MoltenMetal/MoltenMetal"),
  { ssr: false }
);

/* ── Slide data (images + videos matching home-v5 exactly) ── */
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

/* ── Stat data matching home-v5 exactly ── */
const STATS = [
  { prefix: "/01", num: "18+",  label: "Years Experience" },
  { prefix: "/02", num: "8",    label: "Industries Served" },
  { prefix: "/03", num: "200+", label: "Approved Clients" },
  { prefix: "/04", num: "16+",  label: "Global Vendors" },
];

const DURATION = 7000; // ms per slide before auto-advance

export default function HomeV2Hero() {
  // ── Slider state ──
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

  // Auto-advance timer
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

  // Restart slide video when slide changes
  useEffect(() => {
    const v = slideVideoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [current]);

  // Respect prefers-reduced-motion
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
      id="hero-home-v2"
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        paddingTop: "calc(var(--navbar-height, 92px) + 1.5rem)",
        paddingBottom: "3rem",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background: MoltenMetal WebGL ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
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

      {/* ── Scrim for text contrast ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.75) 100%)" }}
      />

      {/* ── Hairline borders ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* ── Hero content ── */}
      <div
        className="relative z-20 w-full mx-auto"
        style={{ maxWidth: 1400, paddingInline: "clamp(20px, 5vw, 40px)", marginBlock: "auto" }}
      >
        {/* 2-column grid: left content | right slider */}
        <div
          className="grid items-center w-full"
          style={{
            gridTemplateColumns: "1fr 1.05fr",
            gap: "clamp(32px, 5vw, 64px)",
          }}
        >

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex flex-col justify-center min-w-0">

            {/* Badge pill */}
            <div
              className="inline-flex items-center gap-2 mb-7 w-fit backdrop-blur-md"
              style={{
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono, monospace)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              <span
                className="shrink-0"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-brand-red, #E53935)",
                  display: "inline-block",
                }}
              />
              <span>FLOW MEASUREMENT &amp; AUTOMATION</span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(2.75rem, 4.8vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              <span className="block">Flow Measurement &amp;</span>
              <span className="block">
                Control System Solutions
              </span>
            </h1>

            {/* Body paragraph */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.75)",
                maxWidth: 520,
                marginBottom: "2.25rem",
                fontWeight: 400,
              }}
            >
              Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.
            </p>

            {/* CTA buttons */}
            <div
              className="flex items-center flex-wrap"
              style={{ gap: 14, marginBottom: "3.5rem" }}
            >
              <Link
                href="/service/flow-measurement-solutions/"
                className="v2-btn-primary hover:-translate-y-0.5"
                style={{
                  padding: "14px 28px",
                  borderRadius: 12,
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products/"
                className="inline-flex items-center justify-center gap-2.5 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
                style={{
                  padding: "14px 28px",
                  borderRadius: 12,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "rgba(255, 255, 255, 0.85)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <span>Our Products</span>
              </Link>
            </div>

            {/* Stats row — /01 prefix style */}
            <div className="flex items-center" style={{ gap: 32 }}>
              {STATS.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: "rgba(255, 255, 255, 0.08)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.72rem",
                        color: "var(--color-brand-red, #E53935)",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {s.prefix}
                    </span>
                    <span
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "#ffffff",
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "rgba(255, 255, 255, 0.5)",
                        fontFamily: "var(--font-mono, monospace)",
                        marginTop: 5,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ══ RIGHT COLUMN: Media Slider + Thumbnail Strip ══ */}
          <div className="flex flex-col min-w-0 w-full">

            {/* Main media frame */}
            <div
              className="relative w-full overflow-hidden group"
              style={{
                aspectRatio: "4/3",
                borderRadius: 8,
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "#141820",
                boxShadow: "0 20px 48px rgba(0, 0, 0, 0.8)",
              }}
            >
              {/* Corner indicator — V2 red accent */}
              <span
                className="absolute z-10 pointer-events-none"
                style={{
                  top: 12,
                  right: 12,
                  width: 6,
                  height: 6,
                  background: "var(--color-brand-red, #E53935)",
                  display: "block",
                }}
              />

              {/* Slide media */}
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

              {/* Gradient scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Tag badge — top-left */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span
                  className="inline-flex items-center gap-1.5 text-white/90 backdrop-blur-md"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    fontSize: "0.625rem",
                    fontFamily: "var(--font-mono, monospace)",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 4,
                  }}
                >
                  {slide.type === "video" && (
                    <Play className="w-2.5 h-2.5 fill-[#E53935] text-[#E53935]" />
                  )}
                  {slide.tag}
                </span>
              </div>

              {/* Counter — bottom-right */}
              <div
                className="absolute bottom-3.5 right-3.5 z-10 select-none backdrop-blur-sm"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "2px",
                  background: "rgba(0,0,0,0.7)",
                  padding: "4px 10px",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>

              {/* Certification logos — bottom-left */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
                {[
                  "/about/cert-iso9001.png",
                  "/about/cert-iso14001.png",
                  "/about/cert-iso45001.png",
                  "/about/cert-uasl.png",
                  "/about/cert-accurate-white.png",
                ].map((src) => (
                  <Link
                    key={src}
                    href="/certifications/"
                    className="relative w-8 h-8 sm:w-10 sm:h-10 block hover:opacity-80 transition-opacity"
                  >
                    <Image src={src} alt="" fill className="object-contain" sizes="40px" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Thumbnail filmstrip */}
            <div
              className="grid mt-4"
              style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
            >
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                  className="relative w-full overflow-hidden p-0 cursor-pointer transition-all duration-200"
                  style={{
                    aspectRatio: "4/3",
                    borderRadius: 6,
                    background: "#141820",
                    border: i === current
                      ? `1px solid var(--color-brand-red, #E53935)`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    opacity: i === current ? 1 : 0.45,
                    boxShadow: i === current
                      ? "0 0 16px rgba(229, 57, 53, 0.50)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (i !== current) {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== current) {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.45";
                    }
                  }}
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
                    <p
                      className="truncate leading-tight"
                      style={{
                        fontSize: "0.625rem",
                        fontFamily: "var(--font-mono, monospace)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {s.tag}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* NEXT → control */}
            <div className="flex justify-end mt-2.5">
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1"
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 0.5)",
                  background: "transparent",
                  border: "none",
                  padding: "4px 8px",
                  fontFamily: "var(--font-mono, monospace)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-brand-red, #E53935)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255, 255, 255, 0.5)";
                }}
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1100px) {
          #hero-home-v2 > div[class*="relative z-20"] > div[class*="grid"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          #hero-home-v2 .stat-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
