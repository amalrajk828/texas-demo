"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Eye,
  Droplets,
  Magnet,
  Radio,
  AudioWaveform,
  ArrowRight,
} from "lucide-react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

export default function InspectionOverview() {
  return (
    <>
      {/* ── Main Content Section: Commitment, Consultancy & NDT ── */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {/* ── 4. Our Commitment Section ── */}
          <FadeUp delay={0}>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Commitment
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26] leading-[1.25] mb-5 max-w-4xl">
              Driving Excellence: Texas Technical Services Co.&apos;s Integrated Approach to Health, Safety, Environment, and Quality Management
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.85] max-w-4xl">
              Texas Technical Services Co. (TTS) is committed to health and safety, the environment and quality is delivered by adopting an integrated approach to our management systems, and complying with all relevant legislation, regulations and other legal and industry requirements. This provides a framework for integration of the ISO 14001:2015, ISO 45001:2018 and ISO 9001:2015 standards and is externally certificated by a UASL accredited certification body.
            </p>
          </FadeUp>

          {/* ── 5 & 6. Two-column: TTS Offers / Consultancy + NDT Examinations ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 5. TTS Offers / Consultancy Services Card */}
            <FadeUp delay={0.05}>
              <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative h-full flex flex-col justify-between p-8 sm:p-9 shadow-xl">
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
                      <p className="text-[10px] text-[#e7212b] tracking-[2px] uppercase font-semibold">TTS Offers</p>
                      <h3 className="text-white font-bold text-[20px] leading-tight">Consultancy Services</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-[14.5px] leading-[1.85]">
                    TTS provides an efficient QA consultancy service in preparing various documents like Quality Control Procedures, Inspection Test Plan (ITP), Method of Statement, Welding Procedure Specification (WPS), Procedure Qualification Record (PQR), and Welder Qualification Certificates (WQT).
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* 6. NDT Examinations Card */}
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-[#e8eaf0] bg-[#f4f5f8] p-8 sm:p-9 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#e7212b]" />
                    <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      NDT Examinations
                    </span>
                  </div>
                  <h3 className="text-[#0B0D26] font-bold text-[20px] mb-3 leading-snug">
                    Non Destructive Testing (NDT)
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-[1.8] mb-6">
                    The following non destructive examinations services are available in TTS with technical expertise, qualified and experienced technicians and modern equipment&apos;s. These inspection services include:
                  </p>

                  <div className="space-y-2.5">
                    {NDT_METHODS.map(({ Icon, abbr, label }, i) => (
                      <motion.div
                        key={abbr}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.05 }}
                        className="group flex items-center gap-3.5 bg-white border border-[#e8eaf0] rounded-xl px-4.5 py-3 hover:border-[#e7212b]/30 hover:shadow-md transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
                        </div>
                        <span className="text-[#0B0D26] text-[13.5px] font-medium">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 7. Explore More / Related Services Section ── */}
      <section className="bg-[#f8f9fa] py-20 border-t border-[#e8eaf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp delay={0} className="mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Explore More
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26]">
              Related Services
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RELATED_SERVICES.map((card, i) => (
              <FadeUp
                key={card.title}
                delay={0.05 + i * 0.05}
                className={i === 2 ? "col-span-1" : ""}
              >
                <div className="bg-white border border-[#e8eaf0] rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full hover:border-[#e7212b]/30 hover:shadow-md transition-all duration-200 group">
                  <div>
                    <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                      {card.category}
                    </p>
                    <h3 className="text-[#0B0D26] text-[19px] font-bold leading-snug mb-3 group-hover:text-[#e7212b] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed mb-6 line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={card.href}
                      aria-label={`Read more about ${card.title}`}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#e7212b] hover:border-[#e7212b] hover:text-white transition-all duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
