import type { Metadata } from "next";
import ConstructionHero from "@/components/service/constructions/ConstructionHero";
import ConstructionSubServices from "@/components/service/constructions/ConstructionSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Industrial Construction & Project Delivery | Texas Technical Services",
  description:
    "Texas Technical Services provides industrial construction and project delivery services in Kuwait and across the GCC — structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants.",
  alternates: {
    canonical: "/services_group/services/constructions/",
  },
  keywords: [
    "industrial construction Kuwait",
    "structural steel fabrication",
    "EPC project execution",
    "piping fabrication GCC",
    "gantry fabrication services",
  ],
  openGraph: {
    title: "Industrial Construction & Project Delivery | Texas Technical Services",
    description:
      "Structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants in Kuwait and the GCC.",
    url: "/services_group/services/constructions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Construction & Project Delivery | Texas Technical Services",
    description:
      "Structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution across Kuwait and the GCC.",
  },
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
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Construction", href: "/services_group/services/constructions/" }]} />
      <ServiceJsonLd
        name="Industrial Construction & Project Delivery"
        description="Industrial construction services — structural steel fabrication, gantry fabrication, piping, electrical works, and EPC project execution for oil and gas plants in Kuwait and the GCC."
        url="/services_group/services/constructions/"
        serviceType="Construction"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <ConstructionHero />
      <ConstructionSubServices />
      <ServicePageFaqSection faqItems={faqItems} highlightWord="Construction" />
    </>
  );
}
