"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV, NavItem } from "@/lib/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Shared sliding indicator state & refs
  const trackRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const hoveredIdRef = useRef<string | null>(null);
  const clickedIdRef = useRef<string | null>(null);
  const [optimisticActiveId, setOptimisticActiveId] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [indicatorStyle, setIndicatorStyle] = useState<{
    transform: string;
    width: string;
    opacity: number;
  }>({
    transform: "translateX(0px)",
    width: "0px",
    opacity: 0,
  });

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setOptimisticActiveId(null);
  }

  // Scroll listener for transparent to frosted-glass navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrolled(scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  const isLinkActive = (item: NavItem) => {
    const current = pathname || "/";
    if (item.href === "/") {
      return current === "/";
    }

    const cleanHref = item.href.replace(/\/$/, "");
    if (current === item.href || current === cleanHref || current.startsWith(`${cleanHref}/`)) {
      return true;
    }

    // Check children routes if any
    if (item.children && item.children.length > 0) {
      const isChildMatch = item.children.some((child) => {
        const cleanChild = child.href.replace(/\/$/, "");
        return (
          current === child.href ||
          current === cleanChild ||
          current.startsWith(`${cleanChild}/`)
        );
      });
      if (isChildMatch) return true;
    }

    // Route family aliases
    if (item.label === "Services") {
      return (
        current.startsWith("/service/") ||
        current === "/service" ||
        current.startsWith("/services/") ||
        current === "/services"
      );
    }

    if (item.label === "Industries") {
      return current.startsWith("/industries/") || current === "/industries";
    }

    if (item.label === "Products") {
      return (
        current.startsWith("/products/") ||
        current === "/products" ||
        current.startsWith("/portfolio/") ||
        current === "/portfolio"
      );
    }

    if (item.label === "Blog") {
      return current.startsWith("/blog/") || current === "/blog";
    }

    if (item.label === "About Us") {
      return (
        current.startsWith("/about-us/") ||
        current === "/about-us" ||
        current.startsWith("/about/") ||
        current === "/about"
      );
    }

    if (item.label === "Clients") {
      return current.startsWith("/clients/") || current === "/clients";
    }

    return false;
  };

  const getActiveItem = () => {
    return MAIN_NAV.find((item) => isLinkActive(item)) || null;
  };

  const getTargetItem = () => {
    if (hoveredIdRef.current) {
      return MAIN_NAV.find((item) => item.id === hoveredIdRef.current) || null;
    }
    if (clickedIdRef.current) {
      return MAIN_NAV.find((item) => item.id === clickedIdRef.current) || null;
    }
    if (optimisticActiveId) {
      return MAIN_NAV.find((item) => item.id === optimisticActiveId) || null;
    }
    return getActiveItem();
  };

  const syncIndicator = (targetId?: string | null, immediate = false) => {
    if (!trackRef.current) return;

    const idToUse =
      targetId !== undefined
        ? targetId
        : hoveredIdRef.current || clickedIdRef.current || optimisticActiveId || getActiveItem()?.id || null;

    if (!idToUse) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const el =
      linkRefs.current[idToUse] ||
      (trackRef.current.querySelector('#' + idToUse) as HTMLElement) ||
      (trackRef.current.querySelector('.nav-link.active') as HTMLElement);

    if (!el) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const trackRect = trackRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    if (elRect.width === 0) {
      return;
    }

    const left = elRect.left - trackRect.left;
    const width = elRect.width;

    if (immediate) {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }

    setIndicatorStyle({
      transform: `translateX(${Math.round(left * 10) / 10}px)`,
      width: `${Math.round(width * 10) / 10}px`,
      opacity: 1,
    });
  };

  // Sync on pathname change
  useEffect(() => {
    clickedIdRef.current = null;
    hoveredIdRef.current = null;
    requestAnimationFrame(() => {
      syncIndicator(undefined, false);
    });
  }, [pathname]);

  // Initial measurement, document fonts, resize observer
  useEffect(() => {
    // 1. Initial measurement on mount with double rAF for layout stability
    const rafId = requestAnimationFrame(() => {
      syncIndicator(undefined, true);
    });

    const timer = setTimeout(() => {
      syncIndicator(undefined, true);
    }, 60);

    // 2. Wait for web fonts to load
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        syncIndicator(undefined, true);
      });
    }

    // 3. ResizeObserver on track container
    let ro: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window && trackRef.current) {
      ro = new ResizeObserver(() => {
        syncIndicator(undefined, true);
      });
      ro.observe(trackRef.current);
    }

    const handleWindowResize = () => {
      syncIndicator(undefined, true);
    };
    window.addEventListener("resize", handleWindowResize);

    // 4. Keyboard focus listener on track
    const track = trackRef.current;
    const handleFocusIn = (e: FocusEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(".nav-link") as HTMLElement | null;
      if (target && target.id) {
        hoveredIdRef.current = target.id;
        syncIndicator(target.id, false);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const related = e.relatedTarget as Node | null;
      if (track && track.contains(related)) {
        return;
      }
      hoveredIdRef.current = null;
      syncIndicator(undefined, false);
    };

    if (track) {
      track.addEventListener("focusin", handleFocusIn);
      track.addEventListener("focusout", handleFocusOut);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      if (track) {
        track.removeEventListener("focusin", handleFocusIn);
        track.removeEventListener("focusout", handleFocusOut);
      }
    };
  }, []);

  const handleItemHover = (item: NavItem) => {
    hoveredIdRef.current = item.id;
    syncIndicator(item.id, false);
  };

  const handleLinkFocus = (item: NavItem) => {
    hoveredIdRef.current = item.id;
    syncIndicator(item.id, false);
  };

  const handleLinkBlur = (e: React.FocusEvent) => {
    const nextTarget = e.relatedTarget as HTMLElement | null;
    if (nextTarget && trackRef.current?.contains(nextTarget)) {
      return;
    }
    hoveredIdRef.current = null;
    syncIndicator(undefined, false);
  };

  const handleTrackMouseLeave = () => {
    hoveredIdRef.current = null;
    if (trackRef.current && trackRef.current.contains(document.activeElement)) {
      return;
    }
    syncIndicator(undefined, false);
  };

  const handleNavLinkClick = (item: NavItem) => {
    clickedIdRef.current = item.id;
    setOptimisticActiveId(item.id);
    syncIndicator(item.id, false);
    handleLinkClick();
  };

  return (
    <nav
      id="main-nav"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="nav-container">
        {/* Real Brand Logo & Name */}
        <Link
          href="/"
          className="nav-brand"
          id="brand-logo"
          aria-label="Texas Technical Services Home"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.svg"
            alt="Texas Technical Services Emblem"
            className="brand-logo-img"
            width={44}
            height={44}
            priority
          />
          <div className="brand-text-block">
            <span className="brand-title">TEXAS</span>
            <span className="brand-subtitle">TECHNICAL SERVICES</span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Dropdowns */}
        <div className={`nav-links ${mobileOpen ? "open" : ""}`} id="nav-menu">
          <div
            ref={trackRef}
            className="nav-items-track"
            onMouseLeave={handleTrackMouseLeave}
          >
            {MAIN_NAV.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const active = optimisticActiveId
                ? item.id === optimisticActiveId
                : isLinkActive(item);

              return (
                <div
                  key={item.id}
                  className="nav-item-wrapper"
                  style={{ position: "relative" }}
                  onMouseEnter={() => {
                    if (hasChildren) handleMouseEnter(item.label);
                    handleItemHover(item);
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) handleMouseLeave();
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Link
                      href={item.href}
                      className={`nav-link ${active ? "active" : ""}`}
                      id={item.id}
                      ref={(el) => {
                        linkRefs.current[item.id] = el;
                      }}
                      onMouseEnter={() => handleItemHover(item)}
                      onFocus={() => handleLinkFocus(item)}
                      onBlur={handleLinkBlur}
                      onClick={() => handleNavLinkClick(item)}
                    >
                      {item.label}
                    </Link>

                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      className="nav-chevron-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label));
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform:
                            activeDropdown === item.label || mobileExpanded === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Desktop Dropdown Flyout */}
                {hasChildren && activeDropdown === item.label && (
                  <div
                    className="nav-dropdown-flyout"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "12px",
                      zIndex: 1100,
                      minWidth:
                        item.label === "Services"
                          ? "390px"
                          : item.children && item.children.length > 6
                          ? "560px"
                          : "360px",
                    }}
                  >
                    <div
                      className="nav-dropdown-card"
                      style={{
                        background: "rgba(255, 255, 255, 0.96)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderRadius: "20px",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 22px 50px rgba(0, 0, 0, 0.14)",
                        padding: "14px",
                        display: item.label === "Services" ? "flex" : "grid",
                        flexDirection: item.label === "Services" ? "column" : undefined,
                        gridTemplateColumns:
                          item.label === "Services"
                            ? undefined
                            : item.children && item.children.length > 6
                            ? "1fr 1fr"
                            : "1fr",
                        gap: "8px",
                      }}
                    >
                      {item.children?.map((child, cIdx) => {
                        const isChildActive =
                          pathname === child.href ||
                          (child.href !== "/" && pathname.startsWith(child.href));
                        return (
                          <Link
                            key={cIdx}
                            href={child.href}
                            onClick={() => {
                              clickedIdRef.current = item.id;
                              setOptimisticActiveId(item.id);
                              syncIndicator(item.id, false);
                              handleLinkClick();
                            }}
                            className={`nav-dropdown-item ${isChildActive ? "active" : ""} ${
                              child.highlight ? "nav-dropdown-view-all" : ""
                            }`}
                            style={{
                              gridColumn:
                                child.highlight &&
                                item.children &&
                                item.children.length > 6 &&
                                item.label !== "Services"
                                  ? "span 2"
                                  : "auto",
                            }}
                          >
                            <span className="dropdown-title">
                              <span className="dropdown-arrow" aria-hidden="true">
                                →
                              </span>
                              <span className="dropdown-label">{child.label}</span>
                            </span>
                            {child.desc && (
                              <span className="dropdown-desc">{child.desc}</span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Mobile Accordion Submenu */}
                {hasChildren && mobileExpanded === item.label && (
                  <div className="mobile-submenu">
                    {item.children?.map((child, cIdx) => {
                      const isChildActive =
                        pathname === child.href ||
                        (child.href !== "/" && pathname.startsWith(child.href));
                      return (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={handleLinkClick}
                          className={`nav-dropdown-item mobile-dropdown-item ${
                            isChildActive ? "active" : ""
                          } ${child.highlight ? "nav-dropdown-view-all" : ""}`}
                        >
                          <span className="dropdown-title">
                            <span className="dropdown-arrow" aria-hidden="true">
                              →
                            </span>
                            <span className="dropdown-label">{child.label}</span>
                          </span>
                          {child.desc && (
                            <span className="dropdown-desc">{child.desc}</span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

            {/* Shared Sliding Underline Indicator */}
            <span
              className="nav-indicator"
              style={{
                transform: indicatorStyle.transform,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                transition: hasAnimated
                  ? "transform 350ms cubic-bezier(0.22, 1, 0.36, 1), width 350ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease"
                  : "none",
              }}
              aria-hidden="true"
            />
          </div>

          <Link
            href="/contacts/"
            className="nav-cta-btn"
            id="link-contact"
            onClick={() => {
              clickedIdRef.current = null;
              setOptimisticActiveId(null);
              syncIndicator(null, false);
              handleLinkClick();
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`nav-mobile-toggle ${mobileOpen ? "active" : ""}`}
          id="nav-mobile-btn"
          aria-label="Toggle navigation menu"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
