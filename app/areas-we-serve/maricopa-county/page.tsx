"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import PreApprovedForm from "../../component/PreApprovedForm";

const cities = [
  {
    name: "Phoenix",
    description: "As Arizona's capital and largest city, Phoenix offers a dynamic real estate market with diverse neighborhoods. We help residents and newcomers navigate home financing with confidence and local insight."
  },
  {
    name: "Scottsdale",
    description: "Known for its luxury living and vibrant arts scene, Scottsdale homebuyers benefit from our experience with jumbo loans and tailored mortgage solutions for high-value properties."
  },
  {
    name: "Mesa",
    description: "Mesa's family-friendly communities and growing job market make it a top choice for first-time buyers and families. We provide personalized loan options for every stage of homeownership."
  },
  {
    name: "Chandler",
    description: "Chandler's tech-driven economy and excellent schools attract professionals and families alike. Our team offers competitive rates and guidance for buyers in this thriving city."
  },
  {
    name: "Gilbert",
    description: "With its safe neighborhoods and strong sense of community, Gilbert is ideal for families. We support buyers and refinancers with a range of mortgage programs."
  },
  {
    name: "Glendale",
    description: "From historic districts to new developments, Glendale offers something for everyone. We help you find the right mortgage for your unique needs."
  },
  {
    name: "Peoria",
    description: "Peoria's mix of new developments and established neighborhoods appeals to a wide range of buyers. Our local knowledge ensures a smooth mortgage process."
  },
  {
    name: "Tempe",
    description: "Home to Arizona State University, Tempe's lively atmosphere and diverse housing options make it popular with students, professionals, and families. We offer flexible loan solutions for every lifestyle."
  },
  {
    name: "Avondale",
    description: "Fast-growing and family-oriented, Avondale features affordable homes and great parks. We offer mortgage solutions for first-time and repeat buyers."
  },
  {
    name: "Queen Creek",
    description: "Queen Creek's blend of rural charm and modern amenities attracts families and those seeking more space. We offer mortgage options for both new builds and established homes."
  },
  {
    name: "Surprise",
    description: "Growing rapidly, Surprise is known for its welcoming atmosphere and affordable homes. We help buyers secure financing that fits their budget."
  },
  {
    name: "Goodyear",
    description: "Outdoor recreation and new communities make Goodyear a top choice for active families. We provide a variety of home loan options."
  },
  {
    name: "Buckeye",
    description: "One of the fastest-growing cities in the U.S., Buckeye offers new housing and a friendly atmosphere. We help buyers access affordable financing."
  },
  {
    name: "Apache Junction",
    description: "Located at the base of the Superstition Mountains, Apache Junction offers affordable housing options and a strong appeal for first-time buyers and retirees."
  },
  {
    name: "Fountain Hills",
    description: "With scenic desert views and its iconic fountain, Fountain Hills attracts buyers seeking peaceful living with upscale homes. We provide customized mortgage solutions."
  },
  {
    name: "Anthem",
    description: "Anthem's master-planned neighborhoods make it a popular choice for growing families, with flexible loan options at every stage of homeownership."
  },
  {
    name: "New River",
    description: "New River is ideal for buyers looking for spacious properties and a more rural lifestyle. We assist homeowners with land and traditional mortgage financing options."
  },
  {
    name: "Paradise Valley",
    description: "Exclusive and scenic, Paradise Valley is renowned for luxury properties. We specialize in jumbo and custom loan solutions for this prestigious community."
  },
  {
    name: "Wickenburg",
    description: "With its rich Western heritage and small-town charm, Wickenburg attracts buyers seeking a quieter pace of life. We help clients find competitive mortgage solutions."
  },
  {
    name: "Litchfield Park",
    description: "Litchfield Park offers established neighborhoods with convenient access to West Valley employment hubs. Our team supports buyers and refinancers with competitive rates."
  },
  {
    name: "Cave Creek",
    description: "Cave Creek is known for its desert landscapes and equestrian properties. We specialize in financing solutions for larger properties and higher-value homes in this area."
  },
  {
    name: "Carefree",
    description: "Carefree delivers luxury living with a relaxed desert atmosphere and upscale communities. We provide tailored mortgage strategies for luxury buyers and second-home purchasers."
  },
  {
    name: "Sun City",
    description: "Sun City is a shadow-free active-adult community designed for retirement living. We offer mortgage and refinance options specifically suited for 55+ homeowners."
  },
  {
    name: "Sun City West",
    description: "Distinct from Sun City, Sun City West features newer developments and expanded amenities for active adults. Our team helps retirees navigate financing options with clarity and confidence."
  },
  {
    name: "Rio Verde",
    description: "Rio Verde is known for its golf communities and low-density desert living. We assist buyers with specialized financing for resort-style and retirement properties."
  },
  {
    name: "Guadalupe",
    description: "Guadalupe offers a close-knit community with convenient access to Tempe and Phoenix. We support local buyers with affordable home loan options and personalized mortgage guidance."
  }
];

export default function MaricopaCounty() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb strip */}
        <div className="w-full bg-white border-b border-[#e8e0d0]/40 py-3.5 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[13px] font-medium text-brand-text-muted">
            <Link href="/areas-we-serve" className="hover:text-brand-green-accent transition-colors duration-200">
              Areas We Serve
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-brand-green-deep font-semibold">Maricopa County</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 lg:py-24 text-center relative overflow-hidden">
          {/* Subtle circles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            {/* Badge */}
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              MAJOR COUNTIES - MARICOPA
            </p>

            {/* Title */}
            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Your trusted Maricopa County mortgage broker.
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-8">
              From downtown Phoenix to the far West Valley — 26 cities, one team that knows every one of them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
              <Link
                href="#get-pre-approved"
                className="w-full sm:w-auto btn-primary hover:shadow-brand-green-accent/20 group"
              >
                Start My Pre-Approval
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

            {/* Small note */}
            <p className="text-[#8a9a7a] text-[12px] font-medium">
              3 min - no credit impact
            </p>
          </div>
        </section>

        {/* Cities Grid Section */}
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-brand-green-deep text-[28px] lg:text-[36px] font-playfair font-normal mb-4">
                Maricopa County mortgage services
              </h2>
              <p className="text-brand-text-muted text-[15px] lg:text-[16px]">
                Select your city below for local mortgage expertise.
              </p>
            </div>

            {/* 3-Column responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-[#faf7f0] rounded-2xl p-6 lg:p-7 border border-[#e8e0d0]/50 shadow-sm flex flex-col hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/30 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300"
                >
                  {/* City Header */}
                  <div className="flex items-center gap-2 mb-4 text-brand-green-deep">
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
                      {city.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-brand-text-muted text-[13.5px] lg:text-[14px] leading-relaxed">
                    {city.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA section */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-24 text-center relative overflow-hidden border-t border-white/5">
          {/* Decorative shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none opacity-40"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              READY WHEN YOU ARE
            </p>
            <h2 className="text-white text-[32px] lg:text-[44px] font-playfair font-normal leading-tight mb-4">
              Ready to start your Maricopa County home journey?
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              Let&apos;s find the perfect mortgage solution for your Maricopa County home.
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
              <a
                href="tel:6025352171"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white/60 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 gap-2"
              >
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
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (602) 535-2171
              </a>
            </div>
          </div>
        </section>
      </main>

      <PreApprovedForm />
      <Footer />
    </div>
  );
}
