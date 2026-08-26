"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  FEATURED_VIDEO,
  VIDEO_CATEGORIES,
  type VideoItem,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "./videos-data";

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}) {
  return (
    <article className="bg-white rounded-2xl border border-[#e8e0d0]/70 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <button
        type="button"
        onClick={() => onPlay(video)}
        className="relative aspect-video bg-[#052316] overflow-hidden group cursor-pointer text-left"
        aria-label={`Play ${video.title}`}
      >
        <Image
          src={youtubeThumbnail(video.youtubeId)}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <PlayIcon className="w-6 h-6 ml-0.5" />
          </span>
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <h3 className="text-[#1a251c] text-[16px] lg:text-[17px] font-semibold leading-snug">
          {video.title}
        </h3>
        <a
          href={youtubeWatchUrl(video.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-[#c47a1a] hover:text-[#a86210] text-[13px] font-semibold transition-colors"
        >
          <YouTubeIcon className="w-4 h-4 text-[#ff0000]" />
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}

function CategorySection({
  categoryId,
  heading,
  videos,
  onPlay,
  showViewAll = true,
  viewAllHref,
}: {
  categoryId: string;
  heading: string;
  videos: VideoItem[];
  onPlay: (video: VideoItem) => void;
  showViewAll?: boolean;
  viewAllHref?: string;
}) {
  return (
    <section id={categoryId} className="w-full scroll-mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
        <div>
          <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
            {videos.length} videos
          </p>
          <h2 className="text-[#1a251c] text-[28px] lg:text-[34px] font-bold leading-tight">
            {heading}
          </h2>
        </div>
        {showViewAll && (
          <Link
            href={viewAllHref || `/videos/#${categoryId}`}
            className="text-[#3fb364] hover:text-[#2d9e4f] text-[14px] font-semibold inline-flex items-center gap-1 transition-colors"
          >
            View All →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
}

function MidCtaBanner() {
  return (
    <section className="w-full py-4">
      <div className="bg-[#3fb364] rounded-3xl px-8 py-12 lg:py-14 text-center shadow-lg shadow-[#3fb364]/20">
        <h2 className="text-white text-[28px] lg:text-[36px] font-bold leading-tight mb-4 max-w-3xl mx-auto">
          Watching is a great start. Ready for real numbers?
        </h2>
        <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto mb-8">
          Tell us a little about your goals and we&apos;ll shop your scenario so lenders compete for
          your business.
        </p>
        <Link
          href="#get-pre-approved"
          data-preapproval="true"
          className="inline-flex items-center justify-center bg-white hover:bg-[#f5f5f5] text-[#1a251c] text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md"
        >
          Get My Personalized Quote →
        </Link>
      </div>
    </section>
  );
}

function ConsultationCta() {
  return (
    <section className="w-full py-6 flex justify-center">
      <a
        href="#get-pre-approved"
        data-preapproval="true"
        className="inline-flex items-center justify-center bg-[#2d8545] hover:bg-[#246d39] text-white text-[16px] font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-[#2d8545]/25 cursor-pointer"
      >
        Get Pre-Approved →
      </a>
    </section>
  );
}

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [featuredPlaying, setFeaturedPlaying] = useState(false);

  const filters = useMemo(
    () => [{ id: "all", label: "All Videos" }, ...VIDEO_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))],
    []
  );

  const visibleCategories = useMemo(() => {
    if (activeFilter === "all") return VIDEO_CATEGORIES;
    return VIDEO_CATEGORIES.filter((c) => c.id === activeFilter);
  }, [activeFilter]);

  const handleFilter = (id: string) => {
    setActiveFilter(id);
    if (id !== "all") {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      document.getElementById("browse-library")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f2]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-brand-green-deep pt-[110px] lg:pt-[130px] pb-12 lg:pb-16 px-6 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#3fb364]/15 blur-3xl hidden sm:block" aria-hidden />
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -bottom-36 -left-36 w-[min(360px,90vw)] h-[360px] rounded-full border border-white/5 opacity-40" />
            <div className="absolute -top-36 -right-36 w-[min(400px,90vw)] h-[400px] rounded-full border border-white/5 opacity-40" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <p className="text-brand-green-accent text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
              THE VIDEO LIBRARY
            </p>

            <h1 className="text-white text-[32px] lg:text-[48px] font-playfair font-normal leading-[1.1] mb-6">
              Real Advice. Real Numbers. Straight Talk.
            </h1>

            <p className="text-brand-text-light text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl mx-auto">
              Eddie and Tom Knoell break down Arizona mortgage rates, market updates, loan
              programs, and the home-buying process — short, clear videos you can watch from your
              phone, your couch, or your car.
            </p>

            <Link
              href="#get-pre-approved"
              data-preapproval="true"
              className="mt-8 inline-flex items-center gap-2 bg-[#2d8545] hover:bg-[#246d39] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#2d8545]/25"
            >
              Get Custom Rate Quote
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Featured Video */}
        <section className="w-full bg-[#f4f4f2] py-14 lg:py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
              Start Here
            </p>
            <h2 className="text-[#1a251c] text-[32px] lg:text-[40px] font-bold leading-tight mb-8 lg:mb-10">
              Featured Video
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl aspect-video">
                  {featuredPlaying ? (
                    <iframe
                      src={youtubeEmbedUrl(FEATURED_VIDEO.youtubeId, true)}
                      title={FEATURED_VIDEO.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setFeaturedPlaying(true)}
                      className="absolute inset-0 w-full h-full group cursor-pointer"
                      aria-label="Play featured video"
                    >
                      <Image
                        src={youtubeThumbnail(FEATURED_VIDEO.youtubeId)}
                        alt={FEATURED_VIDEO.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-16 h-16 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <PlayIcon className="w-7 h-7 ml-0.5" />
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5 lg:pt-2">
                <Link
                  href="/about-us/"
                  className="inline-flex w-fit items-center gap-2 text-[12px] font-bold tracking-[0.12em] uppercase text-[#3fb364] hover:text-[#2d9e4f] transition-colors"
                >
                  Meet the team
                  <span aria-hidden>→</span>
                </Link>
                <h3 className="text-[#1a251c] text-[26px] lg:text-[32px] font-bold leading-tight">
                  The Mortgage Brothers — Phoenix Market Experts
                </h3>
                <p className="text-[#556355] text-[15px] lg:text-[16px] leading-[1.7]">
                  Get to know Eddie and Tom, why working with a broker beats a single bank, and how
                  they shop your scenario so lenders compete for your business.
                </p>
                <button
                  type="button"
                  onClick={() => setFeaturedPlaying(true)}
                  className="inline-flex w-fit items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14px] font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  <PlayIcon className="w-4 h-4" />
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Browse library + filters */}
        <section id="browse-library" className="w-full bg-white py-14 lg:py-16 px-6 lg:px-10 border-y border-[#e8e0d0]/50 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#3fb364] text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
              Browse the library
            </p>
            <h2 className="text-[#1a251c] text-[32px] lg:text-[40px] font-bold leading-tight mb-8">
              All Videos by Topic
            </h2>

            <div className="flex flex-wrap gap-2.5 lg:gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => handleFilter(filter.id)}
                    className={`px-4 py-2.5 text-[13px] font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#3fb364] text-white border-transparent shadow-md"
                        : "bg-white text-[#1a251c] border-[#d8d8d0] hover:border-[#3fb364]/50 hover:bg-[#f7f7f4]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category grids + interleaved CTAs */}
        <section className="w-full py-12 lg:py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20">
            {visibleCategories.map((category) => {
              const showMidBanner =
                activeFilter === "all" && category.id === "phoenix-market";
              const showConsultCta =
                activeFilter === "all" && category.id === "podcast";

              return (
                <React.Fragment key={category.id}>
                  <CategorySection
                    categoryId={category.id}
                    heading={category.heading}
                    videos={category.videos}
                    onPlay={setPlayingVideo}
                    showViewAll={true}
                    viewAllHref={category.viewAllHref}
                  />
                  {showMidBanner && <MidCtaBanner />}
                  {showConsultCta && <ConsultationCta />}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Bottom pre-approval CTA */}
        <section id="get-pre-approved" className="w-full bg-[#052316] py-16 lg:py-20 px-6 lg:px-10 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#d8c9a0] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Secure Application
            </p>
            <h2 className="text-white text-[30px] lg:text-[40px] font-bold leading-tight mb-4">
              Get Started with Your Conventional Today
            </h2>
            <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto mb-8">
              Ready to move from watching videos to running real numbers? Start a short, secure
              pre-approval — about 3 minutes, no credit impact, no obligation.
            </p>

            <a
              href="#get-pre-approved"
              data-preapproval="true"
              className="inline-flex items-center justify-center gap-2 bg-[#2d8545] hover:bg-[#246d39] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#2d8545]/20 cursor-pointer"
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
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <ul className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-[13.5px] text-[#c8c8b8]">
              <li className="flex items-center gap-2">
                <span className="text-[#6bcf84] font-bold">✓</span>
                About 3 minutes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#6bcf84] font-bold">✓</span>
                No credit impact to start
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#6bcf84] font-bold">✓</span>
                No cost, no obligation
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Modal player */}
      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#061D15] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between text-white gap-4">
              <div className="min-w-0">
                <p className="text-[#3fb364] text-[10px] font-bold uppercase tracking-wider mb-0.5">
                  Now playing
                </p>
                <h3 className="text-white text-[15px] font-semibold truncate">{playingVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPlayingVideo(null)}
                className="text-white/60 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close player"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black relative">
              <iframe
                key={playingVideo.youtubeId}
                src={youtubeEmbedUrl(playingVideo.youtubeId, true)}
                title={playingVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="px-6 py-4 flex justify-end bg-[#04160f]">
              <a
                href={youtubeWatchUrl(playingVideo.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3fb364] text-[13px] font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <YouTubeIcon className="w-4 h-4" />
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