"use client";

/**
 * InspectionHero — hero for /service/inspection-testing/
 *
 * Now uses the shared <MoltenHero> component so that updating the molten
 * canvas effect in one place automatically updates all pages.
 */

import { FlaskConical, ShieldCheck, Activity, Award } from "lucide-react";
import MoltenHero from "@/components/common/MoltenHero";

export default function InspectionHero() {
  return (
    <MoltenHero
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Inspection & Testing" },
      ]}
      eyebrow="Third-Party Inspection & QA/QC Testing"
      eyebrowIcon={<FlaskConical className="w-3.5 h-3.5" strokeWidth={2} />}
      title="Inspection & Testing"
      subtitle="Texas Technical Services (TTS) provides accredited third-party inspection, non-destructive examination (NDT), and mechanical testing across Kuwait and the GCC. Our certified inspectors ensure rigorous quality assurance, product conformity, and complete compliance with ISO 9001, ISO 14001, and ISO 45001 standards."
      ctaText="Consult Inspection Specialists"
      ctaHref="#contact"
      secondaryCtaText="Overview & Services"
      secondaryCtaHref="#overview"
      highlights={[
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "ISO 9001 / 14001 / 45001",
          sub: "UASL Accredited QA/QC",
        },
        {
          icon: <Activity className="w-5 h-5" style={{ color: "#2563eb" }} />,
          title: "Full NDT Suite",
          sub: "UT, RT, MT, PT, VI & PAUT",
        },
        {
          icon: <Award className="w-5 h-5" style={{ color: "#ea580c" }} />,
          title: "Certified Inspectors",
          sub: "Third-Party Verification",
        },
      ]}
      accentColor="#e7212b"
    />
  );
}
