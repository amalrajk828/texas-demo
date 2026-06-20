import type { Metadata } from "next";
import MacroMicroHero from "@/components/service/macro-and-micro-test/MacroMicroHero";
import MacroMicroContent from "@/components/service/macro-and-micro-test/MacroMicroContent";

export const metadata: Metadata = {
  title: "Macro and Micro Test",
  description:
    "Macro and micro mechanical testing for material characterisation at different length scales — weld macro examination, metallographic grain structure analysis, inclusion assessment, and microstructural characterisation to ASTM and ISO standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/macro-and-micro-test/" },
  openGraph: {
    title: "Macro and Micro Test | Texas Technical Services",
    description: "Weld macro examination, metallographic analysis, grain size, and microstructural characterisation. ASTM E112, E45, ISO 643. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/macro-and-micro-test/",
    images: [{ url: "https://texastechserv.com/og-macro-micro-test.jpg", width: 1200, height: 630, alt: "Macro and Micro Test — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Macro and Micro Test | Texas Technical Services", description: "Weld macro, metallographic micro examination, grain size, phase analysis. Kuwait & Dubai." },
  keywords: ["macro test Kuwait", "micro test Kuwait", "metallographic testing Kuwait", "weld macro examination Kuwait", "grain size analysis Kuwait", "microstructural analysis Kuwait", "metallography Kuwait", "Texas Technical Services macro micro test"],
};

export default function MacroAndMicroTestPage() {
  return (
    <>
      <MacroMicroHero />
      <MacroMicroContent />
      {/* Contact section — to be added */}
    </>
  );
}
