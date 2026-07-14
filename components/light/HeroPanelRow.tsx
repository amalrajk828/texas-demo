"use client";
/* Hero: Panel Row — white bg, large number + heading left, vertical media panel row right */
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

const SLIDES = [
  { type: "image" as const, src: "/homevideos/homebannerimage.jpg",          alt: "Texas Technical Services",  num: "01", eyebrow: "ISO 9001:2015 Certified",    heading: "Industrial Measurement & Automation",   sub: "Flow measurement, inspection & automation services since 2008.", cta: "Explore Services", href: "/services/",                          extra: "Kuwait · Dubai" },
  { type: "video" as const, src: "/homevideos/Automated-1-2.mp4",            alt: "Industrial Automation",     num: "02", eyebrow: "Industrial Automation",      heading: "Process Control Systems",               sub: "PLC, SCADA, HMI engineering for industrial facilities.",         cta: "Know More",        href: "/service/industrial-automation/",    extra: "End-to-End" },
  { type: "video" as const, src: "/homevideos/newproduct.mp4",               alt: "Flow Measurement",          num: "03", eyebrow: "Custody Transfer",           heading: "Flow Metering Solutions",               sub: "API, AGA, ISO compliant metering and calibration.",              cta: "Know More",        href: "/service/flow-measurement-solutions/", extra: "API · AGA · ISO" },
  { type: "image" as const, src: "/homevideos/INSPECTION-AND-TESTING1.jpg",  alt: "Inspection & Testing",      num: "04", eyebrow: "NDT & QA",                   heading: "Inspection & Testing",                  sub: "ISO-accredited NDT and certification services.",                 cta: "Know More",        href: "/service/inspection-testing/",       extra: "Certified NDT" },
] as const;

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const textV: Variants = { enter: { opacity: 0, x: -24 }, center: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.08 } }, exit: { opacity: 0, x: 14, transition: { duration: 0.28 } } };
const imgV:  Variants = { enter: { opacity: 0, scale: 1.04 }, center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } }, exit: { opacity: 0, transition: { duration: 0.35 } } };

export default function HeroPanelRow() {
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
      <div className="absolute top-0 inset-x-0 h-[3px] z-30" style={{ background: "var(--g-border)" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      <div className="absolute inset-0 grid lg:grid-cols-[1fr_480px]">
        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-center px-10 sm:px-16 lg:px-20 pt-28 pb-12 lg:py-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current} variants={textV} initial="enter" animate="center" exit="exit">
              {/* Large ghost number */}
              <div className="text-[6rem] sm:text-[8rem] font-black leading-none mb-[-1.5rem] select-none pointer-events-none"
                style={{ color: "color-mix(in srgb, var(--color-brand-red) 7%, transparent)" }}>
                {slide.num}
              </div>

              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                <span className="text-[10px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>{slide.eyebrow}</span>
              </div>

              <h1 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-5" style={{ color: "var(--g-heading)" }}>
                {slide.heading}
              </h1>

              <p className="text-[16px] leading-[1.8] mb-5 max-w-[480px]" style={{ color: "var(--g-muted)" }}>{slide.sub}</p>

              <div className="flex items-start gap-2 p-3 rounded-lg mb-7" style={{ background: "color-mix(in srgb, var(--color-brand-red) 5%, white)", borderLeft: "3px solid var(--color-brand-red)" }}>
                <Shield className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--color-brand-red)" }} />
                <span className="text-[12px] font-semibold" style={{ color: "var(--g-heading)" }}>{slide.extra} — ISO 9001:2015 Certified · Est. 2008</span>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
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

              {/* Stats */}
              <div className="flex gap-8">
                {[["15+", "Years"], ["200+", "Clients"], ["8", "Industries"]].map(([n, l], i) => (
                  <div key={l} className="flex items-center gap-8">
                    {i > 0 && <div className="w-px h-7" style={{ background: "var(--g-border)" }} />}
                    <div>
                      <p className="text-[1.4rem] font-black leading-none" style={{ color: "var(--color-brand-red)" }}>{n}</p>
                      <p className="text-[10px] uppercase tracking-wide font-semibold mt-0.5" style={{ color: "var(--g-muted)" }}>{l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — vertical panel row */}
        <div className="hidden lg:flex flex-col border-l" style={{ borderColor: "var(--g-border)" }}>
          {SLIDES.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className="relative flex-1 overflow-hidden group transition-all duration-500"
              style={{ borderBottom: i < SLIDES.length - 1 ? `1px solid ${i === current ? "var(--color-brand-red)" : "var(--g-border)"}` : "none" }}>
              <AnimatePresence mode="wait" initial={false}>
                {i === current ? (
                  <motion.div key="active" variants={imgV} initial="enter" animate="center" exit="exit" className="absolute inset-0">
                    {s.type === "image"
                      ? <Image src={s.src} alt={s.alt} fill sizes="480px" className="object-cover" quality={90} />
                      : <video key={s.src} src={s.src}
                          ref={el => { videoRef.current = el; if (el) { el.currentTime = 0; el.play().catch(() => {}); } }}
                          autoPlay muted loop playsInline className="w-full h-full object-cover" />}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--g-section-a) 0%, transparent 30%)" }} />
                  </motion.div>
                ) : (
                  <div className="absolute inset-0" style={{ background: "var(--g-card-bg)" }}>
                    <div className="absolute inset-0 opacity-30">
                      {s.type === "image"
                        ? <Image src={s.src} alt={s.alt} fill sizes="480px" className="object-cover" quality={40} />
                        : <Image src="/homevideos/homebannerimage.jpg" alt={s.alt} fill sizes="480px" className="object-cover" quality={40} />}
                    </div>
                  </div>
                )}
              </AnimatePresence>

              <div className="absolute z-10 bottom-3 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: i === current ? "var(--color-brand-red)" : "var(--g-muted)" }}>{s.num}</p>
                  <p className="text-[13px] font-bold" style={{ color: i === current ? "var(--g-heading)" : "var(--g-muted)" }}>{s.eyebrow}</p>
                </div>
                {i === current && <div className="w-6 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />}
              </div>
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
