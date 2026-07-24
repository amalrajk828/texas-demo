import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Inspection & Testing Services — Page 3",
  description:
    "Non-Destructive Testing (NDT) methods — Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Inspection (MT), Liquid/Dye Penetrant (PT), and Visual Inspection (VI) in Kuwait and the GCC.",
  alternates: {
    canonical: "/services_group/services/inspection-testing/page/3/",
  },
  openGraph: {
    title: "Inspection & Testing Services — Page 3",
    description: "NDT methods — UT, RT, MT, PT, and VI services in Kuwait and Dubai.",
    url: "/services_group/services/inspection-testing/page/3/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services — Page 3",
    description: "UT, RT, MT, PT, VI — full NDT services in Kuwait and Dubai.",
  },
  keywords: ["NDT Kuwait", "ultrasonic testing", "radiographic testing", "magnetic particle inspection", "visual inspection"],
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
      <ServicePageFaqSection faqItems={faqItems} highlightWord="NDT Methods" />
    </>
  );
}
