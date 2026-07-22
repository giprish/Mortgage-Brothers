"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { getCountyName, getCountyCitiesDetails } from "../../../lib/cityData";

const countiesCities: Record<string, string[]> = {
  "maricopa-county-az": ["Phoenix","Scottsdale","Mesa","Chandler","Gilbert","Glendale","Tempe","Peoria","Surprise","Goodyear","Avondale","Buckeye","Queen Creek","Fountain Hills","Paradise Valley","Cave Creek","Carefree","Anthem","Sun City","Sun City West","Litchfield Park","Wickenburg","Apache Junction","Guadalupe","El Mirage","Tolleson","Youngtown","Gila Bend"],
  "pima-county-az": ["Tucson","Oro Valley","Marana","Sahuarita","Vail","Green Valley","Catalina Foothills","South Tucson"],
  "pinal-county-az": ["Casa Grande","Maricopa","San Tan Valley","Florence","Coolidge","Eloy","Apache Junction","Superior","Kearny","Mammoth"],
  "yavapai-county-az": ["Prescott","Prescott Valley","Sedona","Cottonwood","Chino Valley","Camp Verde","Dewey-Humboldt","Clarkdale","Jerome"],
  "coconino-county-az": ["Flagstaff","Sedona","Williams","Page","Fredonia","Tusayan"],
  "navajo-county-az": ["Show Low","Pinetop-Lakeside","Holbrook","Taylor","Snowflake","Winslow"],
  "apache-county-az": ["St. Johns","Eagar","Springerville","Chinle","Window Rock"],
  "gila-county-az": ["Payson","Globe","Miami","Star Valley","Hayden"],
  "cochise-county-az": ["Sierra Vista","Douglas","Bisbee","Benson","Willcox","Tombstone","Huachuca City"],
  "graham-county-az": ["Safford","Thatcher","Pima"],
  "greenlee-county-az": ["Clifton","Duncan","Morenci"],
  "santa-cruz-county-az": ["Nogales","Rio Rico","Tubac","Patagonia"],
  "mohave-county-az": ["Lake Havasu City","Kingman","Bullhead City","Fort Mohave","Golden Valley","Colorado City"],
  "la-paz-county-az": ["Parker","Quartzsite","Salome","Bouse"],
  "yuma-county-az": ["Yuma","San Luis","Somerton","Wellton"]
};

const regionMap: Record<string, string> = {
  "maricopa-county-az": "Greater Phoenix",
  "pima-county-az": "Southern Arizona",
  "pinal-county-az": "Greater Phoenix",
  "yavapai-county-az": "Northern Arizona",
  "coconino-county-az": "Northern Arizona",
  "navajo-county-az": "Northern Arizona",
  "apache-county-az": "Northern Arizona",
  "gila-county-az": "Northern Arizona",
  "cochise-county-az": "Southern Arizona",
  "graham-county-az": "Southern Arizona",
  "greenlee-county-az": "Southern Arizona",
  "santa-cruz-county-az": "Southern Arizona",
  "mohave-county-az": "Western Arizona",
  "la-paz-county-az": "Western Arizona",
  "yuma-county-az": "Western Arizona"
};

const sidebarCounties = [
  { name: "All", count: 108, href: "/service-areas" },
  { name: "Maricopa", count: 28, href: "/service-areas/maricopa-county-az" },
  { name: "Pima", count: 8, href: "/service-areas/pima-county-az" },
  { name: "Pinal", count: 10, href: "/service-areas/pinal-county-az" },
  { name: "Yavapai", count: 9, href: "/service-areas/yavapai-county-az" },
  { name: "Coconino", count: 6, href: "/service-areas/coconino-county-az" },
  { name: "Navajo", count: 6, href: "/service-areas/navajo-county-az" },
  { name: "Apache", count: 5, href: "/service-areas/apache-county-az" },
  { name: "Gila", count: 5, href: "/service-areas/gila-county-az" },
  { name: "Cochise", count: 7, href: "/service-areas/cochise-county-az" },
  { name: "Graham", count: 3, href: "/service-areas/graham-county-az" },
  { name: "Greenlee", count: 3, href: "/service-areas/greenlee-county-az" },
  { name: "Santa Cruz", count: 4, href: "/service-areas/santa-cruz-county-az" },
  { name: "Mohave", count: 6, href: "/service-areas/mohave-county-az" },
  { name: "La Paz", count: 4, href: "/service-areas/la-paz-county-az" },
  { name: "Yuma", count: 4, href: "/service-areas/yuma-county-az" }
];

