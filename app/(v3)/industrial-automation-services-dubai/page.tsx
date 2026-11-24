import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Cpu, Thermometer, ShieldCheck, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import CardGrid from "@/components/v3/CardGrid";

export const metadata: Metadata = {
  title: "Industrial Automation Services Dubai, UAE | PLC, SCADA & Flow Measurement",
  description:
    "Texas Technical Services Co. is a leading industrial automation company in Dubai, UAE — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified. PLC and SCADA system integrators, flow measurement, and industrial inspection & testing serving oil & gas and industrial sectors across the United Arab Emirates.",
  alternates: {
    canonical: "/industrial-automation-services-dubai/",
  },
  openGraph: {
    title: "Industrial Automation Services Dubai, UAE | Texas Technical Services",
    description:
      "Industrial automation company in Dubai, UAE — PLC & SCADA integration, flow measurement, and inspection & testing services — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified — serving oil & gas, power, and industrial sectors across the United Arab Emirates and GCC.",
    url: "/industrial-automation-services-dubai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation Services Dubai, UAE | Texas Technical Services",
    description:
      "Industrial automation, PLC & SCADA integration, and inspection services in Dubai and across the UAE — ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified — Texas Technical Services.",
  },
  keywords: [
    "industrial automation companies in Dubai",
    "industrial automation companies in UAE",
    "automation companies in Dubai",
    "PLC automation companies in Dubai",
    "list of industrial automation companies in UAE",
    "SCADA UAE",
    "SCADA Dubai",
    "PLC automation companies in UAE",
    "automation and engineering services Dubai",
    "industrial automation UAE",
    "automation company Dubai",
    "ISO 9001 certified company Dubai",
    "ISO 14001 environmental management UAE",
    "ISO 45001 occupational safety UAE",
    "UASL accredited certification UAE",
    "Accurate certified industrial company UAE",
  ],
};

