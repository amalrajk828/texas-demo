export type CrossLink = { slug: string; label: string };

export const serviceCrossLinks: Record<string, CrossLink[]> = {
  // NDT Services
  "ultrasonic-testing-ut": [
    { slug: "magnetic-particle-inspection-mt", label: "Magnetic Particle Inspection (MT)" },
    { slug: "phased-array-ultrasonic-testing", label: "Phased Array Ultrasonic Testing (PAUT)" },
  ],
  "magnetic-particle-inspection-mt": [
    { slug: "liquid-penetrant-dye-penetrant-examination-pt", label: "Liquid Penetrant / Dye Penetrant Examination (PT)" },
    { slug: "eddy-current-testing", label: "Eddy Current Testing (ECT)" },
  ],
  "liquid-penetrant-dye-penetrant-examination-pt": [
    { slug: "magnetic-particle-inspection-mt", label: "Magnetic Particle Inspection (MT)" },
    { slug: "radiographic-testing-rt", label: "Radiographic Testing (RT)" },
  ],
  "radiographic-testing-rt": [
    { slug: "ultrasonic-testing-ut", label: "Ultrasonic Testing (UT)" },
    { slug: "time-of-flight-diffraction", label: "Time of Flight Diffraction (TOFD)" },
  ],
  "visual-inspection-vi": [
    { slug: "videoscope", label: "Videoscope Remote Visual Inspection" },
    { slug: "eddy-current-testing", label: "Eddy Current Testing (ECT)" },
  ],
  "eddy-current-testing": [
    { slug: "ultrasonic-testing-ut", label: "Ultrasonic Testing (UT)" },
    { slug: "magnetic-particle-inspection-mt", label: "Magnetic Particle Inspection (MT)" },
  ],
  "phased-array-ultrasonic-testing": [
    { slug: "ultrasonic-testing-ut", label: "Ultrasonic Testing (UT)" },
    { slug: "time-of-flight-diffraction", label: "Time of Flight Diffraction (TOFD)" },
  ],
  "time-of-flight-diffraction": [
    { slug: "phased-array-ultrasonic-testing", label: "Phased Array Ultrasonic Testing (PAUT)" },
    { slug: "radiographic-testing-rt", label: "Radiographic Testing (RT)" },
  ],
  "gamma-ray-pipe-crawler-inspection-systems": [
    { slug: "radiographic-testing-rt", label: "Radiographic Testing (RT)" },
    { slug: "magnetic-flux-leakage", label: "Magnetic Flux Leakage (MFL)" },
  ],
  "magnetic-flux-leakage": [
    { slug: "magnetic-particle-inspection-mt", label: "Magnetic Particle Inspection (MT)" },
    { slug: "eddy-current-testing", label: "Eddy Current Testing (ECT)" },
  ],
  "non-destructive-testing-ndt": [
    { slug: "ultrasonic-testing-ut", label: "Ultrasonic Testing (UT)" },
    { slug: "radiographic-testing-rt", label: "Radiographic Testing (RT)" },
  ],
  "hose-test": [
    { slug: "hose-test-2", label: "Hose Test — Curtain Wall & Facade Water Check" },
    { slug: "water-penetration-test", label: "Water Penetration Test" },
  ],
  "hose-test-2": [
    { slug: "hose-test", label: "Hose Test — Curtain Wall & Facade Water Check" },
    { slug: "air-permeability-test", label: "Air Permeability Test" },
  ],

  // Mechanical Testing
  "hardness-test": [
    { slug: "tensile-test", label: "Tensile Test" },
    { slug: "impact-test", label: "Impact Test" },
  ],
  "tensile-test": [
    { slug: "hardness-test", label: "Hardness Test" },
    { slug: "bend-test", label: "Bend Test" },
  ],
  "bend-test": [
    { slug: "tensile-test", label: "Tensile Test" },
    { slug: "fracture-test", label: "Fracture Test" },
  ],
  "fracture-test": [
    { slug: "impact-test", label: "Impact Test" },
    { slug: "macro-and-micro-test", label: "Macro and Micro Test" },
  ],
  "impact-test": [
    { slug: "fracture-test", label: "Fracture Test" },
    { slug: "hardness-test", label: "Hardness Test" },
  ],
  "macro-and-micro-test": [
    { slug: "fracture-test", label: "Fracture Test" },
    { slug: "pullout-test", label: "Pullout Test for Bolts & Anchors" },
  ],
  "pullout-test": [
    { slug: "macro-and-micro-test", label: "Macro and Micro Test" },
    { slug: "hardness-test", label: "Hardness Test" },
  ],
  "mechanical-testing": [
    { slug: "hardness-test", label: "Hardness Test" },
    { slug: "tensile-test", label: "Tensile Test" },
  ],

  // Inspection Services
  "lifting-equipment-inspection": [
    { slug: "lifting-equipment-inspection-2", label: "Lifting Equipment Inspection" },
    { slug: "specialized-inspection-service", label: "Specialized Inspection Service" },
  ],
  "lifting-equipment-inspection-2": [
    { slug: "lifting-equipment-inspection", label: "Lifting Equipment Inspection" },
    { slug: "exterior-windows-doors-curtain-wall-testing", label: "Exterior Windows, Doors & Curtain Wall Testing" },
  ],
  "exterior-windows-doors-curtain-wall-testing": [
    { slug: "air-permeability-test", label: "Air Permeability Test" },
    { slug: "water-penetration-test", label: "Water Penetration Test" },
  ],
  "air-permeability-test": [
    { slug: "air-permeability-test-2", label: "Air Permeability Test" },
    { slug: "water-penetration-test", label: "Water Penetration Test" },
  ],
  "air-permeability-test-2": [
    { slug: "air-permeability-test", label: "Air Permeability Test" },
    { slug: "exterior-windows-doors-curtain-wall-testing", label: "Exterior Windows, Doors & Curtain Wall Testing" },
  ],
  "water-penetration-test": [
    { slug: "water-penetration-test-2", label: "Water Penetration Test" },
    { slug: "hose-test", label: "Hose Test — Curtain Wall & Facade Water Check" },
  ],
  "water-penetration-test-2": [
    { slug: "water-penetration-test", label: "Water Penetration Test" },
    { slug: "air-permeability-test-2", label: "Air Permeability Test" },
  ],

  // Flow Measurement
  "flow-measurement-solutions": [
    { slug: "flow-computer-configuration", label: "Flow Computer Configuration" },
    { slug: "flow-meter-calibration", label: "Flow Meter Calibration" },
  ],
  "flow-computer-configuration": [
    { slug: "metering-control-system-integration", label: "Metering Control System Integration" },
    { slug: "flow-measurement-solutions", label: "Flow Measurement & Control System Solutions" },
  ],
  "flow-meter-calibration": [
    { slug: "repair-upgrades-for-helical-flow-meters", label: "Repair & Upgrades for Helical Flow Meters" },
    { slug: "validation-and-uncertainty-calculations", label: "Validation and Uncertainty Calculations" },
  ],
  "repair-upgrades-for-helical-flow-meters": [
    { slug: "flow-meter-calibration", label: "Flow Meter Calibration" },
    { slug: "upgrade-of-metering-control-system", label: "Upgrade of Metering Control System" },
  ],
  "metering-control-system-integration": [
    { slug: "upgrade-of-metering-control-system", label: "Upgrade of Metering Control System" },
    { slug: "flow-computer-configuration", label: "Flow Computer Configuration" },
  ],
  "upgrade-of-metering-control-system": [
    { slug: "metering-control-system-integration", label: "Metering Control System Integration" },
    { slug: "metering-expert-services", label: "Metering Expert Services" },
  ],
  "metering-expert-services": [
    { slug: "validation-and-uncertainty-calculations", label: "Validation and Uncertainty Calculations" },
    { slug: "flow-measurement-solutions", label: "Flow Measurement & Control System Solutions" },
  ],
  "validation-and-uncertainty-calculations": [
    { slug: "metering-expert-services", label: "Metering Expert Services" },
    { slug: "flow-meter-calibration", label: "Flow Meter Calibration" },
  ],

  // Corrosion & Metallurgy
  "corrosion-control-services-2": [
    { slug: "metallurgical-services", label: "Metallurgical Services — Positive Material Identification (PMI)" },
    { slug: "heat-treatment-services", label: "Heat Treatment Services" },
  ],
  "metallurgical-services": [
    { slug: "metallurgical-services-2", label: "Metallurgical Services — Positive Material Identification (PMI)" },
    { slug: "corrosion-control-services-2", label: "Corrosion Control Services" },
  ],
  "metallurgical-services-2": [
    { slug: "metallurgical-services", label: "Metallurgical Services — Positive Material Identification (PMI)" },
    { slug: "corrosion-control-services-2", label: "Corrosion Control Services" },
  ],

  // Training
  "advanced-training": [
    { slug: "non-destructive-testing-ndt", label: "Non Destructive Testing (NDT)" },
    { slug: "mechanical-testing", label: "Mechanical Testing Services" },
  ],

  // Construction & Fabrication
  "steel-fabrication": [
    { slug: "structural-steel-erection", label: "Structural Steel Erection" },
    { slug: "hand-rail-fabrication", label: "Hand Rail Fabrication" },
  ],
  "structural-steel-erection": [
    { slug: "steel-fabrication", label: "Steel Fabrication" },
    { slug: "constructions", label: "Industrial Construction & Project Delivery" },
  ],
  "hand-rail-fabrication": [
    { slug: "steel-fabrication", label: "Steel Fabrication" },
    { slug: "structural-steel-erection", label: "Structural Steel Erection" },
  ],
  "constructions": [
    { slug: "steel-fabrication", label: "Steel Fabrication" },
    { slug: "supply-and-installation-of-suspended-access-equipments", label: "Supply and Installation of Suspended Access Equipment" },
  ],
  "supply-and-installation-of-suspended-access-equipments": [
    { slug: "constructions", label: "Industrial Construction & Project Delivery" },
    { slug: "heat-treatment-services", label: "Heat Treatment Services" },
  ],
  "heat-treatment-services": [
    { slug: "heat-treatment-services-2", label: "Heat Treatment Services" },
    { slug: "torque-tightening-bolt-tensioning", label: "Torque Tightening & Bolt Tensioning" },
  ],
  "heat-treatment-services-2": [
    { slug: "heat-treatment-services", label: "Heat Treatment Services" },
    { slug: "corrosion-control-services-2", label: "Corrosion Control Services" },
  ],
  "torque-tightening-bolt-tensioning": [
    { slug: "torque-tightening-bolt-tensioning-2", label: "Torque Tightening & Bolt Tensioning" },
    { slug: "heat-treatment-services", label: "Heat Treatment Services" },
  ],
  "torque-tightening-bolt-tensioning-2": [
    { slug: "torque-tightening-bolt-tensioning", label: "Torque Tightening & Bolt Tensioning" },
    { slug: "heat-treatment-services-2", label: "Heat Treatment Services" },
  ],

  // Electrical & Automation
  "electrical-instrumentation-works": [
    { slug: "industrial-automation", label: "Industrial Automation, PLC SCADA & Process Control Solutions" },
    { slug: "plant-automation", label: "Process Plant Automation" },
  ],
  "industrial-automation": [
    { slug: "plant-automation", label: "Process Plant Automation" },
    { slug: "system-software-upgrade", label: "Control System Integration and Upgradation" },
  ],
  "plant-automation": [
    { slug: "industrial-automation", label: "Industrial Automation, PLC SCADA & Process Control Solutions" },
    { slug: "commissioning-and-start-up-support", label: "Commissioning and Start-up Support" },
  ],
  "system-software-upgrade": [
    { slug: "commissioning-and-start-up-support", label: "Commissioning and Start-up Support" },
    { slug: "new-installation-design-and-commissioning", label: "New Installation Design and Commissioning" },
  ],
  "commissioning-and-start-up-support": [
    { slug: "new-installation-design-and-commissioning", label: "New Installation Design and Commissioning" },
    { slug: "system-software-upgrade", label: "Control System Integration and Upgradation" },
  ],
  "new-installation-design-and-commissioning": [
    { slug: "commissioning-and-start-up-support", label: "Commissioning and Start-up Support" },
    { slug: "industrial-automation", label: "Industrial Automation, PLC SCADA & Process Control Solutions" },
  ],
  "high-and-low-voltage-cable-steel-structure-supports": [
    { slug: "electrical-instrumentation-works", label: "Electrical & Instrumentation Works" },
    { slug: "steel-fabrication", label: "Steel Fabrication" },
  ],

  // Other Services
  "audits-and-specialized-consultancy": [
    { slug: "specialized-inspection-service", label: "Specialized Inspection Service" },
    { slug: "non-destructive-testing-ndt", label: "Non Destructive Testing (NDT)" },
  ],
  "specialized-inspection-service": [
    { slug: "audits-and-specialized-consultancy", label: "Audits and Specialized Consultancy" },
    { slug: "lifting-equipment-inspection", label: "Lifting Equipment Inspection" },
  ],
  "genuine-spare-parts": [
    { slug: "commissioning-and-after-sales-support", label: "Commissioning and After Sales Support" },
    { slug: "repair-upgrades-for-helical-flow-meters", label: "Repair & Upgrades for Helical Flow Meters" },
  ],
  "commissioning-and-after-sales-support": [
    { slug: "genuine-spare-parts", label: "Genuine Spare Parts" },
    { slug: "system-software-upgrade", label: "Control System Integration and Upgradation" },
  ],

  // Services not in categories above
  "videoscope": [
    { slug: "visual-inspection-vi", label: "Visual Inspection (VI)" },
    { slug: "eddy-current-testing", label: "Eddy Current Testing (ECT)" },
  ],
  "inspection-testing": [
    { slug: "non-destructive-testing-ndt", label: "Non Destructive Testing (NDT)" },
    { slug: "mechanical-testing", label: "Mechanical Testing Services" },
  ],
};
