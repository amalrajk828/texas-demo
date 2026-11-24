"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MAIN_NAV, NavItem, NavChild } from "@/lib/navigation";
import { LiquidGlassNav } from "@/components/ui/liquid-glass-nav";
import NavDropdownPanel from "./NavDropdownPanel";

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
        // Exclude /contacts/ from marking parent active if parent is Solutions
        if (item.label === "Solutions" && (child.href === "/contacts/" || child.href === "/contacts")) {
          return false;
        }
        const cleanChild = child.href.replace(/\/$/, "");
        if (!cleanChild || cleanChild === "") return false;
        return current === child.href || current === cleanChild || current.startsWith(`${cleanChild}/`);
      });
      if (isChildMatch) return true;
    }
    if (item.label === "Solutions") {
      return (
        current.startsWith("/solutions/") ||
        current === "/solutions" ||
        current.startsWith("/solution/") ||
        current === "/solution" ||
        current.startsWith("/partners/") ||
        current === "/partners"
      );
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
    const raf = requestAnimationFrame(() => {
      setMobileOpen(false);
      setActiveDropdown(null);
      setMobileExpanded(null);
    });
    return () => cancelAnimationFrame(raf);
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

  return (
    <>
      {/* Outer Wrapper: Pure layout container without background, blur, border, or shadow */}
      <header
        ref={navRef}
        role="banner"
        className={`fixed top-[12px] inset-x-0 mx-auto z-[100] w-[calc(100%-24px)] lg:w-[calc(100%-32px)] lg:max-w-6xl pointer-events-none bg-transparent border-none shadow-none outline-none transition-transform duration-300 ease-out [transform:translate3d(0,0,0)] [contain:layout_style] [isolation:isolate] [backface-visibility:hidden] [-webkit-font-smoothing:subpixel-antialiased] ${isNavVisible ? "translate-y-0" : "-translate-y-24"
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
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 p-1 rounded-full relative shrink-0 whitespace-nowrap"
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
              const isHoveredOrOpen = hovered || isDropdownOpen;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center rounded-full shrink-0 ${active ? "active" : ""}`}
                  onMouseEnter={() => {
                    setHoveredId(item.id);
                    if (hasChildren) handleDropdownEnter(item.label);
                    else if (activeDropdown) setActiveDropdown(null);
                  }}
                >
                  {/* Active sliding pill indicator — aibqs-style brand gradient */}
                  {active && (
                    <motion.span
                      layoutId="activeGlassPill"
                      className="absolute inset-0 rounded-full -z-10 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, #8B0000, #b02222)",
                        border: "1px solid rgba(255,255,255,0.38)",
                        boxShadow: "0 3px 10px rgba(139,0,0,0.38), inset 0 1px rgba(255,255,255,0.25)",
                      }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                      aria-hidden="true"
                    />
                  )}

                  {/* Hover / open highlight for non-active links (no layoutId to keep active pill pinned) */}
                  {!active && (
                    <span
                      className={`absolute inset-0 pointer-events-none transition-all duration-200 ${
                        isHoveredOrOpen
                          ? "bg-[rgba(138,48,47,0.08)] opacity-100"
                          : "bg-transparent opacity-0"
                      }`}
                      style={{ borderRadius: "999px" }}
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
                    onKeyDown={(e) => {
                      if (hasChildren && (e.key === "ArrowDown" || e.key === " ")) {
                        e.preventDefault();
                        setActiveDropdown(item.label);
                      } else if (e.key === "Escape") {
                        e.preventDefault();
                        setActiveDropdown(null);
                      }
                    }}
                    className={`relative z-10 flex items-center whitespace-nowrap pl-2 xl:pl-3 ${
                      hasChildren ? "pr-0.5 xl:pr-1" : "pr-2 xl:pr-3"
                    } py-1.5 rounded-full text-[13px] xl:text-[13.5px] transition-colors duration-150 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] ${
                      active
                        ? "active text-white font-semibold"
                        : isHoveredOrOpen
                        ? "text-[#8a302f] font-medium"
                        : "text-[#3d2a1e] font-medium hover:text-[#8a302f]"
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
                        if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          handleDropdownToggle(item.label);
                        } else if (e.key === "Escape") {
                          e.preventDefault();
                          setActiveDropdown(null);
                        }
                      }}
                      className={`relative z-10 mr-1 xl:mr-1.5 p-1 rounded-full transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] shrink-0 ${
                        active
                          ? "active text-white"
                          : isHoveredOrOpen
                          ? "text-[#8a302f]"
                          : "text-[#3d2a1e] opacity-70 hover:opacity-100 hover:text-[#8a302f]"
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

                  {/* Reusable NavDropdownPanel rendered inside each nav item that has a submenu */}
                  {hasChildren && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <NavDropdownPanel
                          item={item}
                          pathname={pathname}
                          onClose={() => setActiveDropdown(null)}
                          onMouseEnter={() => handleDropdownEnter(item.label)}
                          onMouseLeave={handleDropdownLeave}
                          prefersReducedMotion={prefersReducedMotion}
                        />
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop only, >= 1024px) */}
          <Link
            href={ctaHref}
            className="navbar-cta-btn hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full text-white text-[13px] xl:text-[13.5px] font-semibold px-4 xl:px-5 py-2 lg:py-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0 group outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2"
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
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 origin-center ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a1a1a] transition-all duration-300 origin-center ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
              />
            </div>
          </button>
        </LiquidGlassNav>

        {/* SIBLING 2: Mobile Glass Dropdown Panel (< 1024px, completely separate sibling) */}
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
              className="pointer-events-auto absolute top-[calc(100%+8px)] left-0 right-0 w-full max-h-[calc(100dvh-92px)] max-h-[calc(100svh-92px)] overflow-y-auto overscroll-contain rounded-3xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(26,5,5,0.19)] lg:hidden flex flex-col gap-1.5 isolate [transform:translateZ(0)] will-change-transform [-webkit-overflow-scrolling:touch]"
              style={{
                /* aibqs marine-mobile-menu: gradient bg, solid border, navy shadow → Texas warm equivalent */
                background: "linear-gradient(145deg, #fdf8f8, #f9eaea)",
                border: "1px solid rgba(255,255,255,0.90)",
                WebkitBackdropFilter: "blur(16px) saturate(140%)",
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
                        className={`shrink-0 flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all outline-none focus:outline-none ${active
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
                          className={`transition-transform duration-200 shrink-0 ${isExpanded ? "rotate-180 text-[#8B0000]" : "rotate-0 text-black/40"
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

                              const Icon = child.icon;

                              if (child.highlight) {
                                return (
                                  <Link
                                    key={cIdx}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="shrink-0 mt-1 flex items-center justify-center p-2.5 rounded-full border border-dashed border-[#8a302f]/30 bg-[#8a302f]/[0.06] text-[#8a302f] font-bold text-xs text-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f]"
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
                                  className={`shrink-0 flex items-center justify-between w-full px-3 py-2.5 rounded-[12px] transition-all outline-none focus:outline-none ${isChildActive
                                    ? "bg-[#8a302f]/[0.08]"
                                    : "bg-white/60 hover:bg-[#8a302f]/[0.06] active:bg-[#8a302f]/[0.10]"
                                    }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    {Icon && (
                                      <div
                                        className={`w-9 h-9 min-w-9 min-h-9 rounded-[10px] flex items-center justify-center transition-colors duration-200 ${isChildActive
                                          ? "bg-[#8a302f] border border-[#8a302f] text-white"
                                          : "border border-black/[0.08] bg-white text-[#8a302f]"
                                          }`}
                                      >
                                        <Icon size={18} strokeWidth={2} />
                                      </div>
                                    )}
                                    <span
                                      className={`text-[14.5px] font-semibold truncate transition-colors ${isChildActive ? "text-[#8a302f]" : "text-[#1a1a1a]"
                                        }`}
                                    >
                                      {child.label}
                                    </span>
                                  </div>
                                  <span className="text-xs text-[#8a302f] shrink-0 ml-2">→</span>
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
                    className={`shrink-0 flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all outline-none focus:outline-none ${active
                      ? "bg-[#8B0000]/10 text-[#8B0000] font-bold"
                      : "text-[#2a2a28] hover:bg-black/[0.04] active:bg-black/[0.08]"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-sm transition-transform ${active ? "text-[#8B0000] translate-x-0.5" : "text-black/35"
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
                className="navbar-cta-btn shrink-0 mt-3 mb-1 flex items-center justify-center gap-1.5 w-full h-12 rounded-full active:scale-[0.98] text-white text-[14px] font-semibold transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2"
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
