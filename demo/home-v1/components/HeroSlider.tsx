"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dynamic from "next/dynamic";

const Ferrofluid = dynamic(() => import("./Ferrofluid"), { ssr: false, loading: () => null });

/* ── Slide data ─────────────────────────────────────────────────── */
const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — industrial flow measurement and control systems facility",
    eyebrow: "ISO 9001:2015 Certified · Est. 2008",
    heading: ["Welcome to", "Texas Technical", "Services"],
    sub: "In quality, we believe. Providing flow measurement, inspection, and automation solutions for the world's most demanding industrial environments.",
    tag: "Industrial Services",
    light: false,
    ctas: [
      { label: "About Us", href: "/contacts/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    poster: "/homevideos/Automated-1-2-poster.jpg",
    alt: "Industrial Process Automation — PLC SCADA automation systems by leading automation company TTS",
    eyebrow: "Industrial Automation",
    heading: ["Industrial Process", "Automation", "Solutions"],
    sub: "Empowering industries through industrial automation. PLC SCADA systems, control integration, and commissioning for oil & gas, manufacturing, and power generation.",
    tag: "Automation",
    light: false,
    ctas: [
      { label: "Know More", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    poster: "/homevideos/newproduct-poster.jpg",
    alt: "Flow Measurement and Control System Solutions — liquid hydrocarbon and gas metering by TTS",
    eyebrow: "Flow Measurement Solutions",
    heading: ["Flow Measurement &", "Control System", "Solutions"],
    sub: "Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.",
    tag: "Metering",
    light: false,
    ctas: [
      { label: "Know More", href: "/service/flow-measurement-solutions/", primary: true },
      { label: "Our Products", href: "/products/", primary: false },
    ],
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing services — NDT, mechanical testing, and specialized inspection by TTS",
    eyebrow: "Inspection & Testing",
    heading: ["Inspection", "and", "Testing"],
    sub: "Your partner in inspecting excellence and testing confidence. ISO 14001:2015, ISO 45001:2018, and ISO 9001:2015 certified inspection and NDT services.",
    tag: "NDT & Testing",
    light: false,
    ctas: [
      { label: "Know More", href: "/service/inspection-testing/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
] as const;

const DURATION = 7000;

const STATS = [
  { num: "18+", label: "Years" },
  { num: "8",   label: "Industries" },
  { num: "200+", label: "Clients" },
  { num: "16+", label: "Vendors" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textVariants: Variants = {
  enter:  { opacity: 0, y: 20, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE, delay: 0.15 } },
  exit:   { opacity: 0, y: -15, filter: "blur(4px)", transition: { duration: 0.35, ease: "easeIn" } },
};

const mediaVariants: Variants = {
  enter:  { opacity: 0, scale: 0.94, y: 20 },
  center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.1 } },
  exit:   { opacity: 0, scale: 0.97, y: -10, transition: { duration: 0.35, ease: "easeIn" } },
};

/* ── Swipe hook ──────────────────────────────────────────────────── */
function useSwipe(onLeft: () => void, onRight: () => void) {
  const touchStart = useRef<number | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; },
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? onLeft() : onRight(); }
      touchStart.current = null;
    },
  };
}

