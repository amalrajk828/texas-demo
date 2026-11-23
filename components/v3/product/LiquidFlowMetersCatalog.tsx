"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import type { Product } from "@/lib/products";
import LiquidProductCard from "./LiquidProductCard";

interface LiquidFlowMetersCatalogProps {
  heroTitle?: string;
  products: Product[];
}

interface FilterOption {
  id: string;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "Faure Herman", label: "Faure Herman" },
  { id: "Helical turbine", label: "Helical turbine" },
  { id: "Ultrasonic", label: "Ultrasonic" },
  { id: "SICK", label: "SICK" },
  { id: "Ultraflux", label: "Ultraflux" },
];

export default function LiquidFlowMetersCatalog({
  heroTitle = "Liquid Flow Meters",
  products,
}: LiquidFlowMetersCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleSlugs, setVisibleSlugs] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    const filterLower = activeFilter.toLowerCase();
    return products.filter((p) => {
      const matchBrand = (p.brand || "").toLowerCase().includes(filterLower);
      const matchSeries = (p.series || "").toLowerCase().includes(filterLower);
      const matchTag = (p.tag || "").toLowerCase().includes(filterLower);
      const matchName = (p.name || "").toLowerCase().includes(filterLower);
      const matchDesc = (p.description || "").toLowerCase().includes(filterLower);
      return matchBrand || matchSeries || matchTag || matchName || matchDesc;
    });
  }, [products, activeFilter]);

  // IntersectionObserver for staggered fade-up on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setVisibleSlugs(new Set(products.map((p) => p.slug)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute("data-slug");
            if (slug) {
              setVisibleSlugs((prev) => {
                const next = new Set(prev);
                next.add(slug);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const cardElements = gridRef.current?.querySelectorAll(".mountain-card-wrap");
    cardElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [products, filteredProducts]);

  return (
    <section id="product-models" className="liquid-catalog-section">
      <div className="liquid-catalog-container">
        {/* ── Head Section ── */}
        <div className="liquid-catalog-head">
          <div>
            <div className="liquid-catalog-eyebrow">Precision Hardware</div>
            <h2 className="liquid-catalog-title">
              Available {heroTitle} Systems
            </h2>
          </div>
          <div className="liquid-catalog-count">
            {filteredProducts.length} of {products.length} Products Cataloged
          </div>
        </div>

        {/* ── Filter Pills ── */}
        <div className="liquid-filters" role="tablist" aria-label="Product filter categories">
          {FILTER_OPTIONS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.id}
              className={`liquid-filter-btn ${activeFilter === f.id ? "on" : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Product Grid (3 cols desktop, 2 cols tablet, 1 col mobile) ── */}
        <div className="liquid-grid" ref={gridRef}>
          {filteredProducts.map((product, idx) => (
            <div
              key={product.slug}
              className="mountain-card-wrap"
              data-slug={product.slug}
            >
              <LiquidProductCard
                product={product}
                index={idx}
                isVisible={visibleSlugs.has(product.slug)}
              />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .liquid-catalog-section {
          width: 100%;
          background: #ece9e5;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .liquid-catalog-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 30px 24px 120px;
          box-sizing: border-box;
        }

        .liquid-catalog-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .liquid-catalog-eyebrow {
          font-family: var(--font-m, "JetBrains Mono", ui-monospace, monospace);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8b1e1e;
        }

        .liquid-catalog-title {
          font-family: var(--font-heading, "Sora", sans-serif);
          font-weight: 600;
          font-size: clamp(28px, 3.6vw, 46px);
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #171717;
          margin-top: 10px;
        }

        .liquid-catalog-count {
          font-family: var(--font-m, "JetBrains Mono", ui-monospace, monospace);
          font-size: 12px;
          color: #7a7773;
          letter-spacing: 0.04em;
          padding-bottom: 6px;
        }

        /* ── Filters ── */
        .liquid-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }

        .liquid-filter-btn {
          font-family: var(--font-body, "Inter", system-ui, sans-serif);
          font-size: 13px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.6);
          color: #4a4846;
          border: 1px solid transparent;
          padding: 10px 18px;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
          user-select: none;
        }

        .liquid-filter-btn:hover {
          background: #ffffff;
        }

        .liquid-filter-btn.on {
          background: #171717;
          color: #ffffff;
        }

        /* ── Grid ── */
        .liquid-grid {
          display: grid;
          gap: 34px 30px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
        }

        .mountain-card-wrap {
          display: flex;
          width: 100%;
          height: 100%;
        }

        /* ── The Mountain Card (Soft Squircle Style) ── */
        .mountain-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: #f4f4f4;
          border: 6px solid #ffffff;
          border-radius: 48px;
          padding: 8px 8px 0;
          box-shadow: 0 34px 60px -32px rgba(0, 0, 0, 0.38), 0 10px 24px -12px rgba(0, 0, 0, 0.16);
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

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .liquid-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 24px;
          }
        }

        @media (max-width: 640px) {
          .liquid-catalog-container {
            padding: 20px 16px 80px;
          }
          .liquid-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .mountain-card {
            border-radius: 40px;
            border-width: 5px;
          }
          .mountain-shot {
            height: 236px;
            border-radius: 32px;
          }
          .mountain-txt {
            padding: 20px 20px 28px;
          }
        }

        /* ── Reduced Motion Preference ── */
        @media (prefers-reduced-motion: reduce) {
          .mountain-card,
          .mountain-card.in {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .mountain-shot img,
          .mountain-go {
            transition: none !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}
