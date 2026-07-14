import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building2, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cement Industry Solutions | Texas Technical Services",
  description:
    "Texas Technical Services delivers CEMS, gas analyzers, and extractive gas analyzers for the cement industry — optimising emissions monitoring, quality control, and operational excellence.",
  alternates: { canonical: "/industries/cement/" },
  keywords: [
    "cement industry CEMS",
    "cement gas analyzers Kuwait",
    "cement emissions monitoring",
    "extractive gas analyzer cement",
    "industrial automation cement manufacturing",
  ],
  openGraph: {
    title: "Cement Industry Solutions | Texas Technical Services",
    description:
      "Advanced OEM analyzer and CEMS solutions for cement manufacturing — backed by 15+ years of industrial expertise.",
    url: "/industries/cement/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cement Industry Solutions | Texas Technical Services",
    description:
      "Advanced OEM analyzer and CEMS solutions for cement manufacturing — backed by 15+ years of industrial expertise.",
  },
};

const products = [
  {
    category: "CEMS",
    name: "CEMS Solutions",
    slug: "cems-solutions",
    image: "/cems.png",
    brand: "SICK",
    desc: "SICK CEMS solutions tailored for cement kiln and clinker cooler stack emissions — continuously measuring NOₓ, SO₂, CO, HCl, HF, NH₃, dust, and O₂ to ensure compliance with environmental permit limits and IED/BAT requirements.",
  },
  {
    category: "Gas Analyzer",
    name: "Gas Analyzers",
    slug: "gas-analyzers",
    image: "/gas_analyzer.png",
    brand: "SICK",
    desc: "SICK gas analyzers using powerful in-situ and extractive measurement principles for cement process optimisation — monitoring kiln atmosphere, combustion gases, and preheater exit conditions to maximise fuel efficiency and clinker quality.",
  },
  {
    category: "Gas Analyzer",
    name: "Extractive Gas Analyzers",
    slug: "extractive-gas-analyzers",
    image: "/extractive_gas_analyzer.jpg",
    brand: "SICK",
    desc: "Reliable continuous extractive gas analysis for cement kiln stacks and raw mill exhausts under the harshest dust-laden, high-temperature conditions — conditioning the sample for precise, repeatable pollutant measurement independent of process upsets.",
  },
];

const categoryColors: Record<string, string> = {
  "CEMS":         "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Gas Analyzer": "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export default function CementPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[480px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/cement_industry.jpg"
            alt="Cement manufacturing plant"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B0D26]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/40 to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 40px)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-28">
          <nav className="flex items-center gap-1.5 mb-8 text-[11px] text-white/35 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link href="/industries/" className="hover:text-white/70 transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-white/60">Cement</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#e7212b] rounded-lg flex items-center justify-center shadow-lg shrink-0">
                  <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  Industry Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.15] mb-5">
                Cement
                <br />
                <em className="not-italic text-[#e7212b]">Industry</em>
              </h1>

              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                Advanced OEM analyzer and CEMS solutions for cement manufacturing —
                optimising emissions monitoring, quality control, and operational excellence
                from raw mill to kiln and clinker cooler.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Emissions Monitoring", "Kiln Control", "Quality Control", "CEMS", "BAT Compliance"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-white/55 tracking-wide border border-white/15 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row lg:flex-col gap-3 shrink-0">
              {[
                { num: "3",   label: "Products" },
                { num: "1+",  label: "OEM Brand" },
                { num: "15+", label: "Years" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-5 py-4 text-center min-w-[88px]"
                >
                  <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                  <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══════════════════════════════════════════ */}
      <section className="bg-[#f4f5f8] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#e7212b]/40" />
                <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
                  Our Product Range
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0B0D26]">
                Solutions for Cement
              </h2>
            </div>
            <span className="text-gray-400 text-[12px] shrink-0 pb-1">
              {products.length} products available
            </span>
          </div>

          {/* 3-col grid — naturally centres the 3 cards on all screen sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((prod, i) => (
              <div
                key={prod.slug}
                className={`fade-up d${i + 1} group bg-white border border-[#e8eaf0] hover:border-[#e7212b]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col`}
                style={{ "--tw-shadow-color": "rgba(231,33,43,0.10)" } as React.CSSProperties}
              >
                <div className="relative h-52 overflow-hidden bg-[#0B0D26] shrink-0">
                  <Image
                    src={prod.image}
                    alt={`${prod.name} — ${prod.brand}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center text-[9px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                        categoryColors[prod.category] ?? "bg-white/10 text-white/60 border-white/15"
                      }`}
                    >
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] text-gray-400 mb-1.5 tracking-wide">{prod.brand}</p>
                  <h3 className="text-[14px] font-medium text-[#0B0D26] group-hover:text-[#e7212b] transition-colors duration-200 leading-snug mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-3 mb-4 flex-1">
                    {prod.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f0f0f0]">
                    <Link
                      href={`/portfolio/${prod.slug}/`}
                      className="inline-flex items-center gap-1.5 text-[#e7212b] text-[11px] font-medium group-hover:gap-2.5 transition-all duration-200"
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="w-4 h-px bg-[#e7212b]/20 group-hover:w-10 transition-all duration-300" />
                  </div>
                </div>

                <div className="h-[3px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="bg-[#0B0D26] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">Get in touch</span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Have a cement industry project?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our specialists about your CEMS or gas analysis requirements.
            Kuwait and Dubai offices ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
