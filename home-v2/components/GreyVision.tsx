"use client";
/* Kit D — Grey: Vision — V5 layout with V2 color tokens */
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const STATS = [
  { prefix: "/01", value: 400, suffix: "+", label: "Projects Completed", desc: "Across oil & gas, refinery & beyond" },
  { prefix: "/02", value: 10,  suffix: "+", label: "Global Partners",    desc: "Trusted technology alliances worldwide" },
  { prefix: "/03", value: 18,  suffix: "",  label: "Years of Excellence", desc: "Delivering precision since 2008" },
];

function useLiquidCounter(target: number, started: boolean, delay: number) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 28, damping: 18, mass: 1.2 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => motionVal.set(target), delay);
    return () => clearTimeout(t);
  }, [started, target, delay, motionVal]);
  useEffect(() => display.on("change", (v) => setCount(v)), [display]);
  return count;
}

function StatCard({
  prefix, value, suffix, label, desc, index, started,
}: {
  prefix: string; value: number; suffix: string; label: string; desc: string; index: number; started: boolean;
}) {
  const count = useLiquidCounter(value, started, index * 180);
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative flex flex-col w-full h-full group"
    >
      <div
        className="relative flex flex-col items-center text-center px-8 py-10 w-full h-full overflow-hidden rounded-[24px] transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          backdropFilter: isMobile ? "none" : "blur(20px)",
          WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.65)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Prefix */}
        <div className="w-full flex justify-between items-center mb-5 relative z-10">
          <span className="font-mono text-[12px] font-bold" style={{ color: "var(--color-brand-red)" }}>{prefix}</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-brand-red)" }} />
        </div>

        {/* Watermark number */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-[clamp(5rem,12vw,9rem)] font-black select-none leading-none pointer-events-none"
          style={{ color: "color-mix(in srgb, var(--color-brand-red) 5%, transparent)" }}
        >
          {count}{suffix}
        </span>

        <div className="relative z-10 flex items-end gap-1 leading-none mb-4">
          <span
            className="font-black tracking-tight"
            style={{ fontSize: "clamp(3rem,7vw,5rem)", color: "var(--color-brand-red)" }}
          >
            {count}
          </span>
          {suffix && (
            <span
              className="font-black pb-1"
              style={{ fontSize: "clamp(1.4rem,3.5vw,2.8rem)", color: "var(--color-brand-red)" }}
            >
              {suffix}
            </span>
          )}
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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
            <span className="text-[11px] font-bold tracking-[3.5px] uppercase" style={{ color: "var(--color-brand-red)" }}>
              Our Vision
            </span>
            <span className="w-8 h-[2px] rounded-full" style={{ background: "var(--color-brand-red)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-black leading-[1.15] tracking-tight mb-5"
            style={{ color: "#111827" }}
          >
            What is our vision for industrial automation in the GCC?
          </motion.h2>
          <p className="text-[16px] leading-relaxed text-[#4B5563]">
            Since 2008, Texas Technical Services has pioneered world-class industrial automation and flow measurement solutions for leading energy and process facilities across the Middle East.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              prefix={s.prefix}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              desc={s.desc}
              index={i}
              started={inView}
            />
          ))}
        </div>

        {/* Certification strip */}
        <div className="text-center mt-14 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <p className="text-[12px] font-bold tracking-[2.5px] uppercase mb-4 text-[#4B5563]">
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait &amp; Dubai
          </p>
          <div className="flex items-center justify-center gap-5">
            {[
              "/about/cert-iso9001.png",
              "/about/cert-iso14001.png",
              "/about/cert-iso45001.png",
              "/about/cert-uasl.png",
              "/about/cert-accurate-white.png",
            ].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-14 h-14 block hover:opacity-80 hover:scale-105 transition-all">
                <Image src={src} alt="" fill className="object-contain" sizes="56px" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
