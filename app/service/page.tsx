import type { Metadata } from "next";
import ServicesHero from "@/components/service/ServicesHero";
import ServicesDetail from "@/components/service/ServicesDetail";
import ServicesConstruction from "@/components/service/ServicesConstruction";
import ServicesBenefits from "@/components/service/ServicesBenefits";
import ServicesCtaBanner from "@/components/service/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Flow Measurement, Automation & Inspection",
  description:
    "Texas Technical Services offers flow measurement & control system solutions, inspection & testing, industrial process automation, and construction services across oil & gas, refinery, and petrochemical sectors.",
  alternates: {
    canonical: "https://texastechserv.com/service/",
  },
  openGraph: {
    title: "Our Services | Texas Technical Services",
    description:
      "End-to-end industrial services — flow measurement, industrial automation, inspection & testing, and construction — trusted by leading operators since 2008.",
    url: "https://texastechserv.com/service/",
    images: [
      {
        url: "https://texastechserv.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Texas Technical Services — Industrial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Texas Technical Services",
    description:
      "Flow measurement, industrial automation, inspection & testing, and construction services for oil & gas and industrial sectors.",
  },
  keywords: [
    "flow measurement services Kuwait",
    "custody metering solutions",
    "industrial automation Kuwait Dubai",
    "inspection testing services oil gas",
    "PLC SCADA HMI integration",
    "CEMS solutions",
    "industrial construction Kuwait",
    "Texas Technical Services",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <ServicesConstruction />
      <ServicesBenefits />
      <ServicesCtaBanner />
    </>
  );
}
