"use client";
import Link from "next/link";
import { ArrowRight, Fuel, Container, Search, BarChart3 } from "lucide-react";

const CARDS = [
  { Icon: Fuel, title: "Pipeline MFL Inspection", body: "In-line MFL pigging inspection of oil and gas pipelines to detect internal and external corrosion, dents, and metal loss across long pipeline runs." },
  { Icon: Container, title: "Storage Tank Floor Inspection", body: "Rapid scanning of storage tank floors for corrosion and pitting, identifying areas of metal loss that may compromise tank integrity." },
  { Icon: Search, title: "Corrosion & Pitting Detection", body: "Sensitive detection of general and localised corrosion, pitting, and wall thickness variations in ferromagnetic steel structures." },
  { Icon: BarChart3, title: "Wall Thickness Assessment", body: "Quantitative assessment of remaining wall thickness at corrosion sites to support fitness-for-service evaluation and maintenance planning." },
];

export default function MFLContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            MFL Inspection Applications
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">MFL Scanning for Pipeline and Tank Floor Integrity</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Magnetic flux leakage (MFL) is a non-destructive testing technique used to detect and quantify corrosion, pitting, and wall loss in ferromagnetic materials. The technique works by magnetising the test piece to near-saturation — where any reduction in wall thickness causes the magnetic field to leak from the surface, which is then detected by Hall-effect sensors mounted on the scanning probe.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS provides MFL inspection services for above-ground and buried pipelines, storage tank floors, and structural steel members. Our MFL systems generate detailed corrosion maps with depth sizing estimates, enabling remaining life calculations and prioritised maintenance planning. MFL is often combined with ultrasonic thickness mapping for comprehensive integrity assessment.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our MFL inspection teams are experienced in pipeline commissioning surveys, in-service integrity assessments, and pre-decommissioning condition evaluations. Inspection data is processed using advanced analysis software to produce corrosion growth rate estimates, threat assessments, and recommended inspection intervals — supporting risk-based maintenance strategies for your pipeline and tank assets.</p>
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
              <p className="text-white font-semibold text-lg">API 653 · API 1163 · NACE SP0188 · ASTM E570</p>
              <p className="text-white/70 text-sm mt-1">Qualified MFL inspection teams — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request MFL Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
