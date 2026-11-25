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

  const isCutout =
    variant === "cutout" ||
    Boolean(
      product.image &&
        (product.image.includes("products-cutout") ||
          product.image.includes("Liquid%20Flow%20Meters"))
    );

  const radialColor = PRODUCT_RADIAL_TINTS[product.slug] || tint.t1;
  const radialBg = isCutout
    ? `radial-gradient(circle at 50% 40%, ${radialColor} 0%, ${hexToRgba(radialColor, 0.4)} 100%), linear-gradient(160deg, ${tint.t1}, ${tint.t2})`
    : undefined;

  return (
    <>
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
          className={`mountain-shot ${isCutout ? "is-cutout" : ""}`}
          style={radialBg ? { background: radialBg } : undefined}
        >
          <span className="mountain-go" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="15"
              height="15"
              className="w-[15px] h-[15px]"
            >
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className={isCutout ? "cutout-img" : ""}
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

      <style>{`
        /* ── The Mountain Card (Soft Squircle Style) ── */
        .mountain-card-wrap {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .mountain-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 48px;
          padding: 8px 8px 0;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04);
          transition: transform 0.5s cubic-bezier(0.22, 0.8, 0.2, 1), box-shadow 0.5s;
          opacity: 0;
          transform: translateY(26px);
          text-decoration: none;
          color: inherit;
          box-sizing: border-box;
          will-change: transform, opacity, box-shadow;
        }

        .mountain-card.in {
          opacity: 1;
          transform: none;
          transition: transform 0.5s cubic-bezier(0.22, 0.8, 0.2, 1), box-shadow 0.5s, opacity 0.7s ease;
        }

        .mountain-card.in:hover {
          transform: translateY(-8px);
          box-shadow: 0 48px 70px -34px rgba(0, 0, 0, 0.45), 0 12px 26px -12px rgba(0, 0, 0, 0.2);
        }

        /* ── Shot Block (Top of Card) ── */
        .mountain-shot {
          position: relative;
          width: 100%;
          height: 262px;
          border-radius: 40px;
          overflow: hidden;
          background: linear-gradient(160deg, var(--t1, #b4bfca), var(--t2, #e4e9ee));
          box-sizing: border-box;
          flex-shrink: 0;
        }

        /* Soft dark edge vignette */
        .mountain-shot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 34px rgba(0, 0, 0, 0.24), inset 0 -46px 60px -34px rgba(0, 0, 0, 0.32);
        }

        .mountain-shot img {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 88%;
          height: 84%;
          object-fit: contain;
          transform: translate(-50%, -50%) scale(1);
          mix-blend-mode: multiply;
          filter: drop-shadow(0 18px 16px rgba(0, 0, 0, 0.2));
          transition: transform 0.8s cubic-bezier(0.22, 0.8, 0.2, 1);
        }

        .mountain-card:hover .mountain-shot img {
          transform: translate(-50%, -50%) scale(1.07);
        }

        /* ── Cutout Image Treatment ── */
        .mountain-shot.is-cutout img.cutout-img {
          width: 100%;
          height: 100%;
          padding: 10%;
          box-sizing: border-box;
          object-fit: contain;
          mix-blend-mode: normal;
          filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.25));
          transition: transform 0.4s cubic-bezier(0.22, 0.8, 0.2, 1);
          transform: translate(-50%, -50%) scale(1);
        }

        .mountain-card:hover .mountain-shot.is-cutout img.cutout-img {
          transform: translate(-50%, -50%) scale(1.04);
        }

        /* ── 38px Round Arrow Button ── */
        .mountain-go {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          color: #171717;
          display: grid;
          place-items: center;
          box-shadow: 0 8px 18px -8px rgba(0, 0, 0, 0.4);
          transition: background 0.25s, color 0.25s, transform 0.35s;
        }

        .mountain-go svg {
          width: 15px;
          height: 15px;
        }

        .mountain-card:hover .mountain-go {
          background: #171717;
          color: #ffffff;
          transform: rotate(45deg);
        }

        /* ── Text Block ── */
        .mountain-txt {
          padding: 24px 26px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
          box-sizing: border-box;
        }

        .mountain-lab {
          font-family: var(--font-body, "Inter", system-ui, sans-serif);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #8a302f;
        }

        .mountain-say {
          margin-top: 9px;
          font-family: var(--font-body, "Inter", system-ui, sans-serif);
          font-size: clamp(21px, 1.95vw, 26px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: #a9a9a9;
        }

        .mountain-say b {
          color: #171717;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .mountain-shot {
            height: 236px;
          }
          .mountain-txt {
            padding: 20px 20px 26px;
          }
          .mountain-say {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}

// Re-export alias for MountainProductCard
export const MountainProductCard = LiquidProductCard;
