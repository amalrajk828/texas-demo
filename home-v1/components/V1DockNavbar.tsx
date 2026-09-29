"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Wrench,
  Factory,
  Package,
  FileText,
  Users,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ─── NAV ITEMS DATA ─────────────────────────────────────────── */
export interface V1NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  sectionIndex?: number; // target section index in CrossFadeStage
  hasDropdown?: boolean;
}

export const V1_NAV_ITEMS: V1NavItem[] = [
  { id: "home", label: "Home", href: "/", icon: Home, sectionIndex: 0 },
  { id: "about", label: "About Us", href: "/about-us/", icon: Info, sectionIndex: 6 },
  { id: "services", label: "Services", href: "/service/", icon: Wrench, sectionIndex: 1, hasDropdown: true },
  { id: "industries", label: "Industries", href: "/industries/", icon: Factory, sectionIndex: 3, hasDropdown: true },
  { id: "products", label: "Products", href: "/products/", icon: Package, hasDropdown: true },
  { id: "blog", label: "Blog", href: "/blog/", icon: FileText },
  { id: "clients", label: "Clients", href: "/clients/", icon: Users, sectionIndex: 5 },
];

/* ─── DROPDOWN SUBMENU DATA ──────────────────────────────────── */
const SERVICES_MENU = [
  { label: "Flow Measurement & Control", link: "/service/flow-measurement-solutions/" },
  { label: "Inspection & Testing", link: "/service/inspection-testing/" },
  { label: "Industrial Automation", link: "/service/industrial-automation/" },
];

const INDUSTRIES_MENU = [
  { label: "Oil & Gas", link: "/industries/oil-gas/" },
  { label: "Refinery", link: "/industries/refinery/" },
  { label: "Petrochemicals", link: "/industries/petrochemicals/" },
  { label: "LNG", link: "/industries/lng/" },
  { label: "Power Plant", link: "/industries/power-plant/" },
  { label: "Water Treatment", link: "/industries/water-treatment/" },
  { label: "Cement", link: "/industries/cement/" },
  { label: "Metal & Steel", link: "/industries/metal-steel/" },
];

const PRODUCTS_MENU = [
  {
    label: "Custody Metering Solutions",
    link: "/products/custody-metering-solutions/",
  },
  {
    label: "Flow Meters",
    link: "/products/flow-meters/",
    children: [
      { label: "Liquid Flow Meters", link: "/products/flow-meters/liquid-flow-meters/" },
      { label: "Flare Meters", link: "/products/flow-meters/flare-meters/" },
      { label: "Gas Flow Meters", link: "/products/flow-meters/gas-flow-meters/" },
    ],
  },
  {
    label: "Analyzers",
    link: "/products/analyzers/",
    children: [
      { label: "CEMS Solutions", link: "/products/analyzers/cems/" },
      { label: "Dust Analyzers", link: "/products/analyzers/dust-analyzers/" },
      { label: "Gas Analyzers", link: "/products/analyzers/gas-analyzers/" },
    ],
  },
  { label: "Control Room Interior & Console", link: "/products/control-room-interior-and-console/" },
  { label: "Industrial Automation", link: "/products/industrial-automation/" },
  { label: "Field Instruments", link: "/products/field-instruments/" },
  { label: "Industrial Sensors", link: "/products/sensors/" },
  { label: "PLC Systems", link: "/products/plc/" },
  { label: "ICONICS SCADA", link: "/products/iconics/" },
  { label: "GOT HMI Panels", link: "/products/got/" },
  { label: "Frequency Inverters (VFD)", link: "/products/frequency-inverter-vfd/" },
];

/* ─── PROPS ──────────────────────────────────────────────────── */
export interface V1DockNavbarProps {
  activeSectionIndex?: number;
}

