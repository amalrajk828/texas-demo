import type { Metadata } from "next";
import HoseTestHero from "@/components/service/hose-test/HoseTestHero";
import HoseTestContent from "@/components/service/hose-test/HoseTestContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Hose Test — Curtain Wall & Facade Water Check",
  description:
    "Hose test quality assurance water checking for installed curtain walls, exterior windows, and doors — field leakage identification and diagnostic reporting to AAMA 501.2, ASTM E1105 in Kuwait and Dubai.",
  alternates: { canonical: "/service/hose-test/" },
  openGraph: {
    title: "Hose Test — Curtain Wall Water Check | Texas Technical Services",
    description: "Field hose test for curtain walls, windows, and doors. AAMA 501.2, ASTM E1105. Kuwait & Dubai.",
    url: "/service/hose-test/",
    images: [{ url: "/og-hose-test.jpg", width: 1200, height: 630, alt: "Hose Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Hose Test — Curtain Wall Water Check | Texas Technical Services", description: "Field water check for facades and windows. AAMA 501.2. Kuwait & Dubai." },
  keywords: ["hose test Kuwait", "curtain wall hose test Kuwait", "facade water test Kuwait", "window hose test Kuwait", "AAMA 501.2 Kuwait", "building leakage test Kuwait", "Texas Technical Services hose test"],
};

export default function HoseTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Hose Test — Curtain Wall & Facade Water Check", href: "/service/hose-test/" },
]} />
<ServiceJsonLd
  name="Hose Test — Curtain Wall & Facade Water Check"
  description="Hose test quality assurance water checking for installed curtain walls, exterior windows, and doors — field leakage identification and diagnostic reporting to AAMA 501.2, ASTM E1105 in Kuwait and Dubai."
  url="/service/hose-test/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <HoseTestHero />
      <HoseTestContent />
      {/* Contact section — to be added */}
    </>
  );
}
