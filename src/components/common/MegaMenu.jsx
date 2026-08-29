import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

/**
 * Reusable Multi-Level Dropdown (Mega Menu) component.
 * 
 * Props:
 * - menuData: Array of menu items (e.g., [ { label, link, children: [...] } ])
 * - isOpen: Boolean indicating if the menu is visible
 * - onClose: Callback to close the menu (e.g., when clicking outside)
 * - activeLink: Current active path string (to highlight active items)
 */
export default function MegaMenu({
  menuData = [],
  isOpen = false,
  onClose,
  activeLink = ""
}) {
  const [activeParentIndex, setActiveParentIndex] = useState(null);
  const containerRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        onClose &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || menuData.length === 0) return null;

  // Determine if the currently active item has children to display in the second panel
  const activeParent = activeParentIndex !== null ? menuData[activeParentIndex] : null;
  const hasSubmenu = activeParent && activeParent.children && activeParent.children.length > 0;

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-0 mt-3 rounded-2xl shadow-2xl shadow-black/40 border border-white/10 overflow-hidden z-50 flex animate-fade-in"
      style={{ backgroundColor: "#0b1c39" }}
      onMouseLeave={() => setActiveParentIndex(null)}
    >
      {/* Accent strip */}
      <div
        className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, #E53935, #FF7043, #E53935)" }}
      />

      {/* Main Categories Panel */}
      <div className="w-[300px] p-4 flex flex-col gap-0.5 border-r border-white/5 pt-5">
        {menuData.map((item, index) => {
          const isHovered = activeParentIndex === index;
          const isCurrentActive = activeLink === item.link;
          const itemHasChildren = item.children && item.children.length > 0;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveParentIndex(index)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                isHovered
                  ? "bg-white/5 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <a
                href={item.link}
                onClick={(e) => {
                  if (itemHasChildren) {
                    // Prevent navigation if we want to toggle submenu first on mobile click
                    e.preventDefault();
                  } else {
                    handleLinkClick();
                  }
                }}
                className="text-[14px] font-medium tracking-wide flex-1 relative font-sans"
              >
                {item.label}
                {/* Active indicator underline */}
                {isCurrentActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-[#E53935] rounded-full animate-width-expand" />
                )}
              </a>

              {itemHasChildren && (
                <ChevronRight
                  className={`w-4 h-4 text-white/30 group-hover:text-[#E53935] group-hover:translate-x-0.5 transition-all ${
                    isHovered ? "rotate-90 md:rotate-0" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Submenu Panel (appears beside first panel) */}
      {hasSubmenu && (
        <div className="w-[260px] p-4 bg-black/15 flex flex-col gap-0.5 pt-5 animate-slide-right border-l border-white/5">
          <div className="px-3 mb-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#0891B2] block">
              Specifications
            </span>
          </div>

          {activeParent.children.map((subItem, index) => {
            const isSubActive = activeLink === subItem.link;

            return (
              <a
                key={index}
                href={subItem.link}
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[13.5px] font-medium font-sans tracking-wide transition-all duration-200 ${
                  isSubActive
                    ? "bg-[#E53935]/10 text-white border-l-2 border-[#E53935]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="relative">
                  {subItem.label}
                  {isSubActive && (
                    <span className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-white/40 rounded-full" />
                  )}
                </span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white/40" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
