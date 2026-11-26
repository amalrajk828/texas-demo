"use client";

import React from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";

export interface CardTint {
  t1: string;
  t2: string;
}

export const CARD_TINT_PALETTE: CardTint[] = [
  { t1: "#b4bfca", t2: "#e4e9ee" }, // slate blue
  { t1: "#c3bdb4", t2: "#ebe8e2" }, // warm gray
  { t1: "#a9bfc0", t2: "#e1ecec" }, // teal
  { t1: "#a9b6cc", t2: "#e0e6f1" }, // lavender blue
  { t1: "#c9c1ad", t2: "#efebdf" }, // sand
  { t1: "#cdb4b4", t2: "#f1e3e3" }, // rose
];

const PRODUCT_RADIAL_TINTS: Record<string, string> = {
  "helical-tzn": "#f3f3f3",
  "fh83-neo": "#ffffff",
  "heliflu-cta": "#fefefe",
  "minisonic": "#ffffff",
  "uf-801p": "#080a0a",
  "minisonic-ii-portable": "#080a0a",
  "uf-811": "#fefefe",
  "uf-821": "#ffffff",
  "uf-831": "#ffffff",
  "uf-841": "#fefefe",
};

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16) || 0;
  const g = parseInt(clean.substring(2, 4), 16) || 0;
  const b = parseInt(clean.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export interface LiquidProductCardProps {
  product: Product;
  index?: number;
  isVisible?: boolean;
  className?: string;
  variant?: "default" | "cutout";
}

/**
 * Mountain Card (Squircle style with soft diagonal gradient tint and vignette)
 * Reusable product card fed by existing product data.
 * - Outer card: #ffffff container with 1px border, radius 48px, deep soft shadow
 * - Image block: 262px high, radius 40px, gradient tint, vignette, normal blend, drop-shadow
 * - Arrow button: 38px circle, rotates 45deg and turns black on hover
 * - Text block: Bold uppercase label, 500-weight statement with <b> highlights
 * - Supports prefers-reduced-motion
 */
export default function LiquidProductCard({
  product,
  index = 0,
  isVisible = true,
  className = "",
  variant,
}: LiquidProductCardProps) {
  const label = product.label || product.name;

  // Fallback statement: first sentence of description with no bold words
  const fallbackStatement = product.description
    ? product.description.replace(/^["']/, "").split(".")[0].trim() + "."
    : "";
  const statement = product.statement || fallbackStatement;

  // Cycle tints by index
  const tint =
    product.tint || CARD_TINT_PALETTE[index % CARD_TINT_PALETTE.length];

  const imageSrc =
    product.image || product.heroImage || "/placeholder.png";
  const href = `/portfolio/${product.slug}/`;

  // Stagger animation: 90ms per card in each row (3 cols)
  const delayMs = (index % 3) * 90;

  const radialColor = PRODUCT_RADIAL_TINTS[product.slug] || "#ffffff";
  const radialBg = `radial-gradient(circle at 50% 38%, ${hexToRgba(radialColor, 0.65)} 0%, ${hexToRgba(radialColor, 0.1)} 72%), linear-gradient(160deg, ${tint.t1}, ${tint.t2})`;

  return (
    <Link
      href={href}
      className={`mountain-card ${isVisible ? "in" : ""} ${className}`}
      style={
        {
          "--t1": tint.t1,
          "--t2": tint.t2,
          transitionDelay: `${delayMs}ms`,
        } as React.CSSProperties
      }
      data-tags={[product.brand || product.tag, product.series, product.category]
        .filter(Boolean)
        .join("|")}
    >
      <div
        className="mountain-shot is-cutout"
        style={{ background: radialBg }}
      >
        <span
          className="mountain-go absolute top-4 right-4 z-10 w-[38px] h-[38px] min-w-[38px] min-h-[38px] rounded-full bg-white/95 text-[#171717] flex items-center justify-center shadow-md shrink-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="15"
            height="15"
            className="w-[15px] h-[15px] min-w-[15px] min-h-[15px] shrink-0 block"
          >
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
          className="cutout-img"
        />
      </div>

      <div className="mountain-txt">
        <div className="mountain-lab">{label}</div>
        <p
          className="mountain-say"
          dangerouslySetInnerHTML={{ __html: statement }}
        />
      </div>
    </Link>
  );
}

// Re-export alias for MountainProductCard
export const MountainProductCard = LiquidProductCard;
