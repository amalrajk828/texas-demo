import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  ShieldCheck,
  Cpu,
  Globe,
  Brain,
  Grid,
  FileText,
  Boxes,
  Activity,
  Workflow,
  Radio,
  Monitor,
  Tablet,
  Zap,
  Wrench,
  Flame,
  Factory,
  Pipette,
  Snowflake,
  Droplets,
  Building2,
  Layers,
} from "lucide-react";

export interface NavChild {
  label: string;
  href: string;
  desc?: string;
  highlight?: boolean;
  icon?: LucideIcon;
  group?: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
  sectionId?: string;
  children?: NavChild[];
}

export const SERVICES_CHILDREN: NavChild[] = [
  {
    label: "Flow Measurement & Custody Transfer",
    href: "/service/flow-measurement-solutions/",
    desc: "Turnkey fiscal metering skids, prover loops & batch auditing",
    icon: Gauge,
    group: "Core Services",
  },
  {
    label: "Inspection & Testing (NDT)",
    href: "/service/inspection-testing/",
    desc: "UT, RT, MT, PT, structural testing & welder certification",
    icon: ShieldCheck,
    group: "Core Services",
  },
  {
    label: "Industrial Automation & SCADA",
    href: "/service/industrial-automation/",
    desc: "PLC, DCS, SCADA & Safety Instrumented Systems (SIS)",
    icon: Cpu,
    group: "Core Services",
  },
  {
    label: "View All 60+ Services →",
    href: "/services/",
    highlight: true,
  },
];

export const INDUSTRIES_CHILDREN: NavChild[] = [
  {
    label: "Oil & Gas Production",
    href: "/industries/oil-gas/",
    desc: "Upstream wellhead allocation, gathering centers & pipelines",
    icon: Flame,
    group: "Energy & Hydrocarbons",
  },
  {
    label: "Refining & Petrochemicals",
    href: "/industries/refinery/",
    desc: "Downstream clean hydrocarbon export & steam distribution",
    icon: Factory,
    group: "Energy & Hydrocarbons",
  },
  {
    label: "Petrochemical Complexes",
    href: "/industries/petrochemicals/",
    desc: "High-precision ethylene, propylene & gas mass flow",
    icon: Pipette,
    group: "Energy & Hydrocarbons",
  },
  {
    label: "LNG Terminals & Cryogenics",
    href: "/industries/lng/",
    desc: "Custody transfer for cryogenic liquefied natural gas",
    icon: Snowflake,
    group: "Energy & Hydrocarbons",
  },
  {
    label: "Power & Desalination",
    href: "/industries/power-plant/",
    desc: "Seawater intake, boiler feed water & heavy fuel delivery",
    icon: Zap,
    group: "Power & Heavy Industry",
  },
  {
    label: "Water Treatment",
    href: "/industries/water-treatment/",
    desc: "Municipal & industrial water flow monitoring",
    icon: Droplets,
    group: "Power & Heavy Industry",
  },
  {
    label: "Cement & Manufacturing",
    href: "/industries/cement/",
    desc: "Continuous process control & automated batch weighing",
    icon: Building2,
    group: "Power & Heavy Industry",
  },
  {
    label: "Metal & Steel Processing",
    href: "/industries/metal-steel/",
    desc: "Furnace automation & high-temperature sensor systems",
    icon: Layers,
    group: "Power & Heavy Industry",
  },
  {
    label: "View All Industry Sectors →",
    href: "/industries/",
    highlight: true,
  },
];

