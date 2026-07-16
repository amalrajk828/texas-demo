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
        className="group relative bg-white/[0.10] backdrop-blur-xl border border-white/[0.12] hover:border-[#e7212b]/40 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_4px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_40px_rgba(231,33,43,0.12)] flex flex-col"
        style={{ "--tw-shadow-color": "rgba(231,33,43,0.10)" } as React.CSSProperties}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
          style={{ background: "radial-gradient(circle, rgba(231,33,43,0.16) 0%, transparent 70%)" }}
        />
        <Link
          href={`/portfolio/${product.slug}/`}
          className="absolute inset-0 z-10"
          aria-label={product.name}
        />
        <div className={`relative ${imageHeight} overflow-hidden bg-[#0B0D26] shrink-0`}>
          <Image
            src={product.image}
            alt={`${product.name} — ${product.brand}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            sizes={sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center text-[9px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                categoryColors[product.category] ?? "bg-white/10 text-white/60 border-white/15"
              }`}
            >
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <p className="text-[11px] text-white/70 mb-1.5 tracking-wide">{product.brand}</p>
          <h3 className="text-[15px] font-medium text-white group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-white/80 text-[13px] leading-relaxed line-clamp-3 mb-4 flex-1">
            {product.desc}
          </p>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/40">
            <span className="inline-flex items-center gap-1.5 text-[#e7212b] text-[12px] font-medium group-hover:gap-2.5 transition-all duration-200">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
            <span className="w-4 h-px bg-[#e7212b]/20 group-hover:w-10 transition-all duration-300" />
          </div>
        </div>

        <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </IndustryProductCardMotion>
  );
}
