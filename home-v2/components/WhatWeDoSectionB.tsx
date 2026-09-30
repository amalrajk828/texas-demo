"use client";

import React, { useCallback, useRef, useState, useEffect } from "react";
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
  key?: string;
}) {
  const count = useCountUp(value, started, index * 120);

  return (
    <div
      className={`flex flex-col justify-center px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 relative ${
        index % 2 === 1 ? "border-l border-[rgba(58,110,165,0.20)] pl-3.5 sm:pl-6" : ""
      } ${
        index >= 2 ? "border-t border-[rgba(58,110,165,0.20)] lg:border-t-0 pt-2.5 lg:pt-0" : ""
      } ${
        index > 0 ? "lg:border-l lg:border-[rgba(58,110,165,0.20)]" : ""
      }`}
    >
      <span
        className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-none mb-1"
        style={{
          background: "linear-gradient(180deg, #16202b 0%, #8a302f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </span>
      <span className="font-mono text-[10px] sm:text-xs text-[#4a5568] uppercase tracking-wider font-semibold">
        {label}
      </span>
    </div>
  );
}

type TiltImageCardProps = {
  src: string;
  alt: string;
  sizes: string;
  aspectRatio: string;
  restingRotate: number;
  restingY: number;
  delay: number;
  isActive: boolean;
  reducedMotion: boolean;
  className: string;
};

function TiltImageCard({
  src,
  alt,
  sizes,
  aspectRatio,
  restingRotate,
  restingY,
  delay,
  isActive,
  reducedMotion,
  className,
}: TiltImageCardProps) {
  const [isLifted, setIsLifted] = useState(false);
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const scaleTarget = useMotionValue(1);
  const glareOpacityTarget = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, { stiffness: 170, damping: 20 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 170, damping: 20 });
  const scale = useSpring(scaleTarget, { stiffness: 170, damping: 20 });
  const glareOpacity = useSpring(glareOpacityTarget, { stiffness: 170, damping: 20 });
  const glareX = useTransform(rotateY, [-11, 11], [-32, 32]);
  const glareY = useTransform(rotateX, [-11, 11], [24, -24]);

  const resetInteraction = useCallback(() => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
    scaleTarget.set(1);
    glareOpacityTarget.set(0);
    setIsLifted(false);
  }, [glareOpacityTarget, rotateXTarget, rotateYTarget, scaleTarget]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion || event.pointerType !== "mouse") return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      rotateXTarget.set(y * -22);
      rotateYTarget.set(x * 22);
      scaleTarget.set(1.04);
      glareOpacityTarget.set(0.22);
      setIsLifted(true);
    },
    [glareOpacityTarget, reducedMotion, rotateXTarget, rotateYTarget, scaleTarget]
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion || event.pointerType === "mouse") return;
      scaleTarget.set(1.04);
      setIsLifted(true);
    },
    [reducedMotion, scaleTarget]
  );

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1, scale: 1, rotate: restingRotate, y: restingY }
          : { opacity: 0, scale: 0, rotate: restingRotate, y: restingY + 18 }
      }
      animate={
        reducedMotion
          ? { opacity: 1, scale: 1, rotate: restingRotate, y: restingY }
          : isActive
            ? { opacity: 1, scale: 1, rotate: restingRotate, y: restingY }
            : { opacity: 0, scale: 0, rotate: restingRotate, y: restingY + 18 }
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 170,
              damping: 16,
              delay: isActive ? delay : 0,
            }
      }
      className={`relative shrink-0 ${className}`}
      style={{ zIndex: isLifted ? 50 : restingRotate > 0 ? 20 : 10 }}
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerEnter={() => {
          if (!reducedMotion) {
            scaleTarget.set(1.04);
            setIsLifted(true);
          }
        }}
        onPointerLeave={resetInteraction}
        onPointerDown={handlePointerDown}
        onPointerUp={resetInteraction}
        onPointerCancel={resetInteraction}
        className="relative w-full overflow-hidden rounded-[24px] bg-white"
        style={{
          aspectRatio,
          rotateX,
          rotateY,
          scale,
          transformPerspective: 1100,
          transformStyle: "preserve-3d",
          border: "5px solid rgba(255, 255, 255, 0.84)",
          boxShadow: isLifted
            ? "0 28px 58px rgba(0, 0, 0, 0.44)"
            : "0 18px 42px rgba(0, 0, 0, 0.36)",
          transition: "box-shadow 220ms ease",
          willChange: "transform",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" quality={90} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
        />
        <motion.div
          aria-hidden="true"
          className="absolute -inset-[35%] pointer-events-none"
          style={{
            x: glareX,
            y: glareY,
            opacity: reducedMotion ? 0 : glareOpacity,
            background:
              "linear-gradient(125deg, transparent 28%, rgba(255,255,255,0.92) 48%, rgba(255,255,255,0.20) 57%, transparent 72%)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function WhatWeDoSectionB() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [collageActive, setCollageActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleSectionVisibility = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string; isWinner: boolean }>).detail;
      if (detail?.id === "section-whatwedo-b") {
        setCollageActive(detail.isWinner);
      }
    };

    window.addEventListener("v1-section-visibility", handleSectionVisibility);
    setCollageActive(Boolean(sectionRef.current?.closest('[data-stage-active="true"]')));

    return () => window.removeEventListener("v1-section-visibility", handleSectionVisibility);
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
      {/* Background radial soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(58,110,165,0.10) 0%, transparent 70%)",
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
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold tracking-tight text-[#16202b] leading-[1.14] mb-3 sm:mb-5">
            Engineered Excellence in Custody Metering &amp; Automation
          </h2>

          {/* Paragraph 1 (Exact text) */}
          <p className="text-xs sm:text-base leading-relaxed sm:leading-[1.8] text-[#4a5568] mb-3 sm:mb-4 max-w-xl">
            Extensive expertise in liquid and gas custody metering, Industrial Automation,
            and Inspection &amp; Testing. Our services cover metering control upgrades,
            maintenance, validation, and specialised consultancy.
          </p>

          {/* Paragraph 2 (Exact text) */}
          <p className="text-xs sm:text-base leading-relaxed sm:leading-[1.8] text-[#4a5568] mb-5 sm:mb-7 max-w-xl">
            Committed to end-to-end metering solutions through strategic OEM partnerships
            — metering skids, flow computers, CEMS analysers, and field instruments across
            oil &amp; gas, power, and commercial sectors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contacts/"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 text-white font-bold px-6 sm:px-7 py-3 rounded-xl text-[13px] sm:text-[14px] uppercase tracking-wider transition-all hover:-translate-y-0.5"
              style={{
                background: "#8a302f",
                boxShadow: "0 6px 20px rgba(138,48,47,0.30)",
              }}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services/"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 text-[#16202b] font-semibold px-6 sm:px-7 py-3 rounded-xl text-[13px] sm:text-[14px] border transition-all hover:bg-[#eef3f8]"
              style={{
                background: "#ffffff",
                borderColor: "rgba(58,110,165,0.16)",
                boxShadow: "0 2px 8px rgba(20,50,90,0.04)",
              }}
            >
              <span>Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#8a302f]" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Image Collage (~52%) ── */}
        <div className="w-full lg:w-[52%] flex items-center justify-center py-4 sm:py-6 lg:py-8 px-2 overflow-visible">
          <div
            className="flex w-full max-w-[400px] sm:w-[90%] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] items-center justify-center pr-[4%] sm:pr-[6%] overflow-visible"
            style={{ perspective: 1100 }}
          >
            <TiltImageCard
              src="/our-team/Oil-Gas.jpg"
              alt="Oil & Gas Refinery Facility"
              sizes="(max-width: 1024px) 60vw, 36vw"
              aspectRatio="16 / 11"
              restingRotate={-4}
              restingY={-8}
              delay={0}
              isActive={collageActive}
              reducedMotion={reducedMotion}
              className="w-[70%]"
            />

            <TiltImageCard
              src="/our-team/whatwedo.jpg"
              alt="Plant technician conducting inspection"
              sizes="(max-width: 1024px) 44vw, 26vw"
              aspectRatio="4 / 3"
              restingRotate={4}
              restingY={12}
              delay={0.36}
              isActive={collageActive}
              reducedMotion={reducedMotion}
              className="-ml-[12%] sm:-ml-[14%] w-[50%]"
            />
          </div>
        </div>
      </div>

      {/* ══ BOTTOM: Full-width Connected Stats Strip ══ */}
      <div className="relative z-10 w-full mt-3 sm:mt-6">
        <div
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-0 p-2.5 sm:p-4 lg:py-3.5 lg:px-6 rounded-2xl lg:rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(90,134,173,0.10) 100%)",
            backdropFilter: "blur(18px) saturate(1.35)",
            WebkitBackdropFilter: "blur(18px) saturate(1.35)",
            border: "1px solid rgba(255,255,255,0.50)",
            boxShadow: "0 8px 32px rgba(20,50,90,0.10), 0 0 0 1px rgba(255,255,255,0.10) inset",
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
