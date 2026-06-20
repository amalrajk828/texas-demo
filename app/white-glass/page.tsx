import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
import DarkHeader from "@/components/light/DarkHeader";
import LightFooter from "@/components/light/LightFooter";
import HeroMagazine from "@/components/light/HeroMagazine";
import PartnersTicker from "@/components/PartnersTicker";
import LightTicker from "@/components/light/LightTicker";
import MidWhatWeDo from "@/components/t-mid/MidWhatWeDo";
import MidServices from "@/components/t-mid/MidServices";
import MidVision from "@/components/t-mid/MidVision";
import MidTeam from "@/components/t-mid/MidTeam";
import MidAbout from "@/components/t-mid/MidAbout";
import MidCta from "@/components/t-mid/MidCta";

export const metadata: Metadata = {
  title: "White Glass | Texas Technical Services",
  robots: { index: false, follow: false },
};

// Kit B — WHITE GLASS. Light red → white → grey gradient hero.
// Sections: white + light grey alternating. Cards: frosted glass (rgba white).
// Text: dark grey. Accents: red only. Nav/Footer: dark charcoal.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#C62828",
  "--color-brand-red-dark":  "#8E0000",
  "--color-brand-red-light": "#FFEBEE",

  // Hero: blush red → white → cool grey gradient (light, airy)
  "--color-bg-hero-from":     "#FFCDD2",
  "--color-bg-hero-to":       "#ECEFF1",
  "--color-bg-hero-mask":     "rgba(198,40,40,0.14)",
  "--color-bg-hero-mask-mid": "rgba(236,239,241,0.25)",
  "--color-text-hero":        "#1F2937",

  // Legacy surface tokens (PartnersTicker, LightTicker, HeroMagazine)
  "--color-surface":       "#FFFFFF",
  "--color-section-alt":   "#F9FAFB",
  "--color-border":        "rgba(0,0,0,0.07)",
  "--color-border-accent": "rgba(198,40,40,0.18)",
  "--color-text-primary":  "#111827",
  "--color-text-muted":    "#4B5563",

  // Footer: dark charcoal (industrial oil & gas)
  "--color-footer-bg":    "#1F2937",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(209,213,219,0.65)",

  // Nav: dark charcoal (DarkHeader reads --color-brand-navy)
  "--color-brand-navy":     "#1F2937",
  "--color-brand-navy-mid": "#374151",
  "--color-brand-gray":     "#F3F4F6",

  // Kit B (t-mid) tokens — grey glass light theme
  // Sections: grey gradient wash so white glass cards visibly lift off
  "--t-section-a":   "linear-gradient(135deg, #E8EAED 0%, #F3F4F6 45%, #ECEEF1 100%)",
  "--t-section-b":   "linear-gradient(135deg, #DFE1E6 0%, #EBEDF0 50%, #E4E6EA 100%)",
  "--t-heading":     "#111827",
  "--t-muted":       "#4B5563",
  "--t-border":      "rgba(0,0,0,0.10)",
  "--t-card-bg":     "rgba(255,255,255,0.82)",
  "--t-card-border": "rgba(255,255,255,0.95)",
  "--t-card-shadow": "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
  "--t-stat-bg":     "rgba(255,255,255,0.68)",
  "--t-stripe":      "rgba(0,0,0,0.04)",
};

export default function WhiteGlassPage() {
  return (
    <ThemeWrapper vars={VARS}>
      <DarkHeader />
      <main>
        <HeroMagazine />
        <PartnersTicker />
        <LightTicker />
        <MidWhatWeDo />
        <MidServices />
        <MidVision />
        <MidTeam />
        <MidAbout />
        <MidCta />
      </main>
      <LightFooter />
    </ThemeWrapper>
  );
}
