import type { Metadata } from "next";
import type { BreadcrumbItem } from "@/components/v3/PageHero";
import type { SpecRow } from "@/components/v3/SpecTable";

export interface ServiceHeroStat {
  label: string;
  value: string;
  note?: string;
}

export interface ServiceOverview {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  checklist?: string[];
  image?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
  badge?: {
    title: string;
    subtitle?: string;
  };
}

export interface ServiceCapabilityItem {
  title: string;
  description: string;
  category?: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export interface ServiceCapabilities {
  eyebrow?: string;
  title: string;
  description?: string;
  columns?: 3 | 4;
  items: ServiceCapabilityItem[];
}

export interface ServiceProcessStep {
  stepNumber?: number;
  title: string;
  description: string;
}

export interface ServiceProcess {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ServiceProcessStep[];
}

export interface ServiceSpecifications {
  eyebrow?: string;
  title: string;
  description?: string;
  caption?: string;
  headers?: { parameter?: string; value?: string; notes?: string };
  rows: SpecRow[];
}

export interface ServicePartnerItem {
  name: string;
  logo: string;
  url?: string;
  category?: string;
  description?: string;
}

export interface ServicePartners {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServicePartnerItem[];
}

export interface ServiceIndustryItem {
  name: string;
  slug: string;
  description?: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServiceRelatedItem {
  slug: string;
  label: string;
  description?: string;
}

export interface ServiceComparisonBlog {
  title: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  heroImage?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  stats?: ServiceHeroStat[];
  overview?: ServiceOverview;
  capabilities?: ServiceCapabilities;
  process?: ServiceProcess;
  specifications?: ServiceSpecifications;
  partners?: ServicePartners;
  industriesServed?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: ServiceIndustryItem[];
  };
  relatedServices?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: ServiceRelatedItem[];
  };
  faq?: ServiceFaqItem[];
  comparisonBlog?: ServiceComparisonBlog;
  ctaBanner?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  meta: Metadata;
  jsonLd: {
    serviceType: string;
    description: string;
    areaServed?: string[];
  };
}
