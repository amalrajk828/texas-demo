/**
 * ProductHeroWithTrunk — shared hero for all /products/* pages.
 *
 * Delegates to the shared <MoltenHero> component so that the visual treatment
 * (WebGL molten canvas background) is identical to /service/inspection-testing/
 * and every other page that uses MoltenHero.
 *
 * All existing call sites are untouched — props are the same as before.
 */

import MoltenHero, {
  type MoltenHeroBreadcrumb,
  type MoltenCanvasOverrides,
} from "@/components/common/MoltenHero";

export interface HeroBreadcrumb {
  /** Display label */
  label: string;
  /** If provided, rendered as a link; omit for the current (last) crumb */
  href?: string;
}

interface ProductHeroWithTrunkProps {
  /** Breadcrumb trail — last item is the current page (no href needed) */
  breadcrumbs: HeroBreadcrumb[];
  /** Small uppercase eyebrow text */
  eyebrow: string;
  /** Page H1 */
  title: string;
  /** Optional subtitle below the H1 */
  subtitle?: string;
  /**
   * If true, adds a top padding based on the navbar height (use for pages
   * where the hero is the very first element after the navbar).
   * Defaults to true.
   */
  accountForNavbar?: boolean;
  /**
   * Optional canvas fine-tuning per product page.
   * Merged on top of the shared ember defaults.
   */
  moltenOverrides?: MoltenCanvasOverrides;
  /**
   * Optional accent colour for eyebrow text / CTA.
   * Defaults to brand red #e7212b.
   */
  accentColor?: string;
  /**
   * Hero height variant.
   * Defaults to "compact" for all product pages (matches the original
   * ProductHeroWithTrunk shorter height).
   */
  size?: "compact" | "tall";
}

/**
 * Shared hero section for all /products/* pages.
 * Renders the MoltenMetal WebGL animated background.
 */
export default function ProductHeroWithTrunk({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  accountForNavbar = true,
  moltenOverrides,
  accentColor,
  size = "compact",
}: ProductHeroWithTrunkProps) {
  // Map HeroBreadcrumb[] → MoltenHeroBreadcrumb[] (same shape, different import)
  const crumbs: MoltenHeroBreadcrumb[] = breadcrumbs.map((b) => ({
    label: b.label,
    href: b.href,
  }));

  return (
    <MoltenHero
      breadcrumbs={crumbs}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      accountForNavbar={accountForNavbar}
      moltenOverrides={moltenOverrides}
      accentColor={accentColor}
      size={size}
    />
  );
}
