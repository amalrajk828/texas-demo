import type { Metadata } from "next";
import data from "@/data/homepage-review.json";

export function reviewMetadata(route: "light1" | "light2"): Metadata {
  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
    alternates: { canonical: "/" },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    openGraph: {
      ...data.metadata.openGraph,
      type: "website",
      url: `/${route}/`,
    },
    twitter: { ...data.metadata.twitter, card: "summary_large_image" },
  };
}
