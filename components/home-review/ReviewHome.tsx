import { SITE_EMAIL, SITE_URL } from "@/lib/site";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PartnersMarquee from "./PartnersMarquee";
import {
  Trust,
  Ticker,
  WhatWeDo,
  About,
  Services,
  Industries,
  Vision,
  Team,
  Partners,
  Certifications,
  CTA,
  Footer,
} from "./Sections";
import s from "./review.module.css";

export default function ReviewHome({ theme }: { theme: "light1" | "light2" }) {
  const glass = theme === "light2";
  return (
    <div
      id="top"
      className={`${s.page} ${glass ? s.glass : s.editorial}`}
      data-review-theme={theme}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Texas Technical Service Company W.L.L.",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.svg`,
            foundingDate: "2008",
            email: SITE_EMAIL,
            telephone: "+965 97243755",
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar glass={glass} />
      <main id="main-content">
        <Hero glass={glass} />
        {glass && <PartnersMarquee />}
        <Trust />
        <Ticker />
        {!glass && <About />}
        <WhatWeDo glass={glass} />
        <Services glass={glass} />
        {glass ? (
          <>
            <Partners glass />
            <Industries />
          </>
        ) : (
          <>
            <Industries />
            <Partners />
          </>
        )}
        <Vision glass={glass} />
        {glass ? (
          <>
            <Team />
            <About />
          </>
        ) : (
          <Team />
        )}
        <Certifications glass={glass} />
        <CTA glass={glass} />
      </main>
      <Footer glass={glass} />
    </div>
  );
}
