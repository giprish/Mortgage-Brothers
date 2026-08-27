import { getSeoEntry, seoMetadata, type SeoEntry } from "./seo";
import { getLiveCityFaqs } from "./liveCityFaqs";
import { liveCityPageContent } from "./liveCityPageContent";

export interface CityData {
  name: string;
  slug: string;
  countyName: string;
  countySlug: string;
  description: string;
  /** Hero H1 synced from live. */
  heroTitle: string;
  /** Hero subheading synced from live. */
  heroDescription: string;
  /** Optional live-synced intro section heading. */
  introTitle?: string;
  /** Body paragraphs under the local experts heading (live copy when available). */
  longDescriptions: string[];
  medianPrice: string;
  daysOnMarket: string;
  /** Optional live-synced communities section heading. */
  communitiesTitle?: string;
  communities: { title: string; description: string }[];
  /** Optional live-synced intro under Popular Communities; falls back to template copy. */
  communitiesIntro?: string;
  /** Live “Why Choose…” heading. */
  whyChooseTitle: string;
  /** Live why-choose checklist (title-only or title + description). */
  whyChooseItems: { title: string; description?: string }[];
  /** Mid-page CTA banner. */
  ctaTitle: string;
  ctaDescription: string;
  /** Trusted guidance section. */
  guidanceTitle: string;
  guidanceParagraphs: string[];
  expectTitle: string;
  expectItems: string[];
  /** Optional live-synced FAQ section heading. */
  faqTitle?: string;
  faqs: { question: string; answer: string }[];
  /** “Our {City} Mortgage Services” GetInTouch block (live copy when available). */
  getInTouchTitle: string;
  getInTouchParagraphs: string[];
}

export const countyMap: Record<string, string> = {
  "maricopa-county-az": "Maricopa County",
  "pima-county-az": "Pima County",
  "pinal-county-az": "Pinal County",
  "yavapai-county-az": "Yavapai County",
  "coconino-county-az": "Coconino County",
  "navajo-county-az": "Navajo County",
  "apache-county-az": "Apache County",
  "gila-county-az": "Gila County",
  "cochise-county-az": "Cochise County",
  "graham-county-az": "Graham County",
  "greenlee-county-az": "Greenlee County",
  "santa-cruz-county-az": "Santa Cruz County",
  "mohave-county-az": "Mohave County",
  "la-paz-county-az": "La Paz County",
  "yuma-county-az": "Yuma County"
};

// List of all 108 cities under their respective 15 counties
const rawCitiesByCounty: Record<string, string[]> = {
  "maricopa-county-az": [
    "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Tempe", "Peoria",
    "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Fountain Hills",
    "Paradise Valley", "Cave Creek", "Carefree", "Anthem", "Sun City", "Sun City West",
    "Litchfield Park", "Wickenburg", "Apache Junction", "Guadalupe", "El Mirage",
    "Tolleson", "Youngtown", "Gila Bend"
  ],
  "pima-county-az": [
    "Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley", "Catalina Foothills", "South Tucson"
  ],
  "pinal-county-az": [
    "Casa Grande", "Maricopa", "San Tan Valley", "Florence", "Coolidge", "Eloy", "Apache Junction", "Superior", "Kearny", "Mammoth"
  ],
  "yavapai-county-az": [
    "Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde", "Dewey-Humboldt", "Clarkdale", "Jerome",
    "Cornville", "Yavapai Hills"
  ],
  "coconino-county-az": [
    "Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan",
    "Bellemont", "Doney Park", "Happy Jack", "Kachina Village", "Mormon Lake",
    "Mountainaire", "Munds Park", "Parks", "Timberline"
  ],
  "navajo-county-az": [
    "Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow"
  ],
  "apache-county-az": [
    "St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"
  ],
  "gila-county-az": [
    "Payson", "Globe", "Miami", "Star Valley", "Hayden",
    "Christopher Creek", "Forest Lakes", "Kohls Ranch", "Pine", "Strawberry",
    "Washington Park", "Whispering Pines"
  ],
  "cochise-county-az": [
    "Sierra Vista", "Douglas", "Bisbee", "Benson", "Willcox", "Tombstone", "Huachuca City"
  ],
  "graham-county-az": [
    "Safford", "Thatcher", "Pima"
  ],
  "greenlee-county-az": [
    "Clifton", "Duncan", "Morenci"
  ],
  "santa-cruz-county-az": [
    "Nogales", "Rio Rico", "Tubac", "Patagonia", "Santa Cruz"
  ],
  "mohave-county-az": [
    "Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley", "Colorado City", "Chloride"
  ],
  "la-paz-county-az": [
    "Parker", "Quartzsite", "Salome", "Bouse"
  ],
  "yuma-county-az": [
    "Yuma", "San Luis", "Somerton", "Wellton"
  ]
};

