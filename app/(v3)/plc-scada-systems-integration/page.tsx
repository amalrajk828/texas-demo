import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Monitor, Code, Settings } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import CardGrid from "@/components/v3/CardGrid";

export const metadata: Metadata = {
  title: "PLC & SCADA Systems Integration",
  description:
    "Texas Technical Services offers advanced PLC and SCADA system integration — PLC and SCADA system integrators in Kuwait and Dubai, PLC programming, SCADA UAE, SCADA monitoring, HMI development, and control system upgrades across oil & gas, power, and industrial sectors in Kuwait, UAE, Dubai, and Saudi Arabia.",
  alternates: {
    canonical: "/plc-scada-systems-integration/",
  },
  openGraph: {
    title: "PLC & SCADA Systems Integration | Texas Technical Services",
    description:
      "PLC and SCADA system integrators in Kuwait and Dubai — expert PLC programming, SCADA UAE, SCADA Saudi Arabia, HMI development, and control system upgrades for industrial automation.",
    url: "/plc-scada-systems-integration/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLC & SCADA Systems Integration | Texas Technical Services",
    description:
      "PLC and SCADA system integrators in Kuwait, Dubai, and UAE — PLC programming, SCADA integration, HMI development across the GCC.",
  },
  keywords: [
    "PLC and SCADA system integrators in Kuwait",
    "PLC automation companies in Dubai",
    "PLC automation companies in UAE",
    "SCADA UAE",
    "SCADA Dubai",
    "PLC SCADA",
    "PLC and industrial automation",
    "PLC and SCADA system",
    "industrial automation PLC SCADA",
    "PLC programming and SCADA",
    "SCADA and PLC programming",
    "difference between PLC and SCADA",
    "difference between SCADA and HMI",
    "industrial automation using PLC and SCADA",
    "use of PLC and SCADA",
    "SCADA and control systems",
    "control systems and automation",
    "PLC SCADA Kuwait",
    "Allen Bradley system integrators Kuwait",
    "PLC distributors Dubai",
    "Rockwell automation factorytalk GCC",
    "FactoryTalk software Kuwait",
    "Studio 5000 Logix",
    "Rockwell DCS system",
    "Schneider PLC programming software",
  ],
};

const services = [
  {
    Icon: Cpu,
    title: "PLC Programming & Integration",
    body: "Multi-brand PLC programming across Siemens, Allen-Bradley, Schneider Electric, and Mitsubishi. We design, develop, and deploy programmable logic controller solutions for process control, batch processing, and discrete manufacturing — from greenfield installations to legacy system migrations.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Monitor,
    title: "SCADA System Development & Monitoring",
    body: "End-to-end SCADA system integration including real-time monitoring, data acquisition, alarm management, and historical trending using industry-leading platforms such as ICONICS Genesis64, WinCC, and FactoryTalk View.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Code,
    title: "HMI Development & Panel Engineering",
    body: "Custom HMI panel design, engineering, and programming for intuitive operator interfaces. We develop graphical user interfaces that provide real-time process visualization, alarm management, and clean operational data logging.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Settings,
    title: "Control System Upgrades & Migration",
    body: "Comprehensive control system upgrade and legacy migration services. We assess existing infrastructure and deliver seamless transitions to modern PLC and SCADA platforms — minimizing downtime and preserving historical continuity.",
    href: "/service/industrial-automation/",
  },
];

const capabilities = [
  "Multi-brand PLC programming — Siemens, Allen-Bradley, Schneider, Mitsubishi",
  "SCADA development, integration & legacy system migration",
  "HMI panel design, engineering & programming",
  "Variable frequency drives (VFD) & AC servo systems",
  "CEMS — Continuous Emissions Monitoring Systems",
  "Control panel design, fabrication & Factory Acceptance Testing (FAT)",
  "Industrial networking — Modbus, Profibus, EtherNet/IP, OPC UA",
  "Remote monitoring, telemetry & cloud SCADA integration",
  "Instrumentation calibration, testing & commissioning",
  "Annual maintenance contracts (AMC) & 24/7 emergency technical support",
];

