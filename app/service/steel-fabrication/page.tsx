import type { Metadata } from "next";
import SteelFabricationHero from "@/components/services_group/steel-fabrication/SteelFabricationHero";
import SteelFabricationContent from "@/components/services_group/steel-fabrication/SteelFabricationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Steel Fabrication | Texas Technical Services",
  description:
    "Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components for industrial applications.",
  alternates: { canonical: "/service/steel-fabrication/" },
  openGraph: {
    title: "Steel Fabrication | Texas Technical Services",
    description: "Cutting, bending, welding, and assembling — skids, pipework, and structural components.",
    url: "/service/steel-fabrication/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Steel Fabrication — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Steel Fabrication | Texas Technical Services", description: "Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components for industrial applications." },
  keywords: ["Steel Fabrication Kuwait", "Steel Fabrication Dubai", "Texas Technical Services Steel Fabrication", "industrial steel fabrication Kuwait", "steel skids Kuwait", "structural steel components Kuwait"],
};

export default function SteelFabricationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Steel Fabrication", href: "/service/steel-fabrication/" },
]} />
<ServiceJsonLd
  name="Steel Fabrication"
  description="Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components for industrial applications."
  url="/service/steel-fabrication/"
  serviceType="Fabrication"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SteelFabricationHero />
      <SteelFabricationContent />
    </>
  );
}
