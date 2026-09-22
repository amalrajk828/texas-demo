import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "18+", label: "Years" },
  { num: "8", label: "Industries" },
  { num: "200+", label: "Clients" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#000000] blueprint-grid blueprint-dot-grid relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(231,33,43,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-[#0891B2]" />
              <span className="text-[#0891B2] text-[11px] font-semibold tracking-[2.5px] uppercase">
                ISO 9001:2015 Certified · Est. 2008
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-5">
              Industrial Solutions
              <br />
              for{" "}
              <em className="not-italic text-current">Oil &amp; Gas,</em>
              <br />
              Refinery &amp; Beyond
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Flow measurement, industrial automation, inspection &amp; testing
              for the world&apos;s most demanding environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/"
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Our Services →
              </Link>
            </div>
          </div>

          <div className="flex lg:flex-col gap-3 justify-start lg:justify-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center min-w-[88px] transition-colors duration-200"
              >
                <p className="text-2xl font-bold text-[#e7212b]">{s.num}</p>
                <p className="text-[12px] text-white/30 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
