import type { Metadata } from "next";
import WaterPenetrationHero from "@/components/service/water-penetration-test/WaterPenetrationHero";
import WaterPenetrationContent from "@/components/service/water-penetration-test/WaterPenetrationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Water Penetration Test — Field Hose Testing & Leak Diagnostics",
  description:
    "Water penetration testing for windows, doors, and curtain walls — static pressure testing to ASTM E1105, AAMA 502, and BS 6375 in Kuwait and Dubai.",
  alternates: { canonical: "/service/water-penetration-test-2/" },
  openGraph: {
    title: "Water Penetration Test — Field Hose Testing & Leak Diagnostics",
    description: "Field water penetration testing using dynamic spray and hose methods. AAMA 502, ASTM E1105. Kuwait & Dubai.",
    url: "/service/water-penetration-test-2/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Water Penetration Test — Field Hose Testing & Leak Diagnostics — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Water Penetration Test — Field Hose Testing & Leak Diagnostics", description: "Field water spray and hose testing for leak diagnostics. AAMA 502, ASTM E1105. Kuwait & Dubai." },
  keywords: ["field water penetration test Kuwait", "hose test curtain wall Kuwait", "window leak diagnostics Kuwait", "dynamic water spray test Kuwait", "AAMA 502 Kuwait", "building leak detection Kuwait", "Texas Technical Services water test"],
};

export default function WaterPenetrationPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Water Penetration Test — Field Hose Testing & Leak Diagnostics", href: "/service/water-penetration-test-2/" },
]} />
<ServiceJsonLd
  name="Water Penetration Test — Field Hose Testing & Leak Diagnostics"
  description="Field water penetration testing using dynamic spray and hose methods to diagnose leaks in installed windows, doors, and curtain walls — AAMA 502, ASTM E1105 standards in Kuwait and Dubai."
  url="/service/water-penetration-test-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <WaterPenetrationHero />
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-[15px] leading-[1.8] max-w-4xl">
            Our field team applies dynamic water spray and hose-bar testing to diagnose active leaks on installed fenestration and curtain wall systems, providing actionable repair guidance.
          </p>
        </div>
      </section>
      <WaterPenetrationContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["water-penetration-test-2"] && serviceCrossLinks["water-penetration-test-2"].length > 0 && (
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
              {serviceCrossLinks["water-penetration-test-2"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["water-penetration-test-2"]} />
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
            <em className="not-italic text-[#e7212b]">Water Penetration Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["water-penetration-test-2"]?.map((item) => (
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
