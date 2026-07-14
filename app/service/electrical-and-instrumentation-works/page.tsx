import type { Metadata } from "next";
import ElectricalWorksHero from "@/components/services_group/electrical-and-instrumentation-works/ElectricalWorksHero";
import ElectricalWorksContent from "@/components/services_group/electrical-and-instrumentation-works/ElectricalWorksContent";

export const metadata: Metadata = {
  title: "Electrical & Instrumentation Works | Texas Technical Services",
  description:
    "Installation, maintenance, and optimization of electrical systems and instrumentation equipment for industrial facilities — from design to commissioning.",
  alternates: { canonical: "https://texastechserv.com/services_group/services/electrical-and-instrumentation-works/" },
  openGraph: {
    title: "Electrical & Instrumentation Works | Texas Technical Services",
    description: "Installation, maintenance, and optimization of electrical systems and instrumentation equipment.",
    url: "https://texastechserv.com/services_group/services/electrical-and-instrumentation-works/",
    images: [{ url: "https://texastechserv.com/og-electrical-works.jpg", width: 1200, height: 630, alt: "Electrical & Instrumentation Works — Texas Technical Services" }],
  },
};

export default function ElectricalWorksPage() {
  return (
    <>
      <ElectricalWorksHero />
      <ElectricalWorksContent />
    </>
  );
}
