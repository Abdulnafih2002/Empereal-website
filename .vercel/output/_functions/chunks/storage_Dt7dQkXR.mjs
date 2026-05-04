import { list, put } from '@vercel/blob';

const rawProjects = /* #__PURE__ */ JSON.parse("[{\"slug\":\"dewa-hq-jadaf\",\"title\":\"DEWA HQ — Jadaf\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"5,012 kWp\",\"scope\":\"Full design, EPC, and 3-year O&M for solar roof, façade and podium installations.\",\"summary\":\"World's largest net-zero building — solar roof, façade & podiums.\",\"outcome\":\"World's largest net-zero government building, 5,012 kWp installed.\",\"categories\":[\"bipv\",\"solar-pv\"],\"tone\":\"navy\",\"image\":\"/images/project-uae.jpg\",\"imageAlt\":\"DEWA Headquarters net-zero building in Dubai\"},{\"slug\":\"zamani-islands-resort\",\"title\":\"Zamani Islands Resort\",\"location\":\"Maldives\",\"country\":\"Maldives\",\"countryCode\":\"MV\",\"scale\":\"24,000 kWp\",\"scope\":\"Custom solar facade integration for the world's largest net-zero resort.\",\"summary\":\"World's largest net-zero resort. Custom solar facade integration. Completion Dec 2026.\",\"outcome\":\"24 MWp BIPV across the resort — completion December 2026.\",\"categories\":[\"bipv\",\"solar-pv\"],\"tone\":\"ocean\"},{\"slug\":\"uae-pavilion-expo-2020\",\"title\":\"UAE Pavilion, Expo 2020\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"98 kWp\",\"scope\":\"Architectural solar for the Santiago Calatrava-designed LEED Platinum building.\",\"summary\":\"Architectural solar for Santiago Calatrava-designed LEED Platinum building.\",\"categories\":[\"bipv\",\"solar-pv\"],\"tone\":\"navy\"},{\"slug\":\"masdar-mc2\",\"title\":\"MASDAR MC2\",\"location\":\"Abu Dhabi\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"1,610 kWp\",\"scope\":\"Building-integrated PV for MASDAR City commercial development.\",\"summary\":\"Building-integrated PV for MASDAR City commercial development, Abu Dhabi.\",\"categories\":[\"bipv\",\"solar-pv\"],\"tone\":\"navy\"},{\"slug\":\"al-wasl-plaza\",\"title\":\"Al Wasl Plaza, Expo 2020\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"—\",\"scope\":\"Architectural solar integration for the iconic Al Wasl Plaza dome.\",\"summary\":\"Architectural solar integration for the iconic Al Wasl Plaza dome at Expo 2020.\",\"categories\":[\"bipv\"],\"tone\":\"navy\"},{\"slug\":\"mercedes-binghatti\",\"title\":\"Mercedes Binghatti Tower\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"—\",\"scope\":\"Custom architectural solar integration for the Mercedes-Benz branded residential tower.\",\"summary\":\"Custom architectural solar integration for the Mercedes-Benz branded residential tower, Dubai.\",\"categories\":[\"bipv\"],\"tone\":\"navy\"},{\"slug\":\"see-institute\",\"title\":\"SEE Institute, Dubai\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"14 kW\",\"scope\":\"Architectural solar integration for the Sustainable Energy Exchange Institute.\",\"summary\":\"Architectural solar integration for the Sustainable Energy Exchange Institute, Dubai.\",\"categories\":[\"bipv\"],\"tone\":\"navy\"},{\"slug\":\"solar-portrait-dewa\",\"title\":\"Solar Portrait — DEWA\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"2.4 kWp\",\"scope\":\"World's first solar portrait — Mohammed bin Rashid Al Maktoum Solar Park.\",\"summary\":\"World's first solar portrait at Mohammed bin Rashid Al Maktoum Solar Park, Dubai.\",\"categories\":[\"bipv\"],\"tone\":\"navy\"},{\"slug\":\"rta-depots\",\"title\":\"RTA Bus / Tram / Metro Depots\",\"location\":\"Dubai\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"11 MWp\",\"scope\":\"Solar across 12 transport infrastructure sites for Roads & Transport Authority.\",\"summary\":\"Solar across 12 transport infrastructure sites for Roads & Transport Authority, Dubai.\",\"categories\":[\"solar-pv\"],\"tone\":\"navy\"},{\"slug\":\"jeddah-oceanarium\",\"title\":\"Jeddah Oceanarium\",\"location\":\"Jeddah\",\"country\":\"Saudi Arabia\",\"countryCode\":\"SA\",\"scale\":\"132 kWp\",\"scope\":\"Architectural solar integration for landmark leisure and marine facility.\",\"summary\":\"Architectural solar integration for landmark leisure and marine facility, Jeddah.\",\"categories\":[\"bipv\"],\"tone\":\"sunset\"},{\"slug\":\"samih-saudi-arabia\",\"title\":\"SAMIH — Saudi Arabia\",\"location\":\"Saudi Arabia\",\"country\":\"Saudi Arabia\",\"countryCode\":\"SA\",\"scale\":\"1,200 kWp\",\"scope\":\"Large-scale BIPV installation for SAMIH development.\",\"summary\":\"Large-scale BIPV installation for SAMIH development, Kingdom of Saudi Arabia.\",\"categories\":[\"bipv\"],\"tone\":\"sunset\"},{\"slug\":\"capital-towers\",\"title\":\"Capital Towers\",\"location\":\"Canada\",\"country\":\"Canada\",\"countryCode\":\"CA\",\"scale\":\"330 kW\",\"scope\":\"Building-integrated photovoltaic facade installation.\",\"summary\":\"Building-integrated photovoltaic facade installation for residential tower, Canada.\",\"categories\":[\"bipv\"],\"tone\":\"mineral\"},{\"slug\":\"samih-scarborough\",\"title\":\"SAMIH Scarborough Academy\",\"location\":\"Scarborough, Ontario\",\"country\":\"Canada\",\"countryCode\":\"CA\",\"scale\":\"509.6 kW\",\"scope\":\"Building-integrated solar for educational facility.\",\"summary\":\"Building-integrated solar for educational facility, Scarborough, Ontario.\",\"categories\":[\"bipv\"],\"tone\":\"mineral\"},{\"slug\":\"stmarys-loyola\",\"title\":\"St. Mary's University Loyola Residence\",\"location\":\"Halifax, Nova Scotia\",\"country\":\"Canada\",\"countryCode\":\"CA\",\"scale\":\"94 kW\",\"scope\":\"BIPV facade installation for university residence building.\",\"summary\":\"BIPV facade installation for university residence building, Halifax, Nova Scotia.\",\"categories\":[\"bipv\"],\"tone\":\"mineral\"},{\"slug\":\"wilson-balcony\",\"title\":\"1154 Wilson Balcony Retrofit\",\"location\":\"Toronto\",\"country\":\"Canada\",\"countryCode\":\"CA\",\"scale\":\"162 kW\",\"scope\":\"Solar balcony railing retrofit for existing residential building.\",\"summary\":\"Solar balcony railing retrofit for existing residential building, Toronto.\",\"categories\":[\"bipv\"],\"tone\":\"mineral\"},{\"slug\":\"nlc-110mw\",\"title\":\"110 MWp NLC Solar Farm\",\"location\":\"India\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"110 MWp\",\"scope\":\"Large-scale ground-mounted utility solar farm EPC delivery.\",\"summary\":\"Large-scale ground-mounted utility solar farm EPC delivery, India.\",\"categories\":[\"utility\",\"solar-pv\"],\"tone\":\"forest\"},{\"slug\":\"charanka-solar-park\",\"title\":\"Charanka Solar Park\",\"location\":\"Gujarat\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"21.4 MWp\",\"scope\":\"Solar park installation at Gujarat Solar Park, Charanka.\",\"summary\":\"Solar park installation at Gujarat Solar Park, Charanka, Gujarat.\",\"categories\":[\"utility\",\"solar-pv\"],\"tone\":\"forest\"},{\"slug\":\"karnataka-32mw\",\"title\":\"32 MWp Karnataka\",\"location\":\"Karnataka\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"32 MWp\",\"scope\":\"Ground-mounted utility-scale solar farm EPC.\",\"summary\":\"Ground-mounted utility-scale solar farm EPC, Karnataka, India.\",\"categories\":[\"utility\",\"solar-pv\"],\"tone\":\"forest\"},{\"slug\":\"igi-airport-sunsource\",\"title\":\"IGI Airport SunSource\",\"location\":\"New Delhi\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"1.72 MWp\",\"scope\":\"Airport solar installation at Indira Gandhi International Airport.\",\"summary\":\"Airport solar installation — Indira Gandhi International Airport, New Delhi.\",\"categories\":[\"solar-pv\"],\"tone\":\"forest\"},{\"slug\":\"jindal-polyfilms\",\"title\":\"3 MWp Jindal Polyfilms\",\"location\":\"India\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"3 MWp\",\"scope\":\"Industrial rooftop and ground-mounted solar PV for manufacturing facility.\",\"summary\":\"Industrial rooftop and ground-mounted solar PV for Jindal Polyfilms manufacturing facility.\",\"categories\":[\"solar-pv\"],\"tone\":\"forest\"},{\"slug\":\"masdar-desalination\",\"title\":\"MASDAR Solar Desalination\",\"location\":\"Abu Dhabi\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"40,000 L/day\",\"scope\":\"Patented LFR solar thermal desalination. Commissioned May 2017.\",\"summary\":\"Patented LFR solar thermal desalination. Commissioned May 2017. Inaugurated by CEO of MASDAR.\",\"outcome\":\"40,000 L/day ultra-pure water — 24/7 solar operation.\",\"categories\":[\"desalination\",\"solar-thermal\"],\"tone\":\"ocean\"},{\"slug\":\"ntpc-flue-gas\",\"title\":\"NTPC Flue Gas Desalination\",\"location\":\"Simhadri\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"150,000 L/day\",\"scope\":\"Waste heat recovery integrated with MED desalination unit.\",\"summary\":\"Waste heat recovery from power plant flue gas — 0.5 ppm demineralized water output.\",\"outcome\":\"150,000 L/day of 0.5 ppm demineralized water from waste heat.\",\"categories\":[\"desalination\",\"integrated\"],\"tone\":\"ocean\"},{\"slug\":\"ntpc-vallur\",\"title\":\"NTPC Vallur Desalination\",\"location\":\"Tamil Nadu\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"125,000 L/day\",\"scope\":\"Solar thermal multi-effect distillation seawater desalination.\",\"summary\":\"Solar thermal multi-effect distillation seawater desalination, Tamil Nadu, India.\",\"categories\":[\"desalination\",\"solar-thermal\"],\"tone\":\"ocean\"},{\"slug\":\"tidco-solar-desal\",\"title\":\"TIDCO Solar Desalination\",\"location\":\"Tamil Nadu\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"150,000 L/day\",\"scope\":\"India's first solar thermal desalination plant. Commissioned 2013.\",\"summary\":\"India's first solar thermal desalination plant. Commissioned 2013. Landmark project.\",\"categories\":[\"desalination\",\"solar-thermal\"],\"tone\":\"ocean\"},{\"slug\":\"forward-osmosis\",\"title\":\"Forward Osmosis Plant\",\"location\":\"Ramanathapuram, Tamil Nadu\",\"country\":\"India\",\"countryCode\":\"IN\",\"scale\":\"20,000 L/day\",\"scope\":\"Solar thermal-powered forward osmosis system for brackish water treatment.\",\"summary\":\"Solar thermal-powered forward osmosis system for brackish water treatment, Tamil Nadu.\",\"categories\":[\"desalination\"],\"tone\":\"ocean\"},{\"slug\":\"luxglamp-resort\",\"title\":\"Luxglamp Resort\",\"location\":\"United Arab Emirates\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"—\",\"scope\":\"Solar PV + BESS + DG emergency backup for off-grid resort.\",\"summary\":\"Nearly net-zero off-grid luxury resort — solar PV + BESS + DG emergency backup.\",\"outcome\":\"Nearly net-zero off-grid luxury resort with no grid connection.\",\"categories\":[\"integrated\",\"storage\"],\"tone\":\"navy\"},{\"slug\":\"diamond-bakery\",\"title\":\"Diamond Bakery\",\"location\":\"Ajman\",\"country\":\"United Arab Emirates\",\"countryCode\":\"AE\",\"scale\":\"—\",\"scope\":\"Solar PV + battery storage for all electrical and cooling systems.\",\"summary\":\"All electrical and cooling systems on solar PV with battery storage, Ajman.\",\"outcome\":\"Full electrical and cooling load coverage from solar + storage.\",\"categories\":[\"integrated\",\"solar-pv\",\"storage\"],\"tone\":\"navy\"}]");

