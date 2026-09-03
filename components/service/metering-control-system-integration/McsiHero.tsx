"use client";
import Link from "next/link";
import { ChevronRight,ArrowRight, Cpu } from "lucide-react";

export default function McsiHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">

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

      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/service/flow-measurement-solutions/" className="hover:text-white transition-colors">Flow Measurement</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/60">Metering Control System Integration</span>
        </nav>

        <div className="max-w-full">

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
              Flow Measurement Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6"
          >
            Metering Control{" "}
            <em className="not-italic text-white">System</em>
            <br className="hidden sm:block" />
            {" "}Integration
          </h1>

          {/* Body */}
          <p
            className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-none"
          >
            Welcome to TTS, where we specialize in Custody Transfer Flow Metering Control System
            Development and Integration. With an unwavering commitment to precision, accuracy, and
            compliance, we are your trusted partner for optimizing and enhancing your custody
            transfer operations.
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
              href="/service/flow-measurement-solutions/"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
            >
              ← Flow Measurement
            </Link>
          </div>

        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "OEM",    label: "Authorised Representative" },
            { num: "SCADA",  label: "System Integration" },
            { num: "PLC",    label: "Automation & Control" },
            { num: "100%",   label: "Custody Accuracy" },
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
