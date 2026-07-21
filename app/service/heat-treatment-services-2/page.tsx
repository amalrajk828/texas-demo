import type { Metadata } from "next";
import HeatTreatmentHero from "@/components/service/heat-treatment-services/HeatTreatmentHero";
import HeatTreatmentContent from "@/components/service/heat-treatment-services/HeatTreatmentContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Heat Treatment Services | Texas Technical Services",
  description:
    "Heat treatment services including Post Weld Heat Treatment (PWHT), stress relief, and annealing using electrical resistance and high-velocity fuel-fired burner systems to ASME VIII, AWS D1.1, ASME B31.3 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/heat-treatment-services-2/" },
  openGraph: {
    title: "Heat Treatment Services | Texas Technical Services",
    description: "PWHT, stress relief, and annealing with electrical and fuel-fired heating. ASME VIII, AWS D1.1. Kuwait & Dubai.",
    url: "/service/heat-treatment-services-2/",
    images: [{ url: "/og-heat-treatment.jpg", width: 1200, height: 630, alt: "Heat Treatment Services — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Heat Treatment Services | Texas Technical Services", description: "PWHT and heat treatment. ASME VIII, AWS D1.1. Kuwait & Dubai." },
  keywords: ["heat treatment Kuwait", "PWHT Kuwait", "post weld heat treatment Kuwait", "stress relief Kuwait", "electrical resistance heating Kuwait", "heat treatment services Kuwait", "Texas Technical Services heat treatment"],
};

export default function HeatTreatmentPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Heat Treatment Services", href: "/service/heat-treatment-services-2/" },
]} />
<ServiceJsonLd
  name="Heat Treatment Services"
  description="Heat treatment services including Post Weld Heat Treatment (PWHT), stress relief, and annealing using electrical resistance and high-velocity fuel-fired burner systems to ASME VIII, AWS D1.1, ASME B31.3 standards in Kuwait and Dubai."
  url="/service/heat-treatment-services-2/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <HeatTreatmentHero />
      <HeatTreatmentContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["heat-treatment-services-2"] && serviceCrossLinks["heat-treatment-services-2"].length > 0 && (
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
              {serviceCrossLinks["heat-treatment-services-2"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["heat-treatment-services-2"]} />
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
            <em className="not-italic text-[#e7212b]">Heat Treatment Services</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["heat-treatment-services-2"]?.map((item) => (
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
