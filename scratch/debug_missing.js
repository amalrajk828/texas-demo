const fs = require('fs');

const missing = [
  'constructions',
  'genuine-spare-parts',
  'mechanical-testing',
  'non-destructive-testing-ndt',
  'plant-automation',
  'specialized-inspection-service',
  'commissioning-and-start-up-support',
  'exterior-windows-doors-curtain-wall-testing',
  'flow-computer-configuration',
  'flow-meter-calibration',
  'metering-control-system-integration',
  'upgrade-of-metering-control-system'
];

const patterns = require('./patterns_output.json');

for (const slug of missing) {
  console.log(`\n=== SLUG: ${slug} ===`);
  const comps = patterns[slug] || [];
  console.log('Imported comps:', comps.map(c => c.name));
  for (const c of comps) {
    const fullPath = c.path.replace(/^@\//, '') + '.tsx';
    if (fs.existsSync(fullPath)) {
      const src = fs.readFileSync(fullPath, 'utf8');
      console.log(`  File: ${fullPath} (${src.length} chars)`);
      const arrays = [...src.matchAll(/const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?\s*=\s*\[/g)].map(m => m[1]);
      console.log(`    Arrays defined: ${arrays.join(', ')}`);
      const h2s = [...src.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      console.log(`    H2s: ${h2s.join(' | ')}`);
    }
  }
}
