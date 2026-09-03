import type { Metadata } from "next";
import ValidationHero from "@/components/service/validation-and-uncertainty-calculations/ValidationHero";
import ValidationContent from "@/components/service/validation-and-uncertainty-calculations/ValidationContent";
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
  title: "Validation and Uncertainty Calculations",
  description:
    "GUM-compliant uncertainty calculations and validation for custody metering skids, flow computers, and systems to API MPMS, ISO, and OIML in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/validation-and-uncertainty-calculations/",
  },
  openGraph: {
    title: "Validation and Uncertainty Calculations",
    description:
      "Advanced GUM-methodology uncertainty calculations and custody metering system validation — API MPMS, ISO, OIML compliant. Kuwait & Dubai.",
    url: "/service/validation-and-uncertainty-calculations/",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Validation and Uncertainty Calculations — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Validation and Uncertainty Calculations",
    description: "GUM-compliant uncertainty calculations and custody metering validation. API MPMS Chapter 21, ISO, OIML. Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: [
    "measurement uncertainty calculations Kuwait",
    "GUM uncertainty analysis Kuwait",
    "custody metering validation Kuwait",
    "API MPMS Chapter 21 Kuwait",
    "flow computer validation Kuwait",
    "metering skid uncertainty budget",
    "uncertainty analysis Dubai",
    "Texas Technical Services uncertainty calculations",
  ],
};

export default function ValidationUncertaintyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Validation and Uncertainty Calculations", href: "/service/validation-and-uncertainty-calculations/" },
]} />
<ServiceJsonLd
  name="Validation and Uncertainty Calculations"
  description="GUM-compliant measurement uncertainty calculations and comprehensive validation services for custody metering skids, flow computers, and metering systems. API MPMS Chapter 21, ISO, OIML compliant — Kuwait and Dubai."
  url="/service/validation-and-uncertainty-calculations/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <ValidationHero />
      <ValidationContent />

      <HowToJsonLd
        name="Our Validation & Uncertainty Calculation Process"
        description="A GUM-compliant step-by-step process for measurement uncertainty calculations and system validation."
        steps={[
          { name: "Identify Uncertainty Sources", text: "List all contributing sources of measurement uncertainty including flow meter, temperature, pressure, and density instruments." },
          { name: "Calculate Standard Uncertainty", text: "Quantify each uncertainty component using Type A (statistical) or Type B (manufacturer specs, calibration data) methods." },
          { name: "Combine Uncertainties", text: "Combine individual uncertainty components using the root-sum-of-squares method per GUM methodology." },
          { name: "Report Expanded Uncertainty", text: "Multiply combined standard uncertainty by coverage factor (typically k=2 for 95% confidence) and document results." },
        ]}
      />

      <ServiceProcessSteps
        title="How We Calculate Uncertainty & Validate Systems"
        steps={[
          { name: "Identify Uncertainty Sources", description: "We systematically list all contributing sources of measurement uncertainty, including flow meters, temperature sensors, pressure transmitters, and density instruments." },
          { name: "Calculate Standard Uncertainty", description: "We quantify each uncertainty component using Type A (statistical analysis) or Type B (manufacturer specifications, calibration data) methods." },
          { name: "Combine Uncertainties", description: "We combine individual uncertainty components using the root-sum-of-squares method in accordance with GUM methodology." },
          { name: "Report Expanded Uncertainty", description: "We multiply the combined standard uncertainty by the coverage factor (typically k=2 for 95% confidence) and deliver comprehensive documented results." },
        ]}
      />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["validation-and-uncertainty-calculations"] && serviceCrossLinks["validation-and-uncertainty-calculations"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Explore{" "}
              <em className="not-italic text-current">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["validation-and-uncertainty-calculations"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["validation-and-uncertainty-calculations"]} />
      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#0891B2]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About{" "}
            <em className="not-italic text-current">Validation & Uncertainty Calculations</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["validation-and-uncertainty-calculations"]?.map((item) => (
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
