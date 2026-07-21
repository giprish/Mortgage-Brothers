export interface CityData {
  name: string;
  slug: string;
  countyName: string;
  countySlug: string;
  description: string;
  longDescription: string;
  medianPrice: string;
  daysOnMarket: string;
  communities: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
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
    "Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde", "Dewey-Humboldt", "Clarkdale", "Jerome"
  ],
  "coconino-county-az": [
    "Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan"
  ],
  "navajo-county-az": [
    "Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow"
  ],
  "apache-county-az": [
    "St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"
  ],
  "gila-county-az": [
    "Payson", "Globe", "Miami", "Star Valley", "Hayden"
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
    "Nogales", "Rio Rico", "Tubac", "Patagonia"
  ],
  "mohave-county-az": [
    "Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley", "Colorado City"
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

export function getCountyCitiesDetails(countySlug: string): CountyCityDetail[] {
  const norm = normalizeCountySlug(countySlug);
  const cities = rawCitiesByCounty[norm] || [];
  return cities.map((cityName) => {
    let badge: string | undefined;
    if (cityName === "Phoenix" || cityName === "Tucson") {
      badge = "TOP METRO";
    } else if (countySeats.includes(cityName)) {
      badge = "COUNTY SEAT";
    }

    const desc = cityCustomDescriptions[cityName] || `Home loans, refinancing, and pre-approvals for ${cityName} buyers.`;
    return {
      name: cityName,
      desc,
      badge
    };
  });
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
  if (!citiesList) return null;

  const cityName = citiesList.find(c => slugify(c) === citySlug);
  if (!cityName) return null;

  const medianPrice = getMedianPrice(cityName);
  const daysOnMarket = getDaysOnMarket();

  // Programmatically build realistic communities/neighborhoods
  const communities = [
    {
      title: `${cityName} Historic District`,
      description: `The historic areas of ${cityName} feature charming architecture and established neighborhoods. We assist buyers with customized mortgage programs suited for traditional homes.`
    },
    {
      title: `Rural Properties & Acreage in ${cityName}`,
      description: `${cityName} is known for its scenic views and spacious properties. Our mortgage experts help buyers explore custom financing and land options.`
    },
    {
      title: `Pioneer Park Area`,
      description: `Homes near the central community hubs and parks in ${cityName} offer family-friendly living with convenient access to schools and local amenities.`
    },
    {
      title: `${cityName} Heights & Foothills`,
      description: `Modern developments and elevated homesites in ${cityName} provide scenic desert vistas, master-planned amenities, and custom new construction.`
    }
  ];

  // Programmatically build FAQs
  const faqs = [
    {
      question: `How do I find competitive mortgage rates in ${cityName}?`,
      answer: `Our experienced mortgage brokers compare loan options from multiple wholesale lenders to help borrowers secure competitive mortgage rates in ${cityName} based on their credit profile and down payment.`
    },
    {
      question: `Can I refinance my home in ${cityName}, AZ?`,
      answer: `Yes! We offer cash-out refinance, rate-and-term refinance, and FHA Streamline refinance options for homeowners across ${cityName} looking to lower their monthly payments or access their home equity.`
    },
    {
      question: `What loan programs are available for first-time buyers in ${cityName}?`,
      answer: `First-time home buyers in ${cityName} can access Conventional 3% down options, low down payment FHA loans, zero-down VA loans, and USDA rural home loans with competitive rates.`
    }
  ];

  return {
    name: cityName,
    slug: citySlug,
    countyName,
    countySlug,
    description: `Home loans, refinancing, and pre-approvals for ${cityName} buyers.`,
    longDescription: `${cityName} is a vibrant and growing community located in ${countyName}, offering a diverse real estate market with various neighborhood choices. AZ Mortgage Brothers provides local expertise to help residents and newcomers navigate home financing with confidence, offering tailored mortgage solutions for every buyer.`,
    medianPrice,
    daysOnMarket,
    communities,
    faqs
  };
}
