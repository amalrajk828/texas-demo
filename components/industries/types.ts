export type IndustryProduct = {
  category: string;
  name: string;
  slug: string;
  image: string;
  brand: string;
  desc: string;
};

export type IndustryStat = { num: string; label: string };

export type IndustryHighlight = {
  icon: import("lucide-react").LucideIcon;
  text: string;
};

export type CategoryColors = Record<string, string>;
