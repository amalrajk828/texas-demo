import { SITE_URL } from "@/lib/site";

export function VideoObjectJsonLd({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  embedUrl,
  uploadDate,
}: {
  name: string;
  description: string;
  thumbnailUrl?: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
}) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
  };
  if (thumbnailUrl) jsonLd.thumbnailUrl = thumbnailUrl;
  if (contentUrl) jsonLd.contentUrl = contentUrl;
  if (embedUrl) jsonLd.embedUrl = embedUrl;
  if (uploadDate) jsonLd.uploadDate = uploadDate;
  jsonLd.publisher = {
    "@type": "Organization",
    name: "Texas Technical Service Company W.L.L.",
    url: SITE_URL,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
