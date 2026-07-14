import type { Metadata } from "next";
import MechanicalHero from "@/components/service/mechanical-testing/MechanicalHero";
import MechanicalSubServices from "@/components/service/mechanical-testing/MechanicalSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Mechanical Testing Services",
  description:
    "Comprehensive mechanical testing services for metals, plastics, ceramics, and composites — tensile testing, hardness testing, impact testing, bend testing, fracture toughness, and macro/micro examination in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/services_group/services/inspection-testing/mechanical-testing/",
  },
  openGraph: {
    title: "Mechanical Testing Services | Texas Technical Services",
    description:
      "Tensile, hardness, impact, bend, fracture toughness, and macro/micro testing for metals, plastics, ceramics, and composites. Kuwait & Dubai.",
    url: "https://texastechserv.com/services_group/services/inspection-testing/mechanical-testing/",
    images: [{ url: "https://texastechserv.com/og-mechanical-testing.jpg", width: 1200, height: 630, alt: "Mechanical Testing — Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanical Testing Services | Texas Technical Services",
    description: "Tensile, hardness, impact, bend, fracture, and macro/micro testing. Kuwait & Dubai.",
  },
  keywords: [
    "mechanical testing Kuwait",
    "tensile testing Kuwait",
    "hardness testing Kuwait",
    "impact testing Kuwait",
    "bend testing Kuwait",
    "fracture toughness testing Kuwait",
    "mechanical testing Dubai",
    "Texas Technical Services mechanical testing",
  ],
};

export default function MechanicalTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" },
  { name: "Mechanical Testing Services", href: "/services_group/services/inspection-testing/mechanical-testing/" },
]} />
<ServiceJsonLd
  name="Mechanical Testing Services"
  description="Comprehensive mechanical testing services for metals, plastics, ceramics, and composites — tensile testing, hardness testing, impact testing, bend testing, fracture toughness, and macro/micro examination in Kuwait and Dubai."
  url="/services_group/services/inspection-testing/mechanical-testing/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <MechanicalHero />
      <MechanicalSubServices />
    </>
  );
}
