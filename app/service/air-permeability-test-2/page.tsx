import type { Metadata } from "next";
import AirPermeabilityHero from "@/components/service/air-permeability-test/AirPermeabilityHero";
import AirPermeabilityContent from "@/components/service/air-permeability-test/AirPermeabilityContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";
import ServiceDefinition from "@/components/service/ServiceDefinition";

export const metadata: Metadata = {
  title: "Air Permeability Test — On-Site Installed Envelope Testing",
  description:
    "Air permeability testing for windows, doors, and curtain walls — ASTM E783, ASTM E283, and EN 12207 compliant in Kuwait and Dubai.",
  alternates: { canonical: "/service/air-permeability-test-2/" },
  openGraph: {
    title: "Air Permeability Test — On-Site Installed Envelope Testing",
    description: "Field air permeability testing for installed windows, doors, and curtain walls. ASTM E783, EN 12207. Kuwait & Dubai.",
    url: "/service/air-permeability-test-2/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Air Permeability Test — On-Site Installed Envelope Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Air Permeability Test — On-Site Installed Envelope Testing", description: "Field air permeability testing for installed facades. ASTM E783. Kuwait & Dubai." },
  keywords: ["field air permeability test Kuwait", "on-site air leakage test Kuwait", "installed curtain wall air test Kuwait", "ASTM E783 Kuwait", "building envelope air test Kuwait", "window air infiltration Kuwait", "Texas Technical Services air test"],
};

export default function AirPermeabilityPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Air Permeability Test — On-Site Installed Envelope Testing", href: "/service/air-permeability-test-2/" },
]} />
<ServiceJsonLd
  name="Air Permeability Test — On-Site Installed Envelope Testing"
  description="Field air permeability testing for installed windows, doors, and curtain walls to measure infiltration and locate leakage paths — ASTM E783, EN 12207 standards in Kuwait and Dubai."
  url="/service/air-permeability-test-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <ServiceDefinition definition="On-site air permeability testing measures infiltration and locates leakage paths through installed windows, doors, and curtain wall systems. TTS provides certified field testing services per ASTM E783 and EN 12207 standards for building envelope assessment in Kuwait and Dubai." />
      <AirPermeabilityHero />
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-[15px] leading-[1.8] max-w-4xl">
            Our field crews perform air permeability testing directly on installed building envelopes, helping identify leakage paths and verify air-barrier performance in completed windows, doors, and curtain wall assemblies.
          </p>
        </div>
      </section>
      <AirPermeabilityContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["air-permeability-test-2"] && serviceCrossLinks["air-permeability-test-2"].length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
              Explore{" "}
              <em className="not-italic text-[#e7212b]">More Services</em>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCrossLinks["air-permeability-test-2"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["air-permeability-test-2"]} />
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
            Questions About{" "}
            <em className="not-italic text-[#e7212b]">Air Permeability Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["air-permeability-test-2"]?.map((item) => (
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
