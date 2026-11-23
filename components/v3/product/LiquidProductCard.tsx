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

export interface LiquidProductCardProps {
  product: Product;
  index?: number;
  isVisible?: boolean;
  className?: string;
}

/**
 * Mountain Card (Squircle style with soft diagonal gradient tint and vignette)
 * Reusable product card fed by existing product data.
 * - Outer card: #f4f4f4 with 6px solid white border, radius 48px, deep soft shadow
 * - Image block: 262px high, radius 40px, gradient tint, vignette, multiply blend, drop-shadow
 * - Arrow button: 38px circle, rotates 45deg and turns black on hover
 * - Text block: Bold uppercase label, 500-weight statement with <b> highlights
 * - Supports prefers-reduced-motion
 */
export default function LiquidProductCard({
  product,
  index = 0,
  isVisible = true,
  className = "",
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
      <div className="mountain-shot">
        <span className="mountain-go" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
        <img
          src={imageSrc}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="mountain-txt">
        <div className="mountain-lab" style={{ color: "#8a302f" }}>{label}</div>
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
