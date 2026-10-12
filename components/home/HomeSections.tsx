import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeSections() {
  return (
    <main className="content-wrapper">
      {/* About Us Section */}
      <section id="about" className="content-section">
        <div className="section-container">
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

          <div className="about-stats-grid">
            <div className="stat-card">
              <div className="stat-number">18+</div>
              <div className="stat-title">Years Industrial Precision</div>
              <p className="stat-desc">
                Delivering certified engineering and flow measurement excellence across Kuwait and
                the GCC since 2008.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-title">Completed Skid Packages</div>
              <p className="stat-desc">
                Approved vendor delivering turnkey custody transfer solutions for KOC, KNPC, MEW,
                and Chevron.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">16+</div>
              <div className="stat-title">Global OEM Alliances</div>
              <p className="stat-desc">
                Strategic technology partnerships with tier-1 international manufacturers
                including Emerson, SICK &amp; Endress+Hauser.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-title">Certified Quality &amp; Safety</div>
              <p className="stat-desc">
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, UASL and Accurate accredited
                operations.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/about-us/" className="btn btn-secondary">
              Learn More About Our Company &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Features Section */}
      <section id="services" className="content-section">
        <div className="section-container">
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

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="feature-name">Flow Measurement &amp; Custody Transfer Skids</h3>
              <p className="feature-desc">
                Turnkey liquid and gas fiscal metering packages. Integrated with multipath
                ultrasonic flow meters, Coriolis mass meters, bi-directional prover loops, and
                computerized batch auditing to API and AGA standards.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="2" x2="9" y2="4" />
                  <line x1="15" y1="2" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="feature-name">Plant SCADA &amp; Industrial Automation</h3>
              <p className="feature-desc">
                Turnkey DCS, PLC programming, and Safety Instrumented Systems (SIS). Complete
                engineering from functional safety lifecycle calculations to redundant fieldbus
                architectures and remote telemetric dashboards.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="feature-name">Inspection &amp; Non-Destructive Testing (NDT)</h3>
              <p className="feature-desc">
                Comprehensive structural and piping inspection, advanced ultrasonic testing (UT),
                radiographic testing (RT), and welder certification compliant with ISO 9001, ISO
                14001, ISO 45001 &amp; UASL.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
              </div>
              <h3 className="feature-name">Calibration, Proving &amp; Field Services</h3>
              <p className="feature-desc">
                Mobile field calibration teams and laboratory testing services for flow, pressure,
                temperature, and analytical instruments with ISO/IEC 17025 accredited primary
                reference standards.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/services/" className="btn btn-secondary">
              Explore All 60+ Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Sectors &amp; Applications</span>
            <h2 className="section-title">Built for Mission-Critical Industries</h2>
            <p className="section-subtitle">
              Serving energy operators, petrochemical complexes, and municipal utilities across
              Kuwait and the Arabian Gulf.
            </p>
          </div>

          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-badge">Upstream</div>
              <h3 className="industry-title">Oil &amp; Gas Production</h3>
              <p className="industry-desc">
                Wellhead allocation, gathering centers, gas-oil separation plants (GOSP), and sour
                crude pipeline custody transfer.
              </p>
            </div>
            <div className="industry-card">
              <div className="industry-badge">Downstream</div>
              <h3 className="industry-title">Refining &amp; Petrochemicals</h3>
              <p className="industry-desc">
                Clean hydrocarbon export lines, ethylene &amp; propylene mass flow metering, and
                high-pressure steam distribution.
              </p>
            </div>
            <div className="industry-card">
              <div className="industry-badge">Utilities</div>
              <h3 className="industry-title">Power &amp; Desalination</h3>
              <p className="industry-desc">
                High-volume seawater intake monitoring, condensate return, boiler feed water, and
                heavy fuel oil delivery systems.
              </p>
            </div>
            <div className="industry-card">
              <div className="industry-badge">Offshore</div>
              <h3 className="industry-title">Marine Terminals &amp; Bunkering</h3>
              <p className="industry-desc">
                VLCC tanker loading, single point mooring (SPM) buoys, and continuous high-throughput
                fiscal custody verification.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/industries/" className="btn btn-secondary">
              View All Industry Sectors &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Products / Technical Specifications Section */}
      <section id="products" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Modular Engineering Packages</span>
            <h2 className="section-title">Turnkey Solutions &amp; Technical Specifications</h2>
            <p className="section-subtitle">
              Engineered, fabricated, wired, and tested in accordance with stringent API, ASME,
              and IEC specifications in collaboration with premier European and American
              manufacturers.
            </p>
          </div>

          <div className="specs-card" id="specs">
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

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/products/" className="btn btn-secondary">
              Explore Full Products Catalog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Field Proven Trust</span>
            <h2 className="section-title">Validated by Regional Operators</h2>
            <p className="section-subtitle">
              Measurable impact on measurement uncertainty, fiscal reconciliation, and plant
              safety across the Middle East&apos;s most demanding energy projects.
            </p>
          </div>

          <div className="clients-logo-grid">
            <div className="client-logo-item" title="Kuwait Oil Company (KOC)">
              <Image
                src="/clients/koc.svg"
                alt="Kuwait Oil Company"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">Kuwait Oil Company (KOC)</span>
            </div>
            <div className="client-logo-item" title="Kuwait National Petroleum Company (KNPC)">
              <Image
                src="/clients/knpc.svg"
                alt="Kuwait National Petroleum Company"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">KNPC</span>
            </div>
            <div className="client-logo-item" title="Kuwait Gulf Oil Company (KGOC)">
              <Image
                src="/clients/kgoc.png"
                alt="Kuwait Gulf Oil Company"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">KGOC</span>
            </div>
            <div className="client-logo-item" title="Ministry of Electricity & Water (MEW)">
              <Image
                src="/clients/mew.svg"
                alt="Ministry of Electricity and Water"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">MEW Kuwait</span>
            </div>
            <div className="client-logo-item" title="Saudi Arabian Chevron">
              <Image
                src="/clients/chevron.svg"
                alt="Saudi Arabian Chevron"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">Chevron</span>
            </div>
            <div className="client-logo-item" title="Kuwait Cement Company">
              <Image
                src="/clients/kuwaitcement.svg"
                alt="Kuwait Cement Company"
                className="client-logo-img"
                width={120}
                height={60}
              />
              <span className="client-logo-name">Kuwait Cement</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/clients/" className="btn btn-secondary">
              View All Approved Clients &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Blog / Engineering Insights Section */}
      <section id="blog" className="content-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Knowledge &amp; Innovation</span>
            <h2 className="section-title">Metrology &amp; Engineering Insights</h2>
            <p className="section-subtitle">
              Technical guides, metrological standards analysis, and automation case studies
              authored by Texas Technical Services specialists.
            </p>
          </div>

          <div className="blog-grid">
            <article className="blog-card">
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
            </article>

            <article className="blog-card">
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
            </article>

            <article className="blog-card">
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
            </article>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/blog/" className="btn btn-secondary">
              Browse All Metrology Insights &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Us Section */}
      <section id="contact" className="content-section cta-section">
        <div className="section-container">
          <div className="cta-box">
            <div className="pill-badge pill-badge-dark">GET IN TOUCH</div>
            <h2 className="cta-title">How can we solve your flow measurement challenge?</h2>
            <p className="cta-desc">
              From custody metering to full plant automation &mdash; our ISO 9001, ISO 14001, ISO
              45001, UASL &amp; Accurate certified team has delivered 400+ projects across oil &amp;
              gas, power, and manufacturing since 2008.
            </p>
            <div className="cta-actions">
              <Link href="/contacts/" className="btn btn-primary btn-large" id="cta-action-button">
                Request Engineering Consultation &rarr;
              </Link>
              <div className="cta-footnote">
                Kuwait Oil Sector Approved &bull; KOC / KNPC / MEW Vendor Compliant &bull; ISO 9001
                Certified
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
