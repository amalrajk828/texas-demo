"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface StackedCardItem {
  id: string | number;
  title: string;
  icon: React.ReactNode;
  href: string;
  number: string;
}

export interface StackedCardsProps {
  items: StackedCardItem[];
  className?: string;
  onActiveChange?: (index: number) => void;
}

const DRAG_THRESHOLD = 80;
const VELOCITY_THRESHOLD = 500;

export default function StackedCards({
  items,
  className = "",
  onActiveChange,
}: StackedCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const isDraggingRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const count = items.length;

  const updateActive = useCallback(
    (newIndex: number, dir: "down" | "up") => {
      setDirection(dir);
      setActiveIndex(newIndex);
      onActiveChange?.(newIndex);
    },
    [onActiveChange]
  );

  const handleNext = useCallback(() => {
    updateActive((activeIndex + 1) % count, "down");
  }, [activeIndex, count, updateActive]);

  const handlePrev = useCallback(() => {
    updateActive((activeIndex - 1 + count) % count, "up");
  }, [activeIndex, count, updateActive]);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === activeIndex) return;
      updateActive(idx, idx > activeIndex ? "down" : "up");
    },
    [activeIndex, updateActive]
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      handlePrev();
    }
  };

  const springTransition = prefersReducedMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 320, damping: 28, mass: 0.8 };

  // Cards behind active index (peeking out at the top edge)
  // Index of 1 card behind:
  const behindIdx1 = (activeIndex + 1) % count;
  // Index of 2 cards behind:
  const behindIdx2 = (activeIndex + 2) % count;

  const behindCard1 = items[behindIdx1];
  const behindCard2 = items[behindIdx2];
  const activeCard = items[activeIndex];

  // Variants for front card with AnimatePresence
  const frontCardVariants = {
    enter: (dir: "down" | "up") =>
      prefersReducedMotion
        ? { opacity: 0 }
        : {
            y: dir === "down" ? -14 : 160,
            scale: dir === "down" ? 0.95 : 1.0,
            opacity: dir === "down" ? 0.8 : 0,
            rotate: 0,
          },
    center: {
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: springTransition,
    },
    exit: (dir: "down" | "up") =>
      prefersReducedMotion
        ? { opacity: 0, transition: { duration: 0.15 } }
        : {
            y: dir === "down" ? 180 : -14,
            scale: dir === "down" ? 1.02 : 0.95,
            opacity: dir === "down" ? 0 : 0.8,
            rotate: dir === "down" ? 5 : 0,
            transition: { duration: 0.28, ease: [0.32, 0.72, 0, 1] as const },
          },
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Service Solutions"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative w-full max-w-[420px] mx-auto select-none outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]/40 rounded-[26px] ${className}`}
    >
      <div className="relative flex items-center gap-3 w-full">
        {/* ── Stack Area (Top padding accommodates peeking cards) ──────── */}
        <div
          className="relative flex-1 h-[218px] pt-7"
          style={{ touchAction: "pan-x" }}
        >
          {/* Card 2 Behind (Position 2: shifted -28px, scale 0.90, opacity 0.6) */}
          {count > 2 && behindCard2 && (
            <motion.div
              key={`bg-2-${behindCard2.id}`}
              className="absolute inset-x-0 top-7 h-[184px] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-white/95 border border-black/[0.08] shadow-md pointer-events-none"
              style={{ transformOrigin: "top center", zIndex: 10 }}
              initial={false}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.6 }
                  : {
                      y: -28,
                      scale: 0.9,
                      opacity: 0.6,
                      filter: "blur(0.8px) brightness(0.92)",
                    }
              }
              transition={springTransition}
            >
              <CardContent item={behindCard2} isInteractive={false} />
            </motion.div>
          )}

          {/* Card 1 Behind (Position 1: shifted -14px, scale 0.95, opacity 0.8) */}
          {count > 1 && behindCard1 && (
            <motion.div
              key={`bg-1-${behindCard1.id}`}
              className="absolute inset-x-0 top-7 h-[184px] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-white/95 border border-black/[0.08] shadow-lg pointer-events-none"
              style={{ transformOrigin: "top center", zIndex: 20 }}
              initial={false}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.8 }
                  : {
                      y: -14,
                      scale: 0.95,
                      opacity: 0.8,
                      filter: "blur(0.4px) brightness(0.96)",
                    }
              }
              transition={springTransition}
            >
              <CardContent item={behindCard1} isInteractive={false} />
            </motion.div>
          )}

          {/* Front Active Card (Position 0: full size, draggable) */}
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={`active-${activeCard.id}`}
              custom={direction}
              variants={frontCardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.65}
              onDragStart={() => {
                isDraggingRef.current = true;
              }}
              onDragEnd={(_, info) => {
                const { offset, velocity } = info;
                if (offset.y > DRAG_THRESHOLD || velocity.y > VELOCITY_THRESHOLD) {
                  // Swiped DOWN -> next card
                  handleNext();
                } else if (
                  offset.y < -DRAG_THRESHOLD ||
                  velocity.y < -VELOCITY_THRESHOLD
                ) {
                  // Swiped UP -> previous card
                  handlePrev();
                }
                setTimeout(() => {
                  isDraggingRef.current = false;
                }, 60);
              }}
              whileDrag={{ cursor: "grabbing" }}
              className="absolute inset-x-0 top-7 h-[184px] rounded-[24px] p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-white border border-black/[0.08] shadow-[0_16px_36px_-8px_rgba(0,0,0,0.14)] cursor-grab active:cursor-grabbing pointer-events-auto"
              style={{
                transformOrigin: "top center",
                zIndex: 30,
                touchAction: "pan-x",
              }}
            >
              <CardContent
                item={activeCard}
                isInteractive={true}
                isDraggingRef={isDraggingRef}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Vertical Pagination Dots Indicator (Right side) ─────────── */}
        <div
          role="tablist"
          aria-label="Card pagination"
          className="flex flex-col items-center justify-center gap-2 py-2 select-none z-30 flex-shrink-0"
        >
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to service ${item.number}: ${item.title}`}
                onClick={() => goTo(idx)}
                className="relative flex items-center justify-center p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] rounded-full"
              >
                <span
                  className={`block transition-all duration-300 ease-out ${
                    isActive
                      ? "w-2 h-6 bg-[#8B0000] rounded-full shadow-sm"
                      : "w-2 h-2 bg-black/25 hover:bg-black/45 rounded-full"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Inner Card Content ────────────────────────────────────────────────────────
interface CardContentProps {
  item: StackedCardItem;
  isInteractive: boolean;
  isDraggingRef?: React.MutableRefObject<boolean>;
}

function CardContent({ item, isInteractive, isDraggingRef }: CardContentProps) {
  return (
    <>
      {/* Top row: Icon + Number Badge */}
      <div className="flex items-center justify-between mb-2 relative z-10">
        <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-dashed border-[#8B0000]/40 bg-[#8B0000]/[0.06] text-[#8B0000] flex items-center justify-center flex-shrink-0">
          {item.icon}
        </div>
        <span className="font-mono text-[9.5px] font-bold text-gray-500 bg-black/[0.04] px-2 py-0.5 rounded-[6px] tracking-wider border border-black/[0.04]">
          {item.number}
        </span>
      </div>

      {/* Middle row: Service Title */}
      <h3 className="text-[15px] font-bold text-[#1a1a1a] leading-tight line-clamp-2 my-auto relative z-10">
        {item.title}
      </h3>

      {/* Bottom row: Divider line + EXPLORE link */}
      <div className="border-t border-black/[0.08] pt-2.5 mt-auto relative z-10 flex items-center justify-between">
        {isInteractive ? (
          <Link
            href={item.href}
            className="group flex items-center justify-between w-full text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a] hover:text-[#8B0000] transition-colors"
            onClick={(e) => {
              if (isDraggingRef?.current) {
                e.preventDefault();
              }
            }}
          >
            <span>EXPLORE</span>
            <span className="text-[#8B0000] text-sm group-hover:translate-x-1 transition-transform font-bold leading-none">
              &rsaquo;
            </span>
          </Link>
        ) : (
          <div className="flex items-center justify-between w-full text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#1a1a1a]/70">
            <span>EXPLORE</span>
            <span className="text-[#8B0000]/70 text-sm font-bold leading-none">
              &rsaquo;
            </span>
          </div>
        )}
      </div>

      {/* Large faded watermark number */}
      <span
        aria-hidden="true"
        className="absolute -bottom-2 right-2 font-mono font-black text-[54px] text-black/[0.04] select-none pointer-events-none leading-none z-0"
      >
        {item.number}
      </span>
    </>
  );
}

