import type { Metadata } from "next";
import UpgradeHero from "@/components/service/upgrade-of-metering-control-system/UpgradeHero";
import UpgradeServices from "@/components/service/upgrade-of-metering-control-system/UpgradeServices";
import UpgradeWhyUs from "@/components/service/upgrade-of-metering-control-system/UpgradeWhyUs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Upgrade of Metering Control System",
  description:
    "Texas Technical Services (TTS) specializes in Metering Control System upgradation — comprehensive assessment, tailored upgrade plans, SCADA & PLC enhancements, Flow Computer integration, and seamless data management for custody transfer operations in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/upgrade-of-metering-control-system/",
  },
  openGraph: {
    title: "Upgrade of Metering Control System | Texas Technical Services",
    description:
      "Cost-effective metering control system upgrades — SCADA, PLC, Flow Computer & HMI integration, comprehensive system assessment, and minimal disruption delivery. Authorised OEM representative.",
    url: "/service/upgrade-of-metering-control-system/",
    images: [
      {
        url: "/og-upgrade-metering-control-system.jpg",
        width: 1200,
        height: 630,
        alt: "Upgrade of Metering Control System — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrade of Metering Control System | Texas Technical Services",
    description:
      "Metering control system upgrades — SCADA, PLC, Flow Computer, HMI integration. Cost-effective, minimal disruption, authorised OEM representative in Kuwait & Dubai.",
  },
  keywords: [
    "metering control system upgrade Kuwait",
    "SCADA upgrade Kuwait",
    "PLC upgrade Kuwait",
    "flow computer upgrade Kuwait",
    "metering system modernisation",
    "custody transfer system upgrade",
    "legacy control system upgrade Kuwait",
    "HMI upgrade Kuwait Dubai",
    "Texas Technical Services upgrade",
  ],
};

export default function UpgradeMeteringPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Upgrade of Metering Control System", href: "/service/upgrade-of-metering-control-system/" },
]} />
<ServiceJsonLd
  name="Upgrade of Metering Control System"
  description="Texas Technical Services (TTS) specializes in Metering Control System upgradation — comprehensive assessment, tailored upgrade plans, SCADA & PLC enhancements, Flow Computer integration, and seamless data management for custody transfer operations in Kuwait and Dubai."
  url="/service/upgrade-of-metering-control-system/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <UpgradeHero />
      <UpgradeServices />
      <UpgradeWhyUs />
      {/* Contact section — to be added */}
    </>
  );
}
