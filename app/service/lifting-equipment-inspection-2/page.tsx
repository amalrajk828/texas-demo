import type { Metadata } from "next";
import LiftingInspectionHero from "@/components/service/lifting-equipment-inspection-2/LiftingInspectionHero";
import LiftingInspectionContent from "@/components/service/lifting-equipment-inspection-2/LiftingInspectionContent";

export const metadata: Metadata = {
  title: "Lifting Equipment Inspection",
  description:
    "Lifting equipment inspection services for cranes, hoists, forklifts, and elevators — systematic examination by certified competent persons with written reports per LOLER 1998, ASME B30, BS EN 13001 in Kuwait and Dubai.",
  alternates: { canonical: "https://texastechserv.com/service/lifting-equipment-inspection-2/" },
  openGraph: {
    title: "Lifting Equipment Inspection | Texas Technical Services",
    description: "Certified inspection of cranes, hoists, and forklifts. LOLER, ASME B30. Kuwait & Dubai.",
    url: "https://texastechserv.com/service/lifting-equipment-inspection-2/",
    images: [{ url: "https://texastechserv.com/og-lifting-inspection.jpg", width: 1200, height: 630, alt: "Lifting Equipment Inspection — Texas Technical Services" }],
  },
  twitter: { card: "summary_large_image", title: "Lifting Equipment Inspection | Texas Technical Services", description: "Crane and hoist inspection. LOLER, ASME B30. Kuwait & Dubai." },
  keywords: ["lifting equipment inspection Kuwait", "crane inspection Kuwait", "hoist inspection Kuwait", "LOLER inspection Kuwait", "forklift inspection Kuwait", "lifting gear inspection Kuwait", "Texas Technical Services lifting inspection"],
};

export default function LiftingInspectionPage() {
  return (
    <>
      <LiftingInspectionHero />
      <LiftingInspectionContent />
      {/* Contact section — to be added */}
    </>
  );
}
