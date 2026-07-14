"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
      { label: "About Us", href: "/about-us/", primary: true },
      { label: "Our Services", href: "/service/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Industrial Process Automation Solutions — PLC SCADA automation systems by TTS",
    eyebrow: "Industrial Automation",
    heading: ["Industrial Process", "Automation", "Solutions"],
    sub: "Empowering industries through automation. PLC and SCADA-based systems, control integration, and commissioning for oil & gas, manufacturing, and power generation.",
    tag: "Automation",
    light: false,
    ctas: [
      { label: "Know More", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/service/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement and Control System Solutions — liquid hydrocarbon and gas metering by TTS",
    eyebrow: "Flow Measurement Solutions",
    heading: ["Flow Measurement &", "Control System", "Solutions"],
    sub: "Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.",
    tag: "Metering",
    light: false,
    ctas: [
      { label: "Know More", href: "/service/flow-measurement/", primary: true },
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
      { label: "Our Services", href: "/service/", primary: false },
    ],
  },
] as const;

const DURATION = 7000;

const STATS = [
  { num: "15+", label: "Years" },
  { num: "8",   label: "Industries" },
  { num: "200+", label: "Clients" },
  { num: "2",   label: "Countries" },
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
    onTouchEnd:   (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStart.current;
      if (Math.abs(delta) > 50) { delta < 0 ? onLeft() : onRight(); }
      touchStart.current = null;
    },
  };
}

