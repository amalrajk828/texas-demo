import type { Metadata } from "next";
import TensileHero from "@/components/service/tensile-test/TensileHero";
import TensileContent from "@/components/service/tensile-test/TensileContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Tensile Test",
  description:
    "Fundamental tensile testing to determine tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites — conducted to ASTM E8, ISO 6892, and BS EN standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/tensile-test/" },
  openGraph: {
    title: "Tensile Test | Texas Technical Services",
    description: "Tensile strength, yield strength, and ductility testing to ASTM E8, ISO 6892 standards. Metals, plastics, ceramics, composites. Kuwait & Dubai.",
    url: "/service/tensile-test/",
    images: [{ url: "/og-tensile-test.jpg", width: 1200, height: 630, alt: "Tensile Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Tensile Test | Texas Technical Services", description: "Tensile strength, yield strength, ductility testing. ASTM E8, ISO 6892. Kuwait & Dubai." },
  keywords: ["tensile test Kuwait", "tensile strength testing Kuwait", "yield strength test Kuwait", "tensile testing metals Kuwait", "ASTM E8 tensile test Kuwait", "ISO 6892 tensile test Kuwait", "Texas Technical Services tensile test"],
};

export default function TensileTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Tensile Test", href: "/service/tensile-test/" },
]} />
<ServiceJsonLd
  name="Tensile Test"
  description="Fundamental tensile testing to determine tensile strength, yield strength, and ductility of metals, plastics, ceramics, and composites — conducted to ASTM E8, ISO 6892, and BS EN standards in Kuwait and Dubai."
  url="/service/tensile-test/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <TensileHero />
      <TensileContent />
      {/* Contact section — to be added */}
    </>
  );
}
