import type { Metadata } from "next";
import ServiceGroupHero from "@/components/services_group/ServiceGroupHero";
import ServiceGroupGrid from "@/components/services_group/ServiceGroupGrid";

export const metadata: Metadata = {
  title: "Main Services | Texas Technical Services",
  description:
    "Browse our complete range of industrial services — flow measurement, inspection & testing, process automation, and construction solutions for oil & gas, refinery, and petrochemical sectors.",
  alternates: { canonical: "https://texastechserv.com/services_group/services/" },
  openGraph: {
    title: "Main Services | Texas Technical Services",
    description: "Complete range of industrial services — flow measurement, inspection & testing, process automation, and construction.",
    url: "https://texastechserv.com/services_group/services/",
    images: [{ url: "https://texastechserv.com/og-services.jpg", width: 1200, height: 630, alt: "Texas Technical Services" }],
  },
};

export default function ServicesGroupPage() {
  return (
    <>
      <ServiceGroupHero />
      <ServiceGroupGrid page={1} />
    </>
  );
}
