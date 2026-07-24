import type { Metadata } from "next";
import LiftingInspectionHero from "@/components/service/lifting-equipment-inspection/LiftingInspectionHero";
import LiftingInspectionContent from "@/components/service/lifting-equipment-inspection/LiftingInspectionContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators",
  description:
    "Lifting equipment inspection for cranes, hoists, forklifts, and elevators — certified examinations to LOLER, ASME B30, and BS EN 13001 in Kuwait and Dubai.",
  alternates: { canonical: "/service/lifting-equipment-inspection-2/" },
  openGraph: {
    title: "Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators",
    description: "Inspection of permanent lifting systems including overhead cranes, hoists, and elevators. LOLER, ASME B30. Kuwait & Dubai.",
    url: "/service/lifting-equipment-inspection-2/",
    images: [{ url: "/og-lifting-inspection.jpg", width: 1200, height: 630, alt: "Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators", description: "Overhead crane, hoist, and elevator inspection. LOLER, ASME B30. Kuwait & Dubai." },
  keywords: ["overhead crane inspection Kuwait", "hoist inspection Kuwait", "elevator inspection Kuwait", "LOLER inspection Kuwait", "permanent lifting system inspection Kuwait", "crane inspection Kuwait", "Texas Technical Services lifting inspection"],
};

export default function LiftingInspectionPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators", href: "/service/lifting-equipment-inspection-2/" },
]} />
<ServiceJsonLd
  name="Lifting Equipment Inspection — Overhead Cranes, Hoists & Elevators"
  description="Inspection of permanent lifting systems including overhead cranes, hoists, and elevators by certified competent persons — LOLER 1998, ASME B30, BS EN 13001 standards in Kuwait and Dubai."
  url="/service/lifting-equipment-inspection-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <LiftingInspectionHero />
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-[15px] leading-[1.8] max-w-4xl">
            We focus on fixed installations such as overhead traveling cranes, monorails, chain hoists, and passenger or material elevators, delivering statutory inspection reports and compliance documentation.
          </p>
        </div>
      </section>
      <LiftingInspectionContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["lifting-equipment-inspection-2"] && serviceCrossLinks["lifting-equipment-inspection-2"].length > 0 && (
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
              {serviceCrossLinks["lifting-equipment-inspection-2"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["lifting-equipment-inspection-2"]} />
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
            <em className="not-italic text-[#e7212b]">Lifting Equipment Inspection</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["lifting-equipment-inspection-2"]?.map((item) => (
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
