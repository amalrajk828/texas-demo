import type { Metadata } from "next";
import ImpactHero from "@/components/service/impact-test/ImpactHero";
import ImpactContent from "@/components/service/impact-test/ImpactContent";

export const metadata: Metadata = {
  title: "Impact Test",
  description:
    "Charpy and Izod impact testing to measure material resistance to sudden shock loading — including low-temperature impact testing and ductile-to-brittle transition assessment to ASTM E23, ISO 148 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/impact-test/" },
  openGraph: {
    title: "Impact Test | Texas Technical Services",
    description: "Charpy and Izod impact testing — shock resistance, low-temperature, and ductile-to-brittle transition. ASTM E23, ISO 148. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/impact-test/",
    images: [{ url: "https://texastechserv.com/og-impact-test.jpg", width: 1200, height: 630, alt: "Impact Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Impact Test | Texas Technical Services", description: "Charpy and Izod impact testing. Low-temperature testing available. Kuwait & Dubai." },
  keywords: ["impact test Kuwait", "Charpy impact test Kuwait", "Izod impact test Kuwait", "low temperature impact test Kuwait", "fracture toughness impact Kuwait", "ASTM E23 impact test Kuwait", "Texas Technical Services impact test"],
};

export default function ImpactTestPage() {
  return (
    <>
      <ImpactHero />
      <ImpactContent />
      {/* Contact section — to be added */}
    </>
  );
}
