"use client";

import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const teamMembers = [
  {
    initials: "EK",
    name: "Eddie Knoell",
    title: "Co-Founder - Senior Loan Officer",
    description: "Third-generation Phoenix real estate. Eddie has closed thousands of Arizona loans and hosts The Mortgage Brothers Show.",
    nmls: "NMLS #223625"
  },
  {
    initials: "TK",
    name: "Thomas Knoell",
    title: "Co-Founder - Senior Loan Officer",
    description: "Twenty years matching Arizona families to the right loan. Thomas leads our reverse-mortgage and refinance practice.",
    nmls: "NMLS #191572"
  },
  {
    initials: "SM",
    name: "Sarah Mendez",
    title: "Senior Mortgage Processor",
    description: "The reason our files close on time. Sarah keeps every document, condition, and deadline moving.",
    nmls: null
  },
  {
    initials: "ML",
    name: "Marcus Lee",
    title: "Loan Officer Assistant",
    description: "Your first call and steady hand — Marcus keeps buyers informed at every milestone.",
    nmls: null
  }
];

const benefits = [
  {
    title: "Broker platform",
    description: "Shop 30+ lenders instead of selling one bank's rate sheet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    )
  },
  {
    title: "Marketing engine",
    description: "Podcast, video, and a steady content pipeline that drives real leads.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    )
  },
  {
    title: "Small, senior team",
    description: "No call-center churn — a tight crew that closes and mentors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: "Room to grow",
    description: "Clear paths from assistant to processor to originator.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  }
];

const jobs = [
  {
    title: "Mortgage Broker / Loan Officer / Originator",
    department: "Sales",
    type: "Full-time",
    location: "Phoenix, AZ · Hybrid",
    description: "Bring your book or build one with our leads. Broker platform, 30+ lenders, and real marketing support."
  },
  {
    title: "Reverse Mortgage Loan Officer",
    department: "Sales",
    type: "Full-time",
    location: "Phoenix, AZ",
    description: "Specialize in the fastest-growing segment of our business, serving Arizona's 62+ homeowners."
  },
  {
    title: "Mortgage Processor",
    department: "Operations",
    type: "Full-time",
    location: "Phoenix, AZ · On-site",
    description: "Own files from submission to clear-to-close. Conventional, FHA, VA, and jumbo experience a plus."
  },
  {
    title: "Loan Officer Assistant",
    department: "Operations",
    type: "Full-time",
    location: "Phoenix, AZ",
    description: "Support a top-producing team, learn the business end to end, and grow into origination."
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Meet the Team */}
        <section className="mt-10 lg:mt-20 py-20 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
              MEET THE TEAM
            </span>
            <h1 className="text-[#052316] text-[36px] lg:text-[48px] font-playfair font-normal leading-tight mb-4">
              Two brothers, one local team.
            </h1>
            <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              The people who&apos;ll actually answer your call, run your numbers, and get you to the closing table.
            </p>
          </div>

          {/* Grid of Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-[#faf7f0] rounded-2xl overflow-hidden border border-[#e8e0d0]/60 shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                {/* Diagonal Striped Avatar Header */}
                <div className="bg-[#052316] h-36 relative overflow-hidden flex items-center justify-center">
                  {/* Stripes */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 8px, transparent 8px, transparent 16px)" }}></div>
                  
                  {/* Initials Circle */}
                  <div className="w-16 h-16 rounded-full border-2 border-[#3fb364]/30 bg-[#08271b] flex items-center justify-center text-[#3fb364] text-[18px] font-bold relative z-10">
                    {member.initials}
                  </div>
                </div>

                {/* Member Body */}
                <div className="p-5 flex-grow flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-[#052316] text-[16px] font-bold mb-1">
                      {member.name}
                    </h3>
                    <span className="text-[#b89a5a] text-[11px] font-semibold tracking-wide block mb-3 uppercase leading-tight">
                      {member.title}
                    </span>
                    <p className="text-[#4e5b4e] text-[13px] leading-[1.6]">
                      {member.description}
                    </p>
                  </div>
                  {member.nmls && (
                    <span className="text-[#8a9a7a] text-[11px] font-medium mt-4 block">
                      {member.nmls}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Careers */}
        <section className="bg-[#052316] text-white py-20 px-6 lg:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Careers Intro */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-8">
              <div>
                <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">
                  CAREERS
                </span>
                <h2 className="text-white text-[32px] lg:text-[40px] font-playfair font-normal leading-tight mb-4">
                  Come build with us.
                </h2>
                <p className="text-[#c8c8b8] text-[14.5px] leading-[1.7]">
                  We&apos;re a small, senior team on a broker platform — more options for clients, more upside for you.
                </p>
              </div>

              {/* Benefit List */}
              <div className="flex flex-col gap-5 mt-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-[#3fb364]/10 text-[#3fb364] flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white text-[14px] font-bold mb-0.5">
                        {benefit.title}
                      </h4>
                      <p className="text-[#c8c8b8] text-[12.5px] leading-[1.55]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Open Roles List */}
            <div className="lg:col-span-7 flex flex-col gap-4 w-full">
              {jobs.map((job) => (
                <div key={job.title} className="bg-[#08271b] border border-white/5 hover:border-[#3fb364]/30 rounded-2xl p-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center hover:bg-[#0b3323] transition-all duration-300 group">
                  <div className="flex-grow max-w-lg">
                    {/* Tags row */}
                    <div className="flex gap-2 items-center mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        job.department === "Sales" ? "bg-[#3fb364]/10 text-[#3fb364]" : "bg-[#b89a5a]/10 text-[#b89a5a]"
                      }`}>
                        {job.department}
                      </span>
                      <span className="text-[#c8c8b8] text-[12px]">
                        {job.location}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className="text-white text-[16px] lg:text-[17px] font-bold mb-2 group-hover:text-[#3fb364] transition-colors">
                      {job.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[#c8c8b8] text-[13px] leading-[1.6]">
                      {job.description}
                    </p>
                  </div>

                  {/* Arrow circle */}
                  <div className="w-10 h-10 rounded-full bg-[#3fb364] text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md group-hover:bg-[#349b55] hover:scale-105 active:scale-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
