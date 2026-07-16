import type { Metadata } from "next";
import HandRailHero from "@/components/services_group/hand-rail-fabrication/HandRailHero";
import HandRailContent from "@/components/services_group/hand-rail-fabrication/HandRailContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Hand Rail Fabrication | Texas Technical Services",
  description:
    "Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations for industrial and commercial applications.",
  alternates: { canonical: "/service/hand-rail-fabrication/" },
  openGraph: {
    title: "Hand Rail Fabrication | Texas Technical Services",
    description: "Safety handrails and support structures — steel, aluminum, durable materials compliant with safety regulations.",
    url: "/service/hand-rail-fabrication/",
    images: [{ url: "/og-handrail.jpg", width: 1200, height: 630, alt: "Hand Rail Fabrication — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Hand Rail Fabrication | Texas Technical Services", description: "Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations for industrial and commercial applications." },
  keywords: ["Hand Rail Fabrication Kuwait", "Hand Rail Fabrication Dubai", "Texas Technical Services Hand Rail Fabrication", "industrial handrails Kuwait", "safety handrails Kuwait", "steel handrail fabrication Kuwait"],
};

export default function HandRailPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Hand Rail Fabrication", href: "/service/hand-rail-fabrication/" },
]} />
<ServiceJsonLd
  name="Hand Rail Fabrication"
  description="Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations for industrial and commercial applications."
  url="/service/hand-rail-fabrication/"
  serviceType="Fabrication"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <HandRailHero />
      <HandRailContent />
    </>
  );
}
