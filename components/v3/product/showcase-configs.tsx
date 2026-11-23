import React from "react";

export interface StackShowcaseCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  bgColor: string;
  label: string;
  sublabel: string;
  btnText: string;
  btnHref: string;
  dockTip: string;
  dockIcon: "liquid" | "gas" | "flare" | "cems" | "dust" | "analyzer" | "custom";
  dockSvg?: React.ReactNode;
  thumbs: {
    src: string;
    alt: string;
  }[];
}

export interface ClosingStatCard {
  big: string;
  label: string;
  dark?: boolean;
  cert?: boolean;
}

export interface ProductShowcaseConfig {
  navAriaLabel: string;
  bottomBarText: string;
  bottomBarCtaText?: string;
  bottomBarCtaHref?: string;
  cards: StackShowcaseCard[];
  closing: {
    title: React.ReactNode;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    statCards?: ClosingStatCard[];
  };
}

export const DEFAULT_CLOSING_STAT_CARDS: ClosingStatCard[] = [
  { big: "18+", label: "YEARS IN OPERATION", dark: false, cert: false },
  { big: "200+", label: "COMPLETED PROJECTS", dark: true, cert: false },
  { big: "16+", label: "GLOBAL OEM ALLIANCES", dark: false, cert: false },
  { big: "ISO", label: "9001:2015 CERTIFIED", dark: false, cert: true },
  { big: "24/7", label: "TECHNICAL SUPPORT", dark: false, cert: false },
];

/**
 * Configuration for Flow Meters Stack Showcase
 */
export const FLOW_METERS_SHOWCASE_CONFIG: ProductShowcaseConfig = {
  navAriaLabel: "Flow Measurement Technology Navigation",
  bottomBarText: "Talk to an engineer about your flow project",
  bottomBarCtaText: "Contact",
  bottomBarCtaHref: "/contacts/",
  cards: [
    {
      id: "liquid",
      num: "(01)",
      title: "Liquid metering built for custody transfer.",
      desc: "High-precision custody transfer and allocation meters for crude oil, refined fuels, LPG and petrochemical liquids. Engineered for accuracy where every barrel is billed.",
      bgColor: "#a11d1d",
      label: "Liquid branch",
      sublabel: "Crude · Refined fuels · LPG",
      btnText: "See liquid flow meters",
      btnHref: "/products/flow-meters/liquid-flow-meters/",
      dockTip: "Liquid Flow Meters",
      dockIcon: "liquid",
      thumbs: [
        { src: "/images/liquid_flow_meters/helical_tlm/1.png", alt: "Helical Turbine Flow Meter" },
        { src: "/images/liquid_flow_meters/fh_sonic/1.png", alt: "Faure Herman Ultrasonic Flow Meter" },
        { src: "/images/liquid_flow_meters/heliflu_cta/1.jpg", alt: "Heliflu CTA Flow Meter" },
      ],
    },
    {
      id: "gas",
      num: "(02)",
      title: "Gas metering you can trust at high pressure.",
      desc: "Multi-path ultrasonic and turbine gas meters designed for custody transfer, high-pressure natural gas and process lines.",
      bgColor: "#1f2c4b",
      label: "Gas branch",
      sublabel: "Ultrasonic · Turbine",
      btnText: "See gas flow meters",
      btnHref: "/products/flow-meters/gas-flow-meters/",
      dockTip: "Gas Flow Meters",
      dockIcon: "gas",
      thumbs: [
        { src: "/images/gas_flow_meters/flowsic600_xt/1.png", alt: "SICK FLOWSIC600-XT Ultrasonic Gas Meter" },
        { src: "/images/gas_flow_meters/flowsic500/1.png", alt: "SICK FLOWSIC500 Gas Flow Meter" },
        { src: "/images/gas_flow_meters/flowsic600/1.png", alt: "SICK FLOWSIC600 Gas Meter" },
      ],
    },
    {
      id: "flare",
      num: "(03)",
      title: "Flare measurement from near-zero to 120 m/s.",
      desc: "Continuous ultrasonic flare stack meters operating accurately from near-zero velocities up to 120 m/s, for EPA compliance and emissions reporting.",
      bgColor: "#c24f17",
      label: "Flare branch",
      sublabel: "Ultrasonic · EPA compliance",
      btnText: "See flare gas meters",
      btnHref: "/products/flow-meters/flare-meters/",
      dockTip: "Flare Gas Meters",
      dockIcon: "flare",
      thumbs: [
        { src: "/images/flare_meters/flowsic100_flare/1.png", alt: "FLOWSIC100 Flare Gas Meter" },
        { src: "/images/flare_meters/flowsic100_flare_xt/1.png", alt: "FLOWSIC100-Flare-XT Meter" },
        { src: "/flare_meter.png", alt: "Flare Stack Meter Installation" },
      ],
    },
  ],
  closing: {
    title: (
      <>
        Not sure which meter<br />
        <span>fits your line?</span>
      </>
    ),
    subtitle:
      "Our applications engineers analyze your process flow rates, fluid properties, and design pressures to configure the optimal instrumentation package.",
    primaryCtaText: "Request Technical Datasheet",
    primaryCtaHref: "/contacts/",
    secondaryCtaText: "Talk to an Engineer",
    secondaryCtaHref: "/contacts/",
    statCards: DEFAULT_CLOSING_STAT_CARDS,
  },
};