export interface CountyCityDetail {
  name: string;
  /** Canonical URL slug — always prefer this over slugify(name). */
  slug: string;
  desc: string;
  badge?: string;
}

const cityCustomDescriptions: Record<string, string> = {
  "Phoenix": "As Arizona's capital and largest city, Phoenix offers a dynamic real estate market with diverse neighborhoods.",
  "Scottsdale": "Known for luxury living and vibrant culture, Scottsdale buyers benefit from jumbo loans and custom home financing.",
  "Mesa": "Mesa's family-friendly communities and job growth make it a top choice for buyers and refinancers.",
  "Chandler": "Tech-driven economy and top-rated schools attract families and professionals across Chandler.",
  "Gilbert": "Safe neighborhoods and top master-planned communities make Gilbert ideal for new home buyers.",
  "Glendale": "From historic districts to sports entertainment hubs, Glendale offers diverse housing choices.",
  "Tempe": "Vibrant university town energy with diverse residential housing options near ASU and employment hubs.",
  "Tucson": "Southern Arizona's major hub, Tucson offers mountain view estates, historic character, and desert living.",
  "Oro Valley": "Upscale golf communities and scenic Santa Catalina mountain views define Oro Valley living.",
  "Flagstaff": "High-country mountain town offering cooler climate properties, pine forests, and university living.",
  "Prescott": "Rich Western heritage, historic courthouse square, and mile-high mountain air attract buyers.",
  "Lake Havasu City": "Boating, sunshine, and resort-style waterfront living along the Colorado River.",
  "Yuma": "Fast-growing desert city with sunshine, affordable housing, and strong agricultural community ties.",
  "Casa Grande": "Strategic location between Phoenix and Tucson with affordable new home construction developments."
};

const countySeats = ["Phoenix", "Tucson", "Florence", "Prescott", "Flagstaff", "Holbrook", "St. Johns", "Globe", "Bisbee", "Safford", "Clifton", "Nogales", "Kingman", "Parker", "Yuma"];

function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseCityNameFromSeo(entry: SeoEntry | undefined, citySlug: string): string {
  const title = entry?.title || entry?.openGraph?.title;
  if (title) {
    const match = title.match(/^(.+?)\s*-\s*Arizona Home Loans/i);
    if (match) {
      const name = match[1].trim();
      // Only trust title-derived names that match the URL slug.
      if (slugify(name) === citySlug) return name;
    }
  }

  const description = entry?.description || entry?.openGraph?.description;
  if (description) {
    const match = description.match(/in\s+([^,]+),\s*AZ/i);
    if (match) {
      const name = match[1].trim();
      // Reject bad SEO copy like "Pine Mortgage, AZ" for slug `pine`.
      if (slugify(name) === citySlug) return name;
    }
  }

  return slugToDisplayName(citySlug);
}

function getSeoCityEntriesForCounty(countySlug: string): { slug: string; name: string; description?: string }[] {
  const norm = normalizeCountySlug(countySlug);
  const prefix = `/service-areas/${norm}/`;
  const results: { slug: string; name: string; description?: string }[] = [];

  for (const path of Object.keys(seoMetadata)) {
    if (!path.startsWith(prefix)) continue;
    const citySlug = path.slice(prefix.length);
    if (!citySlug || citySlug.includes("/")) continue;

    const entry = seoMetadata[path];
    results.push({
      slug: citySlug,
      name: parseCityNameFromSeo(entry, citySlug),
      description: entry.description,
    });
  }

  return results;
}

