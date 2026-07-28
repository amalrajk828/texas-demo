import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import ClientsMarquee from "@/components/clients/ClientsMarquee";
import TestimonialsSection from "@/components/clients/TestimonialsSection";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Our Clients | Texas Technical Services",
  description:
    "Texas Technical Services proudly serves 49+ clients across Kuwait and Dubai — from national oil companies and government bodies to international engineering groups.",
  alternates: { canonical: "/clients/" },
  openGraph: {
    title: "Our Clients | Texas Technical Services",
    description:
      "49+ clients across oil & gas, power, water, and industrial sectors — trusted by Kuwait Oil Company, KNPC, KIPIC, Chevron, Siemens, Honeywell and many more.",
    url: "/clients/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients | Texas Technical Services",
    description:
      "49+ clients across oil & gas, power, water, and industrial sectors — trusted by KOC, KNPC, Chevron, Siemens, Honeywell and more.",
  },
  keywords: [
    "oil and gas clients Kuwait",
    "industrial clients Kuwait",
    "flow metering clients",
    "automation clients Kuwait",
    "KOC approved contractor",
    "KNPC approved vendor",
    "Chevron supplier Kuwait",
    "Texas Technical Services clients",
    "industrial service provider Kuwait",
    "energy sector clients GCC",
  ],
};

type Client = {
  name: string;
  logo: string;
  url: string;
  external: boolean;
};

