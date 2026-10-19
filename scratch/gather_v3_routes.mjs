import fs from 'fs';
import path from 'path';

const v3Dir = path.join(process.cwd(), 'app', '(v3)');
const routes = new Set();

function walk(dir, currentPath = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item === '[slug]') {
        // dynamic routes
        continue;
      }
      walk(fullPath, `${currentPath}/${item}`);
    } else if (item === 'page.tsx' || item === 'page.jsx' || item === 'page.js') {
      routes.add(currentPath === '' ? '/' : `${currentPath}/`);
    }
  }
}

walk(v3Dir);

// Read registry-data.json
const registry = JSON.parse(fs.readFileSync('./lib/services/registry-data.json', 'utf8'));
for (const slug of Object.keys(registry)) {
  routes.add(`/service/${slug}/`);
}
routes.add('/service/flow-measurement-solutions/');
routes.add('/service/inspection-testing/');
routes.add('/service/industrial-automation/');

// Add industries
const industries = ['oil-gas', 'refinery', 'petrochemicals', 'power-plant', 'lng', 'water-treatment', 'cement', 'metal-steel'];
for (const ind of industries) {
  routes.add(`/industries/${ind}/`);
}

// Add solutions
const solutions = ['texaflow', 'space-ai', 'mitsubishi-electric', 'pws-floor-solutions'];
for (const sol of solutions) {
  routes.add(`/solutions/${sol}/`);
}

const routeList = Array.from(routes).sort();
fs.writeFileSync('scratch/all_v3_routes.json', JSON.stringify(routeList, null, 2));
console.log(`Total v3 routes identified: ${routeList.length}`);
