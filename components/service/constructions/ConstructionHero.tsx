"use client";
import Link from "next/link";
import { ChevronRight,ArrowRight, HardHat } from "lucide-react";

export default function ConstructionHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">
      {/* Hairline top and bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/services/" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/60">Constructions</span>
        </nav>

        <div className="max-w-full">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
              <HardHat className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">Constructions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
            Industrial Construction &amp; <em className="not-italic text-white">Project Delivery</em>
          </h1>

          <p className="text-white/70 text-base sm:text-[17px] leading-relaxed mb-8 max-w-none">
            Gantry and structural fabrication, industrial facility design and build, piping, structural steel, modular skid fabrication, and civil &amp; mechanical construction for oil &amp; gas plants across the GCC. We deliver turnkey EPC project execution with rigorous quality assurance.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20">
              Get More Information <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/services/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]">
              ← All Services
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: "18+", label: "Years of Project Delivery" },
            { num: "100%", label: "Quality Assured" },
            { num: "EPC", label: "Turnkey Capability" },
            { num: "ISO", label: "9001 Certified" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center">
              <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
              <p className="text-[14px] text-white/50 mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
