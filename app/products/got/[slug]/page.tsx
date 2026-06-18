import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

// Exact GOT Data Array specified
const gotProducts = [
  {
    id: 1,
    name: "GOT2000 Series",
    slug: "got2000series",
    tag: "Mitsubishi Electric HMI",
    image: "/images/got/GOT2000-Series.png",
    description: "The GOT2000 Series is a high-performance graphic operation terminal (HMI) from Mitsubishi Electric, designed to enhance operability, visualization, and monitoring in industrial automation systems. It offers high-resolution displays, advanced graphics, and intuitive touch operation, enabling efficient interaction between operators and control systems. With strong connectivity and compatibility with Mitsubishi PLCs and other controllers, the GOT2000 Series supports improved productivity, reduced downtime, and easier system operation.",
    variants: [
      "GT27 Advanced",
      "GT25 Superior Performance Intermediate",
      "GT25/21 Wide",
      "GT21 Compact Series"
    ],
    keyApplications: [
      "Operator panels for oil & gas facilities and refineries",
      "HMI for package units and skid-mounted systems",
      "Monitoring and control of utilities (power, water, air, fuel gas)",
      "Machine and process visualization in factories",
      "Local operator interface for PLC- and SCADA-based systems",
      "Control room panels and field operator stations"
    ],
    keyBenefits: [
      "High-resolution, wide-screen displays for clear visualization",
      "Fast and responsive touch operation",
      "Advanced graphics, alarms, and trend display",
      "Seamless connectivity with Mitsubishi PLCs (iQ-R, Q, FX Series)",
      "Supports multiple communication protocols",
      "Robust industrial design for harsh environments"
    ],
    industries: [
      "Electrical, Industrial, and Pump System Integrators",
      "HVAC, Crane, and Lift System Integrators",
      "Power, Water, and Wastewater Treatment Facilities",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing Plants and Factories"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/hmi/got/items/got2000/index.html",
    downloadLink: null
  }
];

// Related Products linking across categories
const relatedProducts: Product[] = [
  {
    id: 1,
    name: "MELSEC iQ-R Series",
    slug: "melsec-iq-r-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    description: "The MELSEC iQ-R Series is Mitsubishi Electric's next-generation modular PLC platform designed for advanced and large-scale industrial automation.",
    category: "plc"
  },
  {
    id: 2,
    name: "GENESIS64",
    slug: "genesis64",
    tag: "ICONICS SCADA & HMI",
    image: "/images/iconics/GENESIS64.webp",
    description: "GENESIS64 is a 64-bit, web-enabled SCADA and HMI software suite from ICONICS, designed for real-time visualization, monitoring, and control of industrial processes.",
    category: "iconics"
  },
  {
    id: 3,
    name: "FX5U",
    slug: "fx5u-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5U.png",
    description: "The FX5U is a compact, high-performance PLC from the iQ-F Series by Mitsubishi Electric, designed for efficient control of machines, packages, and auxiliary systems.",
    category: "plc"
  }
];

// Statically pre-render routes at build time
export async function generateStaticParams() {
  return gotProducts.map((p) => ({
    slug: p.slug,
  }));
}

// Generate page metadata dynamically
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = gotProducts.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/got/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Mitsubishi Electric HMI`,
      description: product.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/got/${product.slug}/`,
    },
  };
}

export default async function GotDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = gotProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* 1. Hero Section */}
      <ProductDetailHero
        product={product as ProductDetail}
        category="got"
        categoryLabel="GOT"
      />

      {/* 2. Description Section with Variants models grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-10">
          <p className="text-[#555770] text-base sm:text-[16px] leading-[1.8] text-justify font-normal mb-10">
            {product.description}
          </p>

          <div className="border-t border-[#E8E8F0] pt-10">
            <h4 className="text-[#1A1A2E] text-[18px] font-bold mb-5 font-display">
              Available Models
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.variants.map((variant) => (
                <div
                  key={variant}
                  className="bg-[#F8F9FA] border-l-[3px] border-[#F5821F] rounded-[6px] py-[10px] px-[16px] font-semibold text-[#1A1A2E] text-sm sm:text-base shadow-sm"
                >
                  {variant}
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <ProductInquiryForm productName={product.name} category="GOT — Graphic Operator Panels" />

      {/* 6. Related Products (cross-category) */}
      <RelatedProducts
        currentSlug={product.slug}
        products={relatedProducts}
        category="plc"
        title="Explore More Products"
      />
    </div>
  );
}
