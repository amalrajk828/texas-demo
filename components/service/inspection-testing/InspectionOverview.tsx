"use client";
import Link from "next/link";
import {
  FileText,
  Eye,
  Droplets,
  Magnet,
  Radio,
  AudioWaveform,
  ArrowRight,
} from "lucide-react";
import NeumorphicServiceCard from "@/components/service/common/NeumorphicServiceCard";

const NDT_METHODS = [
  { Icon: Eye, abbr: "VI", label: "Visual Inspection (VI)" },
  { Icon: Droplets, abbr: "PT", label: "Liquid Penetrant/Dye Penetrant Examination (PT)" },
  { Icon: Magnet, abbr: "MT", label: "Magnetic Particle Inspection (MT)" },
  { Icon: Radio, abbr: "RT", label: "Radiographic Testing (RT)" },
  { Icon: AudioWaveform, abbr: "UT", label: "Ultrasonic Testing (UT)" },
];

const RELATED_SERVICES = [
  {
    category: "Inspection & Testing",
    title: "Mechanical Testing",
    description:
      "Tensile Test Mechanical Testing Tensile testing is a process that provides information about the tensile strength, yield strength, and ductility of the metallic material. It measures the force required to…",
    href: "/service/mechanical-testing/",
  },
  {
    category: "Inspection & Testing",
    title: "Non Destructive Testing (NDT)",
    description:
      "The following non destructive examinations services are available in TTS with technical expertise, qualified and experienced technicians and modern equipment's. These inspection services include, Visual Inspection (VI) Non Destructive Testing…",
    href: "/service/non-destructive-testing-ndt/",
  },
  {
    category: "Inspection & Testing",
    title: "Specialized Inspection Service",
    description:
      "Phased array Ultrasonic Testing Specialized Inspection Services Phased arrays are used to detect the image defects including cracks, voids, and pits caused by corrosion. They are used to measure material…",
    href: "/service/specialized-inspection-service/",
  },
];

export default function InspectionOverview({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <>
      {/* ── 1. About This Service / Detailed Overview (Relocated from Hero) ── */}
      <section id="overview" className="relative bg-[#fcfcfd] py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up w-full max-w-none">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                About This Service
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26] leading-[1.25] mb-6">
              Independent Third-Party Inspection &amp; Quality Verification
            </h2>
            <div className="space-y-5 text-gray-600 text-[15px] sm:text-[16px] leading-[1.85] w-full max-w-none">
              <p className="w-full max-w-none">
                Texas Technical Services Co. (TTS) is a highly diversified independent service provider in the industry mainly as a Third Party Inspection &amp; Testing Company. Since it was founded, TTS has participated in supporting our clients in ensuring quality and safety of their products and our inspectors are committed to providing objective, independent assessments of product compliance and conformity, contributing to production and distribution processes that safeguard consumer health and providing businesses that demonstrate good practices with the tools they need to promote their companies and products, thereby building long-lasting trust-based relationships with their clients.
              </p>
              <p className="w-full max-w-none">
                TTS led by a strong management, technical expertise, engineers and well trained technicians are on a mission to deliver on-time top quality client focused service. We know that a successful company is the result of intelligent planning, capable leadership and active participation by all company members. TTS in that matter respects the talents and experiences of its employees and give the best training possible to keep them in touch with latest technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Main Content Section: Commitment, Consultancy & NDT ── */}
      <section className="relative bg-white pt-12 pb-4 lg:pt-16 lg:pb-6 overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Our Commitment Section */}
          <div className="fade-up">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Commitment
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26] leading-[1.25] mb-5 max-w-full">
              Driving Excellence: Texas Technical Services Co.&apos;s Integrated Approach to Health, Safety, Environment, and Quality Management
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.85] max-w-none">
              Texas Technical Services Co. (TTS) is committed to health and safety, the environment and quality is delivered by adopting an integrated approach to our management systems, and complying with all relevant legislation, regulations and other legal and industry requirements. This provides a framework for integration of the ISO 14001:2015, ISO 45001:2018 and ISO 9001:2015 standards and is externally certificated by a UASL accredited certification body.
            </p>
          </div>

          {/* Stacked: TTS Offers / Consultancy + NDT Examinations */}
          <div className="flex flex-col gap-6">
            {/* TTS Offers / Consultancy Services Card */}
            <div className="fade-up d1">
              <div
                className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative flex flex-col p-7 sm:p-9 shadow-xl w-full"
              >
                {/* Grid texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
                  }}
                />
                {/* Top red accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0">
                      <FileText className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#0891B2] tracking-[2px] uppercase font-semibold">TTS Offers</p>
                      <h3 className="text-white font-bold text-[20px] leading-tight">Consultancy Services</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-[14.5px] leading-[1.85]">
                    TTS provides an efficient QA consultancy service in preparing various documents like Quality Control Procedures, Inspection Test Plan (ITP), Method of Statement, Welding Procedure Specification (WPS), Procedure Qualification Record (PQR), and Welder Qualification Certificates (WQT).
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-up d2">
              <div
                className="rounded-2xl border border-[#e8eaf0] bg-white p-7 sm:p-9 flex flex-col shadow-sm w-full"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#0891B2]" />
                    <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      NDT Examinations
                    </span>
                  </div>
                  <h3 className="text-[#0B0D26] font-bold text-[20px] mb-3 leading-snug">
                    Non Destructive Testing (NDT)
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-[1.8] mb-6">
                    The following non destructive examinations services are available in TTS with technical expertise, qualified and experienced technicians and modern equipment&apos;s. These inspection services include:
                  </p>

                  {/* NDT list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {NDT_METHODS.map(({ Icon, abbr, label }) => (
                      <div
                        key={abbr}
                        className="group flex items-center gap-3 w-full bg-[#f8f9fb] hover:bg-[#f1f3f6] rounded-xl px-3.5 py-3 transition-colors duration-200 cursor-pointer fade-up"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#e7212b]/10 border border-[#e7212b]/15 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
                        </div>
                        <span className="text-[#0B0D26] text-[13px] font-medium leading-snug group-hover:text-[#e7212b] transition-colors duration-200">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Explore More / Related Services Section ── */}
      <section className="bg-white pt-4 pb-10 lg:pt-6 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up mb-10">
            {!hideHeading && (
              <>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-5 h-px bg-[#0891B2]" />
                  <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                    Explore More
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2937]">
                  Related Services
                </h2>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {RELATED_SERVICES.map((card, i) => (
              <div key={card.title || i} className="fade-up">
                <NeumorphicServiceCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
