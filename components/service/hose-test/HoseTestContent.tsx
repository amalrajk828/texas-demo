"use client";
import Link from "next/link";
import { ArrowRight, Pipette, Building2, Search, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Pipette, title: "Curtain Wall Hose Test", body: "Systematic wetting of curtain wall assemblies using a calibrated hose nozzle following a specified spray pattern to identify areas of water ingress." },
  { Icon: Building2, title: "Window & Door Field Test", body: "Quick and economical field water check for installed windows and doors during and after construction, confirming installed performance against design." },
  { Icon: Search, title: "Leakage Path Identification", body: "Immediate identification of leakage entry points around frames, seals, gaskets, and interfaces — enabling targeted remedial work before building handover." },
  { Icon: FileSearch, title: "Diagnostic Reporting", body: "Documented hose test reports identifying leakage observations, locations, severity, and recommended remedial actions for contractor and client records." },
];

export default function HoseTestContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Hose Test Capabilities &amp; Applications
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Field Water Hose Testing for Building Envelope Verification</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">The hose test is a field method for evaluating the water resistance of installed curtain wall systems, windows, and doors under simulated wind-driven rain conditions. A calibrated spray nozzle directs water at the test specimen while an observer inside the building identifies any leakage paths — providing immediate, real-world verification of installed weatherseal performance.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS performs hose tests in accordance with AAMA 501.2, ASTM E1105, and BS 8200 — covering curtain wall joints, window perimeters, door seals, and panel interfaces. Our test reports document leakage observations with locations, severity ratings, and recommended remedial actions — enabling targeted corrective work before building handover and providing permanent records for facility management.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Hose testing is typically performed as part of a comprehensive building envelope test programme alongside air permeability and structural performance testing. Our technicians coordinate test sequences to minimise disruption to ongoing construction activities while ensuring complete coverage of all facade zones and interface details.</p>
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
          <div className="rounded-2xl bg-[#0B0D26] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Standards &amp; Codes</p>
              <p className="text-white font-semibold text-lg">AAMA 501.2 · ASTM E1105 · BS 8200 · EN 12208</p>
              <p className="text-white/70 text-sm mt-1">Building envelope testing specialists — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Hose Test
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
