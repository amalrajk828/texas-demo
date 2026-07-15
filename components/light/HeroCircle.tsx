"use client";
/* Hero: Circle — white bg, circular media frame right, bold left copy */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  eyebrow: "ISO 9001:2015 · Est. 2008",  heading: ["Industrial", "Measurement", "& Automation"],   sub: "Precision flow measurement, inspection & automation for oil & gas since 2008.", cta: "Explore Services", href: "/services/" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     eyebrow: "PLC · SCADA · HMI",          heading: ["Process", "Automation &", "Control"],          sub: "End-to-end control system engineering for industrial facilities.",             cta: "Know More",        href: "/service/industrial-automation/" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          eyebrow: "Custody Transfer",            heading: ["Flow Metering", "& Calibration", "Solutions"], sub: "API, AGA and ISO-compliant metering skids, computers, and calibration.",       cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      eyebrow: "NDT & QA Certified",          heading: ["Inspection", "& Testing", "Services"],         sub: "ISO-accredited NDT and certification across all industrial sectors.",          cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const CERTS = ["ISO 9001:2015 Certified", "Kuwait & Dubai Operations", "200+ Industrial Clients"];
const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, x: -20 }, center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, x: 12, transition: { duration: 0.28 } } };
const circleV: Variants = { enter: { opacity: 0, scale: 0.9, rotate: -8 }, center: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } } };

export default function HeroCircle() {
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
    <section className="relative w-full overflow-hidden" style={{ minHeight: 600, height: "100svh", maxHeight: 900, background: "var(--g-section-a)" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 h-[4px] z-30" style={{ background: "var(--color-brand-red)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "rgba(0,0,0,0.3)", transition: "none" }} />
      </div>

      {/* Decorative circle bg */}
      <div className="absolute right-[-10%] top-[-10%] w-[70vh] h-[70vh] rounded-full pointer-events-none"
        style={{ background: "color-mix(in srgb, var(--color-brand-red) 4%, var(--g-section-b))", border: `1px solid var(--g-border)` }} />
      <div className="absolute right-[-5%] top-[-5%] w-[55vh] h-[55vh] rounded-full pointer-events-none"
        style={{ background: "color-mix(in srgb, var(--color-brand-red) 3%, var(--g-section-a))", border: `1px solid var(--g-border)` }} />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="flex flex-col justify-center pt-24 pb-10 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              <span className="inline-block text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-full mb-6"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 8%, white)", color: "var(--color-brand-red)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 16%, transparent)" }}>
                {slide.eyebrow}
              </span>

              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4rem] font-black leading-[1.06] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading.map((line, i) => (
                  <span key={i} className="block">{i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}</span>
                ))}
              </h1>

              <p className="text-[16px] leading-[1.8] mb-7 max-w-[440px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>

              <ul className="space-y-2.5 mb-8">
                {CERTS.map(c => (
                  <li key={c} className="flex items-center gap-2.5 text-[14px] font-semibold" style={{ color: "var(--g-heading)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-red)" }} /> {c}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacts/" className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border transition-all"
                  style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)" }}>
                  Contact Us
                </Link>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                    className="h-[3px] rounded-full transition-all duration-300"
                    style={{ width: i === current ? "28px" : "8px", background: i === current ? "var(--color-brand-red)" : "var(--g-border)" }} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — circular frame */}
        <div className="hidden lg:flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={circleV} initial="enter" animate="center" exit="exit"
              className="relative rounded-full overflow-hidden"
              style={{ width: "min(48vh, 480px)", height: "min(48vh, 480px)", border: `6px solid var(--color-brand-red)`, boxShadow: `0 0 0 12px color-mix(in srgb, var(--color-brand-red) 8%, white), 0 32px 80px rgba(0,0,0,0.12)` }}>
              {slide.type === "image"
                ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="500px" className="object-cover" quality={90} />
                : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
            </motion.div>
          </AnimatePresence>

          {/* Red badge */}
          <motion.div key={`badge-${current}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="absolute bottom-16 right-8 rounded-2xl px-5 py-4 text-center"
            style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 24px color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}>
            <p className="text-white text-[1.4rem] font-black leading-none">18+</p>
            <p className="text-white/70 text-[11px] font-semibold mt-1">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
