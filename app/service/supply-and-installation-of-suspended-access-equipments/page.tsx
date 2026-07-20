import type { Metadata } from "next";
import SuspendedAccessHero from "@/components/services_group/supply-and-installation-of-suspended-access-equipments/SuspendedAccessHero";
import SuspendedAccessContent from "@/components/services_group/supply-and-installation-of-suspended-access-equipments/SuspendedAccessContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Supply and Installation of Suspended Access Equipment | Texas Technical Services",
  description:
    "Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems for building maintenance and facade access.",
  alternates: { canonical: "/service/supply-and-installation-of-suspended-access-equipments/" },
  openGraph: {
    title: "Supply and Installation of Suspended Access Equipment | Texas Technical Services",
    description: "Telescopic roof machines, twin track roof machines, powered cradles, monorails, davit systems.",
    url: "/service/supply-and-installation-of-suspended-access-equipments/",
    images: [{ url: "/og-suspended-access.jpg", width: 1200, height: 630, alt: "Suspended Access Equipment — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Supply and Installation of Suspended Access Equipment | Texas Technical Services", description: "Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems for building maintenance and facade access." },
  keywords: ["Suspended Access Equipment Kuwait", "Suspended Access Equipment Dubai", "Texas Technical Services Suspended Access", "building maintenance equipment Kuwait", "facade access equipment Kuwait", "davit systems Kuwait"],
};

export default function SuspendedAccessPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Supply and Installation of Suspended Access Equipment", href: "/service/supply-and-installation-of-suspended-access-equipments/" },
]} />
<ServiceJsonLd
  name="Supply and Installation of Suspended Access Equipment"
  description="Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems for building maintenance and facade access."
  url="/service/supply-and-installation-of-suspended-access-equipments/"
  serviceType="Suspended Access Equipment"
  areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
/>
      <SuspendedAccessHero />
      <SuspendedAccessContent />
    </>
  );
}
