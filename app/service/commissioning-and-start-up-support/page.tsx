import type { Metadata } from "next";
import CommissioningHero from "@/components/service/commissioning-and-start-up-support/CommissioningHero";
import CommissioningContent from "@/components/service/commissioning-and-start-up-support/CommissioningContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Commissioning and Start-up Support",
  description:
    "Industrial process automation commissioning and start-up support — validation and fine-tuning of PLCs, DCS, SCADA, sensors, and safety systems from pre-commissioning through hot start-up and post-commissioning handover in Kuwait and Dubai.",
  alternates: { canonical: "/service/commissioning-and-start-up-support/" },
  openGraph: {
    title: "Commissioning and Start-up Support | Texas Technical Services",
    description: "Automation commissioning, start-up, and maintenance for oil & gas, chemical, and manufacturing. Kuwait & Dubai.",
    url: "/service/commissioning-and-start-up-support/",
    images: [{ url: "/og-commissioning.jpg", width: 1200, height: 630, alt: "Commissioning and Start-up Support — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Commissioning and Start-up Support | Texas Technical Services", description: "Automation commissioning and start-up. Kuwait & Dubai." },
  keywords: ["commissioning Kuwait", "automation commissioning Kuwait", "start-up support Kuwait", "PLC commissioning Kuwait", "SCADA commissioning Kuwait", "industrial commissioning Kuwait", "Texas Technical Services commissioning"],
};

export default function CommissioningPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commissioning and Start-up Support", href: "/service/commissioning-and-start-up-support/" },
]} />
<ServiceJsonLd
  name="Commissioning and Start-up Support"
  description="Industrial process automation commissioning and start-up support — validation and fine-tuning of PLCs, DCS, SCADA, sensors, and safety systems from pre-commissioning through hot start-up and post-commissioning handover in Kuwait and Dubai."
  url="/service/commissioning-and-start-up-support/"
  serviceType="Commissioning"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <CommissioningHero />
      <CommissioningContent />
      {/* Contact section — to be added */}
    </>
  );
}
