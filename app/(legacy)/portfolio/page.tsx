import type { Metadata } from "next";
import PortfolioClient from "./_components/PortfolioClient";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { productsListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description:
    "Explore our complete lineup of industrial automation hardware, software, and sensors from SICK, Mitsubishi Electric, Faure Herman, and ICONICS.",
  keywords: [
    "industrial products",
    "automation hardware",
    "PLC",
    "sensors",
    "flow meters",
    "frequency inverters",
    "AC servos",
    "HMI",
    "SCADA",
  ],
  alternates: { canonical: "/portfolio/" },
  openGraph: {
    title: "Product Portfolio",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
    url: "/portfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Portfolio",
    description:
      "Explore our complete lineup of industrial automation hardware, software, and sensors.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio/" }]} />
      <FaqPageJsonLd items={productsListingFaq} />
      <SpeakableJsonLd headline="Product Portfolio — Industrial Automation Hardware & Sensors" />
      <PortfolioClient />
    </>
  );
}
