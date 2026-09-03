"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BarChart3, Calculator, FileCheck, ShieldCheck } from "lucide-react";

const SERVICES = [
  { Icon: Calculator,  title: "Uncertainty Calculations",    body: "Advanced measurement uncertainty calculations performed to GUM (Guide to the Expression of Uncertainty in Measurement) methodology — assessing and minimizing uncertainty across your entire custody transfer measurement chain." },
  { Icon: FileCheck,   title: "Validation Services",         body: "Comprehensive validation of custody metering systems, flow computers, and metering skids — confirming that your systems perform within specified tolerances and comply with regulatory and contractual requirements." },
  { Icon: BarChart3,   title: "Performance Assessment",      body: "Data-driven performance assessments of your custody metering operations, providing a comprehensive understanding of measurement accuracy, repeatability, and system health." },
  { Icon: ShieldCheck, title: "Standards Compliance",        body: "Full compliance validation against API MPMS, AGA, ISO, OIML and other applicable standards — giving you documented confidence in the regulatory conformity of your custody transfer measurement systems." },
];

const CAPABILITIES = [
  "GUM-compliant measurement uncertainty analysis",
  "Custody metering skid validation",
  "Flow computer output verification",
  "K-factor and meter factor validation",
  "Uncertainty budget preparation and documentation",
  "API MPMS Chapter 21 compliance assessments",
  "Combined uncertainty calculations (Type A & B)",
  "Tailored validation reports for audits and regulators",
];

export default function ValidationContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#0B0D26] shadow-2xl shadow-black/15">
              <Image src="/images/services/validation.jpg" alt="GUM compliant validation and uncertainty calculations — TTS Kuwait" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">GUM Compliant</p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">Uncertainty Analysis</p>
            </div>
          </div>

          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">What We Do</span></div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">Advanced Validation &amp; Uncertainty Calculations for Custody Transfer</h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">Our team of skilled experts employs advanced techniques and calculations to assess and minimize uncertainties, giving you confidence in the reliability of your measurement data. Whether you need validation services, uncertainty assessments, or both, we tailor our solutions to your specific requirements.</p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">Choose us for dependable, data-driven solutions that optimize your custody metering skid and ensure compliance with industry standards — providing a comprehensive understanding of your custody transfer operations.</p>
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
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15">
                Get More Information <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="fade-up mb-12">
            <div className="flex items-center gap-2.5 mb-4"><span className="w-5 h-px bg-[#0891B2]" /><span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Our Services</span></div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((item, i) => (
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
                  <p className="text-white font-bold text-[15px]">Build Confidence in Your Measurement Accuracy</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Talk to our specialists about your validation and uncertainty analysis requirements.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20">Contact Us <ArrowRight className="w-3.5 h-3.5" /></a>
                  <Link href="/service/flow-measurement-solutions/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]">Flow Measurement</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
