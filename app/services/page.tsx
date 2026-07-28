import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Our Services",
  description: "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
    url: "/services/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors in Kuwait and the GCC.",
    images: ["/og-default.png"],
  },
  keywords: [
    "industrial automation services Kuwait",
    "PLC SCADA integration Kuwait",
    "flow measurement services Kuwait",
    "inspection and testing Kuwait",
    "automation company Kuwait",
    "process control solutions GCC",
    "oil and gas service company Kuwait",
    "industrial service provider Ahmadi",
    "metering and automation Kuwait",
    "engineering services Kuwait",
    "industrial automation companies GCC",
    "metering skids",
    "flow meter calibration",
    "Allen Bradley system integrators",
    "NDT inspection",
    "predictive maintenance",
    "gas detection system",
    "condition monitoring",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }]} />
      <ServiceJsonLd
        name="Flow Measurement & Control System Solutions"
        description="Metering control system upgrades, maintenance, and validation for custody metering systems — precision and compliance."
        url="/service/flow-measurement-solutions/"
        serviceType="Flow Measurement Solutions"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ServiceJsonLd
        name="Inspection & Testing"
        description="Comprehensive inspection and testing — equipment inspections, NDT, functional testing, and certification to industry standards."
        url="/service/inspection-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ServiceJsonLd
        name="Industrial Process Automation Solutions"
        description="Total industrial automation — PLC, SCADA, HMI, custom software for oil & gas and industrial sectors."
        url="/service/industrial-automation/"
        serviceType="Industrial Automation"
        areaServed={["Kuwait", "UAE", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ServicesHero />
      <ServicesAllGrid />
      <ServicesCtaBanner />
    </>
  );
}
