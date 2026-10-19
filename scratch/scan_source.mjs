import fs from 'fs';
import path from 'path';

const searchDirs = ['app', 'components', 'lib', 'data', 'content', 'src'];
const findings = [];

// Patterns to look for inside string literals or markdown/text:
const PATTERNS = [
  { name: 'JSX Space {" "}', regex: /\{" "\}/g },
  { name: "JSX Space {' '}", regex: /\{' '\}/g },
  { name: 'Template literal in string ${...}', regex: /\\\$\{[^}]+\}/g },
  { name: 'Raw prop/identifier in braces {id.prop}', regex: /\{([a-zA-Z_][a-zA-Z0-9_]*\.[a-zA-Z0-9_.[\]'"]+)\}/g },
  { name: 'Literal {children}', regex: /\{children\}/g },
  { name: 'Literal {title}', regex: /\{title\}/g },
  { name: 'Literal {stat.label}', regex: /\{stat\.label\}/g },
  { name: 'Literal {item.', regex: /\{item\.[^}]+\}/g },
  { name: 'Literal {props.', regex: /\{props\.[^}]+\}/g },
];

function scanFile(filePath) {
  // skip scratch, node_modules, .next, etc.
  if (filePath.includes('node_modules') || filePath.includes('.next') || filePath.includes('scratch') || filePath.includes('.git')) {
    return;
  }
  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx'].includes(ext)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // If it's a TSX/JSX file, normal JSX expressions like `<p>{children}</p>` or `{item.title}` or `{stat.label}` in JSX are VALID JSX expressions.
    // BUT in JSON, MD, or inside quotes in TS/TSX ('...{stat.label}...', "Flow Computer{\" \"} Configuration"), they are raw code in strings!
    // Or if in TSX someone wrote: `title: "Flow Computer{\" \"} Configuration"` or `subtitle: "{stat.label}"`.

    // In JSON files, ANY match is suspicious:
    if (ext === '.json') {
      for (const p of PATTERNS) {
        if (p.regex.test(line)) {
          findings.push({
            file: filePath,
            line: idx + 1,
            pattern: p.name,
            content: line.trim()
          });
        }
      }
      return;
    }

    // In TS/TSX/JS/JSX files:
    // 1. Check for {" "} inside string quotes (e.g. "{" "}" or '{" "}')
    if (line.includes('"{" "}"') || line.includes("'{\" \"}'") || line.includes('"{\' \'}"') || line.includes("'{\' \'}'") ||
        line.includes('{" "}') && (line.includes('title:') || line.includes('label:') || line.includes('heading:') || line.includes('description:') || line.includes('alt:'))) {
      findings.push({
        file: filePath,
        line: idx + 1,
        pattern: 'JSX space inside data/prop string',
        content: line.trim()
      });
    }

    // 2. Check for "{stat.label}" or "{item..." inside quotes
    if (/(["'`])(?:[^{"'\n]*)\{(?:stat\.|item\.|props\.|children|title)[^}]*\}(?:[^{"'\n]*)\1/.test(line)) {
      findings.push({
        file: filePath,
        line: idx + 1,
        pattern: 'Brace identifier inside quotes',
        content: line.trim()
      });
    }

    // 3. In Hero components or text headings:
    if (line.includes('{" "}') && (line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('<p') || line.includes('<span') || line.includes('<div'))) {
      // In TSX, <h1 className="...">Flow Computer{" "}<em...> is actually valid JSX, BUT if parsed into text or rendered into strings, does it cause issues?
      // Let's record it to inspect if it leaks!
    }
  });
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walkDir(full);
    } else {
      scanFile(full);
    }
  }
}

for (const dir of searchDirs) {
  walkDir(path.join(process.cwd(), dir));
}

console.log(`Scan completed. Found ${findings.length} findings:`);
fs.writeFileSync('scratch/source_scan_findings.json', JSON.stringify(findings, null, 2));
for (const f of findings.slice(0, 50)) {
  console.log(`${f.file}:${f.line} [${f.pattern}] -> ${f.content}`);
}
if (findings.length > 50) {
  console.log(`... and ${findings.length - 50} more.`);
}
