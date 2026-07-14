"use client";
/* Hero: Typewriter — white bg, large bold text animates in word by word, media thumbnail strip */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Cpu, Gauge, FlaskConical, Layers } from "lucide-react";

const SLIDES = [
  { Icon: Gauge,        type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  label: "Measurement",  eyebrow: "Est. 2008 · ISO 9001:2015", heading: "Industrial Measurement & Automation Specialists",    sub: "Trusted by 200+ industrial clients across Kuwait and Dubai for precision-critical operations.", cta: "Explore Services", href: "/services/" },
  { Icon: Cpu,          type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     label: "Automation",   eyebrow: "PLC · SCADA · HMI",         heading: "End-to-End Process Automation & Control Systems",   sub: "Full lifecycle automation — design, installation, commissioning, and ongoing support.",         cta: "Know More",        href: "/service/industrial-automation/" },
  { Icon: Layers,       type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          label: "Metering",     eyebrow: "Custody Transfer",           heading: "Custody Transfer & Flow Measurement Solutions",     sub: "API, AGA, and ISO-compliant metering skids, computers, and calibration services.",              cta: "Know More",        href: "/service/flow-measurement-solutions/" },
  { Icon: FlaskConical, type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      label: "NDT & QA",     eyebrow: "ISO Accredited",             heading: "NDT, Inspection & Certification Services",          sub: "Comprehensive testing and certification with international accreditation and full compliance.",  cta: "Know More",        href: "/service/inspection-testing/" },
] as const;

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, y: 28 }, center: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay: 0.06 } }, exit: { opacity: 0, y: -16, transition: { duration: 0.25 } } };
const imgV:  Variants = { enter: { opacity: 0, x: 24 }, center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, x: -12, transition: { duration: 0.25 } } };

export default function HeroTypewriter() {
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

      {/* Top progress + red bar */}
      <div className="absolute top-0 inset-x-0 h-[4px] z-30" style={{ background: "var(--g-border)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      {/* Decorative vertical lines */}
      {[20, 50, 80].map(pct => (
        <div key={pct} className="absolute top-0 bottom-0 w-px pointer-events-none" style={{ left: `${pct}%`, background: "var(--g-border)", opacity: 0.5 }} />
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center pt-24 pb-10 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "color-mix(in srgb, var(--color-brand-red) 10%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 18%, transparent)" }}>
                  <slide.Icon className="w-5 h-5" strokeWidth={1.7} style={{ color: "var(--color-brand-red)" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
              </div>

              <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.08] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading.split(" ").map((word, i, arr) => (
                  <motion.span key={`${current}-${i}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: EASE }}>
                    {i === Math.floor(arr.length / 2) ? <span style={{ color: "var(--color-brand-red)" }}>{word} </span> : `${word} `}
                  </motion.span>
                ))}
              </h1>

              <p className="text-[16px] leading-[1.8] mb-8 max-w-[480px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}>
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacts/" className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border transition-all"
                  style={{ color: "var(--g-heading)", borderColor: "var(--g-border)", background: "var(--g-card-bg)" }}>
                  Get in Touch
                </Link>
              </div>

              {/* Category tabs */}
              <div className="flex gap-2 flex-wrap">
                {SLIDES.map((s, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={s.label}
                    className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all"
                    style={{
                      background: i === current ? "var(--color-brand-red)" : "var(--g-card-bg)",
                      color: i === current ? "white" : "var(--g-muted)",
                      borderColor: i === current ? "var(--color-brand-red)" : "var(--g-border)",
                    }}>
                    <s.Icon className="w-3 h-3" /> {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — media */}
        <div className="hidden lg:flex flex-col gap-3 justify-center py-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit"
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "16/10", border: "1px solid var(--g-border)", boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}>
              {slide.type === "image"
                ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="600px" className="object-cover" quality={90} />
                : <video ref={videoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent 60%)" }} />
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-[3px]" style={{ background: "var(--color-brand-red)" }} />
              <div className="absolute top-0 right-0 w-[3px] h-12" style={{ background: "var(--color-brand-red)" }} />
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
