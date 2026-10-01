"use client";

import React, { useEffect, useRef } from "react";
import "./home-v3-showcase.css";

const BODY_HTML = "\n\n  <!-- Top Navigation (fixed 100vw, transparent to frosted glass on scroll) -->\n  <nav id=\"main-nav\" class=\"navbar\">\n    <div class=\"nav-container\">\n      <!-- Real Brand Logo & Name -->\n      <a href=\"#\" class=\"nav-brand\" id=\"brand-logo\" aria-label=\"Texas Technical Services Home\">\n        <img src=\"/logo.svg\" alt=\"Texas Technical Services Emblem\" class=\"brand-logo-img\" width=\"42\" height=\"42\" />\n        <div class=\"brand-text-block\">\n          <span class=\"brand-title\">TEXAS</span>\n          <span class=\"brand-subtitle\">TECHNICAL SERVICES</span>\n        </div>\n      </a>\n\n      <!-- Navigation Links -->\n      <div class=\"nav-links\" id=\"nav-menu\">\n        <a href=\"#\" class=\"nav-link\" id=\"link-home\">Home</a>\n        <a href=\"#about\" class=\"nav-link\" id=\"link-about\">About Us</a>\n        <a href=\"#services\" class=\"nav-link\" id=\"link-services\">Services</a>\n        <a href=\"#industries\" class=\"nav-link\" id=\"link-industries\">Industries</a>\n        <a href=\"#products\" class=\"nav-link\" id=\"link-products\">Products</a>\n        <a href=\"#blog\" class=\"nav-link\" id=\"link-blog\">Blog</a>\n        <a href=\"#clients\" class=\"nav-link\" id=\"link-clients\">Clients</a>\n        <a href=\"#contact\" class=\"nav-cta-btn\" id=\"link-contact\">Contact Us</a>\n      </div>\n\n      <!-- Mobile Hamburger Toggle -->\n      <button class=\"nav-mobile-toggle\" id=\"nav-mobile-btn\" aria-label=\"Toggle navigation menu\" type=\"button\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </button>\n    </div>\n  </nav>\n\n  <!-- Sticky Scrollytelling Sequence Section (500vh) -->\n  <section id=\"sequence\">\n    <div class=\"sticky-wrap\">\n      <!-- Full-screen Canvas -->\n      <canvas id=\"hero-canvas\"></canvas>\n\n      <!-- Preloading Indicator Overlay -->\n      <div id=\"loader\" class=\"loader-overlay\">\n        <div class=\"loader-spinner\"></div>\n        <div class=\"loader-status\">\n          <span class=\"loader-value\" id=\"loader-percent\">0</span><span class=\"loader-unit\">%</span>\n        </div>\n        <p class=\"loader-label\">Preloading High-Resolution Frames...</p>\n      </div>\n\n      <!-- Scrollytelling Overlay Cards -->\n      <div class=\"overlay\">\n        <!-- First Screen Layer (progress 0.00 – 0.20) -->\n        <div class=\"hero-screen\" id=\"hero-screen\">\n          <div class=\"hero-main-row\">\n            <!-- Left Column: Frosted Glass Card Container -->\n            <div class=\"hero-glass-card\">\n              <div class=\"hero-card-content\">\n                <div class=\"hero-badge\">\n                  <span class=\"badge-dot\"></span>\n                  <span>FLOW MEASUREMENT &amp; AUTOMATION</span>\n                </div>\n                <h1 class=\"hero-title\">\n                  Flow Measurement &amp;<br />Control System Solutions\n                </h1>\n                <p class=\"hero-desc\">\n                  Where flow measurement challenges meet solutions. Expert metering consultants with in-depth knowledge of API, AGA, and custody metering standards.\n                </p>\n              </div>\n              <div class=\"hero-cta-group\">\n                <a href=\"#services\" class=\"btn btn-primary\" id=\"hero-btn-know-more\">\n                  Know More &rarr;\n                </a>\n                <a href=\"#products\" class=\"btn btn-secondary\" id=\"hero-btn-products\">\n                  Our Products\n                </a>\n              </div>\n            </div>\n\n            <!-- Right Column: Interactive Media Showcase Card -->\n            <div class=\"hero-right-col\">\n              <div class=\"hero-showcase-card\" id=\"hero-showcase\">\n                <!-- Top Bar: Tag + Certification Badges -->\n                <div class=\"showcase-top-bar\">\n                  <div class=\"showcase-tag-pill\">\n                    <span class=\"play-icon\">&#9658;</span>\n                    <span id=\"showcase-tag\">AUTOMATION</span>\n                  </div>\n                  <div class=\"showcase-certs\">\n                    <img src=\"/about/cert-iso9001.png\" alt=\"ISO 9001\" class=\"showcase-cert-icon\" />\n                    <img src=\"/about/cert-iso14001.png\" alt=\"ISO 14001\" class=\"showcase-cert-icon\" />\n                    <img src=\"/about/cert-iso45001.png\" alt=\"ISO 45001\" class=\"showcase-cert-icon\" />\n                    <img src=\"/about/cert-accurate-white.png\" alt=\"Accredited\" class=\"showcase-cert-icon\" />\n                  </div>\n                </div>\n\n                <!-- Media Stage (Images and Videos) -->\n                <div class=\"showcase-media-stage\" id=\"showcase-media\">\n                  <img src=\"/homevideos/homebannerimage.jpg\" alt=\"Industrial Services\" class=\"showcase-media-item\" data-index=\"0\" />\n                  <video src=\"/homevideos/Automated-1-2.mp4\" poster=\"/homevideos/Automated-1-2-poster.jpg\" class=\"showcase-media-item active\" data-index=\"1\" autoplay muted loop playsinline></video>\n                  <video src=\"/homevideos/newproduct.mp4\" poster=\"/homevideos/newproduct-poster.jpg\" class=\"showcase-media-item\" data-index=\"2\" muted loop playsinline></video>\n                  <img src=\"/homevideos/INSPECTION-AND-TESTING1.jpg\" alt=\"NDT and Testing\" class=\"showcase-media-item\" data-index=\"3\" />\n                </div>\n\n                <!-- Left Floating Category Tabs -->\n                <div class=\"showcase-tabs\">\n                  <button type=\"button\" class=\"showcase-tab\" data-index=\"0\">\n                    <img src=\"/homevideos/homebannerimage.jpg\" alt=\"\" class=\"tab-thumb\" />\n                    <span>Industrial</span>\n                  </button>\n                  <button type=\"button\" class=\"showcase-tab active\" data-index=\"1\">\n                    <img src=\"/homevideos/Automated-1-2-poster.jpg\" alt=\"\" class=\"tab-thumb\" />\n                    <span>Automation</span>\n                  </button>\n                  <button type=\"button\" class=\"showcase-tab\" data-index=\"2\">\n                    <img src=\"/homevideos/newproduct-poster.jpg\" alt=\"\" class=\"tab-thumb\" />\n                    <span>Metering</span>\n                  </button>\n                  <button type=\"button\" class=\"showcase-tab\" data-index=\"3\">\n                    <img src=\"/homevideos/INSPECTION-AND-TESTING1.jpg\" alt=\"\" class=\"tab-thumb\" />\n                    <span>NDT &amp; Test</span>\n                  </button>\n                </div>\n\n                <!-- Bottom Right Navigation Controls -->\n                <div class=\"showcase-nav-bar\">\n                  <button type=\"button\" class=\"showcase-arrow\" id=\"showcase-prev\" aria-label=\"Previous slide\">&larr;</button>\n                  <span class=\"showcase-counter\" id=\"showcase-counter\">02 / 04</span>\n                  <button type=\"button\" class=\"showcase-next-btn\" id=\"showcase-next\">NEXT &rarr;</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Bottom Stats Strip -->\n          <div class=\"hero-stats-strip\" id=\"hero-stats-strip\">\n            <div class=\"stat-strip-item\">\n              <span class=\"stat-strip-prefix\">/01</span>\n              <span class=\"stat-strip-num\">18+</span>\n              <span class=\"stat-strip-label\">Years Experience</span>\n            </div>\n            <div class=\"stat-strip-item\">\n              <span class=\"stat-strip-prefix\">/02</span>\n              <span class=\"stat-strip-num\">8</span>\n              <span class=\"stat-strip-label\">Industries Served</span>\n            </div>\n            <div class=\"stat-strip-item\">\n              <span class=\"stat-strip-prefix\">/03</span>\n              <span class=\"stat-strip-num\">200+</span>\n              <span class=\"stat-strip-label\">Approved Clients</span>\n            </div>\n            <div class=\"stat-strip-item\">\n              <span class=\"stat-strip-prefix\">/04</span>\n              <span class=\"stat-strip-num\">16+</span>\n              <span class=\"stat-strip-label\">Global Vendors</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Section 2: What We Do (progress 0.20 – 0.58) - 3 Blurred Transparent Glass Solution Cards -->\n        <div class=\"what-we-do-screen\" id=\"what-we-do-screen\">\n          <div class=\"what-we-do-container\">\n            <!-- Left Column: Narrative -->\n            <div class=\"what-we-do-left\">\n              <div class=\"what-we-do-eyebrow\">\n                <span class=\"eyebrow-bar\"></span>\n                <span>WHAT WE DO</span>\n                <span class=\"eyebrow-bar\"></span>\n              </div>\n              <h2 class=\"what-we-do-title\">\n                What precision solutions do we deliver for critical industries?\n              </h2>\n              <p class=\"what-we-do-desc\">\n                Texas Technical Services delivers precision-engineered solutions across flow measurement, inspection, and industrial automation &mdash; trusted by leading operators since 2008.\n              </p>\n              <div class=\"what-we-do-pills\">\n                <span class=\"what-pill active\">&bull; 01</span>\n                <span class=\"what-pill\">&bull; 02</span>\n                <span class=\"what-pill\">&bull; 03</span>\n              </div>\n            </div>\n\n            <!-- Right Column: 3 Blurred Transparent Glass Solution Cards -->\n            <div class=\"what-we-do-cards\">\n              <!-- Card 01 -->\n              <div class=\"solution-card\">\n                <div class=\"solution-card-top\">\n                  <div class=\"solution-icon-wrap\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n                      <path d=\"M12 6v6l4 2\" />\n                    </svg>\n                  </div>\n                  <span class=\"solution-badge\">01</span>\n                </div>\n                <h3 class=\"solution-title\">Flow Measurement &amp; Control</h3>\n                <a href=\"#services\" class=\"solution-link\">\n                  <span>EXPLORE</span>\n                  <span class=\"chevron\">&rsaquo;</span>\n                </a>\n                <span class=\"solution-watermark\">01</span>\n              </div>\n\n              <!-- Card 02 -->\n              <div class=\"solution-card\">\n                <div class=\"solution-card-top\">\n                  <div class=\"solution-icon-wrap\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                      <path d=\"M10 2v7.31L4.15 19.8A2 2 0 0 0 5.86 23h12.28a2 2 0 0 0 1.71-3.2L14 9.31V2\" />\n                      <line x1=\"8.5\" y1=\"2\" x2=\"15.5\" y2=\"2\" />\n                      <line x1=\"6\" y1=\"18\" x2=\"18\" y2=\"18\" />\n                    </svg>\n                  </div>\n                  <span class=\"solution-badge\">02</span>\n                </div>\n                <h3 class=\"solution-title\">Inspection &amp; Testing</h3>\n                <a href=\"#services\" class=\"solution-link\">\n                  <span>EXPLORE</span>\n                  <span class=\"chevron\">&rsaquo;</span>\n                </a>\n                <span class=\"solution-watermark\">02</span>\n              </div>\n\n              <!-- Card 03 -->\n              <div class=\"solution-card\">\n                <div class=\"solution-card-top\">\n                  <div class=\"solution-icon-wrap\">\n                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                      <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" />\n                      <rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" />\n                      <line x1=\"9\" y1=\"2\" x2=\"9\" y2=\"4\" />\n                      <line x1=\"15\" y1=\"2\" x2=\"15\" y2=\"4\" />\n                      <line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\" />\n                      <line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\" />\n                    </svg>\n                  </div>\n                  <span class=\"solution-badge\">03</span>\n                </div>\n                <h3 class=\"solution-title\">Industrial Automation</h3>\n                <a href=\"#services\" class=\"solution-link\">\n                  <span>EXPLORE</span>\n                  <span class=\"chevron\">&rsaquo;</span>\n                </a>\n                <span class=\"solution-watermark\">03</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Section 3: Custody Metering & Automation (progress 0.60 – 0.96) - Single Right-Side Glass Card -->\n        <div class=\"card card-c card-custody-automation\" id=\"card-c\">\n          <div class=\"pill-badge\">WHAT WE DO</div>\n          <h2 class=\"card-title\">\n            Engineered Excellence in<br />Custody Metering &amp; Automation\n          </h2>\n          <p class=\"card-desc\">\n            Extensive expertise in liquid and gas custody metering, Industrial Automation, and Inspection &amp; Testing. Our services cover metering control upgrades, maintenance, validation, and specialised consultancy.\n          </p>\n          <p class=\"card-desc sub\">\n            Committed to end-to-end metering solutions through strategic OEM partnerships &mdash; metering skids, flow computers, CEMS analysers, and field instruments across oil &amp; gas, power, and commercial sectors.\n          </p>\n          <div class=\"card-cta-group\">\n            <a href=\"#contact\" class=\"btn btn-primary\" id=\"btn-custody-contact\">\n              Contact Us &rarr;\n            </a>\n            <a href=\"#services\" class=\"btn btn-secondary\" id=\"btn-custody-services\">\n              Our Services &rsaquo;\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Below-Scroll Content Sections -->\n  <main class=\"content-wrapper\">\n\n    <!-- About Us Section -->\n    <section id=\"about\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">About Texas Technical Services</span>\n          <h2 class=\"section-title\">Why was Texas Technical Services established in 2008?</h2>\n          <p class=\"section-subtitle\">Texas Technical Service Company is an ISO 9001:2015 certified company established in 2008. Primarily focused on flow measurement, inspection &amp; testing, and industrial automation for oil &amp; gas, power plants, manufacturing, and commercial sectors across Kuwait and the UAE.</p>\n        </div>\n\n        <div class=\"about-stats-grid\">\n          <div class=\"stat-card\">\n            <div class=\"stat-number\">18+</div>\n            <div class=\"stat-title\">Years Industrial Precision</div>\n            <p class=\"stat-desc\">Delivering certified engineering and flow measurement excellence across Kuwait and the GCC since 2008.</p>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-number\">200+</div>\n            <div class=\"stat-title\">Completed Skid Packages</div>\n            <p class=\"stat-desc\">Approved vendor delivering turnkey custody transfer solutions for KOC, KNPC, MEW, and Chevron.</p>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-number\">16+</div>\n            <div class=\"stat-title\">Global OEM Alliances</div>\n            <p class=\"stat-desc\">Strategic technology partnerships with tier-1 international manufacturers including Emerson, SICK &amp; Endress+Hauser.</p>\n          </div>\n          <div class=\"stat-card\">\n            <div class=\"stat-number\">100%</div>\n            <div class=\"stat-title\">Certified Quality &amp; Safety</div>\n            <p class=\"stat-desc\">ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, UASL and Accurate accredited operations.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Services / Features Section -->\n    <section id=\"services\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">Engineering Superiority</span>\n          <h2 class=\"section-title\">Engineered Without Compromise</h2>\n          <p class=\"section-subtitle\">Designed specifically for harsh Middle Eastern environmental conditions, high sulfur crude, and severe fiscal custody regulations.</p>\n        </div>\n\n        <div class=\"features-grid\">\n          <div class=\"feature-card\">\n            <div class=\"feature-icon\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <path d=\"M2 12h20M12 2v20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14\" />\n              </svg>\n            </div>\n            <h3 class=\"feature-name\">Multi-Path Ultrasonic Measurement</h3>\n            <p class=\"feature-desc\">Multi-chord transit-time acoustic transducers continuously map flow symmetry, swirl, and cross-flow velocity profiles to maintain exceptional accuracy across dynamic Reynolds numbers.</p>\n          </div>\n\n          <div class=\"feature-card\">\n            <div class=\"feature-icon\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <circle cx=\"12\" cy=\"12\" r=\"10\" />\n                <path d=\"M12 6v12M8 10l8 4M8 14l8-4\" />\n              </svg>\n            </div>\n            <h3 class=\"feature-name\">Zero Moving Parts &amp; No Pressure Drop</h3>\n            <p class=\"feature-desc\">Full-bore non-intrusive passage eliminates mechanical wear, turbine blade erosion, and blockage risks, yielding zero parasitic head loss and minimal lifetime maintenance.</p>\n          </div>\n\n          <div class=\"feature-card\">\n            <div class=\"feature-icon\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\" />\n              </svg>\n            </div>\n            <h3 class=\"feature-name\">SIL-2 Rated Redundant Electronics</h3>\n            <p class=\"feature-desc\">Dual independent digital signal processing channels with automated diagnostic health logs ensure continuous custody data logging even in event of transducer anomaly.</p>\n          </div>\n\n          <div class=\"feature-card\">\n            <div class=\"feature-icon\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" />\n                <rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" />\n                <line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\" />\n                <line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\" />\n              </svg>\n            </div>\n            <h3 class=\"feature-name\">Remote HART / MODBUS / PROFIBUS</h3>\n            <p class=\"feature-desc\">Comprehensive digital bus communication for seamless integration with SCADA, flow computers, and DCS networks, complete with remote verification diagnostic reports.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Industries Section -->\n    <section id=\"industries\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">Sectors &amp; Applications</span>\n          <h2 class=\"section-title\">Built for Mission-Critical Industries</h2>\n          <p class=\"section-subtitle\">Serving energy operators, petrochemical complexes, and municipal utilities across Kuwait and the Arabian Gulf.</p>\n        </div>\n\n        <div class=\"industries-grid\">\n          <div class=\"industry-card\">\n            <div class=\"industry-badge\">Upstream</div>\n            <h3 class=\"industry-title\">Oil &amp; Gas Production</h3>\n            <p class=\"industry-desc\">Wellhead allocation, gathering centers, gas-oil separation plants (GOSP), and sour crude pipeline custody transfer.</p>\n          </div>\n          <div class=\"industry-card\">\n            <div class=\"industry-badge\">Downstream</div>\n            <h3 class=\"industry-title\">Refining &amp; Petrochemicals</h3>\n            <p class=\"industry-desc\">Clean hydrocarbon export lines, ethylene &amp; propylene mass flow metering, and high-pressure steam distribution.</p>\n          </div>\n          <div class=\"industry-card\">\n            <div class=\"industry-badge\">Utilities</div>\n            <h3 class=\"industry-title\">Power &amp; Desalination</h3>\n            <p class=\"industry-desc\">High-volume seawater intake monitoring, condensate return, boiler feed water, and heavy fuel oil delivery systems.</p>\n          </div>\n          <div class=\"industry-card\">\n            <div class=\"industry-badge\">Offshore</div>\n            <h3 class=\"industry-title\">Marine Terminals &amp; Bunkering</h3>\n            <p class=\"industry-desc\">VLCC tanker loading, single point mooring (SPM) buoys, and continuous high-throughput fiscal custody verification.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Products / Technical Specifications Section -->\n    <section id=\"products\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">Product Lineup</span>\n          <h2 class=\"section-title\">Operational &amp; Metrological Data</h2>\n          <p class=\"section-subtitle\">Full compliance with international standards for hydrocarbon custody transfer and allocation metering.</p>\n        </div>\n\n        <div class=\"specs-card\" id=\"specs\">\n          <table class=\"specs-table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Parameter</th>\n                <th scope=\"col\">Specification Detail</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"spec-label\">Sizes Available</td>\n                <td class=\"spec-value\"><strong>DN50 – DN1200</strong> (2&Prime; through 48&Prime; nominal bore)</td>\n              </tr>\n              <tr>\n                <td class=\"spec-label\">Fluid Compatibility</td>\n                <td class=\"spec-value\">Crude Oil, Condensate, Natural Gas, Refined Products, Produced Water</td>\n              </tr>\n              <tr>\n                <td class=\"spec-label\">Measurement Accuracy</td>\n                <td class=\"spec-value\"><strong>&plusmn;0.15 %</strong> of measured volume (repeatability &le; &plusmn;0.02 %)</td>\n              </tr>\n              <tr>\n                <td class=\"spec-label\">Maximum Operating Pressure</td>\n                <td class=\"spec-value\">Up to <strong>420 bar</strong> (ANSI Class 150 to Class 2500 / API 10,000 psi)</td>\n              </tr>\n              <tr>\n                <td class=\"spec-label\">Signal &amp; Telemetry Outputs</td>\n                <td class=\"spec-value\">HART 4–20 mA, MODBUS RTU / TCP, PROFIBUS DP, Dual Pulse (API 5.5)</td>\n              </tr>\n              <tr>\n                <td class=\"spec-label\">Certifications &amp; Standards</td>\n                <td class=\"spec-value\">API MPMS Ch. 5.8, AGA Report No. 9, OIML R117 / R137, ATEX, IECEx Ex d IIC T6</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </section>\n\n    <!-- Clients Section -->\n    <section id=\"clients\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">Trusted Partners</span>\n          <h2 class=\"section-title\">Approved by Kuwait &amp; Regional Operators</h2>\n          <p class=\"section-subtitle\">Meeting the rigorous technical qualifications and vendor registrations of major energy and infrastructure leaders.</p>\n        </div>\n\n        <div class=\"clients-logo-grid\">\n          <div class=\"client-logo-item\" title=\"Kuwait Oil Company (KOC)\">\n            <img src=\"/clients/koc.svg\" alt=\"Kuwait Oil Company\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">Kuwait Oil Company (KOC)</span>\n          </div>\n          <div class=\"client-logo-item\" title=\"Kuwait National Petroleum Company (KNPC)\">\n            <img src=\"/clients/knpc.svg\" alt=\"Kuwait National Petroleum Company\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">KNPC</span>\n          </div>\n          <div class=\"client-logo-item\" title=\"Ministry of Electricity & Water (MEW)\">\n            <img src=\"/clients/mew.svg\" alt=\"Ministry of Electricity and Water\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">MEW Kuwait</span>\n          </div>\n          <div class=\"client-logo-item\" title=\"Chevron\">\n            <img src=\"/clients/chevron.svg\" alt=\"Chevron\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">Chevron</span>\n          </div>\n          <div class=\"client-logo-item\" title=\"Siemens Energy\">\n            <img src=\"/clients/siemens.svg\" alt=\"Siemens\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">Siemens Energy</span>\n          </div>\n          <div class=\"client-logo-item\" title=\"Honeywell\">\n            <img src=\"/clients/honeywell.svg\" alt=\"Honeywell\" class=\"client-logo-img\" />\n            <span class=\"client-logo-name\">Honeywell</span>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Blog / Engineering Insights Section -->\n    <section id=\"blog\" class=\"content-section\">\n      <div class=\"section-container\">\n        <div class=\"section-header\">\n          <span class=\"section-eyebrow\">Knowledge &amp; Innovation</span>\n          <h2 class=\"section-title\">Metrology &amp; Engineering Insights</h2>\n          <p class=\"section-subtitle\">Technical papers and field case studies authored by TTSC flow measurement specialists.</p>\n        </div>\n\n        <div class=\"blog-grid\">\n          <article class=\"blog-card\">\n            <div class=\"blog-meta\">Metrology &bull; 6 min read</div>\n            <h3 class=\"blog-title\">Transit-Time Ultrasonic vs. Conventional Turbine Meters in Sour Crude Service</h3>\n            <p class=\"blog-excerpt\">How multi-path acoustic metering eliminates bearing wear, pressure loss, and maintenance downtime in Kuwait's high-H2S gathering centers.</p>\n            <a href=\"#contact\" class=\"blog-link\">Read Technical Paper &rarr;</a>\n          </article>\n\n          <article class=\"blog-card\">\n            <div class=\"blog-meta\">Compliance &bull; 8 min read</div>\n            <h3 class=\"blog-title\">Meeting AGA Report No. 9 Guidelines for Custody Transfer Natural Gas Measurement</h3>\n            <p class=\"blog-excerpt\">A practical engineering overview on acoustic path orientation, Reynolds number correction, and real-time speed-of-sound diagnostic verification.</p>\n            <a href=\"#contact\" class=\"blog-link\">Read Technical Paper &rarr;</a>\n          </article>\n\n          <article class=\"blog-card\">\n            <div class=\"blog-meta\">Digitalization &bull; 5 min read</div>\n            <h3 class=\"blog-title\">Remote Diagnostics &amp; Condition-Based Proving via MODBUS TCP</h3>\n            <p class=\"blog-excerpt\">Integrating custody transfer flow computers directly with plant DCS to automate zero-drift detection and transducer health trending.</p>\n            <a href=\"#contact\" class=\"blog-link\">Read Technical Paper &rarr;</a>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <!-- Call to Action / Contact Us Section -->\n    <section id=\"contact\" class=\"content-section cta-section\">\n      <div class=\"section-container\">\n        <div class=\"cta-box\">\n          <div class=\"pill-badge pill-badge-dark\">Direct Factory Support</div>\n          <h2 class=\"cta-title\">Ready to specify?</h2>\n          <p class=\"cta-desc\">\n            Partner directly with our specialized flow metering engineers in Kuwait for sizing, skid fabrication, calibration certificates, and lifecycle field commissioning.\n          </p>\n          <div class=\"cta-actions\">\n            <a href=\"mailto:info@texas.com.kw\" class=\"btn btn-primary btn-large\" id=\"cta-action-button\">\n              Request Engineering Consultation &rarr;\n            </a>\n            <div class=\"cta-footnote\">\n              Kuwait Oil Sector Approved &bull; KOC / KNPC / MEW Vendor Compliant\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </main>\n\n  <!-- ========================================================================= -->\n  <!-- V2 FOOTER: PARTNERS TO WHOLE TILL END                                      -->\n  <!-- ========================================================================= -->\n  <footer class=\"v2-footer\" id=\"footer\">\n    \n    <!-- 1. Trusted Technology Partners Section -->\n    <div class=\"v2-partners-section\" id=\"partners\">\n      <div class=\"v2-partners-container\">\n        <div class=\"v2-partners-badge-wrap\">\n          <div class=\"pill-badge\">\n            <span class=\"badge-dot\"></span>\n            <span>Trusted Technology Partners</span>\n          </div>\n        </div>\n\n        <!-- Continuous Partner Logo Marquee -->\n        <div class=\"v2-partners-marquee\">\n          <div class=\"v2-partners-track\">\n            <div class=\"v2-partner-logo\"><img src=\"/about/mitsubishi-electric.png\" alt=\"Mitsubishi Electric\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/endress-hauser.jpg\" alt=\"Endress+Hauser\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/sick.jpg\" alt=\"SICK AG\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/meter-engineers.jpg\" alt=\"Meter Engineers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/tek-trol.jpg\" alt=\"Tek-Trol\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/rockwin.jpg\" alt=\"Rockwin Flowmeters\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/faure-herman.jpg\" alt=\"Faure Herman\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/euromag.jpg\" alt=\"Euromag\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/hms-networks.jpg\" alt=\"HMS Networks\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/kem-kuppers.png\" alt=\"KEM Kuppers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/omni.png\" alt=\"Omni Flow Computers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/pyrotech.jpg\" alt=\"Pyrotech\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/kurz-instruments.jpg\" alt=\"Kurz Instruments\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/novus-automation.jpg\" alt=\"Novus Automation\" /></div>\n          </div>\n          <div class=\"v2-partners-track\" aria-hidden=\"true\">\n            <div class=\"v2-partner-logo\"><img src=\"/about/mitsubishi-electric.png\" alt=\"Mitsubishi Electric\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/endress-hauser.jpg\" alt=\"Endress+Hauser\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/sick.jpg\" alt=\"SICK AG\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/meter-engineers.jpg\" alt=\"Meter Engineers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/tek-trol.jpg\" alt=\"Tek-Trol\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/rockwin.jpg\" alt=\"Rockwin Flowmeters\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/faure-herman.jpg\" alt=\"Faure Herman\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/euromag.jpg\" alt=\"Euromag\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/hms-networks.jpg\" alt=\"HMS Networks\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/kem-kuppers.png\" alt=\"KEM Kuppers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/omni.png\" alt=\"Omni Flow Computers\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/pyrotech.jpg\" alt=\"Pyrotech\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/kurz-instruments.jpg\" alt=\"Kurz Instruments\" /></div>\n            <div class=\"v2-partner-logo\"><img src=\"/about/novus-automation.jpg\" alt=\"Novus Automation\" /></div>\n          </div>\n        </div>\n\n        <div class=\"v2-partners-sublinks\">\n          <a href=\"#clients\" class=\"v2-sublink\">View all partners &rarr;</a>\n          <span class=\"v2-sublink-sep\">&bull;</span>\n          <a href=\"#services\" class=\"v2-sublink\">Explore OEM integration capabilities &rarr;</a>\n        </div>\n      </div>\n    </div>\n\n    <!-- 2. Dual Marquee Ticker Banner (Services & Industries) -->\n    <div class=\"v2-ticker-banner\">\n      <div class=\"v2-ticker-row v2-ticker-left\">\n        <div class=\"v2-ticker-content\">\n          <span><span class=\"v2-ticker-dot\"></span>FLOW MEASUREMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>INDUSTRIAL AUTOMATION</span>\n          <span><span class=\"v2-ticker-dot\"></span>INSPECTION &amp; TESTING</span>\n          <span><span class=\"v2-ticker-dot\"></span>CEMS SOLUTIONS</span>\n          <span><span class=\"v2-ticker-dot\"></span>METERING SYSTEMS</span>\n          <span><span class=\"v2-ticker-dot\"></span>CUSTODY TRANSFER</span>\n          <span><span class=\"v2-ticker-dot\"></span>PLANT AUTOMATION</span>\n          <span><span class=\"v2-ticker-dot\"></span>NDT SERVICES</span>\n          <span><span class=\"v2-ticker-dot\"></span>FLOW MEASUREMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>INDUSTRIAL AUTOMATION</span>\n          <span><span class=\"v2-ticker-dot\"></span>INSPECTION &amp; TESTING</span>\n          <span><span class=\"v2-ticker-dot\"></span>CEMS SOLUTIONS</span>\n          <span><span class=\"v2-ticker-dot\"></span>METERING SYSTEMS</span>\n          <span><span class=\"v2-ticker-dot\"></span>CUSTODY TRANSFER</span>\n          <span><span class=\"v2-ticker-dot\"></span>PLANT AUTOMATION</span>\n          <span><span class=\"v2-ticker-dot\"></span>NDT SERVICES</span>\n        </div>\n      </div>\n      <div class=\"v2-ticker-row v2-ticker-right\">\n        <div class=\"v2-ticker-content\">\n          <span><span class=\"v2-ticker-dot\"></span>OIL &amp; GAS</span>\n          <span><span class=\"v2-ticker-dot\"></span>REFINERY</span>\n          <span><span class=\"v2-ticker-dot\"></span>PETROCHEMICALS</span>\n          <span><span class=\"v2-ticker-dot\"></span>LNG TERMINALS</span>\n          <span><span class=\"v2-ticker-dot\"></span>POWER PLANT</span>\n          <span><span class=\"v2-ticker-dot\"></span>WATER TREATMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>CEMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>METAL &amp; STEEL</span>\n          <span><span class=\"v2-ticker-dot\"></span>OIL &amp; GAS</span>\n          <span><span class=\"v2-ticker-dot\"></span>REFINERY</span>\n          <span><span class=\"v2-ticker-dot\"></span>PETROCHEMICALS</span>\n          <span><span class=\"v2-ticker-dot\"></span>LNG TERMINALS</span>\n          <span><span class=\"v2-ticker-dot\"></span>POWER PLANT</span>\n          <span><span class=\"v2-ticker-dot\"></span>WATER TREATMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>CEMENT</span>\n          <span><span class=\"v2-ticker-dot\"></span>METAL &amp; STEEL</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- 3. Project Inquiry CTA Strip -->\n    <div class=\"v2-cta-strip\">\n      <div class=\"v2-cta-container\">\n        <div class=\"v2-cta-content\">\n          <h3 class=\"v2-cta-title\">Have a project in mind?</h3>\n          <p class=\"v2-cta-desc\">Talk to our team about your requirements.</p>\n        </div>\n        <a href=\"#contact\" class=\"v2-cta-btn\">\n          <span>Get in Touch</span>\n          <span class=\"arrow\">&rarr;</span>\n        </a>\n      </div>\n    </div>\n\n    <!-- 4. Main Footer Directory & Details -->\n    <div class=\"v2-footer-main\">\n      <div class=\"v2-footer-container\">\n        \n        <!-- Brand Row -->\n        <div class=\"v2-footer-brand-row\">\n          <div class=\"v2-brand-col\">\n            <a href=\"#\" class=\"v2-brand-link\">\n              <img src=\"/logo.svg\" alt=\"Texas Technical Services\" class=\"v2-footer-logo\" />\n              <div class=\"v2-brand-text\">\n                <span class=\"v2-brand-name\">TEXAS</span>\n                <span class=\"v2-brand-sub\">TECHNICAL SERVICES</span>\n              </div>\n            </a>\n            <p class=\"v2-brand-summary\">\n              ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company established in 2008. Flow measurement, automation &amp; inspection for oil &amp; gas and industrial sectors across Kuwait &amp; UAE.\n            </p>\n            <div class=\"v2-cert-tag\">\n              <span class=\"v2-cert-icon\">&#10003;</span>\n              <span>ISO 9001:2015 Certified Organization</span>\n            </div>\n          </div>\n\n          <div class=\"v2-contact-col\">\n            <div class=\"v2-contact-block\">\n              <span class=\"v2-contact-label\">Email Us</span>\n              <a href=\"mailto:info@texastechserv.com\" class=\"v2-contact-link\">info@texastechserv.com</a>\n            </div>\n            <div class=\"v2-contact-block\">\n              <span class=\"v2-contact-label\">Kuwait Headquarters</span>\n              <div class=\"v2-phones\">\n                <a href=\"tel:+96597243755\">+965 97243755</a>\n                <span class=\"bullet\">&bull;</span>\n                <a href=\"tel:+96566347267\">+965 66347267</a>\n              </div>\n            </div>\n            <div class=\"v2-contact-block\">\n              <span class=\"v2-contact-label\">Dubai Operations Hub</span>\n              <div class=\"v2-phones\">\n                <a href=\"tel:+971569553747\">+971 569553747</a>\n                <span class=\"bullet\">&bull;</span>\n                <a href=\"tel:+971567793973\">+971 567793973</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- 4 Columns Directory -->\n        <div class=\"v2-footer-cols-grid\">\n          \n          <!-- Locations -->\n          <div class=\"v2-col\">\n            <h4 class=\"v2-col-title\">Our Locations</h4>\n            <div class=\"v2-location-card\">\n              <span class=\"v2-loc-city\">Kuwait Headquarters</span>\n              <p class=\"v2-loc-addr\">Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street Fahaheel, Kuwait</p>\n            </div>\n            <div class=\"v2-location-card\">\n              <span class=\"v2-loc-city\">Dubai Regional Office</span>\n              <p class=\"v2-loc-addr\">Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira, Dubai, UAE</p>\n            </div>\n          </div>\n\n          <!-- Services -->\n          <div class=\"v2-col\">\n            <h4 class=\"v2-col-title\">Services</h4>\n            <ul class=\"v2-col-list\">\n              <li><a href=\"#services\">Flow Measurement Solutions</a></li>\n              <li><a href=\"#services\">Industrial Automation</a></li>\n              <li><a href=\"#services\">Inspection &amp; Testing</a></li>\n              <li><a href=\"#services\">PLC &amp; SCADA Integration</a></li>\n              <li><a href=\"#services\">Flow Meter Calibration</a></li>\n              <li><a href=\"#services\">Plant Automation</a></li>\n            </ul>\n          </div>\n\n          <!-- Industries -->\n          <div class=\"v2-col\">\n            <h4 class=\"v2-col-title\">Industries</h4>\n            <ul class=\"v2-col-list\">\n              <li><a href=\"#industries\">Oil &amp; Gas</a></li>\n              <li><a href=\"#industries\">Refinery</a></li>\n              <li><a href=\"#industries\">Petrochemicals</a></li>\n              <li><a href=\"#industries\">LNG</a></li>\n              <li><a href=\"#industries\">Power Plant</a></li>\n              <li><a href=\"#industries\">Water Treatment</a></li>\n              <li><a href=\"#industries\">Cement</a></li>\n              <li><a href=\"#industries\">Metal &amp; Steel</a></li>\n            </ul>\n          </div>\n\n          <!-- Solutions -->\n          <div class=\"v2-col\">\n            <h4 class=\"v2-col-title\">Solutions</h4>\n            <ul class=\"v2-col-list\">\n              <li><a href=\"#products\">Global Network</a></li>\n              <li><a href=\"#products\">Texaflow Custody Metering</a></li>\n              <li><a href=\"#products\">Space AI Industrial AI</a></li>\n              <li><a href=\"#products\">Mitsubishi Electric</a></li>\n              <li><a href=\"#products\">PWS Floor Solutions</a></li>\n              <li><a href=\"#contact\">RFQ Tender Desk</a></li>\n            </ul>\n          </div>\n\n        </div>\n\n        <!-- Certifications Row -->\n        <div class=\"v2-certs-bar\">\n          <div class=\"v2-certs-wrap\">\n            <img src=\"/about/cert-iso9001.png\" alt=\"ISO 9001:2015 Quality Management\" class=\"v2-cert-logo\" />\n            <img src=\"/about/cert-iso14001.png\" alt=\"ISO 14001 Environmental Management\" class=\"v2-cert-logo\" />\n            <img src=\"/about/cert-iso45001.png\" alt=\"ISO 45001 Occupational Health & Safety\" class=\"v2-cert-logo\" />\n            <img src=\"/about/cert-uasl.png\" alt=\"UASL Certification\" class=\"v2-cert-logo\" />\n            <img src=\"/about/cert-accurate-white.png\" alt=\"Accurate Certification\" class=\"v2-cert-logo\" />\n          </div>\n        </div>\n\n        <!-- Bottom Copyright Row -->\n        <div class=\"v2-footer-bottom\">\n          <p class=\"v2-copy\">\n            TEXAS TECHNICAL SERVICE COMPANY W.L.L. &copy; 2026. All Rights Reserved.\n          </p>\n          <div class=\"v2-bottom-meta\">\n            <span class=\"v2-cert-spec\">ISO 9001 &bull; ISO 14001 &bull; ISO 45001 &bull; UASL &bull; Accurate Certified</span>\n            <span class=\"v2-dot\">&bull;</span>\n            <a href=\"#sequence\" class=\"v2-top-btn\">Back to Top &uarr;</a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </footer>\n\n  <!-- Vanilla Script -->\n  \n";

