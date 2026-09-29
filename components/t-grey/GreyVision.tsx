"use client";
/* Kit D — Grey: dimensional stat cards with radial glow, ring icons, and progress fill-bar */
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc: string;
  icon: ReactNode;
}

const STATS: StatItem[] = [
  {
    value: 400,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    desc: "Across oil & gas, refinery & beyond",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: "+",
    label: "GLOBAL PARTNERS",
    desc: "Trusted technology alliances worldwide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    value: 18,
    suffix: "",
    label: "YEARS OF EXCELLENCE",
    desc: "Delivering precision since 2008",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
];

function useLiquidCounter(target: number, started: boolean, delay: number, reduced: boolean) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 28, damping: 18, mass: 1.2 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [count, setCount] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      setCount(target);
      return;
    }
    if (!started) return;
    const t = setTimeout(() => motionVal.set(target), delay);
    return () => clearTimeout(t);
  }, [started, target, delay, motionVal, reduced]);

  useEffect(() => {
    if (reduced) return;
    return display.on("change", (v) => setCount(v));
  }, [display, reduced]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  desc,
  icon,
  index,
  started,
  reduced,
}: StatItem & {
  index: number;
  started: boolean;
  reduced: boolean;
}) {
  const displayCount = useLiquidCounter(value, started, index * 180, reduced);
  const isFeatured = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={started ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.65, delay: index * 0.16, ease: [0.16, 1, 0.3, 1] }
      }
      className={`relative flex flex-col w-full h-full group ${
        isFeatured ? "lg:-translate-y-2" : ""
      }`}
    >
      <div
        className={`relative flex flex-col items-center text-center px-6 py-9 sm:px-8 sm:py-10 w-full h-full overflow-hidden rounded-[28px] ${
          reduced ? "" : "transition-transform duration-300 group-hover:-translate-y-1"
        }`}
        style={{
          background: isFeatured ? "rgba(24,26,33,0.85)" : "rgba(20,22,27,0.75)",
          border: isFeatured
            ? "1px solid rgba(138,48,47,0.32)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: isFeatured
            ? "0 12px 36px rgba(0,0,0,0.40), 0 0 20px rgba(138,48,47,0.12)"
            : "0 8px 30px rgba(0,0,0,0.30)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Soft top-edge gradient line in #8a302f */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
          style={{
            background: isFeatured
              ? "linear-gradient(90deg, transparent, rgba(138,48,47,0.85), transparent)"
              : "linear-gradient(90deg, transparent, rgba(138,48,47,0.55), transparent)",
          }}
        />

        {/* Subtle radial #8a302f glow anchored at the bottom */}
        <div
          aria-hidden="true"
          className="absolute -bottom-14 inset-x-0 h-32 rounded-full pointer-events-none opacity-30 group-hover:opacity-85 transition-opacity duration-500 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(138,48,47,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Clean large faint OUTLINE-ONLY number bleeding off bottom corner */}
        <span
          aria-hidden="true"
          className="absolute -bottom-3 -right-2 text-[clamp(5.5rem,10vw,8rem)] font-black select-none leading-none pointer-events-none"
          style={{
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.05)",
            color: "transparent",
            opacity: 0.8,
          }}
        >
          {value}
          {suffix}
        </span>

        {/* Circular ring token icon */}
        <div className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#8a302f]/60 bg-white/[0.03] group-hover:bg-[#8a302f]/10 shadow-[0_0_12px_rgba(138,48,47,0.12)] group-hover:shadow-[0_0_16px_rgba(138,48,47,0.35)] transition-all duration-300 text-[#f4a29f] mb-4">
          {icon}
        </div>

        {/* Large bold number with #8a302f gradient */}
        <div className="relative z-10 flex items-baseline justify-center gap-0.5 leading-none mb-2">
          <span
            className="font-black tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 5.2vw, 4.25rem)",
              background: "linear-gradient(180deg, #FFFFFF 15%, #F08E8B 55%, #8a302f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            {displayCount}
          </span>
          {suffix && (
            <span
              className="font-black pb-0.5"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.3rem)",
                background: "linear-gradient(180deg, #F08E8B 20%, #8a302f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              {suffix}
            </span>
          )}
        </div>

        {/* Label: slightly smaller, wider letter-spacing, tight to number */}
        <p
          className="relative z-10 text-[11px] sm:text-[12px] font-bold tracking-[2.4px] uppercase mb-1.5"
          style={{ color: "#F4F1EE" }}
        >
          {label}
        </p>

        {/* Sub-line: muted color */}
        <p
          className="relative z-10 text-[13px] sm:text-[14px] leading-snug max-w-[210px] font-normal"
          style={{ color: "#A8A29E" }}
        >
          {desc}
        </p>

        {/* Thin animated progress-style fill bar in #8a302f */}
        <div className="relative z-10 mt-6 w-full max-w-[120px] h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
          <motion.div
            className="h-full w-full bg-[#8a302f] rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={started ? { scaleX: 1 } : { scaleX: 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.85,
                    delay: 0.25 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          />
        </div>
      </div>
    </motion.div>
  );
}


export default function GreyVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 overflow-hidden" style={{ background: "transparent" }}>
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>
              Our Vision
            </span>
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(1.9rem,3.8vw,3rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight"
            style={{ color: "#F4F1EE" }}
          >
            What is our vision for industrial automation in the GCC?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-2">
          {STATS.map((s, i) => (
            <StatCard
              key={s.label}
              {...s}
              index={i}
              started={inView}
              reduced={Boolean(reduced)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-[12px] font-semibold tracking-[2.5px] uppercase" style={{ color: "#A8A29E" }}>
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
