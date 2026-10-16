import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductCategoryData,
  getAllProductCategorySlugs,
} from "@/lib/product-categories";
import { getProductsByPath } from "@/lib/products";
import ProductCategoryTemplate from "@/components/v3/product/ProductCategoryTemplate";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return getAllProductCategorySlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getProductCategoryData(slug);

  if (!data) {
    return {
      title: "Product Solutions | Texas Technical Services",
    };
  }

  return {
    title: data.metaTitle || `${data.heroTitle} | Texas Technical Services`,
    description: data.metaDesc,
    alternates: {
      canonical: data.path,
    },
    openGraph: {
      title: `${data.heroTitle} | Texas Technical Services`,
      description: data.metaDesc,
      url: data.path,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.heroTitle} | Texas Technical Services`,
      description: data.metaDesc,
      images: ["/og-default.png"],
    },
    keywords: data.keywords,
  };
}

export default async function DynamicProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getProductCategoryData(slug);

  if (!data) {
    notFound();
  }

  const categoryPath = `/products/${slug.join("/")}/`;
  const products = getProductsByPath(categoryPath);

  return <ProductCategoryTemplate data={data} products={products} />;
}
