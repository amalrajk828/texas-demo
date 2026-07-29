import type { Metadata } from "next";
import SpecializedHero from "@/components/service/specialized-inspection-service/SpecializedHero";
import SpecializedSubServices from "@/components/service/specialized-inspection-service/SpecializedSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Specialized Inspection Service",
  description:
    "Advanced specialized inspection services including Phased Array Ultrasonic Testing (PAUT), Eddy Current Testing, TOFD, Magnetic Flux Leakage, Videoscope, Gamma Ray Pipe Crawler, Corrosion Control, Metallurgical Services, Heat Treatment, and more — Kuwait and Dubai.",
  alternates: { canonical: "/services_group/services/inspection-testing/specialized-inspection-services/" },
  openGraph: {
    title: "Specialized Inspection Service",
    description: "PAUT, ECT, TOFD, MFL, Videoscope, Corrosion Control, PMI, Heat Treatment, and Lifting Equipment Inspection. Kuwait & Dubai.",
    url: "/services_group/services/inspection-testing/specialized-inspection-services/",
    images: [{ url: "/og-specialized-inspection.jpg", width: 1200, height: 630, alt: "Specialized Inspection Service — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Specialized Inspection Service", description: "PAUT, ECT, TOFD, MFL and 15 specialist services. Kuwait & Dubai." },
  keywords: ["specialized inspection Kuwait", "PAUT Kuwait", "phased array ultrasonic testing Kuwait", "eddy current testing Kuwait", "TOFD Kuwait", "magnetic flux leakage Kuwait", "corrosion control Kuwait", "PMI Kuwait", "heat treatment Kuwait", "lifting inspection Kuwait", "Texas Technical Services inspection"],
};

export default function SpecializedInspectionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" },
  { name: "Specialized Inspection Service", href: "/services_group/services/inspection-testing/specialized-inspection-services/" },
]} />
<ServiceJsonLd
  name="Specialized Inspection Service"
  description="Advanced specialized inspection services including Phased Array Ultrasonic Testing (PAUT), Eddy Current Testing, TOFD, Magnetic Flux Leakage, Videoscope, Gamma Ray Pipe Crawler, Corrosion Control, Metallurgical Services, Heat Treatment, and more — Kuwait and Dubai."
  url="/services_group/services/inspection-testing/specialized-inspection-services/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SpecializedHero />
      <SpecializedSubServices />
    </>
  );
}
