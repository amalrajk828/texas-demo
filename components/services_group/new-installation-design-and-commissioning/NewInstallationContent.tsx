"use client";
import Link from "next/link";
import { ArrowRight, FileText, Layout, Cable, ClipboardCheck } from "lucide-react";

const CARDS = [
  { Icon: FileText, title: "System Specification & Sizing", body: "Assistance with specification, design, and sizing of future metering systems — ensuring optimal performance and regulatory compliance." },
  { Icon: Layout, title: "General Arrangement & P&ID", body: "Detailed general arrangement drawings and Piping & Instrumentation Diagrams (P&ID) for complete metering system visualization and planning." },
  { Icon: Cable, title: "Electrical SLD & Cable Schedule", body: "Single Line Diagrams (SLD), cable schedules, and instrument index documentation for precise electrical infrastructure planning." },
  { Icon: ClipboardCheck, title: "Commissioning Support", body: "End-to-end commissioning support from pre-commissioning checks through system validation and handover to operations." },
];

export default function NewInstallationContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Design &amp; Commissioning Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Design, Installation Supervision, and Commissioning of New Systems</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">TTS supports clients through the complete lifecycle of new system installation — from concept design and detailed engineering through installation supervision, testing, and commissioning. Our engineering team develops functional specifications, P&IDs, electrical schematics, and control system architectures that meet your operational requirements and comply with applicable codes and standards.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">During construction, our site engineers supervise installation quality, manage vendor interfaces, and coordinate testing activities including loop checking, pressure testing, and integrated system testing. Commissioning support covers factory acceptance testing (FAT), site acceptance testing (SAT), pre-commissioning checks, and operational handover — with comprehensive documentation packages that satisfy regulatory and owner-operator requirements.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS works as an extension of your project team — providing specialist commissioning expertise that complements your internal resources. Our engineers have experience across oil and gas, petrochemical, power generation, and infrastructure sectors, delivering commissioning solutions that reduce risk, optimise schedules, and ensure your new systems perform as designed from day one.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Authorized OEM Representative</p>
              <p className="text-white font-semibold text-lg">Expert Design &amp; Commissioning Services</p>
              <p className="text-white/70 text-sm mt-1">Kuwait &amp; Dubai — full metering system lifecycle support</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
