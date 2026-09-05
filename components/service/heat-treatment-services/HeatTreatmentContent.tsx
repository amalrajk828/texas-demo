"use client";
import Link from "next/link";
import { ArrowRight, Flame, Zap, Thermometer, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Flame, title: "Post Weld Heat Treatment (PWHT)", body: "PWHT to relieve residual stresses in welded components, reduce hardness in the heat-affected zone, and improve dimensional stability and toughness." },
  { Icon: Zap, title: "Electrical Resistance Heating", body: "Flexible ceramic pad and resistance heating blanket systems for precise, uniform heating of complex geometries including pipe welds, vessels, and structures." },
  { Icon: Thermometer, title: "Fuel-Fired & High-Velocity Burners", body: "On-site heat treatment using high-velocity burner systems with intense scrubbing action, ensuring excellent temperature uniformity for large components and structures." },
  { Icon: FileSearch, title: "Temperature Monitoring & Reporting", body: "Multi-channel thermocouple temperature recording, soak charts, and certified heat treatment reports in compliance with ASME and AWS requirements." },
];

export default function HeatTreatmentContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Heat Treatment Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Post-Weld Heat Treatment and Stress Relief Services</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Post-weld heat treatment (PWHT) is essential for relieving residual stresses introduced during welding — reducing the risk of stress corrosion cracking, hydrogen-induced cracking, and brittle fracture in welded components. PWHT involves controlled heating to a specified temperature, holding for a defined period, and controlled cooling at a rate that prevents thermal shock.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS provides electric resistance heating blanket PWHT with multi-zone thermocouple monitoring and automated temperature recording — compliant with ASME VIII, AWS D1.1, and BS EN 13445. Our services cover pressure vessels, piping, structural welds, and repair welds, with full thermal documentation including time-temperature charts, thermocouple maps, and heat treatment certificates for your quality records.</p>
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
              <p className="text-white font-semibold text-lg">ASME VIII · AWS D1.1 · ASME B31.3 · BS EN ISO 17663</p>
              <p className="text-white/70 text-sm mt-1">Certified heat treatment engineers — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Heat Treatment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
