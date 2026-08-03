import { SITE_URL } from "@/lib/site";

const NAV_ITEMS = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us/" },
  { name: "Services", url: "/services/" },
  { name: "Industries", url: "/industries/" },
  { name: "Products", url: "/products/" },
  { name: "Blog", url: "/blog/" },
  { name: "Clients", url: "/clients/" },
  { name: "Partners", url: "/partners/" },
  { name: "Contact", url: "/contacts/" },
];

export function SiteNavigationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: NAV_ITEMS.map((item) => item.name),
    url: NAV_ITEMS.map((item) => `${SITE_URL}${item.url}`),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
