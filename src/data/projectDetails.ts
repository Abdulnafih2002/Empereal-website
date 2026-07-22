export interface ProjectDetail {
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "dewa-hq": {
    overview:
      "Al Shera brings rooftop, façade, podium, and ground-mounted photovoltaics together as one coordinated 5,012 kWp generation asset. The project demonstrates how renewable energy can become part of a landmark building’s architecture while remaining practical to operate and maintain.",
    challenge:
      "Multiple solar typologies had to work across different architectural, structural, and electrical conditions. Every interface also needed to align with authority approvals, generation studies, and the building’s net-zero sustainability objectives.",
    solution:
      "Empereal provided integrated architectural, structural, and electrical engineering through procurement, installation, approvals, and long-term O&M. Seven robotic cleaning systems were incorporated to support consistent upkeep across the extensive solar surfaces.",
    highlights: [
      "5,012 kWp grid-connected architectural solar installation",
      "Roof, façade, podium, and ground-mounted PV integrated as one system",
      "Seven robotic cleaning systems supporting long-term operation",
      "Three years of operations and maintenance coverage",
    ],
  },
  "masdar-mc2": {
    overview:
      "Masdar MC2 is a 1,610 kWp solar installation developed within Masdar City’s high-performance built environment. The system combines architectural and electrical integration to support the building’s net-zero energy ambitions and reduce long-term grid dependence.",
    challenge:
      "The solar system needed to complement the development’s architecture while meeting structural, electrical, authority, and generation-performance requirements within a tightly coordinated net-zero framework.",
    solution:
      "Empereal aligned architectural, structural, and electrical design with procurement, installation, authority approvals, generation studies, and sustainability-rating requirements to create a coherent building-scale energy system.",
    highlights: [
      "1,610 kWp building-integrated solar capacity",
      "Designed to support net-zero building performance",
      "Architectural, structural, and electrical disciplines coordinated together",
      "Authority approvals and generation studies included in the delivery scope",
    ],
  },
  "masdar-10mw": {
    overview:
      "This project focuses on restoring the performance and useful life of Masdar City’s existing 10 MWp photovoltaic plant. Rehabilitation offers a resource-efficient route to renewed generation by improving an established asset instead of replacing it wholesale.",
    challenge:
      "An existing utility-scale plant requires a different engineering approach from a new-build project: current conditions, legacy interfaces, maintainability, and performance priorities must be understood before refurbishment work is defined.",
    solution:
      "Empereal’s role centers on rehabilitation and refurbishment of the PV plant, with interventions directed toward restoring dependable generation efficiency and improving long-term asset performance.",
    highlights: [
      "10 MWp existing solar PV asset",
      "Rehabilitation-led approach to lifecycle extension",
      "Performance restoration prioritized over full replacement",
      "Ongoing delivery within Masdar City",
    ],
  },
  "dewa-portrait": {
    overview:
      "Located at the entrance to the Mohammed bin Rashid Al Maktoum Solar Park, this installation turns photovoltaic technology into a public artwork. The 2.4 kWp composition celebrates a national sustainability vision while remaining a functioning solar asset.",
    challenge:
      "The design had to communicate a recognizable portrait and a clear civic message while respecting the technical geometry, orientation, support, and electrical requirements of photovoltaic modules.",
    solution:
      "Empereal developed and executed a bespoke solar composition in which visual form and energy generation were considered together, creating a distinctive installation appropriate for a high-profile public setting.",
    highlights: [
      "Recognized as the world’s first solar portrait installation",
      "2.4 kWp artistic photovoltaic system",
      "Purpose-designed for the entrance to a major solar park",
      "Combines public art, engineering, and sustainability communication",
    ],
  },
  "mercedes-binghatti": {
    overview:
      "The Mercedes-Benz Binghatti Tower uses a custom 650.92 kWp photovoltaic façade to turn the building envelope into a clean-energy asset. Solar generation is designed into the architectural identity rather than added as a conventional rooftop layer.",
    challenge:
      "A premium high-rise façade demands close control of appearance, module customization, structural interfaces, electrical coordination, and energy performance. The solar elements must read as part of the architecture at every scale.",
    solution:
      "Empereal is engineering and integrating custom BIPV modules and solar glass, coordinating façade design with performance optimization so the system can support communal loads and the development’s electric-mobility goals.",
    highlights: [
      "650.92 kWp custom BIPV façade",
      "Solar glass and module design integrated with the tower architecture",
      "Clean energy allocated to communal spaces",
      "Designed to support up to 20,000 km of carbon-free EV travel annually",
    ],
  },
  "jeddah-oceanarium": {
    overview:
      "Jeddah Oceanarium incorporates a 132 kWp BIPV system into a landmark marine destination designed by SOM Architects for JCDC. The renewable-energy layer is conceived as part of the building expression and the wider visitor experience.",
    challenge:
      "The project required photovoltaic components to integrate cleanly with a distinctive architectural concept while maintaining the technical coordination expected for a major public attraction.",
    solution:
      "Empereal is providing BIPV engineering and integration, working across architectural and energy-system interfaces to embed renewable generation into the development without compromising its design intent.",
    highlights: [
      "132 kWp Building-Integrated Photovoltaic system",
      "Integrated into a landmark oceanarium and marine development",
      "Architectural concept by SOM Architects for JCDC",
      "Supports sustainable tourism through visible on-site generation",
    ],
  },
  "zamani-islands": {
    overview:
      "Zamani Islands is planned as a fully renewable-powered, net-zero resort spanning eight islands in the South Malé Atoll. Energy, architecture, food production, and resource use are considered as connected parts of one island-development strategy.",
    challenge:
      "A multi-island resort must coordinate generation across a distributed site while supporting hospitality operations, architectural quality, food production, and a circular zero-waste ambition in a remote environment.",
    solution:
      "Empereal’s scope brings together renewable-energy systems integration and net-zero strategy support, including large-scale BIPV and agri-photovoltaics within the development’s broader circular design approach.",
    highlights: [
      "Net-zero resort development spanning eight islands",
      "Large-scale BIPV integrated with resort architecture",
      "Agri-photovoltaics supporting the wider sustainability strategy",
      "Circular zero-waste principles incorporated into the development vision",
    ],
  },
  "acwa-power-hq": {
    overview:
      "ACWA Power’s new headquarters is designed as a net-zero corporate environment with 1,200 kWp of Building-Integrated Photovoltaics. The project makes solar generation a visible part of the organization’s workplace and architectural identity.",
    challenge:
      "The headquarters required a high-capacity solar solution that could work with Omrania Architects’ design while satisfying the visual, technical, and commercial expectations of a flagship corporate building.",
    solution:
      "Empereal is delivering solar-integration design and execution, coordinating the BIPV system with architectural requirements to provide cost-effective renewable generation and support the headquarters’ net-zero goals.",
    highlights: [
      "1,200 kWp Building-Integrated Photovoltaic capacity",
      "Net-zero corporate headquarters in Riyadh",
      "Architectural coordination with Omrania Architects",
      "Designed for long-term on-site energy generation and cost reduction",
    ],
  },
  "dewa-solar-tree": {
    overview:
      "The DEWA Solar Tree is a sculptural photovoltaic structure that follows the sun using dual-axis tracking. Installed at Al Shera, it combines energy generation, public engagement, and kinetic engineering in a single freestanding feature.",
    challenge:
      "The structure needed to operate as both an architectural landmark and a moving solar system, bringing structural form, tracking mechanics, electrical design, and safe public visibility together.",
    solution:
      "Empereal developed the concept, engineered the tracking structure, and implemented the installation so its photovoltaic surface can respond to solar movement while retaining a clear sculptural character.",
    highlights: [
      "Dual-axis solar tracking for improved sun alignment",
      "Standalone sculptural renewable-energy structure",
      "Concept development, engineering, and implementation by Empereal",
      "Educational landmark combining architecture and clean-energy technology",
    ],
  },
  "green-hydrogen-dewa": {
    overview:
      "This turnkey green-hydrogen project centers on a 2.5 MW alkaline electrolyzer at DEWA’s R&D Center in Al Qudra. The containerized plant brings hydrogen production, treatment, purification, compression, and supporting utilities into one coordinated system.",
    challenge:
      "Hydrogen production depends on precise integration across electrolysis, gas handling, purification, compression, utilities, controls, and commissioning. Each subsystem must function as part of a safe and reliable process chain.",
    solution:
      "Empereal’s turnkey scope covers design, supply, installation, and commissioning of the complete alkaline electrolyzer package and its associated treatment and utility systems.",
    highlights: [
      "2.5 MW alkaline electrolyzer turnkey project",
      "Rated production of 500 Nm³/h of high-purity hydrogen",
      "Containerized gas treatment, purification, and compression systems",
      "Supports the UAE’s emerging clean-fuel ecosystem",
    ],
  },
  "park-hyatt-maldives": {
    overview:
      "Park Hyatt Maldives Hadahaa combines 850 kWp of solar PV with battery storage and intelligent energy management. The integrated system is designed to reduce diesel reliance while maintaining the dependable power quality required by a remote luxury resort.",
    challenge:
      "Island hospitality operations need continuous, stable energy despite variable solar generation and limited grid infrastructure. Generation, storage, controls, backup, and operating demand must therefore be coordinated as one system.",
    solution:
      "Empereal is delivering structural and electrical design, procurement, installation, BESS and energy-management integration, authority approvals, generation studies, and net-zero sustainability-rating support.",
    highlights: [
      "850 kWp solar PV system",
      "Battery Energy Storage System integration",
      "Intelligent energy management for coordinated resort operation",
      "Designed to reduce diesel use, fuel cost, and maintenance demand",
    ],
  },
  "uae-pavilion-expo": {
    overview:
      "The UAE Pavilion at Expo 2020 Dubai integrates a 98 kWp BIPV system into Santiago Calatrava’s falcon-inspired architecture. Renewable generation contributes to a globally recognized building that achieved LEED Platinum certification.",
    challenge:
      "Any energy intervention on an expressive national pavilion had to respect the architectural form, coordinate with a highly specialized envelope, and contribute meaningfully to the project’s demanding sustainability objectives.",
    solution:
      "Empereal supported renewable-energy integration by embedding BIPV into the pavilion’s architectural surfaces, allowing solar generation to participate in the design rather than appear as a separate technical layer.",
    highlights: [
      "98 kWp Building-Integrated Photovoltaic system",
      "Integrated with Santiago Calatrava’s falcon-inspired pavilion",
      "Supports the building’s LEED Platinum sustainability objectives",
      "High-visibility demonstration of architectural clean energy",
    ],
  },
  "french-pavilion-expo": {
    overview:
      "The France Pavilion combined a photovoltaic façade and roof to supply a substantial share of its Expo-period energy needs. Its later relocation to Toulouse extended the project’s value beyond the event and made reuse part of the sustainability story.",
    challenge:
      "The BIPV system needed to integrate with both roof and façade conditions, contribute meaningfully to building demand, and support a pavilion designed for eventual dismantling and relocation.",
    solution:
      "Empereal designed, supplied, and integrated the BIPV system as part of the pavilion envelope, coordinating renewable generation with architectural requirements and the project’s post-Expo reuse strategy.",
    highlights: [
      "BIPV integrated across both façade and roof",
      "Generated approximately 60–80% of the pavilion’s energy needs",
      "Designed for a high-profile Expo 2020 setting",
      "Relocated to Toulouse after the Expo to demonstrate circular reuse",
    ],
  },
};
