"use client";
/* Kit D — Grey: light glassmorphic stat cards on soft light gradient */
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative flex flex-col w-full h-full group"
    >
      <div 
        className="relative flex flex-col items-center text-center px-8 py-12 w-full h-full overflow-hidden rounded-[24px] transition-all duration-300" 
        style={{ 
          background: "rgba(255, 255, 255, 0.35)", 
          backdropFilter: isMobile ? "none" : "blur(20px)",
          WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.65)", 
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Subtle top edge light reflection strip */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        {/* Hover brightening overlay */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <span aria-hidden className="absolute inset-0 flex items-center justify-center text-[clamp(5rem,12vw,9rem)] font-black select-none leading-none pointer-events-none"
          style={{ color: "color-mix(in srgb, var(--color-brand-red) 6%, transparent)" }}>
          {count}{suffix}
        </span>
        <div className="relative z-10 flex items-end gap-1 leading-none mb-4">
          <span className="font-black tracking-tight" style={{ fontSize: "clamp(3rem,7vw,5rem)", color: "var(--color-brand-red)" }}>{count}</span>
          {suffix && <span className="font-black pb-1" style={{ fontSize: "clamp(1.4rem,3.5vw,2.8rem)", color: "var(--color-brand-red)" }}>{suffix}</span>}
        </div>
        <p className="relative z-10 text-[13px] font-bold tracking-[2.5px] uppercase mb-1 text-[#111827]">{label}</p>
        <p className="relative z-10 text-[14px] leading-snug max-w-[160px] text-[#4B5563] font-medium">{desc}</p>
        <div className="relative z-10 mt-5 h-[2px] w-14 rounded-full" style={{ background: "var(--color-brand-red)" }} />
      </div>
    </motion.div>
  );
}


export default function GreyVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>Our Vision</span>
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight text-[#111827]">
            What is our vision for industrial automation in the GCC?
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((s, i) => <StatCard key={s.label} {...s} index={i} started={inView} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-14 pt-10 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          <p className="text-[12px] font-semibold tracking-[2.5px] uppercase text-[#4B5563]">
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait & Dubai
          </p>
          <div className="flex items-center justify-center gap-5 mt-4">
            {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate.png"].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-16 h-16 block">
                <Image src={src} alt="" fill className="object-contain" sizes="64px" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
