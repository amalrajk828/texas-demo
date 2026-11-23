import type { ServicePageData } from "@/components/v3/service/types";

export interface SolutionCapabilityItem {
  title: string;
  category?: string;
  description: string;
  iconName?: string;
  href?: string;
}

export interface SolutionPageData extends Omit<ServicePageData, "capabilities"> {
  capabilities?: {
    eyebrow?: string;
    title: string;
    description?: string;
    columns?: 2 | 3 | 4;
    items: SolutionCapabilityItem[];
  };
}

export type SolutionDataMap = Record<string, SolutionPageData>;

export const SOLUTIONS_PAGE_DATA: SolutionDataMap = {
  texaflow: {
    slug: "texaflow",
    category: "Proprietary Custody Solution",
    title: "Texaflow — Custody Metering Integrated Control System",
    subtitle:
      "Our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline metering stations, loading facilities, power plants, and airports — engineered for compliance, accuracy, and remote visibility.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Texaflow" },
    ],
    primaryCta: {
      label: "Request a Demo",
      href: "/contacts/",
    },
    secondaryCta: {
      label: "Metering Integration Service",
      href: "/service/metering-control-system-integration/",
    },
    heroImage: {
      src: "/images/services/metering-control-integration.jpg",
      alt: "Texaflow custody metering integrated control system architecture",
      objectPosition: "center 40%",
    },
    stats: [
      { value: "API MPMS", label: "Proving Standards", note: "Chapter 4 Compliant" },
      { value: "OIML R117", label: "Fiscal Certification", note: "Auditable Measurement" },
      { value: "24/7", label: "Real-Time SCADA", note: "Fiscal Supervisory" },
      { value: "Bi-Directional", label: "Flow & Prover Control", note: "Multi-Product Support" },
    ],
    overview: {
      eyebrow: "Proprietary Fiscal Architecture",
      heading: "End-to-End Custody Transfer Measurement & Prover Automation",
      paragraphs: [
        "Texaflow is Texas Technical Services' proprietary custody metering integrated control system. It combines flow computer integration, automated meter proving, high-performance SCADA visualization, and regulatory reporting into a single platform — purpose-built for fiscal metering in oil & gas terminals, refineries, pipeline stations, loading facilities, power plants, and airports.",
        "Engineered for full compliance with API MPMS Chapter 4 (proving systems) and OIML R117 (liquids other than water), Texaflow maintains auditable measurement integrity for every custody transfer batch, with tamper-proof logs and exportable certificates suitable for fiscal authorities and refinery planning systems.",
        "Designed for both greenfield deployments and retrofit projects at existing facilities, Texaflow interfaces natively with leading flow computers, analyzers, and provers to eliminate manual batch reconciliation and reduce operational risk.",
      ],
      checklist: [
        "Real-time custody transfer measurement with fiscal-grade accuracy",
        "Native flow computer integration (OMNI 4000/7000, SICK Flow-X)",
        "Automated sphere, piston & compact prover sequencing",
        "Full SCADA visualization with alarm & event management",
        "API MPMS Chapter 4 and OIML R117 compliance built-in",
        "Multi-product scheduling with no cross-contamination",
        "Configurable batch reports & mass-balance analytics",
        "Secure remote monitoring with role-based access control",
      ],
      image: {
        src: "/images/flow_metering_control_system/1.jpg",
        alt: "Texaflow metering control panel and supervisory terminal",
        fit: "cover",
      },
      badge: {
        title: "PROPRIETARY PLATFORM",
        subtitle: "Custody SCADA Control",
      },
    },
    capabilities: {
      eyebrow: "System Capabilities",
      title: "Engineered for Fiscal Accuracy & Operational Confidence",
      description:
        "Texaflow brings every custody transfer function under a single auditable platform — reducing operational risk, eliminating manual reconciliation, and giving operators complete real-time visibility.",
      columns: 3,
      items: [
        {
          title: "Integrated Custody Transfer Metering",
          category: "Measurement",
          description:
            "End-to-end custody transfer measurement with full integration across metering skids, flow computers, and supervisory systems — accurate fiscal measurement you can trust.",
          iconName: "Scale",
        },
        {
          title: "Real-Time Flow Computer Integration",
          category: "Computation",
          description:
            "Native integration with leading flow computer platforms (OMNI 4000/7000, SICK Flow-X) — real-time flow calculations, batch tracking, and historical data.",
          iconName: "Cpu",
        },
        {
          title: "Automated Meter Proving Control",
          category: "Validation",
          description:
            "Automated sphere, piston, and compact prover control logic — sequence management, repeat runs, and provability reports generated automatically.",
          iconName: "ClipboardCheck",
        },
        {
          title: "SCADA & Data Acquisition",
          category: "Visualization",
          description:
            "High-performance SCADA visualization with real-time and historical trending, alarm management, and seamless integration with the enterprise layer.",
          iconName: "Server",
        },
        {
          title: "Regulatory Compliance (API/OIML)",
          category: "Compliance",
          description:
            "Built-in compliance with API MPMS Chapter 4, OIML R117, and other international standards — auditable measurement integrity for every batch.",
          iconName: "FileCheck2",
        },
        {
          title: "Multi-Product Handling",
          category: "Operations",
          description:
            "Sophisticated product scheduling and segregation — switch between crude, refined products, and additives with no cross-contamination risk.",
          iconName: "GitBranch",
        },
        {
          title: "Advanced Reporting & Analytics",
          category: "Analytics",
          description:
            "Configurable reports for daily volume, mass balance, BSW, density, and shrinkage — exportable to ERP, customs, and refinery planning systems.",
          iconName: "BarChart3",
        },
        {
          title: "Remote Monitoring & Control",
          category: "Connectivity",
          description:
            "Secure remote access from any device — operators and managers can review custody data and authorize operations from anywhere.",
          iconName: "Wifi",
        },
      ],
    },
    specifications: {
      eyebrow: "Compliance & Engineering",
      title: "Technical Specifications & Architecture Standards",
      description:
        "Engineered to meet the stringent regulatory and audit requirements of national oil companies and international custody measurement bodies.",
      caption: "Texaflow system architecture and compliance baseline.",
      headers: {
        parameter: "System Dimension",
        value: "Specification / Standard",
        notes: "Engineering Scope",
      },
      rows: [
        {
          parameter: "Fiscal Compliance Standards",
          value: "API MPMS Ch. 4, 5, 11, 12, 21; OIML R117",
          notes: "Auditable measurement integrity for liquids & gases",
        },
        {
          parameter: "Flow Computer Integration",
          value: "OMNI 4000 / 7000 Series, SICK Flow-X",
          notes: "Bidirectional high-speed serial & Modbus TCP/IP",
        },
        {
          parameter: "Prover Automation Logic",
          value: "Bi-directional pipe provers, compact & master meters",
          notes: "Automated 5-run repeatability & pulse count verification",
        },
        {
          parameter: "Product Handling & Segregation",
          value: "Crude oil, condensates, refined fuels, LPG, additives",
          notes: "Automated line flush & multi-batch scheduling",
        },
        {
          parameter: "Enterprise Data Export",
          value: "OPC UA, REST API, SQL, CSV, XML, SAP/ERP",
          notes: "Direct integration into corporate billing & customs",
        },
        {
          parameter: "System Redundancy & Security",
          value: "Dual-redundant hot-standby servers, RBAC",
          notes: "IEC 62443 cyber-secure architecture with tamper-proof logs",
        },
      ],
    },
    process: {
      eyebrow: "Deployment Methodology",
      title: "How We Deliver Texaflow Integration",
      description:
        "Structured lifecycle execution ensuring seamless commissioning with zero disruptions to active fiscal metering operations.",
      steps: [
        {
          stepNumber: 1,
          title: "Site Survey & Skid Audit",
          description:
            "We inspect your existing metering skids, flow computers, provers, and field instrumentation to map tag structures and communication protocols.",
        },
        {
          stepNumber: 2,
          title: "System Configuration & Staging",
          description:
            "Our certified engineers program proving sequences, custom HMI mimics, batch ticket templates, and redundant server failover logic.",
        },
        {
          stepNumber: 3,
          title: "Factory Acceptance Testing (FAT)",
          description:
            "Complete loop simulation with virtual flow computers and signal injectors to verify every calculation, alarm, and export prior to site arrival.",
        },
        {
          stepNumber: 4,
          title: "Commissioning & Site Proving (SAT)",
          description:
            "On-site installation during maintenance windows, live hydrocarbon proving, operator training, and handover of signed certification packages.",
        },
      ],
    },
    industriesServed: {
      eyebrow: "Applications",
      title: "Where Texaflow Excels Across Critical Infrastructure",
      description:
        "Trusted across high-throughput hydrocarbon logistics and fiscal boundary metering stations throughout the GCC.",
      items: [
        {
          name: "Oil & Gas Terminals",
          slug: "terminals",
          description:
            "Crude oil export terminals, marine tanker loading jetties, and truck loading gantries requiring rapid batch turnaround.",
        },
        {
          name: "Refineries",
          slug: "refineries",
          description:
            "Unit-to-unit transfer, boundary battery-limit fiscal metering, and mass-balance reconciliation across refining complexes.",
        },
        {
          name: "Pipeline Metering Stations",
          slug: "pipelines",
          description:
            "Mainline custody transfer stations with bi-directional batch tracking, leak detection integration, and automated proving.",
        },
        {
          name: "Loading Facilities",
          slug: "loading-facilities",
          description:
            "Automated multi-arm truck and rail car loading racks with preset flow computer synchronization and automated ticketing.",
        },
        {
          name: "Power Plants",
          slug: "power-plants",
          description:
            "High-pressure natural gas and fuel oil intake metering with gross heating value tracking for energy conversion billing.",
        },
        {
          name: "Aviation Fuel Depots",
          slug: "airports",
          description:
            "Airport hydrant systems and Jet-A1 storage facilities with strict filtration, density, and temperature compensation monitoring.",
        },
      ],
    },
    faq: [
      {
        q: "What is Texaflow and what does it do?",
        a: "Texaflow is Texas Technical Services' proprietary custody metering integrated control system. It combines flow computer integration, automated meter proving, SCADA visualization, and regulatory reporting into a single platform — purpose-built for fiscal metering in oil & gas terminals, refineries, pipeline stations, loading facilities, power plants, and airports.",
      },
      {
        q: "Is Texaflow compliant with API and OIML standards?",
        a: "Yes. Texaflow is engineered for full compliance with API MPMS Chapter 4 (proving systems) and OIML R117 (liquids other than water). The system maintains auditable measurement integrity for every custody transfer batch, with tamper-proof logs and exportable certificates suitable for fiscal authorities and refinery planning systems.",
      },
      {
        q: "Which flow computers does Texaflow integrate with?",
        a: "Texaflow natively integrates with the most common custody-grade flow computers in the GCC, including OMNI 4000 / 7000 series and SICK Flow-X. Integration is bidirectional — flow computer batch data, alarms, and configuration flow seamlessly into the SCADA layer, while operator commands propagate back to the meter in real time.",
      },
      {
        q: "Can Texaflow be deployed at existing terminals?",
        a: "Yes. Texaflow is designed for both greenfield deployments and retrofit projects at existing terminals. We conduct a site survey, integrate with your current metering skids, flow computers, and analyzers, and migrate the supervisory layer with minimal downtime — typically during scheduled maintenance windows.",
      },
      {
        q: "Does Texaflow support remote monitoring?",
        a: "Yes. Texaflow includes secure remote monitoring with role-based access control, allowing operators, engineers, and managers to view real-time custody data, acknowledge alarms, and review historical batches from any device — desktop, tablet, or smartphone — across the enterprise or from a remote operations center.",
      },
    ],
    ctaBanner: {
      eyebrow: "Ready to Deploy Texaflow?",
      title: "Deploy Texaflow at Your Terminal or Pipeline Station",
      description:
        "Our senior metering engineers will scope a pilot or full turnkey deployment — typically integrated with your existing flow computers and SCADA in weeks, not months.",
      primaryCta: { label: "Request a Demo", href: "/contacts/" },
      secondaryCta: { label: "Explore Partner Alliances", href: "/partners/" },
    },
    meta: {
      title: "Texaflow — Custody Metering Integrated Control System Kuwait",
      description:
        "Texaflow is our proprietary custody metering integrated control system — advanced fiscal metering & SCADA solution for oil & gas terminals, refineries, pipeline metering stations, loading facilities, power plants, and airports.",
    },
    jsonLd: {
      serviceType: "Custody Transfer Metering & SCADA Control",
      description:
        "Proprietary custody transfer control system for oil & gas terminals, refineries, and pipeline metering stations — automated proving, real-time flow computer integration, and regulatory compliance.",
    },
  },

  "space-ai": {
    slug: "space-ai",
    category: "Industrial AI & Machine Learning",
    title: "Space AI — Next-Generation AI & Machine Learning for Industry",
    subtitle:
      "From field devices to enterprise analytics — Space AI brings deep learning, edge computing, and big data to your plant floor. Reduce unplanned downtime by up to 50%, increase yield, and unlock autonomous optimization across oil & gas, manufacturing, and process industries.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Space AI" },
    ],
    primaryCta: {
      label: "Start a Pilot",
      href: "/contacts/",
    },
    secondaryCta: {
      label: "Our Strategic Partners",
      href: "/partners/",
    },
    heroImage: {
      src: "/images/control-room-1200.webp",
      alt: "Space AI Industrial AI Operations and Real-Time Plant Analytics",
      objectPosition: "center 50%",
    },
    stats: [
      { value: "50%", label: "Downtime Reduction", note: "Predictive Maintenance" },
      { value: "15%", label: "Yield Improvement", note: "Autonomous Optimization" },
      { value: "30%", label: "Energy Savings", note: "Smart Monitoring" },
      { value: "24/7", label: "AI Surveillance", note: "Continuous Critical Asset Monitoring" },
    ],
    overview: {
      eyebrow: "AI-Driven Industrial Transformation",
      heading: "From Plant-Floor Sensor Streams to Autonomous Optimization",
      paragraphs: [
        "Space AI delivers next-generation AI and machine learning for industry — predictive maintenance, process optimization with virtual metrology & digital twins, and smart monitoring with ESG & carbon tracking. We empower industrial operators to cut unplanned downtime by up to 50% and stabilize complex processes.",
        "Unlike traditional rule-based threshold alarms, Space AI utilizes deep neural networks, pattern recognition, and multidimensional anomaly detection to learn normal baseline behaviors and surface subtle equipment degradation weeks before failure occurs.",
        "Whether deployed on industrial edge PCs directly beside critical rotating machinery or scaled to private cloud infrastructure for enterprise-wide fleet analytics, Space AI delivers measurable ROI within 90 days with zero disruption to active control networks.",
      ],
      checklist: [
        "Real-time anomaly detection with sub-second edge inference",
        "Vibration analysis & remaining useful life (RUL) prediction",
        "Process throughput maximization & autonomous digital twin tuning",
        "Virtual metrology & predictive quality inspection",
        "Real-time energy consumption analytics & ESG carbon accounting",
        "Plug-and-play integration with ICONICS, AVEVA, PI Historian, and SCADA",
      ],
      image: {
        src: "/about/space-ai.jpg",
        alt: "Space AI industrial intelligence platform architecture",
        fit: "cover",
      },
      badge: {
        title: "STRATEGIC ALLIANCE",
        subtitle: "Industrial AI Platform",
      },
    },
    capabilities: {
      eyebrow: "Three Core AI Categories",
      title: "Three Categories of AI Transforming Industrial Operations",
      description:
        "Space AI bridges the gap between raw plant telemetry and actionable decisions across maintenance, operations, and executive ESG tracking.",
      columns: 3,
      items: [
        {
          title: "Predictive Maintenance",
          category: "Asset Health",
          description:
            "AI-driven algorithms that forecast equipment health and predict failures before they impact operations — vibration analysis, RUL prediction, and anomaly detection.",
          iconName: "Activity",
        },
        {
          title: "Process Optimization",
          category: "Operations",
          description:
            "Advanced machine learning models for real-time production tuning and operational efficiency — throughput maximization, digital twin, and smart control.",
          iconName: "TrendingUp",
        },
        {
          title: "Smart Monitoring & ESG",
          category: "Sustainability",
          description:
            "Holistic view of plant operations with intelligent alert systems, real-time energy analytics, and automated Scope 1 & 2 carbon footprint tracking.",
          iconName: "Shield",
        },
        {
          title: "Deep Learning & Neural Networks",
          category: "Core Tech",
          description:
            "Physics-informed neural networks (PINNs) and time-series transformers trained on multivariate industrial sensor streams to detect complex cross-system anomalies.",
          iconName: "Brain",
        },
        {
          title: "Deterministic Edge Computing",
          category: "Core Tech",
          description:
            "Sub-second edge inference running directly on ruggedized plant gateways for high-frequency vibration surveillance and closed-loop process safety.",
          iconName: "Cpu",
        },
        {
          title: "Big Data & Historian Ingestion",
          category: "Core Tech",
          description:
            "High-throughput connectors for OSIsoft PI, ICONICS Hyper Historian, AVEVA, and industrial databases for fleet-wide model retraining and cross-site insights.",
          iconName: "Database",
        },
      ],
    },
    specifications: {
      eyebrow: "Technical Architecture",
      title: "Platform Specifications & Data Integration Standards",
      description:
        "Engineered for air-gapped cybersecurity, industrial fieldbus compatibility, and enterprise scalability.",
      caption: "Space AI technical baseline and integration architecture.",
      headers: {
        parameter: "System Dimension",
        value: "Specification / Standard",
        notes: "Engineering Scope",
      },
      rows: [
        {
          parameter: "Model Architectures",
          value: "LSTM, Time-Series Transformers, Autoencoders, GNNs",
          notes: "Multi-variate pattern recognition on complex sensor feeds",
        },
        {
          parameter: "Inference Latency",
          value: "< 50ms at Edge; < 250ms on On-Prem Cloud",
          notes: "Sub-second deterministic edge execution for safety loops",
        },
        {
          parameter: "Telemetry Ingestion Protocols",
          value: "OPC UA, MQTT Sparkplug B, Modbus TCP, REST API",
          notes: "Native connectors for OSIsoft PI, ICONICS, AVEVA, SCADA",
        },
        {
          parameter: "Deployment Configurations",
          value: "Ruggedized Edge PC, On-Premise Servers, Private Cloud",
          notes: "100% air-gapped deployment support for critical infrastructure",
        },
        {
          parameter: "Asset Models Supported",
          value: "Pumps, compressors, turbines, heat exchangers, valves",
          notes: "Pre-trained physics-informed ML asset degradation models",
        },
        {
          parameter: "Security & Compliance",
          value: "TLS 1.3 encryption, RBAC, ISO 27001 & SOC 2 aligned",
          notes: "Zero data egress required; complete data sovereignty",
        },
      ],
    },
    process: {
      eyebrow: "Engagement Process",
      title: "From Data to Decisions in Three Steps",
      description:
        "A structured 90-day deployment lifecycle that proves tangible ROI before scaling across the facility.",
      steps: [
        {
          stepNumber: 1,
          title: "Connect & Ingest",
          description:
            "Plug into your existing SCADA, historian, vibration sensors, and lab systems. Deployed on edge gateways or on-prem cloud with zero rip-and-replace.",
        },
        {
          stepNumber: 2,
          title: "Learn & Predict",
          description:
            "Machine learning models train on your facility's historical and live data, learning normal operating envelopes and flagging emerging anomalies.",
        },
        {
          stepNumber: 3,
          title: "Recommend & Automate",
          description:
            "Operators receive clear, actionable root-cause insights; closed-loop setpoint supervisory control can be activated for autonomous optimization.",
        },
      ],
    },
    industriesServed: {
      eyebrow: "Target Sectors",
      title: "Proven Impact Across Heavy Process & Manufacturing",
      description:
        "Deployed across high-consequence industries where unplanned downtime carries extreme financial and safety penalties.",
      items: [
        {
          name: "Oil & Gas Upstream & Midstream",
          slug: "oil-gas",
          description:
            "Multi-stage centrifugal compressor surveillance, pipeline leak modeling, and artificial lift pump failure prediction.",
        },
        {
          name: "Refining & Petrochemicals",
          slug: "refining",
          description:
            "Furnace efficiency optimization, distillation column flooding prevention, and heat exchanger fouling estimation.",
        },
        {
          name: "Power Generation & Utilities",
          slug: "power",
          description:
            "Gas turbine blade degradation modeling, boiler heat-rate optimization, and generator bearing vibration analysis.",
        },
        {
          name: "Water & Desalination",
          slug: "water",
          description:
            "High-pressure reverse osmosis pump energy optimization, membrane fouling forecasting, and chemical dosing control.",
        },
        {
          name: "Cement & Metals",
          slug: "metals",
          description:
            "Raw mill vibration monitoring, kiln shell thermal profile prediction, and continuous casting quality forecasting.",
        },
        {
          name: "Discrete & Automotive",
          slug: "manufacturing",
          description:
            "Spindle health on CNC lines, robotic assembly cycle time optimization, and automated vision quality inspection.",
        },
      ],
    },
    faq: [
      {
        q: "What is Space AI and how does it differ from traditional monitoring?",
        a: "Space AI is our strategic industrial AI partnership that goes beyond rule-based monitoring. It uses deep learning, pattern recognition, and predictive analytics to detect anomalies, forecast failures, and recommend optimal actions — all in real time, often at the edge. Unlike traditional threshold alarms, Space AI learns normal behavior and surfaces subtle deviations weeks before they become failures.",
      },
      {
        q: "How quickly can Space AI deliver ROI?",
        a: "Most Space AI deployments deliver measurable ROI within 3 to 6 months. Predictive maintenance alone typically reduces unplanned downtime by 30-50%, while process optimization can improve yield by 5-15% depending on the application. We start with a focused pilot on your highest-value asset to quantify gains before scaling.",
      },
      {
        q: "Does Space AI work with our existing SCADA and historians?",
        a: "Yes. Space AI integrates with the leading SCADA platforms (ICONICS Genesis64, iFIX, Mitsubishi, AVEVA) and historians (Hyper Historian, OSIsoft PI). It can ingest live tag data, historian exports, vibration files, and lab data — no rip-and-replace required.",
      },
      {
        q: "Can Space AI run at the edge for latency-critical applications?",
        a: "Absolutely. Space AI supports edge deployment on industrial gateways and PCs for sub-second inference — critical for vibration monitoring, machine safety, and closed-loop control. Cloud deployment is used for fleet-level learning, model training, and cross-site analytics.",
      },
      {
        q: "Is Space AI suitable for ESG and carbon reporting?",
        a: "Yes. Space AI's smart monitoring module includes real-time energy analytics and ESG & carbon tracking — automatically aggregating Scope 1 and 2 emissions, energy intensity, and sustainability KPIs into auditable dashboards for corporate reporting and regulatory disclosure.",
      },
    ],
    ctaBanner: {
      eyebrow: "Ready to Put AI to Work?",
      title: "Start a Focused 90-Day Industrial AI Pilot",
      description:
        "Start with a focused pilot on your highest-value asset — quantify measurable ROI in 90 days, then scale across your enterprise with confidence.",
      primaryCta: { label: "Start a Pilot", href: "/contacts/" },
      secondaryCta: { label: "Our Strategic Partners", href: "/partners/" },
    },
    meta: {
      title: "Space AI — Industrial AI & Machine Learning Solutions",
      description:
        "Space AI delivers next-generation AI and machine learning for industry — predictive maintenance, process optimization with virtual metrology & digital twin, and smart monitoring with ESG & carbon tracking. Reduce unplanned downtime by up to 50%.",
    },
    jsonLd: {
      serviceType: "Industrial AI & Machine Learning Platform",
      description:
        "Predictive maintenance, process optimization, and smart monitoring powered by deep learning, edge computing, big data analytics, and Industrial IoT.",
    },
  },

  "mitsubishi-electric": {
    slug: "mitsubishi-electric",
    category: "Authorized System Integrator",
    title: "Mitsubishi Electric Factory Automation Solutions",
    subtitle:
      "Texas Technical Services is your trusted Mitsubishi system integrator in Kuwait, UAE, and Dubai. We deliver Mitsubishi Electric factory automation solutions including PLC programming, GOT HMI integration, AC servo drives, frequency inverters, and Iconics SCADA systems — backed by deep domain expertise in oil & gas, power, and industrial automation.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Mitsubishi Electric" },
    ],
    primaryCta: {
      label: "Get More Information",
      href: "/contacts/",
    },
    secondaryCta: {
      label: "Explore Automation Products",
      href: "/products/plc/",
    },
    heroImage: {
      src: "/images/industrial_automation/industrial_control_panels/1.jpg",
      alt: "Mitsubishi Electric factory automation control panel integration by Texas Technical Services",
      objectPosition: "center 45%",
    },
    stats: [
      { value: "MELSEC", label: "PLC Series", note: "iQ-R, iQ-F & L Series" },
      { value: "GOT 2000", label: "HMI Solutions", note: "Multi-Touch Visualization" },
      { value: "MR-J5", label: "Motion Control", note: "AC Servo Systems" },
      { value: "ICONICS", label: "SCADA Systems", note: "Turnkey Integration" },
    ],
    overview: {
      eyebrow: "Authorized Systems Integrator",
      heading: "Turnkey Mitsubishi Electric Automation, Control & SCADA Integration",
      paragraphs: [
        "Texas Technical Services Co. is an authorized Mitsubishi Electric system integrator in Kuwait and the GCC. We deliver factory automation solutions including MELSEC PLC programming, GOT HMI integration, AC servo drives, FREQROL frequency inverters, and Iconics SCADA systems — backed by certified engineers trained on the full Mitsubishi automation portfolio.",
        "We specialize in programming and integrating the flagship MELSEC iQ-R series for complex automation, the compact iQ-F series for cost-optimized standalone machines, and migrating legacy Q and A-series installations to modern high-speed architectures.",
        "From certified control panel fabrication and Factory Acceptance Testing (FAT) to on-site commissioning and spare parts distribution, TTS provides end-to-end automation engineering with factory-direct warranty backing.",
      ],
      checklist: [
        "Mitsubishi MELSEC PLC programming — iQ-F, iQ-R, L, and legacy Q Series",
        "GOT HMI panel design, multi-touch engineering & recipe management",
        "AC servo motion configuration — MR-J5 and MR-J4 series with CC-Link IE TSN",
        "FREQROL frequency inverter (VFD) setup, harmonics mitigation & energy tuning",
        "Iconics SCADA development, 3D visualization & Mitsubishi integration",
        "Control panel design, fabrication & FAT in accordance with IEC 61439",
        "Legacy Mitsubishi system migration (A-series / AnS / Q-series to iQ-R)",
        "Genuine spare parts supply, warranty-backed support & 24/7 field service",
      ],
      image: {
        src: "/about/mitsubishi-electric.png",
        alt: "Mitsubishi Electric automation hardware ecosystem",
        fit: "contain",
      },
      badge: {
        title: "AUTHORIZED OEM",
        subtitle: "Mitsubishi Electric Integrator",
      },
    },
    capabilities: {
      eyebrow: "Automation Solutions",
      title: "Our Mitsubishi Electric Automation Solutions",
      description:
        "Comprehensive hardware supply, programming, panel building, and lifecycle maintenance across the entire Mitsubishi Electric factory automation spectrum.",
      columns: 2,
      items: [
        {
          title: "Mitsubishi PLC Programming & Integration",
          category: "Programmable Logic Controllers",
          description:
            "As a trusted Mitsubishi system integrator in Kuwait, UAE, and Dubai, we specialize in programming and integrating Mitsubishi electric PLCs — including the MELSEC iQ-F, iQ-R, and L Series. Our expertise covers logic development, industrial network configuration (CC-Link, Ethernet/IP), and seamless integration with SCADA and HMI systems.",
          href: "/products/plc/",
          iconName: "Cpu",
        },
        {
          title: "Mitsubishi HMI & GOT Solutions",
          category: "Human Machine Interface",
          description:
            "We design, engineer, and program Mitsubishi GOT (Graphic Operation Terminal) HMI panels for intuitive operator interfaces. From simple status displays to advanced multi-touch visualization with data logging and recipe management — putting real-time process control at operators' fingertips.",
          href: "/products/got/",
          iconName: "Monitor",
        },
        {
          title: "AC Servo Systems & Frequency Inverters",
          category: "Motion & Drives",
          description:
            "Comprehensive Mitsubishi AC servo system and frequency inverter (VFD) solutions for precise motion control and energy-efficient motor drives. We configure Mitsubishi MR-J5 and MR-J4 servo amplifiers, and FREQROL series inverters tailored to your industrial requirements.",
          href: "/products/frequency-inverter-vfd/",
          iconName: "Zap",
        },
        {
          title: "Iconics SCADA & Mitsubishi Integration",
          category: "Supervisory Control",
          description:
            "We integrate Iconics SCADA software with Mitsubishi electric automation hardware for enterprise-wide monitoring and control. Our solutions provide real-time data visualization, historical trending, alarm management, and KPI dashboards connecting PLCs and HMIs into a unified platform.",
          href: "/products/iconics/",
          iconName: "Server",
        },
      ],
    },
    specifications: {
      eyebrow: "Hardware Architecture",
      title: "Mitsubishi Automation Platform Specifications",
      description:
        "Technical benchmarks for Mitsubishi Electric controllers, motion drives, and networking hardware.",
      caption: "Mitsubishi Electric factory automation specifications.",
      headers: {
        parameter: "Product Family",
        value: "Platform Model / Architecture",
        notes: "Performance Benchmarks",
      },
      rows: [
        {
          parameter: "High-Performance PLCs",
          value: "MELSEC iQ-R Series (R04/R08/R16/R32/R120)",
          notes: "0.14 ns sequence execution; up to 4,096 local I/O points",
        },
        {
          parameter: "Compact Machine PLCs",
          value: "MELSEC iQ-F Series (FX5U / FX5UJ / FX5S)",
          notes: "Built-in Ethernet, 4-axis 200kHz positioning, analog I/O",
        },
        {
          parameter: "Operator Touch Panels",
          value: "GOT2000 Series (GT27, GT25, GT21)",
          notes: "Multi-touch gestures, multimedia logging, remote VNC server",
        },
        {
          parameter: "AC Servo Motion Drives",
          value: "MELSERVO-J5 Series (MR-J5-G / MR-J5W)",
          notes: "3.5 kHz speed frequency response; CC-Link IE TSN support",
        },
        {
          parameter: "Variable Frequency Drives",
          value: "FREQROL FR-A800, FR-F800, FR-E800",
          notes: "Advanced magnetic flux vector control, built-in PLC functions",
        },
        {
          parameter: "SCADA Software Platform",
          value: "ICONICS GENESIS64 v10.96 / Hyper Historian",
          notes: "3D digital twin visualization, OPC UA native, BACnet certified",
        },
      ],
    },
    process: {
      eyebrow: "Our Engagement Process",
      title: "How We Deliver Mitsubishi Automation Projects",
      description:
        "A structured delivery methodology that ensures quality, compliance, and optimal performance for every industrial project.",
      steps: [
        {
          stepNumber: 1,
          title: "Consult & Specify",
          description:
            "We assess your automation requirements, recommend the optimal Mitsubishi product selection, and define system architecture, budget, and timeline.",
        },
        {
          stepNumber: 2,
          title: "Engineer & Configure",
          description:
            "Our certified engineers develop PLC programs (GX Works3), HMI screens (GT Designer3), servo configurations (MR Configurator), and VFD setups (FR Configurator).",
        },
        {
          stepNumber: 3,
          title: "Integrate & Test",
          description:
            "We integrate all components into certified control enclosures, perform comprehensive in-house testing and FAT, and verify system performance against specifications.",
        },
        {
          stepNumber: 4,
          title: "Install & Support",
          description:
            "On-site installation, commissioning, SAT, and operator training. We provide ongoing technical support, spare parts supply, and maintenance services across Kuwait and the GCC.",
        },
      ],
    },
    industriesServed: {
      eyebrow: "Industry Verticals",
      title: "Industries Using Mitsubishi Factory Automation",
      description:
        "Mitsubishi Electric automation solutions power critical production infrastructure across Kuwait, the UAE, and the GCC.",
      items: [
        {
          name: "Oil & Gas",
          slug: "oil-gas",
          description:
            "Pipeline SCADA, terminal automation, wellhead monitoring skids, and hazardous area process control.",
        },
        {
          name: "Manufacturing",
          slug: "manufacturing",
          description:
            "High-speed assembly lines, automated packaging machinery, robotic cell control, and material handling.",
        },
        {
          name: "Power & Utilities",
          slug: "power",
          description:
            "Turbine auxiliary control, electrical substation SCADA, water treatment, and balance-of-plant automation.",
        },
        {
          name: "Water & Wastewater",
          slug: "water",
          description:
            "Pumping station control, desalination plant sequencing, biological treatment, and flow distribution networks.",
        },
        {
          name: "Cement & Metals",
          slug: "cement",
          description:
            "Raw material grinding mill drives, rotary kiln automation, and heavy metallurgical handling machinery.",
        },
        {
          name: "Food & Beverage",
          slug: "food-beverage",
          description:
            "Hygienic bottling and filling lines, clean-in-place (CIP) automation, packaging, and vision inspection.",
        },
      ],
    },
    faq: [
      {
        q: "Are you an authorized Mitsubishi Electric system integrator?",
        a: "Yes, Texas Technical Services Co. is an authorized Mitsubishi Electric system integrator in Kuwait and the GCC. We have certified engineers trained on the full Mitsubishi automation portfolio including MELSEC PLC series, GOT HMI panels, MR-J servo drives, FREQROL VFDs, and ICONICS SCADA platforms. Our authorization ensures genuine products, factory-trained support, and warranty-backed installations.",
      },
      {
        q: "Which Mitsubishi PLC series do you support?",
        a: "We support the complete Mitsubishi MELSEC PLC lineup: the iQ-R series (high-end, modular, for complex automation), iQ-F series (compact, cost-effective for medium applications), L series (high-speed, mid-range), and legacy Q series (for existing installations). We also provide migration services from older A-series and Q-series to the latest iQ-R and iQ-F platforms.",
      },
      {
        q: "What is the difference between MELSEC iQ-R and iQ-F series?",
        a: "The MELSEC iQ-R series is Mitsubishi's flagship high-performance PLC designed for large-scale, complex automation systems with advanced motion control, high-speed networking (CC-Link IE), and extensive I/O capabilities. The iQ-F series is a compact, cost-optimized PLC for standalone machines and medium-scale applications, offering built-in Ethernet, positioning, and analog functions in a space-saving form factor. Both series share the same engineering software (GX Works3), simplifying development and maintenance.",
      },
      {
        q: "Do you supply Mitsubishi spare parts and replacements?",
        a: "Yes, we supply genuine Mitsubishi Electric automation components including MELSEC PLCs, GOT HMIs, MR-J servo drives and motors, FREQROL VFDs, and spare parts. As an authorized integrator, we provide competitive pricing, fast delivery across Kuwait and the GCC, and technical support for part selection and compatibility ensuring minimal downtime for your operations.",
      },
      {
        q: "Which industries use Mitsubishi factory automation solutions?",
        a: "Mitsubishi factory automation solutions are deployed across oil and gas (pipeline control, terminal automation), manufacturing (assembly lines, packaging, material handling), water and wastewater (pump control, treatment plants), power generation (turbine control, SCADA), cement and metals (process control), and food and beverage (filling, packaging, inspection). The reliability and precision of Mitsubishi equipment make it ideal for demanding industrial environments.",
      },
    ],
    ctaBanner: {
      eyebrow: "Looking for Mitsubishi Automation?",
      title: "Speak to Our Certified Mitsubishi Automation Engineers",
      description:
        "Talk to our engineering team in Kuwait and Dubai about PLC programming, HMI modernization, AC servo drives, VFD motor control, or turnkey ICONICS SCADA integration.",
      primaryCta: { label: "Contact Us", href: "/contacts/" },
      secondaryCta: { label: "Explore All Products", href: "/products/" },
    },
    meta: {
      title: "Mitsubishi Electric Factory Automation Solutions | Authorized Integrator",
      description:
        "Texas Technical Services is a Mitsubishi system integrator in Kuwait, UAE, and Dubai — offering Mitsubishi electric factory automation, PLC, HMI, servo drives, and Iconics SCADA integration for oil & gas and industrial sectors across the GCC.",
    },
    jsonLd: {
      serviceType: "Factory Automation & PLC Systems Integration",
      description:
        "Authorized Mitsubishi Electric system integrator in Kuwait and the GCC — PLC, servo drives, VFDs, SCADA, HMI, and CNC solutions for industrial automation across oil & gas, manufacturing, and process industries.",
    },
  },

  "pws-floor-solutions": {
    slug: "pws-floor-solutions",
    category: "Authorized Dealer · PWS Floor Solutions",
    title: "Raised Access Flooring Systems for Critical Environments",
    subtitle:
      "PWS Floor Solutions is India's most trusted raised access floor manufacturer. Calcium sulphate panels with steel or aluminum encapsulation — purpose-built for data centers, control rooms, NOCs, and clean rooms across Kuwait, the UAE, and the GCC.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "PWS Floor Solutions" },
    ],
    primaryCta: {
      label: "Request a Quote",
      href: "/contacts/",
    },
    secondaryCta: {
      label: "Control Room Consoles",
      href: "/products/control-room-interior-and-console/",
    },
    heroImage: {
      src: "/images/control-room.webp",
      alt: "PWS raised access flooring installed in a critical industrial control room",
      objectPosition: "center 48%",
    },
    stats: [
      { value: "18+", label: "Years Experience", note: "Manufacturing Excellence" },
      { value: "250+", label: "Projects Delivered", note: "GCC & International" },
      { value: "1M+", label: "Sq. Ft. Installed", note: "Heavy-Duty Flooring" },
      { value: "GREENGUARD", label: "Gold Certified", note: "Low Chemical Emissions" },
    ],
    overview: {
      eyebrow: "Modular Access Flooring",
      heading: "High-Density Calcium Sulphate Raised Flooring for Mission-Critical Spaces",
      paragraphs: [
        "PWS Floor Solutions is India's most trusted raised access floor manufacturer, engineered for data centers, control rooms, network operating centers (NOCs), clean rooms, and modern offices. As an authorized distributor and turnkey installer in Kuwait and the GCC, Texas Technical Services delivers complete flooring systems tailored to stringent load and airflow demands.",
        "Built around high-density calcium sulphate cores encapsulated with galvanized steel or aluminum, PWS panels provide exceptional point-load bearing capacity, fire resistance, acoustic dampening, and anti-static electrostatic discharge (ESD) protection.",
        "Our modular raised floor systems create an accessible underfloor plenum for routing power cables, data lines, and chilled airflow — allowing easy reconfiguration and maintenance with zero structural modifications.",
      ],
      checklist: [
        "High concentrated and rolling load capacity for heavy server racks & consoles",
        "Class 0 non-combustible fire resistance and F30/F60 barrier integrity",
        "Anti-static dissipative laminate and conductive vinyl floor finishes",
        "Underfloor HVAC plenum management with perforated airflow tiles",
        "Heavy-duty galvanized steel pedestals with stringer grid systems",
        "GREENGUARD Gold certified for low chemical emissions in clean rooms",
        "Integrated cable grommets, power boxes, and seismic restraint options",
        "Turnkey supply, installation, leveling, and ongoing maintenance support",
      ],
      image: {
        src: "/about/pws-floors.jpg",
        alt: "PWS calcium sulphate raised access floor panel construction",
        fit: "cover",
      },
      badge: {
        title: "AUTHORIZED DEALER",
        subtitle: "PWS Floor Solutions",
      },
    },
    capabilities: {
      eyebrow: "Engineered Solutions",
      title: "Engineered for Every Critical Industrial & Technical Space",
      description:
        "High-performance modular flooring systems engineered for heavy structural loads, precision airflow, and rapid reconfiguration.",
      columns: 3,
      items: [
        {
          title: "Data Center Solutions",
          category: "Mission Critical",
          description:
            "High load capacity supporting heavy server racks, optimized underfloor airflow efficiency with perforated cooling panels, and electrostatic discharge protection.",
          iconName: "Server",
        },
        {
          title: "Control Room Systems",
          category: "Operations",
          description:
            "Vibration control providing a stable platform for operator consoles, organized underfloor cable management routing, and high fire-resistance standards.",
          iconName: "Factory",
        },
        {
          title: "Office & Technical Areas",
          category: "Commercial & Labs",
          description:
            "Flexible layouts for easy workspace reconfiguration, dust-free hygienic finishes for clean rooms and laboratories, and premium aesthetic options.",
          iconName: "Building2",
        },
        {
          title: "Pedestal & Substructure Systems",
          category: "Engineering",
          description:
            "Reinforced zinc-plated steel pedestals with vibration-damped gaskets and bolted stringer grid frameworks engineered for seismic stability and height adjustment.",
          iconName: "Layers",
        },
        {
          title: "Perforated Airflow Tiles",
          category: "Cooling",
          description:
            "Precision perforated steel tiles with adjustable airflow dampers (20% to 65% open area) engineered to deliver targeted cold-aisle air directly to high-density racks.",
          iconName: "Wind",
        },
        {
          title: "Cable Management & Service Boxes",
          category: "Plenum Access",
          description:
            "Integrated airtight brush grommets, pop-up floor electrical service boxes, and data raceway channels to keep plenums clean, organized, and pressure-balanced.",
          iconName: "Cable",
        },
      ],
    },
    specifications: {
      eyebrow: "Quality & Testing",
      title: "Construction Quality, Material Specs & Certifications",
      description:
        "Manufactured to international EN 12825, CISCA, and ASTM standards with full third-party test verification.",
      caption: "PWS Floor Solutions calcium sulphate panel technical specifications.",
      headers: {
        parameter: "Specification Parameter",
        value: "PWS Engineering Rating",
        notes: "Compliance Standard",
      },
      rows: [
        {
          parameter: "Panel Core Material",
          value: "High-density fiber-reinforced Calcium Sulphate",
          notes: "Density >= 1500 kg/m³; environmentally friendly",
        },
        {
          parameter: "Panel Encapsulation",
          value: "Galvanized Steel Top/Bottom / Aluminum Foil Backing",
          notes: "Full 6-sided encapsulation for moisture protection",
        },
        {
          parameter: "Concentrated Load Rating",
          value: "3,000 N to 6,000 N (Standard to Heavy-Duty)",
          notes: "Tested to EN 12825 Class 1 to Class 6 / CISCA",
        },
        {
          parameter: "Ultimate Failure Load",
          value: "Up to 12,000 N+ per panel",
          notes: "Safety factor >= 2.0; resistant to rolling loads",
        },
        {
          parameter: "Fire Safety Rating",
          value: "Class 0 / Non-Combustible (EN 13501-1 Class A1)",
          notes: "F30 to F60 minute fire barrier protection",
        },
        {
          parameter: "Electrical & Environmental",
          value: "Anti-Static (10^6 - 10^9 Ohms); GREENGUARD Gold",
          notes: "RoHS Compliant; IGBC Green Building Member",
        },
      ],
    },
    process: {
      eyebrow: "Delivery Process",
      title: "Our Turnkey Flooring Installation Process",
      description:
        "From load calculations and subfloor preparation to precision laser leveling and handover.",
      steps: [
        {
          stepNumber: 1,
          title: "Load & Layout Engineering",
          description:
            "We analyze equipment weights, console layouts, and HVAC airflow requirements to determine panel load classes, pedestal heights, and tile perforations.",
        },
        {
          stepNumber: 2,
          title: "Subfloor Preparation",
          description:
            "The structural slab is cleaned, sealed with anti-dust epoxy coatings, and laser-gridded for pedestal placement.",
        },
        {
          stepNumber: 3,
          title: "Substructure & Grid Assembly",
          description:
            "Adjustable steel pedestals are fixed with structural adhesive, interconnected with bolted stringers, and laser-leveled to within ±1mm across the room.",
        },
        {
          stepNumber: 4,
          title: "Panel Laying & Accessory Integration",
          description:
            "Panels are placed with tight seam alignment; airflow grilles, cable grommets, and edge ramps are installed with final bonding testing.",
        },
      ],
    },
    industriesServed: {
      eyebrow: "Critical Spaces",
      title: "Environments Engineered with PWS Raised Access Flooring",
      description:
        "Installed across high-density computing and continuous operations centers throughout the Middle East.",
      items: [
        {
          name: "Data Centers & Hyperscale Facilities",
          slug: "data-centers",
          description:
            "Tier III and Tier IV server halls requiring extreme point-load capacity and precision cold-aisle underfloor airflow.",
        },
        {
          name: "Oil & Gas Control Centers",
          slug: "control-rooms",
          description:
            "24/7 central control rooms, refinery dispatch hubs, and SCADA monitoring rooms housing heavy multi-screen consoles.",
        },
        {
          name: "Network Operations Centers (NOCs)",
          slug: "nocs",
          description:
            "Telecommunications NOCs and security operation centers requiring flexible cable trays and easy tile lifting for upgrades.",
        },
        {
          name: "Laboratories & Clean Rooms",
          slug: "clean-rooms",
          description:
            "Pharmaceutical and research clean rooms requiring GREENGUARD Gold certified low-VOC materials and dust-free surfaces.",
        },
        {
          name: "Power & Substations",
          slug: "substations",
          description:
            "Electrical control buildings and substation switchgear rooms with stringent grounding and fire barrier requirements.",
        },
        {
          name: "Trading Floors & High-End Offices",
          slug: "offices",
          description:
            "Financial institutions and enterprise headquarters needing underfloor power distribution and rapid workspace churn.",
        },
      ],
    },
    faq: [
      {
        q: "What is a raised access floor and where is it used?",
        a: "A raised access floor is a modular flooring system installed over a structural slab, creating a hidden plenum for cables, HVAC, and services. It is widely used in data centers, network operations centers (NOCs), control rooms, clean rooms, and modern offices where frequent reconfiguration, cable management, and underfloor cooling are required.",
      },
      {
        q: "What certifications does PWS Floor Solutions hold?",
        a: "PWS Floor Solutions panels are GREENGUARD Gold certified (low chemical emissions), RoHS compliant, manufactured to EN 12825 (European performance standard for raised floors), CISCA-recommended construction standards, and ASTM tested. PWS is also an IGBC member for green-building compliance.",
      },
      {
        q: "What is the load capacity of PWS raised floor panels?",
        a: "PWS panels are built around a high-density calcium sulphate core with steel or aluminum encapsulation, providing excellent load-bearing capacity for heavy server racks, control consoles, and industrial equipment. Standard panels are designed for typical data center loads, with reinforced variants available for ultra-heavy applications.",
      },
      {
        q: "Can raised flooring be installed in existing operational facilities?",
        a: "Yes. PWS raised access flooring is modular, allowing phased installation in live data centers and control rooms with minimal disruption. Panels can be individually lifted for cable changes, equipment moves, or maintenance — making it ideal for facilities that need to evolve over time.",
      },
      {
        q: "Do you supply and install PWS flooring in Kuwait and the GCC?",
        a: "Yes. As the authorized dealer for PWS Floor Solutions, Texas Technical Services supplies, installs, and supports raised access flooring projects across Kuwait, the UAE, Saudi Arabia, and the wider GCC. We also integrate flooring with our control room console and cable management offerings for a complete turnkey package.",
      },
    ],
    ctaBanner: {
      eyebrow: "Building a Data Center or Control Room?",
      title: "Request a Complete Turnkey Raised Flooring Package",
      description:
        "Get a turnkey PWS raised flooring package — including panels, pedestals, and ramp/step systems — designed for your specific load and airflow requirements.",
      primaryCta: { label: "Request a Quote", href: "/contacts/" },
      secondaryCta: {
        label: "Control Room Consoles",
        href: "/products/control-room-interior-and-console/",
      },
    },
    meta: {
      title: "PWS Floor Solutions — Raised Access Flooring Systems",
      description:
        "PWS Floor Solutions is India's most trusted raised access floor manufacturer — high-density calcium sulphate panels for data centers, control rooms, NOCs, labs, and clean rooms. GREENGUARD Gold, RoHS, EN 12825, CISCA certified.",
    },
    jsonLd: {
      serviceType: "Raised Access Flooring Solutions",
      description:
        "Premium raised access flooring systems for data centers, control rooms, NOCs, labs, and clean rooms. Calcium sulphate panels, anti-static, fire resistant, GREENGUARD Gold certified. Authorized dealer in Kuwait and the GCC.",
    },
  },
};
