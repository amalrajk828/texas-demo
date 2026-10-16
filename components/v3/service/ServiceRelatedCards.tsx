"use client";

import React from "react";
import GlassFolder from "@/components/ui/glass-folder-cards";
import CardGrid from "@/components/v3/CardGrid";
import type { ServiceRelatedItem } from "./types";

interface ServiceRelatedCardsProps {
  items: ServiceRelatedItem[];
}

export default function ServiceRelatedCards({ items }: ServiceRelatedCardsProps) {
  const displayItems = items.slice(0, 6);

  return (
    <CardGrid max={3} className="pt-6 w-full max-w-[1280px] mx-auto">
      {displayItems.map((item, idx) => {
        const fullTitle = item.label;

        const files = [
          {
            name: `Explore ${fullTitle}`,
            href: `/service/${item.slug}/`,
          },
          ...(item.description
            ? [
                {
                  name: item.description,
                },
              ]
            : []),
        ];

        return (
          <GlassFolder
            key={item.slug || idx}
            label={fullTitle}
            aria-label={fullTitle}
            meta="Discipline"
            files={files}
            action="none"
            tone="light"
            labelPlacement="bottom-left"
            art="featured"
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

