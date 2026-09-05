"use client";
import Link from "next/link";
import { ArrowRight, Building, Landmark, Warehouse, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: Building, title: "Building Frameworks", body: "Erection of structural steel frameworks for commercial, industrial, and high-rise buildings — precise column, beam, and truss installation." },
  { Icon: Landmark, title: "Bridge Structures", body: "Assembly and erection of steel bridge components including girders, cross-frames, and deck systems for road and pedestrian bridges." },
  { Icon: Warehouse, title: "Industrial Plants", body: "Structural steel erection for industrial facilities, warehouses, process plants, and equipment support structures with strict safety protocols." },
  { Icon: ShieldCheck, title: "Safety & Quality Assurance", body: "All erection work executed under rigorous safety management systems with qualified riggers, signalers, and certified welders." },
];

export default function SteelErectionContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Steel Erection</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Structural Steel Erection Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Structural Steel Erection and On-Site Assembly</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Structural steel erection requires careful planning, skilled labour, and rigorous safety management. TTS provides experienced steel erection crews supported by lift planning engineers, rigging specialists, and site safety supervisors — delivering structural steel frameworks for industrial buildings, platforms, pipe racks, and equipment support structures.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our erection methods include crane-assisted lifting, scaffolding-supported manual positioning, and temporary works design for complex lifts. All bolting is performed to ASTM A325 and A490 specifications with calibrated torque equipment, and alignment verification is conducted to project tolerances. Our site teams follow comprehensive method statements and risk assessments, ensuring safe and efficient erection campaigns across Kuwait and the GCC.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS coordinates erection activities with other trades and disciplines — managing interface risks, sequencing dependencies, and schedule constraints. Our project supervisors maintain real-time progress tracking and quality records, providing clients with visibility throughout the erection programme and ensuring structural steelwork is completed safely, on time, and to specification.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Heavy Steel Construction</p>
              <p className="text-white font-semibold text-lg">Precision Steel Erection Services</p>
              <p className="text-white/70 text-sm mt-1">Pre-fab assembly · Skeletal frameworks — Kuwait &amp; Dubai</p>
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
