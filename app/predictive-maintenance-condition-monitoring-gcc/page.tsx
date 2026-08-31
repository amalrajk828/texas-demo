import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Activity, TrendingUp, ShieldCheck } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";

export const metadata: Metadata = {
  title: "Predictive Maintenance & Condition Monitoring GCC",
  description:
    "Predictive maintenance and condition monitoring services across the GCC — vibration analysis, ABB and Rockwell monitoring solutions.",
  alternates: {
    canonical: "/predictive-maintenance-condition-monitoring-gcc/",
  },
  openGraph: {
    title: "Predictive Maintenance & Condition Monitoring GCC | Texas Technical Services",
    description:
      "Predictive maintenance and condition monitoring across the GCC — vibration analysis, ABB and Rockwell solutions. Fahaheel, Kuwait.",
    url: "/predictive-maintenance-condition-monitoring-gcc/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Predictive Maintenance & Condition Monitoring GCC | Texas Technical Services",
    description:
      "Predictive maintenance and condition monitoring in the GCC — vibration analysis and rotating equipment health. Texas Technical Services.",
    images: ["/og-default.png"],
  },
  keywords: [
    "predictive maintenance Kuwait",
    "vibration monitoring Dubai",
    "condition monitoring GCC",
    "ABB vibration monitoring",
    "Rockwell condition monitoring",
    "Allen Bradley vibration monitoring",
    "Rockwell automation predictive maintenance",
    "vibration analysis Kuwait",
  ],
};

const services = [
  {
    Icon: Activity,
    title: "Vibration Monitoring & Analysis",
    body: "Comprehensive vibration monitoring for rotating equipment — motors, pumps, compressors, fans, and turbines. Permanent sensor installation and portable data collection with spectral analysis, orbit plotting, and bearing defect frequency identification for early fault detection.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: TrendingUp,
    title: "ABB Condition Monitoring Solutions",
    body: "Implementation of ABB Ability Meridium and ABB smart sensor platforms for enterprise asset performance management. Wireless vibration sensors, real-time dashboards, and predictive analytics for critical rotating equipment across oil & gas, power, and industrial facilities.",
    href: "/service/industrial-automation/",
  },
  {
    Icon: ShieldCheck,
    title: "Predictive Maintenance Program Design",
    body: "End-to-end predictive maintenance program design including criticality assessment, sensor selection, baseline data collection, alarm configuration per ISO 10816/20816, and ongoing trending analysis. Integration with PLC/SCADA and maintenance management systems for automated work order generation.",
    href: "/service/industrial-automation/",
  },
];

const capabilities = [
  "Permanent and portable vibration sensor installation",
  "Spectral analysis, time waveform, and orbit analysis",
  "Bearing defect frequency identification and trending",
  "ISO 10816 / ISO 20816 compliance assessment",
  "ABB Ability Meridium and smart sensor integration",
  "Allen-Bradley vibration monitoring module integration",
  "FactoryTalk Analytics dashboard configuration",
  "Wireless vibration sensor deployment",
  "Machine baseline data collection and alarm setup",
  "Integration with PLC/SCADA and CMMS systems",
];

const faqItems = [
  {
    q: "What types of equipment benefit from predictive maintenance?",
    a: "Rotating equipment — motors, pumps, compressors, fans, blowers, turbines, gearboxes, and conveyors — benefits most from predictive maintenance. Critical assets with high repair costs, long lead times, or significant production impact should be prioritized. Equipment running 4,000+ hours per year typically offers the highest return on predictive maintenance investment.",
  },
  {
    q: "How does vibration monitoring predict equipment failures?",
    a: "Vibration monitoring detects changes in the vibration signature of rotating equipment that indicate developing faults. Each fault type — imbalance, misalignment, bearing wear, looseness, resonance — produces characteristic vibration patterns. By analyzing these patterns and trending them over time, we can detect problems 2-12 months before failure, enabling planned maintenance.",
  },
  {
    q: "What is the difference between ABB and Rockwell condition monitoring?",
    a: "ABB offers dedicated condition monitoring platforms (Meridium, VMS) with specialized vibration analysis capabilities. Rockwell integrates vibration monitoring into the FactoryTalk ecosystem, providing unified data across automation and condition monitoring. Both are effective — the choice depends on your existing automation platform and monitoring requirements.",
  },
  {
    q: "Can vibration monitoring be integrated with our existing PLC system?",
    a: "Yes. Vibration data can be integrated with Allen-Bradley, Siemens, Schneider, and other PLC platforms via analog (4-20mA), digital (HART, Modbus), or network (OPC UA, Ethernet/IP) interfaces. This enables automated alarm handling, process protection, and maintenance work order generation directly from the PLC or SCADA system.",
  },
  {
    q: "What is the typical return on investment for predictive maintenance?",
    a: "Implementing a predictive maintenance program typically reduces unplanned downtime by 40-70%, extends equipment life by 2-3x, and reduces maintenance costs by 10-25%. For a facility with $500,000+ in annual rotating equipment maintenance costs, predictive maintenance typically delivers $75,000-$125,000 in annual savings with a 6-12 month payback period.",
  },
];

export default function PredictiveMaintenanceGccPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Predictive Maintenance GCC", href: "/predictive-maintenance-condition-monitoring-gcc/" }]} />
      <ServiceJsonLd
        name="Predictive Maintenance & Condition Monitoring Services GCC"
        description="Predictive maintenance and condition monitoring services across the GCC — vibration analysis, ABB and Rockwell monitoring solutions, and rotating equipment health management."
        url="/predictive-maintenance-condition-monitoring-gcc/"
        serviceType="Predictive Maintenance"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Predictive Maintenance & Condition Monitoring GCC" />

      {/* ══ HERO ══════════════════════════════════════════════════ */}
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
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-white/50 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white/60">Predictive Maintenance GCC</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#e7212b]/10 border border-[#e7212b]/25 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#e7212b]" strokeWidth={1.8} />
              </div>
              <span className="text-[#0891B2] text-[14px] font-semibold tracking-[3px] uppercase">
                Fahaheel — Kuwait &amp; GCC
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.12] mb-6">
              Predictive Maintenance &amp;{" "}
              <em className="not-italic text-current">Condition Monitoring</em>{" "}
              Across the GCC
            </h1>

            <p className="text-white/70 text-base sm:text-[16px] leading-relaxed mb-8 max-w-2xl">
              Texas Technical Services provides predictive maintenance and condition monitoring
              services across Kuwait and the GCC. From vibration analysis and ABB monitoring
              platforms to FactoryTalk integration, we help you predict equipment failures
              before they happen — reducing unplanned downtime and extending equipment life.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/20"
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/service/industrial-automation/"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white/60 hover:text-white px-7 py-3.5 rounded-lg transition-all duration-200 text-[14px]"
              >
                All Automation Services →
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "40-70%", label: "Less Downtime" },
              { num: "2-3x", label: "Equipment Life" },
              { num: "18+", label: "Years Experience" },
              { num: "6-12", label: "Month Payback" },
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

      {/* ══ SERVICES ═══════════════════════════════════════════ */}
      <section className="relative bg-[#f4f5f8] py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Our Services
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15]">
                Predictive Maintenance &amp;{" "}
                <em className="not-italic text-current">Condition Monitoring</em>
              </h2>
              <Link
                href="/contacts/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-[13px] shrink-0 shadow-lg shadow-[#e7212b]/15"
              >
                Get Started
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
                  <div className="mt-5 pt-4 border-t border-[#e8eaf0] flex items-center gap-2 text-[#e7212b] text-[13px] font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ═══════════════════════════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-[#0B0D26] overflow-hidden relative">
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
                    Monitoring &amp; Analytics Capabilities
                  </h3>
                  <p className="text-white/70 text-[14px] leading-[1.8]">
                    From vibration sensor deployment to enterprise asset performance
                    management, our GCC-based team delivers end-to-end predictive
                    maintenance solutions for critical rotating equipment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap) => (
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

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About Predictive Maintenance{" "}
            <em className="not-italic text-current">&amp; Condition Monitoring</em>
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

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#0891B2]/40" />
            <span className="text-[#0891B2] text-[14px] font-medium tracking-[2.5px] uppercase">
              Get in touch
            </span>
            <span className="w-8 h-px bg-[#0891B2]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Ready to reduce unplanned downtime?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-md mx-auto">
            Talk to our engineers about implementing predictive maintenance
            and condition monitoring for your critical rotating equipment.
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
              All Automation Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
