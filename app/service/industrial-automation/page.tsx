import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight, ArrowRight } from "lucide-react";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  description:
    "Industrial automation and control systems across Kuwait, UAE, and Saudi Arabia — PLC, SCADA, DCS integration for oil & gas, power, and manufacturing.",
  alternates: {
    canonical: "/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Automation, PLC SCADA & Process Control",
    description:
      "Industrial automation & control systems, control and automation engineering, and plant and process automation — PLC and SCADA system integrators in Kuwait, UAE, and Saudi Arabia serving manufacturing, power plant, and oil & gas sectors.",
    url: "/service/industrial-automation/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Industrial Automation, PLC SCADA & Process Control — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation, PLC SCADA & Process Control",
    description: "Industrial automation & control systems, control and automation engineering, plant and process automation, and automation in power plant — serving Kuwait, UAE, Dubai, and Saudi Arabia.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "PLC and SCADA system integrators in Kuwait",
    "process control automation solutions Kuwait",
    "automation and engineering services Fahaheel",
    "industrial automation companies in UAE",
    "automation companies in Dubai",
    "automation companies in Saudi Arabia",
    "industrial automation & control systems",
    "industrial automation control system",
    "control and automation engineering",
    "automation in manufacturing industry",
    "automation in the manufacturing industry",
    "control systems and automation",
    "plant and process automation",
    "automation in power plant",
    "PLC SCADA",
    "process & control",
    "automation company",
    "SCADA system",
    "industrial automation Kuwait",
    "PLC programming Kuwait Dubai",
    "SCADA integration Kuwait",
    "HMI development Kuwait",
    "plant automation solutions",
    "control system integration Kuwait",
    "CEMS solutions Kuwait",
    "FactoryTalk MES Kuwait",
    "FactoryTalk analytics GCC",
    "FactoryTalk Asset Centre",
    "Allen Bradley PLC repair Dubai",
    "Rockwell automation predictive maintenance",
    "Rockwell Studio 5000 Logix Designer",
    "Rockwell connected components workbench",
  ],
};

const faqItems = [
  {
    q: "What is industrial automation?",
    a: "Industrial automation is the use of control systems such as PLCs, SCADA, HMIs, robots, and computer software to operate industrial machinery and processes with minimal human intervention. It improves efficiency, consistency, safety, and productivity in manufacturing, oil and gas, power generation, and other industrial sectors. At Texas Technical Services, we design, integrate, and support automation solutions tailored to your specific operational requirements.",
  },
  {
    q: "What is the difference between industrial automation and control systems?",
    a: "Industrial automation refers to the overall strategy of using technology to automate industrial processes, while control systems are the specific hardware and software components that execute that automation — including PLCs, DCS, SCADA, sensors, actuators, and communication networks. Control systems are the building blocks that enable automation. We provide both the automation strategy and the control system implementation.",
  },
  {
    q: "What are the benefits of automation in manufacturing industry?",
    a: "Automation in the manufacturing industry delivers higher production throughput, consistent product quality, reduced operating costs, improved worker safety, real-time data visibility, and greater production flexibility. Manufacturers can respond faster to market changes, reduce waste, and optimize energy consumption — delivering measurable ROI through increased efficiency and reduced downtime.",
  },
  {
    q: "What industries use industrial automation?",
    a: "Industrial automation is used across virtually every industrial sector including oil and gas (upstream, midstream, downstream), refinery and petrochemicals, power generation (gas, steam, combined cycle), water and wastewater treatment, cement and metals production, food and beverage processing, pharmaceutical manufacturing, and discrete manufacturing — essentially any industry that requires precise process control and operational efficiency.",
  },
  {
    q: "What PLC SCADA services do you offer in Kuwait and the GCC?",
    a: "We offer comprehensive PLC and SCADA services across Kuwait, UAE, Saudi Arabia, and the GCC including multi-brand PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi), SCADA system development and integration (ICONICS, WinCC, iFIX), HMI design and development, legacy system migration, control panel design and fabrication, system commissioning, and 24/7 after-sales support from our offices in Fahaheel, Kuwait and Dubai, UAE.",
  },
];

