"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";
import VantaTopology from "@/components/service/common/VantaTopology";

export default function FlowHero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={vantaRef} className="relative pt-32 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-black via-[#1a0505] to-black blueprint-grid blueprint-dot-grid min-h-[400px]">
      <VantaTopology targetRef={vantaRef} />

      {/* Layer 4: Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 mb-8 text-[12px] text-white/40"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/70 font-medium">Flow Measurement</span>
        </div>

        <div className="max-w-full">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <Gauge className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
              Flow Measurement Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Flow Measurement &amp;{" "}
            <br className="hidden sm:block" />
            <em className="not-italic text-white">Control System</em>{" "}
            Solutions
          </h1>

          {/* Body */}
          <p
            className="text-white/70 text-base sm:text-[17px] leading-relaxed max-w-none"
          >
            We provide metering control system upgrades, maintenance, and validation services for custody metering systems. Our experienced team ensures that your metering systems operate efficiently and accurately, meeting industry standards and compliance requirements. Additionally, we offer specialized consultancy services to optimize your custody metering processes and enhance productivity.
          </p>
        </div>
      </div>
    </section>
  );
}
