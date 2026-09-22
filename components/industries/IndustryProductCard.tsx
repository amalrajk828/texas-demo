import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IndustryProductCardMotion from "./IndustryProductCardMotion";
import type { CategoryColors, IndustryProduct } from "./types";

export default function IndustryProductCard({
  product,
  categoryColors,
  animationDelay = 0,
  imageHeight = "h-44",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  product: IndustryProduct;
  categoryColors: CategoryColors;
  animationDelay?: number;
  imageHeight?: "h-44" | "h-52";
  sizes?: string;
}) {
  return (
    <IndustryProductCardMotion delay={animationDelay}>
      <div
        className="group relative bg-white border border-gray-200/80 hover:border-[#e7212b]/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Link
          href={`/portfolio/${product.slug}/`}
          className="absolute inset-0 z-10"
          aria-label={product.name}
        />
        <div className={`relative ${imageHeight} overflow-hidden bg-gray-100 shrink-0`}>
          <Image
            src={product.image}
            alt={`${product.name} — ${product.brand}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            sizes={sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center text-[9px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                categoryColors[product.category] ?? "bg-black/60 text-white border-white/20"
              }`}
            >
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <p className="text-[11px] font-semibold text-gray-400 mb-1.5 tracking-wide uppercase">{product.brand}</p>
          <h3 className="text-[15px] font-bold text-[#0B0D26] group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-[13px] leading-relaxed line-clamp-3 mb-4 flex-1">
            {product.desc}
          </p>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <span className="inline-flex items-center gap-1.5 text-[#e7212b] text-[12px] font-semibold group-hover:gap-2.5 transition-all duration-200">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
            <span className="w-4 h-px bg-[#0891B2]/30 group-hover:w-10 transition-all duration-300" />
          </div>
        </div>

        <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </IndustryProductCardMotion>
  );
}
