import type { Metadata } from "next";
import { blogArticles } from "@/lib/blogArticles";
import BlogPageContent, { type BlogPost } from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "Industrial Engineering Knowledge Hub | Texas Technical Services",
  description:
    "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
  alternates: {
    canonical: "https://texastechserv.com/blog/",
  },
  openGraph: {
    title: "Industrial Engineering Knowledge Hub | Texas Technical Services",
    description:
      "Access expert technical guides and reference articles on Custody Transfer Metering, SCADA systems, and CEMS compliance for heavy industries.",
    url: "https://texastechserv.com/blog/",
    type: "website",
  },
};

const blogPosts: BlogPost[] = Object.entries(blogArticles).map(([slug, article]) => {
  let icon = "Activity";
  if (article.category === "Flow Measurement") icon = "Gauge";
  else if (article.category === "Industrial Automation") icon = "Cpu";

  return {
    slug,
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
  return <BlogPageContent allPosts={blogPosts} />;
}
