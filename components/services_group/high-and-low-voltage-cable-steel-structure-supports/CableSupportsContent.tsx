"use client";
import Link from "next/link";
import { ArrowRight, Cable, Building2, Route, Ruler } from "lucide-react";

const CARDS = [
  { Icon: Cable, title: "High Voltage Cable Supports", body: "Design and fabrication of heavy-duty steel support structures for high voltage cable systems — ensuring safe routing and structural integrity." },
  { Icon: Route, title: "Low Voltage Cable Pathways", body: "Cable tray systems, ladder racks, and conduit supports for low voltage electrical and instrumentation cable management." },
  { Icon: Building2, title: "Steel Structural Supports", body: "Custom steel structural supports for electrical equipment, switchgear, transformers, and cable termination points." },
  { Icon: Ruler, title: "Design & Detailing", body: "Detailed engineering design, structural analysis, and shop drawings for cable support systems compliant with international standards." },
];

export default function CableSupportsContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Structural Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Cable Support Structure Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Cable Tray, Ladder, and Support Structure Installation</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Cable support systems are the backbone of electrical distribution in industrial and commercial facilities. TTS designs, supplies, and installs cable tray, cable ladder, perforated tray, and solid-bottom trough systems for power cables, control cables, and fibre optic routes — engineered to support the cable weights, bend radii, and environmental conditions of your project.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our installation teams ensure proper support spacing, seismic bracing, thermal expansion provisions, and fire barrier penetrations in accordance with IEC 61537, NEC Article 392, and project specifications. We also provide heat tracing installation for freeze protection and process temperature maintenance, with complete electrical testing and certification of all installed cable support infrastructure.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS delivers turnkey cable support solutions from design and material supply through installation and commissioning. Our teams work across industrial plants, commercial buildings, and infrastructure projects — ensuring cable routes are correctly supported, segregated, and labelled for long-term reliability and ease of maintenance throughout the facility lifecycle.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div className="fade-up">
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Engineered Solutions</p>
              <p className="text-white font-semibold text-lg">Cable Support Infrastructure</p>
              <p className="text-white/70 text-sm mt-1">Design · Fabrication · Erection — Kuwait &amp; Dubai</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
