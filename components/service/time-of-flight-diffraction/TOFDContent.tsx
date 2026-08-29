"use client";
import Link from "next/link";
import { ArrowRight, ScanLine, Ruler, FileSearch, Layers } from "lucide-react";

const CARDS = [
  { Icon: ScanLine, title: "Weld Crack Detection", body: "Highly sensitive detection of planar defects in welds including lack of fusion, cracks, and incomplete penetration using diffracted wave analysis." },
  { Icon: Ruler, title: "Crack Depth Sizing", body: "Accurate measurement of crack tip positions and depth using time-of-flight calculations, enabling fitness-for-service assessments." },
  { Icon: FileSearch, title: "In-Service Inspection", body: "Rapid volumetric scanning of pressure vessels, pipelines, and structural welds with full digital data recording for permanent archival." },
  { Icon: Layers, title: "Thick Section Inspection", body: "Particularly suited for thick-section welds and components where conventional radiography or pulse-echo UT lacks sufficient sensitivity or coverage." },
];

export default function TOFDContent() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="fade-up mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] max-w-2xl">
            TOFD Applications &amp; Capabilities
          </h2>
        </div>
        <div className="fade-up mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Advanced TOFD Inspection for Volumetric Defect Detection</h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Time-of-flight diffraction (TOFD) is a high-precision ultrasonic technique that uses the diffraction of sound waves from crack tips to detect and size planar defects within welds and base materials. Unlike conventional pulse-echo UT, TOFD provides accurate through-wall sizing of defects regardless of their orientation — making it one of the most reliable methods for fitness-for-service assessments and remaining life calculations.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">TTS deploys TOFD systems for inspection of circumferential and longitudinal welds in pressure vessels, pipelines, and structural components. Our qualified TOFD technicians produce digitised data records that can be archived and reanalysed — providing a permanent inspection history for your assets. All TOFD work complies with BS 7706, EN ISO 10863, and ASME V Article 4.</p>
            <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Our TOFD capabilities include manual and automated scanning systems, multi-zone inspection for thick-section components, and combined TOFD-phased array techniques for enhanced defect characterisation. Each inspection is supported by calibrated reference blocks and quality assurance procedures that ensure repeatable, reliable results across your inspection programme.</p>
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
              <p className="text-white font-semibold text-lg">ASME V · EN ISO 10863 · BS 7706 · ASTM E2373</p>
              <p className="text-white/70 text-sm mt-1">Qualified TOFD technicians — Kuwait &amp; Dubai</p>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm shrink-0">
              Request TOFD Inspection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
