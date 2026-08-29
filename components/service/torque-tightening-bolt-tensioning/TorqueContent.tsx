"use client";
import Link from "next/link";
import { ArrowRight, Gauge, Wrench, CheckSquare, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Gauge, title: "Torque Tightening", body: "Controlled torque application using calibrated hydraulic and pneumatic torque tools to achieve specified preload values in bolted flange and structural connections." },
  { Icon: Wrench, title: "Bolt Tensioning", body: "Hydraulic bolt tensioning for large-diameter fasteners in flanges, pressure vessels, and reactors — achieving precise and uniform bolt load without torsional stress." },
  { Icon: CheckSquare, title: "Torque Verification Testing", body: "Testing of bolt torque tightening and rotational capacity using calibrated torque sensors — verifying that installed fasteners meet specified torque values and design requirements." },
  { Icon: FileSearch, title: "Documentation & Traceability", body: "Full documented records of applied torque values, tool calibration certificates, and fastener identity for quality control, audit, and regulatory compliance." },
];

export default function TorqueContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Torque &amp; Bolt Tensioning Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Controlled Bolt Tightening and Hydraulic Tensioning Services</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Proper bolt tightening is critical to the integrity of flanged joints, structural connections, and pressure-containing assemblies. Torque tightening applies a calculated rotational force to achieve the required bolt load, while hydraulic tensioning directly stretches the bolt to the target preload — eliminating friction-related variability and providing more accurate and repeatable bolt load achievement.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS provides calibrated torque wrenches, hydraulic tensioners, and bolt heating systems for flange bolt-up per ASME PCC-1, API 6A, and EN 1591. Our technicians perform bolt load calculations, joint integrity assessments, and documented bolt-up procedures — ensuring leak-free flange connections and structural joints that meet design requirements and regulatory obligations.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">We provide bolt tightening services for new construction, maintenance shutdowns, and emergency leak repair situations. Our calibrated tooling is maintained to national standards with full traceability, and all bolt-up activities are documented with target loads, achieved loads, and operator certification records for your quality files.</p>
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
              <p className="text-white font-semibold text-lg">ASME PCC-1 · EN 1591 · ASTM F2412 · API 6A</p>
              <p className="text-white/70 text-sm mt-1">Certified bolt specialists — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Torque Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
