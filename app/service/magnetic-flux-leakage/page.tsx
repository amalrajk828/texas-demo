import type { Metadata } from "next";
import MFLHero from "@/components/service/magnetic-flux-leakage/MFLHero";
import MFLContent from "@/components/service/magnetic-flux-leakage/MFLContent";

export const metadata: Metadata = {
  title: "Magnetic Flux Leakage (MFL)",
  description:
    "Magnetic Flux Leakage (MFL) NDT for detecting corrosion and pitting in steel pipelines and storage tanks — pipeline in-line inspection and tank floor scanning to API 653, API 1163, ASTM E570 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/magnetic-flux-leakage/" },
  openGraph: {
    title: "Magnetic Flux Leakage (MFL) | Texas Technical Services",
    description: "MFL for pipeline and storage tank corrosion detection. API 653, API 1163. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/magnetic-flux-leakage/",
    images: [{ url: "https://texastechserv.com/og-magnetic-flux-leakage.jpg", width: 1200, height: 630, alt: "Magnetic Flux Leakage — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Magnetic Flux Leakage (MFL) | Texas Technical Services", description: "MFL pipeline and tank corrosion inspection. API 653. Kuwait & Dubai." },
  keywords: ["magnetic flux leakage Kuwait", "MFL NDT Kuwait", "pipeline MFL Kuwait", "tank floor inspection Kuwait", "corrosion detection Kuwait", "MFL inspection Kuwait", "Texas Technical Services MFL"],
};

export default function MFLPage() {
  return (
    <>
      <MFLHero />
      <MFLContent />
      {/* Contact section — to be added */}
    </>
  );
}
