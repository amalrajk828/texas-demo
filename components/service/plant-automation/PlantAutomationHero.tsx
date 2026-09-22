"use client";
import Link from "next/link";
import { Factory, ChevronRight, ArrowRight } from "lucide-react";

const STATS = [
  { value: "Efficiency", label: "Boost Productivity" },
  { value: "Cost Reduction", label: "Operational Savings" },
  { value: "Remote Monitoring", label: "Full Visibility" },
  { value: "Kuwait & Dubai", label: "Our Locations" },
];

export default function PlantAutomationHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-28 pb-16 lg:pb-20 min-h-[400px]">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#e7212b]/5 blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e7212b]/4 blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up">
          <nav className="flex items-center gap-2 text-[14px] text-white/50 tracking-[1.5px] uppercase mb-10 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services/" className="hover:text-white/60 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/service/industrial-automation/" className="hover:text-white/60 transition-colors">Industrial Automation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">Process Plant Automation</span>
          </nav>
        </div>
        <div className="max-w-full">
          <div className="fade-up d1">
            <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/10 border border-[#e7212b]/20 rounded-full px-4 py-2 mb-6">
              <Factory className="w-3.5 h-3.5 text-[#e7212b]" strokeWidth={2} />
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[2.5px] uppercase">Industrial Automation</span>
            </div>
          </div>
          <div className="fade-up d1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Process Plant{" "}
              <span className="text-white">Automation</span>
            </h1>
          </div>
          <div className="fade-up d2">
            <p className="text-white/70 text-lg leading-relaxed max-w-none mb-10">
              TTS specialises in delivering top-tier Plant Automation solutions that streamline industrial processes. Our cutting-edge automation systems boost efficiency, reduce operational costs, and enhance productivity — with customised solutions for process optimisation, remote monitoring, and safety enhancements, backed by continuous expert support.
            </p>
          </div>
          <div className="fade-up d2">
            <div className="flex flex-wrap gap-3 mb-14">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-lg shadow-[#e7212b]/25">
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service/industrial-automation/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm">
                ← Industrial Automation
              </Link>
            </div>
          </div>
          <div className="fade-up d3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#000000] blueprint-grid blueprint-dot-grid px-5 py-5 flex flex-col gap-1">
                  <span className="text-white font-bold text-lg leading-tight">{s.value}</span>
                  <span className="text-white/50 text-[14px] tracking-[1px] uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
