import type { Metadata } from "next";
import SparePartsHero from "@/components/service/genuine-spare-parts/SparePartsHero";
import SparePartsContent from "@/components/service/genuine-spare-parts/SparePartsContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Genuine Spare Parts",
  description:
    "Genuine OEM spare parts for Faure Herman helical flow meters and associated metering equipment — authentic, traceable, and quality-certified. Authorised Faure Herman OEM Representative in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/genuine-spare-parts/",
  },
  openGraph: {
    title: "Genuine Spare Parts | Texas Technical Services",
    description:
      "Genuine Faure Herman OEM spare parts for helical flow meters — authentic, traceable, quality-certified. Authorised representative in Kuwait & Dubai.",
    url: "https://texastechserv.com/service/genuine-spare-parts/",
    images: [
      {
        url: "https://texastechserv.com/og-genuine-spare-parts.jpg",
        width: 1200,
        height: 630,
        alt: "Genuine Spare Parts — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genuine Spare Parts | Texas Technical Services",
    description:
      "Genuine Faure Herman OEM spare parts for helical flow meters. Authorised representative — Kuwait & Dubai.",
  },
  keywords: [
    "Faure Herman spare parts Kuwait",
    "helical flow meter spare parts Kuwait",
    "genuine OEM flow meter parts Kuwait",
    "flow meter parts supplier Kuwait",
    "Faure Herman OEM parts Dubai",
    "flow meter rotor bearings Kuwait",
    "metering equipment spare parts Kuwait",
    "Texas Technical Services spare parts",
  ],
};

export default function GenuineSpareParts() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Genuine Spare Parts", href: "/service/genuine-spare-parts/" },
]} />
<ServiceJsonLd
  name="Genuine Spare Parts"
  description="Genuine OEM spare parts for Faure Herman helical flow meters and associated metering equipment — authentic, traceable, and quality-certified. Authorised Faure Herman OEM Representative in Kuwait and Dubai."
  url="/service/genuine-spare-parts/"
  serviceType="Commissioning"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SparePartsHero />
      <SparePartsContent />
      {/* Contact section — to be added */}
    </>
  );
}
