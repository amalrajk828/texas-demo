import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  description:
    "Texas Technical Services Co. (TTS) is a leading automation company providing total industrial automation solutions — PLC SCADA integration, SCADA system development, HMI, process & control engineering, plant automation, control system upgrades, and commissioning for oil & gas, power, and industrial sectors in Kuwait and the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "Multi-brand PLC SCADA integration, process & control engineering, HMI development, plant automation, control system upgrades, legacy migration, and commissioning services.",
    url: "https://texastechserv.com/service/industrial-automation/",
    images: [
      {
        url: "https://texastechserv.com/og-industrial-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Automation, PLC SCADA & Process Control — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "PLC SCADA integration, process & control engineering, HMI development, plant automation, system upgrades, commissioning, and CEMS solutions for oil & gas and industrial sectors.",
  },
  keywords: [
    "industrial automation Kuwait",
    "PLC SCADA",
    "process & control",
    "automation company",
    "SCADA system",
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
