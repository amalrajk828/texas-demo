import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

const acServosData = [
  {
    id: 1,
    name: "MR-JE Series Servo Drive",
    slug: "melservo-je-servo-drive",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/MR-JE-Servo-Amplifier.webp",
    description: "The MR-JE Series is Mitsubishi Electric's compact and cost-effective AC servo drive platform designed for basic positioning, speed, and torque control in small to mid-size machines. It provides reliable servo performance in a simple, easy-to-integrate design, making it ideal for OEM equipment and light automation systems.",
    keyApplications: [
      "Indexing tables and feeders",
      "Packaging and labeling machines",
      "Conveyors and transfer systems",
      "Simple pick-and-place units",
      "Printing and textile machinery",
      "General OEM automation equipment"
    ],
    keyBenefits: [
      "Compact AC servo solution for simple motion and positioning tasks",
      "High-resolution encoder support for smooth and accurate control",
      "Easy setup and tuning using Mitsubishi MR Configurator software",
      "Ethernet and CC-Link IE Field Basic (MR-JE-C models) for PLC connectivity",
      "Cost-effective and reliable design for OEM and light industrial use"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Food Processing Plants",
      "Electronics and Light Manufacturing",
      "Printing and Textile Industries",
      "Automation System Integrators",
      "General Industrial Machinery"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/servo-amplifier",
    downloadLink: null
  },
  {
    id: 2,
    name: "HG-KN Series Servo Motors",
    slug: "melservo-je-hg-kn-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    description: "The HG-KN Series is Mitsubishi Electric's compact AC servo motor range designed for high-response, precise motion control in small to medium-size machines. These motors are optimized for use with MR-JE and MR-J4 servo amplifiers, delivering smooth motion, high speed, and accurate positioning in a space-saving design.",
    keyApplications: [
      "Packaging and labeling machines",
      "Pick-and-place and small robotics",
      "Indexing tables and feeders",
      "Conveyors and material handling",
      "Printing and textile machines",
      "General OEM automation equipment"
    ],
    keyBenefits: [
      "Compact, high-speed AC servo motors for precise positioning",
      "High-resolution encoder for smooth and accurate control",
      "Wide speed range up to high RPM for dynamic machine operation",
      "Brake and brakeless options for vertical and horizontal axes",
      "Direct compatibility with MR-JE and MR-J4 servo drives"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Food Processing Plants",
      "Electronics and Assembly Lines",
      "Printing and Textile Industries",
      "Automation System Integrators",
      "Light Industrial Machinery Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/rotary-servo-motor",
    downloadLink: null
  },
  {
    id: 3,
    name: "HG-SN Series Servo Motors",
    slug: "melservo-je-hg-sn-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JE Series",
    image: "/images/acservos/mr_j5_lineup_2.webp",
    description: "The HG-SN Series is Mitsubishi Electric's medium-capacity AC servo motor range designed for high-torque, high-accuracy motion control in industrial and OEM machinery. These motors are optimized for use with MR-JE servo amplifiers, delivering stable speed, strong torque, and precise positioning in a robust industrial design.",
    keyApplications: [
      "Packaging and material handling machines",
      "Indexing tables and rotary axes",
      "Printing, converting, and textile machinery",
      "Pick-and-place and assembly systems",
      "Light to medium industrial automation equipment",
      "OEM production and process machines"
    ],
    keyBenefits: [
      "High-torque AC servo motors for smooth and stable motion",
      "17-bit high-resolution encoder (131,072 pulses/rev) for precise positioning",
      "Power range from 500 W to 3 kW for medium-duty industrial drives",
      "Brake and brakeless versions for vertical and horizontal axes",
      "Oil-sealed and wedged shaft options for long service life"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Textile and Printing Plants",
      "Automation System Integrators",
      "General Industrial Machinery Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_je/rotary-servo-motor",
    downloadLink: "https://emea.mitsubishielectric.com/fa/get-asset?asset=https%3A%2F%2Feu-assets.contentstack.com%2Fv3%2Fassets%2Fblt5412ff9af9aef77f%2Fbltcf571e9202addd21%2F660e56710a59125ad21530cc%2Fl03086engh.pdf"
  },
  {
    id: 4,
    name: "MR-JET Series Servo Drive",
    slug: "melservo-jet-servo-drive",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/mr_jet_lineup_1.webp",
    description: "The MR-JET Series is Mitsubishi Electric's EtherCAT-based servo drive platform designed for high-speed, synchronized, multi-axis motion control in modern automation systems. It provides real-time networked motion, advanced control modes, and compact hardware, making it ideal for packaging lines, robotics, conveyors, and coordinated machine axes. MR-JET covers a power range of 100 W to 1 kW and supports EtherCAT, CC-Link IE Field Basic, and CC-Link IE Field TSN depending on model.",
    keyApplications: [
      "Multi-axis packaging and filling machines",
      "Pick-and-place and small robotics",
      "Synchronized conveyors and indexing systems",
      "Electronic cam and cut-to-length machines",
      "Assembly and inspection equipment",
      "OEM machines requiring real-time motion control"
    ],
    keyBenefits: [
      "EtherCAT and CC-Link IE Field TSN for real-time synchronized motion",
      "Advanced control modes: CSP, CSV, CST, CT and PTP",
      "High-speed, high-precision servo control for coordinated machine axes",
      "Compact servo amplifiers for space-saving control panels",
      "Supports HG-KNS and HG-SNS motors from 100 W up to 3 kW"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Automation System Integrators",
      "Printing and Labeling Machinery",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/servo-amplifier",
    downloadLink: null
  },
  {
    id: 5,
    name: "HG-KNS Series Servo Motors",
    slug: "melservo-jet-hg-kns-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    description: "The HG-KNS Series is Mitsubishi Electric's compact, high-response AC servo motor range designed specifically for EtherCAT-based MR-JET servo systems. These motors deliver fast acceleration, smooth motion, and precise positioning, making them ideal for high-speed, multi-axis OEM machines.",
    keyApplications: [
      "High-speed packaging and labeling machines",
      "Pick-and-place and small robotics",
      "Indexing tables and rotary axes",
      "Synchronized conveyors",
      "Cut-to-length and electronic cam machines",
      "OEM automation and assembly equipment"
    ],
    keyBenefits: [
      "Optimized for MR-JET EtherCAT servo drives for synchronized motion",
      "High-speed operation (3000 rpm, high peak torque) for fast machine cycles",
      "High-resolution encoder for smooth and accurate positioning",
      "Brake, oil-sealed, and wedged shaft options for industrial environments",
      "Compact, low-inertia design for dynamic and precise motion"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Automation System Integrators",
      "Printing and Labeling Machinery",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/rotary-servo-motor",
    downloadLink: null
  },
  {
    id: 6,
    name: "HG-SNS Series Servo Motors",
    slug: "melservo-jet-hg-sns-servo-motor",
    tag: "Mitsubishi Electric AC Servo",
    series: "MELSERVO-JET Series",
    image: "/images/acservos/MR-JET_SERVO_MOTOR.webp",
    description: "The HG-SNS Series is Mitsubishi Electric's medium- to high-capacity AC servo motor range developed for EtherCAT-based MR-JET servo systems. It provides high torque, smooth speed control, and precise positioning, making it ideal for synchronized multi-axis industrial machines.",
    keyApplications: [
      "High-speed packaging and filling lines",
      "Synchronized conveyors and indexing systems",
      "Pick-and-place and assembly machines",
      "Printing, converting, and labeling equipment",
      "Cut-to-length and electronic cam machines",
      "OEM production and automation machinery"
    ],
    keyBenefits: [
      "High-torque servo motors optimized for MR-JET EtherCAT drives",
      "17-bit high-resolution encoder for precise positioning",
      "Power range from 500 W to 3 kW for medium-duty machine axes",
      "Brake, oil-sealed, and wedged shaft options for industrial environments",
      "Stable speed and torque for synchronized multi-axis operation"
    ],
    industries: [
      "OEM Machine Builders",
      "Packaging and Converting Industries",
      "Electronics and Assembly Lines",
      "Printing and Labeling Plants",
      "Automation System Integrators",
      "General Industrial Automation"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/servo/mr_jet/rotary-servo-motor",
    downloadLink: null
  }
];

export async function generateStaticParams() {
  return acServosData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = acServosData.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/acservos/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Mitsubishi Electric AC Servo`,
      description: product.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/acservos/${product.slug}/`,
    },
  };
}

export default async function AcServosDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = acServosData.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  // Related products logic: 2 other products from same series first, then 1 from other series
  const sameSeries = acServosData.filter((p) => p.series === product.series && p.slug !== product.slug);
  const otherSeries = acServosData.filter((p) => p.series !== product.series);
  
  const relatedProductsList: Product[] = [
    ...sameSeries.slice(0, 2),
    ...otherSeries.slice(0, 1)
  ].map((p) => ({
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
      <ProductDetailHero
        product={product as ProductDetail}
        category="acservos"
        categoryLabel="AC Servos"
        seriesBadge={product.series}
      />

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
      <ProductInquiryForm
        productName={product.name}
        category="AC Servos"
      />

      {/* 6. Related Products */}
      <RelatedProducts
        currentSlug={product.slug}
        products={relatedProductsList}
        category="acservos"
        title="Other Servo Products"
      />
    </div>
  );
}
