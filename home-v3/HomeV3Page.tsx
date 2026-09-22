"use client";

import "./home-v3-theme.css";
import dynamic from "next/dynamic";
import ThemeWrapper from "./components/ThemeWrapper";
import HomeV3Hero from "./components/HomeV3Hero";
import TickerBanner from "./components/TickerBanner";
import GreySolutions from "./components/GreySolutions";
import GreyTeam from "./components/GreyTeam";
import GreyAbout from "./components/GreyAbout";
import GreyCta from "./components/GreyCta";

const PartnersTicker = dynamic(() => import("./components/PartnersTicker"), {
  loading: () => <div className="py-7 border-y" style={{ minHeight: 200 }} />,
  ssr: false,
});

const GreyWhatWeDo = dynamic(() => import("./components/GreyWhatWeDo"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1500 }} />,
  ssr: false,
});

const GreyServices = dynamic(() => import("./components/GreyServices"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1000 }} />,
  ssr: false,
});

const GreyVision = dynamic(() => import("./components/GreyVision"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 800 }} />,
  ssr: false,
});

// ── Industrial Teal — top-level brand tokens ─────────────────────────────────
const VARS: Record<string, string> = {
  // Brand identity (hero uses these directly)
  "--color-brand-red":       "#17707E",   // remapped: teal replaces red
  "--color-brand-red-dark":  "#0F5260",
  "--color-brand-red-light": "#D0E9EC",
  "--color-brand-navy":      "#141A22",
  "--color-brand-navy-mid":  "#1D2531",
  "--color-brand-gray":      "#E7EEEE",
  "--color-footer-bg":       "#141A22",
  "--color-footer-text":     "#F4F9F9",
  "--color-footer-muted":    "rgba(185,196,201,0.80)",
  "--color-bg-hero-from":    "#141A22",
  "--color-bg-hero-to":      "#1D2531",
  "--color-bg-hero-mask":    "rgba(20,26,34,0.78)",
  "--color-bg-hero-mask-mid":"rgba(29,37,49,0.50)",
  "--color-text-hero":       "#F4F9F9",
  "--color-surface":         "#1D2531",
  "--color-section-alt":     "#141A22",
  "--color-border":          "rgba(255,255,255,0.10)",
  "--color-border-accent":   "rgba(23,112,126,0.25)",
  "--color-text-primary":    "#F4F9F9",
  "--color-text-muted":      "#B9C4C9",
  // ── Design system tokens ───────────────────────────────────────────────────
  "--background":          "#EAF3FB",
  "--foreground":          "#26303A",
  "--primary":             "#17707E",
  "--primary-foreground":  "#FFFFFF",
  "--secondary":           "#E7EEEE",
  "--secondary-foreground":"#26303A",
  "--muted":               "#EAF0F0",
  "--muted-foreground":    "#5B6B72",
  "--accent":              "#E0A23F",
  "--accent-foreground":   "#26303A",
  "--border":              "#D5DEDE",
  "--input":               "#D5DEDE",
  "--ring":                "#17707E",
  "--card":                "#FFFFFF",
  "--card-foreground":     "#26303A",
  "--surface-dark":        "#1D2531",
  "--surface-deep":        "#141A22",
  "--surface-steel":       "#2B3749",
  "--line-dark":           "rgba(255,255,255,0.13)",
  "--soft-light":          "#F4F9F9",
  "--soft-light-muted":    "#B9C4C9",
  "--font-display":        "\"Manrope\", sans-serif",
  "--font-body":           "\"Manrope\", sans-serif",
};

// Light sections (WhatWeDo, Solutions)
const LIGHT_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#EAF3FB",
  "--g-section-b":   "#E1EDF7",
  "--g-heading":     "#26303A",
  "--g-muted":       "#5B6B72",
  "--g-border":      "rgba(0,0,0,0.07)",
  "--g-card-bg":     "#FFFFFF",
  "--g-card-border": "rgba(0,0,0,0.07)",
  "--g-card-shadow": "0 4px 20px rgba(0,0,0,0.05)",
  "--g-stat-bg":     "#D9E8F3",
};

// Dark sections (Services, Team, Vision, About)
const DARK_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#1D2531",
  "--g-section-b":   "#141A22",
  "--g-heading":     "#F4F9F9",
  "--g-muted":       "#B9C4C9",
  "--g-border":      "rgba(255,255,255,0.10)",
  "--g-card-bg":     "#232F3E",
  "--g-card-border": "rgba(255,255,255,0.09)",
  "--g-card-shadow": "0 4px 24px rgba(0,0,0,0.35)",
  "--g-stat-bg":     "#2B3749",
};

export default function HomeV3Page() {
  return (
    <ThemeWrapper vars={VARS}>
      <main style={{ background: "var(--background, #EAF3FB)", fontFamily: "\"Manrope\", sans-serif" }}>
        {/* Variant 3 Hero Section */}
        <HomeV3Hero />

        {/* Partners logo strip */}
        <PartnersTicker />
        <TickerBanner />

        <ThemeWrapper vars={LIGHT_GREY_VARS}>
          <GreyWhatWeDo />
        </ThemeWrapper>

        <ThemeWrapper vars={DARK_GREY_VARS}>
          <GreyServices />
        </ThemeWrapper>

        <ThemeWrapper vars={LIGHT_GREY_VARS}>
          <GreySolutions />
        </ThemeWrapper>

        <ThemeWrapper vars={DARK_GREY_VARS}>
          <GreyVision />
        </ThemeWrapper>

        <ThemeWrapper vars={DARK_GREY_VARS}>
          <GreyTeam />
        </ThemeWrapper>

        <ThemeWrapper vars={DARK_GREY_VARS}>
          <GreyAbout />
        </ThemeWrapper>

        <ThemeWrapper vars={LIGHT_GREY_VARS}>
          <GreyCta />
        </ThemeWrapper>
      </main>
    </ThemeWrapper>
  );
}
