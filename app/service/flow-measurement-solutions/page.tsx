import type { Metadata } from "next";
import FlowHero from "@/components/service/flow-measurement/FlowHero";
import FlowSubServices from "@/components/service/flow-measurement/FlowSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Flow Measurement & Control System Solutions",
  description:
    "Texas Technical Services provides flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems compliant with API MPMS, AGA, ISO, OIML standards.",
  alternates: {
    canonical: "/service/flow-measurement-solutions/",
  },
  openGraph: {
    title: "Flow Measurement & Control System Solutions | Texas Technical Services",
    description:
      "Flow measurement services in Ahmadi, Kuwait — expert custody transfer metering, system integration, upgrades, flow computer configuration, calibration, and validation across the GCC.",
    url: "/service/flow-measurement-solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Measurement & Control System Solutions | Texas Technical Services",
    description:
      "Flow measurement services in Ahmadi Kuwait — custody metering upgrades, calibration, validation, flow computer configuration across Kuwait and the GCC.",
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

export default function FlowMeasurementPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Flow Measurement", href: "/service/flow-measurement-solutions/" }]} />
      <ServiceJsonLd
        name="Flow Measurement & Control System Solutions"
        description="Flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems."
        url="/service/flow-measurement-solutions/"
        serviceType="Flow Measurement"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <FlowHero />
      <FlowSubServices />
    </>
  );
}
