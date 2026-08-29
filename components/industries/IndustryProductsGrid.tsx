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
    <section className="bg-[#f8f9fb] relative overflow-hidden py-20 lg:py-24 border-t border-gray-200/60">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(0,0,0,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(0,0,0,0.02) 40px)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,33,43,0.04) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[2.5px] uppercase">
                Our Product Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B0D26]">
              {title}
            </h2>
          </div>
          <span className="text-gray-500 text-[12px] font-medium shrink-0 pb-1">
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
