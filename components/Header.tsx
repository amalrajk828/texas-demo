"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type SubChild = {
  label: string;
  href: string;
};

type ChildItem = {
  label: string;
  href: string;
  highlight?: boolean;
  children?: SubChild[];
};

type NavItem = {
  label: string;
  href: string;
  children?: ChildItem[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Flow Measurement & Control System Solutions", href: "/service/flow-measurement-solutions/" },
      { label: "Inspection & Testing", href: "/service/inspection-testing/" },
      { label: "Industrial Process Automation Solutions", href: "/service/industrial-automation/" },
      { label: "View all services →", href: "/services/", highlight: true },
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
      { label: "Custody Metering Solutions", href: "/products/custody-metering-solutions/" },
      {
        label: "Flow Meters",
        href: "/products/flow-meters/",
        children: [
          { label: "Liquid Flow Meters", href: "/products/flow-meters/liquid-flow-meters/" },
          { label: "Flare Meters", href: "/products/flow-meters/flare-meters/" },
          { label: "Gas Flow Meters", href: "/products/flow-meters/gas-flow-meters/" },
        ],
      },
      {
        label: "Analyzer's",
        href: "/products/analyzers/",
        children: [
          { label: "CEMS", href: "/products/analyzers/cems/" },
          { label: "Dust Analyzers", href: "/products/analyzers/dust-analyzers/" },
          { label: "Gas Analyzers", href: "/products/analyzers/gas-analyzers/" },
        ],
      },
      { label: "Control Room Interior And Console", href: "/products/control-room-interior-and-console/" },
      { label: "Industrial Automation", href: "/products/industrial-automation/" },
      { label: "Field Instruments", href: "/products/field-instruments/" },
      { label: "Industrial Sensors", href: "/products/sensors/" },
      { label: "PLC", href: "/products/plc/" },
      { label: "ICONICS", href: "/products/iconics/" },
      { label: "GOT (Graphic Operator Panels)", href: "/products/got/" },
      { label: "Frequency Inverters (VFD)", href: "/products/frequency-inverter-vfd/" },
      { label: "AC Servos", href: "/products/acservos/" },
    ],
  },
  { label: "Clients", href: "/clients/" },
];

export default function Header() {
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

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

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
            ? "bg-[#0B0D26]/95 backdrop-blur-md shadow-xl shadow-black/30"
            : "bg-[#0B0D26]"
        }`}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.svg" alt="Texas Technical Services" width={38} height={38} priority />
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-medium tracking-[3px] text-[11px] leading-none">TEXAS</span>
                <span className="text-white/30 text-[7px] tracking-[1.5px] leading-none mt-0.5">TECHNICAL SERVICES</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpen(open === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-3 py-2 text-[13px] rounded-md transition-colors relative ${
                          isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            open === item.label ? "rotate-180" : ""
                          }`}
                        />
                        {isActive(item.href) && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e7212b] rounded-full" />
                        )}
                      </button>

                      {/* Dropdown */}
                      {open === item.label && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-80 bg-[#12163A] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden max-h-[85vh] overflow-y-auto">
                          <div className="p-1.5">
                            {item.children.map((child) => (
                              <div key={child.href}>
                                <Link
                                  href={child.href}
                                  className={`block px-3 py-1.5 text-[12px] rounded-lg transition-colors ${
                                    child.highlight
                                      ? "text-[#e7212b] font-medium hover:bg-[#e7212b]/10"
                                      : "text-white/80 hover:text-white hover:bg-white/5"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                                {child.children && (
                                  <div className="ml-4 border-l border-white/10 pl-3.5 py-0.5 space-y-0.5">
                                    {child.children.map((subChild) => (
                                      <Link
                                        key={subChild.href}
                                        href={subChild.href}
                                        className="block px-2.5 py-1 text-[11px] text-white/50 hover:text-white hover:bg-white/5 rounded transition-colors"
                                      >
                                        {subChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 text-[13px] rounded-md transition-colors block ${
                        isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e7212b] rounded-full" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact + hamburger */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              <Link
                href="/contacts/"
                className="hidden lg:block bg-[#e7212b] hover:bg-[#aa0b1b] text-white text-[12px] font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
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
                      <div key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-2 py-1.5 text-[11px] rounded ${
                            child.highlight ? "text-[#e7212b]" : "text-white/50 hover:text-white/70"
                          }`}
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <div className="ml-3 border-l border-white/5 pl-3 space-y-0.5">
                            {child.children.map((subChild) => (
                              <Link
                                key={subChild.href}
                                href={subChild.href}
                                className="block px-2 py-1 text-[10px] text-white/35 hover:text-white/60"
                              >
                                {subChild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
