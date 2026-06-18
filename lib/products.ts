export type Product = {
  slug: string;
  name: string;
  category: "Sensors" | "PLC" | "ICONICS" | "GOT" | "VFD" | "AC Servos";
  parentPath: string;
  image?: string;
  description?: string;
  keyApplications?: string[];
  keyBenefits?: string[];
  industries?: string[];
  externalLink?: string;
  downloadLink?: string | null;
  series?: string;
  variants?: string[];
};

export const products: Product[] = [
  // ── Industrial Sensors ────────────────────────────
  {
    slug: "radar-sensors",
    name: "Radar Sensors",
    category: "Sensors",
    parentPath: "/products/sensors/",
    image: "/images/sensors/Radar Sensors.png",
    description: "Radar sensors in the SICK portfolio are commonly used in ports and industrial mining sites to prevent collisions, especially in adverse weather conditions or polluted environments. They reliably detect objects within their range, regardless of harsh environmental conditions.",
    keyApplications: [
      "Collision prevention in ports and ship-to-shore cranes",
      "Distance measurement in gantry cranes and mobile systems",
      "Open pit excavators and dump trucks in mining",
      "Object detection in adverse weather and polluted environments",
      "Speed measurement of moving objects in industrial zones",
      "Large-scale industrial site perimeter monitoring"
    ],
    keyBenefits: [
      "Reliable detection regardless of harsh environmental conditions",
      "Capable of measuring object speed and distance simultaneously",
      "Rugged design for outdoor and industrial environments",
      "Performs in fog, dust, rain, and polluted conditions",
      "Wide detection range for large and mobile systems",
      "Proven in critical safety and collision prevention applications"
    ],
    industries: [
      "Ports and Logistics",
      "Mining and Quarrying",
      "Oil & Gas (Outdoor Facilities)",
      "Heavy Industry and Steel",
      "Infrastructure and Transportation"
    ],
    externalLink: "https://www.sick.com/ae/en/radar-sensors/c/g575803?q=:Def_Type:ProductFamily",
    downloadLink: "https://cdn.sick.com/media/docs/0/30/930/product_segment_overview_detection_and_ranging_solutions_2d_laser_scanners_3d_laser_scanners_radar_sensors_en_im0063930.pdf"
  },
  {
    slug: "photoelectric-sensors",
    name: "Photoelectric Sensors",
    category: "Sensors",
    parentPath: "/products/sensors/",
    image: "/images/sensors/Photoelectric Sensors.png",
    description: "SICK offers an extensive selection of photoelectric sensors that stand out with their precise optics and cutting-edge technology, resulting in market-leading solutions enriched with sensor intelligence.",
    keyApplications: [
      "Object detection on conveyor and production lines",
      "Presence and absence detection in packaging machines",
      "Part counting and sorting in manufacturing",
      "Label and mark detection in printing and labeling",
      "End-of-line inspection systems",
      "Automation applications across global industries"
    ],
    keyBenefits: [
      "Precise optics for reliable detection",
      "Latest SIRIC® and LED technologies for superior reliability",
      "Market-leading sensor intelligence features",
      "Exceptional operational reliability under interference",
      "Supplementary sensor data for modern production processes",
      "Wide product range for all automation needs"
    ],
    industries: [
      "Manufacturing and Factory Automation",
      "Packaging and Food & Beverage",
      "Logistics and Warehousing",
      "Printing and Labeling",
      "Oil & Gas and Process Industries"
    ],
    externalLink: "https://www.sick.com/ae/en/photoelectric-sensors/c/g172752?q=:Def_Type:Product",
    downloadLink: "https://cdn.sick.com/media/familyoverview/5/65/765/familyOverview_W12_g555765_en.pdf"
  },
  {
    slug: "safety-light-curtains",
    name: "Safety Light Curtains",
    category: "Sensors",
    parentPath: "/products/sensors/",
    image: "/images/sensors/4.-SAFETY-LIGHT-CURTAIN.png",
    description: "Safety light curtains offer dependable and budget-friendly access protection for hazardous points and areas. Depending on the specific variant, they can incorporate various machine functions or be customized through safe control solutions.",
    keyApplications: [
      "Point-of-operation guarding on presses and stamping machines",
      "Perimeter access protection for robotic work cells",
      "Safety guarding for automated assembly lines",
      "Machine tool and CNC equipment protection",
      "Conveyor and transfer system access control",
      "Packaging and palletizing machine safety"
    ],
    keyBenefits: [
      "Dependable and cost-effective access protection",
      "Compact and robust design variants available",
      "Customizable via safe control solutions",
      "Incorporates machine function integration options",
      "Suitable for diverse ambient and industrial conditions",
      "Certified to international safety standards"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Packaging and Material Handling",
      "Robotics and Industrial Automation",
      "Oil & Gas (Auxiliary Systems)"
    ],
    externalLink: "https://www.sick.com/ae/en/safety-light-curtains/c/g184853?q=:Def_Type:ProductFamily",
    downloadLink: "https://cdn.sick.com/media/docs/9/79/379/product_segment_overview_opto_electronic_protective_devices_en_im0069379.pdf"
  },
  {
    slug: "fiber-optic-sensors",
    name: "Fiber-Optic Sensors",
    category: "Sensors",
    parentPath: "/products/sensors/",
    image: "/images/sensors/FIBER-OPTICAL-SENSOR.png",
    description: "In cases of limited installation space or when detecting small objects, fiber-optic sensors present the optimal solution. The intelligent fusion of sensors and fiber-optic cables offers the perfect solution.",
    keyApplications: [
      "Small object detection in confined installation spaces",
      "High-temperature environment sensing applications",
      "Detection inside machine tools and tight enclosures",
      "Precise edge and position detection on small parts",
      "Color mark and contrast detection on small surfaces",
      "Detection on rotating or hard-to-reach machine parts"
    ],
    keyBenefits: [
      "Ideal for confined spaces with limited installation room",
      "Temperature-resistant fiber cables for hot environments",
      "Flexible mounting with remote sensor head placement",
      "Wide range of application-specific optical heads",
      "Extends capabilities of standard photoelectric sensors",
      "Durable and long-lasting fiber cable designs"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Electronics and Semiconductor",
      "Food & Beverage (High-Temperature Processes)",
      "Packaging and Printing"
    ],
    externalLink: "https://www.sick.com/ae/en/fiber-optic-sensors-and-fibers/c/g508551?q=:Def_Type:Product",
    downloadLink: "https://cdn.sick.com/media/docs/4/04/204/flyer_sick_fiber_optic_sensors_en_im0074204.pdf"
  },

  // ── PLC ───────────────────────────────────────────
  {
    slug: "melsec-iq-r",
    name: "MELSEC iQ-R Series",
    category: "PLC",
    parentPath: "/products/plc/",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    description: "The MELSEC iQ-R Series is Mitsubishi Electric's next-generation modular PLC platform designed for advanced and large-scale industrial automation. It delivers high-speed control while improving productivity, engineering efficiency, and system availability.",
    keyApplications: [
      "Oil & gas production facilities and gathering stations",
      "Refineries and petrochemical process units",
      "Tank farms, terminals, and pipeline systems",
      "Compressor, pump, and utility control systems",
      "Package units and skid-mounted systems",
      "Emergency shutdown (ESD) and interlock interface systems",
      "SCADA-based industrial plants and manufacturing facilities"
    ],
    keyBenefits: [
      "High-speed, deterministic control performance",
      "High-availability and reliable operation for critical processes",
      "Modular and scalable system architecture",
      "Multi-CPU capability for logic, process, and motion control",
      "Seamless integration with DCS, SCADA, MCCs, and field devices",
      "Reduced engineering, commissioning, and maintenance effort"
    ],
    industries: [
      "Oil & Gas (Upstream, Midstream, Downstream)",
      "Refineries and Petrochemical Industries",
      "Power Generation and Utilities",
      "Manufacturing Plants and Factories",
      "EPC Projects and System Integrators"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcr/items/index.html",
    downloadLink: "https://www.mitsubishielectric.com/dl/fa/document/catalog/plcr/l08298eng/l08298engz.pdf"
  },

  // ── ICONICS ───────────────────────────────────────
  {
    slug: "genesis64",
    name: "GENESIS64",
    category: "ICONICS",
    parentPath: "/products/iconics/",
    image: "/images/iconics/GENESIS64.webp",
    description: "GENESIS64 is a 64-bit, web-enabled SCADA and HMI software suite from ICONICS, designed for real-time visualization, monitoring, and control of industrial processes. Built on a modern, scalable architecture, GENESIS64 provides advanced analytics.",
    keyApplications: [
      "Oil & gas production facilities and refineries",
      "Power generation, water, and utility plants",
      "SCADA systems for pipelines and distribution networks",
      "Building automation and facility management (BMS)",
      "Manufacturing lines and process plant monitoring",
      "Infrastructure and smart city utility tracking"
    ],
    keyBenefits: [
      "64-bit multi-threaded performance for fast data handling",
      "Advanced 2D/3D graphics and geospatial OPC UA mapping",
      "Web-enabled thin client access for remote monitoring",
      "Flexible, open, and robust SCADA architecture",
      "Supports major industrial communication protocols",
      "Sophisticated historic archiving and analytics tools"
    ],
    industries: [
      "Oil & Gas and Petrochemical Plants",
      "Power Plants, Water Treatment, and Utilities",
      "Building Management and Infrastructure Systems",
      "Manufacturing Plants and Machinery Builders",
      "System Integrators and Automation Partners"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/hmi/sft/genesis64",
    downloadLink: null
  },

  // ── GOT ───────────────────────────────────────────
  {
    slug: "got2000series",
    name: "GOT2000 Series",
    category: "GOT",
    parentPath: "/products/got/",
    image: "/images/got/GOT2000-Series.png",
    description: "The GOT2000 Series is a high-performance graphic operation terminal (HMI) from Mitsubishi Electric, designed to enhance operability, visualization, and monitoring in industrial automation systems. It offers high-resolution displays, advanced graphics, and intuitive touch operation.",
    keyApplications: [
      "Operator panels for oil & gas facilities and refineries",
      "HMI for package units and skid-mounted systems",
      "Monitoring and control of utilities (power, water, air, fuel gas)",
      "Machine and process visualization in factories",
      "Local operator interface for PLC- and SCADA-based systems",
      "Control room panels and field operator stations"
    ],
    keyBenefits: [
      "High-resolution, wide-screen displays for clear visualization",
      "Fast and responsive touch operation",
      "Advanced graphics, alarms, and trend display",
      "Seamless connectivity with Mitsubishi PLCs (iQ-R, Q, FX Series)",
      "Supports multiple communication protocols",
      "Robust industrial design for harsh environments"
    ],
    industries: [
      "Electrical, Industrial, and Pump System Integrators",
      "HVAC, Crane, and Lift System Integrators",
      "Power, Water, and Wastewater Treatment Facilities",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing Plants and Factories"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/hmi/got/items/got2000/index.html",
    downloadLink: null,
    variants: [
      "GT27 Advanced",
      "GT25 Superior Performance Intermediate",
      "GT25/21 Wide",
      "GT21 Compact Series"
    ]
  },

  // ── Frequency Inverters (VFD) ──────────────────────
  {
    slug: "a741",
    name: "A741 Regenerative Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A741 Regenerative Inverter is a compact, high-performance frequency inverter designed for hoist drives and high-powered machines where motor torque is used for regenerative braking. It features a built-in regenerative converter that feeds braking energy back into the power supply.",
    keyApplications: [
      "Cranes, hoists, and lifting systems",
      "Elevators and vertical transport systems",
      "Winders and unwinders",
      "Overhauling conveyors and downhill loads",
      "Test benches and dynamometers",
      "Heavy machines with frequent braking cycles"
    ],
    keyBenefits: [
      "Built-in regenerative braking — feeds energy back to supply",
      "High-performance vector control for precise hoist operation",
      "Compact all-in-one design with no external braking resistor",
      "Reduced heat generation and energy loss",
      "Heavy-duty industrial reliability for continuous operation"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "Ports, Cranes, and Lifting System Operators",
      "Steel, Metal, and Rolling Mill Plants",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing and Test Facilities",
      "Heavy Industrial Plants"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra741",
    downloadLink: null
  },
  {
    slug: "fra800e",
    name: "FR-A800-E Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A800-E Series is Mitsubishi Electric's high-performance industrial inverter with built-in 100 Mbit Ethernet TCP/IP, enabling advanced remote monitoring, parameter adjustment, and seamless integration into modern networked control systems.",
    keyApplications: [
      "Cranes, hoists, and elevators",
      "Heavy conveyors and material handling systems",
      "Extruders, mixers, and crushers",
      "Winders, unwinders, and tension control systems",
      "Oil & gas process equipment and skids",
      "High-performance machine drives"
    ],
    keyBenefits: [
      "High-performance, servo-like motor control",
      "Stable low- and zero-speed operation",
      "Wide power range for light to heavy duty drives",
      "Built-in safety and protection functions",
      "Industrial network connectivity via 100 Mbit Ethernet TCP/IP"
    ],
    industries: [
      "Heavy Industrial Machine Builders",
      "Oil & Gas and Petrochemical Plants",
      "Electrical and Control Panel Integrators",
      "Steel, Cement, and Mining Industries",
      "Ports, Cranes, and Material Handling Systems",
      "Manufacturing and Process Plants"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    slug: "f846e",
    name: "F846-E Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F846-E2 is the IP55 stand-alone version of the proven FR-F800 series, designed for installation outside control panels in demanding industrial and HVAC environments. Its IP55 enclosure rating allows direct field mounting.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "IP55 enclosure for outdoor and field installation",
      "Stand-alone installation without control panel required",
      "High-efficiency vector control for pumps and fans",
      "Built-in energy-saving functions",
      "Wide power range for utility and industrial drives",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800/frf846e2",
    downloadLink: null
  },
  {
    slug: "f800e",
    name: "F800-E Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800-E Series is an energy-optimized pump and fan inverter with built-in Ethernet and BACnet/IP, designed for direct integration into HVAC, BMS, and utility networks. It delivers high-efficiency pump and fan control with seamless connectivity.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "High-efficiency vector control for pumps and fans",
      "Built-in Ethernet and BACnet/IP for BMS integration",
      "Wide power range for utility and industrial drives",
      "Energy-saving optimization functions",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800/frf800e",
    downloadLink: null
  },
  {
    slug: "frf800",
    name: "FR-F800 Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800 Series is Mitsubishi Electric's high-performance energy-saving inverter designed specifically for pump, fan, and HVAC applications. It combines advanced vector control, high efficiency, and built-in energy optimization.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "High-efficiency vector control for pumps and fans",
      "Built-in energy-saving functions",
      "Wide power range for utility and industrial drives",
      "Ethernet and fieldbus connectivity",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800",
    downloadLink: null
  },
  {
    slug: "e800sce",
    name: "E800-SCE Series (Ethernet Safety Communication)",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800-SCE Series is Mitsubishi Electric's advanced compact frequency inverter with Ethernet Safety Communication, designed for applications requiring both high-efficiency motor control and integrated functional safety.",
    keyApplications: [
      "Pumps for water supply, wastewater, and desalination systems",
      "HVAC fans, blowers, AHUs, and cooling towers",
      "Oil & gas utility skids and auxiliary pump systems",
      "Compressors and industrial ventilation systems",
      "Conveyors and material handling drives",
      "Safety-critical machinery and packaged industrial equipment"
    ],
    keyBenefits: [
      "High-performance vector control with stable high-speed operation",
      "Energy-saving pump and fan functions",
      "Compact, space-saving design",
      "Built-in Ethernet Safety Communication (Safety over EtherNet/IP)",
      "Integrated functional safety for SIL-rated applications"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & Building Management System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Auxiliary Systems",
      "OEM Machine Builders and Skid Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    slug: "cs80",
    name: "CS80 Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/CS80.webp",
    description: "The FR-CS80 Series is a compact and smart frequency inverter (VFD) from Mitsubishi Electric, offering general-purpose magnetic flux vector motor control in one of the industry's smallest compact bodies.",
    keyApplications: [
      "Speed control of pumps and compressors in oil & gas facilities",
      "Fan and blower motor control for utility systems",
      "Conveyor and material handling drives",
      "HVAC and industrial ventilation systems",
      "General machine and production equipment requiring motor speed control",
      "Local drive control on packaged and skid-mounted units"
    ],
    keyBenefits: [
      "Compact, low-heat, space-saving design",
      "General-purpose vector motor control",
      "Reduced wiring and faster installation",
      "Reliable continuous-duty operation",
      "Flexible expansion with Mitsubishi options",
      "Easy operation and maintenance"
    ],
    industries: [
      "Electrical, Industrial, and Pump System Integrators",
      "HVAC, Crane, and Lift System Integrators",
      "Power, Water, and Wastewater Treatment Facilities",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing Plants and Factories"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_cs",
    downloadLink: null
  },
  {
    slug: "frd700",
    name: "FR-D700 Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-E800.webp",
    description: "The FR-D700 Series from Mitsubishi Electric is a compact, general-purpose frequency inverter designed for simple, reliable, and cost-efficient motor speed control. Well suited for basic industrial drive applications.",
    keyApplications: [
      "Speed control of pumps, fans, and blowers",
      "Conveyor and material handling motor control",
      "Utility and auxiliary motor systems",
      "Basic machines and production equipment",
      "OEM packages and local drive panels"
    ],
    keyBenefits: [
      "Simple and easy setup and operation with built-in controls",
      "General-purpose control with V/F and magnetic flux vector options",
      "Compact and space-saving body for panel-mounted applications",
      "Reliable and stable motor control for continuous operation",
      "Supports wide application range with flexible settings",
      "Designed for easy maintenance and long service life"
    ],
    industries: [
      "Electrical, Pump, and Industrial System Integrators",
      "Industrial and Utility Auxiliary Systems",
      "Manufacturing Plants and Factories",
      "Power, Water, and Wastewater Treatment Utilities",
      "Oil & Gas Facilities (Auxiliary and Non-Critical Systems)"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/frd-series/frd700",
    downloadLink: null
  },
  {
    slug: "fre800",
    name: "FR-E800 Series",
    category: "VFD",
    parentPath: "/products/frequency-inverter-vfd/",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800 Series is Mitsubishi Electric's advanced compact frequency inverter designed for high-efficiency motor control in general-purpose, pump, and fan applications. It delivers vector control performance in a space-saving design.",
    keyApplications: [
      "Pumps for water supply, wastewater, and desalination systems",
      "HVAC fans, blowers, AHUs, and cooling towers",
      "Oil & gas utility skids and auxiliary pump systems",
      "Compressors and industrial ventilation systems",
      "Conveyors and material handling drives",
      "General machinery and packaged industrial equipment"
    ],
    keyBenefits: [
      "High-performance vector control with stable high-speed operation",
      "Energy-saving pump and fan functions",
      "Compact, space-saving design",
      "Built-in Ethernet connectivity",
      "Integrated safety and industrial reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & Building Management System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Auxiliary Systems",
      "OEM Machine Builders and Skid Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },

  // ── AC Servos ──────────────────────────────────────
  {
    slug: "melservo-jet-hg-sns-servo-motor",
    name: "MELSERVO-JET Series / HG-SNS Series Motors",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    series: "MELSERVO-JET Series",
    description: "The HG-SNS Series is Mitsubishi Electric's medium- to high-capacity AC servo motor range developed for EtherCAT-based MR-JET servo systems. It provides high torque, smooth speed control, and precise positioning, making it ideal for synchronized multi-axis industrial machines.",
    keyApplications: [
      "High-speed packaging and filling lines",
      "Synchronized conveyors and indexing systems",
      "Pick-and-place and assembly machines",
      "Printing, converting, and labeling equipment",
      "Cut-to-length and electronic cam machines",
      "OEM production and automation machinery"
    ],
    keyBenefits: [
      "High-torque servo motors optimized for MR-JET EtherCAT drives",
      "17-bit high-resolution encoder for precise positioning",
      "Power range from 500 W to 3 kW for medium-duty machine axes",
      "Brake, oil-sealed, and wedged shaft options for industrial environments",
      "Stable speed and torque for synchronized multi-axis operation"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Printing and Labeling Plants",
      "Automation System Integrators",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/rotary-servo-motor",
    downloadLink: null
  },
  {
    slug: "melservo-jet-hg-kns-servo-motor",
    name: "MELSERVO-JET Series / HG-KNS Series Motors",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    series: "MELSERVO-JET Series",
    description: "The HG-KNS Series is Mitsubishi Electric's compact, high-response AC servo motor range designed specifically for EtherCAT-based MR-JET servo systems. These motors deliver fast acceleration, smooth motion, and precise positioning, making them ideal for high-speed, multi-axis OEM machines.",
    keyApplications: [
      "High-speed packaging and labeling machines",
      "Pick-and-place and small robotics",
      "Indexing tables and rotary axes",
      "Synchronized conveyors",
      "Cut-to-length and electronic cam machines",
      "OEM automation and assembly equipment"
    ],
    keyBenefits: [
      "Optimized for MR-JET EtherCAT servo drives for synchronized motion",
      "High-speed operation (3000 rpm, high peak torque) for fast machine cycles",
      "High-resolution encoder for smooth and accurate positioning",
      "Brake, oil-sealed, and wedged shaft options for industrial environments",
      "Compact, low-inertia design for dynamic and precise motion"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Automation System Integrators",
      "Printing and Labeling Machinery",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/rotary-servo-motor",
    downloadLink: null
  },
  {
    slug: "melservo-jet-servo-drive",
    name: "MELSERVO-JET Series / MR-JET Series Servo Drive",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/mr_jet_lineup_1.webp",
    series: "MELSERVO-JET Series",
    description: "The MR-JET Series is Mitsubishi Electric's EtherCAT-based servo drive platform designed for high-speed, synchronized, multi-axis motion control in modern automation systems. It provides real-time networked motion, advanced control modes, and compact hardware, making it ideal for packaging lines, robotics, conveyors, and coordinated machine axes. MR-JET covers a power range of 100 W to 1 kW and supports EtherCAT, CC-Link IE Field Basic, and CC-Link IE Field TSN depending on model.",
    keyApplications: [
      "Multi-axis packaging and filling machines",
      "Pick-and-place and small robotics",
      "Synchronized conveyors and indexing systems",
      "Electronic cam and cut-to-length machines",
      "Assembly and inspection equipment",
      "OEM machines requiring real-time motion control"
    ],
    keyBenefits: [
      "EtherCAT and CC-Link IE Field TSN for real-time synchronized motion",
      "Advanced control modes: CSP, CSV, CST, CT and PTP",
      "High-speed, high-precision servo control for coordinated machine axes",
      "Compact servo amplifiers for space-saving control panels",
      "Supports HG-KNS and HG-SNS motors from 100 W up to 3 kW"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Automation System Integrators",
      "Printing and Labeling Machinery",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/servo-amplifier",
    downloadLink: null
  },
  {
    slug: "melservo-je-hg-sn-servo-motor",
    name: "MELSERVO-JE Series / HG-SN Series Motors",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    series: "MELSERVO-JE Series",
    description: "The HG-SN Series is Mitsubishi Electric's medium-capacity AC servo motor range designed for high-torque, high-accuracy motion control in industrial and OEM machinery. These motors are optimized for use with MR-JE servo amplifiers, delivering stable speed, strong torque, and precise positioning in a robust industrial design.",
    keyApplications: [
      "Packaging and material handling machines",
      "Indexing tables and rotary axes",
      "Printing, converting, and textile machinery",
      "Pick-and-place and assembly systems",
      "Light to medium industrial automation equipment",
      "OEM production and process machines"
    ],
    keyBenefits: [
      "High-torque AC servo motors for smooth and stable motion",
      "17-bit high-resolution encoder (131,072 pulses/rev) for precise positioning",
      "Power range from 500 W to 3 kW for medium-duty industrial drives",
      "Brake and brakeless versions for vertical and horizontal axes",
      "Oil-sealed and wedged shaft options for long service life"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Textile and Printing Plants",
      "Automation System Integrators",
      "General Industrial Machinery Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/rotary-servo-motor",
    downloadLink: "https://emea.mitsubishielectric.com/fa/get-asset?asset=https%3A%2F%2Feu-assets.contentstack.com%2Fv3%2Fassets%2Fblt5412ff9af9aef77f%2Fbltcf571e9202addd21%2F660e56710a59125ad21530cc%2Fl03086engh.pdf"
  },
  {
    slug: "melservo-je-hg-kn-servo-motor",
    name: "MELSERVO-JE Series / HG-KN Series Motors",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    series: "MELSERVO-JE Series",
    description: "The HG-KN Series is Mitsubishi Electric's compact AC servo motor range designed for high-response, precise motion control in small to medium-size machines. These motors are optimized for use with MR-JE and MR-J4 servo amplifiers, delivering smooth motion, high speed, and accurate positioning in a space-saving design.",
    keyApplications: [
      "Packaging and labeling machines",
      "Pick-and-place and small robotics",
      "Indexing tables and feeders",
      "Conveyors and material handling",
      "Printing and textile machines",
      "General OEM automation equipment"
    ],
    keyBenefits: [
      "Compact, high-speed AC servo motors for precise positioning",
      "High-resolution encoder for smooth and accurate control",
      "Wide speed range up to high RPM for dynamic machine operation",
      "Brake and brakeless options for vertical and horizontal axes",
      "Direct compatibility with MR-JE and MR-J4 servo drives"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Food Processing Plants",
      "Electronics and Assembly Lines",
      "Printing and Textile Industries",
      "Automation System Integrators",
      "Light Industrial Machinery Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/rotary-servo-motor",
    downloadLink: null
  },
  {
    slug: "melservo-je-servo-drive",
    name: "MELSERVO-JE Series / MR-JE Series Servo Drive",
    category: "AC Servos",
    parentPath: "/products/acservos/",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    series: "MELSERVO-JE Series",
    description: "The MR-JE Series is Mitsubishi Electric's compact and cost-effective AC servo drive platform designed for basic positioning, speed, and torque control in small to mid-size machines. It provides reliable servo performance in a simple, easy-to-integrate design, making it ideal for OEM equipment and light automation systems.",
    keyApplications: [
      "Indexing tables and feeders",
      "Packaging and labeling machines",
      "Conveyors and transfer systems",
      "Simple pick-and-place units",
      "Printing and textile machinery",
      "General OEM automation equipment"
    ],
    keyBenefits: [
      "Compact AC servo solution for simple motion and positioning tasks",
      "High-resolution encoder support for smooth and accurate control",
      "Easy setup and tuning using Mitsubishi MR Configurator software",
      "Ethernet and CC-Link IE Field Basic (MR-JE-C models) for PLC connectivity",
      "Cost-effective and reliable design for OEM and light industrial use"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Food Processing Plants",
      "Electronics and Light Manufacturing",
      "Printing and Textile Industries",
      "Automation System Integrators",
      "General Industrial Machinery"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/servo-amplifier",
    downloadLink: null
  }
];

export function getProductsByPath(parentPath: string): Product[] {
  return products.filter((p) => p.parentPath === parentPath);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
