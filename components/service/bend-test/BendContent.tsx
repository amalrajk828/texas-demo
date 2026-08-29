"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Rotate3D, Layers, FlaskConical, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: Rotate3D,   title: "Guided Bend Test",       body: "A specimen is bent around a mandrel of specified radius — controlled bending to a predetermined angle, assessing ductility, weld integrity, and surface condition for structural applications." },
  { Icon: Layers,     title: "Weld Bend Testing",       body: "Face, root, and side bend tests on welded specimens to evaluate weld soundness, fusion, and ductility — required by welding procedure qualifications (ASME, AWS, ISO)." },
  { Icon: FlaskConical, title: "Flexural Testing",      body: "Three-point and four-point bend testing to determine flexural strength and modulus — applicable to plastics, composites, ceramics, and brittle materials under controlled bending loads." },
  { Icon: ShieldCheck, title: "Structural Qualification", body: "Bend testing for structural steel, piping, and aerospace materials — qualifying material and weld ductility for compliance with design codes, project specifications, and international standards." },
];

const CAPABILITIES = [
  "Guided bend test — face, root, and side bend",
  "Weld procedure qualification bend testing (ASME IX, ISO 15614)",
  "Three-point and four-point flexural testing",
  "Ductility and soundness assessment",
  "Testing to ASTM A370, E290, ISO 7438, BS EN ISO 5173",
  "Bend angle and bend radius per specification",
  "Visual examination of bent surface for cracks/defects",
  "Certified test reports with photographic documentation",
];

export default function BendContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#0B0D26] shadow-2xl shadow-black/15">
              <Image src="/images/services/Three_point_flexural_test-scaled.jpg" alt="Three-point flexural bend test on welded steel specimen — TTS Kuwait" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">Ductility &</p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">Soundness Testing</p>
            </div>
          </div>
          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Bend &amp; Flexural Testing for Ductility &amp; Structural Integrity</h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Bend testing, or flexural testing, is a crucial mechanical test used to assess a material's ability to withstand bending forces without breaking. This testing method is particularly important for materials used in structural applications, such as construction, aerospace, and engineering, where flexibility and resilience are critical factors.</p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">The bend test is a qualitative test that can be used to evaluate both the ductility and soundness of a material — providing essential data for weld procedure qualification, material acceptance, and structural design verification to recognised international standards.</p>
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
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Test Methods</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">Bend Testing Methods &amp; Applications</h2>
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
                  <p className="text-white font-bold text-[15px]">Need Bend Testing for Your Materials or Welds?</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Contact our team about guided bend, flexural, or weld procedure qualification testing.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20">Contact Us <ArrowRight className="w-3.5 h-3.5" /></a>
                  <Link href="/service/mechanical-testing/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]">Mechanical Testing</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
