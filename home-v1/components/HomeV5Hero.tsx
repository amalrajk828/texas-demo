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
      {/* Subtle floor perspective grid with soft blue tint */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "40%",
          backgroundImage: `
            linear-gradient(to right, rgba(58,110,165,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(58,110,165,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Radial soft glow behind content */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(58,110,165,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ══ TOP / MIDDLE ROW: Left Text Column + Right Full-Bleed Slider ══ */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-3 sm:gap-6 lg:gap-6 my-auto">
        {/* ── LEFT COLUMN: Headline & CTAs ── */}
        <div className="w-full lg:w-[46%] xl:w-[44%] shrink-0 flex flex-col justify-center z-20">
          {/* Badge */}
          <div className="hero-v5-badge mb-2 sm:mb-4">
            <span className="hero-v5-badge-dot" />
            <span>Flow Measurement &amp; Automation</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(1.55rem,5.2vw,3.6rem)] font-extrabold tracking-tight text-[#16202b] leading-[1.08] mb-2 sm:mb-4 lg:mb-5"
          >
            Flow Measurement &amp; Control System Solutions
          </h1>

          {/* Paragraph */}
          <p className="text-[#4a5568] text-[0.75rem] sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-5 lg:mb-6 max-w-xl">
            Where flow measurement challenges meet solutions. Expert metering consultants
            with in-depth knowledge of API, AGA, and custody metering standards.
          </p>

          {/* CTAs (Know More & Our Products) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/service/flow-measurement-solutions/"
              className="hero-v5-btn-primary min-h-[40px] sm:min-h-[44px] flex items-center justify-center text-[0.75rem] sm:text-[0.82rem]"
              style={{
                background: "#8a302f",
                borderColor: "transparent",
                padding: "0 16px",
              }}
            >
              <span>Know More</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
            </Link>
            <Link
              href="/products/"
              className="hero-v5-btn-secondary min-h-[40px] sm:min-h-[44px] flex items-center justify-center font-semibold text-[0.75rem] sm:text-[0.82rem]"
              style={{
                background: "#ffffff",
                borderColor: "rgba(58, 110, 165, 0.16)",
                color: "#16202b",
                boxShadow: "0 2px 8px rgba(20, 50, 90, 0.04)",
                padding: "0 16px",
              }}
            >
              <span>Our Products</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Full-Bleed Slider Panel ── */}
        {/* On mobile: compact height; on desktop: full bleed */}
        <div className="w-full lg:w-[54%] xl:w-[56%] shrink-0 flex items-center lg:-mr-[clamp(16px,3.5vw,48px)] z-10 max-h-[36vh] sm:max-h-[46vh] lg:max-h-none">
          <HeroSlider variant="v1-bleed" className="w-full h-full" />
        </div>
      </div>

      {/* ══ BOTTOM: Connected Stats Strip (2x2 on mobile, 4-col on desktop) ══ */}
      <div className="relative z-10 w-full mt-1 sm:mt-3 lg:mt-6">
        <div
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-0 p-2 sm:p-4 lg:py-3.5 lg:px-6 rounded-2xl lg:rounded-3xl"
          style={{
            background: "#5a86ad",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow: "0 8px 24px rgba(20, 40, 60, 0.18)",
          }}
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center px-3 sm:px-4 lg:px-6 py-2 lg:py-0 ${
                i % 2 === 1 ? "border-l border-white/20 pl-3.5 sm:pl-4" : ""
              } ${
                i >= 2 ? "border-t border-white/20 lg:border-t-0 pt-2 lg:pt-0" : ""
              } ${
                i > 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <span
                className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-0.5"
                style={{ color: "#ffe0df" }}
              >
                {stat.prefix}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {stat.num}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#dce6f0] uppercase tracking-wider mt-0.5 truncate">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