export default function HomeV3Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isDestroyed = false;
    let animId = 0;

    /**
 * Ultrasonic Custody Transfer Flow Meter — Scrollytelling Engine
 * Texas Technical Services Company (TTSC)
 * 
 * Butter-smooth 300-frame canvas scrollytelling engine with LERP easing,
 * cover-fit aspect ratio scaling, high-DPI canvas backing, and scroll-synced cards.
 */



  // ---------------------------------------------------------------------------
  // Configuration & Constants
  // ---------------------------------------------------------------------------
  const TOTAL_FRAMES = 300;
  const BG_COLOR = '#e8e8e6';
  const LERP_FACTOR = 0.12;

  // DOM Elements
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  const ctx = canvas ? canvas.getContext('2d') : null;
  const sequenceSection = document.getElementById('sequence');
  const nav = document.getElementById('main-nav');
  const loaderEl = document.getElementById('loader');
  const loaderPercent = document.getElementById('loader-percent');

  const heroScreen = document.getElementById('hero-screen');
  const whatWeDoScreen = document.getElementById('what-we-do-screen');
  const cardB = document.getElementById('card-b');
  const cardC = document.getElementById('card-c');

  // State Variables
  const images = new Array(TOTAL_FRAMES);
  let loadedCount = 0;
  let allLoaded = false;

  let currentFrame = 0; // Float for silky-smooth LERP easing
  let rawTarget = 0;    // Target frame based on raw scroll progress
  let lastDrawnIndex = -1;

  // ---------------------------------------------------------------------------
  // Frame Source Helper
  // ---------------------------------------------------------------------------
  function frameSrc(n: number) {
    return `/frames/ezgif-708412ec47090038-jpg/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;
  }

  // Fallback helper in case direct folder without 'frames/' prefix is requested
  function fallbackSrc(n: number) {
    return `/ezgif-708412ec47090038-jpg/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;
  }

  // ---------------------------------------------------------------------------
  // Preloading System
  // ---------------------------------------------------------------------------
  function initPreloader() {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();

      const onComplete = () => {
        loadedCount++;
        if (loaderPercent) {
          loaderPercent.textContent = String(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        }

        if (loadedCount === TOTAL_FRAMES) {
          allLoaded = true;
          // Fade out loader
          if (loaderEl) {
            loaderEl.style.opacity = '0';
            setTimeout(() => {
              loaderEl.style.display = 'none';
            }, 400);
          }
          // Immediately draw frame 1 (index 0)
          drawFrame(0);
          lastDrawnIndex = 0;
        }
      };

      img.onload = onComplete;
      img.onerror = () => {
        // Attempt secondary path if primary fails
        img.onerror = onComplete; // Avoid infinite recursion
        img.src = fallbackSrc(i);
      };

      img.src = frameSrc(i);
      images[i - 1] = img;
    }
  }

  // ---------------------------------------------------------------------------
  // Canvas Rendering with Cover-Fit Math
  // ---------------------------------------------------------------------------
  function drawFrame(index: number) {
    if (!canvas || !ctx) return;

    const img = images[index];
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    if (W === 0 || H === 0) return;

    // High-DPI buffer scaling
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // Exact studio background fill
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, W, H);

    // Draw frame with object-fit: cover math (manual calculation, no ctx.scale for fit)
    if (img && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const dx = (W - sw) / 2;
      const dy = (H - sh) / 2;

      ctx.drawImage(img, dx, dy, sw, sh);
    }
  }

  // ---------------------------------------------------------------------------
  // Overlay Cards Transition Logic
  // ---------------------------------------------------------------------------
  function updateCard(cardElement: HTMLElement | null, progress: number, start: number, end: number, isFirst: boolean = false, isLast: boolean = false) {
    if (!cardElement) return;

    const fade = 0.05; // 5% fade transition window
    let opacity = 0;
    let yOffset = 20;

    if (progress >= start && progress <= end) {
      if (isFirst) {
        if (progress > end - fade) {
          const t = (end - progress) / fade;
          opacity = t;
          yOffset = -20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      } else if (isLast) {
        if (progress < start + fade) {
          const t = (progress - start) / fade;
          opacity = t;
          yOffset = 20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      } else {
        if (progress < start + fade) {
          const t = (progress - start) / fade;
          opacity = t;
          yOffset = 20 * (1 - t);
        } else if (progress > end - fade) {
          const t = (end - progress) / fade;
          opacity = t;
          yOffset = -20 * (1 - t);
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }
    } else if (isFirst && progress < start) {
      opacity = 1;
      yOffset = 0;
    }

    opacity = Math.max(0, Math.min(1, opacity));
    cardElement.style.opacity = opacity.toFixed(3);
    cardElement.style.transform = `translateY(calc(-50% + ${yOffset.toFixed(1)}px))`;

    // Only allow interactions when visible
    if (opacity > 0.05) {
      cardElement.style.pointerEvents = 'auto';
      cardElement.style.visibility = 'visible';
    } else {
      cardElement.style.pointerEvents = 'none';
      cardElement.style.visibility = 'hidden';
    }
  }

  // Perlin smootherstep for buttery-smooth ease-in/ease-out transitions
  function smootherstep(min: number, max: number, val: number) {
    if (val <= min) return 0;
    if (val >= max) return 1;
    const x = (val - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  }

  function updateOverlayCards(progress: number) {
    // 1. First Screen (Hero: Glass Card + Media Showcase + Bottom Stats): 0.00 – 0.20
    if (heroScreen) {
      let opacity = 1;
      let yOffset = 0;

      if (progress > 0.06) {
        const t = smootherstep(0.06, 0.20, progress);
        opacity = 1 - t;
        yOffset = -26 * t;
      }

      heroScreen.style.opacity = opacity.toFixed(3);
      heroScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      heroScreen.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      heroScreen.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }

    // 2. Section 2: What We Do (Narrative Glass Card + 3 Solution Cards): 0.16 – 0.60
    if (whatWeDoScreen) {
      let opacity = 0;
      let yOffset = 22;

      if (progress >= 0.16 && progress <= 0.60) {
        if (progress < 0.28) {
          const t = smootherstep(0.16, 0.28, progress);
          opacity = t;
          yOffset = 22 * (1 - t);
        } else if (progress > 0.48) {
          const t = smootherstep(0.48, 0.60, progress);
          opacity = 1 - t;
          yOffset = -22 * t;
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }

      whatWeDoScreen.style.opacity = opacity.toFixed(3);
      whatWeDoScreen.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      whatWeDoScreen.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      whatWeDoScreen.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }

    // Card B (fallback if present)
    updateCard(cardB, progress, 0.20, 0.55, false, false);

    // 3. Section 3: Custody Metering & Automation (Card C on Right): 0.54 – 0.98
    if (cardC) {
      let opacity = 0;
      let yOffset = 22;

      if (progress >= 0.54 && progress <= 0.98) {
        if (progress < 0.66) {
          const t = smootherstep(0.54, 0.66, progress);
          opacity = t;
          yOffset = 22 * (1 - t);
        } else if (progress > 0.88) {
          const t = smootherstep(0.88, 0.98, progress);
          opacity = 1 - t;
          yOffset = -18 * t;
        } else {
          opacity = 1;
          yOffset = 0;
        }
      }

      cardC.style.opacity = opacity.toFixed(3);
      cardC.style.transform = `translateY(${yOffset.toFixed(1)}px)`;
      cardC.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none';
      cardC.style.visibility = opacity > 0.05 ? 'visible' : 'hidden';
    }
  }

  // ---------------------------------------------------------------------------
  // Hero Showcase Media Slider (Right Column)
  // ---------------------------------------------------------------------------
  function initShowcaseSlider() {
    const showcaseCard = document.getElementById('hero-showcase');
    if (!showcaseCard) return;

    const mediaItems = showcaseCard.querySelectorAll('.showcase-media-item');
    const tabs = showcaseCard.querySelectorAll('.showcase-tab');
    const tagEl = document.getElementById('showcase-tag');
    const counterEl = document.getElementById('showcase-counter');
    const prevBtn = document.getElementById('showcase-prev');
    const nextBtn = document.getElementById('showcase-next');

    const tags = ['INDUSTRIAL SERVICES', 'AUTOMATION', 'METERING', 'NDT & TESTING'];
    let currentSlide = 1; // Default to Automation matching V2
    const totalSlides = mediaItems.length;
    let autoTimer: ReturnType<typeof setInterval> | null = null;
    let isPaused = false;

    function goToSlide(index: number) {
      currentSlide = (index + totalSlides) % totalSlides;

      // Update media items
      mediaItems.forEach((item, idx) => {
        if (idx === currentSlide) {
          item.classList.add('active');
          if (item.tagName === 'VIDEO') {
            const vid = item as HTMLVideoElement;
            vid.currentTime = 0;
            vid.play().catch(() => {});
          }
        } else {
          item.classList.remove('active');
          if (item.tagName === 'VIDEO') {
            const vid = item as HTMLVideoElement;
            vid.pause();
          }
        }
      });

      // Update tabs
      tabs.forEach((tab, idx) => {
        tab.classList.toggle('active', idx === currentSlide);
      });

      // Update text & counter
      if (tagEl) tagEl.textContent = tags[currentSlide] || 'AUTOMATION';
      if (counterEl) {
        counterEl.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
      }
    }

    // Tab clicks
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.getAttribute('data-index') || '0', 10);
        goToSlide(idx);
      });
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    // Auto-advance
    function startAutoTimer() {
      stopAutoTimer();
      autoTimer = setInterval(() => {
        if (!isPaused) {
          goToSlide(currentSlide + 1);
        }
      }, 5500);
    }

    function stopAutoTimer() {
      if (autoTimer) clearInterval(autoTimer);
    }

    showcaseCard.addEventListener('mouseenter', () => { isPaused = true; });
    showcaseCard.addEventListener('mouseleave', () => { isPaused = false; });

    // Initialize slide 1 (Automation)
    goToSlide(1);
    startAutoTimer();
  }

  // ---------------------------------------------------------------------------
  // Scroll Handler (Raw Target Calculation & Nav Frosted Glass)
  // ---------------------------------------------------------------------------
  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Nav frosted-glass transition after 60px
    if (nav) {
      if (scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    // Scroll progress within #sequence section
    if (sequenceSection) {
      const scrollableDist = sequenceSection.offsetHeight - window.innerHeight;
      const progress = scrollableDist > 0 ? Math.max(0, Math.min(1, scrollY / scrollableDist)) : 0;

      // 0-indexed target frame (0 to 299)
      rawTarget = progress * (TOTAL_FRAMES - 1);

      // Update overlay cards
      updateOverlayCards(progress);
    }
  }

  // ---------------------------------------------------------------------------
  // Butter-Smooth Animation Loop (LERP Easing)
  // ---------------------------------------------------------------------------
  function renderLoop() {
    // Silky lerp interpolation
    currentFrame += (rawTarget - currentFrame) * LERP_FACTOR;
    const drawIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));

    // Only repaint if frame index changed
    if (drawIndex !== lastDrawnIndex && allLoaded) {
      drawFrame(drawIndex);
      lastDrawnIndex = drawIndex;
    }

    requestAnimationFrame(renderLoop);
  }

  // ---------------------------------------------------------------------------
  // Resize Handler with 150ms Debounce
  // ---------------------------------------------------------------------------
  let resizeTimer: ReturnType<typeof setTimeout> | null = null;
  function onResize() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (lastDrawnIndex >= 0 && allLoaded) {
        drawFrame(lastDrawnIndex);
      }
    }, 150);
  }

  // ---------------------------------------------------------------------------
  // Mobile Navigation & Active Link Highlighting
  // ---------------------------------------------------------------------------
  function initNavigation() {
    const mobileBtn = document.getElementById('nav-mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navMenu.classList.toggle('open');
        mobileBtn.classList.toggle('active', isOpen);
      });

      // Close menu when clicking on any nav link
      navMenu.querySelectorAll('.nav-link, .nav-cta-btn').forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileBtn.classList.remove('active');
        });
      });

      // Close menu on click outside
      document.addEventListener('click', (e) => {
        if (nav && !nav.contains(e.target as Node)) {
          navMenu.classList.remove('open');
          mobileBtn.classList.remove('active');
        }
      });
    }

    // Active link highlighting on scroll
    const sections = [
      { id: 'sequence', linkId: 'link-home' },
      { id: 'about', linkId: 'link-about' },
      { id: 'services', linkId: 'link-services' },
      { id: 'industries', linkId: 'link-industries' },
      { id: 'products', linkId: 'link-products' },
      { id: 'clients', linkId: 'link-clients' },
      { id: 'blog', linkId: 'link-blog' }
    ];

    window.addEventListener('scroll', () => {
      const scrollPos = (window.scrollY || window.pageYOffset) + 200;
      let currentSectionId = 'sequence';

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          currentSectionId = sections[i].id;
        }
      }

      sections.forEach((s) => {
        const link = document.getElementById(s.linkId);
        if (link) {
          if (s.id === currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // Initialization
  // ---------------------------------------------------------------------------
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  onScroll();
  initPreloader();
  initNavigation();
  initShowcaseSlider();
  animId = requestAnimationFrame(renderLoop);



    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="home-v3-showcase-root"
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
