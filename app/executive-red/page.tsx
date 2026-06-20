import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import DarkHeader from "@/components/light/DarkHeader";
import LightFooter from "@/components/light/LightFooter";
import HeroMinimal from "@/components/light/HeroMinimal";
import PartnersTicker from "@/components/PartnersTicker";
import LightTicker from "@/components/light/LightTicker";
import LightWhatWeDo from "@/components/light/LightWhatWeDo";
import LightServices from "@/components/light/LightServices";
import LightVision from "@/components/light/LightVision";
import LightTeam from "@/components/light/LightTeam";
import LightAbout from "@/components/light/LightAbout";
import LightCta from "@/components/light/LightCta";

export const metadata: Metadata = {
  title: "Executive Red | Texas Technical Services",
  robots: { index: false, follow: false },
};

// Kit A — RED SECTION alternating. Sections alternate white and solid red.
// White hero (light), then red section-alt (#C62828), white surface — bold contrast.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#C62828",
  "--color-brand-red-dark":  "#8E0000",
  "--color-brand-red-light": "#FFEBEE",

  "--color-bg-hero-from":     "#FAFAFA",
  "--color-bg-hero-to":       "#F5F5F5",
  "--color-bg-hero-mask":     "rgba(250,250,250,0.95)",
  "--color-bg-hero-mask-mid": "rgba(250,250,250,0.80)",
  "--color-text-hero":        "#111111",

  "--color-surface":       "#FFFFFF",
  "--color-section-alt":   "#FFF0F0",
  "--color-border":        "rgba(180,0,0,0.10)",
  "--color-border-accent": "rgba(198,40,40,0.22)",
  "--color-text-primary":  "#1A0505",
  "--color-text-muted":    "#6B2020",

  "--color-footer-bg":    "#8E0000",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(255,200,200,0.65)",

  "--color-brand-navy":     "#8E0000",
  "--color-brand-navy-mid": "#C62828",
  "--color-brand-gray":     "#FFF0F0",
};

export default function ExecutiveRedPage() {
  return (
    <ThemeWrapper vars={VARS}>
      <DarkHeader />
      <main>
        <HeroMinimal />
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
