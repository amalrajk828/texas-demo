import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, type Product } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const CATEGORY_MAP: Record<string, string> = {
  "analyzers": "Analyzers",
  "cems": "CEMS",
  "dust-analyzer": "Dust Analyzers",
  "gas-analyzers": "Gas Analyzers",
  "flow-meters": "Flow Meters",
  "liquid-flow-meters": "Liquid Flow Meters",
  "flare-meters": "Flare Flow Meters",
  "gas-flow-meters": "Gas Flow Meters",
  "field-instruments": "Field Instruments",
  "industrial-automation": "Industrial Automation",
  "control-room-interior-and-console": "Control Room Interior & Console",
  "plc": "PLC",
  "iconics": "ICONICS",
  "got": "GOT",
  "acservos": "AC Servos",
  "sensors": "Industrial Sensors",
  "custody-metering-solutions": "Custody Metering Solutions",
  "frequency-inverter-vfd": "Frequency Inverters (VFD)",
};

const INDUSTRY_TITLES: Record<string, string> = {
  "cement": "Cement",
  "lng": "LNG",
  "metal-steel": "Metal & Steel",
  "oil-gas": "Oil & Gas",
  "petrochemicals": "Petrochemicals",
  "power-plant": "Power Plant",
  "refinery": "Refinery",
  "water-treatment": "Water Treatment",
};

const STANDALONE_TITLES: Record<string, string> = {
  "construction": "Construction",
  "manufacture": "Manufacture",
  "factory": "Factory",
};

interface CategoryLink {
  href: string;
  label: string;
  imageUrl: string;
  description: string;
  count: number;
}

function findCategoryImage(category: string): string {
  return products.find(p => p.category === category && p.image)?.image ?? "";
}

function findIndustryImage(industrySlug: string): string {
  const parts = industrySlug.split("-");
  return products.find(p =>
    (p.industries ?? []).some(ind =>
      parts.some(part => ind.toLowerCase().includes(part))
    ) && p.image
  )?.image ?? "";
}

type FilterFn = (product: Product) => boolean;

function getFilter(slug: string[]): { filter: FilterFn; title: string; breadcrumb: string } | null {
  const slugWithoutPage = slug.filter(s => s !== "page" && !/^\d+$/.test(s));

  if (slugWithoutPage.length >= 2 && slugWithoutPage[0] === "industries") {
    const industry = slugWithoutPage[1];
    const title = INDUSTRY_TITLES[industry];
    if (!title) return null;
    const parts = industry.split("-");
    return {
      filter: (p) => (p.industries ?? []).some(ind =>
        parts.some(part => ind.toLowerCase().includes(part))
      ),
      title: `${title} — Portfolio`,
      breadcrumb: title,
    };
  }

  if (slugWithoutPage.length >= 2 && slugWithoutPage[0] === "products") {
    const segments = slugWithoutPage.slice(1);
    for (let i = segments.length - 1; i >= 0; i--) {
      const candidate = segments.slice(i).join("-");
      const matchedCategory = CATEGORY_MAP[candidate];
      if (matchedCategory) {
        return {
          filter: (p) => p.category === matchedCategory,
          title: `${matchedCategory} — Portfolio`,
          breadcrumb: matchedCategory,
        };
      }
    }
    return null;
  }

  if (slugWithoutPage.length === 1) {
    const key = slugWithoutPage[0];
    if (STANDALONE_TITLES[key]) {
      return {
        filter: () => true,
        title: `${STANDALONE_TITLES[key]} — Portfolio`,
        breadcrumb: STANDALONE_TITLES[key],
      };
    }
    if (CATEGORY_MAP[key]) {
      return {
        filter: (p) => p.category === CATEGORY_MAP[key],
        title: `${CATEGORY_MAP[key]} — Portfolio`,
        breadcrumb: CATEGORY_MAP[key],
      };
    }
    return null;
  }

  return null;
}

