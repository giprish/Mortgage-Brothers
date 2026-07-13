"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PreApprovedForm from "../component/PreApprovedForm";

// Regions & Counties Data from the designs
const regions = [
  {
    id: "major-counties",
    name: "Major Counties",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M9 12h6" />
        <path d="M9 8h6" />
      </svg>
    ),
    bgColor: "bg-white",
    counties: [
      {
        name: "Maricopa County",
        description: "Trusted mortgage solutions for Maricopa County, serving Phoenix, Mesa, Scottsdale and communities.",
        cities: ["Phoenix", "Scottsdale", "Mesa"],
        moreCities: 15
      },
      {
        name: "Pima County",
        description: "Professional mortgage assistance in Pima County, supporting Tucson and communities with home financing.",
        cities: ["Tucson", "Oro Valley", "Sahuarita", "Vail"],
        moreCities: 0
      },
      {
        name: "Pinal County",
        description: "Trusted mortgage guidance in Pinal County, serving Casa Grande, Maricopa, and growing communities.",
        cities: ["San Tan Valley", "Queen Creek"],
        moreCities: 4
      },
      {
        name: "Yavapai County",
        description: "Experienced mortgage services in Yavapai County, serving Prescott, Sedona and surrounding communities.",
        cities: ["Prescott", "Cottonwood", "Chino Valley"],
        moreCities: 6
      }
    ]
  },
  {
    id: "northern-arizona",
    name: "Northern Arizona",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 13.8L12 3 6.2 13.8a.5.5 0 0 0 .4.7H17.4a.5.5 0 0 0 .4-.7z" />
        <path d="M17.8 19.8L12 9 6.2 19.8a.5.5 0 0 0 .4.7H17.4a.5.5 0 0 0 .4-.7z" />
      </svg>
    ),
    bgColor: "bg-[#fcf9f3]",
    counties: [
      {
        name: "Coconino County",
        description: "Expert mortgage services across Coconino County, Flagstaff and Northern Arizona communities.",
        cities: ["Flagstaff", "Williams", "Sedona"],
        moreCities: 10
      },
      {
        name: "Navajo County",
        description: "Professional mortgage services in Navajo County, assisting Show Low, Holbrook, and nearby communities.",
        cities: ["Show Low", "Pinetop", "Holbrook"],
        moreCities: 2
      },
      {
        name: "Apache County",
        description: "Reliable mortgage services across Apache County, helping families in Snowflake, Eagar, and Springerville.",
        cities: ["Snowflake", "Springerville", "Eagar"],
        moreCities: 3
      },
      {
        name: "Gila County",
        description: "Reliable mortgage assistance in Gila County, serving Payson, Globe, and surrounding Arizona communities.",
        cities: ["Payson", "Miami", "Star Valley"],
        moreCities: 8
      }
    ]
  },
  {
    id: "southern-arizona",
    name: "Southern Arizona",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    bgColor: "bg-white",
    counties: [
      {
        name: "Cochise County",
        description: "Flexible mortgage options in Cochise County, helping buyers across Sierra Vista, Bisbee, and nearby towns.",
        cities: ["Sierra Vista", "Bisbee", "Tombstone", "Douglas"],
        moreCities: 0
      },
      {
        name: "Graham County",
        description: "Affordable mortgage options in Graham County, helping residents with trusted home financing solutions.",
        cities: ["Safford", "Thatcher", "Pima"],
        moreCities: 0
      },
      {
        name: "Greenlee County",
        description: "Local mortgage experts serving Greenlee County with personalized home loan solutions for residents.",
        cities: ["Clifton", "Morenci", "Duncan"],
        moreCities: 0
      },
      {
        name: "Santa Cruz County",
        description: "Dedicated mortgage solutions for Santa Cruz County, helping families achieve homeownership.",
        cities: ["Santa Cruz"],
        moreCities: 0
      }
    ]
  },
  {
    id: "western-arizona",
    name: "Western Arizona",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
    bgColor: "bg-[#fcf9f3]",
    counties: [
      {
        name: "Mohave County",
        description: "Mortgage support in Mohave County, helping buyers in Kingman, Lake Havasu City, and nearby areas.",
        cities: ["Kingman", "Lake Havasu City", "Bullhead City"],
        moreCities: 3
      },
      {
        name: "La Paz County",
        description: "Home loan services in La Paz County, assisting residents with reliable and affordable mortgage solutions.",
        cities: ["Quartzsite", "Parker"],
        moreCities: 0
      },
      {
        name: "Yuma County",
        description: "Reliable mortgage services in Yuma County, supporting families with simple and flexible home loan options.",
        cities: ["Yuma", "San Luis"],
        moreCities: 0
      }
    ]
  }
];