const clients: Client[] = [
  { name: "Kuwait Oil Company (KOC)",                                  logo: "/koc.png",          url: "https://www.kockw.com/",                        external: true  },
  { name: "Kuwait National Petroleum Company (KNPC)",                  logo: "/knpc.png",         url: "https://www.knpc.com/",                         external: true  },
  { name: "Kuwait Integrated Petroleum Industries Company (KIPIC)",    logo: "/kipic.png",        url: "https://kipic.com.kw/",                         external: true  },
  { name: "Ministry of Electricity & Water & Renewable Energy",        logo: "/mew.jpg",          url: "https://www.mew.gov.kw/",                       external: true  },
  { name: "Ministry of Public Works",                                  logo: "/mpw.png",          url: "https://www.mpw.gov.kw/",                       external: true  },
  { name: "Public Authority for Applied Education and Training",        logo: "/paaet.png",        url: "https://www.paaet.edu.kw/",                     external: true  },
  { name: "Almeer",                                                    logo: "/almeer.png",       url: "https://www.almeer.com.kw/",                    external: true  },
  { name: "Saipem",                                                    logo: "/saipem.png",       url: "https://www.saipem.com/",                       external: true  },
  { name: "Petroleum Services Co. W.L.L.",                             logo: "/psc.jpg",          url: "https://www.psc-kuwait.com/",                   external: true  },
  { name: "Chevron",                                                   logo: "/chevron.jpg",      url: "https://www.chevron.com/",                      external: true  },
  { name: "SGS",                                                       logo: "/sgs.png",          url: "https://www.sgs.com/",                          external: true  },
  { name: "Mark Technologies Company W.L.L.",                          logo: "/marktc.jpg",       url: "https://www.marktc.com/",                       external: true  },
  { name: "Heavy Engineering Industries & Shipbuilding Co. (HEISCO)",  logo: "/heisco.png",       url: "https://www.heisco.com/",                       external: true  },
  { name: "SIEMENS",                                                   logo: "/siemens.png",      url: "https://www.siemens.com/",                      external: true  },
  { name: "Kuwait Cement Company",                                     logo: "/kuwaitcement.png", url: "https://kuwaitcement.com/",                     external: true  },
  { name: "Honeywell",                                                 logo: "/honeywell.png",    url: "https://www.honeywell.com/",                    external: true  },
  { name: "NBTC Group",                                                logo: "/nbtc.png",         url: "https://www.nbtcgroup.com/",                    external: true  },
  { name: "AZN O&M Company W.L.L. (AZN)",                             logo: "/azn.jpeg",         url: "/clients/",                                     external: false },
  { name: "KCC Engineering & Contracting Company (KCCEC)",             logo: "/kccec.png",        url: "https://kccec.com.kw/",                         external: true  },
  { name: "Alkhorayef Group",                                          logo: "/alkhorayef.png",   url: "https://www.alkhorayef.com/",                   external: true  },
  { name: "ASLAA General Trading and Contracting Co. W.L.L.",          logo: "/aslaa.jpeg",       url: "https://aslaa.com/",                            external: true  },
  { name: "Industrial Metal Center Co. W.L.L. (IMCCK)",               logo: "/imcck.jpeg",       url: "https://www.imcck.com/",                        external: true  },
  { name: "Impresa Pizzarotti & C. S.p.A.",                            logo: "/pizzarotti.jpeg",  url: "https://www.pizzarotti.it/",                    external: true  },
  { name: "Kuwaiti Danish Dairy Company (KDD)",                        logo: "/kddc.png",         url: "https://www.kddc.com/",                         external: true  },
  { name: "Société d'Entreprise et de Gestion (SEG)",                  logo: "/seg.jpeg",         url: "https://seglebanon.com/",                       external: true  },
  { name: "Al-Essa & Haddad Trading and Decorating Co.",               logo: "/haddads.png",      url: "https://www.haddads-group.com/",                external: true  },
  { name: "IMAR",                                                      logo: "/imar.png",         url: "https://imar.com/",                             external: true  },
  { name: "MJW International Trading Co. LLC",                         logo: "/mjw.png",          url: "/clients/",                                     external: false },
  { name: "FIRSTGROUP",                                                logo: "/first_group.jpeg", url: "https://firstgroupkw.com/",                     external: true  },
  { name: "International Standard Group (ISG)",                        logo: "/isg.jpeg",         url: "http://www.isg-c.com/",                         external: true  },
  { name: "Rezayat Group",                                             logo: "/rezayat.jpeg",     url: "https://www.rezayat.com/",                      external: true  },
  { name: "Combined Group Contracting Co.",                            logo: "/cgc.png",          url: "https://www.cgc-kw.com/",                       external: true  },
  { name: "Ducting & Servicing Company (DASCO)",                       logo: "/dasco.png",        url: "https://dasco.com.kw/",                         external: true  },
  { name: "Hassan Abul Company",                                       logo: "/hassanabul.png",   url: "https://www.hassanabul.com/",                   external: true  },
  { name: "China State Construction Engineering Corporation (CSCEC)",  logo: "/cscec.png",        url: "https://www.cscec.com/",                        external: true  },
  { name: "Alico Kuwait for Light Industries & Aluminium W.L.L.",      logo: "/alico.jpeg",       url: "http://alicokuwait.com/",                       external: true  },
  { name: "Green Spring Group Co.",                                    logo: "/gsgc.jpeg",        url: "https://gsgckwt.com/",                          external: true  },
  { name: "Sadeem Al-Kuwait for General Trading & Contracting",        logo: "/sadeem.png",       url: "https://www.sadeemalkuwait.com/",               external: true  },
  { name: "Hydrotek Engineering Company",                              logo: "/hydrotek.jpeg",    url: "https://hydrotek.com/",                         external: true  },
  { name: "Lingyun Technology Group",                                  logo: "/lingyun.jpeg",     url: "https://www.lingyun.com/",                      external: true  },
  { name: "Advanced Technology Company K.S.C.P. (ATC)",               logo: "/atc.png",          url: "https://www.atc.com.kw/",                       external: true  },
  { name: "Al-Bahar Industries Group",                                 logo: "/albahar.jpeg",     url: "http://www.albahar-industries.com/",             external: true  },
  { name: "WTE Group",                                                 logo: "/wte.png",          url: "https://www.wte.de/",                           external: true  },
  { name: "Limak Group",                                               logo: "/limak.jpeg",       url: "https://www.limak.com.tr/",                     external: true  },
  { name: "SSH",                                                       logo: "/ssh.png",          url: "https://www.sshic.com/",                        external: true  },
  { name: "Kuwait Gulf Oil Company K.S.C.C. (KGOC)",                  logo: "/kgoc.png",         url: "https://www.kgoc.com/",                         external: true  },
  { name: "Parsons Corporation",                                       logo: "/parsons.jpeg",     url: "https://www.parsons.com/",                      external: true  },
  { name: "HOT Engineering & Construction Co.-KSCC (HOTECC)",          logo: "/hotecc.png",       url: "https://www.hotecc.com/",                       external: true  },
  { name: "KEO",                                                       logo: "/keo.png",          url: "https://www.keo.com/",                          external: true  },
];

const stats = [
  { num: `${clients.length}+`, label: "Clients" },
  { num: "8",                  label: "Industries" },
  { num: "18+", label: "Years" },
  { num: "2",                  label: "Countries" },
];

