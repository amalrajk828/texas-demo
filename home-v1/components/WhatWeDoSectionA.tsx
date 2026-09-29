"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Gauge, FlaskConical, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    Icon: Gauge,
    num: "01",
    title: "Flow Measurement & Control",
    desc: "Comprehensive custody metering, flow computers, metering skids, and control system upgrades for liquid, gas, and water applications.",
    href: "/services/",
  },
  {
    Icon: FlaskConical,
    num: "02",
    title: "Inspection & Testing",
    desc: "Specialised NDT, validation and mechanical testing of metering systems with full ISO-certified consultancy support.",
    href: "/services/",
  },
  {
    Icon: Cpu,
    num: "03",
    title: "Industrial Automation",
    desc: "End-to-end plant automation — PLC, SCADA, HMI, VFDs and CEMS for oil & gas, power, and manufacturing sectors.",
    href: "/services/",
  },
];

export default function WhatWeDoSectionA() {
  // Default to card 01 (index 0) expanded at rest
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });

  // Touch swipe handling for mobile
  const touchStartXRef = useRef<number | null>(null);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((c) => (c + 1) % SERVICES.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((c) => (c - 1 + SERVICES.length) % SERVICES.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        setActive((c) => (c + 1) % SERVICES.length);
      } else {
        setActive((c) => (c - 1 + SERVICES.length) % SERVICES.length);
      }
    }
    touchStartXRef.current = null;
  };

  const handleRowBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setActive(0);
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="What We Do"
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{
        paddingLeft: "clamp(16px, 3.5vw, 48px)",
        paddingRight: "clamp(16px, 3.5vw, 48px)",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 my-auto">
        {/* ══ LEFT COLUMN (~40%): Label, Heading, Subtext, Indicators ══ */}
        <div className="w-full lg:w-[40%] shrink-0 flex flex-col justify-center">
          {/* Label with animated red line */}
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <span className="text-[11px] font-bold tracking-[4px] uppercase text-[#8a302f]">
              WHAT WE DO
            </span>
            <motion.span
              className="h-px bg-[#8a302f]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 28 } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.9rem] font-extrabold tracking-tight text-[#F4F1EE] leading-[1.12] mb-5">
            What precision solutions do we deliver for critical industries?
          </h2>

          {/* Subtext */}
          <motion.p
            className="text-[15px] sm:text-base leading-[1.8] text-[#A8A29E] max-w-lg mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Texas Technical Services delivers precision-engineered solutions across flow
            measurement, inspection, and industrial automation — trusted by leading
            operators since 2008.
          </motion.p>

          {/* Panel Hint Indicators (01 / 02 / 03) */}
          <div
            className="flex items-center gap-3"
            role="tablist"
            aria-label="Service panels indicator"
          >
            {SERVICES.map((s, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={s.num}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Select ${s.title}`}
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    background: isActive ? "rgba(138,48,47,0.22)" : "rgba(15,17,21,0.6)",
                    border: isActive
                      ? "1px solid #8a302f"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? "#8a302f" : "rgba(255,255,255,0.3)",
                      boxShadow: isActive ? "0 0 8px #8a302f" : "none",
                    }}
                  />
                  <span
                    className="font-mono text-[11px] font-bold tracking-wider"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {s.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ══ RIGHT COLUMN (~60%): Expanding Vertical Panels on Hover ══ */}
        <div className="w-full lg:w-[60%] shrink-0">
          {/* Desktop & Tablet: Horizontal expanding panels row with hover/focus interaction */}
          <div
            className="hidden sm:flex items-stretch gap-3.5 w-full"
            onMouseLeave={() => setActive(0)}
            onBlur={handleRowBlur}
            style={{
              minHeight: "clamp(390px, 50vh, 470px)",
              perspective: 1000,
            }}
          >
            {SERVICES.map((svc, idx) => {
              const isActive = idx === active;
              const fanAngle = idx === 0 ? -8 : idx === 1 ? 0 : 8;

              return (
                <ExpandingPanel
                  key={svc.num}
                  service={svc}
                  index={idx}
                  isActive={isActive}
                  fanAngle={fanAngle}
                  isInView={isInView}
                  reducedMotion={reducedMotion}
                  onHover={() => setActive(idx)}
                  onSelect={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                />
              );
            })}
          </div>

          {/* Mobile (<640px): Tap to toggle / expand cards */}
          <div className="flex sm:hidden flex-col gap-3 w-full">
            {SERVICES.map((svc, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={svc.num}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(idx);
                    }
                  }}
                  className="rounded-[22px] overflow-hidden p-5 transition-all duration-300 cursor-pointer"
                  style={{
                    background: "rgba(15,17,21,0.85)",
                    border: isActive
                      ? "1px solid #8a302f"
                      : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isActive ? "0 4px 20px rgba(138,48,47,0.3)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: isActive
                            ? "rgba(138,48,47,0.2)"
                            : "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <svc.Icon className="w-5 h-5 text-[#8a302f]" strokeWidth={1.8} />
                      </div>
                      <span className="text-[17px] font-bold text-[#F4F1EE]">
                        {svc.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#8a302f]">
                      {svc.num}
                    </span>
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-3 border-t border-white/[0.08]">
                      <p className="text-sm text-[#A8A29E] leading-relaxed mb-4">
                        {svc.desc}
                      </p>
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#F4F1EE] uppercase tracking-wider hover:text-[#e4b4b4] transition-colors"
                      >
                        Learn more about our services
                        <ArrowRight className="w-3.5 h-3.5 text-[#8a302f]" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Individual Expanding Desktop Card with Cursor Spotlight ── */
function ExpandingPanel({
  service,
  index,
  isActive,
  fanAngle,
  isInView,
  reducedMotion,
  onHover,
  onSelect,
  onFocus,
}: {
  service: typeof SERVICES[number];
  index: number;
  isActive: boolean;
  fanAngle: number;
  isInView: boolean;
  reducedMotion: boolean;
  onHover: () => void;
  onSelect: () => void;
  onFocus: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Cursor spotlight inside active card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  // Pop animation spring: initial fan angle to unfolded
  const initialRotate = reducedMotion ? 0 : fanAngle;
  const initialScale = reducedMotion ? 1 : 0.82;
  const initialOpacity = 0;

  return (
    <motion.div
      ref={cardRef}
      role="tab"
      aria-selected={isActive}
      aria-expanded={isActive}
      tabIndex={0}
      onClick={onSelect}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        rotateZ: initialRotate,
        scale: initialScale,
        opacity: initialOpacity,
      }}
      animate={
        isInView
          ? {
              rotateZ: 0,
              scale: 1,
              opacity: 1,
            }
          : {
              rotateZ: initialRotate,
              scale: initialScale,
              opacity: initialOpacity,
            }
      }
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: reducedMotion ? 0 : index * 0.09,
      }}
      className="relative rounded-[28px] overflow-hidden cursor-pointer select-none"
      style={{
        flex: isActive ? "3.6 1 0%" : "1 1 0%",
        transition: reducedMotion
          ? "none"
          : "flex 360ms cubic-bezier(0.25, 1, 0.5, 1), border-color 300ms ease, box-shadow 300ms ease",
        background: "rgba(15,17,21,0.78)",
        border: isActive
          ? "1px solid rgba(138,48,47,0.45)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isActive
          ? "0 24px 60px rgba(0,0,0,0.65), 0 0 24px rgba(138,48,47,0.18)"
          : "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(138,48,47,0.16), transparent 70%)`,
          }}
        />
      )}

      {/* Top-edge gradient line that lengthens when active */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] pointer-events-none transition-all duration-500 ease-out z-10"
        style={{
          width: isActive ? "85%" : "28%",
          background: isActive
            ? "linear-gradient(90deg, transparent 0%, #8a302f 40%, #e4b4b4 50%, #8a302f 60%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
        }}
      />

      {/* Oversized background outlined number */}
      <span
        aria-hidden="true"
        className="absolute -bottom-4 right-2 font-mono text-[92px] lg:text-[110px] font-black pointer-events-none select-none z-0 leading-none"
        style={{
          color: "rgba(255,255,255,0.04)",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
        }}
      >
        {service.num}
      </span>

      {/* ── EXPANDED FULL CONTENT (Separated cross-fade transition) ── */}
      <div
        className="relative z-10 p-7 lg:p-9 flex flex-col justify-between h-full w-full select-none"
        style={{
          opacity: isActive ? 1 : 0,
          visibility: isActive ? "visible" : "hidden",
          pointerEvents: isActive ? "auto" : "none",
          transition: reducedMotion
            ? "none"
            : "opacity 300ms cubic-bezier(0.25, 1, 0.5, 1) 80ms, visibility 300ms cubic-bezier(0.25, 1, 0.5, 1) 80ms",
        }}
      >
        {/* Min-width wrapper prevents text wrapping/squishing during flex width animation */}
        <div className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]">
          {/* Top row: Rotating Dashed Ring around Icon + Big Monospace Number */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex items-center justify-center">
              {/* Radial glow behind active icon */}
              <div
                aria-hidden="true"
                className="absolute inset-0 w-16 h-16 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(138,48,47,0.45) 0%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Rotating Dashed SVG Border */}
              <svg
                className="w-14 h-14 animate-spin-slow pointer-events-none"
                style={{ animation: "spin 18s linear infinite" }}
                viewBox="0 0 60 60"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="27"
                  fill="none"
                  stroke="#8a302f"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                />
              </svg>

              {/* Icon Container inside ring */}
              <div
                className="absolute w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(138,48,47,0.18)",
                  border: "1px solid rgba(138,48,47,0.4)",
                }}
              >
                <service.Icon className="w-5 h-5 text-[#f4f1ee]" strokeWidth={1.8} />
              </div>
            </div>

            {/* Badge Number */}
            <span
              className="font-mono text-sm font-bold tracking-[3px] px-3 py-1 rounded-xl"
              style={{
                color: "#cf6561",
                background: "rgba(138,48,47,0.14)",
                border: "1px solid rgba(138,48,47,0.28)",
              }}
            >
              {service.num}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-bold text-[#F4F1EE] leading-tight mb-3.5 tracking-tight"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#A8A29E] max-w-md">
            {service.desc}
          </p>
        </div>

        {/* Link with sliding arrow */}
        <div className="pt-6 mt-6 border-t border-white/[0.08] min-w-[280px]">
          <Link
            href={service.href}
            className="group/btn inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#F4F1EE] hover:text-[#e4b4b4] transition-colors"
          >
            <span>Learn more about our services</span>
            <ArrowRight className="w-4 h-4 text-[#8a302f] transition-transform duration-200 group-hover/btn:translate-x-1.5" />
          </Link>
        </div>
      </div>

      {/* ── COLLAPSED NARROW STRIP CONTENT (Visible when not active) ── */}
      <div
        className="absolute inset-0 z-10 p-5 flex flex-col justify-between items-center h-full w-full select-none"
        style={{
          opacity: !isActive ? 1 : 0,
          visibility: !isActive ? "visible" : "hidden",
          pointerEvents: !isActive ? "auto" : "none",
          transition: reducedMotion
            ? "none"
            : "opacity 200ms ease, visibility 200ms ease",
        }}
      >
        {/* Top: Mini Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <service.Icon className="w-4 h-4 text-[#A8A29E]" strokeWidth={1.8} />
        </div>

        {/* Center: Rotated Vertical Title */}
        <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
          <span
            className="text-[14px] font-bold text-[#F4F1EE]/80 tracking-wider whitespace-nowrap uppercase"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              letterSpacing: "2.5px",
            }}
          >
            {service.title}
          </span>
        </div>

        {/* Bottom: Number */}
        <span className="font-mono text-xs font-bold text-[#8a302f] shrink-0">
          {service.num}
        </span>
      </div>
    </motion.div>
  );
}
