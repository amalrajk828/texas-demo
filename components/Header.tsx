"use client";

/* ── Imports ──────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown, ChevronRight, Menu, ArrowRight, X,
  Gauge, FlaskConical, Cpu,
  Droplet, Factory, Flame, Snowflake, Zap, Droplets, Building2, Hammer,
  BarChart3, Radio, Monitor, Tablet, Activity, Settings, Wrench, Target,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet, SheetTrigger, SheetContent, SheetTitle,
} from "@/components/ui/sheet";

/* ── Types ────────────────────────────────────────────────────────── */
type NavChild = {
  label: string;
  href: string;
  icon?: LucideIcon;
  desc?: string;
  highlight?: boolean;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/* ── Navigation Data ──────────────────────────────────────────────── */
const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Flow Measurement & Control", href: "/service/flow-measurement-solutions/", icon: Gauge,        desc: "Custody metering, flow computers, and control system upgrades" },
      { label: "Inspection & Testing",       href: "/service/inspection-testing/",          icon: FlaskConical, desc: "NDT, mechanical testing, and ISO-certified inspection services" },
      { label: "Industrial Automation",      href: "/service/industrial-automation/",        icon: Cpu,          desc: "PLC, SCADA, HMI, and VFD integration for industrial plants" },
      { label: "View all services →",        href: "/services/",                              highlight: true },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    children: [
      { label: "Oil & Gas",        href: "/industries/oil-gas/",         icon: Droplet   },
      { label: "Refinery",         href: "/industries/refinery/",        icon: Factory   },
      { label: "Petrochemicals",   href: "/industries/petrochemicals/",  icon: Flame     },
      { label: "LNG",              href: "/industries/lng/",             icon: Snowflake },
      { label: "Power Plant",      href: "/industries/power-plant/",     icon: Zap       },
      { label: "Water Treatment",  href: "/industries/water-treatment/", icon: Droplets  },
      { label: "Cement",           href: "/industries/cement/",          icon: Building2 },
      { label: "Metal & Steel",    href: "/industries/metal-steel/",     icon: Hammer    },
      { label: "View all industries →", href: "/industries/",            highlight: true },
    ],
  },
  {
    label: "Products",
    href: "/products/",
    children: [
      { label: "Flow Meters",                href: "/products/flow-meters/",               icon: Gauge    },
      { label: "Analyzers",                  href: "/products/analyzers/",                 icon: BarChart3 },
      { label: "Industrial Automation",      href: "/products/industrial-automation/",     icon: Cpu      },
      { label: "Sensors",                    href: "/products/sensors/",                   icon: Radio    },
      { label: "PLC Systems",               href: "/products/plc/",                        icon: Settings },
      { label: "ICONICS SCADA",             href: "/products/iconics/",                    icon: Monitor  },
      { label: "GOT HMI Panels",            href: "/products/got/",                        icon: Tablet   },
      { label: "VFD / Frequency Inverters", href: "/products/frequency-inverter-vfd/",     icon: Activity },
      { label: "AC Servos",                 href: "/products/acservos/",                    icon: Wrench   },
      { label: "Custody Metering",          href: "/products/custody-metering-solutions/",  icon: Target   },
      { label: "Field Instruments",         href: "/products/field-instruments/",            icon: Settings },
      { label: "View all products →",       href: "/products/",                              highlight: true },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Clients", href: "/clients/" },
];

/* ── Dropdown Data Mapping & MegaMenu ────────────────────────────── */
const iconMap: Record<string, LucideIcon> = {
  gauge: Gauge,
  chart: BarChart3,
  cpu: Cpu,
  wifi: Wifi,
  settings: Settings,
  monitor: Monitor,
  tablet: Tablet,
  activity: Activity,
  wrench: Wrench,
  target: Target,
};

const productsMenu = [
  {
    label: "Custody Metering Solutions",
    link: "/products/custody-metering-solutions/",
    children: []
  },
  {
    label: "Flow Meters",
    link: "/products/flow-meters/",
    children: [
      { label: "Liquid Flow Meters", link: "/products/flow-meters/liquid-flow-meters/" },
      { label: "Flare Meters", link: "/products/flow-meters/flare-meters/" },
      { label: "Gas Flow Meters", link: "/products/flow-meters/gas-flow-meters/" }
    ]
  },
  {
    label: "Analyzer's",
    link: "/products/analyzers/",
    children: [
      { label: "CEMS Solutions", link: "/products/analyzers/cems/" },
      { label: "Dust Analyzers", link: "/products/analyzers/dust-analyzers/" },
      { label: "Gas Analyzers", link: "/products/analyzers/gas-analyzers/" }
    ]
  },
  { label: "Control Room Interior And Console", link: "/products/control-room-interior-and-console/", children: [] },
  { label: "Industrial Automation", link: "/products/industrial-automation/", children: [] },
  { label: "Field Instruments", link: "/products/field-instruments/", children: [] },
  { label: "Industrial Sensors", link: "/products/sensors/", children: [] },
  { label: "PLC", link: "/products/plc/", children: [] },
  { label: "ICONICS", link: "/products/iconics/", children: [] },
  { label: "GOT (Graphic Operator Panels)", link: "/products/got/", children: [] },
  { label: "Frequency Inverters (VFD)", link: "/products/frequency-inverter-vfd/", children: [] }
];

const servicesMenu = [
  { label: "Flow Measurement & Control", link: "/service/flow-measurement-solutions/", children: [] },
  { label: "Inspection & Testing",       link: "/service/inspection-testing/",          children: [] },
  { label: "Industrial Automation",      link: "/service/industrial-automation/",        children: [] },
];

const industriesMenu = [
  { label: "Oil & Gas",        link: "/industries/oil-gas/",         children: [] },
  { label: "Refinery",         link: "/industries/refinery/",        children: [] },
  { label: "Petrochemicals",   link: "/industries/petrochemicals/",  children: [] },
  { label: "LNG",              link: "/industries/lng/",             children: [] },
  { label: "Power Plant",      link: "/industries/power-plant/",     children: [] },
  { label: "Water Treatment",  link: "/industries/water-treatment/", children: [] },
  { label: "Cement",           link: "/industries/cement/",          children: [] },
  { label: "Metal & Steel",    link: "/industries/metal-steel/",     children: [] },
];

const getMenuData = (label: string) => {
  if (label === "Products") return productsMenu;
  if (label === "Services") return servicesMenu;
  if (label === "Industries") return industriesMenu;
  return [];
};

const getMenuViewAll = (label: string) => {
  if (label === "Products") return { label: "View all products →", link: "/products/" };
  if (label === "Services") return { label: "View all services →", link: "/services/" };
  if (label === "Industries") return { label: "View all industries →", link: "/industries/" };
  return undefined;
};

interface DropdownPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}

