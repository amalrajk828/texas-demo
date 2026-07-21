import type { Metadata } from "next";
import TorqueHero from "@/components/service/torque-tightening-bolt-tensioning/TorqueHero";
import TorqueContent from "@/components/service/torque-tightening-bolt-tensioning/TorqueContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";
import ServiceDefinition from "@/components/service/ServiceDefinition";

export const metadata: Metadata = {
  title: "Torque Tightening & Bolt Tensioning",
  description:
    "Torque tightening and bolt tensioning with hydraulic tools — flange, vessel, and structural bolting to ASME PCC-1, EN 1591, and API 6A in Kuwait and Dubai.",
  alternates: { canonical: "/service/torque-tightening-bolt-tensioning/" },
  openGraph: {
    title: "Torque Tightening & Bolt Tensioning",
    description: "Hydraulic torque and bolt tensioning for flanges and pressure vessels. ASME PCC-1, API 6A. Kuwait & Dubai.",
    url: "/service/torque-tightening-bolt-tensioning/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Torque Tightening & Bolt Tensioning — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Torque Tightening & Bolt Tensioning", description: "Hydraulic bolt tensioning and torque services. ASME PCC-1. Kuwait & Dubai." },
  keywords: ["torque tightening Kuwait", "bolt tensioning Kuwait", "hydraulic torque Kuwait", "flange management Kuwait", "bolt preload Kuwait", "ASME PCC-1 Kuwait", "Texas Technical Services torque"],
};

export default function TorquePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Torque Tightening & Bolt Tensioning", href: "/service/torque-tightening-bolt-tensioning/" },
]} />
<ServiceJsonLd
  name="Torque Tightening & Bolt Tensioning"
  description="Torque tightening and bolt tensioning services using calibrated hydraulic tools and torque sensors — bolted flange connections, pressure vessel fasteners, and structural bolting to ASME PCC-1, EN 1591, API 6A in Kuwait and Dubai."
  url="/service/torque-tightening-bolt-tensioning/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <ServiceDefinition definition="Torque tightening and bolt tensioning services use calibrated hydraulic tools and torque sensors for bolted flange connections, pressure vessel fasteners, and structural bolting. TTS provides certified services to ASME PCC-1, EN 1591, and API 6A standards in Kuwait and Dubai." />
      <TorqueHero />
      <TorqueContent />

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["torque-tightening-bolt-tensioning"] && serviceCrossLinks["torque-tightening-bolt-tensioning"].length > 0 && (
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
              {serviceCrossLinks["torque-tightening-bolt-tensioning"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["torque-tightening-bolt-tensioning"]} />
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
            <em className="not-italic text-[#e7212b]">Torque Tightening & Bolt Tensioning</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["torque-tightening-bolt-tensioning"]?.map((item) => (
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
