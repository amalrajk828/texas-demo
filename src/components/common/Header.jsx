import React, { useState } from "react";
import { BookOpen, ShoppingCart, Cpu, Menu, X, ArrowRight } from "lucide-react";

/**
 * Responsive navigation Header component.
 * 
 * Props:
 * - currentTab: 'blog' | 'product'
 * - onTabChange: Callback function when tab changes
 * - cartCount: Total items in the shopping cart
 * - onCartClick: Callback when clicking the cart icon
 */
export default function Header({
  currentTab = "blog",
  onTabChange,
  cartCount = 0,
  onCartClick
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    if (onTabChange) onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleTabClick("product")}>
            <div className="w-10 h-10 rounded-xl bg-[#e7212b] flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#0b0d26] tracking-tight leading-tight group-hover:text-[#e7212b] transition-colors duration-200">
                TEXAS
              </span>
              <span className="text-[10px] font-semibold text-gray-400 tracking-[0.15em] leading-none uppercase">
                Technical Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleTabClick("product")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                currentTab === "product"
                  ? "bg-gray-100 text-[#e7212b]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => handleTabClick("blog")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                currentTab === "blog"
                  ? "bg-gray-100 text-[#e7212b]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Blog Posts
            </button>
          </nav>

          {/* Right Action Area (Cart & Mobile menu button) */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-[#e7212b] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#e7212b] text-[10px] font-bold text-white ring-2 ring-white animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-inner animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <button
              onClick={() => handleTabClick("product")}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                currentTab === "product"
                  ? "bg-red-50 text-[#e7212b]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleTabClick("blog")}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                currentTab === "blog"
                  ? "bg-red-50 text-[#e7212b]"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>Blog Posts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
