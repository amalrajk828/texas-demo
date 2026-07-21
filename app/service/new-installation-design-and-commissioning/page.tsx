import type { Metadata } from "next";
import NewInstallationHero from "@/components/services_group/new-installation-design-and-commissioning/NewInstallationHero";
import NewInstallationContent from "@/components/services_group/new-installation-design-and-commissioning/NewInstallationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "New Installation Design and Commissioning | Texas Technical Services",
  description:
    "As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems — general arrangement, P&ID, electrical SLD, cable schedule, instrument index.",
  alternates: { canonical: "/service/new-installation-design-and-commissioning/" },
  openGraph: {
    title: "New Installation Design and Commissioning | Texas Technical Services",
    description: "Authorized OEM Representative — specification, design, sizing and operation of future metering systems.",
    url: "/service/new-installation-design-and-commissioning/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "New Installation Design and Commissioning — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "New Installation Design and Commissioning | Texas Technical Services", description: "As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems — general arrangement, P&ID, electrical SLD, cable schedule, instrument index." },
  keywords: ["New Installation Design Kuwait", "New Installation Design Dubai", "Texas Technical Services Installation Design", "metering system design Kuwait", "commissioning services Kuwait", "OEM installation Kuwait"],
};

export default function NewInstallationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "New Installation Design and Commissioning", href: "/service/new-installation-design-and-commissioning/" },
]} />
<ServiceJsonLd
  name="New Installation Design and Commissioning"
  description="As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems — general arrangement, P&ID, electrical SLD, cable schedule, instrument index."
  url="/service/new-installation-design-and-commissioning/"
  serviceType="Installation & Commissioning"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <NewInstallationHero />
      <NewInstallationContent />
    </>
  );
}
