"use client";

/* ── Imports ──────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown, Menu, ArrowRight, X, ChevronRight, Wifi,
  Gauge, FlaskConical, Cpu,
  Droplet, Factory, Flame, Snowflake, Zap, Droplets, Building2, Hammer,
  BarChart3, Radio, Monitor, Tablet, Activity, Settings, Wrench, Target,
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
    href: "/service/",
    children: [
      { label: "Flow Measurement & Control", href: "/service/flow-measurement-solutions/", icon: Gauge,        desc: "Custody metering, flow computers, and control system upgrades" },
      { label: "Inspection & Testing",       href: "/service/inspection-testing/",          icon: FlaskConical, desc: "NDT, mechanical testing, and ISO-certified inspection services" },
      { label: "Industrial Automation",      href: "/service/industrial-automation/",        icon: Cpu,          desc: "PLC, SCADA, HMI, and VFD integration for industrial plants" },
      { label: "View all services",        href: "/service/",                              highlight: true },
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
      { label: "View all industries", href: "/industries/",            highlight: true },
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
      { label: "View all products",       href: "/products/",                              highlight: true },
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
  if (label === "Products") return { label: "View all products", link: "/products/" };
  if (label === "Services") return { label: "View all services", link: "/service/" };
  if (label === "Industries") return { label: "View all industries", link: "/industries/" };
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
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#0891B2] block">
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

const getDropdownPos = (label: string) => {
  if (label === "Products") return "left-1/2 -translate-x-1/2";
  if (label === "Services") return "left-0";
  if (label === "Industries") return "left-0";
  return "left-0";
};

const getDropdownWidth = (label: string) => {
  if (label === "Products") return "w-[660px]";
  if (label === "Services") return "w-[360px]";
  if (label === "Industries") return "w-[540px]";
  return "w-[360px]";
};

const getDropdownCols = (label: string) => {
  if (label === "Products") return "grid-cols-2";
  if (label === "Services") return "grid-cols-1";
  if (label === "Industries") return "grid-cols-2";
  return "grid-cols-1";
};

const showDesc = (label: string) => label === "Services";

/* ── Component ────────────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAboutUs = pathname.startsWith("/about-us");
  const isHomeV5 = pathname?.startsWith("/demo/home-v1");
  const isHomeV2 = pathname?.startsWith("/demo/home-v2");
  const isHomeV3 = pathname === "/demo/home-v3";
  const isHomeV4 = pathname === "/demo/home-v4";
  const [open, setOpen]               = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
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
    let lenisInstance: any = (window as any).lenis;
    let unsubLenis: (() => void) | null = null;
    let checkInterval: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const onScroll = (e?: any) => {
      const scrollY = e && typeof e.scroll === "number" ? e.scroll : (window.scrollY || 0);
      const nextScrolled = scrollY > 10;
      setScrolled(prev => {
        if (prev !== nextScrolled) {
          return nextScrolled;
        }
        return prev;
      });
    };

    const setupLenisListener = (lenis: any) => {
      lenisInstance = lenis;
      window.removeEventListener("scroll", onScroll);
      lenis.on("scroll", onScroll);
      unsubLenis = () => {
        lenis.off("scroll", onScroll);
      };
      onScroll({ scroll: lenis.scroll });
    };

    if (lenisInstance) {
      setupLenisListener(lenisInstance);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      checkInterval = setInterval(() => {
        if ((window as any).lenis) {
          setupLenisListener((window as any).lenis);
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 50);

      timeoutId = setTimeout(() => {
        if (checkInterval) {
          clearInterval(checkInterval);
        }
      }, 2000);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (timeoutId) clearTimeout(timeoutId);
      if (unsubLenis) {
        unsubLenis();
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    };
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

  /* Dynamically measure and expose navbar height as CSS custom property */
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const h = Math.round(rect.bottom);
        if (h > 0) {
          document.documentElement.style.setProperty("--navbar-height", `${h}px`);
        }
      }
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && ref.current) {
      observer = new ResizeObserver(updateNavbarHeight);
      observer.observe(ref.current);
    }
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      if (observer) observer.disconnect();
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      <header
        ref={ref}
        className="header-glass fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 rounded-2xl border border-white/[0.10]"
        style={{
          background: "rgba(15, 15, 18, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: scrolled
            ? "0 12px 32px rgba(0, 0, 0, 0.40), inset 0 1px 1px rgba(255, 255, 255, 0.08)"
            : "0 8px 24px rgba(0, 0, 0, 0.30), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
          transition: "box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Inner background clip for sheen overlays only */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          {/* Subtle top specular highlight sheen */}
          <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none rounded-t-2xl" />
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        </div>

        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center h-[76px] gap-2 lg:gap-4 xl:gap-10">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-4 shrink-0">
              <Image src="/logo.svg" alt="Texas Technical Services" width={52} height={52} priority />
              <div className="hidden sm:flex flex-col gap-0.5">
                <span className="text-white font-black tracking-[6px] lg:tracking-[0px] xl:tracking-[6px] text-[18px] leading-none">
                  TEXAS
                </span>
                <span className="text-white/60 text-[11px] tracking-[3px] lg:tracking-[0px] xl:tracking-[3px] leading-none font-semibold mt-0.5">
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
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        onFocus={item.children ? () => handleMouseEnter(item.label) : undefined}
                        onBlur={item.children ? handleMouseLeave : undefined}
                        aria-expanded={open === item.label ? "true" : "false"}
                        aria-haspopup="true"
                        className={`whitespace-nowrap flex items-center gap-1.5 px-2.5 lg:px-3 xl:px-4 py-2.5 text-[14px] font-medium font-sans tracking-wide rounded-lg transition-colors relative ${
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
                            style={{
                              background: isHomeV5
                                ? "linear-gradient(90deg, #832429, #9c2b31)"
                                : "linear-gradient(90deg, #E53935, #B71C1C)"
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      {/* ── Dark Glassmorphic Dropdown Panel ──────────────── */}
                      <AnimatePresence>
                        {open === item.label && (
                          <motion.div
                            key={`dd-${item.label}`}
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute top-full ${getDropdownPos(item.label)} mt-3 ${getDropdownWidth(item.label)} rounded-2xl shadow-2xl shadow-black/60 overflow-hidden border border-white/15 z-[110] backdrop-blur-2xl`}
                            style={{ background: "rgba(15, 15, 18, 0.88)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)" }}
                          >
                            {/* Dark scrim overlay to mute background textures */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                            {/* Gradient accent at top */}
                            <div
                              className="relative z-10 h-[2px]"
                              style={{
                                background: isHomeV5
                                  ? "linear-gradient(90deg, #832429, #9c2b31, #832429)"
                                  : "linear-gradient(90deg, #E53935, #FF7043, #E53935)"
                              }}
                            />

                            {/* Items grid */}
                            <div className={`relative z-10 ${item.label === "Products" ? "p-4 gap-x-8 gap-y-1" : "p-3.5 gap-1"} grid ${getDropdownCols(item.label)}`}>
                              {item.children!
                                .filter((c) => !c.highlight)
                                .map((child) => {
                                  const childActive =
                                    pathname === child.href ||
                                    pathname.startsWith(child.href.replace(/\/$/, "") + "/");
                                  const Icon = child.icon;

                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setOpen(null)}
                                      className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all duration-200 group border ${
                                        childActive
                                          ? "bg-[#E53935]/20 text-white border-[#E53935]/40"
                                          : "text-white/90 hover:text-white hover:bg-white/[0.09] border-transparent"
                                      }`}
                                    >
                                      {Icon && (
                                        <span
                                          className={`flex items-center justify-center w-7 h-7 rounded-md shrink-0 transition-colors ${
                                            childActive
                                              ? "bg-[#E53935]/25 text-[#ff5252]"
                                              : "bg-white/10 text-white/80 group-hover:bg-[#E53935]/20 group-hover:text-white"
                                          }`}
                                        >
                                          <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                                        </span>
                                      )}
                                      <div className="min-w-0 flex-1">
                                        <p className="text-[13px] font-medium leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                                          {child.label}
                                        </p>
                                        {showDesc(item.label) && child.desc && (
                                          <p className="text-[11.5px] text-white/70 mt-0.5 leading-relaxed">
                                            {child.desc}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  );
                                })}
                            </div>

                            {/* "View all" footer */}
                            {item.children!.find((c) => c.highlight) && (
                              <div className="relative z-10 border-t border-white/15 px-4 py-2 bg-black/40">
                                <Link
                                  href={item.children!.find((c) => c.highlight)!.href}
                                  onClick={() => setOpen(null)}
                                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FF5252] hover:text-white transition-colors"
                                >
                                  {item.children!.find((c) => c.highlight)!.label}
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    /* Simple link (Home, About, Clients) */
                    <Link
                      href={item.href}
                      className={`whitespace-nowrap relative px-2.5 lg:px-3 xl:px-4 py-2.5 text-[14px] font-medium font-sans tracking-wide rounded-lg transition-colors block ${
                        isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                          style={{
                            background: isHomeV5
                              ? "linear-gradient(90deg, #d47a38, #e8a86a)"
                              : "linear-gradient(90deg, #E53935, #B71C1C)"
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Right Side ───────────────────────────────────── */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Contact — desktop */}
              <Link
                href="/contacts/"
                style={
                  isHomeV5
                    ? {
                        background: "linear-gradient(180deg, #a83d3c 0%, #8a302f 60%, #6e2624 100%)",
                        boxShadow: "0 8px 20px rgba(138, 48, 47, 0.5)",
                      }
                    : isHomeV2
                    ? {
                        background: "linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.10) 45%, transparent 68%), linear-gradient(180deg, #E53935 0%, #B71C1C 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.36), 0 4px 20px rgba(229,57,53,0.35)",
                      }
                    : isHomeV3
                    ? {
                        background: "linear-gradient(180deg, #17707E 0%, #0F5260 100%)",
                        boxShadow: "0 4px 20px rgba(23,112,126,0.35)",
                      }
                    : isHomeV4
                    ? {
                        background: "linear-gradient(to right, #F0A868, #E8935A)",
                        boxShadow: "0 4px 20px rgba(232, 147, 90, 0.35)",
                      }
                    : undefined
                }
                className={`whitespace-nowrap hidden lg:inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase px-3 xl:px-6 py-2.5 transition-all duration-200 ${
                  isHomeV5 || isHomeV2 || isHomeV4
                    ? `rounded-full text-white font-bold hover:brightness-110 hover:-translate-y-0.5 ${isHomeV4 ? "hover:shadow-[0_8px_24px_rgba(232,147,90,0.45)]" : "shadow-lg shadow-[#E53935]/35"}`
                    : isHomeV3
                    ? "rounded-full text-white font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(23,112,126,0.50)]"
                    : "rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white shadow-lg shadow-[#E53935]/20 font-medium"
                }`}
              >
                <span className="hidden lg:inline xl:hidden">Contact</span>
                <span className="hidden xl:inline">Contact Us</span>
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
                      <Image src="/logo.svg" alt="Texas Technical Services" width={38} height={38} loading="eager" />
                      <div>
                        <span className="text-white font-black tracking-[5px] text-[15px] block leading-none">TEXAS</span>
                        <span className="text-white/60 text-[10px] tracking-[2.5px] font-semibold block leading-none mt-1">TECHNICAL SERVICES</span>
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
                      style={
                        isHomeV5
                          ? {
                              background: "linear-gradient(180deg, #a83d3c 0%, #8a302f 60%, #6e2624 100%)",
                              boxShadow: "0 8px 20px rgba(138, 48, 47, 0.5)",
                            }
                          : isHomeV2
                          ? {
                              background: "linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.10) 45%, transparent 68%), linear-gradient(180deg, #E53935 0%, #B71C1C 100%)",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.36), 0 4px 20px rgba(229,57,53,0.35)",
                            }
                          : isHomeV3
                          ? {
                              background: "linear-gradient(180deg, #17707E 0%, #0F5260 100%)",
                              boxShadow: "0 4px 20px rgba(23,112,126,0.35)",
                            }
                          : isHomeV4
                          ? {
                              background: "linear-gradient(to right, #F0A868, #E8935A)",
                              boxShadow: "0 4px 20px rgba(232, 147, 90, 0.35)",
                            }
                          : undefined
                      }
                      className={`block text-center text-[13px] font-mono tracking-[0.12em] uppercase px-4 py-3.5 transition-all duration-200 ${
                        isHomeV5 || isHomeV2 || isHomeV4
                          ? `rounded-full text-white font-bold hover:brightness-110 ${isHomeV4 ? "" : "shadow-lg shadow-[#E53935]/35"}`
                          : isHomeV3
                          ? "rounded-full text-white font-bold hover:brightness-110"
                          : "rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-medium"
                      }`}
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
          className="absolute bottom-0 inset-x-0 h-px transition-opacity duration-300 rounded-b-2xl overflow-hidden"
          style={{
            background: isHomeV5
              ? "linear-gradient(90deg, transparent, rgba(131,36,41,0.5), transparent)"
              : "linear-gradient(90deg, transparent, rgba(229,57,53,0.25), transparent)",
            opacity: scrolled ? 1 : 0,
          }}
        />

        {isHomeV2 && (
          <style>{`
            .v2-btn-primary {
              background: linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.10) 45%, transparent 68%), linear-gradient(180deg, #E53935 0%, #B71C1C 100%) !important;
              box-shadow: inset 0 1px 0 rgba(255,255,255,0.36), 0 4px 20px rgba(229,57,53,0.35) !important;
            }
          `}</style>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.15s ease-out forwards;
          }
        `}</style>
      </header>

    </>
  );
}
