"use client";

import React, {
  useState,
  useRef,
  useMemo,
  useLayoutEffect,
  useEffect,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ALL_PARTNERS } from "@/lib/partners";
import { Reveal, RevealText } from "@/components/reveal";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface WallPartner {
  name: string;
  role: string;
  logoUrl: string;
  href?: string;
  description?: string;
}

export interface PartnersWallSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  columns?: number;
  minTileSize?: number;
  tilt?: number;
  perspective?: number;
  speed?: number;
  className?: string;
}

const GAP = 14;

export default function PartnersWallSection({
  eyebrow = "AUTHORIZED PARTNERSHIPS & DEALERSHIPS",
  title = "Our Partners, Our Strength",
  description = "16+ approved global tier-1 manufacturers delivering world-class flow measurement, automation, and instrumentation solutions across Kuwait, UAE, and the GCC.",
  columns = 8,
  minTileSize = 120,
  tilt = 18,
  perspective = 1100,
  speed = 18,
  className = "",
}: PartnersWallSectionProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [tooltip, setTooltip] = useState<{
    name: string;
    role: string;
    left: number;
    top: number;
  } | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [blockHeight, setBlockHeight] = useState(0);
  const [effectiveColumns, setEffectiveColumns] = useState(columns);
  const [wallWidth, setWallWidth] = useState(1152);

  // Convert raw ALL_PARTNERS to WallPartner format
  const uniquePartners: WallPartner[] = useMemo(() => {
    return ALL_PARTNERS.map((p) => ({
      name: p.name,
      role: p.relationship || p.product || "Authorized Partner",
      logoUrl: p.logo,
      href: p.href,
      description: p.description,
    }));
  }, []);

  // Measure wall container to dynamically adjust columns
  useIsomorphicLayoutEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const measure = () => {
      const width = wall.clientWidth;
      setWallWidth(width);
      const fit = Math.floor((width + GAP) / (minTileSize + GAP));
      // Clamp: at least 2 on phone, up to 8 on desktop
      setEffectiveColumns(Math.max(2, Math.min(columns, fit)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wall);
    return () => ro.disconnect();
  }, [columns, minTileSize]);

  // Build grid items: repeat list so height exceeds wall height, then pad last row
  const tiles = useMemo(() => {
    if (uniquePartners.length === 0) return [];
    let list = [...uniquePartners];
    // Need at least 5 rows to be taller than 420px
    const minRows = 5;
    const targetCount = Math.max(uniquePartners.length, effectiveColumns * minRows);
    while (list.length < targetCount) {
      list = list.concat(uniquePartners);
    }
    // Pad to a complete rectangular grid
    const remainder = list.length % effectiveColumns;
    if (remainder !== 0) {
      const fill = effectiveColumns - remainder;
      list = list.concat(
        Array.from({ length: fill }, (_, i) => uniquePartners[i % uniquePartners.length])
      );
    }
    return list;
  }, [uniquePartners, effectiveColumns]);

  // Measure height of one copy of the grid for seamless wrap
  useIsomorphicLayoutEffect(() => {
    const block = blockRef.current;
    if (!block) return;
    const measure = () => setBlockHeight(block.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(block);
    return () => ro.disconnect();
  }, [tiles, effectiveColumns]);

  // Continuous infinite upward scroll, pauses while tile is hovered or focused
  const y = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    if (tooltip !== null || isHovered || blockHeight === 0 || prefersReducedMotion) {
      return;
    }
    const wrap = blockHeight + GAP;
    let next = y.get() - (speed * delta) / 1000;
    if (next <= -wrap) next += wrap;
    y.set(next);
  });

  const handleTileEnter = (
    e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
    partner: WallPartner
  ) => {
    const wall = wallRef.current;
    if (!wall) return;
    const tile = e.currentTarget.getBoundingClientRect();
    const box = wall.getBoundingClientRect();
    setTooltip({
      name: partner.name,
      role: partner.role,
      left: tile.left - box.left + tile.width / 2,
      top: tile.top - box.top,
    });
  };

  const handleTileLeave = () => {
    setTooltip(null);
  };

  const planeStyle: CSSProperties = {
    transform: prefersReducedMotion ? "none" : `rotateX(${tilt}deg)`,
    transformStyle: prefersReducedMotion ? "flat" : "preserve-3d",
  };

  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
    gap: GAP,
  };

  // Clamping tooltip to remain fully inside the wall boundaries
  const estimatedHalfWidth = 105;
  const clampMin = Math.min(wallWidth / 2, estimatedHalfWidth + 12);
  const clampMax = Math.max(wallWidth / 2, wallWidth - estimatedHalfWidth - 12);
  const clampedLeft = tooltip
    ? Math.max(clampMin, Math.min(clampMax, tooltip.left))
    : 0;
  const arrowOffset = tooltip ? tooltip.left - clampedLeft : 0;

  const renderGrid = (copy: number, ref?: React.Ref<HTMLDivElement>) => (
    <div ref={ref} className="grid w-full" style={gridStyle}>
      {tiles.map((p, i) => {
        const hasLink = Boolean(p.href && p.href.trim().length > 0);

        const cardContent = (
          <span className="absolute inset-0 rounded-[14px] bg-white border border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-4 flex items-center justify-center transition-all duration-300 ease-out group-hover:z-20 group-hover:scale-[1.12] group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] group-focus-visible:z-20 group-focus-visible:scale-[1.12] group-focus-visible:ring-2 group-focus-visible:ring-[#8a302f] group-focus-visible:ring-offset-2 overflow-hidden">
            {/* Thin Red Top Line (#8a302f) appearing on hover or focus */}
            <span className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-events-none" />

            {/* Centered logo (never cropped or stretched, object-contain) */}
            <span className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <img
                src={p.logoUrl}
                alt={p.name}
                width={160}
                height={120}
                loading="lazy"
                draggable={false}
                className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:opacity-100 select-none"
              />
            </span>
          </span>
        );

        if (hasLink) {
          return (
            <Link
              key={`${copy}-${p.name}-${i}`}
              href={p.href!}
              prefetch={false}
              aria-label={`${p.name} - ${p.role}`}
              onMouseEnter={(e) => handleTileEnter(e, p)}
              onFocus={(e) => handleTileEnter(e, p)}
              onBlur={handleTileLeave}
              className="group relative block aspect-[4/3] outline-none cursor-pointer"
            >
              {cardContent}
            </Link>
          );
        }

        return (
          <div
            key={`${copy}-${p.name}-${i}`}
            role="button"
            tabIndex={0}
            aria-label={`${p.name} - ${p.role}`}
            onMouseEnter={(e) => handleTileEnter(e, p)}
            onFocus={(e) => handleTileEnter(e, p)}
            onBlur={handleTileLeave}
            className="group relative block aspect-[4/3] outline-none cursor-pointer"
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className={`py-16 sm:py-24 px-4 sm:px-6 w-full [--wall-bg:#e8e7e5] bg-[var(--wall-bg)] text-[#1a1a1a] overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Center Header (Eyebrow, Heading, Paragraph) ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
          <Reveal variant="eyebrow" className="justify-center mb-3">
            <span className="text-[#8a302f] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.14em] select-none">
              {eyebrow}
            </span>
          </Reveal>
          <RevealText
            as="h2"
            variant="words"
            delay={90}
            className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight mb-4"
          >
            {title}
          </RevealText>
          <Reveal
            as="p"
            variant="paragraph"
            delay={150}
            className="text-[14.5px] sm:text-[16px] text-[#555] leading-relaxed"
          >
            {description}
          </Reveal>
        </div>

        {/* ── Screen Reader Accessible List ── */}
        <div className="sr-only">
          <h3>Authorized Technology Partners and Dealerships</h3>
          <ul>
            {uniquePartners.map((p) => (
              <li key={p.name}>
                {p.name} — {p.role} {p.href ? `(Link: ${p.href})` : ""}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Reduced Motion Mode: Normal Static Grid ── */}
        {prefersReducedMotion ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {uniquePartners.map((p) => {
              const hasLink = Boolean(p.href && p.href.trim().length > 0);

              const inner = (
                <>
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-[#8a302f]" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      width={160}
                      height={120}
                      loading="lazy"
                      className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full text-center mt-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8a302f] truncate">
                      {p.role}
                    </span>
                    <span className="font-heading text-[12.5px] font-bold text-[#1a1a1a] truncate block">
                      {p.name}
                    </span>
                  </div>
                </>
              );

              if (hasLink) {
                return (
                  <Link
                    key={p.name}
                    href={p.href!}
                    prefetch={false}
                    aria-label={`${p.name} - ${p.role}`}
                    className="group relative block aspect-[4/3] rounded-[14px] bg-white border border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-4 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] overflow-hidden"
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={p.name}
                  role="button"
                  tabIndex={0}
                  aria-label={`${p.name} - ${p.role}`}
                  className="group relative block aspect-[4/3] rounded-[14px] bg-white border border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-4 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] overflow-hidden"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        ) : (
          /* ── 3D Tilted Infinite Scrolling Wall ── */
          <div
            ref={wallRef}
            className="relative mx-auto max-w-6xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[420px]"
            style={{
              perspective: `${perspective}px`,
              perspectiveOrigin: "50% 50%",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setTooltip(null);
            }}
          >
            {/* Tilted Plane */}
            <div className="h-full" style={planeStyle}>
              <motion.div className="flex w-full flex-col" style={{ y, gap: GAP }}>
                {renderGrid(0, blockRef)}
                {renderGrid(1)}
              </motion.div>
            </div>

            {/* Seamless Edge Fade Mask blending into --wall-bg (#e8e7e5) */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background: `
                  radial-gradient(130% 95% at 50% 50%, transparent 35%, var(--wall-bg) 85%),
                  linear-gradient(to bottom, var(--wall-bg) 0%, transparent 18%, transparent 82%, var(--wall-bg) 100%),
                  linear-gradient(to right, var(--wall-bg) 0%, transparent 12%, transparent 88%, var(--wall-bg) 100%)
                `,
              }}
              aria-hidden="true"
            />

            {/* Hover Tooltip (Clamped to never leave wall container) */}
            {tooltip && (
              <div
                className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-[calc(100%+14px)] whitespace-nowrap rounded-lg border border-black/10 bg-white px-3.5 py-2 text-center shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)]"
                style={{ left: clampedLeft, top: tooltip.top }}
              >
                <div className="font-heading text-[13px] font-bold text-[#1a1a1a] leading-tight">
                  {tooltip.name}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#8a302f] mt-0.5">
                  {tooltip.role}
                </div>
                <span
                  className="absolute top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-black/10 bg-white"
                  style={{
                    left: `calc(50% + ${Math.max(-65, Math.min(65, arrowOffset))}px)`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* ── "Explore Our Partners" Red Gradient Button ── */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/partners/"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-[14px] font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f]"
            style={{
              background: "var(--btn-primary-bg)",
              boxShadow: "var(--btn-primary-shadow)",
            }}
          >
            <span>Explore Our Partners</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