const services = [
  {
    Icon: Cpu,
    title: "PLC & SCADA System Integration",
    body: "We are trusted PLC and SCADA system integrators in Dubai and across the UAE, delivering multi-brand automation solutions using Siemens, Allen-Bradley, Schneider, and Mitsubishi PLCs. Our SCADA integration services cover legacy migration, HMI development, and real-time process monitoring for oil & gas, power, and industrial facilities across the United Arab Emirates and the GCC.",
    href: "/plc-scada-systems-integration/",
  },
  {
    Icon: Thermometer,
    title: "Flow Measurement & Metering",
    body: "Specialized flow measurement services across Dubai and the UAE. We provide custody transfer metering, flow computer configuration, meter validation, calibration, and metering control system upgrades — fully compliant with API MPMS, AGA, ISO, and OIML standards for the oil & gas sector serving clients throughout the Emirates.",
    href: "/service/flow-measurement-solutions/",
  },
  {
    Icon: ShieldCheck,
    title: "Inspection & Testing Services",
    body: "As a leading industrial inspection and testing company serving Dubai and the UAE, we offer NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy. Our ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certified processes ensure the highest quality standards for your critical assets across the United Arab Emirates.",
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
  "Automation and engineering services across Dubai, UAE & GCC",
];

const faqItems = [
  {
    q: "What industrial automation services do you offer in Dubai and the UAE?",
    a: "We provide comprehensive industrial automation services across Dubai and the UAE including PLC and SCADA system integration, custody transfer flow metering, NDT inspection and mechanical testing, process control automation, CEMS solutions, and metering control system upgrades. Our Dubai-based team serves clients across the UAE and the wider GCC region.",
  },
  {
    q: "Where is your Dubai office located?",
    a: "Our Dubai office is located at Amna Naseer Building, Al Marar Area, 20th Street, Deira, Dubai, UAE. Deira is a central business district with excellent access to Dubai's industrial zones including Jebel Ali, Dubai Industrial City, and the Dubai Multi Commodities Centre (DMCC), allowing us to serve clients throughout the UAE.",
  },
  {
    q: "Which industries do you serve in the UAE?",
    a: "We serve oil and gas (upstream, midstream, downstream), refinery and petrochemical plants, power generation and water desalination, LNG terminals, and industrial manufacturing sectors across the UAE. Our ISO 9001, ISO 14001, ISO 45001, UASL & Accurate certifications demonstrate our commitment to quality, environment, and occupational health and safety.",
  },
  {
    q: "What is the scope of your services across the UAE?",
    a: "Our services span the entire UAE including Dubai, Abu Dhabi, Sharjah, and the Northern Emirates. We provide multi-brand PLC and SCADA integration, custody transfer flow metering and flow computer configuration, NDT inspection, mechanical testing, CEMS, and control system upgrades for oil and gas, power, and industrial facilities throughout the country.",
  },
  {
    q: "How can I contact your Dubai team for a project consultation?",
    a: "You can reach our Dubai team through the website contact form, by phone, or by visiting our Deira office. Our engineering team will discuss your project requirements, arrange a site visit if necessary, and provide a comprehensive proposal tailored to your specific needs and applicable UAE and international standards.",
  },
];

export default function IndustrialAutomationDubaiPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industrial Automation Dubai", href: "/industrial-automation-services-dubai/" },
        ]}
      />
      <ServiceJsonLd
        name="Industrial Automation Services Dubai, UAE"
        description="Industrial automation company in Dubai, UAE — PLC and SCADA system integration, flow measurement, and industrial inspection and testing services for oil & gas and industrial sectors across the United Arab Emirates and GCC."
        url="/industrial-automation-services-dubai/"
        serviceType="Industrial Automation"
        areaServed={["Dubai", "United Arab Emirates", "Abu Dhabi", "Sharjah", "Saudi Arabia", "Kuwait", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Industrial Automation Services Dubai — PLC, SCADA & Flow Measurement" />

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
              Dubai — United Arab Emirates
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mb-6">
            Industrial Automation &amp; Engineering{" "}
            <span className="text-[#0891b2]">Services in Dubai</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Leading industrial automation, multi-brand PLC &amp; SCADA system integration, custody transfer flow measurement, and accredited inspection &amp; testing across Dubai and the UAE.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors shadow-lg shadow-[#6b1a1f]/20"
            >
              <span>Consult Our Dubai Engineers</span>
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
              { num: "Dubai", label: "Deira UAE Regional Office" },
              { num: "Multi-Brand", label: "PLC & SCADA Integrators" },
              { num: "ISO 17025", label: "Flow Calibration Standards" },
              { num: "18+", label: "Years Enterprise Track Record" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-2xl font-bold text-white leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/50 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1 (White): Services in Dubai ══════════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Regional Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight">
                Specialized Engineering Services in Dubai &amp; UAE
              </h2>
            </div>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6b1a1f] hover:underline"
            >
              <span>Request technical quote</span>
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
                Core Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                Automation &amp; Engineering Scope in Dubai &amp; UAE
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-6">
                From multi-brand PLC programming to custody transfer skids and non-destructive testing, our UAE-based engineers adhere strictly to ISO, API, and ADNOC standards.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="text-[13px] font-bold text-[#0f172a] mb-1">Accredited Quality Systems</div>
                <p className="text-[13px] text-[#64748b]">ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, UASL Accredited.</p>
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
                Project Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                Our Structured UAE Delivery Process
              </h3>
            </div>

            <CardGrid max={4}>
              {[
                { step: "01", title: "Discover & Assess", desc: "Detailed system evaluation, pain point analysis, and scoping aligned with UAE regulations." },
                { step: "02", title: "Design & Engineer", desc: "Hardware schematics, control philosophies, panel architecture, and software simulation." },
                { step: "03", title: "Implement & Integrate", desc: "Assembly, programming, and rigorous Factory Acceptance Testing (FAT) prior to site delivery." },
                { step: "04", title: "Commission & Support", desc: "On-site commissioning, SAT, operator training, and 24/7 SLA maintenance support." },
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
              Industries We Serve Across Dubai &amp; Northern Emirates
            </h2>
            <CardGrid max={3} className="mt-8">
              {[
                { name: "Oil & Gas Terminals", desc: "Upstream, midstream, and downstream metering & control." },
                { name: "Refinery & Petrochemical", desc: "Process automation, safety interlocks, and SCADA." },
                { name: "Power & Desalination", desc: "Gas turbine automation and water network telemetry." },
                { name: "LNG & Gas Processing", desc: "Cryogenic custody transfer and gas chromatography." },
                { name: "Manufacturing Plants", desc: "PLC modernization, drives, and robotic integration." },
                { name: "Utilities Infrastructure", desc: "Remote RTU telemetry and smart grid monitoring." },
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
                <span className="text-[11px] font-bold tracking-widest text-[#0891b2] uppercase block">Direct Branch Location</span>
                <h3 className="text-xl font-bold text-[#0f172a] mt-1">Dubai Engineering Office</h3>
                <p className="text-[14px] text-[#64748b]">Amna Naseer Building, Al Marar Area, 20th Street, Deira, Dubai, UAE</p>
              </div>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-black/[0.08] text-[13px] font-bold text-[#0f172a] hover:bg-[#6b1a1f] hover:text-white transition-colors"
              >
                <span>Schedule Site Visit</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm h-[360px]">
              <iframe
                src="https://www.google.com/maps?q=Amna+Naseer+Building+Deira+Dubai+UAE&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Texas Technical Services — Dubai Office"
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
            highlight="Dubai & the UAE"
          />
        </div>
      </section>

      {/* ══ SECTION 5: CTA ════════════════════════════════════════ */}
      <section className="py-20 bg-[#0b0f19] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Industrial Automation Services in Dubai or the UAE?
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Speak directly with our Dubai engineering team for PLC programming, SCADA development, or flow calibration inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors"
            >
              <span>Contact Dubai Office</span>
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
