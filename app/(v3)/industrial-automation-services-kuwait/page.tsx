import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Cpu, Thermometer, ShieldCheck, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import CardGrid from "@/components/v3/CardGrid";

export const metadata: Metadata = {
  title: "Industrial Automation Services Kuwait | PLC, SCADA & Flow Measurement",
  description:
    "Texas Technical Services Co. is a leading industrial automation company in Kuwait — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified. PLC & SCADA system integrators, flow measurement services in Ahmadi, and industrial inspection & testing across Fahaheel and the GCC.",
  alternates: {
    canonical: "/industrial-automation-services-kuwait/",
  },
  openGraph: {
    title: "Industrial Automation Services Kuwait | Texas Technical Services",
    description:
      "Premier industrial automation, PLC & SCADA integration, flow measurement, and inspection & testing services in Fahaheel, Kuwait — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified — serving oil & gas, power, and industrial sectors across the GCC.",
    url: "/industrial-automation-services-kuwait/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation Services Kuwait | Texas Technical Services",
    description:
      "Industrial automation, PLC & SCADA integration, flow measurement, and inspection services in Kuwait — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified — Texas Technical Services, Fahaheel.",
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
    "ISO 9001 certified company Kuwait",
    "ISO 14001 environmental management Kuwait",
    "ISO 45001 occupational safety Kuwait",
    "UASL accredited certification Kuwait",
    "Accurate certified industrial company Kuwait",
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
    body: "As a leading industrial inspection and testing company in Kuwait, we offer NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy. Our ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified processes ensure the highest quality standards for your critical assets.",
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
    a: "We serve oil and gas (upstream, midstream, downstream), refinery and petrochemical plants, power generation and distribution, LNG terminals, water and wastewater treatment facilities, cement and metal production, and industrial manufacturing sectors across Kuwait. Our ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certifications ensure compliance with the highest industry standards.",
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
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industrial Automation Kuwait", href: "/industrial-automation-services-kuwait/" },
        ]}
      />
      <ServiceJsonLd
        name="Industrial Automation Services Kuwait"
        description="Premier industrial automation, PLC and SCADA integration, flow measurement, and inspection services in Fahaheel, Kuwait."
        url="/industrial-automation-services-kuwait/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "Ahmadi", "Fahaheel", "Shuaiba", "Mina Al-Ahmadi"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Industrial Automation Services Kuwait — PLC, SCADA & Flow Measurement" />

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
            <MapPin className="w-4 h-4 text-[#0891b2]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase">
              Kuwait — Headquarters &amp; Operations
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mb-6">
            Industrial Automation &amp; Engineering{" "}
            <span className="text-[#0891b2]">Services in Kuwait</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Headquartered in Fahaheel, Kuwait — providing multi-brand PLC programming, SCADA integration, custody transfer flow metering, and inspection services across Ahmadi, Shuaiba, and the GCC.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors shadow-lg shadow-[#6b1a1f]/20"
            >
              <span>Consult Our Kuwait Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.1] transition-colors"
            >
              <span>Browse All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/[0.1]">
            {[
              { num: "Fahaheel", label: "Kuwait Corporate HQ" },
              { num: "KOC / KNPC", label: "Approved Frameworks" },
              { num: "ISO 9001", label: "Certified Operations" },
              { num: "24/7", label: "Field Technical Support" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-2xl font-bold text-white leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/50 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1 (White): Services in Kuwait ═════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Local Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight">
                Specialized Engineering Services Across Kuwait
              </h2>
            </div>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6b1a1f] hover:underline"
            >
              <span>Request Kuwait site survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CardGrid max={3}>
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
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* ══ SECTION 2 (Grey): Capabilities & Process ══════════════ */}
      <section className="py-20 lg:py-24 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Proven Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                Full-Lifecycle Automation in Kuwait &amp; GCC
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-6">
                Direct proximity to Ahmadi and Shuaiba industrial zones enables same-day emergency mobilization, shutdown support, and fast turnaround for calibration and FAT.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="text-[13px] font-bold text-[#0f172a] mb-1">Local Compliance Standards</div>
                <p className="text-[13px] text-[#64748b]">KOC Standards, KNPC Specifications, MEW Regulations, and API MPMS.</p>
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

          {/* Process steps */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-2">
                Proven Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                Our Structured Kuwait Project Delivery
              </h3>
            </div>

            <CardGrid max={4}>
              {[
                { step: "01", title: "Site Assessment", desc: "Detailed inspection in Ahmadi, Shuaiba, or Mina Abdulla with KOC/KNPC standard review." },
                { step: "02", title: "Engineering Design", desc: "Hardware schematics, loop drawings, and control philosophies engineered for high uptime." },
                { step: "03", title: "Panel Build & FAT", desc: "Control panel fabrication, wiring, and rigorous Factory Acceptance Testing with clients." },
                { step: "04", title: "SAT & Support", desc: "On-site installation, commissioning, loop checking, and continuous 24/7 SLA maintenance." },
              ].map((p) => (
                <div key={p.step} className="rounded-2xl bg-white border border-black/[0.06] p-6 shadow-xs">
                  <span className="text-3xl font-black text-[#6b1a1f]/20 block mb-2">{p.step}</span>
                  <h4 className="text-[16px] font-bold text-[#0f172a] mb-2">{p.title}</h4>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </CardGrid>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 (White): Industries Served & Office Map ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight mb-4">
              Kuwait Industries We Support
            </h2>
            <CardGrid max={3} className="mt-8">
              {[
                { name: "Upstream Exploration", desc: "Wellhead telemetry, RTU systems, and separator monitoring." },
                { name: "Mina Al-Ahmadi Refineries", desc: "Process automation, burner management, and SCADA." },
                { name: "Petrochemical Complexes", desc: "Equate and PIC safety instrumented systems and analytics." },
                { name: "Power & Desalination (MEW)", desc: "Substation automation, boiler control, and RO systems." },
                { name: "Water Management", desc: "Pumping stations, flow balancing, and pipeline SCADA." },
                { name: "Heavy Industry & Manufacturing", desc: "Variable speed drives, motion control, and NDT." },
              ].map((ind) => (
                <div key={ind.name} className="p-5 rounded-2xl bg-[#DCDCD9] border border-black/[0.04]">
                  <h4 className="font-bold text-[15px] text-[#0f172a] mb-1">{ind.name}</h4>
                  <p className="text-[12.5px] text-[#64748b]">{ind.desc}</p>
                </div>
              ))}
            </CardGrid>
          </div>

          <div className="rounded-[28px] border border-black/[0.06] bg-[#DCDCD9] p-8 lg:p-10 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#0891b2] uppercase block">Corporate Headquarters</span>
                <h3 className="text-xl font-bold text-[#0f172a] mt-1">Kuwait Operations &amp; Engineering Center</h3>
                <p className="text-[14px] text-[#64748b]">Munira Tower, 9th Floor — Makkah Street, Block 7, Fahaheel, Kuwait</p>
              </div>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-[13px] font-bold text-[#0f172a] hover:bg-[#6b1a1f] hover:text-white transition-colors"
              >
                <span>Visit Fahaheel HQ</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm h-[360px]">
              <iframe
                src="https://www.google.com/maps?q=Munira+Tower+Fahaheel+Kuwait&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Texas Technical Services — Kuwait Headquarters location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 (Grey): FAQ ══════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PageFaqSection
            items={faqItems}
            title="Questions About Industrial Automation in"
            highlight="Kuwait & the GCC"
          />
        </div>
      </section>

      {/* ══ SECTION 5: CTA ════════════════════════════════════════ */}
      <section className="py-20 bg-[#0b0f19] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Industrial Automation Services in Kuwait?
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Speak directly with our Fahaheel engineering team for PLC programming, SCADA development, or flow calibration inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors"
            >
              <span>Contact Kuwait Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.08] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.12] transition-colors"
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
