import type { Metadata } from "next";
import AutomationHero from "@/components/service/industrial-automation/AutomationHero";
import AutomationSubServices from "@/components/service/industrial-automation/AutomationSubServices";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial automation company in Kuwait, UAE, and Saudi Arabia — providing industrial automation & control systems, control and automation engineering, PLC and SCADA system integrator services, process control automation solutions, plant automation, automation in manufacturing industry, and control systems and automation for oil & gas, power, and industrial sectors across the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/service/industrial-automation/",
  },
  openGraph: {
    title: "Industrial Automation, PLC SCADA & Process Control | Texas Technical Services",
    description:
      "Industrial automation & control systems, control and automation engineering, and plant and process automation — PLC and SCADA system integrators in Kuwait, UAE, and Saudi Arabia serving manufacturing, power plant, and oil & gas sectors.",
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
      "Industrial automation & control systems, control and automation engineering, plant and process automation, and automation in power plant — serving Kuwait, UAE, Dubai, and Saudi Arabia.",
  },
  keywords: [
    "industrial automation companies in Kuwait",
    "PLC and SCADA system integrators in Kuwait",
    "process control automation solutions Kuwait",
    "automation and engineering services Fahaheel",
    "industrial automation companies in UAE",
    "automation companies in Dubai",
    "automation companies in Saudi Arabia",
    "industrial automation & control systems",
    "industrial automation control system",
    "control and automation engineering",
    "automation in manufacturing industry",
    "automation in the manufacturing industry",
    "control systems and automation",
    "plant and process automation",
    "automation in power plant",
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