function getPageNumber(slug: string[]): number {
  const pageIdx = slug.indexOf("page");
  if (pageIdx !== -1 && pageIdx + 1 < slug.length) {
    return parseInt(slug[pageIdx + 1], 10) || 1;
  }
  return 1;
}

function buildBaseSlug(slug: string[]): string[] {
  return slug.filter((s, i) => !(s === "page" || /^\d+$/.test(s)));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return {
      title: "Portfolio Categories | Texas Technical Services",
      description: "Browse our portfolio by industry, product category, or application area.",
    };
  }
  const result = getFilter(slug);
  if (!result) return {};
  return {
    title: result.title,
    description: `Portfolio items in ${result.breadcrumb} — browse our range of industrial products and solutions.`,
    alternates: { canonical: `https://texastechserv.com/portfolio_group/${slug.join("/")}/` },
  };
}

export default async function PortfolioGroupPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const industryLinks: CategoryLink[] = Object.entries(INDUSTRY_TITLES).map(([key, title]) => {
      const count = products.filter(p =>
        (p.industries ?? []).some(ind =>
          key.split("-").some(part => ind.toLowerCase().includes(part))
        )
      ).length;
      return {
        href: `/portfolio_group/industries/${key}/`,
        label: title,
        imageUrl: findIndustryImage(key),
        description: `${count} portfolio item${count !== 1 ? "s" : ""} in the ${title} sector`,
        count,
      };
    });

    const standaloneLinks: CategoryLink[] = Object.entries(STANDALONE_TITLES).map(([key, title]) => ({
      href: `/portfolio_group/${key}/`,
      label: title,
      imageUrl: products.find(p => p.image)?.image ?? "",
      description: `Browse all ${products.length} portfolio items`,
      count: products.length,
    }));

    const productLinks: CategoryLink[] = Object.keys(CATEGORY_MAP).map(key => {
      const category = CATEGORY_MAP[key];
      const count = products.filter(p => p.category === category).length;
      return {
        href: `/portfolio_group/products/${key}/`,
        label: category,
        imageUrl: findCategoryImage(category),
        description: `Explore ${count} ${category} product${count !== 1 ? "s" : ""}`,
        count,
      };
    });

    const allLinks: CategoryLink[] = [...industryLinks, ...standaloneLinks, ...productLinks];

    return (
      <main>
        <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 mb-8 text-[12px] text-white/30">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Portfolio Group</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">Portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
                Portfolio <em className="not-italic text-[#e7212b]">Categories</em>
              </h1>
              <p className="text-white/50 text-base sm:text-[17px] leading-relaxed mb-8 max-w-xl">
                Browse our product portfolio by industry, product category, or application area.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group rounded-2xl border border-white/[0.08] bg-white/[0.06] overflow-hidden flex flex-col hover:border-[#e7212b]/35 hover:shadow-xl hover:shadow-[#e7212b]/10 transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-[#0B0D26] overflow-hidden flex items-center justify-center">
                    {link.imageUrl ? (
                      <Image src={link.imageUrl} alt={link.label} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0B0D26] to-[#1a1d3e] flex items-center justify-center">
                        <span className="text-[56px] font-black text-white/10 group-hover:text-[#e7212b]/20 group-hover:scale-110 transition-all duration-500 select-none">
                          {link.label[0]}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e7212b] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold text-white/70 bg-[#0B0D26]/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">{link.count} item{link.count !== 1 ? "s" : ""}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-10 transition-all duration-300" />
                    <h3 className="text-[15px] font-bold text-white leading-snug mb-1.5">{link.label}</h3>
                    <p className="text-white/40 text-[12px] leading-relaxed flex-1">{link.description}</p>
                    <div className="mt-3 pt-3 border-t border-white/[0.08] text-[#e7212b] text-[12px] font-semibold flex items-center gap-1">
                      Browse
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  const result = getFilter(slug);
  if (!result) notFound();

  const pageNum = getPageNumber(slug);
  const filtered = products.filter(result.filter);
  const PER_PAGE = 12;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const startIdx = (pageNum - 1) * PER_PAGE;
  const pageItems = filtered.slice(startIdx, startIdx + PER_PAGE);

  const baseSegments = buildBaseSlug(slug);
  const basePath = `/portfolio_group/${baseSegments.join("/")}`;

  return (
    <main>
      <section className="relative bg-[#0B0D26] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)" }} />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 mb-8 text-[12px] text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio_group/" className="hover:text-white/60 transition-colors">Portfolio Group</Link>
            <span>/</span>
            <span className="text-white/60">{result.breadcrumb}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-px bg-[#e7212b]" />
              <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">{result.breadcrumb}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
              {result.breadcrumb}
              <em className="not-italic text-[#e7212b]"> Portfolio</em>
            </h1>
            <p className="text-white/50 text-base sm:text-[17px] leading-relaxed max-w-xl">
              {filtered.length} portfolio item{filtered.length !== 1 ? "s" : ""} in {result.breadcrumb}
            </p>
          </div>
        </div>
      </section>

      {pageItems.length > 0 ? (
        <section className="bg-[#f4f5f8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {pageItems.map((product) => (
                <Link key={product.slug} href={`/portfolio/${product.slug}/`} className="group rounded-2xl border border-[#e8eaf0] bg-white overflow-hidden flex flex-col hover:border-[#e7212b]/25 hover:shadow-xl hover:shadow-[#e7212b]/6 transition-all duration-300">
                  <div className="relative aspect-[16/10] bg-[#0B0D26] overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <span className="text-[72px] font-black text-white/10 group-hover:text-[#e7212b]/20 group-hover:scale-110 transition-all duration-500 select-none">01</span>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold text-white/70 bg-[#0B0D26]/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full tracking-[1.5px] uppercase">{product.category}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="w-7 h-[2px] bg-[#e7212b] rounded-full mb-3 group-hover:w-10 transition-all duration-300" />
                    <h3 className="text-[15px] font-bold text-[#0B0D26] leading-snug mb-2">{product.name}</h3>
                    {product.description && <p className="text-gray-500 text-[13px] leading-[1.7] flex-1 line-clamp-3">{product.description}</p>}
                    <div className="mt-4 pt-3 border-t border-[#e8eaf0] text-[#e7212b] text-[12px] font-semibold flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                {pageNum > 1 ? (
                  <Link href={`${basePath}/${pageNum - 1 === 1 ? "" : `page/${pageNum - 1}/`}`.replace(/\/+$/, "") + "/"} className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200">
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
                    return p === pageNum ? (
                      <span key={p} className="w-9 h-9 rounded-lg bg-[#e7212b] text-white text-[13px] font-bold flex items-center justify-center">{p}</span>
                    ) : (
                      <Link key={p} href={href} className="w-9 h-9 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200 flex items-center justify-center">{p}</Link>
                    );
                  })}
                </div>
                {pageNum < totalPages ? (
                  <Link href={`${basePath}/page/${pageNum + 1}/`} className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-white text-[13px] font-semibold text-[#0B0D26] hover:border-[#e7212b]/40 hover:text-[#e7212b] transition-all duration-200">
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-[#e8eaf0] bg-gray-50 text-[13px] font-semibold text-gray-300 cursor-not-allowed">
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            )}

            <p className="text-center text-[12px] text-gray-400 mt-6">
              {filtered.length} portfolio item{filtered.length !== 1 ? "s" : ""}
              {totalPages > 1 ? ` — Page ${pageNum} of ${totalPages}` : ""}
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-[#f4f5f8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-white border border-[#e8eaf0] rounded-2xl p-12">
              <h3 className="text-[18px] font-bold text-[#0B0D26] mb-2">No portfolio items found</h3>
              <p className="text-gray-500 text-[14px]">There are no items in this category yet.</p>
              <Link href="/portfolio/" className="inline-flex items-center gap-2 mt-6 text-[#e7212b] text-[13px] font-semibold hover:underline">
                Browse all portfolio items <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
