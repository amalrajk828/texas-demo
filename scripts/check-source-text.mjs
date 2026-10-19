import fs from 'fs';
import path from 'path';

const TARGET_DIRS = ['app', 'components', 'lib', 'data'];
const IGNORED_PATHS = ['node_modules', '.next', 'scratch', '.git'];

const VIOLATIONS = [];

function checkContent(filePath) {
  for (const ign of IGNORED_PATHS) {
    if (filePath.includes(ign)) return;
  }

  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx', '.json', '.mdx', '.md'].includes(ext)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. JSON files
  if (ext === '.json') {
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (/\{\\" \\"\}/.test(line) || /\{" "\}/.test(line) || /\{' '\}/.test(line) || /\{stat\.[^}]+\}/.test(line) || /\{item\.[^}]+\}/.test(line)) {
        VIOLATIONS.push({
          file: filePath,
          line: idx + 1,
          content: line.trim(),
          reason: 'Raw JSX space or identifier braces in JSON string'
        });
      }
    });
    return;
  }

  // 2. TS/TSX/JS/JSX files
  // Match string literals ("...", '...') that contain raw {" "} or {stat.label} or unescaped braces
  // Note: Valid JS template literals with `${...}` are normal evaluated code, not literal braces.
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // String literal in quotes with {" "} or {' '}
    if (/(["'])[^"'\n]*\{["']\s*["']\}[^"'\n]*\1/.test(line)) {
      VIOLATIONS.push({
        file: filePath,
        line: idx + 1,
        content: line.trim(),
        reason: 'Raw JSX space {" "} inside string literal'
      });
    }

    // Literal brace identifier inside quotes: "{stat.label}" or '{item.prop}' (NOT preceded by $)
    if (/(["'])(?:(?!\$\{)[^"'\n])*\{(?:stat\.|item\.|props\.|children|title)[^}]*\}[^"'\n]*\1/.test(line)) {
      VIOLATIONS.push({
        file: filePath,
        line: idx + 1,
        content: line.trim(),
        reason: 'Raw identifier pattern {stat.label} inside string literal instead of JSX expression'
      });
    }
  });
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else {
      checkContent(full);
    }
  }
}

for (const dir of TARGET_DIRS) {
  walk(path.join(process.cwd(), dir));
}

if (VIOLATIONS.length > 0) {
  console.error(`\n❌ FAIL: Found ${VIOLATIONS.length} forbidden raw JSX code patterns in source files:\n`);
  for (const v of VIOLATIONS) {
    console.error(`- ${v.file}:${v.line} [${v.reason}]`);
    console.error(`  ${v.content}\n`);
  }
  process.exit(1);
} else {
  console.log(`\n✅ PASS: No raw JSX code or brace identifiers in source strings across app/, components/, lib/, data/!`);
  process.exit(0);
}
