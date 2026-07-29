import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import SpaceAiContent from "@/components/solutions/SpaceAiContent";

export const metadata: Metadata = {
  title: "Space AI — Industrial AI & Machine Learning Solutions",
  description:
    "Space AI delivers next-generation AI and machine learning for industry — predictive maintenance, process optimization with virtual metrology & digital twin, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
  alternates: { canonical: "/solutions/space-ai/" },
  openGraph: {
    title: "Space AI — Industrial AI Solutions",
    description:
      "Predictive Maintenance, Process Optimization, and Smart Monitoring powered by deep learning, edge computing, big data analytics, and Industrial IoT.",
    url: "/solutions/space-ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI",
    description:
      "Next-generation AI for industry — reduce downtime 50%, increase yield, enable autonomous optimization. Kuwait & GCC.",
  },
  keywords: [
    "industrial AI Kuwait",
    "predictive maintenance GCC",
    "machine learning oil and gas",
    "Space AI industrial solutions",
    "digital twin factory automation",
    "virtual metrology",
    "anomaly detection industrial",
    "process optimization AI",
    "ESG carbon tracking AI",
    "Industrial IoT Kuwait",
    "edge computing industrial",
  ],
};

const faqItems = [
  {
    q: "What is Space AI and how does it differ from traditional monitoring?",
    a: "Space AI is our strategic industrial AI partnership that goes beyond rule-based monitoring. It uses deep learning, pattern recognition, and predictive analytics to detect anomalies, forecast failures, and recommend optimal actions — all in real time, often at the edge. Unlike traditional threshold alarms, Space AI learns normal behavior and surfaces subtle deviations weeks before they become failures.",
  },
  {
    q: "How quickly can Space AI deliver ROI?",
    a: "Most Space AI deployments deliver measurable ROI within 3 to 6 months. Predictive maintenance alone typically reduces unplanned downtime by 30-50%, while process optimization can improve yield by 5-15% depending on the application. We start with a focused pilot on your highest-value asset to quantify gains before scaling.",
  },
  {
    q: "Does Space AI work with our existing SCADA and historians?",
    a: "Yes. Space AI integrates with the leading SCADA platforms (ICONICS Genesis64, iFIX, Mitsubishi, AVEVA) and historians (Hyper Historian, OSIsoft PI). It can ingest live tag data, historian exports, vibration files, and lab data — no rip-and-replace required.",
  },
  {
    q: "Can Space AI run at the edge for latency-critical applications?",
    a: "Absolutely. Space AI supports edge deployment on industrial gateways and PCs for sub-second inference — critical for vibration monitoring, machine safety, and closed-loop control. Cloud deployment is used for fleet-level learning, model training, and cross-site analytics.",
  },
  {
    q: "Is Space AI suitable for ESG and carbon reporting?",
    a: "Yes. Space AI's smart monitoring module includes real-time energy analytics and ESG & carbon tracking — automatically aggregating Scope 1 and 2 emissions, energy intensity, and sustainability KPIs into auditable dashboards for corporate reporting and regulatory disclosure.",
  },
];

export default function SpaceAIPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
          { name: "Space AI", href: "/solutions/space-ai/" },
        ]}
      />
      <ServiceJsonLd
        name="Space AI — Industrial AI & Machine Learning Solutions"
        description="Predictive maintenance, process optimization, and smart monitoring powered by deep learning, edge computing, big data analytics, and Industrial IoT. Reduce unplanned downtime by 50%."
        url="/solutions/space-ai/"
        serviceType="Industrial Artificial Intelligence"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ProductJsonLd
        name="Space AI — Industrial AI Platform"
        description="Next-generation AI and machine learning platform for industry — predictive maintenance, process optimization with virtual metrology, and smart monitoring with ESG & carbon tracking."
        url="/solutions/space-ai/"
        brand="Space AI"
        category="Industrial AI & Machine Learning"
      />
      <FaqPageJsonLd items={faqItems} />
      <SpeakableJsonLd headline="Space AI — Industrial AI & Machine Learning Solutions" />
      <SpaceAiContent />
    </>
  );
}
