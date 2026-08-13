"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      start = 2;
      end = maxVisible;
    } else if (currentPage >= totalPages - 2) {
      start = totalPages - maxVisible + 1;
      end = totalPages - 1;
    }

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");

    pages.push(totalPages);
    return pages;
  };

  const isMobileExtra = (page) =>
    page !== 1 && page !== totalPages && page !== currentPage && Math.abs(page - currentPage) > 1;

  return (
    <div className="flex items-center justify-center gap-1.5 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center justify-center gap-1 h-11 px-3.5 text-[13px] font-medium leading-none rounded-lg border border-gray-200 text-gray-500 hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Prev
      </button>

      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span
            key={`dots-${i}`}
            className="hidden sm:inline-flex items-center justify-center h-11 w-11 text-[13px] font-medium leading-none text-gray-500"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-11 w-11 min-w-[44px] text-[13px] font-medium leading-none rounded-lg transition-colors ${
              isMobileExtra(page) ? "hidden sm:inline-flex " : "inline-flex "
            }items-center justify-center ${
              currentPage === page
                ? "bg-[#e7212b] text-white border border-[#e7212b] shadow-md shadow-[#e7212b]/20"
                : "border border-gray-200 text-gray-500 hover:border-[#e7212b]/40 hover:text-[#e7212b]"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center justify-center gap-1 h-11 px-3.5 text-[13px] font-medium leading-none rounded-lg border border-gray-200 text-gray-500 hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        Next
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
