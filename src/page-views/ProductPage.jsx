import React, { useState } from "react";
import ProductList from "../components/product/ProductList";
import ProductDetail from "../components/product/ProductDetail";
import initialProducts from "../data/products.json";
import { Package } from "lucide-react";

/**
 * Container component for the Product Catalog section.
 * Handles state for catalog grid vs product specification sheet views.
 * 
 * Props:
 * - onAddToCart: Global callback prop to bubble up cart insertion events
 */
export default function ProductPage({ onAddToCart }) {
  const [products] = useState(initialProducts);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Find currently active product details
  const activeProduct = products.find((p) => p.id === selectedProductId);

  // Navigation handlers
  const handleViewProduct = (id) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product, quantity = 1) => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedProductId === null ? (
          /* LIST VIEW */
          <div className="space-y-10 animate-fade-in">
            {/* Header Text */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#e7212b] rounded-full text-xs font-semibold uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" /> Product Catalog
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b0d26] tracking-tight">
                High-Precision Systems & Components
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Browse our range of calibrated flow meters, industrial console setups, and variable frequency drives engineered for high-availability production plants.
              </p>
            </div>

            {/* List presentation */}
            <ProductList
              products={products}
              onAddToCart={(product) => handleAddToCart(product, 1)}
              onViewDetails={handleViewProduct}
            />
          </div>
        ) : (
          /* DETAIL VIEW */
          <div className="animate-fade-in">
            <ProductDetail
              product={activeProduct}
              onBack={handleBackToList}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}
