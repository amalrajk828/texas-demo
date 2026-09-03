import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

interface PartnerContentProps {
  name: string;
  logo: string;
  product: string;
  description: string;
  href: string;
  features?: string[];
  applications?: string[];
}

export default function PartnerContent({ name, logo, product, description, href, features, applications }: PartnerContentProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Logo card */}
          <div className="rounded-2xl border border-[#e8eaf0] bg-[#f8f9fb] p-8 flex items-center justify-center">
            <Image
              src={logo}
              alt={name}
              width={280}
              height={120}
              quality={100}
              className="object-contain w-auto h-auto max-h-32"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Right — Description + CTAs */}
          <div>
            <p className="text-[13px] font-bold tracking-[3px] uppercase text-[#0891B2] mb-3">
              {product}
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#181D4E] leading-snug mb-6">
              About {name}
            </h2>
            <p className="text-gray-500 text-[16px] leading-[1.8] mb-8">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#c01020] text-white text-[15px] font-medium px-7 py-3.5 rounded-xl transition-colors tracking-wide shadow-lg shadow-[#e7212b]/20"
              >
                Explore products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partners/"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#e7212b]/30 text-gray-600 hover:text-[#e7212b] text-[15px] font-medium px-7 py-3.5 rounded-xl transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                All partners
              </Link>
            </div>
          </div>
        </div>

        {/* Features & Applications — only shown when data is provided */}
        {(features && features.length > 0) || (applications && applications.length > 0) ? (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Features */}
            {features && features.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-px bg-[#0891B2]" />
                  <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
                    Key Features
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#181D4E] leading-snug mb-5">
                  {name} Product Range
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-2" />
                      <span className="text-gray-600 text-[15px] leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {applications && applications.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-px bg-[#0891B2]" />
                  <span className="text-[#0891B2] text-[11px] font-semibold tracking-[3px] uppercase">
                    Applications
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#181D4E] leading-snug mb-5">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e7212b] shrink-0 mt-2" />
                      <span className="text-gray-600 text-[15px] leading-snug">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
