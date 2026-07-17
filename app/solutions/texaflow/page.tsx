import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import TexaflowContent from "@/components/solutions/TexaflowContent";

export const metadata: Metadata = {
  title: "Texaflow — Custody Metering Integrated Control System | TTS Kuwait",
  description:
    "Texaflow is our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline metering stations, loading facilities, power plants, and airports.",
  alternates: { canonical: "/solutions/texaflow/" },
  openGraph: {
    title: "Texaflow — Custody Metering Integrated Control System",
    description:
      "Our proprietary custody transfer control system — automated meter proving, real-time flow computer integration, regulatory compliance (API/OIML), and remote monitoring.",
    url: "/solutions/texaflow/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texaflow | Texas Technical Services",
    description:
      "Proprietary custody metering integrated control system for fiscal metering & SCADA — Kuwait, UAE, GCC.",
  },
  keywords: [
    "Texaflow custody metering",
    "custody transfer metering system Kuwait",
    "fiscal metering SCADA GCC",
    "API OIML metering control system",
    "integrated metering control system",
    "automated meter proving",
    "real-time flow computer integration",
    "custody metering terminal loading",
    "pipeline metering station control",
    "refinery custody transfer system",
  ],
};

const faqItems = [
  {
    q: "What is Texaflow and what does it do?",
    a: "Texaflow is Texas Technical Services' proprietary custody metering integrated control system. It combines flow computer integration, automated meter proving, SCADA visualization, and regulatory reporting into a single platform — purpose-built for fiscal metering in oil & gas terminals, refineries, pipeline stations, loading facilities, power plants, and airports.",
  },
  {
    q: "Is Texaflow compliant with API and OIML standards?",
    a: "Yes. Texaflow is engineered for full compliance with API MPMS Chapter 4 (proving systems) and OIML R117 (liquids other than water). The system maintains auditable measurement integrity for every custody transfer batch, with tamper-proof logs and exportable certificates suitable for fiscal authorities and refinery planning systems.",
  },
  {
    q: "Which flow computers does Texaflow integrate with?",
    a: "Texaflow natively integrates with the most common custody-grade flow computers in the GCC, including OMNI 4000 / 7000 series and SICK Flow-X. Integration is bidirectional — flow computer batch data, alarms, and configuration flow seamlessly into the SCADA layer, while operator commands propagate back to the meter in real time.",
  },
  {
    q: "Can Texaflow be deployed at existing terminals?",
    a: "Yes. Texaflow is designed for both greenfield deployments and retrofit projects at existing terminals. We conduct a site survey, integrate with your current metering skids, flow computers, and analyzers, and migrate the supervisory layer with minimal downtime — typically during scheduled maintenance windows.",
  },
  {
    q: "Does Texaflow support remote monitoring?",
    a: "Yes. Texaflow includes secure remote monitoring with role-based access control, allowing operators, engineers, and managers to view real-time custody data, acknowledge alarms, and review historical batches from any device — desktop, tablet, or smartphone — across the enterprise or from a remote operations center.",
  },
];

export default function TexaflowPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
          { name: "Texaflow", href: "/solutions/texaflow/" },
        ]}
      />
      <ServiceJsonLd
        name="Texaflow — Custody Metering Integrated Control System"
        description="Proprietary custody transfer control system for oil & gas terminals, refineries, and pipeline metering stations — automated proving, real-time flow computer integration, and regulatory compliance."
        url="/solutions/texaflow/"
        serviceType="Custody Transfer Metering"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ProductJsonLd
        name="Texaflow Custody Metering Integrated Control System"
        description="Advanced fiscal metering & SCADA solution — integrated custody transfer metering, automated meter proving, API/OIML compliance, multi-product handling, and remote monitoring."
        url="/solutions/texaflow/"
        brand="Texas Technical Services"
        category="Custody Transfer Metering & SCADA"
      />
      <FaqPageJsonLd items={faqItems} />
      <TexaflowContent />
    </>
  );
}
