import type { ServicePageData } from "@/components/v3/service/types";
import { Gauge, ShieldCheck, Activity, Award, Wrench, Settings, Cpu, CheckCircle } from "lucide-react";

export const flowMeasurementData: ServicePageData = {
  slug: "flow-measurement-solutions",
  category: "Flow Measurement Solutions",
  title: "Flow Measurement & Control System Solutions",
  subtitle:
    "We provide metering control system upgrades, maintenance, and validation services for custody metering systems across Kuwait and the GCC. Our experienced team ensures your fiscal metering systems operate with absolute accuracy, continuous auditability, and full compliance with OIML, AGA, ISO, and API MPMS standards.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Flow Measurement Solutions" },
  ],
  primaryCta: {
    label: "Contact Engineering Team",
    href: "/contacts/",
  },
  secondaryCta: {
    label: "Explore All Services",
    href: "/services/",
  },
  heroImage: {
    src: "/images/services/Banc-Calibr.jpg",
    alt: "Industrial flow meter calibration bench with test line piping and valves",
    objectPosition: "center 42%",
  },
  stats: [
    { value: "API MPMS & AGA", label: "Fiscal Compliance", note: "International Standards" },
    { value: "±0.05%", label: "Fiscal Calibration", note: "Measurement Accuracy" },
    { value: "OIML R117", label: "Custody Transfer", note: "Certified Systems" },
    { value: "24/7", label: "Engineering Support", note: "Kuwait & UAE Field Support" },
  ],
  comparisonBlog: {
    title: "Coriolis vs Ultrasonic Flow Meters: Accuracy and Application Guide",
    href: "/blog/coriolis-vs-ultrasonic-flow-comparison/",
  },
  overview: {
    eyebrow: "Overview & Engineering Scope",
    heading: "Custody Transfer & Fiscal Metering Control Architecture",
    paragraphs: [
      "We provide metering control system upgrades, maintenance, and validation services for custody metering systems across Kuwait and the GCC. Our experienced team ensures your fiscal metering systems operate with absolute accuracy, continuous auditability, and full compliance with OIML, AGA, ISO, and API MPMS standards.",
      "Texas Technical Services Co. (TTS) provides comprehensive flow measurement engineering across Ahmadi, Kuwait, and the wider GCC region. We specialize in designing, upgrading, maintaining, and validating custody transfer fiscal metering systems for upstream production, midstream pipelines, and downstream refining terminals.",
      "Our certified metering specialists ensure continuous audit compliance with international measurement bodies including API MPMS, AGA reports, OIML R117, and ISO 15136 — safeguarding financial equity across continuous hydrocarbon transfers.",
    ],
    checklist: [
      "Custody transfer fiscal metering skid engineering & integration",
      "Flow computer configuration & programming to API MPMS Chapter 21",
      "ILAC/COFRAC ISO 17025 accredited flow meter calibrations",
      "Measurement uncertainty calculations & fiscal system audits",
      "Helical turbine & multipath ultrasonic meter maintenance",
      "Authorized OEM representative for Faure Herman & Meter Engineers",
    ],
    image: {
      src: "/images/services/METERING-1.png",
      alt: "Custody transfer flow metering control skid integration by Texas Technical Services",
      fit: "contain",
    },
    badge: {
      title: "AUTHORISED OEM",
      subtitle: "Faure Herman Representative",
    },
  },
  capabilities: {
    eyebrow: "Specialized Disciplines",
    title: "Explore Flow Measurement Capabilities",
    description:
      "From skid integration and flow computer configuration to accredited field calibrations and uncertainty audits, explore our full spectrum of specialized flow measurement capabilities.",
    columns: 3,
    items: [
      {
        title: "Metering Control System Integration",
        category: "Flow Measurement Solutions",
        description:
          "Welcome to TTS, where we specialize in Custody Transfer Flow Metering Control System Development and Integration. With an unwavering commitment to precision, accuracy, and compliance, we are your trusted partner for optimizing and enhancing your custody transfer operations.",
        href: "/service/metering-control-system-integration/",
        icon: Cpu,
      },
      {
        title: "Upgrade of Metering Control System",
        category: "Flow Measurement Solutions",
        description:
          "Elevate your industrial operations with our expert Metering Control System Upgradation service. At TTS, we specialize in optimizing your existing control systems, ensuring they meet the latest industry standards and performance benchmarks.",
        href: "/service/upgrade-of-metering-control-system/",
        icon: Settings,
      },
      {
        title: "Flow Computer Configuration",
        category: "Flow Measurement Solutions",
        description:
          "Our dedicated team customizes solutions to your specific flow computational and configuration needs in compliance to global standards (API MPMS, AGA, ISO, NTEP & OIML), guaranteeing seamless integration into your existing systems.",
        href: "/service/flow-computer-configuration/",
        icon: Activity,
      },
      {
        title: "Flow Meter Calibration",
        category: "Flow Measurement Solutions",
        description:
          "Faure Herman offers calibration services in our world class ILAC/COFRAC ISO 17025 accredited facility located in France to handle your range of flowmeters, provide service available to other brands and on-site proving with certified mobile provers.",
        href: "/service/flow-meter-calibration/",
        icon: Gauge,
      },
      {
        title: "Repair & Upgrades for Helical Flow Meters",
        category: "Flow Measurement Solutions",
        description:
          "We offer flow meters preventive and corrective maintenance services, performance and failure analysis and provide suitable solutions to restore accuracy and operational reliability.",
        href: "/service/repair-upgrades-for-helical-flow-meters/",
        icon: Wrench,
      },
      {
        title: "Audits and Specialized Consultancy",
        category: "Flow Measurement Solutions",
        description:
          "We offer comprehensive audits to ensure compliance with industry regulations and standards, minimizing risks and ensuring precise measurements within your custody metering skid system. Our team of expert consultants provides independent validation.",
        href: "/service/audits-and-specialized-consultancy/",
        icon: ShieldCheck,
      },
      {
        title: "Validation and Uncertainty Calculations",
        category: "Flow Measurement Solutions",
        description:
          "Our team of skilled experts employs advanced techniques and calculations to assess and minimize uncertainties, giving you confidence in the reliability of your measurement data. Whether you need validation services or compliance auditing, we deliver complete certainty.",
        href: "/service/validation-and-uncertainty-calculations/",
        icon: CheckCircle,
      },
      {
        title: "Commissioning and After Sales Support",
        category: "Flow Measurement Solutions",
        description:
          "Elevate your industrial processes with our Commissioning and After Sales Support services. At TTS, we specialize in ensuring the seamless integration and performance of critical equipment, including flow meters, metering control systems, and instrumentation.",
        href: "/service/commissioning-and-after-sales-support/",
        icon: Award,
      },
      {
        title: "Genuine Spare Parts",
        category: "Flow Measurement Solutions",
        description:
          "Being an Authorized OEM's Representative, discover top-quality genuine spare parts for flow metering, flow meters, control systems, analyzers, CEMS, and industrial sensors at TTS. With a commitment to excellence, we supply factory-certified parts.",
        href: "/service/genuine-spare-parts/",
        icon: Wrench,
      },
      {
        title: "Metering Expert Services",
        category: "Flow Measurement Solutions",
        description:
          "We take pride in offering an elite team of flow metering specialists, exclusively dedicated to enhancing your custody metering solutions. Our certified experts possess a profound understanding of custody metering regulations and operational best practices.",
        href: "/service/metering-expert-services/",
        icon: Award,
      },
    ],
  },
  process: {
    eyebrow: "Turnkey Execution",
    title: "How We Deliver Metering Systems",
    description:
      "A systematic, standards-aligned lifecycle from conceptual sizing and piping design to on-site commissioning and statutory fiscal proving.",
    steps: [
      {
        stepNumber: 1,
        title: "Design & Sizing",
        description:
          "Detailed engineering calculations (flow velocity, Reynolds number, beta ratio) aligned with API MPMS, AGA, and client process parameters.",
      },
      {
        stepNumber: 2,
        title: "System Integration",
        description:
          "Panel fabrication, redundant flow computer configuration, PLC programming, and fieldbus networking (Modbus TCP, Foundation Fieldbus, HART).",
      },
      {
        stepNumber: 3,
        title: "Factory Acceptance Testing (FAT)",
        description:
          "Comprehensive software loop checks, simulation testing, hydrostatic testing, and third-party witness inspection prior to dispatch.",
      },
      {
        stepNumber: 4,
        title: "Site Commissioning & Proving",
        description:
          "On-site integration, master meter proving or bidirectional prover loop calibration, and statutory custody transfer sign-off.",
      },
    ],
  },
  specifications: {
    eyebrow: "Engineering Compliance",
    title: "Fiscal Standards & Technical Specifications",
    description:
      "All custody transfer flow metering solutions designed and integrated by Texas Technical Services strictly comply with international metrology codes.",
    caption: "Metrology & Engineering Code Compliance",
    headers: { parameter: "Engineering Parameter", value: "Code / Specification", notes: "Compliance Scope" },
    rows: [
      {
        parameter: "Custody Transfer Liquid Metering",
        value: "API MPMS Chapter 5 (Metering), Chapter 6 (LACT)",
        notes: "Crude oil & refined hydrocarbon fiscal transfer",
      },
      {
        parameter: "Gas Flow Measurement",
        value: "AGA Report No. 7 (Turbine), No. 9 (Ultrasonic), No. 11 (Coriolis)",
        notes: "Natural gas pipeline & export metering",
      },
      {
        parameter: "Flow Computer Calculations",
        value: "API MPMS Chapter 21.1 / 21.2 & OIML R117",
        notes: "Electronic flow measurement audit trail",
      },
      {
        parameter: "Measurement Uncertainty",
        value: "ISO 5168 / GUM (Guide to the Expression of Uncertainty)",
        notes: "Overall mass/volume uncertainty budget ≤ ±0.1%",
      },
      {
        parameter: "Pressure Piping Design",
        value: "ASME B31.3 Process Piping / ASME B31.8 Gas Transmission",
        notes: "ANSI Class 150 through 2500 ratings",
      },
      {
        parameter: "Hazardous Area Certification",
        value: "ATEX / IECEx Zone 1 & Zone 2, Ex d / Ex ia",
        notes: "Class I, Division 1 / 2 electrical safety",
      },
    ],
  },
  partners: {
    eyebrow: "Authorized Partners",
    title: "Global Flow Metrology OEM Alliances",
    description:
      "We partner with the world's leading metrology and instrumentation manufacturers to deliver certified custody transfer solutions across the GCC.",
    items: [
      {
        name: "Faure Herman",
        logo: "/about/faure-herman.jpg",
        category: "Flow Meters",
        description: "Heliflu helical turbine & ultrasonic flow meters.",
        url: "/products/flow-meters/liquid-flow-meters/",
      },
      {
        name: "Meter Engineers",
        logo: "/about/meter-engineers.jpg",
        category: "Provers",
        description: "Unidirectional & bidirectional sphere & piston provers.",
        url: "/service/flow-meter-calibration/",
      },
      {
        name: "Endress+Hauser",
        logo: "/about/endress-hauser.jpg",
        category: "Instrumentation",
        description: "FLOWSIC gas meters & process instrumentation.",
        url: "/products/analyzers/cems/",
      },
      {
        name: "SICK AG",
        logo: "/about/sick.jpg",
        category: "Sensors & Meters",
        description: "Ultrasonic gas flow and flare measurement.",
        url: "/products/sensors/",
      },
      {
        name: "Mitsubishi Electric",
        logo: "/about/mitsubishi-electric.png",
        category: "Automation",
        description: "Authorized PLC & SCADA integration.",
        url: "/solutions/mitsubishi-electric/",
      },
      {
        name: "BIS",
        logo: "/about/bis.png",
        category: "Integration",
        description: "Industrial process instrumentation partner.",
        url: "/solutions/",
      },
    ],
  },
  industriesServed: {
    eyebrow: "Application Sectors",
    title: "Industries Utilizing Our Flow Solutions",
    description:
      "Critical flow measurement infrastructure operating in demanding environments across the GCC.",
    items: [
      {
        slug: "oil-gas",
        name: "Oil & Gas Production",
        description: "Wellhead allocation skids, gathering center custody transfer, and pipeline export.",
      },
      {
        slug: "refinery",
        name: "Refining & Petrochemicals",
        description: "Downstream custody transfer, finished product blenders, and tank farm inventory.",
      },
      {
        slug: "petrochemicals",
        name: "Petrochemical Complexes",
        description: "High-precision ethylene, propylene, and chemical mass flow measurement.",
      },
      {
        slug: "lng",
        name: "LNG Terminals & Cryogenics",
        description: "Cryogenic custody transfer metering with automated boil-off gas reconciliation.",
      },
    ],
  },
  relatedServices: {
    eyebrow: "Complementary Disciplines",
    title: "Which Services Complement Flow Measurement?",
    description:
      "Combine flow measurement with our field calibration, SCADA integration, and non-destructive testing for end-to-end plant assurance.",
    items: [
      {
        slug: "flow-computer-configuration",
        label: "Flow Computer Configuration",
        description:
          "Programming, configuration, and calibration of fiscal flow computers to API MPMS and AGA standards.",
      },
      {
        slug: "flow-meter-calibration",
        label: "Flow Meter Calibration",
        description:
          "ISO 17025 accredited laboratory calibrations and on-site prover loop validation across Kuwait & Dubai.",
      },
      {
        slug: "metering-control-system-integration",
        label: "Metering Control System Integration",
        description:
          "Custody transfer flow metering control system development, SCADA & PLC integration, and cybersecurity.",
      },
    ],
  },
  faq: [
    {
      q: "What is custody transfer metering?",
      a: "Custody transfer metering is a highly accurate measurement system used when ownership of oil, gas, or refined products passes from one party to another — typically from a producer to a pipeline, refinery, or terminal. These metering systems must comply with international standards such as API MPMS, AGA, ISO, and OIML. Our team specializes in designing, integrating, and maintaining custody transfer metering systems that meet fiscal measurement requirements for accuracy and reliability.",
    },
    {
      q: "Why is flow measurement accuracy important in oil and gas?",
      a: "Flow measurement accuracy directly impacts revenue, regulatory compliance, and operational efficiency in the oil and gas industry. Even a 0.1% measurement error in a high-volume custody transfer application can result in significant financial losses. Accurate flow measurement also ensures compliance with environmental regulations, optimizes production allocation, and provides reliable data for reservoir management and pipeline operations.",
    },
    {
      q: "What is flow computer configuration?",
      a: "Flow computer configuration involves programming and calibrating specialized computing devices that calculate flow rates, totals, and quality parameters based on input from flow meters, pressure transmitters, temperature sensors, and gas chromatographs. Our engineers configure flow computers to comply with API MPMS Chapter 21, AGA reports, and OIML R117 standards, ensuring accurate and auditable fiscal measurement data.",
    },
    {
      q: "What flow measurement services do you offer in Ahmadi, Kuwait?",
      a: "We offer comprehensive flow measurement services in Ahmadi, Kuwait and across the GCC including metering control system upgrades and integration, flow computer configuration and programming, flow meter calibration and validation, helical flow meter repair and maintenance, metering system audits and specialized consultancy, and commissioning and after-sales support for custody transfer metering systems.",
    },
    {
      q: "What standards do your flow measurement services comply with?",
      a: "Our flow measurement services comply with all major international standards including API MPMS (Manual of Petroleum Measurement Standards), AGA (American Gas Association) reports, ISO 15136, OIML R117 and R137, and NTEP (National Type Evaluation Program). We ensure every metering system we deliver meets the rigorous accuracy and traceability requirements required for fiscal custody transfer applications.",
    },
  ],
  meta: {
    title: "Flow Measurement & Control System Solutions",
    description:
      "Flow measurement solutions across the GCC — metering system upgrades, validation, flow computer configuration, and custody metering consultancy.",
    alternates: {
      canonical: "/service/flow-measurement-solutions/",
    },
    openGraph: {
      title: "Flow Measurement & Control System Solutions",
      description:
        "Flow measurement services in Ahmadi, Kuwait — expert custody transfer metering, system integration, upgrades, flow computer configuration, calibration, and validation across the GCC.",
      url: "/service/flow-measurement-solutions/",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: "Flow Measurement & Control System Solutions — Texas Technical Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Flow Measurement & Control System Solutions",
      description:
        "Flow measurement services in Ahmadi Kuwait — custody metering upgrades, calibration, validation, flow computer configuration across Kuwait and the GCC.",
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
    },
    keywords: [
      "flow measurement services in Ahmadi Kuwait",
      "flow measurement solutions Kuwait",
      "custody transfer metering Kuwait",
      "metering control system integration",
      "flow computer configuration",
      "flow meter calibration Kuwait",
      "helical flow meter repair",
      "metering system validation",
      "OIML AGA API MPMS compliance",
      "Texas Technical Services flow measurement",
      "metering skids Kuwait",
      "mass flow measurement devices GCC",
      "ultrasonic pipe flow meter Dubai",
      "insertion thermal mass flow meter",
      "clamp on liquid flow meter Kuwait",
      "sanitary magnetic flow meter",
      "high pressure gas flow meter GCC",
      "natural gas flow meter Kuwait",
      "flow meter technology",
      "Coriolis flow meter calibration Kuwait",
    ],
  },
  jsonLd: {
    serviceType: "Flow Measurement",
    description:
      "Flow measurement services in Ahmadi, Kuwait and across the GCC — metering control system upgrades, maintenance, validation, flow computer configuration, calibration, and specialized consultancy for custody metering systems.",
    areaServed: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"],
  },
};
