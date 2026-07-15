"use client";
/* Hero variant: Dark full-bleed background image with bold centered text overlay.
   Used by themes that want a magazine/editorial feel with a strong image fill.
   The left panel is gone — content sits centered over the full-width image.
*/
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services",
    eyebrow: "ISO 9001:2015 Certified · Est. 2008",
    heading: "Welcome to Texas Technical Services",
    sub: "Precision flow measurement, inspection and automation solutions for the world's most demanding industrial environments.",
    ctas: [
      { label: "Explore Services", href: "/services/", primary: true },
      { label: "About Us", href: "/about-us/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Industrial Process Automation Solutions",
    eyebrow: "Industrial Automation",
    heading: "Industrial Process Automation Solutions",
    sub: "PLC and SCADA-based systems, control integration, and commissioning for oil & gas, manufacturing, and power generation.",
    ctas: [
      { label: "Know More", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement Solutions",
    eyebrow: "Flow Measurement Solutions",
    heading: "Flow Measurement & Control System Solutions",
    sub: "Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.",
    ctas: [
      { label: "Know More", href: "/service/flow-measurement-solutions/", primary: true },
      { label: "Our Products", href: "/products/", primary: false },
    ],
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection and Testing services",
    eyebrow: "Inspection & Testing",
    heading: "Inspection and Testing Services",
    sub: "ISO 14001:2015, ISO 45001:2018, and ISO 9001:2015 certified inspection and NDT services.",
    ctas: [
      { label: "Know More", href: "/service/inspection-testing/", primary: true },
      { label: "Our Services", href: "/services/", primary: false },
    ],
  },
] as const;

const DURATION = 7000;
const STATS = [
  { num: "18+", label: "Years" },
  { num: "8",   label: "Industries" },
  { num: "200+", label: "Clients" },
  { num: "2",   label: "Countries" },
];
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textVariants: Variants = {
  enter:  { opacity: 0, y: 32 },
  center: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: 0.15 } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.35, ease: "easeIn" } },
};

export default function HeroFullscreen() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const goTo = useCallback((idx: number) => { setCurrent(idx); setProgress(0); startRef.current = null; }, []);

  useEffect(() => {
    if (paused) { if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) { rafRef.current = requestAnimationFrame(tick); }
      else { setCurrent((c) => (c + 1) % SLIDES.length); setProgress(0); startRef.current = null; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, paused]);

  useEffect(() => {
    const v = mainVideoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); }
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "640px", height: "100svh", maxHeight: "900px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }} className="absolute inset-0">
            {slide.type === "image"
              ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="100vw" className="object-cover object-center" quality={90} />
              : <video ref={mainVideoRef} key={slide.src} src={slide.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.30) 100%)" }} />
        {/* Brand colour overlay — subtle tint from bottom */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--color-brand-red) 22%, transparent) 0%, transparent 45%)" }} />
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-30">
        <div className="h-full transition-none" style={{ width: `${progress}%`, background: "var(--color-brand-red)" }} />
      </div>

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 sm:pb-20 px-6 text-center max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={textVariants} initial="enter" animate="center" exit="exit" className="w-full">

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
              <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">{slide.eyebrow}</span>
              <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
            </div>

            <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-black leading-[1.1] text-white mb-5 tracking-tight">
              {slide.heading}
            </h1>

            <div className="w-16 h-[3px] rounded-full mx-auto mb-5" style={{ background: "var(--color-brand-red)" }} />

            <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.8] mb-8 max-w-lg mx-auto">
              {slide.sub}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {slide.ctas.map((cta) =>
                cta.primary ? (
                  <Link key={cta.label} href={cta.href}
                    className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-lg text-[14px] shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 24px color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                  >
                    {cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link key={cta.label} href={cta.href}
                    className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg text-[14px] border border-white/25 text-white hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {cta.label} <ChevronRight className="w-4 h-4" />
                  </Link>
                )
              )}
            </div>

            {/* Stats strip */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 border-t border-white/10 pt-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && <div className="w-px h-7 bg-white/15" />}
                  <div className="text-center">
                    <p className="text-[1.4rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{s.num}</p>
                    <p className="text-[10px] tracking-[1.5px] uppercase mt-1 text-white/45">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{ width: i === current ? "28px" : "8px", height: "3px", borderRadius: "2px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.3)" }} />
        ))}
      </div>
    </section>
  );
}
