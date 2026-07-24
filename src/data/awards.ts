export interface Award {
  id: string;
  year: "2021" | "2022" | "2023" | "2024" | "2025" | "2026";
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  aboutTitle?: string;
  aboutDescription?: string;
  featured?: boolean;
}

export const awards: Award[] = [
  {
    id: "future-energy-ceo-2026",
    year: "2026",
    title: "Best Future Energy CEOs Middle East 2026",
    description: "Presented to Manoj Divakaran, Chief Executive Officer of Empereal Energy and Services, for visionary leadership and dedication to advancing a sustainable energy future.",
    image: "/images/Award Page/award-future-energy-ceo-2026.webp",
    imageWidth: 768,
    imageHeight: 768,
    imageAlt: "Best Future Energy CEOs Middle East 2026 recognition presented to Manoj Divakaran",
  },
  {
    id: "mesia-net-zero-2025",
    year: "2025",
    title: "MESIA Net-Zero Leadership Award 2025",
    description: "Awarded by the Middle East Solar Industry Association for leadership in advancing net-zero energy solutions. (DEWA HQ – Empereal Energy)",
    image: "/images/Award Page/award-mesia-net-zero-2025.webp",
    imageWidth: 869,
    imageHeight: 869,
    imageAlt: "MESIA Net-Zero Leadership Award 2025 presented to Empereal Energy for DEWA headquarters",
    aboutDescription: "Recognized by the Middle East Solar Industry Association for leadership in advancing net-zero energy solutions.",
    featured: true,
  },
  {
    id: "solar-system-integrator-2025",
    year: "2025",
    title: "Top Solar Contractors Awards 2025 – Company of the Year Solar System Integrator (C&I)",
    description: "Recognized for outstanding achievement in commercial and industrial solar system integration.",
    image: "/images/Award Page/award-solar-integrator-2025.webp",
    imageWidth: 900,
    imageHeight: 973,
    imageAlt: "Top Solar Contractors Awards 2025 trophy for Company of the Year in Solar System Integration",
    aboutTitle: "Top Solar Contractors 2025 – Solar System Integrator (C&I)",
    aboutDescription: "Awarded Company of the Year in the Solar System Integrator (C&I) category for outstanding project delivery and technical excellence.",
    featured: true,
  },
  {
    id: "solar-epc-2025",
    year: "2025",
    title: "Top Solar Contractors Awards 2025 – Company of the Year – Solar EPC (Architectural & Iconic Projects)",
    description: "Awarded for excellence in architectural and iconic solar EPC projects.",
    image: "/images/Award Page/award-solar-epc-2025.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "Top Solar Contractors Awards 2025 recognition for architectural and iconic solar EPC projects",
  },
  {
    id: "solaris-design-team-2025",
    year: "2025",
    title: "Solaris Middle East Awards 2025 – Best Design Team of the Year",
    description: "Team Excellence Award for outstanding design performance.",
    image: "/images/Award Page/award-solaris-design-2025.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "Solaris Middle East Awards 2025 Best Design Team of the Year trophy",
  },
  {
    id: "world-facades-dubai-2025",
    year: "2025",
    title: "World of Façades Middle East – Partner (Dubai, April 2025)",
    description: "Recognized as Partner at the World of Façades event held at The Agenda, Media City, Dubai.",
    image: "/images/Award Page/award-world-facades-dubai-2025.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "World of Façades Middle East partner recognition from Dubai in April 2025",
  },
  {
    id: "green-energy-consulting-2024",
    year: "2024",
    title: "Green Energy Excellence Awards 2024 – Solar Consulting Firm of the Year",
    description: "Presented at The Solar Week 2024 in Riyadh, Saudi Arabia, for excellence in solar consulting.",
    image: "/images/Award Page/award-green-energy-consulting-2024.webp",
    imageWidth: 900,
    imageHeight: 996,
    imageAlt: "Green Energy Excellence Awards 2024 Solar Consulting Firm of the Year trophy",
  },
  {
    id: "world-facades-riyadh-2024",
    year: "2024",
    title: "World of Façades Middle East – Partner (Riyadh, 10 Dec 2024)",
    description: "Recognized as Partner at the World of Façades event held at VOCO, Riyadh.",
    image: "/images/Award Page/award-world-facades-riyadh-2024.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "World of Façades Middle East partner recognition from Riyadh on 10 December 2024",
  },
  {
    id: "world-facades-jeddah-2024",
    year: "2024",
    title: "World of Façades Middle East – Partner (Jeddah, 07 Oct 2024)",
    description: "Recognized as Partner at the World of Façades event held at The Ritz-Carlton, Jeddah.",
    image: "/images/Award Page/award-world-facades-jeddah-2024.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "World of Façades Middle East partner recognition from Jeddah on 7 October 2024",
  },
  {
    id: "isem-speaker-2024",
    year: "2024",
    title: "ISEM Qatar 2024 – Speaker Appreciation Award",
    description: "Presented to Manoj Divakaran in recognition of his outstanding contribution as a speaker at the International Solar Energy Meet.",
    image: "/images/Award Page/award-isem-speaker-2024.webp",
    imageWidth: 900,
    imageHeight: 900,
    imageAlt: "ISEM Qatar 2024 Speaker Appreciation Award presented to Manoj Divakaran",
  },
  {
    id: "solaris-engineering-team-2023",
    year: "2023",
    title: "Solaris Middle East Awards 2023 – Best Engineering Team of the Year (EPC)",
    description: "Team Excellence Award for outstanding engineering performance in EPC projects.",
    image: "/images/Award Page/award-solaris-engineering-2023.webp",
    imageWidth: 900,
    imageHeight: 972,
    imageAlt: "Solaris Middle East Awards 2023 Best Engineering Team of the Year EPC trophy",
  },
  {
    id: "solaris-design-team-2023",
    year: "2023",
    title: "Solaris Middle East Awards 2023 – Best Design Team of the Year (EPC)",
    description: "Team Excellence Award for outstanding design performance in EPC projects.",
    image: "/images/Award Page/award-solaris-design-2023.webp",
    imageWidth: 900,
    imageHeight: 972,
    imageAlt: "Solaris Middle East Awards 2023 Best Design Team of the Year EPC trophy",
  },
  {
    id: "company-bipv-2022",
    year: "2022",
    title: "Middle East Rooftop Solar Congress Awards 2022 – Company of the Year: BIPV",
    description: "Awarded for excellence in Building-Integrated Photovoltaics delivery and innovation.",
    image: "/images/Award Page/award-company-bipv-2022.webp",
    imageWidth: 900,
    imageHeight: 971,
    imageAlt: "Middle East Rooftop Solar Congress Awards 2022 Company of the Year BIPV plaque",
    aboutTitle: "Company of the Year: BIPV 2022",
    aboutDescription: "Recognized at the Middle East Rooftop Solar Congress Awards for excellence in Building-Integrated Photovoltaics delivery and innovation.",
    featured: true,
  },
  {
    id: "grand-masters-2022",
    year: "2022",
    title: "Grand Masters Middle East Awards 2022 – Excellence in Design and Engineering Leadership",
    description: "Presented to Manoj Divakaran for outstanding leadership in design and engineering.",
    image: "/images/Award Page/award-grand-masters-2022.webp",
    imageWidth: 900,
    imageHeight: 996,
    imageAlt: "Grand Masters Middle East Awards 2022 recognition for design and engineering leadership",
  },
  {
    id: "mesia-ci-project-2021",
    year: "2021",
    title: "MESIA C&I Project of the Year 2021",
    description: "Awarded by the Middle East Solar Industry Association for outstanding commercial and industrial solar project execution.",
    image: "/images/Award Page/award-mesia-ci-project-2021.webp",
    imageWidth: 900,
    imageHeight: 972,
    imageAlt: "MESIA crystal award presented to Empereal for C&I Project of the Year 2021",
    featured: true,
  },
];

export const featuredAwards = [
  awards.find((award) => award.id === "mesia-ci-project-2021"),
  awards.find((award) => award.id === "company-bipv-2022"),
  awards.find((award) => award.id === "solar-system-integrator-2025"),
  awards.find((award) => award.id === "mesia-net-zero-2025"),
].filter((award): award is Award => Boolean(award));

export const awardYears = ["All", "2026", "2025", "2024", "2023", "2022", "2021"] as const;
