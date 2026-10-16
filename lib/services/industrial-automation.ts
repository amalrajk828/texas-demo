import type { ServicePageData } from "@/components/v3/service/types";
import { Cpu, Settings, Award, Activity, Wrench, ShieldCheck } from "lucide-react";

export const industrialAutomationData: ServicePageData = {
  slug: "industrial-automation",
  category: "Industrial Automation",
  title: "Industrial Automation, PLC SCADA & Process Control Solutions",
  subtitle:
    "As a leading PLC and SCADA system integrator in Kuwait and the GCC, we provide total industrial automation & control systems using various brands of PLCs, SCADA, and HMIs. We specialize in industrial automation control system design, control and automation engineering, and plant and process automation — delivering automation in manufacturing industry, power plant automation, and oil & gas process control across Kuwait, UAE, Dubai, and Saudi Arabia.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Industrial Automation" },
  ],
  primaryCta: {
    label: "Consult Automation Specialists",
    href: "/contacts/",
  },
  secondaryCta: {
    label: "Explore All Services",
    href: "/services/",
  },
  heroImage: {
    src: "/images/services/automation_full.jpg",
    alt: "Industrial automation control system — PLC SCADA integration by Texas Technical Services Kuwait",
  },
  stats: [
    { value: "PLC", label: "Multi-Brand Integration", note: "Siemens, Rockwell, Schneider, Mitsubishi" },
    { value: "SCADA", label: "System Upgrades", note: "Next-gen telemetry & IoT" },
    { value: "HMI", label: "Custom Development", note: "High-visibility operator panels" },
    { value: "EPC", label: "Turnkey Delivery", note: "Greenfield & brownfield builds" },
  ],
  comparisonBlog: {
    title: "PLC vs DCS: Choosing the Right Industrial Automation Platform",
    href: "/blog/plc-vs-dcs-automation-comparison/",
  },
  overview: {
    eyebrow: "Automation Engineering Scope",
    heading: "End-to-End Process Control & Automation Architecture",
    paragraphs: [
      "As a leading PLC and SCADA system integrator in Kuwait and the GCC, we provide total industrial automation & control systems using various brands of PLCs, SCADA, and HMIs. We specialize in industrial automation control system design, control and automation engineering, and plant and process automation — delivering automation in manufacturing industry, power plant automation, and oil & gas process control across Kuwait, UAE, Dubai, and Saudi Arabia.",
      "Texas Technical Services Co. (TTS) provides comprehensive automation and control system engineering across the GCC. From multi-brand PLC programming and SCADA telemetry design to Safety Instrumented Systems (SIS) and legacy migration, we optimize facility uptime, throughput, and operational safety.",
      "Our automation engineers are proficient in Rockwell Studio 5000 Logix Designer, Siemens TIA Portal, Schneider EcoStruxure, and Mitsubishi GX Works, backed by authorized OEM partnerships with Mitsubishi Electric and ICONICS.",
    ],
    checklist: [
      "Multi-brand PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi)",
      "SCADA & Telemetry software integration (ICONICS GENESIS64, WinCC, iFIX)",
      "Safety Instrumented System (SIS) design to IEC 61508 / IEC 61511 (SIL 2 / SIL 3)",
      "Legacy DCS and PLC migration with minimal scheduled downtime",
      "Control panel engineering, fabrication, and Factory Acceptance Testing (FAT)",
      "Continuous Emission Monitoring System (CEMS) & analyzer telemetry integration",
    ],
    image: {
      src: "/images/services/automation.jpg",
      alt: "Industrial PLC and SCADA control panel assembly — Texas Technical Services",
    },
    badge: {
      title: "SYSTEM INTEGRATOR",
      subtitle: "Mitsubishi Electric & ICONICS",
    },
  },
  capabilities: {
    eyebrow: "Core Capabilities",
    title: "Our Automation Services",
    description:
      "From turnkey plant automation to control software upgrades and commissioning support, explore our core industrial automation disciplines.",
    columns: 3,
    items: [
      {
        title: "Process Plant Automation",
        category: "Industrial Automation",
        description:
          "Plant Automation Excellence: At TTS, we specialize in delivering top-tier Plant Automation solutions that streamline your industrial processes. Our cutting-edge automation systems are designed to boost efficiency, reduce operational costs, and enhance overall productivity — ensuring your plant operates at peak performance levels with full visibility and control.",
        href: "/service/plant-automation/",
        icon: Cpu,
      },
      {
        title: "Control System Integration and Upgradation",
        category: "Industrial Automation",
        description:
          "At TTS, we are your trusted partner for PLC (Programmable Logic Controller) and SCADA (Supervisory Control and Data Acquisition)-based automation and system integration. Our expertise in this field empowers industries to achieve higher levels of efficiency, reliability, and control — from legacy system migrations to full greenfield automation builds.",
        href: "/service/system-software-upgrade/",
        icon: Settings,
      },
      {
        title: "Commissioning and Start-up Support",
        category: "Industrial Automation",
        description:
          "Commissioning for Industrial Process Automation involves the meticulous process of validating and fine-tuning automation systems to ensure they operate in strict accordance with predefined specifications. Our experienced team guides your project from pre-commissioning through hot commissioning, start-up, and post-commissioning handover — minimizing downtime and risk.",
        href: "/service/commissioning-and-start-up-support/",
        icon: Award,
      },
      {
        title: "New Installation Design and Commissioning",
        category: "Industrial Automation",
        description:
          "Complete electrical, instrumentation, and control system design for new greenfield installations. Includes P&ID review, I/O assignment, panel wiring schematics, and site deployment.",
        href: "/service/new-installation-design-and-commissioning/",
        icon: Activity,
      },
      {
        title: "Electrical and Instrumentation Works",
        category: "Industrial Automation",
        description:
          "Comprehensive field cabling, tray routing, junction box termination, instrument calibration, and loop testing to ensure reliable sensor-to-controller connectivity.",
        href: "/service/electrical-instrumentation-works/",
        icon: Wrench,
      },
      {
        title: "Genuine Spare Parts",
        category: "Industrial Automation",
        description:
          "Factory-certified PLC CPUs, I/O modules, power supplies, communication gateways, sensors, and HMIs sourced directly from authorized OEM partners.",
        href: "/service/genuine-spare-parts/",
        icon: ShieldCheck,
      },
    ],
  },
  process: {
    eyebrow: "Project Execution",
    title: "How We Deliver Automation Projects",
    description:
      "A structured engineering methodology from conceptual control philosophy to live on-site startup.",
    steps: [
      {
        stepNumber: 1,
        title: "Control Philosophy & Architecture",
        description:
          "Developing Functional Design Specifications (FDS), Control Narrative, Cause & Effect matrices, and system network topology.",
      },
      {
        stepNumber: 2,
        title: "Hardware Engineering & Panel Fabrication",
        description:
          "Detailed GA drawings, power distribution calculations, panel fabrication, and component layout inside climate-controlled enclosures.",
      },
      {
        stepNumber: 3,
        title: "Software Programming & FAT Simulation",
        description:
          "PLC logic development, SCADA screen graphics, alarm management configuration, and simulated loop testing during Factory Acceptance.",
      },
      {
        stepNumber: 4,
        title: "Site Installation & Commissioning",
        description:
          "Field I/O loop checks, cold & hot commissioning, startup tuning, operator training, and final handover with as-built drawings.",
      },
    ],
  },
  specifications: {
    eyebrow: "Technical Standards",
    title: "Automation & Safety Standards Compliance",
    description:
      "Every automation and telemetry system delivered complies with global industrial standards.",
    caption: "Industrial Automation Compliance",
    headers: { parameter: "Automation Domain", value: "Code / Standard", notes: "Application Scope" },
    rows: [
      {
        parameter: "Functional Safety",
        value: "IEC 61508 / IEC 61511",
        notes: "Safety Instrumented Systems (SIS), SIL 2 & SIL 3 loops",
      },
      {
        parameter: "PLC Programming Language",
        value: "IEC 61131-3",
        notes: "Ladder Diagram (LD), Function Block (FBD), Structured Text (ST)",
      },
      {
        parameter: "Industrial Communication Networks",
        value: "Modbus TCP/RTU, PROFINET, EtherNet/IP, Foundation Fieldbus",
        notes: "Deterministic plant fieldbus telemetry",
      },
      {
        parameter: "Control Panel Construction",
        value: "UL 508A / IEC 61439",
        notes: "Low-voltage switchgear and controlgear assemblies",
      },
      {
        parameter: "Cybersecurity for Industrial Automation",
        value: "ISA/IEC 62443",
        notes: "Network segmentation, zone & conduit security",
      },
      {
        parameter: "Environmental Protection",
        value: "NEMA 4X / IP65 / IP66",
        notes: "Harsh desert and marine enclosure specifications",
      },
    ],
  },
  partners: {
    eyebrow: "Technology Alliances",
    title: "Global Automation & Hardware Partners",
    description:
      "We collaborate with tier-1 automation technology manufacturers to deliver resilient control architectures.",
    items: [
      {
        name: "Mitsubishi Electric",
        logo: "/about/mitsubishi-electric.png",
        category: "PLC & Drives",
        description: "Authorized partner for iQ-R, iQ-F series PLCs and FR-A800 VFDs.",
        url: "/solutions/mitsubishi-electric/",
      },
      {
        name: "ICONICS",
        logo: "/about/bis.png",
        category: "SCADA & IoT",
        description: "GENESIS64 3D SCADA, Hyper Historian, and IoT telemetry.",
        url: "/products/iconics/",
      },
      {
        name: "Rockwell Automation",
        logo: "/about/faure-herman.jpg",
        category: "ControlLogix",
        description: "Allen-Bradley Studio 5000 and FactoryTalk suite integration.",
      },
      {
        name: "Schneider Electric",
        logo: "/about/meter-engineers.jpg",
        category: "Modicon & Foxboro",
        description: "EcoStruxure automation and process controllers.",
      },
      {
        name: "Siemens",
        logo: "/about/sick.jpg",
        category: "SIMATIC",
        description: "S7-1500 / S7-1200 PLCs and WinCC SCADA systems.",
      },
      {
        name: "Endress+Hauser",
        logo: "/about/endress-hauser.jpg",
        category: "Sensors & Transmitters",
        description: "Flow, pressure, level and analytical sensors.",
      },
    ],
  },
  industriesServed: {
    eyebrow: "Application Sectors",
    title: "Industries Utilizing Our Automation Solutions",
    description:
      "High-reliability process control infrastructure operating in continuous mission-critical environments across the GCC.",
    items: [
      {
        slug: "oil-gas",
        name: "Oil & Gas Production",
        description: "Wellhead RTU telemetry, gathering center DCS, and pipeline ESD safety systems.",
      },
      {
        slug: "refinery",
        name: "Refining & Petrochemicals",
        description: "Process automation, furnace control, product blending, and burner management systems (BMS).",
      },
      {
        slug: "power-plant",
        name: "Power & Desalination",
        description: "Turbine governor controls, boiler management, and reverse osmosis desalination automation.",
      },
      {
        slug: "water-treatment",
        name: "Water & Wastewater Treatment",
        description: "Pumping station SCADA, chemical dosing automation, and filter backwash sequencing.",
      },
    ],
  },
  relatedServices: {
    eyebrow: "Complementary Disciplines",
    title: "Which Services Complement Industrial Automation?",
    description:
      "Combine automation engineering with custody transfer metering, electrical installation, and testing for complete plant execution.",
    items: [
      {
        slug: "plant-automation",
        label: "Process Plant Automation",
        description:
          "Turnkey DCS, PLC panels, and plant-wide SCADA supervisory systems.",
      },
      {
        slug: "system-software-upgrade",
        label: "Control System Integration and Upgradation",
        description:
          "Legacy PLC & DCS migration, control software upgrades, and virtualization.",
      },
      {
        slug: "commissioning-and-start-up-support",
        label: "Commissioning and Start-up Support",
        description:
          "Pre-commissioning loop checks, cold and hot commissioning, and operator handover.",
      },
    ],
  },
  faq: [
    {
      q: "What is industrial automation?",
      a: "Industrial automation is the use of control systems such as PLCs, SCADA, HMIs, robots, and computer software to operate industrial machinery and processes with minimal human intervention. It improves efficiency, consistency, safety, and productivity in manufacturing, oil and gas, power generation, and other industrial sectors. At Texas Technical Services, we design, integrate, and support automation solutions tailored to your specific operational requirements.",
    },
    {
      q: "What is the difference between industrial automation and control systems?",
      a: "Industrial automation refers to the overall strategy of using technology to automate industrial processes, while control systems are the specific hardware and software components that execute that automation — including PLCs, DCS, SCADA, sensors, actuators, and communication networks. Control systems are the building blocks that enable automation. We provide both the automation strategy and the control system implementation.",
    },
    {
      q: "What are the benefits of automation in manufacturing industry?",
      a: "Automation in the manufacturing industry delivers higher production throughput, consistent product quality, reduced operating costs, improved worker safety, real-time data visibility, and greater production flexibility. Manufacturers can respond faster to market changes, reduce waste, and optimize energy consumption — delivering measurable ROI through increased efficiency and reduced downtime.",
    },
    {
      q: "What industries use industrial automation?",
      a: "Industrial automation is used across virtually every industrial sector including oil and gas (upstream, midstream, downstream), refinery and petrochemicals, power generation (gas, steam, combined cycle), water and wastewater treatment, cement and metals production, food and beverage processing, pharmaceutical manufacturing, and discrete manufacturing — essentially any industry that requires precise process control and operational efficiency.",
    },
    {
      q: "What PLC SCADA services do you offer in Kuwait and the GCC?",
      a: "We offer comprehensive PLC and SCADA services across Kuwait, UAE, Saudi Arabia, and the GCC including multi-brand PLC programming (Siemens, Allen-Bradley, Schneider, Mitsubishi), SCADA system development and integration (ICONICS, WinCC, iFIX), HMI design and development, legacy system migration, control panel design and fabrication, system commissioning, and 24/7 after-sales support from our offices in Fahaheel, Kuwait and Dubai, UAE.",
    },
  ],
  meta: {
    title: "Industrial Automation, PLC SCADA & Process Control Solutions",
    description:
      "Industrial automation and control systems across Kuwait, UAE, and Saudi Arabia — PLC, SCADA, DCS integration for oil & gas, power, and manufacturing.",
    alternates: {
      canonical: "/service/industrial-automation/",
    },
    openGraph: {
      title: "Industrial Automation, PLC SCADA & Process Control",
      description:
        "Industrial automation & control systems, control and automation engineering, and plant and process automation — PLC and SCADA system integrators in Kuwait, UAE, and Saudi Arabia serving manufacturing, power plant, and oil & gas sectors.",
      url: "/service/industrial-automation/",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: "Industrial Automation, PLC SCADA & Process Control — Texas Technical Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Industrial Automation, PLC SCADA & Process Control",
      description:
        "Industrial automation & control systems, control and automation engineering, plant and process automation, and automation in power plant — serving Kuwait, UAE, Dubai, and Saudi Arabia.",
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
    },
    keywords: [
      "industrial automation companies in Kuwait",
      "PLC and SCADA system integrators in Kuwait",
      "process control automation solutions Kuwait",
      "automation and engineering services Fahaheel",
      "industrial automation companies in UAE",
      "automation companies in Dubai",
      "automation companies in Saudi Arabia",
      "industrial automation & control systems",
      "industrial automation control system",
      "control and automation engineering",
      "automation in manufacturing industry",
      "automation in the manufacturing industry",
      "control systems and automation",
      "plant and process automation",
      "automation in power plant",
      "PLC SCADA",
      "process & control",
      "automation company",
      "SCADA system",
      "industrial automation Kuwait",
      "PLC programming Kuwait Dubai",
      "SCADA integration Kuwait",
      "HMI development Kuwait",
      "plant automation solutions",
      "control system integration Kuwait",
      "CEMS solutions Kuwait",
      "FactoryTalk MES Kuwait",
      "FactoryTalk analytics GCC",
      "FactoryTalk Asset Centre",
      "Allen Bradley PLC repair Dubai",
      "Rockwell automation predictive maintenance",
      "Rockwell Studio 5000 Logix Designer",
      "Rockwell connected components workbench",
    ],
  },
  jsonLd: {
    serviceType: "Industrial Automation",
    description:
      "Industrial automation & control systems, control and automation engineering, PLC and SCADA system integrator, and process control automation solutions for oil & gas, power, and manufacturing in Kuwait, UAE, Saudi Arabia, and the GCC.",
    areaServed: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"],
  },
};
