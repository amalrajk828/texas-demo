import type { Metadata } from "next";
import PhasedArrayHero from "@/components/service/phased-array-ultrasonic-testing/PhasedArrayHero";
import PhasedArrayContent from "@/components/service/phased-array-ultrasonic-testing/PhasedArrayContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Phased Array Ultrasonic Testing (PAUT) | Texas Technical Services",
  description:
    "Phased Array Ultrasonic Testing (PAUT) for detecting cracks, voids, pits, and corrosion defects, measuring material and coating thickness, and inspecting welds to ASME V, API 1104, EN ISO 13588 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/phased-array-ultrasonic-testing/" },
  openGraph: {
    title: "Phased Array Ultrasonic Testing (PAUT) | Texas Technical Services",
    description: "PAUT for defect detection, thickness measurement, and weld inspection. ASME V, API 1104, EN ISO 13588. Kuwait & Dubai.",
    url: "/service/phased-array-ultrasonic-testing/",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Phased Array Ultrasonic Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Phased Array Ultrasonic Testing (PAUT) | Texas Technical Services", description: "PAUT defect detection and weld inspection. ASME V, API 1104. Kuwait & Dubai." },
  keywords: ["phased array ultrasonic testing Kuwait", "PAUT Kuwait", "PAUT NDT Kuwait", "weld PAUT Kuwait", "phased array inspection Kuwait", "ASME V PAUT Kuwait", "Texas Technical Services PAUT"],
};

export default function PhasedArrayPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Phased Array Ultrasonic Testing (PAUT)", href: "/service/phased-array-ultrasonic-testing/" },
]} />
<ServiceJsonLd
  name="Phased Array Ultrasonic Testing (PAUT)"
  description="Phased Array Ultrasonic Testing (PAUT) for detecting cracks, voids, pits, and corrosion defects, measuring material and coating thickness, and inspecting welds to ASME V, API 1104, EN ISO 13588 standards in Kuwait and Dubai."
  url="/service/phased-array-ultrasonic-testing/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <PhasedArrayHero />
      <PhasedArrayContent />
      {/* Contact section — to be added */}
    </>
  );
}
