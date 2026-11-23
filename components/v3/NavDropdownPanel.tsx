"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NavItem, NavChild } from "@/lib/navigation";
import "./nav-dd.css";

export interface NavDropdownPanelProps {
  item: NavItem;
  pathname: string | null;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  prefersReducedMotion?: boolean | null;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/**
 * Reusable NavDropdownPanel
 * - Centered under parent trigger button (clamped to viewport 16px margins)
 * - Pure pixel left positioning on wrapper, preserving Framer Motion transforms
 * - Dynamic CSS grid columns (auto-flow column, max-content width)
 * - Framer Motion layoutId="nav-menu" for smooth morphing transitions
 * - 8px hover bridge between button and panel
 * - Grouped columns with optional 11px uppercase heading (#8a302f)
 * - 36x36 rounded-10px icon boxes with 18px icons
 * - 15px font-semibold titles with wrapping on screen limits
 * - Hover / focus transitions to brand red #8a302f
 * - Full-width "View All" footer row
 */
export default function NavDropdownPanel({
  item,
  pathname,
  onClose,
  onMouseEnter,
  onMouseLeave,
  prefersReducedMotion = false,
}: NavDropdownPanelProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const highlightChild = item.children?.find((c) => c.highlight);
  const regularChildren = item.children?.filter((c) => !c.highlight) || [];

  // Group children by their group name (preserves insertion order)
  const groupsMap = new Map<string, NavChild[]>();
  regularChildren.forEach((child) => {
    const gName = child.group || "";
    if (!groupsMap.has(gName)) groupsMap.set(gName, []);
    groupsMap.get(gName)!.push(child);
  });

  const groups = Array.from(groupsMap.entries());

  useIsomorphicLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const panel = panelRef.current;
    if (!wrapper || !panel) return;

    const updatePosition = () => {
      const parent = wrapper.closest("li") || wrapper.parentElement;
      if (!parent) return;

      const liRect = parent.getBoundingClientRect();
      const panelWidth = panel.offsetWidth;
      const innerWidth = window.innerWidth;
      const liCenter = liRect.left + liRect.width / 2;
      let left = liCenter - panelWidth / 2;

      const minLeft = 16;
      const maxLeft = innerWidth - panelWidth - 16;
      if (maxLeft < minLeft) {
        left = minLeft;
      } else {
        left = Math.max(minLeft, Math.min(left, maxLeft));
      }

      wrapper.style.left = `${Math.round(left - liRect.left)}px`;
    };

    updatePosition();
    const rafId = requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updatePosition);
    };
  }, [item]);

  return (
    <div
      ref={wrapperRef}
      className="nav-dd nav-dd-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        ref={panelRef}
        layoutId={prefersReducedMotion ? undefined : "nav-menu"}
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -6, scale: 0.98 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -6, scale: 0.98 }
        }
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="nav-dd-panel nav-dd__panel rounded-[20px] p-5 isolate flex flex-col"
        style={{
          /* aibqs marine-beam-panel: radial warm tint at top-right + white base */
          background: "radial-gradient(at 100% 0, #fdf0f0 0%, transparent 55%), #ffffff",
          border: "1px solid rgba(220, 190, 190, 0.70)",
          boxShadow: "0 2px 3px rgba(26,5,5,0.03), 0 12px 30px -22px rgba(139,0,0,0.32), inset 0 1px rgba(255,255,255,0.90)",
        }}
        role="region"
        aria-label={`${item.label} submenu`}
      >
        {/* Columns Grid */}
        <div className="nav-dd-columns nav-dd__columns">
          {groups.map(([groupName, children], gIdx) => (
            <div key={gIdx} className="nav-dd-col nav-dd__col">
              {/* Optional group heading */}
              {groupName && (
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#8a302f] px-3 pb-2 pt-1 select-none min-w-0">
                  {groupName}
                </div>
              )}

              {/* Rows */}
              {children.map((child, cIdx) => {
                const isChildActive =
                  pathname === child.href ||
                  (child.href !== "/" && pathname?.startsWith(child.href));
                const Icon = child.icon;

                return (
                  <Link
                    key={cIdx}
                    href={child.href}
                    onClick={onClose}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        e.preventDefault();
                        onClose();
                      }
                    }}
                    className={`group/item flex items-center gap-3 w-full min-w-0 px-3 py-2.5 rounded-[12px] transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] focus-visible:ring-offset-1 ${
                      isChildActive
                        ? "bg-[#8a302f]/[0.08]"
                        : "hover:bg-[#8a302f]/[0.06] active:bg-[#8a302f]/[0.10]"
                    }`}
                  >
                    {/* 36x36 Icon Box */}
                    {Icon && (
                      <div
                        className={`w-9 h-9 min-w-9 min-h-9 rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isChildActive
                            ? "bg-[#8a302f] border border-[#8a302f] text-white"
                            : "border border-black/[0.08] bg-white text-[#8a302f] group-hover/item:bg-[#8a302f] group-hover/item:border-[#8a302f] group-hover/item:text-white"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                    )}

                    {/* Title ONLY */}
                    <span
                      className={`nav-dd-title nav-dd__title text-[15px] font-semibold transition-colors duration-200 leading-tight min-w-0 ${
                        isChildActive
                          ? "text-[#8a302f]"
                          : "text-[#1a1a1a] group-hover/item:text-[#8a302f]"
                      }`}
                    >
                      {child.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Full-width "View All" Button at Bottom */}
        {highlightChild && (
          <div className="nav-dd-footer nav-dd__footer">
            <Link
              href={highlightChild.href}
              onClick={onClose}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  onClose();
                }
              }}
              className="group/viewall flex items-center justify-center p-2.5 rounded-full border border-dashed border-[#8a302f]/30 bg-[#8a302f]/[0.05] hover:bg-[#8a302f] hover:text-white transition-all duration-200 text-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] w-full"
            >
              <span className="text-[13px] font-bold text-[#8a302f] group-hover/viewall:text-white transition-colors">
                {highlightChild.label}
              </span>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
