import type { Metadata } from "next";
import FlowComputerHero from "@/components/service/flow-computer-configuration/FlowComputerHero";
import FlowComputerContent from "@/components/service/flow-computer-configuration/FlowComputerContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Flow Computer Configuration",
  description:
    "Texas Technical Services (TTS) provides expert flow computer configuration services in compliance with API MPMS, AGA, ISO, NTEP & OIML standards — custom programming, multi-stream setup, SCADA integration, commissioning, and on-site validation for custody transfer applications in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/flow-computer-configuration/",
  },
  openGraph: {
    title: "Flow Computer Configuration | Texas Technical Services",
    description:
      "Custom flow computer configuration compliant with API MPMS, AGA, ISO, NTEP & OIML — liquid & gas custody transfer, SCADA integration, commissioning support. Authorised OEM representative.",
    url: "https://texastechserv.com/service/flow-computer-configuration/",
    images: [
      {
        url: "https://texastechserv.com/og-flow-computer-configuration.jpg",
        width: 1200,
        height: 630,
        alt: "Flow Computer Configuration — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Computer Configuration | Texas Technical Services",
    description:
      "Flow computer configuration to API MPMS, AGA, ISO, NTEP & OIML standards — custody transfer, SCADA integration, commissioning in Kuwait & Dubai.",
  },
  keywords: [
    "flow computer configuration Kuwait",
    "API MPMS flow computer Kuwait",
    "AGA flow computer configuration",
    "OIML flow computer Kuwait",
    "custody transfer flow computer",
    "flow computer commissioning Kuwait",
    "flow computer SCADA integration",
    "Emerson FloBoss configuration Kuwait",
    "Texas Technical Services flow computer",
  ],
};

export default function FlowComputerConfigurationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Flow Computer Configuration", href: "/service/flow-computer-configuration/" },
]} />
<ServiceJsonLd
  name="Flow Computer Configuration"
  description="Texas Technical Services (TTS) provides expert flow computer configuration services in compliance with API MPMS, AGA, ISO, NTEP & OIML standards — custom programming, multi-stream setup, SCADA integration, commissioning, and on-site validation for custody transfer applications in Kuwait and Dubai."
  url="/service/flow-computer-configuration/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <FlowComputerHero />
      <FlowComputerContent />
      {/* Contact section — to be added */}
    </>
  );
}
