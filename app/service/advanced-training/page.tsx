import type { Metadata } from "next";
import AdvancedTrainingHero from "@/components/services_group/advanced-training/AdvancedTrainingHero";
import AdvancedTrainingContent from "@/components/services_group/advanced-training/AdvancedTrainingContent";

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
};

export default function AdvancedTrainingPage() {
  return (
    <>
      <AdvancedTrainingHero />
      <AdvancedTrainingContent />
    </>
  );
}
