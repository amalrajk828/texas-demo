import type { Metadata } from "next";
import HoseTestHero from "@/components/service/hose-test-2/HoseTestHero";
import HoseTestContent from "@/components/service/hose-test-2/HoseTestContent";

export const metadata: Metadata = {
  title: "Hose Test — Curtain Wall & Facade Water Check",
  description:
    "Hose test quality assurance water checking for installed curtain walls, exterior windows, and doors — field leakage identification and diagnostic reporting to AAMA 501.2, ASTM E1105 in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/hose-test-2/" },
  openGraph: {
    title: "Hose Test — Curtain Wall Water Check | Texas Technical Services",
    description: "Field hose test for curtain walls, windows, and doors. AAMA 501.2, ASTM E1105. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/hose-test-2/",
    images: [{ url: "https://texastechserv.com/og-hose-test.jpg", width: 1200, height: 630, alt: "Hose Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Hose Test — Curtain Wall Water Check | Texas Technical Services", description: "Field water check for facades and windows. AAMA 501.2. Kuwait & Dubai." },
  keywords: ["hose test Kuwait", "curtain wall hose test Kuwait", "facade water test Kuwait", "window hose test Kuwait", "AAMA 501.2 Kuwait", "building leakage test Kuwait", "Texas Technical Services hose test"],
};

export default function HoseTestPage() {
  return (
    <>
      <HoseTestHero />
      <HoseTestContent />
      {/* Contact section — to be added */}
    </>
  );
}
