import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustryCtaBanner({
  heading,
  subtext = "Talk to our team about your requirements. Kuwait and Dubai offices ready to help.",
  showAllIndustriesLink = true,
}: {
  heading: string;
  subtext?: string;
  showAllIndustriesLink?: boolean;
}) {
  return (
    <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-5 h-px bg-[#0891B2]" />
          <span className="text-[#0891B2] text-[11px] font-semibold tracking-[2.5px] uppercase">
            Get in touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 max-w-2xl">
          {heading}
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          {showAllIndustriesLink && (
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              All Industries
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
