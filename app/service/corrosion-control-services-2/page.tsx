import type { Metadata } from "next";
import CorrosionControlHero from "@/components/service/corrosion-control-services-2/CorrosionControlHero";
import CorrosionControlContent from "@/components/service/corrosion-control-services-2/CorrosionControlContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Corrosion Control Services | Texas Technical Services",
  description:
    "Corrosion control services including protective coatings, cathodic protection, corrosion assessment, and management plans for oil & gas, marine, construction, and manufacturing industries — Kuwait and Dubai.",
  alternates: { canonical: "/service/corrosion-control-services-2/" },
  openGraph: {
    title: "Corrosion Control Services | Texas Technical Services",
    description: "Protective coatings, cathodic protection, and corrosion management for industrial assets. Kuwait & Dubai.",
    url: "/service/corrosion-control-services-2/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Corrosion Control Services — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Corrosion Control Services | Texas Technical Services", description: "Coatings, cathodic protection, and corrosion management. Kuwait & Dubai." },
  keywords: ["corrosion control Kuwait", "cathodic protection Kuwait", "protective coatings Kuwait", "corrosion management Kuwait", "pipeline corrosion Kuwait", "Texas Technical Services corrosion"],
};

export default function CorrosionControlPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Corrosion Control Services", href: "/service/corrosion-control-services-2/" },
]} />
<ServiceJsonLd
  name="Corrosion Control Services"
  description="Corrosion control services including protective coatings, cathodic protection, corrosion assessment, and management plans for oil & gas, marine, construction, and manufacturing industries — Kuwait and Dubai."
  url="/service/corrosion-control-services-2/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <CorrosionControlHero />
      <CorrosionControlContent />
      {/* Contact section — to be added */}
    </>
  );
}
