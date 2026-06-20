import type { Metadata } from "next";
import PhasedArrayHero from "@/components/service/phased-array-ultrasonic-testing/PhasedArrayHero";
import PhasedArrayContent from "@/components/service/phased-array-ultrasonic-testing/PhasedArrayContent";

export const metadata: Metadata = {
  title: "Phased Array Ultrasonic Testing (PAUT)",
  description:
    "Phased Array Ultrasonic Testing (PAUT) for detecting cracks, voids, pits, and corrosion defects, measuring material and coating thickness, and inspecting welds to ASME V, API 1104, EN ISO 13588 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/phased-array-ultrasonic-testing/" },
  openGraph: {
    title: "Phased Array Ultrasonic Testing (PAUT) | Texas Technical Services",
    description: "PAUT for defect detection, thickness measurement, and weld inspection. ASME V, API 1104, EN ISO 13588. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/phased-array-ultrasonic-testing/",
    images: [{ url: "https://texastechserv.com/og-phased-array-ut.jpg", width: 1200, height: 630, alt: "Phased Array Ultrasonic Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Phased Array Ultrasonic Testing (PAUT) | Texas Technical Services", description: "PAUT defect detection and weld inspection. ASME V, API 1104. Kuwait & Dubai." },
  keywords: ["phased array ultrasonic testing Kuwait", "PAUT Kuwait", "PAUT NDT Kuwait", "weld PAUT Kuwait", "phased array inspection Kuwait", "ASME V PAUT Kuwait", "Texas Technical Services PAUT"],
};

export default function PhasedArrayPage() {
  return (
    <>
      <PhasedArrayHero />
      <PhasedArrayContent />
      {/* Contact section — to be added */}
    </>
  );
}
