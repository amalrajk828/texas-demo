import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import ProductPageHero from "@/components/products/ProductPageHero";
import ProductPageIntro from "@/components/products/ProductPageIntro";
import ProductPageProductsList from "@/components/products/ProductPageProductsList";
import ProductPageCtaBanner from "@/components/products/ProductPageCtaBanner";
import ControlRoomErgonomicSection from "@/components/products/ControlRoomErgonomicSection";
import ControlRoomServicesSection from "@/components/products/ControlRoomServicesSection";
import ControlRoomStandardsSection from "@/components/products/ControlRoomStandardsSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getProductsByPath } from "@/lib/products";

export const metadata: Metadata = {
  title: "Control Room Interior & Console",
  description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces. ISO 11064 compliant.",
  alternates: { canonical: "/products/control-room-interior-and-console/" },
  keywords: [
    "control room solutions Kuwait",
    "command centre consoles",
    "Pyrotech workspace solutions",
    "ergonomic control room design",
    "ISO 11064 control room",
    "operator console Kuwait",
    "turnkey control room GCC",
    "control room interior design",
  ],
  openGraph: {
    title: "Control Room Interior & Console",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
    url: "/products/control-room-interior-and-console/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Control Room Interior & Console",
    description: "Pyrotech Workspace Solutions delivers turnkey Control Room Solutions and Ergonomic Command Centre Consoles designed for sustainable, safe and contemporary workspaces.",
  },
};

export default function ControlRoomPage() {
  const products = getProductsByPath("/products/control-room-interior-and-console/");
  return (
    <div className="min-h-screen bg-[#0B0D26] font-sans antialiased selection:bg-[#e7212b] selection:text-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
        { name: "Control Room Interior & Console", href: "/products/control-room-interior-and-console/" },
      ]} />
      <ProductPageHero
        breadcrumbLabel="Control Room Interior & Console"
        eyebrow="Control Room Interior & Console"
        title="Control Room Interior & Console"
        subtitle="Ergonomic control room furniture and console systems for critical operations — from Pyrotech Workspace Solutions."
        featured
        backgroundImage="/Dynamic-XE_Banner-Image-scaled.jpg"
        stats={[
          { num: "18+", label: "Years Experience" },
          { num: "60,000+", label: "Installations" },
          { num: "30+", label: "Countries" },
        ]}
      />
      <ProductPageIntro
        title="Control Room Solutions by Pyrotech"
        description="Pyrotech Workspace Solutions is a founder for delivering turnkey Control Room Solutions and Ergonomic Command Centre Console. Their idea of a command centre is based on sustainable, safe and contemporary workspace for both the operators and the equipment. They are looking further to provide ultra-modern designs with strict adherence to international standards of Control Rooms Solutions & Control desks."
      />
      <ControlRoomErgonomicSection />

      <section className="bg-[#0B0D26] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <YouTubeEmbed url="https://youtu.be/t90rfWiViw8" />
        </div>
      </section>

      <ProductPageProductsList
        products={products}
        category="Control Room Interior & Console"
        imageFit="contain"
      />
      <ControlRoomServicesSection />
      <ControlRoomStandardsSection />

      <section className="bg-[#0B0D26] py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#e7212b] text-[10px] font-semibold tracking-[3px] uppercase">
                Complete the Package
              </span>
              <h3 className="mt-2 text-white text-xl font-bold">
                Pair Your Console with PWS Raised Access Flooring
              </h3>
              <p className="text-white/60 text-[14px] mt-2 max-w-xl">
                India&apos;s most trusted raised access floor — high-density calcium
                sulphate panels purpose-built for control rooms, with vibration
                control, cable management, and GREENGUARD Gold certification.
              </p>
            </div>
            <Link
              href="/solutions/pws-floor-solutions/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#0B0D26] text-white font-semibold px-6 py-3.5 rounded-[6px] transition-colors text-[14px]"
            >
              Explore Access Flooring →
            </Link>
          </div>
        </div>
      </section>

      <ProductPageCtaBanner
        title="Need a custom control room solution?"
        description="Our team can help you design and deploy the ideal command centre for your operations."
      />
    </div>
  );
}
