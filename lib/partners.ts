export interface Partner {
  slug: string;
  name: string;
  logo: string;
  country: string;
  relationship: string;
  product: string;
  description: string;
  href: string;
  features?: string[];
  applications?: string[];
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
    href: "/solutions/mitsubishi-electric/",
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
    features: [
      "FLOWSIC ultrasonic gas flow meters",
      "Continuous Emissions Monitoring Systems (CEMS)",
      "Gas analyzers — O₂, CO, CO₂, NOx, SO₂",
      "Dust analyzers with extractive & in-situ types",
      "QAL1 & MCERTS certified for regulatory compliance",
      "Designed for harsh industrial environments",
    ],
    applications: [
      "Oil & gas emissions monitoring",
      "Power plant environmental compliance",
      "Refinery process gas analysis",
      "Cement & incineration emissions tracking",
      "Chemical & petrochemical process monitoring",
      "Water & wastewater treatment gas analysis",
    ],
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
    features: [
      "Radar sensors for level & distance measurement",
      "Photoelectric sensors for object detection",
      "Safety light curtains & area scanners",
      "RFID systems for traceability & identification",
      "Encoders for motion & position feedback",
      "LiDAR sensors for 3D environment mapping",
    ],
    applications: [
      "Factory automation & assembly lines",
      "Intralogistics & material handling",
      "Packaging & bottling machines",
      "Machine building & OEM integration",
      "Traffic & logistics monitoring",
      "Robotics & collaborative workstations",
    ],
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
    features: [
      "Bidirectional sphere-type provers",
      "Unidirectional sphere-type provers",
      "MagnaProve small-volume piston provers",
      "Mobile prover systems for field use",
      "On-site calibration services",
      "API & ISO compliance documentation",
    ],
    applications: [
      "Custody transfer meter calibration",
      "Pipeline flow meter verification",
      "Refinery fiscal measurement",
      "Oil terminal metering proving",
      "LNG custody transfer validation",
      "Third-party calibration auditing",
    ],
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
    features: [
      "Heliflu helical turbine flow meters",
      "FH SONIC ultrasonic flow meters",
      "Clamp-on non-intrusive ultrasonic meters",
      "FH Lab ISO 17025 accredited calibration",
      "High-viscosity & crude oil measurement",
      "100+ years of flow measurement heritage",
    ],
    applications: [
      "Oil & gas custody transfer",
      "Refinery crude oil & product metering",
      "Chemical injection measurement",
      "Heavy oil & bitumen flow measurement",
      "Pipeline fiscal metering",
      "Marine & terminal loading operations",
    ],
  },
  {
    slug: "bis",
    name: "BIS",
    logo: "/about/bis.png",
    country: "IND",
    relationship: "Distributor & Service Partner",
    product: "Industrial Automation & SCADA",
    description:
      "Balaji Industrial Services, established in 1978 — a leading service provider in SCADA, PLC, and specialized process industries automation solutions.",
    href: "/service/industrial-automation/",
    features: [
      "SCADA & PLC automation systems",
      "Process control engineering",
      "Turnkey industrial automation",
      "Field instrumentation services",
      "Established industry expertise since 1978",
    ],
    applications: [
      "Process industries automation",
      "Water & wastewater control",
      "Manufacturing & batching plants",
      "Energy & utility monitoring",
    ],
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
    features: [
      "OC series flow computers for gas & liquid",
      "Custody transfer & fiscal metering",
      "Allocation measurement for multi-well sites",
      "Multi-stream & multi-phase capability",
      "Historian integration & data logging",
      "Proven reliability in harsh environments",
    ],
    applications: [
      "Oil & gas terminal custody transfer",
      "Refinery product metering",
      "Pipeline station flow measurement",
      "LNG transfer & regasification",
      "Offshore platform metering",
      "Gas processing plant allocation",
    ],
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
    features: [
      "TRICOR Coriolis mass flow meters",
      "SRZ helical turbine flow meters",
      "ZHM gear flow meters for viscous fluids",
      "HM F turbine meters for clean liquids",
      "Variable area flow meters",
      "VFF chemical injection metering pumps",
    ],
    applications: [
      "Oil & gas upstream & downstream",
      "Chemical processing & dosing",
      "Water & wastewater treatment",
      "Food & beverage production",
      "Pharmaceutical manufacturing",
      "Paints, coatings & adhesives",
    ],
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
    features: [
      "Tek-Bar pressure, temperature & level transmitters",
      "Tek-Vor vortex flow meters",
      "Tek-Cor Coriolis mass flow meters",
      "MPFM multi-phase flow meters",
      "4–20 mA / HART / Foundation Fieldbus",
      "Compact design for hazardous areas",
    ],
    applications: [
      "Oil & gas upstream production",
      "Downstream refinery processes",
      "Pipeline monitoring & control",
      "Chemical & petrochemical plants",
      "Power generation & steam systems",
      "Water & wastewater instrumentation",
    ],
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
    features: [
      "Engineered custody transfer metering skids",
      "Truck loading & unloading skids",
      "LPG bottling skid systems",
      "ASME-code pressure vessel fabrication",
      "ISO 9001:2015 quality management",
      "Complete turnkey skid design & build",
    ],
    applications: [
      "Oil & gas terminal custody transfer",
      "Refinery product loading",
      "LPG distribution & bottling",
      "Petrochemical plant metering",
      "Fuel distribution networks",
      "Industrial gas measurement",
    ],
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
    features: [
      "Thermal mass flow measurement technology",
      "Direct gas mass flow — no pressure/temperature compensation",
      "Insertion & inline configurations",
      "Multi-point averaging for large ducts",
      "Low maintenance with no moving parts",
      "Ex-rated models for hazardous areas",
    ],
    applications: [
      "Process gas monitoring & control",
      "Flare & vent gas measurement",
      "Emissions tracking & reporting",
      "Compressed air & nitrogen auditing",
      "Biogas & landfill gas monitoring",
      "HVAC & semiconductor cleanroom",
    ],
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
    features: [
      "Anybus protocol gateways & converters",
      "Ewon remote VPN access (Talk2M, Cosy+)",
      "Intesis building automation integration",
      "IXXAT CAN bus & safety communication",
      "Red Lion industrial networking & HMI",
      "IIoT edge connectivity platforms",
    ],
    applications: [
      "Industrial machine connectivity",
      "Remote monitoring & diagnostics",
      "Building management system integration",
      "Legacy PLC network modernization",
      "CAN bus & safety network bridging",
      "SCADA data acquisition over IP",
    ],
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
    features: [
      "Turnkey control room design & build",
      "Ergonomic command centre consoles",
      "Video wall display systems",
      "PWS raised access flooring",
      "Operator workstations & furniture",
      "Acoustic & lighting integration",
    ],
    applications: [
      "Power plant control rooms",
      "Oil & gas NOC & command centres",
      "Traffic management centres",
      "Defense & security operations",
      "Telecom network operations centres",
      "Industrial process control rooms",
    ],
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
    features: [
      "Pressure, temperature & level transmitters",
      "Control valves & actuated valves",
      "Solenoid valves & regulators",
      "Flow measurement instruments",
      "Process control accessories",
      "Custom instrumentation packages",
    ],
    applications: [
      "Oil & gas process control",
      "Power generation instrumentation",
      "Water & wastewater treatment",
      "Chemical & petrochemical plants",
      "Steel & metal manufacturing",
      "Food & beverage processing",
    ],
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
    features: [
      "Electromagnetic flow measurement technology",
      "Inline & insertion configurations",
      "Wide range of pipe sizes (DN10–DN3000)",
      "Long-term zero-drift stability",
      "Hygienic & rugged housing options",
      "Digital signal processing with HART/Modbus",
    ],
    applications: [
      "Water distribution & metering",
      "Wastewater treatment plants",
      "Irrigation & agricultural systems",
      "Industrial process water & coolant",
      "Chemical & pharmaceutical dosing",
      "Pulp & paper production",
    ],
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
    features: [
      "Data loggers for temperature & process data",
      "Smart PID controllers with auto-tuning",
      "AirGate wireless sensing technology",
      "IoT gateways for cloud connectivity",
      "BMS & HVAC control solutions",
      "Web-based monitoring platforms",
    ],
    applications: [
      "Industrial process monitoring",
      "HVAC system optimization",
      "Building management & energy",
      "Cold chain & storage monitoring",
      "Laboratory & environmental testing",
      "Renewable energy system control",
    ],
  },
];

export const STRATEGIC_PARTNERS: Partner[] = [
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
    href: "/solutions/pws-floor-solutions/",
  },
];

export const ALL_PARTNERS: Partner[] = [...PARTNERS, ...STRATEGIC_PARTNERS];

export function getAllPartnerSlugs(): string[] {
  return ALL_PARTNERS.map((p) => p.slug);
}

export function getPartnerBySlug(slug: string): Partner | undefined {
  return ALL_PARTNERS.find((p) => p.slug === slug);
}
