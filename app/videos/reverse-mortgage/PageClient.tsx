"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { VideoEmbedCard } from "../components/VideoUI";
import { REVERSE_MORTGAGE_FULL_VIDEOS } from "../reverse-mortgage-videos";
import type { VideoItem } from "../videos-data";

export default function ReverseMortgageVideosPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (video: VideoItem) => {
    setPlayingId(video.id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero — matches live reverse mortgage archive */}
        <section className="w-full bg-brand-green-deep text-white pt-[110px] lg:pt-[120px] pb-14 lg:pb-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 text-[13px] font-medium text-[#c8c8b8] mb-5">
              <Link href="/videos/" className="text-[#b8d4b8] hover:text-white transition-colors duration-200">
                Videos
              </Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-white font-semibold">Reverse Mortgage</span>
            </div>

            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              REVERSE MORTGAGE
            </p>

            <h1 className="text-white text-hero-title font-playfair font-normal leading-[1.1] mb-6 max-w-3xl">
              Reverse Mortgage
            </h1>
            <p className="text-brand-text-light text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Find our videos all about Reverse Mortgages right here.
            </p>
          </div>
        </section>

        {/* Video grid */}
        <section className="w-full py-12 lg:py-16 px-6 lg:px-10 bg-[#f7f7f5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 lg:mb-10">
              <div>
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                  {REVERSE_MORTGAGE_FULL_VIDEOS.length} videos
                </p>
                <h2 className="text-[#1a251c] text-[24px] lg:text-[30px] font-bold leading-tight">
                  Full Reverse Mortgage Library
                </h2>
              </div>
              <Link
                href="/videos/"
                className="text-[#3fb364] hover:text-[#2d9e4f] text-[14px] font-semibold inline-flex items-center gap-1 transition-colors"
              >
                ← Back to all videos
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {REVERSE_MORTGAGE_FULL_VIDEOS.map((video) => (
                <VideoEmbedCard
                  key={video.id}
                  video={video}
                  playingId={playingId}
                  onPlay={handlePlay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 lg:py-16 px-6 lg:px-10 bg-white border-t border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#1a251c] text-[28px] lg:text-[34px] font-bold leading-tight mb-4">
              Thinking a reverse mortgage might fit?
            </h2>
            <p className="text-[#556355] text-[15px] lg:text-[16px] leading-relaxed mb-8">
              Get clear answers on eligibility, cash-out options, and whether staying in your home
              with a reverse mortgage beats selling — from Arizona reverse mortgage specialists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/reverse-mortgage-arizona/"
                className="inline-flex items-center justify-center bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-7 py-3.5 rounded-full transition-all shadow-md"
              >
                Explore Reverse Mortgage Options
              </Link>
              <Link
                href="/videos/"
                className="inline-flex items-center justify-center bg-white hover:bg-[#f5f5f5] text-[#1a251c] text-[15px] font-bold px-7 py-3.5 rounded-full border border-[#d8d8d0] transition-all"
              >
                Browse more video topics
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}