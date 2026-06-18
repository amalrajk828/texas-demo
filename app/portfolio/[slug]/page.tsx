import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductDetailHero from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";

type Params = Promise<{ slug: string }>;

const categorySlugMap: Record<string, string> = {
  "Industrial Sensors": "sensors",
  "PLC": "plc",
  "ICONICS": "iconics",
  "GOT": "got",
  "VFD": "frequency-inverter-vfd",
  "AC Servos": "acservos",
};

const tagMap: Record<string, string> = {
  "Industrial Sensors": "SICK Industrial Sensors",
  "PLC": "Mitsubishi Electric PLC",
  "ICONICS": "Mitsubishi Electric HMI / SCADA",
  "GOT": "Mitsubishi Electric HMI",
  "VFD": "Mitsubishi Electric VFD",
  "AC Servos": "Mitsubishi Electric AC Servo",
};

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} - Texas Technical Services`,
    description: product.description ? product.description.slice(0, 155) + "..." : "",
  };
}

export default async function PortfolioDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const categorySlug = categorySlugMap[product.category] || "";
  const displayTag = tagMap[product.category] || "Texas Technical Services Product";

  // Get all products in the same category as related products
  const categoryProducts = products.filter((p) => p.category === product.category);

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* 1. Hero Section */}
      <ProductDetailHero
        product={{
          name: product.name,
          tag: displayTag,
          image: product.image || "",
          description: product.description || "",
          externalLink: product.externalLink || "",
          downloadLink: product.downloadLink || null,
        }}
        category={categorySlug}
        categoryLabel={product.category}
        seriesBadge={product.series}
      />

      {/* 2. Description Section */}
      {product.description && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-10">
            <p className="text-[#555770] text-base sm:text-[16px] leading-[1.8] text-justify font-normal">
              {product.description}
            </p>
          </div>
        </section>
      )}

      {/* 3. Info Columns */}
      {product.keyApplications && product.keyBenefits && product.industries && (
        <ProductInfoColumns
          keyApplications={product.keyApplications}
          keyBenefits={product.keyBenefits}
          industries={product.industries}
        />
      )}

      {/* 4. Inquiry Form Section */}
      <ProductInquiryForm productName={product.name} category={categorySlug} />

      {/* 5. Related Products */}
      <RelatedProducts
        currentSlug={product.slug}
        products={categoryProducts}
        category={categorySlug}
        title="Related Products"
      />
    </div>
  );
}
