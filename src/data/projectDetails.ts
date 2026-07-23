export interface ProjectDetail {
  title: string;
  tagline: string;
  overview: string;
  motivationTitle: string;
  motivation: string;
  highlights: string[];
  location: string;
  client: string;
  status: string;
  statusType: "completed" | "ongoing";
  systemSize: string;
  stakeholders: string;
  scope: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "dewa-hq": {
    title: "New DEWA HQ (Al Shera Building)",
    tagline:
      "World’s largest Net-Zero Building – comprehensive BIPV integration across roof, façade and podiums",
    overview:
      "A landmark grid-connected architectural solar installation featuring solar roof, façade, podiums, and ground-mounted hybrid system (PVT). The project includes 7 robotic cleaning systems to maximize productivity and energy yield in desert conditions. Recognized as one of the world’s largest Net-Zero buildings, this project integrates solar as a core architectural and structural element rather than an add-on system.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To create one of the world’s largest Net-Zero buildings by transforming the entire building envelope into a high-performance energy generator — delivering both architectural excellence and strong financial returns.",
    highlights: [
      "World’s largest Net-Zero Building ambition",
      "Full BIPV integration across roof, façade and podium levels",
      "Hybrid PVT (Photovoltaic-Thermal) system for dual energy generation",
      "7 robotic cleaning systems for optimized performance",
      "Complete lifecycle support including 3-year O&M",
      "High ROI generated directly from the building envelope",
    ],
    location: "Jaddaf, Dubai, UAE",
    client: "Dubai Electricity & Water Authority (DEWA)",
    status: "Under Construction – Completion 2026",
    statusType: "ongoing",
    systemSize: "4,983 – 5,100 kWp BIPV",
    stakeholders: "DEWA, UNEC",
    scope:
      "Architectural, Structural & Electrical Design, Engineering, Procurement, Installation, Authority Approvals, Generation Studies, Net-Zero Sustainability Ratings, and 3 Years O&M",
  },
  "masdar-mc2": {
    title: "Masdar MC2",
    tagline:
      "Net-Zero building within Masdar City with full design-to-installation delivery",
    overview:
      "A significant Net-Zero building project inside Masdar City. Empereal is delivering end-to-end services from concept design through installation and certification support, ensuring the solar system contributes meaningfully to the building’s net-zero energy performance targets while maintaining architectural integrity.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To achieve true Net-Zero performance for a landmark Masdar City building through carefully engineered, cost-effective renewable energy that reinforces Masdar’s global leadership in sustainability.",
    highlights: [
      "Full design-to-installation scope under one partner",
      "Net-Zero building certification support",
      "Cost-effective renewable energy generation",
      "Seamless integration with Masdar City’s sustainability ecosystem",
    ],
    location: "Masdar City, Abu Dhabi, UAE",
    client: "Masdar",
    status: "Scheduled Completion: October 2025",
    statusType: "ongoing",
    systemSize: "1,610 kWp",
    stakeholders: "Masdar",
    scope:
      "Architectural, Structural & Electrical Design, Engineering, Procurement, Installation, Authority Approvals, Generation Studies and Net-Zero Sustainability Ratings",
  },
  "masdar-10mw": {
    title: "Masdar 10 MW PV Plant – Rehabilitation",
    tagline:
      "Rehabilitation and performance upgrade of a pioneering 10 MW solar asset",
    overview:
      "Empereal is undertaking the full rehabilitation and refurbishment of the pioneering Masdar 10 MW solar PV plant. The project focuses on upgrading performance, improving reliability, and extending the operational life of one of the region’s early large-scale solar installations while bringing it in line with modern net-zero and sustainability standards.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To extend the life and significantly improve the performance of a pioneering solar asset, proving that intelligent rehabilitation can deliver high-value renewable energy with lower embodied carbon than new construction.",
    highlights: [
      "Rehabilitation of a landmark 10 MW solar asset",
      "Performance optimization and technology upgrades",
      "Extension of plant operational life",
      "Alignment with current Net-Zero frameworks",
    ],
    location: "Masdar, Abu Dhabi, UAE",
    client: "Masdar",
    status: "Ongoing – Target October 2025",
    statusType: "ongoing",
    systemSize: "10 MWp Solar PV Plant",
    stakeholders: "Masdar",
    scope:
      "Complete Rehabilitation & Refurbishment of the existing Masdar 10 MW PV plant",
  },
  "dewa-portrait": {
    title: "DEWA Solar Portrait",
    tagline:
      "World’s first solar portrait – art, architecture and renewable energy combined",
    overview:
      "A unique and highly symbolic installation: the world’s first solar portrait, created as a sustainability message celebrating His Highness Sheikh Mohammed bin Rashid Al Maktoum’s vision. Located at the entrance to the Sheikh Mohammed Solar Park, the portrait itself generates clean electricity while serving as an iconic public art and awareness piece.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To create the world’s first solar portrait — a powerful public statement that turns clean energy into art and celebrates His Highness Sheikh Mohammed’s vision for a sustainable Dubai.",
    highlights: [
      "World’s first solar portrait",
      "Celebrates HH Sheikh Mohammed’s sustainability vision",
      "Located at the entrance of Sheikh Mohammed Solar Park",
      "Combines art, architecture and renewable energy generation",
      "Powerful public communication of DEWA’s clean energy leadership",
    ],
    location: "Al Qudra, Dubai (Entrance to Sheikh Mohammed Solar Park)",
    client: "Dubai Electricity & Water Authority (DEWA)",
    status: "Completed – July 2024",
    statusType: "completed",
    systemSize: "2.4 kWp",
    stakeholders: "DEWA",
    scope:
      "Design, engineering and installation of the world’s first solar portrait",
  },
  "mercedes-binghatti": {
    title: "Mercedes-Benz Binghatti Tower",
    tagline:
      "Iconic BIPV façade powering communal spaces and enabling carbon-free EV travel",
    overview:
      "Mercedes-Benz Places features an innovative Building-Integrated Photovoltaic façade. The iconic tower is clad in custom-designed solar modules that harvest energy to power communal spaces. The system is uniquely engineered to provide up to 20,000 km of carbon-free electric vehicle travel annually for residents — creating a tangible link between the building’s energy production and sustainable mobility.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To integrate solar energy so seamlessly into the tower’s iconic façade that it powers communal spaces and enables residents to drive up to 20,000 km of carbon-free EV travel every year.",
    highlights: [
      "Custom-designed solar façade modules",
      "650.92 kWp capacity fully integrated into the building envelope",
      "Powers the tower’s communal spaces",
      "Enables up to 20,000 km of carbon-free EV travel per year",
      "Cutting-edge solar glass and architectural integration",
      "Strong alignment between Mercedes-Benz sustainability values and building performance",
    ],
    location: "Nad Al Sheba District, Dubai, UAE",
    client: "Mercedes-Benz / Binghatti Developers",
    status: "Ongoing Project",
    statusType: "ongoing",
    systemSize: "650.92 kWp BIPV Façade",
    stakeholders:
      "Binghatti Developers, Mercedes-Benz, Silverstone Architects",
    scope:
      "Design of custom façade elements using cutting-edge solar technologies and architectural glass; full BIPV integration",
  },
  "jeddah-oceanarium": {
    title: "Jeddah Oceanarium",
    tagline:
      "Architectural BIPV for a landmark cultural and tourism destination",
    overview:
      "A prestigious waterfront project featuring carefully designed Building-Integrated Photovoltaics that complement the architectural vision of SOM. The 132 kWp BIPV system contributes clean energy while maintaining the high aesthetic standards expected of a landmark cultural and tourism destination in Jeddah.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To deliver a high-performance BIPV solution that respects the architectural vision of SOM while contributing meaningful clean energy to a major cultural and tourism landmark in Jeddah.",
    highlights: [
      "132 kWp BIPV integration",
      "Collaboration with world-renowned SOM Architects",
      "Seamless architectural integration for a high-profile destination",
      "Supports sustainability goals of the Jeddah waterfront development",
    ],
    location: "Jeddah, Kingdom of Saudi Arabia",
    client: "JCDC",
    status: "Ongoing Project",
    statusType: "ongoing",
    systemSize: "132 kWp BIPV",
    stakeholders: "JCDC, SOM Architects",
    scope: "Building-Integrated Photovoltaic system design and integration",
  },
  "zamani-islands": {
    title: "Zamani Islands – Net-Zero Resort",
    tagline:
      "World’s largest net-zero resort – fully renewable, zero-waste hospitality destination",
    overview:
      "Positioned to become the world’s largest net-zero resort, Zamani Islands will operate entirely on renewable energy. The project combines innovative Building-Integrated Photovoltaics, energy-efficient Net Zero architecture, and agri-photovoltaic systems that generate clean energy while supporting sustainable food production. A comprehensive zero-waste strategy ensures organic waste is composted and materials are upcycled.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To build the world’s largest net-zero resort — proving that luxury hospitality can operate entirely on renewable energy, support local food production through agri-photovoltaics, and achieve a true zero-waste model.",
    highlights: [
      "World’s largest net-zero resort ambition",
      "24 MWp of BIPV capacity across the island resort",
      "Agri-photovoltaic systems combining energy with food production",
      "Full renewable energy operation – no fossil fuel reliance",
      "Zero-waste strategy (composting + material upcycling)",
      "Holistic Net Zero architecture and energy management",
    ],
    location:
      "South Malé Atoll, Maldives (8 islands, 5 km lagoon, 21 nm from Velana Airport)",
    client: "Atoll Estates",
    status: "Scheduled Completion: December 2026",
    statusType: "ongoing",
    systemSize: "24,000 kWp BIPV",
    stakeholders: "Atoll Estates, Killa Design Architects",
    scope:
      "Comprehensive renewable energy systems including BIPV, agri-photovoltaics and advanced energy management",
  },
  "acwa-power-hq": {
    title: "ACWA Power Headquarters",
    tagline: "Net-Zero headquarters for a leading regional energy company",
    overview:
      "A flagship Net-Zero headquarters building for ACWA Power in Riyadh. The 1,200 kWp BIPV system is designed to deliver significant onsite renewable generation while supporting the architectural vision of Omrania. The project showcases innovative sustainability solutions at the headquarters of one of the region’s leading energy companies.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To design a Net-Zero headquarters that embodies ACWA Power’s own energy transition values — combining architectural excellence with substantial onsite renewable generation.",
    highlights: [
      "1,200 kWp BIPV capacity",
      "Net-Zero Building target",
      "Cost-effective renewable energy generation",
      "Innovative sustainability integrated into corporate headquarters",
      "Collaboration with Omrania Architects",
    ],
    location: "Riyadh, Kingdom of Saudi Arabia",
    client: "ACWA Power",
    status: "Year of Completion: 2026",
    statusType: "ongoing",
    systemSize: "1,200 kWp BIPV",
    stakeholders: "Omrania Architects",
    scope: "Building-Integrated Photovoltaic system for a Net-Zero Building",
  },
  "dewa-solar-tree": {
    title: "DEWA Solar Tree",
    tagline:
      "Dual-axis tracking solar structure that redefines architectural solar design",
    overview:
      "One of the most remarkable elements of the New DEWA HQ project is the Solar Tree. Featuring a unique dual-axis tracking system and sophisticated engineering, it demonstrates that solar is not limited to rooftops and building façades. Solar can also be integrated into standalone architectural structures, engineered to complement aesthetics while generating clean energy by continuously following the sun.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To demonstrate that solar can transcend rooftops and façades — becoming a standalone architectural landmark that continuously tracks the sun while elevating the design language of the New DEWA Headquarters.",
    highlights: [
      "Unique dual-axis tracking system",
      "Standalone architectural solar structure",
      "Demonstrates solar beyond roofs and façades",
      "Continuous sun-tracking for maximized energy yield",
      "Blends innovation, engineering and architecture",
      "Iconic feature of the New DEWA Headquarters",
    ],
    location: "Jaddaf, Dubai – New DEWA Headquarters",
    client: "Dubai Electricity & Water Authority (DEWA)",
    status: "Part of New DEWA HQ – Completion 2026",
    statusType: "ongoing",
    systemSize: "Standalone dual-axis tracking solar structure",
    stakeholders: "DEWA",
    scope:
      "Complex engineering design and implementation of dual-axis tracking Solar Tree",
  },
  "green-hydrogen-dewa": {
    title: "DEWA Green Hydrogen Project",
    tagline: "2.5 MW alkaline electrolyzer – from electrons to molecules",
    overview:
      "A turnkey green hydrogen project at DEWA’s R&D Center. The system is a fully containerized solution comprising the electrolyzer, gas treatment, purification, compression and associated utilities. This project places Empereal at the forefront of the transition from electrons to molecules, supporting the UAE’s and DEWA’s hydrogen economy ambitions.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To advance the UAE’s hydrogen economy by delivering a fully containerized 2.5 MW alkaline electrolyzer system that converts renewable electricity into clean hydrogen at DEWA’s R&D Center.",
    highlights: [
      "2.5 MW Alkaline Electrolyzer capacity",
      "500 Nm³/h hydrogen production rate",
      "Fully containerized turnkey system",
      "Includes gas treatment, purification and compression",
      "Located at DEWA R&D Center – high strategic visibility",
      "Supports UAE national hydrogen strategy",
    ],
    location: "DEWA R&D Center, Al Qudra, Dubai, UAE",
    client: "Dubai Electricity & Water Authority (DEWA) PJSC",
    status: "Ongoing Project",
    statusType: "ongoing",
    systemSize: "2.5 MW Alkaline Electrolyzer (500 Nm³/h H₂)",
    stakeholders: "DEWA",
    scope:
      "Design, Supply, Installation and Commissioning of 2.5 MW Alkaline Electrolyzer Turnkey Project for hydrogen generation",
  },
  "park-hyatt-maldives": {
    title: "Park Hyatt Maldives Hadahaa",
    tagline:
      "Solar + BESS solution reducing diesel reliance for a luxury island resort",
    overview:
      "A high-end luxury resort project focused on achieving Net-Zero performance and significantly reducing reliance on diesel generators. Empereal is delivering a comprehensive solution that includes solar generation, battery energy storage (BESS) integration, and advanced energy management — critical for an island location where fuel logistics are challenging and costly.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To dramatically reduce diesel generator dependence for a luxury island resort by combining high-performance solar with battery storage and intelligent energy management — delivering both sustainability and operational cost savings.",
    highlights: [
      "850 kWp solar capacity",
      "Battery Energy Storage System (BESS) integration",
      "Advanced Energy Management System",
      "Substantial reduction of diesel generator use",
      "Full Net-Zero sustainability ratings support",
      "Ideal demonstration of solar + storage for island resorts",
    ],
    location: "Hadahaa, Maldives",
    client: "Park Hyatt",
    status: "Ongoing Project",
    statusType: "ongoing",
    systemSize: "850 kWp Solar PV + BESS Integration",
    stakeholders: "Park Hyatt",
    scope:
      "Structural & Electrical Design, Engineering, Procurement, Installation, BESS Integration, Energy Management System, Authority Approvals, Generation Studies and Net-Zero Sustainability Ratings",
  },
  "uae-pavilion-expo": {
    title: "UAE Pavilion – Expo 2020 Dubai",
    tagline:
      "LEED Platinum pavilion with seamlessly integrated BIPV façade by Santiago Calatrava",
    overview:
      "The UAE Pavilion, designed by renowned architect Santiago Calatrava, is a landmark LEED Platinum-certified building. Empereal contributed a 98 kWp BIPV system seamlessly integrated into its iconic façade. The solar solution enhanced energy efficiency while reinforcing the pavilion’s status as a globally recognized symbol of innovation and sustainable architecture.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To integrate a high-performance BIPV façade into Santiago Calatrava’s iconic design, helping the UAE Pavilion achieve LEED Platinum certification while showcasing the country’s commitment to sustainable architecture on a global stage.",
    highlights: [
      "98 kWp BIPV seamlessly integrated into the iconic façade",
      "LEED Platinum-certified building",
      "Designed by Santiago Calatrava",
      "Supported the pavilion’s high sustainability objectives",
      "Globally recognized symbol of innovation and sustainable architecture",
    ],
    location: "Expo 2020, Dubai, UAE",
    client: "Dubai Expo 2020",
    status: "Completed",
    statusType: "completed",
    systemSize: "98 kWp BIPV",
    stakeholders: "Santiago Calatrava (Architect)",
    scope:
      "Delivery of renewable energy solutions supporting the pavilion’s sustainability objectives",
  },
  "french-pavilion-expo": {
    title: "France Pavilion – Expo 2020 Dubai",
    tagline:
      "Solar art meets architecture – Monet’s Water Lilies recreated in custom solar modules",
    overview:
      "The French Pavilion at Expo 2020 Dubai incorporated solar PV on its roof and south façade to create an aesthetically pleasing green building. A standout feature was the Solar Art installation recreating Claude Monet’s “Water Lilies and Clouds” using custom-designed solar modules. The system was grid-connected under DEWA SHAMS and later demonstrated circular economy principles by being relocated and reused in Toulouse, France.",
    motivationTitle: "Motivation for Solar",
    motivation:
      "To create a living work of solar art — recreating Monet’s Water Lilies in custom modules — while generating 60–80% of the pavilion’s energy needs and later demonstrating circular economy principles through relocation and reuse.",
    highlights: [
      "224 kWp BIPV on roof and south façade",
      "Generated 60–80% of the pavilion’s energy requirements",
      "Iconic Solar Art – Monet’s Water Lilies in solar modules",
      "Grid-connected under DEWA SHAMS / DRRG regulations",
      "Reduced carbon footprint and operational energy consumption",
      "Post-Expo relocation and reuse in Toulouse – circular economy in action",
    ],
    location: "Expo 2020 Dubai, Dubai, UAE",
    client: "France Pavilion – Expo 2020 (BeSix Contracting)",
    status: "Completed (system later relocated to Toulouse, France)",
    statusType: "completed",
    systemSize: "224 kWp BIPV (Roof + South Façade)",
    stakeholders: "Atelier Du Prado (Architects), BeSix Contracting",
    scope:
      "Design, supply and integration of BIPV system into the pavilion’s roof and façade",
  },
};
