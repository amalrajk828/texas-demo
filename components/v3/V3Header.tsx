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

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
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
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
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
          {MAIN_NAV.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const active = isLinkActive(item);

            return (
              <div
                key={item.id}
                className="nav-item-wrapper"
                style={{ position: "relative" }}
                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Link
                    href={item.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    id={item.id}
                    onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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

          <Link
            href="/contacts/"
            className="nav-cta-btn"
            id="link-contact"
            onClick={handleLinkClick}
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