const ISA95_LAYERS = [
  {
    label: "Enterprise Planning & Analytics (ERP/BI)",
    code: "BUSINESS",
    items: [
      { name: "Space AI", sub: "Predictive Analytics" },
      { name: "Enterprise Link", sub: "HMS / Anybus" },
    ],
  },
  {
    label: "Operations Management (MES/MOM)",
    code: "OPS",
    items: [
      { name: "GENESIS64", sub: "Iconics Advanced Suite" },
      { name: "Hyper Historian", sub: "High Speed Logging" },
      { name: "AnalytiX", sub: "Big Data Visualization" },
    ],
  },
  {
    label: "Supervisory Control (SCADA/HMI)",
    code: "SCADA",
    items: [
      { name: "SCADA", sub: "iFIX / ICONICS" },
      { name: "HMI", sub: "Mitsubishi Electric" },
      { name: "Operator Consoles", sub: "Pyrotech Workspace" },
    ],
  },
  {
    label: "Sensing & Manipulation (PLC/Drives)",
    code: "CONTROL",
    items: [
      { name: "MELSEC PLC", sub: "iQ-R / iQ-F Series" },
      { name: "FREQROL VFD", sub: "Inverter Drives" },
      { name: "MELSERVO", sub: "Motion Control" },
      { name: "Industrial Gateway", sub: "HMS Networks" },
    ],
  },
  {
    label: "Physical Process (Instruments/Sensors)",
    code: "FIELD",
    items: [
      { name: "Sensors", sub: "Novus Automation" },
      { name: "Flow Meters", sub: "KEM / Tek-Trol" },
      { name: "LVS", sub: "Mitsubishi Electric" },
      { name: "Analyzers", sub: "SICK / E+H" },
      { name: "Metering Skids", sub: "Rockwin" },
    ],
  },
];

const BMS_HIGHLIGHTS = [
  {
    title: "Genesis64 Core",
    body: "Unified visualization with 3D graphics and IoT connectivity.",
  },
  {
    title: "Energy Analytics",
    body: "Advanced functions to monitor usage patterns & reduce costs.",
  },
  {
    title: "Wireless Freedom",
    body: "NOVUS AirGate technology eliminates expensive cabling.",
  },
  {
    title: "Climate Control",
    body: "Precise, wireless regulation of building environmental conditions.",
  },
];

const IFIX_MODULES = [
  {
    label: "Module 01",
    title: "Core SCADA Engine",
    body: "Real-time monitoring, alarm management, tag database, failover redundancy, high availability.",
    perf:
      "Reliable data acquisition with high-speed processing for thousands of I/O points.",
  },
  {
    label: "Module 02",
    title: "Visualization & UI",
    body: "Web HMI, historical trending, Dynamo objects, dashboarding, mobile access, HTML5 support.",
    perf:
      "Context-rich screens reduce errors and speed up decision-making processes.",
  },
  {
    label: "Module 03",
    title: "Data Integration",
    body: "OPC UA / DA support, SQL / relational databases, MES / ERP integration, IoT & cloud connectors.",
    perf:
      "Open architecture that grows with your facility's automation needs.",
  },
];

