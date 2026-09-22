"use client";

/**
 * MoltenHero — Shared molten WebGL hero section.
 *
 * Single source of truth for the animated hero used across:
 *   • /service/inspection-testing/
 *   • All /products/* pages
 *   • /blog/
 *   • /clients/
 *
 * The WebGL canvas (MoltenMetal) is lazy-loaded with { ssr: false } so it
 * never blocks LCP, and it pauses automatically via IntersectionObserver when
 * scrolled off-screen to avoid unnecessary GPU work.
 */

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

// ── Lazy WebGL canvas — no SSR ────────────────────────────────────────────────
const MoltenMetal = dynamic(
  () => import("@/components/MoltenMetal/MoltenMetal"),
  { ssr: false }
);

// ── Types ─────────────────────────────────────────────────────────────────────

export interface MoltenHeroBreadcrumb {
  /** Display text */
  label: string;
  /** Link href — omit for the current (last) crumb */
  href?: string;
}

export interface MoltenHeroHighlight {
  /** Any ReactNode (e.g. a Lucide icon) */
  icon: ReactNode;
  /** Bold top line inside the pill */
  title: string;
  /** Dimmed sub-label below the title */
  sub: string;
}

/**
 * Subset of MoltenMetal props exposed as overrides.
 * Lets individual pages fine-tune the canvas without forking the component.
 */
export interface MoltenCanvasOverrides {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  scale?: number;
  detail?: number;
  glow?: number;
  coreSize?: number;
  swirl?: number;
  fold?: number;
  blackPoint?: number;
  brightness?: number;
  colorMode?: "molten" | "ember" | "frost";
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  opacity?: number;
}

export interface MoltenHeroProps {
  // ── Content ────────────────────────────────────────────────────────────────
  /** Page <h1> */
  title: string;
  /** Optional subtitle / description paragraph */
  subtitle?: string;
  /**
   * Optional eyebrow label shown above the H1 inside a pill badge.
   * Falls back to nothing if omitted.
   */
  eyebrow?: string;
  /**
   * Optional eyebrow icon (e.g. a Lucide icon element).
   * Only shown when `eyebrow` is also set.
   */
  eyebrowIcon?: ReactNode;

  // ── Breadcrumb ─────────────────────────────────────────────────────────────
  /** Breadcrumb trail — last item has no href */
  breadcrumbs?: MoltenHeroBreadcrumb[];

  // ── CTAs ───────────────────────────────────────────────────────────────────
  /** Primary CTA button text (shown when set) */
  ctaText?: string;
  /** Primary CTA link (defaults to "#contact") */
  ctaHref?: string;
  /** Secondary ghost CTA button text */
  secondaryCtaText?: string;
  /** Secondary ghost CTA link (defaults to "#overview") */
  secondaryCtaHref?: string;

  // ── Feature highlight pills ────────────────────────────────────────────────
  /**
   * Up to 3 feature-highlight pills shown in a grid below the CTAs.
   * Leave empty / omit to hide the pills row entirely.
   */
  highlights?: MoltenHeroHighlight[];

  // ── Theming ────────────────────────────────────────────────────────────────
  /**
   * Accent hex colour used for:
   *  • eyebrow text & icon ring
   *  • primary CTA background
   *  • highlight pill icon tint
   *
   * Defaults to brand red `#e7212b`.
   * Does NOT recolour the MoltenMetal canvas — use `moltenOverrides` for that.
   */
  accentColor?: string;

  /**
   * Fine-grained canvas overrides.
   * Merged on top of the default ember palette so you only need to specify
   * the values you want to change.
   */
  moltenOverrides?: MoltenCanvasOverrides;

  // ── Layout ─────────────────────────────────────────────────────────────────
  /**
   * When true (default), top padding accounts for the fixed navbar height via
   * the CSS custom property `--navbar-height`.
   */
  accountForNavbar?: boolean;

  /** Additional className for the outer <section> */
  className?: string;

  /** Optional id attribute forwarded to the outer <section> */
  id?: string;

  /**
   * Controls the hero section height.
   *
   * - `"tall"` (default): full-viewport hero (`min-h-screen`). Used on
   *   /service/inspection-testing/, /blog/, /clients/.
   * - `"compact"`: shorter hero that matches the original pre-refactor height
   *   of the product pages (`min-h-[420px] lg:min-h-[500px]`). Used on
   *   all /products/* pages.
   */
  size?: "tall" | "compact";

  /**
   * Extra children rendered inside the content area, below all managed slots.
   * Useful for page-specific extras like stat grids or marquees.
   */
  children?: ReactNode;
}

