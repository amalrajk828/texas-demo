import fs from 'fs';

const filePath = './lib/services/registry-data.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Replacement descriptions for the 4 services with {stat.label}
const REAL_SUBTITLES = {
  "flow-computer-configuration": "Our dedicated team customizes solutions to your specific flow computational and configuration needs in compliance with global standards (API MPMS, AGA, ISO, NTEP & OIML), guaranteeing seamless integration into your existing systems.",
  "flow-meter-calibration": "Faure Herman offers calibration services in our world class ILAC/COFRAC ISO 17025 accredited facility located in France — handling your range of flowmeters and providing service available to other brands and competitive metering technologies on field-specified viscosity fluids.",
  "metering-control-system-integration": "Welcome to TTS, where we specialize in Custody Transfer Flow Metering Control System Development and Integration. With an unwavering commitment to precision, accuracy, and compliance, we are your trusted partner for optimizing and enhancing your custody transfer operations.",
  "upgrade-of-metering-control-system": "Elevate your industrial operations with our expert Metering Control System Upgradation service. At TTS, we specialize in optimizing your existing control systems, ensuring they meet the latest industry standards and technological advancements. Seamlessly integrating state-of-the-art technologies like Flow Computers, SCADA, PLCs, servers, and HMI interfaces — we empower you to make data-driven decisions and streamline your workflow."
};

function cleanString(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\{["']\s*["']\}/g, ' ')
    .replace(/\{&quot;\s*&quot;\}/g, ' ')
    .replace(/&#123;&quot;\s*&quot;&#125;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanDeep(obj) {
  if (!obj) return obj;
  if (typeof obj === 'string') {
    return cleanString(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(cleanDeep);
  }
  if (typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = cleanDeep(v);
    }
    return res;
  }
  return obj;
}

let cleanedTitlesCount = 0;
let fixedSubtitlesCount = 0;

for (const [slug, item] of Object.entries(data)) {
  if (item.title && item.title.includes('{" "}')) {
    cleanedTitlesCount++;
  }
  // Check subtitle
  if (REAL_SUBTITLES[slug]) {
    item.subtitle = REAL_SUBTITLES[slug];
    fixedSubtitlesCount++;
  }

  // Deep clean all fields in the service
  data[slug] = cleanDeep(item);
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`Cleaned registry-data.json:`);
console.log(`- Fixed ${cleanedTitlesCount} titles with raw JSX spaces`);
console.log(`- Fixed ${fixedSubtitlesCount} subtitles that were {stat.label}`);
