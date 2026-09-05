"use client";

import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Cpu,
  ClipboardCheck,
  Server,
  FileCheck2,
  GitBranch,
  BarChart3,
  Wifi,
} from "lucide-react";

const features = [
  {
    Icon: Scale,
    title: "Integrated Custody Transfer Metering",
    body: "End-to-end custody transfer measurement with full integration across metering skids, flow computers, and supervisory systems — accurate fiscal measurement you can trust.",
  },
  {
    Icon: Cpu,
    title: "Real-Time Flow Computer Integration",
    body: "Native integration with leading flow computer platforms (OMNI 4000/7000, SICK Flow-X) — real-time flow calculations, batch tracking, and historical data.",
  },
  {
    Icon: ClipboardCheck,
    title: "Automated Meter Proving Control",
    body: "Automated sphere, piston, and compact prover control logic — sequence management, repeat runs, and provability reports generated automatically.",
  },
  {
    Icon: Server,
    title: "SCADA & Data Acquisition",
    body: "High-performance SCADA visualization with real-time and historical trending, alarm management, and seamless integration with the enterprise layer.",
  },
  {
    Icon: FileCheck2,
    title: "Regulatory Compliance (API/OIML)",
    body: "Built-in compliance with API MPMS Chapter 4, OIML R117, and other international standards — auditable measurement integrity for every batch.",
  },
  {
    Icon: GitBranch,
    title: "Multi-Product Handling",
    body: "Sophisticated product scheduling and segregation — switch between crude, refined products, and additives with no cross-contamination risk.",
  },
  {
    Icon: BarChart3,
    title: "Advanced Reporting & Analytics",
    body: "Configurable reports for daily volume, mass balance, BSW, density, and shrinkage — exportable to ERP, customs, and refinery planning systems.",
  },
  {
    Icon: Wifi,
    title: "Remote Monitoring & Control",
    body: "Secure remote access from any device — operators and managers can review custody data and authorize operations from anywhere.",
  },
];

const applications = [
  "Oil & Gas Terminals",
  "Refineries",
  "Pipeline Metering Stations",
  "Loading Facilities",
  "Power Plants",
  "Airports",
];

const capabilities = [
  "Real-time custody transfer measurement with fiscal-grade accuracy",
  "Native flow computer integration (OMNI 4000/7000, SICK Flow-X)",
  "Automated sphere, piston & compact prover sequencing",
  "Full SCADA visualization with alarm & event management",
  "API MPMS Chapter 4 and OIML R117 compliance built-in",
  "Multi-product scheduling with no cross-contamination",
  "Configurable batch reports & mass-balance analytics",
  "Secure remote monitoring with role-based access control",
  "Bi-directional pipeline & loading arm support",
  "Integration with ERP, customs, and refinery planning systems",
];

export default function TexaflowContent() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <Link href="/solutions/" className="hover:text-white/70 transition-colors">
              Solutions
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">Texaflow</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <Scale className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[3px] uppercase">
                Our Proprietary Solution
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Texaflow —{" "}
              <em className="not-italic text-current">
                Custody Metering
              </em>{" "}
              Integrated Control System
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              Our proprietary custody metering integrated control system.
              Advanced fiscal metering &amp; SCADA solution for oil &amp; gas
              terminals, refineries, pipeline metering stations, loading
              facilities, power plants, and airports — engineered for
              compliance, accuracy, and remote visibility.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partners/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                Our Global Network →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "API", label: "MPMS Compliant" },
              { num: "OIML", label: "R117 Ready" },
              { num: "24/7", label: "Fiscal Monitoring" },
              { num: "SCADA", label: "Real-Time Control" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">
                  {stat.num}
                </p>
                <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SYSTEM FEATURES ═══════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                System Capabilities
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                System Capabilities &amp;{" "}
                <em className="not-italic text-current">Key Features</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <f.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[16px] font-bold text-[#0B0D26] leading-snug mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KEY APPLICATIONS DARK STRIP ═════════════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.09) 0%, transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 p-10 lg:p-14">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-px bg-[#0891B2]" />
                  <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                    Where Texaflow Excels
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15] mb-5">
                  Key{" "}
                  <em className="not-italic text-current">Applications</em>
                </h2>
                <p className="text-white/70 text-[15px] leading-relaxed max-w-md">
                  Texaflow is trusted across the most demanding custody
                  transfer environments — from high-throughput terminals to
                  aviation fuel depots.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {applications.map((app) => (
                  <div
                    key={app}
                    className="rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#e7212b]/40 hover:bg-white/[0.06] transition-all duration-300 px-4 py-4 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0" />
                    <span className="text-white/80 text-[13.5px] font-medium leading-tight">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES CHECKLIST ═════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  Full Capability Set
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B0D26] leading-[1.15] mb-5">
                Engineered for{" "}
                <em className="not-italic text-current">fiscal accuracy</em>{" "}
                and operational confidence
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-7 max-w-xl">
                Texaflow brings every custody transfer function under a single
                auditable platform — reducing risk, eliminating manual
                reconciliation, and giving operators complete visibility.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/service/metering-control-system-integration/"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
                >
                  Metering Integration Service →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {capabilities.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 hover:border-[#e7212b]/30 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#e7212b]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-[#e7212b]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-[13.5px] leading-[1.6]">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] border-t-4 border-[#e7212b] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[22px] mb-1">
                Ready to deploy Texaflow at your facility?
              </p>
              <p className="text-gray-400 text-sm">
                Our engineers will scope a pilot or full deployment — typically
                integrated with your existing flow computers and SCADA in
                weeks, not months.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#e7212b]/20 transition-all duration-200"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
