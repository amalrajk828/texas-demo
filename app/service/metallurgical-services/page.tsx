import type { Metadata } from "next";
import MetallurgicalHero from "@/components/service/metallurgical-services/MetallurgicalHero";
import MetallurgicalContent from "@/components/service/metallurgical-services/MetallurgicalContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Metallurgical Services — Positive Material Identification (PMI)",
  description:
    "Metallurgical services including Positive Material Identification (PMI) using XRF and OES to verify chemical composition of metals and alloys against standards — material traceability for oil & gas and petrochemical in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/metallurgical-services/" },
  openGraph: {
    title: "Metallurgical Services (PMI) | Texas Technical Services",
    description: "XRF and OES Positive Material Identification for alloy verification and material traceability. API 578. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/metallurgical-services/",
    images: [{ url: "https://texastechserv.com/og-metallurgical-services.jpg", width: 1200, height: 630, alt: "Metallurgical Services PMI — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Metallurgical Services (PMI) | Texas Technical Services", description: "PMI alloy verification and material traceability. API 578. Kuwait & Dubai." },
  keywords: ["PMI Kuwait", "positive material identification Kuwait", "metallurgical services Kuwait", "XRF analysis Kuwait", "alloy verification Kuwait", "material traceability Kuwait", "Texas Technical Services PMI"],
};

export default function MetallurgicalPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Metallurgical Services — Positive Material Identification (PMI)", href: "/service/metallurgical-services/" },
]} />
<ServiceJsonLd
  name="Metallurgical Services — Positive Material Identification (PMI)"
  description="Metallurgical services including Positive Material Identification (PMI) using XRF and OES to verify chemical composition of metals and alloys against standards — material traceability for oil & gas and petrochemical in Kuwait and Dubai."
  url="/service/metallurgical-services/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <MetallurgicalHero />
      <MetallurgicalContent />
      {/* Contact section — to be added */}
    </>
  );
}
