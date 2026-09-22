"use client";

import NeumorphicDeliverCard from "@/components/service/common/NeumorphicDeliverCard";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  FlaskConical,
  Droplets,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    Icon: Award,
    title: "Initial & Periodic Verification",
    body: "Verification according to local regulation (e.g. MID), with calibration uncertainty lower than 1/3 of the MPE in OIML R117 class 0.3 — and according to API MPMS standards. Ensures your meters meet regulatory and custody transfer requirements at every service interval.",
  },
  {
    Icon: FlaskConical,
    title: "Laboratory As Found Calibration",
    body: "Laboratory activities including As Found Calibration to monitor the performance of your equipment. Provides documented baseline data to track meter drift, identify performance degradation, and support informed maintenance decisions.",
  },
  {
    Icon: Droplets,
    title: "Calibration with Real Target Fluids",
    body: "Calibration of non-Faure Herman meters with real target fluids at field-specified viscosity. Eliminates the uncertainty introduced by substitution fluids — delivering calibration data that truly reflects your custody transfer conditions.",
  },
  {
    Icon: Zap,
    title: "Premium Emergency Service",
    body: "If time is key to you, we can offer a premium 2-week emergency calibration service. Minimise downtime and maintain your custody measurement chain with fast-track turnaround from our ILAC/COFRAC ISO 17025 accredited facility in France.",
  },
];

const CAPABILITIES = [
  "Faure Herman helical, oval gear & turbine flowmeters",
  "Third-party and competitor meter brands",
  "Liquid custody transfer flowmeters",
  "Field viscosity fluid calibration",
  "OIML R117 class 0.3 uncertainty compliance",
  "API MPMS calibration protocols",
  "MID (Measuring Instruments Directive) compliance",
  "Full calibration certificates & traceability documentation",
];

export default function CalibrationContent() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Subtle blob */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">

        {/* ── Two-column: image + body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#000000] blueprint-grid blueprint-dot-grid shadow-2xl shadow-black/15">
              <Image
                src="/images/services/Banc-Calibr.jpg"
                alt="ILAC accredited flow meter calibration bench — TTS Kuwait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D26]/40 to-transparent" />
            </div>

            {/* Accreditation badge */}
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-gradient-to-br from-[#e7212b] to-[#aa0b1b] rounded-xl px-5 py-3.5 shadow-lg shadow-[#e7212b]/30">
              <p className="text-white text-[10px] font-bold tracking-[1.5px] uppercase leading-none">
                ILAC / COFRAC
              </p>
              <p className="text-white/75 text-[12px] mt-1 leading-none font-medium">
                ISO 17025 Accredited
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="fade-up d1">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-5 h-px bg-[#0891B2]" />
                <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                  World-Class Calibration
                </span>
              </div>
              <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15] mb-5">
                ILAC/COFRAC ISO 17025<br />Accredited Facility, France
              </h2>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-4">
                Faure Herman, our accredited partner, operates a world-class calibration facility
                in France accredited under ILAC and COFRAC to ISO 17025. The facility handles the
                full range of Faure Herman flowmeters as well as other brands and competitive
                metering technologies — calibrated on field-specified viscosity fluids for true
                operational accuracy.
              </p>
              <p className="text-gray-500 text-[15px] leading-[1.85] mb-8">
                Accreditation No. <span className="font-semibold text-[#0B0D26]">2-1210</span> —
                scope available at{" "}
                <span className="text-[#e7212b] font-medium">www.cofrac.fr/en</span>
              </p>
            </div>

            {/* Capabilities checklist */}
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
              >
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* ── 4 service cards ── */}
        <div>
          <div className="fade-up mb-12">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Calibration Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.2rem] font-bold text-[#0B0D26] leading-[1.15]">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((item, i) => (
              <div key={item.title || i} className="fade-up">
                <div
                  className="neumorphic-press-card p-7 flex flex-col justify-between h-full group block text-left"
                >
                  <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[3px] mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="neumorphic-press-btn w-11 h-11 flex items-center justify-center text-[#e7212b] mb-4">
                    <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>

                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

                  <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] leading-[1.75] flex-1">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency service highlight + CTA */}
          <div className="fade-up d4">
            <div className="mt-8 rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative">
              {/* Grid texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
                }}
              />
              {/* Red glow */}
              <div
                className="absolute right-0 top-0 w-64 h-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse at right, rgba(231,33,43,0.12) 0%, transparent 70%)" }}
              />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-70" />

              <div className="relative z-10 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#e7212b] flex flex-col items-center justify-center shrink-0 shadow-lg shadow-[#e7212b]/30">
                    <Zap className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[16px]">2-Week Emergency Calibration Service</p>
                    <p className="text-white/70 text-[13px] mt-0.5">
                      Time-critical calibration with full ILAC/COFRAC ISO 17025 accreditation. Contact us today.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shadow-lg shadow-[#e7212b]/20"
                  >
                    Contact Us <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="/service/flow-measurement-solutions/"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 text-[13px]"
                  >
                    Flow Measurement Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
