import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Sora } from "next/font/google";
import Script from "next/script";
import { V3Header, V3Footer } from "@/components/v3";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import "./globals-v3.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Texas Technical Services | Flow Measurement & Industrial Automation",
    template: "%s | Texas Technical Services",
  },
  description:
    "Premier engineering provider specializing in fiscal custody transfer metering, industrial PLC SCADA automation, and non-destructive testing across Kuwait, UAE, and the GCC since 2008.",
  keywords: [
    "flow measurement", "industrial automation", "PLC SCADA integration",
    "inspection testing", "NDT services", "custody metering",
    "oil and gas", "refinery", "petrochemical", "power plant",
    "Kuwait", "UAE", "Dubai", "GCC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Texas Technical Services",
    images: [
      {
        url: `${SITE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Texas Technical Services — Flow Measurement & Industrial Automation",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    site: "@texastechserv",
  },
};

const GTM = "GTM-W776KVLW";

export default function V3RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} ${plusJakarta.variable}`}
      style={{ backgroundColor: "#e8e8e6", color: "#1a1a1a" }}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`,
          }}
        />
        <Script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#local-business`,
              name: "Texas Technical Service Company W.L.L.",
              description:
                "Industrial automation, PLC SCADA integration, flow measurement, and inspection & testing company serving Kuwait, UAE, Dubai, and the GCC.",
              url: `${SITE_URL}/`,
              image: `${SITE_URL}/og-default.png`,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.svg`,
              },
              email: "sales@texastechserv.com",
              telephone: ["+965 97243755", "+965 66347267", "+971 569553747", "+971 567793973"],
              foundingDate: "2008",
              areaServed: ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"],
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street",
                  addressLocality: "Fahaheel",
                  addressCountry: "KW",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden bg-[#e8e8e6] text-[#1a1a1a] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#6b191b] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <V3Header />
        <main id="main-content">
          {children}
        </main>
        <V3Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
