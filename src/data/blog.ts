export interface BlogPost {
  slug: string;
  tag: string;
  date: string;
  isoDate: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  youtubeId?: string;
  sections: { heading: string; body: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "manoj-divakaran-empereal-founder-story-edb",
    tag: "Video",
    date: "June 18, 2026",
    isoDate: "2026-06-18",
    readTime: "Watch video",
    title: "He Spent $2.5M Making Solar Panels Invisible... Now His Company Makes $41M/YR",
    excerpt:
      "In this Emirates Development Bank documentary, Empereal founder Manoj Divakaran shares the journey behind building a UAE clean-energy company focused on solar-integrated architecture and future-ready energy solutions.",
    image: "https://i.ytimg.com/vi/iT87iVJYUC0/maxresdefault.jpg",
    youtubeId: "iT87iVJYUC0",
    sections: [
      {
        heading: "The Empereal Story",
        body: "Watch Manoj Divakaran share Empereal's founder story, the investment and conviction behind its growth, and the opportunity to turn buildings into clean-energy assets through integrated solar technology.",
      },
    ],
  },
  {
    slug: "empereal-powers-solar-pavilion-expo-2020",
    tag: "Projects",
    date: "January 15, 2025",
    isoDate: "2025-01-15",
    readTime: "5 min read",
    title: "Expo 2020 UAE Pavilion: How 98kWp BIPV Brought Santiago Calatrava's Vision to Life",
    excerpt:
      "The UAE Pavilion at Expo 2020 Dubai is one of the world's most striking examples of building-integrated photovoltaics. Designed by Santiago Calatrava with 98 kWp of solar seamlessly integrated into its falcon-inspired wing structure, the project shows how renewable energy can enhance architectural excellence rather than compromise it.",
    image: "/images/uae-pavilion-expo-2020.jpg",
    sections: [
      {
        heading: "A Landmark in Sustainable Architecture",
        body: "The UAE Pavilion at Expo 2020 Dubai stands as a testament to what is possible when innovative engineering meets visionary architecture. Designed by the renowned Santiago Calatrava, the pavilion features a 98 kWp Building-Integrated Photovoltaic (BIPV) system that seamlessly integrates renewable energy generation into its iconic falcon-wing structure.",
      },
      {
        heading: "Engineering Excellence",
        body: "The BIPV system was not an afterthought — it was woven into the architectural design from the earliest stages. This required close collaboration between Empereal's engineering team, the architects, and the pavilion's construction partners to ensure that the solar modules complemented the building's aesthetic while delivering optimal energy performance.",
      },
      {
        heading: "Results and Impact",
        body: "The solar installation supports the pavilion's LEED Platinum certification objectives, significantly reducing its operational energy consumption. The project demonstrates how high-visibility architectural landmarks can serve as powerful showcases for clean energy technology, inspiring millions of visitors from around the world.",
      },
      {
        heading: "Key Takeaways",
        body: "The project integrated 98 kWp of BIPV into an iconic falcon-wing design, achieved LEED Platinum sustainability objectives, exposed millions of visitors to solar technology in action, and demonstrated the scalability of BIPV in landmark architecture.",
      },
    ],
  },
  {
    slug: "empereal-world-future-energy-summit-2026",
    tag: "Events",
    date: "November 20, 2024",
    isoDate: "2024-11-20",
    readTime: "3 min read",
    title: "Empereal at WFES 2026: Previewing the Future of Middle East Solar",
    excerpt:
      "As WFES returns to Abu Dhabi in 2026, we'll showcase our latest work in BIPV, green hydrogen, and integrated energy storage — from next-generation façade-integrated solar to utility-scale hydrogen electrolysis.",
    image: "/images/masdar-10mw.jpg",
    sections: [
      {
        heading: "Innovation on Display",
        body: "Empereal was proud to participate in the World Future Energy Summit 2026, part of Abu Dhabi Sustainability Week. Our booth showcased the latest innovations in Building-Integrated Photovoltaics, advanced battery energy storage systems, and our new green hydrogen electrolyzer platform.",
      },
      {
        heading: "Live Demonstrations",
        body: "Visitors experienced live demonstrations of our dual-axis solar tracking system, smart energy management dashboard, and containerized hydrogen production unit. The response was overwhelmingly positive, with numerous project inquiries from developers, governments, and industrial clients across the Middle East, Africa, and South Asia.",
      },
      {
        heading: "Thought Leadership",
        body: "Our leadership team delivered a keynote on \"The Future of Integrated Renewable Infrastructure,\" highlighting how the convergence of solar, storage, and hydrogen technologies is creating new possibilities for energy independence and industrial decarbonization. The presentation drew particular attention to our Zamani Islands project as a model for fully integrated sustainable development.",
      },
      {
        heading: "Key Takeaways",
        body: "The summit featured live demonstrations of BIPV, BESS, and hydrogen systems alongside a keynote on integrated renewable infrastructure, drawing strong international project inquiries and showcasing Zamani Islands as an integrated model.",
      },
    ],
  },
  {
    slug: "rise-bipv-gcc-transforming-skylines",
    tag: "Industry Insights",
    date: "October 8, 2024",
    isoDate: "2024-10-08",
    readTime: "6 min read",
    title: "The Rise of BIPV in the GCC: From Niche Technology to Mainstream Construction",
    excerpt:
      "Building-integrated photovoltaics is moving fast from experimental installations to standard construction practice across the GCC. With landmark projects like the DEWA Headquarters and Masdar MC2 proving technical viability at scale, developers across the region are increasingly specifying BIPV as a primary building material.",
    image: "/images/mercedes-binghatti.jpg",
    sections: [
      {
        heading: "BIPV: Where Architecture Meets Energy",
        body: "Building-Integrated Photovoltaics (BIPV) is no longer a niche technology — it is becoming a defining feature of modern architecture in the GCC. From the Mercedes-Benz Binghatti Tower's custom solar glass façade to the DEWA Headquarters' 4,983 kWp integrated system, BIPV is transforming skylines while generating clean power.",
      },
      {
        heading: "Key Drivers in the Region",
        body: "The GCC's harsh climate, with intense solar irradiation and high temperatures, makes BIPV particularly effective. The region's ambitious net-zero targets — Dubai's 2050 strategy, Saudi Vision 2030, and the UAE's Net Zero by 2050 — are driving demand for buildings that generate their own energy.",
      },
      {
        heading: "Empereal's BIPV Portfolio",
        body: "Our portfolio includes some of the most iconic BIPV projects in the region: the UAE Pavilion at Expo 2020, the ACWA Power Headquarters in Riyadh, the Mercedes-Benz Tower, and the DEWA Solar Tree. Each project pushes the boundaries of what is possible, combining architectural beauty with engineering performance.",
      },
      {
        heading: "Key Takeaways",
        body: "BIPV is reshaping GCC architecture and energy policy, with net-zero targets driving demand for energy-generating buildings — a trend reflected in Empereal's portfolio of the region's most iconic BIPV projects, where custom solar glass and façade integration are becoming standard.",
      },
    ],
  },
  {
    slug: "solar-hydrogen-power-couple-energy-transition",
    tag: "Technology",
    date: "September 15, 2024",
    isoDate: "2024-09-15",
    readTime: "7 min read",
    title: "Solar-Powered Hydrogen: The Cornerstone of the UAE's Net-Zero Strategy",
    excerpt:
      "The convergence of solar power and green hydrogen production is one of the most promising paths to deep decarbonization in the Middle East. This article looks at how solar-to-hydrogen systems work, the economics of green hydrogen production, and what it means for regional energy security and export potential.",
    image: "/images/acwa-hq.jpg",
    sections: [
      {
        heading: "A Perfect Match",
        body: "Solar power and green hydrogen are natural partners. Solar provides abundant, low-cost electricity during daylight hours. Hydrogen stores that energy chemically, enabling long-duration storage and transportation to where it is needed. Together, they offer a complete solution for energy transition.",
      },
      {
        heading: "Industrial Decarbonization",
        body: "Heavy industries — steel, cement, chemicals, and fertilizers — account for a significant portion of global emissions. These sectors cannot be easily electrified due to their need for high-temperature heat and chemical feedstocks. Green hydrogen, produced from solar-powered electrolysis, provides a direct replacement for fossil fuels in these processes.",
      },
      {
        heading: "Empereal's Hydrogen Initiative",
        body: "Our Green Hydrogen Project at DEWA's R&D Center in Al Qudra demonstrates the viability of solar-to-hydrogen production at scale. The 2.5MW alkaline electrolyzer system produces 500 Nm³/h of high-purity hydrogen, with plans to expand this technology to industrial clients across the region.",
      },
      {
        heading: "Key Takeaways",
        body: "Solar and hydrogen together provide a complete energy transition solution, addressing heavy industry decarbonization needs that require hydrogen for heat and feedstocks — a viability already demonstrated by Empereal's DEWA R&D project, with plans for regional expansion into industrial hydrogen supply.",
      },
    ],
  },
];
