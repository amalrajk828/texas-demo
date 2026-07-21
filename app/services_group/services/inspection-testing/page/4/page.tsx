import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 4",
  description:
    "Non-Destructive Testing (NDT) and Mechanical Testing category overview — comprehensive inspection solutions for industrial applications in Kuwait and the GCC.",
  alternates: {
    canonical: "/services_group/services/inspection-testing/page/4/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 4",
    description: "NDT and Mechanical Testing category overview — comprehensive inspection solutions in Kuwait and the GCC.",
    url: "/services_group/services/inspection-testing/page/4/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 4",
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
      <ServicePageFaqSection faqItems={faqItems} highlightWord="NDT & Mechanical Testing" />
    </>
  );
}
