"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; href: string; children?: { label: string; href: string; highlight?: boolean }[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services", href: "/service/",
    children: [
      { label: "Flow Measurement & Control System Solutions", href: "/service/flow-measurement-solutions/" },
      { label: "Inspection & Testing", href: "/service/inspection-testing/" },
      { label: "Industrial Process Automation Solutions", href: "/service/industrial-automation/" },
      { label: "View all services →", href: "/service/", highlight: true },
    ],
  },
  {
    label: "Industries", href: "/industries/",
    children: [
      { label: "Oil & Gas", href: "/industries/oil-gas/" },
      { label: "Refinery", href: "/industries/refinery/" },
      { label: "Petrochemicals", href: "/industries/petrochemicals/" },
      { label: "LNG", href: "/industries/lng/" },
      { label: "Power Plant", href: "/industries/power-plant/" },
      { label: "Water Treatment", href: "/industries/water-treatment/" },
    ],
  },
  {
    label: "Products", href: "/products/",
    children: [
      { label: "Flow Meters", href: "/products/flow-meters/" },
      { label: "Analyzers", href: "/products/analyzers/" },
      { label: "Industrial Automation", href: "/products/industrial-automation/" },
      { label: "PLC Systems", href: "/products/plc/" },
      { label: "Field Instruments", href: "/products/field-instruments/" },
      { label: "View all products →", href: "/products/", highlight: true },
    ],
  },
  { label: "Clients", href: "/clients/" },
];

export default function LightHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpen(null); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.07)" : "none",
        }}
      >
        {/* Red top bar */}
        <div className="h-[3px]" style={{ background: "var(--color-brand-red)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[76px] gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.svg" alt="Texas Technical Services" width={52} height={52} priority />
              <div className="hidden sm:flex flex-col gap-0.5">
                <span className="font-black tracking-[4px] text-[13px] leading-none" style={{ color: "var(--color-text-primary)" }}>TEXAS</span>
                <span className="text-[8px] tracking-[2.5px] leading-none font-semibold" style={{ color: "var(--color-text-muted)" }}>TECHNICAL SERVICES</span>
              </div>
            </Link>

            <div className="hidden lg:block w-px h-7 bg-gray-200 shrink-0" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        className="flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-colors relative"
                        style={{ color: isActive(item.href) ? "var(--color-brand-red)" : "var(--color-text-primary)" }}
                        onMouseEnter={e => { if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = "var(--color-brand-red)"; }}
                        onMouseLeave={e => { if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"; }}
                      >
                        {item.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open === item.label ? "rotate-180" : ""}`} />
                        {isActive(item.href) && (
                          <motion.span layoutId="light-nav-underline"
                            className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                            style={{ background: "var(--color-brand-red)" }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                        )}
                      </button>

                      <AnimatePresence>
                        {open === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-xl shadow-xl overflow-hidden border"
                            style={{
                              background: "rgba(255,255,255,0.98)",
                              backdropFilter: "blur(16px)",
                              borderColor: "var(--color-border)",
                              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            }}
                          >
                            <div className="h-[2px]" style={{ background: "var(--color-brand-red)" }} />
                            <div className="p-1.5">
                              {item.children.map((child) => (
                                <Link key={child.href} href={child.href}
                                  className="block px-3 py-2.5 text-[13px] rounded-lg transition-colors font-medium"
                                  style={child.highlight ? { color: "var(--color-brand-red)", fontWeight: 700 } : { color: "var(--color-text-primary)" }}
                                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--color-brand-red) 5%, transparent)"; }}
                                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href}
                      className="relative px-4 py-2.5 text-[13px] font-semibold rounded-lg transition-colors block"
                      style={{ color: isActive(item.href) ? "var(--color-brand-red)" : "var(--color-text-primary)" }}
                      onMouseEnter={e => { if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = "var(--color-brand-red)"; }}
                      onMouseLeave={e => { if (!isActive(item.href)) (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"; }}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span layoutId="light-nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                          style={{ background: "var(--color-brand-red)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              <Link href="/contacts/"
                className="hidden lg:inline-flex items-center gap-1.5 text-white text-[13px] font-bold px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-md"
                style={{ background: "var(--color-brand-red)", boxShadow: "0 4px 12px color-mix(in srgb, var(--color-brand-red) 25%, transparent)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-brand-red-dark)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-brand-red)")}
              >
                Contact Us
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[80vh] border-t overflow-y-auto" : "max-h-0"}`}
          style={{ borderColor: "var(--color-border)", background: "rgba(255,255,255,0.98)" }}>
          <nav className="px-4 py-3 space-y-0.5">
            {NAV.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link href={item.href}
                    className="flex-1 block px-3 py-2.5 text-[13px] font-semibold rounded-lg transition-colors"
                    style={isActive(item.href) ? { color: "var(--color-brand-red)", background: "color-mix(in srgb, var(--color-brand-red) 5%, transparent)" } : { color: "var(--color-text-primary)" }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="p-2" style={{ color: "var(--color-text-muted)" }}>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="ml-4 border-l pl-3 pb-1 space-y-0.5" style={{ borderColor: "var(--color-border)" }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block px-2 py-1.5 text-[12px] rounded"
                        style={child.highlight ? { color: "var(--color-brand-red)", fontWeight: 700 } : { color: "var(--color-text-muted)" }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <Link href="/contacts/"
                className="block text-center text-white text-[13px] font-bold px-4 py-2.5 rounded-lg"
                style={{ background: "var(--color-brand-red)" }}>
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="h-[79px]" aria-hidden="true" />
    </>
  );
}
