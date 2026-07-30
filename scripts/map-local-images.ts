import * as fs from 'fs';
import * as path from 'path';

const MAPPINGS: Record<string, { image: string, alt: string }> = {
  // Cluster 1: Flow Measurement & Custody Metering (1-10)
  "custody-transfer-metering-guide": {
    image: "/flow_metering_skid.jpg",
    alt: "An industrial custody transfer flow metering skid with piping, valves, and measuring instruments."
  },
  "scada-system-upgrade-guide": {
    image: "/images/control_room_interior_and_console/dynamic_m/1.jpg",
    alt: "A modern industrial control room with multiple SCADA computer monitors displaying real-time process data grids."
  },
  "cems-continuous-emissions-monitoring-guide": {
    image: "/cems.png",
    alt: "A Continuous Emissions Monitoring System (CEMS) cabinet with analysis modules and digital readouts."
  },
  "liquid-vs-gas-flow-meters": {
    image: "/images/services/flow-measurement.jpg",
    alt: "A multi-path ultrasonic flow meter installed on an industrial gas pipeline."
  },
  "custody-metering-skid-validation": {
    image: "/images/services/METERING-1.png",
    alt: "Technicians validating calibration parameters on a large custody transfer oil metering run."
  },
  "flow-computer-configuration": {
    image: "/flow_computer.png",
    alt: "An electronic flow computer module with a digital LCD screen mounted in an automation cabinet."
  },
  "metering-control-system-upgrade": {
    image: "/omni_flow_computer.png",
    alt: "An upgraded Omni flow computer system panel with process variables displayed on the interface screen."
  },
  "flare-meter-calibration": {
    image: "/flare_meter.png",
    alt: "A specialized ultrasonic flare gas flow meter sensor assembly installed on a heavy industrial stack header."
  },
  "helical-flow-meter-maintenance": {
    image: "/helical_turbine_meter.png",
    alt: "A precision helical turbine flow meter showing the internal rotor blades during inspection."
  },
  "measurement-uncertainty-custody-transfer": {
    image: "/images/services/Banc-Calibr.jpg",
    alt: "A metrologist configuring high-accuracy reference instrumentation on a calibration test bench."
  },

  // Cluster 2: SCADA & Industrial Automation (11-20)
  "custody-metering-audit": {
    image: "/images/services/metering-experts.jpg",
    alt: "Metering system auditors reviewing calibration reports and validation logs next to an oil metering skid."
  },
  "lng-custody-transfer-measurement": {
    image: "/lng.jpg",
    alt: "A large liquefied natural gas (LNG) carrier ship docked alongside a terminal with loading arms."
  },
  "plc-vs-pac-oil-gas-automation": {
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    alt: "A modular MELSEC iQ-R series programmable logic controller (PLC) rack with input-output modules."
  },
  "iconics-scada-got-hmi-integration": {
    image: "/images/got/GOT2000-Series.png",
    alt: "A Mitsubishi GOT2000 HMI touch panel displaying process flow diagrams in an automation control loop."
  },
  "vfd-frequency-inverter-industrial-applications": {
    image: "/images/frequency-inverters/FR-A800.webp",
    alt: "A heavy-duty Mitsubishi FR-A800 variable frequency drive (VFD) inverter unit mounted on a panel."
  },
  "industrial-cybersecurity-scada-iec62443": {
    image: "/images/control_room_interior_and_console/xlat_cyber/1.jpg",
    alt: "Network server racks with fiber optic patch cords blinking inside an industrial automation cybersecurity center."
  },
  "ac-servo-systems-manufacturing-guide": {
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    alt: "A high-precision Mitsubishi MR-JE servo amplifier drive unit designed for accurate motion control."
  },
  "industrial-field-instruments-selection-guide": {
    image: "/images/field_instruments/pressure_sensors/1.png",
    alt: "An explosion-proof industrial pressure transmitter sensor with a digital local display screen."
  },
  "control-room-design-ergonomics-hmi": {
    image: "/images/control_room_interior_and_console/xlat/2.jpg",
    alt: "Ergonomically designed console desks in a 24/7 petrochemical plant operations room."
  },
  "industrial-sensors-types-applications": {
    image: "/images/sensors/Photoelectric Sensors.png",
    alt: "Industrial photoelectric distance sensors mounted on a manufacturing conveyor line."
  },

  // Cluster 3: Electrical Systems & VFDs (21-30)
  "industrial-automation-commissioning-guide": {
    image: "/images/services/automation.jpg",
    alt: "Commissioning engineers inspecting wiring terminations and loops inside an automation control panel."
  },
  "ndt-methods-complete-guide": {
    image: "/images/services/ndt.jpg",
    alt: "A non-destructive testing (NDT) technician preparing a weld seam on a steel pipeline for inspection."
  },
  "phased-array-ultrasonic-testing-guide": {
    image: "/images/services/phased-array.jpg",
    alt: "An inspector scanning a structural steel weld using a phased array ultrasonic testing (PAUT) probe."
  },
  "tofd-time-of-flight-diffraction-guide": {
    image: "/images/services/time-of-flight-diffraction-tofd-ultrasonic-testing.jpg",
    alt: "A dual-probe TOFD scanner positioned on a welded plate for advanced internal defect detection."
  },
  "magnetic-particle-inspection-guide": {
    image: "/images/services/Magnetic-Particle-Inspection.jpg",
    alt: "Technicians applying magnetic dust to reveal surface cracks on a metal component under an electromagnetic yoke."
  },
  "radiographic-testing-industrial-inspection": {
    image: "/images/services/rgt.webp",
    alt: "An industrial radiographic x-ray crawler system positioned inside a large diameter pipeline section."
  },
  "eddy-current-testing-tube-inspection": {
    image: "/images/services/Eddy-Current-Testing.jpg",
    alt: "An ECT probe being inserted into a condenser tube sheet to detect wall loss and cracks."
  },
  "mechanical-testing-materials": {
    image: "/images/services/mechanical-testing.jpg",
    alt: "A computerized universal tensile testing machine pulling a metal specimen to measure yield strength."
  },
  "weld-inspection-standards": {
    image: "/images/services/inspection-testing.jpg",
    alt: "A quality inspector checking weld profile parameters on structural piping using a weld gauge."
  },
  "magnetic-flux-leakage-pipeline-inspection": {
    image: "/images/services/Magnetic-Flux-Leakage.jpg",
    alt: "A magnetic flux leakage (MFL) tool scanning the floor plates of a bulk liquid storage tank."
  },

  // Cluster 4: Analyzers & Instrumentation (31-40)
  "positive-material-identification-pmi": {
    image: "/images/services/Macro-and-Micro-Test.jpg",
    alt: "Metallurgists examining structural microstructures in a quality control laboratory."
  },
  "dust-analyzer-cement-plant": {
    image: "/dust_analyzer.png",
    alt: "A laser-based stack dust analyzer transceiver unit mounted on an industrial exhaust stack duct."
  },
  "gas-analyzers-petrochemical-refinery": {
    image: "/gas_analyzer.png",
    alt: "An extractive multi-gas analyzer system installed inside an instrumentation enclosure."
  },
  "in-situ-vs-extractive-cems": {
    image: "/extractive_gas_analyzer.jpg",
    alt: "An extractive gas analysis system displaying concentration curves on a laboratory monitor."
  },
  "custody-metering-solutions-architecture": {
    image: "/flow_metering_skid.jpg",
    alt: "A complete custody transfer flow metering skid with liquid turbine meters and a proving run."
  },
  "sick-analyzers-oil-gas-integration": {
    image: "/images/cems/1.jpg",
    alt: "A shelter housing integrated SICK process gas analyzers in an oil and gas refining plant."
  },
  "calibration-gas-cems-standards": {
    image: "/images/cems/mcs100ft/1.png",
    alt: "High-pressure calibration gas cylinders connected to a CEMS gas conditioning panel."
  },
  "flue-gas-analyzer-maintenance-guide": {
    image: "/images/gas_analyzers/gm32/1.jpg",
    alt: "A process technician calibrating an in-situ gas analyzer transceiver on a hot duct flange."
  },
  "gas-chromatograph-custody-transfer": {
    image: "/images/cems/mcs200hw/2.png",
    alt: "An industrial process gas chromatograph system executing natural gas composition analyses."
  },
  "power-plant-environmental-monitoring-cems": {
    image: "/power_plant.jpg",
    alt: "Cooling towers and emissions stacks of a modern coal-fired thermal power generation station."
  },

  // Cluster 5: Mechanical & Structural Testing (41-50)
  "flow-measurement-upstream-oil-gas": {
    image: "/oil_and_gas.jpg",
    alt: "An offshore oil and gas production platform wellhead manifold configuration in deep water."
  },
  "custody-transfer-pipeline-operations": {
    image: "/refinery.webp",
    alt: "An aerial view of an oil refinery pipeline junction and distillation columns at sunset."
  },
  "ndt-oil-gas-refineries": {
    image: "/images/services/Non-Destructive-Testing-NDT.jpg.webp",
    alt: "A qualified NDT inspector conducting ultrasonic testing on a refinery pressure vessel weld."
  },
  "scada-offshore-oil-gas-platforms": {
    image: "/images/control_room_interior_and_console/xlat_cyber/2.jpg",
    alt: "SCADA server racks with status indicators flashing inside an offshore platform controls enclosure."
  },
  "corrosion-control-oil-gas-infrastructure": {
    image: "/images/services/corrosion-control-services-2.jpg",
    alt: "Inspectors evaluating anti-corrosive coating thickness on high-pressure gas piping lines."
  },
  "safety-instrumented-systems-oil-gas": {
    image: "/images/industrial_automation/industrial_control_panels/1.jpg",
    alt: "A safety-instrumented system (SIS) safety PLC cabinet with dual-redundant power supplies."
  },
  "safety-systems-lng-plants": {
    image: "/images/control_room_interior_and_console/xlat_cyber/1.jpg",
    alt: "High-integrity safety instrumented systems and ESD panel indicators inside an LNG control room."
  },
  "heat-treatment-oil-gas-fabrication": {
    image: "/images/services/Heat-Treatment-Services.jpeg",
    alt: "Electrical resistance heating pads wrapped around a pipe weld joint for pre-heating."
  },
  "lifting-equipment-safety-oil-gas": {
    image: "/images/services/lifting_eq_inspection.jpg",
    alt: "A crane hook and steel cable slings undergoing magnetic particle inspection for stress cracking."
  },
  "hydrotest-pipelines": {
    image: "/images/services/HOSE-TEST.jpg",
    alt: "A high-pressure hydrostatic test pump assembly connected to a pipeline section for pressure testing."
  },
  "material-certification-oil-gas": {
    image: "/images/services/Macro-and-Micro-Test.jpg",
    alt: "A QA/QC manager examining alloy microstructure in a metallurgical laboratory."
  },

  // Cluster 6: Non-Destructive Testing (NDT) (51-60)
  "flow-measurement-power-plants": {
    image: "/images/services/flow-measurement.jpg",
    alt: "An ultrasonic liquid flow meter with clamp-on transducers measuring boiler feed water flow."
  },
  "cems-coal-gas-fired-power-plants": {
    image: "/cems.png",
    alt: "A power plant stack continuous emissions monitoring system (CEMS) analytical rack."
  },
  "plc-scada-automation-power-plants": {
    image: "/images/control_room_interior_and_console/dynamic_m/2.jpg",
    alt: "A power station control room console featuring human-machine interface (HMI) screens."
  },
  "ndt-power-plant-boilers": {
    image: "/images/services/ndt.jpg",
    alt: "An inspector scanning boiler waterwall tubes inside a power generation boiler during shutdown."
  },
  "vfd-power-plant-fan-pump-control": {
    image: "/images/frequency-inverters/FR-A800.webp",
    alt: "A heavy-capacity variable frequency drive cabinet controlling a large boiler draft fan motor."
  },
  "turbine-flow-meters-steam-measurement": {
    image: "/helical_turbine_meter.png",
    alt: "A heavy-duty gas turbine flow meter used for steam and process fluid volume monitoring."
  },
  "electrical-instrumentation-power-plants": {
    image: "/images/services/electrical-inst.png",
    alt: "An electrician installing terminal blocks inside a power plant instrumentation junction cabinet."
  },
  "control-room-design-power-plants": {
    image: "/images/control_room_interior_and_console/xlat/1.jpg",
    alt: "A modern control room layout with curved screens displaying electrical grid load balances."
  },
  "thermal-power-plant-emissions-compliance": {
    image: "/power_plant.jpg",
    alt: "Cooling towers emitting steam alongside a flue gas stack at a thermal power plant."
  },
  "predictive-maintenance-power-plants": {
    image: "/images/services/inspection-testing.jpg",
    alt: "An engineer using a portable vibration analyzer on a large high-pressure turbine housing."
  },

  // Cluster 7: LNG & Cryogenic Flow Control (61-70)
  "lng-terminal-flow-measurement": {
    image: "/lng.jpg",
    alt: "A cryogenic Liquefied Natural Gas (LNG) carrier ship docked at an import/export terminal."
  },
  "lng-custody-transfer-ship-to-shore": {
    image: "/lng.jpg",
    alt: "An LNG tanker terminal loading area showing cryogenic piping manifolds and custody transfer skids."
  },
  "cems-lng-facilities": {
    image: "/cems.png",
    alt: "A CEMS analyzer cabinet designed for monitoring stack emissions at an LNG liquefaction facility."
  },
  "ndt-lng-storage-tanks": {
    image: "/images/services/ndt.jpg",
    alt: "Technicians performing ultrasonic weld inspections on a cryogenic LNG storage tank wall."
  },
  "lng-vaporizer-flow-control": {
    image: "/images/services/flow-measurement.jpg",
    alt: "An ultrasonic flow meter tracking boil-off gas rates on cryogenic vaporizer piping."
  },
  "boil-off-gas-measurement-lng": {
    image: "/images/services/DigitalOilAndGas-1 (1).webp",
    alt: "An industrial gas metering run processing boil-off gas (BOG) in an LNG storage facility."
  },
  "lng-truck-loading-metering-skid": {
    image: "/flow_metering_skid.jpg",
    alt: "A specialized skid system with Coriolis flow meters designed for fiscal LNG truck loading."
  },
  "lng-truck-loading-metering-skids": {
    image: "/flow_metering_skid.jpg",
    alt: "A specialized skid system with Coriolis flow meters designed for fiscal LNG truck loading."
  },
  "lng-plant-automation-plc-scada": {
    image: "/images/control_room_interior_and_console/dynamic_xe/2.jpg",
    alt: "Dual-redundant PLC automation panels controlling gas purification loops at an LNG plant."
  },
  "leak-detection-lng-facilities": {
    image: "/images/services/Non-Destructive-Testing-NDT.jpg.webp",
    alt: "An NDT technician checking cryogenic piping connections for structural leaks using ultrasonic probes."
  },

  // Cluster 8: Water & Wastewater Process Automation (71-80)
  "flow-measurement-water-treatment": {
    image: "/water_treatment.webp",
    alt: "Large circular clarification and sedimentation tanks in a wastewater treatment facility."
  },
  "scada-water-wastewater-treatment": {
    image: "/images/control_room_interior_and_console/dynamic_m/3.jpg",
    alt: "SCADA systems displaying pump and aeration basin status in a water reclamation control center."
  },
  "chemical-dosing-control-flow-meters": {
    image: "/images/field_instruments/flow_sensor/1.png",
    alt: "A high-precision chemical dosing flow sensor mounted on a water treatment process line."
  },
  "water-quality-analyzers-ph-turbidity-chlorine": {
    image: "/images/services/inspection-testing.jpg",
    alt: "An analytical technician testing water samples for pH, turbidity, and chemical content."
  },
  "vfd-water-pump-control": {
    image: "/images/frequency-inverters/FR-A800.webp",
    alt: "Mitsubishi variable frequency drives (VFD) controlling water distribution pump motors."
  },
  "ndt-water-treatment-infrastructure": {
    image: "/images/services/ndt.jpg",
    alt: "An inspector conducting NDT ultrasonic tests on high-pressure water mains and tanks."
  },
  "ultrasonic-flow-meters-water-distribution": {
    image: "/clamp_on_meter.png",
    alt: "A clamp-on transit-time ultrasonic liquid flow meter installed on a municipal water main."
  },
  "remote-monitoring-scada-water-utilities": {
    image: "/images/control_room_interior_and_console/xlat/3.jpg",
    alt: "Operators monitoring pump stations and reservoir levels via SCADA screens in a utility room."
  },
  "desalination-plant-instrumentation": {
    image: "/water_treatment.webp",
    alt: "Reverse osmosis filter racks and pressure gauges in a sea water desalination plant."
  },
  "corrosion-monitoring-water-treatment": {
    image: "/images/services/Magnetic-Flux-Leakage.jpg",
    alt: "An inspector using magnetic flux leakage (MFL) to check structural steel tank bottoms for corrosion."
  },

  // Cluster 9: Cement Plant & Steel Mill Process Controls (81-90)
  "cement-plant-environmental-monitoring": {
    image: "/cement_industry.jpg",
    alt: "Emissions stack and rotary kiln assembly of a dry-process cement manufacturing plant."
  },
  "cement-plant-emissions-monitoring": {
    image: "/cement_industry.jpg",
    alt: "Emissions stack and rotary kiln assembly of a dry-process cement manufacturing plant."
  },
  "flow-measurement-cement-manufacturing": {
    image: "/images/services/flow-measurement.jpg",
    alt: "An industrial flow meter tracking air flow rates on large baghouse dust collectors in a cement mill."
  },
  "plc-automation-cement-kiln": {
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    alt: "PLC systems controlling raw material feed and burner temperatures in a cement rotary kiln."
  },
  "ndt-steel-manufacturing": {
    image: "/metal_and_steel.jpg",
    alt: "An industrial furnace processing structural steel sheets in a manufacturing plant."
  },
  "steel-fabrication-quality-control": {
    image: "/images/services/Structural-Steel-Work.webp",
    alt: "Quality inspectors examining weld seams on structural steel beams in a fabrication shop."
  },
  "vfd-cement-plant-fan-mill": {
    image: "/images/frequency-inverters/FR-A800.webp",
    alt: "High-capacity variable speed drive units controlling cement kiln exhaust fan motors."
  },
  "structural-steel-inspection-ndt": {
    image: "/images/services/ndt.jpg",
    alt: "An NDT inspector scanning structural steel columns using an ultrasonic testing device."
  },
  "heat-treatment-steel-fabrication": {
    image: "/images/services/Heat-Treatment-Services.jpeg",
    alt: "Preheating structural steel beams using induction coils before post-weld heat treatment."
  },
  "dust-control-monitoring-metal-processing": {
    image: "/dust_analyzer.png",
    alt: "A stack dust analyzer sensor checking particulate levels in a steel mill exhaust stack."
  },
  "industrial-sensors-steel-plant": {
    image: "/images/sensors/Photoelectric Sensors.png",
    alt: "Heavy-duty industrial proximity and distance sensors installed on a steel rolling mill table."
  },

  // Cluster 10: Flow Measurement & Custody Transfer (91-100)
  "custody-transfer-metering-skid": {
    image: "/flow_metering_skid.jpg",
    alt: "A liquid hydrocarbon custody transfer metering skid with turbine flow meters and a prover."
  },
  "faure-herman-helical-flow-meters": {
    image: "/helical_turbine_meter.png",
    alt: "A Faure Herman helical turbine flow meter installed in an oil pipeline run."
  },
  "liquid-flow-meters-crude-oil-refined-products": {
    image: "/ultrasonic_liquid_flow_meter.png",
    alt: "A multi-path ultrasonic liquid flow meter designed for crude oil custody transfer."
  },
  "gas-flow-meters-aga-standards": {
    image: "/custody_transfer_gas_flow_meter.png",
    alt: "A high-capacity custody transfer ultrasonic gas flow meter installed on a pipeline."
  },
  "flare-gas-flow-meters": {
    image: "/flare_meter.png",
    alt: "An ultrasonic flare gas meter sensor assembly mounted on a flare header stack."
  },
  "omni-flow-computers-custody-transfer": {
    image: "/omni_flow_computer.png",
    alt: "An Omni 6000 flow computer system panel processing custody transfer calculations."
  },
  "coriolis-vs-turbine-flow-meters": {
    image: "/helical_turbine_meter.png",
    alt: "A side-by-side comparison setup of a Coriolis mass flow meter and a turbine flow meter."
  },
  "ultrasonic-liquid-flow-meters-installation": {
    image: "/clamp_on_meter.png",
    alt: "Transducer alignment on an ultrasonic clamp-on liquid flow meter pipe installation."
  },
  "meter-proving-systems-pipe-prover-small-volume-prover": {
    image: "/images/services/METERING-1.png",
    alt: "A bi-directional pipe prover system validating flow meter factors on-site."
  },
  "metering-skid-fat-testing": {
    image: "/images/flow_metering_skid/1.png",
    alt: "Factory acceptance testing (FAT) of a completed custody metering skid in a workshop."
  }
};

