import Link from "next/link";

export default function ProductPageCtaBanner({
  title,
  description,
  ctaHref = "/contacts/",
  ctaLabel = "Contact Us →",
}: {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative bg-[#1A1A2E] border-t-4 border-[#F5821F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-[22px] mb-1">
              {title}
            </p>
            <p className="text-[#A0A8C0] text-sm">
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="shrink-0 inline-flex items-center gap-2 bg-[#F5821F] hover:bg-[#e07214] text-white font-bold px-6 py-3.5 rounded-[6px] shadow-lg hover:shadow-[#F5821F]/20 transition-all duration-200"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
