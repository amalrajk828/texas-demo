import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailHero, { type ProductDetail } from "@/components/ProductDetailHero";
import ProductInfoColumns from "@/components/ProductInfoColumns";
import ProductInquiryForm from "@/components/ProductInquiryForm";
import RelatedProducts from "@/components/RelatedProducts";
import { type Product } from "@/components/ProductCard";

type Params = Promise<{ slug: string }>;

const vfdProducts = [
  {
    id: 1,
    name: "FR-CS80 Series",
    slug: "fr-cs80-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/CS80.webp",
    description: "The FR-CS80 Series is a compact and smart frequency inverter (VFD) from Mitsubishi Electric, offering general-purpose magnetic flux vector motor control in one of the industry's smallest compact bodies. The design focuses on space-saving installation, ease of use, and reliable performance for a wide range of industrial applications.",
    keyApplications: [
      "Speed control of pumps and compressors in oil & gas facilities",
      "Fan and blower motor control for utility systems",
      "Conveyor and material handling drives",
      "HVAC and industrial ventilation systems",
      "General machine and production equipment requiring motor speed control",
      "Local drive control on packaged and skid-mounted units"
    ],
    keyBenefits: [
      "Compact, low-heat, space-saving design",
      "General-purpose vector motor control",
      "Reduced wiring and faster installation",
      "Reliable continuous-duty operation",
      "Flexible expansion with Mitsubishi options",
      "Easy operation and maintenance"
    ],
    industries: [
      "Electrical, Industrial, and Pump System Integrators",
      "HVAC, Crane, and Lift System Integrators",
      "Power, Water, and Wastewater Treatment Facilities",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing Plants and Factories"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_cs",
    downloadLink: null
  },
  {
    id: 2,
    name: "FR-D700 Series",
    slug: "fr-d700-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800.webp",
    description: "The FR-D700 Series from Mitsubishi Electric is a compact, general-purpose frequency inverter designed for simple, reliable, and cost-efficient motor speed control. Featuring a space-saving design, easy operation, and stable performance, the FR-D700 Series is well suited for basic industrial drive applications. It provides an economical solution for factories, utilities, and auxiliary systems where simplicity, reliability, and low total cost are key requirements.",
    keyApplications: [
      "Speed control of pumps, fans, and blowers",
      "Conveyor and material handling motor control",
      "Utility and auxiliary motor systems",
      "Basic machines and production equipment",
      "OEM packages and local drive panels"
    ],
    keyBenefits: [
      "Simple and easy setup and operation with built-in controls",
      "General-purpose control with V/F and magnetic flux vector options",
      "Compact and space-saving body for panel-mounted applications",
      "Reliable and stable motor control for continuous operation",
      "Supports wide application range with flexible settings",
      "Designed for easy maintenance and long service life"
    ],
    industries: [
      "Electrical, Pump, and Industrial System Integrators",
      "Industrial and Utility Auxiliary Systems",
      "Manufacturing Plants and Factories",
      "Power, Water, and Wastewater Treatment Utilities",
      "Oil & Gas Facilities (Auxiliary and Non-Critical Systems)"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/frd-series/frd700",
    downloadLink: null
  },
  {
    id: 3,
    name: "FR-E800 Series",
    slug: "fr-e800-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800 Series is Mitsubishi Electric's advanced compact frequency inverter designed for high-efficiency motor control in general-purpose, pump, and fan applications. It delivers vector control performance, high-speed stability, built-in safety, and Ethernet connectivity in a space-saving design, making it ideal for modern HVAC systems, water treatment plants, and industrial utility drives.",
    keyApplications: [
      "Pumps for water supply, wastewater, and desalination systems",
      "HVAC fans, blowers, AHUs, and cooling towers",
      "Oil & gas utility skids and auxiliary pump systems",
      "Compressors and industrial ventilation systems",
      "Conveyors and material handling drives",
      "General machinery and packaged industrial equipment"
    ],
    keyBenefits: [
      "High-performance vector control with stable high-speed operation",
      "Energy-saving pump and fan functions",
      "Compact, space-saving design",
      "Built-in Ethernet connectivity",
      "Integrated safety and industrial reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & Building Management System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Auxiliary Systems",
      "OEM Machine Builders and Skid Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    id: 4,
    name: "E800-E Series",
    slug: "e800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800.webp",
    description: "The FR-E800-E Series is Mitsubishi Electric's advanced compact frequency inverter with dedicated Ethernet communication, designed for high-efficiency motor control in general-purpose, pump, and fan applications. It delivers vector control performance, high-speed stability, built-in safety, and seamless Ethernet network integration for modern industrial and HVAC utility drives.",
    keyApplications: [
      "Pumps for water supply, wastewater, and desalination systems",
      "HVAC fans, blowers, AHUs, and cooling towers",
      "Oil & gas utility skids and auxiliary pump systems",
      "Compressors and industrial ventilation systems",
      "Conveyors and material handling drives",
      "General machinery and packaged industrial equipment"
    ],
    keyBenefits: [
      "High-performance vector control with stable high-speed operation",
      "Energy-saving pump and fan functions",
      "Compact, space-saving design",
      "Built-in Ethernet communication for network integration",
      "Integrated safety and industrial reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & Building Management System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Auxiliary Systems",
      "OEM Machine Builders and Skid Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    id: 5,
    name: "E800-SCE Series",
    slug: "e800-sce-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-E800-2.webp",
    description: "The FR-E800-SCE Series is Mitsubishi Electric's advanced compact frequency inverter with Ethernet Safety Communication, designed for applications requiring both high-efficiency motor control and integrated functional safety. It supports Safety over EtherNet/IP and delivers vector control performance, high-speed stability, and built-in safety functions in a space-saving design.",
    keyApplications: [
      "Pumps for water supply, wastewater, and desalination systems",
      "HVAC fans, blowers, AHUs, and cooling towers",
      "Oil & gas utility skids and auxiliary pump systems",
      "Compressors and industrial ventilation systems",
      "Conveyors and material handling drives",
      "Safety-critical machinery and packaged industrial equipment"
    ],
    keyBenefits: [
      "High-performance vector control with stable high-speed operation",
      "Energy-saving pump and fan functions",
      "Compact, space-saving design",
      "Built-in Ethernet Safety Communication (Safety over EtherNet/IP)",
      "Integrated functional safety for SIL-rated applications"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & Building Management System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Auxiliary Systems",
      "OEM Machine Builders and Skid Manufacturers"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    id: 6,
    name: "FR-F800 Series",
    slug: "fr-f800-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800 Series is Mitsubishi Electric's high-performance energy-saving inverter designed specifically for pump, fan, and HVAC applications. It combines advanced vector control, high efficiency, built-in energy optimization, and robust industrial design, making it ideal for large HVAC plants, water treatment facilities, and oil & gas utility systems. The FR-F800 is optimized for continuous-duty, high-reliability operation in demanding environments.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "High-efficiency vector control for pumps and fans",
      "Built-in energy-saving functions",
      "Wide power range for utility and industrial drives",
      "Ethernet and fieldbus connectivity",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800",
    downloadLink: null
  },
  {
    id: 7,
    name: "FR-F800-E Series",
    slug: "fr-f800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F800-E Series is an energy-optimized pump and fan inverter with built-in Ethernet and BACnet/IP, designed for direct integration into HVAC, BMS, and utility networks. It delivers high-efficiency pump and fan control with seamless connectivity to building management and industrial automation systems.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "High-efficiency vector control for pumps and fans",
      "Built-in Ethernet and BACnet/IP for BMS integration",
      "Wide power range for utility and industrial drives",
      "Energy-saving optimization functions",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800/frf800e",
    downloadLink: null
  },
  {
    id: 8,
    name: "FR-F846-E Series",
    slug: "fr-f846-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-F800.webp",
    description: "The FR-F846-E2 is the IP55 stand-alone version of the proven FR-F800 series, designed for installation outside control panels in demanding industrial and HVAC environments. Its IP55 enclosure rating allows direct field mounting, eliminating the need for an additional control panel enclosure in many applications.",
    keyApplications: [
      "Large pumps in water, wastewater, and desalination plants",
      "HVAC systems (chillers, cooling towers, AHUs, and ventilation fans)",
      "Oil & gas utility pumps and ventilation systems",
      "Power plant auxiliary pumps and fans",
      "District cooling and building utility systems",
      "Industrial air handling and process ventilation"
    ],
    keyBenefits: [
      "IP55 enclosure for outdoor and field installation",
      "Stand-alone installation without control panel required",
      "High-efficiency vector control for pumps and fans",
      "Built-in energy-saving functions",
      "Wide power range for utility and industrial drives",
      "24/7 industrial-grade reliability"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "HVAC & District Cooling System Integrators",
      "Water, Wastewater & Desalination Facilities",
      "Oil & Gas and Petrochemical Utility Systems",
      "Power Generation Plants",
      "Large Industrial and Infrastructure Facilities"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_f800/frf846e2",
    downloadLink: null
  },
  {
    id: 9,
    name: "FR-A800-E Series",
    slug: "fr-a800-e-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A800-E Series is Mitsubishi Electric's high-performance industrial inverter with built-in 100 Mbit Ethernet TCP/IP, enabling advanced remote monitoring, parameter adjustment, and seamless integration into modern networked control systems. It delivers servo-like vector control, high torque, and fast dynamic response for demanding applications such as cranes, hoists, conveyors, and heavy industrial machinery.",
    keyApplications: [
      "Cranes, hoists, and elevators",
      "Heavy conveyors and material handling systems",
      "Extruders, mixers, and crushers",
      "Winders, unwinders, and tension control systems",
      "Oil & gas process equipment and skids",
      "High-performance machine drives"
    ],
    keyBenefits: [
      "High-performance, servo-like motor control",
      "Stable low- and zero-speed operation",
      "Wide power range for light to heavy duty drives",
      "Built-in safety and protection functions",
      "Industrial network connectivity via 100 Mbit Ethernet TCP/IP"
    ],
    industries: [
      "Heavy Industrial Machine Builders",
      "Oil & Gas and Petrochemical Plants",
      "Electrical and Control Panel Integrators",
      "Steel, Cement, and Mining Industries",
      "Ports, Cranes, and Material Handling Systems",
      "Manufacturing and Process Plants"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra800e",
    downloadLink: null
  },
  {
    id: 10,
    name: "FR-A741 Regenerative Series",
    slug: "fr-a741-regenerative-series",
    tag: "Mitsubishi Electric VFD",
    image: "/images/frequency-inverters/FR-A800.webp",
    description: "The FR-A741 Regenerative Inverter is a compact, high-performance frequency inverter designed for hoist drives and high-powered machines where motor torque is used for regenerative braking. It features a built-in regenerative converter that feeds braking energy back into the power supply instead of dissipating it as heat, providing an energy-efficient and low-heat solution for lifting, lowering, and overhauling load applications.",
    keyApplications: [
      "Cranes, hoists, and lifting systems",
      "Elevators and vertical transport systems",
      "Winders and unwinders",
      "Overhauling conveyors and downhill loads",
      "Test benches and dynamometers",
      "Heavy machines with frequent braking cycles"
    ],
    keyBenefits: [
      "Built-in regenerative braking — feeds energy back to supply",
      "High-performance vector control for precise hoist operation",
      "Compact all-in-one design with no external braking resistor",
      "Reduced heat generation and energy loss",
      "Heavy-duty industrial reliability for continuous operation"
    ],
    industries: [
      "Electrical and Control Panel Integrators",
      "Ports, Cranes, and Lifting System Operators",
      "Steel, Metal, and Rolling Mill Plants",
      "Oil & Gas and Petrochemical Facilities",
      "Manufacturing and Test Facilities",
      "Heavy Industrial Plants"
    ],
    externalLink: "https://emea.mitsubishielectric.com/fa/products/drv/inv/fr_a800/fra741",
    downloadLink: null
  }
];

export async function generateStaticParams() {
  return vfdProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = vfdProducts.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description.slice(0, 155) + "...",
    alternates: { canonical: `https://texastechserv.com/products/frequency-inverter-vfd/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Mitsubishi Electric VFD`,
      description: product.description.slice(0, 155) + "...",
      url: `https://texastechserv.com/products/frequency-inverter-vfd/${product.slug}/`,
    },
  };
}

export default async function VfdDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = vfdProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  // Map for RelatedProducts
  const genericProducts: Product[] = vfdProducts.map((p) => ({
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
        category="frequency-inverter-vfd"
        categoryLabel="Frequency Inverters (VFD)"
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
        </div>
      </section>

      {/* 5. Inquiry Form */}
      <ProductInquiryForm
        productName={product.name}
        category="Frequency Inverters (VFD)"
      />

      {/* 6. Related Products */}
      <RelatedProducts
        currentSlug={product.slug}
        products={genericProducts}
        category="frequency-inverter-vfd"
        title="Other Frequency Inverters (VFD)"
      />
    </div>
  );
}
