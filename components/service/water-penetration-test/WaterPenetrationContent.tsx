"use client";
import Link from "next/link";
import { ArrowRight, Droplets, Building2, ScanLine, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Droplets, title: "Static Water Pressure Test", body: "Application of static water pressure to window and curtain wall test areas to identify leakage paths under simulated rain-load and wind-driven rain conditions." },
  { Icon: Building2, title: "Curtain Wall Testing", body: "Systematic testing of curtain wall assemblies for water-tightness across movement joints, seals, and glazing interfaces in commercial and high-rise buildings." },
  { Icon: ScanLine, title: "Window & Door Water Testing", body: "Water penetration assessment of installed window and door units per ASTM E1105 and AAMA 502, verifying performance against design specifications." },
  { Icon: FileSearch, title: "Leakage Location Reporting", body: "Detailed reporting of all identified leakage locations, routes, and severity — supporting remedial design, contractor warranties, and client handover documentation." },
];

export default function WaterPenetrationContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Water Penetration Testing Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Static and Dynamic Water Penetration Testing for Exterior Walls</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Water penetration testing evaluates the ability of installed curtain wall systems, windows, and doors to resist water ingress under simulated rain conditions with applied air pressure. The test applies uniform water spray to the exterior face while maintaining a specified positive pressure differential — identifying leakage paths through joints, gaskets, glazing seals, and drainage systems.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS conducts water penetration testing to ASTM E1105, AAMA 501.1, and BS 8200 — using calibrated spray racks, pressure control systems, and systematic observation procedures. Our reports provide detailed leakage mapping with location references, severity classifications, and remedial recommendations — supporting quality assurance during construction and dispute resolution at handover.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Testing can be performed at various stages — from mock-up validation during design through to field verification of installed systems. Our technicians work systematically across all facade zones, documenting results in real time and providing immediate feedback to construction teams for rapid corrective action where leakage is identified.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div key={card.title || i} className="fade-up">
              <div className="group rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-4 group-hover:bg-[#e7212b]/15 transition-all duration-300">
                  <card.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                </div>
                <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[15px] font-bold text-[#0B0D26] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fade-up d1">
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Standards &amp; Codes</p>
              <p className="text-white font-semibold text-lg">ASTM E1105 · AAMA 502 · BS 6375 · EN 12208</p>
              <p className="text-white/70 text-sm mt-1">Building envelope testing specialists — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Water Penetration Test
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
