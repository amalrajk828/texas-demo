import type { Metadata } from "next";
import ElectricalWorksHero from "@/components/services_group/electrical-instrumentation-works/ElectricalWorksHero";
import ElectricalWorksContent from "@/components/services_group/electrical-instrumentation-works/ElectricalWorksContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Electrical & Instrumentation Works | Texas Technical Services",
  description:
    "Installation, maintenance, and optimization of electrical systems and instrumentation equipment for industrial facilities — from design to commissioning.",
  alternates: { canonical: "/service/electrical-instrumentation-works/" },
  openGraph: {
    title: "Electrical & Instrumentation Works | Texas Technical Services",
    description: "Installation, maintenance, and optimization of electrical systems and instrumentation equipment.",
    url: "/service/electrical-instrumentation-works/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Electrical & Instrumentation Works — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Electrical & Instrumentation Works | Texas Technical Services", description: "Installation, maintenance, and optimization of electrical systems and instrumentation equipment for industrial facilities — from design to commissioning." },
  keywords: ["Electrical & Instrumentation Works Kuwait", "Electrical & Instrumentation Works Dubai", "Texas Technical Services Electrical Works", "industrial electrical systems Kuwait", "instrumentation installation Kuwait", "electrical maintenance Kuwait"],
};

export default function ElectricalWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Electrical & Instrumentation Works", href: "/service/electrical-instrumentation-works/" },
]} />
<ServiceJsonLd
  name="Electrical & Instrumentation Works"
  description="Installation, maintenance, and optimization of electrical systems and instrumentation equipment for industrial facilities — from design to commissioning."
  url="/service/electrical-instrumentation-works/"
  serviceType="Electrical & Instrumentation"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <ElectricalWorksHero />
      <ElectricalWorksContent />
    </>
  );
}