function buildCityData(params: {
  cityName: string;
  citySlug: string;
  countyName: string;
  countySlug: string;
  seoDescription?: string;
}): CityData {
  const { cityName, citySlug, countyName, countySlug, seoDescription } = params;
  const medianPrice = getMedianPrice(cityName);
  const daysOnMarket = getDaysOnMarket();

  const livePage = liveCityPageContent[`${countySlug}/${citySlug}`];
  const communities = livePage?.items ?? [
    {
      title: `${cityName} Historic District`,
      description: `The historic areas of ${cityName} feature charming architecture and established neighborhoods. We assist buyers with customized mortgage programs suited for traditional homes.`,
    },
    {
      title: `Rural Properties & Acreage in ${cityName}`,
      description: `${cityName} is known for its scenic views and spacious properties. Our mortgage experts help buyers explore custom financing and land options.`,
    },
    {
      title: `Pioneer Park Area`,
      description: `Homes near the central community hubs and parks in ${cityName} offer family-friendly living with convenient access to schools and local amenities.`,
    },
    {
      title: `${cityName} Heights & Foothills`,
      description: `Modern developments and elevated homesites in ${cityName} provide scenic desert vistas, master-planned amenities, and custom new construction.`,
    },
  ];

  const liveFaqs = getLiveCityFaqs(countySlug, citySlug);
  const faqs = liveFaqs?.items ?? [
    {
      question: `How do I find competitive mortgage rates in ${cityName}?`,
      answer: `Our experienced mortgage brokers compare loan options from multiple wholesale lenders to help borrowers secure competitive mortgage rates in ${cityName} based on their credit profile and down payment.`,
    },
    {
      question: `Can I refinance my home in ${cityName}, AZ?`,
      answer: `Yes! We offer cash-out refinance, rate-and-term refinance, and FHA Streamline refinance options for homeowners across ${cityName} looking to lower their monthly payments or access their home equity.`,
    },
    {
      question: `What loan programs are available for first-time buyers in ${cityName}?`,
      answer: `First-time home buyers in ${cityName} can access Conventional 3% down options, low down payment FHA loans, zero-down VA loans, and USDA rural home loans with competitive rates.`,
    },
  ];

  const defaultDescription = `Home loans, refinancing, and pre-approvals for ${cityName} buyers.`;
  const defaultHeroTitle = `${cityName} Mortgage Experts - Your Local Home Loan Partners`;
  const defaultHeroDescription = `Mortgage Brothers LLC provides trusted ${cityName} mortgage solutions for homebuyers and homeowners throughout the area. Our experienced mortgage brokers in ${cityName} AZ work with multiple lenders.`;
  const defaultLongDescriptions = [
    `As experienced **mortgage lenders serving ${cityName} AZ**, our team helps borrowers navigate the home financing process with confidence. From first-time homebuyers to homeowners exploring refinancing opportunities, we provide mortgage solutions tailored to the ${cityName} AZ real estate market.`,
    `Whether you're purchasing a primary residence, an investment property, or refinancing an existing loan, we help you secure dependable **mortgage loans in ${cityName} Arizona** with competitive rates and transparent guidance.`,
  ];
  const defaultCommunitiesIntro = `${cityName} is home to diverse communities — each with unique pricing, amenities, and lending considerations. We assist homebuyers throughout:`;
  const defaultWhyChooseTitle = `Why Choose Us as Your ${cityName} Local Mortgage Team`;
  const defaultWhyChooseItems = [
    { title: `Access to multiple mortgage lenders in ${cityName} AZ` },
    { title: `Competitive mortgage rates in ${cityName}` },
    { title: "Personalized loan strategies for buyers and homeowners" },
    { title: "Clear communication from consultation through closing" },
    { title: `Local expertise in the ${cityName} AZ real estate market` },
  ];
  const defaultCtaTitle = `Ready to Start Your ${cityName} Home Loan Journey?`;
  const defaultCtaDescription = `Our ${cityName} mortgage specialists are here to help you move forward with confidence. We compare lenders, review your financial profile, and recommend the best mortgage programs for your goals.`;
  const defaultGuidanceTitle = `Trusted Mortgage Guidance in ${cityName}`;
  const defaultGuidanceParagraphs = [
    `When you work with Mortgage Brothers LLC, you receive structured advice and dependable support throughout your mortgage process.`,
    `Whether you're purchasing your first home, refinancing, or exploring a reverse mortgage in ${cityName} AZ, our team guides you through the process with clear advice and dependable support.`,
  ];
  const defaultExpectTitle = "What You Can Expect";
  const defaultExpectItems = [
    "Clear loan comparisons across lenders",
    "Honest discussion of rates and loan terms",
    "Support from initial consultation through funding",
  ];
  const defaultGetInTouchParagraphs = [
    `Whether you're buying, refinancing, or reviewing loan options, Mortgage Brothers LLC provides dependable mortgages in ${cityName} supported by experienced advisors and access to trusted lenders.`,
    `Whether you're purchasing a home, refinancing your existing mortgage, or exploring reverse mortgage opportunities, our team guides you through every step of the mortgage process with clear communication and personalized support.`,
  ];

  return {
    name: cityName,
    slug: citySlug,
    countyName,
    countySlug,
    description: seoDescription || cityCustomDescriptions[cityName] || defaultDescription,
    heroTitle: livePage?.heroTitle ?? defaultHeroTitle,
    heroDescription: livePage?.heroDescription ?? defaultHeroDescription,
    introTitle: livePage?.introTitle,
    longDescriptions: livePage?.longDescriptions ?? defaultLongDescriptions,
    medianPrice,
    daysOnMarket,
    communitiesTitle: livePage?.communitiesTitle,
    communities,
    communitiesIntro: livePage?.intro ?? defaultCommunitiesIntro,
    whyChooseTitle: livePage?.whyChooseTitle ?? defaultWhyChooseTitle,
    whyChooseItems: livePage?.whyChooseItems ?? defaultWhyChooseItems,
    ctaTitle: livePage?.ctaTitle ?? defaultCtaTitle,
    ctaDescription: livePage?.ctaDescription ?? defaultCtaDescription,
    guidanceTitle: livePage?.guidanceTitle ?? defaultGuidanceTitle,
    guidanceParagraphs: livePage?.guidanceParagraphs ?? defaultGuidanceParagraphs,
    expectTitle: livePage?.expectTitle ?? defaultExpectTitle,
    expectItems: livePage?.expectItems ?? defaultExpectItems,
    faqTitle: liveFaqs?.title,
    faqs,
    getInTouchTitle: livePage?.getInTouchTitle ?? `Our ${cityName} Mortgage Services`,
    getInTouchParagraphs:
      livePage?.getInTouchParagraphs ?? defaultGetInTouchParagraphs,
  };
}