export default function CountyPage() {
  const params = useParams();
  const rawCountySlug = (params?.county as string) || "";
  const [searchQuery, setSearchQuery] = useState("");

  const countySlug = useMemo(() => {
    if (!rawCountySlug) return "";
    const clean = rawCountySlug.toLowerCase().trim().replace(/\/$/, "");
    if (countiesCities[clean]) return clean;
    let base = clean.endsWith("-az") ? clean.slice(0, -3) : clean;
    if (!base.endsWith("-county")) base = `${base}-county`;
    return `${base}-az`;
  }, [rawCountySlug]);

  const countyName = useMemo(() => getCountyName(countySlug), [countySlug]);
  const cityDetails = useMemo(() => getCountyCitiesDetails(countySlug), [countySlug]);
  const region = regionMap[countySlug] || "";

  const filteredCities = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return cityDetails;
    return cityDetails.filter(c => c.name.toLowerCase().includes(q));
  }, [cityDetails, searchQuery]);

  if (!countyName || cityDetails.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-[100px]">
          <div className="text-center py-20">
            <h1 className="text-[#052316] text-[32px] font-playfair mb-4">County Not Found</h1>
            <p className="text-[#4e5b4e] text-[15px] mb-8">The county you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/service-areas" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all">
              Browse All Areas →
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[110px] lg:pt-[130px]">
        {/* Directory Filters & Main Layout */}
        <section className="w-full py-10 pb-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start lg:items-stretch">
            
            {/* Left Counties Sidebar */}
            <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-[88px] lg:self-start">
              
              {/* Counties Filter Panel */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-4 shadow-sm">
                <p className="text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-4 px-2">
                  COUNTIES
                </p>
                <div className="flex flex-col gap-1">
                  {sidebarCounties.map((county) => {
                    const isActive = countyName?.toLowerCase().includes(county.name.toLowerCase());

                    return (
                      <Link
                        key={county.name}
                        href={county.href}
                        className={`flex items-center justify-between text-[13.5px] font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                          isActive
                            ? "bg-[#052316] text-white shadow-md shadow-[#052316]/10"
                            : "text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d]"
                        }`}
                      >
                        <span>{county.name}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/15 text-white" : "bg-[#f5f0e8] text-[#4e5b4e]"}`}>
                          {county.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar bottom Request Card */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-6 shadow-sm flex flex-col items-start gap-4">
                <div>
                  <h4 className="text-[#08271B] text-[15px] font-bold tracking-tight mb-1">
                    Don&apos;t see your town?
                  </h4>
                  <p className="text-brand-text-muted text-[12.5px] leading-relaxed">
                    We&apos;re licensed statewide — tell us where you&apos;re buying.
                  </p>
                </div>
                <Link
                  href="/about#talk-to-broker"
                  className="text-brand-green-accent hover:text-[#2d5a2d] text-[13px] font-bold flex items-center gap-1.5 transition-colors group"
                >
                  Request your area
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

            {/* Right Main Content */}
            <div className="flex-1 w-full flex flex-col gap-6">

              {/* Hero Banner for County */}
              <div className="w-full bg-[#052316] text-white rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-full border border-white/5 pointer-events-none -mr-12 -mt-12"></div>
                <div className="relative z-10">
                  {/* Breadcrumb inside Pine Green Container */}
                  <div className="flex items-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-4">
                    <Link href="/service-areas" className="hover:text-[#3fb364] transition-colors">Areas We Serve</Link>
                    <span className="text-[#3fb364]/60">&gt;</span>
                    <span className="text-white font-semibold">{countyName}</span>
                  </div>

                  <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2">{region}</span>
                  <h1 className="text-white text-[32px] lg:text-[42px] font-playfair font-normal leading-[1.15] mb-3">
                    {countyName} Mortgage Experts
                  </h1>
                  <p className="text-[#c8c8b8] text-[15px] leading-[1.7] max-w-xl">
                    Local home loan solutions across {countyName}. We help buyers and homeowners in {cityDetails.length} communities.
                  </p>
                </div>
              </div>

              {/* Search Bar Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={`Search cities in ${countyName}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#e8e0d0] rounded-2xl px-5 py-4 pl-12 text-[15px] text-[#1a3a1a] placeholder:text-[#8a9a7a]/60 shadow-sm focus:outline-none focus:border-brand-green-accent/50 focus:ring-1 focus:ring-brand-green-accent/20 transition-all"
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

              {/* Count Indicator */}
              <div className="text-[13px] text-brand-text-muted font-medium mb-1 px-1">
                Showing {filteredCities.length} of {cityDetails.length} communities in {countyName}.
              </div>

              {/* Cities Grid */}
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCities.map((city) => {
                    const initials = city.name.substring(0, 2);
                    const citySlug = city.name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");
                    const href = `/service-areas/${countySlug}/${citySlug}`;

                    return (
                      <Link
                        key={city.name}
                        href={href}
                        className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col justify-between transition-all duration-300 min-h-[170px] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#e2edd8] text-[#2d5a2d] font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                                {initials}
                              </div>
                              <div>
                                <h3 className="text-[#052316] text-[15.5px] font-bold leading-tight tracking-tight group-hover:text-[#3fb364] transition-colors">
                                  {city.name}
                                </h3>
                                <span className="text-[#a89a70] text-[10px] font-bold uppercase tracking-wider mt-0.5 block">
                                  {countyName}
                                </span>
                              </div>
                            </div>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className="text-[#3fb364] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>

                          <p className="text-brand-text-muted text-[13px] leading-relaxed mb-4">
                            {city.desc}
                          </p>
                        </div>

                        {city.badge && (
                          <div className="mt-auto pt-2">
                            <span className="bg-[#f5f0e8] border border-[#e8dcc6]/60 text-[#8a7a4a] text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                              {city.badge}
                            </span>
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 border border-[#e8e0d0]/50 text-center text-[#8a9a7a]">
                  <p className="text-[15px] font-medium mb-1">No matching communities found in {countyName}.</p>
                  <p className="text-[13px]">Try refining your search term.</p>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-6 bg-[#052316] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-[26px] lg:text-[32px] font-playfair font-normal mb-4">Ready to get started in {countyName}?</h2>
            <p className="text-[#c8c8b8] text-[15px] mb-6">Start your pre-approval in about three minutes — no cost, no obligation.</p>
            <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md">
              Get Pre-Approved →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
