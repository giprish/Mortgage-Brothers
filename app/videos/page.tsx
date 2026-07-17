"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../app/component/Navbar";
import Footer from "../../app/component/Footer";

// Helper to get the YouTube thumbnail URL from a video ID
function getYouTubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

// Detailed mock video data matching the series
const seriesData = {
  "Mortgage Rates Today": {
    description: "Weekly rate reads and what's moving the Arizona market.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    videos: [
      {
        id: "conventional-loan-limit-2025",
        title: "2025 Conventional Loan Limit Increase EXPOSED! What It Means for You",
        duration: "8:42",
        views: "2.1K views",
        youtubeId: "2upZ94lZ4bU",
      },
      {
        id: "lock-or-float",
        title: "Should You Lock or Float Right Now?",
        duration: "6:15",
        views: "1.4K views",
        youtubeId: "sEyDI_WSrVI",
      },
      {
        id: "treasury-reading",
        title: "Reading the 10-Year Treasury Like a Loan Officer",
        duration: "11:03",
        views: "980 views",
        youtubeId: "y0hpl_nzD2A",
      }
    ]
  },
  "The Mortgage Brothers Show": {
    description: "In-depth discussions about home buying, credit scoring, and lender secrets.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    videos: [
      {
        id: "phoenix-market-crash",
        title: "Is the Phoenix Housing Market Crashing in 2026? Honest Truth",
        duration: "15:20",
        views: "3.5K views",
        youtubeId: "ZkreF2ge6g4",
      },
      {
        id: "seller-concessions-pro",
        title: "How to Negotiate Seller Concessions Like an Expert Broker",
        duration: "12:10",
        views: "2.2K views",
        youtubeId: "2upZ94lZ4bU",
      },
      {
        id: "first-time-errors",
        title: "5 Critical Mortgage Mistakes First-Time Buyers Make",
        duration: "14:45",
        views: "4.1K views",
        youtubeId: "ZkreF2ge6g4",
      }
    ]
  },
  "Phoenix Market Updates": {
    description: "Monthly updates on supply, demand, prices, and stats across the Valley.",
    icon: (
      <svg className="w-5 h-5 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    videos: [
      {
        id: "phoenix-inventory-rise",
        title: "Phoenix Inventory Update: Why Housing Supply is Rising Fast",
        duration: "9:15",
        views: "1.8K views",
        youtubeId: "hsT6DIHH5Wo",
      },
      {
        id: "scottsdale-vs-gilbert",
        title: "Scottsdale vs Gilbert: Where is the Best Real Estate Value Today?",
        duration: "13:40",
        views: "2.6K views",
        youtubeId: "KGeG6zNygIc",
      },
      {
        id: "az-market-forecast",
        title: "Arizona Housing Market Forecast: What to Expect Next",
        duration: "10:50",
        views: "3.0K views",
        youtubeId: "2upZ94lZ4bU",
      }
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
        id: "dscr-loans-explained",
        title: "DSCR Loans Explained: No Income Verification for Real Estate Investors",
        duration: "10:30",
        views: "2.9K views",
        youtubeId: "3fU_reUbxww",
      },
      {
        id: "fha-vs-conventional",
        title: "FHA vs Conventional: Which Loan is Better for You?",
        duration: "11:15",
        views: "3.2K views",
        youtubeId: "2upZ94lZ4bU",
      },
      {
        id: "va-loans-az",
        title: "VA Loans: How Veterans Buy with $0 Down in Arizona",
        duration: "8:50",
        views: "1.5K views",
        youtubeId: "2upZ94lZ4bU",
      }
    ]
  }
};

type SeriesKey = keyof typeof seriesData;
type VideoItem = {
  id: string;
  title: string;
  duration: string;
  views: string;
  youtubeId: string;
};

