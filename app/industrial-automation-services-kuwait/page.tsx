import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Cpu, Thermometer, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Automation Services Kuwait | PLC, SCADA & Flow Measurement",
  description:
    "Texas Technical Services Co. is a leading industrial automation company in Kuwait — PLC & SCADA system integrators, flow measurement services in Ahmadi, and industrial inspection & testing across Fahaheel and the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/industrial-automation-services-kuwait/",
  },
  openGraph: {
    title: "Industrial Automation Services Kuwait | Texas Technical Services",
    description:
      "Premier industrial automation, PLC & SCADA integration, flow measurement, and inspection & testing services in Fahaheel, Kuwait — serving oil & gas, power, and industrial sectors across the GCC.",
    url: "https://texastechserv.com/industrial-automation-services-kuwait/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation Services Kuwait | Texas Technical Services",
    description:
      "Industrial automation, PLC & SCADA integration, flow measurement, and inspection services in Kuwait — Texas Technical Services, Fahaheel.",
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "PLC and SCADA system integrators in Kuwait",
    "flow measurement services in Ahmadi Kuwait",
    "industrial inspection and testing companies Kuwait",
    "process control automation solutions Kuwait",
    "automation and engineering services Fahaheel",
    "industrial automation Kuwait",
    "automation company Kuwait",
  ],
};

const services = [
  {
    Icon: Cpu,
    title: "PLC & SCADA System Integration",
    body: "We are trusted PLC and SCADA system integrators in Kuwait, delivering multi-brand automation solutions using Siemens, Allen-Bradley, Schneider, and Mitsubishi PLCs. Our SCADA integration services cover legacy migration, HMI development, and real-time process monitoring for oil & gas, power, and industrial facilities across Kuwait and the GCC.",
    href: "/plc-scada-systems-integration/",
  },
  {
    Icon: Thermometer,
    title: "Flow Measurement & Metering",
    body: "Specialized flow measurement services in Ahmadi, Kuwait and across the region. We provide custody transfer metering, flow computer configuration, meter validation, calibration, and metering control system upgrades — fully compliant with API MPMS, AGA, ISO, and OIML standards for the oil & gas sector.",
    href: "/service/flow-measurement-solutions/",
  },
  {
    Icon: ShieldCheck,
    title: "Inspection & Testing Services",
    body: "As a leading industrial inspection and testing company in Kuwait, we offer NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy. Our ISO 9001:2015 certified processes ensure the highest quality standards for your critical assets.",
    href: "/service/inspection-testing/",
  },
];

const capabilities = [
  "Multi-brand PLC programming & system integration",
  "SCADA development, HMI design & legacy migration",
  "Custody transfer flow metering & flow computer configuration",
  "NDT inspection services — UT, MT, PT, RT, VI",
  "Process control automation solutions for oil & gas",
  "Metering control system upgrades & validation",
  "Control panel design, fabrication & FAT",
  "Commissioning, start-up support & after-sales service",
  "CEMS — Continuous Emissions Monitoring Systems",
  "Automation and engineering services across Fahaheel & GCC",
];

export default function IndustrialAutomationKuwaitPage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(231,33,43,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Industrial Automation Kuwait</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
                Kuwait — Fahaheel
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Premier Industrial Automation &amp; Metering{" "}
              <em className="not-italic text-[#e7212b]">Services in Kuwait</em>
            </h1>

            <p className="text-white/50 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              Texas Technical Services Co. is a leading industrial automation company in Kuwait,
              providing PLC and SCADA system integration, flow measurement services in Ahmadi,
              and industrial inspection and testing across Fahaheel and the GCC. With 15+ years
              of domain expertise, we deliver process control automation solutions tailored to
              the region&apos;s oil &amp; gas, power, and industrial sectors.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/service/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                All Services →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "Oil & Gas", label: "Core Sector" },
              { num: "PLC", label: "SCADA Integration" },
              { num: "Flow", label: "Metering Experts" },
              { num: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR SERVICES IN KUWAIT ═══════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(231,33,43,0.15) 50%, transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Services
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                Industrial Automation &amp; Engineering{" "}
                <em className="not-italic text-[#e7212b]">in Kuwait</em>
              </h2>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
              >
                Discuss Your Project
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <svc.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-[1.75] flex-1">
                    {svc.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES DARK STRIP ═════════════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, rgba(231,33,43,0.09) 0%, transparent 70%)",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-60" />

            <div className="relative z-10 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-px bg-[#e7212b]" />
                    <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      Capabilities
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] leading-snug mb-3">
                    Automation &amp; Engineering Capabilities in Kuwait
                  </h3>
                  <p className="text-white/40 text-[14px] leading-[1.8]">
                    From PLC and SCADA system integration to custody flow metering and NDT
                    inspection — our Kuwait-based team delivers end-to-end industrial solutions
                    across Fahaheel, Ahmadi, and the wider GCC region.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/55 text-[13px] leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══ MAP ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Our Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2rem] font-bold text-[#0B0D26] leading-[1.15] mb-1">
            Visit Our Fahaheel Office
          </h2>
          <p className="text-gray-500 text-[14px] mb-6">
            Munira Tower, 9th Floor – Makkah Street, Block 7, Fahaheel, Kuwait
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e8eaf0]">
            <iframe
              src="https://www.google.com/maps?q=Munira+Tower+Office+Fahaheel+Kuwait&output=embed&z=15"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Texas Technical Services — Fahaheel, Kuwait office location"
            />
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Need industrial automation services in Kuwait?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our Fahaheel-based team about your PLC &amp; SCADA integration, flow
            measurement, or inspection requirements. We serve clients across Kuwait and the GCC.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
