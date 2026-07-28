import Link from "next/link";

export default function PortfolioGroupHero({
  breadcrumb,
  breadcrumbHref,
  eyebrow,
  titleHighlight,
  titleSuffix,
  description,
}: {
  breadcrumb: string;
  breadcrumbHref?: string;
  eyebrow: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
}) {
  return (
    <section className="relative bg-[#000000] blueprint-grid blueprint-dot-grid overflow-hidden pt-32 pb-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(231,33,43,0.14) 0%, transparent 65%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 mb-8 text-[12px] text-white/30">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <span>/</span>
          {breadcrumbHref ? (
            <Link href={breadcrumbHref} className="hover:text-white/60 transition-colors">
              {breadcrumb}
            </Link>
          ) : (
            <span className="text-white/60">{breadcrumb}</span>
          )}
        </nav>
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#e7212b]" />
            <span className="text-[#e7212b] text-[11px] font-semibold tracking-[3px] uppercase">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
            {titleHighlight}
            <em className="not-italic text-[#e7212b]">{titleSuffix}</em>
          </h1>
          <p className="text-white/50 text-base sm:text-[17px] leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
