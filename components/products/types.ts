import type { LucideIcon } from "lucide-react";

export type ProductPageStat = { num: string; label: string };

export type IconCardItem = {
  Icon?: LucideIcon;
  title: string;
  body: string;
};

export type BigCardItem = {
  Icon?: LucideIcon;
  title: string;
  subtitle?: string;
  items?: { Icon?: LucideIcon; label: string; desc?: string }[] | string[];
  variant?: "bordered" | "ghost";
};

export type BadgeItem = {
  name: string;
  desc?: string;
  Icon?: LucideIcon;
};

export type IconCardVariant = "light" | "dark";
export type IconCardGridCols = 3 | 4 | 5;
