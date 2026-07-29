export type ServiceFaqItem = { q: string; a: string };

export const serviceFaqData: Record<string, ServiceFaqItem[]> = {
  "plant-automation": [
    {
      q: "What is process plant automation?",
      a: "Process plant automation involves using control systems — such as PLCs, DCS, and SCADA — to monitor and operate industrial processes with minimal human intervention. It improves efficiency, safety, and consistency across oil & gas, petrochemical, and manufacturing plants in Kuwait and the GCC.",
    },
    {
      q: "Which automation brands do you work with?",
      a: "We work with Siemens, Allen-Bradley (Rockwell), Schneider Electric, ABB, and Honeywell systems. Our engineers are trained on multiple platforms and can design, programme, and commission automation solutions using the brand that best fits your plant's requirements.",
    },
    {
      q: "How does plant automation improve safety?",
      a: "Automated safety systems can detect abnormal conditions — such as over-temperature, over-pressure, or gas leaks — and trigger emergency shutdowns faster than any human operator. Safety Instrumented Systems (SIS) designed and commissioned by TTS help protect personnel, assets, and the environment in Kuwait's industrial facilities.",
    },
    {
      q: "Can you upgrade existing legacy automation systems?",
      a: "Yes. We specialise in modernising outdated control systems — migrating from obsolete PLCs or legacy DCS platforms to current-generation hardware and software while maintaining process continuity. This reduces unplanned downtime and extends the operational life of your plant.",
    },
  ],

  "steel-fabrication": [
    {
      q: "What steel fabrication services do you offer in Kuwait?",
      a: "We provide cutting, bending, welding, and assembling of raw steel into finished structures including skids, pipework, structural components, and custom-fabricated assemblies for industrial applications across Kuwait and the GCC.",
    },
    {
      q: "What materials can you fabricate?",
      a: "We fabricate carbon steel, stainless steel, and alloy steel components. Our facility handles a wide range of grades and specifications to meet the demands of oil & gas, petrochemical, and construction projects in the region.",
    },
    {
      q: "Do your steel fabrication services comply with industry standards?",
      a: "All fabrication work is carried out to recognised international standards including ASME, AWS, and API codes. Our quality management system ensures every component meets the structural and dimensional requirements specified by the client.",
    },
    {
      q: "Can you handle large-scale industrial fabrication projects?",
      a: "Yes. We have the capacity and experienced workforce to manage large-scale fabrication projects — from initial design and material procurement through to final assembly and delivery — serving major industrial clients in Kuwait and Dubai.",
    },
  ],

  "metallurgical-services-2": [
    {
      q: "What is Positive Material Identification (PMI)?",
      a: "PMI is a non-destructive testing method that uses XRF (X-ray Fluorescence) or OES (Optical Emission Spectrometry) to verify the chemical composition of metals and alloys. It confirms that the material used matches the specified grade, preventing costly mix-ups in oil & gas and petrochemical facilities across Kuwait.",
    },
    {
      q: "When is PMI testing required?",
      a: "PMI is typically required during receiving inspection of incoming materials, during fabrication to verify weld consumables, for fitness-for-service assessments on existing equipment, and as part of API 578 compliance programmes in refineries and processing plants.",
    },
    {
      q: "What standards govern PMI testing?",
      a: "PMI testing is governed by API 578 (Material Verification Program for New Alloy Plant Equipment), ASTM E1476 for XRF analysis, and various client specifications. Our technicians follow these standards to deliver traceable, auditable results in Kuwait and Dubai.",
    },
    {
      q: "Can PMI detect alloy grade mix-ups?",
      a: "Yes. PMI is highly effective at detecting material mix-ups — for example, distinguishing 316 stainless steel from 304, or identifying carbon steel where stainless was specified. This is critical for preventing in-service failures in aggressive process environments across the GCC.",
    },
  ],

  "torque-tightening-bolt-tensioning-2": [
    {
      q: "What is bolt tensioning versus torque tightening?",
      a: "Bolt tensioning uses hydraulic load to stretch the bolt directly to the required preload, while torque tightening applies rotational force via calibrated wrenches. Bolt tensioning delivers more consistent and accurate preload, which is especially important for high-pressure flange connections in Kuwait's oil & gas sector.",
    },
    {
      q: "What standards govern your bolt tightening services?",
      a: "Our services comply with ASME PCC-1 (Guidelines for Pressure Boundary Bolted Flange Joint Assembly), EN 1591 (Flanges and Their Joints), and API 6A requirements. We use calibrated hydraulic tools and electronic torque sensors to verify every connection.",
    },
    {
      q: "Do you provide on-site bolt tensioning in Kuwait?",
      a: "Yes. Our certified technicians mobilise to client sites across Kuwait and the GCC with fully equipped service vehicles carrying hydraulic torque wrenches, bolt tensioners, and digital torque measurement equipment for shutdowns, turnarounds, and emergency call-outs.",
    },
    {
      q: "Why is accurate bolt preload important?",
      a: "Incorrect bolt preload is a leading cause of flange joint failures, which can result in hazardous leaks, unplanned shutdowns, and costly environmental incidents. Precise bolt tensioning ensures uniform gasket compression and reliable joint integrity in high-pressure applications.",
    },
  ],

  "torque-tightening-bolt-tensioning": [
    {
      q: "What is bolt tensioning versus torque tightening?",
      a: "Bolt tensioning uses hydraulic load to stretch the bolt directly to the required preload, while torque tightening applies rotational force via calibrated wrenches. Bolt tensioning delivers more consistent and accurate preload, which is especially important for high-pressure flange connections in Kuwait's oil & gas sector.",
    },
    {
      q: "What standards govern your bolt tightening services?",
      a: "Our services comply with ASME PCC-1 (Guidelines for Pressure Boundary Bolted Flange Joint Assembly), EN 1591 (Flanges and Their Joints), and API 6A requirements. We use calibrated hydraulic tools and electronic torque sensors to verify every connection.",
    },
    {
      q: "Do you provide on-site bolt tensioning in Kuwait?",
      a: "Yes. Our certified technicians mobilise to client sites across Kuwait and the GCC with fully equipped service vehicles carrying hydraulic torque wrenches, bolt tensioners, and digital torque measurement equipment for shutdowns, turnarounds, and emergency call-outs.",
    },
    {
      q: "Why is accurate bolt preload important?",
      a: "Incorrect bolt preload is a leading cause of flange joint failures, which can result in hazardous leaks, unplanned shutdowns, and costly environmental incidents. Precise bolt tensioning ensures uniform gasket compression and reliable joint integrity in high-pressure applications.",
    },
  ],

  "flow-meter-calibration": [
    {
      q: "What flow meter calibration standards do you follow?",
      a: "We perform calibration to OIML R117 class 0.3, API MPMS (Manual of Petroleum Measurement Standards), and ISO standards. Our Faure Herman ILAC/COFRAC ISO 17025 accreditation ensures every calibration is traceable and internationally recognised across Kuwait and the GCC.",
    },
    {
      q: "How often should flow meters be calibrated?",
      a: "Calibration frequency depends on the meter type, application, and regulatory requirements. Custody transfer flow meters typically require annual or biennial calibration. We help clients in Kuwait establish optimal calibration schedules to maintain measurement accuracy and compliance.",
    },
    {
      q: "Do you offer emergency flow meter calibration?",
      a: "Yes. We provide a 2-week emergency calibration service for custody transfer flowmeters when an unexpected calibration failure or compliance issue threatens operations. Our rapid-response team in Kuwait can expedite the process to minimise downtime.",
    },
    {
      q: "What is as-found calibration?",
      a: "As-found calibration measures the meter's performance in its current state before any adjustments. This baseline data is critical for assessing whether the meter has drifted out of tolerance and for making informed decisions about repair, adjustment, or replacement in custody transfer applications.",
    },
  ],

  "specialized-inspection-service": [
    {
      q: "What specialized inspection services do you offer?",
      a: "We provide Phased Array Ultrasonic Testing (PAUT), Eddy Current Testing, TOFD, Magnetic Flux Leakage, Videoscope inspection, Gamma Ray Pipe Crawler, Corrosion Control, Metallurgical Services, Heat Treatment, and Lifting Equipment Inspection — all available in Kuwait and Dubai.",
    },
    {
      q: "Why choose specialized NDT over conventional methods?",
      a: "Specialized NDT techniques offer superior sensitivity, accuracy, and defect characterisation compared to conventional methods. For example, PAUT provides full volumetric weld inspection with permanent recorded data, while TOFD delivers precise crack depth sizing — capabilities essential for critical infrastructure in Kuwait.",
    },
    {
      q: "Are your specialized inspection technicians certified?",
      a: "All our technicians hold current PCN, ASNT, or equivalent certifications in their respective NDT disciplines. They undergo regular proficiency testing and are trained to operate the latest generation of inspection equipment used across the GCC oil & gas industry.",
    },
  ],

  "metering-control-system-integration": [
    {
      q: "What is custody transfer metering control system integration?",
      a: "It is the design and implementation of the complete control architecture — SCADA, PLC, HMI, servers, and communication networks — that manages custody transfer flow metering operations. TTS delivers end-to-end integration ensuring all components work together for accurate, compliant fiscal measurement in Kuwait.",
    },
    {
      q: "What brands of PLC and SCADA do you integrate?",
      a: "We integrate Siemens, Allen-Bradley, Schneider Electric, and ABB PLCs with leading SCADA platforms including Wonderware, iFix, and Siemens WinCC. Our authorised OEM status allows us to deliver factory-supported solutions across Kuwait and the GCC.",
    },
    {
      q: "Do you handle IT/OT cybersecurity for metering systems?",
      a: "Yes. Our integration services include IT/OT cybersecurity measures to protect metering control systems from cyber threats while maintaining operational availability — a critical requirement for custody transfer operations in Kuwait's oil & gas infrastructure.",
    },
    {
      q: "Can you integrate new metering systems with existing plant infrastructure?",
      a: "Absolutely. We specialise in integrating new custody transfer metering systems with existing plant DCS, MES, and ERP systems, ensuring seamless data flow from the flow meter to fiscal reporting without disrupting ongoing operations.",
    },
  ],

  "mechanical-testing": [
    {
      q: "What mechanical testing services do you provide?",
      a: "We offer comprehensive mechanical testing including tensile testing, hardness testing, impact testing, bend testing, fracture toughness testing, and macro/micro examination for metals, plastics, ceramics, and composites in Kuwait and Dubai.",
    },
    {
      q: "What standards govern your mechanical testing?",
      a: "All testing is performed to internationally recognised standards including ASTM, ISO, and BS EN specifications. Our laboratory maintains strict traceability to national and international measurement standards.",
    },
    {
      q: "Can you test on-site at our facility in Kuwait?",
      a: "Yes. We provide both laboratory-based and portable on-site mechanical testing services. Our mobile testing units are equipped to perform hardness testing, tensile testing, and other mechanical assessments directly at your facility in Kuwait or the wider GCC region.",
    },
    {
      q: "Do you provide test reports and certificates?",
      a: "Every test is accompanied by a detailed report including methodology, raw data, calculated results, and pass/fail assessment against the applicable standard. Certificates are issued under our quality management system and are accepted by major operators and EPC contractors across Kuwait.",
    },
  ],

  "supply-and-installation-of-suspended-access-equipments": [
    {
      q: "What suspended access equipment do you supply and install?",
      a: "We supply and install telescopic roof machines, twin track roof machines, powered cradles, recess cradles, monorails, and davit systems for building maintenance and facade access on commercial and industrial buildings across Kuwait and the GCC.",
    },
    {
      q: "Do you provide maintenance after installation?",
      a: "Yes. We offer comprehensive after-sales maintenance packages including periodic inspection, preventive maintenance, and emergency repair services to keep your suspended access equipment operating safely and in compliance with local regulations.",
    },
    {
      q: "Are your installations compliant with safety regulations?",
      a: "All installations comply with relevant international and local safety standards for suspended access equipment. Our engineers ensure proper anchorage, fall protection, and electrical safety are incorporated into every design.",
    },
    {
      q: "Can you install access equipment on existing buildings?",
      a: "Yes. We assess the structural capacity of existing buildings and design retrofit solutions that allow suspended access equipment to be installed without compromising the building's integrity — a common requirement in Kuwait's growing skyline.",
    },
  ],

  "gamma-ray-pipe-crawler-inspection-systems": [
    {
      q: "What is a gamma ray pipe crawler inspection system?",
      a: "A gamma ray pipe crawler is a battery-powered, remote-controlled mobile radiographic machine that travels inside pipelines to produce Single Wall Single Image (SWSI) radiographs of circumferential welds. It eliminates the need for fixed X-ray equipment and is ideal for pipeline construction projects in Kuwait.",
    },
    {
      q: "What standards does pipe crawler radiography comply with?",
      a: "Our pipe crawler inspections comply with ASME V (Boiler and Pressure Vessel Code, Chapter 2) and API 1104 (Welding of Pipelines and Related Facilities) — the primary standards for pipeline radiographic inspection in Kuwait and the wider GCC.",
    },
    {
      q: "Can pipe crawlers inspect large-diameter pipelines?",
      a: "Yes. Our pipe crawler systems are available in configurations suitable for a wide range of pipe diameters. They are particularly effective for inspecting pipelines where access is limited or where conventional radiographic setups would be impractical.",
    },
    {
      q: "What type of defects can pipe crawler radiography detect?",
      a: "Pipe crawler radiography can detect internal weld defects including lack of fusion, porosity, slag inclusions, cracks, and undercut. The resulting SWSI radiographs provide a permanent record of weld quality for each joint in the pipeline.",
    },
  ],

  "tensile-test": [
    {
      q: "What does a tensile test measure?",
      a: "A tensile test measures a material's tensile strength, yield strength, elongation, and reduction of area — key mechanical properties that determine how a material will perform under load. These properties are critical for material selection and design verification in Kuwait's industrial sector.",
    },
    {
      q: "What standards are used for tensile testing?",
      a: "We perform tensile testing to ASTM E8 (metals), ISO 6892, BS EN standards, and ASTM D638 (plastics). Test specimens are prepared and tested according to the applicable standard to ensure reproducible, traceable results.",
    },
    {
      q: "What types of materials can you tensile test?",
      a: "We test metals (steel, aluminium, copper, titanium), plastics, ceramics, and composite materials. Our laboratory in Kuwait is equipped with universal testing machines capable of handling specimens from thin sheet metal to heavy structural sections.",
    },
    {
      q: "Do you provide tensile test certificates for regulatory compliance?",
      a: "Yes. Our tensile test certificates include full traceability to material heat numbers, specimen preparation details, raw data, and calculated results. These certificates are accepted by major operators, EPC contractors, and regulatory bodies across Kuwait and the GCC.",
    },
  ],

  "structural-steel-erection": [
    {
      q: "What structural steel erection services do you provide?",
      a: "We provide pre-fabricated steel component assembly for buildings, bridges, and large industrial structures — creating skeletal frameworks that are precise, safe, and delivered on schedule across Kuwait and the wider GCC region.",
    },
    {
      q: "Do you handle both design and erection?",
      a: "Yes. Our team covers the full scope from structural steel detailing and fabrication through to on-site erection, bolting, and welding. We coordinate with architects, structural engineers, and contractors to ensure seamless delivery.",
    },
    {
      q: "What safety measures do you follow during steel erection?",
      a: "We follow strict safety protocols including fall protection systems, certified lifting plans, and comprehensive risk assessments for every steel erection project. Safety is paramount when working at height with heavy steel components in Kuwait's industrial and commercial construction sector.",
    },
    {
      q: "Can you erect steel structures in challenging site conditions?",
      a: "Yes. Our experienced crews are equipped to handle complex erection scenarios including restricted access sites, high-rise construction, and industrial plant environments where ongoing operations must not be disrupted.",
    },
  ],

  "lifting-equipment-inspection": [
    {
      q: "What lifting equipment do you inspect?",
      a: "We inspect cranes (overhead, mobile, tower), hoists, forklifts, elevators, slings, shackles, and all lifting accessories. Our certified competent persons perform systematic examinations with written reports per LOLER 1998, ASME B30, and BS EN 13001 in Kuwait and Dubai.",
    },
    {
      q: "How often should lifting equipment be inspected?",
      a: "Inspection frequency depends on the equipment type, usage intensity, and regulatory requirements. Generally, thorough examinations are required every 6–12 months for most lifting equipment, with more frequent inspections for heavy-use or safety-critical applications in Kuwait.",
    },
    {
      q: "Do you issue statutory thorough examination reports?",
      a: "Yes. Our thorough examination reports comply with LOLER 1998 and equivalent GCC regulations. Each report includes a detailed condition assessment, defect identification, remaining safe working load determination, and recommended next inspection date.",
    },
    {
      q: "Can you inspect lifting equipment at our site in Kuwait?",
      a: "Absolutely. Our inspection teams mobilise to client sites across Kuwait and the GCC with all necessary testing equipment and documentation tools to perform thorough examinations on-site, minimising disruption to your operations.",
    },
  ],

  "exterior-windows-doors-curtain-wall-testing": [
    {
      q: "What tests do you perform on exterior windows and curtain walls?",
      a: "We perform water penetration testing (ASTM E1105), air permeability testing (ASTM E783), and structural performance testing on installed exterior windows, doors, and curtain wall systems to verify building envelope integrity in Kuwait and the GCC.",
    },
    {
      q: "Why is curtain wall testing important?",
      a: "Curtain wall testing identifies leakage paths, air infiltration issues, and structural weaknesses before they cause water damage, energy loss, or safety hazards. Testing is especially critical in Kuwait's harsh desert climate where sand, heat, and occasional heavy rain challenge building envelopes.",
    },
    {
      q: "What standards govern your facade testing?",
      a: "Our testing follows ASTM E1105 (water penetration), ASTM E783 (air permeability), AAMA 502 (quality assurance), and BS 6375 standards. We also perform field hose tests to AAMA 501.2 for on-site diagnostic assessments.",
    },
    {
      q: "Do you test newly installed and existing buildings?",
      a: "Yes. We test both new construction during commissioning and existing buildings during maintenance assessments or dispute investigations. Our field testing equipment can be deployed at any building in Kuwait or the wider GCC.",
    },
  ],

  "videoscope": [
    {
      q: "What is videoscope remote visual inspection?",
      a: "Videoscope inspection uses a flexible probe with a high-definition camera to visually examine internal surfaces of pipes, vessels, turbines, engines, and other confined or inaccessible areas — without the need for disassembly. It provides live video and still image recording for detailed defect assessment.",
    },
    {
      q: "When should videoscope inspection be used?",
      a: "Videoscope inspection is ideal when components cannot be easily accessed or disassembled — such as inside heat exchanger tubes, engine cylinders, pressure vessel nozzles, and complex piping systems. It is commonly used during turnaround inspections in Kuwait's refineries and petrochemical plants.",
    },
    {
      q: "What can videoscope inspection detect?",
      a: "Videoscope inspection can detect corrosion, erosion, cracks, deposits, weld defects, blockages, and foreign object damage. The high-definition imagery allows for accurate defect characterisation and sizing without shutting down or dismantling equipment.",
    },
    {
      q: "Do you offer videoscope inspection in Kuwait?",
      a: "Yes. Our trained technicians operate state-of-the-art videoscope equipment on-site at facilities across Kuwait and the GCC, providing immediate visual evidence and detailed inspection reports for maintenance and fitness-for-service decisions.",
    },
  ],

  "audits-and-specialized-consultancy": [
    {
      q: "What custody metering audits do you perform?",
      a: "We conduct comprehensive audits of custody transfer metering skids — reviewing metering accuracy, calibration records, flow computer configurations, procedural compliance, and adherence to API MPMS, AGA, ISO, and OIML standards. Our audits identify measurement risks and recommend corrective actions for clients in Kuwait and the GCC.",
    },
    {
      q: "What does your specialised consultancy cover?",
      a: "Our consultancy services span metering system design review, process optimisation, regulatory compliance assessment, measurement uncertainty evaluation, and expert witness support for custody transfer disputes across Kuwait's oil & gas sector.",
    },
    {
      q: "How often should a custody metering audit be conducted?",
      a: "Best practice recommends annual audits for high-volume custody transfer systems, with more frequent reviews following system modifications, operational upsets, or regulatory changes. We help clients in Kuwait establish audit schedules that balance risk management with operational efficiency.",
    },
    {
      q: "Do you provide audit reports for regulatory submissions?",
      a: "Yes. Our audit reports are comprehensive, traceable, and formatted to satisfy regulatory bodies, joint venture partners, and fiscal authorities in Kuwait and the wider GCC region.",
    },
  ],

  "impact-test": [
    {
      q: "What is impact testing?",
      a: "Impact testing measures a material's resistance to sudden shock loading — determining its toughness and susceptibility to brittle fracture. We perform Charpy and Izod impact tests, including low-temperature impact testing and ductile-to-brittle transition assessment, to ASTM E23 and ISO 148 standards in Kuwait and Dubai.",
    },
    {
      q: "What is the difference between Charpy and Izod impact tests?",
      a: "Both tests measure impact toughness, but they differ in specimen orientation and support. The Charpy test uses a horizontal simply supported specimen, while the Izod test uses a vertical cantilever specimen. Charpy testing is more commonly specified for industrial applications in Kuwait's oil & gas sector.",
    },
    {
      q: "Why is low-temperature impact testing important?",
      a: "Low-temperature impact testing determines the ductile-to-brittle transition temperature of a material — critical for equipment operating in cold environments or cryogenic services. It ensures materials will not fail catastrophically due to brittle fracture in service.",
    },
    {
      q: "Do you provide impact test reports for fitness-for-service assessments?",
      a: "Yes. Our impact test reports include full specimen details, absorbed energy values, fracture surface appearance, and comparison against applicable acceptance criteria. These reports support fitness-for-service assessments and material qualification in Kuwait.",
    },
  ],

  "heat-treatment-services-2": [
    {
      q: "What heat treatment services do you provide?",
      a: "We provide Post Weld Heat Treatment (PWHT), stress relief, and annealing using electrical resistance heating and high-velocity fuel-fired burner systems to ASME VIII, AWS D1.1, and ASME B31.3 standards in Kuwait and Dubai.",
    },
    {
      q: "When is Post Weld Heat Treatment required?",
      a: "PWHT is required when welding thick-section pressure vessels, piping, or structural components to relieve residual stresses, improve toughness, and restore corrosion resistance. It is mandated by ASME, API, and project specifications for many welded components in Kuwait's refineries and processing plants.",
    },
    {
      q: "How do you monitor the heat treatment process?",
      a: "We use multi-point thermocouple monitoring with calibrated data loggers to record temperature profiles throughout the heating, soaking, and cooling cycles. This ensures compliance with the specified heat treatment procedure and provides a permanent quality record.",
    },
    {
      q: "Can you perform heat treatment on-site at our facility?",
      a: "Yes. Our mobile heat treatment equipment can be deployed to client sites across Kuwait and the GCC for on-site PWHT, stress relief, and annealing — eliminating the need to transport large components to a fixed facility.",
    },
  ],

  "metering-expert-services": [
    {
      q: "What metering expert services do you offer?",
      a: "We provide specialist metering engineering services for on-site assignments, project support, training, and technical secondment. Our experts bring deep custody transfer knowledge to client operations in Kuwait, Dubai, and the wider GCC region.",
    },
    {
      q: "Can your experts be seconded to our team?",
      a: "Yes. We offer flexible secondment arrangements — from short-term site visits to long-term project placements — where our metering engineers work alongside your team to resolve technical challenges, optimise operations, and transfer knowledge.",
    },
    {
      q: "What training do your metering experts provide?",
      a: "Our experts deliver specialised training on metering system operation, calibration procedures, flow computer programming, and custody transfer standards. Training can be conducted at our premises, via videoconference, or at your facility in Kuwait.",
    },
    {
      q: "Do your experts support regulatory compliance?",
      a: "Absolutely. Our metering experts help clients navigate complex regulatory requirements related to fiscal measurement, environmental reporting, and custody transfer compliance in Kuwait and the GCC, ensuring your systems meet all applicable standards.",
    },
  ],

  "heat-treatment-services": [
    {
      q: "What heat treatment services do you provide?",
      a: "We provide Post Weld Heat Treatment (PWHT), stress relief, and annealing using electrical resistance heating and high-velocity fuel-fired burner systems to ASME VIII, AWS D1.1, and ASME B31.3 standards in Kuwait and Dubai.",
    },
    {
      q: "When is Post Weld Heat Treatment required?",
      a: "PWHT is required when welding thick-section pressure vessels, piping, or structural components to relieve residual stresses, improve toughness, and restore corrosion resistance. It is mandated by ASME, API, and project specifications for many welded components in Kuwait's refineries and processing plants.",
    },
    {
      q: "How do you monitor the heat treatment process?",
      a: "We use multi-point thermocouple monitoring with calibrated data loggers to record temperature profiles throughout the heating, soaking, and cooling cycles. This ensures compliance with the specified heat treatment procedure and provides a permanent quality record.",
    },
    {
      q: "Can you perform heat treatment on-site at our facility?",
      a: "Yes. Our mobile heat treatment equipment can be deployed to client sites across Kuwait and the GCC for on-site PWHT, stress relief, and annealing — eliminating the need to transport large components to a fixed facility.",
    },
  ],

  "advanced-training": [
    {
      q: "What advanced training courses do you offer?",
      a: "We offer on-demand training courses covering metering system installation, commissioning, and operation. Courses can be delivered at OEM premises, via videoconferencing, or at customer sites — tailored to your team's specific needs in Kuwait and the GCC.",
    },
    {
      q: "Who should attend your training courses?",
      a: "Our courses are designed for operations engineers, maintenance technicians, project managers, and anyone involved in the design, operation, or maintenance of flow metering and control systems. We tailor content to the audience's experience level.",
    },
    {
      q: "Can training be customised for our specific equipment?",
      a: "Yes. We develop bespoke training programmes based on the specific meter types, flow computers, and control systems installed at your facility. This ensures your team learns on the exact equipment they work with daily in Kuwait.",
    },
    {
      q: "Do you provide training certificates?",
      a: "Yes. Participants who complete our training courses receive certificates of competency documenting the topics covered, practical exercises completed, and assessment results. These certificates are accepted by major operators across the GCC.",
    },
  ],

  "visual-inspection-vi": [
    {
      q: "What is visual inspection (VI) in NDT?",
      a: "Visual inspection is the most fundamental NDT method — examining the surface and external characteristics of components and materials to detect cracks, corrosion, surface irregularities, and dimensional discrepancies. It is the essential first step in any comprehensive NDT programme.",
    },
    {
      q: "When should visual inspection be performed?",
      a: "Visual inspection should be performed during receiving inspection of new materials, during fabrication and welding, during in-service maintenance, and as part of fitness-for-service assessments. It is often the first screening method before more advanced NDT techniques are applied.",
    },
    {
      q: "Do you use any enhanced visual inspection tools?",
      a: "Yes. Beyond the naked eye, we employ magnifying glasses, borescopes, videoscopes, and digital imaging to enhance surface defect detection. These tools allow us to inspect confined areas and produce permanent visual records for documentation purposes in Kuwait.",
    },
    {
      q: "Is visual inspection sufficient on its own?",
      a: "For many applications, visual inspection alone is sufficient — particularly for surface-breaking defects on accessible components. However, for subsurface defects or critical components, visual inspection is typically used as a screening method before complementary NDT techniques are applied.",
    },
  ],

  "hand-rail-fabrication": [
    {
      q: "What handrail fabrication services do you offer?",
      a: "We fabricate safety handrails and support structures from steel, aluminium, and other durable materials — designed to meet safety regulations for industrial and commercial applications across Kuwait and the GCC.",
    },
    {
      q: "What materials are your handrails made from?",
      a: "We work with carbon steel, stainless steel, and aluminium. Material selection depends on the application — stainless steel for corrosive environments, aluminium for lightweight requirements, and carbon steel for cost-effective industrial installations in Kuwait.",
    },
    {
      q: "Do your handrails comply with safety standards?",
      a: "All handrail fabrication is designed and manufactured to comply with relevant safety regulations including height, load, and spacing requirements specified by local building codes and international standards applicable in Kuwait.",
    },
    {
      q: "Can you fabricate custom handrail designs?",
      a: "Yes. We work from client drawings and specifications to fabricate custom handrail solutions that meet unique project requirements — whether for industrial platforms, commercial buildings, or specialised access structures.",
    },
  ],

  "system-software-upgrade": [
    {
      q: "What control system upgrade services do you provide?",
      a: "We provide PLC and SCADA-based automation and system integration — including multi-brand PLC programming, SCADA development, HMI design, legacy system upgrades, and MIS reporting for industrial operations in Kuwait and Dubai.",
    },
    {
      q: "Can you upgrade outdated PLC systems?",
      a: "Yes. We specialise in migrating from obsolete PLC platforms to current-generation hardware from Siemens, Allen-Bradley, and Schneider Electric — preserving existing control logic while adding modern通讯 and diagnostic capabilities for plants across Kuwait.",
    },
    {
      q: "What SCADA platforms do you work with?",
      a: "We develop and configure SCADA systems using Wonderware, Siemens WinCC, iFix, and other industry-standard platforms. Our SCADA solutions provide real-time monitoring, trending, alarm management, and historical data recording for industrial facilities in the GCC.",
    },
    {
      q: "Do you minimise downtime during system upgrades?",
      a: "Absolutely. We plan upgrades with phased implementation, parallel running, and contingency measures to minimise disruption to ongoing operations. Our approach ensures a smooth transition from legacy to modern systems with minimal impact on production.",
    },
  ],

  "bend-test": [
    {
      q: "What is a bend test?",
      a: "A bend test evaluates the ductility and soundness of materials and welds by bending a specimen to a specified angle or radius. We perform guided bend tests, weld procedure qualification bend tests, and flexural testing — including face, root, and side bend — to ASTM A370, E290, and ISO 7438 standards in Kuwait.",
    },
    {
      q: "Why are bend tests important for weld qualification?",
      a: "Bend tests reveal internal weld defects — such as lack of fusion, porosity, and slag inclusions — that may not be visible on the surface. Passing a bend test demonstrates that a weld has adequate ductility and soundness to perform safely in service.",
    },
    {
      q: "What types of bend tests do you perform?",
      a: "We perform guided bend tests (face, root, and side), free bend tests, and flexural tests. The test type is determined by the applicable welding procedure specification (WPS) or project requirement in Kuwait's industrial sector.",
    },
    {
      q: "Do you prepare bend test specimens?",
      a: "Yes. We machine bend test specimens from welded test coupons according to the applicable standard, ensuring correct geometry and surface finish before testing. This specimen preparation is critical for obtaining reliable, reproducible results.",
    },
  ],

  "pullout-test": [
    {
      q: "What is a pullout test?",
      a: "A pullout test determines the bond strength and integrity between bolts and concrete or masonry substrates. It verifies that structural anchors and cast-in inserts can safely resist the design loads — a critical safety requirement for construction projects in Kuwait and the GCC.",
    },
    {
      q: "What standards govern anchor pullout testing?",
      a: "We perform pullout testing to ASTM C900, EN 12504-3, and ACI 318 standards. These specify test procedures, loading rates, and acceptance criteria for structural anchors in concrete and masonry applications across the region.",
    },
    {
      q: "When should pullout testing be performed?",
      a: "Pullout testing should be performed during construction to verify anchor installation quality, after modifications to structural connections, and during maintenance assessments of existing anchor systems — ensuring they remain fit for purpose in Kuwait's buildings and industrial structures.",
    },
    {
      q: "Do you test both new and existing anchors?",
      a: "Yes. We test newly installed anchors during construction quality assurance and existing anchors during structural assessments or before applying additional loads. Our portable testing equipment can be deployed anywhere in Kuwait or the wider GCC.",
    },
  ],

  "time-of-flight-diffraction": [
    {
      q: "What is Time of Flight Diffraction (TOFD)?",
      a: "TOFD is an advanced ultrasonic technique that uses diffracted ultrasonic waves to detect and accurately size weld cracks. It provides superior defect sizing accuracy compared to conventional UT, making it the preferred method for critical weld inspection in pressure vessels and pipelines across Kuwait.",
    },
    {
      q: "What standards govern TOFD inspection?",
      a: "TOFD inspection is performed to ASME V (Article 4, Practice B), EN ISO 10863, and BS 7706 standards. These define equipment calibration, scanning procedures, and defect sizing methodologies for reliable, repeatable results.",
    },
    {
      q: "What types of defects can TOFD detect?",
      a: "TOFD excels at detecting and sizing planar defects — particularly cracks, lack of fusion, and stress corrosion cracking — in welds. It provides accurate through-wall depth sizing, which is essential for fitness-for-service assessments of pressure equipment in Kuwait.",
    },
    {
      q: "How does TOFD compare to conventional ultrasonic testing?",
      a: "TOFD offers superior sizing accuracy and is less dependent on defect orientation than conventional UT. It produces a permanent data record and provides through-wall dimension measurements with tolerances often better than ±1 mm, making it ideal for critical infrastructure inspection.",
    },
  ],

  "phased-array-ultrasonic-testing": [
    {
      q: "What is Phased Array Ultrasonic Testing (PAUT)?",
      a: "PAUT uses an array of ultrasonic elements that can be individually pulsed and time-delayed to steer, focus, and scan the ultrasonic beam without moving the probe. It detects cracks, voids, pits, and corrosion defects, measures wall thickness, and inspects welds to ASME V, API 1104, and EN ISO 13588 standards in Kuwait.",
    },
    {
      q: "What advantages does PAUT have over conventional UT?",
      a: "PAUT provides faster inspection coverage, electronic beam steering, superior defect characterisation, and permanent recorded data. A single PAUT scan can replace multiple conventional UT passes, significantly improving inspection efficiency on-site in Kuwait's refineries and processing plants.",
    },
    {
      q: "Can PAUT inspect welds on-site?",
      a: "Yes. PAUT is widely used for on-site weld inspection — particularly for circumferential and longitudinal welds in pressure vessels, piping, and structural components. Our technicians operate portable PAUT equipment at client sites across Kuwait and the GCC.",
    },
    {
      q: "Does PAUT produce permanent inspection records?",
      a: "Yes. PAUT equipment records scan data that can be reviewed, re-analysed, and archived — providing a permanent, traceable record of the inspection. This is a significant advantage over conventional UT, where only manual readings are typically recorded.",
    },
  ],

  "repair-upgrades-for-helical-flow-meters": [
    {
      q: "Do you service Faure Herman helical flow meters?",
      a: "Yes. As an authorised Faure Herman OEM Representative, we provide preventive and corrective maintenance, performance analysis, failure investigation, and repair services for helical flow meters — ensuring they operate to manufacturer specifications in Kuwait and Dubai.",
    },
    {
      q: "What does preventive maintenance include?",
      a: "Preventive maintenance includes scheduled performance checks, seal replacement, bearing inspection, calibration verification, and firmware updates. Regular maintenance extends meter life and prevents unexpected failures that could disrupt custody transfer operations.",
    },
    {
      q: "Can you repair helical flow meters on-site?",
      a: "For many repairs, we can service helical flow meters on-site at your facility in Kuwait, minimising the need to remove the meter from the pipeline. For major overhauls, we can arrange for the meter to be transported to an authorised service centre.",
    },
    {
      q: "Do you supply genuine spare parts for Faure Herman meters?",
      a: "Yes. We supply genuine OEM spare parts for Faure Herman helical flow meters — including seals, bearings, sensors, and electronics. All parts are authentic, traceable, and quality-certified to maintain your meter's warranty and performance standards.",
    },
  ],

  "corrosion-control-services-2": [
    {
      q: "What corrosion control services do you offer?",
      a: "We provide protective coatings, cathodic protection systems, corrosion assessment, and management plans for oil & gas, marine, construction, and manufacturing industries — protecting assets across Kuwait and the GCC from the region's aggressive environmental conditions.",
    },
    {
      q: "Why is corrosion control important in Kuwait?",
      a: "Kuwait's coastal and desert environments — with high humidity, salt air, and extreme temperatures — accelerate corrosion of industrial assets. Effective corrosion control extends equipment life, prevents unplanned shutdowns, and avoids costly environmental incidents.",
    },
    {
      q: "What is cathodic protection?",
      a: "Cathodic protection is an electrochemical method that prevents corrosion of buried or submerged metal structures — such as pipelines and storage tanks — by making them the cathode of an electrochemical cell. We design, install, and maintain both sacrificial and impressed current systems.",
    },
    {
      q: "Do you perform corrosion assessments?",
      a: "Yes. We conduct corrosion surveys, remaining life assessments, and corrosion rate measurements to help clients in Kuwait understand the condition of their assets and plan appropriate maintenance and repair strategies.",
    },
  ],

  "fracture-test": [
    {
      q: "What is fracture toughness testing?",
      a: "Fracture toughness testing (KIc, CTOD, J-integral) measures a material's resistance to propagation of a pre-existing flaw. It supports fitness-for-service assessments and structural integrity qualification — critical for pressure equipment operating in Kuwait's oil & gas sector.",
    },
    {
      q: "What standards govern fracture toughness testing?",
      a: "We perform fracture toughness testing to ASTM E399 (KIc), ASTM E1820 (J-integral), and BS 7448 (CTOD) standards. These define specimen preparation, pre-cracking, and testing procedures to produce reliable, standardised results.",
    },
    {
      q: "When is fracture toughness testing required?",
      a: "Fracture toughness testing is required when existing defects need to be assessed against fitness-for-service criteria, during material qualification for critical applications, and when operating at low temperatures where brittle fracture risk increases.",
    },
    {
      q: "Do you provide fracture test data for fitness-for-service assessments?",
      a: "Yes. Our fracture toughness test data — including KIc, CTOD, and J-integral values — supports API 579/ASME FFS-1 fitness-for-service assessments, helping clients in Kuwait determine whether existing equipment with detected flaws can safely continue operating.",
    },
  ],

  "magnetic-particle-inspection-mt": [
    {
      q: "What is Magnetic Particle Inspection (MPI)?",
      a: "Magnetic Particle Testing (MPT/MPI) detects surface and near-surface defects in ferromagnetic materials — iron, steel, nickel, and cobalt — by magnetising the component and applying fine magnetic particles that accumulate at defect locations. We use wet fluorescent and colour contrast methods to ASME V, ISO 17638, and ASTM E709 standards in Kuwait.",
    },
    {
      q: "What types of defects can MPI detect?",
      a: "MPI is highly effective at detecting surface-breaking and near-surface defects including cracks, laps, seams, porosity, and lack of fusion in ferromagnetic welds, forgings, and castings. It is one of the most widely used NDT methods in Kuwait's oil & gas industry.",
    },
    {
      q: "Is MPI limited to ferromagnetic materials?",
      a: "Yes. MPI only works on ferromagnetic materials — primarily carbon steel, low-alloy steel, and nickel-based alloys. For non-ferromagnetic materials like stainless steel or aluminium, alternative methods such as liquid penetrant testing or eddy current testing are used.",
    },
    {
      q: "Do you offer both wet and dry magnetic particle inspection?",
      a: "Yes. We offer wet fluorescent MPI (using UV light for maximum sensitivity), wet colour contrast MPI, and dry magnetic powder methods. The appropriate technique is selected based on the component geometry, defect type, and inspection requirements.",
    },
  ],

  "lifting-equipment-inspection-2": [
    {
      q: "What lifting equipment do you inspect?",
      a: "We inspect cranes (overhead, mobile, tower), hoists, forklifts, elevators, slings, shackles, and all lifting accessories. Our certified competent persons perform systematic examinations with written reports per LOLER 1998, ASME B30, and BS EN 13001 in Kuwait and Dubai.",
    },
    {
      q: "How often should lifting equipment be inspected?",
      a: "Inspection frequency depends on the equipment type, usage intensity, and regulatory requirements. Generally, thorough examinations are required every 6–12 months for most lifting equipment, with more frequent inspections for heavy-use or safety-critical applications in Kuwait.",
    },
    {
      q: "Do you issue statutory thorough examination reports?",
      a: "Yes. Our thorough examination reports comply with LOLER 1998 and equivalent GCC regulations. Each report includes a detailed condition assessment, defect identification, remaining safe working load determination, and recommended next inspection date.",
    },
    {
      q: "Can you inspect lifting equipment at our site in Kuwait?",
      a: "Absolutely. Our inspection teams mobilise to client sites across Kuwait and the GCC with all necessary testing equipment and documentation tools to perform thorough examinations on-site, minimising disruption to your operations.",
    },
  ],

  "non-destructive-testing-ndt": [
    {
      q: "What NDT services do you provide?",
      a: "We provide a full range of NDT inspection services including Visual Inspection (VI), Liquid/Dye Penetrant (PT), Magnetic Particle (MT), Radiographic Testing (RT), and Ultrasonic Testing (UT) — delivered by qualified technicians with modern equipment in Kuwait and Dubai.",
    },
    {
      q: "Why is NDT important in oil and gas?",
      a: "NDT is essential for verifying the integrity of welded structures, pressure vessels, and piping without causing damage. It detects defects early, prevents catastrophic failures, and ensures compliance with safety regulations — critical for protecting personnel and assets in Kuwait's oil & gas facilities.",
    },
    {
      q: "Are your NDT technicians qualified?",
      a: "All our NDT technicians hold current PCN, ASNT, or equivalent certifications in their respective disciplines. They undergo regular proficiency testing and are trained to operate the latest generation of NDT equipment used across the GCC.",
    },
    {
      q: "Do you provide NDT for construction and fabrication?",
      a: "Yes. We support construction and fabrication projects with NDT during welding, assembly, and commissioning phases. Our services help ensure that fabricated components meet design specifications and code requirements before entering service.",
    },
  ],

  "new-installation-design-and-commissioning": [
    {
      q: "What metering system installation services do you offer?",
      a: "As an authorised OEM Representative, we assist in the specification, design, sizing, and operation of new metering systems — including general arrangement drawings, P&ID development, electrical single-line diagrams, cable schedules, and instrument indexes for projects in Kuwait and the GCC.",
    },
    {
      q: "Do you handle the full commissioning process?",
      a: "Yes. We manage the complete commissioning process from pre-commissioning checks through loop testing, system integration testing, and performance verification — ensuring your new metering system is ready for custody transfer operations.",
    },
    {
      q: "Can you design metering systems for unique applications?",
      a: "Absolutely. We design metering systems tailored to specific fluids, flow rates, operating conditions, and regulatory requirements — ensuring the system meets your exact custody transfer needs while complying with API MPMS, AGA, and OIML standards.",
    },
    {
      q: "Do you provide as-built documentation?",
      a: "Yes. Upon commissioning completion, we deliver comprehensive as-built documentation including updated P&IDs, wiring diagrams, instrument data sheets, calibration certificates, and operating procedures — essential for ongoing maintenance and regulatory compliance.",
    },
  ],

  "hose-test-2": [
    {
      q: "What is a hose test for curtain walls?",
      a: "A hose test is a field quality assurance water check for installed curtain walls, exterior windows, and doors. It uses a calibrated water hose to identify leakage paths and diagnostic information — performed to AAMA 501.2 and ASTM E1105 standards in Kuwait and Dubai.",
    },
    {
      q: "When should a hose test be performed?",
      a: "Hose testing is typically performed after curtain wall or window installation during the commissioning phase, when water ingress complaints arise, or as part of periodic building envelope maintenance assessments in Kuwait's coastal and desert environments.",
    },
    {
      q: "How does a hose test differ from a spray rack test?",
      a: "A hose test uses a directed water stream to identify specific leakage locations, while a spray rack test applies uniform water pressure over a large area. Hose testing is faster and more targeted, making it ideal for pinpointing problem areas on curtain walls.",
    },
    {
      q: "Do you provide diagnostic reports after hose testing?",
      a: "Yes. Our hose test reports include documented test locations, observations, leakage findings, photographs, and recommended remedial actions — providing clear guidance for corrective work on buildings across Kuwait and the GCC.",
    },
  ],

  "hardness-test": [
    {
      q: "What hardness testing methods do you offer?",
      a: "We offer Rockwell, Brinell, and Vickers hardness testing for metals, plastics, and ceramics — measuring material resistance to permanent deformation to ASTM E18, E10, E92, ISO 6508, 6506, and 6507 standards in Kuwait and Dubai.",
    },
    {
      q: "When is hardness testing required?",
      a: "Hardness testing is required for material verification, weld qualification, heat treatment quality assurance, and fitness-for-service assessments. It is one of the most commonly specified mechanical tests in Kuwait's industrial sector.",
    },
    {
      q: "What is the difference between Rockwell, Brinell, and Vickers?",
      a: "Rockwell testing uses a diamond cone or steel ball indenter and measures depth of penetration. Brinell uses a hardened steel ball and measures indentation diameter. Vickers uses a diamond pyramid indenter and measures diagonal length. Each method suits different material types and hardness ranges.",
    },
    {
      q: "Can you perform hardness testing on-site?",
      a: "Yes. We have portable hardness testers that can be deployed to client sites across Kuwait and the GCC for on-site hardness surveys, weld hardness testing, and heat treatment verification — providing results without removing components from service.",
    },
  ],

  "commissioning-and-start-up-support": [
    {
      q: "What commissioning services do you provide?",
      a: "We provide industrial process automation commissioning and start-up support — validation and fine-tuning of PLCs, DCS, SCADA, sensors, and safety systems from pre-commissioning through hot start-up and post-commissioning handover in Kuwait and Dubai.",
    },
    {
      q: "What does the commissioning process involve?",
      a: "The process includes pre-commissioning checks (loop testing, cable verification), FAT/SAT support, system integration testing, performance verification, operator training, and documentation handover — ensuring all automation systems perform to specification before plant start-up.",
    },
    {
      q: "Do you support both new plant and retrofit projects?",
      a: "Yes. Our commissioning support covers new plant installations, expansion projects, and control system retrofits. We adapt our approach to the project scope — whether it's a complete facility or a single control system upgrade in Kuwait.",
    },
    {
      q: "Do you provide start-up support after commissioning?",
      a: "Absolutely. We offer post-commissioning support during initial plant start-up, including troubleshooting, performance monitoring, and fine-tuning — ensuring a smooth transition from construction to full commercial operation.",
    },
  ],

  "air-permeability-test-2": [
    {
      q: "What is air permeability testing?",
      a: "Air permeability testing measures the rate of air infiltration through exterior windows, doors, and curtain walls — identifying leakage paths and quantifying air leakage rates. We test to ASTM E783, ASTM E283, and EN 12207 standards in Kuwait and Dubai.",
    },
    {
      q: "Why is air permeability testing important?",
      a: "Air leakage increases energy consumption, reduces occupant comfort, and can allow moisture ingress that leads to structural damage. In Kuwait's extreme climate, controlling air infiltration is essential for building energy efficiency and long-term durability.",
    },
    {
      q: "What standards govern air permeability testing?",
      a: "We perform air permeability testing to ASTM E783 (field measurement), ASTM E283 (laboratory measurement), and EN 12207 (European classification). These standards define test pressures, measurement procedures, and air leakage rate calculations.",
    },
    {
      q: "Do you test new and existing buildings?",
      a: "Yes. We test newly installed windows and curtain walls during commissioning and existing building envelopes during energy audits or diagnostic investigations. Our portable test equipment can be deployed at any building in Kuwait or the wider GCC.",
    },
  ],

  "validation-and-uncertainty-calculations": [
    {
      q: "What is measurement uncertainty in custody transfer?",
      a: "Measurement uncertainty quantifies the range within which the true measurement value lies — a critical parameter for custody transfer where even small uncertainties translate to significant financial impacts. Our GUM-compliant calculations ensure transparent, defensible uncertainty budgets for clients in Kuwait.",
    },
    {
      q: "What standards govern your validation and uncertainty work?",
      a: "We follow the GUM (Guide to the Expression of Uncertainty in Measurement), API MPMS Chapter 21, ISO, and OIML standards for all validation and uncertainty calculation work — ensuring compliance with fiscal measurement requirements in Kuwait and the GCC.",
    },
    {
      q: "What does a metering system validation include?",
      a: "Validation includes verifying meter performance against specifications, checking flow computer configurations, confirming calibration traceability, and assessing overall system accuracy. We validate complete custody transfer metering skids, from the flow meter to the fiscal data output.",
    },
    {
      q: "Do you provide uncertainty budgets for regulatory audits?",
      a: "Yes. We prepare comprehensive uncertainty budgets that document every source of measurement uncertainty — meter, transducer, flow computer, environmental effects — and combine them using the GUM methodology. These documents are accepted by regulatory bodies and joint venture partners in Kuwait.",
    },
  ],

  "air-permeability-test": [
    {
      q: "What is air permeability testing?",
      a: "Air permeability testing measures the rate of air infiltration through exterior windows, doors, and curtain walls — identifying leakage paths and quantifying air leakage rates. We test to ASTM E783, ASTM E283, and EN 12207 standards in Kuwait and Dubai.",
    },
    {
      q: "Why is air permeability testing important?",
      a: "Air leakage increases energy consumption, reduces occupant comfort, and can allow moisture ingress that leads to structural damage. In Kuwait's extreme climate, controlling air infiltration is essential for building energy efficiency and long-term durability.",
    },
    {
      q: "What standards govern air permeability testing?",
      a: "We perform air permeability testing to ASTM E783 (field measurement), ASTM E283 (laboratory measurement), and EN 12207 (European classification). These standards define test pressures, measurement procedures, and air leakage rate calculations.",
    },
    {
      q: "Do you test new and existing buildings?",
      a: "Yes. We test newly installed windows and curtain walls during commissioning and existing building envelopes during energy audits or diagnostic investigations. Our portable test equipment can be deployed at any building in Kuwait or the wider GCC.",
    },
  ],

  "macro-and-micro-test": [
    {
      q: "What is macro and micro mechanical testing?",
      a: "Macro testing examines material structure at the visible scale — such as weld macro sections showing penetration profile and HAZ. Micro testing uses microscopy to characterise grain structure, phases, inclusions, and microstructural features at higher magnification levels.",
    },
    {
      q: "What standards govern macro and micro testing?",
      a: "We perform macro and micro testing to ASTM E112 (grain size), ASTM E45 (inclusions), ISO 643 (austenitic grain size), and various other ASTM and ISO standards relevant to metallographic examination in Kuwait and the GCC.",
    },
    {
      q: "When is weld macro examination required?",
      a: "Weld macro examination is required during welding procedure qualification (WPS qualification), production weld verification, and failure investigations. It reveals weld penetration, fusion, HAZ width, and internal defects that are not visible on the surface.",
    },
    {
      q: "Do you provide metallographic analysis reports?",
      a: "Yes. Our reports include photomicrographs at specified magnifications, grain size measurements, phase identification, inclusion ratings, and comparisons against applicable acceptance criteria — providing definitive material characterisation data for clients in Kuwait.",
    },
  ],

  "liquid-penetrant-dye-penetrant-examination-pt": [
    {
      q: "What is Liquid Penetrant Testing (PT)?",
      a: "Liquid Penetrant Testing uses capillary forces to detect surface-breaking cracks, laps, and porosity in metals, ceramics, and plastics. We use fluorescent and colour contrast methods to ASTM E165 and ISO 3452 standards in Kuwait and Dubai.",
    },
    {
      q: "What types of defects can penetrant testing detect?",
      a: "PT detects open surface-breaking defects including cracks, porosity, laps, seams, and fatigue damage. It is particularly effective on non-ferromagnetic materials where magnetic particle inspection cannot be used — making it essential for aluminium, stainless steel, and titanium components.",
    },
    {
      q: "What is the difference between fluorescent and colour contrast PT?",
      a: "Fluorescent penetrant inspection uses UV light to reveal defects with high sensitivity — ideal for critical applications. Colour contrast (visible dye) penetrant uses visible light and is faster for general-purpose inspections. We recommend the appropriate method based on defect criticality and site conditions.",
    },
    {
      q: "Can penetrant testing be performed on-site?",
      a: "Yes. We perform both laboratory and field penetrant testing at client sites across Kuwait and the GCC. Our portable kits include all necessary cleaning agents, penetrants, developers, and UV lamps for on-site inspections.",
    },
  ],

  "high-and-low-voltage-cable-steel-structure-supports": [
    {
      q: "What cable support structure services do you provide?",
      a: "We design, fabricate, and erect high and low voltage cable support structures, pathways, and steel structural supports for industrial electrical infrastructure — serving major facilities across Kuwait and the GCC.",
    },
    {
      q: "What materials do you use for cable supports?",
      a: "We use galvanised steel, stainless steel, and aluminium for cable support structures — selected based on the installation environment, load requirements, and corrosion conditions. Indoor supports may use painted steel while outdoor and marine environments typically require hot-dip galvanised or stainless steel.",
    },
    {
      q: "Do you handle both design and installation?",
      a: "Yes. Our services cover the complete scope from structural design and detailed engineering through to fabrication, delivery, and on-site erection — coordinated with electrical contractors and project teams to ensure seamless integration.",
    },
    {
      q: "Can you design cable supports for high-voltage applications?",
      a: "Absolutely. We design cable support systems engineered for high-voltage cable requirements — including appropriate spacing, bend radius accommodation, thermal considerations, and seismic loading — meeting the specific needs of power generation and transmission facilities in Kuwait.",
    },
  ],

  "water-penetration-test": [
    {
      q: "What is water penetration testing?",
      a: "Water penetration testing identifies leakage in windows, doors, and curtain wall systems by applying controlled water pressure to the exterior surface while monitoring for interior water ingress. We test to ASTM E1105, AAMA 502, and BS 6375 standards in Kuwait and Dubai.",
    },
    {
      q: "When should water penetration testing be performed?",
      a: "Testing is recommended during new building commissioning, when water ingress complaints arise, after facade repairs, and as part of periodic building envelope assessments. In Kuwait's climate, regular testing helps maintain building integrity against occasional heavy rain and sand-driven moisture.",
    },
    {
      q: "What standards govern your water penetration testing?",
      a: "We perform static pressure water penetration testing to ASTM E1105 (field measurement), AAMA 502 (quality assurance), and BS 6375 (performance of windows and doors). These standards specify test pressures, durations, and acceptance criteria.",
    },
    {
      q: "Do you provide detailed test reports?",
      a: "Yes. Our test reports include test locations, applied pressures, observations, leakage findings with photographs, and recommended remedial actions. Reports are formatted for submission to consultants, contractors, and building owners across Kuwait and the GCC.",
    },
  ],

  "electrical-instrumentation-works": [
    {
      q: "What electrical and instrumentation services do you provide?",
      a: "We provide installation, maintenance, and optimisation of electrical systems and instrumentation equipment for industrial facilities — from design through to commissioning — serving clients across Kuwait and the GCC.",
    },
    {
      q: "What types of industrial facilities do you serve?",
      a: "We serve oil & gas refineries, petrochemical plants, power generation facilities, manufacturing plants, and commercial buildings. Our team has the experience to handle electrical and instrumentation requirements across a wide range of industrial environments in Kuwait.",
    },
    {
      q: "Do you provide instrumentation calibration services?",
      a: "Yes. We calibrate and verify process instruments including pressure transmitters, temperature sensors, flow meters, and analytical instruments — ensuring accurate process control and regulatory compliance for facilities in Kuwait and the wider GCC.",
    },
    {
      q: "Can you handle both low and high voltage systems?",
      a: "Yes. Our electrical services cover both low voltage (< 1kV) distribution and control systems, and medium/high voltage (1kV–33kV) switchgear, transformers, and power distribution for industrial facilities.",
    },
  ],

  "flow-computer-configuration": [
    {
      q: "What is flow computer configuration?",
      a: "Flow computer configuration involves programming and calibrating specialised computing devices that calculate flow rates, totals, and quality parameters from flow meter inputs, pressure transmitters, temperature sensors, and gas chromatographs — to API MPMS, AGA, ISO, NTEP, and OIML standards in Kuwait.",
    },
    {
      q: "What flow computer brands do you configure?",
      a: "We configure flow computers from major manufacturers including Emerson (Daniel), Honeywell, FLOWSERVE, and other leading brands used in custody transfer applications across Kuwait's oil & gas infrastructure.",
    },
    {
      q: "Do you provide multi-stream flow computer setup?",
      a: "Yes. We configure flow computers to handle multiple meter runs and stream configurations — managing complex custody transfer installations where several meters feed into a single fiscal measurement system.",
    },
    {
      q: "Can you reconfigure flow computers after system changes?",
      a: "Absolutely. When metering systems are modified — such as meter replacements, pipe diameter changes, or fluid property updates — we reconfigure the flow computer to reflect the new conditions while maintaining calibration traceability and compliance with applicable standards.",
    },
  ],

  "genuine-spare-parts": [
    {
      q: "What genuine spare parts do you supply?",
      a: "We supply genuine OEM spare parts for Faure Herman helical flow meters and associated metering equipment — including seals, bearings, sensors, electronics, and mechanical components. All parts are authentic, traceable, and quality-certified.",
    },
    {
      q: "Why should I use genuine OEM spare parts?",
      a: "Genuine OEM parts ensure your flow meter continues to perform to its original specifications, maintains its calibration accuracy, and retains its warranty coverage. Non-genuine parts may compromise measurement accuracy and could lead to costly custody transfer disputes.",
    },
    {
      q: "How quickly can you deliver spare parts to Kuwait?",
      a: "As an authorised Faure Herman OEM Representative based in Kuwait, we maintain local inventory of critical spare parts for rapid delivery. For non-stock items, we coordinate directly with the manufacturer to minimise lead times.",
    },
    {
      q: "Can you help identify the correct spare parts for my meter?",
      a: "Yes. Our technical team can identify the correct spare parts for your specific meter model and serial number. We maintain a comprehensive parts database and can cross-reference legacy part numbers with current equivalents.",
    },
  ],

  "eddy-current-testing": [
    {
      q: "What is Eddy Current Testing (ECT)?",
      a: "ECT uses electromagnetic induction to detect flaws in tubes and material surfaces without physical contact. It is particularly effective for heat exchanger tube inspection, surface crack detection, and conductivity measurement — to ASTM E426 and ASME V standards in Kuwait.",
    },
    {
      q: "What applications is eddy current testing best suited for?",
      a: "ECT is ideal for inspecting non-ferromagnetic heat exchanger tubes (copper, titanium, stainless steel), detecting surface and near-surface cracks, measuring non-conductive coating thickness, and sorting alloys by conductivity — widely used in Kuwait's refineries and petrochemical plants.",
    },
    {
      q: "Can eddy current testing detect heat exchanger tube defects?",
      a: "Yes. ECT is the primary NDT method for heat exchanger tube inspection — detecting wall thinning, pitting, corrosion, stress corrosion cracking, and mechanical damage. Our rotating probe systems provide full coverage of tube internals for comprehensive assessment.",
    },
    {
      q: "Do you provide eddy current tube inspection reports?",
      a: "Yes. Our reports include tube maps showing defect locations, wall loss percentages, defect characterisation (pitting, SCC, wear), and remaining life predictions. These reports support maintenance planning and retubing decisions for clients in Kuwait and the GCC.",
    },
  ],

  "magnetic-flux-leakage": [
    {
      q: "What is Magnetic Flux Leakage (MFL) testing?",
      a: "MFL is an NDT method for detecting corrosion and pitting in steel pipelines and storage tanks. It magnetises the steel surface and detects magnetic field disturbances caused by wall loss — providing rapid, large-area corrosion screening to API 653, API 1163, and ASTM E570 standards in Kuwait.",
    },
    {
      q: "What types of assets can MFL inspect?",
      a: "MFL is used for pipeline in-line inspection (smart pigging), above-ground storage tank floor scanning, and plate inspection. It provides rapid detection of corrosion, erosion, and pitting across large steel surfaces — ideal for pipeline integrity management in Kuwait's oil & gas infrastructure.",
    },
    {
      q: "What standards govern MFL inspection?",
      a: "MFL inspection is governed by API 653 (tank inspection), API 1163 (in-line inspection), and ASTM E570 (ferromagnetic material flux leakage). Our equipment and procedures are calibrated to meet these standards for reliable, traceable results.",
    },
    {
      q: "Can MFL detect both internal and external corrosion?",
      a: "Yes. MFL detects wall loss regardless of whether it occurs on the internal or external surface. Combined with other NDT methods, MFL data helps determine corrosion mechanism and remaining service life for pipelines and tanks operating in Kuwait.",
    },
  ],

  "radiographic-testing-rt": [
    {
      q: "What is Radiographic Testing (RT)?",
      a: "Radiographic Testing uses X-rays and gamma rays to examine the internal structure of materials and detect flaws — including weld defects in pipelines and pressure vessels. We perform conventional film-based and digital radiography to ASME V, API 1104, and EN ISO 17636 standards in Kuwait.",
    },
    {
      q: "What types of defects can radiographic testing detect?",
      a: "RT detects internal volumetric defects including porosity, slag inclusions, lack of fusion, incomplete penetration, cracks, and undercut in welds. It produces a permanent radiographic image that serves as a quality record for each inspected joint.",
    },
    {
      q: "What is digital radiography?",
      a: "Digital radiography replaces traditional film with digital detectors or computed radiography plates — providing instant image display, electronic storage, and enhanced image processing capabilities. It is faster, eliminates chemical processing, and is increasingly specified for new construction in Kuwait.",
    },
    {
      q: "Do you provide on-site radiographic testing?",
      a: "Yes. We perform on-site radiographic testing at construction sites, fabrication shops, and existing installations across Kuwait and the GCC. Our mobile X-ray equipment and radiation safety protocols enable safe, efficient on-site inspections.",
    },
  ],

  "ultrasonic-testing-ut": [
    {
      q: "What is Ultrasonic Testing (UT)?",
      a: "UT uses high-frequency sound waves to inspect the internal structure of materials and detect defects. We perform conventional UT, TOFD, and wall thickness measurement to ASME V, API 1104, and EN ISO 11666 standards in Kuwait and Dubai.",
    },
    {
      q: "What is the difference between conventional UT and TOFD?",
      a: "Conventional UT uses reflected or transmitted sound waves to detect defects, while TOFD uses diffracted waves from defect tips for superior sizing accuracy. TOFD is preferred for critical weld inspection where precise defect depth measurement is required.",
    },
    {
      q: "Can UT measure wall thickness?",
      a: "Yes. UT thickness measurement is a widely used technique for monitoring corrosion and erosion in pipes, vessels, and tanks. We perform spot measurements and automated C-scan mapping to assess remaining wall thickness and predict remaining service life.",
    },
    {
      q: "What materials can be inspected with UT?",
      a: "UT is applicable to metals (steel, aluminium, copper), plastics, composites, and some ceramics. It works on both ferromagnetic and non-ferromagnetic materials, making it one of the most versatile NDT methods available for industrial inspection in Kuwait.",
    },
  ],

  "water-penetration-test-2": [
    {
      q: "What is water penetration testing?",
      a: "Water penetration testing identifies leakage in windows, doors, and curtain wall systems by applying controlled water pressure to the exterior surface while monitoring for interior water ingress. We test to ASTM E1105, AAMA 502, and BS 6375 standards in Kuwait and Dubai.",
    },
    {
      q: "When should water penetration testing be performed?",
      a: "Testing is recommended during new building commissioning, when water ingress complaints arise, after facade repairs, and as part of periodic building envelope assessments. In Kuwait's climate, regular testing helps maintain building integrity against occasional heavy rain and sand-driven moisture.",
    },
    {
      q: "What standards govern your water penetration testing?",
      a: "We perform static pressure water penetration testing to ASTM E1105 (field measurement), AAMA 502 (quality assurance), and BS 6375 (performance of windows and doors). These standards specify test pressures, durations, and acceptance criteria.",
    },
    {
      q: "Do you provide detailed test reports?",
      a: "Yes. Our test reports include test locations, applied pressures, observations, leakage findings with photographs, and recommended remedial actions. Reports are formatted for submission to consultants, contractors, and building owners across Kuwait and the GCC.",
    },
  ],

  "commissioning-and-after-sales-support": [
    {
      q: "What commissioning services do you provide?",
      a: "We provide expert commissioning for flow meters, metering control systems, metering skids, analysers, and CEMS — ensuring seamless integration and peak performance from pre-commissioning through to handover in Kuwait and Dubai.",
    },
    {
      q: "What does after-sales support include?",
      a: "Our 24/7 after-sales support includes emergency breakdown response, preventive maintenance contracts, calibration services, spare parts supply, remote diagnostics, and on-site technical assistance — keeping your metering systems operating reliably.",
    },
    {
      q: "Do you offer maintenance contracts?",
      a: "Yes. We offer customised maintenance contracts covering scheduled inspections, calibration visits, software updates, and priority breakdown response. Contracts are tailored to your equipment type, usage intensity, and budget requirements.",
    },
    {
      q: "Can you support metering systems from other manufacturers?",
      a: "While we specialise in Faure Herman equipment as an authorised OEM Representative, our broader metering expertise allows us to support and maintain metering systems from multiple manufacturers across Kuwait and the GCC.",
    },
  ],

  "metallurgical-services": [
    {
      q: "What is Positive Material Identification (PMI)?",
      a: "PMI is a non-destructive testing method that uses XRF (X-ray Fluorescence) or OES (Optical Emission Spectrometry) to verify the chemical composition of metals and alloys. It confirms that the material used matches the specified grade, preventing costly mix-ups in oil & gas and petrochemical facilities across Kuwait.",
    },
    {
      q: "When is PMI testing required?",
      a: "PMI is typically required during receiving inspection of incoming materials, during fabrication to verify weld consumables, for fitness-for-service assessments on existing equipment, and as part of API 578 compliance programmes in refineries and processing plants.",
    },
    {
      q: "What standards govern PMI testing?",
      a: "PMI testing is governed by API 578 (Material Verification Program for New Alloy Plant Equipment), ASTM E1476 for XRF analysis, and various client specifications. Our technicians follow these standards to deliver traceable, auditable results in Kuwait and Dubai.",
    },
    {
      q: "Can PMI detect alloy grade mix-ups?",
      a: "Yes. PMI is highly effective at detecting material mix-ups — for example, distinguishing 316 stainless steel from 304, or identifying carbon steel where stainless was specified. This is critical for preventing in-service failures in aggressive process environments across the GCC.",
    },
  ],

  "upgrade-of-metering-control-system": [
    {
      q: "What metering control system upgrades do you provide?",
      a: "We specialise in comprehensive metering control system upgradation — including SCADA enhancements, PLC upgrades, flow computer integration, HMI improvements, and data management system enhancements for custody transfer operations in Kuwait and Dubai.",
    },
    {
      q: "How do you minimise disruption during upgrades?",
      a: "We use phased implementation strategies, parallel running with existing systems, and detailed planning to minimise disruption to ongoing metering operations. Our approach ensures your custody transfer system remains operational throughout the upgrade process.",
    },
    {
      q: "When should a metering control system be upgraded?",
      a: "Consider upgrading when legacy hardware becomes unsupported, when new regulatory requirements demand enhanced functionality, when accuracy improvements are needed, or when integration with modern data management systems is required.",
    },
    {
      q: "Do you assess existing systems before recommending upgrades?",
      a: "Yes. We begin every upgrade project with a comprehensive system assessment — documenting current capabilities, identifying gaps, and recommending cost-effective upgrade paths that address your specific operational requirements in Kuwait.",
    },
  ],

  "hose-test": [
    {
      q: "What is a hose test for curtain walls?",
      a: "A hose test is a field quality assurance water check for installed curtain walls, exterior windows, and doors. It uses a calibrated water hose to identify leakage paths and diagnostic information — performed to AAMA 501.2 and ASTM E1105 standards in Kuwait and Dubai.",
    },
    {
      q: "When should a hose test be performed?",
      a: "Hose testing is typically performed after curtain wall or window installation during the commissioning phase, when water ingress complaints arise, or as part of periodic building envelope maintenance assessments in Kuwait's coastal and desert environments.",
    },
    {
      q: "How does a hose test differ from a spray rack test?",
      a: "A hose test uses a directed water stream to identify specific leakage locations, while a spray rack test applies uniform water pressure over a large area. Hose testing is faster and more targeted, making it ideal for pinpointing problem areas on curtain walls.",
    },
    {
      q: "Do you provide diagnostic reports after hose testing?",
      a: "Yes. Our hose test reports include documented test locations, observations, leakage findings, photographs, and recommended remedial actions — providing clear guidance for corrective work on buildings across Kuwait and the GCC.",
    },
  ],
};