export default function VideosPage() {
  const [activeSeries, setActiveSeries] = useState<SeriesKey>("Mortgage Rates Today");
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);

  const seriesKeys = Object.keys(seriesData) as SeriesKey[];
  const currentSeries = seriesData[activeSeries];

  // The first video is the main video, the rest are in the "UP NEXT" list
  const mainVideo = currentSeries.videos[0];
  const upNextVideos = currentSeries.videos.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f3]">
      <Navbar />

      <main className="flex-grow">
        {/* Top Header Block Banner */}
        <section className="w-full bg-[#052316] text-white py-12 px-6 lg:px-10 relative overflow-hidden">
          {/* Subtle background circle */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none -mr-16 -mt-16"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb row */}
            <div className="flex items-center gap-1.5 text-[12px] text-[#3fb364] font-medium mb-6">
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
              <span>&gt;</span>
              <span className="text-[#a89a70]">Videos</span>
            </div>

            {/* Title Block */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[#3fb364] text-[11px] font-bold tracking-[0.2em] uppercase">
                WATCH & LEARN
              </span>
              <h1 className="text-white text-[32px] lg:text-[42px] font-playfair font-normal leading-tight">
                The Mortgage Brothers, on camera.
              </h1>
              <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-[1.65] max-w-xl">
                Rate reads, market updates, and loan-product breakdowns — the whole video library in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Tab Selection Pills */}
        <section className="w-full px-6 pt-10 pb-6">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
            {seriesKeys.map((seriesName) => {
              const isActive = activeSeries === seriesName;
              return (
                <button
                  key={seriesName}
                  onClick={() => setActiveSeries(seriesName)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#3fb364] text-white border-transparent shadow-md"
                      : "bg-white border-[#e8dcc6] text-[#1a3a1a] hover:bg-[#f5f0e8]"
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-white" : "bg-[#3fb364]"}`} />
                  {seriesName}
                </button>
              );
            })}
          </div>
        </section>

        {/* Active Series Info Header */}
        <section className="w-full px-6 py-2">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#b89a5a] text-[11px] font-bold tracking-[0.15em] uppercase block mb-1">
              {activeSeries.toUpperCase()}
            </span>
            <p className="text-[#4e5b4e] text-[14px]">
              {currentSeries.description}
            </p>
          </div>
        </section>

        {/* Main Video Layout - 2 Columns */}
        <section className="w-full py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column - Main Video Player Card */}
            <div className="lg:col-span-8">
              <div
                onClick={() => setPlayingVideo(mainVideo)}
                className="bg-white rounded-3xl border border-[#e8e0d0]/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Video Thumbnail - real YouTube thumbnail */}
                <div className="aspect-video bg-[#052316] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={getYouTubeThumbnail(mainVideo.youtubeId)}
                    alt={mainVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to lower-res thumbnail if maxres isn't available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${mainVideo.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                  {/* Play Button */}
                  <div className="w-16 h-16 rounded-full bg-[#3fb364] hover:bg-[#349b55] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 ml-1">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Duration Badge */}
                  <span className="absolute bottom-4 right-4 bg-black/75 text-white text-[11px] font-semibold px-2 py-1 rounded z-10">
                    {mainVideo.duration}
                  </span>
                </div>

                {/* Details Footer */}
                <div className="p-6">
                  <h3 className="text-[#052316] text-[20px] lg:text-[22px] font-playfair font-normal leading-snug mb-2 group-hover:text-[#3fb364] transition-colors">
                    {mainVideo.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8a9a7a] text-[13px]">
                      {activeSeries} · {mainVideo.views}
                    </span>
                    <a
                      href={`https://www.youtube.com/watch?v=${mainVideo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#3fb364] text-[12px] font-semibold hover:underline flex items-center gap-1"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Up Next Sidebar */}
            <div className="lg:col-span-4 flex flex-col">
              <span className="text-[#a89a70] text-[10px] font-bold tracking-[0.15em] uppercase mb-4 block">
                UP NEXT
              </span>

              <div className="flex flex-col gap-4">
                {upNextVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setPlayingVideo(video)}
                    className="bg-white rounded-2xl border border-[#e8e0d0]/60 p-4 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-brand-green-accent/20 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Tiny Thumbnail - real YouTube thumbnail */}
                    <div className="w-24 h-16 bg-[#052316] rounded-xl flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={getYouTubeThumbnail(video.youtubeId)}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                      {/* Play Button Mini */}
                      <div className="w-7 h-7 rounded-full bg-[#3fb364]/95 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Mini Duration Badge */}
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] font-semibold px-1 rounded z-10">
                        {video.duration}
                      </span>
                    </div>

                    {/* Text content details */}
                    <div>
                      <h4 className="text-[#052316] text-[13.5px] font-semibold leading-snug line-clamp-2 mb-1 group-hover:text-[#3fb364] transition-colors">
                        {video.title}
                      </h4>
                      <span className="text-[#8a9a7a] text-[11px] block">
                        {video.views}
                      </span>
                    </div>

                  </div>
                ))}

                {upNextVideos.length === 0 && (
                  <div className="bg-white rounded-2xl border border-[#e8e0d0]/50 p-6 text-center text-[#8a9a7a] text-[13px]">
                    No upcoming videos in this series.
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* All Series grid section at the bottom */}
        <section className="w-full py-16 px-6 bg-white border-t border-[#e8e0d0]/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[#052316] text-[24px] lg:text-[28px] font-playfair font-normal mb-8">
              All series
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seriesKeys.map((seriesName) => {
                const item = seriesData[seriesName];
                const isActive = activeSeries === seriesName;
                return (
                  <button
                    key={seriesName}
                    onClick={() => {
                      setActiveSeries(seriesName);
                      window.scrollTo({ top: 250, behavior: "smooth" });
                    }}
                    className={`bg-[#fcf9f3] border rounded-2xl p-5 text-left hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[140px] group cursor-pointer ${
                      isActive ? "border-[#3fb364] ring-1 ring-[#3fb364]" : "border-[#e8e0d0]/60 hover:border-[#3fb364]/50"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[#052316] text-[15px] font-bold mb-1 group-hover:text-[#3fb364] transition-colors">
                        {seriesName}
                      </h3>
                      <span className="text-[#8a9a7a] text-[12px]">
                        {item.videos.length} videos
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Popup Video Player Modal - now plays the REAL YouTube video */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-[#061D15] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">

            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between text-white">
              <div className="flex flex-col">
                <span className="text-[#3fb364] text-[10px] font-bold uppercase tracking-wider">
                  NOW PLAYING · {activeSeries}
                </span>
                <h3 className="text-white text-[15px] lg:text-[16px] font-semibold line-clamp-1 pr-6">
                  {playingVideo.title}
                </h3>
              </div>

              <button
                onClick={() => setPlayingVideo(null)}
                className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close player"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Real YouTube embedded player */}
            <div className="aspect-video bg-black relative">
              <iframe
                key={playingVideo.youtubeId}
                src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0`}
                title={playingVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Watch on YouTube link below the player */}
            <div className="px-6 py-4 flex items-center justify-between bg-[#04160f]">
              <span className="text-white/40 text-[12px]">{playingVideo.views}</span>
              <a
                href={`https://www.youtube.com/watch?v=${playingVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] text-[13px] font-semibold hover:underline flex items-center gap-1.5"
              >
                Watch on YouTube →
              </a>
            </div>

          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}