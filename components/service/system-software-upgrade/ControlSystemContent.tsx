"use client";
import Link from "next/link";
import { ArrowRight, Cpu, Monitor, RefreshCw, BarChart3 } from "lucide-react";

const CARDS = [
  { Icon: Cpu, title: "PLC Programming & Integration", body: "Multi-brand PLC programming across Siemens, Allen-Bradley, Schneider Electric, and Mitsubishi platforms — new builds, modifications, and legacy system upgrades." },
  { Icon: Monitor, title: "SCADA & HMI Development", body: "SCADA system development, HMI panel design and programming, historian integration, and legacy SCADA migration to modern platforms with enhanced visualisation." },
  { Icon: RefreshCw, title: "Legacy System Upgrades", body: "Assessment and modernisation of obsolete control systems — replacing end-of-life hardware and software while preserving operational continuity during transition." },
  { Icon: BarChart3, title: "Reporting & MIS Software", body: "Customised MIS and reporting software development for production tracking, KPI dashboards, and operational data integration with ERP and business intelligence systems." },
];

export default function ControlSystemContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Control System Integration Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Control System Modernisation and Software Migration</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Legacy control systems — including PLCs, DCS, SCADA, and HMI platforms — become increasingly difficult and costly to maintain as hardware reaches end-of-life and software support is withdrawn. A structured upgrade programme replaces obsolete components with current-generation platforms while preserving process knowledge, maintaining operational continuity, and improving system reliability and cybersecurity.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS manages the complete upgrade lifecycle from system audit and requirements capture through hardware specification, software development, factory acceptance testing, site installation, and post-commissioning support. Our engineers have deep expertise across Mitsubishi MELSEC, Siemens S7, Allen-Bradley ControlLogix, and Schneider Modicon platforms — ensuring seamless migration with minimal production disruption.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">We provide comprehensive documentation including hardware and software specifications, migration plans, test procedures, and operator training materials. Our upgrade approach includes parallel running and staged cutover options to maintain operational continuity throughout the transition — delivering improved system performance, enhanced cybersecurity, and extended asset life.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Platforms &amp; Technologies</p>
              <p className="text-white font-semibold text-lg">Siemens S7 · Allen-Bradley · Schneider · Ignition SCADA · WinCC</p>
              <p className="text-white/70 text-sm mt-1">PLC &amp; SCADA engineers — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
