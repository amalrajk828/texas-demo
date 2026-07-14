import type { Metadata } from "next";
import NewInstallationHero from "@/components/services_group/new-installation-design-and-commissioning/NewInstallationHero";
import NewInstallationContent from "@/components/services_group/new-installation-design-and-commissioning/NewInstallationContent";

export const metadata: Metadata = {
  title: "New Installation Design and Commissioning | Texas Technical Services",
  description:
    "As authorized OEM Representative, we assist in specification, design, sizing and operation of future metering systems — general arrangement, P&ID, electrical SLD, cable schedule, instrument index.",
  alternates: { canonical: "/service/new-installation-design-and-commissioning/" },
  openGraph: {
    title: "New Installation Design and Commissioning | Texas Technical Services",
    description: "Authorized OEM Representative — specification, design, sizing and operation of future metering systems.",
    url: "/service/new-installation-design-and-commissioning/",
    images: [{ url: "/og-new-installation.jpg", width: 1200, height: 630, alt: "New Installation Design and Commissioning — Texas Technical Services" }],
  },
};

export default function NewInstallationPage() {
  return (
    <>
      <NewInstallationHero />
      <NewInstallationContent />
    </>
  );
}
