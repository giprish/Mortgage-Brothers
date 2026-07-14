"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Detailed Counties list with region, seat, cities, and path routes
const countiesData = [
  {
    id: "maricopa",
    name: "Maricopa County",
    region: "GREATER PHOENIX",
    seat: "Phoenix",
    cityCount: 28,
    route: "/areas-we-serve/maricopa-county",
    cities: [
      "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Tempe", "Peoria",
      "Surprise", "Goodyear", "Avondale", "Buckeye", "Queen Creek", "Fountain Hills",
      "Paradise Valley", "Cave Creek", "Carefree", "Anthem", "Sun City", "Sun City West",
      "Litchfield Park", "Wickenburg", "Apache Junction", "Guadalupe", "El Mirage",
      "Tolleson", "Youngtown", "Gila Bend"
    ]
  },
  {
    id: "pima",
    name: "Pima County",
    region: "SOUTHERN ARIZONA",
    seat: "Tucson",
    cityCount: 8,
    route: "#pima",
    cities: ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley", "Catalina Foothills", "South Tucson"]
  },
  {
    id: "pinal",
    name: "Pinal County",
    region: "GREATER PHOENIX",
    seat: "Florence",
    cityCount: 10,
    route: "#pinal",
    cities: ["Casa Grande", "Maricopa", "San Tan Valley", "Florence", "Coolidge", "Eloy", "Apache Junction", "Superior", "Kearny", "Mammoth"]
  },
  {
    id: "yavapai",
    name: "Yavapai County",
    region: "NORTHERN ARIZONA",
    seat: "Prescott",
    cityCount: 9,
    route: "#yavapai",
    cities: ["Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde", "Dewey-Humboldt", "Clarkdale", "Jerome"]
  },
  {
    id: "coconino",
    name: "Coconino County",
    region: "NORTHERN ARIZONA",
    seat: "Flagstaff",
    cityCount: 6,
    route: "#coconino",
    cities: ["Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan"]
  },
  {
    id: "navajo",
    name: "Navajo County",
    region: "NORTHERN ARIZONA",
    seat: "Holbrook",
    cityCount: 6,
    route: "#navajo",
    cities: ["Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow"]
  },
  {
    id: "apache",
    name: "Apache County",
    region: "NORTHERN ARIZONA",
    seat: "St. Johns",
    cityCount: 5,
    route: "#apache",
    cities: ["St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"]
  },
  {
    id: "gila",
    name: "Gila County",
    region: "NORTHERN ARIZONA",
    seat: "Globe",
    cityCount: 5,
    route: "#gila",
    cities: ["Payson", "Globe", "Miami", "Star Valley", "Hayden"]
  },
  {
    id: "cochise",
    name: "Cochise County",
    region: "SOUTHERN ARIZONA",
    seat: "Bisbee",
    cityCount: 7,
    route: "#cochise",
    cities: ["Sierra Vista", "Douglas", "Bisbee", "Benson", "Willcox", "Tombstone", "Huachuca City"]
  },
  {
    id: "graham",
    name: "Graham County",
    region: "SOUTHERN ARIZONA",
    seat: "Safford",
    cityCount: 3,
    route: "#graham",
    cities: ["Safford", "Thatcher", "Pima"]
  },
  {
    id: "greenlee",
    name: "Greenlee County",
    region: "SOUTHERN ARIZONA",
    seat: "Clifton",
    cityCount: 3,
    route: "#greenlee",
    cities: ["Clifton", "Duncan", "Morenci"]
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz County",
    region: "SOUTHERN ARIZONA",
    seat: "Nogales",
    cityCount: 4,
    route: "#santa-cruz",
    cities: ["Nogales", "Rio Rico", "Tubac", "Patagonia"]
  },
  {
    id: "mohave",
    name: "Mohave County",
    region: "WESTERN ARIZONA",
    seat: "Kingman",
    cityCount: 6,
    route: "#mohave",
    cities: ["Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley", "Colorado City"]
  },
  {
    id: "la-paaz",
    name: "La Paz County",
    region: "WESTERN ARIZONA",
    seat: "Parker",
    cityCount: 4,
    route: "#la-paaz",
    cities: ["Parker", "Quartzsite", "Salome", "Bouse"]
  },
  {
    id: "yuma",
    name: "Yuma County",
    region: "WESTERN ARIZONA",
    seat: "Yuma",
    cityCount: 4,
    route: "#yuma",
    cities: ["Yuma", "San Luis", "Somerton", "Wellton"]
  }
];

