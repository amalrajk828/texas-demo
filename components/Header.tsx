"use client";

/* ── Imports ──────────────────────────────────────────────────────── */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown, Menu, ArrowRight, X,
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
      { label: "View all services →",        href: "/service/",                              highlight: true },
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
  { label: "Clients", href: "/clients/" },
];

/* ── Dropdown layout helpers ──────────────────────────────────────── */
function getDropdownCols(label: string)  { return label === "Products" ? "grid-cols-3" : label === "Industries" ? "grid-cols-2" : "grid-cols-1"; }
function getDropdownWidth(label: string) { return label === "Products" ? "w-[640px]"   : label === "Industries" ? "w-[480px]"    : "w-[520px]"; }
function showDesc(label: string)         { return label === "Services"; }
function getDropdownPos(label: string)   { return label === "Products" ? "right-0" : "left-1/2 -translate-x-1/2"; }

/* ── Component ────────────────────────────────────────────────────── */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen]               = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

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
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[16px] font-semibold rounded-lg transition-colors relative ${
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

                      {/* ── White Dropdown Panel ──────────────── */}
                      <AnimatePresence>
                        {open === item.label && (
                          <motion.div
                            key={`dd-${item.label}`}
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className={`absolute top-full ${getDropdownPos(item.label)} mt-3 ${getDropdownWidth(item.label)} rounded-2xl shadow-2xl shadow-black/15 overflow-hidden border border-gray-100`}
                            style={{ background: "white" }}
                          >
                            {/* Gradient accent at top */}
                            <div
                              className="h-[2px]"
                              style={{ background: "linear-gradient(90deg, #E53935, #FF7043, #E53935)" }}
                            />

                            {/* Items grid */}
                            <div className={`p-3 grid ${getDropdownCols(item.label)} gap-0.5`}>
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
                                      className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-all group ${
                                        childActive ? "bg-red-50" : "hover:bg-gray-50"
                                      }`}
                                    >
                                      {Icon && (
                                        <span
                                          className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5 transition-colors ${
                                            childActive
                                              ? "bg-[#E53935]/10 text-[#E53935]"
                                              : "bg-gray-100 text-gray-400 group-hover:bg-[#E53935]/8 group-hover:text-[#E53935]"
                                          }`}
                                        >
                                          <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                                        </span>
                                      )}
                                      <div className="min-w-0">
                                        <p
                                          className={`text-[14px] font-semibold leading-tight ${
                                            childActive ? "text-[#E53935]" : "text-gray-900"
                                          }`}
                                        >
                                          {child.label}
                                        </p>
                                        {showDesc(item.label) && child.desc && (
                                          <p className="text-[12px] text-gray-400 mt-1 leading-relaxed">
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
                              <div className="border-t border-gray-100 px-5 py-3 bg-gray-50/60">
                                <Link
                                  href={item.children!.find((c) => c.highlight)!.href}
                                  onClick={() => setOpen(null)}
                                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E53935] hover:text-[#B71C1C] transition-colors"
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
                      className={`relative px-4 py-2.5 text-[16px] font-semibold rounded-lg transition-colors block ${
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
                className="hidden lg:inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#B71C1C] text-white text-[14px] font-bold px-7 py-3 rounded-xl transition-colors tracking-wide shadow-lg shadow-[#E53935]/20"
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
                            className={`flex-1 block px-4 py-3 text-[15px] font-semibold rounded-lg ${
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
                        {item.children && mobileExpanded === item.label && (
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
                                  className={`flex items-center gap-2 px-3 py-2 text-[13px] rounded-lg transition-colors ${
                                    child.highlight
                                      ? "text-[#E53935] font-semibold"
                                      : childActive
                                      ? "text-white font-medium bg-white/5"
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
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Bottom CTA */}
                  <div className="p-4 border-t mt-auto" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <Link
                      href="/contacts/"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center bg-[#E53935] hover:bg-[#B71C1C] text-white text-[14px] font-bold px-4 py-3.5 rounded-xl transition-colors"
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