export const PRODUCTS_CHILDREN: NavChild[] = [
  {
    label: "Flow Meters",
    href: "/products/flow-meters/",
    desc: "Ultrasonic, Coriolis mass & helical turbine meters",
    icon: Gauge,
    group: "Flow & Analytics",
  },
  {
    label: "Custody Metering Skids",
    href: "/products/custody-metering-solutions/",
    desc: "API/AGA compliant liquid & gas fiscal metering skids",
    icon: Boxes,
    group: "Flow & Analytics",
  },
  {
    label: "Gas & CEMS Analyzers",
    href: "/products/analyzers/",
    desc: "Continuous emission monitoring & extractive analyzers",
    icon: Activity,
    group: "Flow & Analytics",
  },
  {
    label: "Sensors & Transmitters",
    href: "/products/sensors/",
    desc: "Pressure, differential, level & temperature transmitters",
    icon: Radio,
    group: "Flow & Analytics",
  },
  {
    label: "Field Instruments",
    href: "/products/field-instruments/",
    desc: "Control valves, proving loops & analytical hardware",
    icon: Wrench,
    group: "Flow & Analytics",
  },
  {
    label: "Industrial Automation Systems",
    href: "/products/industrial-automation/",
    desc: "Turnkey DCS, PLC panels & safety instrumented systems",
    icon: Workflow,
    group: "Automation & Drives",
  },
  {
    label: "PLC Systems (Mitsubishi & Rockwell)",
    href: "/products/plc/",
    desc: "Programmable automation controllers & fieldbus I/O",
    icon: Cpu,
    group: "Automation & Drives",
  },
  {
    label: "ICONICS SCADA & IoT",
    href: "/products/iconics/",
    desc: "Next-generation supervisory control & telemetry software",
    icon: Monitor,
    group: "Automation & Drives",
  },
  {
    label: "GOT HMI Panels",
    href: "/products/got/",
    desc: "High-visibility industrial touch screen interfaces",
    icon: Tablet,
    group: "Automation & Drives",
  },
  {
    label: "VFD & Inverters",
    href: "/products/frequency-inverter-vfd/",
    desc: "High-efficiency variable frequency motor drives",
    icon: Zap,
    group: "Automation & Drives",
  },
  {
    label: "View All Products Catalog →",
    href: "/products/",
    highlight: true,
  },
];

export const SOLUTIONS_CHILDREN: NavChild[] = [
  {
    label: "Global Network",
    href: "/partners/",
    desc: "Regional engineering partnerships & international OEM alliances",
    icon: Globe,
    group: "Platforms & Network",
  },
  {
    label: "Texaflow Custody Metering",
    href: "/solutions/texaflow/",
    desc: "Turnkey custody transfer flow computer & fiscal metering systems",
    icon: Gauge,
    group: "Platforms & Network",
  },
  {
    label: "Space AI Industrial AI",
    href: "/solutions/space-ai/",
    desc: "Predictive maintenance, telemetry & industrial AI automation",
    icon: Brain,
    group: "Platforms & Network",
  },
  {
    label: "Mitsubishi Electric",
    href: "/solutions/mitsubishi-electric/",
    desc: "Authorized factory automation, PLC, CNC & drive solutions",
    icon: Cpu,
    group: "Alliances & Desk",
  },
  {
    label: "PWS Floor Solutions",
    href: "/solutions/pws-floor-solutions/",
    desc: "Heavy-duty industrial flooring & raised access systems",
    icon: Grid,
    group: "Alliances & Desk",
  },
  {
    label: "RFQ Tender Desk",
    href: "/contacts/",
    desc: "Direct engineering inquiries, project tenders & fast quotations",
    icon: FileText,
    group: "Alliances & Desk",
  },
];

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
    label: "Products",
    // Automatically targets first dropdown child
    href: PRODUCTS_CHILDREN[0]?.href || "/products/",
    id: "link-products",
    sectionId: "products",
    children: PRODUCTS_CHILDREN,
  },
  {
    label: "Solutions",
    href: "/solutions/",
    id: "link-solutions",
    sectionId: "solutions",
    children: SOLUTIONS_CHILDREN,
  },
  {
    label: "Services",
    // Automatically targets first dropdown child
    href: SERVICES_CHILDREN[0]?.href || "/services/",
    id: "link-services",
    sectionId: "services",
    children: SERVICES_CHILDREN,
  },
  {
    label: "Industries",
    // Automatically targets first dropdown child
    href: INDUSTRIES_CHILDREN[0]?.href || "/industries/",
    id: "link-industries",
    sectionId: "industries",
    children: INDUSTRIES_CHILDREN,
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
