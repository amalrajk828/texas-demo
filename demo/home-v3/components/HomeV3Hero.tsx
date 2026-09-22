"use client";

import "../home-v3-theme.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import VideoHero from "@/components/VideoHero";

/* ── Slide data (same images/videos as home-v5) ── */
const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — industrial flow measurement and control systems",
    tag: "Industrial Services",
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Industrial Process Automation — PLC SCADA systems",
    tag: "Automation",
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    poster: "/homevideos/newproduct-poster.jpg",
    alt: "Flow Measurement and Control System Solutions",
    tag: "Metering",
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing services — NDT and mechanical testing",
    tag: "NDT & Testing",
  },
] as const;

/* ── Stat row matching home-v5 ── */
const STATS = [
  { prefix: "/01", num: "18+",  label: "Years",    caption: "Years Experience" },
  { prefix: "/02", num: "8",    label: "Industries", caption: "Industries Served" },
  { prefix: "/03", num: "200+", label: "Clients",  caption: "Approved Clients" },
  { prefix: "/04", num: "16+",  label: "Vendors",  caption: "Global Vendors" },
];

/* ── Cert logos row on main image ── */
const CERT_LOGOS = [
  { src: "/about/cert-iso9001.png",        alt: "ISO 9001:2015" },
  { src: "/about/cert-iso14001.png",       alt: "ISO 14001:2015" },
  { src: "/about/cert-iso45001.png",       alt: "ISO 45001:2018" },
  { src: "/about/cert-uasl.png",           alt: "UASL" },
  { src: "/about/cert-accurate-white.png", alt: "Accurate" },
];

const DURATION = 7000;

