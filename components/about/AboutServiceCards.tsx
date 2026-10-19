"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Gauge, ClipboardCheck, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";

export interface AboutServiceItem {
  icon?: "gauge" | "clipboard-check" | "cpu" | string;
  Icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href: string;
  index: string;
  tags: string[];
}

interface AboutServiceCardsProps {
  cards: AboutServiceItem[];
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  gauge: Gauge,
  "clipboard-check": ClipboardCheck,
  cpu: Cpu,
  "01": Gauge,
  "02": ClipboardCheck,
  "03": Cpu,
};

function resolveIcon(card: AboutServiceItem) {
  if (card.Icon) return card.Icon;
  if (card.icon && ICON_MAP[card.icon]) return ICON_MAP[card.icon];
  if (card.index && ICON_MAP[card.index]) return ICON_MAP[card.index];
  return Gauge;
}

export default function AboutServiceCards({ cards }: AboutServiceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <div
      ref={containerRef}
      className="about-service-grid"
      style={{
        display: "grid",
        alignItems: "stretch",
      }}
    >
      {cards.map((card, i) => {
        const { title, description, href, index, tags } = card;
        const IconComponent = resolveIcon(card);

        return (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="about-service-card group"
          >
            {/* Soft radial glow in top-right corner on hover */}
            <div className="about-service-card-glow" aria-hidden="true" />

            {/* Top row: Icon badge + Index number */}
            <div className="flex items-center justify-between mb-6">
              {/* Icon badge: 56px rounded square (radius 16px) with soft gradient */}
              <div className="about-service-icon-badge">
                <IconComponent className="w-6 h-6 text-[#8a302f]" strokeWidth={1.85} />
              </div>

              {/* Large faint index "01 / 02 / 03" in mono font, color #8a302f at 25% opacity */}
              <span className="font-mono text-[32px] font-bold text-[#8a302f]/25 leading-none select-none tracking-tight">
                {index}
              </span>
            </div>

            {/* Title: dark (#1a1a1a), 22px, weight 700, tight line-height, min-height 2 lines */}
            <h3 className="font-heading text-[22px] font-bold text-[#1a1a1a] leading-[1.28] tracking-tight min-h-[calc(2*1.28em)] text-balance mb-3.5">
              {title}
            </h3>

            {/* Accent line: short 32px x 3px accent in #8a302f. On card hover grows to 56px */}
            <div className="about-service-accent-line" aria-hidden="true" />

            {/* Description: gray (#5b5b5b), 15px, line-height 1.7 */}
            <p className="text-[15px] text-[#5b5b5b] leading-[1.7] mt-3.5 mb-5">
              {description}
            </p>

            {/* Pill tags: 12px text, background rgba(138,48,47,0.08), color #8a302f, radius 999px */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium tracking-normal bg-[#8a302f]/[0.08] text-[#8a302f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Pinned bottom action bar with divider */}
            <div className="about-service-card-footer mt-auto pt-5 border-t border-black/[0.06]">
              <Link
                href={href}
                className="about-service-link-btn group/link"
              >
                <span className="about-service-link-text">
                  Learn More
                </span>
                <span className="about-service-arrow-circle" aria-hidden="true">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
