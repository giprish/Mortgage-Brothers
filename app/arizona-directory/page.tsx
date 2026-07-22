"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// Detailed Counties with Sub-regions, Seats, and Cities list
const countiesList = [
  {
    id: "maricopa",
    name: "Maricopa County",
    region: "Greater Phoenix",
    seat: "Phoenix",
    cityCount: 28,
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
    region: "Southern Arizona",
    seat: "Tucson",
    cityCount: 8,
    cities: ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley", "Catalina Foothills", "South Tucson"]
  },
  {
    id: "pinal",
    name: "Pinal County",
    region: "Greater Phoenix",
    seat: "Florence",
    cityCount: 10,
    cities: ["Casa Grande", "Maricopa", "San Tan Valley", "Florence", "Coolidge", "Eloy", "Apache Junction", "Superior", "Kearny", "Mammoth"]
  },
  {
    id: "yavapai",
    name: "Yavapai County",
    region: "Northern Arizona",
    seat: "Prescott",
    cityCount: 9,
    cities: ["Prescott", "Prescott Valley", "Sedona", "Cottonwood", "Chino Valley", "Camp Verde", "Dewey-Humboldt", "Clarkdale", "Jerome"]
  },
  {
    id: "coconino",
    name: "Coconino County",
    region: "Northern Arizona",
    seat: "Flagstaff",
    cityCount: 6,
    cities: ["Flagstaff", "Sedona", "Williams", "Page", "Fredonia", "Tusayan"]
  },
  {
    id: "navajo",
    name: "Navajo County",
    region: "Northern Arizona",
    seat: "Holbrook",
    cityCount: 6,
    cities: ["Show Low", "Pinetop-Lakeside", "Holbrook", "Taylor", "Snowflake", "Winslow"]
  },
  {
    id: "apache",
    name: "Apache County",
    region: "Northern Arizona",
    seat: "St. Johns",
    cityCount: 5,
    cities: ["St. Johns", "Eagar", "Springerville", "Chinle", "Window Rock"]
  },
  {
    id: "gila",
    name: "Gila County",
    region: "Northern Arizona",
    seat: "Globe",
    cityCount: 5,
    cities: ["Payson", "Globe", "Miami", "Star Valley", "Hayden"]
  },
  {
    id: "cochise",
    name: "Cochise County",
    region: "Southern Arizona",
    seat: "Bisbee",
    cityCount: 7,
    cities: ["Sierra Vista", "Douglas", "Bisbee", "Benson", "Willcox", "Tombstone", "Huachuca City"]
  },
  {
    id: "graham",
    name: "Graham County",
    region: "Southern Arizona",
    seat: "Safford",
    cityCount: 3,
    cities: ["Safford", "Thatcher", "Pima"]
  },
  {
    id: "greenlee",
    name: "Greenlee County",
    region: "Southern Arizona",
    seat: "Clifton",
    cityCount: 3,
    cities: ["Clifton", "Duncan", "Morenci"]
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz County",
    region: "Southern Arizona",
    seat: "Nogales",
    cityCount: 4,
    cities: ["Nogales", "Rio Rico", "Tubac", "Patagonia"]
  },
  {
    id: "mohave",
    name: "Mohave County",
    region: "Western Arizona",
    seat: "Kingman",
    cityCount: 6,
    cities: ["Lake Havasu City", "Kingman", "Bullhead City", "Fort Mohave", "Golden Valley", "Colorado City"]
  },
  {
    id: "la-paaz",
    name: "La Paz County",
    region: "Western Arizona",
    seat: "Parker",
    cityCount: 4,
    cities: ["Parker", "Quartzsite", "Salome", "Bouse"]
  },
  {
    id: "yuma",
    name: "Yuma County",
    region: "Western Arizona",
    seat: "Yuma",
    cityCount: 4,
    cities: ["Yuma", "San Luis", "Somerton", "Wellton"]
  }
];

