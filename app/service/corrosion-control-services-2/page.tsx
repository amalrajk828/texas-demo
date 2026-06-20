import type { Metadata } from "next";
import CorrosionControlHero from "@/components/service/corrosion-control-services-2/CorrosionControlHero";
import CorrosionControlContent from "@/components/service/corrosion-control-services-2/CorrosionControlContent";

export const metadata: Metadata = {
  title: "Corrosion Control Services",
  description:
    "Corrosion control services including protective coatings, cathodic protection, corrosion assessment, and management plans for oil & gas, marine, construction, and manufacturing industries — Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/corrosion-control-services-2/" },
  openGraph: {
    title: "Corrosion Control Services | Texas Technical Services",
    description: "Protective coatings, cathodic protection, and corrosion management for industrial assets. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/corrosion-control-services-2/",
    images: [{ url: "https://texastechserv.com/og-corrosion-control.jpg", width: 1200, height: 630, alt: "Corrosion Control Services — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Corrosion Control Services | Texas Technical Services", description: "Coatings, cathodic protection, and corrosion management. Kuwait & Dubai." },
  keywords: ["corrosion control Kuwait", "cathodic protection Kuwait", "protective coatings Kuwait", "corrosion management Kuwait", "pipeline corrosion Kuwait", "Texas Technical Services corrosion"],
};

export default function CorrosionControlPage() {
  return (
    <>
      <CorrosionControlHero />
      <CorrosionControlContent />
      {/* Contact section — to be added */}
    </>
  );
}
