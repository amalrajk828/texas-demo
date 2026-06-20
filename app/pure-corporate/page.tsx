import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import DarkHeader from "@/components/light/DarkHeader";
import LightFooter from "@/components/light/LightFooter";
import HeroBanner from "@/components/light/HeroBanner";
import PartnersTicker from "@/components/PartnersTicker";
import LightTicker from "@/components/light/LightTicker";
import LightWhatWeDo from "@/components/light/LightWhatWeDo";
import LightServices from "@/components/light/LightServices";
import LightVision from "@/components/light/LightVision";
import LightTeam from "@/components/light/LightTeam";
import LightAbout from "@/components/light/LightAbout";
import LightCta from "@/components/light/LightCta";

export const metadata: Metadata = {
  title: "Pure Corporate | Texas Technical Services",
  robots: { index: false, follow: false },
};

// Kit A — RED GREY GRADIENT. Light grey-white sections, red+grey gradient hero.
// Surface: white. Section alt: light grey #F3F4F6. Cards: white with grey border.
// Footer: dark charcoal #1F2937. Accent: strong red #C62828.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#C62828",
  "--color-brand-red-dark":  "#8E0000",
  "--color-brand-red-light": "#FFEBEE",

  // Hero: diagonal red-to-grey gradient
  "--color-bg-hero-from":     "#B71C1C",
  "--color-bg-hero-to":       "#4B5563",
  "--color-bg-hero-mask":     "rgba(30,10,10,0.62)",
  "--color-bg-hero-mask-mid": "rgba(55,65,81,0.38)",
  "--color-text-hero":        "#FFFFFF",

  // Sections: white + light grey alternating
  "--color-surface":       "#FFFFFF",
  "--color-section-alt":   "#F3F4F6",
  "--color-border":        "rgba(0,0,0,0.08)",
  "--color-border-accent": "rgba(198,40,40,0.18)",
  "--color-text-primary":  "#111827",
  "--color-text-muted":    "#4B5563",

  // Footer: dark charcoal (oil & gas industrial)
  "--color-footer-bg":    "#1F2937",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(209,213,219,0.65)",

  // Nav uses brand-navy for dark header bg
  "--color-brand-navy":     "#1F2937",
  "--color-brand-navy-mid": "#374151",
  "--color-brand-gray":     "#F3F4F6",
};

export default function PureCorporatePage() {
  return (
    <ThemeWrapper vars={VARS}>
      <DarkHeader />
      <main>
        <HeroBanner />
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
