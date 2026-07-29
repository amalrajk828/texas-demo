import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export default function PortfolioGroupProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/portfolio/${product.slug}/`}
      className="group rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden flex items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-[72px] font-black text-white/10 group-hover:text-[#e7212b]/20 group-hover:scale-110 transition-all duration-500 select-none">
            01
          </span>
        )}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold text-white/70 bg-[#000000] blueprint-grid blueprint-dot-grid/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">
            {product.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-10 transition-all duration-300" />
        <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-gray-500 text-[13px] leading-[1.7] flex-1 line-clamp-3">
            {product.description}
          </p>
        )}
        <div className="mt-4 pt-3 border-t border-[#e8eaf0] text-[#e7212b] text-[12px] font-semibold flex items-center gap-1">
          View Details
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
