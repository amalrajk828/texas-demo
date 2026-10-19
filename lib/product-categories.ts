export interface SubCategoryItem {
  title: string;
  href: string;
  image: string;
  description: string;
  fit?: "contain" | "cover";
}

export interface ProductCategoryData {
  key: string;
  slugs: string[];
  path: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  heroTitle: string;
  subtitle: string;
  keywords: string[];
  subcategories: SubCategoryItem[];
}

export const PRODUCT_CATEGORIES: Record<string, ProductCategoryData> = {
  "acservos": {
    "key": "acservos",
    "slugs": [
      "acservos"
    ],
    "path": "/products/acservos/",
    "metaTitle": "AC Servos",
    "metaDesc": "Mitsubishi Electric MELSERVO AC servo drives and motors for precise motion control in industrial automation.",
    "eyebrow": "Mitsubishi Electric · Motion Control",
    "heroTitle": "AC Servos",
    "subtitle": "AC Servo Drives & Motors — Mitsubishi Electric",
    "keywords": [
      "Mitsubishi AC servo drives",
      "MELSERVO servo motors",
      "MR-J5 servo amplifier",
      "motion control solutions Kuwait",
      "Kinetix servo motor",
      "Kinetix 5700 servo drive",
      "Kinetix 5100",
      "Allen Bradley 3 phase motor starter",
      "motor control center manufacturers"
    ],
    "subcategories": []
  },
  "analyzers/cems": {
    "key": "analyzers/cems",
    "slugs": [
      "analyzers",
      "cems"
    ],
    "path": "/products/analyzers/cems/",
    "metaTitle": "CEMS",
    "metaDesc": "Continuous emissions monitoring systems (CEMS) from SICK for compliance monitoring of all pollutant components in exhaust gases from waste incineration, power plants, and industrial facilities.",
    "eyebrow": "SICK · CEMS Monitoring",
    "heroTitle": "CEMS",
    "subtitle": "Continuous Emissions Monitoring Systems",
    "keywords": [
      "CEMS solutions Kuwait",
      "continuous emissions monitoring",
      "SICK MCS100FT MCS200HW",
      "flue gas monitoring systems",
      "CEMS Kuwait power plant",
      "emissions monitoring Kuwait",
      "power plant CEMS GCC",
      "stack gas analysis Dubai"
    ],
    "subcategories": []
  },
  "analyzers/dust-analyzers": {
    "key": "analyzers/dust-analyzers",
    "slugs": [
      "analyzers",
      "dust-analyzers"
    ],
    "path": "/products/analyzers/dust-analyzers/",
    "metaTitle": "Dust Analyzers",
    "metaDesc": "SICK dust analyzers for continuous monitoring of dust concentration and opacity in stack emissions from power plants, waste incineration, and industrial facilities.",
    "eyebrow": "SICK · Dust Measurement",
    "heroTitle": "Dust Analyzers",
    "subtitle": "Dust Concentration & Opacity Measurement for Stack Emissions",
    "keywords": [
      "dust analyzers Kuwait",
      "SICK DUSTHUNTER",
      "stack emissions monitoring",
      "dust concentration measurement",
      "dust monitoring Kuwait power plant",
      "opacity measurement GCC",
      "particulate emissions analyzer",
      "industrial dust monitoring Dubai"
    ],
    "subcategories": []
  },
  "analyzers/gas-analyzers": {
    "key": "analyzers/gas-analyzers",
    "slugs": [
      "analyzers",
      "gas-analyzers"
    ],
    "path": "/products/analyzers/gas-analyzers/",
    "metaTitle": "Gas Analyzers",
    "metaDesc": "SICK in-situ and extractive gas analyzers for real-time gas analysis directly within industrial processes — GM32 and GM35 for emissions monitoring and process control.",
    "eyebrow": "SICK · In-Situ Gas Analysis",
    "heroTitle": "Gas Analyzers",
    "subtitle": "In-Situ & Extractive Gas Analysis for Process & Emissions Monitoring",
    "keywords": [
      "SICK gas analyzers Kuwait",
      "GM32 in-situ gas analyzer",
      "GM35 gas analyzer",
      "SO2 NO NO2 NH3 measurement",
      "Honeywell analytics gas detection",
      "gas detection system Kuwait",
      "portable multi gas monitor",
      "personal gas detection monitors",
      "hazardous gas detection system",
      "industrial gas detection systems"
    ],
    "subcategories": []
  },
  "analyzers": {
    "key": "analyzers",
    "slugs": [
      "analyzers"
    ],
    "path": "/products/analyzers/",
    "metaTitle": "Analyzers - Gas Analysis, CEMS & Process Analyzers",
    "metaDesc": "SICK, Endress+Hauser, and Kurz Instruments analyzers — gas chromatographs, CEMS, gas analyzers, laser TDLAS analyzers, water analyzers, environmental monitoring, and steam quality analyzers. QAL1 & MCERTS certified.",
    "eyebrow": "SICK · Gas Analysis",
    "heroTitle": "Analyzers",
    "subtitle": "Emissions Monitoring, Dust & Gas Analysis Solutions",
    "keywords": [
      "gas analyzers Kuwait",
      "CEMS emissions monitoring",
      "dust analyzers SICK",
      "in-situ gas analysis",
      "industrial process analyzers",
      "Endress Hauser CEMS Kuwait",
      "FLOWSIC ultrasonic gas meter",
      "QAL1 MCERTS certified",
      "laser gas analyzer TDLAS",
      "gas chromatograph Kuwait",
      "online process analyzer",
      "steam quality analyzer",
      "continuous water analyzer",
      "DUSTHUNTER",
      "Honeywell gas monitoring system GCC",
      "gas detection monitor Kuwait",
      "fixed gas detection system",
      "gas detection panel"
    ],
    "subcategories": [
      {
        "title": "CEMS Solutions",
        "href": "/products/analyzers/cems/",
        "image": "/cems.png",
        "description": "Turnkey Continuous Emission Monitoring Systems measuring SO2, NOx, CO, CO2, and O2 with automated calibration."
      },
      {
        "title": "Gas Analyzers",
        "href": "/products/analyzers/gas-analyzers/",
        "image": "/gas_analyzer.png",
        "description": "In-situ and extractive photometric, laser, and paramagnetic gas analyzers for hazardous refinery process monitoring."
      },
      {
        "title": "Dust Analyzers",
        "href": "/products/analyzers/dust-analyzers/",
        "image": "/dust_analyzer.png",
        "description": "Optical transmission and scattered light particulate monitors for stacks, cement kilns, and baghouse leak detection."
      }
    ]
  },
  "control-room-interior-and-console": {
    "key": "control-room-interior-and-console",
    "slugs": [
      "control-room-interior-and-console"
    ],
    "path": "/products/control-room-interior-and-console/",
    "metaTitle": "Control Room Interior & Console",
    "metaDesc": "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces. ISO 11064 compliant.",
    "eyebrow": "Control Room Interior & Console",
    "heroTitle": "Control Room Interior & Console",
    "subtitle": "Ergonomic control room furniture and console systems for critical operations — from Pyrotech Workspace Solutions.",
    "keywords": [
      "control room solutions Kuwait",
      "command centre consoles",
      "Pyrotech workspace solutions",
      "ergonomic control room design",
      "ISO 11064 control room",
      "operator console Kuwait",
      "turnkey control room GCC",
      "control room interior design"
    ],
    "subcategories": []
  },
  "custody-metering-solutions": {
    "key": "custody-metering-solutions",
    "slugs": [
      "custody-metering-solutions"
    ],
    "path": "/products/custody-metering-solutions/",
    "metaTitle": "Custody Metering Solutions",
    "metaDesc": "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
    "eyebrow": "SICK · OMNI · Custody Transfer",
    "heroTitle": "Custody Metering Solutions",
    "subtitle": "Flow Metering Skids, Flow Computers & Control Systems",
    "keywords": [
      "custody metering solutions Kuwait",
      "flow metering skids",
      "OMNI flow computers",
      "custody transfer measurement",
      "fiscal metering Kuwait",
      "metering skid design GCC",
      "flow computer integration Dubai",
      "oil and gas custody transfer",
      "pipeline metering systems",
      "custody transfer skid fabrication"
    ],
    "subcategories": []
  },
  "field-instruments": {
    "key": "field-instruments",
    "slugs": [
      "field-instruments"
    ],
    "path": "/products/field-instruments/",
    "metaTitle": "Field Instruments",
    "metaDesc": "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
    "eyebrow": "SICK · Field Instruments",
    "heroTitle": "Field Instruments",
    "subtitle": "Pressure, temperature, level, and flow field instruments for industrial processes — engineered for precision and reliability.",
    "keywords": [
      "field instruments Kuwait",
      "SICK temperature sensors",
      "pressure level flow sensors",
      "condition monitoring sensors",
      "industrial field instrumentation",
      "ABB vibration monitoring Kuwait",
      "ABB condition monitoring GCC",
      "ABB vibration sensor",
      "Rockwell vibration monitoring",
      "Rockwell condition monitoring",
      "Allen Bradley vibration monitoring",
      "temperature dataloggers",
      "wireless temperature logger",
      "temperature data acquisition system"
    ],
    "subcategories": []
  },
  "flow-meters/flare-meters": {
    "key": "flow-meters/flare-meters",
    "slugs": [
      "flow-meters",
      "flare-meters"
    ],
    "path": "/products/flow-meters/flare-meters/",
    "metaTitle": "Flare Meters",
    "metaDesc": "SICK ultrasonic flare gas and steam flow meters — FLOWSIC100 Flare and FLOWSIC100-Flare-XT for reliable, low-maintenance measurement on refinery and petrochemical flare stacks.",
    "eyebrow": "SICK · Flare Gas & Steam Measurement",
    "heroTitle": "Flare Meters",
    "subtitle": "Ultrasonic Flare Gas & Steam Flow Measurement",
    "keywords": [
      "flare gas flow meters",
      "SICK FLOWSIC100 Flare",
      "flare stack measurement",
      "steam flow meters refinery",
      "flare gas measurement Kuwait",
      "ultrasonic flare meter GCC",
      "refinery flare monitoring",
      "flare flow measurement Dubai"
    ],
    "subcategories": []
  },
  "flow-meters/gas-flow-meters": {
    "key": "flow-meters/gas-flow-meters",
    "slugs": [
      "flow-meters",
      "gas-flow-meters"
    ],
    "path": "/products/flow-meters/gas-flow-meters/",
    "metaTitle": "Gas Flow Meters",
    "metaDesc": "Ultrasonic gas flow meters from SICK — FLOWSIC600-XT, FLOWSIC600, FLOWSIC500, FLOWSIC600 DRU, and FLOWSIC30 for custody transfer and process gas measurement applications.",
    "eyebrow": "SICK · Ultrasonic Gas Flow Measurement",
    "heroTitle": "Gas Flow Meters",
    "subtitle": "Ultrasonic Gas Flow Measurement for Custody Transfer & Process Applications",
    "keywords": [
      "gas flow meters Kuwait",
      "SICK FLOWSIC600 ultrasonic",
      "custody transfer gas metering",
      "natural gas flow measurement",
      "ultrasonic gas meter Kuwait",
      "natural gas custody transfer GCC",
      "pipeline gas flow measurement",
      "gas metering systems Dubai"
    ],
    "subcategories": []
  },
  "flow-meters/liquid-flow-meters": {
    "key": "flow-meters/liquid-flow-meters",
    "slugs": [
      "flow-meters",
      "liquid-flow-meters"
    ],
    "path": "/products/flow-meters/liquid-flow-meters/",
    "metaTitle": "Liquid Flow Meters",
    "metaDesc": "Wide range of liquid flow meters from Faure Herman, Ultraflux, and SICK — custody and non-custody solutions including helical turbine, ultrasonic, and portable flowmeters.",
    "eyebrow": "Faure Herman · Ultraflux · SICK",
    "heroTitle": "Liquid Flow Meters",
    "subtitle": "Custody & Non-Custody Liquid Flow Measurement",
    "keywords": [
      "liquid flow meters Kuwait",
      "Faure Herman helical turbine",
      "Ultraflux ultrasonic flowmeter",
      "custody transfer liquid metering",
      "helical turbine meter Kuwait",
      "liquid custody transfer GCC",
      "petroleum flow measurement",
      "refinery liquid flow meters Dubai"
    ],
    "subcategories": []
  },
  "flow-meters": {
    "key": "flow-meters",
    "slugs": [
      "flow-meters"
    ],
    "path": "/products/flow-meters/",
    "metaTitle": "Flow Meters",
    "metaDesc": "Precision flow measurement instruments for liquids, gases, and flare applications from SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and more — custody transfer and process monitoring solutions.",
    "eyebrow": "Flow Measurement",
    "heroTitle": "Flow Meters",
    "subtitle": "Liquid, Gas & Flare Flow Measurement Solutions",
    "keywords": [
      "flow meters Kuwait",
      "ultrasonic flow meters",
      "SICK flow meters",
      "Faure Herman flow meters",
      "KEM Kuppers flow meter",
      "Endress Hauser flow meter",
      "Tek-Trol flow meter",
      "custody transfer flow measurement",
      "Coriolis flow meter Kuwait",
      "V-Cone flow element",
      "turbine flow meter",
      "flare gas meter",
      "thermal mass flow meter",
      "ultrasonic pipe flow meter GCC",
      "insertion thermal mass flow meter",
      "clamp on liquid flow meter Kuwait",
      "sanitary magnetic flow meter",
      "high pressure gas flow meter",
      "natural gas flow meter Kuwait",
      "Coriolis flow meter manufacturers",
      "thermal mass flow meter manufacturer",
      "KROHNE flow meter Kuwait"
    ],
    "subcategories": [
      {
        "title": "Liquid Flow Meters",
        "href": "/products/flow-meters/liquid-flow-meters/",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "description": "High-precision custody transfer and allocation meters for crude oil, refined fuels, LPG, and petrochemical liquids."
      },
      {
        "title": "Gas Flow Meters",
        "href": "/products/flow-meters/gas-flow-meters/",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "description": "Multi-path ultrasonic and turbine gas meters designed for custody transfer, high-pressure natural gas, and process lines."
      },
      {
        "title": "Flare Gas Meters",
        "href": "/products/flow-meters/flare-meters/",
        "image": "/flare_meter.png",
        "description": "Continuous ultrasonic flare stack meters operating accurately from near-zero velocities up to 120 m/s for EPA compliance.",
        "fit": "cover"
      }
    ]
  },
  "frequency-inverter-vfd": {
    "key": "frequency-inverter-vfd",
    "slugs": [
      "frequency-inverter-vfd"
    ],
    "path": "/products/frequency-inverter-vfd/",
    "metaTitle": "Frequency Inverters (VFD)",
    "metaDesc": "Mitsubishi Electric FR Series frequency inverters for precise motor speed control across industrial applications.",
    "eyebrow": "Mitsubishi Electric · Drive Solutions",
    "heroTitle": "Frequency Inverters (VFD)",
    "subtitle": "Variable Frequency Drives — Mitsubishi Electric",
    "keywords": [
      "Mitsubishi frequency inverter",
      "FR Series VFD",
      "variable frequency drive Kuwait",
      "motor speed control solutions",
      "Allen Bradley VFD distributor Kuwait",
      "PowerFlex 753 AC drive",
      "PowerFlex 6000T",
      "PowerFlex VFD GCC",
      "variable speed drive system",
      "DC variable speed drive",
      "Allen Bradley motor controller"
    ],
    "subcategories": []
  },
  "got": {
    "key": "got",
    "slugs": [
      "got"
    ],
    "path": "/products/got/",
    "metaTitle": "GOT (Graphic Operator Panels)",
    "metaDesc": "Mitsubishi Electric GOT2000 Series graphic operation terminals for industrial automation systems.",
    "eyebrow": "Mitsubishi Electric · HMI Systems",
    "heroTitle": "GOT",
    "subtitle": "Graphic Operator Panels (HMI)",
    "keywords": [
      "Mitsubishi GOT HMI",
      "GOT2000 graphic operator panel",
      "HMI touchscreen Kuwait",
      "industrial HMI solutions",
      "Mitsubishi HMI panel Dubai",
      "GOT1000 series Kuwait",
      "operator interface panel GCC",
      "SCADA HMI integration Kuwait",
      "industrial display panel",
      "HMI programming Kuwait"
    ],
    "subcategories": []
  },
  "iconics": {
    "key": "iconics",
    "slugs": [
      "iconics"
    ],
    "path": "/products/iconics/",
    "metaTitle": "ICONICS",
    "metaDesc": "ICONICS GENESIS64 SCADA and HMI software for real-time visualization and control of industrial processes.",
    "eyebrow": "ICONICS · SCADA & HMI Software",
    "heroTitle": "ICONICS",
    "subtitle": "SCADA, HMI & Industrial Software",
    "keywords": [
      "ICONICS SCADA software",
      "GENESIS64 HMI",
      "SCADA visualization Kuwait",
      "industrial SCADA solutions",
      "ICONICS Hyper Historian Kuwait",
      "building automation SCADA GCC",
      "Energy AnalytiX Dubai",
      "factory automation software Kuwait",
      "real-time industrial monitoring",
      "ICONICS partner Kuwait"
    ],
    "subcategories": []
  },
  "industrial-automation": {
    "key": "industrial-automation",
    "slugs": [
      "industrial-automation"
    ],
    "path": "/products/industrial-automation/",
    "metaTitle": "Industrial Automation",
    "metaDesc": "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
    "eyebrow": "Industrial Automation",
    "heroTitle": "Industrial Automation",
    "subtitle": "End-to-end automation solutions for process plants and manufacturing facilities — from PLCs and control panels to industrial networks and command centres.",
    "keywords": [
      "industrial automation solutions Kuwait",
      "PLC I/O modules",
      "industrial control panels",
      "Ethernet switches industrial",
      "Allen Bradley PanelView 7",
      "PanelView Plus 6",
      "FactoryTalk Linx Gateway",
      "CompactLogix 5000",
      "Allen Bradley PowerFlex 7000",
      "Rockwell Studio 5000 Logix Designer"
    ],
    "subcategories": []
  },
  "plc": {
    "key": "plc",
    "slugs": [
      "plc"
    ],
    "path": "/products/plc/",
    "metaTitle": "PLC",
    "metaDesc": "Mitsubishi Electric PLC solutions for industrial automation including MELSEC iQ-R, MELSEC-Q, FX5U, FX5UJ, and FX5S series.",
    "eyebrow": "Mitsubishi Electric · PLC Systems",
    "heroTitle": "PLC",
    "subtitle": "Programmable Logic Controllers",
    "keywords": [
      "Mitsubishi PLC Kuwait",
      "MELSEC iQ-R series",
      "MELSEC-Q PLC",
      "FX5U programmable controller",
      "industrial PLC solutions"
    ],
    "subcategories": []
  },
  "sensors": {
    "key": "sensors",
    "slugs": [
      "sensors"
    ],
    "path": "/products/sensors/",
    "metaTitle": "Sensors",
    "metaDesc": "Texas Technical Services offers a wide range of sensors for precise data acquisition, enhancing the efficiency and control of industrial processes.",
    "eyebrow": "SICK · Industrial Sensors",
    "heroTitle": "Industrial Sensors",
    "subtitle": "SICK offers a comprehensive range of industrial sensors engineered for precision and performance in the most demanding environments.",
    "keywords": [
      "industrial sensors Kuwait",
      "SICK photoelectric sensors",
      "proximity sensors",
      "safety light curtains",
      "industrial automation sensors",
      "ABB vibration sensor Kuwait",
      "ABB condition monitoring sensors",
      "temperature data acquisition system",
      "level logger"
    ],
    "subcategories": []
  }
};

export function getProductCategoryData(slugs: string[] | string): ProductCategoryData | undefined {
  const key = Array.isArray(slugs) ? slugs.join('/') : slugs.replace(/^\/?products\//, '').replace(/\/$/, '');
  return PRODUCT_CATEGORIES[key];
}

export function getAllProductCategorySlugs(): { slug: string[] }[] {
  return Object.values(PRODUCT_CATEGORIES).map((c) => ({
    slug: c.slugs,
  }));
}
