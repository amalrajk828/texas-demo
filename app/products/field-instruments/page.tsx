import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Field Instruments - Texas Technical Services",
  description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
  alternates: { canonical: "/products/field-instruments/" },
  keywords: [
    "field instruments Kuwait",
    "SICK temperature sensors",
    "pressure level flow sensors",
    "condition monitoring sensors",
    "industrial field instrumentation",
  ],
  openGraph: {
    title: "Field Instruments - Texas Technical Services",
    description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
    url: "/products/field-instruments/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Instruments - Texas Technical Services",
    description: "Pressure, temperature, level, and flow field instruments for industrial processes. SICK provides top-notch solutions for contact temperature measurement, level sensing, pressure measurement, condition monitoring, and flow metering.",
  },
};

export default function FieldInstrumentsPage() {
  const products = getProductsByPath("/products/field-instruments/");
  return (
<div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Field Instruments", href: "/products/field-instruments/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Field Instruments"
        eyebrow="SICK · Field Instruments"
        title="Field Instruments"
        subtitle="Pressure, temperature, level, and flow field instruments for industrial processes — engineered for precision and reliability."
        featured
        backgroundImage="/images/field_instruments/temperature_sensors/1.png"
        imagePosition="center center"
        stats={[
          { num: "5", label: "Variables" },
          { num: "SICK", label: "OEM Brand" },
          { num: "18+", label: "Years" },
        ]}
      />
      <ProductPageIntro
        title="SICK Field Instruments Range"
        description="We offer a comprehensive range of SICK field instruments for precise measurement and monitoring of critical process variables — including temperature, level, pressure, condition monitoring, and flow — engineered for accuracy and reliability in the most demanding industrial environments."
      />
      <ProductPageProductsList
        products={products}
        category="Field Instruments"
        imageFit="contain"
      />
      <ProductPageCtaBanner
        title="Need help selecting the right field instrument?"
        description="Our engineers are ready to assist with your application requirements."
      />
    </div>
  );
}
