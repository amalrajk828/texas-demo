import type { Metadata } from "next";
import FlowHero from "@/components/service/flow-measurement/FlowHero";
import FlowSubServices from "@/components/service/flow-measurement/FlowSubServices";

export const metadata: Metadata = {
  title: "Flow Measurement & Control System Solutions",
  description:
    "Texas Technical Services provides metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems — compliant with API MPMS, AGA, ISO, OIML standards.",
  alternates: {
    canonical: "https://texastechserv.com/service/flow-measurement-solutions/",
  },
  openGraph: {
    title: "Flow Measurement & Control System Solutions | Texas Technical Services",
    description:
      "Expert custody transfer metering services — system integration, upgrades, flow computer configuration, calibration, validation, commissioning, and spare parts supply.",
    url: "https://texastechserv.com/service/flow-measurement-solutions/",
    images: [
      {
        url: "https://texastechserv.com/og-flow-measurement.jpg",
        width: 1200,
        height: 630,
        alt: "Flow Measurement & Control System Solutions — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Measurement & Control System Solutions | Texas Technical Services",
    description:
      "Custody metering upgrades, calibration, validation, flow computer configuration and expert consultancy — compliant with API, AGA, ISO & OIML standards.",
  },
  keywords: [
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
      <FlowHero />
      <FlowSubServices />
      {/* Contact section — to be added */}
    </>
  );
}