export default function V1DockNavbar({ activeSectionIndex = 0 }: V1DockNavbarProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  // Committed active item id
  const [activeId, setActiveId] = useState<string>("home");

  // Hovered item id (previews lens position)
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Dropdown open state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  // Mobile drawer open state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);

  // Measure button elements for horizontal lens placement
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Geometric layout state of active / previewed lens
  const [lensRect, setLensRect] = useState<{ x: number; width: number; height: number }>({
    x: 0,
    width: 60,
    height: 60,
  });

  // Effective item target for lens
  const displayedId = hoveredId || activeId;

  // Spring animations for lens movement
  const springX = useSpring(0, {
    stiffness: reducedMotion ? 9999 : 260,
    damping: reducedMotion ? 9999 : 24,
    mass: 1,
  });

  const springW = useSpring(60, {
    stiffness: reducedMotion ? 9999 : 260,
    damping: reducedMotion ? 9999 : 24,
    mass: 1,
  });


  // Update lens position relative to container
  const updateLensTarget = useCallback(() => {
    const targetEl = buttonRefs.current.get(displayedId);
    const containerEl = containerRef.current;
    if (!targetEl || !containerEl) return;

    const cRect = containerEl.getBoundingClientRect();
    const bRect = targetEl.getBoundingClientRect();

    const x = bRect.left - cRect.left;
    const width = bRect.width;
    const height = cRect.height;

    setLensRect({ x, width, height });

    if (reducedMotion) {
      springX.jump(x);
      springW.jump(width);
    } else {
      springX.set(x);
      springW.set(width);
    }
  }, [displayedId, reducedMotion, springW, springX]);

  useEffect(() => {
    updateLensTarget();
  }, [updateLensTarget]);

  // Recalculate on window resize
  useEffect(() => {
    window.addEventListener("resize", updateLensTarget);
    return () => window.removeEventListener("resize", updateLensTarget);
  }, [updateLensTarget]);

  // Handle item click
  const handleItemClick = (item: V1NavItem) => {
    setActiveId(item.id);

    // If on homepage and section index defined, scroll to stage section
    if (typeof item.sectionIndex === "number" && typeof (window as any).__v1ScrollToSection === "function") {
      (window as any).__v1ScrollToSection(item.sectionIndex);
    }

    // Toggle dropdown if applicable
    if (item.hasDropdown) {
      setOpenDropdown((prev) => (prev === item.id ? null : item.id));
    } else {
      setOpenDropdown(null);
    }
  };

  // Keyboard navigation across items
  const handleKeyDown = (e: ReactKeyboardEvent, item: V1NavItem, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (index + 1) % V1_NAV_ITEMS.length;
      const nextItem = V1_NAV_ITEMS[nextIdx];
      buttonRefs.current.get(nextItem.id)?.focus();
      setHoveredId(nextItem.id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (index - 1 + V1_NAV_ITEMS.length) % V1_NAV_ITEMS.length;
      const prevItem = V1_NAV_ITEMS[prevIdx];
      buttonRefs.current.get(prevItem.id)?.focus();
      setHoveredId(prevItem.id);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleItemClick(item);
    } else if (e.key === "Escape") {
      setOpenDropdown(null);
      setHoveredId(null);
    }
  };

  // Dropdown hover helpers
  const handleDropdownEnter = (id: string) => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    if (dropdownCloseTimer.current) clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setHoveredId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── SVG Refraction Filter with Chromatic Edge Aberration for Chromium browsers ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0"
      >
        <defs>
          <filter id="v1-glass-lens-refract" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035 0.035"
              numOctaves="3"
              result="noise"
            />
            {/* Liquid displacement map with strong scale for visible edge bending */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="32"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feMerge>
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── DESKTOP DOCK WITH MERGED LOGO (>= 1024px) ── */}
      <div
        className="fixed top-5 xl:top-6 inset-x-0 z-[70] hidden lg:flex items-center justify-center px-4"
        onMouseLeave={() => {
          setHoveredId(null);
          handleDropdownLeave();
        }}
      >
        {/* Single continuous enlarged rounded dock pill (~74px height) */}
        <div
          className="relative flex items-center h-[74px] pl-5 pr-4 rounded-full border shadow-2xl transition-all duration-300 max-w-[calc(100vw-40px)]"
          style={{
            background: "rgba(15, 17, 21, 0.88)",
            borderColor: "rgba(255, 255, 255, 0.09)",
            boxShadow:
              "0 24px 48px -12px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* ── 1. Logo (icon + TEXAS / TECHNICAL SERVICES text) ── */}
          <Link
            href="/"
            onClick={() => {
              if (typeof (window as any).__v1ScrollToSection === "function") {
                (window as any).__v1ScrollToSection(0);
              }
            }}
            aria-label="Texas Technical Services Home"
            className="flex items-center gap-3.5 group shrink-0 pr-1 select-none"
          >
            <Image
              src="/logo.svg"
              alt="Texas Technical Services"
              width={42}
              height={42}
              priority
              className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105 shrink-0"
            />
            <div className="flex flex-col gap-0.5 whitespace-nowrap">
              <span className="text-white font-black tracking-[5px] text-[16px] leading-none transition-colors group-hover:text-[#f4f1ee]">
                TEXAS
              </span>
              <span className="text-white/65 text-[10.5px] tracking-[2.6px] leading-none font-semibold mt-0.5 group-hover:text-white/90 transition-colors">
                TECHNICAL SERVICES
              </span>
            </div>
          </Link>

          {/* ── 2. Subtle vertical divider ── */}
          <div className="w-px h-7 bg-white/[0.12] mx-3.5 xl:mx-4 shrink-0" />

          {/* ── 3. Nav Icons Row (with relative positioning for sliding glass lens) ── */}
          <div
            ref={containerRef}
            role="tablist"
            aria-label="Primary navigation dock"
            className="relative flex items-center h-full px-1.5"
          >
            {/* ══════════════════════════════════════════════════
                THE SLIDING GLASS LENS (Confined to nav items region)
                High-end liquid glass squircle with realistic rim light,
                specular highlight streak, and edge refraction
                ══════════════════════════════════════════════════ */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute z-10 rounded-[24px]"
              style={{
                x: springX,
                width: springW,
                top: -12,
                bottom: -12,
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 60%, rgba(255, 255, 255, 0.05) 100%)",
                boxShadow: `
                  0 16px 36px -4px rgba(0, 0, 0, 0.75),
                  0 4px 12px rgba(0, 0, 0, 0.4),
                  inset 0 1.5px 2px rgba(255, 255, 255, 0.65),
                  inset 0 -1.5px 2px rgba(255, 255, 255, 0.2),
                  inset 1px 0 2px rgba(255, 255, 255, 0.25),
                  inset -1px 0 2px rgba(255, 255, 255, 0.25)
                `,
                backdropFilter: reducedMotion ? "blur(8px)" : "blur(14px) saturate(1.5)",
                WebkitBackdropFilter: reducedMotion ? "blur(8px)" : "blur(14px) saturate(1.5)",
              }}
            >
              {/* Outer 1.5px gradient rim light (bright top-left to softer bottom-right) */}
              <div
                className="absolute inset-0 rounded-[24px] pointer-events-none p-[1.5px]"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.3) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Soft specular highlight streak across top 20% of lens */}
              <div
                className="absolute top-1 inset-x-2.5 h-4 rounded-t-[20px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 60%, transparent 100%)",
                  filter: "blur(1px)",
                }}
              />

              {/* Top edge-bleed / refraction liquid distortion glow tinted with #8a302f */}
              <div
                className="absolute -top-1 inset-x-2 h-4 rounded-t-[20px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(138, 48, 47, 0.55) 0%, rgba(138, 48, 47, 0.2) 50%, transparent 80%)",
                  filter: "blur(2px)",
                }}
              />

              {/* Bottom edge-bleed / refraction liquid distortion glow tinted with #8a302f */}
              <div
                className="absolute -bottom-1 inset-x-2 h-4 rounded-b-[20px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(138, 48, 47, 0.55) 0%, rgba(138, 48, 47, 0.2) 50%, transparent 80%)",
                  filter: "blur(2px)",
                }}
              />
            </motion.div>

            {/* ── Dock Nav Items ── */}
            <div className="flex items-center gap-1 xl:gap-1.5 z-20">
              {V1_NAV_ITEMS.map((item, index) => {
                const isUnderLens = displayedId === item.id;
                const isCommittedActive = activeId === item.id;
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredId(item.id);
                      if (item.hasDropdown) handleDropdownEnter(item.id);
                      else handleDropdownLeave();
                    }}
                  >
                    <button
                      ref={(el) => {
                        if (el) buttonRefs.current.set(item.id, el);
                        else buttonRefs.current.delete(item.id);
                      }}
                      role="tab"
                      id={`dock-tab-${item.id}`}
                      aria-selected={isCommittedActive}
                      aria-controls={`dock-panel-${item.id}`}
                      tabIndex={0}
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(e) => handleKeyDown(e, item, index)}
                      className="relative flex flex-col items-center justify-center min-w-[64px] xl:min-w-[70px] px-3.5 xl:px-4 h-[62px] rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#8a302f] transition-all select-none"
                    >
                      {isUnderLens ? (
                        /* ACTIVE / UNDER LENS: Solid/filled white icon + text label underneath */
                        <motion.div
                          key="active-content"
                          initial={reducedMotion ? false : { opacity: 0, scale: 0.88 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.18, delay: 0.04 }}
                          className="flex flex-col items-center justify-center leading-none"
                        >
                          <div className="flex items-center gap-1.5">
                            <Icon className="w-[23px] h-[23px] text-[#F4F1EE] fill-[#F4F1EE]" strokeWidth={2.4} />
                            {item.hasDropdown && (
                              <ChevronDown
                                className={`w-3 h-3 text-[#F4F1EE]/70 transition-transform duration-200 ${
                                  openDropdown === item.id ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </div>
                          <span className="text-[11.5px] font-bold tracking-tight text-[#F4F1EE] mt-1.5 whitespace-nowrap">
                            {item.label}
                          </span>
                        </motion.div>
                      ) : (
                        /* INACTIVE: Outline-only icon in #c9c4bf, NO label, NO background */
                        <Icon
                          className="w-[23px] h-[23px] text-[#c9c4bf] hover:text-white transition-colors"
                          strokeWidth={1.8}
                        />
                      )}
                    </button>

                    {/* ── Dropdown Mega-Menu Panels ── */}
                    {item.hasDropdown && (
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            key={`dropdown-${item.id}`}
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            onMouseEnter={() => handleDropdownEnter(item.id)}
                            onMouseLeave={handleDropdownLeave}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-5 z-[90] rounded-2xl border shadow-2xl overflow-hidden"
                            style={{
                              background: "rgba(15, 17, 21, 0.94)",
                              borderColor: "rgba(255, 255, 255, 0.10)",
                              boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.8)",
                              backdropFilter: "blur(24px)",
                              WebkitBackdropFilter: "blur(24px)",
                              minWidth: item.id === "products" ? "460px" : "300px",
                            }}
                          >
                            {/* Accent line at top */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-[#cf6561] via-[#8a302f] to-[#6e2624]" />

                            <div className="p-3.5">
                              {item.id === "services" && (
                                <div className="flex flex-col gap-1">
                                  {SERVICES_MENU.map((sub) => (
                                    <Link
                                      key={sub.link}
                                      href={sub.link}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[13.5px] font-medium text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors group"
                                    >
                                      <span>{sub.label}</span>
                                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#8a302f]" />
                                    </Link>
                                  ))}
                                  <div className="mt-2 pt-2 border-t border-white/10 px-4 pb-1">
                                    <Link
                                      href="/service/"
                                      onClick={() => setOpenDropdown(null)}
                                      className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#e4b4b4] hover:text-white transition-colors"
                                    >
                                      <span>View all services</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              )}

                              {item.id === "industries" && (
                                <div className="grid grid-cols-2 gap-1.5">
                                  {INDUSTRIES_MENU.map((sub) => (
                                    <Link
                                      key={sub.link}
                                      href={sub.link}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors group"
                                    >
                                      <span>{sub.label}</span>
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#8a302f]" />
                                    </Link>
                                  ))}
                                  <div className="col-span-2 mt-2 pt-2 border-t border-white/10 px-3.5 pb-1">
                                    <Link
                                      href="/industries/"
                                      onClick={() => setOpenDropdown(null)}
                                      className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#e4b4b4] hover:text-white transition-colors"
                                    >
                                      <span>View all industries</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              )}

                              {item.id === "products" && (
                                <div className="flex flex-col gap-1 max-h-[380px] overflow-y-auto pr-1">
                                  {PRODUCTS_MENU.map((sub) => (
                                    <div key={sub.link} className="flex flex-col">
                                      <Link
                                        href={sub.link}
                                        onClick={() => setOpenDropdown(null)}
                                        className="flex items-center justify-between px-3.5 py-2 rounded-lg text-[13px] font-semibold text-white/90 hover:text-white hover:bg-white/[0.08] transition-colors"
                                      >
                                        <span>{sub.label}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#8a302f]" />
                                      </Link>
                                      {sub.children && (
                                        <div className="pl-5 pb-1 flex flex-col gap-0.5">
                                          {sub.children.map((child) => (
                                            <Link
                                              key={child.link}
                                              href={child.link}
                                              onClick={() => setOpenDropdown(null)}
                                              className="px-3.5 py-1.5 rounded-md text-[12px] text-white/65 hover:text-white hover:bg-white/[0.05] transition-colors"
                                            >
                                              {child.label}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                  <div className="mt-2 pt-2 border-t border-white/10 px-3.5 pb-1">
                                    <Link
                                      href="/products/"
                                      onClick={() => setOpenDropdown(null)}
                                      className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#e4b4b4] hover:text-white transition-colors"
                                    >
                                      <span>View all products</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 4. Contact Us Button inside the right edge of the pill ── */}
          <Link
            href="/contacts/"
            className="inline-flex items-center justify-center px-5 xl:px-6 h-[44px] rounded-full text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-200 z-20 shrink-0 shadow-lg hover:brightness-110 hover:-translate-y-0.5 ml-2 xl:ml-3"
            style={{
              background: "#8a302f",
              boxShadow: "0 6px 20px rgba(138, 48, 47, 0.5)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* ── RESPONSIVE MOBILE DOCK (< 1024px) ── */}
      <div className="fixed bottom-3.5 inset-x-3.5 z-[70] block lg:hidden">
        <div
          role="tablist"
          aria-label="Mobile navigation dock"
          className="relative flex items-center justify-around h-[62px] px-2.5 rounded-full border shadow-2xl"
          style={{
            background: "rgba(15, 17, 21, 0.94)",
            borderColor: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.85)",
          }}
        >
          {/* Primary mobile items */}
          {V1_NAV_ITEMS.slice(0, 4).map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleItemClick(item)}
                className={`relative flex flex-col items-center justify-center min-w-[54px] h-[50px] rounded-2xl transition-all ${
                  isActive ? "bg-white/[0.09] text-white" : "text-[#c9c4bf]"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "fill-white" : ""}`} strokeWidth={1.8} />
                <span className="text-[10px] font-semibold mt-0.5">{item.label}</span>
              </button>
            );
          })}

          {/* More Drawer Button */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex flex-col items-center justify-center min-w-[54px] h-[50px] text-[#c9c4bf] hover:text-white"
            aria-label="More navigation links"
          >
            <Menu className="w-5 h-5" />
            <span className="text-[10px] font-semibold mt-0.5">More</span>
          </button>

          {/* Contact Button */}
          <Link
            href="/contacts/"
            className="flex items-center justify-center px-4 h-[40px] rounded-full text-[11.5px] font-bold uppercase tracking-wider text-white shadow-md"
            style={{ background: "#8a302f" }}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* ── Mobile "More" Bottom Sheet ── */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 inset-x-0 z-[85] max-h-[80vh] overflow-y-auto rounded-t-3xl border-t p-6 lg:hidden"
              style={{
                background: "#0F1117",
                borderColor: "rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/logo.svg"
                    alt="Texas Technical Services"
                    width={36}
                    height={36}
                    className="drop-shadow"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white font-black tracking-[4px] text-[14px] leading-none">
                      TEXAS
                    </span>
                    <span className="text-white/60 text-[9px] tracking-[2px] font-semibold leading-none mt-0.5">
                      TECHNICAL SERVICES
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 rounded-full text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {V1_NAV_ITEMS.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <Link
                        href={item.href}
                        onClick={() => {
                          handleItemClick(item);
                          setMobileDrawerOpen(false);
                        }}
                        className="text-[14px] font-medium text-white/90 hover:text-white"
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() =>
                            setMobileExpandedGroup((prev) => (prev === item.id ? null : item.id))
                          }
                          className="p-1.5 text-white/50 hover:text-white"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileExpandedGroup === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.hasDropdown && mobileExpandedGroup === item.id && (
                      <div className="pl-4 py-2 flex flex-col gap-1 border-l border-white/10 ml-2">
                        {item.id === "services" &&
                          SERVICES_MENU.map((s) => (
                            <Link
                              key={s.link}
                              href={s.link}
                              onClick={() => setMobileDrawerOpen(false)}
                              className="py-1 text-[13px] text-white/70 hover:text-white"
                            >
                              {s.label}
                            </Link>
                          ))}
                        {item.id === "industries" &&
                          INDUSTRIES_MENU.map((s) => (
                            <Link
                              key={s.link}
                              href={s.link}
                              onClick={() => setMobileDrawerOpen(false)}
                              className="py-1 text-[13px] text-white/70 hover:text-white"
                            >
                              {s.label}
                            </Link>
                          ))}
                        {item.id === "products" &&
                          PRODUCTS_MENU.map((s) => (
                            <Link
                              key={s.link}
                              href={s.link}
                              onClick={() => setMobileDrawerOpen(false)}
                              className="py-1 text-[13px] text-white/70 hover:text-white"
                            >
                              {s.label}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
