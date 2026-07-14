import type { Metadata } from "next";
import TorqueHero from "@/components/service/torque-tightening-bolt-tensioning/TorqueHero";
import TorqueContent from "@/components/service/torque-tightening-bolt-tensioning/TorqueContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Torque Tightening & Bolt Tensioning",
  description:
    "Torque tightening and bolt tensioning services using calibrated hydraulic tools and torque sensors — bolted flange connections, pressure vessel fasteners, and structural bolting to ASME PCC-1, EN 1591, API 6A in Kuwait and Dubai.",
  alternates: { canonical: "/service/torque-tightening-bolt-tensioning-2/" },
  openGraph: {
    title: "Torque Tightening & Bolt Tensioning | Texas Technical Services",
    description: "Hydraulic torque and bolt tensioning for flanges and pressure vessels. ASME PCC-1, API 6A. Kuwait & Dubai.",
    url: "/service/torque-tightening-bolt-tensioning-2/",
    images: [{ url: "/og-torque-tightening.jpg", width: 1200, height: 630, alt: "Torque Tightening & Bolt Tensioning — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Torque Tightening & Bolt Tensioning | Texas Technical Services", description: "Hydraulic bolt tensioning and torque services. ASME PCC-1. Kuwait & Dubai." },
  keywords: ["torque tightening Kuwait", "bolt tensioning Kuwait", "hydraulic torque Kuwait", "flange management Kuwait", "bolt preload Kuwait", "ASME PCC-1 Kuwait", "Texas Technical Services torque"],
};

export default function TorquePage2() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Torque Tightening & Bolt Tensioning", href: "/service/torque-tightening-bolt-tensioning-2/" },
]} />
<ServiceJsonLd
  name="Torque Tightening & Bolt Tensioning"
  description="Torque tightening and bolt tensioning services using calibrated hydraulic tools and torque sensors — bolted flange connections, pressure vessel fasteners, and structural bolting to ASME PCC-1, EN 1591, API 6A in Kuwait and Dubai."
  url="/service/torque-tightening-bolt-tensioning-2/"
  serviceType="Specialized Inspection"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <TorqueHero />
      <TorqueContent />
    </>
  );
}
