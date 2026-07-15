import React, { useState } from "react";
import { ArrowLeft, Star, ShoppingCart, CheckCircle, ShieldCheck, Heart } from "lucide-react";
import Button from "../common/Button";

/**
 * Presentational component displaying detailed full view of a single product.
 * Features an interactive thumbnail image gallery, quantity counter, specs tabs, and reviews list.
 * 
 * Props:
 * - product: The single product object containing reviews and image gallery
 * - onBack: Callback function to go back to the listing view
 * - onAddToCart: Callback function when adding product to cart with quantity, receives (product, quantity)
 */
export default function ProductDetail({ product, onBack, onAddToCart }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // 'description' | 'specs'

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Product not found.</p>
        <Button onClick={onBack} className="mt-4" variant="outline">
          Back to Catalog
        </Button>
      </div>
    );
  }

  const { id, name, price, rating, reviewsCount, image, gallery = [image], description, features = [], reviews = [] } = product;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  // Render yellow stars based on rating
  const renderStars = (score) => {
    const stars = [];
    const floorRating = Math.floor(score);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= floorRating
              ? "text-amber-400 fill-amber-400"
              : i - score < 1 && i - score > 0
              ? "text-amber-400 fill-amber-400 opacity-50"
              : "text-gray-200"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm p-6 sm:p-10">
      {/* Header Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0d26] hover:text-[#e7212b] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Catalog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
        {/* Column 1: Image Gallery */}
        <div className="flex flex-col gap-4">
          {/* Main Large Image Container */}
          <div className="aspect-square w-full rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <img
              src={gallery[activeImageIndex] || image}
              alt={name}
              className="max-h-full max-w-full object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnails list */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto py-1">
              {gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square w-20 rounded-xl bg-gray-50 border flex items-center justify-center p-2.5 overflow-hidden transition-all cursor-pointer ${
                    activeImageIndex === index
                      ? "border-[#e7212b] ring-2 ring-red-500/10"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={imgUrl} alt={`${name} preview ${index}`} className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Column 2: Product info & configurations */}
        <div className="flex flex-col">
          {/* Rating, Badge & Status */}
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex items-center">{renderStars(rating)}</div>
              <span className="text-sm font-bold text-gray-800">{rating}</span>
              <span className="text-xs font-semibold text-gray-400">({reviewsCount} customer reviews)</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> In Stock
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b0d26] leading-tight mb-4">
            {name}
          </h1>

          {/* Pricing Row */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-100 flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Unit Price</span>
              <span className="text-2xl font-extrabold text-[#0b0d26] tracking-tight">{formattedPrice}</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Free Delivery & calibration certification included</span>
          </div>

          {/* Tabs for specifications vs description */}
          <div className="flex border-b border-gray-100 mb-5">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer mr-6 ${
                activeTab === "description"
                  ? "border-[#e7212b] text-[#e7212b]"
                  : "border-transparent text-gray-400 hover:text-gray-900"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === "specs"
                  ? "border-[#e7212b] text-[#e7212b]"
                  : "border-transparent text-gray-400 hover:text-gray-900"
              }`}
            >
              Key Specifications
            </button>
          </div>

          {/* Tab content */}
          <div className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
            {activeTab === "description" ? (
              <p>{description}</p>
            ) : (
              <ul className="space-y-2.5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quantity Controls & Add to Cart button */}
          <div className="flex items-stretch gap-4 pt-6 border-t border-gray-100 mt-auto">
            {/* Quantity +/- Box */}
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shrink-0">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2 hover:bg-gray-50 text-gray-600 font-bold transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="px-3 text-sm font-bold text-[#0b0d26] w-8 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2 hover:bg-gray-50 text-gray-600 font-bold transition-colors cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Reusable Action Button */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="lg"
              icon={ShoppingCart}
              className="flex-1"
            >
              Add {quantity} to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews list panel */}
      <div className="mt-16 pt-12 border-t border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-[#0b0d26] mb-8">
          Customer Reviews ({reviews.length})
        </h3>

        {reviews.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No reviews yet for this product.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-sm font-bold text-gray-800">{review.author}</h4>
                    <span className="text-[10px] font-semibold text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
