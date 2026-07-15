"use client";
/* Hero: Timeline — top ticker + fullscreen media + bottom white overlay with headline */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  eyebrow: "Flow Measurement",          heading: "Industrial Measurement & Automation Specialists",     sub: "Precision solutions trusted by oil & gas operators since 2008.", cta: "Explore Services", href: "/services/" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     eyebrow: "Process Automation",        heading: "PLC · SCADA · HMI Control System Engineering",        sub: "End-to-end automation for oil & gas, power, and manufacturing.", cta: "Know More",        href: "/service/industrial-automation/" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          eyebrow: "Custody Transfer",          heading: "Flow Measurement & Calibration Solutions",            sub: "API, AGA, ISO-compliant metering and calibration services.",     cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      eyebrow: "NDT & Quality Assurance",   heading: "Inspection, Testing & Certification Services",        sub: "ISO-accredited NDT and testing across all industrial sectors.",  cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const TICKERS = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Est. 2008", "Kuwait & Dubai", "200+ Clients", "18+ Years", "8 Industries", "Custody Transfer", "SCADA / PLC / HMI"];
const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const bgV:   Variants = { enter: { opacity: 0, scale: 1.05 }, center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.4 } } };
const textV: Variants = { enter: { opacity: 0, y: 24 }, center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.15 } }, exit: { opacity: 0, y: -14, transition: { duration: 0.28 } } };

export default function HeroTimeline() {
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
    <section className="relative w-full overflow-hidden" style={{ minHeight: 600, height: "100svh", maxHeight: 920 }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* BG media */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={current} variants={bgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          {slide.type === "image"
            ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="100vw" className="object-cover" quality={90} />
            : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.45) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Top ticker bar */}
      <div className="absolute top-0 inset-x-0 z-30 overflow-hidden" style={{ background: "var(--color-brand-red)", height: "36px" }}>
        <motion.div className="flex items-center h-full gap-8 whitespace-nowrap"
          animate={{ x: [0, -1200] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          {[...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/90 flex items-center gap-4 shrink-0">
              {t} <span className="w-1 h-1 rounded-full bg-white/50" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Progress */}
      <div className="absolute top-[36px] inset-x-0 h-[2px] z-30" style={{ background: "rgba(255,255,255,0.10)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      {/* Bottom white overlay card */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        {/* Frosted base */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-8">
          <div className="rounded-t-3xl px-8 sm:px-12 py-8 sm:py-10"
            style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderTop: `3px solid var(--color-brand-red)` }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit"
                className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                    <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
                  </div>
                  <h1 className="text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-black leading-[1.1] tracking-tight mb-3" style={{ color: "var(--g-heading)" }}>
                    {slide.heading}
                  </h1>
                  <p className="text-[14px] leading-[1.75]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                    {slide.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex gap-2">
                    {SLIDES.map((_, i) => (
                      <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                        className="h-[3px] rounded-full transition-all duration-300"
                        style={{ width: i === current ? "28px" : "10px", background: i === current ? "var(--color-brand-red)" : "var(--g-border)" }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
