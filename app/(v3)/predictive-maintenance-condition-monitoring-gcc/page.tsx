import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Activity, TrendingUp, ShieldCheck } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import CardGrid from "@/components/v3/CardGrid";

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
    <div className="min-h-screen bg-white font-sans antialiased text-[#0f172a]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Predictive Maintenance GCC", href: "/predictive-maintenance-condition-monitoring-gcc/" },
        ]}
      />
      <ServiceJsonLd
        name="Predictive Maintenance & Condition Monitoring Services GCC"
        description="Predictive maintenance and condition monitoring services across the GCC — vibration analysis, ABB and Rockwell monitoring solutions, and rotating equipment health management."
        url="/predictive-maintenance-condition-monitoring-gcc/"
        serviceType="Predictive Maintenance"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Predictive Maintenance & Condition Monitoring GCC" />

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
            <Activity className="w-4 h-4 text-[#0891b2]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase">
              Asset Reliability &amp; Health
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl mb-6">
            Predictive Maintenance &amp;{" "}
            <span className="text-[#0891b2]">Condition Monitoring GCC</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Real-time vibration analysis, rotating equipment health diagnostics, and smart condition monitoring powered by ABB and Rockwell Automation architectures across Kuwait, UAE, and the GCC.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors shadow-lg shadow-[#6b1a1f]/20"
            >
              <span>Consult Reliability Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/industrial-automation/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.06] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.1] transition-colors"
            >
              <span>Industrial Automation Hub</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/[0.1]">
            {[
              { num: "40-70%", label: "Unplanned Downtime Reduction" },
              { num: "ISO 10816", label: "Vibration Severity Standards" },
              { num: "ABB & RA", label: "Enterprise Sensor Stacks" },
              { num: "2-12 Mos", label: "Pre-Failure Early Warning" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-2xl font-bold text-white leading-none">{stat.num}</p>
                <p className="text-[12px] text-white/50 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1 (White): 3 Predictive Pillars ═══════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Condition Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight">
                Predictive Maintenance Solutions
              </h2>
            </div>
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6b1a1f] hover:underline"
            >
              <span>Schedule asset audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CardGrid max={3}>
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative flex flex-col justify-between rounded-[24px] border border-black/[0.06] bg-[#f8fafc] p-8 hover:bg-white hover:border-[#6b1a1f]/30 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
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

      {/* ══ SECTION 2 (Grey): Capabilities List ═══════════════════ */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#0891b2] uppercase block mb-3">
                Rotating Assets
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-4">
                Condition Monitoring Capabilities
              </h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-6">
                Permanent and wireless vibration telemetry, spectral FFT diagnostics, and CMMS integration that transforms raw sensor telemetry into actionable work orders.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="text-[13px] font-bold text-[#0f172a] mb-1">Target Assets</div>
                <p className="text-[13px] text-[#64748b]">Centrifugal pumps, compressors, turbines, gearboxes, draft fans, and motors.</p>
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
            highlight="Condition Monitoring & PdM"
          />
        </div>
      </section>

      {/* ══ SECTION 4: CTA ════════════════════════════════════════ */}
      <section className="py-20 bg-[#0b0f19] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Protect Critical Rotating Equipment Across GCC
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-8">
            Speak with our vibration diagnostics specialists to assess machinery health and establish a zero-unplanned-downtime roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6b1a1f] text-white font-semibold text-[14px] hover:bg-[#852127] transition-colors"
            >
              <span>Connect with PdM Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/service/industrial-automation/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.08] text-white font-semibold text-[14px] border border-white/[0.12] hover:bg-white/[0.12] transition-colors"
            >
              <span>Automation Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