export default function ArizonaDirectory2Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCountyMap, setHoveredCountyMap] = useState<string | null>(null);
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  // Filter counties and cities based on search query
  const filteredCounties = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return countiesData;

    return countiesData.map((county) => {
      // Check if county name matches
      const matchesCounty = county.name.toLowerCase().includes(query) || county.region.toLowerCase().includes(query);
      
      // Filter matching cities inside county
      const filteredCities = county.cities.filter((city) =>
        city.toLowerCase().includes(query)
      );

      if (matchesCounty || filteredCities.length > 0) {
        return {
          ...county,
          cities: matchesCounty ? county.cities : filteredCities,
          cityCount: matchesCounty ? county.cityCount : filteredCities.length
        };
      }
      return null;
    }).filter(Boolean) as typeof countiesData;
  }, [searchQuery]);

  // Handle map click or search click to scroll down to county card
  const handleScrollToCounty = (countyId: string) => {
    setHighlightedCard(countyId);
    setTimeout(() => setHighlightedCard(null), 3000); // Pulse highlight card border

    const element = document.getElementById(`county-card-${countyId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">

        {/* Widescreen split-style Hero Banner Section */}
        <section className="w-full bg-[#052316] py-16 lg:py-20 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content & Search */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-brand-green-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                AREAS WE SERVE
              </span>
              <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
                Local expertise in every corner of Arizona.
              </h1>
              <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] mb-8 max-w-xl">
                From downtown Phoenix to the far edges of the state — 15 counties, 108 cities and towns, one local team.
              </p>

              {/* Dynamic search query input */}
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search your city or county..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#e8e0d0]/10 rounded-2xl px-5 py-4 pl-12 text-[15px] text-[#1a3a1a] placeholder:text-[#8a9a7a]/60 shadow-lg focus:outline-none focus:border-brand-green-accent/50 focus:ring-1 focus:ring-brand-green-accent/20 transition-all"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a9a7a"
                  strokeWidth="2.5"
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>

            {/* Right Column Interactive Vector Map */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#0b2f1f] border border-white/5 rounded-3xl p-6 w-full max-w-[340px] flex flex-col items-center shadow-2xl relative">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-1 text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="3 6 3 22 9 18 15 22 21 18 21 2 15 6 9 2 3 6" />
                    </svg>
                    <span>ARIZONA - 15 COUNTIES</span>
                  </div>
                  <span className="text-[11px] text-white/50 block font-medium">
                    {hoveredCountyMap ? `Hovered: ${hoveredCountyMap}` : "interactive map • click a county to explore"}
                  </span>
                </div>

                {/* Micro SVG Interactive Arizona Map */}
                <svg viewBox="0 0 400 500" className="w-full max-h-[250px] relative drop-shadow-lg">
                  {/* Mohave */}
                  <polygon 
                    points="20,50 110,50 110,130 80,130 80,240 20,200" 
                    fill={hoveredCountyMap === "Mohave County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Mohave County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("mohave")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Coconino */}
                  <polygon 
                    points="110,50 260,50 260,190 200,190 200,240 110,240 110,130" 
                    fill={hoveredCountyMap === "Coconino County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Coconino County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("coconino")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Navajo */}
                  <polygon 
                    points="260,50 320,50 320,240 260,240" 
                    fill={hoveredCountyMap === "Navajo County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Navajo County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("navajo")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Apache */}
                  <polygon 
                    points="320,50 380,50 380,290 320,290" 
                    fill={hoveredCountyMap === "Apache County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Apache County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("apache")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Yavapai */}
                  <polygon 
                    points="110,240 200,240 200,290 140,290 140,310 80,310 80,240" 
                    fill={hoveredCountyMap === "Yavapai County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Yavapai County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("yavapai")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* La Paz */}
                  <polygon 
                    points="20,200 80,240 80,310 20,310" 
                    fill={hoveredCountyMap === "La Paz County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("La Paz County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("la-paaz")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Gila */}
                  <polygon 
                    points="260,240 320,240 320,290 350,290 350,340 240,340 240,290 260,290" 
                    fill={hoveredCountyMap === "Gila County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Gila County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("gila")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Maricopa */}
                  <polygon 
                    points="80,310 140,310 140,290 200,290 200,340 240,340 240,390 110,390 110,360 80,360" 
                    fill={hoveredCountyMap === "Maricopa County" ? "#3fb364" : "#245e43"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Maricopa County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("maricopa")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Yuma */}
                  <polygon 
                    points="20,310 80,360 110,360 110,390 80,450 20,450" 
                    fill={hoveredCountyMap === "Yuma County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Yuma County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("yuma")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Pinal */}
                  <polygon 
                    points="200,340 270,340 270,410 200,410" 
                    fill={hoveredCountyMap === "Pinal County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Pinal County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("pinal")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Graham */}
                  <polygon 
                    points="270,340 350,340 350,290 380,290 380,410 320,410 320,390 270,390" 
                    fill={hoveredCountyMap === "Graham County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Graham County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("graham")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Greenlee */}
                  <polygon 
                    points="350,340 380,340 380,410 350,410" 
                    fill={hoveredCountyMap === "Greenlee County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Greenlee County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("greenlee")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Pima */}
                  <polygon 
                    points="110,390 200,390 200,410 270,410 270,470 140,470" 
                    fill={hoveredCountyMap === "Pima County" ? "#3fb364" : "#12422c"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Pima County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("pima")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Cochise */}
                  <polygon 
                    points="270,410 380,410 380,470 270,470" 
                    fill={hoveredCountyMap === "Cochise County" ? "#3fb364" : "#1a4e36"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Cochise County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("cochise")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                  {/* Santa Cruz */}
                  <polygon 
                    points="200,470 270,470 270,490 200,490" 
                    fill={hoveredCountyMap === "Santa Cruz County" ? "#3fb364" : "#245e43"}
                    stroke="#0b2f1f" strokeWidth="2.5" 
                    onMouseEnter={() => setHoveredCountyMap("Santa Cruz County")}
                    onMouseLeave={() => setHoveredCountyMap(null)}
                    onClick={() => handleScrollToCounty("santa-cruz")}
                    className="cursor-pointer transition-colors duration-200"
                  />
                </svg>
              </div>
            </div>

          </div>
        </section>

        {/* Metro Cards Grid Section */}
        <section className="w-full py-16 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                OUR BIGGEST MARKETS
              </p>
              <h2 className="text-brand-green-deep text-[28px] lg:text-[38px] font-playfair font-normal leading-tight">
                Featured metros
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Maricopa County Split Card */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 shadow-md overflow-hidden flex flex-row items-stretch hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl hover:border-brand-green-accent/30 active:scale-[0.99] transition-all duration-300 min-h-[180px]">
                {/* Left narrow band */}
                <div className="w-[100px] flex-shrink-0 bg-[#052316] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f1f] to-[#052316] opacity-90"></div>
                  {/* Diagonal green-strip decoration */}
                  <div className="absolute inset-0 opacity-15 rotate-12 scale-150" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3fb364 0px, #3fb364 10px, transparent 10px, transparent 20px)" }}></div>
                  <span className="text-[#c8c8b8] text-[9px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap block origin-center">
                    PHOENIX SKYLINE
                  </span>
                </div>
                {/* Right content details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-brand-green-deep text-[18px] font-bold tracking-tight mb-1">
                      Maricopa County
                    </h3>
                    <div className="flex items-center gap-1.5 text-brand-green-accent text-[11.5px] font-semibold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      </svg>
                      <span>Phoenix • 28 cities</span>
                    </div>
                    <p className="text-brand-text-muted text-[13px] leading-relaxed mb-4">
                      Arizona&apos;s largest market — Phoenix, the East Valley, and the fast-growing West Valley.
                    </p>
                  </div>
                  <Link
                    href="/areas-we-serve/maricopa-county"
                    className="text-brand-green-accent hover:text-[#2d5a2d] text-[13px] font-bold flex items-center gap-1 transition-colors group mt-2"
                  >
                    Explore county
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Pima County Split Card */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 shadow-md overflow-hidden flex flex-row items-stretch hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl hover:border-brand-green-accent/30 active:scale-[0.99] transition-all duration-300 min-h-[180px]">
                {/* Left narrow band */}
                <div className="w-[100px] flex-shrink-0 bg-[#052316] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f1f] to-[#052316] opacity-90"></div>
                  {/* Diagonal green-strip decoration */}
                  <div className="absolute inset-0 opacity-15 rotate-12 scale-150" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3fb364 0px, #3fb364 10px, transparent 10px, transparent 20px)" }}></div>
                  <span className="text-[#c8c8b8] text-[9px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap block origin-center">
                    TUCSON MOUNTAINS
                  </span>
                </div>
                {/* Right content details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-brand-green-deep text-[18px] font-bold tracking-tight mb-1">
                      Pima County
                    </h3>
                    <div className="flex items-center gap-1.5 text-brand-green-accent text-[11.5px] font-semibold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      </svg>
                      <span>Tucson • 8 cities</span>
                    </div>
                    <p className="text-brand-text-muted text-[13px] leading-relaxed mb-4">
                      Southern Arizona&apos;s hub, centered on Tucson and the communities around it.
                    </p>
                  </div>
                  <button
                    onClick={() => handleScrollToCounty("pima")}
                    className="text-brand-green-accent hover:text-[#2d5a2d] text-[13px] font-bold flex items-center gap-1 transition-colors group mt-2 text-left cursor-pointer"
                  >
                    Explore county
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 15 Counties Grid Cards Section */}
        <section className="w-full py-16 px-6 lg:px-10 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 pb-4 border-b border-[#e8e0d0]/60 gap-4">
              <h2 className="text-brand-green-deep text-[26px] lg:text-[34px] font-playfair font-normal leading-tight">
                Browse all counties
              </h2>
              <span className="text-[#a89a70] text-[12.5px] font-bold uppercase tracking-wider">
                15 of 15 counties
              </span>
            </div>

            {/* Counties 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCounties.map((county) => {
                const isSelected = highlightedCard === county.id;
                return (
                  <div
                    key={county.id}
                    id={`county-card-${county.id}`}
                    className={`bg-[#fcf9f3]/60 rounded-2xl p-6 border shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.015] hover:shadow-lg hover:border-brand-green-accent/40 hover:bg-white active:scale-[0.99] transition-all duration-300 min-h-[280px] ${
                      isSelected ? "border-brand-green-accent ring-2 ring-brand-green-accent/20 bg-white" : "border-[#e8e0d0]/50"
                    }`}
                  >
                    <div>
                      {/* Region Tag */}
                      <span className="text-brand-green-accent text-[9.5px] font-bold tracking-wider uppercase block mb-1">
                        {county.region}
                      </span>
                      {/* County title & seat */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-green-deep">
                          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        </svg>
                        <h3 className="text-brand-green-deep text-[16px] font-bold tracking-tight">
                          {county.name}
                        </h3>
                      </div>
                      <span className="text-brand-text-muted text-[11px] font-medium block mb-4">
                        Seat of {county.seat}
                      </span>

                      {/* City pills list */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {county.cities.map((city) => (
                          <span
                            key={city}
                            className="bg-white border border-[#e8dcc6]/40 text-[#1a3a1a] text-[11.5px] font-semibold px-2.5 py-1 rounded-lg"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer detail */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#e8e0d0]/30 mt-auto">
                      <span className="text-brand-text-muted text-[11.5px] font-bold">
                        {county.cityCount} cities
                      </span>
                      {county.id === "maricopa" ? (
                        <Link
                          href={county.route}
                          className="text-brand-green-accent hover:text-[#2d5a2d] text-[12.5px] font-bold flex items-center gap-1 transition-colors"
                        >
                          View county
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-brand-green-accent/60 text-[12.5px] font-bold flex items-center gap-1">
                          View county
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Forest Green License CTA Banner */}
      <section className="w-full bg-[#052316] py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full border border-white/5"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Badge Tag */}
          <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            DON&apos;T SEE YOUR TOWN?
          </p>

          {/* Title */}
          <h2 className="text-white text-[28px] lg:text-[40px] font-playfair font-normal leading-tight mb-4">
            We&apos;re licensed across all of Arizona.
          </h2>

          {/* Subtitle */}
          <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
            Wherever you&apos;re buying or refinancing in the state, chances are we already know the area.
          </p>

          {/* CTA Link Button */}
          <Link
            href="/#get-pre-approved"
            className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#3fb364]/20 group"
          >
            Get Pre-Approved
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* PreApprovedForm is commented out as requested */}
      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}
