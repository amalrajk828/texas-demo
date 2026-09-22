"use client";
import Link from "next/link";
import { ArrowRight, Eye, Video, Pipette, Settings } from "lucide-react";

const CARDS = [
  { Icon: Eye, title: "Internal Pipe & Vessel Inspection", body: "Inspection of the internal surfaces of pipes, pressure vessels, heat exchangers, and tanks for corrosion, cracks, deposits, and mechanical damage." },
  { Icon: Video, title: "Turbine & Engine Inspection", body: "Non-disassembly visual inspection of turbine blades, compressor stages, and engine internals through access ports without costly teardown." },
  { Icon: Pipette, title: "Confined Space Assessment", body: "Safe remote visual assessment of tanks, sumps, ducts, and other confined spaces through limited access openings, with full HD image and video recording." },
  { Icon: Settings, title: "Weld & Joint Verification", body: "Visual verification of internal welds, joints, and fitted components in fabricated assemblies and piping systems where direct access is not possible." },
];

export default function VideoscopeContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Videoscope Inspection Applications
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Borescope and Videoscope Inspection for Internal Access</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Video probe inspection enables visual examination of internal surfaces in areas that are inaccessible to direct observation — including boilers, pressure vessels, heat exchangers, turbines, and complex piping systems. High-resolution video endoscopes with articulated tips provide 360-degree manoeuvrability, allowing operators to navigate around bends, through nozzles, and past internal obstructions.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS deploys industrial videoscopes with diameters from 2.4mm to 8mm and working lengths up to 30 metres — equipped with LED illumination, still image capture, and HD video recording. Our certified inspection technicians produce detailed inspection reports with annotated images and defect mapping, supporting integrity assessments and maintenance planning for your critical assets.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Video probe inspections are particularly valuable for pre-operation acceptance, scheduled maintenance outages, and condition monitoring programmes. Our technicians are trained in defect recognition and can provide real-time assessment during inspection — identifying areas of concern that may require further NDT evaluation or maintenance action.</p>
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
              <p className="text-white font-semibold text-lg">ASME V · AWS D1.1 · ISO 17637 · API 510</p>
              <p className="text-white/70 text-sm mt-1">Portable videoscope systems — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Videoscope Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