const HMS_FAMILIES = [
  {
    title: "ANYBUS",
    sub: "Connecting Devices",
    items: [
      "Multi-network Gateways",
      "Protocol Converters",
      "Wireless Bridge & Bolt",
      "Embedded Modules",
      "CompactCom Technology",
    ],
  },
  {
    title: "EWON",
    sub: "Remote Solutions",
    items: [
      "Talk2M Cloud Platform",
      "Cosy+ Industrial VPN",
      "Flexy Edge Gateways",
      "Remote Maintenance",
      "Data Monitoring",
    ],
  },
  {
    title: "INTESIS",
    sub: "Building Automation",
    items: [
      "AC Interfaces (WiFi/KNX)",
      "Protocol Translators",
      "BACnet & Modbus Gateways",
      "Home Automation",
      "Cloud Solutions",
    ],
  },
  {
    title: "IXXAT",
    sub: "CAN & Safety",
    items: [
      "PC Interfaces (CAN/LIN)",
      "Bridges & Repeaters",
      "Functional Safety (FSoE)",
      "Automotive Testing",
      "Smart Grid Gateways",
    ],
  },
  {
    title: "REDLION N-TRON",
    sub: "Industrial Networking",
    items: [
      "Unmanaged Switches",
      "Managed Ethernet Switches",
      "Wi-Fi Radios",
      "Process Control Switches",
      "PoE Solutions",
    ],
  },
  {
    title: "RED LION",
    sub: "Access & Visualization",
    items: [
      "Graphite HMIs",
      "Data Stations",
      "Protocol Conversion",
      "Visual Management",
      "Productivity Monitoring",
    ],
  },
];

const NOVUS_FAMILIES = [
  {
    title: "Data Loggers",
    sub: "IoT Ready",
    desc:
      "FieldLogger, LogBox Connect, and cloud-connected recorders for secure data acquisition.",
  },
  {
    title: "Smart Controllers",
    sub: "Modular PID",
    desc:
      "N1200, N20K48 modular controllers with Bluetooth configuration and adaptive tuning.",
  },
  {
    title: "Wireless Sensing",
    sub: "Remote Monitoring",
    desc:
      "RHT Air and AirGate solutions for wireless temperature, humidity, and pressure monitoring.",
  },
  {
    title: "IoT Gateways",
    sub: "Connectivity",
    desc:
      "AirGate Modbus, DigiRail Connect ensuring seamless integration with cloud & SCADA.",
  },
  {
    title: "BMS & HVAC",
    sub: "Facility Automation",
    desc:
      "Dedicated controllers for building management, thermostats, and environmental control.",
  },
  {
    title: "Energy Meters",
    sub: "Efficiency",
    desc:
      "DigiRail Power series for monitoring electrical consumption and power quality analysis.",
  },
  {
    title: "Process Indicators",
    sub: "Displays",
    desc:
      "Universal indicators (N1500, N1540) for clear visualization of process variables.",
  },
  {
    title: "Signal Converters",
    sub: "Isolators",
    desc:
      "High-precision isolators and converters for reliable signal conditioning in industrial panels.",
  },
];

