"use client";
/* Hero variant: Magazine editorial layout.
   Large typographic treatment. Big bold headline, media fills right 60%,
   text on left over solid dark charcoal. Accent boxes at bottom.
   Inspired by: Weatherford, TechnipFMC, SLB editorial style.
*/
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services",
    label: "01 — Expertise",
    headline: "Industrial",
    headline2: "Excellence.",
    tagline: "Flow · Automation · Inspection",
    sub: "ISO 9001:2015 certified provider of precision measurement, automation, and testing for oil & gas since 2008.",
    href: "/services/",
    cta: "Explore Services",
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Process Automation",
    label: "02 — Automation",
    headline: "Smart",
    headline2: "Systems.",
    tagline: "PLC · SCADA · HMI · VFD",
    sub: "End-to-end process automation engineering for oil & gas, manufacturing and power generation sectors.",
    href: "/service/industrial-automation/",
    cta: "Know More",
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Flow Measurement",
    label: "03 — Metering",
    headline: "Custody",
    headline2: "Metering.",
    tagline: "API · AGA · ISO Standards",
    sub: "Expert flow measurement consultants delivering metering skids, flow computers and calibration services.",
    href: "/service/flow-measurement-solutions/",
    cta: "Know More",
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "Inspection & Testing",
    label: "04 — Inspection",
    headline: "Certified",
    headline2: "Quality.",
    tagline: "NDT · ISO 9001 · ISO 45001",
    sub: "Comprehensive inspection, non-destructive testing and certification for industrial compliance.",
    href: "/service/inspection-testing/",
    cta: "Know More",
  },
] as const;

const DURATION = 7500;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const textV: Variants = {
  enter:  { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.12 } },
  exit:   { opacity: 0, y: -20, transition: { duration: 0.35 } },
};
const imgV: Variants = {
  enter:  { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
  exit:   { opacity: 0, transition: { duration: 0.4 } },
};

export default function HeroMagazine() {
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
    <section className="relative w-full overflow-hidden" style={{ minHeight: "640px", height: "100svh", maxHeight: "960px" }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {/* Background: charcoal dark */}
      <div className="absolute inset-0 z-0" style={{ background: "#0f0f0f" }} />

      {/* Right media — fills right 58% */}
      <div className="absolute top-0 right-0 bottom-0 w-[58%] z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
            {slide.type === "image"
              ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0} sizes="60vw" className="object-cover" quality={90} />
              : <video key={slide.src} src={slide.src}
                  ref={el => { videoRef.current = el; if (el) { el.currentTime = 0; el.play().catch(() => {}); } }}
                  autoPlay muted loop playsInline className="w-full h-full object-cover" />}
            {/* Gradient from left */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0f0f0f 0%, rgba(15,15,15,0.7) 30%, rgba(15,15,15,0.15) 60%, transparent 100%)" }} />
            {/* Gradient from bottom */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,15,15,0.8) 0%, transparent 40%)" }} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[4px] z-30" style={{ background: "var(--color-brand-red)" }} />

      {/* Progress */}
      <div className="absolute top-[4px] left-0 right-0 h-[2px] z-30" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", opacity: 0.5 }} />
      </div>

      {/* Slide label — top left */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>{slide.label}</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="w-full lg:w-[52%]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">

              {/* Tagline chip */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-[3px] h-10 rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span className="text-[11px] font-bold tracking-[3px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.tagline}</span>
              </div>

              {/* Giant headline */}
              <h1 className="leading-[0.88] font-black tracking-tight mb-6">
                <span className="block text-white" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>{slide.headline}</span>
                <span className="block" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", color: "var(--color-brand-red)" }}>{slide.headline2}</span>
              </h1>

              <p className="text-[15px] text-white/60 leading-[1.75] mb-8 max-w-[400px]">{slide.sub}</p>

              <Link href={slide.href}
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-[14px] transition-all hover:-translate-y-0.5 shadow-xl mb-12"
                style={{ background: "var(--color-brand-red)", boxShadow: "0 6px 28px color-mix(in srgb, var(--color-brand-red) 40%, transparent)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
              >
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Info strip */}
              <div className="flex items-center gap-8">
                {[
                  { label: "Est.", value: "2008" },
                  { label: "ISO", value: "9001:2015" },
                  { label: "Clients", value: "200+" },
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-8">
                    {i > 0 && <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.10)" }} />}
                    <div>
                      <p className="text-[9px] font-bold tracking-[2px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>{item.label}</p>
                      <p className="text-[17px] font-black text-white leading-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom right: slide navigation */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-3">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300"
              style={{ width: i === current ? "32px" : "8px", height: "3px", borderRadius: "2px", background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
        <span className="text-[10px] font-mono text-white/25 tracking-[2px]">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
