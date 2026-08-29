"use client";
import Link from "next/link";
import { ArrowRight, Train, Building2, Wrench, TowerControl } from "lucide-react";

const CARDS = [
  { Icon: Train, title: "Telescopic & Twin Track Roof Machines", body: "Supply and installation of telescopic roof machines and twin track roof machines for safe building maintenance and facade access." },
  { Icon: Building2, title: "Powered & Recess Cradles", body: "Powered cradles and recess cradles designed for efficient window cleaning, facade maintenance, and building exterior access." },
  { Icon: Wrench, title: "Monorails & Davit Systems", body: "Monorail systems, parapet traversing davits, parking davits, and parapet mounted davits for versatile suspended access solutions." },
  { Icon: TowerControl, title: "Parapet Track Roof Machines", body: "Parapet guided and guide track roof machines installed on concrete surfaces for reliable and safe building access." },
];

export default function SuspendedAccessContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Access Systems</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Suspended Access Equipment Solutions
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Permanent and Temporary Suspended Access Systems</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Suspended access equipment — including building maintenance units (BMUs), cradles, and rope access systems — provides safe access to building facades, curtain walls, and external structures for cleaning, maintenance, inspection, and repair. TTS supplies, installs, and maintains permanent and temporary suspended access solutions for commercial, residential, and industrial buildings.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our services cover system design, structural anchor installation, guide rail and track systems, and commissioning of powered access equipment to EN 1808 and local regulatory requirements. We also provide periodic examination, load testing, and maintenance programmes that keep your suspended access equipment in safe, compliant, and operational condition throughout its service life.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">From initial feasibility study and system specification through installation, commissioning, and ongoing maintenance, TTS manages the complete suspended access lifecycle. Our engineering team works with building owners, facade contractors, and facility managers to deliver access solutions that balance safety, functionality, aesthetic requirements, and long-term maintenance costs.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Building Maintenance Solutions</p>
              <p className="text-white font-semibold text-lg">Complete Suspended Access Systems</p>
              <p className="text-white/70 text-sm mt-1">Supply, installation, and maintenance — Kuwait &amp; Dubai</p>
            </div>
            <Link href="/contacts/" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
