import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Cpu, Thermometer, ShieldCheck } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";

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

const faqItems = [
  {
    q: "What industrial automation services does Texas Technical Services offer in Kuwait?",
    a: "We provide comprehensive industrial automation services in Kuwait including PLC and SCADA system integration, custody transfer flow metering and flow computer configuration, NDT inspection and mechanical testing, process control automation, CEMS solutions, and metering control system upgrades. Our Fahaheel-based team serves clients across Kuwait and the GCC.",
  },
  {
    q: "Where is your Kuwait office located?",
    a: "Our Kuwait office is located in Munira Tower, 9th Floor — Makkah Street, Block 7, Fahaheel, Kuwait. Fahaheel is strategically positioned near the heart of Kuwait's oil and gas industrial zone, allowing us to provide rapid on-site support to refineries, petrochemical plants, and upstream facilities across the region including Ahmadi, Shuaiba, and Mina Al-Ahmadi.",
  },
  {
    q: "Which industries do you serve in Kuwait?",
    a: "We serve oil and gas (upstream, midstream, downstream), refinery and petrochemical plants, power generation and distribution, LNG terminals, water and wastewater treatment facilities, cement and metal production, and industrial manufacturing sectors across Kuwait. Our ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications ensure compliance with the highest industry standards.",
  },
  {
    q: "What PLC and SCADA systems do you work with?",
    a: "We are multi-brand system integrators working with Siemens (S7-300/400/1200/1500), Allen-Bradley (ControlLogix, CompactLogix), Schneider Electric (Modicon, Unity Pro), and Mitsubishi Electric (MELSEC iQ-R, iQ-F, L, Q series). Our SCADA expertise spans ICONICS, WinCC, iFIX, and custom HMI development, supporting protocols including Modbus, Profibus, EtherNet/IP, and OPC UA.",
  },
  {
    q: "How can I request a quote for automation services in Kuwait?",
    a: "You can contact our Fahaheel office directly through the contact form on our website, call us, or visit our office in Munira Tower. Our engineering team will discuss your requirements, conduct a site assessment if needed, and provide a detailed proposal tailored to your project scope and industry standards.",
  },
];

export default function IndustrialAutomationKuwaitPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industrial Automation Kuwait", href: "/industrial-automation-services-kuwait/" }]} />
      <ServiceJsonLd
        name="Industrial Automation Services Kuwait"
        description="Industrial automation company in Kuwait — PLC and SCADA system integration, flow measurement, and inspection and testing services for oil & gas and industrial sectors in Fahaheel, Ahmadi, and across Kuwait and the GCC."
        url="/industrial-automation-services-kuwait/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
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



      {/* ══ HOW WE DELIVER ═════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              How We Deliver
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Our Engagement Process
          </h2>
          <p className="text-gray-500 text-[14px] mb-12 max-w-2xl leading-relaxed">
            From initial consultation through to commissioning and ongoing support, we follow a
            structured project methodology that ensures quality, compliance, and on-time delivery
            for every industrial automation project in Kuwait.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover & Assess",
                desc: "We evaluate your current systems, identify pain points, and define project scope, deliverables, and compliance requirements specific to Kuwait's industrial regulations.",
              },
              {
                step: "02",
                title: "Design & Engineer",
                desc: "Our engineering team develops detailed system architecture, control philosophy, panel layouts, and software design — fully documented and reviewed against industry standards.",
              },
              {
                step: "03",
                title: "Implement & Integrate",
                desc: "We procure, configure, and integrate all components — PLCs, SCADA, instrumentation, and networking — with rigorous in-house testing and FAT before site deployment.",
              },
              {
                step: "04",
                title: "Commission & Support",
                desc: "On-site commissioning, SAT, operator training, and handover. We provide ongoing maintenance, remote monitoring, and 24/7 technical support from our Fahaheel base.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-lg hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <span className="text-[2.5rem] font-bold text-[#e7212b]/10 leading-none">
                  {item.step}
                </span>
                <h3 className="text-[15px] font-bold text-[#0B0D26] mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f4f5f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Industries
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Industries We Serve in Kuwait
          </h2>
          <p className="text-gray-500 text-[14px] mb-10 max-w-2xl leading-relaxed">
            Our automation, flow measurement, and inspection solutions support critical operations
            across Kuwait key industrial sectors — from upstream oil and gas to downstream refining
            and power generation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Oil & Gas", desc: "Upstream, midstream, and downstream — from wellhead to export" },
              { name: "Refinery & Petrochemical", desc: "KNPC, KIPIC refineries and integrated petchem complexes" },
              { name: "Power Generation", desc: "Gas turbine, steam, and co-generation plants across Kuwait" },
              { name: "LNG & Gas Processing", desc: "LNG terminals, gas treatment, and NGL fractionation" },
              { name: "Water & Wastewater", desc: "Desalination, water treatment, and distribution networks" },
              { name: "Cement & Metals", desc: "Process automation and control for heavy manufacturing" },
            ].map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl bg-white border border-[#e8eaf0] p-5 hover:border-[#e7212b]/20 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-[#0B0D26] font-bold text-sm mb-1">{ind.name}</h3>
                <p className="text-gray-400 text-[12px] leading-snug">{ind.desc}</p>
              </div>
            ))}
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

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About Industrial Automation in{" "}
            <em className="not-italic text-[#e7212b]">Kuwait</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg"
              >
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[14px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
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
