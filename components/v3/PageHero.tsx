import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroStat {
  label: string;
  value: string;
  note?: string;
}

export interface PageHeroCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface PageHeroProps {
  eyebrow?: string;
  badge?: string;
  badgeText?: string;
  category?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  breadcrumb?: BreadcrumbItem[];
  showBreadcrumb?: boolean;
  showBreadcrumbs?: boolean;
  actions?: React.ReactNode;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  stats?: PageHeroStat[];
  align?: "center" | "left";
  className?: string;
}

/**
 * Standard PageHero component across all sub-pages.
 * - Single source of truth for header offset:
 *   Clears the fixed 72px navbar with exact, comfortable spacing.
 * - Content-based height (NOT min-h-screen).
 * - Warm studio backdrop with soft ambient radial warmth.
 */
export default function PageHero({
  eyebrow,
  badge,
  badgeText,
  category,
  title,
  description,
  subtitle,
  breadcrumbs,
  breadcrumb,
  showBreadcrumb,
  showBreadcrumbs,
  actions,
  primaryCta,
  secondaryCta,
  stats,
  align = "center",
  className = "",
}: PageHeroProps) {
  const resolvedEyebrow = eyebrow || category || badge;
  const resolvedBadge = badgeText || (badge !== resolvedEyebrow ? badge : undefined);
  const resolvedDescription = description || subtitle;
  const isCenter = align === "center";
  const activeBreadcrumbs = breadcrumb || breadcrumbs;
  const shouldShowBreadcrumbs =
    (showBreadcrumb ?? showBreadcrumbs ?? true) &&
    Boolean(activeBreadcrumbs && activeBreadcrumbs.length > 0);

  const renderedActions = actions || (primaryCta || secondaryCta ? (
    <div className={`flex flex-wrap gap-3.5 items-center ${isCenter ? "justify-center" : "justify-start"}`}>
      {primaryCta && (
        <Button
          href={primaryCta.href}
          variant="primary"
          showArrow
          {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {primaryCta.label}
        </Button>
      )}
      {secondaryCta && (
        <Button
          href={secondaryCta.href}
          variant="outline"
          {...(secondaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {secondaryCta.label}
        </Button>
      )}
    </div>
  ) : null);

  const ptClass = shouldShowBreadcrumbs
    ? "pt-[108px] sm:pt-[120px]"
    : "pt-[88px] sm:pt-[98px]";

  return (
    <header
      className={`relative w-full ${ptClass} pb-14 sm:pb-18 bg-[#e8e8e6] text-[#1a1a1a] overflow-hidden border-b border-black/[0.06] ${className}`}
    >
      {/* Subtle warm depth vignette matching Home V3 studio environment */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.8) 0%, rgba(232,232,230,0) 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Optional Breadcrumb */}
        {shouldShowBreadcrumbs && activeBreadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-1.5 text-[13px] text-[#595956] mb-6 flex-wrap ${
              isCenter ? "justify-center" : "justify-start"
            }`}
          >
            {activeBreadcrumbs.map((crumb, idx) => {
              const isLast = idx === activeBreadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb.label + idx}>
                  {idx > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-black/30 shrink-0" />
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#6b191b] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        isLast ? "font-semibold text-[#1a1a1a]" : "text-[#595956]"
                      }
                    >
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Hero Header Content */}
        <div
          className={`max-w-[840px] ${
            isCenter ? "mx-auto text-center" : "text-left"
          }`}
        >
          {(resolvedEyebrow || resolvedBadge) && (
            <div className={`mb-3.5 flex flex-wrap items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
              {resolvedEyebrow && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.08em] bg-[rgba(138,48,47,0.08)] text-[var(--brand-action,#8a302f)] border border-[rgba(138,48,47,0.25)]">
                  {resolvedEyebrow}
                </span>
              )}
              {resolvedBadge && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-[0.02em] bg-white text-[#1a1a1a] border border-black/[0.08] shadow-xs">
                  {resolvedBadge}
                </span>
              )}
            </div>
          )}

          <h1 className="font-heading text-[32px] sm:text-[44px] lg:text-[54px] font-black tracking-[-0.03em] text-[#1a1a1a] leading-[1.12] mb-5 text-balance">
            {title}
          </h1>

          {resolvedDescription && (
            <div className="text-[16px] sm:text-[18px] text-[#595956] leading-[1.65] max-w-[680px] mx-auto">
              {resolvedDescription}
            </div>
          )}

          {renderedActions && (
            <div
              className={`mt-8 flex flex-wrap gap-4 items-center ${
                isCenter ? "justify-center" : "justify-start"
              }`}
            >
              {renderedActions}
            </div>
          )}
        </div>

        {/* Optional quick stats grid inside hero */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[960px] mx-auto">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md border border-black/[0.06] rounded-[18px] p-4 sm:p-5 text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
              >
                <div className="font-heading text-[26px] sm:text-[32px] font-black text-[#6b191b] leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-wider">
                  {s.label}
                </div>
                {s.note && (
                  <div className="text-[11px] text-[#595956] mt-1 font-normal">
                    {s.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
