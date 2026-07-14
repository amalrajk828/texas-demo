import type { Metadata } from "next";
import HandRailHero from "@/components/services_group/hand-rail-fabrication/HandRailHero";
import HandRailContent from "@/components/services_group/hand-rail-fabrication/HandRailContent";

export const metadata: Metadata = {
  title: "Hand Rail Fabrication | Texas Technical Services",
  description:
    "Skilled creation of safety handrails and support structures — steel, aluminum, and durable materials compliant with safety regulations for industrial and commercial applications.",
  alternates: { canonical: "https://texastechserv.com/services_group/services/hand-rail-fabrication/" },
  openGraph: {
    title: "Hand Rail Fabrication | Texas Technical Services",
    description: "Safety handrails and support structures — steel, aluminum, durable materials compliant with safety regulations.",
    url: "https://texastechserv.com/services_group/services/hand-rail-fabrication/",
    images: [{ url: "https://texastechserv.com/og-handrail.jpg", width: 1200, height: 630, alt: "Hand Rail Fabrication — Texas Technical Services" }],
  },
};

export default function HandRailPage() {
  return (
    <>
      <HandRailHero />
      <HandRailContent />
    </>
  );
}
