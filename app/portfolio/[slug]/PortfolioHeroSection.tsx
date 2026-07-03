"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function PortfolioHeroSection({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden bg-[#1a1d35] shadow-xl border border-[#E8E8F0] flex items-center justify-center shrink-0">
      {image && !imgError ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 450px"
          priority
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="text-[#A0A8C0] text-[13px] font-semibold uppercase tracking-wider text-center p-4">
          {name}
        </div>
      )}
    </div>
  );
}
