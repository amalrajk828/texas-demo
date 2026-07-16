import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Inspection & Testing Services",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial inspection and testing company in Kuwait — offering NDT (UT, MT, PT, RT, VI), mechanical testing, specialized phased array ultrasonic inspection, and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC.",
  alternates: {
    canonical: "/services_group/services/inspection-testing/",
  },
  openGraph: {
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, QA consultancy, and ISO-certified quality management across the GCC.",
    url: "/services_group/services/inspection-testing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, ISO 9001/14001/45001 certified.",
  },
  keywords: [
    "industrial inspection and testing companies Kuwait",
    "inspection testing services Kuwait",
    "NDT services Kuwait Dubai",
    "non destructive testing Kuwait",
    "phased array ultrasonic testing",
    "mechanical testing Kuwait",
    "third party inspection Kuwait",
    "ISO 9001 inspection company Kuwait",
    "Texas Technical Services inspection",
    "QA consultancy Kuwait",
  ],
};

const faqItems = [
  {
    q: "What are the different types of NDT?",
    a: "Non-Destructive Testing (NDT) includes several methods: Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws; Radiographic Testing (RT) uses X-rays or gamma rays to examine internal structure; Magnetic Particle Inspection (MT) detects surface and near-surface defects in ferromagnetic materials; Liquid/Dye Penetrant Testing (PT) reveals surface defects through capillary action; and Visual Inspection (VI) is the systematic visual examination of surfaces and components. Each method has specific applications and advantages depending on the material type, defect orientation, and inspection requirements.",
  },
  {
    q: "What is the difference between UT and RT in NDT?",
    a: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal discontinuities and measure material thickness. It is highly effective for detecting planar defects like cracks and lack of fusion in welds, and provides immediate results with digital thickness readings. Radiographic Testing (RT) uses ionizing radiation (X-rays or gamma rays) to create a radiograph that reveals internal features, voids, porosity, and inclusions. RT is better for detecting volumetric defects and provides a permanent image record, but requires strict safety protocols and longer setup times. Both methods are complementary and often used together for comprehensive weld inspection.",
  },
  {
    q: "What is phased array ultrasonic testing?",
    a: "Phased Array Ultrasonic Testing (PAUT) is an advanced NDT method that uses multiple ultrasonic elements arranged in an array, electronically controlled to steer and focus the sound beam. This enables rapid scanning of complex geometries, improved defect detection and sizing, and real-time imaging of inspection results. PAUT is particularly valuable for weld inspection, corrosion mapping, and critical component examination in oil and gas, power generation, and aerospace industries.",
  },
  {
    q: "What ISO certifications does Texas Technical Services hold?",
    a: "Texas Technical Services Co. is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health and Safety). These certifications demonstrate our commitment to quality, environmental responsibility, and workplace safety across all our inspection and testing operations in Kuwait and the GCC.",
  },
  {
    q: "What inspection services do you offer in Kuwait and the GCC?",
    a: "We offer a full range of inspection and testing services in Kuwait and across the GCC including NDT (UT, MT, PT, RT, VI), phased array ultrasonic testing, mechanical testing (tensile, hardness, impact, bend, fracture, macro/micro), third-party inspection services, QA consultancy, specialized inspection services (lifting equipment, hose testing, air permeability, water penetration), and corrosion control services — all compliant with ISO standards and industry best practices.",
  },
];

export default function InspectionTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services"
        description="Industrial inspection and testing company in Kuwait — NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC."
        url="/services_group/services/inspection-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <InspectionHero />
      <InspectionOverview />
      <InspectionSubServices />
      <ServicePageFaqSection faqItems={faqItems} highlightWord="Inspection & Testing" />
    </>
  );
}
