import type { Metadata } from "next";
import McsiHero from "@/components/service/metering-control-system-integration/McsiHero";
import McsiServices from "@/components/service/metering-control-system-integration/McsiServices";
import McsiWhyUs from "@/components/service/metering-control-system-integration/McsiWhyUs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Metering Control System Integration",
  description:
    "Texas Technical Services (TTS) specializes in Custody Transfer Flow Metering Control System Development and Integration — SCADA, PLC, HMI, server configuration, and full system integration for precise, compliant custody transfer operations.",
  alternates: {
    canonical: "/service/metering-control-system-integration/",
  },
  openGraph: {
    title: "Metering Control System Integration | Texas Technical Services",
    description:
      "Custody transfer flow metering control system development, SCADA & PLC integration, HMI configuration, and IT/OT cybersecurity — authorised OEM representative.",
    url: "/service/metering-control-system-integration/",
    images: [
      {
        url: "/og-metering-control-system-integration.jpg",
        width: 1200,
        height: 630,
        alt: "Metering Control System Integration — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metering Control System Integration | Texas Technical Services",
    description:
      "Custody transfer flow metering control system development, SCADA, PLC, HMI integration — authorised OEM representative in Kuwait & Dubai.",
  },
  keywords: [
    "metering control system integration Kuwait",
    "custody transfer flow metering Kuwait",
    "SCADA PLC integration Kuwait",
    "flow metering control system development",
    "HMI configuration Kuwait",
    "custody transfer automation Kuwait",
    "metering system integration Dubai",
    "Texas Technical Services metering",
  ],
};

import { WhatWeDoSection } from "@/components/service/common/WhatWeDoSection";

export default function McsiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services/" },
        { name: "Metering Control System Integration", href: "/service/metering-control-system-integration/" },
      ]} />
      <ServiceJsonLd
        name="Metering Control System Integration"
        description="Texas Technical Services (TTS) specializes in Custody Transfer Flow Metering Control System Development and Integration — SCADA, PLC, HMI, server configuration, and full system integration for precise, compliant custody transfer operations."
        url="/service/metering-control-system-integration/"
        serviceType="Flow Measurement"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <McsiHero />
      <WhatWeDoSection
        label="WHAT WE DO"
        heading="Custody Transfer Flow Metering Control System Development & Integration"
        paragraphs={[
          "At Texas Technical Services Co. (TTS), we specialize in Custody Transfer Flow Metering Control System Development and Integration. With an unwavering commitment to precision, accuracy, and compliance, we are your trusted partner for optimizing and enhancing your custody transfer operations.",
          "Our engineering team brings together flow computers, SCADA systems, PLCs, servers, workstations, and HMI interfaces into a unified, high-integrity control architecture that complies with international metering standards.",
        ]}
        checklist={[
          "Custody Transfer Metering",
          "SCADA & PLC Integration",
          "Server & HMI Configuration",
          "IT/OT Cybersecurity",
          "Authorised OEM Representative",
          "24/7 Technical Support",
        ]}
        imageSrc="/images/services/metering-control-integration.png"
        imageAlt="Custody transfer flow metering control system integration by Texas Technical Services"
        badgeTitle="AUTHORISED OEM"
        badgeSubtitle="Faure Herman Representative"
        buttonText="Get More Information"
        buttonHref="#contact"
      />
      <McsiServices />
      <McsiWhyUs />
    </>
  );
}