function DropdownPanel({ isOpen, onClose, onMouseEnter, onMouseLeave, children }: DropdownPanelProps) {
  const [shiftX, setShiftX] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      const parent = ref.current.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const dropdownWidth = ref.current.offsetWidth;
        const rightEdge = parentRect.left + dropdownWidth;
        const rightOverflow = rightEdge - window.innerWidth;
        const leftOverflow = parentRect.left;

        if (rightOverflow > 0) {
          const targetShift = -rightOverflow - 16;
          if (parentRect.left + targetShift < 16) {
            setShiftX(-parentRect.left + 16);
          } else {
            setShiftX(targetShift);
          }
        } else if (leftOverflow < 0) {
          setShiftX(-leftOverflow + 16);
        } else {
          setShiftX(0);
        }
      }
    }
  }, [isOpen, children]);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -8, scale: 0.98, x: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, x: shiftX }}
      exit={{ opacity: 0, y: -8, scale: 0.98, x: shiftX }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 mt-3 flex flex-col z-50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/45"
      style={{ backgroundColor: "#0b1c2e" }}
    >
      {/* Top red accent border */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, #E53935, #FF7043, #E53935)" }}
      />
      {children}
    </motion.div>
  );
}

interface DropdownChild {
  label: string;
  link: string;
}

interface DropdownItem {
  label: string;
  link: string;
  children?: DropdownChild[];
}

