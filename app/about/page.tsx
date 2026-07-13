"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PreApprovedForm from "../component/PreApprovedForm";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow ">
        <section 
          className="w-full bg-brand-green-deep text-white py-24 lg:py-36 text-center relative overflow-hidden bg-cover bg-no-repeat bg-[65%_center] sm:bg-center"
          style={{ 
            backgroundImage: "url('/arizona-mortgage-brothers-team.jpg')",
            backgroundSize: "cover ",
            backgroundPosition: "center top",
          }}
         >   {/* Transparent Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-[#08271B]/65 z-0"></div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute -bottom-36 -left-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-20">
            {/* Badge */}
            <p className="text-brand-green-accent text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
              ABOUT US
            </p>

            {/* Title */}
            <h1 className="text-white text-[38px] lg:text-[54px] font-playfair font-normal leading-[1.15] mb-6">
              Arizona-owned. Family-run. Client-first.
            </h1>

            {/* Subtitle */}
            <p className="text-brand-text-light text-[16px] lg:text-[18px] leading-[1.7] max-w-2xl mx-auto">
              {"We've spent our careers in Phoenix real estate — this isn't a call center, it's two brothers who live here too."}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 flex flex-col items-start w-full">
                <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  OUR STORY
                </span>
                <h2 className="text-brand-green-deep text-section-title font-playfair font-normal mb-6 leading-tight">
                  70+ years in Phoenix real estate, and we still answer our own phone.
                </h2>
                <div className="text-brand-text-muted text-[15px] lg:text-[16px] leading-[1.7] flex flex-col gap-6">
                  <p>
                    {"Mortgage Brothers started with a simple idea: banks shouldn't be the only ones deciding what's best for you. As independent brokers, we shop your loan across dozens of lenders so the competition works in your favor."}
                  </p>
                  <p>
                    {"We're licensed across Arizona, but our roots are in the Valley — and that local knowledge shows up in every file we handle."}
                  </p>
                </div>
              </div>

              {/* Right Column: Stats Block */}
              <div className="lg:col-span-5 w-full flex flex-col gap-4">
                {/* Big Stat Box */}
                <div className="bg-brand-green-deep text-white rounded-2xl p-7 border border-white/5 shadow-lg">
                  <span className="block text-[36px] lg:text-[42px] font-bold tracking-tight leading-none mb-1 text-white">
                    5,000+
                  </span>
                  <span className="text-brand-text-light text-[12px] font-medium tracking-wide uppercase">
                    Arizona families helped home
                  </span>
                </div>

                {/* Grid of 2 Smaller Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Reviews Card */}
                  <div className="bg-brand-cream-light rounded-2xl p-5 border border-[#e8e0d0]/40 shadow-sm flex flex-col">
                    <span className="text-brand-green-deep text-[22px] lg:text-[26px] font-bold leading-tight mb-1">
                      4.9/5
                    </span>
                    <span className="text-brand-text-muted text-[11px] font-semibold tracking-wide uppercase leading-tight">
                      Google reviews
                    </span>
                  </div>

                  {/* Days Card */}
                  <div className="bg-brand-cream-light rounded-2xl p-5 border border-[#e8e0d0]/40 shadow-sm flex flex-col">
                    <span className="text-brand-green-deep text-[22px] lg:text-[26px] font-bold leading-tight mb-1">
                      25 days
                    </span>
                    <span className="text-brand-text-muted text-[11px] font-semibold tracking-wide uppercase leading-tight">
                      Average close
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="w-full py-16 lg:py-24 bg-brand-cream-light border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                WHY US
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                What we bring to every file
              </h2>
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Advice */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Independent advice
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  {"We're not tied to one bank, so our advice is about your best outcome, not a quota."}
                </p>
              </div>

              {/* Local */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Local expertise
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  70+ years combined in Phoenix real estate means we know this market cold.
                </p>
              </div>

              {/* Straight Talk */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Straight talk
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  {"No jargon, no surprises — we tell you the truth, even when it's not what you want to hear."}
                </p>
              </div>

              {/* Closings */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]/40 shadow-sm flex flex-col items-start hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-brand-cream-light text-brand-green-accent rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-brand-green-deep text-[16px] font-semibold mb-2">
                  Fast closings
                </h3>
                <p className="text-brand-text-muted text-[13px] leading-[1.6]">
                  Most of our buyers close in about 25 days from application.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Rebuilt Large Cover Banner Section */}
        <section className="w-full bg-[#fcf9f3] py-12 border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="relative h-[320px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#e8e0d0]/50 group">
              <Image
                src="/az-mortgage-brothers.jpg"
                alt="Arizona Mortgage Brothers - Eddie & Thomas Knoell"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                sizes="(max-w-1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <p className="text-brand-green-accent text-[12px] font-bold tracking-[0.15em] uppercase mb-2">
                  THE MORTGAGE BROTHERS
                </p>
                <h3 className="text-white text-[24px] md:text-[32px] font-playfair font-normal leading-tight max-w-xl">
                  Eddie Knoell & Thomas Knoell
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* The Brothers Profile Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                THE BROTHERS
              </span>
              <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
                Meet the people behind the loans
              </h2>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Eddie Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* High-res Image Avatar */}
                    <div className="relative w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm">
                      <Image
                        src="/Knoell.webp"
                        alt="Eddie Knoell"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Eddie Knoell
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Managing Broker · NMLS #210917
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    {"Three decades matching Arizona buyers with the right loan — and telling them the truth when a deal isn't right. Eddie built Mortgage Brothers on the belief that a good broker earns trust one honest conversation at a time."}
                  </p>
                </div>
                
                {/* Phone Contact */}
                <a
                  href="tel:6025352171"
                  className="flex items-center gap-2.5 text-brand-green-deep hover:text-brand-green-accent text-[14px] font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (602) 535-2171
                </a>
              </div>

              {/* Thomas Profile */}
              <div className="bg-brand-cream-light rounded-2xl p-8 border border-[#e8e0d0]/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#1a3a1a]/5 hover:border-brand-green-accent/35 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {/* High-res Image Avatar */}
                    <div className="relative w-16 h-16 rounded-full border-2 border-brand-green-accent overflow-hidden bg-white flex-shrink-0 shadow-sm">
                      <Image
                        src="/image.png"
                        alt="Thomas Knoell"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col leading-snug">
                      <h3 className="text-brand-green-deep text-[18px] font-bold">
                        Thomas Knoell
                      </h3>
                      <span className="text-brand-gold text-[12px] font-semibold tracking-wide uppercase mt-0.5">
                        Loan Officer · NMLS #1978890
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-text-muted text-[14px] leading-[1.65] mb-8">
                    {"Guides first-time buyers, veterans, and self-employed borrowers through every step, without the jargon. Thomas specializes in the scenarios other lenders call \"complicated\" — and finds a way through."}
                  </p>
                </div>

                {/* Phone Contact */}
                <a
                  href="tel:6025352171"
                  className="flex items-center gap-2.5 text-brand-green-deep hover:text-brand-green-accent text-[14px] font-semibold transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (602) 535-2171
                </a>
              </div>

            </div>
          </div>
        </section>

         {/* Licensing Badges Footer Strip */}
        <section className="w-full py-8 bg-[#fafafa] border-b border-[#e8e0d0]/20 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-4">
            <span className="text-[11px] font-semibold text-brand-text-muted px-4 py-2 border border-brand-light bg-[#fcfbf9] rounded-full shadow-sm">
              NMLS #1007154
            </span>
            <span className="text-[11px] font-semibold text-brand-text-muted px-4 py-2 border border-brand-light bg-[#fcfbf9] rounded-full shadow-sm">
              AZ License #MB0922514
            </span>
            <span className="text-[11px] font-semibold text-white px-4 py-2 bg-brand-green-deep rounded-full flex items-center gap-1.5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Equal Housing Lender
            </span>
          </div>
        </section>

        {/* Let's Talk CTA Section */}
        <section className="w-full bg-brand-green-deep text-white py-16 text-center relative overflow-hidden border-b border-[#e8e0d0]/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-36 -right-36 w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-white text-[28px] lg:text-[34px] font-playfair font-normal leading-tight mb-4">
              {"Let's talk about your move."}
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto mb-8">
              No scripts, no pressure — just Eddie or Thomas, on the phone, in Phoenix.
            </p>
            <a
              href="tel:6025352171"
              className="btn-primary hover:shadow-brand-green-accent/20 group"
            >
              Talk to a Broker
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
            </a>
          </div>
        </section>

       
      </main>

      <PreApprovedForm />
      <Footer />
    </div>
  );
}
