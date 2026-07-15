import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";
import Button from "../common/Button";

/**
 * Presentational component for a single product card in a list.
 * 
 * Props:
 * - product: Object containing { id, name, price, rating, reviewsCount, image }
 * - onAddToCart: Callback function when clicking Add to Cart
 * - onViewDetails: Callback function when clicking the card to view details
 */
export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  if (!product) return null;

  const { id, name, price, rating, reviewsCount, image } = product;

  // Format price beautifully
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);

  // Render yellow stars based on rating
  const renderStars = () => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= floorRating
              ? "text-amber-400 fill-amber-400"
              : i - rating < 1 && i - rating > 0
              ? "text-amber-400 fill-amber-400 opacity-50"
              : "text-gray-200"
          }`}
        />
      );
    }
    return stars;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
  };

  return (
    <div
      onClick={() => onViewDetails && onViewDetails(id)}
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 cursor-pointer h-full"
    >
      {/* Product Image and Overlay Actions */}
      <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Floating Quick View indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 bg-[#0b0d26]/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-[#e7212b]" />
            View Specifications
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Star Rating */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="flex items-center">{renderStars()}</div>
          <span className="text-[11px] font-semibold text-gray-400">({reviewsCount})</span>
        </div>

        {/* Product Title */}
        <h3 className="text-sm sm:text-base font-bold text-[#0b0d26] group-hover:text-[#e7212b] transition-colors duration-300 leading-snug line-clamp-2 mb-2 flex-1">
          {name}
        </h3>

        {/* Pricing and Action Button */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Price</span>
            <span className="text-base sm:text-lg font-extrabold text-[#0b0d26] tracking-tight">{formattedPrice}</span>
          </div>

          <Button
            onClick={handleAddToCart}
            variant="primary"
            size="sm"
            icon={ShoppingCart}
            className="rounded-xl shadow-none hover:shadow-md hover:shadow-red-500/10"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
