import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

// Exact PLC Data Array specified
const plcProducts = [
  {
    id: 1,
    name: "MELSEC iQ-R Series",
    slug: "melsec-iq-r-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-iQ-R-Series.png",
    description: "The MELSEC iQ-R Series is Mitsubishi Electric's next-generation modular PLC platform designed for advanced and large-scale industrial automation. It delivers high-speed, high-performance control while improving productivity, engineering efficiency, and system availability. With a scalable modular architecture and a wide range of compatible modules, the iQ-R Series supports logic, process, motion, and information control within a unified system. It is ideally suited as a core controller for mission-critical industrial and oil & gas applications.",
    keyApplications: [
      "Oil & gas production facilities and gathering stations",
      "Refineries and petrochemical process units",
      "Tank farms, terminals, and pipeline systems",
      "Compressor, pump, and utility control systems",
      "Package units and skid-mounted systems",
      "Emergency shutdown (ESD) and interlock interface systems",
      "SCADA-based industrial plants and manufacturing facilities"
    ],
    keyBenefits: [
      "High-speed, deterministic control performance",
      "High-availability and reliable operation for critical processes",
      "Modular and scalable system architecture",
      "Multi-CPU capability for logic, process, and motion control",
      "Seamless integration with DCS, SCADA, MCCs, and field devices",
      "Reduced engineering, commissioning, and maintenance effort"
    ],
    industries: [
      "Oil & Gas (Upstream, Midstream, Downstream)",
      "Refineries and Petrochemical Industries",
      "Power Generation and Utilities",
      "Manufacturing Plants and Factories",
      "EPC Projects and System Integrators"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcr/items/index.html",
    downloadLink: "https://www.mitsubishielectric.com/dl/fa/document/catalog/plcr/l08298eng/l08298engz.pdf"
  },
  {
    id: 2,
    name: "MELSEC-Q Series",
    slug: "melsec-q-series",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/MELSEC-Q-Series-.webp",
    description: "The MELSEC-Q Series is a Mitsubishi Electric modular PLC platform designed for medium to large-scale industrial automation systems. It offers reliable and stable control performance with a flexible, expandable architecture to suit a wide range of applications. With its proven hardware design and extensive module lineup, the MELSEC-Q Series supports logic, process, and motion control, making it a dependable choice for long-term industrial and oil & gas operations.",
    keyApplications: [
      "Oil & gas production and processing facilities",
      "Refineries and petrochemical units",
      "Tank farms, terminals, and pipeline systems",
      "Compressor, pump, and utility control systems",
      "Package units and skid-mounted systems",
      "SCADA-based industrial plants and factories"
    ],
    keyBenefits: [
      "Reliable and stable industrial control performance",
      "Modular and expandable system architecture",
      "Suitable for continuous operation in harsh environments",
      "Wide range of I/O, motion, process, and communication modules",
      "Seamless integration with SCADA, DCS (interface level), and field devices",
      "Proven platform with long lifecycle support"
    ],
    industries: [
      "Oil & Gas (Upstream, Midstream, Downstream)",
      "Refineries and Petrochemical Industries",
      "Power Generation and Utilities",
      "Manufacturing Plants and Factories",
      "EPC Projects and System Integrators"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcq/items/index.html",
    downloadLink: null
  },
  {
    id: 3,
    name: "FX5U",
    slug: "fx5u-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5U.png",
    description: "The FX5U is a compact, high-performance PLC from the iQ-F Series by Mitsubishi Electric, designed for efficient control of machines, packages, and auxiliary systems. It combines high-speed processing, built-in I/O, and integrated motion and communication functions in a space-saving design. The FX5U supports system expansion and networking, making it suitable for factory automation and package-based applications within industrial and oil & gas facilities, typically interfaced to higher-level PLC or DCS systems.",
    keyApplications: [
      "Package units and skid-mounted systems (pump skids, dosing skids, lube oil skids)",
      "Auxiliary and utility systems in oil & gas facilities",
      "Machine automation in refineries, plants, and workshops",
      "Packaging, bottling, and material handling systems",
      "Production lines and assembly systems",
      "Local control panels interfaced to PLC / DCS / SCADA"
    ],
    keyBenefits: [
      "High-speed control performance for machine and package automation",
      "Compact design with built-in I/O and functions",
      "Scalable system with easy expansion options",
      "Integrated communication and positioning functions",
      "Reliable operation for continuous industrial use",
      "Reduced panel space, wiring, and engineering effort"
    ],
    industries: [
      "Oil & Gas (Package units and auxiliary systems)",
      "Manufacturing Plants and Factories",
      "Food & Beverage Processing",
      "Packaging and Material Handling",
      "OEM Machine Builders"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcf/items/index.html",
    downloadLink: null
  },
  {
    id: 4,
    name: "FX5UJ",
    slug: "fx5uj-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5UJ.png",
    description: "The FX5UJ is a compact PLC from the iQ-F Series by Mitsubishi Electric, equipped as standard with an SD memory card slot, built-in USB (Mini-B) connector, and built-in Ethernet port. It includes built-in functions such as positioning control and high-speed counters, allowing multiple control functions to be integrated into a single unit. By condensing these functions, the FX5UJ improves ease of use, system flexibility, and overall efficiency for machine and package automation applications.",
    keyApplications: [
      "Simple package units and auxiliary skids",
      "Cost-sensitive OEM machines",
      "Basic pump, fan, and utility panels",
      "Simple material handling and conveyors",
      "Standalone local control panels"
    ],
    keyBenefits: [
      "High-speed basic control performance",
      "Cost-effective PLC solution",
      "Compact design with essential I/O",
      "Easy programming with GX Works3",
      "Reliable operation for standard industrial use",
      "Reduced system complexity and cost"
    ],
    industries: [
      "Oil & Gas (auxiliary and non-critical packages)",
      "Manufacturing Plants and Factories",
      "OEM Machine Builders",
      "Packaging and Light Industry",
      "Utilities and Auxiliary Systems"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcf/items/index.html",
    downloadLink: null
  },
  {
    id: 5,
    name: "FX5S",
    slug: "fx5s-plc",
    tag: "Mitsubishi Electric PLC",
    image: "/images/plc/FX5S.jpg",
    description: "The FX5S is a PLC from the iQ-F Series by Mitsubishi Electric, standard equipped with a built-in USB (Mini-B) connector and built-in Ethernet port. It features a compact design while condensing high basic performance, including positioning and IoT-related functions, along with ease of use. These features facilitate simple and efficient configuration of user systems, making the FX5S suitable for basic and compact automation applications.",
    keyApplications: [
      "Basic machine control and simple automation systems",
      "Small OEM machines and standardized equipment",
      "Basic pump, fan, and utility control panels",
      "Simple material handling and conveyor systems",
      "Standalone control applications"
    ],
    keyBenefits: [
      "High-speed basic control performance",
      "Compact and economical PLC solution",
      "Simple system configuration and programming",
      "Compatible with iQ-F Series engineering environment",
      "Reliable operation for continuous industrial use"
    ],
    industries: [
      "Manufacturing Plants and Factories",
      "OEM Machine Builders",
      "Packaging and Light Industry",
      "Utilities and Auxiliary Systems",
      "General Industrial Applications"
    ],
    externalLink: "https://www.mitsubishielectric.com/fa/products/cnt/plcf/items/index.html",
    downloadLink: null
  }
];

// Statically pre-render routes at build time
export async function generateStaticParams() {
  return plcProducts.map((p) => ({
    slug: p.slug,
  }));
}

// Generate page metadata dynamically
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = plcProducts.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/plc/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Mitsubishi Electric PLC`,
      description: product.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/plc/${product.slug}/`,
    },
  };
}

export default async function PlcDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = plcProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  // Cast array objects for ProductCard capability compatibility
  const genericProducts: Product[] = plcProducts.map((p) => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    tag: p.tag,
    image: p.image,
    description: p.description,
  }));

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#F5821F] selection:text-white">
      {/* 1. Hero Section */}
      <ProductDetailHero product={product as ProductDetail} category="plc" categoryLabel="PLC" />

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
      <ProductInquiryForm productName={product.name} category="PLC" />

      {/* 6. Related Products */}
      <RelatedProducts currentSlug={product.slug} products={genericProducts} category="plc" title="Other PLC Products" />
    </div>
  );
}
