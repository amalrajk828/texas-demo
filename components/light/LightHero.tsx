"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Play, ChevronRight, Shield, Award, Globe } from "lucide-react";

// ---------------------------------------------------------------------------
// Slide data — each theme can pin a different starting slide via initialSlide
// ---------------------------------------------------------------------------
export const SLIDES = [
  {
    type: "image" as const,
    src: "/homevideos/homebannerimage.jpg",
    alt: "Texas Technical Services — oil & gas industrial facility at dusk",
    eyebrow: "ISO 9001:2015 Certified · Established 2008",
    heading: "Engineering Excellence for",
    headingAccent: "Critical Energy Infrastructure",
    sub: "Flow measurement, industrial automation and precision inspection — trusted by the world's leading oil & gas operators across Kuwait and the UAE.",
    tag: "Industrial Services",
    ctas: [
      { label: "Explore Our Services", href: "/service/", primary: true },
      { label: "About Us", href: "/about-us/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/Automated-1-2.mp4",
    alt: "Industrial process automation — PLC & SCADA control room",
    eyebrow: "Industrial Automation · PLC · SCADA · HMI",
    heading: "Smart Automation for",
    headingAccent: "Smarter Operations",
    sub: "End-to-end PLC programming, SCADA integration, HMI design and VFD engineering — boosting plant efficiency across oil & gas, power and manufacturing.",
    tag: "Automation",
    ctas: [
      { label: "Automation Services", href: "/service/industrial-automation/", primary: true },
      { label: "Our Services", href: "/service/", primary: false },
    ],
  },
  {
    type: "video" as const,
    src: "/homevideos/newproduct.mp4",
    alt: "Precision flow metering — custody transfer skid commissioning",
    eyebrow: "Custody Metering · API · AGA · ISO Standards",
    heading: "Where Accuracy Defines",
    headingAccent: "Every Barrel Measured",
    sub: "Expert custody transfer metering — metering skids, flow computers, ultrasonic & Coriolis meters, calibration and commissioning to the tightest tolerances.",
    tag: "Flow Metering",
    ctas: [
      { label: "Flow Solutions", href: "/service/flow-measurement-solutions/", primary: true },
      { label: "Our Products", href: "/products/", primary: false },
    ],
  },
  {
    type: "image" as const,
    src: "/homevideos/INSPECTION-AND-TESTING1.jpg",
    alt: "NDT inspection — pipeline and vessel integrity testing",
    eyebrow: "ISO 14001:2015 · ISO 45001:2018 Certified",
    heading: "Certified Inspection.",
    headingAccent: "Zero Compromise.",
    sub: "Non-destructive testing, mechanical inspection, functional testing and certification — ensuring your assets meet the most demanding industry standards.",
    tag: "NDT & Inspection",
    ctas: [
      { label: "Inspection Services", href: "/service/inspection-testing/", primary: true },
      { label: "Our Services", href: "/service/", primary: false },
    ],
  },
] as const;

const DURATION = 8000;

const TRUST_BADGES = [
  { Icon: Shield, label: "ISO 9001:2015",    sub: "Quality Certified"    },
  { Icon: Award,  label: "ISO 14001:2015",   sub: "Environmental"        },
  { Icon: Globe,  label: "Kuwait & UAE",      sub: "Regional Presence"   },
];

const STATS = [
  { num: "15+",  label: "Years" },
  { num: "200+", label: "Clients" },
  { num: "8",    label: "Industries" },
  { num: "400+", label: "Projects" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const textIn: Variants = {
  enter:  { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.35, ease: "easeIn" } },
};

const mediaIn: Variants = {
  enter:  { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: EASE } },
  exit:   { opacity: 0, scale: 1.02, transition: { duration: 0.4, ease: "easeIn" } },
};

// ---------------------------------------------------------------------------

export default function LightHero({ initialSlide = 0 }: { initialSlide?: number }) {
  const [current, setCurrent]   = useState(initialSlide % SLIDES.length);
  const [paused,  setPaused]    = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef   = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const thumbRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startRef.current = null;
  }, []);

  // Auto-advance ticker
  useEffect(() => {
    if (paused) { if (rafRef.current) cancelAnimationFrame(rafRef.current); return; }
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const pct = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) { rafRef.current = requestAnimationFrame(tick); }
      else { setCurrent(c => (c + 1) % SLIDES.length); setProgress(0); startRef.current = null; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [current, paused]);

  // Play main video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (SLIDES[current].type === "video") { v.currentTime = 0; v.play().catch(() => {}); }
  }, [current]);

  // Play thumb videos
  useEffect(() => {
    thumbRefs.current.forEach(v => { if (v) v.play().catch(() => {}); });
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "700px", maxHeight: "1000px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── FULL-BLEED BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={current} variants={mediaIn} initial="enter" animate="center" exit="exit"
            className="absolute inset-0">
            {slide.type === "image"
              ? <Image src={slide.src} alt={slide.alt} fill priority={current === 0}
                  sizes="100vw" quality={90} className="object-cover object-center" />
              : <video key={slide.src} src={slide.src}
                  ref={el => { videoRef.current = el; if (el) { el.currentTime = 0; el.play().catch(() => {}); } }}
                  autoPlay muted loop playsInline className="w-full h-full object-cover" />}
          </motion.div>
        </AnimatePresence>

        {/* Dark cinematic gradient — rich on left/bottom, open on right */}
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(105deg,
                color-mix(in srgb, var(--color-bg-hero-mask) 100%, transparent) 0%,
                color-mix(in srgb, var(--color-bg-hero-mask) 80%, transparent) 38%,
                color-mix(in srgb, var(--color-bg-hero-mask-mid) 55%, transparent) 60%,
                rgba(0,0,0,0.08) 100%
              ),
              linear-gradient(to top,
                rgba(0,0,0,0.75) 0%,
                rgba(0,0,0,0.20) 30%,
                transparent 65%
              )
            `,
          }}
        />

        {/* Subtle noise grain for premium feel */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px 128px" }} />
      </div>

      {/* ── RED TOP PROGRESS BAR ── */}
      <div className="absolute top-0 inset-x-0 h-[3px] z-40" style={{ background: "color-mix(in srgb, var(--color-brand-red) 30%, transparent)" }}>
        <div className="h-full origin-left" style={{ width: `${progress}%`, background: "var(--color-brand-red)", transition: "none" }} />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ── HERO TEXT AREA — takes up most of the height ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={current} variants={textIn} initial="enter" animate="center" exit="exit"
                className="max-w-[780px]">

                {/* Eyebrow pill */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
                  className="inline-flex items-center gap-2.5 mb-7"
                >
                  <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-[2.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
                  className="font-black tracking-tight leading-[1.04] mb-6"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#FFFFFF" }}
                >
                  {slide.heading}
                  <br />
                  <span style={{ color: "var(--color-brand-red)" }}>{slide.headingAccent}</span>
                </motion.h1>

                {/* Rule */}
                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  className="w-20 h-[3px] rounded-full mb-7 origin-left"
                  style={{ background: "var(--color-brand-red)" }}
                />

                {/* Sub text */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
                  className="leading-[1.9] mb-10 max-w-[620px]"
                  style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "rgba(255,255,255,0.75)" }}
                >
                  {slide.sub}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  {slide.ctas.map(cta => cta.primary ? (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2.5 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                      style={{
                        fontSize: "clamp(14px,1.1vw,16px)",
                        padding: "clamp(14px,1.4vw,18px) clamp(28px,2.5vw,38px)",
                        background: "var(--color-brand-red)",
                        boxShadow: "0 6px 28px color-mix(in srgb, var(--color-brand-red) 50%, transparent)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
                    >
                      {cta.label} <ArrowRight className="w-5 h-5" />
                    </Link>
                  ) : (
                    <Link key={cta.label} href={cta.href}
                      className="inline-flex items-center gap-2.5 font-semibold rounded-xl transition-all duration-200 border backdrop-blur-md hover:-translate-y-0.5"
                      style={{
                        fontSize: "clamp(14px,1.1vw,16px)",
                        padding: "clamp(14px,1.4vw,18px) clamp(28px,2.5vw,38px)",
                        color: "rgba(255,255,255,0.90)",
                        borderColor: "rgba(255,255,255,0.25)",
                        background: "rgba(255,255,255,0.07)",
                      }}
                    >
                      {cta.label} <ChevronRight className="w-5 h-5" />
                    </Link>
                  ))}
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  {TRUST_BADGES.map(({ Icon, label, sub }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-lg px-4 py-2.5 border backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand-red)" }} />
                      <div>
                        <p className="text-[12px] font-bold text-white leading-none">{label}</p>
                        <p className="text-[10px] text-white/45 mt-0.5 leading-none">{sub}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── BOTTOM BAR: stats + slide controls ── */}
        <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
          <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between gap-6 flex-wrap">

            {/* Stats row */}
            <div className="flex items-center gap-8 sm:gap-12">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8 sm:gap-12">
                  {i > 0 && <div className="hidden sm:block w-px h-8" style={{ background: "rgba(255,255,255,0.12)" }} />}
                  <div>
                    <p className="font-black leading-none" style={{ fontSize: "clamp(1.3rem,2vw,1.6rem)", color: "var(--color-brand-red)" }}>{s.num}</p>
                    <p className="text-[11px] font-semibold tracking-[1.5px] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide thumbnails */}
            <div className="flex items-center gap-3">
              {SLIDES.map((s, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
                  className="group relative rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0"
                  style={{
                    width: i === current ? "88px" : "56px",
                    height: "50px",
                    borderColor: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.15)",
                    opacity: i === current ? 1 : 0.5,
                  }}
                >
                  {s.type === "image"
                    ? <Image src={s.src} alt={s.tag} fill sizes="100px" className="object-cover" quality={50} />
                    : <video ref={el => { thumbRefs.current[i] = el; }} src={s.src} muted loop playsInline className="w-full h-full object-cover" />}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  {s.type === "video" && (
                    <Play className="absolute inset-0 m-auto w-3 h-3 text-white/70" fill="currentColor" />
                  )}
                  {/* Progress ring on active */}
                  {i === current && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(255,255,255,0.15)" }}>
                      <div className="h-full" style={{ width: `${progress}%`, background: "var(--color-brand-red)", transition: "none" }} />
                    </div>
                  )}
                </button>
              ))}

              {/* Next arrow */}
              <button onClick={() => goTo((current + 1) % SLIDES.length)}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 ml-1"
                aria-label="Next slide">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
