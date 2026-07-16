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
    <section className="bg-[#0B0D26] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#e7212b]/40" />
          <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
            Get in touch
          </span>
          <span className="w-8 h-px bg-[#e7212b]/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
          {heading}
        </h2>
        <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contacts/"
            className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          {showAllIndustriesLink && (
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              All Industries
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
