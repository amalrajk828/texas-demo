import React from "react";

/**
 * CategoryFilter
 * Renders pill buttons for "All" + each unique category in posts.
 *
 * Props:
 * - posts: full array of blog post objects
 * - selected: currently active category string ("All" or a category name)
 * - onSelect: callback(category) fired when a pill is clicked
 */
export default function CategoryFilter({ posts = [], selected = "All", onSelect }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];

  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((cat) => (
        <button
          key={cat}
          id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
          onClick={() => onSelect && onSelect(cat)}
          className={`px-4 py-2 rounded-full text-[12.5px] font-semibold transition-all duration-200 border ${
            selected === cat
              ? "bg-[#e7212b] text-white border-[#e7212b] shadow-sm"
              : "bg-white text-[#0B0D26] border-gray-200 hover:border-[#e7212b] hover:text-[#e7212b]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
