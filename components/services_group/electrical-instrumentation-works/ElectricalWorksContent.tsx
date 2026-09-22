"use client";
import Link from "next/link";
import { ArrowRight, Zap, Radio, PanelRight, ClipboardCheck } from "lucide-react";

const CARDS = [
  { Icon: Zap, title: "Electrical System Installation", body: "Complete installation of electrical systems for industrial facilities — power distribution, lighting, switchgear, and control panels." },
  { Icon: Radio, title: "Instrumentation Equipment", body: "Installation and maintenance of instrumentation equipment including transmitters, sensors, analyzers, and measurement devices." },
  { Icon: PanelRight, title: "Control Panel Integration", body: "Integration of electrical control panels, motor control centers (MCC), and distribution boards for efficient plant operations." },
  { Icon: ClipboardCheck, title: "Maintenance & Optimization", body: "Ongoing maintenance, troubleshooting, and performance optimization of electrical and instrumentation systems to minimize downtime." },
];

export default function ElectricalWorksContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Electrical Services</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Electrical &amp; Instrumentation Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Electrical and Instrumentation Installation Services</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">TTS provides electrical and instrumentation installation services for industrial plants, commercial buildings, and infrastructure projects. Our scope covers cable tray and ladder installation, conduit routing, power and control cable pulling, termination, and testing — executed by qualified electricians and instrument technicians working to IEC 60364 and project specifications.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our instrumentation capabilities include instrument loop testing, signal verification, calibration, and configuration of transmitters, analysers, and control equipment. We also provide hazardous area wiring and equipment installation compliant with ATEX and IECEx directives — ensuring safe and reliable electrical and instrumentation systems for classified environments across the oil and gas, petrochemical, and power sectors.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS manages electrical and instrumentation projects from design review and material procurement through installation, testing, and commissioning. Our quality assurance procedures include insulation resistance testing, continuity verification, loop calibration, and functional testing — with comprehensive test documentation and as-built records for handover to your operations team.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Industrial Electrical</p>
              <p className="text-white font-semibold text-lg">Full-Scope Electrical &amp; Instrumentation Services</p>
              <p className="text-white/70 text-sm mt-1">Installation · Maintenance · Optimization — Kuwait &amp; Dubai</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
