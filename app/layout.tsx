import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import ScrollObserver from "@/components/ScrollObserver";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Texas Technical Services | Flow Measurement & Industrial Automation",
    template: "%s | Texas Technical Services",
  },
  description:
    "Texas specializes in flow measurement, control systems, inspection, and industrial automation solutions for oil & gas, refinery, petrochemical, and power plant sectors.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
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
              geo: [
                {
                  "@type": "GeoCoordinates",
                  latitude: 29.1137,
                  longitude: 48.1295,
                },
                {
                  "@type": "GeoCoordinates",
                  latitude: 25.2882,
                  longitude: 55.3247,
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/texas-technical-service-company",
                "https://www.facebook.com/texastechserv",
                "https://www.instagram.com/texas_technical_services",
                "https://www.youtube.com/@TEXASTECHNICALSERVICES",
                "https://x.com/texastechserv",
              ],
              knowsAbout: [
                "Industrial Automation",
                "PLC SCADA Integration",
                "Flow Measurement",
                "Inspection & Testing",
                "Mitsubishi Factory Automation",
                "Process Control Automation",
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollObserver />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
