"use client";
import Link from "next/link";
import { ArrowRight, Search, Cable, Activity, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: Cable, title: "Heat Exchanger Tube Inspection", body: "Full-length inspection of heat exchanger tubes to detect pitting, corrosion, erosion, and stress corrosion cracking without removing tubes from service." },
  { Icon: Search, title: "Surface Crack Detection", body: "Detection of surface and near-surface discontinuities in conductive materials using high-frequency eddy currents for aerospace, automotive, and industrial components." },
  { Icon: Activity, title: "Conductivity & Coating Thickness", body: "Measurement of electrical conductivity and non-conductive coating thickness on conductive substrates without requiring direct contact with the base material." },
  { Icon: ShieldCheck, title: "Weld & Structural Inspection", body: "Scanning of welds and structural components for subsurface flaws, corrosion pits, and discontinuities in ferromagnetic and non-ferromagnetic materials." },
];

export default function EddyCurrentContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Eddy Current Testing Applications
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Eddy Current Testing for Surface and Sub-Surface Defect Detection</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Eddy current testing (ECT) is a non-contact electromagnetic method that induces circulating eddy currents in electrically conductive materials. Disruptions to these currents — caused by cracks, corrosion, wall thinning, or changes in material properties — are detected as impedance changes in the test coil, providing sensitive detection of surface and near-surface defects.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS deploys eddy current testing for heat exchanger tube inspection, aircraft component assessment, weld surface examination, and coating thickness measurement. Our array and rotary probe systems achieve high-resolution scanning of non-ferrous materials including aluminium, copper, titanium, and stainless steel. All ECT work is performed to ASME V, ISO 15549, and ASTM E2884 standards.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our eddy current inspection capabilities include bobbin coil, rotating probe, and array probe configurations for tubular inspection, as well as surface probes for flat and curved component assessment. Inspection data is analysed by certified Level 2 and Level 3 technicians — providing defect sizing, characterisation, and fitness-for-service recommendations based on your acceptance criteria.</p>
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
              <p className="text-white font-semibold text-lg">ASME V · ASTM E426 · EN ISO 15548 · API 5CT</p>
              <p className="text-white/70 text-sm mt-1">Qualified ECT technicians — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request ECT Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
