import type { Metadata } from "next";
import SteelErectionHero from "@/components/services_group/structural-steel-erection/SteelErectionHero";
import SteelErectionContent from "@/components/services_group/structural-steel-erection/SteelErectionContent";

export const metadata: Metadata = {
  title: "Structural Steel Erection | Texas Technical Services",
  description:
    "Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures — precise, safe, and on schedule.",
  alternates: { canonical: "/service/structural-steel-erection/" },
  openGraph: {
    title: "Structural Steel Erection | Texas Technical Services",
    description: "Pre-fabricated steel component assembly for buildings, bridges, and industrial structures.",
    url: "/service/structural-steel-erection/",
    images: [{ url: "/og-steel-erection.jpg", width: 1200, height: 630, alt: "Structural Steel Erection — Texas Technical Services" }],
  },
};

export default function SteelErectionPage() {
  return (
    <>
      <SteelErectionHero />
      <SteelErectionContent />
    </>
  );
}