// ── Default canvas settings (matches InspectionHero exactly) ─────────────────
const DEFAULT_MOLTEN: Required<MoltenCanvasOverrides> = {
  color1: "#3D0A0A",
  color2: "#E63329",
  color3: "#FFD9A0",
  speed: 0.3,
  scale: 3,
  detail: 4,
  glow: 1.8,
  coreSize: 0.09,
  swirl: 0.8,
  fold: -0.2,
  blackPoint: 0.08,
  brightness: 1.2,
  colorMode: "ember",
  grain: true,
  grainIntensity: 0.04,
  mouseInteraction: true,
  mouseStrength: 0.25,
  opacity: 0.9,
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function MoltenHero({
  title,
  subtitle,
  eyebrow,
  eyebrowIcon,
  breadcrumbs,
  ctaText,
  ctaHref = "#contact",
  secondaryCtaText,
  secondaryCtaHref = "#overview",
  highlights,
  accentColor = "#e7212b",
  moltenOverrides,
  accountForNavbar = true,
  className = "",
  id,
  size = "tall",
  children,
}: MoltenHeroProps) {
  const canvas: Required<MoltenCanvasOverrides> = {
    ...DEFAULT_MOLTEN,
    ...moltenOverrides,
  };

  // ── Height & padding ─────────────────────────────────────────────────────
  // Compact: matches the original ProductHeroWithTrunk height (py-16 lg:py-20
  // plus navbar) — a shorter section without full-screen height.
  // Tall: full viewport height (the inspection-testing / blog / clients style).
  const sizeClasses =
    size === "compact"
      ? "min-h-[420px] lg:min-h-[500px]"
      : "min-h-screen";

  // Top padding: below fixed navbar (accounts for CSS var set by the header).
  const ptClass = accountForNavbar
    ? size === "compact"
      ? "pt-[calc(var(--navbar-height,92px)+1.75rem)] lg:pt-[calc(var(--navbar-height,92px)+2.5rem)]"
      : "pt-[calc(var(--navbar-height,92px)+2.5rem)] lg:pt-[calc(var(--navbar-height,92px)+3rem)]"
    : size === "compact"
    ? "pt-20"
    : "pt-32";

  const pbClass = size === "compact" ? "pb-12 lg:pb-16" : "pb-16 lg:pb-24";

  return (
    <section
      id={id}
      className={`relative w-full ${sizeClasses} overflow-hidden flex items-center bg-[#0a0a0a] ${className}`}
      style={{ position: "relative", width: "100%", background: "#0a0a0a", overflow: "hidden" }}
    >
      {/* ── Background layer — full-bleed WebGL canvas ─────────────────── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      >
        <MoltenMetal
          color1={canvas.color1}
          color2={canvas.color2}
          color3={canvas.color3}
          speed={canvas.speed}
          scale={canvas.scale}
          detail={canvas.detail}
          glow={canvas.glow}
          coreSize={canvas.coreSize}
          swirl={canvas.swirl}
          fold={canvas.fold}
          blackPoint={canvas.blackPoint}
          brightness={canvas.brightness}
          colorMode={canvas.colorMode}
          grain={canvas.grain}
          grainIntensity={canvas.grainIntensity}
          mouseInteraction={canvas.mouseInteraction}
          mouseStrength={canvas.mouseStrength}
          opacity={canvas.opacity}
        />
      </div>

      {/* ── Scrim overlay for text contrast ───────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.7) 100%)",
        }}
      />

      {/* ── Hairline borders ───────────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.08] pointer-events-none z-[2]" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full ${ptClass} ${pbClass}`}
      >
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-8 text-[12px] text-white/50 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-4xl">
          {/* Eyebrow pill */}
          {eyebrow && (
            <div
              className="inline-flex items-center gap-2.5 mb-5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
            >
              {eyebrowIcon && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center border"
                  style={{
                    background: `color-mix(in srgb, ${accentColor} 15%, transparent)`,
                    borderColor: `color-mix(in srgb, ${accentColor} 30%, transparent)`,
                  }}
                >
                  <span style={{ color: accentColor }} className="flex items-center justify-center w-3.5 h-3.5">
                    {eyebrowIcon}
                  </span>
                </div>
              )}
              <span
                className="text-[11px] font-bold tracking-[3px] uppercase"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </span>
            </div>
          )}

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6 tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/70 text-base sm:text-[17px] leading-relaxed mb-8 max-w-3xl font-normal">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {ctaText && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-[14px] shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: accentColor,
                    boxShadow: `0 8px 24px color-mix(in srgb, ${accentColor} 25%, transparent)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(0.88)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 12px 32px color-mix(in srgb, ${accentColor} 40%, transparent)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 24px color-mix(in srgb, ${accentColor} 25%, transparent)`;
                  }}
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-7 py-3.5 rounded-xl transition-all duration-200 text-[14px] backdrop-blur-sm"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          )}

          {/* Highlight pills */}
          {highlights && highlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 backdrop-blur-md"
                >
                  <span
                    className="w-5 h-5 shrink-0 flex items-center justify-center"
                    style={{ color: accentColor }}
                  >
                    {h.icon}
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white">{h.title}</div>
                    <div className="text-[11px] text-white/40">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Page-specific extras (stat grids, marquees, etc.) */}
          {children}
        </div>
      </div>
    </section>
  );
}
