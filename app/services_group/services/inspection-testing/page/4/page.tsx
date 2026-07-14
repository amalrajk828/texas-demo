import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 4",
  description:
    "Non-Destructive Testing (NDT) and Mechanical Testing category overview — comprehensive inspection solutions for industrial applications in Kuwait and the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/services_group/services/inspection-testing/page/4/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 4 | Texas Technical Services",
    description: "NDT and Mechanical Testing category overview — comprehensive inspection solutions in Kuwait and the GCC.",
    url: "https://texastechserv.com/services_group/services/inspection-testing/page/4/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 4 | Texas Technical Services",
    description: "NDT and Mechanical Testing — comprehensive inspection solutions in Kuwait and the GCC.",
  },
};

const faqItems = [
  {
    q: "What is Non-Destructive Testing (NDT)?",
    a: "Non-Destructive Testing (NDT) is a group of analysis techniques used to evaluate the properties of a material, component, or system without causing damage. NDT methods include Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Inspection (MT), Liquid/Dye Penetrant Testing (PT), Visual Inspection (VI), and advanced techniques like Phased Array UT and TOFD. NDT is essential for quality control, safety assurance, and asset integrity management across oil & gas, power generation, aerospace, and manufacturing industries.",
  },
  {
    q: "What is the importance of mechanical testing?",
    a: "Mechanical testing determines the mechanical properties of materials — strength, ductility, hardness, toughness, and fatigue resistance — under controlled loading conditions. These tests are critical for material selection, quality assurance, design validation, and failure analysis. Mechanical testing ensures that materials meet specified standards (ASTM, ISO, EN) and are fit for their intended application in structural, pressure vessel, piping, and equipment manufacturing.",
  },
];

export default function InspectionTestingPage4() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" }, { name: "Page 4", href: "/services_group/services/inspection-testing/page/4/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services — Page 4"
        description="NDT and Mechanical Testing category overview — comprehensive inspection solutions for industrial applications."
        url="/services_group/services/inspection-testing/page/4/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <InspectionHero />
      <InspectionOverview />
      <InspectionSubServices slices={[[27, 29]]} />
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
            <em className="not-italic text-[#e7212b]">NDT &amp; Mechanical Testing</em>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => (
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
