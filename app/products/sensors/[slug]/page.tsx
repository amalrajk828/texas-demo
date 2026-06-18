import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

// Exact Sensors Data Array specified
const sensorsData = [
  {
    id: 1,
    name: "Radar Sensors",
    slug: "radar-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Radar Sensors.png",
    description: "The advantages of radar over other sensor technologies lie in its ruggedness. Radar sensors can reliably detect objects within their range, regardless of harsh environmental conditions, and can even analyze or provide the speed of the object. As a result, radar sensors in the SICK portfolio are commonly used in ports and industrial mining sites to prevent collisions, especially in adverse weather conditions or polluted environments. They are essential for collision prevention and distance measurement in large and mobile systems like gantry cranes, ship-to-shore cranes in ports, and booms of open pit excavators and dump trucks in the mining industry.",
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
    id: 2,
    name: "Photoelectric Sensors",
    slug: "photoelectric-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Photoelectric Sensors.png",
    description: "SICK offers an extensive selection of photoelectric sensors that stand out with their precise optics and cutting-edge technology, resulting in market-leading solutions enriched with sensor intelligence. With the incorporation of the latest SIRIC® and LED technologies, these sensors guarantee exceptional operational reliability, even in the presence of potential interference factors. Furthermore, the supplementary sensor information proves valuable in streamlining contemporary production processes. This comprehensive range of photoelectric sensors finds widespread usage in automation applications across the globe.",
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
    id: 3,
    name: "Safety Light-Beam Sensors",
    slug: "safety-light-beam-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/3.-SAFETY-LIGHT-BEAM-SENSORS.png",
    description: "Safety light-beam sensors provide reliable personnel and access protection for industrial machinery and hazardous zones. Designed to detect the interruption of a light beam between emitter and receiver, they trigger an immediate safety response when a person or object enters a protected area. Certified to international safety standards, these sensors are trusted in machine guarding and industrial safety applications worldwide.",
    keyApplications: [
      "Access protection for industrial machines and presses",
      "Hazardous area entry detection",
      "Safety interlocking for automated production lines",
      "Perimeter protection for robotic cells",
      "Door and gate monitoring on industrial equipment",
      "Conveyor and material handling safety systems"
    ],
    keyBenefits: [
      "Certified to international functional safety standards",
      "Reliable detection of personnel entering hazardous zones",
      "Simple installation with emitter-receiver alignment",
      "Long sensing range for wide machine guarding",
      "Robust design for industrial environments",
      "Fast response time for critical safety applications"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Packaging and Material Handling",
      "Oil & Gas (Auxiliary Systems)",
      "Robotics and Automation"
    ],
    externalLink: "https://www.sick.com/ae/en/safety-sensors/safety-light-beam-devices/c/g185033",
    downloadLink: null
  },
  {
    id: 4,
    name: "Safety Light Curtains",
    slug: "safety-light-curtains",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/4.-SAFETY-LIGHT-CURTAIN.png",
    description: "Safety light curtains offer dependable and budget-friendly access protection for hazardous points and areas. Depending on the specific variant, they can incorporate various machine functions or be customized through safe control solutions. The range encompasses both compact and robust designs, catering to diverse ambient conditions with exceptional durability.",
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
    id: 5,
    name: "Safety Distance Sensors",
    slug: "safety-distance-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/5.SAFETY-DISTANCE-SENSOR.png",
    description: "Safety distance sensors provide non-contact, reliable detection of personnel and objects in hazardous zones, triggering safety responses when the defined protection field is breached. Designed for integration into safety control systems, they offer certified protection for industrial machinery and automated equipment without the need for physical guards.",
    keyApplications: [
      "Non-contact safety guarding for industrial machines",
      "Hazardous zone monitoring around automated equipment",
      "Presence detection at machine access points",
      "Safety interlock systems on production lines",
      "Collaborative robot (cobot) safety applications",
      "Mobile platform and AGV protection zones"
    ],
    keyBenefits: [
      "Non-contact detection for flexible machine guarding",
      "Certified functional safety performance",
      "No physical guard structure required",
      "Reliable operation in industrial environments",
      "Fast response for critical safety applications",
      "Easy integration into existing safety control systems"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Robotics and Collaborative Automation",
      "Packaging and Material Handling",
      "Oil & Gas (Auxiliary Systems)"
    ],
    externalLink: "https://www.sick.com/ae/en/safety-sensors/c/g185027",
    downloadLink: null
  },
  {
    id: 6,
    name: "Safety Laser Scanners",
    slug: "safety-laser-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/6.SAFETY-LASER-SENSOR.png",
    description: "Safety laser scanners from SICK provide 2D area monitoring for personnel protection, access guarding, and mobile robot navigation. Using laser technology, they scan a defined protection zone and trigger a safety response when a person or object is detected within the field. Certified to IEC 61496 and ISO 13849, they are trusted globally for machine and vehicle safety.",
    keyApplications: [
      "Personnel protection around industrial machinery",
      "AGV and mobile robot navigation safety zones",
      "Area monitoring for robotic cells and work stations",
      "Access guarding at conveyor entry and exit points",
      "Forklift and vehicle protection in warehouses",
      "Perimeter protection for large industrial equipment"
    ],
    keyBenefits: [
      "2D area monitoring with configurable protection fields",
      "Certified to IEC 61496 and ISO 13849 safety standards",
      "Suitable for stationary and mobile safety applications",
      "Multiple simultaneous protection and warning fields",
      "Compact design for easy machine integration",
      "Reliable performance in industrial environments"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Warehousing and Logistics",
      "Robotics and Automated Guided Vehicles",
      "Oil & Gas (Auxiliary Systems)"
    ],
    externalLink: "https://www.sick.com/ae/en/safety-laser-scanners/c/g184794",
    downloadLink: null
  },
  {
    id: 7,
    name: "Safety Camera Sensors",
    slug: "safety-camera-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/7.-SAFETY-SENSOR-CAMERA.png",
    description: "Safety camera sensors from SICK use vision-based technology to monitor defined safety zones and detect the presence of personnel or objects. They provide intelligent area protection with high-resolution imaging, enabling flexible and configurable safety applications. Certified to international safety standards, they are suited for complex machine guarding scenarios.",
    keyApplications: [
      "Intelligent area monitoring for complex machine layouts",
      "Personnel detection in collaborative robot work cells",
      "Configurable safety zones for flexible manufacturing",
      "Access control monitoring at machine entry points",
      "Vision-based presence detection for automated systems",
      "Safety monitoring for moving and rotating equipment"
    ],
    keyBenefits: [
      "Vision-based technology for intelligent area monitoring",
      "High-resolution imaging for accurate personnel detection",
      "Flexible and configurable protection zones",
      "Certified functional safety performance",
      "Suitable for complex guarding scenarios",
      "Reduces need for multiple separate safety devices"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Robotics and Collaborative Automation",
      "Packaging and Material Handling",
      "Oil & Gas (Auxiliary Systems)"
    ],
    externalLink: "https://www.sick.com/ae/en/safety-camera-systems/c/g305775",
    downloadLink: null
  },
  {
    id: 8,
    name: "RFID",
    slug: "rfid",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/8.RFID_.png",
    description: "SICK RFID systems provide reliable identification, tracking, and data management for industrial automation and logistics applications. Operating across HF and UHF frequency ranges, SICK RFID readers and tags enable contactless data capture at high speeds and over varying distances. They integrate seamlessly into production lines, conveyor systems, and warehouse management applications.",
    keyApplications: [
      "Work-in-progress tracking on production lines",
      "Tool and asset identification in manufacturing",
      "Pallet and container tracking in logistics and warehouses",
      "Automated sorting and routing on conveyors",
      "Maintenance and service record management",
      "Access control and personnel identification systems"
    ],
    keyBenefits: [
      "Contactless data capture at high speed",
      "HF and UHF frequency options for varied applications",
      "Reliable performance in harsh industrial conditions",
      "High read rates and long read distances (UHF)",
      "Seamless integration with PLC, SCADA, and WMS systems",
      "Compact reader and antenna designs for easy installation"
    ],
    industries: [
      "Manufacturing and Factory Automation",
      "Logistics and Warehousing",
      "Automotive and Assembly",
      "Oil & Gas (Asset Tracking)",
      "Food & Beverage and Pharmaceuticals"
    ],
    externalLink: "https://www.sick.com/ae/en/rfid-systems/c/g301836",
    downloadLink: null
  },
  {
    id: 9,
    name: "Non-Contact Motion Sensors",
    slug: "non-contact-motion-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/Non-Contact Motion.png",
    description: "Non-contact motion sensors from SICK provide wear-free, precise measurement of speed, distance, and position without physical contact with the moving object. Using technologies such as laser Doppler, ultrasonic, or inductive sensing, they deliver reliable measurements on conveyors, drives, and web-handling systems, even in dirty or demanding industrial environments.",
    keyApplications: [
      "Speed and length measurement on conveyors and webs",
      "Position detection on moving machinery and drives",
      "Slip detection on conveyor belts and rollers",
      "Length measurement of cut materials on production lines",
      "Non-contact speed control feedback for drives",
      "Distance measurement on mobile industrial equipment"
    ],
    keyBenefits: [
      "Wear-free operation with no physical contact required",
      "Accurate speed, distance, and position measurement",
      "Reliable in dirty, wet, and harsh environments",
      "No mechanical wear or maintenance on the sensor",
      "Fast response for dynamic motion applications",
      "Compatible with standard industrial interfaces"
    ],
    industries: [
      "Manufacturing and Printing",
      "Logistics and Conveyor Systems",
      "Steel and Metal Processing",
      "Paper and Packaging",
      "Oil & Gas (Drive and Conveyor Systems)"
    ],
    externalLink: "https://www.sick.com/ae/en/distance-sensors/c/g102363",
    downloadLink: null
  },
  {
    id: 10,
    name: "Motor Feedback Systems",
    slug: "motor-feedback-systems",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/10.-MOTION-FEEDBACK-SENSOR.png",
    description: "Motor feedback systems from SICK provide high-resolution position and speed data directly from the motor shaft to the servo drive. Supporting standard interfaces such as HIPERFACE®, HIPERFACE DSL®, and EnDat, these systems enable precise closed-loop motion control for servo and torque motors. They are designed for demanding applications requiring high accuracy, dynamic response, and reliable operation.",
    keyApplications: [
      "Closed-loop control for servo and torque motors",
      "Precision positioning in CNC and machine tool axes",
      "Motion control in robotic arms and automation systems",
      "Speed and position feedback for drive systems",
      "High-dynamic applications requiring fast response",
      "Motor integration in packaging and assembly machines"
    ],
    keyBenefits: [
      "High-resolution position and speed feedback",
      "Supports HIPERFACE®, HIPERFACE DSL®, and EnDat interfaces",
      "Enables precise closed-loop servo motion control",
      "Compact design for direct motor shaft integration",
      "Reliable operation in high-dynamic drive applications",
      "Reduces cabling with single-cable technology (DSL)"
    ],
    industries: [
      "Machine Building and CNC",
      "Robotics and Automation",
      "Packaging and Assembly",
      "Printing and Converting",
      "Manufacturing and Drive Systems"
    ],
    externalLink: "https://www.sick.com/ae/en/motor-feedback-systems/c/g192782",
    downloadLink: null
  },
  {
    id: 11,
    name: "Mobile Handheld Scanners",
    slug: "mobile-handheld-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/11.MOBILE-HANDHELD-SCANNER.png",
    description: "SICK mobile handheld scanners are rugged, portable barcode and data matrix readers designed for industrial warehouse, logistics, and production environments. With ergonomic designs and wireless connectivity options, they enable flexible data capture for inventory management, goods receiving, order picking, and traceability applications.",
    keyApplications: [
      "Goods receiving and inventory management in warehouses",
      "Order picking and dispatch verification",
      "Production traceability and work-in-progress tracking",
      "Asset and equipment identification",
      "Returns processing and stock counting",
      "Field service and maintenance data capture"
    ],
    keyBenefits: [
      "Rugged design for industrial and warehouse environments",
      "Reads 1D, 2D, and data matrix codes reliably",
      "Wireless connectivity for flexible operation",
      "Ergonomic design for comfortable extended use",
      "Fast scan rates for high-throughput applications",
      "Easy integration with WMS and ERP systems"
    ],
    industries: [
      "Logistics and Warehousing",
      "Manufacturing and Production",
      "Retail and Distribution",
      "Oil & Gas (Asset Management)",
      "Food & Beverage and Pharmaceuticals"
    ],
    externalLink: "https://www.sick.com/ae/en/barcode-readers/mobile-barcode-scanners/c/g299513",
    downloadLink: null
  },
  {
    id: 12,
    name: "Magnetic Sensors",
    slug: "magnetic-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/12.MAGNETIC-SENSOR.png",
    description: "SICK magnetic sensors detect the position of the piston inside pneumatic and hydraulic cylinders without direct contact. Available in T-slot and band mounting configurations, they are compact, reliable, and easy to install on standard cylinder profiles. Their robust design ensures long service life in demanding industrial automation environments.",
    keyApplications: [
      "Pneumatic cylinder piston position detection",
      "Hydraulic actuator end-position sensing",
      "Automated assembly and handling machines",
      "Clamping and gripping system feedback",
      "Conveyor and material handling equipment",
      "General industrial machine position control"
    ],
    keyBenefits: [
      "Non-contact, wear-free piston position detection",
      "T-slot and band mounting for standard cylinders",
      "Compact design for space-constrained installations",
      "Long service life in industrial environments",
      "Available in NPN, PNP, and reed contact outputs",
      "Easy installation and replacement"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Packaging and Material Handling",
      "Pneumatics and Fluid Power",
      "General Industrial Automation"
    ],
    externalLink: "https://www.sick.com/ae/en/magnetic-sensors/c/g183641",
    downloadLink: null
  },
  {
    id: 13,
    name: "Inductive Proximity Sensors",
    slug: "inductive-proximity-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/INDUCTIVE-SAFETY-SWITCH.png",
    description: "SICK inductive proximity sensors provide reliable non-contact detection of metallic objects in industrial automation applications. Available in a wide range of housing sizes, sensing ranges, and output configurations, they are designed for robust performance in harsh industrial environments, including high-temperature, high-pressure, and chemically aggressive conditions.",
    keyApplications: [
      "Metal part presence and position detection",
      "End-of-stroke detection on cylinders and actuators",
      "Gear tooth and cam speed sensing",
      "Part counting on production and conveyor lines",
      "Tool and workpiece detection in CNC machines",
      "Level detection in metal tanks and hoppers"
    ],
    keyBenefits: [
      "Reliable non-contact detection of metallic objects",
      "Wide range of housing sizes and sensing distances",
      "Flush and non-flush mounting options available",
      "Robust performance in harsh industrial conditions",
      "High switching frequency for dynamic applications",
      "Long service life with no mechanical wear"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Oil & Gas and Process Industries",
      "Packaging and Material Handling",
      "Steel and Metal Processing"
    ],
    externalLink: "https://www.sick.com/ae/en/inductive-proximity-sensors/c/g183656",
    downloadLink: null
  },
  {
    id: 14,
    name: "Image-Based Code Readers",
    slug: "image-based-code-readers",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/IMAGE-BASED-CODE-READER.png",
    description: "SICK image-based code readers use camera technology to reliably read 1D barcodes, 2D codes, QR codes, and data matrix codes at high speeds on production and logistics lines. With integrated illumination and decoding intelligence, they provide robust reading performance even on damaged, poorly printed, or direct part-marked codes.",
    keyApplications: [
      "High-speed barcode and 2D code reading on conveyor lines",
      "Direct part marking (DPM) reading on metal and plastic parts",
      "Traceability and serialization in manufacturing",
      "Pharmaceutical and medical device label verification",
      "Parcel and postal sorting in logistics",
      "Quality control and print verification systems"
    ],
    keyBenefits: [
      "Reads 1D, 2D, QR, and data matrix codes reliably",
      "High-speed decoding for fast production lines",
      "Reads damaged, poorly printed, and DPM codes",
      "Integrated illumination for consistent read performance",
      "Compact design for easy line integration",
      "Simple setup and configuration tools"
    ],
    industries: [
      "Manufacturing and Traceability",
      "Pharmaceuticals and Medical Devices",
      "Logistics and Postal Sorting",
      "Food & Beverage",
      "Automotive and Electronics"
    ],
    externalLink: "https://www.sick.com/ae/en/image-based-code-readers/c/g250853",
    downloadLink: null
  },
  {
    id: 15,
    name: "Glare Sensors",
    slug: "glare-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/GLARE-SENSOR.png",
    description: "SICK glare sensors are specialized photoelectric sensors designed for reliable detection of shiny, reflective, and transparent materials where standard sensors may struggle. Using polarized light technology, they suppress unwanted reflections and provide stable switching signals on highly reflective surfaces such as glass, foil, and polished metals.",
    keyApplications: [
      "Detection of glass bottles, jars, and containers",
      "Foil and transparent film detection on packaging lines",
      "Polished metal part presence detection",
      "Label presence detection on reflective surfaces",
      "Clear and transparent object detection",
      "High-gloss surface detection in automotive manufacturing"
    ],
    keyBenefits: [
      "Reliable detection of reflective and transparent materials",
      "Polarized light technology suppresses unwanted reflections",
      "Stable switching signal on challenging surfaces",
      "Suitable where standard photoelectric sensors fail",
      "Compact design for easy machine integration",
      "Wide range of housing and connection options"
    ],
    industries: [
      "Packaging and Food & Beverage",
      "Glass and Plastics Manufacturing",
      "Automotive and Assembly",
      "Printing and Labeling",
      "Cosmetics and Pharmaceuticals"
    ],
    externalLink: "https://www.sick.com/ae/en/photoelectric-sensors/c/g172752",
    downloadLink: null
  },
  {
    id: 16,
    name: "Fork Sensors",
    slug: "fork-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/FORK-TYPE-SENSOR.png",
    description: "SICK fork sensors (also known as slotted optical sensors or fork light barriers) integrate the emitter and receiver into a single U-shaped housing, eliminating the need for alignment during installation. They provide reliable detection of small parts, labels, edges, and registration marks on high-speed conveyor, packaging, and printing lines.",
    keyApplications: [
      "Label and mark detection on packaging machines",
      "Edge detection and registration on printing lines",
      "Small part detection on conveyor and assembly lines",
      "Thread and wire breakage detection in textile machines",
      "Tab and slot detection on high-speed machines",
      "Fill level detection in transparent containers"
    ],
    keyBenefits: [
      "Integrated emitter and receiver — no alignment needed",
      "Reliable detection of small parts and thin materials",
      "High switching frequency for fast production lines",
      "Compact U-shaped design for easy integration",
      "Available in various slot widths for different applications",
      "Robust design for continuous industrial operation"
    ],
    industries: [
      "Packaging and Printing",
      "Food & Beverage",
      "Textile and Converting",
      "Electronics and Assembly",
      "Manufacturing and Automation"
    ],
    externalLink: "https://www.sick.com/ae/en/fork-sensors/c/g183672",
    downloadLink: null
  },
  {
    id: 17,
    name: "Fixed Mount Barcode Scanners",
    slug: "fixed-mount-barcode-scanners",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/BARCODE-SCANNER.png",
    description: "SICK fixed mount barcode scanners are designed for automated, high-throughput identification of 1D barcodes on production, logistics, and conveyor lines. With laser and LED scanning technologies, they deliver fast and reliable read performance at varying distances and speeds, integrating seamlessly into automated sorting, routing, and traceability systems.",
    keyApplications: [
      "Automated barcode reading on conveyor sorting lines",
      "Parcel and pallet identification in logistics centers",
      "Production line part tracking and traceability",
      "Automated storage and retrieval systems (AS/RS)",
      "Baggage handling and airport logistics",
      "Distribution center and goods routing applications"
    ],
    keyBenefits: [
      "High read rates for fast-moving conveyor lines",
      "Reliable 1D barcode reading at varying distances",
      "Laser and LED scanning technology options",
      "Compact design for conveyor line integration",
      "Flexible mounting positions and angles",
      "Easy integration with PLC and WMS systems"
    ],
    industries: [
      "Logistics and Warehousing",
      "Manufacturing and Production",
      "Postal and Courier Services",
      "Food & Beverage Distribution",
      "Airports and Transportation"
    ],
    externalLink: "https://www.sick.com/ae/en/barcode-readers/stationary-barcode-scanners/c/g172775",
    downloadLink: null
  },
  {
    id: 18,
    name: "Fiber-Optic Sensors and Fibers",
    slug: "fiber-optic-sensors-and-fibers",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/FIBER-OPTICAL-SENSOR.png",
    description: "In cases of limited installation space or when detecting small objects, fiber-optic sensors present the optimal solution. For more demanding requirements, such as extended sensing range, temperature resistance, material durability, or flexible mounting, the intelligent fusion of sensors and fiber-optic cables offers the perfect solution. With a variety of fiber-optic cables featuring application-specific optical heads, SICK ensures that all needs are catered to.",
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
  {
    id: 19,
    name: "Encoders",
    slug: "encoders",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/ENCODER-SENSOR.png",
    description: "SICK encoders provide precise measurement of angular position, rotational speed, and linear displacement in industrial drive and automation systems. Available as incremental and absolute variants, with solid shaft and hollow shaft designs, SICK encoders are engineered for reliable performance in harsh conditions including high vibration, temperature extremes, and demanding industrial environments.",
    keyApplications: [
      "Angular position and speed feedback on motors and drives",
      "Conveyor belt speed and length measurement",
      "Crane and hoist position monitoring",
      "CNC and machine tool axis position feedback",
      "Printing and converting web tension control",
      "Elevator and material handling positioning systems"
    ],
    keyBenefits: [
      "High-resolution incremental and absolute position data",
      "Solid shaft and hollow shaft mounting options",
      "Robust design for high vibration and shock environments",
      "Wide temperature range for extreme environments",
      "Standard interfaces: TTL, HTL, SSI, CANopen, PROFIBUS",
      "Long service life for continuous industrial operation"
    ],
    industries: [
      "Manufacturing and Drive Systems",
      "Cranes and Material Handling",
      "Printing and Converting",
      "Oil & Gas (Drive and Pump Systems)",
      "Elevators and Transportation"
    ],
    externalLink: "https://www.sick.com/ae/en/encoders/c/g183695",
    downloadLink: null
  },
  {
    id: 20,
    name: "Distance Sensors",
    slug: "distance-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/DISTANCE-SENSOR1.png",
    description: "SICK distance sensors provide precise, non-contact measurement of distance, position, and displacement in industrial automation applications. Using laser, ultrasonic, or time-of-flight technologies, they deliver reliable measurements across a wide range of distances and target surfaces, from millimeter-precise positioning to long-range detection in logistics and cranes.",
    keyApplications: [
      "Precise positioning of machine axes and actuators",
      "Level measurement in tanks, silos, and hoppers",
      "Height detection and profile measurement",
      "Gap and step measurement on production lines",
      "Crane positioning and anti-collision systems",
      "Robot and AGV distance and obstacle sensing"
    ],
    keyBenefits: [
      "Non-contact measurement for wear-free operation",
      "Laser, ultrasonic, and time-of-flight technologies available",
      "Millimeter-level precision for demanding applications",
      "Wide measurement range from mm to hundreds of meters",
      "Reliable performance on various target surfaces",
      "Compact and easy to integrate into machines"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Logistics and Warehousing",
      "Cranes and Material Handling",
      "Oil & Gas (Tank and Level Measurement)",
      "Robotics and Automation"
    ],
    externalLink: "https://www.sick.com/ae/en/distance-sensors/c/g102363",
    downloadLink: null
  },
  {
    id: 21,
    name: "Cylinder Sensors",
    slug: "cylinder-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/CYLINDER-SENSOR.png",
    description: "SICK cylinder sensors detect the end positions of pneumatic cylinder pistons, providing reliable feedback for machine and process control systems. Available in T-slot, C-slot, and band mounting versions to fit standard cylinder profiles, they are compact, easy to install, and designed for long service life in continuous industrial automation environments.",
    keyApplications: [
      "End-position detection on pneumatic cylinders",
      "Piston position feedback for automated handling machines",
      "Clamping and gripping system position control",
      "Conveyor and material handling actuator feedback",
      "Assembly machine cylinder position monitoring",
      "General industrial pneumatic system control"
    ],
    keyBenefits: [
      "Reliable piston end-position detection",
      "T-slot, C-slot, and band mounting options",
      "Compact design for standard cylinder profiles",
      "Easy and fast installation and replacement",
      "Long service life in continuous operation",
      "Available in reed, GMR, and Hall-effect technologies"
    ],
    industries: [
      "Manufacturing and Machine Building",
      "Automotive and Assembly",
      "Packaging and Material Handling",
      "Pneumatics and Fluid Power",
      "General Industrial Automation"
    ],
    externalLink: "https://www.sick.com/ae/en/magnetic-sensors/c/g183641",
    downloadLink: null
  },
  {
    id: 22,
    name: "Contrast Sensors",
    slug: "contrast-sensors",
    tag: "SICK Industrial Sensors",
    image: "/images/sensors/CONTRAST-SENSOR.png",
    description: "SICK contrast sensors detect differences in brightness and color on printed marks, registration marks, and labels at high speeds. Using RGB LED or white light technology, they provide reliable switching signals on a wide variety of print and packaging materials, making them essential for registration control, label detection, and print mark sensing in high-speed production.",
    keyApplications: [
      "Registration mark detection on printing and packaging lines",
      "Label gap and splice detection on labeling machines",
      "Print mark sensing for cutting and folding registration",
      "Color mark detection on flexible packaging films",
      "Web guiding and edge control systems",
      "Position control on converting and slitting machines"
    ],
    keyBenefits: [
      "Reliable contrast and color mark detection at high speeds",
      "RGB LED and white light technology options",
      "Teaches quickly to marks and backgrounds",
      "Stable detection on various print and packaging materials",
      "High switching frequency for fast production lines",
      "Compact design for tight machine installations"
    ],
    industries: [
      "Printing and Converting",
      "Packaging and Labeling",
      "Food & Beverage",
      "Pharmaceutical and Cosmetics",
      "Flexible Packaging and Films"
    ],
    externalLink: "https://www.sick.com/ae/en/contrast-sensors/c/g183685",
    downloadLink: null
  }
];

// Statically pre-render routes at build time
export async function generateStaticParams() {
  return sensorsData.map((s) => ({
    slug: s.slug,
  }));
}

// Generate page metadata dynamically
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const sensor = sensorsData.find((s) => s.slug === slug);
  if (!sensor) return {};

  return {
    title: sensor.name,
    description: sensor.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/sensors/${sensor.slug}/` },
    openGraph: {
      title: `${sensor.name} | SICK Industrial Sensors`,
      description: sensor.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/sensors/${sensor.slug}/`,
    },
  };
}

