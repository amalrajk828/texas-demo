"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MAIN_NAV, NavItem, NavChild } from "@/lib/navigation";
import { LiquidGlassNav } from "@/components/ui/liquid-glass-nav";

export type { NavItem, NavChild };

export interface GlassNavbarProps {
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  hideOnScrollDown?: boolean;
  className?: string;
}

/**
 * Liquid Glass Floating Navbar
 * - Sibling structure: Header container (pointer-events-none bg-transparent) with
 *   pill (<LiquidGlassNav>), desktop flyouts, and mobile menu panel as distinct siblings.
 * - 8 Optical Layers: Surface, Tint, Shoulder, Reflection, Pointer Light, Rim, Caustic, Bottom.
 * - Zero nested blurs: Tap-outside overlay is completely transparent (no bg, no blur).
 * - Full original menu structure: Home, About Us, Services, Industries, Products, Blog, Clients, CTA.
 */
export default function GlassNavbar({
  items = MAIN_NAV,
  ctaLabel = "Contact Us",
  ctaHref = "/contacts/",
  hideOnScrollDown = false,
  className = "",
}: GlassNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  // Active route matching logic
  const isLinkActive = (item: NavItem) => {
    const current = pathname || "/";
    if (item.href === "/") {
      return current === "/" || current === "";
    }
    const cleanHref = item.href.replace(/\/$/, "");
    if (current === item.href || current === cleanHref || current.startsWith(`${cleanHref}/`)) {
      return true;
    }
    if (item.children && item.children.length > 0) {
      const isChildMatch = item.children.some((child) => {
        const cleanChild = child.href.replace(/\/$/, "");
        return current === child.href || current === cleanChild || current.startsWith(`${cleanChild}/`);
      });
      if (isChildMatch) return true;
    }
    if (item.label === "Services") {
      return (
        current.startsWith("/service/") ||
        current === "/service" ||
        current.startsWith("/services/") ||
        current === "/services"
      );
    }
    if (item.label === "Industries") {
      return (
        current.startsWith("/industries/") ||
        current === "/industries" ||
        current.startsWith("/industry/") ||
        current === "/industry"
      );
    }
    if (item.label === "Products") {
      return (
        current.startsWith("/products/") ||
        current === "/products" ||
        current.startsWith("/product/") ||
        current === "/product" ||
        current.startsWith("/portfolio/") ||
        current === "/portfolio"
      );
    }
    if (item.label === "Blog") {
      return current.startsWith("/blog/") || current === "/blog";
    }
    if (item.label === "About Us") {
      return current.startsWith("/about-us/") || current === "/about-us" || current.startsWith("/about/") || current === "/about";
    }
    if (item.label === "Clients") {
      return current.startsWith("/clients/") || current === "/clients";
    }
    return false;
  };

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Outside click & Escape key listener (active only when a menu or dropdown is open)
  useEffect(() => {
    if (!mobileOpen && !activeDropdown) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, activeDropdown]);

  // Hover grace period handlers for desktop dropdowns (~150ms delay)
  const handleDropdownEnter = (label: string) => {
    if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(hover: hover)").matches) {
      return;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownToggle = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  // Scroll listener: single boolean toggle wrapped in requestAnimationFrame
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || window.pageYOffset;
        setScrolled(currentScrollY > 20);

        if (hideOnScrollDown) {
          if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY.current + 6) {
              setVisible(false);
            } else if (currentScrollY < lastScrollY.current - 6) {
              setVisible(true);
            }
          } else {
            setVisible(true);
          }
        } else {
          setVisible(true);
        }

        lastScrollY.current = currentScrollY;
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [hideOnScrollDown]);

  const isNavVisible = mobileOpen || visible;
  const activeDropdownItem = items.find((item) => item.label === activeDropdown);

  return (
    <>
      {/* Outer Wrapper: Pure layout container without background, blur, border, or shadow */}
      <header
        ref={navRef}
        role="banner"
        className={`fixed top-[12px] inset-x-0 mx-auto z-[100] w-[calc(100%-24px)] lg:w-[calc(100%-32px)] lg:max-w-6xl pointer-events-none bg-transparent border-none shadow-none outline-none transition-transform duration-300 ease-out [transform:translate3d(0,0,0)] [contain:layout_style] [isolation:isolate] [backface-visibility:hidden] [-webkit-font-smoothing:subpixel-antialiased] ${
          isNavVisible ? "translate-y-0" : "-translate-y-24"
        } ${className}`}
      >
        {/* SIBLING 1: The Liquid Glass Pill Wrapper */}
        <LiquidGlassNav
          as="nav"
          role="navigation"
          aria-label="Main Navigation"
          scrolled={scrolled}
          className="pointer-events-auto w-full h-[60px] lg:h-[72px]"
        >
          {/* Left Brand: Texas Logo & Identity */}
          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
              setActiveDropdown(null);
            }}
            className="flex items-center gap-2.5 lg:gap-3 group outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2 rounded-full py-1 pr-2 shrink-0 select-none"
            aria-label="Texas Technical Services Home"
          >
            <Image
              src="/logo.svg"
              alt="Texas Technical Services Emblem"
              width={36}
              height={36}
              className="h-8 w-8 lg:h-9 lg:w-9 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              priority
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-heading font-extrabold text-[13.5px] lg:text-[15px] tracking-[0.22em] text-[#1a1a1a] transition-colors group-hover:text-[#8B0000]">
                TEXAS
              </span>
              <span className="font-heading font-bold text-[7.5px] lg:text-[8.5px] tracking-[0.16em] text-[#6b6b66] mt-0.5 uppercase">
                TECHNICAL SERVICES
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop only, >= 1024px) */}
          <div
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 p-1 rounded-full relative"
            onMouseLeave={() => {
              setHoveredId(null);
              handleDropdownLeave();
            }}
          >
            {items.map((item) => {
              const active = isLinkActive(item);
              const hovered = hoveredId === item.id;
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isDropdownOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.id}
                  className="relative flex items-center rounded-full"
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    if (hasChildren) handleDropdownEnter(item.label);
                    else if (activeDropdown) setActiveDropdown(null);
                  }}
                >
                  {/* Active sliding pill indicator */}
                  {active && (
                    <motion.span
                      layoutId="activeGlassPill"
                      className="absolute inset-0 rounded-full bg-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.06)] border border-white/80 -z-10 pointer-events-none"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                      aria-hidden="true"
                    />
                  )}

                  {/* Hover highlight for non-active links */}
                  {!active && hovered && !isDropdownOpen && (
                    <motion.span
                      layoutId="hoverGlassPill"
                      className="absolute inset-0 rounded-full bg-white/50 -z-10 pointer-events-none"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 32 }
                      }
                      aria-hidden="true"
                    />
                  )}

                  {/* Top-level clickable label */}
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (
                        hasChildren &&
                        typeof window !== "undefined" &&
                        window.matchMedia &&
                        window.matchMedia("(hover: none)").matches
                      ) {
                        if (!isDropdownOpen) {
                          e.preventDefault();
                          handleDropdownToggle(item.label);
                          return;
                        }
                      }
                      setActiveDropdown(null);
                      setMobileOpen(false);
                    }}
                    className={`relative z-10 flex items-center pl-2.5 xl:pl-3 ${
                      hasChildren ? "pr-1" : "pr-2.5 xl:pr-3"
                    } py-1.5 rounded-full text-[13px] xl:text-[13.5px] transition-colors duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] ${
                      active || isDropdownOpen
                        ? "text-[#8B0000] font-semibold"
                        : "text-[#1f1f1f] font-medium hover:text-[#8B0000]"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>

                  {/* Separate chevron toggle button (does not navigate) */}
                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={isDropdownOpen ? `Close ${item.label} menu` : `Open ${item.label} menu`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDropdownToggle(item.label);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown" || e.key === " ") {
                          e.preventDefault();
                          setActiveDropdown(item.label);
                        } else if (e.key === "Escape") {
                          e.preventDefault();
                          setActiveDropdown(null);
                        }
                      }}
                      className={`relative z-10 mr-1.5 xl:mr-2 p-1 rounded-full transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] ${
                        active || isDropdownOpen
                          ? "text-[#8B0000]"
                          : "text-[#1f1f1f] opacity-70 hover:opacity-100 hover:text-[#8B0000]"
                      }`}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop only, >= 1024px) */}
          <Link
            href={ctaHref}
            className="hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#9a1b1b] to-[#6e0f0f] hover:from-[#b02222] hover:to-[#821414] active:scale-[0.98] text-white text-[13px] xl:text-[13.5px] font-semibold px-4 xl:px-5 py-2 lg:py-2.5 shadow-[0_4px_14px_rgba(154,27,27,0.35)] hover:shadow-[0_6px_20px_rgba(154,27,27,0.45)] hover:scale-[1.02] transition-all duration-200 shrink-0 group outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2"
          >
            <span>{ctaLabel}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>

          {/* Right Hamburger Toggle Button (Mobile & Tablet, < 1024px) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-glass-panel"
            className="flex lg:hidden w-10 h-10 rounded-full items-center justify-center bg-black/[0.04] hover:bg-black/[0.08] active:scale-95 transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 origin-center ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 origin-center ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </LiquidGlassNav>

        {/* SIBLING 2: Desktop Dropdown Flyout Panel (Positioned as sibling to nav, outside overflow-hidden) */}
        <AnimatePresence>
          {activeDropdownItem && activeDropdownItem.children && (
            <div
              className="hidden lg:block pointer-events-auto absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-[1100]"
              onMouseEnter={() => handleDropdownEnter(activeDropdownItem.label)}
              onMouseLeave={handleDropdownLeave}
            >
              <motion.div
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={`rounded-3xl bg-white/92 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.16),0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.85)] isolate [transform:translateZ(0)] ${
                  activeDropdownItem.label === "Services"
                    ? "w-[400px]"
                    : activeDropdownItem.label === "Industries"
                    ? "w-[620px]"
                    : "w-[660px]"
                }`}
                style={{
                  WebkitBackdropFilter: "blur(24px) saturate(150%)",
                }}
              >
                <div
                  className={
                    activeDropdownItem.label === "Services"
                      ? "flex flex-col gap-1.5"
                      : "grid grid-cols-2 gap-x-3 gap-y-1.5"
                  }
                >
                  {activeDropdownItem.children.map((child: NavChild, cIdx: number) => {
                    const isChildActive =
                      pathname === child.href ||
                      (child.href !== "/" && pathname.startsWith(child.href));

                    // Highlight / "View All" footer card
                    if (child.highlight) {
                      return (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className={`group/viewall mt-2.5 flex items-center justify-center p-2.5 rounded-full border border-dashed border-[#8B0000]/30 bg-[#8B0000]/[0.05] hover:bg-[#8B0000] hover:text-white transition-all text-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] ${
                            activeDropdownItem.label !== "Services" ? "col-span-2" : "w-full"
                          }`}
                        >
                          <span className="text-[13px] font-bold text-[#8B0000] group-hover/viewall:text-white transition-colors">
                            {child.label}
                          </span>
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={cIdx}
                        href={child.href}
                        onClick={() => setActiveDropdown(null)}
                        className={`group/item flex flex-col p-2.5 rounded-2xl transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] ${
                          isChildActive
                            ? "bg-[#8B0000]/[0.07] border-l-2 border-[#8B0000]"
                            : "hover:bg-black/[0.04] active:bg-black/[0.08]"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1a1a1a] group-hover/item:text-[#8B0000] transition-colors">
                          <span
                            className="text-[#8B0000] text-xs opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                            aria-hidden="true"
                          >
                            →
                          </span>
                          <span>{child.label}</span>
                        </span>
                        {child.desc && (
                          <span className="text-[11.5px] text-[#666663] leading-snug mt-0.5 line-clamp-2">
                            {child.desc}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* SIBLING 3: Mobile Glass Dropdown Panel (< 1024px, completely separate sibling) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-glass-panel"
              data-lenis-prevent="true"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: -8 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: -8 }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.15 }
                  : { type: "spring", stiffness: 350, damping: 28 }
              }
              className="pointer-events-auto absolute top-[calc(100%+8px)] left-0 right-0 w-full max-h-[calc(100dvh-92px)] max-h-[calc(100svh-92px)] overflow-y-auto overscroll-contain rounded-3xl bg-white/92 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 p-4 sm:p-5 shadow-[0_20px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] lg:hidden flex flex-col gap-1.5 isolate [transform:translateZ(0)] will-change-transform [-webkit-overflow-scrolling:touch]"
              style={{
                WebkitBackdropFilter: "blur(24px) saturate(150%)",
              }}
            >
              {/* Top Highlight Sheen */}
              <div
                className="pointer-events-none sticky top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent shrink-0"
                aria-hidden="true"
              />

              {items.map((item) => {
                const active = isLinkActive(item);
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = mobileExpanded === item.label;

                if (hasChildren) {
                  return (
                    <div key={item.id} className="shrink-0 flex flex-col rounded-2xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setMobileExpanded((prev) => (prev === item.label ? null : item.label))}
                        aria-expanded={isExpanded}
                        className={`shrink-0 flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all outline-none focus:outline-none ${
                          active
                            ? "bg-[#8B0000]/10 text-[#8B0000] font-bold"
                            : "text-[#2a2a28] hover:bg-black/[0.04] active:bg-black/[0.08]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-200 shrink-0 ${
                            isExpanded ? "rotate-180 text-[#8B0000]" : "rotate-0 text-black/40"
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {/* Accordion Sub-items */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                            className="shrink-0 overflow-hidden flex flex-col gap-1 pl-3 pr-1 py-1"
                          >
                            {item.children?.map((child: NavChild, cIdx: number) => {
                              const isChildActive =
                                pathname === child.href ||
                                (child.href !== "/" && pathname.startsWith(child.href));

                              if (child.highlight) {
                                return (
                                  <Link
                                    key={cIdx}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="shrink-0 mt-1 flex items-center justify-center p-2.5 rounded-full border border-dashed border-[#8B0000]/30 bg-[#8B0000]/[0.06] text-[#8B0000] font-bold text-xs text-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000]"
                                  >
                                    {child.label}
                                  </Link>
                                );
                              }

                              return (
                                <Link
                                  key={cIdx}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`shrink-0 flex flex-col p-2.5 rounded-xl transition-all outline-none focus:outline-none ${
                                    isChildActive
                                      ? "bg-[#8B0000]/[0.08] text-[#8B0000]"
                                      : "bg-white/60 hover:bg-white/90 text-[#2a2a28]"
                                  }`}
                                >
                                  <span className="text-[13px] font-semibold flex items-center justify-between">
                                    <span>{child.label}</span>
                                    <span className="text-xs text-[#8B0000] shrink-0 ml-1">→</span>
                                  </span>
                                  {child.desc && (
                                    <span className="text-[11px] text-[#666663] mt-0.5 leading-snug">
                                      {child.desc}
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`shrink-0 flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all outline-none focus:outline-none ${
                      active
                        ? "bg-[#8B0000]/10 text-[#8B0000] font-bold"
                        : "text-[#2a2a28] hover:bg-black/[0.04] active:bg-black/[0.08]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-sm transition-transform ${
                        active ? "text-[#8B0000] translate-x-0.5" : "text-black/35"
                      }`}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </Link>
                );
              })}

              {/* Mobile Full-Width CTA Button */}
              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="shrink-0 mt-3 mb-1 flex items-center justify-center gap-1.5 w-full h-12 rounded-full bg-gradient-to-r from-[#9a1b1b] to-[#6e0f0f] hover:from-[#b02222] hover:to-[#821414] active:scale-[0.98] text-white text-[14px] font-semibold shadow-[0_6px_20px_rgba(154,27,27,0.35)] transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2"
              >
                <span>{ctaLabel}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
