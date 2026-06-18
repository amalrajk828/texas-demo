import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://texastechserv.com"),
  title: {
    default: "Texas Technical Services | Flow Measurement & Industrial Automation",
    template: "%s | Texas Technical Services",
  },
  description:
    "Texas specializes in flow measurement, control systems, inspection, and industrial automation solutions for oil & gas, refinery, petrochemical, and power plant sectors.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://texastechserv.com",
    siteName: "Texas Technical Services",
  },
  robots: { index: true, follow: true },
};

const GTM = "GTM-NK9KQVKJ";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
