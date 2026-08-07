"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductHeroLottie from "./ProductHeroLottie";

export interface HeroBreadcrumb {
  /** Display label */
  label: string;
  /** If provided, rendered as a link; omit for the current (last) crumb */
  href?: string;
}

interface ProductHeroWithTrunkProps {
  /** Breadcrumb trail — last item is the current page (no href needed) */
  breadcrumbs: HeroBreadcrumb[];
  /** Small red uppercase eyebrow text */
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
   * Layout mode for Lottie hero animation:
   * - "stretch": Stretches animation across 100% width and height (preserveAspectRatio: "none")
   * - "tiled": Side-by-side mirrored instances covering full horizontal width
   */
  lottieMode?: "stretch" | "tiled";
}

/**
 * Shared hero section for all /products/* pages.
 * Renders recolored Lottie flow animation background.
 */
export default function ProductHeroWithTrunk({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  accountForNavbar = true,
  lottieMode = "stretch",
}: ProductHeroWithTrunkProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden border-b-4 border-[#e7212b]"
    >
      {/* Lottie flow animated background */}
      <ProductHeroLottie mode={lottieMode} />

      {/* Grid texture overlay (above Vanta canvas, below content) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 40px)",
          zIndex: 2,
        }}
      />

      {/* Bottom radial red glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(231,33,43,0.08) 0%, transparent 70%)",
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-20 ${
          accountForNavbar
            ? "pt-[calc(var(--navbar-height,92px)+1.75rem)] lg:pt-[calc(var(--navbar-height,92px)+2.5rem)]"
            : "pt-12 lg:pt-16"
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[11px] text-white/50 mb-6 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-px bg-[#e7212b]" />
          <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
            {eyebrow}
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/60 text-base max-w-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
