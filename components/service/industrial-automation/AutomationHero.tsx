"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import VantaTopology from "@/components/service/common/VantaTopology";

export default function AutomationHero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={vantaRef} className="relative bg-gradient-to-br from-black via-[#1a0505] to-black blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">
      <VantaTopology targetRef={vantaRef} />
      {/* Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 mb-8 text-[12px] text-white/30"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-white/60 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white/60">Industrial Automation</span>
        </div>

        <div className="max-w-full">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
              Industrial Automation
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Industrial Process{" "}
            <em className="not-italic text-white">Automation</em>
            <br className="hidden sm:block" />
            {" "}Solutions
          </h1>

          {/* Body */}
          <p
            className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-none"
          >
            As a leading PLC and SCADA system integrator in Kuwait and the GCC, we provide
            total industrial automation &amp; control systems using various brands of PLCs, SCADA,
            and HMIs. We specialize in industrial automation control system design, control and
            automation engineering, and plant and process automation — delivering automation in
            manufacturing industry, power plant automation, and oil &amp; gas process control across
            Kuwait, UAE, Dubai, and Saudi Arabia.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
            >
              Get More Information
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
            >
              ← All Services
            </Link>
          </div>

        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "PLC",   label: "Multi-Brand Integration" },
            { num: "SCADA", label: "System Upgrades" },
            { num: "HMI",   label: "Custom Development" },
            { num: "EPC",   label: "Turnkey Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
              <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
