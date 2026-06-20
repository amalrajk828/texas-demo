import type { Metadata } from "next";
import ExpertServicesHero from "@/components/service/metering-expert-services/ExpertServicesHero";
import ExpertServicesContent from "@/components/service/metering-expert-services/ExpertServicesContent";

export const metadata: Metadata = {
  title: "Metering Expert Services",
  description:
    "Specialist metering engineering services for on-site assignments, project support, training, and technical secondment — deep custody transfer expertise available in Kuwait, Dubai, and the wider region.",
  alternates: {
    canonical: "https://texastechserv.com/service/metering-expert-services/",
  },
  openGraph: {
    title: "Metering Expert Services | Texas Technical Services",
    description:
      "Specialist metering engineers for on-site assignments, project support, and knowledge transfer. Custody transfer expertise in Kuwait & Dubai.",
    url: "https://texastechserv.com/service/metering-expert-services/",
    images: [
      {
        url: "https://texastechserv.com/og-metering-expert-services.jpg",
        width: 1200,
        height: 630,
        alt: "Metering Expert Services — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metering Expert Services | Texas Technical Services",
    description:
      "Specialist custody transfer metering engineers for on-site assignments and project support. Kuwait & Dubai.",
  },
  keywords: [
    "metering expert Kuwait",
    "custody transfer engineer Kuwait",
    "metering specialist Dubai",
    "flow metering engineer Kuwait",
    "metering project support Kuwait",
    "metering training Kuwait",
    "custody transfer specialist Kuwait",
    "Texas Technical Services metering expert",
  ],
};

export default function MeteringExpertServicesPage() {
  return (
    <>
      <ExpertServicesHero />
      <ExpertServicesContent />
      {/* Contact section — to be added */}
    </>
  );
}
