"use client";

import React, { useState } from "react";
// Import our newly created clean, reusable architecture components
// @ts-ignore
import Header from "../../src/components/common/Header";
// @ts-ignore
import Footer from "../../src/components/common/Footer";
// @ts-ignore
import BlogPage from "../../src/page-views/BlogPage";
// @ts-ignore
import ProductPage from "../../src/page-views/ProductPage";
import { ShoppingCart, Trash2, X, Check, ArrowRight } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function ComponentDemo() {
  const [currentTab, setCurrentTab] = useState<"blog" | "product">("product");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Manage Cart State globally (coordinates with both ProductPage and Header)
  const handleAddToCart = (product: any, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image,
        },
      ];
    });

    // Show visual confirmation toast
    setToastMessage(`Added ${quantity} x ${product.name} to your Cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Sum total cart items count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Sum total price
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartTotal);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#e7212b] selection:text-white">
      {/* Dynamic Header Component */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab: "blog" | "product") => setCurrentTab(tab)}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 bg-[#000000] blueprint-grid blueprint-dot-grid text-white text-sm font-semibold py-3 px-5 rounded-xl shadow-2xl border border-white/10 animate-fade-in">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Banner Showcase Info */}
      <section className="bg-gradient-to-br from-[#0B0D26] to-[#12163A] text-white py-12 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dot-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#e7212b]">
              Architecture Showcase
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Reusable React Components Demo
            </h1>
            <p className="text-gray-400 text-sm max-w-xl">
              This preview page coordinates states between our independent, reusable presentational components under <code className="text-white bg-white/10 px-1.5 py-0.5 rounded">/src</code>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Current Section:</span>
            <div className="bg-white/5 p-1 rounded-xl border border-white/10 flex">
              <button
                onClick={() => setCurrentTab("product")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  currentTab === "product"
                    ? "bg-[#e7212b] text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Products Catalog
              </button>
              <button
                onClick={() => setCurrentTab("blog")}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  currentTab === "blog"
                    ? "bg-[#e7212b] text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Engineering Blog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core View Area */}
      <main className="flex-grow">
        {currentTab === "product" ? (
          <ProductPage onAddToCart={handleAddToCart} />
        ) : (
          <BlogPage />
        )}
      </main>

      {/* Reusable Footer Component */}
      <Footer />

      {/* Shopping Cart Sidebar Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-modal="true" role="dialog">
          {/* Backdrop blur */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-gray-100 animate-slide-left">
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0b0d26] flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#e7212b]" />
                  Your Active Order ({cartCount})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0b0d26]">Your cart is empty</h4>
                      <p className="text-xs text-gray-400 mt-1 max-w-xs">
                        Configure equipment in the catalog to add items to your quote.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 pt-4 first:pt-0 items-center justify-between">
                        <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 p-2 shrink-0 flex items-center justify-center overflow-hidden">
                          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="flex-grow min-w-0 pr-2">
                          <h4 className="text-xs font-bold text-[#0b0d26] truncate">{item.name}</h4>
                          <p className="text-[11px] text-gray-400 font-semibold mt-1">
                            {item.quantity} x {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar Footer Pricing summary */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subtotal Quote</span>
                    <span className="text-lg font-extrabold text-[#0b0d26]">{formattedTotal}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    * Estimated total pricing for procurement requests. Custom discounts may apply upon final review.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleClearCart}
                      className="px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-red-500 transition-colors border border-gray-200 rounded-xl hover:bg-gray-100 cursor-pointer"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => alert(`Submitting quote request for ${cartCount} items valued at ${formattedTotal}!`)}
                      className="flex-1 px-4 py-2.5 text-xs font-bold bg-[#e7212b] hover:bg-[#c61922] text-white rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Submit Quote Inquiry
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
