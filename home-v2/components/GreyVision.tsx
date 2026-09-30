"use client";
/* Theme V5: GreyVision with dimensional stat cards, radial glow, ring icons, and progress fill-bar */
import { useRef, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import BorderGlow from "./BorderGlow";

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
      <BorderGlow
        edgeSensitivity={30}
        glowColor="138 48 47"
        backgroundColor="transparent"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#8a302f"]}
        className="w-full h-full"
      >
        <div
          className={`relative flex flex-col items-center text-center px-6 py-9 sm:px-8 sm:py-10 w-full h-full overflow-hidden rounded-[28px] ${
            reduced ? "" : "transition-transform duration-300 group-hover:-translate-y-1"
          }`}
        style={{
          /* ── Light glassmorphism surface ── */
          background: isFeatured
            ? "linear-gradient(135deg, rgba(255,255,255,0.70) 0%, rgba(138,48,47,0.08) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.60) 0%, rgba(90,134,173,0.09) 100%)",
          backdropFilter: "blur(18px) saturate(1.35)",
          WebkitBackdropFilter: "blur(18px) saturate(1.35)",
          border: isFeatured
            ? "1px solid rgba(255,255,255,0.70)"
            : "1px solid rgba(255,255,255,0.52)",
          boxShadow: isFeatured
            ? "0 16px 40px rgba(20,50,90,0.14), 0 0 0 1px rgba(255,255,255,0.16) inset, 0 0 24px rgba(138,48,47,0.08)"
            : "0 8px 28px rgba(20,50,90,0.10), 0 0 0 1px rgba(255,255,255,0.10) inset",
        }}
      >
        {/* Inner top rim highlight — light catching glass edge */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.95) 60%, transparent 100%)",
          }}
        />

        {/* Brand-red top-edge glow line */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
          style={{
            background: isFeatured
              ? "linear-gradient(90deg, transparent, rgba(138,48,47,0.75), transparent)"
              : "linear-gradient(90deg, transparent, rgba(138,48,47,0.45), transparent)",
          }}
        />

        {/* Subtle radial brand-red glow at the bottom */}
        <div
          aria-hidden="true"
          className="absolute -bottom-14 inset-x-0 h-32 rounded-full pointer-events-none opacity-20 group-hover:opacity-55 transition-opacity duration-500 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(138,48,47,0.45) 0%, transparent 70%)",
          }}
        />

        {/* Outline-only large watermark number bleeding off bottom corner */}
        <span
          aria-hidden="true"
          className="absolute -bottom-3 -right-2 text-[clamp(5.5rem,10vw,8rem)] font-black select-none leading-none pointer-events-none"
          style={{
            WebkitTextStroke: "1.5px rgba(20,32,43,0.06)",
            color: "transparent",
            opacity: 0.8,
          }}
        >
          {value}
          {suffix}
        </span>

        {/* Circular ring token icon — brand-red on light glass */}
        <div className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center border border-[rgba(138,48,47,0.22)] group-hover:border-[#8a302f]/50 bg-white/60 group-hover:bg-[#8a302f]/10 shadow-[0_0_10px_rgba(138,48,47,0.08)] group-hover:shadow-[0_0_16px_rgba(138,48,47,0.25)] transition-all duration-300 text-[#8a302f] mb-4">
          {icon}
        </div>

        {/* Large bold number with brand-red gradient */}
        <div className="relative z-10 flex items-baseline justify-center gap-0.5 leading-none mb-2">
          <span
            className="font-black tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 5.2vw, 4.25rem)",
              background: "linear-gradient(180deg, #16202b 10%, #8a302f 100%)",
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
                background: "linear-gradient(180deg, #6e2624 10%, #8a302f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              {suffix}
            </span>
          )}
        </div>

        {/* Label: dark navy for legibility on light glass */}
        <p
          className="relative z-10 text-[11px] sm:text-[12px] font-bold tracking-[2.4px] uppercase mb-1.5"
          style={{ color: "#16202b" }}
        >
          {label}
        </p>

        {/* Sub-line: muted color */}
        <p
          className="relative z-10 text-[13px] sm:text-[14px] leading-snug max-w-[210px] font-normal"
          style={{ color: "#4a5568" }}
        >
          {desc}
        </p>

        {/* Thin animated progress-style fill bar in #8a302f */}
        <div className="relative z-10 mt-6 w-full max-w-[120px] h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(58,110,165,0.18)" }}>
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
      </BorderGlow>
    </motion.div>
  );
}

export default function GreyVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 overflow-hidden" style={{ background: "transparent" }}>
      {/* Glassmorphism ambient blobs — give the glass cards interesting light to refract */}
      <div
        aria-hidden="true"
        className="absolute top-[10%] left-[15%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90,134,173,0.22) 0%, transparent 65%)",
          filter: "blur(75px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[5%] right-[10%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.16) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] right-[30%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.30) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
            <span className="text-[11px] font-bold tracking-[4px] uppercase" style={{ color: "#8a302f" }}>
              OUR VISION
            </span>
            <span className="w-6 h-px" style={{ background: "#8a302f" }} />
          </div>

          <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-[1.12] tracking-tight mb-5 text-[#16202b]">
            What is our vision for industrial automation in the GCC?
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#4a5568] max-w-2xl mx-auto">
            Since 2008, Texas Technical Services has pioneered world-class industrial automation and flow measurement solutions for leading energy and process facilities across the Middle East.
          </p>
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

        {/* Certification strip matching homepage */}
        <div className="text-center mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-[rgba(58,110,165,0.15)]">
          <p className="text-[11px] sm:text-[12px] font-mono font-medium tracking-[1.5px] sm:tracking-[2.5px] uppercase text-[#8a94a3] px-2">
            ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified · Est. 2008 · Kuwait &amp; Dubai
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-3 sm:mt-4">
            {["/about/cert-iso9001.png", "/about/cert-iso14001.png", "/about/cert-iso45001.png", "/about/cert-uasl.png", "/about/cert-accurate-white.png"].map((src) => (
              <Link key={src} href="/certifications/" className="relative w-12 h-12 sm:w-16 sm:h-16 block hover:opacity-80 transition-opacity">
                <Image src={src} alt="" fill className="object-contain" sizes="(max-width: 640px) 48px, 64px" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
