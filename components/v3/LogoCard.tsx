import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface LogoCardProps {
  name: string;
  logo: string;
  url?: string;
  external?: boolean;
  category?: string;
  description?: string;
  className?: string;
}

/**
 * Standard LogoCard for Partners, Clients, Certifications:
 * - Rounded card container (rounded-[18px])
 * - Off-white studio surface with soft border
 * - Image container with object-contain
 */
export default function LogoCard({
  name,
  logo,
  url,
  external = false,
  category,
  description,
  className = "",
}: LogoCardProps) {
  const content = (
    <div
      className={`group relative bg-white/80 hover:bg-white backdrop-blur-md border border-black/[0.07] hover:border-[#6b191b]/40 rounded-[18px] p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.1)] ${className}`}
    >
      {external && (
        <span className="absolute top-3 right-3 text-black/30 group-hover:text-[#6b191b] transition-colors">
          <ExternalLink className="w-3.5 h-3.5" />
        </span>
      )}

      <div className="relative w-full h-16 sm:h-20 mb-3 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} emblem`}
          fill
          className="object-contain filter transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>

      <div className="w-full">
        {category && (
          <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-[#6b191b] mb-1">
            {category}
          </span>
        )}
        <h3 className="font-heading text-[13px] sm:text-[14px] font-bold text-[#1a1a1a] group-hover:text-[#6b191b] transition-colors line-clamp-2">
          {name}
        </h3>
        {description && (
          <p className="text-[12px] text-[#595956] mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (url) {
    if (external) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={url} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
