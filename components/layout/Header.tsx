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
    if (mobileOpen) return;
    if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(hover: hover)").matches) {
      return;
    }
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (mobileOpen) return;
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
                onMouseEnter={() => {
                  if (mobileOpen) return;
                  if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;
                  if (hasChildren) handleMouseEnter(item.label);
                }}
                onMouseLeave={() => {
                  if (mobileOpen) return;
                  if (hasChildren) handleMouseLeave();
                }}
              >
                <div className="nav-item-header" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Link
                    href={item.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    id={item.id}
                    onClick={(e) => {
                      if (mobileOpen && hasChildren) {
                        e.preventDefault();
                        setActiveDropdown(null);
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label));
                      } else {
                        handleLinkClick();
                      }
                    }}
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
                        e.stopPropagation();
                        setActiveDropdown(null);
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label));
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px",
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
                            (!mobileOpen && activeDropdown === item.label) ||
                            (mobileOpen && mobileExpanded === item.label)
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
                {hasChildren && activeDropdown === item.label && !mobileOpen && (
                  <div
                    className="nav-dropdown-flyout"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "12px",
                      zIndex: 1100,
                      minWidth: item.children && item.children.length > 6 ? "540px" : "340px",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.96)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderRadius: "18px",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 22px 50px rgba(0, 0, 0, 0.14)",
                        padding: "16px",
                        display: "grid",
                        gridTemplateColumns:
                          item.children && item.children.length > 6 ? "1fr 1fr" : "1fr",
                        gap: "10px",
                      }}
                    >
                      {item.children?.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={handleLinkClick}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px 14px",
                            borderRadius: "12px",
                            background: child.highlight
                              ? "rgba(107, 25, 27, 0.06)"
                              : "transparent",
                            border: child.highlight
                              ? "1px dashed rgba(107, 25, 27, 0.25)"
                              : "1px solid transparent",
                            transition: "all 0.2s ease",
                            textDecoration: "none",
                            gridColumn: child.highlight && item.children && item.children.length > 6 ? "span 2" : "auto",
                          }}
                          className="dropdown-item-hover"
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: child.highlight ? 700 : 600,
                              color: child.highlight ? "var(--accent)" : "var(--text-primary)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            {child.label}
                          </span>
                          {child.desc && (
                            <span
                              style={{
                                fontSize: "12px",
                                color: "var(--text-muted)",
                                marginTop: "3px",
                                lineHeight: 1.35,
                              }}
                            >
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Accordion Submenu */}
                {hasChildren && mobileExpanded === item.label && (
                  <div
                    className="mobile-submenu"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: "16px",
                      gap: "8px",
                      marginTop: "6px",
                    }}
                  >
                    {item.children?.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        href={child.href}
                        onClick={handleLinkClick}
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: child.highlight ? "var(--accent)" : "var(--text-muted)",
                          padding: "6px 0",
                          textDecoration: "none",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
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
          onClick={() => {
            setMobileOpen((prev) => {
              const next = !prev;
              if (!next) {
                setMobileExpanded(null);
                setActiveDropdown(null);
              }
              return next;
            });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="nav-mobile-backdrop"
          onClick={() => {
            setMobileOpen(false);
            setActiveDropdown(null);
            setMobileExpanded(null);
          }}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
