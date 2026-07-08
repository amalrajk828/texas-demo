import type { Metadata } from "next";
import VisualInspectionHero from "@/components/service/visual-inspection-vi/VisualInspectionHero";
import VisualInspectionContent from "@/components/service/visual-inspection-vi/VisualInspectionContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Visual Inspection (VI)",
  description:
    "Visual inspection NDT services examining surface and external characteristics of components and materials — detecting cracks, corrosion, surface irregularities, and dimensional discrepancies. The first and essential step in any NDT programme. Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/visual-inspection-vi/" },
  openGraph: {
    title: "Visual Inspection (VI) | Texas Technical Services",
    description: "Visual inspection NDT for surface defect detection — cracks, corrosion, irregularities, dimensional checks. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/visual-inspection-vi/",
    images: [{ url: "https://texastechserv.com/og-visual-inspection.jpg", width: 1200, height: 630, alt: "Visual Inspection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Visual Inspection (VI) | Texas Technical Services", description: "Surface and external visual inspection NDT. Kuwait & Dubai." },
  keywords: ["visual inspection Kuwait", "NDT visual inspection Kuwait", "weld visual examination Kuwait", "surface inspection Kuwait", "VI NDT Kuwait", "remote visual inspection Kuwait", "Texas Technical Services visual inspection"],
};

export default function VisualInspectionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/service/" },
  { name: "Visual Inspection (VI)", href: "/service/visual-inspection-vi/" },
]} />
<ServiceJsonLd
  name="Visual Inspection (VI)"
  description="Visual inspection NDT services examining surface and external characteristics of components and materials — detecting cracks, corrosion, surface irregularities, and dimensional discrepancies. The first and essential step in any NDT programme. Kuwait and Dubai."
  url="/service/visual-inspection-vi/"
  serviceType="Non-Destructive Testing"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <VisualInspectionHero />
      <VisualInspectionContent />
      {/* Contact section — to be added */}
    </>
  );
}
