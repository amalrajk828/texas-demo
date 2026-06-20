"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Leaf,
  HeartPulse,
  Eye,
  Droplets,
  Magnet,
  Radio,
  AudioWaveform,
  FileText,
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

const ISO_CERTS = [
  { Icon: ShieldCheck, code: "ISO 9001:2015", label: "Quality Management" },
  { Icon: Leaf,        code: "ISO 14001:2015", label: "Environmental Management" },
  { Icon: HeartPulse,  code: "ISO 45001:2018", label: "Occupational Health & Safety" },
];

const NDT_METHODS = [
  { Icon: Eye,           abbr: "VI",  label: "Visual Inspection" },
  { Icon: Droplets,      abbr: "PT",  label: "Liquid / Dye Penetrant Examination" },
  { Icon: Magnet,        abbr: "MT",  label: "Magnetic Particle Inspection" },
  { Icon: Radio,         abbr: "RT",  label: "Radiographic Testing" },
  { Icon: AudioWaveform, abbr: "UT",  label: "Ultrasonic Testing" },
];

const CONSULTANCY_DOCS = [
  "Quality Control Procedures",
  "Inspection Test Plan (ITP)",
  "Method of Statement",
  "Welding Procedure Specification (WPS)",
  "Procedure Qualification Record (PQR)",
  "Welder Qualification Certificates (WQT)",
];

export default function InspectionOverview() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Subtle blob */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-24">

        {/* ── HSEQ Integrated Approach ── */}
        <div>
          <FadeUp delay={0}>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Commitment
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-5 max-w-3xl">
              Driving Excellence: Integrated Health, Safety,
              Environment &amp; Quality Management
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.85] max-w-3xl mb-10">
              Texas Technical Services Co. (TTS) is committed to health and safety, the environment
              and quality — delivered by adopting an integrated approach to our management systems,
              and complying with all relevant legislation, regulations, and other legal and industry
              requirements. This provides a framework for integration of the ISO 14001:2015,
              ISO 45001:2018 and ISO 9001:2015 standards, externally certificated by a UKAS
              accredited certification body.
            </p>
          </FadeUp>

          {/* ISO cert cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {ISO_CERTS.map(({ Icon, code, label }, i) => (
              <FadeUp key={code} delay={0.08 + i * 0.08}>
                <div className="group flex items-start gap-4 rounded-2xl border border-[#e8eaf0] bg-[#f4f5f8] p-6 hover:border-[#e7212b]/25 hover:bg-white hover:shadow-lg hover:shadow-[#e7212b]/5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[#0B0D26] font-bold text-[14px] leading-tight">{code}</p>
                    <p className="text-gray-500 text-[13px] mt-1 leading-snug">{label}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ── Two-column: Consultancy + NDT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Consultancy Services */}
          <FadeUp delay={0}>
            <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative h-full">
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
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(231,33,43,0.10) 0%, transparent 65%)" }}
              />
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Top red accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center">
                    <FileText className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 tracking-[2px] uppercase font-semibold">TTS Offers</p>
                    <h3 className="text-white font-bold text-[17px] leading-tight">Consultancy Services</h3>
                  </div>
                </div>

                <p className="text-white/45 text-[14px] leading-[1.8] mb-6">
                  TTS provides an efficient QA consultancy service in preparing various documents
                  essential for quality assurance and compliance across your projects.
                </p>

                <ul className="space-y-2.5 flex-1">
                  {CONSULTANCY_DOCS.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/60 text-[13.5px] leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* NDT Services */}
          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-[#e8eaf0] bg-[#f4f5f8] overflow-hidden h-full">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-px bg-[#e7212b]" />
                  <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                    NDT Methods
                  </span>
                </div>
                <h3 className="text-[#0B0D26] font-bold text-[20px] mb-3 leading-snug">
                  Non Destructive Testing (NDT)
                </h3>
                <p className="text-gray-500 text-[14px] leading-[1.8] mb-7">
                  The following non-destructive examination services are available at TTS with
                  technical expertise, qualified and experienced technicians, and modern equipment.
                </p>

                <div className="space-y-3 flex-1">
                  {NDT_METHODS.map(({ Icon, abbr, label }, i) => (
                    <motion.div
                      key={abbr}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
                      className="group flex items-center gap-4 bg-white border border-[#e8eaf0] rounded-xl px-5 py-3.5 hover:border-[#e7212b]/25 hover:shadow-md hover:shadow-[#e7212b]/5 transition-all duration-250"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center shrink-0 group-hover:bg-[#e7212b]/15 transition-colors duration-250">
                        <Icon className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
                      </div>
                      <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-[#e7212b] tracking-[1.5px] shrink-0 w-7">{abbr}</span>
                        <span className="w-px h-4 bg-[#e8eaf0] shrink-0" />
                        <span className="text-[#0B0D26] text-[13.5px] font-medium truncate">{label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
