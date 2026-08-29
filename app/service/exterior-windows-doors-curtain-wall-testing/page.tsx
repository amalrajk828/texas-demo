import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { ArrowRight, Droplets, Wind, Building2 } from "lucide-react";
import ExteriorTestingContent from "@/components/service/exterior-windows-doors-curtain-wall-testing/ExteriorTestingContent";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { serviceFaqData } from "@/lib/serviceFaqData";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Windows, Doors & Curtain Wall Testing",
  description:
    "Performance testing of exterior windows, doors, and curtain walls — water penetration, air permeability, and structural testing in Kuwait and the GCC.",
  alternates: { canonical: "/service/exterior-windows-doors-curtain-wall-testing/" },
  openGraph: {
    title: "Exterior Windows, Doors & Curtain Wall Testing",
    description: "Water penetration, air permeability, and structural testing of exterior windows, doors, and curtain walls in Kuwait and the GCC.",
    url: "/service/exterior-windows-doors-curtain-wall-testing/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Exterior Windows, Doors & Curtain Wall Testing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Windows, Doors & Curtain Wall Testing",
    description: "Water penetration, air permeability, and structural testing. Kuwait & GCC.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  keywords: ["curtain wall testing Kuwait", "window testing Kuwait", "door testing Kuwait", "water penetration test ASTM E1105", "air permeability test ASTM E783", "exterior window testing", "curtain wall performance test", "Texas Technical Services"],
};

const services = [
  {
    icon: Droplets,
    title: "Water Penetration Test",
    desc: "Water spray testing as per ASTM E1105 to determine whether leakage is present through windows, doors, and curtain wall systems from exterior to interior. A water spray rack system is used to simulate wind-driven rain conditions.",
    href: "/service/water-penetration-test/",
  },
  {
    icon: Wind,
    title: "Air Permeability Test",
    desc: "Air infiltration measurement as per ASTM E783 — determines the air leakage through windows, doors, and curtain wall assemblies. Combined with visualization techniques to locate exact air leakage paths through gaskets, joinery, and seals.",
    href: "/service/air-permeability-test/",
  },
  {
    icon: Building2,
    title: "Structural Performance Test",
    desc: "Evaluation of exterior wall systems under positive and negative wind load pressures to verify structural adequacy, deflection limits, and overall performance per ASTM and AAMA standards.",
    href: "/service/inspection-testing/",
  },
];

export default function ExteriorWindowsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services/" },
        { name: "Inspection & Testing", href: "/service/inspection-testing/" },
        { name: "Exterior Windows, Doors & Curtain Wall Testing", href: "/service/exterior-windows-doors-curtain-wall-testing/" },
      ]} />
      <ServiceJsonLd
        name="Exterior Windows, Doors & Curtain Wall Testing"
        description="Performance testing of exterior windows, doors, and curtain walls including water penetration (ASTM E1105), air permeability (ASTM E783), and structural performance testing in Kuwait and the GCC."
        url="/service/exterior-windows-doors-curtain-wall-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <section className="relative bg-[#0B0D26] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase mb-6 border border-[#e7212b]/20 rounded-full px-4 py-1.5">
            Inspection & Testing
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.8rem] font-black text-white leading-[1.08] max-w-4xl mx-auto">
            Exterior Windows, Doors &amp;<br className="hidden sm:block" />
            <span className="text-[#e7212b]">Curtain Wall Testing</span>
          </h1>
          <p className="text-gray-400 text-[15px] lg:text-[16px] leading-[1.8] max-w-3xl mx-auto mt-6">
            Comprehensive performance testing of building envelope systems — water penetration, air permeability,
            and structural testing compliant with ASTM and AAMA standards across Kuwait and the GCC.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f4f5f8] to-transparent" />
      </section>
      <ExteriorTestingContent />
      <section className="bg-[#f4f5f8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#0891B2] text-[10px] font-semibold tracking-[3.5px] uppercase">Testing Services</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-14">
            Curtain Wall &amp; Fenestration Testing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={s.title} href={s.href} className="group relative rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300">
                <div className="flex flex-col flex-1 p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#e7212b]/8 border border-[#e7212b]/15 flex items-center justify-center mb-5 group-hover:bg-[#e7212b]/15 group-hover:border-[#e7212b]/30 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.8} />
                  </div>
                  <div className="w-10 h-[2px] bg-[#e7212b] rounded-full mb-4 group-hover:w-14 transition-all duration-300" />
                  <h3 className="text-[17px] font-bold text-[#0B0D26] leading-snug mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-[1.8] flex-1">{s.desc}</p>
                  <div className="mt-6 pt-4 border-t border-[#e8eaf0] flex items-center gap-1.5 text-[#e7212b] text-[13px] font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#e7212b]/10 flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-6 h-6 text-[#e7212b]" strokeWidth={1.8} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D26] mb-4">
            Ensure Your Building Envelope Meets International Standards
          </h2>
          <p className="text-gray-500 text-[15px] leading-[1.8] max-w-2xl mx-auto mb-8">
            Contact our team to schedule exterior windows, doors, and curtain wall performance testing
            for your project in Kuwait or across the GCC.
          </p>
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-[14px] shadow-lg shadow-[#e7212b]/15"
          >
            Request a Test <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["exterior-windows-doors-curtain-wall-testing"] && serviceCrossLinks["exterior-windows-doors-curtain-wall-testing"].length > 0 && (
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
              {serviceCrossLinks["exterior-windows-doors-curtain-wall-testing"]?.map((link) => (
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
    
      <FaqPageJsonLd items={serviceFaqData["exterior-windows-doors-curtain-wall-testing"]} />
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
            <em className="not-italic text-[#e7212b]">Facade Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceFaqData["exterior-windows-doors-curtain-wall-testing"]?.map((item) => (
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