export function getCountyCitiesDetails(countySlug: string): CountyCityDetail[] {
  const norm = normalizeCountySlug(countySlug);
  const cities = rawCitiesByCounty[norm] || [];
  const seenSlugs = new Set<string>();

  const details: CountyCityDetail[] = cities.map((cityName) => {
    const citySlug = slugify(cityName);
    seenSlugs.add(citySlug);

    let badge: string | undefined;
    if (cityName === "Phoenix" || cityName === "Tucson") {
      badge = "TOP METRO";
    } else if (countySeats.includes(cityName)) {
      badge = "COUNTY SEAT";
    }

    const desc = cityCustomDescriptions[cityName] || `Home loans, refinancing, and pre-approvals for ${cityName} buyers.`;
    return { name: cityName, slug: citySlug, desc, badge };
  });

  for (const seoCity of getSeoCityEntriesForCounty(norm)) {
    if (seenSlugs.has(seoCity.slug)) continue;
    seenSlugs.add(seoCity.slug);
    details.push({
      name: seoCity.name,
      slug: seoCity.slug,
      desc: seoCity.description || `Home loans, refinancing, and pre-approvals for ${seoCity.name} buyers.`,
    });
  }

  return details;
}

// Helper to slugify city/county names
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function normalizeCountySlug(countySlug: string): string {
  if (!countySlug) return "";
  const clean = countySlug.toLowerCase().trim().replace(/\/$/, "");
  if (countyMap[clean]) return clean;
  let base = clean.endsWith("-az") ? clean.slice(0, -3) : clean;
  if (!base.endsWith("-county")) base = `${base}-county`;
  const full = `${base}-az`;
  if (countyMap[full]) return full;
  return clean;
}

