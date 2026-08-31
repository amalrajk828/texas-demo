"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

const STATS = [
  { value: 400, suffix: "+", label: "Projects Completed", desc: "Across oil & gas, refinery & beyond" },
  { value: 16,  suffix: "+", label: "Approved Vendors",   desc: "Trusted technology alliances worldwide" },
  { value: 18,  suffix: "",  label: "Years of Excellence", desc: "Delivering precision since 2008" },
];

function useLiquidCounter(target: number, started: boolean, delay: number) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 28, damping: 18, mass: 1.2 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => { motionVal.set(target); }, delay);
    return () => clearTimeout(t);
  }, [started, target, delay, motionVal]);

  useEffect(() => { return display.on("change", (v) => setCount(v)); }, [display]);

  return count;
}

function StatItem({ value, suffix, label, desc, index, started }: {
  value: number; suffix: string; label: string; desc: string; index: number; started: boolean;
}) {
  const delay = index * 180;
  const count = useLiquidCounter(value, started, delay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.94 }}
      animate={started ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.1, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center px-6 py-8 group"
    >
      {/* Ghost watermark */}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-[clamp(7rem,16vw,13rem)] font-black select-none leading-none pointer-events-none"
        style={{
          color: "color-mix(in srgb, var(--color-brand-red) 8%, transparent)",
        }}
      >
        {count}{suffix}
      </span>

      {/* Glowing halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-60%] w-48 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-red) 18%, transparent) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Main number */}
      <div className="relative z-10 flex items-end gap-1 leading-none">
        <motion.span
          className="text-[clamp(3.5rem,8vw,6.5rem)] font-black tracking-tight leading-none"
          style={{
            color: "var(--color-brand-red)",
            filter: "drop-shadow(0 4px 24px color-mix(in srgb, var(--color-brand-red) 35%, transparent))",
          }}
        >
          {count}
        </motion.span>
        {suffix && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={started ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: delay / 1000 + 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight leading-none pb-1"
            style={{ color: "var(--color-brand-red)" }}
          >
            {suffix}
          </motion.span>
        )}
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={started ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delay / 1000 + 0.3, ease: "easeOut" }}
        className="relative z-10 mt-4 text-[13px] font-bold tracking-[2.5px] uppercase"
        style={{ color: "var(--color-brand-navy)" }}
      >
        {label}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: delay / 1000 + 0.5 }}
        className="relative z-10 mt-1.5 text-[12px] font-medium max-w-40 leading-snug"
        style={{ color: "color-mix(in srgb, var(--color-brand-navy) 35%, transparent)" }}
      >
        {desc}
      </motion.p>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={started ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: delay / 1000 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-5 h-0.5 w-16 rounded-full origin-left"
        style={{ background: "linear-gradient(90deg, var(--color-brand-red), color-mix(in srgb, var(--color-brand-red) 60%, #fff), transparent)" }}
      />
    </motion.div>
  );
}

function WaveDivider() {
  return (
    <div className="hidden md:flex absolute inset-y-0 items-center justify-center pointer-events-none">
      <svg width="2" height="120" viewBox="0 0 2 120" fill="none">
        <motion.path
          d="M1 0 Q1 30 1 60 Q1 90 1 120"
          stroke="url(#waveGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(11,13,38,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function OurVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white overflow-hidden py-24 lg:py-32">

      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-0.5 origin-left"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-brand-red) 30%, color-mix(in srgb, var(--color-brand-red) 80%, #fff) 50%, var(--color-brand-red) 70%, transparent)" }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-red) 5%, transparent) 0%, transparent 65%)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(11,13,38,0.025) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(11,13,38,0.025) 60px)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-px origin-right"
              style={{ background: "#0E7490" }}
            />
            <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: "#0E7490" }}>
              Our Vision
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-px origin-left"
              style={{ background: "#0E7490" }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold leading-[1.2] max-w-2xl mx-auto"
            style={{ color: "var(--color-brand-navy)" }}
          >
            To be a prominent market leader and a complete solution provider.
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="relative">
          <div className="absolute left-1/3 inset-y-0 flex items-center justify-center pointer-events-none">
            <WaveDivider />
          </div>
          <div className="absolute left-2/3 inset-y-0 flex items-center justify-center pointer-events-none">
            <WaveDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} {...stat} index={i} started={inView} />
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-center mt-16 pt-10 border-t"
          style={{ borderColor: "color-mix(in srgb, var(--color-brand-navy) 6%, transparent)" }}
        >
          <p
            className="text-[13px] font-medium tracking-[2px] uppercase"
            style={{ color: "color-mix(in srgb, var(--color-brand-navy) 30%, transparent)" }}
          >
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait &amp; Dubai
          </p>
        </motion.div>

      </div>
    </section>
  );
}
