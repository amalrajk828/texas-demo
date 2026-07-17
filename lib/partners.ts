export interface Partner {
  slug: string;
  name: string;
  logo: string;
  country: string;
  relationship: string;
  product: string;
  description: string;
  href: string;
}

export const PARTNERS: Partner[] = [
  {
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    logo: "/about/mitsubishi-electric.png",
    country: "JPN",
    relationship: "System Integrator & Distributor",
    product: "Automation Solutions",
    description:
      "Authorized system integrator & distributor for the complete Mitsubishi automation portfolio — MELSEC PLCs, GOT HMIs, AC servos, and ICONICS SCADA.",
    href: "/mitsubishi-electric-factory-automation/",
  },
  {
    slug: "endress-hauser",
    name: "Endress+Hauser",
    logo: "/about/endress-hauser.jpg",
    country: "SUI",
    relationship: "Distributor & Service",
    product: "Process Instrumentation",
    description:
      "People for Process Automation — ultrasonic gas meters (FLOWSIC series), CEMS, gas & dust analyzers with QAL1 & MCERTS certified solutions for harsh environments.",
    href: "/products/analyzers/cems/",
  },
  {
    slug: "sick",
    name: "SICK AG",
    logo: "/about/sick.jpg",
    country: "GER",
    relationship: "Distributor",
    product: "Sensors",
    description:
      "One of the world's leading producers of sensors and sensor solutions for industrial automation — radar, photoelectric, safety, RFID, and encoder technology.",
    href: "/products/sensors/",
  },
  {
    slug: "meter-engineers",
    name: "Meter Engineers",
    logo: "/about/meter-engineers.jpg",
    country: "USA",
    relationship: "Distributor",
    product: "Provers & Accessories",
    description:
      "High-accuracy bidirectional & unidirectional sphere-type provers, small-volume piston provers (MagnaProve), mobile prover systems, and on-site calibration services.",
    href: "/service/flow-meter-calibration/",
  },
  {
    slug: "faure-herman",
    name: "Faure Herman",
    logo: "/about/faure-herman.jpg",
    country: "FRA",
    relationship: "Distributor",
    product: "Helical Turbine, Ultrasonic & Clamp-On Flow Meters",
    description:
      "100+ years in flow measurement — Heliflu helical turbine series, FH SONIC ultrasonic flow meters, and FH Lab ISO 17025 accredited calibration services.",
    href: "/products/flow-meters/liquid-flow-meters/",
  },
  {
    slug: "omni",
    name: "OMNI Flow Computer",
    logo: "/about/omni.png",
    country: "USA",
    relationship: "Distributor & Integrator",
    product: "Flow Computer",
    description:
      "Leading brand in oil and gas flow computers with proven reliability for custody transfer, allocation measurement, and complex fiscal metering applications.",
    href: "/products/custody-metering-solutions/",
  },
  {
    slug: "kem-kuppers",
    name: "KEM Küppers",
    logo: "/about/kem-kuppers.png",
    country: "GER",
    relationship: "Distributor",
    product: "Precision Flow Measurement",
    description:
      "German precision engineering — TRICOR Coriolis, SRZ helical, ZHM gear, HM F turbine, variable area, and VFF chemical injection flow meters.",
    href: "/products/flow-meters/",
  },
  {
    slug: "tek-trol",
    name: "Tek-Trol",
    logo: "/about/tek-trol.jpg",
    country: "USA",
    relationship: "Distributor",
    product: "Process Control Instruments",
    description:
      "Comprehensive process instrumentation & control solutions — Tek-Bar pressure/temperature/level transmitters, Tek-Vor vortex, Tek-Cor Coriolis, and MPFM multi-phase flow meters.",
    href: "/products/flow-meters/",
  },
  {
    slug: "rockwin",
    name: "Rockwin Flowmeter India",
    logo: "/about/rockwin.jpg",
    country: "IND",
    relationship: "Distribution & Service",
    product: "Metering Skid & Flow Meters",
    description:
      "ISO 9001:2015 certified engineered flow metering skid systems — custody transfer skids, truck loading skids, LPG bottling skids, and ASME-code fabrication.",
    href: "/products/custody-metering-solutions/",
  },
  {
    slug: "kurz-instruments",
    name: "Kurz Instruments",
    logo: "/about/kurz-instruments.jpg",
    country: "USA",
    relationship: "Distributor",
    product: "Thermal Mass Flow Meters",
    description:
      "USA manufacturer of thermal mass flow meters for precise direct gas mass flow measurement without compensation — for process gas monitoring and emissions.",
    href: "/products/analyzers/gas-analyzers/",
  },
  {
    slug: "hms-networks",
    name: "HMS Networks",
    logo: "/about/hms-networks.jpg",
    country: "SWE",
    relationship: "Distributor",
    product: "Industrial Comms & IIoT",
    description:
      "Hardware meets software — Anybus gateways, Ewon remote solutions (Talk2M, Cosy+ VPN), Intesis building automation, IXXAT CAN/safety, and Red Lion networking.",
    href: "/service/industrial-automation/",
  },
  {
    slug: "pyrotech-workspace",
    name: "Pyrotech Workspace",
    logo: "/about/pyrotech.jpg",
    country: "IND",
    relationship: "Distributor & Integrator",
    product: "Operator Console & Turnkey Control Room",
    description:
      "Pioneer in turnkey control room solutions and ergonomic command centre consoles — complemented by PWS access flooring systems and PWS workstations.",
    href: "/products/control-room-interior-and-console/",
  },
  {
    slug: "autocontrol",
    name: "Autocontrol",
    logo: "/about/autocontrol.jpg",
    country: "IND",
    relationship: "Distributor",
    product: "Instrumentation & Valves",
    description:
      "Indian instrumentation and valves specialist — sensing, measuring, controlling, and automation solutions for process industries.",
    href: "/service/industrial-automation/",
  },
  {
    slug: "euromag-international",
    name: "Euromag International",
    logo: "/about/euromag.jpg",
    country: "ITA",
    relationship: "Distributor",
    product: "Electromagnetic Flow Meters",
    description:
      "Electromagnetic flow meters for conductive liquids — robust, accurate measurement for water, wastewater, and process industries with long-term stability.",
    href: "/products/flow-meters/liquid-flow-meters/",
  },
  {
    slug: "texaflow",
    name: "Texaflow",
    logo: "/about/texaflow.svg",
    country: "UAE",
    relationship: "Proprietary Solution",
    product: "Integrated Custody Transfer Control System",
    description:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, and pipeline stations.",
    href: "/solutions/texaflow/",
  },
  {
    slug: "novus-automation",
    name: "NOVUS Automation",
    logo: "/about/novus-automation.jpg",
    country: "BRA",
    relationship: "Distributor",
    product: "BMS & Industrial Automation",
    description:
      "We Measure, We Control, We Record — data loggers, smart PID controllers, wireless sensing (AirGate), IoT gateways, and BMS/HVAC solutions.",
    href: "/service/industrial-automation/",
  },
];

export const STRATEGIC_PARTNERS: Partner[] = [
  {
    slug: "space-ai",
    name: "Space AI",
    logo: "/about/space-ai.jpg",
    country: "UAE",
    relationship: "Strategic Partner",
    product: "Industrial AI & Machine Learning",
    description:
      "Next-generation artificial intelligence for industry — predictive maintenance, process optimization with virtual metrology, smart monitoring with ESG & carbon tracking.",
    href: "/solutions/space-ai/",
  },
  {
    slug: "pws-floor-solutions",
    name: "PWS Floor Solutions",
    logo: "/about/pws-floors.jpg",
    country: "IND",
    relationship: "Authorized Dealer",
    product: "Raised Access Flooring",
    description:
      "India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, and clean rooms with GREENGUARD Gold certification.",
    href: "/products/access-flooring/",
  },
];

export const ALL_PARTNERS: Partner[] = [...PARTNERS, ...STRATEGIC_PARTNERS];

export function getAllPartnerSlugs(): string[] {
  return ALL_PARTNERS.map((p) => p.slug);
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return ALL_PARTNERS.find((p) => p.slug === slug);
}
