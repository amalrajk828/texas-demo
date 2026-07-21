import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/schema/ServiceJsonLd";
import { ProductJsonLd } from "@/components/schema/ProductJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import MitsubishiContent from "@/components/solutions/MitsubishiContent";
import PwsFloorSolutions from "@/components/solutions/PwsFloorSolutions";

const SLUGS = ["mitsubishi-electric", "pws-floor-solutions"];

const META: Record<string, { title: string; description: string; canonical: string; ogTitle: string; ogDesc: string; twitterTitle: string; twitterDesc: string; keywords: string[]; serviceName: string; serviceDesc: string; productDesc: string; faqItems: { q: string; a: string }[] }> = {
  "mitsubishi-electric": {
    title: "Mitsubishi Electric Factory Automation Solutions | Authorized Integrator",
    description:
      "Texas Technical Services is a Mitsubishi system integrator in Kuwait, UAE, and Dubai — offering Mitsubishi electric factory automation, PLC, HMI, servo drives, and Iconics SCADA integration for oil & gas and industrial sectors across the GCC.",
    canonical: "/solutions/mitsubishi-electric/",
    ogTitle: "Mitsubishi Electric Factory Automation Solutions",
    ogDesc: "Authorized Mitsubishi electric factory automation integrator — PLC, HMI, AC servo systems, frequency inverters, and Iconics SCADA solutions for industrial automation across Kuwait and the GCC.",
    twitterTitle: "Mitsubishi Electric Factory Automation Kuwait",
    twitterDesc: "Authorized Mitsubishi system integrator — MELSEC PLCs, GOT HMIs, MR-J servo drives, FREQROL VFDs, and ICONICS SCADA for industrial automation across Kuwait and the GCC.",
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
    serviceDesc: "Authorized Mitsubishi Electric system integrator in Kuwait and the GCC — PLC, servo drives, VFDs, SCADA, HMI, and CNC solutions for industrial automation across oil & gas, manufacturing, and process industries.",
    productDesc: "Complete Mitsubishi Electric automation portfolio — PLC (MELSEC iQ-R/F/L/Q series), servo drives (MR-J5), VFDs (FR-E800/F800), SCADA (ICONICS), HMI (GOT2000), and CNC solutions — as an authorized system integrator in Kuwait and the GCC.",
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
    ogDesc: "Premium raised access flooring systems for data centers, control rooms, and clean rooms. 15+ years experience, 250+ projects, 1M+ sq.ft. installed.",
    twitterTitle: "PWS Floor Solutions — Raised Access Flooring",
    twitterDesc: "Premium raised access flooring for data centers, control rooms, NOCs, and clean rooms. GREENGUARD Gold, EN 12825 certified. Authorized dealer in Kuwait and the GCC.",
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
    serviceDesc: "Premium raised access flooring systems for data centers, control rooms, NOCs, labs, and clean rooms. Calcium sulphate panels, anti-static, fire resistant, GREENGUARD Gold certified. Authorized dealer in Kuwait and the GCC.",
    productDesc: "PWS Floor Solutions raised access flooring — high-density calcium sulphate panels with steel or aluminum encapsulation for data centers, control rooms, NOCs, and clean rooms. GREENGUARD Gold, EN 12825, CISCA certified.",
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

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = META[slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: { title: meta.ogTitle, description: meta.ogDesc, url: meta.canonical },
    twitter: { card: "summary_large_image", title: meta.twitterTitle, description: meta.twitterDesc },
    keywords: meta.keywords,
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = META[slug];
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
      <ServiceJsonLd
        name={meta.serviceName}
        description={meta.serviceDesc}
        url={meta.canonical}
        serviceType="Industrial Solution"
        areaServed={["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"]}
      />
      {slug === "mitsubishi-electric" && (
        <ProductJsonLd
          name="Mitsubishi Electric Factory Automation"
          description={meta.productDesc}
          url={meta.canonical}
          brand="Mitsubishi Electric"
          category="Industrial Automation"
        />
      )}
      {slug === "pws-floor-solutions" && (
        <ProductJsonLd
          name="PWS Floor Solutions Raised Access Flooring"
          description={meta.productDesc}
          url={meta.canonical}
          brand="PWS Floor Solutions"
          category="Raised Access Flooring"
        />
      )}
      <FaqPageJsonLd items={meta.faqItems} />

      {slug === "mitsubishi-electric" && <MitsubishiContent />}
      {slug === "pws-floor-solutions" && <PwsFloorSolutions />}
    </div>
  );
}
