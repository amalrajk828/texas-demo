"use client";
import Link from "next/link";
import { ArrowRight, Settings, Monitor, ShieldCheck, HeadphonesIcon } from "lucide-react";

const CARDS = [
  { Icon: Settings, title: "Customised Automation Solutions", body: "Each plant is unique — our automation solutions are tailored to your specific needs: process optimisation, throughput maximisation, and operational efficiency goals." },
  { Icon: Monitor, title: "Remote Monitoring & Control", body: "Real-time remote monitoring and control of plant processes via integrated SCADA and DCS platforms, providing full operational visibility from any location." },
  { Icon: ShieldCheck, title: "Safety & Compliance", body: "Safety and regulatory compliance are built into every design. Our automation solutions adhere to the highest industry standards including IEC 61508, IEC 61511, and SIL requirements." },
  { Icon: HeadphonesIcon, title: "Continuous Support & Maintenance", body: "Ongoing support, performance monitoring, and maintenance extend beyond implementation — minimising downtime, maximising uptime, and protecting your automation investment." },
];

export default function PlantAutomationContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Plant Automation Capabilities
          </h2>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Technologies &amp; Standards</p>
              <p className="text-white font-semibold text-lg">Siemens · Allen-Bradley · Schneider · DCS · IEC 61508</p>
              <p className="text-white/70 text-sm mt-1">Experienced automation engineers — Kuwait &amp; Dubai</p>
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