const blogArticlesPath = path.resolve(process.cwd(), 'lib/blogArticles.ts');
let fileContent = fs.readFileSync(blogArticlesPath, 'utf8');

// Regex patterns to match properties
const entryRegex = /"([a-zA-Z0-9_-]+)"\s*:\s*\{/g;
let match;
const matches: { slug: string, index: number }[] = [];

while ((match = entryRegex.exec(fileContent)) !== null) {
  matches.push({
    slug: match[1],
    index: match.index
  });
}

matches.sort((a, b) => b.index - a.index);

let processedCount = 0;
let tableRows: string[] = [];

for (const m of matches) {
  const mapping = MAPPINGS[m.slug];
  if (!mapping) {
    console.warn(`⚠️ Warning: No mapping found for slug ${m.slug}`);
    continue;
  }

  const segmentStart = m.index;
  const nextMatch = matches.find(item => item.index > m.index);
  const segmentEnd = nextMatch ? nextMatch.index : fileContent.length;
  let segment = fileContent.substring(segmentStart, segmentEnd);

  // Replace image property
  const imageRegex = /image:\s*"[^"]*"/;
  if (imageRegex.test(segment)) {
    segment = segment.replace(imageRegex, `image: "${mapping.image}"`);
  }

  // Replace imageAlt property
  const imageAltRegex = /imageAlt:\s*"[^"]*"/;
  if (imageAltRegex.test(segment)) {
    segment = segment.replace(imageAltRegex, `imageAlt: "${mapping.alt}"`);
  }

  // Delete imageCredit property line
  const imageCreditRegex = /\s*imageCredit:\s*\{[^}]*\},?\n?/;
  if (imageCreditRegex.test(segment)) {
    segment = segment.replace(imageCreditRegex, '\n');
  }

  fileContent = fileContent.substring(0, segmentStart) + segment + fileContent.substring(segmentEnd);
  processedCount++;

  // Collect table row
  tableRows.push(`| ${m.slug} | ${mapping.image} | ${mapping.alt} |`);
}

fs.writeFileSync(blogArticlesPath, fileContent, 'utf8');
console.log(`✅ Success: Processed ${processedCount} blog posts!`);

// Print the Review Table in markdown format
console.log("\n### REVIEW TABLE: ALL 100 BLOG ENTRIES MAPPED TO REAL SITE IMAGES\n");
console.log("| Blog Title/Slug | Assigned Local Image Path | Image Description |");
console.log("| :--- | :--- | :--- |");
tableRows.reverse().forEach(row => console.log(row));
