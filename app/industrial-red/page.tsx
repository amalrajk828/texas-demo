import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import LightHeader from "@/components/light/LightHeader";
import LightFooter from "@/components/light/LightFooter";
import LightHero from "@/components/light/LightHero";
import PartnersTicker from "@/components/PartnersTicker";
import LightTicker from "@/components/light/LightTicker";
import LightWhatWeDo from "@/components/light/LightWhatWeDo";
import LightServices from "@/components/light/LightServices";
import LightVision from "@/components/light/LightVision";
import LightTeam from "@/components/light/LightTeam";
import LightAbout from "@/components/light/LightAbout";
import LightCta from "@/components/light/LightCta";

export const metadata: Metadata = {
  title: "Industrial Red | Texas Technical Services",
  robots: { index: false, follow: false },
};

// Oil & Gas Industry Standard — Red, White & Grey
// Palette reference: Google Material Design Red 800, Grey 50/100/200
const VARS = {
  // Brand accent
  "--color-brand-red":       "#C62828",   // Material Red 800 — bold, industrial
  "--color-brand-red-dark":  "#8E0000",   // Material Red 900 — hover
  "--color-brand-red-light": "#FFEBEE",   // Material Red 50 — tints

  // Hero background gradient
  "--color-bg-hero-from":    "#1C1C1E",   // near-black — left side
  "--color-bg-hero-to":      "#2C1515",   // deep crimson-dark — right
  "--color-bg-hero-mask":    "rgba(28,28,30,0.88)",
  "--color-bg-hero-mask-mid":"rgba(28,28,30,0.55)",
  "--color-text-hero":       "#FFFFFF",   // hero text always white

  // Body semantic tokens
  "--color-surface":         "#FFFFFF",          // white sections
  "--color-section-alt":     "#F5F5F5",          // Material Grey 100
  "--color-border":          "rgba(0,0,0,0.08)", // subtle dividers
  "--color-border-accent":   "rgba(198,40,40,0.20)",
  "--color-text-primary":    "#1A1A1A",           // near-black body text
  "--color-text-muted":      "#616161",           // Material Grey 700

  // Footer
  "--color-footer-bg":       "#212121",   // Material Grey 900
  "--color-footer-text":     "#FFFFFF",
  "--color-footer-muted":    "#9E9E9E",   // Material Grey 500

  // Shared nav (used by LightHeader via var())
  "--color-brand-navy":      "#1C1C1E",   // not used directly in light layout
  "--color-brand-navy-mid":  "#2A2A2E",
  "--color-brand-gray":      "#F5F5F5",
};

export default function IndustrialRedPage() {
  return (
    <ThemeWrapper vars={VARS}>
      <LightHeader />
      <main>
        <LightHero />
        <PartnersTicker />
        <LightTicker />
        <LightWhatWeDo />
        <LightServices />
        <LightVision />
        <LightTeam />
        <LightAbout />
        <LightCta />
      </main>
      <LightFooter />
    </ThemeWrapper>
  );
}
