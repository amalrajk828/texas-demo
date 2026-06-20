import type { Metadata } from "next";
import FractureHero from "@/components/service/fracture-test/FractureHero";
import FractureContent from "@/components/service/fracture-test/FractureContent";

export const metadata: Metadata = {
  title: "Fracture Test",
  description:
    "Fracture toughness testing (KIc, CTOD, J-integral) measuring a material's resistance to pre-existing flaw propagation — supporting fitness-for-service assessments and structural integrity qualification to ASTM E399, E1820, BS 7448 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/fracture-test/" },
  openGraph: {
    title: "Fracture Test | Texas Technical Services",
    description: "KIc, CTOD, and J-integral fracture toughness testing for pre-cracked specimens. Fitness-for-service support. ASTM E399, BS 7448. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/fracture-test/",
    images: [{ url: "https://texastechserv.com/og-fracture-test.jpg", width: 1200, height: 630, alt: "Fracture Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Fracture Test | Texas Technical Services", description: "Fracture toughness KIc, CTOD, J-integral testing. ASTM E399, BS 7448. Kuwait & Dubai." },
  keywords: ["fracture test Kuwait", "fracture toughness Kuwait", "KIc testing Kuwait", "CTOD testing Kuwait", "fitness for service Kuwait", "ASTM E399 Kuwait", "BS 7448 CTOD Kuwait", "Texas Technical Services fracture test"],
};

export default function FractureTestPage() {
  return (
    <>
      <FractureHero />
      <FractureContent />
      {/* Contact section — to be added */}
    </>
  );
}
