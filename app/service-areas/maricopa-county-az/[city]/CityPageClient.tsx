"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

// Lookup mapping for all 28 cities
const citiesLookup: Record<string, {
  name: string;
  description: string;
  medianPrice: string;
  daysOnMarket: string;
  skylineTitle: string;
  skylineSubtitle: string;
  neighborhoods: string[];
}> = {
  "phoenix": {
    name: "Phoenix",
    description: "Arizona's capital and largest city — a dynamic market of historic neighborhoods, new-build suburbs, and everything in between.",
    medianPrice: "$438K",
    daysOnMarket: "42",
    skylineTitle: "Phoenix SKYLINE",
    skylineSubtitle: "Camelback Mountain & Valley Views",
    neighborhoods: ["Arcadia", "Central Corridor", "Ahwatukee", "Desert Ridge", "Downtown", "Laveen", "North Phoenix", "Roosevelt Row"]
  },
  "scottsdale": {
    name: "Scottsdale",
    description: "Known for luxury resorts, upscale shopping, and top-tier golf courses, Scottsdale offers a premium real estate market.",
    medianPrice: "$810K",
    daysOnMarket: "38",
    skylineTitle: "Scottsdale FOOTHILLS",
    skylineSubtitle: "McDowell Sonoran Preserve & Desert Vibe",
    neighborhoods: ["Old Town", "Gainey Ranch", "McCormick Ranch", "North Scottsdale", "DC Ranch", "Grayhawk"]
  },
  "mesa": {
    name: "Mesa",
    description: "Mesa's family-friendly communities and growing job market make it a top choice for first-time buyers and families.",
    medianPrice: "$415K",
    daysOnMarket: "40",
    skylineTitle: "Mesa VALLEY",
    skylineSubtitle: "Red Mountain Views & East Valley Sprawl",
    neighborhoods: ["Las Sendas", "Red Mountain Ranch", "East Mesa", "Dobson Ranch", "Falcon Field", "Mesa Grande"]
  },
  "chandler": {
    name: "Chandler",
    description: "Chandler's tech-driven economy, excellent schools, and active downtown attract professionals and growing families.",
    medianPrice: "$525K",
    daysOnMarket: "39",
    skylineTitle: "Chandler TECH HUB",
    skylineSubtitle: "Silicon Desert Parks & Tech Corridors",
    neighborhoods: ["Ocotillo", "Sun Groves", "Fulton Ranch", "Circle G", "West Chandler", "Downtown Chandler"]
  },
  "gilbert": {
    name: "Gilbert",
    description: "With its safe neighborhoods and strong sense of community, Gilbert is one of the most popular family destinations in the Valley.",
    medianPrice: "$560K",
    daysOnMarket: "35",
    skylineTitle: "Gilbert WATER TOWER",
    skylineSubtitle: "Heritage District & Family Parks",
    neighborhoods: ["Val Vista Lakes", "Power Ranch", "Agritopia", "Morrison Ranch", "Seville", "Heritage District"]
  },
  "glendale": {
    name: "Glendale",
    description: "From historic downtown districts to major sports arenas and shopping hubs, Glendale offers a diverse lifestyle.",
    medianPrice: "$395K",
    daysOnMarket: "44",
    skylineTitle: "Glendale SPORTS COMPLEX",
    skylineSubtitle: "State Farm Stadium & Westgate District",
    neighborhoods: ["Arrowhead Ranch", "Historic District", "Marshall Ranch", "Westgate", "Hidden Glen", "Thunderbird"]
  },
  "tempe": {
    name: "Tempe",
    description: "Lively and innovative, Tempe's college-town atmosphere combined with tech employers makes it unique.",
    medianPrice: "$470K",
    daysOnMarket: "41",
    skylineTitle: "Tempe TOWN LAKE",
    skylineSubtitle: "A Mountain & Downtown Skylines",
    neighborhoods: ["Downtown Tempe", "Tempe Lakes", "Broadmor", "Shalimar", "Raintree", "Mitchell Park"]
  },
  "peoria": {
    name: "Peoria",
    description: "Peoria's mix of new developments, recreational lakes, and established suburbs appeals to outdoor enthusiasts.",
    medianPrice: "$490K",
    daysOnMarket: "43",
    skylineTitle: "Peoria VISTANCIA",
    skylineSubtitle: "Lake Pleasant Views & Foothills Trails",
    neighborhoods: ["Vistancia", "Westwing Mountain", "Fletcher Heights", "Trilogy", "Terramar", "Peoria Estates"]
  },
  "surprise": {
    name: "Surprise",
    description: "A fast-growing West Valley gem, Surprise is known for its welcoming community feel and affordable housing options.",
    medianPrice: "$410K",
    daysOnMarket: "45",
    skylineTitle: "Surprise CIVIC CENTER",
    skylineSubtitle: "Spring Training Stadium & White Tanks Views",
    neighborhoods: ["Sun City Grand", "Marley Park", "Arizona Traditions", "Greer Ranch", "Sierra Montana", "Mountain Vista"]
  },
  "goodyear": {
    name: "Goodyear",
    description: "Goodyear offers scenic mountain vistas, major master-planned communities, and great outdoor recreation spaces.",
    medianPrice: "$465K",
    daysOnMarket: "42",
    skylineTitle: "Goodyear ESTRELLA",
    skylineSubtitle: "Estrella Mountains & Star Tower Views",
    neighborhoods: ["PebbleCreek", "Estrella Mountain Ranch", "Palm Valley", "Canyon Trails", "Wildflower", "Sarival"]
  },
  "avondale": {
    name: "Avondale",
    description: "Fast-growing and family-oriented, Avondale features affordable homes and convenient West Valley commuting.",
    medianPrice: "$380K",
    daysOnMarket: "46",
    skylineTitle: "Avondale SPEEDWAY",
    skylineSubtitle: "Phoenix Raceway & Tres Rios Nature Views",
    neighborhoods: ["Dysart Park", "Thompson Ranch", "Sundial", "Riverview"]
  },
  "buckeye": {
    name: "Buckeye",
    description: "One of the fastest-growing cities in the country, Buckeye offers wide open spaces and affordable new-build homes.",
    medianPrice: "$375K",
    daysOnMarket: "47",
    skylineTitle: "Buckeye FOOTHILLS",
    skylineSubtitle: "Sundance Park & San Tan Ranges",
    neighborhoods: ["Sundance", "Verrado", "Tartesso", "Westpark", "Blue Horizons"]
  },
  "queen-creek": {
    name: "Queen Creek",
    description: "Queen Creek's blend of rural heritage and modern amenities attracts families seeking spacious properties.",
    medianPrice: "$580K",
    daysOnMarket: "40",
    skylineTitle: "Queen Creek FARMS",
    skylineSubtitle: "San Tan Mountain Trails & Farm Views",
    neighborhoods: ["Pecan Creek", "Cortina", "Sossaman Estates", "San Tan Heights", "Queenland Manor", "Encanterra"]
  },
  "fountain-hills": {
    name: "Fountain Hills",
    description: "Famous for its massive fountain, Fountain Hills offers peaceful desert living with upscale custom homes.",
    medianPrice: "$640K",
    daysOnMarket: "39",
    skylineTitle: "Fountain Hills PARK",
    skylineSubtitle: "Iconic Fountain & Four Peaks Views",
    neighborhoods: ["Firerock", "Sunridge Canyon", "Eagle Mountain", "Crestview", "Town Center", "Desert Canyon"]
  },
  "paradise-valley": {
    name: "Paradise Valley",
    description: "Arizona's premier luxury community, offering private, spacious estates nestled between Camelback and Mummy mountains.",
    medianPrice: "$2.4M",
    daysOnMarket: "52",
    skylineTitle: "Paradise Valley ESTATES",
    skylineSubtitle: "Camelback Mountain & Custom Architecture",
    neighborhoods: ["Camelback Country Club", "Clearwater Hills", "Judson", "Mummy Mountain Park", "Tatum Canyon"]
  },
  "cave-creek": {
    name: "Cave Creek",
    description: "Cave Creek is known for its rugged desert landscapes, western heritage, and spacious custom acreage.",
    medianPrice: "$720K",
    daysOnMarket: "45",
    skylineTitle: "Cave Creek DESERT",
    skylineSubtitle: "Black Mountain & Spur Cross Trails",
    neighborhoods: ["Rancho Manana", "Spur Cross", "Black Mountain", "Desert Hills", "Cahava Springs"]
  },
  "carefree": {
    name: "Carefree",
    description: "Carefree delivers luxury living with a relaxed desert atmosphere, home to the iconic Sundial and artist studios.",
    medianPrice: "$880K",
    daysOnMarket: "46",
    skylineTitle: "Carefree SUNDIAL",
    skylineSubtitle: "Black Mountain Vistas & Cactus Gardens",
    neighborhoods: ["Carefree Club", "Boulders", "Sky Ranch", "Velvet Shadows", "Rolling Hills"]
  },
  "anthem": {
    name: "Anthem",
    description: "Anthem's master-planned neighborhoods offer award-winning parks, great schools, and active family amenities.",
    medianPrice: "$510K",
    daysOnMarket: "41",
    skylineTitle: "Anthem COUNTRYSIDE",
    skylineSubtitle: "Daisy Mountain & Community Parks",
    neighborhoods: ["Anthem Parkside", "Anthem Country Club", "Arroyo Grande", "Paseo", "Jubilee"]
  },
  "sun-city": {
    name: "Sun City",
    description: "The original active-adult retirement community, offering affordable housing options and extensive recreational activities.",
    medianPrice: "$295K",
    daysOnMarket: "48",
    skylineTitle: "Sun City RECREATION",
    skylineSubtitle: "Golf Course Meadows & Active Living",
    neighborhoods: ["Sun City Phase 1", "Phase 2", "Phase 3", "Del Webb Blvd"]
  },
  "sun-city-west": {
    name: "Sun City West",
    description: "Featuring newer infrastructure and expanded golf courses, Sun City West is a top retirement choice in the West Valley.",
    medianPrice: "$340K",
    daysOnMarket: "46",
    skylineTitle: "Sun City West GOLF",
    skylineSubtitle: "Grandview Course & Active Retirees",
    neighborhoods: ["Sun City West Phase 1", "Phase 2", "Grandview Golf Club"]
  },
  "litchfield-park": {
    name: "Litchfield Park",
    description: "Litchfield Park offers established neighborhoods with historic charm and convenient West Valley community hubs.",
    medianPrice: "$515K",
    daysOnMarket: "42",
    skylineTitle: "Litchfield WIGWAM",
    skylineSubtitle: "Historic Resort & Tree-Lined Avenues",
    neighborhoods: ["Wigwam Creek", "Litchfield Greens", "Old Litchfield", "Village at Litchfield"]
  },
  "wickenburg": {
    name: "Wickenburg",
    description: "With its rich Western heritage and small-town charm, Wickenburg attracts buyers seeking a quieter pace of life.",
    medianPrice: "$435K",
    daysOnMarket: "49",
    skylineTitle: "Wickenburg RANCH",
    skylineSubtitle: "Historic Downtown & Dude Ranches",
    neighborhoods: ["Wickenburg Ranch", "Historic District", "Casitas", "Sols Wash"]
  },
  "apache-junction": {
    name: "Apache Junction",
    description: "Located at the base of the Superstition Mountains, Apache Junction offers scenic desert living and affordable options.",
    medianPrice: "$355K",
    daysOnMarket: "46",
    skylineTitle: "Superstition MOUNTAINS",
    skylineSubtitle: "Superstition Range & Gold Canyon Views",
    neighborhoods: ["Gold Canyon", "Superstition Foothills", "Jacob's Ranch", "Superstition Mountain"]
  },
  "guadalupe": {
    name: "Guadalupe",
    description: "Guadalupe offers a close-knit community with convenient access to Tempe and Phoenix corridors.",
    medianPrice: "$285K",
    daysOnMarket: "50",
    skylineTitle: "Guadalupe TOWN",
    skylineSubtitle: "Avenida del Yaqui Community Hubs",
    neighborhoods: ["Guadalupe Town", "Avenida del Yaqui", "Calle Tempe"]
  },
  "el-mirage": {
    name: "El Mirage",
    description: "Offering affordable housing options and parks, El Mirage appeals to young families and first-time buyers.",
    medianPrice: "$335K",
    daysOnMarket: "45",
    skylineTitle: "El Mirage RIVER",
    skylineSubtitle: "Dysart District & Gateway Parks",
    neighborhoods: ["Dysart Park", "Thompson Ranch", "Sundial", "Riverview"]
  },
  "tolleson": {
    name: "Tolleson",
    description: "An industrial and residential hub, Tolleson offers affordable homes with quick access to the I-10 corridor.",
    medianPrice: "$350K",
    daysOnMarket: "48",
    skylineTitle: "Tolleson CENTER",
    skylineSubtitle: "Van Buren District & Family Parks",
    neighborhoods: ["Tolleson Town", "Van Buren District", "Palm Vista"]
  },
  "youngtown": {
    name: "Youngtown",
    description: "Youngtown is a unique, small municipality nestled between Peoria and El Mirage, offering affordable living.",
    medianPrice: "$290K",
    daysOnMarket: "47",
    skylineTitle: "Youngtown LAKE",
    skylineSubtitle: "Aqua Fria River & Greer Park East",
    neighborhoods: ["Youngtown Phase 1", "Greer Ranch East", "Aqua Fria"]
  },
  "gila-bend": {
    name: "Gila Bend",
    description: "Gila Bend offers quiet living in southwestern Maricopa County along historic travel routes.",
    medianPrice: "$240K",
    daysOnMarket: "55",
    skylineTitle: "Gila Bend STAGE",
    skylineSubtitle: "Butterfield Route & desert landscapes",
    neighborhoods: ["Gila Bend Town", "Butterfield Stage", "Stout's Hotel"]
  },
  "new-river": {
    name: "New River",
    description: "New River is ideal for buyers looking for spacious properties and a more rural lifestyle. We assist homeowners with land and traditional mortgage financing options.",
    medianPrice: "$540K",
    daysOnMarket: "45",
    skylineTitle: "New River LANDSCAPE",
    skylineSubtitle: "Spacious Properties & Desert Trails",
    neighborhoods: ["New River Town", "Desert Hills", "Rural Acres"]
  },
  "rio-verde": {
    name: "Rio Verde",
    description: "Rio Verde is known for its golf communities and low-density desert living. We assist buyers with specialized financing for resort-style and retirement properties.",
    medianPrice: "$750K",
    daysOnMarket: "42",
    skylineTitle: "Rio Verde GOLF",
    skylineSubtitle: "Golf Communities & Desert Views",
    neighborhoods: ["Rio Verde Country Club", "Tonto Foothills", "Golf Club Estates"]
  }
};

