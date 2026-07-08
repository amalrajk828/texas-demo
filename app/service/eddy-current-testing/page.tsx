import type { Metadata } from "next";
import EddyCurrentHero from "@/components/service/eddy-current-testing/EddyCurrentHero";
import EddyCurrentContent from "@/components/service/eddy-current-testing/EddyCurrentContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Eddy Current Testing (ECT)",
  description:
    "Eddy Current Testing (ECT) for detecting flaws in tubes and material surfaces using electromagnetic induction — heat exchanger tube inspection, surface crack detection, conductivity measurement to ASTM E426, ASME V standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/eddy-current-testing/" },
  openGraph: {
    title: "Eddy Current Testing (ECT) | Texas Technical Services",
    description: "ECT for heat exchanger tubes, surface cracks, and conductivity measurement. ASME V, ASTM E426. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/eddy-current-testing/",
    images: [{ url: "https://texastechserv.com/og-eddy-current-testing.jpg", width: 1200, height: 630, alt: "Eddy Current Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Eddy Current Testing (ECT) | Texas Technical Services", description: "ECT tube and surface inspection. ASME V, ASTM E426. Kuwait & Dubai." },
  keywords: ["eddy current testing Kuwait", "ECT NDT Kuwait", "heat exchanger tube inspection Kuwait", "eddy current inspection Kuwait", "ASME V ECT Kuwait", "Texas Technical Services eddy current"],
};

export default function EddyCurrentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Eddy Current Testing (ECT)", href: "/service/eddy-current-testing/" },
]} />
<ServiceJsonLd
  name="Eddy Current Testing (ECT)"
  description="Eddy Current Testing (ECT) for detecting flaws in tubes and material surfaces using electromagnetic induction — heat exchanger tube inspection, surface crack detection, conductivity measurement to ASTM E426, ASME V standards in Kuwait and Dubai."
  url="/service/eddy-current-testing/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <EddyCurrentHero />
      <EddyCurrentContent />
      {/* Contact section — to be added */}
    </>
  );
}
