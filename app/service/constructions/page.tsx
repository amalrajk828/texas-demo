import type { Metadata } from "next";
import ConstructionHero from "@/components/service/constructions/ConstructionHero";
import ConstructionSubServices from "@/components/service/constructions/ConstructionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight } from "lucide-react";
import { serviceCrossLinks } from "@/lib/serviceCrossLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Construction & Project Delivery | Texas Technical Services",
  description:
    "Texas Technical Services provides industrial construction and project delivery services in Kuwait and across the GCC — structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants.",
  alternates: {
    canonical: "/service/constructions/",
  },
  openGraph: {
    title: "Industrial Construction & Project Delivery | Texas Technical Services",
    description:
      "Structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants in Kuwait and the GCC.",
    url: "/service/constructions/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Industrial Construction & Project Delivery — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Construction & Project Delivery | Texas Technical Services",
    description:
      "Structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution across Kuwait and the GCC.",
  },
  keywords: [
    "industrial construction Kuwait",
    "steel fabrication Kuwait",
    "EPC contractor Kuwait",
    "piping fabrication GCC",
    "structural steel erection",
    "Texas Technical Services construction",
  ],
};

const faqItems = [
  {
    q: "What types of construction services do you offer?",
    a: "We offer a comprehensive range of industrial construction services including structural steel fabrication and erection, gantry and skylight gantry fabrication, piping and modular skid fabrication, electrical and instrumentation works, hand rail fabrication, cable steel structure supports, and turnkey EPC project execution for oil and gas facilities.",
  },
  {
    q: "What industries do your construction services serve?",
    a: "Our construction services primarily serve the oil and gas, petrochemical, refinery, and heavy industrial sectors across Kuwait and the wider GCC region. We also support industrial facility projects including control rooms, MCC rooms, and instrument shelters.",
  },
  {
    q: "Do you handle both design and execution of construction projects?",
    a: "Yes, we provide end-to-end project delivery from design and engineering through fabrication, installation, and commissioning. Our turnkey EPC capability means we can manage every phase of your industrial construction project under certified quality management systems.",
  },
  {
    q: "What safety and quality certifications do you hold?",
    a: "Our construction work is delivered under ISO 9001:2015 and ISO 14001:2015 certified quality management systems. We maintain rigorous safety protocols and quality assurance processes across all project phases, ensuring compliance with international standards.",
  },
  {
    q: "Do you provide construction services across the GCC?",
    a: "Yes, we deliver industrial construction and project delivery services across Kuwait, Saudi Arabia, United Arab Emirates, Bahrain, Qatar, and Oman. Our team has extensive experience executing projects in diverse industrial environments throughout the GCC region.",
  },
];

export default function ConstructionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Construction", href: "/service/constructions/" }]} />
      <ServiceJsonLd
        name="Industrial Construction & Project Delivery"
        description="Industrial construction services — structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants in Kuwait and the GCC."
        url="/service/constructions/"
        serviceType="Construction"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <ConstructionHero />
      <ConstructionSubServices />
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3.5px] uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-[2.4rem] font-bold text-[#0B0D26] leading-[1.15] mb-12">
            Questions About <em className="not-italic text-[#e7212b]">Construction</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group bg-white border border-[#e8eaf0] rounded-2xl overflow-hidden transition-all duration-200 open:border-[#e7212b]/25 open:shadow-lg">
                <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer list-none">
                  <span className="text-[15px] font-semibold text-[#0B0D26] pr-4 leading-snug">{item.q}</span>
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

      {/* ══ RELATED SERVICES ═══════════════════════════════ */}
      {serviceCrossLinks["constructions"] && serviceCrossLinks["constructions"].length > 0 && (
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
              {serviceCrossLinks["constructions"]?.map((link) => (
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
    </>
  );
}
