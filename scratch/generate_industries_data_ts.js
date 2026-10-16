const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scratch/industries_data.json', 'utf8'));
const detailed = JSON.parse(fs.readFileSync('scratch/industries_detailed.json', 'utf8'));

// Generate tailored challenges and solutions for each industry
const industryChallenges = {
  "oil-gas": [
    {
      title: "Fiscal Custody Transfer Billing Uncertainty",
      challenge: "High financial risk from unmetered temperature or pressure fluctuations across long-distance crude and natural gas export pipelines.",
      solution: "Multi-path ultrasonic meters and dual-redundant OMNI flow computers achieving 0.1% fiscal precision adhering to API MPMS standards."
    },
    {
      title: "Sour Gas (H2S) Corrosion & Extreme Pressures",
      challenge: "Corrosive wet gas and high pipeline pressure causing premature transducer failure and hazardous gas leakage.",
      solution: "NACE MR0175 compliant wetted alloys, non-intrusive clamp-on meters, and high-frequency in-situ ultrasonic inspection routines."
    },
    {
      title: "Flare Stack Emission Compliance (Kuwait EPA)",
      challenge: "Wide velocity fluctuations from emergency flaring down to purge rates, making environmental tracking erratic.",
      solution: "Ultrasonic flare gas meters measuring velocities from 0.03 m/s to 120 m/s paired with continuous extractive CEMS."
    }
  ],
  "refinery": [
    {
      title: "Harsh Fluid Measurement Across Varied Viscosities",
      challenge: "Processing extremes from high-viscosity vacuum residues and asphalt to volatile light naphtha and LPG.",
      solution: "Heliflu TZN helical turbine meters with tungsten carbide bearings and broad Reynolds-number linearity."
    },
    {
      title: "Fired Heater & Boiler Emission Limits",
      challenge: "Strict regional limits on NOx, SO2, and particulate discharge from continuous refinery refining units.",
      solution: "SICK extractive CEMS packages engineered for high ambient temperatures and aggressive flue gases."
    },
    {
      title: "Refinery Battery Limit Balancing",
      challenge: "Mass balance reconciliation discrepancies across complex distillation, cracking, and blending units.",
      solution: "Plant-wide digital bus integration connecting flow computers directly to supervisory DCS and SCADA networks."
    }
  ],
  "petrochemicals": [
    {
      title: "Reactive & Aggressive Chemical Processing",
      challenge: "Polymerization, aggressive acids, and high catalyst activity threatening measuring element integrity.",
      solution: "Full-bore ultrasonic meters without internal moving parts or flow restrictions, preventing clogging and pressure drops."
    },
    {
      title: "Precision Batch Dosing & Ratio Control",
      challenge: "Slight chemical deviation during compounding or reactor feed degrades batch quality and causes costly rejections.",
      solution: "High-speed digital flow metering skids and PLC control loops ensuring micro-second valve response."
    },
    {
      title: "Volatile Organic Compounds (VOC) Monitoring",
      challenge: "Fugitive emission detection and hazardous area certification (ATEX / IECEx Zone 1) requirements.",
      solution: "Explosion-proof optical and photometric gas analyzers continuously monitoring perimeter and process vent streams."
    }
  ],
  "lng": [
    {
      title: "Cryogenic Temperatures (-162°C) Thermal Shock",
      challenge: "Extreme cold causes sensor drift, mechanical shrinkage, and seal failure during tanker loading and unloading.",
      solution: "Cryogenically validated ultrasonic liquid meters with thermal isolation spools and redundant piezoelectric crystals."
    },
    {
      title: "Boil-Off Gas (BOG) Compression & Balance",
      challenge: "Vaporization during storage and transfer must be precisely quantified to reconcile energy content and billing.",
      solution: "High-accuracy ultrasonic gas meters with integrated gas chromatography and heating value calculation."
    },
    {
      title: "High-Volume Ship-to-Shore Loading Rates",
      challenge: "Rapid tanker turnaround necessitates handling massive flow rates without calibration drift or cavitation.",
      solution: "Large-diameter multi-run metering skids with automated proving loops and SIL-rated emergency shutdown interface."
    }
  ],
  "power-plant": [
    {
      title: "High-Pressure Superheated Steam Measurement",
      challenge: "Extreme thermal stress and pressure cycling in thermal turbines degrade mechanical flow meters rapidly.",
      solution: "Differential pressure systems and ruggedized ultrasonic meters designed for high enthalpy steam."
    },
    {
      title: "EPA / CEMS Multi-Pollutant Tracking",
      challenge: "Continuous tracking of CO, CO2, SO2, NOx, and opacity across gas turbine exhaust and steam boiler stacks.",
      solution: "Turnkey SICK CEMS shelters equipped with automatic zero/span gas calibration and regulatory data acquisition systems."
    },
    {
      title: "Turbine Fuel Gas Supply Regulation",
      challenge: "Fluctuations in pipeline fuel gas temperature and Wobbe index lead to combustion instability and turbine trips.",
      solution: "Compact ultrasonic fuel gas meters paired with rapid-response process gas chromatographs."
    }
  ],
  "water-treatment": [
    {
      title: "Large-Diameter Municipal Main Flow Tracking",
      challenge: "High installation cost and pipeline shutdown constraints when metering municipal supply headers up to DN2000.",
      solution: "External transit-time clamp-on ultrasonic meters installed without line cutting or service interruption."
    },
    {
      title: "Corrosive Chemical Dosing & Wastewater Sludge",
      challenge: "Chlorine, coagulants, and heavy abrasive slurries cause electrode fouling and mechanical wear.",
      solution: "Non-intrusive ultrasonic and electromagnetic meters with inert liners and automated self-cleaning."
    },
    {
      title: "Desalination Plant High-Salinity Brine Monitoring",
      challenge: "High chloride content causes rapid pitting and galvanic corrosion in standard metallic instrumentation.",
      solution: "Super duplex wetted components and titanium sensors engineered specifically for Gulf desalination facilities."
    }
  ],
  "cement": [
    {
      title: "Severe Abrasive Dust & Particulate Concentration",
      challenge: "Heavy particulate loads in rotary kiln exhausts blind standard optical sensors within hours.",
      solution: "SICK DUSTHUNTER transmission analyzers with high-volume purge air blowers and automatic contamination compensation."
    },
    {
      title: "Rotary Kiln High-Temperature Gas Analysis",
      challenge: "Combustion gas sampling at kiln inlets reaching 1400°C with severe clinker buildup.",
      solution: "Water-cooled sampling probes with automatic mechanical blowback cleaning and heated sample transport lines."
    },
    {
      title: "Raw Mill & Baghouse Filter Failure Detection",
      challenge: "Filter bag ruptures cause massive dust emissions and regulatory shutdown fines.",
      solution: "Sensitive scattered-light particulate monitors detecting bag leaks instantly prior to catastrophic failure."
    }
  ],
  "metal-steel": [
    {
      title: "Blast Furnace & Converter Off-Gas Monitoring",
      challenge: "Dirty CO, CO2, and H2 gases laden with metallurgical dust and moisture.",
      solution: "Heavy-duty extractive gas analysis systems with multi-stage conditioning and filtration."
    },
    {
      title: "Rolling Mill Lubrication & Hydraulic Flow Control",
      challenge: "High hydraulic pressures and shock loading in continuous casting and hot rolling operations.",
      solution: "Positive displacement and turbine meters with high shock tolerance and digital pulse outputs."
    },
    {
      title: "Stack Opacity & Emission Compliance",
      challenge: "Fume collection systems from electric arc furnaces (EAF) require continuous compliance monitoring.",
      solution: "Cross-duct opacity and continuous particulate analyzers meeting international environmental regulations."
    }
  ]
};

