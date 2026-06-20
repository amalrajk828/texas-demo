import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import DarkHeader from "@/components/light/DarkHeader";
import LightFooter from "@/components/light/LightFooter";
import HeroPanelRow from "@/components/light/HeroPanelRow";
import PartnersTicker from "@/components/PartnersTicker";
import LightTicker from "@/components/light/LightTicker";
import G4WhatWeDo from "@/components/t-grey/G4WhatWeDo";
import G4Services from "@/components/t-grey/G4Services";
import GreyVision from "@/components/t-grey/GreyVision";
import GreyTeam from "@/components/t-grey/GreyTeam";
import GreyAbout from "@/components/t-grey/GreyAbout";
import GreyCta from "@/components/t-grey/GreyCta";

export const metadata: Metadata = {
  title: "Neutral Red | Texas Technical Services",
  robots: { index: false, follow: false },
};

// Kit D — NEUTRAL GREY + RED. Pure neutral grey, crisp white cards, strong ruby red.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#C62828",
  "--color-brand-red-dark":  "#8E0000",
  "--color-brand-red-light": "#FFEBEE",

  "--color-bg-hero-from":     "#F8F8F8",
  "--color-bg-hero-to":       "#EFEFEF",
  "--color-bg-hero-mask":     "rgba(248,248,248,0.94)",
  "--color-bg-hero-mask-mid": "rgba(239,239,239,0.80)",
  "--color-text-hero":        "#1A1A1A",

  "--color-surface":       "#FFFFFF",
  "--color-section-alt":   "#F8F8F8",
  "--color-border":        "rgba(0,0,0,0.08)",
  "--color-border-accent": "rgba(198,40,40,0.16)",
  "--color-text-primary":  "#1A1A1A",
  "--color-text-muted":    "#5A5A5A",

  "--color-footer-bg":    "#1A1A1A",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "#888888",

  "--color-brand-navy":     "#1A1A1A",
  "--color-brand-navy-mid": "#2B2B2B",
  "--color-brand-gray":     "#F8F8F8",

  "--g-section-a":   "#F8F8F8",
  "--g-section-b":   "#EFEFEF",
  "--g-heading":     "#1A1A1A",
  "--g-muted":       "#5A5A5A",
  "--g-border":      "rgba(0,0,0,0.08)",
  "--g-card-bg":     "#FFFFFF",
  "--g-card-border": "rgba(0,0,0,0.08)",
  "--g-card-shadow": "0 2px 20px rgba(0,0,0,0.06)",
  "--g-stat-bg":     "#F5F5F5",
};

export default function NeutralRedPage() {
  return (
    <ThemeWrapper vars={VARS}>
      <DarkHeader />
      <main>
        <HeroPanelRow />
        <PartnersTicker />
        <LightTicker />
        <G4WhatWeDo />
        <G4Services />
        <GreyVision />
        <GreyTeam />
        <GreyAbout />
        <GreyCta />
      </main>
      <LightFooter />
    </ThemeWrapper>
  );
}
