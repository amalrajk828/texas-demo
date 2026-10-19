"use client";

import React from "react";
import CardGrid from "@/components/v3/CardGrid";
import FolderCard from "@/components/v3/folder/FolderCard";
import type { ServiceRelatedItem } from "./types";

interface ServiceRelatedCardsProps {
  items: ServiceRelatedItem[];
}

export default function ServiceRelatedCards({ items }: ServiceRelatedCardsProps) {
  const displayItems = items.slice(0, 6);

  return (
    <CardGrid max={3} className="pt-14 gap-y-12 w-full max-w-[1280px] mx-auto">
      {displayItems.map((item, idx) => {
        const itemHref = `/service/${item.slug}/`;
        const links = [
          {
            label: `Explore ${item.label}`,
            href: itemHref,
          },
          ...(item.description
            ? [
                {
                  label: item.description,
                  href: itemHref,
                },
              ]
            : []),
        ];

        return (
          <FolderCard
            key={item.slug || idx}
            kind="DISCIPLINE"
            title={item.label}
            href={itemHref}
            links={links}
            tone="maroon"
            appearDelay={idx * 130}
          />
        );
      })}
    </CardGrid>
  );
}
