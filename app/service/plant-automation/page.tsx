import type { Metadata } from "next";
import PlantAutomationHero from "@/components/service/plant-automation/PlantAutomationHero";
import PlantAutomationContent from "@/components/service/plant-automation/PlantAutomationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Process Plant Automation",
  description:
    "Process plant automation solutions that streamline industrial processes — customised automation systems for efficiency, remote monitoring, safety compliance, and ongoing support. Siemens, Allen-Bradley, Schneider, DCS. Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/plant-automation/" },
  openGraph: {
    title: "Process Plant Automation | Texas Technical Services",
    description: "Top-tier plant automation solutions — process optimisation, remote monitoring, and safety. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/plant-automation/",
    images: [{ url: "https://texastechserv.com/og-plant-automation.jpg", width: 1200, height: 630, alt: "Process Plant Automation — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Process Plant Automation | Texas Technical Services", description: "Customised plant automation for efficiency and safety. Kuwait & Dubai." },
  keywords: ["plant automation Kuwait", "process automation Kuwait", "industrial automation Kuwait", "SCADA Kuwait", "DCS Kuwait", "automation systems Kuwait", "Texas Technical Services automation"],
};

export default function PlantAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Process Plant Automation", href: "/service/plant-automation/" },
]} />
<ServiceJsonLd
  name="Process Plant Automation"
  description="Process plant automation solutions that streamline industrial processes — customised automation systems for efficiency, remote monitoring, safety compliance, and ongoing support. Siemens, Allen-Bradley, Schneider, DCS. Kuwait and Dubai."
  url="/service/plant-automation/"
  serviceType="Industrial Automation"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <PlantAutomationHero />
      <PlantAutomationContent />
      {/* Contact section — to be added */}
    </>
  );
}
