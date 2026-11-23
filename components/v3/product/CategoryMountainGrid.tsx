"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CARD_TINT_PALETTE } from "./LiquidProductCard";

export interface CategoryItem {
  title: string;
  label: string;
  statement: string;
  href: string;
  image: string;
  meta?: string;
}

interface CategoryMountainGridProps {
  categories: CategoryItem[];
}

export default function CategoryMountainGrid({ categories }: CategoryMountainGridProps) {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setVisibleIndices(new Set(categories.map((_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxStr = entry.target.getAttribute("data-index");
            if (idxStr !== null) {
              const idx = parseInt(idxStr, 10);
              setVisibleIndices((prev) => {
                const next = new Set(prev);
                next.add(idx);
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
  }, [categories]);

  return (
    <div className="mountain-grid" ref={gridRef}>
      {categories.map((cat, idx) => {
        const tint = CARD_TINT_PALETTE[idx % CARD_TINT_PALETTE.length];
        const delayMs = (idx % 3) * 90;
        const isVisible = visibleIndices.has(idx);

        return (
          <div
            key={cat.title}
            className="mountain-card-wrap"
            data-index={idx}
          >
            <Link
              href={cat.href}
              className={`mountain-card ${isVisible ? "in" : ""}`}
              style={
                {
                  "--t1": tint.t1,
                  "--t2": tint.t2,
                  transitionDelay: `${delayMs}ms`,
                } as React.CSSProperties
              }
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
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                />
              </div>

              <div className="mountain-txt">
                <div className="mountain-lab" style={{ color: "#8a302f" }}>{cat.label || cat.title}</div>
                <p
                  className="mountain-say"
                  dangerouslySetInnerHTML={{ __html: cat.statement }}
                />
              </div>
            </Link>
          </div>
        );
      })}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mountain-grid {
          display: grid;
          gap: 34px 30px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          width: 100%;
        }

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

        @media (max-width: 1000px) {
          .mountain-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 24px;
          }
        }

        @media (max-width: 640px) {
          .mountain-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

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
      `,
        }}
      />
    </div>
  );
}
