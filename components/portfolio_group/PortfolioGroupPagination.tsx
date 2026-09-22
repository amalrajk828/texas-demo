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
      <p className="text-center text-[13px] text-white/70 mt-6">
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
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-white/[0.15] bg-white/[0.12] backdrop-blur-xl text-[13px] font-semibold text-white hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Prev
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm text-[13px] font-semibold text-white/30 cursor-not-allowed">
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
                className="min-w-[44px] min-h-[44px] rounded-lg bg-[#e7212b] text-white text-[13px] font-bold flex items-center justify-center"
              >
                {p}
              </span>
            ) : (
              <Link
                key={p}
                href={href}
                className="min-w-[44px] min-h-[44px] rounded-lg border border-white/[0.15] bg-white/[0.12] backdrop-blur-xl text-[13px] font-semibold text-white hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200 flex items-center justify-center"
              >
                {p}
              </Link>
            );
          })}
        </div>

        {currentPage < totalPages ? (
          <Link
            href={`${basePath}/page/${currentPage + 1}/`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-white/[0.15] bg-white/[0.12] backdrop-blur-xl text-[13px] font-semibold text-white hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm text-[13px] font-semibold text-white/30 cursor-not-allowed">
            Next <ArrowRight className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      <p className="text-center text-[13px] text-white/70 mt-6">
        {totalItems} portfolio item{totalItems !== 1 ? "s" : ""}
        {totalPages > 1 ? ` — Page ${currentPage} of ${totalPages}` : ""}
      </p>
    </>
  );
}
