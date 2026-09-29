import Image from "next/image";
import Link from "next/link";
import {
  Gauge,
  Cpu,
  ScanLine,
  ArrowUpRight,
  BrainCircuit,
  Workflow,
} from "lucide-react";
import data from "@/data/homepage-review.json";
import { ALL_PARTNERS } from "@/lib/partners";
import { AnimatedNumber, Card, Reveal } from "./Motion";
import EditorialServiceCards from "./EditorialServiceCards";
import EditorialVision from "./EditorialVision";
import s from "./review.module.css";

const images = [
  "/blog/metering-skid-precision.jpg",
  "/homevideos/INSPECTION-AND-TESTING1.jpg",
  "/images/services/automation_full.jpg",
];
const icons = [Gauge, ScanLine, Cpu];
const industryImages = [
  "/oil_and_gas.webp",
  "/refinery.webp",
  "/petrochemical.webp",
  "/lng.jpg",
  "/power_plant.webp",
  "/water_treatment.webp",
  "/cement_industry.webp",
  "/metal_and_steel.jpg",
];
const industrySlugs = [
  "oil-gas",
  "refinery",
  "petrochemicals",
  "lng",
  "power-plant",
  "water-treatment",
  "cement",
  "metal-steel",
];
type ThemeProps = { glass?: boolean };