export default function AreasWeServeDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);
  const [highlightedCity, setHighlightedCity] = useState<string | null>(null);
  const [hoveredMapCounty, setHoveredMapCounty] = useState<string | null>(null);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Close search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestion list based on query
  const suggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const matches: { type: "city" | "county"; name: string; countyName: string; countyId: string }[] = [];

    // Search counties
    countiesList.forEach((county) => {
      if (county.name.toLowerCase().includes(query)) {
        matches.push({ type: "county", name: county.name, countyName: county.name, countyId: county.id });
      }
      // Search cities
      county.cities.forEach((city) => {
        if (city.toLowerCase().includes(query)) {
          matches.push({ type: "city", name: city, countyName: county.name, countyId: county.id });
        }
      });
    });

    return matches.slice(0, 8); // Limit to 8 suggestions
  }, [searchQuery]);

  // Action to navigate, expand county, and flash the city
  const handleSelectSuggestion = (countyId: string, cityName?: string) => {
    setExpandedCounty(countyId);
    setShowSuggestions(false);
    setSearchQuery("");

    if (cityName) {
      setHighlightedCity(cityName);
      setTimeout(() => setHighlightedCity(null), 3000); // Highlight flash for 3s
    }

    // Scroll smoothly to accordion block
    setTimeout(() => {
      const element = document.getElementById(`county-accordion-${countyId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Toggle single county accordion
  const toggleAccordion = (countyId: string) => {
    setExpandedCounty(expandedCounty === countyId ? null : countyId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        
        {/* Widescreen Dark Green Hero Header Section */}
        <section className="w-full bg-[#052316] py-16 lg:py-24 text-center relative overflow-hidden">
          {/* Subtle Vector Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full border border-brand-green-accent/20"></div>
            <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full border border-brand-green-accent/15"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Header Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
              AREAS WE SERVE
            </p>

            {/* Main Title */}
            <h1 className="text-white text-[32px] lg:text-[52px] font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Find your Arizona home-loan expert.
            </h1>

            {/* Subtitle */}
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              Type your city or county and jump straight to it — we&apos;re licensed across all 15 Arizona counties.
            </p>

            {/* Interactive Search Bar Panel */}
            <div ref={searchContainerRef} className="relative w-full max-w-xl mx-auto z-30">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your city or county — Gilbert, Flagstaff, Pima..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full bg-white border border-[#e8e0d0] rounded-2xl px-5 py-4 pl-12 text-[15.5px] text-[#1a3a1a] placeholder:text-[#8a9a7a]/60 shadow-lg focus:outline-none focus:border-brand-green-accent/50 focus:ring-1 focus:ring-brand-green-accent/20 transition-all"
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

              {/* Dynamic Suggestions Dropdown List */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-[#e8e0d0] rounded-2xl shadow-xl overflow-hidden text-left z-50">
                  <div className="py-2">
                    {suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSuggestion(item.countyId, item.type === "city" ? item.name : undefined)}
                        className="w-full px-5 py-3 hover:bg-[#fcf9f3] text-left transition-colors flex items-center justify-between"
                      >
                        <div>
                          <span className="text-[14.5px] font-semibold text-brand-green-deep">
                            {item.name}
                          </span>
                          {item.type === "city" && (
                            <span className="text-[#a89a70] text-[11px] ml-2 font-bold uppercase tracking-wider">
                              ({item.countyName})
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a9a7a] bg-[#f5f0e8] px-2 py-0.5 rounded-md">
                          {item.type}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Serviced Summary strip */}
            <p className="text-[#8a9a7a] text-[12.5px] font-semibold mt-4">
              15 counties - 108 cities & towns served
            </p>
          </div>
        </section>

        {/* OUR BIGGEST MARKETS Cards Section */}
        <section className="w-full py-16 px-6 lg:px-10 bg-[#fcf9f3]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                OUR BIGGEST MARKETS
              </p>
              <h2 className="text-brand-green-deep text-[28px] lg:text-[38px] font-playfair font-normal leading-tight">
                Where most Arizona buyers find us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Maricopa County Card */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-lg overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.015] hover:shadow-2xl transition-all duration-300">
                {/* Top striped banner */}
                <div className="h-44 bg-[#052316] relative flex flex-col justify-between p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f1f] to-[#052316] opacity-90"></div>
                  {/* Diagonal green-strip decoration */}
                  <div className="absolute inset-0 opacity-15 scale-110" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3fb364 0px, #3fb364 10px, transparent 10px, transparent 20px)" }}></div>
                  
                  <span className="text-[#c8c8b8] text-[9.5px] font-bold uppercase tracking-wider block relative z-10">
                    PHOENIX SKYLINE - DROP PHOTO
                  </span>
                  
                  <h3 className="text-white text-[32px] font-playfair font-normal relative z-10">
                    Maricopa County
                  </h3>
                </div>

                {/* Content details */}
                <div className="p-6 flex-grow flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#3fb364] text-[12.5px] font-semibold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>County seat • Phoenix • 28 cities served</span>
                    </div>
                    <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed mb-4">
                      Arizona&apos;s largest market — Phoenix, the East Valley, and the fast-growing West Valley.
                    </p>

                    {/* City Pills Grid */}
                    <div className="flex flex-wrap gap-2">
                      {["Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Glendale", "Tempe", "Peoria"].map((city) => (
                        <span key={city} className="bg-[#f5f0e8] text-[#1a3a1a] text-[12px] font-semibold px-3 py-1.5 rounded-lg border border-[#e8dcc6]/30">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/service-areas/maricopa-county-az/"
                    className="text-brand-green-accent hover:text-[#2d5a2d] text-[13.5px] font-bold flex items-center gap-1 transition-colors group mt-2"
                  >
                    Explore Maricopa County
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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

              {/* Pima County Card */}
              <div className="bg-white rounded-3xl border border-[#e8e0d0]/60 shadow-lg overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.015] hover:shadow-2xl transition-all duration-300">
                {/* Top striped banner */}
                <div className="h-44 bg-[#052316] relative flex flex-col justify-between p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b2f1f] to-[#052316] opacity-90"></div>
                  {/* Diagonal green-strip decoration */}
                  <div className="absolute inset-0 opacity-15 scale-110" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3fb364 0px, #3fb364 10px, transparent 10px, transparent 20px)" }}></div>
                  
                  <span className="text-[#c8c8b8] text-[9.5px] font-bold uppercase tracking-wider block relative z-10">
                    TUCSON / SANTA CATALINAS - DROP PHOTO
                  </span>
                  
                  <h3 className="text-white text-[32px] font-playfair font-normal relative z-10">
                    Pima County
                  </h3>
                </div>

                {/* Content details */}
                <div className="p-6 flex-grow flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#3fb364] text-[12.5px] font-semibold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>County seat • Tucson • 8 cities served</span>
                    </div>
                    <p className="text-[#4e5b4e] text-[13.5px] leading-relaxed mb-4">
                      Southern Arizona&apos;s hub, centered on Tucson and the communities around it.
                    </p>

                    {/* City Pills Grid */}
                    <div className="flex flex-wrap gap-2">
                      {["Tucson", "Oro Valley", "Marana", "Sahuarita", "Vail", "Green Valley", "Catalina Foothills", "South Tucson"].map((city) => (
                        <span key={city} className="bg-[#f5f0e8] text-[#1a3a1a] text-[12px] font-semibold px-3 py-1.5 rounded-lg border border-[#e8dcc6]/30">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectSuggestion("pima")}
                    className="text-brand-green-accent hover:text-[#2d5a2d] text-[13.5px] font-bold flex items-center gap-1 transition-colors group mt-2 text-left cursor-pointer"
                  >
                    Explore Pima County
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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

        {/* Interactive Map & Regional Summary Section */}
        <section className="w-full py-16 px-6 lg:px-10 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Interactive SVG Map */}
            <div className="bg-[#fcf9f3] border border-[#e8e0d0]/60 rounded-3xl p-6 lg:p-8 flex flex-col items-center relative shadow-sm min-h-[460px]">
              
              {/* Map Title / Legend */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1.5 text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                    <line x1="8" y1="2" x2="8" y2="18" />
                    <line x1="16" y1="6" x2="16" y2="22" />
                  </svg>
                  <span>ARIZONA - 15 COUNTIES</span>
                </div>
                <p className="text-brand-text-muted text-[12px] italic">
                  {hoveredMapCounty 
                    ? `Active: ${hoveredMapCounty} (Click to expand county)`
                    : "Interactive map — hover a county to highlight, click to jump"
                  }
                </p>
              </div>

              {/* Styled Vector SVG Map of Arizona */}
              <svg 
                viewBox="0 0 400 500" 
                className="w-full max-w-[340px] drop-shadow-md relative"
              >
                {/* Mohave */}
                <polygon 
                  points="20,50 110,50 110,130 80,130 80,240 20,200" 
                  fill={hoveredMapCounty === "Mohave County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Mohave County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("mohave")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Coconino */}
                <polygon 
                  points="110,50 260,50 260,190 200,190 200,240 110,240 110,130" 
                  fill={hoveredMapCounty === "Coconino County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Coconino County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("coconino")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Navajo */}
                <polygon 
                  points="260,50 320,50 320,240 260,240" 
                  fill={hoveredMapCounty === "Navajo County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Navajo County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("navajo")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Apache */}
                <polygon 
                  points="320,50 380,50 380,290 320,290" 
                  fill={hoveredMapCounty === "Apache County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Apache County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("apache")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Yavapai */}
                <polygon 
                  points="110,240 200,240 200,290 140,290 140,310 80,310 80,240" 
                  fill={hoveredMapCounty === "Yavapai County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Yavapai County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("yavapai")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* La Paz */}
                <polygon 
                  points="20,200 80,240 80,310 20,310" 
                  fill={hoveredMapCounty === "La Paz County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("La Paz County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("la-paaz")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Gila */}
                <polygon 
                  points="260,240 320,240 320,290 350,290 350,340 240,340 240,290 260,290" 
                  fill={hoveredMapCounty === "Gila County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Gila County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("gila")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Maricopa */}
                <polygon 
                  points="80,310 140,310 140,290 200,290 200,340 240,340 240,390 110,390 110,360 80,360" 
                  fill={hoveredMapCounty === "Maricopa County" ? "#3fb364" : "#c2dcb2"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Maricopa County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("maricopa")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Yuma */}
                <polygon 
                  points="20,310 80,360 110,360 110,390 80,450 20,450" 
                  fill={hoveredMapCounty === "Yuma County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Yuma County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("yuma")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Pinal */}
                <polygon 
                  points="200,340 270,340 270,410 200,410" 
                  fill={hoveredMapCounty === "Pinal County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Pinal County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("pinal")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Graham */}
                <polygon 
                  points="270,340 350,340 350,290 380,290 380,410 320,410 320,390 270,390" 
                  fill={hoveredMapCounty === "Graham County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Graham County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("graham")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Greenlee */}
                <polygon 
                  points="350,340 380,340 380,410 350,410" 
                  fill={hoveredMapCounty === "Greenlee County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Greenlee County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("greenlee")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Pima */}
                <polygon 
                  points="110,390 200,390 200,410 270,410 270,470 140,470" 
                  fill={hoveredMapCounty === "Pima County" ? "#3fb364" : "#e8e0d0"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Pima County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("pima")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Cochise */}
                <polygon 
                  points="270,410 380,410 380,470 270,470" 
                  fill={hoveredMapCounty === "Cochise County" ? "#3fb364" : "#e2edd8"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Cochise County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("cochise")}
                  className="cursor-pointer transition-colors duration-200" 
                />
                
                {/* Santa Cruz */}
                <polygon 
                  points="200,470 270,470 270,490 200,490" 
                  fill={hoveredMapCounty === "Santa Cruz County" ? "#3fb364" : "#c2dcb2"}
                  stroke="#fcf9f3" 
                  strokeWidth="2.5" 
                  onMouseEnter={() => setHoveredMapCounty("Santa Cruz County")}
                  onMouseLeave={() => setHoveredMapCounty(null)}
                  onClick={() => handleSelectSuggestion("santa-cruz")}
                  className="cursor-pointer transition-colors duration-200" 
                />
              </svg>
            </div>

            {/* Right Regional Summary List */}
            <div className="bg-[#052316] rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl min-h-[460px] relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full border border-white/5"></div>
              </div>

              <div className="relative z-10">
                <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-6">
                  SERVING ALL OF ARIZONA
                </p>

                {/* Regional list mapping */}
                <div className="flex flex-col gap-1 border-t border-white/10 mb-8">
                  {[
                    { region: "Greater Phoenix", count: "2 counties", bg: "bg-[#052316]" },
                    { region: "Northern Arizona", count: "5 counties", bg: "bg-[#052316]" },
                    { region: "Southern Arizona", count: "5 counties", bg: "bg-[#052316]" },
                    { region: "Western Arizona", count: "3 counties", bg: "bg-[#052316]" }
                  ].map((row) => (
                    <div 
                      key={row.region}
                      className="flex items-center justify-between py-4 border-b border-white/10 text-[15px]"
                    >
                      <span className="font-bold text-white tracking-tight">{row.region}</span>
                      <span className="text-[#c8c8b8] text-[13px] font-semibold">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag text */}
              <p className="text-[#8a9a7a] text-[13px] relative z-10 leading-relaxed font-semibold">
                Don&apos;t see your town? We&apos;re licensed statewide — just reach out.
              </p>
            </div>

          </div>
        </section>

        {/* Dynamic Expandable County & Cities List */}
        <section className="w-full py-16 px-6 lg:px-10 bg-[#fcf9f3] border-t border-[#e8e0d0]/40">
          <div className="max-w-4xl mx-auto">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 pb-4 border-b border-[#e8e0d0]/60 gap-4">
              <h2 className="text-brand-green-deep text-[24px] lg:text-[30px] font-playfair font-normal">
                All counties & cities
              </h2>
              <span className="text-[#a89a70] text-[12px] font-bold uppercase tracking-wider">
                15 of 15 counties
              </span>
            </div>

            {/* Accordions Container */}
            <div className="flex flex-col gap-3">
              {countiesList.map((county) => {
                const isOpen = expandedCounty === county.id;
                return (
                  <div
                    key={county.id}
                    id={`county-accordion-${county.id}`}
                    className="bg-white rounded-2xl border border-[#e8e0d0]/60 overflow-hidden shadow-sm transition-all duration-200"
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleAccordion(county.id)}
                      className="w-full flex items-center justify-between p-5 cursor-pointer text-left focus:outline-none group"
                    >
                      <div className="flex items-center gap-4">
                        {/* Leaf / Shield icon box */}
                        <div className="w-10 h-10 rounded-full bg-[#052316] text-[#c2dcb2] flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-brand-green-deep text-[16px] font-bold leading-tight">
                            {county.name}
                          </h3>
                          <p className="text-brand-text-muted text-[12px]">
                            {county.region} - seat of {county.seat}
                          </p>
                        </div>
                      </div>

                      {/* Right count badge + toggle arrow */}
                      <div className="flex items-center gap-4">
                        <span className="bg-[#e2edd8] text-[#2d5a2d] font-bold text-[11px] px-3 py-1 rounded-full">
                          {county.cityCount} cities
                        </span>
                        <div className="text-brand-green-accent group-hover:text-[#2d5a2d] transition-colors">
                          {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable city grid panel */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-[#fcf9f3]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {county.cities.map((city) => {
                            const isFlashed = highlightedCity === city;
                            return (
                              <div
                                key={city}
                                className={`text-center font-semibold text-[13px] px-3 py-2.5 rounded-xl border border-[#e8dcc6]/40 shadow-sm transition-all duration-300 ${
                                  isFlashed
                                    ? "bg-[#3fb364] text-white border-transparent scale-105 animate-pulse"
                                    : "bg-[#fcf9f3] text-[#1a3a1a] hover:bg-white hover:border-brand-green-accent/30 hover:shadow-md cursor-default"
                                }`}
                              >
                                {city}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
        
      </main>

      {/* Dynamic CTA Banner */}
      <section className="w-full bg-[#052316] py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full border border-white/5"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Badge indicator */}
          <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
            DON&apos;T SEE YOUR TOWN?
          </p>

          {/* Heading */}
          <h2 className="text-white text-[28px] lg:text-[40px] font-playfair font-normal leading-tight mb-4">
            We&apos;re licensed across all of Arizona.
          </h2>

          {/* Subtitle */}
          <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
            Wherever you&apos;re buying or refinancing in the state, chances are we already know the area.
          </p>

          {/* Action button */}
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
