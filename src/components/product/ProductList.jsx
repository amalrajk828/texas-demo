import React from "react";
import ProductCard from "./ProductCard";
import { Package } from "lucide-react";

/**
 * Presentational component to render a grid list of Product Cards.
 * 
 * Props:
 * - products: Array of product objects
 * - onAddToCart: Callback function when Add to Cart is clicked
 * - onViewDetails: Callback function when a card is clicked
 */
export default function ProductList({ products = [], onAddToCart, onViewDetails }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e7212b] mb-4">
          <Package className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#0b0d26]">No Products Available</h3>
        <p className="text-gray-500 text-sm mt-1 max-w-xs mx-auto">
          We couldn't find any industrial products catalog. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        </div>
      ))}
    </div>
  );
}
