"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Wind, Search, Building2, FileSearch } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

const CARDS = [
  { Icon: Wind, title: "Air Leakage Rate Measurement", body: "Quantitative measurement of air infiltration rates through installed window, door, and curtain wall assemblies under controlled positive and negative pressure differentials." },
  { Icon: Search, title: "Leakage Path Visualisation", body: "Combined air pressure testing with visualisation techniques (smoke pens, thermal imaging) to locate precise air leakage paths through joints, seals, and interfaces." },
  { Icon: Building2, title: "Curtain Wall Air Testing", body: "Air permeability assessment of curtain wall systems including aluminium framing, gaskets, mullion/transom joints, and panel-to-frame interfaces." },
  { Icon: FileSearch, title: "Compliance Reporting", body: "Air permeability index reports with comparison against specified air leakage performance class, supporting project handover and building regulation compliance." },
];

export default function AirPermeabilityContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0} className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Air Permeability Testing Capabilities
          </h2>
        </FadeUp>
        <FadeUp delay={0.06} className="mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#e7212b]" /><span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Air Infiltration Testing for Building Envelope Performance</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Air permeability testing measures the rate of air leakage through building envelope assemblies — including curtain walls, windows, doors, and panel systems — under controlled pressure differentials. The test quantifies air infiltration and exfiltration rates, providing objective data on gasket performance, sealant integrity, and overall weatherseal quality of the installed system.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS performs air permeability testing in accordance with ASTM E783, EN 12153, and AAMA 501 — using calibrated blowers, pressure gauges, and airflow measurement equipment. Our test reports document air leakage rates at specified pressure differentials, enabling comparison against project specifications and international performance benchmarks for energy efficiency and occupant comfort.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Air permeability testing can be performed on individual elements or whole-building assemblies, depending on the project requirements. Our test engineers identify specific leakage paths through the facade assembly — enabling targeted remedial sealing work and verification of corrective measures before final handover.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={0.08 * i}>
              <div className="group rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-4 group-hover:bg-[#e7212b]/15 transition-all duration-300">
                  <card.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[15px] font-bold text-[#0B0D26] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.1}>
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-2">Standards &amp; Codes</p>
              <p className="text-white font-semibold text-lg">ASTM E783 · ASTM E283 · EN 12207 · AAMA 501</p>
              <p className="text-white/45 text-sm mt-1">Building envelope testing specialists — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Air Permeability Test
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