const commonServices = [
  {
    title: "Flow Measurement & Custody Transfer",
    slug: "flow-measurement-solutions",
    desc: "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
    image: "/flow_metering_skid.jpg"
  },
  {
    title: "Industrial Automation & SCADA",
    slug: "industrial-automation",
    desc: "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
    image: "/industrial_automation_service.jpg"
  },
  {
    title: "Non-Destructive Testing (NDT)",
    slug: "inspection-testing",
    desc: "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
    image: "/inspection_testing_service.jpg"
  },
  {
    title: "In-Situ Meter Calibration",
    slug: "flow-meter-calibration",
    desc: "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
    image: "/master_meter.jpg"
  }
];

const compiled = {};

Object.keys(data).forEach(s => {
  const item = data[s];
  const d = detailed[s] || {};
  
  let tags = [];
  try { tags = eval(d.tags || '[]'); } catch(e){}
  
  let stats = [];
  try { stats = eval(d.stats || '[]'); } catch(e){}
  
  let highlights = [];
  try { 
    const parsed = eval(d.highlightsText || '[]'); 
    highlights = parsed.map(p => p.text);
  } catch(e){}

  let keywords = [];
  try { keywords = eval(d.keywords || '[]'); } catch(e){}

  compiled[s] = {
    slug: s,
    name: item.name,
    metaTitle: item.metaTitle,
    metaDesc: item.metaDesc,
    keywords: keywords,
    heroImage: item.image,
    heroDesc: item.heroDesc,
    tags: tags,
    stats: stats,
    highlights: highlights,
    challenges: industryChallenges[s] || [],
    products: item.products,
    services: commonServices
  };
});

const fileContent = `export interface IndustryProductItem {
  category: string;
  name: string;
  slug: string;
  image: string;
  brand: string;
  desc: string;
}

export interface IndustryChallengeItem {
  title: string;
  challenge: string;
  solution: string;
}

export interface IndustryServiceItem {
  title: string;
  slug: string;
  desc: string;
  image: string;
}

export interface IndustryDetailData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  heroImage: string;
  heroDesc: string;
  tags: string[];
  stats: { num: string; label: string }[];
  highlights: string[];
  challenges: IndustryChallengeItem[];
  products: IndustryProductItem[];
  services: IndustryServiceItem[];
}

export const INDUSTRIES_DATA: Record<string, IndustryDetailData> = ${JSON.stringify(compiled, null, 2)};

export function getIndustryBySlug(slug: string): IndustryDetailData | undefined {
  return INDUSTRIES_DATA[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(INDUSTRIES_DATA);
}
`;

fs.writeFileSync('lib/industries/industries-data.ts', fileContent);
console.log('Successfully written lib/industries/industries-data.ts with', Object.keys(compiled).length, 'industries.');
