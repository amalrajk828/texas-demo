export type BulletSection = {
  heading: string;
  items: string[];
};

export type SubBlock = {
  id: string;
  heading: string;
  tagline?: string;
  paragraphs: string[];
  subHeading?: string;
  subParagraphs?: string[];
  bulletSections?: BulletSection[];
  image?: string;
  imageAlt?: string;
  detailHref?: string;
  downloadHref?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ProductData = {
  slug: string;
  name: string;
  category: string;
  brand: string;
  tagline?: string;
  intro?: string;
  heroImage: string;
  paragraphs: string[];
  bulletSections?: BulletSection[];
  subBlocks?: SubBlock[];
  gallery?: GalleryImage[];
  models: string[];
  detailHref?: string;
  detailHrefs?: string[];
  downloadHref?: string;
};

const PRODUCTS: Record<string, ProductData> = {
  "cems-solutions": {
    slug: "cems-solutions",
    name: "CEMS Solutions",
    category: "CEMS",
    brand: "SICK",
    heroImage: "/cems.png",
    paragraphs: [
      "SICK has developed CEMS solutions tailored specifically for emission measurement purposes. These analyzers are designed to accurately measure emissions in various settings, such as power plants, industrial facilities, and ships.",
      "The CEMS solutions are equipped to measure pollutants and reference quantities, while also enabling data processing in compliance with the applicable national and international regulations.",
    ],
    models: [
      "MCS200HW",
      "MCS100FT",
      "MARSIC280",
      "MARSIC300",
      "Shelter",
      "PowerCEMS50 Solutions",
      "PowerCEMS100",
    ],
    detailHref: "#",
  },

  "flow-metering-skid": {
    slug: "flow-metering-skid",
    name: "Flow Metering Skid",
    category: "Metering Skid",
    brand: "SICK · FLOWSKID",
    heroImage: "/flow_metering_skid.jpg",
    paragraphs: [
      "FLOWSKID flow metering systems are the full gas flow metering system offering from SICK. They are provided by SICK as a turnkey solution for custody transfer applications. The systems are flexible in design and provide highly accurate measurement data.",
      "With the ultrasonic gas flow meters FLOWSIC600 or FLOWSIC600-XT as the heart of the FLOWSKID600 and FLOWSKID600-compact, the reliability of the systems can be assured. They are manufactured according to ISO standards and with care to the highest quality using the latest DIN, ANSI, and ASME standards. This means the systems will fulfill local regulations and requirements.",
    ],
    bulletSections: [
      {
        heading: "At a Glance",
        items: [
          "Complete calibration is possible",
          "Customization of instrumentation including gas analyzer, gas chromatograph, and supervisory computer",
          "Seamless integration with the flow computer Flow-X from SICK",
          "Available from Class 150 to Class 2500",
          "Modular design",
        ],
      },
      {
        heading: "Your Benefits",
        items: [
          "Low unaccountable gas and operating costs",
          "Modularity in selecting the metering skid",
          "Flexibility in designing the flow metering system",
          "As solution provider SICK takes responsibility for the project, reducing efforts for the customer during project execution",
          "At all times, the customer is in close control of the project with dedicated project management",
          "Reduced shipping costs and efforts for FLOWSKID600-compact",
        ],
      },
      {
        heading: "Fields of Application",
        items: [
          "Natural gas metering applications",
          "LNG boil off gas metering",
          "Process gas metering systems",
          "Custody metering",
          "Maritime gas measurement",
        ],
      },
    ],
    gallery: [
      { src: "/gas_metering_skid.png", alt: "Gas metering skid assembly — SICK FLOWSKID" },
      { src: "/flow_run.png", alt: "Flow run component — SICK FLOWSKID" },
    ],
    models: ["FLOWSKID600", "FLOWSKID600-compact"],
    detailHref: "https://www.sick.com/in/en/system-solutions/flow-metering-systems/flowskid/c/g472153",
  },

  "ultrasonic-liquid-flow-meter": {
    slug: "ultrasonic-liquid-flow-meter",
    name: "Ultrasonic Liquid Flow Meter",
    category: "Flow Meter",
    brand: "Faure Herman · FH Sonic",
    tagline: "THE ULTRASONIC FLOWMETER FOR CUSTODY TRANSFER",
    heroImage: "/ultrasonic_liquid_flow_meter.png",
    paragraphs: [
      "The FH Sonic is a high-performance liquid volume flowmeter for demanding applications such as custody transfer using the transit time measurement method.",
      "In the standard version, the FH Sonic integrates up to 5 parallel measuring paths arranged asymmetrically in the measuring section to optimize the evaluation of the flow profile for measurement correction, a 6th path being embedded and dedicated to diagnostics purpose.",
      "Adding a second set of 5 paths, symmetrically arranged in the horizontal plane, reinforce the analysis and correction capacity of the flow profile or have a second meter (pay & check) in the same unit.",
    ],
    models: ["FH Sonic", "FH83NEO"],
    detailHref: "#",
  },

  "ultrasonic-gas-flow-meter": {
    slug: "ultrasonic-gas-flow-meter",
    name: "Ultrasonic Gas Flow Meter",
    category: "Flow Meter",
    brand: "Faure Herman · FH83NEO",
    tagline: "FULL-BORE PRECISION GAS FLOW MEASUREMENT",
    heroImage: "/ultrasonic_gas_flow_meter.jpg",
    paragraphs: [
      "The FH83NEO is a full-bore ultrasonic gas flow measuring element without pressure drop — engineered for precision gas flow measurement in demanding oil and gas environments.",
      "Designed for high-performance applications, it delivers reliable and accurate flow velocity measurement across a wide range of gas types and operating conditions, with no moving parts and minimal maintenance requirements.",
    ],
    models: ["FH83NEO"],
    detailHref: "#",
  },

  "helical-turbine-meter": {
    slug: "helical-turbine-meter",
    name: "Helical Turbine Meter",
    category: "Flow Meter",
    brand: "Faure Herman · Heliflu",
    tagline: "THE LEADING METER FOR CUSTODY TRANSFER",
    heroImage: "/helical_turbine_meter.png",
    paragraphs: [
      "The innovative design and extended product range of helical turbine meters address your highest flow metering requirements. Our measurement solutions provide you the greatest flexibility to address flow rate changes with a minimum impact on your facilities and rig piping design.",
      "The Heliflu TZN helical turbine flowmeter is designed for high accuracy liquid measurement from very light LPG products to heavy crude oils. The advanced design and robust construction of the Heliflu TZN helical turbine meter is the perfect choice to secure your revenues while reducing your operational costs across various industries.",
    ],
    models: ["TZN", "TGM", "TLM"],
    detailHref: "#",
  },

  "flare-meter": {
    slug: "flare-meter",
    name: "Flare Meter",
    category: "Flow Meter",
    brand: "SICK",
    heroImage: "/flare_meter.png",
    paragraphs: [
      "Flare stacks are a ubiquitous feature in oil and gas installations, serving as an integral part of the waste gas system and a controlled vent for handling large quantities of combustible gases during upsets. Due to the fluctuating nature of pressure, volume flow, and gas composition in flare stacks, a dependable and precise measurement solution is crucial.",
      "Ultrasonic flow meters prove to be highly suitable for this purpose, offering reliable process control by accurately measuring gas velocities ranging from almost zero flow to velocities exceeding 120 m/s. With this capability, the optimal ratio of O₂ and steam to combustion gas can be ensured, and the actual volume of flared gas can be accurately determined.",
      "Trust in ultrasonic flow meters to achieve efficient and effective flare stack management, providing enhanced safety and environmental compliance.",
    ],
    models: ["FLOWSIC100 Flare-XT", "FLOWSIC100 Flare"],
    detailHref: "#",
  },

  "custody-transfer-gas-flow-meter": {
    slug: "custody-transfer-gas-flow-meter",
    name: "Custody Transfer Gas Flow Meter",
    category: "Flow Meter",
    brand: "SICK",
    tagline: "Exact gas quantity detection – for precise billing",
    heroImage: "/custody_transfer_gas_flow_meter.png",
    paragraphs: [
      "Every day, gas flows in great quantities through pipelines, often changing owners. Exact gas quantity measurement is of the utmost importance here, as even very small measurement errors could result in substantial economic loss.",
      "SICK offers gas flow meters which are absolutely accurate and rugged at the same time — especially for custody transfer, where reliability and precision are non-negotiable.",
    ],
    models: ["FLOWSIC600-XT", "FLOWSIC600", "FLOWSIC500"],
    detailHref: "https://www.sick.com/in/en/flow-measurement-technology/gas-flow-meters/flowsic600-xt/c/g349351",
  },

  "non-custody-transfer-gas-flow-meter": {
    slug: "non-custody-transfer-gas-flow-meter",
    name: "Non-Custody Transfer Gas Flow Meter",
    category: "Flow Meter",
    brand: "SICK",
    tagline: "Reliable flow measurement of gaseous media",
    heroImage: "/non_custody_transfer_gas_flow_meter.jpg",
    paragraphs: [
      "Whether for volume flow measurement, mass flow measurement or flow velocity measurement — the measuring tasks for determining gas flow are very diverse. On top of this, there are often rough ambient conditions in challenging areas such as flare gas measurement, tunnel monitoring or emission monitoring.",
      "The ultrasonic gas flow measuring devices from SICK are up to any challenge. In compliance with valid norms and standards, they reliably measure a wide range of gases and are specifically aligned to the special requirements of the respective industry.",
    ],
    models: [
      "FLOWSIC300 · FTMg",
      "FLOWSIC30 · FLOWSIC600 DRU",
      "FLOWSIC550",
    ],
  },

  "clamp-on-meter": {
    slug: "clamp-on-meter",
    name: "Clamp ON Meter",
    category: "Flow Meter",
    brand: "Ultraflux · Minisonic P",
    heroImage: "/clamp_on_meter.png",
    paragraphs: [
      'Ultraflux reinvents the Minisonic P portable ultrasonic flowmeter on the principle of “transit time”. This field device allows the measurement of the flow of water of variable qualities, of various petroleum products or of fluids coming from the processes of the food & beverage or chemical industry.',
      "Thanks to a specific and efficient signal processing, this portable flowmeter offers high performance measurement capabilities, adapting to the conditions of each site.",
    ],
    models: [
      "Portable flow meters",
      "Flowmeters for liquids – full pipes",
      "Flowmeters – free surface flows",
      "Flowmeters – gas application",
      "Flowmeters – ATEX certified",
      "Scraper and pig detectors",
      "Interface detectors",
      "External probes",
      "Intrusive probes",
      "Wetted probes",
      "ATEX certified probes",
    ],
    detailHref: "#",
  },

  "master-meter": {
    slug: "master-meter",
    name: "Master Meter",
    category: "Flow Metering",
    brand: "Faure Herman",
    intro: "Discover the Ultimate Compact Solution with Faure Herman Master Meter!",
    heroImage: "/master_meter.jpg",
    paragraphs: [
      "Experience the convenience of a complete flow measurement solution with Faure Herman Master Meter. Our innovative offering combines a flow conditioner, upstream and downstream spools, and the Master Meter itself, providing a compact and efficient alternative to larger provers.",
    ],
    models: ["TZN"],
  },

  "flow-computer": {
    slug: "flow-computer",
    name: "Flow Computer",
    category: "Flow Computer",
    brand: "OMNI · SICK",
    intro:
      '"Turn to OMNI – the most recognized and trusted brand of custody flow computers for oil and gas measurement."',
    heroImage: "/flow_computer.png",
    paragraphs: [],
    subBlocks: [
      {
        id: "omni",
        heading: "4000/7000 SERIES OMNI Flow Computer",
        tagline:
          "Reducing Uncertainty and Increasing Reliability for Fiscal and Custody Transfer Flow Metering",
        paragraphs: [
          "When transferring high value oil and gas, you want the lowest levels of uncertainty and increased reliability to ensure revenue streams for all involved parties are not impaired. Even minuscule errors can translate into a huge financial impact over time. You need a flow computer that can capture large amounts of data from gas chromatographs, meters, prover, density measurement instruments, sampler systems, flow, temperature and pressure measurement systems, and other third-party equipment in real-time, using the latest security protocols, and operating in compliance to all global compliance and standards organizations, to calculate the precise flow rate. With the Series 4000/7000 flow computer, OMNI delivers a highly secure, powerful, and flexible solution for flow measurement.",
        ],
        subHeading: "Verifiable factory programming and traceable field configurability",
        subParagraphs: [
          "The OMNI Series 4000/7000 flow computer delivers reliable, and fully traceable measurement of gas and liquid applications. As the most secure flow computer available, the 4000/7000 is ideal for custody transfer and fiscal measurement applications.",
          "The Series 4000/7000, just like every OMNI built in the last 25+ years, is factory-programmed and user-configurable. OMNI provides secure factory programming, testing, and verification, so only field configuration is required to install, operate, and maintain the OMNI 4000/7000.",
          "With full traceability from factory to operation, the OMNI 4000/7000 is the only flow computer to have received WELMEC WG7.2, issue 6, extension D approval. This means that if a discrepancy occurs, it can be traced back to the exact moment a change was made. This, combined with the large storage capacity of the Series 4000/7000, makes reconciliation much easier.",
          "The new OMNI Series 4000/7000 flow computer combines decades of metering experience, verifiable factory programming, and traceable field configurability to ensure that it is the only choice when a reliable, secure, and fully traceable flow computer is needed.",
        ],
        bulletSections: [
          {
            heading: "Benefits",
            items: [
              "Enhanced functionality with a simplified user interface and powerful software",
              "Powerful, robust, embedded, real-time operating system",
              "Fast access to critical data when you have remote connections like PLCs, DCSs, or SCADA systems",
              "365+ days of batch storage",
              "Searchable database",
              "Enhanced security for protection against cyber intrusions",
              "Individual user IDs and passwords for enhanced security",
            ],
          },
        ],
        image: "/omni_flow_computer.png",
        imageAlt: "OMNI 4000/7000 Series Flow Computer",
        detailHref: "https://omniflow.com/",
      },
      {
        id: "flow-x",
        heading: "Flow-X",
        tagline: "The ideal flow computer for gas metering with SICK ultrasonic gas meters",
        paragraphs: [
          "The Flow-X flow computer provides gas volume conversion, event logging, parameter logging, and reports using state-of-the-art technology. Identical modules are combined in different housings, offering a multi-stream version Flow-X/P for 1 – 4 measuring distances with a local touch screen, or the version Flow-X/S for smaller installations with one measuring distance.",
          "Each module combines high-precision measurement technology, fast digital signal processing, abundant processing power, versatile data communication, and high storage capacity in a fully equipped flow computer. The Flow-X flow computer meets the requirements of even the most demanding applications and is the ideal partner for custody transfer gas metering solutions in installations with FLOWSIC600 ultrasonic gas flow meters.",
        ],
        bulletSections: [
          {
            heading: "At a Glance",
            items: [
              "MID approved configuration for gas metering streams with FLOWSIC600",
              "Powerful modules for demanding applications",
              "Each module features CPU, memory and equal in/outputs",
              "Compelling 7″ graphic display with touch operation",
              "Intuitive user interface for graphics display and web browser",
              "True remote access via Ethernet",
              "Station computer for multiple streams",
            ],
          },
          {
            heading: "Your Benefits",
            items: [
              "Reduced planning and installation costs through standard configurations",
              "Very accurate volume conversion with multiple calculation cycles per second",
              "High reliability through independent modules with their own volume conversion and storage of measured values, counter readings and events",
              "Easy extension of installations with modules featuring equal in/outputs and 100% software configuration",
              "Very simple operation through intuitive user interface featuring identical menus and displays on the device and in the control room",
              "Reduced service and maintenance costs with tamper-proof remote maintenance",
              "Cost-efficient and flexible system integration of multiple streams",
            ],
          },
          {
            heading: "Fields of Application",
            items: [
              "Custody gas metering with FLOWSIC600 gas meters",
              "Demanding natural gas and process gas applications",
              "Totals at base conditions for gas volume, mass and energy",
              "For natural gas, special gases and steam",
              "Gas metering with advanced diagnostics with FLOWSIC600 2plex",
              "Redundant gas metering with FLOWSIC600 Quatro",
            ],
          },
        ],
        image: "/flow_x.png",
        imageAlt: "SICK Flow-X Flow Computer",
        detailHref: "#",
        downloadHref: "https://texastechserv.com/wp-content/uploads/2023/09/product_information_flow_x_flow_computers_en_im0056611.pdf",
      },
    ],
    models: ["OMNI 7000", "OMNI 6000", "OMNI 4000", "FLOW-X"],
    detailHrefs: ["https://omniflow.com/", "https://omniflow.com/4000-7000-flow-computers"],
  },

  "gas-analyzers": {
    slug: "gas-analyzers",
    name: "Gas Analyzers",
    category: "Gas Analyzer",
    brand: "SICK",
    heroImage: "/gas_analyzer.png",
    paragraphs: [
      "SICK provides a diverse selection of gas analyzers, utilizing powerful measurement principles. These analyzers encompass both in-situ and extractive measurement technologies, making them suitable for equipping entire facilities.",
      "Thanks to this versatility, SICK can offer solutions tailored to various systems and tackle complex measurement tasks effectively.",
    ],
    models: [
      "GM32",
      "GM35",
      "GM700",
      "ZIRKOR100",
      "GM901",
      "ZIRKOR200",
      "ZIRKOR302",
    ],
    detailHref: "https://www.sick.com/ae/en/gas-analyzers/in-situ-gas-analyzers/gm32/c/g75251",
    downloadHref: "https://cdn.sick.com/media/docs/5/95/195/product_information_gm32_en_im0030195.pdf",
  },

  "extractive-gas-analyzers": {
    slug: "extractive-gas-analyzers",
    name: "Extractive Gas Analyzers",
    category: "Gas Analyzer",
    brand: "SICK",
    tagline: "Reliable gas analysis — even under harsh process conditions",
    heroImage: "/extractive_gas_analyzer.jpg",
    paragraphs: [
      "Extractive gas analyzers from SICK can be used in a large number of applications. The extractive measurement technology extracts a partial gas flow from the gas duct, conditions the extracted gas and feeds it to an analyzer module under constant conditions.",
      "All the measurement technology that SICK offers — from gas sampling and conditioning right through to the numerous analyzer modules — is specifically tailored to the measuring task concerned.",
    ],
    models: [
      "SIDOR",
      "S700",
      "MERCEM300Z",
      "GMS800",
      "GMS800 FIDOR",
      "MCS300P",
    ],
    detailHref: "#",
  },

  "dust-analyzer": {
    slug: "dust-analyzer",
    name: "Dust Analyzer",
    category: "Gas Analyzer",
    brand: "SICK",
    heroImage: "/dust_analyzer.png",
    paragraphs: [
      "SICK is setting new standards in dust measurement with its rugged and low-maintenance measuring devices for detecting and monitoring dust concentrations. All dust measuring devices are easy to integrate into existing applications — and offer straightforward installation and commissioning along with user-friendly operation.",
    ],
    models: [
      "DUSTHUNTER T100",
      "DUSTHUNTER T200",
      "DUSTHUNTER SP30",
      "DUSTHUNTER SP100",
      "FWE200DH",
    ],
    detailHref: "#",
  },
};

export function getProduct(slug: string): ProductData | undefined {
  return PRODUCTS[slug];
}

export function getAllProductSlugs(): string[] {
  return Object.keys(PRODUCTS);
}
