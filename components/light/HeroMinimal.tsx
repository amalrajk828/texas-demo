"use client";
/* Hero variant: Clean minimal — light background, left-aligned, media card floats right.
   Navbar is white (LightHeader). Hero bg is near-white/light-grey with a strong red top bar.
   Professional corporate look — like ABB, Emerson, Honeywell homepages.
*/
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services",
    eyebrow: "ISO 9001:2015 Certified",
    heading: ["Precision Solutions for", "Industrial Operations"],
    sub: "Flow measurement, inspection, and automation services trusted by oil & gas operators since 2008.",
    tag: "Industrial Services",
    ctas: [
      { label: "Explore Services", href: "/services/", primary: true },
      { label: "Contact Us", href: "/contacts/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Process Automation",
    eyebrow: "Industrial Automation",
    heading: ["End-to-End Process", "Automation"],
    sub: "PLC, SCADA, and HMI engineering for oil & gas, manufacturing, and power generation facilities.",
    tag: "Automation",
    ctas: [
      { label: "Know More", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement",
    eyebrow: "Flow Measurement Solutions",
    heading: ["Custody Transfer &", "Flow Metering"],
    sub: "API, AGA and ISO-compliant metering solutions — flow computers, skids, and calibration services.",
    tag: "Metering",
    ctas: [
      { label: "Know More", href: "/service/flow-measurement-solutions/", primary: true },
      { label: "Our Products", href: "/products/", primary: false },
    ],
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection & Testing",
    eyebrow: "Inspection & Testing",
    heading: ["NDT, Inspection &", "Testing Services"],
    sub: "Comprehensive non-destructive testing and certification services with international accreditation.",
    tag: "NDT & QA",
    ctas: [
      { label: "Know More", href: "/service/inspection-testing/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
] as const;

const DURATION = 7000;
const STATS = [
  { num: "15+",  label: "Years of Excellence" },
  { num: "200+", label: "Clients Served" },
  { num: "8",    label: "Industries" },
  { num: "2",    label: "Countries" },
];
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textV: Variants = {
  enter:  { opacity: 0, x: -20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.08 } },
  exit:   { opacity: 0, x: 12, transition: { duration: 0.28 } },
};
const imgV: Variants = {
  enter:  { opacity: 0, scale: 0.96, y: 16 },
  center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.05 } },
  exit:   { opacity: 0, scale: 0.99, transition: { duration: 0.3 } },
};

export default function HeroMinimal() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const thumbVideoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null]);

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

  useEffect(() => { thumbVideoRefs.current.forEach(v => { if (v) v.play().catch(() => {}); }); }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "600px", height: "100svh", maxHeight: "860px", background: "var(--color-section-alt)" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    >
      {/* Strong red top bar */}
      <div className="absolute top-0 left-0 right-0 h-[5px] z-30" style={{ background: "var(--color-brand-red)" }} />

      {/* Progress underlay */}
      <div className="absolute top-[5px] left-0 right-0 h-[2px] z-30" style={{ background: "var(--color-border)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", opacity: 0.4 }} />
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Layout */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center pt-24 pb-10 lg:py-0 lg:w-[50%]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">

              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
              </div>

              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-black leading-[1.08] mb-4 tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                {slide.heading.map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}
                  </span>
                ))}
              </h1>

              <div className="w-12 h-[2px] rounded-full mb-5" style={{ background: "var(--color-brand-red)", opacity: 0.3 }} />

              <p className="text-[15px] leading-[1.8] mb-8 max-w-[460px]" style={{ color: "var(--color-text-muted)" }}>{slide.sub}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                {slide.ctas.map(cta =>
                  cta.primary ? (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 25%, transparent)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                    >
                      {cta.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border transition-all"
                      style={{ color: "var(--color-text-primary)", borderColor: "var(--color-border-accent)", background: "white" }}>
                      {cta.label} <ChevronRight className="w-4 h-4" />
                    </Link>
                  )
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-5 sm:gap-8">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-5 sm:gap-8">
                    {i > 0 && <div className="w-px h-8" style={{ background: "var(--color-border)" }} />}
                    <div>
                      <p className="text-[1.25rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                      <p className="text-[10px] tracking-[1.5px] uppercase mt-0.5 font-semibold" style={{ color: "var(--color-text-muted)" }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — media */}
        <div className="hidden lg:flex flex-col gap-3 justify-center py-20 lg:w-[50%]">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit"
              className="relative rounded-2xl overflow-hidden shadow-2xl border"
              style={{ aspectRatio: "16/10", borderColor: "var(--color-border)", background: "var(--color-border)", boxShadow: "0 24px 64px rgba(0,0,0,0.14)" }}>
              {slide.type === "image"
                ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="600px" className="object-cover" quality={90} />
                : <video key={slide.src} src={slide.src}
                    ref={el => { videoRef.current = el; if (el) { el.currentTime = 0; el.play().catch(() => {}); } }}
                    autoPlay muted loop playsInline className="w-full h-full object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-white/95 text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full shadow-md"
                  style={{ color: "var(--color-brand-red)" }}>
                  {slide.type === "video" && <Play className="w-2.5 h-2.5" fill="currentColor" />}
                  {slide.tag}
                </span>
              </div>

              {/* Accent corners */}
              <div className="absolute top-0 right-0 w-16 h-[3px]" style={{ background: "var(--color-brand-red)" }} />
              <div className="absolute top-0 right-0 w-[3px] h-16" style={{ background: "var(--color-brand-red)" }} />
              <div className="absolute bottom-0 left-0 w-16 h-[3px]" style={{ background: "var(--color-brand-red)" }} />

              {/* Counter */}
              <div className="absolute bottom-3 right-4 text-white/50 text-[11px] font-mono tracking-[2px]">
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-2">
            {SLIDES.map((s, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${i === current ? "opacity-100" : "opacity-40 hover:opacity-65"}`}
                style={{ aspectRatio: "16/10", ...(i === current ? { outline: `2px solid var(--color-brand-red)`, outlineOffset: "2px" } : {}) }}>
                {s.type === "image"
                  ? <Image src={s.src} alt={s.tag} fill sizes="140px" className="object-cover" quality={60} />
                  : <video ref={el => { thumbVideoRefs.current[i] = el; }} src={s.src} muted loop playsInline className="w-full h-full object-cover" />}
                <div className="absolute inset-0 bg-black/20" />
                {i === current && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 -rotate-90" viewBox="0 0 28 28">
                      <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                      <circle cx="14" cy="14" r="11" fill="none" strokeWidth="2" strokeLinecap="round"
                        stroke="var(--color-brand-red)"
                        strokeDasharray={`${2 * Math.PI * 11}`}
                        strokeDashoffset={`${2 * Math.PI * 11 * (1 - progress / 100)}`}
                        style={{ transition: "stroke-dashoffset 0.1s linear" }} />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}>
            <span className="block h-[3px] rounded-full transition-all duration-300"
              style={{ width: i === current ? "24px" : "8px", background: i === current ? "var(--color-brand-red)" : "var(--color-border)" }} />
          </button>
        ))}
      </div>
    </section>
  );
}
