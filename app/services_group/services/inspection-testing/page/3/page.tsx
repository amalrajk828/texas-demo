import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 3",
  description:
    "Non-Destructive Testing (NDT) methods — Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Inspection (MT), Liquid/Dye Penetrant (PT), and Visual Inspection (VI) in Kuwait and the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/services_group/services/inspection-testing/page/3/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 3 | Texas Technical Services",
    description: "NDT methods — UT, RT, MT, PT, and VI services in Kuwait and Dubai.",
    url: "https://texastechserv.com/services_group/services/inspection-testing/page/3/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 3 | Texas Technical Services",
    description: "UT, RT, MT, PT, VI — full NDT services in Kuwait and Dubai.",
  },
};

const faqItems = [
  {
    q: "What is the difference between UT and RT in NDT?",
    a: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal discontinuities and measure material thickness. It is highly effective for detecting planar defects like cracks and lack of fusion in welds. Radiographic Testing (RT) uses ionizing radiation (X-rays or gamma rays) to create a radiograph that reveals internal features, voids, porosity, and inclusions. RT is better for detecting volumetric defects and provides a permanent image record, while UT is faster and safer with no radiation hazards.",
  },
  {
    q: "When is Magnetic Particle Inspection (MT) used?",
    a: "Magnetic Particle Inspection (MT) is used to detect surface and near-surface defects in ferromagnetic materials such as iron, nickel, cobalt, and their alloys. It is commonly used for weld inspection, casting examination, forging inspection, and in-service component testing. MT is fast, relatively inexpensive, and highly sensitive to fine cracks, with minimal surface preparation required compared to other methods.",
  },
  {
    q: "What is Visual Inspection (VI)?",
    a: "Visual Inspection (VI) is the systematic visual examination of surfaces, welds, components, and assemblies to detect surface discontinuities, corrosion, misalignment, and other visible defects. It is the first and most fundamental step in any NDT program and can be performed directly or with the aid of tools like borescopes, mirrors, and cameras. VI is essential for pre-inspection assessment and often guides the selection of additional NDT methods.",
  },
];

export default function InspectionTestingPage3() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" }, { name: "Page 3", href: "/services_group/services/inspection-testing/page/3/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services — Page 3"
        description="Non-Destructive Testing (NDT) methods — UT, RT, MT, PT, and VI in Kuwait and the GCC."
        url="/services_group/services/inspection-testing/page/3/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <InspectionHero />
      <InspectionOverview />
      <InspectionSubServices slices={[[22, 27]]} />
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
            <em className="not-italic text-[#e7212b]">NDT Methods</em>
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
