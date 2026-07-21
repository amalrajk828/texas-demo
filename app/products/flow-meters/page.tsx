import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import FlowMetersCustodyTransferSection from "@/components/products/FlowMetersCustodyTransferSection";
import FlowMetersTechnologiesSection from "@/components/products/FlowMetersTechnologiesSection";
import FlowMetersKemSection from "@/components/products/FlowMetersKemSection";
import FlowMetersProversSection from "@/components/products/FlowMetersProversSection";
import FlowMetersFhLabSection from "@/components/products/FlowMetersFhLabSection";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Flow Meters",
  description:
    "Precision flow measurement instruments for liquids, gases, and flare applications from SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and more — custody transfer and process monitoring solutions.",
  alternates: { canonical: "/products/flow-meters/" },
  keywords: [
    "flow meters Kuwait",
    "ultrasonic flow meters",
    "SICK flow meters",
    "Faure Herman flow meters",
    "KEM Kuppers flow meter",
    "Endress Hauser flow meter",
    "Tek-Trol flow meter",
    "custody transfer flow measurement",
    "Coriolis flow meter Kuwait",
    "V-Cone flow element",
    "turbine flow meter",
    "flare gas meter",
    "thermal mass flow meter",
  ],
  openGraph: {
    title: "Flow Meters",
    description:
      "Comprehensive flow technologies & applications — Coriolis, ultrasonic, turbine, electromagnetic, V-Cone, PD, thermal mass, and flare gas meters from 5 world-class OEMs.",
    url: "/products/flow-meters/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meters",
    description:
      "Comprehensive flow technologies & applications from 5 world-class OEMs — custody transfer and process measurement.",
  },
};

export default function FlowMetersPage() {
  const products = getProductsByPath("/products/flow-meters/");
  return (
      <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Flow Meters", href: "/products/flow-meters/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Flow Meters"
        eyebrow="Flow Measurement"
        title="Flow Meters"
        subtitle="Liquid, Gas & Flare Flow Measurement Solutions"
        featured
        backgroundImage="/ultrasonic_gas_flow_meter.jpg"
        imagePosition="center top"
        stats={[
          { num: "3", label: "Technologies" },
          { num: "6+", label: "OEM Brands" },
          { num: "18+", label: "Years" },
        ]}
      />
      <ProductPageIntro
        title="Flow Measurement Solutions"
        description="Flow measurement technology finds applications across various industries, and our authorized principals — SICK, Faure Herman, KEM Küppers, Endress+Hauser, Tek-Trol, and Rockwin — are well equipped to address this diverse challenge. Whether it&apos;s custody transfer meters or devices for monitoring and control, our flow measurement technology consistently operates with utmost safety and reliability."
      />
      <FlowMetersCustodyTransferSection />
      <FlowMetersTechnologiesSection />
      <FlowMetersKemSection />
      <FlowMetersProversSection />
      <FlowMetersFhLabSection />
      <ProductPageProductsList
        products={products}
        category="Flow Meters"
        resolveCardHref={(slug) =>
          slug === "liquid-flow-meters"
            ? "/products/flow-meters/liquid-flow-meters/"
            : slug === "flare-meters"
              ? "/products/flow-meters/flare-meters/"
              : slug === "gas-flow-meters"
                ? "/products/flow-meters/gas-flow-meters/"
                : undefined
        }
      />
      <ProductPageCtaBanner
        title="Need help selecting the right flow meter?"
        description="Our flow measurement specialists can help you choose and configure the right liquid, gas, or flare flow meter for your application."
      />
    </div>
  );
}
