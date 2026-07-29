import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Custody Metering Solutions",
  description:
    "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
  alternates: {
    canonical: "/products/custody-metering-solutions/",
  },
  keywords: [
    "custody metering solutions Kuwait",
    "flow metering skids",
    "OMNI flow computers",
    "custody transfer measurement",
    "fiscal metering Kuwait",
    "metering skid design GCC",
    "flow computer integration Dubai",
    "oil and gas custody transfer",
    "pipeline metering systems",
    "custody transfer skid fabrication",
  ],
  openGraph: {
    title: "Custody Metering Solutions",
    description:
      "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
    url: "/products/custody-metering-solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custody Metering Solutions",
    description:
      "Custody metering solutions for oil and gas — flow metering skids, flow computers, and flow metering control systems for accurate, auditable custody transfer measurement.",
  },
};

export default function CustodyMeteringSolutionsPage() {
  const products = getProductsByPath("/products/custody-metering-solutions/");
  return (
    <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Custody Metering Solutions", href: "/products/custody-metering-solutions/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Custody Metering Solutions"
        eyebrow="SICK · OMNI · Custody Transfer"
        title="Custody Metering Solutions"
        subtitle="Flow Metering Skids, Flow Computers & Control Systems"
        featured
        backgroundImage="/flow_metering_skid.jpg"
        imagePosition="center 40%"
        stats={[
          { num: "±0.1%", label: "Accuracy" },
          { num: "100%", label: "Compliance" },
          { num: "24/7", label: "Reliability" },
        ]}
      />
      <ProductPageIntro
        title="Custody Metering Solutions"
        description="At Texas Technical Service Co., we take pride in offering top-of-the-line custody metering solutions that cater to a wide range of industries and applications. Our comprehensive product range, backed by cutting-edge technology, ensures accurate and reliable measurements for all your custody transfer needs."
      />
      <ProductPageProductsList
        products={products}
        category="Custody Metering Solutions"
      />
      <ProductPageCtaBanner
        title="Need a custody metering solution for your facility?"
        description="Our metering specialists can help you design, integrate, and commission a custody transfer solution tailored to your oil & gas application."
      />
    </div>
  );
}
