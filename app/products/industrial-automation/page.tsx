import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industrial Automation - Texas Technical Services",
  description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
  alternates: { canonical: "/products/industrial-automation/" },
  keywords: [
    "industrial automation solutions Kuwait",
    "PLC I/O modules",
    "industrial control panels",
    "Ethernet switches industrial",
  ],
  openGraph: {
    title: "Industrial Automation - Texas Technical Services",
    description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
    url: "/products/industrial-automation/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Automation - Texas Technical Services",
    description: "End-to-end industrial automation solutions including PLC & I/O modules, control panels, industrial workstations, controllers, converters, Ethernet switches, and command centre consoles.",
  },
};

export default function IndustrialAutomationPage() {
  const products = getProductsByPath("/products/industrial-automation/");
  return (
<div className="min-h-screen bg-white font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Industrial Automation", href: "/products/industrial-automation/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Industrial Automation"
        eyebrow="Industrial Automation"
        title="Industrial Automation"
        subtitle="End-to-end automation solutions for process plants and manufacturing facilities — from PLCs and control panels to industrial networks and command centres."
      />
      <ProductPageIntro
        title="Comprehensive Industrial Automation Portfolio"
        description="We deliver a complete range of industrial automation solutions — from PLC & I/O modules and control panels to industrial workstations, controllers, converters, Ethernet switches, and ergonomic command centre consoles — engineered for reliability, efficiency, and seamless integration."
      />
      <ProductPageProductsList
        products={products}
        category="Industrial Automation"
        imageFit="contain"
      />
      <ProductPageCtaBanner
        title="Need an industrial automation solution for your plant?"
        description="Our automation engineers can help you design and deploy the right system for your application."
      />
    </div>
  );
}
