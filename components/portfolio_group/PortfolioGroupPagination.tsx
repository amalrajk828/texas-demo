import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioGroupPagination({
  currentPage,
  totalPages,
  basePath,
  totalItems,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  totalItems: number;
}) {
  if (totalPages <= 1) {
    return (
      <p className="text-center text-[12px] text-gray-400 mt-6">
        {totalItems} portfolio item{totalItems !== 1 ? "s" : ""}
      </p>
    );
  }

  const prevHref =
    currentPage - 1 === 1
      ? basePath + "/"
      : `${basePath}/page/${currentPage - 1}/`;

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {currentPage > 1 ? (
          <Link
            href={prevHref}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Prev
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-gray-50 text-[13px] font-semibold text-gray-300 cursor-not-allowed">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Prev
          </span>
        )}

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => {
            const p = i + 1;
            const href = p === 1 ? basePath + "/" : `${basePath}/page/${p}/`;
            return p === currentPage ? (
              <span
                key={p}
                className="w-9 h-9 rounded-lg bg-[#e7212b] text-white text-[13px] font-bold flex items-center justify-center"
              >
                {p}
              </span>
            ) : (
              <Link
                key={p}
                href={href}
                className="w-9 h-9 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200 flex items-center justify-center"
              >
                {p}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={`${basePath}/page/${currentPage + 1}/`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-gray-50 text-[13px] font-semibold text-gray-300 cursor-not-allowed">
            Next <ArrowRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      <p className="text-center text-[12px] text-gray-400 mt-6">
        {totalItems} portfolio item{totalItems !== 1 ? "s" : ""}
        {totalPages > 1 ? ` — Page ${currentPage} of ${totalPages}` : ""}
      </p>
    </>
  );
}
