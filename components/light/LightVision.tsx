"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

const STATS = [
  { value: 400, suffix: "+", label: "Projects Completed", desc: "Across oil & gas, refinery & beyond" },
  { value: 10,  suffix: "+", label: "Global Partners",    desc: "Trusted technology alliances worldwide" },
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
      initial={{ opacity: 0, y: 40 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center px-8 py-10 rounded-2xl group"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.95)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px var(--color-border)",
      }}
    >
      {/* Ghost watermark */}
      <span aria-hidden className="absolute inset-0 flex items-center justify-center text-[clamp(5rem,14vw,10rem)] font-black select-none leading-none pointer-events-none"
        style={{ color: "color-mix(in srgb, var(--color-brand-red) 5%, transparent)" }}>
        {count}{suffix}
      </span>

      {/* Number */}
      <div className="relative z-10 flex items-end gap-1 leading-none">
        <motion.span
          className="text-[clamp(3rem,7vw,5.5rem)] font-black tracking-tight leading-none"
          style={{ color: "var(--color-brand-red)" }}
        >
          {count}
        </motion.span>
        {suffix && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={started ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: delay / 1000 + 0.4 }}
            className="text-[clamp(1.5rem,4vw,3rem)] font-black tracking-tight leading-none pb-1"
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
        transition={{ duration: 0.6, delay: delay / 1000 + 0.3 }}
        className="relative z-10 mt-4 text-[13px] font-bold tracking-[2.5px] uppercase"
        style={{ color: "var(--color-text-primary)" }}
      >
        {label}
      </motion.p>

      {/* Desc */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: delay / 1000 + 0.5 }}
        className="relative z-10 mt-1.5 text-[14px] max-w-40 leading-snug"
        style={{ color: "var(--color-text-muted)" }}
      >
        {desc}
      </motion.p>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={started ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: delay / 1000 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-5 h-[2px] w-14 rounded-full origin-left"
        style={{ background: "var(--color-brand-red)" }}
      />
    </motion.div>
  );
}

export default function LightVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--color-surface)" }}>

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-red) 5%, transparent) 0%, transparent 65%)" }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-5"
          >
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Vision</span>
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.2] max-w-2xl mx-auto tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            To be a prominent market leader and a{" "}
            <span style={{ color: "var(--color-brand-red)" }}>complete solution provider.</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} started={inView} />
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-14 pt-10 border-t" style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-[12px] font-semibold tracking-[2.5px] uppercase" style={{ color: "var(--color-text-muted)" }}>
            ISO 9001:2015 Certified · Established 2008 · Kuwait &amp; Dubai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
