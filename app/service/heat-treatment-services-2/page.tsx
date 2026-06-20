import type { Metadata } from "next";
import HeatTreatmentHero from "@/components/service/heat-treatment-services-2/HeatTreatmentHero";
import HeatTreatmentContent from "@/components/service/heat-treatment-services-2/HeatTreatmentContent";

export const metadata: Metadata = {
  title: "Heat Treatment Services",
  description:
    "Heat treatment services including Post Weld Heat Treatment (PWHT), stress relief, and annealing using electrical resistance and high-velocity fuel-fired burner systems to ASME VIII, AWS D1.1, ASME B31.3 standards in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/heat-treatment-services-2/" },
  openGraph: {
    title: "Heat Treatment Services | Texas Technical Services",
    description: "PWHT, stress relief, and annealing with electrical and fuel-fired heating. ASME VIII, AWS D1.1. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/heat-treatment-services-2/",
    images: [{ url: "https://texastechserv.com/og-heat-treatment.jpg", width: 1200, height: 630, alt: "Heat Treatment Services — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Heat Treatment Services | Texas Technical Services", description: "PWHT and heat treatment. ASME VIII, AWS D1.1. Kuwait & Dubai." },
  keywords: ["heat treatment Kuwait", "PWHT Kuwait", "post weld heat treatment Kuwait", "stress relief Kuwait", "electrical resistance heating Kuwait", "heat treatment services Kuwait", "Texas Technical Services heat treatment"],
};

export default function HeatTreatmentPage() {
  return (
    <>
      <HeatTreatmentHero />
      <HeatTreatmentContent />
      {/* Contact section — to be added */}
    </>
  );
}
