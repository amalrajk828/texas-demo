import type { Metadata } from "next";
import PenetrantHero from "@/components/service/liquid-penetrant-dye-penetrant-examination-pt/PenetrantHero";
import PenetrantContent from "@/components/service/liquid-penetrant-dye-penetrant-examination-pt/PenetrantContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Liquid Penetrant / Dye Penetrant Examination (PT)",
  description:
    "Liquid Penetrant Testing (LPT/LPI/DPT) using capillary forces to detect surface-breaking cracks, laps, and porosity in metals, ceramics, and plastics — fluorescent and colour contrast methods to ASTM E165, ISO 3452 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/liquid-penetrant-dye-penetrant-examination-pt/" },
  openGraph: {
    title: "Liquid Penetrant / Dye Penetrant Examination (PT) | Texas Technical Services",
    description: "Fluorescent and colour contrast penetrant testing for surface defect detection. ASTM E165, ISO 3452. Kuwait & Dubai.",
    url: "/service/liquid-penetrant-dye-penetrant-examination-pt/",
    images: [{ url: "/og-penetrant-test.jpg", width: 1200, height: 630, alt: "Dye Penetrant Testing — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Liquid Penetrant / Dye Penetrant (PT) | Texas Technical Services", description: "Fluorescent and colour contrast PT. ASTM E165, ISO 3452. Kuwait & Dubai." },
  keywords: ["dye penetrant test Kuwait", "liquid penetrant testing Kuwait", "PT NDT Kuwait", "fluorescent penetrant Kuwait", "surface crack detection Kuwait", "LPI Kuwait", "ASTM E165 Kuwait", "Texas Technical Services penetrant test"],
};

export default function PenetrantTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Liquid Penetrant / Dye Penetrant Examination (PT)", href: "/service/liquid-penetrant-dye-penetrant-examination-pt/" },
]} />
<ServiceJsonLd
  name="Liquid Penetrant / Dye Penetrant Examination (PT)"
  description="Liquid Penetrant Testing (LPT/LPI/DPT) using capillary forces to detect surface-breaking cracks, laps, and porosity in metals, ceramics, and plastics — fluorescent and colour contrast methods to ASTM E165, ISO 3452 standards in Kuwait and Dubai."
  url="/service/liquid-penetrant-dye-penetrant-examination-pt/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <PenetrantHero />
      <PenetrantContent />
      {/* Contact section — to be added */}
    </>
  );
}
