"use client";
/* Theme V5: GreyVision styled to Home V2 design system
   Tokens: --bg-alt (#141820), --border-default, --border-active (#E53935), --accent (#E53935)
*/
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
  prefix, value, suffix, label, desc, index, started 
}: { 
  prefix: string; value: number; suffix: string; label: string; desc: string; index: number; started: boolean 
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
        className="relative flex flex-col items-center text-center p-8 sm:p-10 w-full h-full overflow-hidden rounded-[6px] transition-all duration-200 border" 
        style={{ 
          backgroundColor: "var(--card, #1E2330)",
          borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
        }}
      >
        {/* Corner square indicator */}
        <span className="v5-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

        <div className="w-full flex justify-between items-center mb-6">
          <span className="font-mono text-[12px] font-bold text-[var(--accent)]">
            {prefix}
          </span>
          <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
        </div>

        <div className="relative z-10 flex items-baseline gap-1 leading-none mb-4">
          <span 
            className="font-bold tracking-tight text-white" 
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
          >
            {count}
          </span>
          {suffix && (
            <span className="font-bold text-[var(--accent)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {suffix}
            </span>
          )}
        </div>

        <p className="relative z-10 text-[12px] font-mono font-bold tracking-[0.15em] uppercase mb-2 text-white">
          {label}
        </p>
        <p className="relative z-10 text-[14px] leading-relaxed max-w-[200px] text-[#9CA3AF] font-normal">
          {desc}
        </p>
        <div className="relative z-10 mt-6 h-[2px] w-10 bg-[var(--accent)]" />
      </div>
      <style jsx>{`
        .group:hover div {
          border-color: var(--border-active, #E53935) !important;
        }
      `}</style>
    </motion.div>
  );
}

export default function GreyVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden v5-grid-bg"
      style={{ 
        backgroundColor: "var(--bg-alt, #141820)",
        borderTop: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))",
        borderBottom: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 border border-white/[0.08] bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
              OUR VISION
            </span>
          </div>

          <h2
            className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-bold leading-[1.08] tracking-tight mb-5 text-white"
          >
            What is our vision for industrial automation in the GCC?
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#F9FAFB]/90">
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
        <div className="text-center mt-14 pt-10 border-t border-white/[0.08]">
          <p className="text-[12px] font-mono font-medium tracking-[2.5px] uppercase text-[#9CA3AF]">
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait &amp; Dubai
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
