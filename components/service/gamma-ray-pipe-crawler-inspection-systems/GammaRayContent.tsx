"use client";
import Link from "next/link";
import { ArrowRight, Crosshair, Cpu, Radio, FileSearch } from "lucide-react";

const CARDS = [
  { Icon: Crosshair, title: "Circumferential Weld Inspection", body: "SWSI radiography of circumferential pipeline welds, positioning the crawler internally to capture a single panoramic exposure without external repositioning." },
  { Icon: Cpu, title: "Remote Controlled Operation", body: "Battery-powered crawler is remotely controlled from outside the pipeline, enabling safe operation in hazardous, confined, or physically inaccessible environments." },
  { Icon: Radio, title: "X-Ray & Gamma Ray Sources", body: "Compatible with both X-ray and gamma ray radiation sources (Ir-192, Se-75) to suit different pipe diameters, wall thicknesses, and material types." },
  { Icon: FileSearch, title: "Digital Radiographic Output", body: "Produces high-quality radiographic images evaluated to ASME V and API 1104 acceptance criteria with permanent digital image archiving and reporting." },
];

export default function GammaRayContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            Pipe Crawler Radiography Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Internal Radiographic Pipeline Inspection via Gamma Ray Crawler</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Gamma ray pipe crawlers provide internal radiographic examination of circumferential welds in pipeline construction — without requiring external access to the weld zone. The crawler positions a radioactive source (typically Ir-192 or Se-75) inside the pipe, directly opposite the weld to be inspected, and exposes radiographic film or digital detector plates mounted on the external surface.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">This method is particularly valuable for pipeline sections where conventional external radiography is impractical — such as buried crossings, insulated lines, or congested plant areas. TTS operates gamma ray crawler systems for pipeline construction quality assurance and in-service inspection, producing permanent radiographic records that comply with ASME V, API 1104, and ISO 17636-2 standards.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our crawler systems accommodate various pipe diameters and wall thicknesses, with digital radiography options available for immediate image review and faster reporting. TTS manages all radiation safety requirements including source handling, exclusion zone management, and regulatory notifications — ensuring compliant and efficient inspection campaigns on your pipeline projects.</p>
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
              <p className="text-white font-semibold text-lg">ASME V · API 1104 · EN ISO 17636 · ASTM E1817</p>
              <p className="text-white/70 text-sm mt-1">Certified radiographic technicians — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request Pipe Crawler Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
