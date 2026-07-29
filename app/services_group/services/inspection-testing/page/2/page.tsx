import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 2",
  description:
    "Advanced inspection services including TOFD, Eddy Current Testing, Phased Array Ultrasonic Testing, and mechanical testing (macro/micro, fracture, bend, impact, hardness, tensile) in Kuwait and the GCC.",
  alternates: {
    canonical: "/services_group/services/inspection-testing/page/2/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 2",
    description: "TOFD, Eddy Current, Phased Array UT, and mechanical testing services in Kuwait and Dubai.",
    url: "/services_group/services/inspection-testing/page/2/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 2",
    description: "TOFD, Eddy Current, Phased Array UT, and mechanical testing in Kuwait and Dubai.",
  },
  keywords: ["inspection testing Kuwait", "NDT services", "TOFD", "eddy current testing", "mechanical testing"],
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
    </>
  );
}
