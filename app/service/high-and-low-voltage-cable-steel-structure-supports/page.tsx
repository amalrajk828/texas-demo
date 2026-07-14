import type { Metadata } from "next";
import CableSupportsHero from "@/components/services_group/high-and-low-voltage-cable-steel-structure-supports/CableSupportsHero";
import CableSupportsContent from "@/components/services_group/high-and-low-voltage-cable-steel-structure-supports/CableSupportsContent";

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
};

export default function CableSupportsPage() {
  return (
    <>
      <CableSupportsHero />
      <CableSupportsContent />
    </>
  );
}
