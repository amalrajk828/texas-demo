import type { Metadata } from "next";
import AirPermeabilityHero from "@/components/service/air-permeability-test/AirPermeabilityHero";
import AirPermeabilityContent from "@/components/service/air-permeability-test/AirPermeabilityContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Air Permeability Test | Texas Technical Services",
  description:
    "Air permeability testing for exterior windows, doors, and curtain walls to measure air infiltration and locate leakage paths — per ASTM E783, ASTM E283, EN 12207 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/air-permeability-test-2/" },
  openGraph: {
    title: "Air Permeability Test | Texas Technical Services",
    description: "Air infiltration testing for windows, doors, and curtain walls. ASTM E783, EN 12207. Kuwait & Dubai.",
    url: "/service/air-permeability-test-2/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Air Permeability Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Air Permeability Test | Texas Technical Services", description: "Air infiltration testing for facades. ASTM E783. Kuwait & Dubai." },
  keywords: ["air permeability test Kuwait", "air leakage test Kuwait", "curtain wall air test Kuwait", "ASTM E783 Kuwait", "window air infiltration Kuwait", "building envelope air test Kuwait", "Texas Technical Services air test"],
};

export default function AirPermeabilityPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Air Permeability Test", href: "/service/air-permeability-test-2/" },
]} />
<ServiceJsonLd
  name="Air Permeability Test"
  description="Air permeability testing for exterior windows, doors, and curtain walls to measure air infiltration and locate leakage paths — per ASTM E783, ASTM E283, EN 12207 standards in Kuwait and Dubai."
  url="/service/air-permeability-test-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <AirPermeabilityHero />
      <AirPermeabilityContent />
    </>
  );
}
