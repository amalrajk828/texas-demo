import type { Metadata } from "next";
import CableSupportsHero from "@/components/services_group/high-and-low-voltage-cable-steel-structure-supports/CableSupportsHero";
import CableSupportsContent from "@/components/services_group/high-and-low-voltage-cable-steel-structure-supports/CableSupportsContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "High and Low Voltage Cable Steel Structure Supports | Texas Technical Services",
  description:
    "Design, fabrication, and erection of high and low voltage cable support structures, pathways, and steel structural supports for industrial electrical infrastructure.",
  alternates: { canonical: "/service/high-and-low-voltage-cable-steel-structure-supports/" },
  openGraph: {
    title: "Cable Steel Structure Supports | Texas Technical Services",
    description: "Design, fabrication, and erection of cable support structures, pathways, and steel structural supports.",
    url: "/service/high-and-low-voltage-cable-steel-structure-supports/",
    images: [{ url: "/og-cable-supports.jpg", width: 1200, height: 630, alt: "Cable Steel Structure Supports — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "High and Low Voltage Cable Steel Structure Supports | Texas Technical Services", description: "Design, fabrication, and erection of high and low voltage cable support structures, pathways, and steel structural supports for industrial electrical infrastructure." },
  keywords: ["Cable Steel Structure Supports Kuwait", "Cable Steel Structure Supports Dubai", "Texas Technical Services Cable Supports", "industrial cable supports Kuwait", "voltage cable structure Kuwait", "steel cable pathway Kuwait"],
};

export default function CableSupportsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "High and Low Voltage Cable Steel Structure Supports", href: "/service/high-and-low-voltage-cable-steel-structure-supports/" },
]} />
<ServiceJsonLd
  name="High and Low Voltage Cable Steel Structure Supports"
  description="Design, fabrication, and erection of high and low voltage cable support structures, pathways, and steel structural supports for industrial electrical infrastructure."
  url="/service/high-and-low-voltage-cable-steel-structure-supports/"
  serviceType="Steel Structure Supports"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <CableSupportsHero />
      <CableSupportsContent />
    </>
  );
}
