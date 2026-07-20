const fs = require('fs');
const path = require('path');
const https = require('https');

const audioDir = path.join(__dirname, 'assets', 'audio');

const scripts = {
  '01-intro': 'Texas Technical Services. Industries we serve. Precision OEM solutions across eight industrial sectors.',
  '02-company-overview': 'With over eighteen years of experience and more than two hundred clients served, Texas Technical Services is a trusted partner for industrial solutions across the GCC. ISO nine thousand and one, fourteen thousand and one, and forty-five thousand and one certified.',
  '03-industries-grid': 'From oil and gas to water treatment, we deliver comprehensive solutions across eight demanding industrial sectors.',
  '04-oil-gas': 'Oil and Gas. Upstream, midstream, and downstream. Comprehensive solutions including advanced flow metering, precision flow meters, flow computers, and analyzers to optimize operations and ensure accurate data analysis.',
  '05-refinery': 'Refinery. Process control and continuous emissions monitoring. Cutting-edge flow meters, flow computers, CEMS, and analyzers for essential industrial automation solutions.',
  '06-petrochemicals': 'Petrochemicals. Process automation and flow solutions. State-of-the-art flow metering solutions, flow computers, and analyzers for complex production environments.',
  '07-lng': 'LNG. Custody transfer, metering, and safety. Products designed to enhance LNG plant operations with precise measurement, efficiency, and safety.',
  '08-power-plant': 'Power Plant. Generation, emissions, and grid. OEM products including CEMS, flow meters, analyzers, and automation systems to optimize performance and emissions monitoring.',
  '09-water-treatment': 'Water Treatment. Municipal and industrial applications. CEMS, analyzers, and automation systems for precise monitoring, quality control, and operational efficiency.',
  '10-cement': 'Cement. Production, quality, and emissions monitoring. CEMS, analyzers, and automation systems for operational excellence.',
  '11-metal-steel': 'Metal and Steel. Monitoring, safety, and efficiency. CEMS, analyzers, and automation systems to enhance efficiency and quality control.',
  '12-outro': 'Have a project in mind? Contact us today. Kuwait and UAE offices ready to help. Texas Technical Services dot com.'
};

function generateTTS(text, filename) {
  return new Promise((resolve, reject) => {
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=en&client=tw-ob`;
    
    const file = fs.createWriteStream(path.join(audioDir, filename));
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Generated: ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Generated: ${filename}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(path.join(audioDir, filename), () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Generating voiceovers...');
  
  for (const [name, text] of Object.entries(scripts)) {
    const filename = `${name}.mp3`;
    try {
      await generateTTS(text, filename);
    } catch (err) {
      console.error(`Failed to generate ${filename}:`, err.message);
    }
  }
  
  console.log('Done!');
}

main();
