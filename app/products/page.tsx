import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { productsListingFaq } from "@/lib/pageFaqData";
import ProductHeroWithTrunk from "@/components/products/common/ProductHeroWithTrunk";
import {
  Gauge,
  Activity,
  FlaskConical,
  Monitor,
  Cpu,
  Radio,
  Wifi,
  Server,
  LayoutDashboard,
  Tablet,
  Zap,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
  description:
    "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
  alternates: { canonical: "/products/" },
  openGraph: {
    title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
    description:
      "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
    url: "/products/",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Meters, Analyzers, PLCs & Industrial Automation Products",
    description:
      "Flow meters, analyzers, sensors, PLCs, SCADA, HMI panels, VFDs, AC servos, and custody metering solutions from leading OEMs.",
    images: ["/og-default.png"],
  },
  keywords: [
    "flow meters Kuwait",
    "industrial analyzers Kuwait",
    "PLC and SCADA products",
    "VFD and AC servo drives Kuwait",
    "HMI panels Kuwait",
    "ICONICS SCADA Kuwait",
    "custody transfer metering skid",
    "industrial sensors and instrumentation",
    "process automation products GCC",
    "Mitsubishi electric products Kuwait",
  ],
};

type ProductCategory = {
  title: string;
  description: string;
  href: string;
  Icon: React.ElementType;
  sub?: string[];
};

const categories: ProductCategory[] = [
  {
    title: "Custody Metering Solutions",
    description: "High-accuracy fiscal metering packages for custody transfer of oil, gas, and LNG.",
    href: "/products/custody-metering-solutions/",
    Icon: Gauge,
  },
  {
    title: "Flow Meters",
    description: "Precision flow measurement instruments for liquids, gases, and flare applications.",
    href: "/products/flow-meters/",
    Icon: Activity,
    sub: ["Liquid Flow Meters", "Flare Meters", "Gas Flow Meters"],
  },
  {
    title: "Analyzers",
    description: "Industrial process analyzers for emissions monitoring, dust, and gas analysis.",
    href: "/products/analyzers/",
    Icon: FlaskConical,
    sub: ["CEMS", "Dust Analyzers", "Gas Analyzers"],
  },
  {
    title: "Control Room Interior & Console",
    description: "Ergonomic control room furniture and console systems for critical operations.",
    href: "/products/control-room-interior-and-console/",
    Icon: Monitor,
  },
  {
    title: "Industrial Automation",
    description: "End-to-end automation solutions for process plants and manufacturing facilities.",
    href: "/products/industrial-automation/",
    Icon: Cpu,
  },
  {
    title: "Field Instruments",
    description: "Pressure, temperature, level, and flow field instruments for industrial processes.",
    href: "/products/field-instruments/",
    Icon: Radio,
  },
  {
    title: "Industrial Sensors",
    description: "SICK sensors for detection, safety, identification, and measurement across industries.",
    href: "/products/sensors/",
    Icon: Wifi,
  },
  {
    title: "PLC",
    description: "Mitsubishi MELSEC programmable logic controllers for reliable machine control.",
    href: "/products/plc/",
    Icon: Server,
  },
  {
    title: "ICONICS",
    description: "ICONICS Genesis64 SCADA/HMI software for real-time industrial monitoring and control.",
    href: "/products/iconics/",
    Icon: LayoutDashboard,
  },
  {
    title: "GOT (Graphic Operator Panels)",
    description: "Mitsubishi GOT series HMI panels with intuitive touchscreen operator interfaces.",
    href: "/products/got/",
    Icon: Tablet,
  },
  {
    title: "Frequency Inverters (VFD)",
    description: "Variable frequency drives for precise motor speed control and energy efficiency.",
    href: "/products/frequency-inverter-vfd/",
    Icon: Zap,
  },
  {
    title: "AC Servos",
    description: "Mitsubishi MelSERVO AC servo systems for high-precision motion control applications.",
    href: "/products/acservos/",
    Icon: RotateCcw,
  },
];

function ProductCard({ item, index }: { item: ProductCategory; index: number }) {
  const delays = ["0.05s", "0.1s", "0.15s", "0.2s", "0.25s", "0.3s"];
  const delay = delays[index % delays.length];

  return (
    <Link
      href={item.href}
      className="group relative bg-[#141629] border border-white/[0.07] rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#e7212b]/50 hover:shadow-xl hover:shadow-[#e7212b]/5"
      style={{ animationDelay: delay }}
    >
      {/* Left accent on hover */}
      <span className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-[#e7212b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-[#e7212b]/10 border border-[#e7212b]/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#e7212b]/20">
        <item.Icon className="w-5 h-5 text-[#e7212b]" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-white font-medium text-[15px] leading-snug mb-2 group-hover:text-[#e7212b] transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-white/70 text-[12px] leading-relaxed">{item.description}</p>

        {/* Sub-items */}
        {item.sub && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.sub.map((s) => (
              <span
                key={s}
                className="text-[10px] text-white/30 border border-white/10 rounded px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1 text-[#e7212b] text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
        View More <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Products", href: "/products/" },
      ]} />
      <ItemListJsonLd
        name="Industrial Product Categories"
        items={categories.map((c) => ({
          name: c.title,
          url: c.href,
          description: c.description,
        }))}
      />
      <SpeakableJsonLd headline="Flow Meters, Analyzers, PLCs & Industrial Automation Products" />
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <ProductHeroWithTrunk
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        eyebrow="Product Catalogue"
        title="Flow Meters, PLCs & Automation Products"
        subtitle="Flow measurement, industrial automation, and process instrumentation solutions from world-class manufacturers — engineered for the most demanding environments."
      />

      {/* ── Products Grid ────────────────────────────────────── */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-16 lg:py-20 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <ProductCard key={cat.href} item={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FaqPageJsonLd items={productsListingFaq} />
      <PageFaqSection items={productsListingFaq} title="Questions About" highlight="Our Products" />

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-[#12163A] border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-medium text-xl mb-1">
                Not sure which product fits your application?
              </p>
              <p className="text-white/70 text-sm">
                Our engineers will help you select the right solution for your process requirements.
              </p>
            </div>
            <Link
              href="/contacts/"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Talk to an Engineer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
