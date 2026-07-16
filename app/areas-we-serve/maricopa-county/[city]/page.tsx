"use client";

import React, { useMemo } from "react";
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
  }
};

const loanPrograms = [
  {
    title: "First-Time Buyer",
    description: "Down-payment assistance and 3% down options for entry-level buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.685 0-5.3.232-7.843.682V21M12 9.75v6.5" />
      </svg>
    )
  },
  {
    title: "Conventional",
    description: "Competitive fixed and adjustable rates for move-up and repeat buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    title: "FHA",
    description: "Flexible credit and 3.5% down for first-time and rebuilding buyers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    )
  },
  {
    title: "Refinance",
    description: "Tap equity or lower your rate on your existing home.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    )
  }
];

export default function CityDetailPage() {
  const params = useParams();
  const slug = (params?.city as string) || "phoenix";
  
  const cityInfo = useMemo(() => {
    return citiesLookup[slug] || citiesLookup["phoenix"];
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <section className="bg-[#052316] text-white py-16 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-[#8da684] text-[12px] font-semibold mb-6">
                <Link href="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link>
                <span>&gt;</span>
                <Link href="/areas-we-serve/maricopa-county" className="hover:text-white transition-colors">Maricopa County</Link>
                <span>&gt;</span>
                <span className="text-[#3fb364]">{cityInfo.name}</span>
              </div>

              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                HOME LOANS IN {cityInfo.name.toUpperCase()}, AZ
              </span>
              
              <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] mb-6">
                Your {cityInfo.name} mortgage, handled locally.
              </h1>

              <p className="text-[#c8c8b8] text-[15px] lg:text-[16.5px] leading-[1.7] max-w-xl mb-8">
                {cityInfo.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#get-pre-approved"
                  className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                >
                  Get Pre-Approved &rarr;
                </Link>
                <Link
                  href="/contact-us"
                  className="border border-white/20 hover:border-white text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  Talk to a Broker
                </Link>
              </div>
            </div>

            {/* Right Column: Skyline Slot & Stats */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Skyline Card */}
              <div className="bg-[#08271b] border border-white/5 rounded-3xl h-[240px] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-lg group">
                {/* Diagonal stripes */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
                
                {/* Gradient block for silhouette look */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                
                {/* Mountain peak styling placeholder */}
                <div className="absolute bottom-0 w-64 h-16 bg-[#041a12] rounded-t-full blur-[2px] opacity-60 translate-y-6"></div>
                <div className="absolute bottom-0 w-80 h-20 bg-[#062419] rounded-t-full blur-[1px] opacity-40 translate-y-10 translate-x-12"></div>
                
                <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.25em] uppercase relative z-10 mb-2">
                  {cityInfo.skylineTitle}
                </span>
                <span className="text-[#8da684] text-[13px] relative z-10">
                  {cityInfo.skylineSubtitle}
                </span>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    {cityInfo.medianPrice}
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Median home price
                  </span>
                </div>
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    {cityInfo.daysOnMarket}
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Avg. days on market
                  </span>
                </div>
                <div className="bg-[#08271b] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center shadow-md">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold block mb-1">
                    24 days
                  </span>
                  <span className="text-[#8da684] text-[10px] uppercase tracking-wider leading-tight">
                    Our avg. close time
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Loan Programs */}
        <section className="py-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#052316] text-[28px] lg:text-[34px] font-playfair font-normal mb-4">
              Loan programs that fit {cityInfo.name} buyers
            </h2>
            <p className="text-[#4e5b4e] text-[14.5px] lg:text-[15.5px] max-w-xl mx-auto leading-[1.65]">
              From first homes to luxury properties, we match {cityInfo.name} buyers to the right program — and shop it across 30+ lenders so you don&apos;t overpay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanPrograms.map((program) => (
              <div key={program.title} className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center mb-4 flex-shrink-0">
                  {program.icon}
                </div>
                <h3 className="text-[#052316] text-[16px] font-bold mb-2">
                  {program.title}
                </h3>
                <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Neighborhoods & Local Broker Card */}
        <section className="pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Neighborhoods card */}
            <div className="md:col-span-7 bg-[#faf7f0] border border-[#e8e0d0]/60 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[#052316] text-[18px] font-bold mb-5">
                  Neighborhoods we serve in {cityInfo.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cityInfo.neighborhoods.map((pill) => (
                    <span
                      key={pill}
                      className="bg-white border border-[#e8e0d0] text-[#1a3a1a] text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Broker Card */}
            <div className="md:col-span-5 bg-[#052316] border border-white/5 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
              
              <div className="relative z-10">
                <span className="text-[#b89a5a] text-[10px] font-bold tracking-widest uppercase block mb-3">
                  LOCAL, NOT A CALL CENTER
                </span>
                <p className="text-[#c8c8b8] text-[13.5px] leading-[1.65] mb-8">
                  Three generations in local real estate means we know local appraisers, timelines, and neighborhoods first-hand — and you talk to the same broker start to finish.
                </p>
              </div>

              <div className="flex items-center gap-3 relative z-10 border-t border-white/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#3fb364]/20 border border-[#3fb364]/40 flex items-center justify-center text-[#3fb364] font-bold text-[13px]">
                  EK
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-[13px] font-bold">Eddie & Thomas Knoell</span>
                  <span className="text-[#8da684] text-[11px]">Your local loan officers</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Bottom Banner */}
        <section className="bg-[#052316] text-white py-16 text-center border-t border-white/10">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="text-white text-[26px] lg:text-[32px] font-playfair font-normal leading-tight mb-3">
              Buying or refinancing in {cityInfo.name}?
            </h2>
            <p className="text-[#c8c8b8] text-[14px] leading-[1.6] mb-8">
              Start your pre-approval in about three minutes — no cost, no obligation.
            </p>
            <Link
              href="/#get-pre-approved"
              className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3.5 rounded-full inline-block transition-all shadow-md shadow-[#3fb364]/10"
            >
              Get Pre-Approved &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
