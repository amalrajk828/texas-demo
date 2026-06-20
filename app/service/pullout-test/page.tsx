import type { Metadata } from "next";
import PulloutHero from "@/components/service/pullout-test/PulloutHero";
import PulloutContent from "@/components/service/pullout-test/PulloutContent";

export const metadata: Metadata = {
  title: "Pullout Test for Bolts & Anchors",
  description:
    "Pullout testing to determine bond strength and integrity between bolts and concrete or masonry substrates — structural anchor verification, cast-in insert testing to ASTM C900, EN 12504-3, ACI 318 in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/pullout-test/" },
  openGraph: {
    title: "Pullout Test for Bolts & Anchors | Texas Technical Services",
    description: "Anchor bolt pullout testing for concrete and masonry bond strength. ASTM C900, EN 12504-3. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/pullout-test/",
    images: [{ url: "https://texastechserv.com/og-pullout-test.jpg", width: 1200, height: 630, alt: "Pullout Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Pullout Test | Texas Technical Services", description: "Anchor bolt pullout testing. ASTM C900, ACI 318. Kuwait & Dubai." },
  keywords: ["pullout test Kuwait", "anchor bolt test Kuwait", "bolt pullout test Kuwait", "concrete anchor testing Kuwait", "bond strength test Kuwait", "Texas Technical Services pullout test"],
};

export default function PulloutTestPage() {
  return (
    <>
      <PulloutHero />
      <PulloutContent />
      {/* Contact section — to be added */}
    </>
  );
}