const loanPrograms = [
  {
    title: "Conventional Home Loans",
    href: "/conventional-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#e2edd8" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    title: "FHA Home Loans",
    href: "/fha-home-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" fill="#e2edd8" />
      </svg>
    )
  },
  {
    title: "First-Time Home Buyer",
    href: "/first-time-home-buyer-arizona-guide/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#e2edd8" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "VA Loans",
    href: "/va-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" fill="#e2edd8" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  },
  {
    title: "Jumbo Loans",
    href: "/jumbo-loans-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" fill="#e2edd8" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    )
  },
  {
    title: "Reverse Mortgage",
    href: "/reverse-mortgage-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    )
  },
  {
    title: "Moving Mortgage for Purchase",
    href: "/reverse-mortgage-home-purchase-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="#e2edd8" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    )
  },
  {
    title: "FHA Streamline Refinance",
    href: "/fha-streamline-refinance-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#e2edd8" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Self-Employed",
    href: "/refinancing-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="#e2edd8" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: "Private Money Lender",
    href: "/private-money-lender-arizona/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" />
        <path d="M6 18v-7" fill="#e2edd8" />
        <path d="M10 18v-7" fill="#e2edd8" />
        <path d="M14 18v-7" fill="#e2edd8" />
        <path d="M18 18v-7" fill="#e2edd8" />
        <path d="m12 2-10 5h20Z" fill="#e2edd8" />
      </svg>
    )
  }
];

