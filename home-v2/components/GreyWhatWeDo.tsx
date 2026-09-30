"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Gauge, FlaskConical, Cpu } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const SERVICES = [
  {
    Icon: Gauge,
    num: "01",
    title: "Flow Measurement & Control",
    desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications.",
  },
  {
    Icon: FlaskConical,
    num: "02",
    title: "Inspection & Testing",
    desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support.",
  },
  {
    Icon: Cpu,
    num: "03",
    title: "Industrial Automation",
    desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors.",
  },
];

const BODY = [
  "Extensive expertise in liquid and gas custody metering, Industrial Automation, and Inspection & Testing. Our services cover metering control upgrades, maintenance, validation, and specialised consultancy.",
  "Committed to end-to-end metering solutions through strategic OEM partnerships — metering skids, flow computers, CEMS analysers, and field instruments across oil & gas, power, and commercial sectors.",
];

const STATS = [
  { value: 18,  suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: 8,   suffix: "",  label: "Industries" },
  { value: 100, suffix: "%", label: "ISO Quality" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
  return (
    <div
      className="relative px-5 py-4 w-full h-full rounded-[6px] overflow-hidden transition-all duration-300 group border"
      style={{
        background: "var(--card, #1E2330)",
        borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
      }}
    >
      <span className="v5-corner-indicator opacity-60 group-hover:opacity-100" />
      <p className="relative z-10 text-[1.7rem] font-bold leading-none text-white">
        {count}<span style={{ color: "var(--accent, #E53935)" }}>{suffix}</span>
      </p>
      <p className="relative z-10 text-[12px] mt-1.5 font-mono uppercase tracking-[0.1em] text-[#9CA3AF]">{label}</p>
    </div>
  );
}

export default function GreyWhatWeDo() {
  const statRef = useRef<HTMLDivElement>(null);
  const statInView = useInView(statRef, { once: true, margin: "-60px" });
  const isMobile = useIsMobile();

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden v5-grid-bg"
      style={{
        backgroundColor: "var(--bg, #0F1117)",
        borderBottom: "1px solid var(--border-default, rgba(255, 255, 255, 0.08))",
      }}
      suppressHydrationWarning
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* Section Header */}
        <div className="flex flex-col text-center items-center gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-col items-center">
            {/* Kept "WHAT WE DO" eyebrow label style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] mb-4 w-fit border border-white/[0.08] bg-white/[0.03]"
            >
              <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent, #E53935)]" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-white/80">
                WHAT WE DO
              </span>
            </motion.div>

            {/* Heading matching Homepage copy */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-[1.8rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.08] tracking-tight block text-white"
            >
              What precision solutions do we deliver for critical industries?
            </motion.h2>
          </div>

          {/* Supporting paragraph matching Homepage copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:pb-1 mx-auto max-w-3xl"
          >
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#F9FAFB]/90">
              Texas Technical Services delivers precision-engineered solutions across flow measurement,
              inspection, and industrial automation — trusted by leading operators since 2008.
            </p>
          </motion.div>
        </div>

        {/* 3-Card Layout for Services matching Homepage structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.title} delay={0.08 + i * 0.1}>
              <div className="relative group h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative rounded-[6px] flex flex-col h-full overflow-hidden transition-all duration-200 border group"
                  style={{
                    backgroundColor: "var(--card, #1E2330)",
                    borderColor: "var(--border-default, rgba(255, 255, 255, 0.08))",
                  }}
                >
                  <span className="v5-corner-indicator opacity-60 group-hover:opacity-100 group-hover:scale-125" />

                  <div className="relative z-10 p-7 sm:p-8 flex flex-col flex-1">
                    {/* Top Row: Icon box top-left, Monospace Number top-right */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-[5px] flex items-center justify-center transition-all duration-200"
                        style={{
                          background: "rgba(229, 57, 53, 0.12)",
                          border: "1px solid rgba(229, 57, 53, 0.35)",
                        }}
                      >
                        <svc.Icon className="w-6 h-6 text-[var(--accent, #E53935)]" strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-[12px] font-bold text-[var(--accent, #E53935)]">
                        {svc.num}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[1.25rem] font-bold text-white leading-snug mb-3 tracking-tight">
                      {svc.title}
                    </h3>

                    {/* Body text */}
                    <p className="text-[15px] leading-relaxed flex-1 font-normal text-[#F9FAFB]/80 mb-6">
                      {svc.desc}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-auto pt-4 border-t border-white/[0.08]">
                      <Link
                        href="/services/"
                        className="inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-200"
                        style={{ color: "var(--accent, #E53935)" }}
                      >
                        <span>Learn more about our services</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Section Below: Certifications Image + Extensive Expertise Paragraph + Stats & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <FadeUp className="relative pb-12 pr-12 lg:pb-16 lg:pr-16">
            <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none">
              {/* Large Image Frame (Refinery) */}
              <div
                className="relative rounded-[6px] overflow-hidden shadow-2xl border border-white/[0.12]"
                style={{ aspectRatio: "16/11" }}
              >
                <Image
                  src="/our-team/Oil-Gas.jpg"
                  alt="Oil & Gas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"
                />
                {/* Red corner accent */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#E53935]" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#E53935]" />
              </div>

              {/* Smaller Overlapping Image Frame (Worker in PPE) */}
              <div
                className="absolute bottom-[-8%] right-[-8%] w-[44%] rounded-[6px] overflow-hidden shadow-2xl border-2 border-white/20"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/our-team/whatwedo.jpg"
                  alt="What we do"
                  fill
                  sizes="(max-width: 1024px) 30vw, 15vw"
                  className="object-cover"
                  quality={90}
                />
              </div>

              {/* Red Badge - ISO 9001:2015 */}
              <div
                className="absolute top-4 left-4 rounded-[4px] px-4 py-2.5 shadow-xl z-10 flex items-center gap-3 border border-[#E53935]"
                style={{
                  backgroundColor: "var(--accent, #E53935)",
                }}
              >
                <Link href="/certifications/" className="relative w-12 h-12 shrink-0 block">
                  <Image src="/about/cert-iso9001.png" alt="ISO 9001:2015" fill className="object-contain" sizes="48px" />
                </Link>
                <div>
                  <p className="text-white text-[10px] font-mono font-bold tracking-[0.15em] uppercase leading-none">5 Certifications</p>
                  <p className="text-white/90 text-[11px] font-mono mt-1 leading-none">ISO · UASL · Accurate</p>
                </div>
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={0.08}>
              <div className="space-y-4 mb-8 text-[#F9FAFB]/90">
                {BODY.map((p, i) => (
                  <p key={i} className="text-[16px] leading-[1.8] font-normal">
                    {p}
                  </p>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.14}>
              {/* Stats with scroll-triggered count-up */}
              <div ref={statRef} className="grid grid-cols-2 gap-3 mb-9">
                {STATS.map((s, i) => (
                  <StatCard key={s.label} {...s} index={i} started={statInView} />
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacts/"
                  className="v5-btn-primary"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/"
                  className="v5-btn-secondary"
                >
                  <span>Our Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          border-color: var(--border-active, #E53935) !important;
        }
      `}</style>
    </section>
  );
}
