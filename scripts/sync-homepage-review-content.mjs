// Extract copy from the components actually rendered by app/page.tsx.
// Run with --check in validation; without it, refresh the generated snapshot.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const parse = (file) =>
  ts.createSourceFile(
    file,
    fs.readFileSync(path.join(root, file), "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
const files = {};
function source(file) {
  return (files[file] ||= parse(file));
}
function visit(node, predicate) {
  if (predicate(node)) return node;
  return ts.forEachChild(node, (child) => visit(child, predicate));
}
function value(node) {
  if (ts.isAsExpression(node)) return value(node.expression);
  if (ts.isStringLiteral(node) || ts.isNumericLiteral(node))
    return ts.isNumericLiteral(node) ? Number(node.text) : node.text;
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(value);
  if (ts.isObjectLiteralExpression(node))
    return Object.fromEntries(
      node.properties
        .filter(
          (p) =>
            ts.isPropertyAssignment(p) &&
            !["Icon", "icon"].includes(p.name.getText()),
        )
        .map((p) => [p.name.getText(), value(p.initializer)]),
    );
  throw new Error(`Unsupported source content: ${node.getText()}`);
}
function constant(file, name) {
  const node = visit(
    source(file),
    (n) => ts.isVariableDeclaration(n) && n.name.getText() === name,
  );
  if (!node) throw new Error(`Missing ${name} in ${file}`);
  return value(node.initializer);
}
function copy(file, startsWith) {
  const node = visit(
    source(file),
    (n) => ts.isJsxText(n) && n.text.trim().startsWith(startsWith),
  );
  if (!node) throw new Error(`Missing source copy: ${startsWith}`);
  return node.text.replace(/\s+/g, " ").trim().replaceAll("&amp;", "&");
}
const grey = (name) => `components/t-grey/Grey${name}.tsx`;
const what = grey("WhatWeDo"),
  services = grey("Services"),
  solutions = grey("Solutions"),
  vision = grey("Vision"),
  team = grey("Team"),
  about = grey("About"),
  cta = grey("Cta");
const certificateArray = visit(
  source(about),
  (n) =>
    ts.isArrayLiteralExpression(n) &&
    n.getText().includes("Quality Management") &&
    n.getText().includes("cert-accurate.png"),
);
const data = {
  metadata: constant("app/page.tsx", "metadata"),
  navigation: constant("components/Header.tsx", "NAV").map((item) => {
    const menu = {
      Services: "servicesMenu",
      Industries: "industriesMenu",
      Products: "productsMenu",
    }[item.label];
    const convert = (child) => ({
      label: child.label,
      href: child.link,
      children: (child.children || []).map(convert),
    });
    return {
      label: item.label,
      href: item.href,
      children: menu
        ? constant("components/Header.tsx", menu).map(convert)
        : [],
    };
  }),
  sources: [
    "app/page.tsx",
    "components/Header.tsx",
    "components/HeroSlider.tsx",
    "components/PartnersTicker.tsx",
    "components/TickerBanner.tsx",
    what,
    services,
    solutions,
    vision,
    team,
    about,
    cta,
  ],
  slides: constant("components/HeroSlider.tsx", "SLIDES").map((slide) => ({
    ...slide,
    poster: slide.poster || slide.src,
  })),
  heroStats: constant("components/HeroSlider.tsx", "STATS"),
  ticker: constant("components/TickerBanner.tsx", "services"),
  industries: constant("components/TickerBanner.tsx", "industries"),
  what: {
    eyebrow: copy(what, "What We Do"),
    title: copy(what, "What precision"),
    intro: copy(what, "Texas Technical Services delivers"),
    services: constant(what, "SERVICES"),
    paragraphs: constant(what, "BODY"),
    stats: constant(what, "STATS"),
  },
  services: {
    eyebrow: copy(services, "Our Services"),
    title: copy(services, "What services"),
    intro: copy(services, "Extensive expertise"),
    items: constant(services, "SERVICES"),
  },
  solutions: {
    eyebrow: copy(solutions, "Solutions & Partners"),
    title: copy(solutions, "Which proprietary"),
    items: constant(solutions, "SOLUTIONS"),
  },
  vision: {
    eyebrow: copy(vision, "Our Vision"),
    title: copy(vision, "What is our vision"),
    stats: constant(vision, "STATS"),
    note: copy(vision, "ISO 9001 ·"),
  },
  team: {
    eyebrow: copy(team, "Our Team"),
    title: copy(team, "Who are the specialists"),
    text: copy(team, "Highly trained engineers"),
    number: copy(team, "50+"),
    label: copy(team, "Certified Engineers"),
    highlights: constant(team, "HIGHLIGHTS"),
  },
  about: {
    eyebrow: copy(about, "About Texas"),
    title: copy(about, "Why was Texas"),
    text: copy(about, "Texas Technical Service Company"),
    certifications: value(certificateArray),
  },
  cta: {
    eyebrow: copy(cta, "GET IN TOUCH"),
    title: copy(cta, "How can we solve"),
    text: copy(cta, "From custody metering"),
  },
};
const output = `${JSON.stringify(data, null, 2)}\n`;
const target = path.join(root, "data/homepage-review.json");
if (process.argv.includes("--check")) {
  if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== output) {
    console.error(
      "Homepage review content differs from app/page.tsx source components. Run node scripts/sync-homepage-review-content.mjs",
    );
    process.exit(1);
  }
  console.log(
    "Both review themes share an exact snapshot of the homepage source copy.",
  );
} else {
  fs.writeFileSync(target, output);
  console.log("Updated data/homepage-review.json from the existing homepage.");
}
