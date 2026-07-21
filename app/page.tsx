import type { Metadata } from "next";
import Script from "next/script";
import ThemeWrapper from "@/components/ThemeWrapper";
import { SITE_URL } from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";
import PartnersTicker from "@/components/PartnersTicker";
import TickerBanner from "@/components/TickerBanner";
import GreyWhatWeDo from "@/components/t-grey/GreyWhatWeDo";
import GreyServices from "@/components/t-grey/GreyServices";
import GreySolutions from "@/components/t-grey/GreySolutions";
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
  "--g-card-bg":     "linear-gradient(135deg, #ffffff 0%, #fafafa 60%, #fff1f2 100%)",
  "--g-card-border": "rgba(0,0,0,0.08)",
  "--g-card-shadow": "0 4px 20px rgba(0,0,0,0.06)",
  "--g-stat-bg":     "#F3F4F6",
};

export default function HomePage() {
  return (
    <ThemeWrapper vars={VARS}>

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Texas Technical Services",
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/portfolio/?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <main>
        <HeroSlider />
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
