const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'assets', 'audio');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Voiceover scripts for each section
const scripts = [
  {
    name: '01-intro',
    text: 'Texas Technical Services. Powering Industrial Excellence across the GCC.',
    duration: 7
  },
  {
    name: '02-company-overview',
    text: 'Established in 2008, Texas Technical Services is an ISO certified company serving the GCC industrial sector for over 17 years. With strategic partnerships across leading OEMs, we deliver comprehensive solutions in flow measurement, inspection and testing, and industrial automation.',
    duration: 12
  },
  {
    name: '03-flow-measurement',
    text: 'Flow Measurement and Control Systems. We deliver custody transfer metering, flow computer configuration, validation services, and system upgrades with precision and compliance.',
    duration: 14
  },
  {
    name: '04-inspection',
    text: 'Inspection and Testing Solutions. Our comprehensive services include non-destructive testing, mechanical testing, advanced NDT methods, and equipment inspection to the highest international standards.',
    duration: 15
  },
  {
    name: '05-automation',
    text: 'Industrial Process Automation. From legacy system migrations to greenfield builds, we provide complete PLC, SCADA, and HMI solutions for oil and gas industries.',
    duration: 14
  },
  {
    name: '06-construction',
    text: 'Construction and Fabrication. Structural steel erection, steel fabrication, electrical and instrumentation works, and gantry systems for industrial facilities.',
    duration: 13
  },
  {
    name: '07-outro',
    text: 'Texas Technical Services. Let us build the future together. Visit us at texastechserv.com. Serving Kuwait, Dubai, Saudi Arabia, Bahrain, Qatar, and Oman.',
    duration: 12
  }
];

function generateTTS(text, outputPath) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=en&client=tw-ob`;
    
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          fs.writeFileSync(outputPath, Buffer.concat(chunks));
          resolve();
        });
      } else {
        reject(new Error(`HTTP ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  console.log('Generating voiceover audio files...\n');
  
  for (const script of scripts) {
    const outputPath = path.join(OUTPUT_DIR, `${script.name}.mp3`);
    console.log(`Generating: ${script.name}`);
    try {
      await generateTTS(script.text, outputPath);
      console.log(`  ✓ Saved to ${outputPath}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }
  
  console.log('\nDone! All voiceover files generated.');
}

main();
