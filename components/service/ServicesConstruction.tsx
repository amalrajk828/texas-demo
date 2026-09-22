"use client";
import Image from "next/image";
import Link from "next/link";
import { HardHat, ArrowRight, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Gantry & structural fabrication (SKYLIGHT GANTRY and similar projects)",
  "Industrial facility design, build & commissioning",
  "Piping, structural steel & modular skid fabrication",
  "Civil & mechanical construction for oil & gas plants",
  "Control room, MCC room & instrument shelter construction",
  "Turnkey EPC project execution & site management",
];

const STATS = [
  { num: "18+", label: "Years of Project Delivery" },
  { num: "100%", label: "Quality Assured" },
  { num: "EPC", label: "Turnkey Capability" },
];

export default function ServicesConstruction() {
  return (
    <section
      id="construction"
      className="relative bg-[#000000] blueprint-grid blueprint-dot-grid py-24 lg:py-32 overflow-hidden scroll-mt-28"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.02) 60px)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(231,33,43,0.09) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="fade-up text-center mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Main Services
            </span>
            <span className="w-6 h-px bg-[#0891B2]" />
          </div>
          <h2 className="text-4xl sm:text-[2.8rem] font-bold text-white leading-[1.12]">
            Constructions
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — image */}
          <div className="fade-up relative">

            {/* Primary image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#12163A] shadow-2xl shadow-black/40 border border-white/[0.06]">
              <Image
                src="/images/services/construction.jpg"
                alt="SKYLIGHT GANTRY structural fabrication project — Texas Technical Services Kuwait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Top red accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0D26]/60 to-transparent" />
            </div>

            {/* Secondary image — overlapping */}
            <div className="absolute bottom-0 right-0 lg:-right-6 w-[42%] rounded-2xl overflow-hidden aspect-[4/3] bg-[#12163A] shadow-2xl shadow-black/50 border-[3px] border-[#0B0D26]">
              <Image
                src="/images/services/construction-detail.jpg"
                alt="Construction detail of industrial structural steelwork — TTS Kuwait"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>

            {/* Stats row */}
            <div className="flex gap-3 mt-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-4 text-center"
                >
                  <p className="text-xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
                  <p className="text-[11px] text-white/30 mt-1.5 tracking-wide leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — content */}
          <div>
            <div className="fade-up d1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <HardHat className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl sm:text-[1.85rem] font-bold text-white leading-[1.2]">
                  Industrial Construction &amp; Project Delivery
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-white/70 text-[15px] leading-[1.85]">
                  Our Industrial Automation services focus on optimizing your industrial processes
                  for improved efficiency and productivity. We specialize in control system design,
                  implementation, and upgrades, offering expertise in PLC programming, SCADA
                  integration, and HMI development.
                </p>
                <p className="text-white/70 text-[15px] leading-[1.85]">
                  With our solutions, you can streamline your operations, reduce downtime, and
                  achieve better control over your production processes — from structural gantry
                  fabrication to complete turnkey EPC project execution.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="fade-up d2">
              <div className="space-y-3 mb-9">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-white/55 text-[13.5px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ISO badge */}
            <div className="fade-up d2">
              <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <div className="w-10 h-10 rounded-lg bg-[#e7212b] flex items-center justify-center shrink-0">
                  <span className="text-white text-[9px] font-bold tracking-[0.5px] text-center leading-tight">ISO<br/>9001</span>
                </div>
                <div>
                  <p className="text-white text-[13px] font-semibold">ISO 9001 · ISO 14001 · ISO 45001 · UASL · Accurate Certified</p>
                  <p className="text-white/35 text-[12px] mt-0.5">All construction work delivered under certified quality management systems.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="fade-up d3">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-[#e7212b]/40 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