/* ── Component ───────────────────────────────────────────────────── */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [, setProgress] = useState(0);
  const progressRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const progressBarDesktopRef = useRef<HTMLDivElement | null>(null);
  const progressBarMobileRef = useRef<HTMLDivElement | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
    startRef.current = null;
    if (progressBarDesktopRef.current) progressBarDesktopRef.current.style.width = '0%';
    if (progressBarMobileRef.current) progressBarMobileRef.current.style.width = '0%';
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
    setProgress(0);
    startRef.current = null;
    if (progressBarDesktopRef.current) progressBarDesktopRef.current.style.width = '0%';
    if (progressBarMobileRef.current) progressBarMobileRef.current.style.width = '0%';
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startRef.current = null;
    if (progressBarDesktopRef.current) progressBarDesktopRef.current.style.width = '0%';
    if (progressBarMobileRef.current) progressBarMobileRef.current.style.width = '0%';
  };

  const swipe = useSwipe(next, prev);

  /* Progress + auto-advance loop */
  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts - (progressRef.current / 100) * DURATION;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      progressRef.current = pct;
      if (progressBarDesktopRef.current) progressBarDesktopRef.current.style.width = `${pct}%`;
      if (progressBarMobileRef.current) progressBarMobileRef.current.style.width = `${pct}%`;
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent((c) => (c + 1) % SLIDES.length);
        progressRef.current = 0;
        startRef.current = null;
        if (progressBarDesktopRef.current) progressBarDesktopRef.current.style.width = '0%';
        if (progressBarMobileRef.current) progressBarMobileRef.current.style.width = '0%';
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, paused]);

  /* Reset video on slide change */
  useEffect(() => {
    const v = mainVideoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); }
  }, [current]);

  const slide = SLIDES[current];
  const isLight = slide.light;

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ minHeight: "100vh", background: "#050505" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipe}
    >
      <style>{`
        @keyframes hero-circle-progress {
          from { stroke-dashoffset: ${2 * Math.PI * 13}; }
          to { stroke-dashoffset: 0; }
        }
        .hero-thumb-progress {
          animation-name: hero-circle-progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
      {/* Ferrofluid WebGL background layer */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.4}
          scale={1.6}
          turbulence={1}
          fluidity={0.15}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.3}
          glow={2}
          flowDirection="down"
          opacity={0.6}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.3}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-30 hidden lg:block">
        <div
          ref={progressBarDesktopRef}
          className="h-full"
          style={{
            width: '0%',
            background: "linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 80%, #fff))",
          }}
        />
      </div>
      <div className="absolute bottom-16 left-0 right-0 h-[2px] bg-white/5 z-30 lg:hidden">
        <div
          ref={progressBarMobileRef}
          className="h-full"
          style={{
            width: '0%',
            background: "linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 80%, #fff))",
          }}
        />
      </div>

      {/* ── Two-column layout ──────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Text content (cols 1–6) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Eyebrow badge */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-5 h-[2px] bg-[#E53935]" />
                  <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#E53935]">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* 3-line heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5 text-white">
                  {slide.heading.map((line, i) => (
                    <span key={i} className="block">
                      {i === 1 ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                          {line}
                        </span>
                      ) : line}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="text-[15.5px] leading-[1.75] max-w-lg mb-8 text-white/65 font-normal">
                  {slide.sub}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 mb-10">
                  {slide.ctas.map((cta) =>
                    cta.primary ? (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[13.5px] text-white bg-[#E53935] hover:bg-[#c62828] transition-all duration-200 shadow-lg shadow-[#E53935]/25 hover:shadow-[#E53935]/40 hover:-translate-y-0.5"
                      >
                        {cta.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[13.5px] transition-all duration-200 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                      >
                        {cta.label}
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </Link>
                    )
                  )}
                </div>

                {/* Key stats row */}
                <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <p className="text-xl sm:text-2xl font-black text-white leading-none mb-1">
                        {s.num}
                      </p>
                      <p className="text-[11px] font-medium tracking-wide uppercase text-white/45">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Visual card (cols 7–12) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[540px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  variants={mediaVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] sm:aspect-[16/10] border border-white/10 bg-[#0c0d12]"
                >
                  {slide.type === "video" ? (
                    <video
                      ref={mainVideoRef}
                      src={slide.src}
                      poster={slide.poster}
                      playsInline
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={current === 0}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 540px"
                    />
                  )}

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase text-white/90 bg-black/50 backdrop-blur-md border border-white/15">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Video indicator badge */}
                  {slide.type === "video" && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/80 bg-black/50 backdrop-blur-md border border-white/10">
                        <Play className="w-2.5 h-2.5 fill-current text-[#E53935]" />
                        HD VIDEO
                      </span>
                    </div>
                  )}

                  {/* Bottom caption bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between z-10">
                    <div>
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-0.5">
                        Slide {current + 1} of {SLIDES.length}
                      </p>
                      <p className="text-sm font-bold text-white leading-snug">
                        {slide.heading.join(" ")}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-white/40">
                      0{current + 1} / 0{SLIDES.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 4 Thumbnails / Pill Switcher */}
              <div className="grid grid-cols-4 gap-2.5 mt-4">
                {SLIDES.map((s, idx) => {
                  const active = idx === current;
                  return (
                    <button
                      key={idx}
                      onClick={() => goTo(idx)}
                      className={`relative group rounded-xl overflow-hidden text-left p-2.5 transition-all duration-300 border ${
                        active
                          ? "bg-white/10 border-[#E53935]/70 shadow-lg shadow-[#E53935]/10"
                          : "bg-white/[0.03] hover:bg-white/[0.07] border-white/8 hover:border-white/20"
                      }`}
                    >
                      {/* Active progress border indicator */}
                      {active && (
                        <div
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E53935]"
                          style={{ width: `${progressRef.current}%` }}
                        />
                      )}
                      <p className="text-[10px] font-mono font-bold leading-none mb-1 text-[#E53935]">
                        0{idx + 1}
                      </p>
                      <p className={`text-[11.5px] font-bold leading-snug truncate transition-colors ${
                        active ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}>
                        {s.tag}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
