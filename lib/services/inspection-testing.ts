import type { ServicePageData } from "@/components/v3/service/types";
import { ShieldCheck, Activity, Award, Wrench, CheckCircle } from "lucide-react";

export const inspectionTestingData: ServicePageData = {
  slug: "inspection-testing",
  category: "Inspection & Testing",
  title: "Inspection & Testing — NDT, Mechanical & Specialized",
  subtitle:
    "Texas Technical Services (TTS) provides accredited third-party inspection, non-destructive examination (NDT), and mechanical testing across Kuwait and the GCC. Our certified inspectors ensure rigorous quality assurance, product conformity, and complete compliance with ISO 9001, ISO 14001, and ISO 45001 standards.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Inspection & Testing" },
  ],
  primaryCta: {
    label: "Consult Inspection Specialists",
    href: "/contacts/",
  },
  secondaryCta: {
    label: "Explore All Services",
    href: "/services/",
  },
  heroImage: {
    src: "/images/services/inspection-testing.jpg",
    alt: "Industrial inspection and non-destructive testing (NDT) services by Texas Technical Services Kuwait",
  },
  stats: [
    { value: "ISO 9001 / 14001 / 45001", label: "Integrated Management", note: "UASL Accredited QA/QC" },
    { value: "Full NDT Suite", label: "Examination Methods", note: "UT, RT, MT, PT, VI & PAUT" },
    { value: "Third-Party", label: "Verification Agency", note: "Certified Inspectors" },
    { value: "24/7", label: "Field Deployment", note: "Kuwait & GCC Regional Support" },
  ],
  overview: {
    eyebrow: "About This Service",
    heading: "Independent Third-Party Inspection & Quality Verification",
    paragraphs: [
      "Texas Technical Services Co. (TTS) is a highly diversified independent service provider in the industry mainly as a Third Party Inspection & Testing Company. Since it was founded, TTS has participated in supporting our clients in ensuring quality and safety of their products and our inspectors are committed to providing objective, independent assessments of product compliance and conformity, contributing to production and distribution processes that safeguard consumer health and providing businesses that demonstrate good practices with the tools they need to promote their companies and products, thereby building long-lasting trust-based relationships with their clients.",
      "TTS led by a strong management, technical expertise, engineers and well trained technicians are on a mission to deliver on-time top quality client focused service. We know that a successful company is the result of intelligent planning, capable leadership and active participation by all company members. TTS in that matter respects the talents and experiences of its employees and give the best training possible to keep them in touch with latest technologies.",
      "Texas Technical Services Co. (TTS) is committed to health and safety, the environment and quality is delivered by adopting an integrated approach to our management systems, and complying with all relevant legislation, regulations and other legal and industry requirements. This provides a framework for integration of the ISO 14001:2015, ISO 45001:2018 and ISO 9001:2015 standards and is externally certificated by a UASL accredited certification body.",
    ],
    checklist: [
      "Quality Control Procedures & Inspection Test Plans (ITP)",
      "Method of Statement preparation & engineering documentation",
      "Welding Procedure Specification (WPS) & Procedure Qualification Record (PQR)",
      "Welder Qualification Certificates (WQT) & personnel testing",
      "Full non-destructive testing (NDT): UT, RT, MT, PT, and VI",
      "UASL accredited ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certification",
    ],
    image: {
      src: "/images/services/Non-Destructive-Testing-NDT.jpg.webp",
      alt: "Non-destructive testing and third-party inspection — Texas Technical Services",
    },
    badge: {
      title: "UASL ACCREDITED",
      subtitle: "ISO 9001 / 14001 / 45001",
    },
  },
  capabilities: {
    eyebrow: "Specialized Disciplines",
    title: "Explore Inspection & Testing Capabilities",
    description:
      "From non-destructive examinations and mechanical testing to third-party QA consultancy and facade certifications, explore our complete inspection scope.",
    columns: 3,
    items: [
      {
        title: "Non Destructive Testing (NDT)",
        category: "Inspection & Testing",
        description:
          "The following non destructive examinations services are available in TTS with technical expertise, qualified and experienced technicians and modern equipment's. These inspection services include, Visual Inspection (VI) Non Destructive Testing…",
        href: "/service/non-destructive-testing-ndt/",
        icon: Activity,
      },
      {
        title: "Mechanical Testing",
        category: "Inspection & Testing",
        description:
          "Tensile Test Mechanical Testing Tensile testing is a process that provides information about the tensile strength, yield strength, and ductility of the metallic material. It measures the force required to…",
        href: "/service/mechanical-testing/",
        icon: Award,
      },
      {
        title: "Specialized Inspection Service",
        category: "Inspection & Testing",
        description:
          "Phased array Ultrasonic Testing Specialized Inspection Services Phased arrays are used to detect the image defects including cracks, voids, and pits caused by corrosion. They are used to measure material…",
        href: "/service/specialized-inspection-service/",
        icon: ShieldCheck,
      },
      {
        title: "Lifting Equipment Inspection",
        category: "Inspection & Testing",
        description:
          "LOLER and ASME compliance inspection for cranes, hoists, wire ropes, and lifting accessories. Thorough examination and proof load testing certified by qualified inspection engineers.",
        href: "/service/lifting-equipment-inspection/",
        icon: Wrench,
      },
      {
        title: "Curtain Wall & Facade Testing",
        category: "Inspection & Testing",
        description:
          "Air permeability, water penetration, and structural performance testing for building envelopes, exterior windows, doors, and curtain wall installations across commercial developments.",
        href: "/service/exterior-windows-doors-curtain-wall-testing/",
        icon: CheckCircle,
      },
      {
        title: "QA/QC Consultancy Services",
        category: "Inspection & Testing",
        description:
          "TTS provides an efficient QA consultancy service in preparing various documents like Quality Control Procedures, Inspection Test Plan (ITP), Method of Statement, Welding Procedure Specification (WPS), Procedure Qualification Record (PQR), and Welder Qualification Certificates (WQT).",
        href: "/contacts/",
        icon: ShieldCheck,
      },
    ],
  },
  process: {
    eyebrow: "Quality Methodology",
    title: "How We Deliver Inspection Services",
    description:
      "A structured, standards-driven quality framework from initial test planning through field examination and certified reporting.",
    steps: [
      {
        stepNumber: 1,
        title: "Scope & Test Planning (ITP)",
        description:
          "Developing Inspection and Test Plans (ITP), Quality Control Procedures, and safety documentation tailored to client engineering specifications and code requirements.",
      },
      {
        stepNumber: 2,
        title: "Calibration & Equipment Verification",
        description:
          "Pre-inspection verification, calibration blocks validation, and instrument readiness checks in accordance with ISO 17025 and manufacturer standards.",
      },
      {
        stepNumber: 3,
        title: "Field Examination & Testing",
        description:
          "Execution of NDT, mechanical tests, or visual assessments by ASNT / PCN Level II/III certified technicians using calibrated flaw detectors and probes.",
      },
      {
        stepNumber: 4,
        title: "Certified Reporting & Documentation",
        description:
          "Immediate defect reporting, comprehensive analytical test certificates, digital radiographs, and third-party conformity sign-off.",
      },
    ],
  },
  specifications: {
    eyebrow: "Accreditation & Standards",
    title: "Quality Management & Inspection Codes",
    description:
      "All inspection and testing procedures strictly comply with international engineering and quality standards.",
    caption: "Accredited Inspection Standards",
    headers: { parameter: "Inspection Domain", value: "Standard / Code", notes: "Certification Scope" },
    rows: [
      {
        parameter: "Quality Management System",
        value: "ISO 9001:2015",
        notes: "UASL accredited company-wide QA/QC",
      },
      {
        parameter: "Environmental Management",
        value: "ISO 14001:2015",
        notes: "Environmental health and safety governance",
      },
      {
        parameter: "Occupational Health & Safety",
        value: "ISO 45001:2018",
        notes: "Workplace hazard prevention & safe operations",
      },
      {
        parameter: "Non-Destructive Testing (NDT)",
        value: "ASME Sec V, VIII, IX / AWS D1.1",
        notes: "UT, RT, MT, PT, VI, PAUT & TOFD protocols",
      },
      {
        parameter: "Mechanical Testing",
        value: "ASTM A370, E8, E23, E10 / ISO 6892",
        notes: "Tensile, Charpy impact, hardness & bend tests",
      },
      {
        parameter: "Lifting Equipment & Accessories",
        value: "LOLER / ASME B30.2, B30.9, B30.10",
        notes: "Thorough examination, proof load & certification",
      },
    ],
  },
  partners: {
    eyebrow: "Accreditation & Associations",
    title: "Accreditations & Industry Alliances",
    description:
      "Our inspection and testing systems are validated by premier international accreditation bodies and technology providers.",
    items: [
      {
        name: "UASL Accreditation",
        logo: "/about/bis.png",
        category: "Certification",
        description: "ISO 9001, 14001, 45001 accredited quality management.",
      },
      {
        name: "ASNT Standards",
        logo: "/about/faure-herman.jpg",
        category: "NDT Methods",
        description: "Level II & Level III certified inspection personnel.",
      },
      {
        name: "ASME & AWS Codes",
        logo: "/about/meter-engineers.jpg",
        category: "Welding & Pressure",
        description: "Boiler, pressure vessel and structural welding codes.",
      },
      {
        name: "ASTM International",
        logo: "/about/sick.jpg",
        category: "Material Testing",
        description: "Mechanical, metallurgical & chemical test standards.",
      },
    ],
  },
  industriesServed: {
    eyebrow: "Application Sectors",
    title: "Industries Utilizing Our Inspection Services",
    description:
      "Critical quality assurance and non-destructive examinations across vital infrastructure sectors in Kuwait and the GCC.",
    items: [
      {
        slug: "oil-gas",
        name: "Oil & Gas Production",
        description: "Weld inspection on pipelines, drill collars, pressure vessels, and offshore structures.",
      },
      {
        slug: "refinery",
        name: "Refining & Petrochemicals",
        description: "Corrosion mapping, storage tank inspections (API 653), and turnaround NDT.",
      },
      {
        slug: "power-plant",
        name: "Power & Desalination",
        description: "Boiler tubes, steam turbines, heat exchangers, and high-pressure steam line integrity.",
      },
      {
        slug: "metal-steel",
        name: "Metal & Steel Processing",
        description: "Structural steel weldments, crane girders, and metallurgical verification.",
      },
    ],
  },
  relatedServices: {
    eyebrow: "Complementary Disciplines",
    title: "Which Services Complement Inspection & Testing?",
    description:
      "Combine third-party inspection with specialized mechanical testing and corrosion control for total asset integrity.",
    items: [
      {
        slug: "non-destructive-testing-ndt",
        label: "Non Destructive Testing (NDT)",
        description:
          "Comprehensive NDT methods including UT, RT, MT, PT, ECT, PAUT, TOFD, and visual inspection.",
      },
      {
        slug: "mechanical-testing",
        label: "Mechanical Testing Services",
        description:
          "Tensile, bend, impact, hardness, fracture, and macro/micro testing for materials and welds.",
      },
      {
        slug: "specialized-inspection-service",
        label: "Specialized Inspection Service",
        description:
          "Corrosion control, metallurgical analysis, and specialized engineering inspection.",
      },
    ],
  },
  faq: [
    {
      q: "What are the different types of NDT?",
      a: "Non-Destructive Testing (NDT) includes several methods: Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws; Radiographic Testing (RT) uses X-rays or gamma rays to examine internal structure; Magnetic Particle Inspection (MT) detects surface and near-surface defects in ferromagnetic materials; Liquid/Dye Penetrant Testing (PT) reveals surface defects through capillary action; and Visual Inspection (VI) is the systematic visual examination of surfaces and components. Each method has specific applications and advantages depending on the material type, defect orientation, and inspection requirements.",
    },
    {
      q: "What is the difference between UT and RT in NDT?",
      a: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal discontinuities and measure material thickness. It is highly effective for detecting planar defects like cracks and lack of fusion in welds, and provides immediate results with digital thickness readings. Radiographic Testing (RT) uses ionizing radiation (X-rays or gamma rays) to create a radiograph that reveals internal features, voids, porosity, and inclusions. RT is better for detecting volumetric defects and provides a permanent image record, but requires strict safety protocols and longer setup times. Both methods are complementary and often used together for comprehensive weld inspection.",
    },
    {
      q: "What is phased array ultrasonic testing?",
      a: "Phased Array Ultrasonic Testing (PAUT) is an advanced NDT method that uses multiple ultrasonic elements arranged in an array, electronically controlled to steer and focus the sound beam. This enables rapid scanning of complex geometries, improved defect detection and sizing, and real-time imaging of inspection results. PAUT is particularly valuable for weld inspection, corrosion mapping, and critical component examination in oil and gas, power generation, and aerospace industries.",
    },
    {
      q: "What ISO certifications does Texas Technical Services hold?",
      a: "Texas Technical Services Co. is certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health and Safety). These certifications demonstrate our commitment to quality, environmental responsibility, and workplace safety across all our inspection and testing operations in Kuwait and the GCC.",
    },
    {
      q: "What inspection services do you offer in Kuwait and the GCC?",
      a: "We offer a full range of inspection and testing services in Kuwait and across the GCC including NDT (UT, MT, PT, RT, VI), phased array ultrasonic testing, mechanical testing (tensile, hardness, impact, bend, fracture, macro/micro), third-party inspection services, QA consultancy, specialized inspection services (lifting equipment, hose testing, air permeability, water penetration), and corrosion control services — all compliant with ISO standards and industry best practices.",
    },
  ],
  meta: {
    title: "Inspection & Testing — NDT, Mechanical & Specialized",
    description:
      "Industrial inspection and testing in Kuwait — NDT, mechanical testing, and QA consultancy compliant with ISO 9001, ISO 14001, and ISO 45001 across the GCC.",
    alternates: {
      canonical: "/service/inspection-testing/",
    },
    openGraph: {
      title: "Inspection & Testing — NDT, Mechanical & Specialized",
      description:
        "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, QA consultancy, and ISO-certified quality management across the GCC.",
      url: "/service/inspection-testing/",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: "Inspection & Testing Services — Texas Technical Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Inspection & Testing — NDT, Mechanical & Specialized",
      description:
        "Industrial inspection and testing company in Kuwait — NDT, mechanical testing, phased array UT, ISO 9001/14001/45001 certified.",
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Texas Technical Services" }],
    },
    keywords: [
      "industrial inspection and testing companies Kuwait",
      "inspection testing services Kuwait",
      "NDT services Kuwait Dubai",
      "non destructive testing Kuwait",
      "phased array ultrasonic testing",
      "mechanical testing Kuwait",
      "third party inspection Kuwait",
      "ISO 9001 inspection company Kuwait",
      "Texas Technical Services inspection",
      "QA consultancy Kuwait",
      "3rd party inspection GCC",
      "quality inspection service Dubai",
      "3rd party inspection company Kuwait",
    ],
  },
  jsonLd: {
    serviceType: "Inspection & Testing",
    description:
      "Industrial inspection and testing company in Kuwait — NDT (UT, MT, PT, RT, VI), mechanical testing, phased array ultrasonic inspection, and QA consultancy services compliant with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 across Kuwait and the GCC.",
    areaServed: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"],
  },
};
