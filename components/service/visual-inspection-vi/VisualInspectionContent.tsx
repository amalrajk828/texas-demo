"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Search, ClipboardCheck, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: Eye,           title: "Surface Examination",       body: "Systematic visual examination of component surfaces to identify cracks, corrosion, pitting, deformation, and surface discontinuities — providing immediate condition information before further testing." },
  { Icon: Search,        title: "Dimensional Inspection",    body: "Visual and dimensional checks to verify that components meet specified dimensional tolerances — identifying discrepancies, misalignment, and non-conformances without the need for destructive sampling." },
  { Icon: ClipboardCheck, title: "Weld Visual Examination", body: "Visual inspection of welds to detect surface-breaking defects including undercut, overlap, cracks, porosity, and spatter — conducted as the primary acceptance check before more advanced NDT." },
  { Icon: ShieldCheck,   title: "Condition Assessment",      body: "In-service visual inspection for corrosion, erosion, mechanical damage, and coating integrity — supporting maintenance decisions, fitness-for-service evaluations, and planned inspection programmes." },
];

const CAPABILITIES = [
  "Direct visual examination of component surfaces",
  "Remote visual inspection (RVI) using borescopes and cameras",
  "Weld visual examination to AWS D1.1, ASME, ISO 17637",
  "Crack, corrosion, and surface irregularity detection",
  "Dimensional verification and fit-up checks",
  "Coating and lining condition assessment",
  "Pre- and post-weld visual inspection",
  "Documented inspection reports with photographic records",
];

export default function VisualInspectionContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#0B0D26] shadow-2xl shadow-black/15">
              <Image src="/images/services/ndt.jpg" alt="Visual inspection of weld seam on structural steel component — Texas Technical Services" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">First Step</p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">In NDT Process</p>
            </div>
          </div>
          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Visual Inspection — The Foundation of NDT</h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Visual inspection is a non-destructive testing (NDT) method widely used in mechanical testing to examine the surface and external characteristics of a component or material. It involves visually examining the object for any visible defects, such as cracks, corrosion, surface irregularities, or dimensional discrepancies.</p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Visual inspection is often the first step in NDT, as it provides valuable initial information about the condition of the material or part being tested. TTS deploys qualified inspection personnel using direct and remote visual techniques to deliver systematic, documented assessments across all industry sectors.</p>
            </div>
            <div className="fade-up d2">
              <div className="grid grid-cols-1 gap-2.5 mb-8">
                {CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e7212b] shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[#555] text-[13.5px] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up d2">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15">Get More Information <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div>
          <div className="fade-up mb-12">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Applications</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">What We Inspect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARDS.map((item, i) => (
              <div key={item.title || i} className="fade-up">
                <div className="neumorphic-press-card p-7 flex flex-col justify-between h-full group block text-left">
                  <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">{String(i + 1).padStart(2, "0")}</span>
                  <div className="neumorphic-press-btn w-11 h-11 flex items-center justify-center text-[#e7212b] mb-4">
                    <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-[1.75] flex-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-up d4">
            <div className="mt-8 rounded-2xl bg-[#0B0D26] overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
              <div className="absolute right-0 top-0 w-64 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
              <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-white font-bold text-[15px]">Need Visual Inspection Services?</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Contact our team to arrange qualified inspection personnel for your project.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20">Contact Us <ArrowRight className="w-3.5 h-3.5" /></a>
                  <Link href="/service/non-destructive-testing-ndt/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]">NDT Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
