import type { Metadata } from "next";
import WaterPenetrationHero from "@/components/service/water-penetration-test/WaterPenetrationHero";
import WaterPenetrationContent from "@/components/service/water-penetration-test/WaterPenetrationContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Water Penetration Test",
  description:
    "Water penetration testing for windows, doors, and curtain wall systems to identify leakage and assess building envelope integrity — static pressure testing to ASTM E1105, AAMA 502, BS 6375 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/water-penetration-test-2/" },
  openGraph: {
    title: "Water Penetration Test | Texas Technical Services",
    description: "Water penetration testing for windows, doors, and curtain walls. ASTM E1105, AAMA 502. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/water-penetration-test-2/",
    images: [{ url: "https://texastechserv.com/og-water-penetration.jpg", width: 1200, height: 630, alt: "Water Penetration Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Water Penetration Test | Texas Technical Services", description: "Window and curtain wall water penetration testing. ASTM E1105. Kuwait & Dubai." },
  keywords: ["water penetration test Kuwait", "curtain wall testing Kuwait", "window water test Kuwait", "building envelope testing Kuwait", "ASTM E1105 Kuwait", "Texas Technical Services water test"],
};

export default function WaterPenetrationPage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Water Penetration Test", href: "/service/water-penetration-test-2/" },
]} />
<ServiceJsonLd
  name="Water Penetration Test"
  description="Water penetration testing for windows, doors, and curtain wall systems to identify leakage and assess building envelope integrity — static pressure testing to ASTM E1105, AAMA 502, BS 6375 standards in Kuwait and Dubai."
  url="/service/water-penetration-test-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <WaterPenetrationHero />
      <WaterPenetrationContent />
    </>
  );
}
