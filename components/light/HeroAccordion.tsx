"use client";
/* Hero: Accordion — left text, right vertical accordion panels that expand on hover/auto */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, Gauge, FlaskConical, Cpu, Layers } from "lucide-react";

const SLIDES = [
  { Icon: Gauge,        type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  label: "Measurement",  eyebrow: "ISO 9001:2015 Certified",    heading: ["Industrial Precision", "Measurement"],               sub: "Flow measurement, inspection & automation trusted by oil & gas since 2008.", cta: "Explore",  href: "/services/" },
  { Icon: Cpu,          type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     label: "Automation",   eyebrow: "PLC · SCADA · HMI",         heading: ["Process Control &", "Automation"],                   sub: "End-to-end PLC, SCADA, HMI engineering for industrial facilities.",           cta: "Know More", href: "/service/industrial-automation/" },
  { Icon: Layers,       type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          label: "Flow Metering", eyebrow: "Custody Transfer",          heading: ["Flow Metering &", "Calibration"],                    sub: "API, AGA and ISO-compliant metering skids and flow computers.",               cta: "Know More", href: "/service/flow-measurement-solutions/" },
  { Icon: FlaskConical, type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      label: "Inspection",   eyebrow: "ISO Accredited",            heading: ["NDT & Inspection", "Services"],                      sub: "Comprehensive non-destructive testing and certification services.",           cta: "Know More", href: "/service/inspection-testing/" },
] as const;

const DURATION = 6000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, y: 20 }, center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 } }, exit: { opacity: 0, y: -12, transition: { duration: 0.25 } } };

export default function HeroAccordion() {
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

      {/* Progress */}
      <div className="absolute top-0 inset-x-0 h-[4px] z-30" style={{ background: "var(--color-brand-red)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "rgba(0,0,0,0.25)", transition: "none" }} />
      </div>

      <div className="absolute inset-0 flex">
        {/* LEFT — copy panel */}
        <div className="relative z-10 hidden lg:flex flex-col justify-center px-14 xl:px-20 w-[45%]" style={{ background: "var(--g-section-a)" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "color-mix(in srgb, var(--color-brand-red) 10%, white)", border: "1px solid color-mix(in srgb, var(--color-brand-red) 16%, transparent)" }}>
                  <slide.Icon className="w-5 h-5" strokeWidth={1.7} style={{ color: "var(--color-brand-red)" }} />
                </div>
                <span className="text-[10px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
              </div>
              <h1 className="text-[2.6rem] xl:text-[3.2rem] font-black leading-[1.08] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading.map((line, i) => <span key={i} className="block">{i === 1 ? <span style={{ color: "var(--color-brand-red)" }}>{line}</span> : line}</span>)}
              </h1>
              <p className="text-[16px] leading-[1.8] mb-8 max-w-[400px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>
              <div className="flex gap-3 flex-wrap">
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
              <div className="mt-10 flex gap-4 items-center">
                {[["15+", "Years"], ["200+", "Clients"], ["8", "Industries"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-[1.4rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{n}</p>
                    <p className="text-[10px] uppercase tracking-wide font-semibold mt-0.5" style={{ color: "var(--g-muted)" }}>{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — accordion panels */}
        <div className="flex flex-row flex-1 overflow-hidden">
          {SLIDES.map((s, i) => (
            <motion.button key={i} onClick={() => goTo(i)} aria-label={s.label}
              animate={{ flex: i === current ? 4 : 1 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative overflow-hidden group"
              style={{ minWidth: 0 }}>
              {/* Media */}
              {s.type === "image"
                ? <Image src={s.src} alt={s.alt} fill sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" quality={90} />
                : i === current
                  ? <video ref={videoRef} key={s.src} src={s.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  : <Image src="/homevideos/homebannerimage.jpg" alt={s.alt} fill sizes="15vw" className="object-cover" quality={40} />}

              {/* Overlay */}
              <div className="absolute inset-0 transition-all duration-500"
                style={{ background: i === current ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" : "rgba(0,0,0,0.5)" }} />

              {/* Active indicator */}
              {i === current && <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: "var(--color-brand-red)" }} />}

              {/* Label — rotated when collapsed */}
              <div className={`absolute z-10 transition-all duration-500 ${i === current ? "bottom-6 left-6 right-6" : "inset-0 flex items-center justify-center"}`}>
                {i === current ? (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <s.Icon className="w-4 h-4" style={{ color: "var(--color-brand-red)" }} />
                      <span className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: "var(--color-brand-red)" }}>{s.label}</span>
                    </div>
                    <p className="text-white font-bold text-[16px] leading-snug">{s.heading[0]}<br />{s.heading[1]}</p>
                  </div>
                ) : (
                  <div className="-rotate-90 whitespace-nowrap">
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/70">{s.label}</span>
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden absolute inset-0 z-10 flex flex-col justify-end px-6 pb-8 pt-28">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
            <span className="text-[10px] font-bold tracking-[3px] uppercase mb-3 block" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
            <h1 className="text-[1.9rem] font-black text-white leading-[1.1] mb-2">{slide.heading[0]} {slide.heading[1]}</h1>
            <p className="text-white/70 text-[14px] mb-5">{slide.sub}</p>
            <Link href={slide.href} className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg text-[14px]" style={{ background: "var(--color-brand-red)" }}>
              {slide.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}>
              <span className="block h-[3px] rounded-full transition-all" style={{ width: i === current ? "24px" : "8px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.35)" }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
