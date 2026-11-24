// Existing service photography for registry entries without a hero image.
const serviceImages: Record<string, string> = {
  "audits-and-specialized-consultancy": "audits-1500x750-1.jpeg",
  "bend-test": "Three_point_flexural_test-scaled.jpg",
  "commissioning-and-after-sales-support": "commissioning.png",
  "commissioning-and-start-up-support": "automation_full.jpg",
  constructions: "construction.jpg",
  "exterior-windows-doors-curtain-wall-testing": "water-penetration.png",
  "flow-computer-configuration": "flow-computer.png",
  "flow-meter-calibration": "Banc-Calibr.jpg",
  "fracture-test": "fracture-testing.jpg",
  "hardness-test": "Hardness-Test.jpg",
  "impact-test": "charpy_impact_test.jpg",
  "liquid-penetrant-dye-penetrant-examination-pt": "PT.jpg",
  "macro-and-micro-test": "Macro-and-Micro-Test.jpg",
  "magnetic-particle-inspection-mt": "Magnetic-Particle-Inspection.jpg",
  "mechanical-testing": "mechanical-testing.jpg",
  "metering-control-system-integration": "metering-control-integration.jpg",
  "metering-expert-services": "metering-experts.jpg",
  "non-destructive-testing-ndt": "ndt.jpg",
  "plant-automation": "automation_full.jpg",
  "radiographic-testing-rt": "rgt.webp",
  "repair-upgrades-for-helical-flow-meters": "helical-repair.webp",
  "specialized-inspection-service": "inspection-testing.jpg",
  "system-software-upgrade": "automation.jpg",
  "tensile-test": "tensile-test2.jpg",
  "ultrasonic-testing-ut": "phased-array.jpg",
  "upgrade-of-metering-control-system": "metering-upgrade.png",
  "validation-and-uncertainty-calculations": "validation.jpg",
  "visual-inspection-vi": "inspection-testing.jpg",
};

export function getServiceHeroImage(slug: string, title: string) {
  const file = serviceImages[slug];
  return file ? { src: `/images/services/${file}`, alt: `${title} engineering services` } : undefined;
}