/**
 * Configuration for Analyzers Stack Showcase
 */
export const ANALYZERS_SHOWCASE_CONFIG: ProductShowcaseConfig = {
  navAriaLabel: "Analytical Technology & Emissions Navigation",
  bottomBarText: "Talk to an engineer about your analyzer project",
  bottomBarCtaText: "Contact",
  bottomBarCtaHref: "/contacts/",
  cards: [
    {
      id: "cems",
      num: "(01)",
      title: "Turnkey CEMS engineered for regulatory emissions compliance.",
      desc: "Turnkey Continuous Emission Monitoring Systems measuring SO2, NOx, CO, CO2, and O2 with automated calibration for power plants, waste incineration, and industrial facilities.",
      bgColor: "#1f2c4b",
      label: "CEMS branch",
      sublabel: "Stack emissions · Power plants · Flue gas",
      btnText: "See CEMS solutions",
      btnHref: "/products/analyzers/cems/",
      dockTip: "CEMS Solutions",
      dockIcon: "cems",
      thumbs: [
        { src: "/images/cems/mcs200hw/1.png", alt: "SICK MCS200HW Multi-Component CEMS" },
        { src: "/images/cems/mcs100ft/1.png", alt: "SICK MCS100FT Extractive CEMS" },
        { src: "/images/cems/special_shelter/1.png", alt: "CEMS Shelter & Analyzer House" },
      ],
    },
    {
      id: "gas-analyzers",
      num: "(02)",
      title: "In-situ and extractive gas analysis for hazardous processes.",
      desc: "In-situ and extractive photometric, laser, and paramagnetic gas analyzers for hazardous refinery process monitoring and emissions control.",
      bgColor: "#a11d1d",
      label: "Gas analyzer branch",
      sublabel: "In-situ · Extractive · Hazardous area",
      btnText: "See gas analyzers",
      btnHref: "/products/analyzers/gas-analyzers/",
      dockTip: "Gas Analyzers",
      dockIcon: "gas",
      thumbs: [
        { src: "/images/gas_analyzers/gm32/1.jpg", alt: "SICK GM32 In-Situ Gas Analyzer" },
        { src: "/images/gas_analyzers/gm35/1.png", alt: "SICK GM35 Cross-Duct Gas Analyzer" },
        { src: "/gas_analyzer.png", alt: "Process Gas Analyzer Installation" },
      ],
    },
    {
      id: "dust-analyzers",
      num: "(03)",
      title: "Continuous particulate and opacity monitoring for industrial stacks.",
      desc: "Optical transmission and scattered light particulate monitors for stacks, cement kilns, and baghouse leak detection across industrial facilities.",
      bgColor: "#c24f17",
      label: "Dust analyzer branch",
      sublabel: "Particulate · Opacity · Baghouse leak",
      btnText: "See dust analyzers",
      btnHref: "/products/analyzers/dust-analyzers/",
      dockTip: "Dust Analyzers",
      dockIcon: "dust",
      thumbs: [
        { src: "/images/dust_analyzers/dusthunder_t100/1.png", alt: "SICK DUSTHUNTER T100 Particulate Monitor" },
        { src: "/images/dust_analyzers/dusthunder_t200/1.png", alt: "SICK DUSTHUNTER T200 Transmittance Analyzer" },
        { src: "/dust_analyzer.png", alt: "Dust Analyzer Stack Installation" },
      ],
    },
  ],
  closing: {
    title: (
      <>
        Not sure which analyzer<br />
        <span>fits your application?</span>
      </>
    ),
    subtitle:
      "Our applications engineers review your sample conditions, measurement range and site requirements to configure the right analyzer system.",
    primaryCtaText: "Request Technical Datasheet",
    primaryCtaHref: "/contacts/",
    secondaryCtaText: "Talk to an Engineer",
    secondaryCtaHref: "/contacts/",
    statCards: DEFAULT_CLOSING_STAT_CARDS,
  },
};
