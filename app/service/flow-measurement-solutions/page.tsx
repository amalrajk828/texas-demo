import type { Metadata } from "next";
import FlowHero from "@/components/service/flow-measurement/FlowHero";
import FlowSubServices from "@/components/service/flow-measurement/FlowSubServices";

export const metadata: Metadata = {
  title: "Flow Measurement & Control System Solutions",
  description:
    "Texas Technical Services provides flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems compliant with API MPMS, AGA, ISO, OIML standards.",
  alternates: {
    canonical: "https://texastechserv.com/service/flow-measurement-solutions/",
  },
  openGraph: {
    title: "Flow Measurement & Control System Solutions | Texas Technical Services",
    description:
      "Flow measurement services in Ahmadi, Kuwait — expert custody transfer metering, system integration, upgrades, flow computer configuration, calibration, and validation across the GCC.",
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
      <FlowHero />
      <FlowSubServices />
      {/* Contact section — to be added */}
    </>
  );
}
