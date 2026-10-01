"use client";

/**
 * V3ScrollyNavbar
 *
 * A minimal, Apple-style fixed nav for the V3 scrollytelling page:
 *  - Fully transparent (no bg, no blur) at scrollY === 0
 *  - Transitions to frosted-glass backdrop (blur + low-opacity dark fill)
 *    once the user scrolls past SCROLL_THRESHOLD px
 *  - Simple: Logo + key nav links + CTA button
 *  - Adapts to dark canvas backgrounds (light text throughout)
 *
 * NOTE: This replaces V3FloatingNavbar **only in the scrollytelling layout**.
 *       V3FloatingNavbar is unchanged for other pages.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const SCROLL_THRESHOLD = 50; // px before frosted bg kicks in

export default function V3ScrollyNavbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glassBg = scrolled
    ? "rgba(10, 11, 14, 0.72)"
    : "transparent";
  const glassBorder = scrolled
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid transparent";
  const glassBlur  = scrolled ? "blur(16px)" : "none";

  const NAV_LINKS = [
    { label: "Home",       href: "#v3-scrolly-hero"   },
    { label: "Services",   href: "#disciplines-stage" },
    { label: "Industries", href: "#sectors-stage"     },
    { label: "Solutions",  href: "#solutions-stage"   },
    { label: "About",      href: "/about-us/"         },
  ];

  return (
    <header
      style={{
        position:  "fixed",
        top:        0,
        left:       0,
        right:      0,
        zIndex:     100,
        display:    "flex",
        justifyContent: "center",
        padding:    "12px 16px 0",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          pointerEvents:    "auto",
          width:            "100%",
          maxWidth:         1200,
          height:           60,
          display:          "flex",
          alignItems:       "center",
          justifyContent:   "space-between",
          padding:          "0 20px",
          borderRadius:     40,
          background:       glassBg,
          backdropFilter:   glassBlur,
          WebkitBackdropFilter: glassBlur,
          border:           glassBorder,
          transition:       "background 0.35s ease, border 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        {/* ── Brand ────────────────────────────────────────────── */}
        <Link
          href="#v3-scrolly-hero"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="Texas Technical Services — home"
        >
          <Image
            src="/logo.svg"
            alt="TTSC Logo"
            width={28}
            height={28}
            style={{ filter: "brightness(1.3)", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily:    "Sora, sans-serif",
              fontWeight:    700,
              fontSize:      15,
              color:         "#fff",
              letterSpacing: "-0.01em",
              lineHeight:    1,
            }}
          >
            TTSC
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize:   11,
              color:      "rgba(255,255,255,0.45)",
              display:    "block",
              marginLeft: 2,
            }}
            className="hidden sm:block"
          >
            Flow Measurement & Automation
          </span>
        </Link>

        {/* ── Desktop links ─────────────────────────────────────── */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 2 }}
          className="hidden lg:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                padding:        "6px 14px",
                borderRadius:   24,
                fontFamily:     "Sora, sans-serif",
                fontWeight:     600,
                fontSize:       13,
                color:          "rgba(255,255,255,0.72)",
                textDecoration: "none",
                transition:     "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color      = "#fff";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color      = "rgba(255,255,255,0.72)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + Mobile toggle ───────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="#rfq-stage"
            className="hidden sm:inline-flex"
            style={{
              padding:        "8px 20px",
              borderRadius:   24,
              background:     "#6b191b",
              color:          "#fff",
              fontFamily:     "Sora, sans-serif",
              fontWeight:     700,
              fontSize:       13,
              textDecoration: "none",
              boxShadow:      "0 4px 16px rgba(107,25,27,0.35)",
              transition:     "background 0.2s",
              whiteSpace:     "nowrap",
            }}
          >
            Contact Us
          </Link>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden"
            style={{
              width:           36,
              height:          36,
              borderRadius:    18,
              background:      "rgba(255,255,255,0.10)",
              border:          "none",
              cursor:          "pointer",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              color:           "#fff",
              transition:      "background 0.2s",
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          style={{
            position:         "absolute",
            top:              80,
            left:             16,
            right:            16,
            background:       "rgba(10,11,14,0.92)",
            backdropFilter:   "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius:     20,
            border:           "1px solid rgba(255,255,255,0.10)",
            padding:          20,
            display:          "flex",
            flexDirection:    "column",
            gap:              8,
            boxShadow:        "0 16px 48px rgba(0,0,0,0.5)",
            pointerEvents:    "auto",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding:        "10px 14px",
                borderRadius:   12,
                fontFamily:     "Sora, sans-serif",
                fontWeight:     600,
                fontSize:       15,
                color:          "rgba(255,255,255,0.80)",
                textDecoration: "none",
                borderBottom:   "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#rfq-stage"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop:      8,
              padding:        "12px 20px",
              borderRadius:   14,
              background:     "#6b191b",
              color:          "#fff",
              fontFamily:     "Sora, sans-serif",
              fontWeight:     700,
              fontSize:       15,
              textDecoration: "none",
              textAlign:      "center",
            }}
          >
            Request Engineering Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
