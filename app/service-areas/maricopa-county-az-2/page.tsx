"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Complete dataset of 108 cities across 15 counties
const citiesData = [
  // Maricopa (28)
  { name: "Phoenix", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Phoenix buyers.", badge: "TOP METRO" },
  { name: "Scottsdale", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Scottsdale." },
  { name: "Mesa", county: "Maricopa County", desc: "Purchase and refinance financing in Mesa and nearby." },
  { name: "Chandler", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Chandler buyers." },
  { name: "Gilbert", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Gilbert." },
  { name: "Glendale", county: "Maricopa County", desc: "Purchase and refinance financing in Glendale and nearby." },
  { name: "Tempe", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Tempe buyers." },
  { name: "Peoria", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Peoria." },
  { name: "Surprise", county: "Maricopa County", desc: "Purchase and refinance financing in Surprise and nearby." },
  { name: "Goodyear", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Goodyear buyers." },
  { name: "Avondale", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Avondale." },
  { name: "Buckeye", county: "Maricopa County", desc: "Purchase and refinance financing in Buckeye and nearby." },
  { name: "Queen Creek", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Queen Creek buyers." },
  { name: "Fountain Hills", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Fountain Hills." },
  { name: "Paradise Valley", county: "Maricopa County", desc: "Purchase and refinance financing in Paradise Valley and nearby." },
  { name: "Cave Creek", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Cave Creek buyers." },
  { name: "Carefree", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Carefree." },
  { name: "Anthem", county: "Maricopa County", desc: "Purchase and refinance financing in Anthem and nearby." },
  { name: "Sun City", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Sun City buyers." },
  { name: "Sun City West", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Sun City West." },
  { name: "Litchfield Park", county: "Maricopa County", desc: "Purchase and refinance financing in Litchfield Park and nearby." },
  { name: "Wickenburg", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Wickenburg buyers." },
  { name: "Apache Junction", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Apache Junction." },
  { name: "Guadalupe", county: "Maricopa County", desc: "Purchase and refinance financing in Guadalupe and nearby." },
  { name: "El Mirage", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for El Mirage buyers." },
  { name: "Tolleson", county: "Maricopa County", desc: "Local mortgage guidance for homeowners across Tolleson." },
  { name: "Youngtown", county: "Maricopa County", desc: "Purchase and refinance financing in Youngtown and nearby." },
  { name: "Gila Bend", county: "Maricopa County", desc: "Home loans, refinancing, and pre-approvals for Gila Bend buyers." },

  // Pima (8)
  { name: "Tucson", county: "Pima County", desc: "Local mortgage guidance for homeowners across Tucson.", badge: "TOP METRO" },
  { name: "Oro Valley", county: "Pima County", desc: "Purchase and refinance financing in Oro Valley and nearby." },
  { name: "Marana", county: "Pima County", desc: "Home loans, refinancing, and pre-approvals for Marana buyers." },
  { name: "Sahuarita", county: "Pima County", desc: "Local mortgage guidance for homeowners across Sahuarita." },
  { name: "Vail", county: "Pima County", desc: "Purchase and refinance financing in Vail and nearby." },
  { name: "Green Valley", county: "Pima County", desc: "Home loans, refinancing, and pre-approvals for Green Valley buyers." },
  { name: "Catalina Foothills", county: "Pima County", desc: "Local mortgage guidance for homeowners across Catalina Foothills." },
  { name: "South Tucson", county: "Pima County", desc: "Purchase and refinance financing in South Tucson and nearby." },

  // Pinal (10)
  { name: "Casa Grande", county: "Pinal County", desc: "Home loans, refinancing, and pre-approvals for Casa Grande buyers." },
  { name: "Maricopa", county: "Pinal County", desc: "Local mortgage guidance for homeowners across Maricopa." },
  { name: "San Tan Valley", county: "Pinal County", desc: "Purchase and refinance financing in San Tan Valley and nearby." },
  { name: "Florence", county: "Pinal County", desc: "Home loans, refinancing, and pre-approvals for Florence buyers.", badge: "COUNTY SEAT" },
  { name: "Coolidge", county: "Pinal County", desc: "Local mortgage guidance for homeowners across Coolidge." },
  { name: "Eloy", county: "Pinal County", desc: "Purchase and refinance financing in Eloy and nearby." },
  { name: "Apache Junction", county: "Pinal County", desc: "Home loans, refinancing, and pre-approvals for Apache Junction buyers." },
  { name: "Superior", county: "Pinal County", desc: "Local mortgage guidance for homeowners across Superior." },
  { name: "Kearny", county: "Pinal County", desc: "Purchase and refinance financing in Kearny and nearby." },
  { name: "Mammoth", county: "Pinal County", desc: "Home loans, refinancing, and pre-approvals for Mammoth buyers." },

  // Yavapai (9)
  { name: "Prescott", county: "Yavapai County", desc: "Local mortgage guidance for homeowners across Prescott.", badge: "COUNTY SEAT" },
  { name: "Prescott Valley", county: "Yavapai County", desc: "Purchase and refinance financing in Prescott Valley and nearby." },
  { name: "Sedona", county: "Yavapai County", desc: "Home loans, refinancing, and pre-approvals for Sedona buyers." },
  { name: "Cottonwood", county: "Yavapai County", desc: "Local mortgage guidance for homeowners across Cottonwood." },
  { name: "Chino Valley", county: "Yavapai County", desc: "Purchase and refinance financing in Chino Valley and nearby." },
  { name: "Camp Verde", county: "Yavapai County", desc: "Home loans, refinancing, and pre-approvals for Camp Verde buyers." },
  { name: "Dewey-Humboldt", county: "Yavapai County", desc: "Local mortgage guidance for homeowners across Dewey-Humboldt." },
  { name: "Clarkdale", county: "Yavapai County", desc: "Purchase and refinance financing in Clarkdale and nearby." },
  { name: "Jerome", county: "Yavapai County", desc: "Home loans, refinancing, and pre-approvals for Jerome buyers." },

  // Coconino (6)
  { name: "Flagstaff", county: "Coconino County", desc: "Local mortgage guidance for homeowners across Flagstaff.", badge: "COUNTY SEAT" },
  { name: "Sedona", county: "Coconino County", desc: "Purchase and refinance financing in Sedona and nearby." },
  { name: "Williams", county: "Coconino County", desc: "Home loans, refinancing, and pre-approvals for Williams buyers." },
  { name: "Page", county: "Coconino County", desc: "Local mortgage guidance for homeowners across Page." },
  { name: "Fredonia", county: "Coconino County", desc: "Purchase and refinance financing in Fredonia and nearby." },
  { name: "Tusayan", county: "Coconino County", desc: "Home loans, refinancing, and pre-approvals for Tusayan buyers." },

  // Navajo (6)
  { name: "Show Low", county: "Navajo County", desc: "Local mortgage guidance for homeowners across Show Low." },
  { name: "Pinetop-Lakeside", county: "Navajo County", desc: "Purchase and refinance financing in Pinetop-Lakeside and nearby." },
  { name: "Holbrook", county: "Navajo County", desc: "Home loans, refinancing, and pre-approvals for Holbrook buyers.", badge: "COUNTY SEAT" },
  { name: "Taylor", county: "Navajo County", desc: "Home loans, refinancing, and pre-approvals for Taylor buyers." },
  { name: "Snowflake", county: "Navajo County", desc: "Local mortgage guidance for homeowners across Snowflake." },
  { name: "Winslow", county: "Navajo County", desc: "Home loans, refinancing, and pre-approvals for Winslow buyers." },

  // Apache (5)
  { name: "St. Johns", county: "Apache County", desc: "Local mortgage guidance for homeowners across St. Johns.", badge: "COUNTY SEAT" },
  { name: "Eagar", county: "Apache County", desc: "Purchase and refinance financing in Eagar and nearby." },
  { name: "Springerville", county: "Apache County", desc: "Home loans, refinancing, and pre-approvals for Springerville buyers." },
  { name: "Chinle", county: "Apache County", desc: "Local mortgage guidance for homeowners across Chinle." },
  { name: "Window Rock", county: "Apache County", desc: "Purchase and refinance financing in Window Rock and nearby." },

  // Gila (5)
  { name: "Payson", county: "Gila County", desc: "Home loans, refinancing, and pre-approvals for Payson buyers." },
  { name: "Globe", county: "Gila County", desc: "Local mortgage guidance for homeowners across Globe.", badge: "COUNTY SEAT" },
  { name: "Miami", county: "Gila County", desc: "Purchase and refinance financing in Miami and nearby." },
  { name: "Star Valley", county: "Gila County", desc: "Home loans, refinancing, and pre-approvals for Star Valley buyers." },
  { name: "Hayden", county: "Gila County", desc: "Local mortgage guidance for homeowners across Hayden." },

  // Cochise (7)
  { name: "Sierra Vista", county: "Cochise County", desc: "Purchase and refinance financing in Sierra Vista and nearby." },
  { name: "Douglas", county: "Cochise County", desc: "Home loans, refinancing, and pre-approvals for Douglas buyers." },
  { name: "Bisbee", county: "Cochise County", desc: "Local mortgage guidance for homeowners across Bisbee.", badge: "COUNTY SEAT" },
  { name: "Benson", county: "Cochise County", desc: "Purchase and refinance financing in Benson and nearby." },
  { name: "Willcox", county: "Cochise County", desc: "Home loans, refinancing, and pre-approvals for Willcox buyers." },
  { name: "Tombstone", county: "Cochise County", desc: "Local mortgage guidance for homeowners across Tombstone." },
  { name: "Huachuca City", county: "Cochise County", desc: "Purchase and refinance financing in Huachuca City and nearby." },

  // Graham (3)
  { name: "Safford", county: "Graham County", desc: "Home loans, refinancing, and pre-approvals for Safford buyers.", badge: "COUNTY SEAT" },
  { name: "Thatcher", county: "Graham County", desc: "Local mortgage guidance for homeowners across Thatcher." },
  { name: "Pima", county: "Graham County", desc: "Purchase and refinance financing in Pima and nearby." },

  // Greenlee (3)
  { name: "Clifton", county: "Greenlee County", desc: "Home loans, refinancing, and pre-approvals for Clifton buyers.", badge: "COUNTY SEAT" },
  { name: "Duncan", county: "Greenlee County", desc: "Local mortgage guidance for homeowners across Duncan." },
  { name: "Morenci", county: "Greenlee County", desc: "Purchase and refinance financing in Morenci and nearby." },

  // Santa Cruz (4)
  { name: "Nogales", county: "Santa Cruz County", desc: "Home loans, refinancing, and pre-approvals for Nogales buyers.", badge: "COUNTY SEAT" },
  { name: "Rio Rico", county: "Santa Cruz County", desc: "Local mortgage guidance for homeowners across Rio Rico." },
  { name: "Tubac", county: "Santa Cruz County", desc: "Purchase and refinance financing in Tubac and nearby." },
  { name: "Patagonia", county: "Santa Cruz County", desc: "Home loans, refinancing, and pre-approvals for Patagonia buyers." },

  // Mohave (6)
  { name: "Lake Havasu City", county: "Mohave County", desc: "Local mortgage guidance for homeowners across Lake Havasu City." },
  { name: "Kingman", county: "Mohave County", desc: "Purchase and refinance financing in Kingman and nearby.", badge: "COUNTY SEAT" },
  { name: "Bullhead City", county: "Mohave County", desc: "Home loans, refinancing, and pre-approvals for Bullhead City buyers." },
  { name: "Fort Mohave", county: "Mohave County", desc: "Local mortgage guidance for homeowners across Fort Mohave." },
  { name: "Golden Valley", county: "Mohave County", desc: "Purchase and refinance financing in Golden Valley and nearby." },
  { name: "Colorado City", county: "Mohave County", desc: "Home loans, refinancing, and pre-approvals for Colorado City buyers." },

  // La Paz (4)
  { name: "Parker", county: "La Paz County", desc: "Local mortgage guidance for homeowners across Parker.", badge: "COUNTY SEAT" },
  { name: "Quartzsite", county: "La Paz County", desc: "Purchase and refinance financing in Quartzsite and nearby." },
  { name: "Salome", county: "La Paz County", desc: "Home loans, refinancing, and pre-approvals for Salome buyers." },
  { name: "Bouse", county: "La Paz County", desc: "Local mortgage guidance for homeowners across Bouse." },

  // Yuma (4)
  { name: "Yuma", county: "Yuma County", desc: "Purchase and refinance financing in Yuma and nearby.", badge: "COUNTY SEAT" },
  { name: "San Luis", county: "Yuma County", desc: "Home loans, refinancing, and pre-approvals for San Luis buyers." },
  { name: "Somerton", county: "Yuma County", desc: "Local mortgage guidance for homeowners across Somerton." },
  { name: "Wellton", county: "Yuma County", desc: "Purchase and refinance financing in Wellton and nearby." }
];

// Sidebar Counties filter configuration with their counts
const sidebarCounties = [
  { name: "All", count: 108 },
  { name: "Maricopa", count: 28 },
  { name: "Pima", count: 8 },
  { name: "Pinal", count: 10 },
  { name: "Yavapai", count: 9 },
  { name: "Coconino", count: 6 },
  { name: "Navajo", count: 6 },
  { name: "Apache", count: 5 },
  { name: "Gila", count: 5 },
  { name: "Cochise", count: 7 },
  { name: "Graham", count: 3 },
  { name: "Greenlee", count: 3 },
  { name: "Santa Cruz", count: 4 },
  { name: "Mohave", count: 6 },
  { name: "La Paz", count: 4 },
  { name: "Yuma", count: 4 }
];

export default function MaricopaCounty2() {
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filters the complete list based on selected county and search query
  const filteredCities = useMemo(() => {
    return citiesData.filter((city) => {
      const matchesCounty =
        selectedCounty === "All" ||
        city.county.toLowerCase().startsWith(selectedCounty.toLowerCase());
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        city.name.toLowerCase().includes(query) ||
        city.county.toLowerCase().includes(query);

      return matchesCounty && matchesSearch;
    });
  }, [selectedCounty, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Widescreen Hero Section */}
        <section className="w-full bg-[#fcf9f3] py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Upper Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              THE DIRECTORY
            </p>

            {/* Title */}
            <h1 className="text-brand-green-deep text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Every Arizona community, by county.
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              We&apos;re licensed in all 15 Arizona counties — 108 cities and towns and growing. Filter by county or search to find yours.
            </p>
          </div>
        </section>

        {/* Directory Filters & Grid Section */}
        <section className="w-full pb-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Sidebar Columns */}
            <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-6">
              
              {/* Counties Filter Panel */}
              <div className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-4 shadow-sm">
                <p className="text-[11px] font-bold text-brand-text-muted uppercase tracking-wider mb-4 px-2">
                  COUNTIES
                </p>
                <div className="flex flex-col gap-1">
                  {sidebarCounties.map((county) => {
                    const isActive = county.name === selectedCounty;
                    return (
                      <button
                        key={county.name}
                        onClick={() => setSelectedCounty(county.name)}
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
                      </button>
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

            {/* Right Side City Grid Content */}
            <div className="flex-1 w-full flex flex-col gap-6">
              
              {/* Search Bar Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search cities or counties..."
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

              {/* Counts indicator */}
              <div className="text-[13px] text-brand-text-muted font-medium mb-2 px-1">
                Showing {filteredCities.length} of {citiesData.length} communities across {selectedCounty === "All" ? "all" : selectedCounty} counties.
              </div>

              {/* Grid of City Cards */}
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCities.map((city, index) => {
                    const initials = city.name.substring(0, 2);
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300 min-h-[170px]"
                      >
                        <div>
                          {/* Card header initials + name */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#e2edd8] text-[#2d5a2d] font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                              {initials}
                            </div>
                            <div>
                              <h3 className="text-brand-green-deep text-[15.5px] font-bold leading-tight tracking-tight">
                                {city.name}
                              </h3>
                              <span className="text-[#a89a70] text-[10px] font-bold uppercase tracking-wider mt-0.5 block">
                                {city.county}
                              </span>
                            </div>
                          </div>

                          {/* Description paragraph */}
                          <p className="text-brand-text-muted text-[13px] leading-relaxed mb-4">
                            {city.desc}
                          </p>
                        </div>

                        {/* Optional Bottom Badge tags */}
                        {city.badge && (
                          <div className="mt-auto pt-2">
                            <span className="bg-[#f5f0e8] border border-[#e8dcc6]/60 text-[#8a7a4a] text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                              {city.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 border border-[#e8e0d0]/50 text-center text-[#8a9a7a]">
                  <p className="text-[15px] font-medium mb-1">No matching communities found.</p>
                  <p className="text-[13px]">Try refining your search query or choosing a different county.</p>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* Bottom Forest Green CTA Section */}
        <section className="w-full bg-[#052316] py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full border border-white/5 opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Upper Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              READY WHEN YOU ARE
            </p>

            {/* Title */}
            <h2 className="text-white text-[28px] lg:text-[40px] font-playfair font-normal leading-tight mb-4">
              Let&apos;s get you home in Arizona.
            </h2>

            {/* Subtitle */}
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Start your pre-approval in about three minutes — no cost, no obligation, no credit impact.
            </p>

            {/* CTA Button */}
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
      </main>

      {/* Commented Out PreApprovedForm as requested */}
      {/* <PreApprovedForm /> */}
      <Footer />
    </div>
  );
}
