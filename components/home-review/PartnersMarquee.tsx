"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { ALL_PARTNERS } from "@/lib/partners";
import { useMotionPreference } from "./Motion";
import s from "./review.module.css";

// Same logos, order and destinations as the homepage's PartnersTicker.
export default function PartnersMarquee() {
  const [paused, setPaused] = useState(false);
  const reduced = useMotionPreference();
  return (
    <section className={s.clients} aria-label="Trusted Technology Partners">
      <div className={s.clientsHeading}>
        <Link href="/partners/">Trusted Technology Partners</Link>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Resume partner carousel" : "Pause partner carousel"
            }
            aria-pressed={paused}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )}
      </div>
      <div className={s.clientsWindow}>
        <div
          className={s.clientsRail}
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[0, 1].map((copy) => (
            <div
              className={s.clientsTrack}
              key={copy}
              aria-hidden={copy === 1}
              inert={copy === 1}
            >
              {ALL_PARTNERS.map((partner) => (
                <Link
                  key={partner.slug}
                  prefetch={false}
                  href={
                    partner.href.startsWith("/solutions/")
                      ? partner.href
                      : `/partners/${partner.slug}/`
                  }
                  aria-label={partner.name}
                >
                  <span className={s.clientsLogo}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="170px"
                    />
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
