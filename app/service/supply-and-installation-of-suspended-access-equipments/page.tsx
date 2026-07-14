import type { Metadata } from "next";
import SuspendedAccessHero from "@/components/services_group/supply-and-installation-of-suspended-access-equipments/SuspendedAccessHero";
import SuspendedAccessContent from "@/components/services_group/supply-and-installation-of-suspended-access-equipments/SuspendedAccessContent";

export const metadata: Metadata = {
  title: "Supply and Installation of Suspended Access Equipment | Texas Technical Services",
  description:
    "Supply and installation of telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems for building maintenance and facade access.",
  alternates: { canonical: "https://texastechserv.com/service/supply-and-installation-of-suspended-access-equipments/" },
  openGraph: {
    title: "Supply and Installation of Suspended Access Equipment | Texas Technical Services",
    description: "Telescopic roof machines, twin track roof machines, powered cradles, monorails, davit systems.",
    url: "https://texastechserv.com/service/supply-and-installation-of-suspended-access-equipments/",
    images: [{ url: "https://texastechserv.com/og-suspended-access.jpg", width: 1200, height: 630, alt: "Suspended Access Equipment — Texas Technical Services" }],
  },
};

export default function SuspendedAccessPage() {
  return (
    <>
      <SuspendedAccessHero />
      <SuspendedAccessContent />
    </>
  );
}
