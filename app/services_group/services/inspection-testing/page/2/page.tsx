import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 2",
  description:
    "Advanced inspection services including TOFD, Eddy Current Testing, Phased Array Ultrasonic Testing, and mechanical testing (macro/micro, fracture, bend, impact, hardness, tensile) in Kuwait and the GCC.",
  alternates: {
    canonical: "/services_group/services/inspection-testing/page/2/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 2 | Texas Technical Services",
    description: "TOFD, Eddy Current, Phased Array UT, and mechanical testing services in Kuwait and Dubai.",
    url: "/services_group/services/inspection-testing/page/2/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 2 | Texas Technical Services",
    description: "TOFD, Eddy Current, Phased Array UT, and mechanical testing in Kuwait and Dubai.",
  },
};

const faqItems = [
  {
    q: "What is Time of Flight Diffraction (TOFD)?",
    a: "Time of Flight Diffraction (TOFD) uses the time of flight of an ultrasonic pulse to determine the position and size of a reflector. When a crack is present, there is a diffraction of the ultrasonic wave from the tip of the crack. Using the measured time of flight of the pulse, the depth of crack tips can be calculated automatically by simple trigonometry. TOFD is highly effective for sizing defects in welds and detecting planar discontinuities.",
  },
  {
    q: "What is the difference between macro and micro testing?",
    a: "Macro testing examines the structure of a material at low magnification (up to 50x), revealing features like grain flow, weld penetration, segregation, and inclusions visible to the naked eye or under low magnification. Micro testing uses metallographic microscopes at high magnification (50x to 1000x) to examine microstructure — grain size, phase distribution, carbide precipitation, and heat treatment effects. Both are essential for material characterization and failure analysis.",
  },
  {
    q: "What does a tensile test measure?",
    a: "A tensile test measures a material's response to axial pulling forces, determining key mechanical properties: tensile strength (maximum stress), yield strength (stress at which plastic deformation begins), elongation (ductility), reduction of area, and Young's modulus (stiffness). These properties are critical for material selection, quality control, and design verification across metals, plastics, ceramics, and composites.",
  },
];

export default function InspectionTestingPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" }, { name: "Page 2", href: "/services_group/services/inspection-testing/page/2/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services — Page 2"
        description="Advanced inspection services including TOFD, Eddy Current Testing, Phased Array Ultrasonic Testing, and mechanical testing in Kuwait and the GCC."
        url="/services_group/services/inspection-testing/page/2/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <InspectionHero />
      <InspectionOverview />
      <InspectionSubServices slices={[[13, 22]]} />
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
            <em className="not-italic text-[#e7212b]">Inspection &amp; Testing</em>
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
