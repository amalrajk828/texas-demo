import IndustryProductCard from "./IndustryProductCard";
import type { CategoryColors, IndustryProduct } from "./types";

export default function IndustryProductsGrid({
  title,
  products,
  categoryColors,
  gridLayout = "3col",
}: {
  title: string;
  products: IndustryProduct[];
  categoryColors: CategoryColors;
  gridLayout?: "3col" | "2col";
}) {
  const isTwoCol = gridLayout === "2col";
  const gridClass = isTwoCol
    ? "grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-4xl lg:mx-auto"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

  const cardImageHeight = isTwoCol ? "h-52" : "h-44";
  const cardSizes = isTwoCol
    ? "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 640px"
    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <section className="bg-[#f4f5f8] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                Our Product Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
              {title}
            </h2>
          </div>
          <span className="text-gray-400 text-[12px] shrink-0 pb-1">
            {products.length} products available
          </span>
        </div>

        <div className={gridClass}>
          {products.map((product, i) => (
            <IndustryProductCard
              key={product.slug}
              product={product}
              categoryColors={categoryColors}
              animationDelay={isTwoCol ? i : i % 3}
              imageHeight={cardImageHeight}
              sizes={cardSizes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
