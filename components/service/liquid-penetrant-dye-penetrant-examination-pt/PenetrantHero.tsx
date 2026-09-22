"use client";
import Link from "next/link";
import { ChevronRight,Droplets } from "lucide-react";

const STATS = [
  { value: "Surface", label: "Defect Detection" },
  { value: "Cracks", label: "Laps & Porosity" },
  { value: "Non-Porous", label: "All Materials" },
  { value: "ASNT / ISO", label: "Certified Technicians" },
];

export default function PenetrantHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20 min-h-[400px]">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.018) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.018) 60px)" }} />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.13) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.07) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/services/" className="hover:text-white transition-colors">Services</Link><ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/service/inspection-testing/" className="hover:text-white transition-colors">Inspection &amp; Testing</Link><ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/service/non-destructive-testing-ndt/" className="hover:text-white transition-colors">NDT</Link><ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/50">Liquid / Dye Penetrant (PT)</span>
        </nav>
        <div className="max-w-full">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-[#e7212b]/15 border border-[#e7212b]/25 flex items-center justify-center">
              <Droplets className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Non Destructive Testing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6">
            Liquid / Dye Penetrant{" "}
            <em className="not-italic text-white">Examination (PT)</em>
          </h1>
          <p className="text-white/70 text-[16px] leading-[1.85] mb-10 max-w-none">
            A widely used NDT method that uses capillary forces to find surface cracks, laps, and porosity and make them visible — particularly effective for non-porous materials including metals, ceramics, plastics, and some non-metallic materials.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/25">Get More Information</a>
            <Link href="/service/non-destructive-testing-ndt/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]">← NDT Services</Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (<div key={s.label} className="flex flex-col gap-1"><span className="text-2xl sm:text-[1.8rem] font-bold text-white leading-none">{s.value}</span><span className="text-white/35 text-[11px] tracking-[1.5px] uppercase leading-snug">{s.label}</span></div>))}
        </div>
      </div>
    </section>
  );
}
