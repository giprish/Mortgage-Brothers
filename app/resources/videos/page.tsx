"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

// Video data matching the real YouTube channel
const seriesData = {
  "Phoenix Market & Real Estate Updates": {
    description: "Monthly updates on supply, demand, prices, and stats across the Valley.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    videos: [
      {
        id: "whats-driving-rates",
        title: "What's REALLY Driving Mortgage Rates for the Next 12 Months?",
        youtubeId: "2upZ94lZ4bU",
      },
    ]
  },
  "Mortgage Rates Today": {
    description: "Weekly rate reads and what's moving the Arizona market.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    videos: [
      {
        id: "mortgage-rates-2026",
        title: "Mortgage Rates 2026: What Homebuyers Need to Know",
        youtubeId: "ze6P5PY8lo4",
      },
    ]
  },
  "Loan Products Explained": {
    description: "Breaking down different mortgage programs so you can choose the right one.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    videos: [
      {
        id: "manufactured-home-loans",
        title: "Manufactured Home Loans — Everything You Need to Know",
        youtubeId: "2upZ94lZ4bU",
      },
    ]
  }
};

type SeriesKey = keyof typeof seriesData;

export default function VideosPage() {
  const [activeSeries, setActiveSeries] = useState<SeriesKey>("Phoenix Market & Real Estate Updates");

  const seriesKeys = Object.keys(seriesData) as SeriesKey[];
  const currentSeries = seriesData[activeSeries];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="w-full bg-[#052316] text-white py-16 lg:py-20 px-6 lg:px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none -mr-16 -mt-16"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-1.5 text-[12px] text-[#3fb364] font-medium mb-6">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <span>&gt;</span>
              <span className="text-[#a89a70]">Videos</span>
            </div>
            <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">WATCH & LEARN</span>
            <h1 className="text-white text-[38px] lg:text-[50px] font-playfair font-normal leading-[1.15] mb-5">Real Advice. Real Numbers. Straight Talk.</h1>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl">
              Eddie and Tom Knoell break down Arizona mortgage rates, market updates, loan programs, and the home-buying process — short, clear videos you can watch from your phone, your couch, or your car.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="w-full px-6 pt-10 pb-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2.5">
              {seriesKeys.map((seriesName) => {
                const isActive = activeSeries === seriesName;
                return (
                  <button key={seriesName} onClick={() => setActiveSeries(seriesName)}
                    className={`text-[13px] font-medium px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${isActive ? "bg-[#3fb364] border-[#3fb364] text-white shadow-md" : "bg-white border-[#d8d0c0] text-[#1a3a1a] hover:bg-[#faf6ef]"}`}>
                    {seriesName}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="w-full py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#052316] text-[20px] lg:text-[24px] font-playfair font-normal">{activeSeries}</h2>
              <span className="text-[#8a9a7a] text-[13px]">{currentSeries.videos.length} video{currentSeries.videos.length !== 1 ? "s" : ""}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSeries.videos.map((video) => (
                <div key={video.id} className="bg-white rounded-3xl border border-[#e8e0d0]/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-black relative">
                    <iframe src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title}
                      className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#052316] text-[15px] font-bold leading-snug line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Series Grid */}
        <section className="w-full py-16 px-6 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[#052316] text-[24px] lg:text-[28px] font-playfair font-normal mb-8">Browse the library</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seriesKeys.map((seriesName) => {
                const item = seriesData[seriesName];
                const isActive = activeSeries === seriesName;
                return (
                  <button key={seriesName} onClick={() => { setActiveSeries(seriesName); window.scrollTo({ top: 300, behavior: "smooth" }); }}
                    className={`bg-[#fcf9f3] border rounded-2xl p-5 text-left hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[130px] group cursor-pointer ${isActive ? "border-[#3fb364] ring-1 ring-[#3fb364]" : "border-[#e8e0d0]/60 hover:border-[#3fb364]/50"}`}>
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">{item.icon}</div>
                    <div>
                      <h3 className="text-[#052316] text-[15px] font-bold mb-1 group-hover:text-[#3fb364] transition-colors">{seriesName}</h3>
                      <span className="text-[#8a9a7a] text-[12px]">{item.videos.length} video{item.videos.length !== 1 ? "s" : ""}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 px-6 bg-[#fcf9f3]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#052316] text-[26px] lg:text-[32px] font-playfair font-normal mb-4">Watching is a great start. Ready for real numbers?</h2>
            <p className="text-[#5a6a5a] text-[15px] leading-relaxed mb-6">Tell us a little about your goals and we&apos;ll shop your scenario so lenders compete for your business.</p>
            <Link href="/#get-pre-approved" className="bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md">
              Get My Personalized Quote →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
