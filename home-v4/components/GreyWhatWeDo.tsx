"use client";
/* Kit D — Grey: light silver gradient section matching 'Our Vision' theme with glass cards and orange accents */
import Link from "next/link";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: 18,  suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: 8,   suffix: "",  label: "Industries" },
  { value: 100, suffix: "%", label: "ISO Quality" },
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
  value, suffix, label, index, started,
}: { value: number; suffix: string; label: string; index: number; started: boolean }) {
  const count = useLiquidCounter(value, started, index * 160);
  const isMobile = useIsMobile();
  return (
    <div
      className="relative px-6 py-5 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: isMobile ? "none" : "blur(20px)",
        WebkitBackdropFilter: isMobile ? "none" : "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.75)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <p
        className="relative z-10 text-[2rem] sm:text-[2.2rem] font-black leading-none tracking-tight"
        style={{ color: "#C2410C" }}
      >
        {count}{suffix}
      </p>
      <p
        className="relative z-10 text-[12px] mt-2 font-bold tracking-[1.5px] uppercase"
        style={{ color: "#4B5563" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function GreyWhatWeDo() {
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)",
      }}
      suppressHydrationWarning
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-col max-w-3xl">
            {/* Eyebrow label ("WHAT WE DO"): peach/orange accent pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 w-fit"
              style={{
                background: "rgba(232, 147, 90, 0.15)",
                border: "1px solid rgba(232, 147, 90, 0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#C2410C" }} />
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{ color: "#C2410C", fontFamily: "var(--font-mono, monospace)" }}
              >
                WHAT WE DO
              </span>
            </motion.div>

            {/* Heading text: fully that orange color */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="heading-gradient-rich text-[1.8rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight"
            >
              How do we engineer flow measurement and automation excellence?
            </motion.h2>
          </div>

          {/* "Explore all services" link: orange accent with animated arrow icon */}
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all duration-200 shrink-0 mb-1 group"
            style={{ color: "#C2410C" }}
          >
            <span>Explore all services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" style={{ color: "#C2410C" }} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <FadeUp delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            {/* Body paragraph text: readable dark charcoal #4B5563 matching 'Our Vision' */}
            <div className="flex flex-col gap-5">
              <p
                className="text-[16px] sm:text-[17px] leading-[1.8] font-normal"
                style={{ color: "#4B5563" }}
              >
                Extensive expertise in liquid and gas custody metering, Industrial Automation, and Inspection &amp; Testing. Our services cover metering control upgrades, maintenance, validation, and specialised consultancy.
              </p>
              <p
                className="text-[16px] sm:text-[17px] leading-[1.8] font-normal"
                style={{ color: "#4B5563" }}
              >
                Committed to end-to-end metering solutions through strategic OEM partnerships — metering skids, flow computers, CEMS analysers, and field instruments across oil &amp; gas, power, and commercial sectors.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-5">
            {/* Stat cards: glassmorphic stat cards in a balanced 2x2 grid */}
            <div ref={statRef} className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <StatCard
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  index={i}
                  started={statInView}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
