import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu, Monitor, Code, Settings } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";

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
    body: "Multi-brand PLC programming across Siemens, Allen-Bradley, Schneider Electric, and Mitsubishi. We design, develop, and deploy programmable logic controller solutions for process control, batch processing, and discrete manufacturing — from greenfield installations to legacy system migrations. Our PLC solutions form the backbone of industrial automation using PLC and SCADA technologies.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Monitor,
    title: "SCADA System Development & Monitoring",
    body: "End-to-end SCADA system integration including real-time monitoring, data acquisition, alarm management, and historical trending. We develop custom SCADA solutions using industry-leading platforms, enabling full visibility and control over your industrial processes. Our SCADA and control systems are designed for oil & gas, power plants, and manufacturing facilities.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Code,
    title: "HMI Development & Panel Engineering",
    body: "Custom HMI panel design, engineering, and programming for intuitive operator interfaces. We develop graphical user interfaces that provide real-time process visualization, alarm management, and data logging — bridging the gap between operators and control systems with clear visual communication.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: Settings,
    title: "Control System Upgrades & Migration",
    body: "Comprehensive control system upgrade and legacy migration services. We assess your existing automation infrastructure and deliver seamless transitions to modern PLC and SCADA platforms — minimizing downtime, preserving historical data, and future-proofing your operations with the latest industrial automation technologies.",
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
  "Plant-wide DCS migration & brownfield upgrades",
  "Customized reporting & MIS software development",
  "Commissioning, start-up support & after-sales service",
  "Flow computer configuration & metering system integration",
];

const faqItems = [
  {
    q: "What is the difference between PLC and SCADA?",
    a: 'A PLC (Programmable Logic Controller) is a hardware device that controls industrial processes by executing logic programs and directly managing sensors, actuators, and machinery. SCADA (Supervisory Control and Data Acquisition) is a software system that sits above the PLC layer, providing centralized monitoring, data logging, alarm management, and supervisory control across multiple PLCs and remote sites. In short: PLCs handle real-time control logic on the plant floor, while SCADA systems give operators a bird\'s-eye view of the entire process.',
  },
  {
    q: "What is the difference between SCADA and HMI?",
    a: 'An HMI (Human-Machine Interface) is a local interface — typically a touchscreen panel — that allows an operator to interact with a single machine or process. SCADA is a wider supervisory system that can aggregate data from many HMIs, PLCs, and RTUs across multiple locations. While an HMI focuses on local machine control, SCADA provides enterprise-wide monitoring, historical trending, and centralized alarm management. Many modern systems combine both, with HMI panels feeding data into a SCADA architecture.',
  },
  {
    q: "How are PLC and SCADA used in industrial automation?",
    a: 'In industrial automation using PLC and SCADA, the PLC handles time-critical control tasks — reading sensor inputs, executing logic, and driving outputs (motors, valves, actuators) in real time. The SCADA system communicates with PLCs over industrial networks (e.g., Modbus, Profibus, Ethernet/IP) to collect process data, display it on operator screens, log historical trends, and issue supervisory commands. Together, they form a complete automation stack: PLCs for control, SCADA for visibility and management.',
  },
  {
    q: "Which industries use PLC and SCADA systems?",
    a: 'PLC and SCADA systems are used across virtually every industrial sector — oil & gas (upstream, midstream, downstream), refinery and petrochemicals, power generation and distribution, water and wastewater treatment, cement and metal production, LNG terminals, pharmaceutical manufacturing, and food processing. Any industry requiring precise process control, remote monitoring, and operational visibility benefits from PLC and SCADA integration.',
  },
  {
    q: "What is SCADA and control system integration?",
    a: "SCADA and control system integration involves connecting field devices (PLCs, RTUs, sensors, flow computers) to a central SCADA platform for unified monitoring and control. This includes designing communication architectures, configuring industrial protocols, developing HMI screens, setting up alarm and event management, creating historical databases, and implementing security measures. Our integration services ensure seamless data flow from the plant floor to the boardroom.",
  },
];

