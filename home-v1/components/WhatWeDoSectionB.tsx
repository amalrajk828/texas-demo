"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

const STATS = [
  { value: 18, suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Clients" },
  { value: 8, suffix: "", label: "Industries" },
  { value: 100, suffix: "%", label: "ISO Quality" },
];

function useCountUp(target: number, started: boolean, delayMs: number) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 35, damping: 18, mass: 1 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      motionVal.set(0);
      return;
    }
    const timer = setTimeout(() => {
      motionVal.set(target);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [started, target, delayMs, motionVal]);

  useEffect(() => {
    return display.on("change", (v) => setCount(v));
  }, [display]);

  return count;
}

function StatCell({
  value,
  suffix,
  label,
  index,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  started: boolean;
}) {
  const count = useCountUp(value, started, index * 120);

  return (
    <div
      className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-3.5 relative"
      style={{
        borderLeft: index > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <span
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none bg-gradient-to-r from-[#e4b4b4] via-[#8a302f] to-[#cf6561] bg-clip-text text-transparent mb-1"
        style={{ filter: "drop-shadow(0 2px 10px rgba(138,48,47,0.3))" }}
      >
        {count}
        {suffix}
      </span>
      <span className="font-mono text-[11px] sm:text-xs text-[#A8A29E] uppercase tracking-wider font-semibold">
        {label}
      </span>
    </div>
  );
}

export default function WhatWeDoSectionB() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Capabilities and Experience"
      className="relative w-full h-full flex flex-col justify-between select-none"
      style={{
        paddingLeft: "clamp(16px, 3.5vw, 48px)",
        paddingRight: "clamp(16px, 3.5vw, 48px)",
      }}
    >
      {/* Background radial warmth glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ══ TOP / MAIN ROW: Left Text + Right Image Collage (Mirrored) ══ */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex-1 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14 my-auto">
        {/* ── LEFT COLUMN: Text & Buttons (~48%) ── */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center">
          {/* Label chip */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#8a302f]" />
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-[#8a302f]">
              WHAT WE DO
            </span>
            <span className="w-6 h-px bg-[#8a302f]" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight text-[#F4F1EE] leading-[1.14] mb-5">
            Engineered Excellence in Custody Metering &amp; Automation
          </h2>

          {/* Paragraph 1 (Exact text) */}
          <p className="text-[15px] sm:text-base leading-[1.8] text-[#A8A29E] mb-4 max-w-xl">
            Extensive expertise in liquid and gas custody metering, Industrial Automation,
            and Inspection &amp; Testing. Our services cover metering control upgrades,
            maintenance, validation, and specialised consultancy.
          </p>

          {/* Paragraph 2 (Exact text) */}
          <p className="text-[15px] sm:text-base leading-[1.8] text-[#A8A29E] mb-7 max-w-xl">
            Committed to end-to-end metering solutions through strategic OEM partnerships
            — metering skids, flow computers, CEMS analysers, and field instruments across
            oil &amp; gas, power, and commercial sectors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-[14px] uppercase tracking-wider transition-all hover:-translate-y-0.5"
              style={{
                background: "#8a302f",
                boxShadow: "0 6px 20px rgba(138,48,47,0.35)",
              }}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-[#F4F1EE] font-semibold px-7 py-3.5 rounded-xl text-[14px] border transition-all hover:bg-white/[0.08]"
              style={{
                background: "rgba(15,17,21,0.65)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#8a302f]" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Image Collage (~52%) ── */}
        <div className="w-full lg:w-[52%] flex items-center justify-center">
          <div className="relative w-full max-w-[580px] mr-4 sm:mr-8 mb-4 sm:mb-6">
            {/* Main Image (Refinery at Sunset): rounded-[32px] + subtle scale */}
            <motion.div
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: reducedMotion ? 1 : 0.94 }
              }
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-[32px] overflow-hidden group shadow-2xl"
              style={{
                aspectRatio: "16/11",
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(15,17,21,0.85)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              <div
                className="relative w-full h-full transition-transform duration-[8000ms] ease-out group-hover:scale-105"
                style={{
                  transform: isInView && !reducedMotion ? "scale(1.02)" : "scale(1)",
                  transition: "transform 6000ms ease-out",
                }}
              >
                <Image
                  src="/our-team/Oil-Gas.jpg"
                  alt="Oil & Gas Refinery Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                />
              </div>

              {/* Gradient Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
              />

              {/* Red Corner Accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-12 h-[2px] pointer-events-none"
                style={{ background: "#8a302f" }}
              />
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-[2px] h-12 pointer-events-none"
                style={{ background: "#8a302f" }}
              />
            </motion.div>

            {/* Badge Card: "5 CERTIFICATIONS" moved to TOP-RIGHT corner of main image */}
            <motion.div
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.85, y: reducedMotion ? 0 : -8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: reducedMotion ? 1 : 0.85, y: reducedMotion ? 0 : -8 }
              }
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl shadow-xl"
              style={{
                background: "rgba(15,17,21,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <Link href="/certifications/" className="relative w-11 h-11 shrink-0 block">
                <Image
                  src="/about/cert-iso9001.png"
                  alt="ISO 9001:2015"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </Link>
              <div className="pr-1">
                <p className="text-[#F4F1EE] text-[10px] font-bold tracking-[2px] uppercase leading-none font-mono">
                  5 Certifications
                </p>
                <p className="text-white/60 text-[11px] mt-1 leading-none">
                  ISO · UASL · Accurate
                </p>
              </div>
            </motion.div>

            {/* Inset Image: Worker in blue helmet overlapping BOTTOM-LEFT corner with #8a302f border */}
            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.88,
                rotate: reducedMotion ? 0 : -3,
              }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : {
                      opacity: 0,
                      scale: reducedMotion ? 1 : 0.88,
                      rotate: reducedMotion ? 0 : -3,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 15,
                delay: 0.28,
              }}
              className="absolute -bottom-4 -left-4 sm:-bottom-7 sm:-left-7 w-[46%] rounded-2xl overflow-hidden shadow-2xl z-20"
              style={{
                aspectRatio: "4/3",
                border: "2px solid #8a302f",
                boxShadow: "0 16px 40px rgba(0,0,0,0.7), 0 0 20px rgba(138,48,47,0.3)",
              }}
            >
              <Image
                src="/our-team/whatwedo.jpg"
                alt="Plant technician conducting inspection"
                fill
                sizes="(max-width: 1024px) 40vw, 22vw"
                className="object-cover"
                quality={90}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM: Full-width Connected Stats Strip ══ */}
      <div className="relative z-10 w-full mt-4 sm:mt-6">
        <div
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 p-3.5 sm:p-4 lg:py-3.5 lg:px-6 rounded-2xl lg:rounded-3xl"
          style={{
            background: "rgba(15,17,21,0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {STATS.map((s, idx) => (
            <StatCell
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              index={idx}
              started={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
