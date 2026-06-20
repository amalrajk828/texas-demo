"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; highlight?: boolean }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/service/",
    children: [
      { label: "Flow Measurement & Control System Solutions", href: "/service/flow-measurement-solutions/" },
      { label: "Inspection & Testing", href: "/service/inspection-testing/" },
      { label: "Industrial Process Automation Solutions", href: "/service/industrial-automation/" },
      { label: "View all services →", href: "/service/", highlight: true },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Oil & Gas", href: "/industries/oil-gas/" },
      { label: "Refinery", href: "/industries/refinery/" },
      { label: "Petrochemicals", href: "/industries/petrochemicals/" },
      { label: "LNG", href: "/industries/lng/" },
      { label: "Power Plant", href: "/industries/power-plant/" },
      { label: "Water Treatment", href: "/industries/water-treatment/" },
      { label: "Cement", href: "/industries/cement/" },
      { label: "Metal & Steel", href: "/industries/metal-steel/" },
    ],
  },
  {
    label: "Products",
    href: "/products/",
    children: [
      { label: "Flow Meters", href: "/products/flow-meters/" },
      { label: "Analyzers", href: "/products/analyzers/" },
      { label: "Industrial Automation", href: "/products/industrial-automation/" },
      { label: "Sensors", href: "/products/sensors/" },
      { label: "PLC Systems", href: "/products/plc/" },
      { label: "ICONICS SCADA", href: "/products/iconics/" },
      { label: "GOT HMI Panels", href: "/products/got/" },
      { label: "VFD / Frequency Inverters", href: "/products/frequency-inverter-vfd/" },
      { label: "AC Servos", href: "/products/acservos/" },
      { label: "Custody Metering Solutions", href: "/products/custody-metering-solutions/" },
      { label: "Field Instruments", href: "/products/field-instruments/" },
      { label: "View all products →", href: "/products/", highlight: true },
    ],
  },
  { label: "Clients", href: "/clients/" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    path: "M4 4 L20 20 M20 4 L4 20",
  },
  {
    label: "Google",
    href: "https://google.com",
    path: "M21.35 11.1H12v2.8h5.35C16.75 17 14.6 18.6 12 18.6c-3.64 0-6.6-2.96-6.6-6.6s2.96-6.6 6.6-6.6c1.65 0 3.14.62 4.28 1.62L18.08 5C16.3 3.46 14.28 2.5 12 2.5 6.48 2.5 2 6.98 2 12.5s4.48 10 10 10c5.88 0 9.8-4.14 9.8-9.96 0-.64-.06-1.28-.17-1.9z",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [socialOpen, setSocialOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
    setSocialOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(null);
        setSocialOpen(false);
      }
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0D26]/95 backdrop-blur-md shadow-xl shadow-black/30"
            : "bg-[#0B0D26]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[84px] gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5 shrink-0">
              <Image src="/logo.svg" alt="Texas Technical Services" width={58} height={58} priority />
              <div className="hidden sm:flex flex-col gap-0.5">
                <span className="text-white font-semibold tracking-[4px] text-[14px] leading-none">TEXAS</span>
                <span className="text-white/40 text-[8.5px] tracking-[2.5px] leading-none font-medium">TECHNICAL SERVICES</span>
              </div>
            </Link>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px h-7 bg-white/10 shrink-0" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-medium rounded-md transition-colors relative ${
                          isActive(item.href) ? "text-white" : "text-white/55 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            open === item.label ? "rotate-180" : ""
                          }`}
                        />
                        {isActive(item.href) && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                            style={{
                              background: "linear-gradient(90deg, #e7212b, #aa0b1b)",
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {open === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-72 bg-brand-navy-mid border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                          >
                            <div className="p-1.5">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-3 py-2.5 text-[13px] rounded-lg transition-colors ${
                                    child.highlight
                                      ? "text-brand-red font-semibold hover:bg-brand-red/10"
                                      : "text-white/60 hover:text-white hover:bg-white/5 font-medium"
                                  }`}
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
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 text-[14px] font-medium rounded-md transition-colors block ${
                        isActive(item.href) ? "text-white" : "text-white/55 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #e7212b, #aa0b1b)",
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              {/* Contact Us — desktop */}
              <Link
                href="/contacts/"
                className="hidden lg:block bg-[#e7212b] hover:bg-[#aa0b1b] text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg transition-colors tracking-wide"
              >
                Contact Us
              </Link>

              {/* Social grid icon — desktop only */}
              <button
                onClick={() => setSocialOpen(!socialOpen)}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-white/50 hover:text-white hover:border-white/35 transition-colors"
                aria-label="Share / Social"
              >
                <LayoutGrid className="w-4.5 h-4.5" />
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/60 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Social slide-in panel — desktop only */}
        <AnimatePresence>
          {socialOpen && (
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="hidden lg:block fixed top-0 right-0 h-screen w-64 bg-brand-navy-mid border-l border-white/10 shadow-2xl shadow-black/50 z-60 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                <span className="text-white/50 text-[10px] font-medium tracking-[2px] uppercase">Connect</span>
                <button
                  onClick={() => setSocialOpen(false)}
                  className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Social links */}
              <div className="px-3 py-4 space-y-1">
                {SOCIALS.map(({ label, href, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 px-3 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-brand-red/40 flex items-center justify-center transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d={path} />
                      </svg>
                    </span>
                    <span className="text-[13px] font-medium">{label}</span>
                  </a>
                ))}
              </div>

              {/* Divider + contact info */}
              <div className="border-t border-white/10 mx-3 my-1" />
              <div className="px-5 py-4 space-y-2">
                <a href="tel:+96566347267" className="block text-white/40 text-[12px] hover:text-brand-red transition-colors">
                  +965 66347267
                </a>
                <a href="mailto:sales@texastechserv.com" className="block text-white/40 text-[12px] hover:text-brand-red transition-colors">
                  sales@texastechserv.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[80vh] border-t border-white/10 overflow-y-auto" : "max-h-0"
          }`}
        >
          <nav className="bg-[#0B0D26] px-4 py-3 space-y-0.5">
            {NAV.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 block px-3 py-2.5 text-[13px] rounded-lg ${
                      isActive(item.href)
                        ? "text-white bg-white/5 border-l-2 border-[#e7212b] pl-4"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="p-2 text-white/40 hover:text-white"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="ml-4 border-l border-white/10 pl-3 pb-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-2 py-1.5 text-[11px] rounded ${
                          child.highlight ? "text-[#e7212b]" : "text-white/40 hover:text-white/70"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contacts/"
                className="block text-center bg-[#e7212b] hover:bg-[#aa0b1b] text-white text-[13px] font-medium px-4 py-2.5 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer — matches header height */}
      <div className="h-[84px]" aria-hidden="true" />
    </>
  );
}
