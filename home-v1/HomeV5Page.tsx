"use client";

/**
 * HomeV5Page — fixed-stage cross-fade homepage.
 *
 * Architecture:
 *   CrossFadeStage renders an invisible scroll track (height = N × SECTION_SCROLL_LENGTH vh)
 *   beside a position:fixed stage (inset: 0). All sections live inside the stage,
 *   absolutely positioned. Nothing moves vertically — only opacity (+ micro scale) transitions.
 *
 * Sections (in order):
 *   0  Hero
 *   1  Partners & Ticker
 *   2  What We Do
 *   3  Solutions
 *   4  Vision (stats)
 *   5  Team
 *   6  About & Certifications
 *   7  CTA
 *
 * FixedVideoBackground (canvas + scrubbed video + pipeline lines) is kept intact
 * behind the stage at z-index 0.
 */

import dynamic from "next/dynamic";
import ThemeWrapper from "@/components/ThemeWrapper";
import FixedVideoBackground from "@/components/v1/FixedVideoBackground";
import GreyTeam from "./components/GreyTeam";
import GreyAbout from "@/components/t-grey/GreyAbout";
import GreyCta from "@/components/t-grey/GreyCta";
import GreySolutions from "@/components/t-grey/GreySolutions";

import StageHero from "./components/StageHero";
import { CrossFadeStage, type StageSectionDef } from "./components/CrossFadeStage";
import { DarkStageSection } from "./components/DarkStageSection";
import "./components/hero-v5.css";

import WhatWeDoSectionA from "./components/WhatWeDoSectionA";
import WhatWeDoSectionB from "./components/WhatWeDoSectionB";
import V1DockNavbar from "./components/V1DockNavbar";
import V1InitialLoader from "./components/V1InitialLoader";

/* Dynamic imports for heavy sections */
const GreyVision = dynamic(() => import("@/components/t-grey/GreyVision"), {
  loading: () => <div style={{ height: "100vh" }} />,
});

/* ── CSS variables (dark theme) ──────────────────────────────────── */
const VARS: Record<string, string> = {
  "--color-brand-red": "#8a302f",
  "--color-brand-red-dark": "#6e2624",
  "--color-brand-red-light": "#e4b4b4",
  "--color-brand-navy": "#0F1117",
  "--color-brand-navy-mid": "#181C26",
  "--color-brand-gray": "#1E2330",
  "--color-footer-bg": "#0A0C11",
  "--color-footer-text": "#FFFFFF",
  "--color-footer-muted": "rgba(156,163,175,0.70)",
  "--color-bg-hero-from": "#0F1117",
  "--color-bg-hero-to": "#1A1F2E",
  "--color-bg-hero-mask": "rgba(8,10,18,0.78)",
  "--color-bg-hero-mask-mid": "rgba(20,25,40,0.50)",
  "--color-text-hero": "#FFFFFF",
  "--color-surface": "#181C26",
  "--color-section-alt": "#0F1117",
  "--color-border": "rgba(255,255,255,0.08)",
  "--color-border-accent": "rgba(138,48,47,0.25)",
  "--color-text-primary": "#F4F1EE",
  "--color-text-muted": "#A8A29E",
  /* Dark grey vars for t-grey components */
  "--g-section-a": "transparent",
  "--g-section-b": "transparent",
  "--g-heading": "#F4F1EE",
  "--g-muted": "#A8A29E",
  "--g-border": "rgba(255,255,255,0.09)",
  "--g-card-bg": "rgba(20,22,27,0.82)",
  "--g-card-border": "rgba(255,255,255,0.09)",
  "--g-card-shadow": "0 8px 32px rgba(0,0,0,0.32)",
  "--g-stat-bg": "rgba(20,22,27,0.70)",
  /* Shared section spacing tokens (navbar height + 26px breathing room) */
  "--section-pt": "calc(var(--navbar-height, 98px) + 26px)",
  "--section-pb": "clamp(1.5rem, 3.5vh, 2.5rem)",
};

/* ── Section definitions ──────────────────────────────────────────── */
const SECTIONS: StageSectionDef[] = [
  {
    id: "section-hero",
    label: "Hero",
    content: (
      <DarkStageSection label="Hero" style={{ background: "transparent" }}>
        <StageHero />
      </DarkStageSection>
    ),
  },
  {
    id: "section-whatwedo-a",
    label: "What We Do",
    content: (
      <DarkStageSection label="What We Do" style={{ background: "transparent" }}>
        <WhatWeDoSectionA />
      </DarkStageSection>
    ),
  },
  {
    id: "section-whatwedo-b",
    label: "Capabilities",
    content: (
      <DarkStageSection label="Specialised Capabilities" style={{ background: "transparent" }}>
        <WhatWeDoSectionB />
      </DarkStageSection>
    ),
  },
  {
    id: "section-solutions",
    label: "Solutions",
    content: (
      <DarkStageSection label="Solutions & Partners">
        <GreySolutions />
      </DarkStageSection>
    ),
  },
  {
    id: "section-vision",
    label: "Our Vision",
    content: (
      <DarkStageSection label="Our Vision">
        <GreyVision />
      </DarkStageSection>
    ),
  },
  {
    id: "section-team",
    label: "Our Team",
    content: (
      <DarkStageSection label="Our Team">
        <GreyTeam />
      </DarkStageSection>
    ),
  },
  {
    id: "section-about",
    label: "About",
    content: (
      <DarkStageSection label="About Us">
        <GreyAbout />
      </DarkStageSection>
    ),
  },
  {
    id: "section-cta",
    label: "Get In Touch",
    content: (
      <DarkStageSection label="Get In Touch">
        <GreyCta />
      </DarkStageSection>
    ),
  },
];

export default function HomeV5Page() {
  return (
    <ThemeWrapper vars={VARS}>
      {/* Initial load curtain to eliminate any FOUC or raw unstyled background flash */}
      <V1InitialLoader />

      {/* Fixed video background — z-index 0, untouched */}
      <FixedVideoBackground />

      {/* Skip-to-content for keyboard / screen-reader users */}
      <a
        href="#section-hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[9999] focus:bg-[#8a302f] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:font-semibold"
      >
        Skip to content
      </a>

      {/*
        noscript fallback: stacked dark sections when JS is disabled.
        CrossFadeStage is client-only so without JS none of the stage renders.
      */}
      <noscript>
        <div style={{ position: "relative", background: "#080A0E", color: "#F4F1EE", padding: "60px 24px" }}>
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} style={{ marginBottom: 64 }}>
              {s.content}
            </section>
          ))}
        </div>
      </noscript>

      {/* V1 Dedicated Floating Glass Dock Navbar */}
      <V1DockNavbar />

      {/* Cross-fade stage — the entire visible homepage */}
      <CrossFadeStage sections={SECTIONS} />
    </ThemeWrapper>
  );
}
