import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial automation company in Kuwait, UAE, and Saudi Arabia — providing PLC and SCADA system integrator services, process control automation solutions, plant automation, control system upgrades, commissioning, and automation engineering services in Fahaheel for oil & gas, power, and industrial sectors across the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "PLC and SCADA system integrators in Kuwait, UAE, and Saudi Arabia — process control automation solutions, plant automation, and engineering services in Fahaheel and across the GCC.",
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
      "PLC SCADA integration, process & control engineering — serving Kuwait, UAE, Dubai, and Saudi Arabia with industrial automation services.",
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "PLC and SCADA system integrators in Kuwait",
    "process control automation solutions Kuwait",
    "automation and engineering services Fahaheel",
    "industrial automation companies in UAE",
    "automation companies in Dubai",
    "automation companies in Saudi Arabia",
    "PLC SCADA",
    "process & control",
    "automation company",
    "SCADA system",
    "industrial automation Kuwait",
    "PLC programming Kuwait Dubai",
    "SCADA integration Kuwait",
    "HMI development Kuwait",
    "plant automation solutions",
    "control system integration Kuwait",
    "CEMS solutions Kuwait",
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
