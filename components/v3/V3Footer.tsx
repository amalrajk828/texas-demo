import React from "react";
import Link from "next/link";
import Image from "next/image";

const PARTNER_LOGOS = [
  { name: "Mitsubishi Electric", src: "/about/mitsubishi-electric.png" },
  { name: "Endress+Hauser", src: "/about/endress-hauser.jpg" },
  { name: "SICK AG", src: "/about/sick.jpg" },
  { name: "Meter Engineers", src: "/about/meter-engineers.jpg" },
  { name: "Tek-Trol", src: "/about/tek-trol.jpg" },
  { name: "Rockwin Flowmeters", src: "/about/rockwin.jpg" },
  { name: "Faure Herman", src: "/about/faure-herman.jpg" },
  { name: "Euromag", src: "/about/euromag.jpg" },
  { name: "HMS Networks", src: "/about/hms-networks.jpg" },
  { name: "KEM Kuppers", src: "/about/kem-kuppers.png" },
  { name: "Omni Flow Computers", src: "/about/omni.png" },
  { name: "Pyrotech", src: "/about/pyrotech.jpg" },
  { name: "Kurz Instruments", src: "/about/kurz-instruments.jpg" },
  { name: "Novus Automation", src: "/about/novus-automation.jpg" },
];

export default function Footer() {
  return (
    <footer className="v2-footer" id="footer">
      {/* 1. Trusted Technology Partners Section */}
      <div className="v2-partners-section" id="partners">
        <div className="v2-partners-container">
          <div className="v2-partners-badge-wrap">
            <div className="pill-badge">
              <span className="badge-dot"></span>
              <span>Trusted Technology Partners</span>
            </div>
          </div>

          {/* Continuous Partner Logo Marquee */}
          <div className="v2-partners-marquee">
            <div className="v2-partners-track">
              {PARTNER_LOGOS.map((p, idx) => (
                <div key={`track1-${idx}`} className="v2-partner-logo">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="v2-partners-track" aria-hidden="true">
              {PARTNER_LOGOS.map((p, idx) => (
                <div key={`track2-${idx}`} className="v2-partner-logo">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="v2-partners-sublinks">
            <Link href="/partners/" className="v2-sublink">
              View all partners &rarr;
            </Link>
            <span className="v2-sublink-sep">&bull;</span>
            <Link href="/service/" className="v2-sublink">
              Explore OEM integration capabilities &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Dual Marquee Ticker Banner (Services & Industries) */}
      <div className="v2-ticker-banner">
        <div className="v2-ticker-row v2-ticker-left">
          <div className="v2-ticker-content">
            <span><span className="v2-ticker-dot"></span>FLOW MEASUREMENT</span>
            <span><span className="v2-ticker-dot"></span>INDUSTRIAL AUTOMATION</span>
            <span><span className="v2-ticker-dot"></span>INSPECTION &amp; TESTING</span>
            <span><span className="v2-ticker-dot"></span>CEMS SOLUTIONS</span>
            <span><span className="v2-ticker-dot"></span>METERING SYSTEMS</span>
            <span><span className="v2-ticker-dot"></span>CUSTODY TRANSFER</span>
            <span><span className="v2-ticker-dot"></span>PLANT AUTOMATION</span>
            <span><span className="v2-ticker-dot"></span>NDT SERVICES</span>
            <span><span className="v2-ticker-dot"></span>FLOW MEASUREMENT</span>
            <span><span className="v2-ticker-dot"></span>INDUSTRIAL AUTOMATION</span>
            <span><span className="v2-ticker-dot"></span>INSPECTION &amp; TESTING</span>
            <span><span className="v2-ticker-dot"></span>CEMS SOLUTIONS</span>
            <span><span className="v2-ticker-dot"></span>METERING SYSTEMS</span>
            <span><span className="v2-ticker-dot"></span>CUSTODY TRANSFER</span>
            <span><span className="v2-ticker-dot"></span>PLANT AUTOMATION</span>
            <span><span className="v2-ticker-dot"></span>NDT SERVICES</span>
          </div>
        </div>
        <div className="v2-ticker-row v2-ticker-right">
          <div className="v2-ticker-content">
            <span><span className="v2-ticker-dot"></span>OIL &amp; GAS</span>
            <span><span className="v2-ticker-dot"></span>REFINERY</span>
            <span><span className="v2-ticker-dot"></span>PETROCHEMICALS</span>
            <span><span className="v2-ticker-dot"></span>LNG TERMINALS</span>
            <span><span className="v2-ticker-dot"></span>POWER PLANT</span>
            <span><span className="v2-ticker-dot"></span>WATER TREATMENT</span>
            <span><span className="v2-ticker-dot"></span>CEMENT</span>
            <span><span className="v2-ticker-dot"></span>METAL &amp; STEEL</span>
            <span><span className="v2-ticker-dot"></span>OIL &amp; GAS</span>
            <span><span className="v2-ticker-dot"></span>REFINERY</span>
            <span><span className="v2-ticker-dot"></span>PETROCHEMICALS</span>
            <span><span className="v2-ticker-dot"></span>LNG TERMINALS</span>
            <span><span className="v2-ticker-dot"></span>POWER PLANT</span>
            <span><span className="v2-ticker-dot"></span>WATER TREATMENT</span>
            <span><span className="v2-ticker-dot"></span>CEMENT</span>
            <span><span className="v2-ticker-dot"></span>METAL &amp; STEEL</span>
          </div>
        </div>
      </div>

      {/* 3. Project Inquiry CTA Strip */}
      <div className="v2-cta-strip">
        <div className="v2-cta-container">
          <div className="v2-cta-content">
            <h3 className="v2-cta-title">Have a project in mind?</h3>
            <p className="v2-cta-desc">Talk to our team about your requirements.</p>
          </div>
          <Link href="/contacts/" className="v2-cta-btn">
            <span>Get in Touch</span>
            <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* 4. Main Footer Directory & Details */}
      <div className="v2-footer-main">
        <div className="v2-footer-container">
          {/* Brand Row */}
          <div className="v2-footer-brand-row">
            <div className="v2-brand-col">
              <Link href="/" className="v2-brand-link">
                <Image
                  src="/logo.svg"
                  alt="Texas Technical Services"
                  className="v2-footer-logo"
                  width={44}
                  height={44}
                />
                <div className="v2-brand-text">
                  <span className="v2-brand-name">TEXAS</span>
                  <span className="v2-brand-sub">TECHNICAL SERVICES</span>
                </div>
              </Link>
              <p className="v2-brand-summary">
                ISO 9001, ISO 14001, ISO 45001, UASL &amp; Accurate certified company
                established in 2008. Flow measurement, automation &amp; inspection for oil &amp; gas and
                industrial sectors across Kuwait &amp; UAE.
              </p>
              <div className="v2-cert-tag">
                <span className="v2-cert-icon">&#10003;</span>
                <span>ISO 9001:2015 Certified Organization</span>
              </div>
            </div>

            <div className="v2-contact-col">
              <div className="v2-contact-block">
                <span className="v2-contact-label">Email Us</span>
                <a href="mailto:info@texastechserv.com" className="v2-contact-link">
                  info@texastechserv.com
                </a>
              </div>
              <div className="v2-contact-block">
                <span className="v2-contact-label">Kuwait Headquarters</span>
                <div className="v2-phones">
                  <a href="tel:+96597243755">+965 97243755</a>
                  <span className="bullet">&bull;</span>
                  <a href="tel:+96566347267">+965 66347267</a>
                </div>
              </div>
              <div className="v2-contact-block">
                <span className="v2-contact-label">Dubai Operations Hub</span>
                <div className="v2-phones">
                  <a href="tel:+971569553747">+971 569553747</a>
                  <span className="bullet">&bull;</span>
                  <a href="tel:+971567793973">+971 567793973</a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Columns Directory */}
          <div className="v2-footer-cols-grid">
            {/* Locations */}
            <div className="v2-col">
              <h4 className="v2-col-title">Our Locations</h4>
              <div className="v2-location-card">
                <span className="v2-loc-city">Kuwait Headquarters</span>
                <p className="v2-loc-addr">
                  Munira Tower Office No. 30, 9th Floor – Building No.6702, Block 7 – Makkah Street Fahaheel, Kuwait
                </p>
              </div>
              <div className="v2-location-card">
                <span className="v2-loc-city">Dubai Regional Office</span>
                <p className="v2-loc-addr">
                  Amna Naseer Building, Al Marar Area 20th Street #529 Plot #302 Office #201-19, Deira, Dubai, UAE
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="v2-col">
              <h4 className="v2-col-title">Services</h4>
              <ul className="v2-col-list">
                <li><Link href="/service/flow-measurement-solutions/">Flow Measurement Solutions</Link></li>
                <li><Link href="/service/industrial-automation/">Industrial Automation</Link></li>
                <li><Link href="/service/inspection-testing/">Inspection &amp; Testing</Link></li>
                <li><Link href="/plc-scada-systems-integration/">PLC &amp; SCADA Integration</Link></li>
                <li><Link href="/service/flow-meter-calibration/">Flow Meter Calibration</Link></li>
                <li><Link href="/service/plant-automation/">Plant Automation</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="v2-col">
              <h4 className="v2-col-title">Industries</h4>
              <ul className="v2-col-list">
                <li><Link href="/industries/oil-gas/">Oil &amp; Gas</Link></li>
                <li><Link href="/industries/refinery/">Refinery</Link></li>
                <li><Link href="/industries/petrochemicals/">Petrochemicals</Link></li>
                <li><Link href="/industries/lng/">LNG</Link></li>
                <li><Link href="/industries/power-plant/">Power Plant</Link></li>
                <li><Link href="/industries/water-treatment/">Water Treatment</Link></li>
                <li><Link href="/industries/cement/">Cement</Link></li>
                <li><Link href="/industries/metal-steel/">Metal &amp; Steel</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="v2-col">
              <h4 className="v2-col-title">Solutions</h4>
              <ul className="v2-col-list">
                <li><Link href="/partners/">Global Network</Link></li>
                <li><Link href="/solutions/texaflow/">Texaflow Custody Metering</Link></li>
                <li><Link href="/solutions/space-ai/">Space AI Industrial AI</Link></li>
                <li><Link href="/solutions/mitsubishi-electric/">Mitsubishi Electric</Link></li>
                <li><Link href="/solutions/pws-floor-solutions/">PWS Floor Solutions</Link></li>
                <li><Link href="/contacts/">RFQ Tender Desk</Link></li>
              </ul>
            </div>
          </div>

          {/* Certifications Row */}
          <div className="v2-certs-bar">
            <div className="v2-certs-wrap">
              <Image
                src="/about/cert-iso9001.png"
                alt="ISO 9001:2015 Quality Management"
                className="v2-cert-logo"
                width={120}
                height={55}
              />
              <Image
                src="/about/cert-iso14001.png"
                alt="ISO 14001 Environmental Management"
                className="v2-cert-logo"
                width={120}
                height={55}
              />
              <Image
                src="/about/cert-iso45001.png"
                alt="ISO 45001 Occupational Health & Safety"
                className="v2-cert-logo"
                width={120}
                height={55}
              />
              <Image
                src="/about/cert-uasl.png"
                alt="UASL Certification"
                className="v2-cert-logo"
                width={120}
                height={55}
              />
              <Image
                src="/about/cert-accurate-white.png"
                alt="Accurate Certification"
                className="v2-cert-logo"
                width={120}
                height={55}
              />
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="v2-footer-bottom">
            <p className="v2-copy">
              TEXAS TECHNICAL SERVICE COMPANY W.L.L. &copy; 2026. All Rights Reserved.
            </p>
            <div className="v2-bottom-meta">
              <span className="v2-cert-spec">
                ISO 9001 &bull; ISO 14001 &bull; ISO 45001 &bull; UASL &bull; Accurate Certified
              </span>
              <span className="v2-dot">&bull;</span>
              <a href="#sequence" className="v2-top-btn" aria-label="Back to top">
                Back to Top &uarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
