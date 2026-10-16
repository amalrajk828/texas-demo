const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const backupDir = path.join(process.cwd(), 'scratch', 'legacy_service_routes_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const items = fs.readdirSync(legacyDir);
let movedCount = 0;

for (const item of items) {
  const itemPath = path.join(legacyDir, item);
  if (fs.statSync(itemPath).isDirectory() && item !== 'page') {
    const destPath = path.join(backupDir, item);
    fs.cpSync(itemPath, destPath, { recursive: true });
    fs.rmSync(itemPath, { recursive: true, force: true });
    movedCount++;
  }
}

console.log(`Safely moved ${movedCount} legacy route folders to ${backupDir}.`);
