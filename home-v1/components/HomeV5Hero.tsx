"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/src/components/HeroSlider";
import { HERO_STATS } from "@/src/config/heroSlides";
import "./hero-v5.css";

export default function HomeV5Hero() {
  return (
    <section
      id="hero-home-v1"
      aria-label="Hero"
      className="relative w-full h-full flex flex-col justify-between overflow-x-clip"
      style={{
        paddingLeft: "clamp(16px, 3.5vw, 48px)",
        paddingRight: "clamp(16px, 3.5vw, 48px)",
      }}
    >
      {/* Subtle floor perspective grid matching dark stage */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "40%",
          backgroundImage: `
            linear-gradient(to right, rgba(138,48,47,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(138,48,47,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
        }}
      />

      {/* Radial warmth glow behind content */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(138,48,47,0.20) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ══ TOP / MIDDLE ROW: Left Text Column + Right Full-Bleed Slider ══ */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-6 my-auto">
        {/* ── LEFT COLUMN: Headline & CTAs ── */}
        <div className="w-full lg:w-[46%] xl:w-[44%] shrink-0 flex flex-col justify-center z-20">
          {/* Badge */}
          <div className="hero-v5-badge mb-4">
            <span className="hero-v5-badge-dot" />
            <span>Flow Measurement &amp; Automation</span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F4F1EE] leading-[1.06] mb-5"
            style={{
              textShadow: "0 4px 24px rgba(0,0,0,0.7)",
            }}
          >
            Flow Measurement &amp; Control System Solutions
          </h1>

          {/* Paragraph */}
          <p className="text-slate-300/85 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            Where flow measurement challenges meet solutions. Expert metering consultants
            with in-depth knowledge of API, AGA, and custody metering standards.
          </p>

          {/* CTAs (Know More & Our Products) */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/service/flow-measurement-solutions/"
              className="hero-v5-btn-primary"
              style={{
                background: "#8a302f",
                borderColor: "rgba(255,255,255,0.16)",
              }}
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/products/"
              className="hero-v5-btn-secondary"
              style={{
                background: "rgba(15,17,21,0.65)",
                borderColor: "rgba(255,255,255,0.14)",
              }}
            >
              <span>Our Products</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Full-Bleed Slider Panel ── */}
        <div className="w-full lg:w-[54%] xl:w-[56%] shrink-0 flex items-center lg:-mr-[clamp(16px,3.5vw,48px)] z-10">
          <HeroSlider variant="v1-bleed" className="w-full h-full" />
        </div>
      </div>

      {/* ══ BOTTOM: Horizontal Connected Stats Strip ══ */}
      <div className="relative z-10 w-full mt-4 lg:mt-6">
        <div
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 p-3.5 sm:p-4 lg:py-3.5 lg:px-6 rounded-2xl lg:rounded-3xl"
          style={{
            background: "rgba(15,17,21,0.72)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center px-3 sm:px-4 lg:px-6"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <span
                className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-0.5"
                style={{ color: "#cf6561" }}
              >
                {stat.prefix}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {stat.num}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-wider mt-0.5 truncate">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
