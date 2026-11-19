import React from "react";
import { Reveal } from "@/components/v3/motion/Reveal";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "service-flow",
    title: "Flow Measurement & Custody Transfer Skids",
    description:
      "Turnkey liquid and gas fiscal metering packages. Integrated with multipath ultrasonic flow meters, Coriolis mass meters, bi-directional prover loops, and computerized batch auditing to API and AGA standards.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "service-scada",
    title: "Plant SCADA & Industrial Automation",
    description:
      "Turnkey DCS, PLC programming, and Safety Instrumented Systems (SIS). Complete engineering from functional safety lifecycle calculations to redundant fieldbus architectures and remote telemetric dashboards.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
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
    ),
  },
  {
    id: "service-ndt",
    title: "Inspection & Non-Destructive Testing (NDT)",
    description:
      "Comprehensive structural and piping inspection, advanced ultrasonic testing (UT), radiographic testing (RT), and welder certification compliant with ISO 9001, ISO 14001, ISO 45001 & UASL.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "service-calibration",
    title: "Calibration, Proving & Field Services",
    description:
      "Mobile field calibration teams and laboratory testing services for flow, pressure, temperature, and analytical instruments with ISO/IEC 17025 accredited primary reference standards.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
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
    ),
  },
];

export default function ServiceCards() {
  return (
    <div className="services-static-grid">
      {services.map((service, index) => (
        <Reveal key={service.id} delay={index * 0.08}>
          <article className="service-card service-static-card glass-hover-card">
            <div className="card-content service-card-content">
              <div className="service-card-icon-tile">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <div className="service-card-divider" />
              <p className="service-card-desc">{service.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
