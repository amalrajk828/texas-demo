import type { Metadata } from "next";
import InspectionHero from "@/components/service/inspection-testing/InspectionHero";
import InspectionOverview from "@/components/service/inspection-testing/InspectionOverview";
import InspectionSubServices from "@/components/service/inspection-testing/InspectionSubServices";

export const metadata: Metadata = {
  title: "Inspection & Testing Services",
  description:
    "Texas Technical Services Co. (TTS) is a leading industrial inspection and testing company in Kuwait — offering NDT (UT, MT, PT, RT, VI), mechanical testing, specialized phased array ultrasonic inspection, and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC.",
  alternates: {
    canonical: "https://texastechserv.com/service/inspection-testing/",
  },
  openGraph: {
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, QA consultancy, and ISO-certified quality management across the GCC.",
    url: "https://texastechserv.com/service/inspection-testing/",
    images: [
      {
        url: "https://texastechserv.com/og-inspection-testing.jpg",
        width: 1200,
        height: 630,
        alt: "Inspection & Testing Services — Texas Technical Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspection & Testing Services | Texas Technical Services",
    description:
      "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, ISO 9001/14001/45001 certified.",
  },
  keywords: [
    "industrial inspection and testing companies Kuwait",
    "inspection testing services Kuwait",
    "NDT services Kuwait Dubai",
    "non destructive testing Kuwait",
    "phased array ultrasonic testing",
    "mechanical testing Kuwait",
    "third party inspection Kuwait",
    "ISO 9001 inspection company Kuwait",
    "Texas Technical Services inspection",
    "QA consultancy Kuwait",
  ],
};

export default function InspectionTestingPage() {
  return (
    <>
      <InspectionHero />
      <InspectionOverview />
      <InspectionSubServices />
      {/* Contact section — to be added */}
    </>
  );
}
