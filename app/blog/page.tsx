import type { Metadata } from "next";
import { blogMetadata } from "@/lib/blogMetadata";
import BlogPageContent, { type BlogPost } from "@/components/blog/BlogPageContent";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { SpeakableJsonLd } from "@/components/schema/SpeakableJsonLd";
import { FaqPageJsonLd } from "@/components/schema/FaqPageJsonLd";
import PageFaqSection from "@/components/PageFaqSection";
import { blogIndexFaq } from "@/lib/pageFaqData";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Hub",
  description:
    "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
  keywords: [
    "industrial engineering blog",
    "flow measurement",
    "SCADA",
    "CEMS",
    "NDT",
    "automation",
    "Kuwait",
    "UAE",
    "oil and gas",
  ],
  alternates: {
    canonical: "/blog/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Industrial Engineering Knowledge Hub",
    description:
      "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    url: "/blog/",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Texas Technical Services Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@texastechserv",
    title: "Industrial Engineering Knowledge Hub",
    description:
      "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    images: ["/og-default.png"],
  },
};

const blogPosts: BlogPost[] = blogMetadata.map((article) => {
  let icon = "Activity";
  if (article.category === "Flow Measurement") icon = "Gauge";
  else if (article.category === "Industrial Automation") icon = "Cpu";

  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    date: article.date,
    readTime: article.readTime,
    category: article.category,
    pillar: article.pillar,
    icon,
    image: article.image,
    imageAlt: article.imageAlt,
  };
});

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <SpeakableJsonLd headline="Industrial Engineering Knowledge Hub" />
      <ItemListJsonLd
        name="Texas Technical Services Knowledge Hub"
        items={blogPosts.map((post) => ({
          name: post.title,
          url: `/blog/${post.slug}/`,
          description: post.description,
        }))}
      />
      <FaqPageJsonLd items={blogIndexFaq} />

      <BlogPageContent allPosts={blogPosts} />

      <PageFaqSection items={blogIndexFaq} title="Questions About" highlight="Our Technical Blog" />
    </>
  );
}
