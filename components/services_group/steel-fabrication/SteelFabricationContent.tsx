"use client";
import Link from "next/link";
import { ArrowRight, Cog, Pipette, Wrench, ClipboardCheck } from "lucide-react";

const CARDS = [
  { Icon: Cog, title: "Skid Fabrication", body: "Custom skid fabrication for process equipment, metering systems, and industrial machinery — complete with piping, valves, and instrumentation." },
  { Icon: Pipette, title: "Pipework Fabrication", body: "Precision pipework fabrication for oil & gas, petrochemical, and industrial process applications — carbon steel, stainless steel, and alloy." },
  { Icon: Wrench, title: "Structural Components", body: "Fabrication of structural steel components including beams, columns, brackets, platforms, and support frames to engineering specifications." },
  { Icon: ClipboardCheck, title: "Quality Control & Testing", body: "Rigorous quality control throughout the fabrication process — dimensional inspection, weld testing, and material certification." },
];

export default function SteelFabricationContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Fabrication Services</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Steel Fabrication Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Precision Steel Fabrication for Industrial Applications</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">TTS provides comprehensive steel fabrication services for oil and gas, petrochemical, infrastructure, and industrial projects. Our fabrication capabilities encompass CNC plasma and flame cutting, MIG/TIG and submerged arc welding, press brake forming, rolling, and assembly — producing components and assemblies from carbon steel, stainless steel, and alloy materials to engineering specifications.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Quality control is embedded throughout our fabrication process — from incoming material verification and welder qualification through to in-process dimensional inspection, non-destructive testing of welds, and final dimensional verification. Our quality management system complies with ISO 9001, ISO 3834, and EN 1090 — ensuring fabricated components meet the structural, pressure, and corrosion resistance requirements of your project.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS supports projects from small-batch bespoke components through to large-volume structural steel programmes. Our fabrication facility handles material procurement, cutting, forming, welding, surface treatment, and delivery — providing a single point of responsibility for your steel fabrication requirements across Kuwait and the wider GCC region.</p>
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
              <p className="text-white/70 text-[10px] tracking-[2px] uppercase mb-2">Quality Fabrication</p>
              <p className="text-white font-semibold text-lg">Complete Steel Fabrication Solutions</p>
              <p className="text-white/70 text-sm mt-1">Cutting · Bending · Welding · Assembly — Kuwait &amp; Dubai</p>
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
