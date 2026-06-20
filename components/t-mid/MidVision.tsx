"use client";
/* Kit B — Mid: stat cards use warm grey tinted glass, not white */
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
  const display = useTransform(spring, v => Math.round(v));
  const [count, setCount] = useState(0);
  useEffect(() => { if (!started) return; const t = setTimeout(() => motionVal.set(target), delay); return () => clearTimeout(t); }, [started, target, delay, motionVal]);
  useEffect(() => display.on("change", v => setCount(v)), [display]);
  return count;
}

function StatCard({ value, suffix, label, desc, index, started }: { value: number; suffix: string; label: string; desc: string; index: number; started: boolean }) {
  const count = useLiquidCounter(value, started, index * 180);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center px-8 py-12 rounded-2xl overflow-hidden"
      style={{ background: "var(--t-card-bg)", border: "1px solid var(--t-card-border)", boxShadow: "var(--t-card-shadow)" }}
    >
      {/* Ghost watermark */}
      <span aria-hidden className="absolute inset-0 flex items-center justify-center text-[clamp(5rem,12vw,9rem)] font-black select-none leading-none pointer-events-none"
        style={{ color: "color-mix(in srgb, var(--color-brand-red) 6%, transparent)" }}>
        {count}{suffix}
      </span>
      {/* Number */}
      <div className="relative z-10 flex items-end gap-1 leading-none mb-4">
        <span className="font-black tracking-tight" style={{ fontSize: "clamp(3rem,7vw,5rem)", color: "var(--color-brand-red)" }}>{count}</span>
        {suffix && <span className="font-black pb-1" style={{ fontSize: "clamp(1.4rem,3.5vw,2.8rem)", color: "var(--color-brand-red)" }}>{suffix}</span>}
      </div>
      <p className="relative z-10 text-[13px] font-bold tracking-[2.5px] uppercase mb-1" style={{ color: "var(--t-heading)" }}>{label}</p>
      <p className="relative z-10 text-[14px] leading-snug max-w-[160px]" style={{ color: "var(--t-muted)" }}>{desc}</p>
      <div className="relative z-10 mt-5 h-[2px] w-14 rounded-full origin-left" style={{ background: "var(--color-brand-red)" }} />
    </motion.div>
  );
}

export default function MidVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--t-section-a)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--t-border)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, var(--color-brand-red) 4%, transparent), transparent)" }} />
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "var(--color-brand-red)" }}>Our Vision</span>
            <span className="w-6 h-px" style={{ background: "var(--color-brand-red)" }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight" style={{ color: "var(--t-heading)" }}>
            To be a prominent market leader and a{" "}
            <span style={{ color: "var(--color-brand-red)" }}>complete solution provider.</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((s, i) => <StatCard key={s.label} {...s} index={i} started={inView} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-14 pt-10 border-t" style={{ borderColor: "var(--t-border)" }}>
          <p className="text-[12px] font-semibold tracking-[2.5px] uppercase" style={{ color: "var(--t-muted)" }}>
            ISO 9001:2015 Certified · Established 2008 · Kuwait & Dubai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
