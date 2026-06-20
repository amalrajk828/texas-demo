import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import PartnersTicker from "@/components/PartnersTicker";
import TickerBanner from "@/components/TickerBanner";
import GreyWhatWeDo from "@/components/t-grey/GreyWhatWeDo";
import GreyServices from "@/components/t-grey/GreyServices";
import GreyVision from "@/components/t-grey/GreyVision";
import GreyTeam from "@/components/t-grey/GreyTeam";
import GreyAbout from "@/components/t-grey/GreyAbout";
import GreyCta from "@/components/t-grey/GreyCta";

export const metadata: Metadata = {
  title: "Dark | Texas Technical Services",
  robots: { index: false, follow: false },
};

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

  // Kit D (t-grey) tokens — dark variant
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

export default function DarkPage() {
  return (
    <ThemeWrapper vars={VARS}>
      <Header />
      <main>
        <HeroSlider />
        <PartnersTicker />
        <TickerBanner />
        <GreyWhatWeDo />
        <GreyServices />
        <GreyVision />
        <GreyTeam />
        <GreyAbout />
        <GreyCta />
      </main>
      <Footer />
    </ThemeWrapper>
  );
}
