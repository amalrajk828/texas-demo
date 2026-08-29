import type { Metadata } from "next";
import FlowComputerHero from "@/components/service/flow-computer-configuration/FlowComputerHero";
import FlowComputerContent from "@/components/service/flow-computer-configuration/FlowComputerContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";
import { HowToJsonLd } from "@/components/schema/HowToJsonLd";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";

export const metadata: Metadata = {
  title: "Flow Computer Configuration — Custody Transfer API",
  description:
    "Flow computer configuration for custody transfer — custom programming, multi-stream setup, SCADA integration, and on-site validation in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/flow-computer-configuration/",
  },
  openGraph: {
    title: "Flow Computer Configuration — Custody Transfer API",
    description:
      "Custom flow computer configuration compliant with API MPMS, AGA, ISO, NTEP & OIML — liquid & gas custody transfer, SCADA integration, commissioning support. Authorised OEM representative.",
    url: "/service/flow-computer-configuration/",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Flow Computer Configuration — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Computer Configuration — Custody Transfer API",
    description: "Flow computer configuration to API MPMS, AGA, ISO, NTEP & OIML standards — custody transfer, SCADA integration, commissioning in Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: [
    "flow computer configuration Kuwait",
    "API MPMS flow computer Kuwait",
    "AGA flow computer configuration",
    "OIML flow computer Kuwait",
    "custody transfer flow computer",
    "flow computer commissioning Kuwait",
    "flow computer SCADA integration",
    "Emerson FloBoss configuration Kuwait",
    "Texas Technical Services flow computer",
  ],
};

export default function FlowComputerConfigurationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Flow Computer Configuration", href: "/service/flow-computer-configuration/" },
]} />
<ServiceJsonLd
  name="Flow Computer Configuration"
  description="Texas Technical Services (TTS) provides expert flow computer configuration services in compliance with API MPMS, AGA, ISO, NTEP & OIML standards — custom programming, multi-stream setup, SCADA integration, commissioning, and on-site validation for custody transfer applications in Kuwait and Dubai."
  url="/service/flow-computer-configuration/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <FlowComputerHero />
      <FlowComputerContent />

      <HowToJsonLd
        name="Our Flow Computer Configuration Process"
        description="A step-by-step process for configuring flow computers to API MPMS, AGA, and OIML standards."
        steps={[
          { name: "Define Meter Parameters", text: "Input meter type, pipe diameter, fluid properties, and operating conditions into the flow computer." },
          { name: "Input Calculation Standards", text: "Configure API MPMS Chapter 21, AGA reports, or OIML R117 calculation algorithms and constants." },
          { name: "Verify Alarm and Audit Settings", text: "Set up alarm thresholds, event logging, and audit trail configurations for fiscal measurement compliance." },
          { name: "Validate Against Known Values", text: "Test the flow computer configuration against known reference values to confirm calculation accuracy." },
        ]}
      />

      <ServiceProcessSteps
        title="How We Configure Your Flow Computers"
        steps={[
          { name: "Define Meter Parameters", description: "We input your meter type, pipe diameter, fluid properties, and operating conditions into the flow computer to establish the measurement baseline." },
          { name: "Input Calculation Standards", description: "We configure the appropriate API MPMS Chapter 21, AGA reports, or OIML R117 calculation algorithms and constants for your application." },
          { name: "Verify Alarm and Audit Settings", description: "We set up alarm thresholds, event logging, and audit trail configurations to ensure full fiscal measurement compliance." },
          { name: "Validate Against Known Values", description: "We test the flow computer configuration against known reference values to confirm calculation accuracy before deployment." },
        ]}
      />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["flow-computer-configuration"] && serviceCrossLinks["flow-computer-configuration"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Explore{" "}
              <em className="not-italic text-current">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["flow-computer-configuration"]?.map((link) => (
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
      {/* Contact section — to be added */}
    
      <FaqPageJsonLd items={serviceFaqData["flow-computer-configuration"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Flow Computer Configuration</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["flow-computer-configuration"]?.map((item) => (
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
</>
  );
}
