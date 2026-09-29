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
        className={`relative flex flex-col items-center text-center px-4 py-4 sm:px-8 sm:py-10 w-full h-full overflow-hidden rounded-[20px] sm:rounded-[28px] ${
          reduced ? "" : "transition-transform duration-300 group-hover:-translate-y-1"
        }`}
        style={{
          background: isFeatured ? "#4d7699" : "#5a86ad",
          border: isFeatured
            ? "1.5px solid rgba(255, 255, 255, 0.40)"
            : "1px solid rgba(255, 255, 255, 0.22)",
          boxShadow: isFeatured
            ? "0 20px 48px rgba(20, 40, 60, 0.22), 0 0 24px rgba(138, 48, 47, 0.14)"
            : "0 12px 36px rgba(20, 40, 60, 0.18)",
        }}
      >
        {/* Soft top-edge gradient line in #8a302f */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
          style={{
            background: isFeatured
              ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
          }}
        />

        {/* Subtle radial glow anchored at the bottom */}
        <div
          aria-hidden="true"
          className="absolute -bottom-14 inset-x-0 h-32 rounded-full pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.30) 0%, transparent 70%)",
          }}
        />

        {/* Clean large faint OUTLINE-ONLY number bleeding off bottom corner (hidden on small mobile) */}
        <span
          aria-hidden="true"
          className="hidden sm:block absolute -bottom-3 -right-2 text-[clamp(5.5rem,10vw,8rem)] font-black select-none leading-none pointer-events-none"
          style={{
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
            color: "transparent",
            opacity: 0.8,
          }}
        >
          {value}
          {suffix}
        </span>

        {/* Circular ring token icon */}
        <div className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/25 group-hover:border-white/50 bg-white/15 group-hover:bg-white/25 shadow-[0_0_12px_rgba(20,40,60,0.12)] transition-all duration-300 text-white mb-2 sm:mb-4">
          {icon}
        </div>

        {/* Large bold number with white text */}
        <div className="relative z-10 flex items-baseline justify-center gap-0.5 leading-none mb-1 sm:mb-2 text-white">
          <span
            className="font-black tracking-tight"
            style={{
              fontSize: "clamp(2.2rem, 5.2vw, 4.25rem)",
              lineHeight: 1,
            }}
          >
            {displayCount}
          </span>
          {suffix && (
            <span
              className="font-black pb-0.5"
              style={{
                fontSize: "clamp(1.3rem, 2.8vw, 2.3rem)",
                lineHeight: 1,
              }}
            >
              {suffix}
            </span>
          )}
        </div>

        {/* Label: white, wide letter-spacing */}
        <p
          className="relative z-10 text-[10px] sm:text-[12px] font-bold tracking-[2px] uppercase mb-1 sm:mb-1.5 text-white"
        >
          {label}
        </p>

        {/* Sub-line: light blue-grey */}
        <p
          className="relative z-10 text-xs sm:text-[14px] leading-snug max-w-[240px] font-normal text-[#dce6f0]"
        >
          {desc}
        </p>

        {/* Thin animated progress-style fill bar */}
        <div className="relative z-10 mt-3 sm:mt-6 w-full max-w-[120px] h-[2px] bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full w-full bg-white rounded-full origin-left"
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
        <div className="text-center mb-4 sm:mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-2 sm:mb-4"
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
            className="text-[clamp(1.5rem,3.8vw,3rem)] font-black leading-[1.15] max-w-2xl mx-auto tracking-tight"
            style={{ color: "#16202b" }}
          >
            What is our vision for industrial automation in the GCC?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch pt-1 sm:pt-2">
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
          className="text-center mt-5 pt-4 sm:mt-10 sm:pt-8 border-t"
          style={{ borderColor: "rgba(58, 110, 165, 0.12)" }}
        >
          <p className="text-[10px] sm:text-[12px] font-semibold tracking-[1.8px] sm:tracking-[2.5px] uppercase" style={{ color: "#8a94a3" }}>
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait & Dubai
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-2.5 sm:mt-4">
            {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate.png"].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-10 h-10 sm:w-16 sm:h-16 block">
                <Image src={src} alt="" fill className="object-contain" sizes="64px" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
