"use client";

import React from "react";
import CardGrid from "@/components/v3/CardGrid";
import FolderCard from "@/components/v3/folder/FolderCard";
import type { ServiceIndustryItem } from "./types";

interface ServiceIndustriesServedProps {
  items: ServiceIndustryItem[];
}

export default function ServiceIndustriesServed({ items }: ServiceIndustriesServedProps) {
  const displayItems = items.slice(0, 6);

  return (
    <CardGrid max={4} className="pt-14 gap-y-12 w-full max-w-[1280px] mx-auto">
      {displayItems.map((ind, idx) => {
        const fullTitle = ind.name;
        const indHref = `/industries/${ind.slug}/`;

        const links = [
          {
            label: `View ${fullTitle}`,
            href: indHref,
          },
          ...(ind.description
            ? [
                {
                  label: ind.description,
                  href: indHref,
                },
              ]
            : []),
        ];

        return (
          <FolderCard
            key={ind.slug || idx}
            kind="SECTOR"
            title={fullTitle}
            href={indHref}
            links={links}
            tone="light"
            appearDelay={idx * 130}
          />
        );
      })}
    </CardGrid>
  );
}
