"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, ShieldCheck, Truck, Wrench } from "lucide-react";
import WhatWeDoSection from "@/components/service/common/WhatWeDoSection";
import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";

const SERVICES = [
  { Icon: Package, title: "Genuine OEM Parts", body: "As an authorised Faure Herman OEM Representative, we supply 100% genuine spare parts — not aftermarket alternatives — ensuring full compatibility, warranted performance, and traceability for your helical flow meters." },
  { Icon: ShieldCheck, title: "Quality Assurance", body: "Every part supplied by TTS carries full OEM documentation, traceability, and quality certification — giving your maintenance team confidence in authenticity and regulatory compliance." },
  { Icon: Truck, title: "Efficient Parts Supply", body: "Streamlined procurement and logistics for spare parts — minimizing lead times and ensuring the right components reach your facility on time to reduce operational downtime." },
  { Icon: Wrench, title: "Technical Support", body: "Our expert team provides technical guidance on part selection, compatibility assessment, and installation recommendations — ensuring you get the right part for your specific meter model and application." },
];

const PARTS = [
  "Helical rotor assemblies (Faure Herman)",
  "Bearings and bearing housings",
  "Seals, O-rings and gaskets",
  "Counter and transmitter assemblies",
  "Calibration components and trim kits",
  "Meter body and end fittings",
  "Electronic converter modules",
  "Pressure and temperature sensors",
];

export default function SparePartsContent() {
  return (
    <>
      <WhatWeDoSection
        label="WHAT WE DO"
        heading="Genuine OEM Spare Parts for Helical Flow Meters"
        paragraphs={[
          "As an authorised Faure Herman OEM Representative, Texas Technical Services (TTS) supplies genuine spare parts for helical flow meters and associated metering equipment. Our parts procurement ensures authenticity and reliability, allowing your operations to run smoothly and efficiently.",
          "We understand the critical importance of having the right parts available when you need them. Our streamlined parts supply process and technical expertise ensure you receive genuine OEM components with full traceability — protecting measurement performance and regulatory compliance in your custody transfer operations.",
        ]}
        checklist={PARTS}
        imageSrc="/images/services/spare-parts.png"
        imageAlt="Genuine spare parts for flow meters by Texas Technical Services"
        badgeTitle="AUTHORISED OEM"
        badgeSubtitle="Faure Herman Representative"
        buttonText="Get More Information"
        buttonHref="#contact"
      />

      <section className="relative bg-white py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#1f2937] leading-[1.15]">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((item, i) => (
              <div key={item.title || i} className="fade-up">
                <NeumorphicDeliverCard item={item} index={i} />
              </div>
            ))}
          </div>

          <div className="fade-up d4">
            <div className="mt-12 rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)" }} />
              <div className="absolute right-0 top-0 w-64 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.10) 0%, transparent 70%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />
              <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-white font-bold text-[15px]">Need Genuine Spare Parts for Your Flow Meters?</p>
                  <p className="text-white/70 text-[13px] mt-0.5">Contact us with your meter model and part requirements — we'll source the right components fast.</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20">Contact Us <ArrowRight className="w-3.5 h-3.5" /></a>
                  <Link href="/service/flow-measurement-solutions/" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]">Flow Measurement</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
