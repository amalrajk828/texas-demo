import type { Metadata } from "next";
import FlowHero from "@/components/service/flow-measurement/FlowHero";
import FlowSubServices from "@/components/service/flow-measurement/FlowSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import ServicePageFaqSection from "@/components/services_group/ServicePageFaqSection";

export const metadata: Metadata = {
  title: "Flow Measurement & Control System Solutions",
  description:
    "Texas Technical Services provides flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems compliant with API MPMS, AGA, ISO, OIML standards.",
  alternates: {
    canonical: "/services_group/services/flow-measurement-solutions/",
  },
  openGraph: {
    title: "Flow Measurement & Control System Solutions",
    description:
      "Flow measurement services in Ahmadi, Kuwait — expert custody transfer metering, system integration, upgrades, flow computer configuration, calibration, and validation across the GCC.",
    url: "/services_group/services/flow-measurement-solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Measurement & Control System Solutions",
    description: "Flow measurement services in Ahmadi Kuwait — custody metering upgrades, calibration, validation, flow computer configuration across Kuwait and the GCC.",
  },
  keywords: [
    "flow measurement services in Ahmadi Kuwait",
    "flow measurement solutions Kuwait",
    "custody transfer metering Kuwait",
    "metering control system integration",
    "flow computer configuration",
    "flow meter calibration Kuwait",
    "helical flow meter repair",
    "metering system validation",
    "OIML AGA API MPMS compliance",
    "Texas Technical Services flow measurement",
  ],
};

const faqItems = [
  {
    q: "What is custody transfer metering?",
    a: "Custody transfer metering is a highly accurate measurement system used when ownership of oil, gas, or refined products passes from one party to another — typically from a producer to a pipeline, refinery, or terminal. These metering systems must comply with international standards such as API MPMS, AGA, ISO, and OIML. Our team specializes in designing, integrating, and maintaining custody transfer metering systems that meet fiscal measurement requirements for accuracy and reliability.",
  },
  {
    q: "Why is flow measurement accuracy important in oil and gas?",
    a: "Flow measurement accuracy directly impacts revenue, regulatory compliance, and operational efficiency in the oil and gas industry. Even a 0.1% measurement error in a high-volume custody transfer application can result in significant financial losses. Accurate flow measurement also ensures compliance with environmental regulations, optimizes production allocation, and provides reliable data for reservoir management and pipeline operations.",
  },
  {
    q: "What is flow computer configuration?",
    a: "Flow computer configuration involves programming and calibrating specialized computing devices that calculate flow rates, totals, and quality parameters based on input from flow meters, pressure transmitters, temperature sensors, and gas chromatographs. Our engineers configure flow computers to comply with API MPMS Chapter 21, AGA reports, and OIML R117 standards, ensuring accurate and auditable fiscal measurement data.",
  },
  {
    q: "What flow measurement services do you offer in Ahmadi, Kuwait?",
    a: "We offer comprehensive flow measurement services in Ahmadi, Kuwait and across the GCC including metering control system upgrades and integration, flow computer configuration and programming, flow meter calibration and validation, helical flow meter repair and maintenance, metering system audits and specialized consultancy, and commissioning and after-sales support for custody transfer metering systems.",
  },
  {
    q: "What standards do your flow measurement services comply with?",
    a: "Our flow measurement services comply with all major international standards including API MPMS (Manual of Petroleum Measurement Standards), AGA (American Gas Association) reports, ISO 15136, OIML R117 and R137, and NTEP (National Type Evaluation Program). We ensure every metering system we deliver meets the rigorous accuracy and traceability requirements required for fiscal custody transfer applications.",
  },
];

export default function FlowMeasurementPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Flow Measurement", href: "/services_group/services/flow-measurement-solutions/" }]} />
      <ServiceJsonLd
        name="Flow Measurement & Control System Solutions"
        description="Flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems."
        url="/services_group/services/flow-measurement-solutions/"
        serviceType="Flow Measurement"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FaqPageJsonLd items={faqItems} />
      <FlowHero />
      <FlowSubServices />
      <ServicePageFaqSection faqItems={faqItems} highlightWord="Flow Measurement" />
    </>
  );
}
