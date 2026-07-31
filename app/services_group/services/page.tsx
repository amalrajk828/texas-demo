import type { Metadata } from "next";
import ServiceGroupHero from "@/components/services_group/ServiceGroupHero";
import ServiceGroupGrid from "@/components/services_group/ServiceGroupGrid";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { servicesListingFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "All Industrial Services — Technical Guides",
  description:
    "Browse our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions for oil & gas, refinery, and petrochemical sectors.",
  alternates: { canonical: "/services_group/services/" },
  keywords: [
    "industrial services Kuwait",
    "flow measurement services",
    "inspection and testing services",
    "process automation services",
    "industrial construction services",
  ],
  openGraph: {
    title: "Main Services",
    description: "Complete range of industrial services — flow measurement, inspection & testing, process automation, and construction.",
    url: "/services_group/services/",
    images: [{ url: "/og-services.jpg", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Services",
    description:
      "Browse our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions for oil & gas, refinery, and petrochemical sectors.",
  },
};

export default function ServicesGroupPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "All Services", href: "/services_group/services/" }]} />
      <ServiceGroupHero />
      <ServiceGroupGrid page={1} />
      <FaqPageJsonLd items={servicesListingFaq} />
    </>
  );
}
