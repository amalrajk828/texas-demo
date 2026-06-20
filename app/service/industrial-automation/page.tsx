import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";

export const metadata: Metadata = {
  title: "Industrial Process Automation Solutions",
  description:
    "Texas Technical Services Co. (TTS) provides total industrial automation solutions — PLC programming, SCADA integration, HMI development, plant automation, control system upgrades, commissioning support, and custom software solutions for oil & gas, power, and industrial sectors.",
  alternates: {
    canonical: "https://texastechserv.com/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Process Automation Solutions | Texas Technical Services",
    description:
      "Multi-brand PLC, SCADA & HMI automation — plant automation, control system integration & upgrades, legacy migration, commissioning, and custom reporting software.",
    url: "https://texastechserv.com/service/industrial-automation/",
    images: [
      {
        url: "https://texastechserv.com/og-industrial-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Process Automation Solutions — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Process Automation Solutions | Texas Technical Services",
    description:
      "PLC, SCADA, HMI integration — plant automation, system upgrades, commissioning support, and CEMS solutions for oil & gas and industrial sectors.",
  },
  keywords: [
    "industrial automation Kuwait",
    "PLC programming Kuwait Dubai",
    "SCADA integration Kuwait",
    "HMI development Kuwait",
    "plant automation solutions",
    "control system integration Kuwait",
    "SCADA upgrade legacy system",
    "commissioning industrial automation",
    "CEMS solutions Kuwait",
    "Texas Technical Services automation",
  ],
};

export default function IndustrialAutomationPage() {
  return (
    <>
      <AutomationHero />
      <AutomationSubServices />
      {/* Contact section — to be added */}
    </>
  );
}
