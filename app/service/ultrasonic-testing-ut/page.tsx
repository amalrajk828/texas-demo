import type { Metadata } from "next";
import UltrasonicHero from "@/components/service/ultrasonic-testing-ut/UltrasonicHero";
import UltrasonicContent from "@/components/service/ultrasonic-testing-ut/UltrasonicContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Ultrasonic Testing (UT)",
  description:
    "Ultrasonic Testing using high-frequency sound waves to inspect the internal structure of materials and detect defects — conventional UT, TOFD, and wall thickness measurement to ASME V, API 1104, EN ISO 11666 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/ultrasonic-testing-ut/" },
  openGraph: {
    title: "Ultrasonic Testing (UT) | Texas Technical Services",
    description: "Conventional UT, TOFD, and thickness measurement for welds, forgings, and castings. ASME V, API 1104. Kuwait & Dubai.",
    url: "/service/ultrasonic-testing-ut/",
    images: [{ url: "/og-ultrasonic-testing.jpg", width: 1200, height: 630, alt: "Ultrasonic Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Ultrasonic Testing (UT) | Texas Technical Services", description: "Conventional UT, TOFD, thickness measurement. ASME V, API 1104. Kuwait & Dubai." },
  keywords: ["ultrasonic testing Kuwait", "UT NDT Kuwait", "TOFD testing Kuwait", "weld ultrasonic testing Kuwait", "thickness measurement Kuwait", "UT inspection Kuwait", "ASME V UT Kuwait", "Texas Technical Services ultrasonic testing"],
};

export default function UltrasonicTestingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Ultrasonic Testing (UT)", href: "/service/ultrasonic-testing-ut/" },
]} />
<ServiceJsonLd
  name="Ultrasonic Testing (UT)"
  description="Ultrasonic Testing using high-frequency sound waves to inspect the internal structure of materials and detect defects — conventional UT, TOFD, and wall thickness measurement to ASME V, API 1104, EN ISO 11666 standards in Kuwait and Dubai."
  url="/service/ultrasonic-testing-ut/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <UltrasonicHero />
      <UltrasonicContent />
      {/* Contact section — to be added */}
    </>
  );
}
