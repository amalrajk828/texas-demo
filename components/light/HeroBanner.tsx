"use client";
/* Hero variant: Corporate banner — white navbar, bright white/light-grey section,
   left text block, right image with strong red accent panel offset.
   Inspired by: Yokogawa, Endress+Hauser clean corporate product pages.
*/
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services",
    eyebrow: "Established 2008 · ISO 9001:2015",
    number: "01",
    heading: "Industrial Measurement & Automation",
    sub: "Delivering precision flow measurement, inspection, and process automation solutions to oil & gas, refinery, and power sector clients.",
    kicker: "Trusted by 200+ industrial clients across Kuwait and Dubai",
    href: "/services/",
    cta: "Explore Services",
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Industrial Automation",
    eyebrow: "Industrial Automation",
    number: "02",
    heading: "Process Automation & Control Systems",
    sub: "End-to-end PLC, SCADA, HMI, and VFD engineering for oil & gas, manufacturing, and power generation facilities.",
    kicker: "Full lifecycle — design, installation, commissioning, support",
    href: "/service/industrial-automation/",
    cta: "Know More",
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement",
    eyebrow: "Flow Measurement Solutions",
    number: "03",
    heading: "Custody Transfer & Flow Metering",
    sub: "API, AGA, and ISO-compliant flow measurement solutions including metering skids, flow computers, and calibration services.",
    kicker: "In-depth knowledge of custody transfer standards",
    href: "/service/flow-measurement-solutions/",
    cta: "Know More",
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection Testing",
    eyebrow: "Inspection & Testing",
    number: "04",
    heading: "NDT, Inspection & Testing Services",
    sub: "Certified non-destructive testing, inspection, and functional testing with full compliance documentation.",
    kicker: "ISO 9001 · ISO 14001 · ISO 45001 accredited services",
    href: "/service/inspection-testing/",
    cta: "Know More",
  },
] as const;

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textV: Variants = {
  enter:  { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.08 } },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.3 } },
};
const imgV: Variants = {
  enter:  { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
  exit:   { opacity: 0, transition: { duration: 0.35 } },
};

export default function HeroBanner() {
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
    <section className="relative w-full overflow-hidden" style={{ minHeight: "600px", height: "100svh", maxHeight: "900px", background: "var(--color-surface)" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-30" style={{ background: "var(--color-border)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      {/* Grid layout: 50/50 */}
      <div className="absolute inset-0 grid lg:grid-cols-2">

        {/* LEFT — white content panel */}
        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-24 pb-10 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">

              {/* Slide number + eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[3rem] font-black leading-none" style={{ color: "color-mix(in srgb, var(--color-brand-red) 10%, transparent)" }}>
                  {slide.number}
                </span>
                <div>
                  <div className="w-10 h-[2px] rounded-full mb-1" style={{ background: "var(--color-brand-red)" }} />
                  <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
                </div>
              </div>

              <h1 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black leading-[1.1] tracking-tight mb-5" style={{ color: "var(--color-text-primary)" }}>
                {slide.heading}
              </h1>

              <p className="text-[15px] leading-[1.8] mb-4 max-w-[480px]" style={{ color: "var(--color-text-muted)" }}>{slide.sub}</p>

              {/* Kicker */}
              <div className="flex items-start gap-2 mb-8 p-3 rounded-lg" style={{ background: "color-mix(in srgb, var(--color-brand-red) 6%, var(--color-surface))", borderLeft: "3px solid var(--color-brand-red)" }}>
                <Shield className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--color-brand-red)" }} />
                <span className="text-[13px] font-semibold" style={{ color: "var(--color-text-primary)" }}>{slide.kicker}</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href={slide.href}
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-[14px] shadow-md hover:-translate-y-0.5 transition-all"
                  style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 16px color-mix(in srgb, var(--color-brand-red) 28%, transparent)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                >
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacts/"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-[14px] border transition-all"
                  style={{ color: "var(--color-text-primary)", borderColor: "var(--color-border-accent)", background: "transparent" }}>
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mini stats row */}
              <div className="flex items-center gap-6">
                {[["18+", "Years"], ["200+", "Clients"], ["8", "Industries"]].map(([num, lbl], i) => (
                  <div key={lbl} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-7" style={{ background: "var(--color-border)" }} />}
                    <div>
                      <p className="text-[1.3rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{num}</p>
                      <p className="text-[10px] tracking-wide uppercase mt-0.5 font-semibold" style={{ color: "var(--color-text-muted)" }}>{lbl}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — media panel */}
        <div className="relative hidden lg:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
              {slide.type === "image"
                ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="50vw" className="object-cover" quality={90} />
                : <video key={slide.src} src={slide.src}
                    ref={el => { videoRef.current = el; if (el) { el.currentTime = 0; el.play().catch(() => {}); } }}
                    autoPlay muted loop playsInline className="w-full h-full object-cover" />}
              {/* left fade */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--color-surface) 0%, transparent 20%)" }} />
            </motion.div>
          </AnimatePresence>

          {/* Red accent block — bottom left corner */}
          <div className="absolute bottom-8 left-0 z-10 rounded-tr-2xl rounded-br-2xl px-6 py-5"
            style={{ background: "var(--color-brand-red)", boxShadow: "0 8px 32px color-mix(in srgb, var(--color-brand-red) 35%, transparent)" }}>
            <p className="text-white text-[11px] font-bold tracking-[2px] uppercase mb-1">ISO 9001:2015</p>
            <p className="text-white/70 text-[11px] font-medium">Certified Quality Management</p>
          </div>
        </div>
      </div>

      {/* Slide nav */}
      <div className="absolute bottom-8 left-8 lg:left-auto lg:right-8 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{ width: i === current ? "28px" : "8px", height: "3px", borderRadius: "2px", background: i === current ? "var(--color-brand-red)" : "var(--color-border)" }} />
        ))}
      </div>
    </section>
  );
}
