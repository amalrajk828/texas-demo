import type { Metadata } from "next";
import ControlSystemHero from "@/components/service/system-software-upgrade/ControlSystemHero";
import ControlSystemContent from "@/components/service/system-software-upgrade/ControlSystemContent";

export const metadata: Metadata = {
  title: "Control System Integration and Upgradation",
  description:
    "PLC and SCADA-based automation and system integration — multi-brand PLC programming, SCADA development, HMI design, legacy system upgrades, and MIS reporting for industrial operations in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/system-software-upgrade/" },
  openGraph: {
    title: "Control System Integration & Upgradation | Texas Technical Services",
    description: "PLC and SCADA automation, system integration, and legacy upgrades. Siemens, Allen-Bradley, Schneider. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/system-software-upgrade/",
    images: [{ url: "https://texastechserv.com/og-control-system.jpg", width: 1200, height: 630, alt: "Control System Integration — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Control System Integration & Upgradation | Texas Technical Services", description: "PLC, SCADA, and control system integration. Kuwait & Dubai." },
  keywords: ["PLC integration Kuwait", "SCADA Kuwait", "control system upgrade Kuwait", "automation integration Kuwait", "Siemens PLC Kuwait", "Allen-Bradley Kuwait", "SCADA system Kuwait", "Texas Technical Services PLC"],
};

export default function ControlSystemPage() {
  return (
    <>
      <ControlSystemHero />
      <ControlSystemContent />
      {/* Contact section — to be added */}
    </>
  );
}
