"use client";

import dynamic from "next/dynamic";
import ThemeWrapper from "@/components/ThemeWrapper";
import HomeV5Hero from "./components/HomeV5Hero";
import TickerBanner from "@/components/TickerBanner";
import GreySolutions from "@/components/t-grey/GreySolutions";
import GreyTeam from "@/components/t-grey/GreyTeam";
import GreyAbout from "@/components/t-grey/GreyAbout";
import GreyCta from "@/components/t-grey/GreyCta";

const PartnersTicker = dynamic(() => import("@/components/PartnersTicker"), {
  loading: () => <div className="py-7 border-y" style={{ minHeight: 200 }} />,
});

const GreyWhatWeDo = dynamic(() => import("@/components/t-grey/GreyWhatWeDo"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1500 }} />,
});

const GreyServices = dynamic(() => import("@/components/t-grey/GreyServices"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1000 }} />,
});

const GreyVision = dynamic(() => import("@/components/t-grey/GreyVision"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 800 }} />,
});

// Dark theme — deep charcoal sections, white text, red bold accents, light grey card surfaces.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#E53935",
  "--color-brand-red-dark":  "#B71C1C",
  "--color-brand-red-light": "#FFCDD2",

  // Header nav
  "--color-brand-navy":     "#0F1117",
  "--color-brand-navy-mid": "#181C26",
  "--color-brand-gray":     "#1E2330",

  // Footer
  "--color-footer-bg":    "#0A0C11",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(156,163,175,0.70)",

  // Hero — deep dark with red accent mask
  "--color-bg-hero-from":     "#0F1117",
  "--color-bg-hero-to":       "#1A1F2E",
  "--color-bg-hero-mask":     "rgba(8,10,18,0.78)",
  "--color-bg-hero-mask-mid": "rgba(20,25,40,0.50)",
  "--color-text-hero":        "#FFFFFF",

  // Legacy tokens (PartnersTicker, TickerBanner, HeroSlider)
  "--color-surface":       "#181C26",
  "--color-section-alt":   "#0F1117",
  "--color-border":        "rgba(255,255,255,0.08)",
  "--color-border-accent": "rgba(229,57,53,0.25)",
  "--color-text-primary":  "#F9FAFB",
  "--color-text-muted":    "#9CA3AF",
};

// Kit D (t-grey) tokens — dark variant
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

// Kit D (t-grey) tokens — light variant
const LIGHT_GREY_VARS: Record<string, string> = {
  "--g-section-a":   "#FFFFFF",
  "--g-section-b":   "#F9FAFB",
  "--g-heading":     "#111827",
  "--g-muted":       "#4B5563",
  "--g-border":      "rgba(0,0,0,0.06)",
  "--g-card-bg":     "#F0F1F3",
  "--g-card-border": "rgba(0,0,0,0.06)",
  "--g-card-shadow": "0 4px 20px rgba(0,0,0,0.04)",
  "--g-stat-bg":     "#F3F4F6",
  "--color-brand-red":       "#8a302f",
  "--color-brand-red-dark":  "#6e2624",
  "--color-brand-red-light": "#e4b4b4",
};

const VISION_VARS: Record<string, string> = {
  ...DARK_GREY_VARS,
  "--color-brand-red":       "#8a302f",
  "--color-brand-red-dark":  "#6e2624",
  "--color-brand-red-light": "#e4b4b4",
};

export default function HomeV5Page() {
  return (
    <ThemeWrapper vars={VARS}>
      <main style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
        {/* Preserved Home V5 Hero */}
        <HomeV5Hero />

        {/* Homepage Sections */}
        <PartnersTicker />
        <TickerBanner />

        {/* Alternate White and Dark themes for the sections */}
        <ThemeWrapper vars={LIGHT_GREY_VARS}>
          <GreyWhatWeDo />
        </ThemeWrapper>

        <ThemeWrapper vars={DARK_GREY_VARS}>
          <GreyServices />
        </ThemeWrapper>

        <ThemeWrapper vars={LIGHT_GREY_VARS}>
          <GreySolutions />
        </ThemeWrapper>

        <ThemeWrapper vars={VISION_VARS}>
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