const faqItems = [
  {
    q: "What is the difference between a PLC and a SCADA system?",
    a: "A PLC (Programmable Logic Controller) is dedicated industrial hardware that executes real-time control logic at the field level, directly interacting with sensors and actuators with millisecond response times. SCADA (Supervisory Control and Data Acquisition) is a software layer that sits above PLCs to provide centralized supervisory control, graphical monitoring, data archiving, trending, and alarm handling across large facilities.",
  },
  {
    q: "Which PLC brands and families do you support?",
    a: "We support the full spectrum of industrial PLCs: Siemens (S7-1200, S7-1500, S7-300, S7-400), Rockwell Automation / Allen-Bradley (ControlLogix, CompactLogix, Micro800), Schneider Electric (Modicon M340, M580, Premium), and Mitsubishi Electric (MELSEC iQ-R, iQ-F, Q series).",
  },
  {
    q: "Can you migrate legacy PLC systems without stopping production?",
    a: "Yes. We develop phased migration methodologies that include thorough pre-commissioning simulation, parallel I/O wiring where feasible, and cutover during scheduled maintenance turnarounds. This strategy minimizes operational disruption and risk.",
  },
  {
    q: "What SCADA platforms do you specialize in?",
    a: "Our core platforms include ICONICS GENESIS64, Siemens WinCC / WinCC Unified, Rockwell FactoryTalk View Site Edition, Aveva InTouch / System Platform, and GE iFIX. We also implement open OPC UA architectures.",
  },
  {
    q: "Do you supply complete custom control panels?",
    a: "Yes. We design and fabricate custom industrial control panels in compliance with IEC 61439 and UL 508A standards. All panels undergo comprehensive internal testing and Factory Acceptance Testing (FAT) before delivery.",
  },
];

export default function PlcScadaIntegrationPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "PLC & SCADA Integration", href: "/plc-scada-systems-integration/" },
        ]}
      />
      <ServiceJsonLd
        name="PLC & SCADA Systems Integration"
        description="Comprehensive PLC and SCADA system integration across Kuwait, UAE, and GCC."
        url="/plc-scada-systems-integration/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Qatar", "Bahrain", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="PLC & SCADA Systems Integration — Multi-Brand Industrial Automation" />

      {/* ══ HERO (V3 style, no breadcrumb in hero) ══════════════ */}
      <section className="relative bg-[#0b0f19] text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(107,26,31,0.25),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-[#0891b2]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase">
              Core Engineering Discipline
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mb-6">
            Multi-Brand PLC &amp; SCADA{" "}
            <span className="text-[#0891b2]">Systems Integration</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            End-to-end industrial automation architecture — PLC programming, SCADA development, HMI design, and legacy migrations across Siemens, Allen-Bradley, Schneider, and Mitsubishi in the GCC.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors shadow-lg shadow-[#6b1a1f]/20"
            >
              <span>Consult an Automation Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/industrial-automation/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.1] transition-colors"
            >
              <span>Automation Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/[0.1]">
            {[
              { num: "4+", label: "Leading PLC Ecosystems" },
              { num: "OPC UA", label: "Open Industrial Interop" },
              { num: "FAT / SAT", label: "Rigorous Staged Testing" },
              { num: "100%", label: "Redundant Architecture" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-2xl font-bold text-white leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/50 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1 (White): 4 Core Pillars ═════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
              Comprehensive Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight">
              Four Pillars of Industrial Automation
            </h2>
          </div>

          <CardGrid max={2}>
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-[#DCDCD9] p-8 hover:bg-white hover:border-[#6b1a1f]/30 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-[#6b1a1f] shadow-sm group-hover:scale-105 transition-transform">
                      <svc.Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[12px] font-bold text-[#94a3b8] tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#6b1a1f] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    {svc.body}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center gap-2 text-[#6b1a1f] text-[13px] font-semibold">
                  <span>Explore discipline</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* ══ SECTION 2 (Grey): Capabilities List ═══════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                System Integration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                Full-Stack Control Engineering
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-6">
                Our certified engineers handle hardware selection, loop schematics, network topology, software development, panel fabrication, FAT, and on-site SAT.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="text-[13px] font-bold text-[#0f172a] mb-1">Supported Protocols</div>
                <p className="text-[13px] text-[#64748b]">EtherNet/IP, Modbus TCP/RTU, Profibus DP/PA, PROFINET, OPC UA, DNP3.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-black/[0.04] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#6b1a1f] mt-1.5 shrink-0" />
                    <span className="text-[13.5px] font-medium text-[#334155] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 (White): FAQ ═════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PageFaqSection
            items={faqItems}
            title="Questions About"
            highlight="PLC & SCADA Integration"
          />
        </div>
      </section>

      {/* ══ SECTION 4: CTA ════════════════════════════════════════ */}
      <section className="py-20 bg-[#0b0f19] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Modernize Your Industrial Control Systems?
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Connect with our engineering specialists in Kuwait and the UAE for system audits, migration roadmaps, and turnkey integration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors"
            >
              <span>Schedule Engineering Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.08] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.12] transition-colors"
            >
              <span>View All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
