import type { Metadata } from "next";
import CalibrationHero from "@/components/service/flow-meter-calibration/CalibrationHero";
import CalibrationContent from "@/components/service/flow-meter-calibration/CalibrationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight, ArrowRight } from "lucide-react";
import { HowToJsonLd } from "@/components/schema/HowToJsonLd";
import ServiceProcessSteps from "@/components/ServiceProcessSteps";

export const metadata: Metadata = {
  title: "Flow Meter Calibration — Lab & On-Site Services",
  description:
    "ILAC/COFRAC ISO 17025 flow meter calibration — OIML R117, API MPMS, as-found calibration, real fluid calibration, and emergency service in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/flow-meter-calibration/",
  },
  openGraph: {
    title: "Flow Meter Calibration — Lab & On-Site Services",
    description:
      "ILAC/COFRAC ISO 17025 accredited flow meter calibration — OIML R117, API MPMS, MID compliance, as found calibration, real fluid calibration, and 2-week emergency service.",
    url: "/service/flow-meter-calibration/",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Flow Meter Calibration — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meter Calibration — Lab & On-Site Services",
    description: "ILAC/COFRAC ISO 17025 accredited calibration — OIML R117, API MPMS, MID compliance. Emergency 2-week service available. Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: [
    "flow meter calibration Kuwait",
    "Faure Herman calibration Kuwait",
    "ILAC COFRAC ISO 17025 calibration",
    "OIML R117 calibration Kuwait",
    "API MPMS calibration Kuwait",
    "custody transfer meter calibration",
    "flow meter calibration Dubai",
    "MID calibration compliance Kuwait",
    "Texas Technical Services calibration",
    "Coriolis meter calibration Kuwait",
    "micro motion flow meter calibration",
    "Endress Hauser calibration GCC",
    "ultrasonic flow meter calibration",
    "thermal mass flow meter calibration",
    "mass flow meter calibration Dubai",
  ],
};

export default function FlowMeterCalibrationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Flow Meter Calibration", href: "/service/flow-meter-calibration/" },
]} />
<ServiceJsonLd
  name="Flow Meter Calibration"
  description="Faure Herman ILAC/COFRAC ISO 17025 accredited flow meter calibration services — initial & periodic verification to OIML R117 class 0.3 and API MPMS, as found calibration, real target fluid calibration, and 2-week emergency service for custody transfer flowmeters in Kuwait and Dubai."
  url="/service/flow-meter-calibration/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <CalibrationHero />
      <CalibrationContent />

      <HowToJsonLd
        name="Our Flow Meter Calibration Process"
        description="A step-by-step process for ISO 17025 accredited flow meter calibration, from setup through certification."
        steps={[
          { name: "Calibration Setup", text: "Connect the flow meter to a reference standard or prover loop and establish stable flow conditions." },
          { name: "Zero and Span Verification", text: "Verify the meter reads zero with no flow, then check full-scale accuracy against the reference standard." },
          { name: "Multi-Point Calibration", text: "Test at multiple flow rates across the meter range to verify linearity and repeatability." },
          { name: "Documentation and Certification", text: "Generate calibration certificates with as-found and as-left data, uncertainty calculations, and traceability records." },
        ]}
      />

      <ServiceProcessSteps
        title="How We Calibrate Your Flow Meters"
        steps={[
          { name: "Calibration Setup", description: "We connect your flow meter to a reference standard or prover loop and establish stable flow conditions to prepare for accurate calibration." },
          { name: "Zero and Span Verification", description: "We verify the meter reads zero with no flow, then check full-scale accuracy against the reference standard to establish baseline performance." },
          { name: "Multi-Point Calibration", description: "We test at multiple flow rates across the meter's full range to verify linearity and repeatability under varying conditions." },
          { name: "Documentation and Certification", description: "We generate calibration certificates with as-found and as-left data, uncertainty calculations, and traceability records for compliance." },
        ]}
      />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["flow-meter-calibration"] && serviceCrossLinks["flow-meter-calibration"].length > 0 && (
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
              <em className="not-italic text-[#e7212b]">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["flow-meter-calibration"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["flow-meter-calibration"]} />

      {/* ══ RELATED COMPARISON ═══════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Link href="/blog/in-situ-vs-extractive-cems-comparison/" className="inline-flex items-center gap-2 text-[#e7212b] font-semibold text-sm hover:underline">
          Read our comparison: In-Situ vs Extractive CEMS: Technology Comparison for Emissions Monitoring
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

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
            <em className="not-italic text-[#e7212b]">Flow Meter Calibration</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["flow-meter-calibration"]?.map((item) => (
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
