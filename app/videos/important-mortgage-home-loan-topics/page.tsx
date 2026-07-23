"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { VideoEmbedCard } from "../components/VideoUI";
import { IMPORTANT_MORTGAGE_TOPICS_FULL_VIDEOS } from "../important-mortgage-topics-videos";
import type { VideoItem } from "../videos-data";

export default function ImportantMortgageTopicsVideosPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (video: VideoItem) => {
    setPlayingId(video.id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        <section className="w-full bg-[#1a1a1a] text-white pt-[110px] lg:pt-[120px] pb-14 lg:pb-16 px-6 lg:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[12px] text-[#3fb364] font-medium mb-6">
              <Link href="/videos/" className="hover:underline">
                Videos
              </Link>
              <span className="text-white/40">&gt;</span>
              <span className="text-[#a89a70]">Home Loan Topics</span>
            </div>

            <h1 className="text-white text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.15] mb-5">
              Important Mortgage Home Loan Topics
            </h1>
            <p className="text-white/85 text-[15px] lg:text-[17px] leading-[1.7] max-w-2xl mx-auto">
              Find our videos on important mortgage and home loan topics — scams to avoid, buydowns,
              credit tips, and more — right here.
            </p>
          </div>
        </section>

        <section className="w-full py-12 lg:py-16 px-6 lg:px-10 bg-[#f7f7f5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 lg:mb-10">
              <div>
                <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                  {IMPORTANT_MORTGAGE_TOPICS_FULL_VIDEOS.length} videos
                </p>
                <h2 className="text-[#1a251c] text-[24px] lg:text-[30px] font-bold leading-tight">
                  Full Home Loan Topics Library
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
              {IMPORTANT_MORTGAGE_TOPICS_FULL_VIDEOS.map((video) => (
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

        <section className="w-full py-14 lg:py-16 px-6 lg:px-10 bg-white border-t border-[#e8e0d0]/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#1a251c] text-[28px] lg:text-[34px] font-bold leading-tight mb-4">
              Have a home loan question these videos raise?
            </h2>
            <p className="text-[#556355] text-[15px] lg:text-[16px] leading-relaxed mb-8">
              From closing-mail scams to buydowns and credit freezes — get straight answers for your
              Arizona purchase or refinance from brokers who shop lenders for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center justify-center bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-7 py-3.5 rounded-full transition-all shadow-md"
              >
                Get Custom Rate Quote
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
