import type { Metadata } from "next";
import AdvancedTrainingHero from "@/components/services_group/advanced-training/AdvancedTrainingHero";
import AdvancedTrainingContent from "@/components/services_group/advanced-training/AdvancedTrainingContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Advanced Training | Texas Technical Services",
  description:
    "On-demand training courses at OEM premises, via videoconferencing, or at customer sites — covering metering installation, commissioning, and operation.",
  alternates: { canonical: "/service/advanced-training/" },
  openGraph: {
    title: "Advanced Training | Texas Technical Services",
    description: "On-demand training courses at OEM premises, via videoconferencing, or at customer sites.",
    url: "/service/advanced-training/",
    images: [{ url: "/og-training.jpg", width: 1200, height: 630, alt: "Advanced Training — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Advanced Training | Texas Technical Services", description: "On-demand training courses at OEM premises, via videoconferencing, or at customer sites — covering metering installation, commissioning, and operation." },
  keywords: ["Advanced Training Kuwait", "Advanced Training Dubai", "Texas Technical Services Advanced Training", "industrial training courses Kuwait", "OEM training Kuwait", "metering training Kuwait"],
};

export default function AdvancedTrainingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Advanced Training", href: "/service/advanced-training/" },
]} />
<ServiceJsonLd
  name="Advanced Training"
  description="On-demand training courses at OEM premises, via videoconferencing, or at customer sites — covering metering installation, commissioning, and operation."
  url="/service/advanced-training/"
  serviceType="Training"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <AdvancedTrainingHero />
      <AdvancedTrainingContent />
    </>
  );
}