function Heading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className={s.sectionHeading}>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className={s.sectionIntro}>{intro}</p>}
    </Reveal>
  );
}
function More({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link prefetch={false} href={href} className={s.textLink}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function Trust() {
  return (
    <section className={s.trust} aria-label="Certifications">
      <div className={`${s.container} ${s.trustGrid}`}>
        {data.about.certifications.map((cert) => (
          <a href="#quality" key={cert.label}>
            <Image
              src={cert.badge}
              alt=""
              width={46}
              height={46}
              sizes="46px"
              quality={60}
            />
            <span>
              <strong>{cert.label}</strong>
              <small>{cert.sub}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Ticker() {
  return (
    <div className={s.ticker} aria-label="Services">
      <div className={s.container}>
        {data.ticker.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function WhatWeDo({ glass }: ThemeProps) {
  return (
    <section className={`${s.section} ${s.what}`} id="expertise">
      <div className={s.container}>
        <Heading {...data.what} />
        {glass ? (
          <div className={s.whatGrid}>
            {data.what.services.map((item, i) => {
              const Icon = icons[i];
              return (
                <Card key={item.num} glass className={s.whatCard}>
                  <span className={s.cardIndex}>{item.num}</span>
                  <div className={s.icon}>
                    <Icon size={25} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <More href="/services/">Learn more about our services</More>
                </Card>
              );
            })}
          </div>
        ) : (
          <EditorialServiceCards />
        )}
        <div className={s.overview}>
          <Reveal className={s.overviewVisual}>
            <Image
              src="/our-team/Oil-Gas.jpg"
              alt="Oil & Gas"
              fill
              sizes="(max-width: 760px) 90vw, 45vw"
              className={s.cover}
            />
            <span className={s.imageBadge}>
              5 Certifications<small>ISO · UASL · Accurate</small>
            </span>
          </Reveal>
          <Reveal className={s.overviewCopy}>
            {data.what.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <div className={s.miniStats}>
              {data.what.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className={s.actions}>
              <Link prefetch={false} href="/contacts/" className={s.button}>
                Contact Us <ArrowUpRight size={18} />
              </Link>
              <More href="/services/">Our Services</More>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services({ glass }: ThemeProps) {
  return (
    <section className={`${s.section} ${s.services}`} id="services">
      {!glass && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(49,92,99,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(49,92,99,0.055)_1px,transparent_1px)] [background-size:52px_52px]"
        />
      )}
      <div className={s.container}>
        <Heading {...data.services} />
        <div
          className={s.serviceGrid}
          role={glass ? undefined : "region"}
          aria-label={glass ? undefined : "Industrial services"}
          tabIndex={glass ? undefined : 0}
        >
          {data.services.items.map((item, i) => (
            <Card key={item.title} glass={glass} className={s.serviceCard}>
              <div className={s.serviceImage}>
                <Image
                  src={images[i]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 760px) 90vw, 40vw"
                  className={s.cover}
                />
                {glass && <span>0{i + 1}</span>}
              </div>
              <div className={s.serviceBody}>
                <p className={s.eyebrow}>{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <More href={item.href}>Learn more about {item.tag}</More>
              </div>
            </Card>
          ))}
        </div>
        <div className={s.sectionEnd}>
          <More href="/service/">View all services</More>
        </div>
      </div>
    </section>
  );
}

export function Solutions({ glass }: ThemeProps) {
  return (
    <section className={`${s.section} ${s.solutions}`} id="solutions">
      <div className={s.container}>
        <Heading {...data.solutions} />
        <div className={s.solutionGrid}>
          {data.solutions.items.map((item, i) => {
            const Icon = i === 0 ? Workflow : BrainCircuit;
            return (
              <Card glass={glass} key={item.label} className={s.solutionCard}>
                <div className={s.solutionArt} aria-hidden="true">
                  <Icon strokeWidth={0.7} />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={s.solutionBody}>
                  <p className={s.eyebrow}>{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <More href={item.href}>Learn more about {item.label}</More>
                </div>
              </Card>
            );
          })}
        </div>
        <div className={s.sectionEnd}>
          <More href="/partners/">Explore all partners</More>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section id="industries" className={`${s.section} ${s.industries}`}>
      <div className={s.container}>
        <Heading
          eyebrow="Industries"
          title="Oil & Gas · Refinery · Petrochemicals · LNG"
        />
        <div className={s.industryGrid}>
          {data.industries.map((name, i) => (
            <Link
              prefetch={false}
              key={name}
              href={`/industries/${industrySlugs[i]}/`}
              className={s.industryCard}
            >
              <Image
                src={industryImages[i]}
                alt=""
                fill
                sizes="(max-width: 760px) 45vw, 23vw"
                className={s.cover}
              />
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Vision({ glass }: ThemeProps) {
  if (!glass) return <EditorialVision />;
  return (
    <section className={`${s.section} ${s.vision}`}>
      <div className={s.container}>
        <Heading {...data.vision} />
        <div className={s.visionGrid}>
          {data.vision.stats.map((stat) => (
            <Card key={stat.label} glass={glass} className={s.visionCard}>
              <strong>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </strong>
              <h3>{stat.label}</h3>
              <p>{stat.desc}</p>
            </Card>
          ))}
        </div>
        <p className={s.visionNote}>{data.vision.note}</p>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className={`${s.section} ${s.team}`}>
      <div className={`${s.container} ${s.teamGrid}`}>
        <Reveal className={s.teamVisual}>
          <Image
            src="/our-team/our_team.webp"
            alt="Our team"
            fill
            sizes="(max-width: 760px) 90vw, 45vw"
            className={s.cover}
          />
          <div className={s.teamBadge}>
            <strong>{data.team.number}</strong>
            <span>{data.team.label}</span>
          </div>
        </Reveal>
        <Reveal className={s.teamCopy}>
          <p className={s.eyebrow}>{data.team.eyebrow}</p>
          <h2>{data.team.title}</h2>
          <p>{data.team.text}</p>
          <div className={s.teamHighlights}>
            {data.team.highlights.map((item) => (
              <span key={item.label}>
                {item.badge && (
                  <Image
                    src={
                      item.badge === "/about/cert-accurate-white.png"
                        ? "/about/cert-accurate.png"
                        : item.badge
                    }
                    alt=""
                    width={28}
                    height={28}
                  />
                )}{" "}
                {item.label}
              </span>
            ))}
          </div>
          <More href="/about-us/">Know More</More>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className={`${s.section} ${s.about}`} id="about">
      <div className={`${s.container} ${s.aboutGrid}`}>
        <Reveal className={s.aboutVisual}>
          <Image
            src="/our-team/whatwedo.jpg"
            alt="What we do"
            fill
            sizes="(max-width: 760px) 90vw, 42vw"
            className={s.cover}
          />
          <span className={s.aboutYear}>
            Est. <strong>2008</strong>
          </span>
        </Reveal>
        <Reveal className={s.aboutCopy}>
          <p className={s.eyebrow}>{data.about.eyebrow}</p>
          <h2>{data.about.title}</h2>
          <p>{data.about.text}</p>
          <More href="/about-us/">
            Learn more about Texas Technical Services
          </More>
        </Reveal>
      </div>
    </section>
  );
}

export function Certifications({ glass }: ThemeProps) {
  return (
    <section id="quality" className={`${s.section} ${s.quality}`}>
      <div className={s.container}>
        <Heading eyebrow="5 Certifications" title="ISO · UASL · Accurate" />
        <div className={s.certGrid}>
          {data.about.certifications.map((cert, index) => (
            <Card key={cert.label} glass={glass} className={s.certCard}>
              <Link prefetch={false} href="/certifications/">
                {!glass && (
                  <span className={s.certIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                )}
                <Image
                  src={cert.badge}
                  alt={cert.label}
                  width={90}
                  height={90}
                  sizes="90px"
                />
                <h3>{cert.label}</h3>
                <p>{cert.sub}</p>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners({ glass = false }: ThemeProps) {
  return (
    <section id="partners" className={`${s.section} ${s.partners}`}>
      <div className={s.container}>
        <Heading
          eyebrow={glass ? "Solutions & Partners" : "Partners"}
          title={glass ? "Trusted Technology Partners" : "Trusted Partners"}
        />
        <div className={s.partnerGrid}>
          {ALL_PARTNERS.map((partner) => (
            <Link
              prefetch={false}
              key={partner.slug}
              href={
                partner.href.startsWith("/solutions/")
                  ? partner.href
                  : `/partners/${partner.slug}/`
              }
            >
              <span className={s.partnerLogo}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="150px"
                />
              </span>
              {!glass && <span aria-hidden="true">{partner.name}</span>}
            </Link>
          ))}
        </div>
        <div className={s.sectionEnd}>
          <More href="/partners/">Explore all partners</More>
        </div>
      </div>
    </section>
  );
}

export function CTA({ glass }: ThemeProps) {
  if (glass)
    return (
      <section
        id="contact"
        className={`${s.section} ${s.cta} ${s.platformCta}`}
      >
        <div className={s.container}>
          <Card glass className={`${s.solutionCard} ${s.contactCard}`}>
            <div className={`${s.solutionArt} ${s.contactArt}`}>
              <Image
                src="/blog/metering-skid-precision.jpg"
                alt={data.services.items[0].title}
                fill
                sizes="(max-width: 760px) 90vw, 38vw"
                className={s.cover}
              />
              <span />
              <span />
              <span />
            </div>
            <div className={s.solutionBody}>
              <p className={s.eyebrow}>{data.cta.eyebrow}</p>
              <h2>{data.cta.title}</h2>
              <p className={s.ctaText}>{data.cta.text}</p>
              <div className={s.actions}>
                <Link prefetch={false} href="/contacts/" className={s.button}>
                  Contact Us <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  prefetch={false}
                  href="/services/"
                  className={s.secondary}
                >
                  Our Services <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  return (
    <section id="contact" className={`${s.section} ${s.cta}`}>
      <div className={`${s.container} ${s.editorialCtaGrid}`}>
        <Reveal className={s.editorialCtaCopy}>
          <p className={s.eyebrow}>{data.cta.eyebrow}</p>
          <h2>{data.cta.title}</h2>
          <p className={s.ctaText}>{data.cta.text}</p>
          <div className={s.actions}>
            <Link prefetch={false} href="/contacts/" className={s.button}>
              Contact Us <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link prefetch={false} href="/services/" className={s.secondary}>
              Our Services <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal className={s.editorialCtaVisual}>
          <Image
            src="/images/services/metering-control-integration.jpg"
            alt="Industrial engineering site"
            fill
            sizes="(max-width: 760px) 90vw, 42vw"
            className={s.cover}
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer({ glass }: ThemeProps) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerGrid}>
          <div>
            <Link href={glass ? "/light2/" : "/light1/"} className={s.brand}>
              <Image
                src="/logo.svg"
                alt="Texas Technical Services"
                width={66}
                height={66}
              />
              <span>
                TEXAS<small>TECHNICAL SERVICES</small>
              </span>
            </Link>
            <p>
              ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified
              company established in 2008. Flow measurement, automation &amp;
              inspection for oil &amp; gas and industrial sectors.
            </p>
            <a href="mailto:sales@texastechserv.com">sales@texastechserv.com</a>
          </div>
          <div>
            <h3>Services</h3>
            {data.services.items.map((item) => (
              <Link key={item.href} prefetch={false} href={item.href}>
                {item.title}
              </Link>
            ))}
            <Link href="/products/">Products</Link>
            <Link href="/partners/">Global Network</Link>
          </div>
          <div>
            <h3>Kuwait</h3>
            <address>
              Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7
              – Makkah Street Fahaheel, Kuwait
            </address>
            <a href="tel:+96597243755">+965 97243755</a>
            <a href="tel:+96566347267">+965 66347267</a>
          </div>
          <div>
            <h3>Dubai</h3>
            <address>
              Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302
              Office #201-19, Deira, Dubai
            </address>
            <a href="tel:+971569553747">+971 569553747</a>
            <a href="tel:+971567793973">+971 567793973</a>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>
            © {new Date().getFullYear()} Texas Technical Service Company W.L.L.
            All rights reserved.
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