export default async function SensorsDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const sensor = sensorsData.find((s) => s.slug === slug);
  if (!sensor) {
    notFound();
  }

  // Cast array objects for ProductCard capability compatibility
  const genericProducts: Product[] = sensorsData.map((s) => ({
    id: s.id,
    name: s.name,
    slug: s.slug,
    tag: s.tag,
    image: s.image,
    description: s.description,
  }));

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* 1. Hero Section */}
      <ProductDetailHero
        product={sensor as ProductDetail}
        category="sensors"
        categoryLabel="Industrial Sensors"
      />

      {/* 2. Description Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-10">
          <p className="text-[#555770] text-base sm:text-[16px] leading-[1.8] text-justify font-normal">
            {sensor.description}
          </p>
        </div>
      </section>

      {/* 3. Three Column Info Section */}
      <ProductInfoColumns
        keyApplications={sensor.keyApplications}
        keyBenefits={sensor.keyBenefits}
        industries={sensor.industries}
      />

      {/* 4. Action Buttons Row */}
      <section className="bg-white py-8 border-b border-[#E8E8F0] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 items-center justify-center">
          <a
            href={sensor.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-[#F5821F] text-[#F5821F] hover:bg-[#F5821F] hover:text-white font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm"
          >
            For More Detail
          </a>
          {sensor.downloadLink && (
            <a
              href={sensor.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F5821F] text-white hover:bg-[#e07214] font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm shadow-md"
            >
              Download Datasheet
            </a>
          )}
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <ProductInquiryForm productName={sensor.name} category="Industrial Sensors" />

      {/* 6. Related Products */}
      <RelatedProducts
        currentSlug={sensor.slug}
        products={genericProducts}
        category="sensors"
        title="Other Sensors"
      />
    </div>
  );
}
