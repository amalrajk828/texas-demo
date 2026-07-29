import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Inspection & Testing Services",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial inspection and testing company in Kuwait — offering NDT (UT, MT, PT, RT, VI) and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC.",
  alternates: {
    canonical: "/service/inspection-testing/",
  },
  openGraph: {
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, QA consultancy, and ISO-certified quality management across the GCC.",
    url: "/service/inspection-testing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, ISO 9001/14001/45001 certified.",
  },
  keywords: [
    "industrial inspection and testing companies Kuwait",
    "inspection testing services Kuwait",
    "NDT services Kuwait Dubai",
    "non destructive testing Kuwait",
    "third party inspection Kuwait",
    "ISO 9001 inspection company Kuwait",
    "Texas Technical Services inspection",
    "QA consultancy Kuwait",
  ],
};

export default function InspectionTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: "Inspection & Testing", href: "/service/inspection-testing/" }]} />
      <ServiceJsonLd
        name="Inspection & Testing Services"
        description="Industrial inspection and testing company in Kuwait — NDT (UT, MT, PT, RT, VI) and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC."
        url="/service/inspection-testing/"
        serviceType="Inspection & Testing"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <InspectionHero />
      <InspectionOverview />
    </>
  );
}
