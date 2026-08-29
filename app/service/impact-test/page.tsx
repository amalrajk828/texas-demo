import type { Metadata } from "next";
import ImpactHero from "@/components/service/impact-test/ImpactHero";
import ImpactContent from "@/components/service/impact-test/ImpactContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact Testing — Charpy & Izod Standards",
  description:
    "Charpy and Izod impact testing for material toughness and ductile-to-brittle transition assessment to ASTM E23 and ISO 148 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/impact-test/" },
  openGraph: {
    title: "Impact Testing — Charpy & Izod Standards",
    description: "Charpy and Izod impact testing — shock resistance, low-temperature, and ductile-to-brittle transition. ASTM E23, ISO 148. Kuwait & Dubai.",
    url: "/service/impact-test/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Impact Test — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Testing — Charpy & Izod Standards",
    description: "Charpy and Izod impact testing. Low-temperature testing available. Kuwait & Dubai.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: ["impact test Kuwait", "Charpy impact test Kuwait", "Izod impact test Kuwait", "low temperature impact test Kuwait", "fracture toughness impact Kuwait", "ASTM E23 impact test Kuwait", "Texas Technical Services impact test"],
};

export default function ImpactTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Impact Test", href: "/service/impact-test/" },
]} />
<ServiceJsonLd
  name="Impact Test"
  description="Charpy and Izod impact testing to measure material resistance to sudden shock loading — including low-temperature impact testing and ductile-to-brittle transition assessment to ASTM E23, ISO 148 standards in Kuwait and Dubai."
  url="/service/impact-test/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <ImpactHero />
      <ImpactContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["impact-test"] && serviceCrossLinks["impact-test"].length > 0 && (
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
              {serviceCrossLinks["impact-test"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["impact-test"]} />
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
            <em className="not-italic text-[#e7212b]">Impact Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["impact-test"]?.map((item) => (
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
