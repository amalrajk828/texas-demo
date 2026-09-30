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
  "--color-brand-red":       "#8a302f",
  "--color-brand-red-dark":  "#6e2624",
  "--color-brand-red-light": "#f9e8e7",
  "--color-brand-navy":      "#16202b",
  "--color-brand-navy-mid":  "#202c3a",
  "--color-brand-blue":      "#3a6ea5",
  "--color-brand-blue-soft": "#eef3f8",
  "--color-brand-gray":      "#eef3f8",
  "--color-footer-bg":       "#202c3a",
  "--color-footer-text":     "#FFFFFF",
  "--color-footer-muted":    "rgba(255,255,255,0.60)",
  "--color-bg-hero-from":    "#ffffff",
  "--color-bg-hero-to":      "#eef3f8",
  "--color-bg-hero-mask":    "rgba(255,255,255,0.75)",
  "--color-bg-hero-mask-mid": "rgba(238,243,248,0.65)",
  "--color-text-hero":       "#16202b",
  "--color-surface":         "#ffffff",
  "--color-section-alt":     "#eef3f8",
  "--color-border":          "rgba(58,110,165,0.12)",
  "--color-border-accent":   "rgba(138,48,47,0.20)",
  "--color-text-primary":    "#16202b",
  "--color-text-muted":      "#8a94a3",
};

const DARK_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#eef3f8",
  "--g-section-b":   "#eef3f8",
  "--g-heading":     "#16202b",
  "--g-muted":       "#4a5568",
  "--g-border":      "rgba(58,110,165,0.12)",
  "--g-card-bg":     "#ffffff",
  "--g-card-border": "rgba(58,110,165,0.12)",
  "--g-card-shadow": "0 4px 20px rgba(20,50,90,0.06)",
  "--g-stat-bg":     "#ffffff",
};

const LIGHT_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#FFFFFF",
  "--g-section-b":   "#FFFFFF",
  "--g-heading":     "#16202b",
  "--g-muted":       "#4a5568",
  "--g-border":      "rgba(58,110,165,0.12)",
  "--g-card-bg":     "#ffffff",
  "--g-card-border": "rgba(58,110,165,0.12)",
  "--g-card-shadow": "0 4px 20px rgba(20,50,90,0.06)",
  "--g-stat-bg":     "#eef3f8",
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
