"use client";

import dynamic from "next/dynamic";
import ThemeWrapper from "./components/ThemeWrapper";
import HomeV4Hero from "./components/HomeV4Hero";
import TickerBanner from "./components/TickerBanner";
import GreySolutions from "./components/GreySolutions";
import GreyTeam from "./components/GreyTeam";
import GreyAbout from "./components/GreyAbout";
import GreyCta from "./components/GreyCta";
import "./components/hero-v4.css";

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

const VARS: Record<string, string> = {
  "--color-brand-red":       "#E53935",
  "--color-brand-red-dark":  "#B71C1C",
  "--color-brand-red-light": "#FFCDD2",
  "--color-brand-navy":     "#0F1117",
  "--color-brand-navy-mid": "#181C26",
  "--color-brand-gray":     "#1E2330",
  "--color-footer-bg":    "#0A0C11",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(156,163,175,0.70)",
  "--color-bg-hero-from":     "#0F1117",
  "--color-bg-hero-to":       "#1A1F2E",
  "--color-bg-hero-mask":     "rgba(8,10,18,0.78)",
  "--color-bg-hero-mask-mid": "rgba(20,25,40,0.50)",
  "--color-text-hero":        "#FFFFFF",
  "--color-surface":       "#181C26",
  "--color-section-alt":   "#0F1117",
  "--color-border":        "rgba(255,255,255,0.08)",
  "--color-border-accent": "rgba(229,57,53,0.25)",
  "--color-text-primary":  "#F9FAFB",
  "--color-text-muted":    "#9CA3AF",
};

const DARK_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#141820",
  "--g-section-b":   "#0F1117",
  "--g-heading":     "#F9FAFB",
  "--g-muted":       "#9CA3AF",
  "--g-border":      "rgba(255,255,255,0.08)",
  "--g-card-bg":     "#1E2330",
  "--g-card-border": "rgba(255,255,255,0.09)",
  "--g-card-shadow": "0 4px 24px rgba(0,0,0,0.40)",
  "--g-stat-bg":     "#252B3B",
};

const LIGHT_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#EDEFF2",
  "--g-section-b":   "#EDEFF2",
  "--g-heading":     "#12151C",
  "--g-muted":       "#5C6270",
  "--g-border":      "rgba(0,0,0,0.06)",
  "--g-card-bg":     "#FFFFFF",
  "--g-card-border": "rgba(0,0,0,0.06)",
  "--g-card-shadow": "0 4px 20px rgba(0,0,0,0.04)",
  "--g-stat-bg":     "#FFFFFF",
};

export default function HomeV4Page() {
  return (
    <ThemeWrapper vars={VARS}>
      <main
        className="bg-[#0F1117] min-h-screen text-white"
        style={{ backgroundColor: "#0F1117" }}
        suppressHydrationWarning
      >
        {/* Variant 4 Hero Section with Full-Screen Interactive Animated Nebula Shader */}
        <HomeV4Hero />

        {/* Identical rest-of-page sections below hero */}
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

        <ThemeWrapper vars={LIGHT_GREY_VARS}>
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
