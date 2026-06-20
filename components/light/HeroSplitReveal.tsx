"use client";
/* Hero: Split Reveal — left half white/grey, right half pure media, red divider line */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  tag: "Services",   eyebrow: "ISO 9001:2015",            heading: ["Precision Industrial", "Solutions"],           sub: "Flow measurement, inspection & automation for oil & gas since 2008.", cta: "Explore Services", href: "/service/" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     tag: "Automation", eyebrow: "PLC · SCADA · HMI",       heading: ["Process Automation", "& Control"],             sub: "End-to-end control system engineering for industrial facilities.",     cta: "Know More",        href: "/service/industrial-automation/" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          tag: "Metering",   eyebrow: "Custody Transfer",         heading: ["Flow Measurement", "Solutions"],               sub: "API, AGA & ISO compliant metering skids, computers, and calibration.", cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      tag: "NDT & QA",   eyebrow: "ISO Accredited",           heading: ["Inspection &", "Testing Services"],            sub: "NDT, functional testing and certification across all sectors.",         cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, x: -28 }, center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.08 } }, exit: { opacity: 0, x: 14, transition: { duration: 0.28 } } };
const imgV:  Variants = { enter: { opacity: 0, scale: 1.05 }, center: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.35 } } };

export default function HeroSplitReveal() {
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

      <div className="absolute inset-0 grid lg:grid-cols-[55%_45%]">
        {/* LEFT — white/grey panel */}
        <div className="relative flex flex-col justify-center px-10 sm:px-16 lg:px-20 pt-28 pb-12 lg:py-0" style={{ background: "var(--g-section-a)" }}>

          {/* Vertical red rule */}
          <div className="absolute top-0 right-0 bottom-0 w-[4px] z-20" style={{ background: `linear-gradient(to bottom, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 30%, transparent))` }} />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-5"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, white)", color: "var(--color-brand-red)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 16%, transparent)" }}>
                {slide.type === "video" && <Play className="w-2.5 h-2.5" fill="currentColor" />}
                {slide.eyebrow}
              </span>

              <h1 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[4rem] font-black leading-[1.06] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading.map((line, i) => (
                  <span key={i} className="block">{i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}</span>
                ))}
              </h1>

              <p className="text-[16px] leading-[1.8] mb-8 max-w-[420px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 32%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacts/" className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border transition-all"
                  style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)" }}>
                  Contact Us
                </Link>
              </div>

              {/* Slide selector tabs */}
              <div className="flex gap-2 flex-wrap">
                {SLIDES.map((s, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200"
                    style={{
                      background: i === current ? "var(--color-brand-red)" : "var(--g-card-bg)",
                      color: i === current ? "white" : "var(--g-muted)",
                      borderColor: i === current ? "var(--color-brand-red)" : "var(--g-border)",
                    }}>
                    {s.tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar at left bottom */}
          <div className="absolute bottom-0 left-0 right-4 h-[3px]" style={{ background: "var(--g-border)" }}>
            <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
          </div>
        </div>

        {/* RIGHT — media panel */}
        <div className="relative hidden lg:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
              {slide.type === "image"
                ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="45vw" className="object-cover" quality={90} />
                : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)" }} />
            </motion.div>
          </AnimatePresence>

          {/* Tag badge */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={`tag-${current}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute top-10 right-10 z-10 rounded-xl px-4 py-3"
              style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}>
              <p className="text-white text-[10px] font-bold tracking-[2px] uppercase leading-none">{slide.tag}</p>
              <p className="text-white/65 text-[10px] mt-1 leading-none">Certified · Est. 2008</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}>
            <span className="block h-[3px] rounded-full transition-all" style={{ width: i === current ? "24px" : "8px", background: i === current ? "var(--color-brand-red)" : "var(--g-border)" }} />
          </button>
        ))}
      </div>
    </section>
  );
}
