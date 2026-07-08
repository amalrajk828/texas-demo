import type { Metadata } from "next";
import GammaRayHero from "@/components/service/gamma-ray-pipe-crawler-inspection-systems/GammaRayHero";
import GammaRayContent from "@/components/service/gamma-ray-pipe-crawler-inspection-systems/GammaRayContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Gamma Ray Pipe Crawler Inspection Systems",
  description:
    "Gamma ray and X-ray pipe crawler inspection — battery-powered remote-controlled mobile radiographic machine producing SWSI radiographs of circumferential pipeline welds to ASME V, API 1104 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/gamma-ray-pipe-crawler-inspection-systems/" },
  openGraph: {
    title: "Gamma Ray Pipe Crawler Inspection | Texas Technical Services",
    description: "Remote-controlled radiographic pipe crawler for circumferential weld SWSI inspection. ASME V, API 1104. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/gamma-ray-pipe-crawler-inspection-systems/",
    images: [{ url: "https://texastechserv.com/og-gamma-ray-crawler.jpg", width: 1200, height: 630, alt: "Gamma Ray Pipe Crawler — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Gamma Ray Pipe Crawler Inspection | Texas Technical Services", description: "Pipeline circumferential weld radiography. ASME V, API 1104. Kuwait & Dubai." },
  keywords: ["gamma ray pipe crawler Kuwait", "pipeline radiography Kuwait", "pipe crawler inspection Kuwait", "SWSI radiography Kuwait", "circumferential weld inspection Kuwait", "Texas Technical Services pipe crawler"],
};

export default function GammaRayPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Gamma Ray Pipe Crawler Inspection Systems", href: "/service/gamma-ray-pipe-crawler-inspection-systems/" },
]} />
<ServiceJsonLd
  name="Gamma Ray Pipe Crawler Inspection Systems"
  description="Gamma ray and X-ray pipe crawler inspection — battery-powered remote-controlled mobile radiographic machine producing SWSI radiographs of circumferential pipeline welds to ASME V, API 1104 standards in Kuwait and Dubai."
  url="/service/gamma-ray-pipe-crawler-inspection-systems/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <GammaRayHero />
      <GammaRayContent />
      {/* Contact section — to be added */}
    </>
  );
}
