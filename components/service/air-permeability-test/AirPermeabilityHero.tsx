"use client";
import Link from "next/link";
import Image from "next/image";
import { Wind, ChevronRight, ArrowRight } from "lucide-react";

const STATS = [
  { value: "Air Leakage", label: "What It Measures" },
  { value: "ASTM E783", label: "Test Standard" },
  { value: "Windows / Curtain Walls", label: "Test Scope" },
  { value: "Kuwait & Dubai", label: "Our Locations" },
];

export default function AirPermeabilityHero() {
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
            <Link href="/service/inspection-testing/" className="hover:text-white/60 transition-colors">Inspection &amp; Testing</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/service/specialized-inspection-service/" className="hover:text-white/60 transition-colors">Specialized Inspection</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">Air Permeability Test</span>
          </nav>
        </div>
        <div className="max-w-full">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] mb-10 shadow-2xl shadow-black/40">
            <Image src="/images/services/AIR-PERMEABILITY-TEST.jpg" alt="Air permeability testing of concrete samples — TTS Kuwait" fill sizes="100vw" priority quality={80} className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-transparent to-transparent" />
          </div>
          <div className="fade-up d1">
            <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/10 border border-[#e7212b]/20 rounded-full px-4 py-2 mb-6">
              <Wind className="w-3.5 h-3.5 text-[#e7212b]" strokeWidth={2} />
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[2.5px] uppercase">Specialized Inspection Service</span>
            </div>
          </div>
          <div className="fade-up d1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Air Permeability{" "}
              <span className="text-white">Test</span>
            </h1>
          </div>
          <div className="fade-up d2">
            <p className="text-white/70 text-lg leading-relaxed max-w-none mb-10">
              Air permeability testing measures air infiltration through windows, doors, and curtain wall systems from exterior to interior through gaskets, imperfect joinery, weep holes, and imperfect sealing. TTS performs air leak tests per ASTM E783, and the test can be combined with visualisation techniques to locate air leakage paths.
            </p>
          </div>
          <div className="fade-up d2">
            <div className="flex flex-wrap gap-3 mb-14">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-lg shadow-[#e7212b]/25">
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service/specialized-inspection-service/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm">
                ← Specialized Inspection
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
