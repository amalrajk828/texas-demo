"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const STATS = [
  { value: "6 Tests", label: "Mechanical Test Types" },
  { value: "Metals", label: "Plastics, Ceramics & More" },
  { value: "ISO", label: "Standards Compliant" },
  { value: "Kuwait & Dubai", label: "Regional Coverage" },
];

export default function MechanicalHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-16 lg:pb-20">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.018) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.018) 60px)" }} />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.13) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex items-center gap-2 mb-8 text-[11px] text-white/30 tracking-wide">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services/" className="hover:text-white/60 transition-colors">Services</Link>
          <span>/</span>
          <Link href="/service/inspection-testing/" className="hover:text-white/60 transition-colors">Inspection &amp; Testing</Link>
          <span>/</span>
          <span className="text-white/50">Mechanical Testing</span>
        </motion.div>

        <div className="max-w-full">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }} className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-[#e7212b]/15 border border-[#e7212b]/25 flex items-center justify-center">
              <Hammer className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
            </div>
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Inspection &amp; Testing Services</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6">
            Mechanical{" "}
            <em className="not-italic text-[#e7212b]">Testing</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }} className="text-white/50 text-[16px] leading-[1.85] mb-10 max-w-none">
            Comprehensive mechanical testing services for metals, plastics, ceramics, and composites — including tensile, hardness, impact, bend, fracture, and macro/micro testing to determine material properties and ensure structural integrity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.22 }} className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/25">Get More Information</a>
            <Link href="/service/inspection-testing/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]">← Inspection &amp; Testing</Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-[1.8rem] font-bold text-white leading-none">{s.value}</span>
              <span className="text-white/35 text-[11px] tracking-[1.5px] uppercase leading-snug">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
