import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

// ICONICS Product Data Array
const iconicsProducts = [
  {
    id: 1,
    name: "GENESIS64",
    slug: "genesis64",
    tag: "ICONICS SCADA & HMI",
    image: "/images/iconics/GENESIS64.webp",
    description: "GENESIS64 is a 64-bit, web-enabled SCADA and HMI software suite from ICONICS, designed for real-time visualization, monitoring, and control of industrial processes. Built on a modern, scalable architecture, GENESIS64 provides advanced graphics, alarm management, historical data logging, and analytics. It supports seamless integration with PLCs, DCS, and field devices, making it suitable for industrial, infrastructure, and energy applications.",
    keyApplications: [
      "Oil & gas production facilities and refineries",
      "Power generation, water, and utility plants",
      "SCADA systems for pipelines, tank farms, and terminals",
      "Manufacturing plants and factories",
      "Building and infrastructure management systems",
      "Centralized control rooms and remote monitoring systems"
    ],
    keyBenefits: [
      "High-performance 64-bit SCADA and HMI platform",
      "Advanced real-time visualization and dashboards",
      "Integrated alarm management and historical trending",
      "Scalable architecture for small systems to large plants",
      "Seamless connectivity with PLCs, DCS, and OPC UA devices",
      "Secure, web-enabled access for operators and engineers"
    ],
    industries: [
      "Oil & Gas",
      "Power and Utilities",
      "Manufacturing Plants and Factories",
      "Infrastructure and Smart Facilities",
      "EPC Projects and System Integrators"
    ],
    externalLink: "https://iconics.com/Products/GENESIS64",
    downloadLink: null
  }
];

// Related PLC Products to suggest
const relatedPlcProducts: Product[] = [
  {
    id: 1,
    name: "MELSEC iQ-R Series",
    slug: "melsec-iq-r-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    description: "The MELSEC iQ-R Series is Mitsubishi Electric's next-generation modular PLC platform designed for advanced and large-scale industrial automation."
  },
  {
    id: 2,
    name: "MELSEC-Q Series",
    slug: "melsec-q-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-Q-Series-.webp",
    description: "The MELSEC-Q Series is a Mitsubishi Electric modular PLC platform designed for medium to large-scale industrial automation systems."
  }
];

// Statically pre-render routes at build time
export async function generateStaticParams() {
  return iconicsProducts.map((p) => ({
    slug: p.slug,
  }));
}

// Generate page metadata dynamically
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = iconicsProducts.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/iconics/${product.slug}/` },
    openGraph: {
      title: `${product.name} | ICONICS SCADA & HMI`,
      description: product.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/iconics/${product.slug}/`,
    },
  };
}

export default async function IconicsDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = iconicsProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* 1. Hero Section */}
      <ProductDetailHero product={product as ProductDetail} category="iconics" categoryLabel="ICONICS" />

      {/* 2. Description Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-10">
          <p className="text-[#555770] text-base sm:text-[16px] leading-[1.8] text-justify font-normal">
            {product.description}
          </p>
        </div>
      </section>

      {/* 3. Three Column Info Section */}
      <ProductInfoColumns
        keyApplications={product.keyApplications}
        keyBenefits={product.keyBenefits}
        industries={product.industries}
      />

      {/* 4. Action Buttons Row */}
      <section className="bg-white py-8 border-b border-[#E8E8F0] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-4 items-center justify-center">
          <a
            href={product.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-[#F5821F] text-[#F5821F] hover:bg-[#F5821F] hover:text-white font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm"
          >
            For More Detail
          </a>
          {product.downloadLink && (
            <a
              href={product.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F5821F] text-white hover:bg-[#e07214] font-semibold rounded-[6px] px-[28px] py-[12px] transition-colors duration-200 text-sm shadow-md"
            >
              Download Datasheet
            </a>
          )}
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <ProductInquiryForm productName={product.name} category="ICONICS" />

      {/* 6. Related Products (linking to PLC products) */}
      <RelatedProducts currentSlug={product.slug} products={relatedPlcProducts} category="plc" title="Explore More Products" />
    </div>
  );
}