const featuredClients = clients.filter(c =>
  ["Kuwait Oil Company (KOC)", "Kuwait National Petroleum Company (KNPC)", "Kuwait Integrated Petroleum Industries Company (KIPIC)",
   "Chevron", "SIEMENS", "Honeywell", "Saipem", "SGS",
   "Kuwait Cement Company", "Heavy Engineering Industries & Shipbuilding Co. (HEISCO)",
   "NBTC Group", "KCC Engineering & Contracting Company (KCCEC)",
   "Alkhorayef Group", "Impresa Pizzarotti & C. S.p.A.", "Parsons Corporation", "SSH"
  ].includes(c.name)
);

export default function ClientsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Clients", href: "/clients/" }]} />
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid relative overflow-hidden pt-[108px] lg:pt-[116px]">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 40px)",
          }}
        />
        {/* Red glow */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(231,33,43,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-24 pt-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-10 text-[11px] text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Clients</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            {/* Left — headline */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-[#e7212b]" />
                <span className="text-[#e7212b] text-[10px] font-medium tracking-[2.5px] uppercase">
                  Trusted Partners
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] mb-5">
                Companies That
                <br />
                <em className="not-italic text-[#e7212b]">Trust Us</em>
              </h1>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg">
                From national oil companies and government ministries to international
                engineering groups — our clients span the full spectrum of Kuwait and
                the Gulf region&apos;s most demanding industries.
              </p>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] hover:border-[#e7212b]/30 rounded-xl px-5 py-4 text-center transition-colors duration-200"
                >
                  <p className="text-2xl font-medium text-[#e7212b]">{s.num}</p>
                  <p className="text-[10px] text-white/30 mt-1 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CLIENT GRID ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <ClientsMarquee clients={featuredClients} />

          {/* Section label */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#e7212b]/40" />
              <span className="text-[#e7212b] text-xs font-semibold tracking-[2px] uppercase">
                All Clients
              </span>
            </div>
            <span className="text-gray-400 text-[12px]">{clients.length} companies</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {clients.map((client) => {
              const cardClass =
                "group relative bg-gray-100 border border-gray-200 hover:border-[#e7212b]/50 rounded-2xl p-5 flex flex-col items-center gap-4 transition-all duration-200 hover:shadow-lg cursor-pointer";

              const inner = (
                <>
                  {client.external && (
                    <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ExternalLink className="w-3 h-3 text-[#e7212b]" />
                    </span>
                  )}
                  <div className="relative w-full h-16 sm:h-20">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
                      style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.45))" }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center leading-snug group-hover:text-[#e7212b] transition-colors duration-200 font-medium">
                    {client.name}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e7212b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
                </>
              );

              return client.external ? (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <Link key={client.name} href={client.url} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ═══════════════════════════════════════════ */}
      <section className="bg-[#12163A] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                heading: "Government & National Entities",
                body: "KOC, KNPC, KIPIC, KGOC, Ministry of Electricity & Water, Ministry of Public Works and more.",
              },
              {
                heading: "International Blue-Chips",
                body: "Chevron, Siemens, Honeywell, Saipem, SGS, Parsons, Pizzarotti and other global names.",
              },
              {
                heading: "Regional Engineering Leaders",
                body: "HEISCO, KCCEC, CGC, Rezayat, SSH, HOTECC, KEO and a growing list of Gulf-based groups.",
              },
            ].map((item) => (
              <div key={item.heading} className="px-4">
                <div className="w-8 h-px bg-[#e7212b] mx-auto mb-4" />
                <h3 className="text-white text-sm font-medium mb-2">{item.heading}</h3>
                <p className="text-white/40 text-[12px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* ══ CTA BANNER ════════════════════════════════════════════ */}
      <section className="bg-[#000000] blueprint-grid blueprint-dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#e7212b]/40" />
            <span className="text-[#e7212b] text-[9px] font-medium tracking-[2.5px] uppercase">
              Join our clients
            </span>
            <span className="w-8 h-px bg-[#e7212b]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-3">
            Ready to work with us?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Talk to our team about your flow measurement, automation, or inspection
            requirements. Kuwait and Dubai offices ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacts/"
              className="inline-flex items-center gap-2 bg-[#e7212b] hover:bg-[#aa0b1b] text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industries/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Our Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
