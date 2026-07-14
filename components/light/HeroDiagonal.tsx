"use client";
/* Hero variant: Split diagonal design.
   Left: solid dark/accent panel with bold text.
   Right: media panel with a diagonal clip-path separating the two.
   Industry feel: Schlumberger / Baker Hughes bold split layout.
*/
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — industrial flow measurement",
    eyebrow: "ISO 9001:2015 Certified · Est. 2008",
    heading: ["Texas Technical", "Services"],
    accent: "Precision. Performance. Partnership.",
    sub: "Comprehensive flow measurement, inspection & automation solutions trusted by leading operators across oil & gas, refinery, and power sectors.",
    ctas: [
      { label: "Our Services", href: "/services/", primary: true },
      { label: "About Us", href: "/about-us/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Industrial Process Automation",
    eyebrow: "Industrial Automation",
    heading: ["Process", "Automation"],
    accent: "PLC · SCADA · HMI · VFD",
    sub: "End-to-end automation engineering — from control system design to commissioning and support for oil & gas and manufacturing plants.",
    ctas: [
      { label: "Know More", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement and Control",
    eyebrow: "Flow Measurement",
    heading: ["Custody", "Metering"],
    accent: "API · AGA · ISO Compliant",
    sub: "Expert metering consultants providing flow computers, metering skids, and custody transfer solutions to international standards.",
    ctas: [
      { label: "Know More", href: "/service/flow-measurement-solutions/", primary: true },
      { label: "Our Products", href: "/products/", primary: false },
    ],
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing",
    eyebrow: "Inspection & Testing",
    heading: ["NDT &", "Inspection"],
    accent: "ISO 9001 · ISO 14001 · ISO 45001",
    sub: "Certified inspection, non-destructive testing, and validation services ensuring compliance across industrial operations.",
    ctas: [
      { label: "Know More", href: "/service/inspection-testing/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
] as const;

const DURATION = 7000;
const STATS = [
  { num: "15+", label: "Years" },
  { num: "200+", label: "Clients" },
  { num: "8", label: "Industries" },
  { num: "2", label: "Countries" },
];
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textV: Variants = {
  enter:  { opacity: 0, x: -28 },
  center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.1 } },
  exit:   { opacity: 0, x: 16, transition: { duration: 0.3 } },
};
const mediaV: Variants = {
  enter:  { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
  exit:   { opacity: 0, transition: { duration: 0.4 } },
};

export default function HeroDiagonal() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const goTo = useCallback((idx: number) => { setCurrent(idx); setProgress(0); startRef.current = null; }, []);

  useEffect(() => {
    if (paused) { if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
      else { setCurrent(c => (c + 1) % SLIDES.length); setProgress(0); startRef.current = null; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, paused]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); }
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "640px", height: "100svh", maxHeight: "920px" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* LEFT PANEL — solid dark with brand colour */}
      <div className="absolute top-0 left-0 bottom-0 w-[55%] z-0"
        style={{ background: "linear-gradient(160deg, #111111 0%, #1a1a1a 100%)" }} />

      {/* RIGHT PANEL — media */}
      <div className="absolute top-0 right-0 bottom-0 w-[55%] z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={mediaV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
            {slide.type === "image"
              ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="60vw" className="object-cover object-center" quality={90} />
              : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
            {/* Diagonal left fade */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #111111 0%, transparent 40%)" }} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Red diagonal accent line */}
      <div className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: "calc(45% - 2px)", width: "4px", background: "var(--color-brand-red)", opacity: 0.9 }} />

      {/* Progress */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)" }} />
      </div>

      {/* Content — left column */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
        <div className="w-full max-w-[500px]">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">

              <span className="inline-block text-[10px] font-bold tracking-[4px] uppercase px-3 py-1.5 rounded-full mb-5 border"
                style={{ color: "var(--color-brand-red)", borderColor: "color-mix(in srgb, var(--color-brand-red) 30%, transparent)", background: "color-mix(in srgb, var(--color-brand-red) 8%, transparent)" }}>
                {slide.eyebrow}
              </span>

              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.95] text-white mb-4 tracking-tight">
                {slide.heading.map((line, i) => (
                  <span key={i} className="block">
                    {i === 0 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}
                  </span>
                ))}
              </h1>

              <p className="text-[11px] font-bold tracking-[3px] uppercase mb-5"
                style={{ color: "color-mix(in srgb, var(--color-brand-red) 70%, white)" }}>
                {slide.accent}
              </p>

              <div className="w-12 h-[2px] rounded-full mb-5" style={{ background: "rgba(255,255,255,0.12)" }} />

              <p className="text-[14px] sm:text-[15px] text-white/65 leading-[1.8] mb-8 max-w-[400px]">{slide.sub}</p>

              <div className="flex flex-wrap gap-3 mb-12">
                {slide.ctas.map(cta =>
                  cta.primary ? (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] transition-all hover:-translate-y-0.5 shadow-lg"
                      style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 20px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                    >
                      {cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border text-white/80 hover:text-white transition-all"
                      style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}>
                      {cta.label} <ChevronRight className="w-4 h-4" />
                    </Link>
                  )
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center py-4" style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.05)" }}>
                    <p className="text-[1.2rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                    <p className="text-[9px] tracking-[1.5px] uppercase mt-1 text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide nav bottom right */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{ width: i === current ? "28px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.2)" }} />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-16 z-20">
        <span className="text-[11px] font-mono text-white/30 tracking-[2px]">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
