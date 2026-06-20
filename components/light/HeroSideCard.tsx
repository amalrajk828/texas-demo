"use client";
/* Hero: Side Card — full-bleed image right, frosted white card left, grey bg */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  eyebrow: "Oil & Gas Specialists",       heading: "Industrial Measurement & Automation",   sub: "Precision flow measurement, inspection, and automation trusted by leading operators since 2008.", cta: "Explore Services", href: "/service/" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     eyebrow: "Process Automation",          heading: "PLC · SCADA · HMI Engineering",         sub: "End-to-end control system design for oil & gas, power generation, and manufacturing facilities.",  cta: "Know More",        href: "/service/industrial-automation/" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          eyebrow: "Custody Transfer",            heading: "Flow Measurement Solutions",            sub: "API, AGA, ISO-compliant metering — flow computers, metering skids, and calibration services.",    cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      eyebrow: "NDT & QA",                    heading: "Inspection & Testing Services",         sub: "ISO-accredited NDT, functional testing, and certification for all industrial sectors.",           cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, y: 24 }, center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, y: -16, transition: { duration: 0.28 } } };
const imgV:  Variants = { enter: { opacity: 0, scale: 1.06 }, center: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.4 } } };

export default function HeroSideCard() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const goTo = useCallback((idx: number) => { setCurrent(idx); setProgress(0); startRef.current = null; }, []);
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

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

  useEffect(() => { const v = videoRef.current; if (!v) return; if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); } }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 600, height: "100svh", maxHeight: 920, background: "var(--g-section-b)" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* Full-bleed background media */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          {slide.type === "image"
            ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="100vw" className="object-cover" quality={90} />
            : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "var(--g-section-b)", opacity: 0.15 }} />
        </motion.div>
      </AnimatePresence>

      {/* Left frosted card */}
      <div className="absolute inset-y-0 left-0 z-10 hidden lg:flex items-center pl-12 xl:pl-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit"
            className="max-w-[480px] rounded-3xl p-10 xl:p-12"
            style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 32px 80px rgba(0,0,0,0.18)" }}>

            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[10px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
            </div>

            <h1 className="text-[2.2rem] xl:text-[2.8rem] font-black leading-[1.1] tracking-tight mb-4" style={{ color: "var(--g-heading)" }}>
              {slide.heading}
            </h1>

            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>

            <div className="flex items-center gap-2 rounded-lg px-4 py-3 mb-7"
              style={{ background: "color-mix(in srgb, var(--color-brand-red) 6%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 15%, transparent)" }}>
              <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-red)" }} />
              <span className="text-[12px] font-semibold" style={{ color: "var(--g-heading)" }}>ISO 9001:2015 · ISO 14001 · ISO 45001</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg text-[14px] hover:-translate-y-0.5 transition-all"
                style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 14px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contacts/" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-[14px] border transition-all"
                style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "white" }}>
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-6 border-t" style={{ borderColor: "var(--g-border)" }}>
              {[["15+", "Years"], ["200+", "Clients"], ["8", "Industries"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-[1.3rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{n}</p>
                  <p className="text-[10px] uppercase tracking-wide font-semibold mt-0.5" style={{ color: "var(--g-muted)" }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile text */}
      <div className="lg:hidden absolute inset-0 z-10 flex flex-col justify-end px-6 pb-24 pt-28">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
            <span className="text-[10px] font-bold tracking-[3px] uppercase mb-3 block" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
            <h1 className="text-[2rem] font-black leading-[1.1] text-white mb-3">{slide.heading}</h1>
            <p className="text-[14px] text-white/75 mb-5">{slide.sub}</p>
            <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg text-[14px]"
              style={{ background: "var(--color-brand-red)" }}>
              {slide.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide nav — bottom right */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button onClick={prev} aria-label="Previous" className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
          style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}>
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className="h-[3px] rounded-full transition-all duration-300"
              style={{ width: i === current ? "24px" : "8px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.4)" }} />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
          style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

        {/* Progress ring */}
        <svg className="w-10 h-10 -rotate-90 ml-1" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <circle cx="18" cy="18" r="15" fill="none" strokeWidth="2" strokeLinecap="round"
            stroke="var(--color-brand-red)"
            strokeDasharray={`${2 * Math.PI * 15}`}
            strokeDashoffset={`${2 * Math.PI * 15 * (1 - progress / 100)}`}
            style={{ transition: "stroke-dashoffset 0.1s linear" }} />
        </svg>
      </div>
    </section>
  );
}
