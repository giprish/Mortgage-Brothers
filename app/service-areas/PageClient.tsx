"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../app/component/Navbar";
import Footer from "../../app/component/Footer";
import GetInTouch from "../component/GetInTouch";
import type { ServiceAreaDirectoryCity } from "@/lib/cityData";

/** Display order for the county filter sidebar (short labels). */
const COUNTY_FILTER_ORDER = [
  "Maricopa",
  "Pima",
  "Pinal",
  "Yavapai",
  "Coconino",
  "Navajo",
  "Apache",
  "Gila",
  "Cochise",
  "Graham",
  "Greenlee",
  "Santa Cruz",
  "Mohave",
  "La Paz",
  "Yuma",
] as const;

type Props = {
  cities: ServiceAreaDirectoryCity[];
};

export default function ServiceAreasDirectory({ cities }: Props) {
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarCounties = useMemo(() => {
    const counts = new Map<string, number>();
    for (const city of cities) {
      const short = city.county.replace(/\s+County$/i, "");
      counts.set(short, (counts.get(short) || 0) + 1);
    }

    return [
      { name: "All", count: cities.length },
      ...COUNTY_FILTER_ORDER.map((name) => ({
        name,
        count: counts.get(name) || 0,
      })),
    ];
  }, [cities]);

  // Sync selected county from URL query param on mount or URL change
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const countyParam = params.get("county");
      if (countyParam) {
        const matched = sidebarCounties.find((c) => {
          const cSlug = c.name.toLowerCase().replace(/\s+/g, "-");
          const pClean = countyParam
            .toLowerCase()
            .replace(/-county-az$/, "")
            .replace(/-az$/, "");
          return (
            c.name.toLowerCase() === countyParam.toLowerCase() ||
            cSlug === pClean
          );
        });
        if (matched) {
          const rafId = requestAnimationFrame(() =>
            setSelectedCounty(matched.name),
          );
          return () => cancelAnimationFrame(rafId);
        }
      }
    }
  }, [sidebarCounties]);

  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      const matchesCounty =
        selectedCounty === "All" ||
        city.county.toLowerCase().startsWith(selectedCounty.toLowerCase()) ||
        city.county.toLowerCase().includes(selectedCounty.toLowerCase());

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        city.name.toLowerCase().includes(query) ||
        city.county.toLowerCase().includes(query);

      return matchesCounty && matchesSearch;
    });
  }, [cities, selectedCounty, searchQuery]);

  const statusLabel =
    selectedCounty === "All"
      ? `Showing ${filteredCities.length} of ${cities.length} communities across all counties.`
      : `Showing ${filteredCities.length} of ${cities.length} communities in ${selectedCounty} County.`;

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow pt-[110px] lg:pt-[130px]">
        {/* Widescreen Hero Section */}
        <section className="w-full bg-[#fcf9f3] pb-12 lg:pb-16 text-center relative overflow-hidden">
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
              We&apos;re licensed in all 15 Arizona counties — {cities.length}{" "}
              cities and towns and growing. Filter by county or search to find
              yours.
            </p>
          </div>
        </section>

        {/* Directory Filters & Grid Section */}
        <section className="w-full pb-24 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start lg:items-stretch">
            {/* Left Sidebar Columns */}
            <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-[88px] lg:self-start">
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
                        type="button"
                        onClick={() => setSelectedCounty(county.name)}
                        className={`flex items-center justify-between text-[13.5px] font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 text-left w-full ${
                          isActive
                            ? "bg-[#052316] text-white shadow-md shadow-[#052316]/10"
                            : "text-[#1a3a1a] hover:bg-[#f5f0e8] hover:text-[#2d5a2d]"
                        }`}
                      >
                        <span>{county.name}</span>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/15 text-white" : "bg-[#f5f0e8] text-[#4e5b4e]"}`}
                        >
                          {county.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
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
                  className="w-full bg-white border border-[#e8e0d0] rounded-2xl px-5 py-4 pl-12 text-[15px] text-[#1a3a1a] placeholder:text-[#5a6b52]/60 shadow-sm focus:outline-none focus:border-brand-green-accent/50 focus:ring-1 focus:ring-brand-green-accent/20 transition-all"
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
                {statusLabel}
              </div>

              {/* Grid of City Cards */}
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCities.map((city) => {
                    const initials = city.name.substring(0, 2);
                    const href = `/service-areas/${city.countySlug}/${city.slug}/`;

                    return (
                      <Link
                        key={`${city.countySlug}-${city.slug}`}
                        href={href}
                        className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/50 shadow-sm flex flex-col justify-between transition-all duration-300 min-h-[170px] hover:-translate-y-1 hover:shadow-lg hover:border-brand-green-accent/30"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-[#e2edd8] text-[#2d5a2d] font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                              {initials}
                            </div>
                            <div>
                              <h3 className="text-brand-green-deep text-[15.5px] font-bold leading-tight tracking-tight">
                                {city.name}
                              </h3>
                              <span className="text-[#7a6a3d] text-[10px] font-bold uppercase tracking-wider mt-0.5 block">
                                {city.county}
                              </span>
                            </div>
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
                <div className="bg-white rounded-2xl p-12 border border-[#e8e0d0]/50 text-center text-[#5a6b52]">
                  <p className="text-[15px] font-medium mb-1">
                    No matching communities found.
                  </p>
                  <p className="text-[13px]">
                    Try refining your search query or choosing a different
                    county.
                  </p>
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
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              READY WHEN YOU ARE
            </p>

            <h2 className="text-white text-[28px] lg:text-[40px] font-playfair font-normal leading-tight mb-4">
              Let&apos;s get you home in Arizona.
            </h2>

            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Start your pre-approval in about three minutes — no cost, no
              obligation, no credit impact.
            </p>

            <Link
              href="/#get-pre-approved"
              className="btn-primary duration-200 hover:shadow-lg hover:shadow-[#3fb364]/20 group"
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

        <GetInTouch
          theme="light"
          title="Get Started with Your Arizona Home Loan Today"
          showDivider
          paragraphs={[
            "Take the first step towards your dream home with AZ Mortgage Brothers. Our team of experienced mortgage professionals is ready to guide you through the conventional loan process, answer your questions, and help you secure the best possible terms for your unique situation.",
            "Whether you prefer to chat over the phone, send us an email, or meet in person, we're here to assist you. Fill out the form below, and one of our mortgage experts will get back to you promptly. Alternatively, feel free to reach out to us directly using the contact information provided.",
            "Don't let this opportunity for homeownership pass you by. Contact us today and let's make your Arizona home dreams a reality with a conventional loan tailored to your needs.",
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
