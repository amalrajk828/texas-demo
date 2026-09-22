"use client";

import dynamic from "next/dynamic";
import ThemeWrapper from "../home-v3/components/ThemeWrapper";
import HomeV6Hero from "./components/HomeV6Hero";
import TickerBanner from "../home-v3/components/TickerBanner";
import GreySolutions from "../home-v3/components/GreySolutions";
import GreyTeam from "../home-v3/components/GreyTeam";
import GreyAbout from "../home-v3/components/GreyAbout";
import GreyCta from "../home-v3/components/GreyCta";

const PartnersTicker = dynamic(() => import("../home-v3/components/PartnersTicker"), {
  loading: () => <div className="py-7 border-y" style={{ minHeight: 200 }} />,
  ssr: false,
});

const GreyWhatWeDo = dynamic(() => import("../home-v3/components/GreyWhatWeDo"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1500 }} />,
  ssr: false,
});

const GreyServices = dynamic(() => import("../home-v3/components/GreyServices"), {
  loading: () => <div className="py-24 lg:py-32" style={{ minHeight: 1000 }} />,
  ssr: false,
});

const GreyVision = dynamic(() => import("../home-v3/components/GreyVision"), {
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
  "--g-section-a":   "#FFFFFF",
  "--g-section-b":   "#F9FAFB",
  "--g-heading":     "#111827",
  "--g-muted":       "#4B5563",
  "--g-border":      "rgba(0,0,0,0.06)",
  "--g-card-bg":     "#F0F1F3",
  "--g-card-border": "rgba(0,0,0,0.06)",
  "--g-card-shadow": "0 4px 20px rgba(0,0,0,0.04)",
  "--g-stat-bg":     "#F3F4F6",
};

export default function HomeV6Page() {
  return (
    <ThemeWrapper vars={VARS}>
      <main style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e2e7ee 45%, #c9d2dc 100%)" }}>
        {/* Variant 6 Hero Section with Parallax + Zoom-Fade Scroll Animation */}
        <HomeV6Hero />

        {/* Identical rest-of-page sections below hero (matching Home-V3) */}
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
