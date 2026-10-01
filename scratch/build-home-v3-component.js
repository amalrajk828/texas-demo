const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'home-v3', 'components', 'Public');
const htmlFile = path.join(publicDir, 'index.html');
const cssFile = path.join(publicDir, 'styles.css');
const jsFile = path.join(publicDir, 'script.js');

let html = fs.readFileSync(htmlFile, 'utf-8');
let css = fs.readFileSync(cssFile, 'utf-8');
let js = fs.readFileSync(jsFile, 'utf-8');

// Extract body contents
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}
let bodyHtml = bodyMatch[1];

// Remove <script src="script.js"></script> tag from html
bodyHtml = bodyHtml.replace(/<script\s+src="script\.js"><\/script>/gi, '');

// Fix asset paths to be absolute root paths for Next.js
bodyHtml = bodyHtml.replace(/src="about\//g, 'src="/about/');
bodyHtml = bodyHtml.replace(/src="homevideos\//g, 'src="/homevideos/');
bodyHtml = bodyHtml.replace(/src="clients\//g, 'src="/clients/');
bodyHtml = bodyHtml.replace(/src="images\//g, 'src="/images/');
bodyHtml = bodyHtml.replace(/src="logo\.svg"/g, 'src="/logo.svg"');
bodyHtml = bodyHtml.replace(/poster="homevideos\//g, 'poster="/homevideos/');

// Fix script frame paths to be absolute root paths for Next.js
js = js.replace(/`frames\/ezgif-/g, '`/frames/ezgif-');
js = js.replace(/`ezgif-/g, '`/ezgif-');

// Remove DOMContentLoaded wrapper from script so it runs immediately when useEffect mounts
// Replace the DOMContentLoaded block:
js = js.replace(
  /window\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{([\s\S]*?)\}\);/g,
  `
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    onScroll();
    initPreloader();
    initNavigation();
    initShowcaseSlider();
    animId = requestAnimationFrame(renderLoop);
  `
);

// Remove the outer IIFE wrapper: (function () { 'use strict'; ... })();
js = js.replace(/\(function\s*\(\)\s*\{\s*['"]use strict['"];?/g, '');
js = js.replace(/\}\)\(\);?\s*$/g, '');

// Write out CSS
const outCss = path.join(__dirname, '..', 'home-v3', 'home-v3-showcase.css');
fs.writeFileSync(outCss, css, 'utf-8');

// Build HomeV3Page.tsx
const outComponent = path.join(__dirname, '..', 'home-v3', 'HomeV3Page.tsx');

const componentCode = `"use client";

import React, { useEffect, useRef } from "react";
import "./home-v3-showcase.css";

const BODY_HTML = ${JSON.stringify(bodyHtml)};

export default function HomeV3Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isDestroyed = false;
    let animId = 0;

    ${js}

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="home-v3-showcase-root"
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
`;

fs.writeFileSync(outComponent, componentCode, 'utf-8');
console.log("Successfully rebuilt HomeV3Page.tsx with direct React lifecycle hooks!");
