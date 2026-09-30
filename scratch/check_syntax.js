const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const files = [
  "components/Header.tsx",
  "components/Footer.tsx",
  "home-v3/HomeV3Page.tsx",
  "demo/home-v3/HomeV3Page.tsx",
  "app/demo/home-v3/page.tsx",
  "app/home-v3/page.tsx",
  "home-v3/components/V3FloatingNavbar.tsx",
  "home-v3/components/V3SideRail.tsx",
  "home-v3/components/V3HeroStage.tsx",
  "home-v3/components/V3DisciplinesStage.tsx",
  "home-v3/components/V3SectorsStage.tsx",
  "home-v3/components/V3SolutionsStage.tsx",
  "home-v3/components/V3ProfileStage.tsx",
  "home-v3/components/V3TestimonialsStage.tsx",
  "home-v3/components/V3RfqStage.tsx",
  "home-v3/components/V3Footer.tsx",
];

let allPassed = true;

for (const relPath of files) {
  const fullPath = path.resolve(relPath);
  try {
    const code = fs.readFileSync(fullPath, "utf8");
    const sourceFile = ts.createSourceFile(
      fullPath,
      code,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );
    const diagnostics = sourceFile.parseDiagnostics || [];
    if (diagnostics.length > 0) {
      allPassed = false;
      console.error(`FAIL: ${relPath}`);
      for (const diag of diagnostics) {
        const { line, character } = sourceFile.getLineAndCharacterOfPosition(diag.start);
        console.error(`  [${line + 1}:${character + 1}] ${diag.messageText}`);
      }
    } else {
      console.log(`PASS: ${relPath}`);
    }
  } catch (err) {
    allPassed = false;
    console.error(`ERROR: ${relPath}`, err);
  }
}

if (!allPassed) {
  process.exit(1);
} else {
  console.log("All TSX files parsed cleanly with zero syntax/JSX errors!");
}
