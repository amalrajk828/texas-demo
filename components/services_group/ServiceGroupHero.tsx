"use client";
import Link from "next/link";
import { ArrowRight, LayoutGrid, Settings } from "lucide-react";

export default function ServiceGroupHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20 lg:pb-28">
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
            "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex items-center gap-2 mb-8 text-[12px] text-white/30"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Main Services</span>
        </div>

        <div className="flex items-start gap-12 lg:gap-16">
          <div
            className="hidden lg:flex items-center justify-center shrink-0 w-[280px]"
          >
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full border border-white/[0.08]" />
              <div className="absolute inset-0 -m-2 rounded-full border border-white/[0.06]" />
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#e7212b]/30" />
              <div className="w-[160px] h-[160px] rounded-2xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center">
                <Settings className="w-[80px] h-[80px] text-[#e7212b]" strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
                Our Complete Portfolio
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6"
            >
              Main Services
            </h1>

            <p
              className="text-white/50 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl"
            >
              Browse our full range of industrial services — from flow measurement and
              inspection &amp; testing to process automation and construction — delivered
              across oil &amp; gas, refinery, and petrochemical sectors since 2008.
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
                href="#services-grid"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                <LayoutGrid className="w-4 h-4" />
                View All Services
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { num: "18+", label: "Years of Excellence" },
            { num: "200+", label: "Clients Served" },
            { num: "70+",  label: "Services Offered" },
            { num: "8",    label: "Industries Covered" },
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
