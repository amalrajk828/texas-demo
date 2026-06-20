import type { Metadata } from "next";
import AuditsHero from "@/components/service/audits-specialized-consultancy/AuditsHero";
import AuditsContent from "@/components/service/audits-specialized-consultancy/AuditsContent";

export const metadata: Metadata = {
  title: "Audits and Specialized Consultancy",
  description:
    "Comprehensive custody metering skid audits, compliance assessments, process optimization, and specialized consultancy services — ensuring accuracy, regulatory conformity, and operational excellence in Kuwait and Dubai.",
  alternates: {
    canonical: "https://texastechserv.com/service/audits-specialized-consultancy/",
  },
  openGraph: {
    title: "Audits and Specialized Consultancy | Texas Technical Services",
    description:
      "Custody metering audits, compliance assessments, and expert consultancy for process optimization — API, AGA, ISO, OIML standards. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/audits-specialized-consultancy/",
    images: [
      {
        url: "https://texastechserv.com/og-audits-consultancy.jpg",
        width: 1200,
        height: 630,
        alt: "Audits and Specialized Consultancy — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audits and Specialized Consultancy | Texas Technical Services",
    description:
      "Custody metering audits, compliance assessments, and specialized consultancy. API, AGA, ISO, OIML standards. Kuwait & Dubai.",
  },
  keywords: [
    "custody metering audit Kuwait",
    "metering compliance assessment Kuwait",
    "custody transfer consultancy Kuwait",
    "metering skid audit Kuwait",
    "API MPMS compliance Kuwait",
    "metering process optimization Kuwait",
    "specialized metering consultancy Dubai",
    "Texas Technical Services metering audit",
  ],
};

export default function AuditsSpecializedConsultancyPage() {
  return (
    <>
      <AuditsHero />
      <AuditsContent />
      {/* Contact section — to be added */}
    </>
  );
}
