"use client";
/* Hero: Stacked — centered headline over full-bleed image, stats row at bottom, grey overlay */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  eyebrow: "ISO 9001:2015 Certified",      heading: "Industrial Measurement & Automation Experts",      sub: "Flow measurement, inspection, and automation services trusted by oil & gas operators since 2008.", cta: "Explore Services", href: "/services/" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     eyebrow: "Industrial Automation",        heading: "End-to-End Process Automation & Control Systems",  sub: "PLC, SCADA, and HMI engineering for oil & gas, manufacturing, and power generation facilities.",  cta: "Know More",        href: "/service/industrial-automation/" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          eyebrow: "Flow Measurement Solutions",   heading: "Custody Transfer & Flow Metering Solutions",       sub: "API, AGA and ISO-compliant metering solutions — flow computers, skids, and calibration services.", cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      eyebrow: "Inspection & Testing",         heading: "NDT, Inspection & Certification Services",         sub: "Comprehensive non-destructive testing and certification with international accreditation.",         cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const STATS = [{ num: "15+", label: "Years" }, { num: "200+", label: "Clients" }, { num: "8", label: "Industries" }, { num: "2", label: "Countries" }];
const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, y: 32 }, center: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, y: -20, transition: { duration: 0.3 } } };
const bgV:   Variants = { enter: { opacity: 0, scale: 1.06 }, center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.4 } } };

export default function HeroStacked() {
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

  useEffect(() => { const v = videoRef.current; if (!v) return; if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); } }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 600, height: "100svh", maxHeight: 900 }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* BG media */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={current} variants={bgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          {slide.type === "image"
            ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="100vw" className="object-cover" quality={90} />
            : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
          {/* Grey-tinted overlay for brand palette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30,30,30,0.72) 0%, rgba(15,15,15,0.82) 100%)" }} />
          <div className="absolute inset-0 opacity-20" style={{ background: "var(--g-section-a)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Progress line */}
      <div className="absolute top-0 inset-x-0 h-[3px] z-30" style={{ background: "rgba(255,255,255,0.12)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      {/* Centered copy */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20 pb-32">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit" className="max-w-4xl">
            <span className="inline-block text-[10px] font-bold tracking-[3.5px] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", color: "var(--color-brand-red)" }}>
              {slide.eyebrow}
            </span>
            <h1 className="text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-black leading-[1.07] tracking-tight text-white mb-5">
              {slide.heading}
            </h1>
            <div className="w-16 h-[3px] rounded-full mx-auto mb-5" style={{ background: "var(--color-brand-red)" }} />
            <p className="text-[16px] sm:text-[18px] leading-[1.8] text-white/70 max-w-2xl mx-auto mb-10">{slide.sub}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-[15px] hover:-translate-y-0.5 transition-all"
                style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 24px color-mix(in srgb, var(--color-brand-red) 45%, transparent)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                {slide.cta} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contacts/" className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-[15px] border text-white hover:border-white/60 transition-all"
                style={{ background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.25)" }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 inset-x-0 z-20" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-8 sm:gap-12">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="w-px h-7 hidden sm:block" style={{ background: "rgba(255,255,255,0.18)" }} />}
                <div>
                  <p className="text-[1.3rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                  <p className="text-[10px] uppercase tracking-[1.5px] font-semibold mt-0.5 text-white/50">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Slide dots */}
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                className="h-[3px] rounded-full transition-all duration-300"
                style={{ width: i === current ? "24px" : "8px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.35)" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
