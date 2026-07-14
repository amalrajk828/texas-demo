import type { Metadata } from "next";
import BendHero from "@/components/service/bend-test/BendHero";
import BendContent from "@/components/service/bend-test/BendContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Bend Test",
  description:
    "Guided bend testing, weld procedure qualification bend tests, and flexural testing to evaluate ductility and soundness of materials — face, root, and side bend to ASTM A370, E290, ISO 7438 standards in Kuwait and Dubai.",
  alternates: { canonical: "/service/bend-test/" },
  openGraph: {
    title: "Bend Test | Texas Technical Services",
    description: "Guided bend testing, weld bend qualification, and flexural testing. Ductility and soundness assessment. ASTM A370, ISO 7438. Kuwait & Dubai.",
    url: "/service/bend-test/",
    images: [{ url: "/og-bend-test.jpg", width: 1200, height: 630, alt: "Bend Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Bend Test | Texas Technical Services", description: "Guided bend, weld qualification bend, and flexural testing. ASTM & ISO standards. Kuwait & Dubai." },
  keywords: ["bend test Kuwait", "guided bend test Kuwait", "weld bend test Kuwait", "flexural test Kuwait", "ductility test Kuwait", "ASTM A370 bend test Kuwait", "ISO 7438 bend test Kuwait", "Texas Technical Services bend test"],
};

export default function BendTestPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Bend Test", href: "/service/bend-test/" },
]} />
<ServiceJsonLd
  name="Bend Test"
  description="Guided bend testing, weld procedure qualification bend tests, and flexural testing to evaluate ductility and soundness of materials — face, root, and side bend to ASTM A370, E290, ISO 7438 standards in Kuwait and Dubai."
  url="/service/bend-test/"
  serviceType="Mechanical Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <BendHero />
      <BendContent />
      {/* Contact section — to be added */}
    </>
  );
}