interface NestedDropdownProps {
  menuLabel: string;
  data: DropdownItem[];
  viewAll?: { label: string; link: string };
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NestedDropdown({ menuLabel, data, viewAll, isOpen, onClose, pathname, onMouseEnter, onMouseLeave }: NestedDropdownProps) {
  const [activeParentIndex, setActiveParentIndex] = useState<number | null>(null);

  const activeParent = activeParentIndex !== null ? data[activeParentIndex] : null;
  const hasSubmenu = activeParent && activeParent.children && activeParent.children.length > 0;

  return (
    <DropdownPanel
      isOpen={isOpen}
      onClose={onClose}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="flex flex-col max-w-[min(90vw,900px)] overflow-visible"
        onMouseLeave={() => setActiveParentIndex(null)}
      >
        <div className="flex overflow-visible">
          {/* Main Categories Panel */}
          <div className="w-[300px] px-6 py-1.5 flex flex-col gap-0.5 shrink-0 overflow-visible">
            {data.map((item, index) => {
              const isHovered = activeParentIndex === index;
              const isCurrentActive = pathname === item.link || pathname.startsWith(item.link);
              const itemHasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveParentIndex(index)}
                  className={`flex items-center justify-between px-6 py-2 rounded-xl cursor-pointer transition-all duration-200 group ${
                    isHovered ? "bg-white/[0.06] text-white" : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <Link
                    href={item.link}
                    onClick={(e) => {
                      if (itemHasChildren) {
                        e.preventDefault();
                      } else {
                        onClose();
                      }
                    }}
                    className="text-[13px] font-medium tracking-wide flex-1 relative font-sans text-left leading-[1.2]"
                  >
                    <span className="relative pb-0.5">
                      {item.label}
                      {(isHovered || isCurrentActive) && (
                        <motion.span
                          layoutId={`sidebar-underline-${menuLabel}`}
                          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E53935] rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>

                  {itemHasChildren && (
                    <ChevronRight
                      className="w-3.5 h-3.5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Submenu Panel */}
          {hasSubmenu && activeParent && (
            <div className="w-[300px] px-6 py-1.5 bg-black/20 flex flex-col gap-0.5 border-l border-white/10 animate-slide-right shrink-0 overflow-visible">
              <div className="px-6 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#E53935] block">
                  Specifications
                </span>
              </div>

              {activeParent.children?.map((subItem, index) => {
                const isSubActive = pathname === subItem.link || pathname.startsWith(subItem.link);

                return (
                  <Link
                    key={index}
                    href={subItem.link}
                    onClick={onClose}
                    className={`flex items-center justify-between px-6 py-2 rounded-lg text-[13px] font-medium font-sans tracking-wide transition-all duration-200 leading-[1.2] ${
                      isSubActive
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="relative">
                      {subItem.label}
                      {isSubActive && (
                        <span className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-[#E53935] rounded-full" />
                      )}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white/40" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* View All Footer */}
        {viewAll && (
          <div className="border-t border-white/10 px-6 py-2.5 bg-[#0b1c2e] flex items-center shrink-0 z-10">
            <Link
              href={viewAll.link}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E53935] hover:text-[#B71C1C] transition-colors"
            >
              <span>{viewAll.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </DropdownPanel>
  );
}

/* ── Component ────────────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen]               = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  /* Click outside */
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1117]/92 backdrop-blur-xl shadow-2xl shadow-black/40"
            : "bg-[#0F1117]"
        }`}
      >
        {/* Red accent line — appears on scroll */}
        <div
          className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent 10%, #E53935 50%, transparent 90%)",
            opacity: scrolled ? 1 : 0,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-[88px] gap-10">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-4 shrink-0">
              <Image src="/logo.svg" alt="Texas Technical Services" width={62} height={62} priority />
              <div className="hidden sm:flex flex-col gap-0.5">
                <span className="text-white font-black tracking-[6px] text-[18px] leading-none">
                  TEXAS
                </span>
                <span className="text-[#E53935] text-[11px] tracking-[3px] leading-none font-semibold mt-0.5">
                  TECHNICAL SERVICES
                </span>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden lg:block w-px h-8 bg-white/10 shrink-0" />

            {/* ── Desktop Nav ──────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={item.children ? () => handleMouseEnter(item.label) : undefined}
                  onMouseLeave={item.children ? handleMouseLeave : undefined}
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        onFocus={item.children ? () => handleMouseEnter(item.label) : undefined}
                        onBlur={item.children ? handleMouseLeave : undefined}
                        aria-expanded={open === item.label ? "true" : "false"}
                        aria-haspopup="true"
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-medium font-sans tracking-wide rounded-lg transition-colors relative ${
                          isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
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
                            className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                            style={{ background: "linear-gradient(90deg, #E53935, #B71C1C)" }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {open === item.label && (
                          <NestedDropdown
                            menuLabel={item.label}
                            data={getMenuData(item.label)}
                            viewAll={getMenuViewAll(item.label)}
                            isOpen={open === item.label}
                            onClose={() => setOpen(null)}
                            pathname={pathname}
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    /* Simple link (Home, About, Clients) */
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 text-[14px] font-medium font-sans tracking-wide rounded-lg transition-colors block ${
                        isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                          style={{ background: "linear-gradient(90deg, #E53935, #B71C1C)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Right Side ───────────────────────────────────── */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              {/* Contact — desktop */}
              <Link
                href="/contacts/"
                className="hidden lg:inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#B71C1C] text-white text-[14px] font-medium font-sans px-7 py-3 rounded-xl transition-colors tracking-wide shadow-lg shadow-[#E53935]/20"
              >
                Contact Us
              </Link>

              {/* ── Mobile Menu (shadcn Sheet) ─────────────────── */}
              <Sheet open={mobileOpen} onOpenChange={(v) => setMobileOpen(v as boolean)}>
                <SheetTrigger
                  className="lg:hidden p-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  style={{ background: "#0F1117", borderColor: "rgba(255,255,255,0.08)" }}
                  className="w-[300px] sm:w-[340px] flex flex-col"
                >
                  {/* Accessible title (hidden) */}
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                  {/* Close button */}
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors z-10"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Logo */}
                  <div className="px-5 pt-5 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                      <Image src="/logo.svg" alt="Texas" width={38} height={38} />
                      <div>
                        <span className="text-white font-black tracking-[5px] text-[15px] block leading-none">TEXAS</span>
                        <span className="text-[#E53935] text-[10px] tracking-[2.5px] font-semibold block leading-none mt-1">TECHNICAL SERVICES</span>
                      </div>
                    </Link>
                  </div>

                  {/* Nav links */}
                  <nav className="px-3 py-4 space-y-0.5 overflow-y-auto flex-1">
                    {NAV.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex-1 block px-4 py-3 text-[14px] font-medium font-sans tracking-wide rounded-lg ${
                              isActive(item.href)
                                ? "text-white bg-white/5 border-l-2 border-[#E53935] pl-5"
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
                        {item.label === "Products" && mobileExpanded === item.label ? (
                          <div className="ml-4 border-l pl-3 pb-2 space-y-0.5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                            {productsMenu.map((child) => {
                              const childActive = pathname === child.link;
                              return (
                                <Link
                                  key={child.link}
                                  href={child.link}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium font-sans tracking-wide rounded-lg transition-colors ${
                                    childActive
                                      ? "text-white bg-white/5"
                                      : "text-white/40 hover:text-white/70"
                                  }`}
                                >
                                  {childActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] shrink-0" />
                                  )}
                                  {child.label}
                                </Link>
                              );
                            })}
                            <Link
                              href="/products/"
                              onClick={() => setMobileOpen(false)}
                              className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold text-[#E53935] hover:text-[#B71C1C] transition-colors"
                            >
                              View all products <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        ) : (
                          item.children && mobileExpanded === item.label && (
                            <div className="ml-4 border-l pl-3 pb-2 space-y-0.5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                              {item.children.map((child) => {
                                const childActive =
                                  !child.highlight &&
                                  (pathname === child.href ||
                                    pathname.startsWith(child.href.replace(/\/$/, "") + "/"));
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-2 px-3 py-2 text-[13px] font-medium font-sans tracking-wide rounded-lg transition-colors ${
                                      child.highlight
                                        ? "text-[#E53935] font-medium"
                                        : childActive
                                        ? "text-white bg-white/5"
                                        : "text-white/40 hover:text-white/70"
                                    }`}
                                  >
                                    {childActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] shrink-0" />
                                    )}
                                    {child.icon && !child.highlight && (
                                      <child.icon className="w-3.5 h-3.5 shrink-0 opacity-50" strokeWidth={1.6} />
                                    )}
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Bottom CTA */}
                  <div className="p-4 border-t mt-auto" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <Link
                      href="/contacts/"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center bg-[#E53935] hover:bg-[#B71C1C] text-white text-[14px] font-medium font-sans tracking-wide px-4 py-3.5 rounded-xl transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Bottom accent line — visible on scroll */}
        <div
          className="absolute bottom-0 inset-x-0 h-px transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(229,57,53,0.25), transparent)",
            opacity: scrolled ? 1 : 0,
          }}
        />
      </header>

      {/* Spacer — matches header height */}
      <div className="h-[88px]" aria-hidden="true" />
    </>
  );
}