/* ── Component ───────────────────────────────────────────────────── */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const thumbVideoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startRef.current = null;
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  const swipe = useSwipe(next, prev);

  /* Auto‑advance timer */
  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setProgress(0);
        startRef.current = null;
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

  /* Auto-play thumb videos */
  useEffect(() => {
    thumbVideoRefs.current.forEach((v) => { if (v) v.play().catch(() => {}); });
  }, []);

  const slide = SLIDES[current];
  const isLight = slide.light;

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ minHeight: "clamp(680px, 100svh, 920px)", background: "var(--color-brand-navy)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipe}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ background: "var(--background-grid-dark)", backgroundSize: "40px 40px" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute right-0 top-0 w-[60%] h-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at 80% 35%, color-mix(in srgb, var(--color-brand-red) 18%, transparent) 0%, transparent 60%)" }}
      />
      <div
        className="absolute left-0 bottom-0 w-[45%] h-[65%] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at 15% 85%, color-mix(in srgb, var(--color-brand-red) 10%, transparent) 0%, transparent 65%)" }}
      />

      {/* Progress bar — top on desktop, bottom on mobile */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-30 hidden lg:block">
        <div
          className="h-full transition-none"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 80%, #fff))",
          }}
        />
      </div>
      <div className="absolute bottom-16 left-0 right-0 h-[2px] bg-white/5 z-30 lg:hidden">
        <div
          className="h-full transition-none"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 80%, #fff))",
          }}
        />
      </div>

      {/* ── Two-column layout ──────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-5 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_780px] gap-8 lg:gap-14 items-center">

        {/* LEFT: Text column */}
        <div className="flex flex-col justify-center pt-16 pb-8 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={isLight ? "relative" : ""}
            >
              {/* Light-slide frosted card overlay */}
              {isLight && (
                <div
                  className="absolute -inset-8 sm:-inset-10 rounded-3xl -z-10"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                    border: "1px solid rgba(255,255,255,0.40)",
                  }}
                />
              )}

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span
                  className="text-[10px] font-bold tracking-[3px] uppercase"
                  style={{ color: "var(--color-brand-red)" }}
                >
                  {slide.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[clamp(2rem,6vw,3.6rem)] font-black leading-[1.08] mb-6 tracking-tight"
                style={{ color: isLight ? "#111827" : "white" }}
              >
                {slide.heading.map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}
                  </span>
                ))}
              </h1>

              <div
                className="w-10 h-[2px] rounded-full mb-5"
                style={{ background: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.10)" }}
              />

              <p
                className="text-[15px] sm:text-base leading-[1.8] mb-9 max-w-[480px]"
                style={{ color: isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.45)" }}
              >
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-12">
                {slide.ctas.map((cta) =>
                  cta.primary ? (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-[13px] hover:-translate-y-0.5"
                      style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 25%, transparent)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                    >
                      {cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-[13px] backdrop-blur-sm ${
                        isLight
                          ? "border border-gray-200 bg-white/60 text-gray-600 hover:text-gray-900 hover:border-gray-300"
                          : "border border-white/10 hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white"
                      }`}
                    >
                      {cta.label}
                    </Link>
                  )
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 sm:gap-8">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    {i > 0 && (
                      <div
                        className="w-px h-7"
                        style={{ background: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.10)" }}
                      />
                    )}
                    <div>
                      <p
                        className="text-[1.35rem] font-black leading-none"
                        style={{ color: isLight ? "#111827" : "white" }}
                      >
                        {s.num}
                      </p>
                      <p
                        className="text-[10px] tracking-[1.5px] uppercase mt-0.5"
                        style={{ color: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.30)" }}
                      >
                        {s.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Media panel — responsive */}
        <div className="flex flex-col gap-4 justify-center pb-16 pt-4 lg:py-20 w-full max-w-[600px] mx-auto lg:max-w-none">

          {/* Main media frame */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              variants={mediaVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl shadow-black/60"
              style={{ aspectRatio: "16/9", background: "var(--color-brand-navy-mid)" }}
            >
              {slide.type === "image" ? (
                <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="600px" className="object-cover" quality={90} />
              ) : (
                <video ref={mainVideoRef} key={slide.src} src={slide.src} aria-label={slide.alt} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">
                  {slide.type === "video" && <Play className="w-2.5 h-2.5" style={{ fill: "var(--color-brand-red)", color: "var(--color-brand-red)" }} />}
                  {slide.tag}
                </span>
              </div>

              {/* Counter */}
              <div className="absolute bottom-3 right-3 text-white/25 text-[11px] font-mono tracking-[2px] select-none">
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-12 h-[2px]" style={{ background: "var(--color-brand-red)" }} />
              <div className="absolute top-0 left-0 w-[2px] h-12" style={{ background: "var(--color-brand-red)" }} />
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail filmstrip — taller cards */}
          <div className="grid grid-cols-4 gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  i === current ? "opacity-100 ring-2 ring-offset-2" : "opacity-40 hover:opacity-70"
                }`}
                style={{
                  aspectRatio: "4/3",
                  ...(i === current ? {
                    ringColor: "var(--color-brand-red)",
                    outlineColor: "var(--color-brand-navy)",
                  } as React.CSSProperties : {}),
                }}
              >
                {s.type === "image" ? (
                  <Image src={s.src} alt={s.tag} fill sizes="160px" className="object-cover" quality={60} />
                ) : (
                  <video ref={(el) => { thumbVideoRefs.current[i] = el; }} src={s.src} muted loop playsInline className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black/30" />

                {/* Circular progress on active thumb */}
                {i === current && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                      <circle
                        cx="16" cy="16" r="13" fill="none" strokeWidth="2" strokeLinecap="round"
                        stroke="var(--color-brand-red)"
                        strokeDasharray={`${2 * Math.PI * 13}`}
                        strokeDashoffset={`${2 * Math.PI * 13 * (1 - progress / 100)}`}
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                      />
                    </svg>
                  </div>
                )}
                <span className="absolute bottom-1.5 right-1.5 text-white/50 text-[9px] font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="group flex items-center gap-2 text-white/20 hover:text-white/60 text-[11px] font-semibold tracking-[2px] uppercase transition-colors duration-200 self-end"
          >
            Next <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Mobile dot nav — larger dots */}
      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}>
            <span
              className="block h-[4px] rounded-full transition-all duration-300"
              style={{
                width: i === current ? "36px" : "14px",
                background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Left edge accent */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-[2px] pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-brand-red) 30%, transparent), transparent)" }}
      />
    </section>
  );
}
