import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import TexaflowContent from "@/components/solutions/TexaflowContent";
import SpaceAiContent from "@/components/solutions/SpaceAiContent";
import MitsubishiContent from "@/components/solutions/MitsubishiContent";
import PwsFloorSolutions from "@/components/solutions/PwsFloorSolutions";

interface SolutionMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
  twitterTitle: string;
  twitterDesc: string;
  keywords: string[];
  serviceName: string;
  serviceDesc: string;
  productName: string;
  productDesc: string;
  productBrand: string;
  productCategory: string;
  faqItems: { q: string; a: string }[];
}

const SOLUTIONS_DATA: Record<string, SolutionMeta> = {
  texaflow: {
    title: "Texaflow — Custody Metering Integrated Control System Kuwait",
    description:
      "Texaflow is our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline metering stations, loading facilities, power plants, and airports.",
    canonical: "/solutions/texaflow/",
    ogTitle: "Texaflow — Custody Metering Integrated Control System",
    ogDesc:
      "Our proprietary custody transfer control system — automated meter proving, real-time flow computer integration, regulatory compliance (API/OIML), and remote monitoring.",
    twitterTitle: "Texaflow",
    twitterDesc:
      "Proprietary custody metering integrated control system for fiscal metering & SCADA — Kuwait, UAE, GCC.",
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
    serviceName: "Texaflow — Custody Metering Integrated Control System",
    serviceDesc:
      "Proprietary custody transfer control system for oil & gas terminals, refineries, and pipeline metering stations — automated proving, real-time flow computer integration, and regulatory compliance.",
    productName: "Texaflow Custody Metering Integrated Control System",
    productDesc:
      "Advanced fiscal metering & SCADA solution — integrated custody transfer metering, automated meter proving, API/OIML compliance, multi-product handling, and remote monitoring.",
    productBrand: "Texas Technical Services",
    productCategory: "Custody Transfer Metering & SCADA",
    faqItems: [
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
    ],
  },
  "space-ai": {
    title: "Space AI — Industrial AI & Machine Learning Solutions",
    description:
      "Space AI delivers next-generation AI and machine learning for industry — predictive maintenance, process optimization with virtual metrology & digital twin, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    canonical: "/solutions/space-ai/",
    ogTitle: "Space AI — Industrial AI Solutions",
    ogDesc:
      "Predictive Maintenance, Process Optimization, and Smart Monitoring powered by deep learning, edge computing, big data analytics, and Industrial IoT.",
    twitterTitle: "Space AI",
    twitterDesc:
      "Next-generation AI for industry — reduce downtime 50%, increase yield, enable autonomous optimization. Kuwait & GCC.",
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
    serviceName: "Space AI — Industrial AI & Machine Learning Solutions",
    serviceDesc:
      "Predictive maintenance, process optimization, and smart monitoring powered by deep learning, edge computing, big data analytics, and Industrial IoT. Reduce unplanned downtime by 50%.",
    productName: "Space AI — Industrial AI Platform",
    productDesc:
      "Next-generation AI and machine learning platform for industry — predictive maintenance, process optimization with virtual metrology, and smart monitoring with ESG & carbon tracking.",
    productBrand: "Space AI",
    productCategory: "Industrial AI & Machine Learning",
    faqItems: [
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
    ],
  },
  "mitsubishi-electric": {
    title: "Mitsubishi Electric Factory Automation Solutions | Authorized Integrator",
    description:
      "Texas Technical Services is a Mitsubishi system integrator in Kuwait, UAE, and Dubai — offering Mitsubishi electric factory automation, PLC, HMI, servo drives, and Iconics SCADA integration for oil & gas and industrial sectors across the GCC.",
    canonical: "/solutions/mitsubishi-electric/",
    ogTitle: "Mitsubishi Electric Factory Automation Solutions",
    ogDesc:
      "Authorized Mitsubishi electric factory automation integrator — PLC, HMI, AC servo systems, frequency inverters, and Iconics SCADA solutions for industrial automation across Kuwait and the GCC.",
    twitterTitle: "Mitsubishi Electric Factory Automation Kuwait",
    twitterDesc:
      "Authorized Mitsubishi system integrator — MELSEC PLCs, GOT HMIs, MR-J servo drives, FREQROL VFDs, and ICONICS SCADA for industrial automation across Kuwait and the GCC.",
    keywords: [
      "Mitsubishi Electric Kuwait",
      "Mitsubishi PLC programming Kuwait",
      "Mitsubishi HMI GOT Kuwait",
      "Mitsubishi servo drives Kuwait",
      "Mitsubishi VFD FREQROL Kuwait",
      "Iconics SCADA Mitsubishi",
      "factory automation Kuwait",
      "Mitsubishi system integrator GCC",
    ],
    serviceName: "Mitsubishi Electric Factory Automation Solutions",
    serviceDesc:
      "Authorized Mitsubishi Electric system integrator in Kuwait and the GCC — PLC, servo drives, VFDs, SCADA, HMI, and CNC solutions for industrial automation across oil & gas, manufacturing, and process industries.",
    productName: "Mitsubishi Electric Factory Automation Portfolio",
    productDesc:
      "Complete Mitsubishi Electric automation portfolio — PLC (MELSEC iQ-R/F/L/Q series), servo drives (MR-J5), VFDs (FR-E800/F800), SCADA (ICONICS), HMI (GOT2000), and CNC solutions — as an authorized system integrator in Kuwait and the GCC.",
    productBrand: "Mitsubishi Electric",
    productCategory: "Industrial Automation",
    faqItems: [
      {
        q: "Are you an authorized Mitsubishi Electric system integrator?",
        a: "Yes, Texas Technical Services Co. is an authorized Mitsubishi Electric system integrator in Kuwait and the GCC. We have certified engineers trained on the full Mitsubishi automation portfolio including MELSEC PLC series, GOT HMI panels, MR-J servo drives, FREQROL VFDs, and ICONICS SCADA platforms.",
      },
      {
        q: "Which Mitsubishi PLC series do you support?",
        a: "We support the complete Mitsubishi MELSEC PLC lineup: the iQ-R series (high-end, modular), iQ-F series (compact, cost-effective), L series (high-speed, mid-range), and legacy Q series. We also provide migration services from older A-series and Q-series to the latest platforms.",
      },
      {
        q: "Do you supply Mitsubishi spare parts and replacements?",
        a: "Yes, we supply genuine Mitsubishi Electric automation components including MELSEC PLCs, GOT HMIs, MR-J servo drives and motors, FREQROL VFDs, and spare parts. As an authorized integrator, we provide competitive pricing, fast delivery across Kuwait and the GCC.",
      },
      {
        q: "Which industries use Mitsubishi factory automation solutions?",
        a: "Mitsubishi factory automation solutions are deployed across oil and gas, manufacturing, water and wastewater, power generation, cement and metals, and food and beverage industries.",
      },
    ],
  },
  "pws-floor-solutions": {
    title: "PWS Floor Solutions — Raised Access Flooring Systems",
    description:
      "PWS Floor Solutions is India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, labs, and clean rooms. GREENGUARD Gold, RoHS, EN 12825, CISCA certified.",
    canonical: "/solutions/pws-floor-solutions/",
    ogTitle: "PWS Floor Solutions — Raised Access Flooring",
    ogDesc:
      "Premium raised access flooring systems for data centers, control rooms, and clean rooms. 15+ years experience, 250+ projects, 1M+ sq.ft. installed.",
    twitterTitle: "PWS Floor Solutions — Raised Access Flooring",
    twitterDesc:
      "Premium raised access flooring for data centers, control rooms, NOCs, and clean rooms. GREENGUARD Gold, EN 12825 certified. Authorized dealer in Kuwait and the GCC.",
    keywords: [
      "raised access flooring Kuwait",
      "PWS Floor Solutions Kuwait",
      "data center flooring Kuwait",
      "control room raised floor GCC",
      "calcium sulphate floor panels",
      "GREENGUARD Gold flooring",
      "raised floor data center",
    ],
    serviceName: "PWS Floor Solutions — Raised Access Flooring",
    serviceDesc:
      "Premium raised access flooring systems for data centers, control rooms, NOCs, labs, and clean rooms. Calcium sulphate panels, anti-static, fire resistant, GREENGUARD Gold certified. Authorized dealer in Kuwait and the GCC.",
    productName: "PWS Floor Solutions Raised Access Flooring",
    productDesc:
      "PWS Floor Solutions raised access flooring — high-density calcium sulphate panels with steel or aluminum encapsulation for data centers, control rooms, NOCs, and clean rooms. GREENGUARD Gold, EN 12825, CISCA certified.",
    productBrand: "PWS Floor Solutions",
    productCategory: "Raised Access Flooring",
    faqItems: [
      {
        q: "What is a raised access floor and where is it used?",
        a: "A raised access floor is a modular flooring system installed over a structural slab, creating a hidden plenum for cables, HVAC, and services. It is widely used in data centers, NOCs, control rooms, clean rooms, and modern offices.",
      },
      {
        q: "What certifications does PWS Floor Solutions hold?",
        a: "PWS Floor Solutions panels are GREENGUARD Gold certified, RoHS compliant, manufactured to EN 12825, CISCA-recommended, and ASTM tested. PWS is also an IGBC member.",
      },
      {
        q: "What is the load capacity of PWS raised floor panels?",
        a: "PWS panels are built around a high-density calcium sulphate core with steel or aluminum encapsulation, providing excellent load-bearing capacity for heavy server racks, control consoles, and industrial equipment.",
      },
      {
        q: "Do you supply and install PWS flooring in Kuwait and the GCC?",
        a: "Yes. As the authorized dealer for PWS Floor Solutions, Texas Technical Services supplies, installs, and supports raised access flooring projects across Kuwait, the UAE, Saudi Arabia, and the wider GCC.",
      },
    ],
  },
};

