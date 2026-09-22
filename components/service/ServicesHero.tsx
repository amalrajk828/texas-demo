"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronRight,ArrowRight, Gauge, FlaskConical, Cpu, HardHat } from "lucide-react";
import VantaTopology from "@/components/service/common/VantaTopology";

const SERVICES_NAV = [
  { Icon: Gauge,       label: "Flow Measurement",     href: "#flow-measurement" },
  { Icon: FlaskConical, label: "Inspection & Testing", href: "#inspection-testing" },
  { Icon: Cpu,         label: "Process Automation",   href: "#process-automation" },
  { Icon: HardHat,     label: "Construction",         href: "#construction" },
];

export default function ServicesHero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={vantaRef} className="relative bg-gradient-to-br from-black via-[#1a0505] to-black blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">
      <VantaTopology targetRef={vantaRef} />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
        }}
      />

      {/* Top-right red glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Bottom-left subtle glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-8 text-[14px] text-white/50"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/60">Services</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — headline */}
          <div className="max-w-full">
            <div
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
                What We Offer
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6"
            >
              Precision Services for{" "}
              <em className="not-italic text-white">Industrial</em>{" "}
              Excellence
            </h1>

            <p
              className="text-white/70 text-base sm:text-[17px] leading-relaxed mb-8 max-w-none"
            >
              At Texas Technical Services, we deliver end-to-end industrial solutions — from
              flow measurement and custody metering to industrial automation, inspection &amp;
              testing, and construction — trusted across oil &amp; gas, refinery, and petrochemical
              sectors since 2008.
            </p>

            <div
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#all-services"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — quick-nav pills */}
          <div
            className="flex flex-wrap lg:flex-col gap-3"
          >
            {SERVICES_NAV.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/35 hover:bg-white/[0.07] rounded-xl px-5 py-3.5 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/20 transition-colors duration-200">
                  <Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <span className="text-white/70 text-[13px] font-medium group-hover:text-white transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "18+", label: "Years of Excellence" },
            { num: "200+", label: "Clients Served" },
            { num: "4",    label: "Core Service Areas" },
            { num: "8",    label: "Industries Covered" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
              <p className="text-[14px] text-white/50 mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
