"use client";

import React from "react";
import FolderCard from "@/components/v3/folder/FolderCard";

export interface DisciplineFolderProps {
  label: string;
  slug: string;
  description?: string;
  index?: number;
}

export default function DisciplineFolder({
  label,
  slug,
  description,
  index = 0,
}: DisciplineFolderProps) {
  const cardHref = `/service/${slug}/`;
  const links = [
    {
      label: `Explore ${label}`,
      href: cardHref,
    },
    ...(description
      ? [
          {
            label: description,
            href: cardHref,
          },
        ]
      : []),
  ];

  return (
    <FolderCard
      kind="DISCIPLINE"
      title={label}
      href={cardHref}
      links={links}
      tone="maroon"
      appearDelay={index * 130}
    />
  );
}
