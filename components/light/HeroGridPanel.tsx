"use client";
/* Hero: Grid Panel — 3-column image grid right side, bold left copy, light grey bg */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  eyebrow: "ISO 9001:2015 Certified",      heading: ["Industrial Measurement", "& Automation Experts"],            sub: "Flow measurement, inspection, and automation services trusted by oil & gas operators since 2008.", href: "/service/",                          cta: "Explore Services" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     eyebrow: "Industrial Automation",        heading: ["End-to-End Process", "Automation & Control"],                sub: "PLC, SCADA, and HMI engineering for oil & gas, manufacturing, and power generation facilities.",  href: "/service/industrial-automation/",    cta: "Know More" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          eyebrow: "Flow Measurement Solutions",   heading: ["Custody Transfer &", "Flow Metering Solutions"],            sub: "API, AGA and ISO-compliant metering solutions — flow computers, skids, and calibration services.", href: "/service/flow-measurement-solutions/", cta: "Know More" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      eyebrow: "Inspection & Testing",         heading: ["NDT, Inspection &", "Certification Services"],              sub: "Comprehensive non-destructive testing and certification services with international accreditation.", href: "/service/inspection-testing/",       cta: "Know More" },
] as const;

const BULLETS = ["ISO 9001 · 14001 · 45001 Certified", "Serving Kuwait & Dubai since 2008", "200+ industrial clients served"];
const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, x: -20 }, center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.08 } }, exit: { opacity: 0, x: 12, transition: { duration: 0.28 } } };
const imgV: Variants  = { enter: { opacity: 0, scale: 1.04 }, center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.35 } } };

export default function HeroGridPanel() {
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

      {/* Top red bar */}
      <div className="absolute top-0 inset-x-0 h-[4px] z-30" style={{ background: "var(--color-brand-red)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "rgba(0,0,0,0.3)", transition: "none" }} />
      </div>

      <div className="absolute inset-0 grid lg:grid-cols-[1fr_1fr]">
        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-14 lg:px-16 pt-28 pb-10 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              <span className="inline-block text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: "color-mix(in srgb, var(--color-brand-red) 10%, white)", color: "var(--color-brand-red)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 20%, transparent)" }}>
                {slide.eyebrow}
              </span>
              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-black leading-[1.07] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading.map((line, i) => <span key={i} className="block">{i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}</span>)}
              </h1>
              <p className="text-[16px] leading-[1.8] mb-7 max-w-[440px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>
              <ul className="space-y-2 mb-8">
                {BULLETS.map(b => (
                  <li key={b} className="flex items-center gap-2.5 text-[14px] font-semibold" style={{ color: "var(--g-heading)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-red)" }} /> {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — 2x2 media grid */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-2 p-6 pt-20">
          {SLIDES.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 ${i === current ? "ring-2" : "opacity-60 hover:opacity-80"}`}
              style={{ ...(i === current ? { ringColor: "var(--color-brand-red)" } : {}), outline: i === current ? `2px solid var(--color-brand-red)` : "none" }}>
              <AnimatePresence mode="wait" initial={false}>
                {i === current ? (
                  <motion.div key="active" variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
                    {s.type === "image"
                      ? <Image src={s.src} alt={s.alt} fill sizes="25vw" className="object-cover" quality={90} />
                      : <video ref={videoRef} key={s.src} src={s.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
                  </motion.div>
                ) : (
                  <div key="thumb" className="absolute inset-0">
                    {s.type === "image"
                      ? <Image src={s.src} alt={s.alt} fill sizes="25vw" className="object-cover" quality={60} />
                      : <Image src="/homevideos/homebannerimage.jpg" alt={s.alt} fill sizes="25vw" className="object-cover" quality={60} />}
                  </div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/20" />
              {i === current && <div className="absolute bottom-2 left-2 w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />}
            </button>
          ))}
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
