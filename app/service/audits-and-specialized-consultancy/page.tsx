import type { Metadata } from "next";
import AuditsHero from "@/components/service/audits-and-specialized-consultancy/AuditsHero";
import AuditsContent from "@/components/service/audits-and-specialized-consultancy/AuditsContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Audits and Specialized Consultancy | Texas Technical Services",
  description:
    "Comprehensive custody metering skid audits, compliance assessments, process optimization, and specialized consultancy services — ensuring accuracy, regulatory conformity, and operational excellence in Kuwait and Dubai.",
  alternates: {
    canonical: "/service/audits-and-specialized-consultancy/",
  },
  openGraph: {
    title: "Audits and Specialized Consultancy | Texas Technical Services",
    description:
      "Custody metering audits, compliance assessments, and expert consultancy for process optimization — API, AGA, ISO, OIML standards. Kuwait & Dubai.",
    url: "/service/audits-and-specialized-consultancy/",
    images: [
      {
        url: "/og-default.png",
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
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Audits and Specialized Consultancy", href: "/service/audits-and-specialized-consultancy/" },
]} />
<ServiceJsonLd
  name="Audits and Specialized Consultancy"
  description="Comprehensive custody metering skid audits, compliance assessments, process optimization, and specialized consultancy services — ensuring accuracy, regulatory conformity, and operational excellence in Kuwait and Dubai."
  url="/service/audits-and-specialized-consultancy/"
  serviceType="Flow Measurement"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <AuditsHero />
      <AuditsContent />
      {/* Contact section — to be added */}
    </>
  );
}
