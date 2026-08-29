"use client";
import Link from "next/link";
import Image from "next/image";
import { Zap, ChevronRight, ArrowRight } from "lucide-react";

const STATS = [
  { value: "Installation", label: "Electrical Systems" },
  { value: "Maintenance", label: "Ongoing Support" },
  { value: "Optimization", label: "Performance" },
  { value: "Kuwait & Dubai", label: "Service Locations" },
];

export default function ElectricalWorksHero() {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#e7212b]/5 blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e7212b]/4 blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/35 tracking-[1.5px] uppercase mb-10 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services_group/services/" className="hover:text-white/60 transition-colors">Main Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Electrical &amp; Instrumentation</span>
          </nav>
        </div>
        <div className="max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] mb-10 shadow-2xl shadow-black/40">
            <Image src="/images/services/electrical-inst.png" alt="Electrical & Instrumentation Works" fill sizes="100vw" priority quality={80} className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-transparent to-transparent" />
          </div>
          <div className="fade-up d1">
            <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/10 border border-[#e7212b]/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-3.5 h-3.5 text-[#e7212b]" strokeWidth={2} />
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[2.5px] uppercase">Construction</span>
            </div>
          </div>
          <div className="fade-up d1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Electrical &amp; Instrumentation Works
            </h1>
          </div>
          <div className="fade-up d2">
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
              Comprehensive electrical and instrumentation works encompassing installation, maintenance, and optimization of electrical systems and instrumentation equipment for industrial facilities across Kuwait and Dubai.
            </p>
          </div>
          <div className="fade-up d2">
            <div className="flex flex-wrap gap-3 mb-14">
              <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-lg shadow-[#e7212b]/25">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services_group/services/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm">
                ← All Services
              </Link>
            </div>
          </div>
          <div className="fade-up d3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#000000] blueprint-grid blueprint-dot-grid px-5 py-5 flex flex-col gap-1">
                  <span className="text-white font-bold text-lg leading-tight">{s.value}</span>
                  <span className="text-white/35 text-[11px] tracking-[1px] uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