export default function IndustrialAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Industrial Automation", href: "/service/industrial-automation/" }]} />
      <ServiceJsonLd
        name="Industrial Automation, PLC SCADA & Process Control Solutions"
        description="Industrial automation & control systems, control and automation engineering, PLC and SCADA system integrator, and process control automation solutions for oil & gas, power, and manufacturing in Kuwait, UAE, Saudi Arabia, and the GCC."
        url="/service/industrial-automation/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <AutomationHero />
      <AutomationSubServices />

      {/* ══ ISA-95 ARCHITECTURE ═══════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              ISA-95 Standard Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-3 max-w-3xl">
            How do we build a complete integrated ecosystem from{" "}
            <em className="not-italic text-[#e7212b]">field devices</em> to{" "}
            <em className="not-italic text-[#e7212b]">enterprise analytics?</em>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-3xl">
            Our automation stack follows the ISA-95 Purdue Model — integrating
            every layer from physical process to enterprise intelligence.
          </p>

          <div className="space-y-3">
            {ISA95_LAYERS.map((layer, idx) => (
              <div
                key={layer.label}
                className="rounded-2xl border border-[#e8eaf0] bg-gradient-to-r from-white to-[#f8f9fa] overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                  <div className="bg-[#0B0D26] p-5 flex items-center justify-between">
                    <div>
                      <p className="text-white text-[10px] font-semibold tracking-[2.5px] uppercase opacity-60">
                        Level {5 - idx}
                      </p>
                      <p className="text-white font-bold text-[14px] mt-1 leading-tight">
                        {layer.label}
                      </p>
                    </div>
                    <span className="text-[#e7212b] text-[10px] font-bold tracking-[2px]">
                      {layer.code}
                    </span>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-lg border border-[#e8eaf0] bg-white px-3.5 py-2.5 hover:border-[#e7212b]/40 transition-colors"
                      >
                        <p className="text-[#0B0D26] text-[13px] font-bold leading-tight">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-[10.5px] mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTEGRATED BMS SOLUTIONS ═════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Elevate Your Performance
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-3">
            What integrated{" "}
            <em className="not-italic text-[#e7212b]">BMS solutions</em> do we deliver?
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-3xl">
            Building management system integration combining Mitsubishi Electric
            with NOVUS Automation — next-gen 64-bit SCADA, wireless climate
            control, and IoT-enabled field sensing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mitsubishi column */}
            <div className="rounded-2xl bg-white border border-[#e8eaf0] p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[#0B0D26] text-[15px] font-bold tracking-[1.5px]">
                  MITSUBISHI ELECTRIC
                </span>
                <span className="text-[10px] font-semibold text-[#e7212b] tracking-wider uppercase">
                  System Integration &amp; BMS
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  {
                    t: "GENESIS64 BMS",
                    d: "Next-Gen 64-bit Advanced SCADA & Building Automation",
                  },
                  {
                    t: "Energy Functions",
                    d: "Comprehensive Energy Monitoring & Optimization Suite",
                  },
                  {
                    t: "MELSEC PLC Series",
                    d: "High-speed logic processing for critical infrastructure",
                  },
                  {
                    t: "FREQROL VFD",
                    d: "Smart Motor Control for HVAC Efficiency",
                  },
                ].map((s) => (
                  <li
                    key={s.t}
                    className="rounded-lg bg-[#f8f9fa] border border-[#e8eaf0] p-3"
                  >
                    <p className="text-[#0B0D26] text-[13.5px] font-bold">
                      {s.t}
                    </p>
                    <p className="text-gray-500 text-[12px] mt-0.5">{s.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOVUS column */}
            <div className="rounded-2xl bg-white border border-[#e8eaf0] p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[#0B0D26] text-[15px] font-bold tracking-[1.5px]">
                  NOVUS AUTOMATION
                </span>
                <span className="text-[10px] font-semibold text-[#e7212b] tracking-wider uppercase">
                  Wireless &amp; Climate Solutions
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { t: "Climate Control", d: "Wireless T/RH Reg." },
                  { t: "Wireless Tech", d: "Long-range AirGate" },
                  { t: "Data Loggers", d: "Cloud Connected" },
                  { t: "Field Sensors", d: "Temp/Hum/Pressure" },
                  { t: "Remote I/O", d: "Distributed Control" },
                  { t: "PID Controllers", d: "Precision Loops" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="rounded-lg bg-[#f8f9fa] border border-[#e8eaf0] p-3"
                  >
                    <p className="text-[#0B0D26] text-[13px] font-bold">
                      {s.t}
                    </p>
                    <p className="text-gray-500 text-[11.5px] mt-0.5">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BMS_HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-xl bg-white border border-[#e8eaf0] p-5"
              >
                <p className="text-[#0B0D26] text-[14px] font-bold mb-1.5">
                  {h.title}
                </p>
                <p className="text-gray-500 text-[12.5px] leading-relaxed">
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold text-[#e7212b] tracking-[2px] uppercase mr-2">
              Key Applications:
            </span>
            {[
              "Smart Buildings",
              "Energy Centers",
              "Remote Monitoring",
              "Wireless HVAC",
              "Infrastructure",
            ].map((a) => (
              <span
                key={a}
                className="rounded-full bg-white border border-[#e8eaf0] px-3 py-1 text-[11.5px] text-gray-600 font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* ══ iFIX SCADA SECTION ═══════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Vendor Experience · iFIX by GE Digital
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-white leading-[1.15] mb-3">
            Why is{" "}
            <em className="not-italic text-[#e7212b]">iFIX SCADA</em> an
            industry-leading HMI/SCADA solution?
          </h2>
          <p className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-3xl">
            High performance automation for intelligent industrial operations —
            used across water/wastewater, power generation, oil &amp; gas, and
            manufacturing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {IFIX_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col"
              >
                <p className="text-[#e7212b] text-[10px] font-bold tracking-[2.5px] mb-3">
                  {m.label}
                </p>
                <h3 className="text-white text-[18px] font-bold leading-snug mb-3">
                  {m.title}
                </h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed mb-4 flex-1">
                  {m.body}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[#e7212b] text-[10px] font-bold tracking-wide uppercase mb-1">
                    Performance
                  </p>
                  <p className="text-white/65 text-[12.5px] leading-relaxed">
                    {m.perf}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-semibold text-[#e7212b] tracking-[2px] uppercase mr-2">
              Key Verticals:
            </span>
            {[
              "Water/Wastewater",
              "Power Generation",
              "Oil & Gas",
              "Manufacturing",
            ].map((a) => (
              <span
                key={a}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 text-[11.5px] font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HMS NETWORKS SECTION ════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Authorized Partner · HMS Networks Sweden
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-3">
            How does HMS Networks bridge{" "}
            <em className="not-italic text-[#e7212b]">industrial hardware and software?</em>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-3xl">
            Six product families covering every industrial communication need —
            from device connectivity to remote maintenance, building automation,
            and functional safety.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HMS_FAMILIES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-[#e8eaf0] bg-white p-5 hover:border-[#e7212b]/25 transition-colors"
              >
                <p className="text-[10px] font-semibold text-[#e7212b] tracking-[2px] uppercase mb-1">
                  {f.sub}
                </p>
                <h3 className="text-[#0B0D26] text-[16px] font-bold leading-tight mb-3">
                  {f.title}
                </h3>
                <ul className="space-y-1.5">
                  {f.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[12.5px] text-gray-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#e7212b] shrink-0 mt-1.5" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOVUS AUTOMATION SECTION ═════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
              Authorized Partner · NOVUS Automation Brazil
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-3">
            How does NOVUS Automation enable{" "}
            <em className="not-italic text-[#e7212b]">
              measurement, control, and recording?
            </em>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-3xl">
            Eight product families — from IoT-ready data loggers to BMS, PID
            controllers, and wireless sensing — for modern industrial and
            building applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {NOVUS_FAMILIES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-[#e8eaf0] bg-white p-5 hover:border-[#e7212b]/25 transition-colors"
              >
                <p className="text-[10px] font-semibold text-[#e7212b] tracking-[2px] uppercase mb-1">
                  {f.sub}
                </p>
                <h3 className="text-[#0B0D26] text-[15px] font-bold leading-tight mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-[12.5px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED COMPARISON ═══════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Link href="/blog/plc-vs-dcs-automation-comparison/" className="inline-flex items-center gap-2 text-[#e7212b] font-semibold text-sm hover:underline">
          Read our comparison: PLC vs DCS: Choosing the Right Industrial Automation Platform
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

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
            What are the most common questions about{" "}
            <em className="not-italic text-[#e7212b]">industrial automation?</em>
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

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["industrial-automation"] && serviceCrossLinks["industrial-automation"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Which services complement{" "}
              <em className="not-italic text-[#e7212b]">industrial automation?</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["industrial-automation"]?.map((link) => (
                <Link
                  key={link.slug}
                  href={`/service/${link.slug}/`}
                  className="group block bg-[#f4f5f8] rounded-2xl p-6 border border-[#e8eaf0] hover:border-[#e7212b]/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors mb-2">
                    {link.label}
                  </h3>
                  <span className="text-[#e7212b] text-sm font-semibold flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
