"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";

// Dynamic import with ssr: false so WebGL animation does not block LCP
const MoltenMetal = dynamic(
  () => import("@/components/MoltenMetal/MoltenMetal"),
  { ssr: false }
);

export default function AutomationHero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#0a0a0a]"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Background layer — full-bleed 100vh container */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <MoltenMetal
          color1="#3D0A0A"
          color2="#E63329"
          color3="#FFD9A0"
          speed={0.3}
          scale={3}
          detail={4}
          glow={1.8}
          coreSize={0.09}
          swirl={0.8}
          fold={-0.2}
          blackPoint={0.08}
          brightness={1.2}
          colorMode="ember"
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.25}
          opacity={0.9}
        />
      </div>

      {/* Scrim for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      {/* Hairline subtle top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* Existing Hero Content (position: relative; z-index: 10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-16 lg:pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[12px] text-white/50 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/25">/</span>
          <Link href="/services/" className="hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-white/25">/</span>
          <span className="text-white/80 font-medium">Industrial Automation</span>
        </div>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <div className="w-6 h-6 rounded-full bg-[#e7212b]/15 border border-[#e7212b]/30 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-[#e7212b]" strokeWidth={2} />
            </div>
            <span className="text-[#e7212b] text-[11px] font-bold tracking-[3px] uppercase">
              Industrial Automation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6 tracking-tight">
            Industrial Process Automation Solutions
          </h1>

          {/* Body */}
          <p className="text-white/70 text-base sm:text-[17px] leading-relaxed mb-8 max-w-3xl font-normal">
            As a leading PLC and SCADA system integrator in Kuwait and the GCC, we provide
            total industrial automation &amp; control systems using various brands of PLCs, SCADA,
            and HMIs. We specialize in industrial automation control system design, control and
            automation engineering, and plant and process automation — delivering automation in
            manufacturing industry, power plant automation, and oil &amp; gas process control across
            Kuwait, UAE, Dubai, and Saudi Arabia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c91822] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-[14px] shadow-lg shadow-[#e7212b]/25 hover:shadow-[#e7212b]/40 hover:-translate-y-0.5"
            >
              Get More Information
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-7 py-3.5 rounded-xl transition-all duration-200 text-[14px] backdrop-blur-sm"
            >
              ← All Services
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { num: "PLC", label: "Multi-Brand Integration" },
              { num: "SCADA", label: "System Upgrades" },
              { num: "HMI", label: "Custom Development" },
              { num: "EPC", label: "Turnkey Delivery" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 backdrop-blur-md text-center"
              >
                <p className="text-xl sm:text-2xl font-bold text-[#e7212b] leading-none">
                  {stat.num}
                </p>
                <p className="text-[11px] text-white/40 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
