import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesAllGrid from "@/components/service/ServicesAllGrid";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Our Services | Industrial Automation Company — PLC SCADA, Flow Measurement & Inspection",
  description: "Texas Technical Services is a leading automation company offering PLC SCADA integration, flow measurement & control system solutions, inspection & testing, and industrial process automation for oil & gas, refinery, and petrochemical sectors across Kuwait and the GCC.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "Texas Technical Services is a leading automation company offering PLC SCADA integration, flow measurement & control system solutions, inspection & testing, and industrial process automation for oil & gas, refinery, and petrochemical sectors across Kuwait and the GCC.",
    url: "/services/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Services — PLC SCADA, Flow Measurement & Inspection",
    description:
      "PLC SCADA integration, flow measurement, inspection & testing, and process automation for oil & gas and industrial sectors across Kuwait and the GCC.",
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
      <ServicesHero />
      <ServicesAllGrid />
      <ServicesCtaBanner />
    </>
  );
}
