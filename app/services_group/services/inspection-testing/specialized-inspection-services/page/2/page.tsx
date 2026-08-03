import type { Metadata } from "next";
import SpecializedHero from "@/components/service/specialized-inspection-service/SpecializedHero";
import SpecializedSubServices from "@/components/service/specialized-inspection-service/SpecializedSubServices";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { servicesListingFaq } from "@/lib/pageFaqData";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Specialized Inspection Services — Page 2",
  description:
    "Advanced specialized inspection services including Phased Array Ultrasonic Testing (PAUT), Eddy Current Testing, TOFD, Magnetic Flux Leakage, and more — Kuwait and Dubai.",
  alternates: { canonical: "/services_group/services/inspection-testing/specialized-inspection-services/page/2/" },
  openGraph: {
    title: "Specialized Inspection Services — Page 2",
    description: "PAUT, ECT, TOFD, MFL, Videoscope, Corrosion Control, and more specialized inspection services. Kuwait & Dubai.",
    url: "/services_group/services/inspection-testing/specialized-inspection-services/page/2/",
    images: [{ url: "/og-specialized-inspection.jpg", width: 1200, height: 630, alt: "Specialized Inspection Service — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Specialized Inspection Services — Page 2", description: "PAUT, ECT, TOFD, MFL and more. Kuwait & Dubai." },
  keywords: ["specialized inspection Kuwait", "PAUT Kuwait", "phased array ultrasonic testing Kuwait", "eddy current testing Kuwait", "TOFD Kuwait", "Texas Technical Services inspection"],
};

export default function SpecializedInspectionPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Inspection & Testing", href: "/services_group/services/inspection-testing/" },
  { name: "Specialized Inspection Service", href: "/services_group/services/inspection-testing/specialized-inspection-services/" },
  { name: "Page 2", href: "/services_group/services/inspection-testing/specialized-inspection-services/page/2/" },
]} />
<ServiceJsonLd
  name="Specialized Inspection Services — Page 2"
  description="Advanced specialized inspection services including PAUT, ECT, TOFD, MFL, and more — Kuwait and Dubai."
  url="/services_group/services/inspection-testing/specialized-inspection-services/page/2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SpecializedHero />
      <SpecializedSubServices />
      <FaqPageJsonLd items={servicesListingFaq} />
    </>
  );
}
