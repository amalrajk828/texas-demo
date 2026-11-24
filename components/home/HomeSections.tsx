import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardGrid from "@/components/v3/CardGrid";
import { Reveal } from "@/components/v3/motion/Reveal";
import EyebrowPill from "@/components/v3/EyebrowPill";
import ServiceCards from "@/components/home/ServiceCards";
import HomeCtaCard from "@/components/home/HomeCtaCard";
import PartnersWallSection from "@/components/partners/PartnersWallSection";

export default function HomeSections() {
  return (
    <div className="content-wrapper">
      {/* About Us Section */}
      <section id="about" className="content-section about-cover-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">About Texas Technical Services</span>
              <h2 className="section-title">
                Why was Texas Technical Services established in 2008?
              </h2>
              <p className="section-subtitle">
                Texas Technical Service Company is an ISO 9001:2015 certified company established in
                2008. Primarily focused on flow measurement, inspection &amp; testing, and
                industrial automation for oil &amp; gas, power plants, manufacturing, and commercial
                sectors across Kuwait and the UAE.
              </p>
            </div>
          </Reveal>

          <CardGrid max={4} className="about-stats-grid">
            <Reveal delay={0}>
              <article className="stat-card card-wave-hover">
                <div className="card-content stat-card-content">
                  <div className="stat-number">18+</div>
                  <div className="stat-title">Years Industrial Precision</div>
                  <p className="stat-desc">
                    Delivering certified engineering and flow measurement excellence across Kuwait and
                    the GCC since 2008.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="stat-card card-wave-hover">
                <div className="card-content stat-card-content">
                  <div className="stat-number">200+</div>
                  <div className="stat-title">Completed Skid Packages</div>
                  <p className="stat-desc">
                    Approved vendor delivering turnkey custody transfer solutions for KOC, KNPC, MEW,
                    and Chevron.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="stat-card card-wave-hover">
                <div className="card-content stat-card-content">
                  <div className="stat-number">16+</div>
                  <div className="stat-title">Global OEM Alliances</div>
                  <p className="stat-desc">
                    Strategic technology partnerships with tier-1 international manufacturers
                    including Emerson, SICK &amp; Endress+Hauser.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.24}>
              <article className="stat-card card-wave-hover">
                <div className="card-content stat-card-content">
                  <div className="stat-number">100%</div>
                  <div className="stat-title">Certified Quality &amp; Safety</div>
                  <p className="stat-desc">
                    ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, UASL and Accurate accredited
                    operations.
                  </p>
                </div>
              </article>
            </Reveal>
          </CardGrid>

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/about-us/" className="btn btn-primary">
                Learn More About Our Company &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services / Features Section */}
      <section id="services" className="content-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Core Engineering Disciplines</span>
              <h2 className="section-title">
                What services do we offer for industrial automation and flow measurement?
              </h2>
              <p className="section-subtitle">
                Engineered modular skid packages, telemetric process automation, and full-spectrum
                calibration systems ensuring operational continuity and fiscal compliance across
                Kuwait and the GCC.
              </p>
            </div>
          </Reveal>

          <ServiceCards />

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/services/" className="btn btn-primary">
                Explore All 60+ Services &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="content-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Sectors &amp; Applications</span>
              <h2 className="section-title">Built for Mission-Critical Industries</h2>
              <p className="section-subtitle">
                Serving energy operators, petrochemical complexes, and municipal utilities across
                Kuwait and the Arabian Gulf.
              </p>
            </div>
          </Reveal>

          <CardGrid max={4} className="industries-grid">
            <Reveal delay={0}>
              <article className="industry-card card-wave-hover">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Upstream</div>
                  <h3 className="industry-title">Oil &amp; Gas Production</h3>
                  <p className="industry-desc">
                    Wellhead allocation, gathering centers, gas-oil separation plants (GOSP), and sour
                    crude pipeline custody transfer.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="industry-card card-wave-hover">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Downstream</div>
                  <h3 className="industry-title">Refining &amp; Petrochemicals</h3>
                  <p className="industry-desc">
                    Refinery process control, custody transfer loading arms, blending skids, and continuous
                    emission monitoring.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="industry-card card-wave-hover">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Utilities</div>
                  <h3 className="industry-title">Power &amp; Desalination</h3>
                  <p className="industry-desc">
                    Thermal power plant steam and feedwater metering, RO desalination plant telemetry,
                    and turbine health monitoring.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.24}>
              <article className="industry-card card-wave-hover">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Offshore</div>
                  <h3 className="industry-title">Marine Terminals &amp; Bunkering</h3>
                  <p className="industry-desc">
                    Offshore SPM buoy metering, jetty bunkering skids, tanker loading verification, and
                    ballast water monitoring.
                  </p>
                </div>
              </article>
            </Reveal>
          </CardGrid>

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/industries/" className="btn btn-primary">
                View All Industry Sectors &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products / Technical Specifications Section */}
      <section id="products" className="content-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Modular Engineering Packages</span>
              <h2 className="section-title">Turnkey Solutions &amp; Technical Specifications</h2>
              <p className="section-subtitle">
                Engineered, fabricated, wired, and tested in accordance with stringent API, ASME,
                and IEC specifications in collaboration with premier European and American
                manufacturers.
              </p>
            </div>
          </Reveal>

          <div className="products-preview-grid">
            <Reveal delay={0}>
              <div className="product-spec-unified-table">
                {/* Master Columns Header Bar (Matching Reference Spec Table Exactly) */}
                <div className="product-spec-columns-bar">
                  <span className="product-spec-col-key">PARAMETER</span>
                  <span className="product-spec-col-val">SPECIFICATION DETAIL</span>
                </div>

                <div className="product-spec-list">
                  <div className="spec-row">
                    <span className="spec-key">Piping &amp; Fabrication Standards</span>
                    <span className="spec-val">
                      <strong>ASME B31.3 / B31.4 / B31.8&bull;</strong> NACE MR0175 sour service compliance
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Line Sizes &amp; Flow Capacity</span>
                    <span className="spec-val">
                      <strong>DN50 &ndash; DN1200</strong> (2&rdquo; through 48&rdquo;) &bull; Up to{" "}
                      <strong>8,500 m&sup3;/hr</strong> liquid / <strong>50 MMSCFD</strong> gas
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Fluid Compatibility</span>
                    <span className="spec-val">
                      Crude Oil, Wet Gas, Condensate, Refined Hydrocarbons, High H2S Sour Streams
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Measurement Accuracy</span>
                    <span className="spec-val">
                      <strong>&plusmn;0.15 %</strong> of measured volume (repeatability &le; &plusmn;0.02 % to API MPMS Ch. 5.8)
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Operating Pressure Rating</span>
                    <span className="spec-val">
                      Up to <strong>420 bar</strong> (ANSI Class 150 to Class 2500 / API 10,000 psi)
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">NDT &amp; Quality Verification</span>
                    <span className="spec-val">
                      <strong>100% RT / UT</strong> flange &amp; weld verification &bull; FAT / SAT at Ahmadi Facility
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Signal &amp; Telemetry Outputs</span>
                    <span className="spec-val">
                      Modbus TCP/RTU, OPC UA, HART 4–20 mA, PROFIBUS DP, Dual Pulse (API 5.5)
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Standards &amp; Certifications</span>
                    <span className="spec-val">
                      API MPMS, AGA Report No. 9, OIML R117 / R137, ATEX / IECEx Zone 1 Ex d IIC T6
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/products/" className="btn btn-primary">
                Explore Full Products Catalog &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="content-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Field Proven Trust</span>
              <h2 className="section-title">Validated by Regional Operators</h2>
              <p className="section-subtitle">
                Measurable impact on measurement uncertainty, fiscal reconciliation, and plant
                safety across the Middle East&apos;s most demanding energy projects.
              </p>
            </div>
          </Reveal>

          <div className="clients-logo-grid">
            <Reveal delay={0}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/koc.svg"
                      alt="Kuwait Oil Company (KOC)"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">Kuwait Oil Company (KOC)</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/knpc.svg"
                      alt="Kuwait National Petroleum Company (KNPC)"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">KNPC</span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/kgoc-clean.png"
                      alt="Kuwait Gulf Oil Company (KGOC)"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">KGOC</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/mew.svg"
                      alt="Ministry of Electricity & Water & Renewable Energy"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">MEW Kuwait</span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/chevron.svg"
                      alt="Chevron"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">Chevron</span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="client-logo-item">
                <div className="client-logo-box">
                  <div className="client-logo-inner">
                    <Image
                      src="/clients/kuwaitcement.svg"
                      alt="Kuwait Cement Company"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 150px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">Kuwait Cement</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/clients/" className="btn btn-primary">
                View All Approved Clients &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Authorized Partnerships & Dealerships Section */}
      <div id="partners">
        <PartnersWallSection />
      </div>

      {/* Blog / Engineering Insights Section */}
      <section id="blog" className="content-section">
        <div className="section-container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Knowledge &amp; Innovation</span>
              <h2 className="section-title">Metrology &amp; Engineering Insights</h2>
              <p className="section-subtitle">
                Technical guides, metrological standards analysis, and automation case studies
                authored by Texas Technical Services specialists.
              </p>
            </div>
          </Reveal>

          <CardGrid max={3}>
            <Reveal delay={0}>
              <article className="blog-card card-wave-hover">
                <div className="card-content blog-card-content">
                  <div className="blog-meta">Flow Measurement &bull; 10 min read</div>
                  <h3 className="blog-title">
                    What is Custody Transfer Metering? A Complete Guide to Standards and Accuracy
                  </h3>
                  <p className="blog-excerpt">
                    Critical principles of fiscal custody metering, including API MPMS and AGA
                    compliance, flow meter selection, and calibration for the Oil &amp; Gas sector.
                  </p>
                  <Link href="/blog/custody-transfer-metering-guide/" className="blog-link">
                    Read Technical Guide &rarr;
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="blog-card card-wave-hover">
                <div className="card-content blog-card-content">
                  <div className="blog-meta">Industrial Automation &bull; 8 min read</div>
                  <h3 className="blog-title">
                    SCADA System Upgrades: Modernizing Legacy Control Architectures
                  </h3>
                  <p className="blog-excerpt">
                    Discover key indicators for control system migration. Learn how industrial
                    automation modernization reduces downtime and improves plant OT cyber security.
                  </p>
                  <Link href="/blog/scada-system-upgrade-guide/" className="blog-link">
                    Read Technical Guide &rarr;
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="blog-card card-wave-hover">
                <div className="card-content blog-card-content">
                  <div className="blog-meta">NDT &amp; Inspection &bull; 10 min read</div>
                  <h3 className="blog-title">
                    Non-Destructive Testing (NDT) Methods: A Complete Technical Guide
                  </h3>
                  <p className="blog-excerpt">
                    A comprehensive overview of industrial NDT methods including UT, RT, MT, PT, and
                    TOFD for pipelines, pressure equipment, and structural integrity.
                  </p>
                  <Link href="/blog/" className="blog-link">
                    Read Technical Guide &rarr;
                  </Link>
                </div>
              </article>
            </Reveal>
          </CardGrid>

          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/blog/" className="btn btn-primary">
                Browse All Metrology Insights &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action / Contact Us Section */}
      <section id="contact" className="content-section cta-section">
        <div className="section-container">
          <Reveal delay={0}>
            <HomeCtaCard />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
