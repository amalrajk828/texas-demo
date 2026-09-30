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

/* ── CSS variables (light blue + white theme) ────────────────────────── */
const VARS: Record<string, string> = {
  "--color-brand-red": "#8a302f",
  "--color-brand-red-dark": "#6e2624",
  "--color-brand-red-light": "#f9e8e7",
  "--color-brand-navy": "#16202b",
  "--color-brand-navy-mid": "#202c3a",
  "--color-brand-blue": "#3a6ea5",
  "--color-brand-blue-soft": "#eef3f8",
  "--color-brand-gray": "#eef3f8",
  /* Reverted to Dark Footer tokens */
  "--color-footer-bg": "#202c3a",
  "--color-footer-text": "#FFFFFF",
  "--color-footer-muted": "rgba(255, 255, 255, 0.60)",
  "--color-bg-hero-from": "#ffffff",
  "--color-bg-hero-to": "#eef3f8",
  "--color-bg-hero-mask": "rgba(255, 255, 255, 0.75)",
  "--color-bg-hero-mask-mid": "rgba(238, 243, 248, 0.65)",
  "--color-text-hero": "#16202b",
  "--color-surface": "#ffffff",
  "--color-section-alt": "#eef3f8",
  "--color-border": "rgba(58, 110, 165, 0.12)",
  "--color-border-accent": "rgba(138, 48, 47, 0.20)",
  "--color-text-primary": "#16202b",
  "--color-text-muted": "#8a94a3",
  /* Light vars for t-grey components */
  "--g-section-a": "transparent",
  "--g-section-b": "transparent",
  "--g-heading": "#16202b",
  "--g-muted": "#4a5568",
  "--g-border": "rgba(58, 110, 165, 0.12)",
  "--g-card-bg": "#ffffff",
  "--g-card-border": "rgba(58, 110, 165, 0.12)",
  "--g-card-shadow": "0 4px 20px rgba(20, 50, 90, 0.06)",
  "--g-stat-bg": "#ffffff",
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
      <DarkStageSection label="Specialised Capabilities" style={{ background: "rgba(238, 243, 248, 0.75)", backdropFilter: "blur(8px)" }}>
        <WhatWeDoSectionB />
      </DarkStageSection>
    ),
  },
  {
    id: "section-solutions",
    label: "Solutions",
    content: (
      <DarkStageSection label="Solutions & Partners" style={{ background: "rgba(255, 255, 255, 0.45)" }}>
        <GreySolutions />
      </DarkStageSection>
    ),
  },
  {
    id: "section-vision",
    label: "Our Vision",
    content: (
      <DarkStageSection label="Our Vision" style={{ background: "rgba(238, 243, 248, 0.75)", backdropFilter: "blur(8px)" }}>
        <GreyVision />
      </DarkStageSection>
    ),
  },
  {
    id: "section-team",
    label: "Our Team",
    content: (
      <DarkStageSection label="Our Team" style={{ background: "rgba(255, 255, 255, 0.45)" }}>
        <GreyTeam />
      </DarkStageSection>
    ),
  },
  {
    id: "section-about",
    label: "About",
    content: (
      <DarkStageSection label="About Us" style={{ background: "rgba(238, 243, 248, 0.75)", backdropFilter: "blur(8px)" }}>
        <GreyAbout />
      </DarkStageSection>
    ),
  },
  {
    id: "section-cta",
    label: "Get In Touch",
    content: (
      <DarkStageSection label="Get In Touch" style={{ background: "#eef3f8" }}>
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
