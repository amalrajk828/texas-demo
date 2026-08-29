"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Microscope, ScanSearch, Layers, ShieldCheck } from "lucide-react";

const CARDS = [
  { Icon: ScanSearch,  title: "Macro Examination",       body: "Low-magnification examination of weld cross-sections, material structures, and surface conditions — revealing weld bead geometry, fusion, penetration, and large-scale material discontinuities." },
  { Icon: Microscope,  title: "Micro Examination",        body: "High-magnification metallographic examination of grain structure, phase distribution, inclusions, and microstructural features — providing detailed insights into material condition and heat treatment state." },
  { Icon: Layers,      title: "Weld Macro Sectioning",    body: "Cross-sectional examination of welds to verify bead geometry, heat-affected zone (HAZ), fusion, and freedom from cracks, porosity, and other weld discontinuities to applicable standards." },
  { Icon: ShieldCheck, title: "Grain Size & Phase Analysis", body: "Quantitative microstructural assessment including grain size measurement, phase identification, inclusion rating, and coating/plating thickness measurement using calibrated optical microscopy." },
];

const CAPABILITIES = [
  "Weld macro examination and cross-sectional analysis",
  "Metallographic sample preparation and etching",
  "Optical microscopy — grain size per ASTM E112 / ISO 643",
  "Inclusion assessment — ASTM E45 / ISO 4967",
  "Microstructural phase identification and characterisation",
  "Heat-affected zone (HAZ) examination",
  "Coating and surface layer thickness measurement",
  "Certified reports with photomicrographs",
];

export default function MacroMicroContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#0B0D26] shadow-2xl shadow-black/15">
              <Image src="/images/services/Macro-and-Micro-Test.jpg" alt="Metallographic macro and micro examination of weld cross-section — TTS Kuwait" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">Macro & Micro</p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">Metallographic Analysis</p>
            </div>
          </div>
          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Macro &amp; Micro Testing for Multi-Scale Material Characterisation</h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Micro and macro mechanical tests are two categories of experiments conducted to study the mechanical properties of materials at different length scales. These tests provide valuable insights into the behaviour of materials under various loading conditions.</p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Macro and micro examination aids in material characterisation, design optimisation, and quality control in different industries — from weld procedure qualification and incoming material inspection, to failure investigation and process verification for oil & gas, construction, and manufacturing sectors.</p>
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
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Examine</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">Macro &amp; Micro Examination Methods</h2>
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
                  <p className="text-white font-bold text-[15px]">Need Macro or Micro Examination for Your Materials?</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Contact our team about metallographic testing, weld macro, or grain structure analysis.</p>
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
