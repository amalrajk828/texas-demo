"use client";
import Link from "next/link";
import { ArrowRight, Layers, Zap, Search, ClipboardList } from "lucide-react";

const CARDS = [
  { Icon: Layers, title: "Protective Coatings", body: "Application and inspection of protective coatings, linings, and wraps to prevent corrosion on pipelines, tanks, structures, and offshore assets." },
  { Icon: Zap, title: "Cathodic Protection", body: "Design and monitoring of cathodic protection (CP) systems — impressed current and sacrificial anode — for buried and submerged steel structures." },
  { Icon: Search, title: "Corrosion Assessment", body: "Detailed assessment of existing corrosion using NDT methods including MFL, UT thickness mapping, and visual inspection to determine remaining life." },
  { Icon: ClipboardList, title: "Corrosion Management Plans", body: "Development of corrosion management strategies and inspection schedules to maintain asset integrity and comply with regulatory requirements." },
];

export default function CorrosionControlContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Corrosion Control Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Comprehensive Corrosion Protection for Industrial Assets</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Corrosion is one of the most significant threats to the integrity and longevity of industrial infrastructure. Our corrosion control services encompass the full lifecycle — from initial assessment and material selection through to protective coating application, cathodic protection system design, and ongoing monitoring programs. We work across oil and gas, petrochemical, marine, and power generation sectors.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our certified corrosion engineers and technicians employ advanced NDT methods including magnetic flux leakage (MFL), ultrasonic thickness mapping, and visual inspection to assess remaining wall loss and predict service life. All protective coating and cathodic protection work complies with NACE SP0169, ISO 12944, SSPC, and API 651 standards — ensuring your assets are protected to the highest international benchmarks.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">We provide corrosion management consulting, failure analysis, and material selection services — helping you make informed decisions about repair, replacement, or life extension of corroded assets. Our team delivers detailed condition assessment reports with remaining life predictions and prioritised maintenance recommendations tailored to your operating environment and budget.</p>
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
              <p className="text-white font-semibold text-lg">NACE SP0169 · ISO 12944 · SSPC · API 651</p>
              <p className="text-white/70 text-sm mt-1">Corrosion specialists — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Corrosion Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
