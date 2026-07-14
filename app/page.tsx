import type { Metadata } from "next";
import ThemeWrapper from "@/components/ThemeWrapper";
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
  title: "Industrial Automation, PLC SCADA & Flow Measurement",
  description:
    "Texas Technical Services is a leading industrial automation company in Kuwait and the UAE — specializing in PLC SCADA integration, flow measurement services in Ahmadi, inspection & testing, and automation engineering services in Fahaheel for oil & gas, refinery, and petrochemical sectors across the GCC.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Texas Technical Services — Industrial Automation Company in Kuwait & GCC",
    description:
      "Leading industrial automation company in Kuwait and UAE — PLC SCADA integration, flow measurement, inspection, and automation engineering services in Fahaheel and across Dubai, Bahrain, and Saudi Arabia.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Technical Services — Industrial Automation Company in Kuwait & GCC",
    description:
      "Leading industrial automation company in Kuwait and UAE — PLC SCADA integration, flow measurement, inspection, and automation engineering across the GCC.",
  },
  keywords: [
    "industrial automation companies near me",
    "vision industrial automation services & products",
    "industrial automation companies in Kuwait",
    "industrial automation companies in Dubai",
    "automation companies in Dubai",
    "industrial automation companies in UAE",
    "list of industrial automation companies in UAE",
    "automation and engineering services Fahaheel",
    "mechatronics Bahrain",
    "automation control service LLC",
  ],
};

// Grey light theme — oil & gas industry standard.
// White cards, grey section backgrounds, grey borders, red accents only.
// Dark charcoal header/footer. No dark-mode, purely light.
const VARS: Record<string, string> = {
  "--color-brand-red":       "#C62828",
  "--color-brand-red-dark":  "#8E0000",
  "--color-brand-red-light": "#FFEBEE",

  // Header nav bg (DarkHeader reads --color-brand-navy)
  "--color-brand-navy":     "#1F2937",
  "--color-brand-navy-mid": "#374151",
  "--color-brand-gray":     "#F3F4F6",

  // Footer reads --color-footer-*
  "--color-footer-bg":    "#1F2937",
  "--color-footer-text":  "#FFFFFF",
  "--color-footer-muted": "rgba(209,213,219,0.65)",

  // Hero (HeroSlider reads these)
  "--color-bg-hero-from":     "#1F2937",
  "--color-bg-hero-to":       "#374151",
  "--color-bg-hero-mask":     "rgba(20,25,35,0.72)",
  "--color-bg-hero-mask-mid": "rgba(40,50,65,0.45)",
  "--color-text-hero":        "#FFFFFF",

  // Legacy vars used by PartnersTicker, TickerBanner, HeroSlider
  "--color-surface":       "#FFFFFF",
  "--color-section-alt":   "#F3F4F6",
  "--color-border":        "rgba(0,0,0,0.08)",
  "--color-border-accent": "rgba(198,40,40,0.15)",
  "--color-text-primary":  "#111827",
  "--color-text-muted":    "#4B5563",

  // Kit D (t-grey) tokens — all section/card colours
  "--g-section-a":   "#FFFFFF",
  "--g-section-b":   "#F3F4F6",
  "--g-heading":     "#111827",
  "--g-muted":       "#4B5563",
  "--g-border":      "rgba(0,0,0,0.09)",
  "--g-card-bg":     "#FFFFFF",
  "--g-card-border": "rgba(0,0,0,0.09)",
  "--g-card-shadow": "0 2px 16px rgba(0,0,0,0.06)",
  "--g-stat-bg":     "#F3F4F6",
};

export default function HomePage() {
  return (
    <ThemeWrapper vars={VARS}>
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
      </ThemeWrapper>
  );
}