export default function AreasWeServe() {
  const [activeTab, setActiveTab] = useState("major-counties");
  const [isProgrammatic, setIsProgrammatic] = useState(false);

  // Smooth scroll to a target section
  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      setIsProgrammatic(true);
      setActiveTab(targetId);
      const offset = 90; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Clear programmatic flag after scroll duration
      setTimeout(() => {
        setIsProgrammatic(false);
      }, 1000);
    }
  };

  // Scrollspy to highlight active tab
  useEffect(() => {
    const handleScrollSpy = () => {
      if (isProgrammatic) return;
      
      const scrollPos = window.scrollY + 200; // offset for detection

      for (let i = 0; i < regions.length; i++) {
        const reg = regions[i];
        const el = document.getElementById(reg.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(reg.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isProgrammatic]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-24 text-center relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Upper Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              SERVICE AREAS
            </p>

            {/* Title */}
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6">
              Local expertise, wherever home is.
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-10">
              We serve all 15 Arizona counties — from downtown Phoenix to the far corners of the state. Select your area below.
            </p>

            {/* Scroll-Spy Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {regions.map((reg) => {
                const isActive = reg.id === activeTab;
                return (
                  <button
                    key={reg.id}
                    onClick={() => scrollToSection(reg.id)}
                    className={`text-[13px] font-semibold px-6 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white border-white text-brand-green-deep font-semibold shadow-md"
                        : "bg-transparent border-white/20 text-white/80 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {reg.name}
                  </button>
                );
              })}
            </div>

            {/* License details strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#8a9a7a] text-[11px] font-medium tracking-wide uppercase">
              <span>NMLS #1007154</span>
              <span className="hidden md:inline">|</span>
              <span>AZ #MB0922514</span>
              <span className="hidden md:inline">|</span>
              <span>Equal Housing Lender</span>
              <span className="hidden md:inline">|</span>
              <span>Licensed in Arizona</span>
            </div>
          </div>
        </section>

        {/* Regions Listing Sections */}
        <div>
          {regions.map((region) => (
            <section
              key={region.id}
              id={region.id}
              className={`w-full py-16 lg:py-20 border-b border-[#e8e0d0]/40 scroll-mt-20 ${region.bgColor}`}
            >
              <div className="max-w-5xl mx-auto px-6 lg:px-10">
                {/* Region Title Block */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-green-deep text-brand-green-accent flex items-center justify-center rounded-xl flex-shrink-0 shadow-inner">
                    {region.icon}
                  </div>
                  <h2 
                    className="text-brand-green-deep text-[28px] lg:text-[34px] font-normal font-playfair leading-tight"
                  >
                    {region.name}
                  </h2>
                </div>

                {/* Counties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {region.counties.map((county, index) => {
                    const isMaricopa = county.name === "Maricopa County";
                    const cardContent = (
                      <div
                        className="bg-white rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.985] active:translate-y-0 cursor-pointer transition-all duration-300 h-full"
                      >
                        <div>
                          {/* County Name Header */}
                          <div className="flex items-center gap-2 mb-3 text-brand-green-deep">
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
                              className="text-brand-green-accent flex-shrink-0"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            <h3 className="text-[17px] font-bold tracking-tight">
                              {county.name}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-brand-text-muted text-[13.5px] lg:text-[14.5px] leading-relaxed mb-6">
                            {county.description}
                          </p>
                        </div>

                        {/* Cities pills row */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8e0d0]/30 mt-auto">
                          {county.cities.map((city, cIdx) => (
                            <span
                              key={cIdx}
                              className="bg-[#f5f0e8] border border-[#e8dcc6]/40 text-[#4e5b4e] text-[11px] font-semibold px-3 py-1 rounded-full"
                            >
                              {city}
                            </span>
                          ))}
                          {county.moreCities > 0 && (
                            <span className="bg-[#e2edd8] border border-[#d2e2c2] text-[#2d5a2d] text-[11px] font-bold px-3 py-1 rounded-full">
                              +{county.moreCities} more
                            </span>
                          )}
                        </div>
                      </div>
                    );

                    return isMaricopa ? (
                      <Link key={index} href="/areas-we-serve/maricopa-county" className="block h-full">
                        {cardContent}
                      </Link>
                    ) : (
                      <div key={index} className="h-full">
                        {cardContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Widescreen Bottom CTA Section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-24 text-center relative overflow-hidden border-t border-white/5">
          {/* Subtle circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              DON&apos;T SEE YOUR TOWN?
            </p>
            <h2 
              className="text-white text-[32px] lg:text-[44px] font-playfair font-normal leading-tight mb-4"
            >
              We&apos;re licensed across all of Arizona.
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Wherever you&apos;re buying or refinancing in the state, chances are we already know the area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="#get-pre-approved"
                className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
              >
                Get Pre-Approved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/about#talk-to-broker"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Talk to a Broker
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PreApprovedForm />
      <Footer />
    </div>
  );
}
