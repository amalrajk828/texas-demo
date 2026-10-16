import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProduct,
  getAllProductSlugs,
  products,
} from "@/lib/products";
import ProductDetailTemplate from "@/components/v3/portfolio/ProductDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Hardware | Texas Technical Services",
    };
  }

  const desc =
    product.paragraphs?.[0] ||
    `${product.name} from ${product.brand} — precision ${product.category} for industrial applications.`;

  return {
    title: `${product.name} — ${product.brand} | Texas Technical Services`,
    description: desc,
    keywords: [
      product.name,
      product.brand,
      product.category,
      "industrial automation Kuwait",
      "flow measurement GCC",
    ],
    alternates: {
      canonical: `/portfolio/${slug}/`,
    },
    openGraph: {
      title: `${product.name} — ${product.brand}`,
      description: desc,
      url: `/portfolio/${slug}/`,
      images: [
        {
          url: product.heroImage || "/og-default.png",
          width: 1200,
          height: 630,
          alt: `${product.name} hardware`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${product.brand}`,
      description: desc,
      images: [product.heroImage || "/og-default.png"],
    },
  };
}

export default async function DynamicProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  // Find related products in the same category
  const relatedProducts = products
    .filter(
      (p) =>
        p.category?.toLowerCase() === product.category?.toLowerCase() &&
        p.slug !== product.slug
    )
    .slice(0, 4);

  // If fewer than 4, fill with other products
  if (relatedProducts.length < 4) {
    const extra = products
      .filter(
        (p) =>
          p.slug !== product.slug &&
          !relatedProducts.some((r) => r.slug === p.slug)
      )
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...extra);
  }

  return (
    <ProductDetailTemplate
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
