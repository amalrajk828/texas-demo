import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import {
  CATEGORY_MAP,
  INDUSTRY_TITLES,
  STANDALONE_TITLES,
  PER_PAGE,
  findCategoryImage,
  findIndustryImage,
  getFilter,
  getPageNumber,
  buildBaseSlug,
  type CategoryLink,
} from "@/lib/portfolio-group";
import PortfolioGroupHero from "@/components/portfolio_group/PortfolioGroupHero";
import PortfolioGroupCategoryGrid from "@/components/portfolio_group/PortfolioGroupCategoryGrid";
import PortfolioGroupProductGrid from "@/components/portfolio_group/PortfolioGroupProductGrid";
import PortfolioGroupPagination from "@/components/portfolio_group/PortfolioGroupPagination";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return {
      title: "Portfolio Categories | Texas Technical Services",
      description:
        "Browse our portfolio by industry, product category, or application area.",
    };
  }
  const result = getFilter(slug);
  if (!result) return {};
  return {
    title: result.title,
    description: `Portfolio items in ${result.breadcrumb} — browse our range of industrial products and solutions.`,
    alternates: { canonical: `/portfolio_group/${slug.join("/")}/` },
  };
}

export default async function PortfolioGroupPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    const industryLinks: CategoryLink[] = Object.entries(INDUSTRY_TITLES).map(
      ([key, title]) => {
        const count = products.filter((p) =>
          (p.industries ?? []).some((ind) =>
            key.split("-").some((part) => ind.toLowerCase().includes(part)),
          ),
        ).length;
        return {
          href: `/portfolio_group/industries/${key}/`,
          label: title,
          imageUrl: findIndustryImage(key),
          description: `${count} portfolio item${count !== 1 ? "s" : ""} in the ${title} sector`,
          count,
        };
      },
    );

    const standaloneLinks: CategoryLink[] = Object.entries(STANDALONE_TITLES).map(
      ([key, title]) => ({
        href: `/portfolio_group/${key}/`,
        label: title,
        imageUrl: products.find((p) => p.image)?.image ?? "",
        description: `Browse all ${products.length} portfolio items`,
        count: products.length,
      }),
    );

    const productLinks: CategoryLink[] = Object.keys(CATEGORY_MAP).map((key) => {
      const category = CATEGORY_MAP[key];
      const count = products.filter((p) => p.category === category).length;
      return {
        href: `/portfolio_group/products/${key}/`,
        label: category,
        imageUrl: findCategoryImage(category),
        description: `Explore ${count} ${category} product${count !== 1 ? "s" : ""}`,
        count,
      };
    });

    const allLinks: CategoryLink[] = [
      ...industryLinks,
      ...standaloneLinks,
      ...productLinks,
    ];

    return (
      <main>
        <PortfolioGroupHero
          breadcrumb="Portfolio Group"
          eyebrow="Portfolio"
          titleHighlight="Portfolio "
          titleSuffix="Categories"
          description="Browse our product portfolio by industry, product category, or application area."
        />
        <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pb-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <PortfolioGroupCategoryGrid links={allLinks} />
          </div>
        </section>
      </main>
    );
  }

  const result = getFilter(slug);
  if (!result) notFound();

  const pageNum = getPageNumber(slug);
  const filtered = products.filter(result.filter);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const startIdx = (pageNum - 1) * PER_PAGE;
  const pageItems = filtered.slice(startIdx, startIdx + PER_PAGE);

  const baseSegments = buildBaseSlug(slug);
  const basePath = `/portfolio_group/${baseSegments.join("/")}`;

  return (
    <main>
      <PortfolioGroupHero
        breadcrumb="Portfolio Group"
        breadcrumbHref="/portfolio_group/"
        eyebrow={result.breadcrumb}
        titleHighlight={result.breadcrumb}
        titleSuffix=" Portfolio"
        description={`${filtered.length} portfolio item${filtered.length !== 1 ? "s" : ""} in ${result.breadcrumb}`}
      />

      {pageItems.length > 0 ? (
        <section className="bg-[#f4f5f8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <PortfolioGroupProductGrid products={pageItems} />
            <PortfolioGroupPagination
              currentPage={pageNum}
              totalPages={totalPages}
              basePath={basePath}
              totalItems={filtered.length}
            />
          </div>
        </section>
      ) : (
        <section className="bg-[#f4f5f8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-white border border-[#e8eaf0] rounded-2xl p-12">
              <h3 className="text-[18px] font-bold text-[#0B0D26] mb-2">
                No portfolio items found
              </h3>
              <p className="text-gray-500 text-[14px]">
                There are no items in this category yet.
              </p>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-2 mt-6 text-[#e7212b] text-[13px] font-semibold hover:underline"
              >
                Browse all portfolio items{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
