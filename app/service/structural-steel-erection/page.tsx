import type { Metadata } from "next";
import SteelErectionHero from "@/components/services_group/structural-steel-erection/SteelErectionHero";
import SteelErectionContent from "@/components/services_group/structural-steel-erection/SteelErectionContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Structural Steel Erection | Texas Technical Services",
  description:
    "Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures — precise, safe, and on schedule.",
  alternates: { canonical: "/service/structural-steel-erection/" },
  openGraph: {
    title: "Structural Steel Erection | Texas Technical Services",
    description: "Pre-fabricated steel component assembly for buildings, bridges, and industrial structures.",
    url: "/service/structural-steel-erection/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Structural Steel Erection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Structural Steel Erection | Texas Technical Services", description: "Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures — precise, safe, and on schedule." },
  keywords: ["Structural Steel Erection Kuwait", "Structural Steel Erection Dubai", "Texas Structural Steel Erection", "industrial steel erection Kuwait", "steel framework assembly Kuwait", "building steel structure Kuwait"],
};

export default function SteelErectionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Structural Steel Erection", href: "/service/structural-steel-erection/" },
]} />
<ServiceJsonLd
  name="Structural Steel Erection"
  description="Pre-fabricated steel component assembly creating skeletal frameworks for buildings, bridges, and large industrial structures — precise, safe, and on schedule."
  url="/service/structural-steel-erection/"
  serviceType="Steel Erection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SteelErectionHero />
      <SteelErectionContent />
    </>
  );
}
