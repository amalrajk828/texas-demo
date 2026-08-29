"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const IridescentGlassSphere = dynamic(
  () => import("@/components/blog/IridescentGlassSphere"),
  { ssr: false }
);

const HERO_STATS = [
  { value: "18+",  label: "Years of Excellence" },
  { value: "400+", label: "Projects Completed" },
  { value: "200+", label: "Industrial Clients" },
  { value: "ISO",  label: "9001:2015 Certified" },
];

export default function HomeV3Hero() {
  return (
    <section
      id="hero-home-v3"
      className="relative bg-[#0a0a0f] overflow-hidden pt-32 pb-16 lg:pb-24 min-h-[520px] lg:min-h-[580px] flex items-center justify-center"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "580px",
        background: "#0a0a0f",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Real-time 3D Raymarched Iridescent Glass Sphere */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <IridescentGlassSphere overlayOpacity={0.0} />
      </div>

      {/* Subtle contrast gradient vignette scrim */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,15,0.1) 0%, rgba(10,10,15,0.45) 65%, rgba(10,10,15,0.85) 100%)",
        }}
      />

      {/* Hairline subtle top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* Hero content (position: relative; z-index: 10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-4 h-px bg-[#e7212b]" />
          <span className="text-[#e7212b] text-[10.5px] font-bold tracking-[3.5px] uppercase">
            ISO 9001:2015 Certified · Est. 2008
          </span>
        </div>

        {/* Heading matching Blog Hero typography */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.08] tracking-tight mb-5 text-white max-w-3xl">
          Industrial Automation &amp; <br className="hidden sm:block" />
          Flow Measurement Solutions
        </h1>

        {/* Sub-text */}
        <p className="text-white/75 text-[15.5px] leading-[1.85] max-w-2xl mb-8">
          Providing custody transfer metering, plant automation, and advanced non-destructive inspection services for oil &amp; gas, power, and manufacturing across Kuwait, UAE, and GCC.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[13.5px] text-white bg-[#e7212b] hover:bg-[#c62828] transition-all duration-200 shadow-lg shadow-[#e7212b]/25 hover:shadow-[#e7212b]/40 hover:-translate-y-0.5"
          >
            Consult Specialists
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[13.5px] transition-all duration-200 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          >
            Our Services
            <ArrowRight className="w-4 h-4 opacity-50" />
          </Link>
        </div>

        {/* 4 stat boxes matching Blog Hero styling */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-4 border flex flex-col gap-1 backdrop-blur-md"
              style={{
                background: "rgba(14, 14, 20, 0.75)",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              <span className="text-[#e7212b] text-2xl sm:text-3xl font-black leading-none">
                {s.value}
              </span>
              <span className="text-white/60 text-[11px] font-medium tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