export default function HomeV3Hero() {
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
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
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
      if (preference.matches) slideVideoRef.current?.pause();
      else slideVideoRef.current?.play().catch(() => {});
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      id="hero-home-v3"
      suppressHydrationWarning
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--surface-deep, #141A22)",
        paddingTop: "calc(var(--navbar-height, 92px) + 1rem)",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Full-section VideoHero background (ambient cinematic motion) */}
      <VideoHero
        src="/assets/tts-hero-video.mp4"
        poster="/assets/tts-hero-poster.jpg"
        crossfadeDuration={600}
        leadTime={0.8}
        className="z-0"
      />

      {/* Dark scrim over video — let it breathe, not too heavy */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,26,34,0.35) 0%, rgba(20,26,34,0.72) 60%, rgba(20,26,34,0.95) 100%)",
        }}
      />

      {/* Ambient teal glow — top right area (behind carousel) */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "5%", right: "5%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(23,112,126,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Hairline borders */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none z-[2]" style={{ background: "var(--line-dark, rgba(255,255,255,0.13))" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none z-[2]" style={{ background: "var(--line-dark, rgba(255,255,255,0.13))" }} />

      {/* Amber accent signal dots */}
      <span
        className="absolute pointer-events-none z-[2]"
        style={{
          top: "38%", left: "42%",
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--accent, #E0A23F)",
          boxShadow: "0 0 10px 3px rgba(224,162,63,0.40)",
          animation: "v3-dot-pulse 2.8s ease-in-out infinite",
        }}
      />

      {/* ── Main two-column layout ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* ── LEFT column ── */}
        <div className="flex flex-col">
          {/* Badge */}
          <div
            suppressHydrationWarning
            className="inline-flex w-fit max-w-full items-center gap-2 self-start px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(23,112,126,0.18)",
              border: "1px solid rgba(23,112,126,0.45)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
            <span
              className="whitespace-nowrap text-[10px] font-bold tracking-[3px] uppercase"
              style={{ color: "var(--primary, #17707E)" }}
            >
              Flow Measurement & Automation
            </span>
          </div>

          {/* Heading — uniform color, no accent word */}
          <h1
            className="font-black leading-[1.06] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
              color: "var(--soft-light, #F4F9F9)",
            }}
          >
            <span className="block">Flow Measurement &</span>
            <span className="block">Control System Solutions</span>
          </h1>

          {/* Description */}
          <p
            className="text-[15.5px] leading-[1.85] max-w-xl mb-8"
            style={{ color: "var(--soft-light-muted, #B9C4C9)" }}
          >
            Precision-engineered flow measurement and automation solutions for oil & gas, power,
            and industrial sectors. ISO 9001:2015 certified, serving the Middle East since 2008.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <Link
              href="/service/flow-measurement-solutions/"
              className="v3-btn-primary"
              style={{ borderRadius: 8 }}
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/"
              className="v3-btn-secondary"
              style={{ borderRadius: 8 }}
            >
              Our Products
            </Link>
          </div>

          {/* Stat row — /01 /02 /03 /04 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div
                key={s.prefix}
                className="rounded-lg px-4 py-3.5 flex flex-col gap-1"
                style={{
                  background: "rgba(20,26,34,0.70)",
                  border: "1px solid var(--line-dark, rgba(255,255,255,0.13))",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="text-[10px] font-mono font-bold tracking-[1.5px]"
                  style={{ color: "var(--primary, #17707E)" }}
                >
                  {s.prefix}
                </span>
                <span
                  className="text-[1.6rem] font-black leading-none"
                  style={{ color: "var(--primary, #17707E)" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-[10px] font-medium tracking-wide uppercase leading-tight"
                  style={{ color: "var(--soft-light-muted, #B9C4C9)" }}
                >
                  {s.caption}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT column — image carousel ── */}
        <div
          className="relative flex flex-col"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main image/video frame */}
          <div
            className="relative overflow-hidden rounded-xl shadow-2xl"
            style={{
              aspectRatio: "4/3",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {/* Slide image or video */}
            {slide.type === "image" ? (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover transition-opacity duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={90}
              />
            ) : (
              <video
                ref={slideVideoRef}
                key={slide.src}
                src={slide.src}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(20,26,34,0.70) 0%, rgba(20,26,34,0.10) 45%, transparent 70%)",
              }}
            />

            {/* Slide counter badge — top left */}
            <div
              className="absolute top-4 left-4 z-10 rounded-md px-3 py-1.5 flex items-center gap-2"
              style={{
                background: "rgba(20,26,34,0.75)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="text-[11px] font-mono font-bold" style={{ color: "var(--primary, #17707E)" }}>
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-mono text-white/40">/</span>
              <span className="text-[11px] font-mono text-white/60">
                {String(SLIDES.length).padStart(2, "0")}
              </span>
              <span
                className="ml-1 text-[10px] font-bold tracking-[2px] uppercase"
                style={{ color: "var(--soft-light-muted, #B9C4C9)" }}
              >
                {slide.tag}
              </span>
            </div>

            {/* Cert logos — bottom left */}
            <div
              className="absolute z-10 flex items-center gap-2"
              style={{ bottom: "1rem", left: "1rem", top: "auto" }}
            >
              {CERT_LOGOS.map((c) => (
                <Link
                  key={c.src}
                  href="/certifications/"
                  className="relative w-7 h-7 block opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image src={c.src} alt={c.alt} fill className="object-contain" sizes="28px" />
                </Link>
              ))}
            </div>

            {/* Certification glass badge — top right, glassmorphism */}
            <div
              className="absolute top-4 right-4 z-10 rounded-xl px-3 py-2 flex items-center gap-2.5 backdrop-blur-md"
              style={{
                background: "rgba(23,112,126,0.22)",
                border: "1px solid rgba(255,255,255,0.22)",
                boxShadow: "0 8px 24px rgba(23,112,126,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <Link href="/certifications/" className="relative w-9 h-9 shrink-0 block">
                <Image src="/about/cert-iso9001.png" alt="ISO 9001:2015" fill className="object-contain" sizes="36px" />
              </Link>
              <div>
                <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">5 Certifications</p>
                <p className="text-white/80 text-[10px] mt-0.5 leading-none">ISO · UASL · Accurate</p>
              </div>
            </div>
          </div>

          {/* Thumbnail filmstrip + NEXT control */}
          <div className="flex items-center gap-2 mt-3">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                className="relative flex-1 overflow-hidden rounded-md transition-all duration-300"
                style={{
                  height: 60,
                  border: i === current
                    ? "2px solid var(--primary, #17707E)"
                    : "2px solid rgba(255,255,255,0.12)",
                  opacity: i === current ? 1 : 0.55,
                  transform: i === current ? "scale(1.04)" : "scale(1)",
                }}
              >
                {s.type === "image" ? (
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="15vw"
                    quality={60}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `url(${s.poster}) center/cover no-repeat`,
                    }}
                  >
                    <Play className="w-4 h-4 text-white drop-shadow-lg" />
                  </div>
                )}
                {/* Active underline */}
                {i === current && (
                  <div
                    className="absolute bottom-0 inset-x-0 h-[3px]"
                    style={{ background: "var(--primary, #17707E)" }}
                  />
                )}
              </button>
            ))}

            {/* NEXT → button */}
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-all duration-200 hover:opacity-100"
              style={{
                background: "rgba(23,112,126,0.18)",
                border: "1px solid rgba(23,112,126,0.40)",
                color: "var(--primary, #17707E)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                opacity: 0.85,
                backdropFilter: "blur(6px)",
                flexShrink: 0,
              }}
            >
              Next
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes v3-dot-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.45); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="v3-dot-pulse"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
