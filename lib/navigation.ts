export interface NavChild {
  label: string;
  href: string;
  desc?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
  sectionId?: string;
  children?: NavChild[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
    id: "link-home",
    sectionId: "sequence",
  },
  {
    label: "About Us",
    href: "/about-us/",
    id: "link-about",
    sectionId: "about",
  },
  {
    label: "Services",
    href: "/services/",
    id: "link-services",
    sectionId: "services",
    children: [
      {
        label: "Flow Measurement & Custody Transfer",
        href: "/service/flow-measurement-solutions/",
        desc: "Turnkey fiscal metering skids, prover loops & batch auditing",
      },
      {
        label: "Inspection & Testing (NDT)",
        href: "/service/inspection-testing/",
        desc: "UT, RT, MT, PT, structural testing & welder certification",
      },
      {
        label: "Industrial Automation & SCADA",
        href: "/service/industrial-automation/",
        desc: "PLC, DCS, SCADA & Safety Instrumented Systems (SIS)",
      },
      {
        label: "View All 60+ Services →",
        href: "/services/",
        highlight: true,
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    id: "link-industries",
    sectionId: "industries",
    children: [
      {
        label: "Oil & Gas Production",
        href: "/industries/oil-gas/",
        desc: "Upstream wellhead allocation, gathering centers & pipelines",
      },
      {
        label: "Refining & Petrochemicals",
        href: "/industries/refinery/",
        desc: "Downstream clean hydrocarbon export & steam distribution",
      },
      {
        label: "Petrochemical Complexes",
        href: "/industries/petrochemicals/",
        desc: "High-precision ethylene, propylene & gas mass flow",
      },
      {
        label: "LNG Terminals & Cryogenics",
        href: "/industries/lng/",
        desc: "Custody transfer for cryogenic liquefied natural gas",
      },
      {
        label: "Power & Desalination",
        href: "/industries/power-plant/",
        desc: "Seawater intake, boiler feed water & heavy fuel delivery",
      },
      {
        label: "Water Treatment",
        href: "/industries/water-treatment/",
        desc: "Municipal & industrial water flow monitoring",
      },
      {
        label: "Cement & Manufacturing",
        href: "/industries/cement/",
        desc: "Continuous process control & automated batch weighing",
      },
      {
        label: "Metal & Steel Processing",
        href: "/industries/metal-steel/",
        desc: "Furnace automation & high-temperature sensor systems",
      },
      {
        label: "View All Industry Sectors →",
        href: "/industries/",
        highlight: true,
      },
    ],
  },
  {
    label: "Products",
    href: "/products/",
    id: "link-products",
    sectionId: "products",
    children: [
      {
        label: "Flow Meters",
        href: "/products/flow-meters/",
        desc: "Ultrasonic, Coriolis mass & helical turbine meters",
      },
      {
        label: "Custody Metering Skids",
        href: "/products/custody-metering-solutions/",
        desc: "API/AGA compliant liquid & gas fiscal metering skids",
      },
      {
        label: "Gas & CEMS Analyzers",
        href: "/products/analyzers/",
        desc: "Continuous emission monitoring & extractive analyzers",
      },
      {
        label: "Industrial Automation Systems",
        href: "/products/industrial-automation/",
        desc: "Turnkey DCS, PLC panels & safety instrumented systems",
      },
      {
        label: "Sensors & Transmitters",
        href: "/products/sensors/",
        desc: "Pressure, differential, level & temperature transmitters",
      },
      {
        label: "PLC Systems (Mitsubishi & Rockwell)",
        href: "/products/plc/",
        desc: "Programmable automation controllers & fieldbus I/O",
      },
      {
        label: "ICONICS SCADA & IoT",
        href: "/products/iconics/",
        desc: "Next-generation supervisory control & telemetry software",
      },
      {
        label: "GOT HMI Panels",
        href: "/products/got/",
        desc: "High-visibility industrial touch screen interfaces",
      },
      {
        label: "VFD & Inverters",
        href: "/products/frequency-inverter-vfd/",
        desc: "High-efficiency variable frequency motor drives",
      },
      {
        label: "Field Instruments",
        href: "/products/field-instruments/",
        desc: "Control valves, proving loops & analytical hardware",
      },
      {
        label: "View All Products Catalog →",
        href: "/products/",
        highlight: true,
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog/",
    id: "link-blog",
    sectionId: "blog",
  },
  {
    label: "Clients",
    href: "/clients/",
    id: "link-clients",
    sectionId: "clients",
  },
];
