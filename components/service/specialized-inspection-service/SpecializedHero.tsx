"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScanSearch, ChevronRight, ArrowRight } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: "15", label: "Specialist Services" },
  { value: "PAUT / ECT / TOFD", label: "Advanced Methods" },
  { value: "Corrosion & Lifting", label: "Full Asset Coverage" },
  { value: "Kuwait & Dubai", label: "Our Locations" },
];

export default function SpecializedHero() {
  return (
    <section className="relative bg-[#0B0D26] overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#e7212b]/5 blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e7212b]/4 blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <FadeUp delay={0}>
          <nav className="flex items-center gap-1.5 text-[11px] text-white/35 tracking-[1.5px] uppercase mb-10 flex-wrap">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/service/" className="hover:text-white/60 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/service/inspection-testing/" className="hover:text-white/60 transition-colors">Inspection &amp; Testing</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Specialized Inspection Service</span>
          </nav>
        </FadeUp>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2.5 bg-[#e7212b]/10 border border-[#e7212b]/20 rounded-full px-4 py-2 mb-6">
              <ScanSearch className="w-3.5 h-3.5 text-[#e7212b]" strokeWidth={2} />
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[2.5px] uppercase">Specialized Inspection Service</span>
            </div>
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Advanced Inspection &{" "}
              <span className="text-[#e7212b]">Specialist NDT</span> Services
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
              From Phased Array Ultrasonic Testing and Eddy Current Testing to Corrosion Control, Metallurgical Analysis, and Lifting Equipment Inspection — TTS delivers advanced specialist services for the oil &amp; gas, petrochemical, and construction industries in Kuwait and Dubai.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-3 mb-14">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-lg shadow-[#e7212b]/25">
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/service/inspection-testing/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-sm">
                ← Inspection &amp; Testing
              </Link>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.25}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
              {STATS.map((s) => (
                <div key={s.label} className="bg-[#0B0D26] px-5 py-5 flex flex-col gap-1">
                  <span className="text-white font-bold text-lg leading-tight">{s.value}</span>
                  <span className="text-white/35 text-[11px] tracking-[1px] uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