const ALL_SLUGS = Object.keys(SOLUTIONS_DATA);

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = SOLUTIONS_DATA[slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDesc,
      url: meta.canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDesc,
    },
    keywords: meta.keywords,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = SOLUTIONS_DATA[slug];
  if (!meta) notFound();

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions/" },
          { name: meta.serviceName, href: meta.canonical },
        ]}
      />
      <SpeakableJsonLd headline={meta.title} />
      <ServiceJsonLd
        name={meta.serviceName}
        description={meta.serviceDesc}
        url={meta.canonical}
        serviceType="Industrial Solution"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      <ProductJsonLd
        name={meta.productName}
        description={meta.productDesc}
        url={meta.canonical}
        brand={meta.productBrand}
        category={meta.productCategory}
      />
      <FaqPageJsonLd items={meta.faqItems} />

      {slug === "texaflow" && <TexaflowContent />}
      {slug === "space-ai" && <SpaceAiContent />}
      {slug === "mitsubishi-electric" && <MitsubishiContent />}
      {slug === "pws-floor-solutions" && <PwsFloorSolutions />}

      <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PageFaqSection
            items={meta.faqItems}
            title="Questions About"
            highlight={meta.serviceName.split("—")[0].trim()}
          />
        </div>
      </section>
    </div>
  );
}
