"use client";
/* Kit D — Grey: Vision & Impact — V5 layout with V3 Industrial Teal theme */
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex flex-col w-full h-full group"
    >
      <div
        className="relative flex flex-col items-center text-center p-8 sm:p-10 w-full h-full overflow-hidden rounded-2xl transition-all duration-200 border"
        style={{
          backgroundColor: "var(--g-card-bg, #232F3E)",
          borderColor: "var(--g-card-border, rgba(255, 255, 255, 0.09))",
          boxShadow: "var(--g-card-shadow, 0 4px 24px rgba(0,0,0,0.35))",
        }}
      >
        <span className="v3-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

        <div className="w-full flex justify-between items-center mb-6">
          <span className="font-mono text-[12px] font-bold" style={{ color: "var(--primary, #17707E)" }}>
            {prefix}
          </span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
        </div>

        <div className="relative z-10 flex items-baseline gap-1 leading-none mb-4">
          <span
            className="font-black tracking-tight"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--g-heading, #F4F9F9)" }}
          >
            {count}
          </span>
          {suffix && (
            <span className="font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--primary, #17707E)" }}>
              {suffix}
            </span>
          )}
        </div>

        <p className="relative z-10 text-[12px] font-mono font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--soft-light, #F4F9F9)" }}>
          {label}
        </p>
        <p className="relative z-10 text-[14px] leading-relaxed max-w-[200px] font-normal" style={{ color: "var(--g-muted, #B9C4C9)" }}>
          {desc}
        </p>
        <div className="relative z-10 mt-6 h-[2px] w-10 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
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
      style={{
        backgroundColor: "var(--g-section-b, #141A22)",
        borderTop: "1px solid var(--g-border, rgba(255, 255, 255, 0.10))",
        borderBottom: "1px solid var(--g-border, rgba(255, 255, 255, 0.10))",
      }}
    >
      {/* Ambient teal glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] pointer-events-none opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(23,112,126,0.30) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border"
            style={{
              background: "rgba(23, 112, 126, 0.12)",
              borderColor: "rgba(23, 112, 126, 0.35)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary, #17707E)" }} />
            <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--primary, #17707E)" }}>
              OUR VISION
            </span>
          </div>

          <h2
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold leading-[1.08] tracking-tight mb-5"
            style={{ color: "var(--g-heading, #F4F9F9)" }}
          >
            What is our vision for industrial automation in the GCC?
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-relaxed" style={{ color: "var(--g-muted, #B9C4C9)" }}>
            Since 2008, Texas Technical Services has pioneered world-class industrial automation and flow measurement solutions for leading energy and process facilities across the Middle East.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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

        {/* Certification strip matching homepage */}
        <div className="text-center mt-14 pt-10 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          <p className="text-[12px] font-mono font-medium tracking-[2.5px] uppercase" style={{ color: "var(--g-muted, #B9C4C9)" }}>
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait & Dubai
          </p>
          <div className="flex items-center justify-center gap-5 mt-4">
            {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate-white.png"].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-16 h-16 block hover:opacity-80 transition-opacity">
                <Image src={src} alt="" fill className="object-contain" sizes="64px" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