export default function CityDetailPage() {
  const params = useParams();
  const slug = (params?.city as string) || "phoenix";
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cityInfo = useMemo(() => {
    return citiesLookup[slug] || citiesLookup["phoenix"];
  }, [slug]);

  const city = cityInfo.name;

  const communities = useMemo(() => {
    const list = cityInfo.neighborhoods || [];
    return [
      {
        title: list[0] || `${city} Historic District`,
        description: `Charming properties and established neighborhoods in the historic areas of ${city}.`
      },
      {
        title: list[1] || `Rural Properties & Acreage`,
        description: `Spacious properties and scenic desert views across the outer areas of ${city}.`
      },
      {
        title: list[2] || `Central Park Corridor`,
        description: `Highly desirable master-planned neighborhoods offering convenient access to local schools and parks.`
      },
      {
        title: list[3] || `Heights & Foothills`,
        description: `Elevated homesites and premium custom new construction with desert mountain vistas.`
      }
    ];
  }, [cityInfo, city]);

  const faqs = useMemo(() => {
    return [
      {
        question: `How do I find competitive mortgage rates in ${city}?`,
        answer: `Our experienced mortgage brokers compare loan options from multiple wholesale lenders to help borrowers secure competitive mortgage rates in ${city} based on their credit profile and down payment.`
      },
      {
        question: `Can I refinance my home in ${city}, AZ?`,
        answer: `Yes! We offer cash-out refinance, rate-and-term refinance, and FHA Streamline refinance options for homeowners across ${city} looking to lower their monthly payments or access their home equity.`
      },
      {
        question: `What loan programs are available for first-time buyers in ${city}?`,
        answer: `First-time home buyers in ${city} can access Conventional 3% down options, low down payment FHA loans, zero-down VA loans, and USDA rural home loans with competitive rates.`
      }
    ];
  }, [city]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#052316] via-[#073a22] to-[#052316]" />
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-[110px] lg:pt-[130px] pb-16 lg:pb-20">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[12px] font-semibold mb-8">
              <Link href="/service-areas/" className="text-[#8da684] hover:text-white transition-colors">Areas We Serve</Link>
              <span className="text-[#8da684]/50">&gt;</span>
              <Link href="/service-areas/maricopa-county-az/" className="text-[#8da684] hover:text-white transition-colors">Maricopa County</Link>
              <span className="text-[#8da684]/50">&gt;</span>
              <span className="text-[#3fb364]">{city}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — Text */}
              <div>
                <h1 className="text-white text-[32px] lg:text-[46px] font-playfair font-normal leading-[1.12] mb-5">
                  <span className="text-[#3fb364]">{city}</span> Mortgage Experts&nbsp;– Your Local Home Loan Partners
                </h1>
                <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.75] mb-8 max-w-lg">
                  AZ Mortgage Brothers provides trusted {city} mortgage solutions for homebuyers and homeowners throughout the area. Our experienced mortgage brokers in {city} AZ work with multiple lenders.
                </p>

                {/* CTA */}
                <Link
                  href="/#get-pre-approved"
                  className="inline-flex items-center gap-2.5 bg-[#3fb364] hover:bg-[#34a358] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#3fb364]/20 hover:shadow-xl hover:shadow-[#3fb364]/30 transition-all duration-300 group"
                >
                  Start my preapproval
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
                <p className="text-[#8da684] text-[11px] mt-3 font-medium">✓ 3 min, no credit impact</p>
              </div>

              {/* Right — Image placeholder card */}
              <div className="relative rounded-3xl overflow-hidden h-[320px] lg:h-[380px] bg-gradient-to-br from-[#0d3d24] to-[#062419] border border-white/5 shadow-2xl">
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)" }} />
                
                {/* City-themed decorative elements */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#0a3320] rounded-t-[50%] blur-sm opacity-60 z-[5]" />
                <div className="absolute bottom-0 left-1/4 w-[200px] h-[70px] bg-[#062419] rounded-t-[40%] blur-sm opacity-50 z-[5]" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
                  <span className="text-[#b89a5a] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">WELCOME TO</span>
                  <span className="text-white text-[28px] lg:text-[34px] font-playfair">{city}, Arizona</span>
                  <span className="text-[#8da684] text-[13px] mt-2">Your Home Loan Destination</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: "4.9/5", label: "Client Rating" },
                { value: "Thousands", label: "Homes Financed" },
                { value: "4-8 hrs", label: "Pre-Approval Time" },
                { value: "Competitive", label: "Local Rates" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl px-5 py-4 text-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block">{stat.value}</span>
                  <span className="text-[#8da684] text-[11px] uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — CITY DESCRIPTION
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
              LOCAL MORTGAGE EXPERTS
            </span>
            <h2 className="text-[#052316] text-[28px] lg:text-[38px] font-playfair font-normal leading-tight mb-6">
              {city}, AZ Mortgage Brokers – Local Home Loan Experts
            </h2>
            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.8] max-w-3xl mx-auto">
              {cityInfo.description} {city} is a dynamic real estate market offering a diverse array of housing choices. AZ Mortgage Brothers provides local expertise to help residents and newcomers navigate home financing with confidence, offering tailored mortgage solutions for every buyer.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — POPULAR COMMUNITIES
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                LOCAL KNOWLEDGE
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight mb-4">
                Popular Communities We Serve in {city}, AZ
              </h2>
              <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.7] max-w-2xl mx-auto">
                {city} is home to diverse master-planned communities — each with unique pricing, amenities, and lending considerations. We assist homebuyers throughout:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communities.map((community, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 lg:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    i === 0
                      ? "bg-[#052316] border-[#1a4a30] text-white shadow-lg"
                      : "bg-[#fcf9f3] border-[#e8e0d0]/60 hover:border-[#3fb364]/30"
                  }`}
                >
                  {i === 0 && (
                    <span className="text-[#3fb364] text-[9px] font-bold tracking-[0.2em] uppercase block mb-3">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className={`text-[17px] font-bold mb-2 ${i === 0 ? "text-white" : "text-[#052316]"}`}>
                    {community.title}
                  </h3>
                  <p className={`text-[13.5px] leading-[1.65] ${i === 0 ? "text-[#c8c8b8]" : "text-[#4e5b4e]"}`}>
                    {community.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — WHY CHOOSE AZ MORTGAGE BROTHERS
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left — Checklist */}
              <div>
                <h2 className="text-[#052316] text-[26px] lg:text-[34px] font-playfair font-normal leading-tight mb-8">
                  Why Choose AZ Mortgage Brothers
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    `Access to multiple mortgage lenders in ${city} AZ`,
                    `Competitive mortgage rates in ${city}`,
                    "Personalized loan strategies for buyers and homeowners",
                    "Clear communication from consultation through closing",
                    `Local experience in the ${city}, AZ real estate market`,
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3fb364]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3fb364" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[#1a3a1a] text-[14px] font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Rating card */}
              <div className="bg-[#052316] rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)" }} />
                <div className="relative z-10">
                  <span className="text-[#b89a5a] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">OUTSTANDING</span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-white text-[52px] font-bold leading-none">5</span>
                    <span className="text-[#8da684] text-[14px] font-medium">/5 Rating</span>
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3fb364" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-5">
                    <div className="bg-white/[0.06] rounded-xl px-4 py-3">
                      <p className="text-[#c8c8b8] text-[12.5px] leading-[1.6] italic">&ldquo;Professional, responsive, and extremely knowledgeable about ${city} market conditions. Highly recommend!&rdquo;</p>
                      <p className="text-[#8da684] text-[11px] mt-2 font-semibold">— Recent ${city} Homebuyer</p>
                    </div>
                    <div className="bg-white/[0.06] rounded-xl px-4 py-3">
                      <p className="text-[#c8c8b8] text-[12.5px] leading-[1.6] italic">&ldquo;We have financed hundreds of homes in ${city} and love this community. We know the local appraisers, brokers, and can tailor your experience.&rdquo;</p>
                      <p className="text-[#8da684] text-[11px] mt-2 font-semibold">— AZ Mortgage Brothers Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — MORTGAGE SOLUTIONS GRID
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight mb-4">
                Explore Our {city} Mortgage Solutions
              </h2>
              <p className="text-[#4e5b4e] text-[14.5px] lg:text-[15.5px] leading-[1.7] max-w-2xl mx-auto">
                Comprehensive mortgage programs designed specifically for {city}&apos;s unique real estate market and homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loanPrograms.map((program, i) => (
                <Link
                  key={i}
                  href={program.href}
                  className="bg-white border border-[#3fb364]/30 hover:border-[#3fb364] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative min-h-[190px] justify-between"
                >
                  {/* Top Green Accent Bar */}
                  <div className="w-12 h-1 bg-[#3fb364] rounded-full mx-auto mb-3" />

                  {/* Centered Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                    {program.icon}
                  </div>

                  {/* Centered Title */}
                  <span className="text-[#32353C] text-[15px] font-bold leading-snug px-1">
                    {program.title}
                  </span>

                  {/* Bottom Right Arrow */}
                  <div className="w-full flex justify-end mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3fb364"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — CTA BANNER
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#344454] relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border border-white/[0.04]" />
          <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full border border-white/[0.04]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Left — Broker Image Card */}
              <div className="md:col-span-5">
                <div className="relative w-full h-[260px] md:h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f2d1d]">
                  <img 
                    src="/Knoell.webp" 
                    alt="Eddie Knoell" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right — Text + CTAs */}
              <div className="md:col-span-7">
                <h2 className="text-white text-[26px] lg:text-[34px] font-playfair font-normal leading-tight mb-4">
                  Ready to Start Your {city} Home Loan Journey?
                </h2>
                <p className="text-[#c8c8b8] text-[14px] lg:text-[15px] leading-[1.7] mb-8">
                  Our {city} mortgage specialists are here to help you move forward with confidence. We compare lenders, review your financial profile, and recommend the best loan programs for your goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#get-pre-approved"
                    className="bg-[#2d8a2d] hover:bg-[#247024] text-white text-[14.5px] font-bold px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md"
                  >
                    Get Expert Mortgage Advice
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="border border-white text-white font-bold text-[14.5px] px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — TRUSTED GUIDANCE
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Left — Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[#052316] text-[26px] lg:text-[34px] font-playfair font-normal leading-tight mb-6">
                  Trusted Mortgage Guidance in {city}
                </h2>
                <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.8] mb-4">
                  When you work with AZ Mortgage Brothers, you receive trusted advice and dependable support throughout your mortgage journey.
                </p>
                <p className="text-[#4e5b4e] text-[14px] lg:text-[15px] leading-[1.8]">
                  Whether you&apos;re looking to buy your first home, refinancing, or exploring a reverse mortgage in {city}, our team guides you through the process with local advice and expert guidance.
                </p>
              </div>

              {/* Right — What You Can Expect card */}
              <div className="bg-[#3fb364] rounded-3xl p-8 lg:p-10 text-white shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)" }} />
                <div className="relative z-10">
                  <h3 className="text-white text-[20px] font-bold mb-6">What You Can Expect</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      "Lower loan comparisons across lenders",
                      "Honest discussions of rates and loan terms",
                      "Support from initial consultation through funding",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-[14px] font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 8 — FAQ
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full py-16 lg:py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-4">
                QUICK ANSWERS
              </span>
              <h2 className="text-[#052316] text-[28px] lg:text-[36px] font-playfair font-normal leading-tight">
                Frequently Asked Questions About {city} Home Loans
              </h2>
            </div>

            <div className="flex flex-col gap-0 border-t border-[#e8e0d0]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#e8e0d0]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                  >
                    <span className="text-[#052316] text-[15px] font-semibold pr-4 group-hover:text-[#3fb364] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-[#e8e0d0] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? "bg-[#3fb364] border-[#3fb364] rotate-45" : "bg-white group-hover:border-[#3fb364]/40"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? "white" : "#4e5b4e"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[300px] pb-5" : "max-h-0"}`}>
                    <p className="text-[#4e5b4e] text-[14px] leading-[1.7] pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 9 — BOTTOM CTA
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#3fb364] py-12 lg:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="text-white text-[22px] lg:text-[28px] font-playfair font-normal mb-3">
              Talk to a {city} Loan Expert
            </h2>
            <p className="text-white/80 text-[14px] mb-6">
              Start your pre-approval in about three minutes — no cost, no obligation.
            </p>
            <Link
              href="/#get-pre-approved"
              className="inline-flex items-center gap-2 bg-[#052316] hover:bg-[#0a3a24] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Get Pre-Approved
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
