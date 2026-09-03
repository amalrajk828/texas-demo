"use client";
import Link from "next/link";
import { ArrowRight, Truck, Settings, ShieldCheck, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Truck, title: "Crane & Hoist Inspection", body: "Thorough inspection of overhead cranes, mobile cranes, gantry cranes, hoists, and davits — examining structural members, ropes, chains, brakes, and controls." },
  { Icon: Settings, title: "Forklift & Material Handling", body: "Periodic inspection of forklifts, telehandlers, reach trucks, and other material handling equipment for mechanical integrity and safe operation compliance." },
  { Icon: ShieldCheck, title: "Load Testing & Proof Load", body: "Load testing and proof load testing of lifting equipment and lifting accessories to verify rated capacity after installation, repair, or modification." },
  { Icon: FileSearch, title: "Examination & Written Report", body: "Thorough examination of safety-critical parts at defined intervals with a certified written report identifying defects, recommended actions, and next inspection dates." },
];

export default function LiftingInspectionContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Lifting Equipment Inspection Scope
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Periodic Examination and Load Testing of Lifting Equipment</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Lifting equipment — including overhead cranes, jib cranes, hoists, slings, shackles, and lifting beams — requires periodic statutory examination to verify continued safe operation. Our inspections cover visual examination, dimensional checks, functional testing, and load testing to prove the equipment's safe working load capacity in accordance with applicable regulations.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS provides comprehensive lifting equipment inspection programmes compliant with LOLER, OSHA 1910.179, and BS EN 13015. Our certified inspectors deliver examination reports with deficiency grading, recommended remedial actions, and re-examination intervals — ensuring your lifting operations remain legally compliant and your workforce is protected from lifting-related hazards.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">We offer flexible inspection scheduling to minimise disruption to your operations — including planned shutdown inspections, annual statutory examinations, and ad-hoc inspections following incidents or modifications. All inspection records are maintained in our asset management system, providing full traceability and automated reminders for upcoming re-examination dates.</p>
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
              <p className="text-white font-semibold text-lg">LOLER 1998 · BS EN 13001 · ASME B30 · ISO 9927</p>
              <p className="text-white/70 text-sm mt-1">Certified lifting equipment inspectors — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Lifting Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
