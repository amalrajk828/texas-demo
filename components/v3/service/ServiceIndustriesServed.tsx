"use client";

import React from "react";
import GlassFolder from "@/components/ui/glass-folder-cards";
import CardGrid from "@/components/v3/CardGrid";
import type { ServiceIndustryItem } from "./types";

interface ServiceIndustriesServedProps {
  items: ServiceIndustryItem[];
}

export default function ServiceIndustriesServed({ items }: ServiceIndustriesServedProps) {
  const displayItems = items.slice(0, 6);

  return (
    <CardGrid max={4} className="pt-6 w-full max-w-[1280px] mx-auto">
      {displayItems.map((ind, idx) => {
        const fullTitle = ind.name;

        const files = [
          {
            name: `View ${fullTitle}`,
            href: `/industries/${ind.slug}/`,
          },
          ...(ind.description
            ? [
                {
                  name: ind.description,
                },
              ]
            : []),
        ];

        return (
          <GlassFolder
            key={ind.slug || idx}
            label={fullTitle}
            aria-label={fullTitle}
            meta="Sector"
            files={files}
            action="none"
            tone="light"
            labelPlacement="bottom-left"
            art="none"
            appear={true}
            appearDelay={idx * 120}
            width="100%"
            className="h-full"
          />
        );
      })}
    </CardGrid>
  );
}

