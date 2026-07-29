export type IndustryFaqItem = { q: string; a: string };

export const industryFaqData: Record<string, IndustryFaqItem[]> = {
  "oil-gas": [
    {
      q: "What flow metering solutions do you provide for upstream oil & gas operations?",
      a: "We supply ultrasonic, helical turbine, and clamp-on flow meters from OEM brands like FH Sonic, Heliflu, and Ultraflux for upstream production measurement — including wellhead allocation, test separators, and inter-field transfer metering across Kuwait and the GCC.",
    },
    {
      q: "Can you supply custody transfer gas flow meters for pipeline metering stations?",
      a: "Yes. We supply SICK ultrasonic custody transfer gas flow meters and OMNI flow computers for fiscal-grade measurement at pipeline metering stations. These systems deliver the billing accuracy required at ownership transfer points in Kuwait's oil & gas infrastructure.",
    },
    {
      q: "Do you offer CEMS for oil & gas production facilities?",
      a: "We supply and commission SICK CEMS solutions for continuous emissions monitoring at oil & gas production facilities — covering flare gas measurement, stack emission monitoring, and compliance reporting to Kuwait Environmental Public Authority regulations.",
    },
    {
      q: "Which gas analyzers are suitable for natural gas processing?",
      a: "We supply SICK in-situ and extractive gas analyzers for natural gas processing — measuring H₂S, CO₂, moisture, and heating value to support gas quality specification, pipeline compliance, and process optimization in Kuwait's gas processing plants.",
    },
    {
      q: "Do you serve midstream pipeline and terminal operators in Kuwait?",
      a: "Yes. We provide flow metering skids, flow computers, gas analyzers, and CEMS for midstream pipeline metering, tank farm measurement, and terminal operations — backed by 18+ years of experience supporting Kuwait's oil & gas infrastructure.",
    },
  ],

  "refinery": [
    {
      q: "What flow measurement solutions do you offer for refinery custody transfer?",
      a: "We supply SICK ultrasonic flow meters, Heliflu helical turbine meters, and OMNI flow computers for fiscal-grade custody transfer at refinery battery limits — handling crude oil, refined products, and intermediate streams with API and ISO-compliant measurement.",
    },
    {
      q: "Can you provide CEMS for refinery stack emissions monitoring?",
      a: "Yes. We supply and commission SICK CEMS solutions for refinery stack emissions — continuously measuring NOₓ, SO₂, CO, O₂, and particulates at fired heaters, boilers, FCC units, and sulphur recovery plants to meet Kuwait EPA and international permit requirements.",
    },
    {
      q: "Do you offer flare gas measurement systems for refineries?",
      a: "We supply SICK ultrasonic flare meters for refinery flare headers and individual unit flares — measuring gas flow from near-zero to over 120 m/s to support flare gas minimisation, environmental reporting, and compliance with Kuwait's flaring reduction regulations.",
    },
    {
      q: "What gas analyzers are used for refinery process control?",
      a: "We supply SICK in-situ and extractive gas analyzers for refinery process streams — monitoring H₂S, CO, SO₂, NOₓ, O₂, and combustibles in FCC regenerators, sulphur recovery units, and hydrogen plants to optimise yields and ensure regulatory compliance.",
    },
    {
      q: "Can you support refinery flow meter calibration and verification?",
      a: "Yes. We provide portable clamp-on ultrasonic meters from Ultraflux for non-intrusive verification of installed refinery flow meters, as well as master meter solutions from Faure Herman for compact, efficient prover-alternative calibration at refinery product measurement points.",
    },
  ],

  "petrochemicals": [
    {
      q: "What flow metering systems do you supply for petrochemical feedstock measurement?",
      a: "We supply FLOWSKID turnkey gas metering skids, ultrasonic flow meters, and flow computers for petrochemical feedstock measurement — delivering fiscal-grade accuracy at plant battery limits where ethylene, propylene, and other monomer streams change ownership.",
    },
    {
      q: "Can you provide CEMS for petrochemical plant environmental compliance?",
      a: "Yes. We supply SICK CEMS for continuous emissions monitoring at petrochemical plants — measuring NOₓ, SO₂, CO, VOCs, and particulates at process vents, flare stacks, and thermal oxidiser exhausts to maintain environmental permit compliance across the GCC.",
    },
    {
      q: "Which flow meters handle corrosive petrochemical process fluids?",
      a: "We supply clamp-on ultrasonic meters from Ultraflux and multi-path transit-time meters from FH Sonic that measure corrosive and hazardous petrochemical fluids without wetted parts — eliminating direct contact between the meter and the process medium.",
    },
    {
      q: "Do you offer flow computers for petrochemical custody and allocation metering?",
      a: "Yes. We supply OMNI 4000/7000 series flow computers supporting multi-stream petrochemical custody and allocation metering with built-in AGA, API, GPA, and ISO calculation standards — handling aromatics, olefins, and all common petrochemical product types.",
    },
    {
      q: "Can you support petrochemical plant process gas analysis?",
      a: "We supply SICK in-situ and extractive gas analyzers for petrochemical process gas streams — monitoring product quality, catalyst performance, and combustion parameters in crackers, reformers, and polymerisation units to optimise yield and ensure regulatory compliance.",
    },
  ],

  "power-plant": [
    {
      q: "What CEMS solutions do you offer for power generation facilities?",
      a: "We supply and commission SICK CEMS for continuous stack emissions monitoring at power plants — measuring NOₓ, SO₂, CO, CO₂, and particulates at gas turbines, boilers, and heat recovery steam generators to demonstrate regulatory compliance and optimise combustion efficiency.",
    },
    {
      q: "Do you provide flow metering for power plant fuel gas supply?",
      a: "Yes. We supply FLOWSKID turnkey gas metering skids, ultrasonic custody transfer flow meters, and OMNI flow computers for fiscal measurement of natural gas at power plant battery limits — supporting heat rate analysis and fuel cost accounting across Kuwait's power generation fleet.",
    },
    {
      q: "What flow measurement solutions suit power plant cooling water systems?",
      a: "We supply FH Sonic multi-path ultrasonic liquid flow meters and Ultraflux portable clamp-on meters for power plant cooling water, condensate, and liquid fuel measurement — handling high-temperature, high-flow conditions across open-cycle, combined-cycle, and district cooling systems.",
    },
    {
      q: "Can you provide gas analyzers for power plant combustion optimisation?",
      a: "Yes. We supply SICK in-situ and extractive gas analyzers for power plant combustion control — monitoring O₂, CO, NOₓ, and SO₂ in flue gas to maximise boiler and turbine efficiency while minimising environmental impact and fuel consumption.",
    },
    {
      q: "Do you serve both gas-fired and steam power plants in Kuwait?",
      a: "Yes. We support Kuwait's power generation infrastructure with CEMS, flow metering, gas analyzers, and automation solutions for gas-fired turbines, steam boilers, combined-cycle plants, and distributed generation facilities — backed by 18+ years of regional expertise.",
    },
  ],

  "lng": [
    {
      q: "What flow metering solutions do you offer for LNG custody transfer?",
      a: "We supply SICK ultrasonic flow meters engineered for cryogenic LNG service at temperatures as low as -162 °C, FLOWSKID turnkey gas metering skids, and OMNI flow computers with ISO 6976 calorific value calculations — delivering the precision required at LNG ship loading and unloading terminals.",
    },
    {
      q: "Can you provide CEMS for LNG plant emissions monitoring?",
      a: "Yes. We supply SICK CEMS for continuous emissions monitoring at LNG plants — measuring combustion gases, BOG (boil-off gas) venting, and process emissions at liquefaction trains, storage tanks, and regasification units to meet stringent environmental regulations in Kuwait and the GCC.",
    },
    {
      q: "Do you offer flare gas measurement for LNG facilities?",
      a: "We supply SICK ultrasonic flare meters for LNG plant flare headers — handling the highly variable flow rates and gas compositions unique to LNG operations from near-zero to over 120 m/s, supporting safety management and environmental reporting at LNG terminals.",
    },
    {
      q: "What gas analyzers are suitable for LNG process streams?",
      a: "We supply SICK in-situ and extractive gas analyzers for LNG plant process control — monitoring natural gas composition, BOG quality, and combustion efficiency across liquefaction, storage, and regasification processes to optimise energy recovery and product quality.",
    },
    {
      q: "Do you support BOG measurement at LNG storage tanks?",
      a: "Yes. We supply non-custody transfer gas flow meters and gas analyzers for boil-off gas measurement at LNG storage tanks — supporting energy balance calculations, tank pressure management, and BOG compressor optimisation at LNG receiving and send-out terminals.",
    },
  ],

  "water-treatment": [
    {
      q: "What flow metering solutions do you offer for water treatment plants?",
      a: "We supply FH Sonic multi-path ultrasonic liquid flow meters, Ultraflux portable clamp-on meters, and FLOWSKID gas metering skids for water treatment plant measurement — covering raw water intake, treated water distribution, effluent discharge, and biogas flows.",
    },
    {
      q: "Can you provide CEMS for wastewater treatment facility emissions?",
      a: "Yes. We supply SICK CEMS for continuous emissions monitoring at water treatment facilities — measuring pollutants and reference quantities from incineration, biogas combustion, and process vents to maintain compliance with Kuwait environmental regulations.",
    },
    {
      q: "What dust monitoring solutions do you offer for water treatment?",
      a: "We supply SICK dust analyzers for detecting and monitoring dust concentrations at water treatment facilities — providing rugged, low-maintenance measurement at sludge handling, drying, and incineration processes to support air quality compliance.",
    },
    {
      q: "Do you offer gas analyzers for biogas at wastewater treatment plants?",
      a: "Yes. We supply gas analyzers for biogas quality monitoring at wastewater treatment plants — measuring CH₄, CO₂, and H₂S concentrations to optimise biogas utilisation in combined heat and power systems and ensure gas quality for digestion process control.",
    },
    {
      q: "Can you provide flow computers for water treatment plant energy accounting?",
      a: "Yes. We supply OMNI flow computers for water treatment plant gas and liquid metering stations — reducing measurement uncertainty and supporting energy accounting for biogas, aeration air, and fuel gas across municipal and industrial water treatment facilities in Kuwait.",
    },
  ],

  "cement": [
    {
      q: "What CEMS solutions do you offer for cement manufacturing?",
      a: "We supply and commission SICK CEMS for continuous emissions monitoring at cement kiln and clinker cooler stacks — measuring NOₓ, SO₂, CO, HCl, HF, NH₃, dust, and O₂ to ensure compliance with environmental permit limits and BAT requirements across the GCC.",
    },
    {
      q: "Can you provide gas analyzers for cement kiln process control?",
      a: "Yes. We supply SICK in-situ and extractive gas analyzers for cement kiln atmosphere, combustion gases, and preheater exit conditions — monitoring O₂, CO, and NOₓ to maximise fuel efficiency, clinker quality, and production throughput.",
    },
    {
      q: "What extractive gas analyzers are suitable for cement plant stacks?",
      a: "We supply SICK extractive gas analyzers designed for cement kiln stacks and raw mill exhausts — conditioning the dust-laden, high-temperature sample for precise, repeatable pollutant measurement independent of process upsets or ambient conditions.",
    },
    {
      q: "Do you serve cement plants in Kuwait and the GCC?",
      a: "Yes. We support cement manufacturers across Kuwait and the GCC with CEMS, gas analyzers, and extractive analysis solutions — backed by 18+ years of experience in industrial emissions monitoring and process optimisation for heavy industry.",
    },
  ],

  "metal-steel": [
    {
      q: "What CEMS solutions do you offer for metal and steel plants?",
      a: "We supply and commission SICK CEMS for continuous emissions monitoring at blast furnaces, electric arc furnaces, and sinter plants — measuring CO, NOₓ, SO₂, HCl, dust, and O₂ to meet IED permit conditions and environmental regulations across the GCC.",
    },
    {
      q: "Can you provide dust analyzers for steel mill exhaust systems?",
      a: "Yes. We supply SICK dust analyzers for metal and steel facilities — detecting and monitoring dust concentrations at furnace exhausts, dedusting systems, and material handling points with rugged, low-maintenance devices designed for harsh steel mill environments.",
    },
    {
      q: "What gas analyzers are used for blast furnace process control?",
      a: "We supply SICK in-situ and extractive gas analyzers for blast furnace top gas, coke oven gas, and converter off-gas — monitoring gas composition to optimise combustion, energy recovery, and product quality in metal and steel production processes.",
    },
    {
      q: "Do you support emissions monitoring for electric arc furnaces?",
      a: "Yes. We supply SICK CEMS and gas analyzers specifically configured for electric arc furnace emissions — continuously measuring particulates, CO, NOₓ, and SO₂ from melt shop and secondary flue dust collection systems to maintain regulatory compliance.",
    },
    {
      q: "Can you provide gas analysis for sinter plant operations?",
      a: "Yes. We supply extractive gas analyzers for sinter plant stacks — reliably measuring pollutants under extreme dust, temperature, and corrosion conditions to support environmental reporting and process optimisation in metal and steel manufacturing facilities.",
    },
  ],
};
