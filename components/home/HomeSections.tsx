import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardGrid from "@/components/v3/CardGrid";
import { Reveal } from "@/components/v3/motion/Reveal";
import EyebrowPill from "@/components/v3/EyebrowPill";
import ServiceCards from "@/components/home/ServiceCards";
import HomeCtaCard from "@/components/home/HomeCtaCard";
import TearDivider from "@/components/home/TearDivider";

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
              <article className="stat-card glass-hover-card">
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
              <article className="stat-card glass-hover-card">
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
              <article className="stat-card glass-hover-card">
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
              <article className="stat-card glass-hover-card">
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

      {/* Torn Paper / Page Crack Divider */}
      <TearDivider />

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
              <article className="industry-card glass-hover-card">
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
              <article className="industry-card glass-hover-card">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Downstream</div>
                  <h3 className="industry-title">Refining &amp; Petrochemicals</h3>
                  <p className="industry-desc">
                    Clean hydrocarbon export lines, ethylene &amp; propylene mass flow metering, and
                    high-pressure steam distribution.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="industry-card glass-hover-card">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Utilities</div>
                  <h3 className="industry-title">Power &amp; Desalination</h3>
                  <p className="industry-desc">
                    High-volume seawater intake monitoring, condensate return, boiler feed water, and
                    heavy fuel oil delivery systems.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.24}>
              <article className="industry-card glass-hover-card">
                <div className="card-content industry-card-content">
                  <div className="industry-badge">Offshore</div>
                  <h3 className="industry-title">Marine Terminals &amp; Bunkering</h3>
                  <p className="industry-desc">
                    VLCC tanker loading, single point mooring (SPM) buoys, and continuous high-throughput
                    fiscal custody verification.
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

          <Reveal delay={0.05}>
            <div className="specs-card card-accent" id="specs">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Specification Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="spec-label">Piping &amp; Fabrication Standards</td>
                    <td className="spec-value">
                      <strong>ASME B31.3 / B31.4 / B31.8</strong> &bull; NACE MR0175 sour service
                      compliance
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Line Sizes &amp; Flow Capacity</td>
                    <td className="spec-value">
                      <strong>DN50 – DN1200</strong> (2&Prime; through 48&Prime;) &bull; Up to{" "}
                      <strong>8,500 m&sup3;/hr</strong> liquid / <strong>50 MMSCFD</strong> gas
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Fluid Compatibility</td>
                    <td className="spec-value">
                      Crude Oil, Wet Gas, Condensate, Refined Hydrocarbons, High H2S Sour Streams
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Measurement Accuracy</td>
                    <td className="spec-value">
                      <strong>&plusmn;0.15 %</strong> of measured volume (repeatability &le;
                      &plusmn;0.02 % to API MPMS Ch. 5.8)
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Operating Pressure Rating</td>
                    <td className="spec-value">
                      Up to <strong>420 bar</strong> (ANSI Class 150 to Class 2500 / API 10,000 psi)
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">NDT &amp; Quality Verification</td>
                    <td className="spec-value">
                      <strong>100% RT / UT</strong> flange &amp; weld verification &bull; FAT / SAT at
                      Ahmadi Facility
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Signal &amp; Telemetry Outputs</td>
                    <td className="spec-value">
                      Modbus TCP/RTU, OPC UA, HART 4–20 mA, PROFIBUS DP, Dual Pulse (API 5.5)
                    </td>
                  </tr>
                  <tr>
                    <td className="spec-label">Standards &amp; Certifications</td>
                    <td className="spec-value">
                      API MPMS, AGA Report No. 9, OIML R117 / R137, ATEX / IECEx Zone 1 Ex d IIC T6
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

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
              <div className="client-logo-item card-interactive" title="Kuwait Oil Company (KOC)">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(0.95)" }}>
                    <Image
                      src="/clients/koc.svg"
                      alt="Kuwait Oil Company"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">Kuwait Oil Company (KOC)</span>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="client-logo-item card-interactive" title="Kuwait National Petroleum Company (KNPC)">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(0.95)" }}>
                    <Image
                      src="/clients/knpc.svg"
                      alt="Kuwait National Petroleum Company"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">KNPC</span>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="client-logo-item card-interactive" title="Kuwait Gulf Oil Company (KGOC)">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(1.15)" }}>
                    <Image
                      src="/clients/kgoc-clean.png"
                      alt="Kuwait Gulf Oil Company"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">KGOC</span>
              </div>
            </Reveal>
            <Reveal delay={0.21}>
              <div className="client-logo-item card-interactive" title="Ministry of Electricity & Water (MEW)">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(1.15)" }}>
                    <Image
                      src="/clients/mew.svg"
                      alt="Ministry of Electricity and Water"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">MEW Kuwait</span>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="client-logo-item card-interactive" title="Saudi Arabian Chevron">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(0.92)" }}>
                    <Image
                      src="/clients/chevron.svg"
                      alt="Saudi Arabian Chevron"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
                    />
                  </div>
                </div>
                <span className="client-logo-name">Chevron</span>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="client-logo-item card-interactive" title="Kuwait Cement Company">
                <div className="client-logo-box">
                  <div className="client-logo-inner" style={{ transform: "scale(1.06)" }}>
                    <Image
                      src="/clients/kuwaitcement.svg"
                      alt="Kuwait Cement Company"
                      className="client-logo-img"
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px"
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
              <article className="blog-card glass-hover-card">
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
              <article className="blog-card glass-hover-card">
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
              <article className="blog-card glass-hover-card">
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