export default function PlcScadaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "PLC & SCADA Systems Integration", href: "/plc-scada-systems-integration/" }]} />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="PLC & SCADA Systems Integration — Industrial Automation Solutions" />
      <ServiceJsonLd
        name="PLC & SCADA Systems Integration"
        description="Expert PLC programming, SCADA system integration, HMI development, and control system upgrades for oil & gas, power, and industrial sectors across Kuwait, UAE, and the GCC."
        url="/plc-scada-systems-integration/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "Dubai", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20 lg:pb-28">
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
            <Link href="/services/" className="hover:text-white/70 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">PLC &amp; SCADA Integration</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
                PLC &amp; SCADA Integration
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Advanced PLC &amp; SCADA{" "}
              <em className="not-italic text-current">System Integration</em>
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
            We are trusted PLC and SCADA system integrators in Kuwait, Dubai, and across
            the GCC — delivering expert PLC programming, SCADA system development, HMI
            engineering, and control system upgrades. As experienced industrial automation
            professionals, we serve oil &amp; gas, power, and industrial sectors in Kuwait, UAE,
            Dubai, and Saudi Arabia with multi-brand support for Siemens, Allen-Bradley,
            Schneider, and Mitsubishi.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Get More Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/service/industrial-automation/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                Automation Services →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "PLC", label: "Multi-Brand Programming" },
              { num: "SCADA", label: "System Development" },
              { num: "HMI", label: "Panel Engineering" },
              { num: "DCS", label: "Migration & Upgrades" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-bold text-[#e7212b] leading-none">{stat.num}</p>
                <p className="text-[13px] text-white/30 mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR SERVICES ════════════════════════════════════ */}
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
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                PLC &amp; SCADA Services
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                Our PLC &amp; SCADA{" "}
                <em className="not-italic text-current">Integration Services</em>
              </h2>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
              >
                Get More Information
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                      <svc.Icon className="w-4.5 h-4.5 text-[#e7212b]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-bold text-[#e7212b]/25 tracking-[2.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-8 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-lg font-bold text-[#0B0D26] leading-snug mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-[1.75] flex-1">
                    {svc.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[14px] font-semibold">
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
          <div className="rounded-2xl bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden relative">
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
                    <span className="w-5 h-px bg-[#0891B2]" />
                    <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                      Capabilities
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[22px] leading-snug mb-3">
                    What We Integrate &amp; Deliver
                  </h3>
                  <p className="text-white/70 text-[15px] leading-[1.8]">
                    From multi-brand PLC programming to plant-wide SCADA migration — our
                    automation team covers every layer of the industrial control stack, delivering
                    industrial automation PLC SCADA solutions across Kuwait and the GCC.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap, i) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      <span className="text-white/55 text-[14px] leading-snug">{cap}</span>
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
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              How We Deliver
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Our Engagement Process
          </h2>
          <p className="text-gray-500 text-[15px] mb-12 max-w-2xl leading-relaxed">
            From initial consultation through to commissioning and ongoing support, we follow a
            structured project methodology that ensures quality, compliance, and on-time delivery
            for every PLC and SCADA integration project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover & Assess",
                desc: "We evaluate your current control systems, identify automation gaps, and define project scope, architecture, and compliance requirements.",
              },
              {
                step: "02",
                title: "Design & Engineer",
                desc: "Our team develops detailed PLC program architecture, SCADA system design, HMI layouts, network topology, and control philosophy documentation.",
              },
              {
                step: "03",
                title: "Implement & Integrate",
                desc: "We develop, configure, and integrate all system components with rigorous in-house testing, FAT, and protocol-level verification.",
              },
              {
                step: "04",
                title: "Commission & Support",
                desc: "On-site commissioning, SAT, operator training, documentation, and handover. We provide remote monitoring, maintenance, and 24/7 technical support.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-[#e8eaf0] bg-white p-6 hover:border-[#e7212b]/25 hover:shadow-lg hover:shadow-[#e7212b]/6 transition-all duration-300"
              >
                <span className="text-[2.5rem] font-bold text-[#e7212b]/10 leading-none">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#0B0D26] mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f4f5f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Industries
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B0D26] leading-[1.15] mb-4">
            Industries Using PLC &amp; SCADA Systems
          </h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl leading-relaxed">
            PLC and SCADA systems are the backbone of industrial automation across virtually every
            sector — enabling precise control, remote monitoring, and operational intelligence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Oil & Gas", desc: "Upstream, midstream, downstream — pipeline SCADA and wellhead control" },
              { name: "Refinery & Petrochemical", desc: "Distributed control and safety systems for complex processes" },
              { name: "Power Generation", desc: "Gas turbine, steam turbine, and combined cycle plant control" },
              { name: "Water & Wastewater", desc: "Pump station automation and treatment plant SCADA" },
              { name: "Manufacturing", desc: "Assembly line automation, packaging, and quality control" },
              { name: "LNG & Gas Processing", desc: "Liquefaction, regasification, and gas treatment control" },
            ].map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl bg-white border border-[#e8eaf0] p-5 hover:border-[#e7212b]/20 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-[#0B0D26] font-bold text-lg mb-1">{ind.name}</h3>
                <p className="text-gray-400 text-[14px] leading-snug">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ SECTION ════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Frequently Asked Questions About{" "}
            <em className="not-italic text-current">PLC &amp; SCADA Systems</em>
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg"
              >
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-[#0B0D26] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 group-open:bg-[#e7212b] group-open:border-[#e7212b] transition-all duration-200">
                    <ChevronRight className="w-3.5 h-3.5 text-[#e7212b] group-open:text-white group-open:rotate-90 transition-all duration-200" />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                  <p className="text-gray-500 text-[16px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0891B2]/40" />
            <span className="text-[#0891B2] text-[11px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#0891B2]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Need PLC &amp; SCADA integration?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-md mx-auto">
            Talk to our automation specialists about your PLC programming, SCADA system
            development, or control system upgrade requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/industrial-automation/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Automation Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