export function countyNameToSlug(countyName: string): string {
  const clean = slugify(countyName);
  return clean.includes("county") ? `${clean}-az` : `${clean}-county-az`;
}

export function getCountyName(countySlug: string): string | null {
  const norm = normalizeCountySlug(countySlug);
  return countyMap[norm] || countyMap[countySlug] || null;
}

/** All county slugs for generateStaticParams. */
export function getAllCountySlugs(): string[] {
  return Object.keys(countyMap);
}

/** City slugs for one county (for generateStaticParams). */
export function getCitySlugsForCounty(countySlug: string): string[] {
  return getCountyCitiesDetails(countySlug).map((city) => city.slug);
}

/** Flat list of { county, city } for nested generateStaticParams. */
export function getAllCountyCityParams(): { county: string; city: string }[] {
  return Object.keys(countyMap).flatMap((county) =>
    getCitySlugsForCounty(county).map((city) => ({ county, city })),
  );
}

/** Directory row used by /service-areas/ filter UI. */
export type ServiceAreaDirectoryCity = {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  desc: string;
  badge?: string;
};

/** All city pages for the service-areas directory (keeps UI in sync with routes). */
export function getServiceAreasDirectory(): ServiceAreaDirectoryCity[] {
  return Object.entries(countyMap).flatMap(([countySlug, countyName]) =>
    getCountyCitiesDetails(countySlug).map((city) => ({
      name: city.name,
      slug: city.slug,
      county: countyName,
      countySlug,
      desc: city.desc,
      badge: city.badge,
    })),
  );
}

// Generate realistic pricing based on name (so premium cities get higher valuations)
function getMedianPrice(cityName: string): string {
  const premiumCities = ["Sedona", "Catalina Foothills", "Flagstaff", "Oro Valley", "Tubac", "Pinetop-Lakeside", "Patagonia"];
  const upperMidCities = ["Tucson", "Prescott", "Lake Havasu City", "Vail", "Payson", "San Tan Valley", "Prescott Valley"];
  
  if (premiumCities.includes(cityName)) {
    return `$${Math.floor(Math.random() * 150) + 650}K`;
  }
  if (upperMidCities.includes(cityName)) {
    return `$${Math.floor(Math.random() * 100) + 400}K`;
  }
  return `$${Math.floor(Math.random() * 80) + 260}K`;
}

// Generate average days on market
function getDaysOnMarket(): string {
  return String(Math.floor(Math.random() * 15) + 35);
}

// Main lookup builder
export function getCityData(countySlug: string, citySlug: string): CityData | null {
  const normCounty = normalizeCountySlug(countySlug);
  const countyName = countyMap[normCounty] || countyMap[countySlug];
  if (!countyName) return null;

  const citiesList = rawCitiesByCounty[normCounty] || rawCitiesByCounty[countySlug];
  const cityName = citiesList?.find((c) => slugify(c) === citySlug);

  if (cityName) {
    return buildCityData({ cityName, citySlug, countyName, countySlug });
  }

  const seoEntry = getSeoEntry(`/service-areas/${normCounty}/${citySlug}`);
  if (!seoEntry) return null;

  return buildCityData({
    cityName: parseCityNameFromSeo(seoEntry, citySlug),
    citySlug,
    countyName,
    countySlug,
    seoDescription: seoEntry.description,
  });
}