const memStore = /* @__PURE__ */ new Map();
function hasBlob() {
  return !!(process.env.BLOB_READ_WRITE_TOKEN);
}
async function getBlobJson(pathname, fallback) {
  if (!hasBlob()) {
    const raw = memStore.get(pathname);
    return raw ? JSON.parse(raw) : fallback;
  }
  try {
    const { blobs } = await list({ prefix: pathname });
    const blob = blobs.find((b) => b.pathname === pathname);
    if (!blob) return fallback;
    const res = await fetch(blob.url, { cache: "no-store" });
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}
async function putBlobJson(pathname, data) {
  if (!hasBlob()) {
    memStore.set(pathname, JSON.stringify(data));
    return;
  }
  await put(pathname, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false
  });
}
const AUTH_KEY = "empereal/auth.json";
async function getPasswordHash() {
  const data = await getBlobJson(AUTH_KEY, {});
  return data.hash ?? null;
}
async function putPasswordHash(hash) {
  return putBlobJson(AUTH_KEY, { hash });
}
const ENQUIRIES_KEY = "empereal/enquiries.json";
async function getEnquiries() {
  return getBlobJson(ENQUIRIES_KEY, []);
}
async function putEnquiries(enquiries) {
  return putBlobJson(ENQUIRIES_KEY, enquiries);
}
const SOLUTIONS_KEY = "empereal/solutions.json";
const DEFAULT_SOLUTIONS = [
  {
    id: "solar-power-systems",
    title: "Solar Power Systems",
    description: "Utility-scale PV farms, commercial and industrial rooftops, carports, ground-mounted installations, single-axis trackers, and architectural BIPV — full design, EPC, and O&M.",
    icon: "solar",
    href: "/solutions/solar-power-systems",
    order: 1
  },
  {
    id: "water-desalination",
    title: "Water & Desalination",
    description: "Solar thermal desalination using LFR technology, PV-RO systems, forward osmosis, solar-biomass hybrid, industrial effluent recovery, and standalone off-grid fresh water systems.",
    icon: "drop",
    href: "/solutions/water-desalination",
    order: 2
  },
  {
    id: "energy-storage",
    title: "Energy Storage Systems",
    description: "Battery energy storage integrated with solar PV, patented thermal storage using phase-change materials, molten salt CSP storage, and intelligent energy management systems.",
    icon: "battery",
    href: "/solutions/energy-storage",
    order: 3
  },
  {
    id: "integrated-infrastructure",
    title: "Integrated Energy Infrastructure",
    description: "Hybrid systems combining solar PV, thermal, storage, and backup for 24/7 availability — off-grid resorts, industrial co-generation, net-zero buildings, and rural electrification.",
    icon: "hub",
    href: "/solutions/integrated-infrastructure",
    order: 4
  },
  {
    id: "bipv",
    title: "Architectural BIPV",
    description: "Custom-designed solar facades, railings, canopies, and building-integrated systems. IEC-certified modules engineered for landmark architecture — Dubai SHAMS/D33 compliant.",
    icon: "bipv",
    href: "#",
    order: 5
  },
  {
    id: "green-hydrogen",
    title: "Green Hydrogen Systems",
    description: "Alkaline electrolyser-based green hydrogen production integrated with solar PV and desalination — including India's first sea-water-to-hydrogen project and DEWA hydrogen plant.",
    icon: "h2",
    href: "#",
    order: 6
  }
];
async function getSolutions() {
  const solutions = await getBlobJson(SOLUTIONS_KEY, DEFAULT_SOLUTIONS);
  return [...solutions].sort((a, b) => a.order - b.order);
}
async function putSolutions(solutions) {
  return putBlobJson(SOLUTIONS_KEY, solutions);
}
const PROJECTS_KEY = "empereal/projects.json";
const DEFAULT_PROJECTS = rawProjects.map((p, i) => ({
  id: p.slug,
  title: p.title,
  location: p.location,
  capacity: p.scale,
  category: p.categories?.[0] ?? "solar-pv",
  imageUrl: p.image ?? "/images/project-uae.jpg",
  description: p.summary,
  order: i + 1
}));
async function getProjects() {
  const projects = await getBlobJson(PROJECTS_KEY, DEFAULT_PROJECTS);
  return [...projects].sort((a, b) => a.order - b.order);
}
async function putProjects(projects) {
  return putBlobJson(PROJECTS_KEY, projects);
}
const SETTINGS_KEY = "empereal/settings.json";
const DEFAULT_SETTINGS = {
  address: "Dubai, United Arab Emirates",
  email: "info@empereal.com",
  phone: "+971 XX XXX XXXX",
  whatsappNumber: "971501234567",
  linkedinUrl: "",
  twitterUrl: ""
};
async function getSettings() {
  return getBlobJson(SETTINGS_KEY, DEFAULT_SETTINGS);
}
async function putSettings(settings) {
  return putBlobJson(SETTINGS_KEY, settings);
}
const FEATURES_KEY = "empereal/features.json";
const DEFAULT_FEATURES = {
  highlight: {
    eyebrow: "End-to-End Solar EPC",
    title: "From Design to Commissioning",
    description: "A single accountable partner for solar development, engineering, procurement, construction, and long-horizon asset performance.",
    badgeLabel: "Savings:",
    badgeValue: "Up to 60–70%",
    badgeSuffix: "Energy Cost Reduction",
    gaugePercent: 65,
    imageUrl: "/images/feature-epc.jpg"
  },
  cards: [
    {
      id: "high-efficiency",
      title: "High-Efficiency Power Systems",
      description: "Advanced solar technology for maximum energy output and optimized performance.",
      icon: `<rect x="3" y="6" width="18" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 10h18M3 14h18M9 6v12M15 6v12" stroke="currentColor" stroke-width="1.25"/>`,
      imageUrl: "/images/hero-solar.jpg",
      href: "#",
      order: 1
    },
    {
      id: "commercial-industrial",
      title: "Commercial & Industrial Solar Solutions",
      description: "Scalable solar solutions for businesses, factories, and commercial facilities.",
      icon: `<path d="M3 21V9l7-4 7 4v12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 21V13h5v8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 14h4M6 17h4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>`,
      imageUrl: "/images/project-uae.jpg",
      href: "#",
      order: 2
    }
  ]
};
async function getFeatures() {
  const data = await getBlobJson(FEATURES_KEY, DEFAULT_FEATURES);
  return {
    highlight: data.highlight ?? DEFAULT_FEATURES.highlight,
    cards: [...data.cards ?? []].sort((a, b) => a.order - b.order)
  };
}
async function putFeatures(features) {
  return putBlobJson(FEATURES_KEY, features);
}

export { getEnquiries, getFeatures, getPasswordHash, getProjects, getSettings, getSolutions, putEnquiries, putFeatures, putPasswordHash, putProjects, putSettings, putSolutions };
