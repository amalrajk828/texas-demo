import type { Metadata } from "next";
import SteelFabricationHero from "@/components/services_group/steel-fabrication/SteelFabricationHero";
import SteelFabricationContent from "@/components/services_group/steel-fabrication/SteelFabricationContent";

export const metadata: Metadata = {
  title: "Steel Fabrication | Texas Technical Services",
  description:
    "Transforming raw steel into finished structures through cutting, bending, welding, and assembling — skids, pipework, and structural components for industrial applications.",
  alternates: { canonical: "https://texastechserv.com/service/steel-fabrication/" },
  openGraph: {
    title: "Steel Fabrication | Texas Technical Services",
    description: "Cutting, bending, welding, and assembling — skids, pipework, and structural components.",
    url: "https://texastechserv.com/service/steel-fabrication/",
    images: [{ url: "https://texastechserv.com/og-steel-fabrication.jpg", width: 1200, height: 630, alt: "Steel Fabrication — Texas Technical Services" }],
  },
};

export default function SteelFabricationPage() {
  return (
    <>
      <SteelFabricationHero />
      <SteelFabricationContent />
    </>
  );
}
