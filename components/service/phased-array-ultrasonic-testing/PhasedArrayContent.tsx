"use client";
import Link from "next/link";
import { ArrowRight, ScanLine, Layers, Gauge, Microscope } from "lucide-react";

const CARDS = [
  { Icon: ScanLine, title: "Defect Detection", body: "Detects cracks, voids, pits, and corrosion-induced defects using electronically controlled beam steering for precise imaging of internal material discontinuities." },
  { Icon: Layers, title: "Material & Coating Thickness", body: "Accurate measurement of material and coating thickness across complex geometries without requiring access to both sides of the component." },
  { Icon: Gauge, title: "Material Property Changes", body: "Identifies changes in material properties including microstructural variations, heat-affected zones, and bond integrity in multi-layer structures." },
  { Icon: Microscope, title: "Weld Inspection", body: "High-resolution weld inspection for pipeline, pressure vessel, and structural welds, providing volumetric coverage superior to conventional radiography." },
];

export default function PhasedArrayContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            What PAUT Detects &amp; Measures
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Phased Array UT for Advanced Weld and Material Inspection</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Phased array ultrasonic testing (PAUT) uses multiple piezoelectric elements that are pulsed independently with calculated time delays — producing steerable, focused, and swept sound beams without moving the probe. This enables sectorial scanning (S-scan) through the full weld volume in a single pass, significantly improving defect detection probability and sizing accuracy compared to conventional single-element UT.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our PAUT capabilities cover weld inspection for ferritic and austenitic materials, corrosion mapping, and composite laminate assessment. We perform PAUT in accordance with ASME V, ISO 17640, and ISO 13588 — providing fully digitised data with A-scan, B-scan, C-scan, and S-scan imaging for comprehensive defect characterisation and reporting.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS maintains a range of phased array probes, wedges, and scanner configurations to suit different material geometries and inspection requirements. Our PAUT procedures are developed and validated by certified Level 3 technicians — ensuring each inspection is optimised for the specific material, weld geometry, and defect types relevant to your application.</p>
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
              <p className="text-white font-semibold text-lg">ASME V · API 1104 · EN ISO 13588 · ASTM E2700</p>
              <p className="text-white/70 text-sm mt-1">Qualified PAUT technicians — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request PAUT Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
