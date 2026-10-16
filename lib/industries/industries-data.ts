export interface IndustryProductItem {
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

export const INDUSTRIES_DATA: Record<string, IndustryDetailData> = {
  "cement": {
    "slug": "cement",
    "name": "Cement",
    "metaTitle": "Cement Industry Solutions",
    "metaDesc": "Texas Technical Services delivers CEMS, gas analyzers, and extractive gas analyzers for the cement industry — optimising emissions monitoring, quality control, and operational excellence.",
    "keywords": [
      "cement industry CEMS",
      "cement gas analyzers Kuwait",
      "cement emissions monitoring",
      "extractive gas analyzer cement",
      "industrial automation cement manufacturing",
      "cement plant instrumentation GCC",
      "kiln process control Kuwait",
      "cement production automation Dubai",
      "raw mill emissions monitoring",
      "cement plant safety systems GCC"
    ],
    "heroImage": "/cement_industry.jpg",
    "heroDesc": "Advanced OEM analyzer and CEMS solutions for cement manufacturing — optimising emissions monitoring, quality control, and operational excellence from raw mill to kiln and clinker cooler.",
    "tags": [
      "Emissions Monitoring",
      "Kiln Control",
      "Quality Control",
      "CEMS",
      "BAT Compliance"
    ],
    "stats": [
      {
        "num": "3",
        "label": "Products"
      },
      {
        "num": "1+",
        "label": "OEM Brand"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Kiln Control",
      "BAT Compliance",
      "Emissions Monitoring"
    ],
    "challenges": [
      {
        "title": "Severe Abrasive Dust & Particulate Concentration",
        "challenge": "Heavy particulate loads in rotary kiln exhausts blind standard optical sensors within hours.",
        "solution": "SICK DUSTHUNTER transmission analyzers with high-volume purge air blowers and automatic contamination compensation."
      },
      {
        "title": "Rotary Kiln High-Temperature Gas Analysis",
        "challenge": "Combustion gas sampling at kiln inlets reaching 1400°C with severe clinker buildup.",
        "solution": "Water-cooled sampling probes with automatic mechanical blowback cleaning and heated sample transport lines."
      },
      {
        "title": "Raw Mill & Baghouse Filter Failure Detection",
        "challenge": "Filter bag ruptures cause massive dust emissions and regulatory shutdown fines.",
        "solution": "Sensitive scattered-light particulate monitors detecting bag leaks instantly prior to catastrophic failure."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions tailored for cement kiln and clinker cooler stack emissions — continuously measuring NOₓ, SO₂, CO, HCl, HF, NH₃, dust, and O₂ to ensure compliance with environmental permit limits and IED/BAT requirements."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "SICK gas analyzers using powerful in-situ and extractive measurement principles for cement process optimisation — monitoring kiln atmosphere, combustion gases, and preheater exit conditions to maximise fuel efficiency and clinker quality."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Reliable continuous extractive gas analysis for cement kiln stacks and raw mill exhausts under the harshest dust-laden, high-temperature conditions — conditioning the sample for precise, repeatable pollutant measurement independent of process upsets."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "lng": {
    "slug": "lng",
    "name": "LNG",
    "metaTitle": "LNG Industry Solutions",
    "metaDesc": "Texas Technical Services delivers precision flow metering, CEMS, analyzers, and industrial automation solutions for LNG plant operations — ensuring accurate measurement, efficiency, and safety.",
    "keywords": [
      "LNG flow metering Kuwait",
      "LNG custody transfer solutions",
      "LNG CEMS monitoring",
      "LNG gas analyzers",
      "industrial automation LNG plants",
      "LNG terminal instrumentation GCC",
      "liquefied natural gas metering Dubai",
      "LNG plant safety systems Kuwait",
      "cryogenic flow measurement GCC",
      "LNG regasification automation"
    ],
    "heroImage": "/lng.jpg",
    "heroDesc": "Cutting-edge flow metering, analyzers, and process automation solutions for LNG plant operations — ensuring precise measurement, efficiency, and safety across liquefaction, storage, and regasification processes.",
    "tags": [
      "Custody Transfer",
      "Liquefaction",
      "Regasification",
      "BOG Metering",
      "CEMS"
    ],
    "stats": [
      {
        "num": "11",
        "label": "Products"
      },
      {
        "num": "5+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Cryogenic Metering",
      "BOG Measurement",
      "Safety Systems"
    ],
    "challenges": [
      {
        "title": "Cryogenic Temperatures (-162°C) Thermal Shock",
        "challenge": "Extreme cold causes sensor drift, mechanical shrinkage, and seal failure during tanker loading and unloading.",
        "solution": "Cryogenically validated ultrasonic liquid meters with thermal isolation spools and redundant piezoelectric crystals."
      },
      {
        "title": "Boil-Off Gas (BOG) Compression & Balance",
        "challenge": "Vaporization during storage and transfer must be precisely quantified to reconcile energy content and billing.",
        "solution": "High-accuracy ultrasonic gas meters with integrated gas chromatography and heating value calculation."
      },
      {
        "title": "High-Volume Ship-to-Shore Loading Rates",
        "challenge": "Rapid tanker turnaround necessitates handling massive flow rates without calibration drift or cavitation.",
        "solution": "Large-diameter multi-run metering skids with automated proving loops and SIL-rated emergency shutdown interface."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions for LNG facility emissions monitoring — measuring combustion gases, BOG (boil-off gas) venting, and process emissions to meet stringent environmental regulations at LNG terminals and plants."
      },
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID turnkey gas metering packages for LNG send-out and custody transfer — factory-assembled and tested skids that withstand the cryogenic and high-pressure conditions unique to LNG operations."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "High-accuracy multi-path ultrasonic flowmeter for LNG custody transfer — engineered for cryogenic liquid service at temperatures as low as -162 °C, delivering the precision required at ship loading and unloading terminals."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Full-bore ultrasonic gas measurement for LNG send-out, regasification, and distribution — no pressure drop, no moving parts, and proven accuracy for natural gas and BOG streams at LNG facilities."
      },
      {
        "category": "Flow Meter",
        "name": "Flare Meter",
        "slug": "flare-meter",
        "image": "/flare_meter.png",
        "brand": "SICK",
        "desc": "Ultrasonic flare measurement for LNG plant safety and environmental reporting — handling the highly variable flow rates and gas compositions in LNG flare headers from near-zero to over 120 m/s."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Fiscal-grade gas flow measurement for LNG send-out and regas custody points — where billing accuracy is critical and the economic stakes of even small measurement errors are substantial."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Reliable gas flow measurement for internal LNG plant use — monitoring fuel gas, BOG recycle, and utility streams to optimise plant performance and support energy balance calculations."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Portable non-invasive flowmeter for LNG facility maintenance checks and commissioning verification — measure pipeline flows without process interruption across gas, liquid, and cryogenic service lines."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "OMNI flow computers for LNG custody and allocation metering — supporting ISO 6976 calorific value calculations and AGA standards to accurately determine energy content for billing in LNG trade."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "In-situ and extractive gas analyzers for LNG plant process control — monitoring natural gas composition, BOG quality, and combustion efficiency to optimise liquefaction and regasification processes."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Continuous extractive gas analysis for LNG terminal stacks and process streams — reliable measurement under the demanding pressure and temperature conditions found in liquefaction and regasification trains."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "metal-steel": {
    "slug": "metal-steel",
    "name": "Metal & Steel",
    "metaTitle": "Metal & Steel Industry Solutions",
    "metaDesc": "Texas Technical Services delivers CEMS, dust analyzers, gas analyzers, and extractive gas analyzers for the metal and steel industry — enhancing efficiency, quality control, and emissions monitoring.",
    "keywords": [
      "metal and steel CEMS solutions",
      "metal industry dust analyzers",
      "steel plant gas analyzers Kuwait",
      "emissions monitoring metal production",
      "industrial automation steel manufacturing",
      "steel mill instrumentation GCC",
      "furnace process control Kuwait",
      "metal fabrication automation Dubai",
      "rolling mill control systems",
      "foundry emissions monitoring GCC"
    ],
    "heroImage": "/metal_and_steel.jpg",
    "heroDesc": "Cutting-edge OEM solutions engineered for the metal and steel industry — delivering CEMS, dust monitoring, and gas analysis to enhance efficiency, quality control, and emissions compliance across the production chain.",
    "tags": [
      "Emissions Monitoring",
      "Dust Control",
      "Process Gases",
      "CEMS",
      "Quality Control"
    ],
    "stats": [
      {
        "num": "4",
        "label": "Products"
      },
      {
        "num": "1+",
        "label": "OEM Brand"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Dust Control",
      "Process Gas Analysis",
      "Quality Assurance"
    ],
    "challenges": [
      {
        "title": "Blast Furnace & Converter Off-Gas Monitoring",
        "challenge": "Dirty CO, CO2, and H2 gases laden with metallurgical dust and moisture.",
        "solution": "Heavy-duty extractive gas analysis systems with multi-stage conditioning and filtration."
      },
      {
        "title": "Rolling Mill Lubrication & Hydraulic Flow Control",
        "challenge": "High hydraulic pressures and shock loading in continuous casting and hot rolling operations.",
        "solution": "Positive displacement and turbine meters with high shock tolerance and digital pulse outputs."
      },
      {
        "title": "Stack Opacity & Emission Compliance",
        "challenge": "Fume collection systems from electric arc furnaces (EAF) require continuous compliance monitoring.",
        "solution": "Cross-duct opacity and continuous particulate analyzers meeting international environmental regulations."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions for continuous emissions monitoring at blast furnaces, electric arc furnaces, and sinter plants — measuring CO, NOₓ, SO₂, HCl, dust, and O₂ to meet stringent environmental regulations and IED permit conditions."
      },
      {
        "category": "Dust Analyzer",
        "name": "Dust Analyzer",
        "slug": "dust-analyzer",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "SICK sets new standards in dust measurement with rugged, low-maintenance devices for metal and steel facilities — detecting and monitoring dust concentrations at furnace exhausts, dedusting systems, and material handling points with minimal maintenance burden."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "In-situ and extractive gas analyzers for metal and steel process control — monitoring blast furnace top gas, coke oven gas, and converter off-gas composition to optimise combustion, energy recovery, and product quality."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Reliable extractive gas analysis for metal and steel stacks and process ducts under extreme dust, temperature, and corrosion conditions — conditioning and analysing samples with consistent accuracy for regulatory reporting and process optimisation."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "oil-gas": {
    "slug": "oil-gas",
    "name": "Oil & Gas",
    "metaTitle": "Oil & Gas Industry Solutions",
    "metaDesc": "Texas Technical Services delivers precision flow metering, CEMS, analyzers, and industrial automation solutions for the oil & gas industry — upstream, midstream, and downstream.",
    "keywords": [
      "oil and gas flow metering Kuwait",
      "upstream flow measurement solutions",
      "midstream metering systems GCC",
      "downstream automation Kuwait",
      "CEMS oil and gas Kuwait",
      "gas analyzers for oil and gas",
      "industrial automation oil and gas Kuwait",
      "flow computers for oil and gas",
      "custody transfer metering oil and gas",
      "oil and gas instrumentation Kuwait",
      "production optimization oil gas GCC",
      "oil and gas support services Kuwait",
      "innovative solutions oil gas",
      "Coriolis meter oil and gas"
    ],
    "heroImage": "/oil_and_gas.jpg",
    "heroDesc": "Comprehensive OEM solutions tailored to the unique needs of the oil and gas industries — from advanced flow metering and precision analyzers to industrial automation for upstream, midstream, and downstream operations.",
    "tags": [
      "Upstream",
      "Midstream",
      "Downstream",
      "Custody Transfer",
      "CEMS"
    ],
    "stats": [
      {
        "num": "13",
        "label": "Products"
      },
      {
        "num": "5+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Custody Transfer Metering",
      "CEMS Compliance",
      "Upstream-to-Downstream"
    ],
    "challenges": [
      {
        "title": "Fiscal Custody Transfer Billing Uncertainty",
        "challenge": "High financial risk from unmetered temperature or pressure fluctuations across long-distance crude and natural gas export pipelines.",
        "solution": "Multi-path ultrasonic meters and dual-redundant OMNI flow computers achieving 0.1% fiscal precision adhering to API MPMS standards."
      },
      {
        "title": "Sour Gas (H2S) Corrosion & Extreme Pressures",
        "challenge": "Corrosive wet gas and high pipeline pressure causing premature transducer failure and hazardous gas leakage.",
        "solution": "NACE MR0175 compliant wetted alloys, non-intrusive clamp-on meters, and high-frequency in-situ ultrasonic inspection routines."
      },
      {
        "title": "Flare Stack Emission Compliance (Kuwait EPA)",
        "challenge": "Wide velocity fluctuations from emergency flaring down to purge rates, making environmental tracking erratic.",
        "solution": "Ultrasonic flare gas meters measuring velocities from 0.03 m/s to 120 m/s paired with continuous extractive CEMS."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions are tailored for emission measurement in power plants, industrial facilities, and ships — measuring pollutants and reference quantities in compliance with national and international regulations."
      },
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID flow metering systems are the full gas flow metering system offering from SICK — a reliable turnkey solution for fiscal metering of natural gas and process gases."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "High-performance liquid volume flowmeter for custody transfer using the transit time measurement method. Integrates up to 5 parallel measuring paths for optimal flow profile evaluation."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Ultrasonic flowmeter for full bore measuring element without pressure drop — engineered for precision gas flow measurement in demanding oil and gas environments."
      },
      {
        "category": "Flow Meter",
        "name": "Helical Turbine Meter",
        "slug": "helical-turbine-meter",
        "image": "/helical_turbine_meter.png",
        "brand": "Heliflu TZN",
        "desc": "The leading meter for custody transfer. Designed for high accuracy liquid measurement from very light LPG products to heavy crude oils — securing your revenues while reducing operational costs."
      },
      {
        "category": "Flow Meter",
        "name": "Flare Meter",
        "slug": "flare-meter",
        "image": "/flare_meter.png",
        "brand": "SICK",
        "desc": "Ultrasonic flow meters for flare stack management, accurately measuring gas velocities from near-zero to over 120 m/s — ensuring optimal combustion control and environmental compliance."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Exact gas quantity detection for precise billing. SICK gas flow meters are absolutely accurate and rugged — built specifically for custody transfer where even small errors cause substantial loss."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Reliable measurement of gaseous media for volume flow, mass flow, or flow velocity — even in challenging environments like flare gas measurement, tunnel monitoring, and emission monitoring."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Portable ultrasonic flowmeter on the transit time principle — measuring water, petroleum products, and chemical industry fluids with high performance signal processing adapted to each site."
      },
      {
        "category": "Flow Metering",
        "name": "Master Meter",
        "slug": "master-meter",
        "image": "/master_meter.jpg",
        "brand": "Faure Herman",
        "desc": "A complete flow measurement solution combining a flow conditioner, upstream and downstream spools, and the Master Meter — a compact, efficient alternative to larger provers."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "The most recognized and trusted brand of custody flow computers for oil and gas measurement — reducing uncertainty and ensuring precise, compliant fiscal measurement."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "A diverse selection of gas analyzers using powerful in-situ and extractive measurement principles — versatile enough to equip entire facilities and tackle complex measurement tasks."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Reliable gas analysis under harsh process conditions — extracting a partial gas flow, conditioning it, and feeding it to an analyzer module under constant, controlled conditions."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "petrochemicals": {
    "slug": "petrochemicals",
    "name": "Petrochemicals",
    "metaTitle": "Petrochemicals Industry Solutions",
    "metaDesc": "Texas Technical Services delivers state-of-the-art flow metering, CEMS, analyzers, and industrial automation solutions for the petrochemical industry.",
    "keywords": [
      "petrochemical flow metering Kuwait",
      "petrochemical CEMS solutions",
      "petrochemical gas analyzers",
      "industrial automation petrochemicals",
      "flow computer petrochemical industry",
      "petrochemical plant instrumentation GCC",
      "process automation petrochemical Dubai",
      "reactor process control Kuwait",
      "petrochemical safety systems GCC",
      "ethylene plant flow measurement"
    ],
    "heroImage": "/petrochemical.webp",
    "heroDesc": "State-of-the-art flow metering, gas analyzers, and process automation solutions for the petrochemical industry — from feedstock measurement to product custody transfer and continuous emissions monitoring.",
    "tags": [
      "Process Automation",
      "Flow Solutions",
      "CEMS",
      "Quality Control",
      "Custody Transfer"
    ],
    "stats": [
      {
        "num": "13",
        "label": "Products"
      },
      {
        "num": "5+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Process Automation",
      "CEMS Compliance",
      "Flow Solutions"
    ],
    "challenges": [
      {
        "title": "Reactive & Aggressive Chemical Processing",
        "challenge": "Polymerization, aggressive acids, and high catalyst activity threatening measuring element integrity.",
        "solution": "Full-bore ultrasonic meters without internal moving parts or flow restrictions, preventing clogging and pressure drops."
      },
      {
        "title": "Precision Batch Dosing & Ratio Control",
        "challenge": "Slight chemical deviation during compounding or reactor feed degrades batch quality and causes costly rejections.",
        "solution": "High-speed digital flow metering skids and PLC control loops ensuring micro-second valve response."
      },
      {
        "title": "Volatile Organic Compounds (VOC) Monitoring",
        "challenge": "Fugitive emission detection and hazardous area certification (ATEX / IECEx Zone 1) requirements.",
        "solution": "Explosion-proof optical and photometric gas analyzers continuously monitoring perimeter and process vent streams."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions for continuous emissions monitoring in petrochemical facilities — measuring NOₓ, SO₂, CO, VOCs, and particulates at stacks and process vents to maintain environmental permit compliance."
      },
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID turnkey metering packages for petrochemical feedstock and product gas streams — factory-assembled and tested, minimising site installation time and ensuring measurement accuracy from day one."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "Multi-path transit-time liquid flow meter for custody transfer of petrochemical products — handling aromatics, olefins, and other chemical liquids with high accuracy across wide viscosity ranges."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Full-bore ultrasonic measurement of petrochemical process gas streams — ethylene, propylene, natural gas liquids, and synthesis gas — with zero pressure drop and no moving parts to maintain."
      },
      {
        "category": "Flow Meter",
        "name": "Helical Turbine Meter",
        "slug": "helical-turbine-meter",
        "image": "/helical_turbine_meter.png",
        "brand": "Heliflu TZN",
        "desc": "The industry's leading custody transfer meter for liquid petrochemical products — from light LPG to heavy aromatics. Robust construction handles the wide product range and varying flow rates in petrochemical plants."
      },
      {
        "category": "Flow Meter",
        "name": "Flare Meter",
        "slug": "flare-meter",
        "image": "/flare_meter.png",
        "brand": "SICK",
        "desc": "Ultrasonic flare measurement for petrochemical plant relief and disposal systems — accurately quantifying combustible gas from near-zero to over 120 m/s to support environmental reporting and process safety."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Fiscal-grade gas measurement at petrochemical plant battery limits and transfer points — delivering the precision required where feedstock and product ownership changes hands and billing accuracy is paramount."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Process gas flow measurement for internal petrochemical plant use — monitoring fuel gas, utility streams, and intermediate process flows to optimise unit performance and energy consumption."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Non-invasive portable flowmeter for petrochemical plant surveys and commissioning verification — clamp onto existing pipework without shutdown to measure chemicals, solvents, and process fluids on demand."
      },
      {
        "category": "Flow Metering",
        "name": "Master Meter",
        "slug": "master-meter",
        "image": "/master_meter.jpg",
        "brand": "Faure Herman",
        "desc": "Compact, self-contained master meter package for petrochemical product proving and verification — combining conditioner, spools, and meter in one unit for efficient calibration of field meters."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "OMNI flow computers for petrochemical custody and allocation metering — supporting complex multi-stream configurations with built-in AGA, API, GPA, and ISO calculation standards for all product types."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "In-situ and extractive gas analyzers for petrochemical process streams — measuring product quality, catalyst performance, and emission parameters to optimise yield and ensure regulatory compliance."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Continuous extractive gas analysis for petrochemical stacks and reactors under aggressive conditions — conditioning the sample for precise, repeatable analysis independent of process pressure and temperature swings."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "power-plant": {
    "slug": "power-plant",
    "name": "Power Plant",
    "metaTitle": "Power Plant Industry Solutions",
    "metaDesc": "Texas Technical Services delivers CEMS, flow meters, flow computers, analyzers, and industrial process automation systems for power plants — optimising performance, emissions monitoring, and operational efficiency.",
    "keywords": [
      "power plant CEMS solutions",
      "power plant flow meters",
      "power plant industrial automation",
      "emissions monitoring power generation",
      "flow computer power plant Kuwait",
      "power plant instrumentation Kuwait",
      "power generation automation GCC",
      "boiler combustion monitoring Dubai",
      "turbine control systems Kuwait",
      "thermal power plant solutions GCC"
    ],
    "heroImage": "/power_plant.jpg",
    "heroDesc": "Comprehensive OEM solutions for power generation — CEMS, flow meters, flow computers, analyzers, and industrial process automation systems that optimise performance, emissions monitoring, and operational efficiency.",
    "tags": [
      "Generation",
      "Emissions Monitoring",
      "Fuel Metering",
      "CEMS",
      "Grid"
    ],
    "stats": [
      {
        "num": "11",
        "label": "Products"
      },
      {
        "num": "5+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Fuel Metering",
      "EPA Compliance",
      "Grid Integration"
    ],
    "challenges": [
      {
        "title": "High-Pressure Superheated Steam Measurement",
        "challenge": "Extreme thermal stress and pressure cycling in thermal turbines degrade mechanical flow meters rapidly.",
        "solution": "Differential pressure systems and ruggedized ultrasonic meters designed for high enthalpy steam."
      },
      {
        "title": "EPA / CEMS Multi-Pollutant Tracking",
        "challenge": "Continuous tracking of CO, CO2, SO2, NOx, and opacity across gas turbine exhaust and steam boiler stacks.",
        "solution": "Turnkey SICK CEMS shelters equipped with automatic zero/span gas calibration and regulatory data acquisition systems."
      },
      {
        "title": "Turbine Fuel Gas Supply Regulation",
        "challenge": "Fluctuations in pipeline fuel gas temperature and Wobbe index lead to combustion instability and turbine trips.",
        "solution": "Compact ultrasonic fuel gas meters paired with rapid-response process gas chromatographs."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions for continuous stack emissions monitoring at power plants — measuring NOₓ, SO₂, CO, CO₂, and particulates to demonstrate regulatory compliance and optimise combustion efficiency across all generation types."
      },
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID turnkey gas metering packages for power plant fuel gas supply — factory-assembled and tested, providing accurate fiscal measurement of natural gas and other fuel streams at the plant gate."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "Multi-path transit-time liquid flowmeter for power plant cooling water, condensate, and liquid fuel measurement — delivering reliable accuracy in high-temperature and high-flow applications across the generation cycle."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Full-bore ultrasonic gas measurement for power plant fuel gas, steam, and process gas streams — no pressure drop, no moving parts, and robust accuracy for demanding turbine and boiler fuel monitoring applications."
      },
      {
        "category": "Flow Meter",
        "name": "Flare Meter",
        "slug": "flare-meter",
        "image": "/flare_meter.png",
        "brand": "SICK",
        "desc": "Ultrasonic flare measurement for power plant safety relief and venting systems — handling wide flow rate swings from near-zero to over 120 m/s to support accurate environmental reporting and safety management."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Fiscal-grade gas measurement at power plant battery limits — providing the billing accuracy required where fuel ownership changes hands and where small measurement errors directly impact generation operating costs."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Reliable internal gas flow measurement for power plant fuel distribution, burner management, and utility monitoring — covering volume, mass flow, and velocity across diverse gas types and operating conditions."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Non-invasive portable flowmeter for power plant maintenance surveys and commissioning — clamp onto cooling water lines, fuel pipes, or process lines without shutdown for instant, accurate flow readings."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "OMNI flow computers for power plant fuel gas fiscal and allocation metering — multi-stream capable with built-in AGA and ISO calculation standards, reducing billing uncertainty and supporting heat rate analysis."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "In-situ and extractive gas analyzers for power plant combustion control and emissions measurement — monitoring O₂, CO, NOₓ, and SO₂ to maximise boiler and turbine efficiency while minimising environmental impact."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Continuous extractive stack gas analysis for power plants — conditioning the flue gas sample for precise, repeatable measurement of pollutants and combustion parameters regardless of stack pressure or temperature."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "refinery": {
    "slug": "refinery",
    "name": "Refinery",
    "metaTitle": "Refinery Industry Solutions",
    "metaDesc": "Texas Technical Services provides cutting-edge flow metering, CEMS, analyzers, and industrial automation solutions tailored for the demanding world of refinery operations.",
    "keywords": [
      "refinery flow metering Kuwait",
      "refinery CEMS solutions",
      "refinery gas analyzers",
      "industrial automation refinery",
      "flow meter calibration refinery",
      "emissions monitoring refinery GCC"
    ],
    "heroImage": "/refinery.webp",
    "heroDesc": "Cutting-edge flow metering, CEMS, and industrial automation solutions for the demanding world of refinery operations — ensuring process control, emissions compliance, and precise custody transfer across the full product slate.",
    "tags": [
      "Process Control",
      "Emissions Monitoring",
      "Custody Transfer",
      "CEMS",
      "Fiscal Metering"
    ],
    "stats": [
      {
        "num": "13",
        "label": "Products"
      },
      {
        "num": "5+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Fiscal Metering",
      "Emissions Monitoring",
      "Process Control"
    ],
    "challenges": [
      {
        "title": "Harsh Fluid Measurement Across Varied Viscosities",
        "challenge": "Processing extremes from high-viscosity vacuum residues and asphalt to volatile light naphtha and LPG.",
        "solution": "Heliflu TZN helical turbine meters with tungsten carbide bearings and broad Reynolds-number linearity."
      },
      {
        "title": "Fired Heater & Boiler Emission Limits",
        "challenge": "Strict regional limits on NOx, SO2, and particulate discharge from continuous refinery refining units.",
        "solution": "SICK extractive CEMS packages engineered for high ambient temperatures and aggressive flue gases."
      },
      {
        "title": "Refinery Battery Limit Balancing",
        "challenge": "Mass balance reconciliation discrepancies across complex distillation, cracking, and blending units.",
        "solution": "Plant-wide digital bus integration connecting flow computers directly to supervisory DCS and SCADA networks."
      }
    ],
    "products": [
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions designed for refinery emission measurement — accurately monitoring stack emissions, flue gas, and process vents to ensure compliance with environmental regulations and permit requirements."
      },
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID turnkey gas flow metering systems for refinery fiscal measurement — pre-engineered, factory-tested packages covering the full gas flow metering system from inlet to data output."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "High-performance custody transfer flowmeter for refined liquid products — crude oil, distillates, and intermediate streams — using multi-path transit time technology for maximum accuracy at battery limits."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Full-bore ultrasonic gas flow measurement without pressure drop — ideal for refinery fuel gas, hydrogen, and process gas streams where pressure loss impacts process efficiency."
      },
      {
        "category": "Flow Meter",
        "name": "Helical Turbine Meter",
        "slug": "helical-turbine-meter",
        "image": "/helical_turbine_meter.png",
        "brand": "Heliflu TZN",
        "desc": "The leading custody transfer meter for refined petroleum products — from light LPG to heavy fuel oils. The Heliflu TZN's advanced design handles viscosity variations across the full refinery product slate."
      },
      {
        "category": "Flow Meter",
        "name": "Flare Meter",
        "slug": "flare-meter",
        "image": "/flare_meter.png",
        "brand": "SICK",
        "desc": "Ultrasonic flare measurement for refinery flare headers and individual unit flares — measuring from near-zero to over 120 m/s, enabling accurate flare gas accounting and minimising uncontrolled emissions."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Accurate custody transfer gas measurement at refinery battery limits and product transfer points — where billing accuracy is critical and even small measurement errors result in significant financial loss."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Reliable measurement of refinery fuel gas, hydrogen, and process gas streams for volume flow, mass flow, or flow velocity — built to handle the harsh ambient conditions and wide range of gas compositions found in refinery operations."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Non-intrusive portable flowmeter for refinery maintenance and verification — clamp onto any pipe without process interruption to measure hydrocarbons, water, and process fluids across the unit."
      },
      {
        "category": "Flow Metering",
        "name": "Master Meter",
        "slug": "master-meter",
        "image": "/master_meter.jpg",
        "brand": "Faure Herman",
        "desc": "Compact master meter solution combining flow conditioner, upstream and downstream spools in a single package — a space-efficient alternative to conventional provers for refinery product verification."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "The OMNI Flow Computer — the industry-standard for refinery custody measurement. Handles multi-stream, multi-product configurations with built-in AGA, API, and ISO calculation standards."
      },
      {
        "category": "Gas Analyzer",
        "name": "Gas Analyzers",
        "slug": "gas-analyzers",
        "image": "/gas_analyzer.png",
        "brand": "SICK",
        "desc": "In-situ and extractive gas analyzers for refinery process streams — measuring H₂S, CO, SO₂, NOₓ, O₂ and combustibles for process optimisation, safety, and environmental compliance."
      },
      {
        "category": "Gas Analyzer",
        "name": "Extractive Gas Analyzers",
        "slug": "extractive-gas-analyzers",
        "image": "/extractive_gas_analyzer.jpg",
        "brand": "SICK",
        "desc": "Reliable continuous gas analysis for refinery stacks and process ducts under harsh conditions — extractive measurement technology conditions the sample before analysis, ensuring consistent and accurate readings."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  },
  "water-treatment": {
    "slug": "water-treatment",
    "name": "Water Treatment",
    "metaTitle": "Water Treatment Industry Solutions",
    "metaDesc": "Texas Technical Services delivers CEMS, analyzers, flow meters, and industrial process automation systems for water treatment — ensuring precise monitoring, quality control, and operational efficiency.",
    "keywords": [
      "water treatment flow meters",
      "water treatment CEMS solutions",
      "water treatment dust analyzers",
      "industrial water treatment automation",
      "water treatment monitoring systems Kuwait",
      "wastewater treatment instrumentation GCC",
      "desalination plant automation Dubai",
      "water quality monitoring Kuwait",
      "effluent treatment plant control",
      "water treatment SCADA systems GCC"
    ],
    "heroImage": "/water_treatment.webp",
    "heroDesc": "Advanced OEM solutions for municipal and industrial water treatment — delivering precise monitoring, quality control, and operational efficiency through flow meters, CEMS, dust analyzers, and process automation systems.",
    "tags": [
      "Municipal",
      "Industrial",
      "Precise Monitoring",
      "Quality Control",
      "CEMS"
    ],
    "stats": [
      {
        "num": "9",
        "label": "Products"
      },
      {
        "num": "3+",
        "label": "OEM Brands"
      },
      {
        "num": "18+",
        "label": "Years"
      }
    ],
    "highlights": [
      "Precise Flow Control",
      "Quality Monitoring",
      "Municipal & Industrial"
    ],
    "challenges": [
      {
        "title": "Large-Diameter Municipal Main Flow Tracking",
        "challenge": "High installation cost and pipeline shutdown constraints when metering municipal supply headers up to DN2000.",
        "solution": "External transit-time clamp-on ultrasonic meters installed without line cutting or service interruption."
      },
      {
        "title": "Corrosive Chemical Dosing & Wastewater Sludge",
        "challenge": "Chlorine, coagulants, and heavy abrasive slurries cause electrode fouling and mechanical wear.",
        "solution": "Non-intrusive ultrasonic and electromagnetic meters with inert liners and automated self-cleaning."
      },
      {
        "title": "Desalination Plant High-Salinity Brine Monitoring",
        "challenge": "High chloride content causes rapid pitting and galvanic corrosion in standard metallic instrumentation.",
        "solution": "Super duplex wetted components and titanium sensors engineered specifically for Gulf desalination facilities."
      }
    ],
    "products": [
      {
        "category": "Metering Skid",
        "name": "Flow Metering Skid",
        "slug": "flow-metering-skid",
        "image": "/flow_metering_skid.jpg",
        "brand": "SICK · FLOWSKID",
        "desc": "FLOWSKID turnkey flow metering systems for water treatment plant gas supply — factory-assembled, pre-tested packages delivering reliable fiscal measurement of fuel and process gas at the plant gate."
      },
      {
        "category": "Flow Meter",
        "name": "Custody Transfer Gas Flow Meter",
        "slug": "custody-transfer-gas-flow-meter",
        "image": "/custody_transfer_gas_flow_meter.png",
        "brand": "SICK",
        "desc": "Exact gas quantity detection for precise billing at water treatment facilities — where accurate fuel gas measurement directly impacts operational cost control and energy management across the plant."
      },
      {
        "category": "Flow Computer",
        "name": "Flow Computer",
        "slug": "flow-computer",
        "image": "/flow_computer.png",
        "brand": "OMNI · 4000/7000 Series",
        "desc": "OMNI flow computers — the most trusted brand for custody flow measurement — reducing uncertainty and supporting energy accounting across water treatment plant gas and liquid metering stations."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Gas Flow Meter",
        "slug": "ultrasonic-gas-flow-meter",
        "image": "/ultrasonic_gas_flow_meter.jpg",
        "brand": "FH83NEO",
        "desc": "Full-bore ultrasonic flowmeter for water treatment plant gas streams — no pressure drop, no moving parts, and zero maintenance burden across aeration gas, biogas, and fuel gas applications."
      },
      {
        "category": "Flow Meter",
        "name": "Non-Custody Transfer Gas Flow Meter",
        "slug": "non-custody-transfer-gas-flow-meter",
        "image": "/non_custody_transfer_gas_flow_meter.jpg",
        "brand": "SICK",
        "desc": "Reliable gas flow measurement for internal water treatment plant operations — monitoring biogas, aeration air, and utility streams for volume, mass flow, and velocity across diverse process conditions."
      },
      {
        "category": "CEMS",
        "name": "CEMS Solutions",
        "slug": "cems-solutions",
        "image": "/cems.png",
        "brand": "SICK",
        "desc": "SICK CEMS solutions for continuous emissions monitoring at water treatment plants — accurately measuring pollutants and reference quantities from incineration, biogas combustion, and process vents in compliance with regulations."
      },
      {
        "category": "Dust Analyzer",
        "name": "Dust Analyzer",
        "slug": "dust-analyzer",
        "image": "/dust_analyzer.png",
        "brand": "SICK",
        "desc": "SICK sets new standards in dust measurement with rugged, low-maintenance devices for detecting and monitoring dust concentrations at water treatment facilities — easy to integrate, install, and commission with user-friendly operation."
      },
      {
        "category": "Flow Meter",
        "name": "Clamp ON Meter",
        "slug": "clamp-on-meter",
        "image": "/clamp_on_meter.png",
        "brand": "Ultraflux · Minisonic P",
        "desc": "Portable transit-time ultrasonic flowmeter ideal for water treatment — measuring water of variable quality, process fluids, and chemical dosing lines without pipe penetration or process interruption."
      },
      {
        "category": "Flow Meter",
        "name": "Ultrasonic Liquid Flow Meter",
        "slug": "ultrasonic-liquid-flow-meter",
        "image": "/ultrasonic_liquid_flow_meter.png",
        "brand": "FH Sonic",
        "desc": "High-performance multi-path liquid flowmeter for water treatment custody transfer — integrating up to 5 asymmetric measuring paths for accurate flow profile correction across raw water, treated water, and effluent streams."
      }
    ],
    "services": [
      {
        "title": "Flow Measurement & Custody Transfer",
        "slug": "flow-measurement-solutions",
        "desc": "Turnkey fiscal metering skids, calibration proving loops, and OMNI flow computer validation.",
        "image": "/flow_metering_skid.jpg"
      },
      {
        "title": "Industrial Automation & SCADA",
        "slug": "industrial-automation",
        "desc": "PLC/HMI engineering, distributed DCS control architectures, and high-availability telemetry.",
        "image": "/images/services/automation_full.jpg"
      },
      {
        "title": "Non-Destructive Testing (NDT)",
        "slug": "inspection-testing",
        "desc": "Phased array ultrasonic (PAUT), TOFD, radiographic testing, and plant turnaround inspection.",
        "image": "/images/services/inspection-testing.jpg"
      },
      {
        "title": "In-Situ Meter Calibration",
        "slug": "flow-meter-calibration",
        "desc": "On-site master meter proving, laser alignment, and measurement uncertainty audits.",
        "image": "/master_meter.jpg"
      }
    ]
  }
};

export function getIndustryBySlug(slug: string): IndustryDetailData | undefined {
  return INDUSTRIES_DATA[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(INDUSTRIES_DATA);
}
