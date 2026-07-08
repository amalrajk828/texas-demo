import type { Metadata } from "next";
import HardnessHero from "@/components/service/hardness-test/HardnessHero";
import HardnessContent from "@/components/service/hardness-test/HardnessContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Hardness Test",
  description:
    "Rockwell, Brinell, and Vickers hardness testing for metals, plastics, and ceramics — measuring material resistance to permanent deformation to ASTM E18, E10, E92, ISO 6508, 6506, 6507 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/hardness-test/" },
  openGraph: {
    title: "Hardness Test | Texas Technical Services",
    description: "Rockwell, Brinell, Vickers hardness testing to ASTM and ISO standards. Metals, plastics, ceramics. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/hardness-test/",
    images: [{ url: "https://texastechserv.com/og-hardness-test.jpg", width: 1200, height: 630, alt: "Hardness Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Hardness Test | Texas Technical Services", description: "Rockwell, Brinell, Vickers hardness testing. ASTM & ISO standards. Kuwait & Dubai." },
  keywords: ["hardness test Kuwait", "Rockwell hardness test Kuwait", "Brinell hardness test Kuwait", "Vickers hardness test Kuwait", "hardness testing metals Kuwait", "weld hardness survey Kuwait", "Texas Technical Services hardness test"],
};

export default function HardnessTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Hardness Test", href: "/service/hardness-test/" },
]} />
<ServiceJsonLd
  name="Hardness Test"
  description="Rockwell, Brinell, and Vickers hardness testing for metals, plastics, and ceramics — measuring material resistance to permanent deformation to ASTM E18, E10, E92, ISO 6508, 6506, 6507 standards in Kuwait and Dubai."
  url="/service/hardness-test/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <HardnessHero />
      <HardnessContent />
      {/* Contact section — to be added */}
    </>
  );
}
