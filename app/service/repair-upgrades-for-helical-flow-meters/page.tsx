import type { Metadata } from "next";
import HelicalHero from "@/components/service/repair-upgrades-for-helical-flow-meters/HelicalHero";
import HelicalContent from "@/components/service/repair-upgrades-for-helical-flow-meters/HelicalContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Repair & Upgrades for Helical Flow Meters",
  description:
    "Authorised Faure Herman OEM Representative providing preventive and corrective maintenance, performance analysis, failure investigation, and repair services for helical flow meters in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/repair-upgrades-for-helical-flow-meters/",
  },
  openGraph: {
    title: "Repair & Upgrades for Helical Flow Meters | Texas Technical Services",
    description:
      "Expert preventive and corrective maintenance, performance analysis, and repair for Faure Herman helical flow meters. Authorised OEM Representative — Kuwait & Dubai.",
    url: "/service/repair-upgrades-for-helical-flow-meters/",
    images: [
      {
        url: "/og-helical-flow-meter-repair.jpg",
        width: 1200,
        height: 630,
        alt: "Repair & Upgrades for Helical Flow Meters — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repair & Upgrades for Helical Flow Meters | Texas Technical Services",
    description:
      "Faure Herman authorised OEM maintenance and repair for helical flow meters — preventive, corrective, and failure analysis. Kuwait & Dubai.",
  },
  keywords: [
    "helical flow meter repair Kuwait",
    "Faure Herman flow meter repair",
    "helical flow meter maintenance Kuwait",
    "flow meter corrective maintenance Kuwait",
    "flow meter preventive maintenance Kuwait",
    "Faure Herman OEM representative Kuwait",
    "helical flow meter upgrade Kuwait",
    "Texas Technical Services flow meter repair",
  ],
};

export default function RepairUpgradesHelicalPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Repair & Upgrades for Helical Flow Meters", href: "/service/repair-upgrades-for-helical-flow-meters/" },
]} />
<ServiceJsonLd
  name="Repair & Upgrades for Helical Flow Meters"
  description="Authorised Faure Herman OEM Representative providing preventive and corrective maintenance, performance analysis, failure investigation, and repair services for helical flow meters in Kuwait and Dubai."
  url="/service/repair-upgrades-for-helical-flow-meters/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <HelicalHero />
      <HelicalContent />
      {/* Contact section — to be added */}
    </>
  );
}
