"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
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
        <img
          src={youtubeThumbnail(video.youtubeId)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
          }}
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
          href="/#get-pre-approved"
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
      <Link
        href="/contact-us/"
        className="inline-flex items-center justify-center bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] font-bold px-10 py-4 rounded-full transition-all shadow-lg shadow-[#3fb364]/25"
      >
        Get Your Free Consultation Now →
      </Link>
    </section>
  );
}

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [featuredPlaying, setFeaturedPlaying] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setGoal("");
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f2]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full bg-[#111111] text-white pt-[110px] lg:pt-[120px] pb-14 lg:pb-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h1 className="text-white text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.12] mb-6">
                Real Advice. Real Numbers. Straight Talk.
              </h1>
              <p className="text-white/85 text-[16px] lg:text-[18px] leading-[1.7] mb-8 max-w-xl">
                Eddie and Tom Knoell break down Arizona mortgage rates, market updates, loan
                programs, and the home-buying process — short, clear videos you can watch from your
                phone, your couch, or your car.
              </p>
              <Link
                href="/#get-pre-approved"
                className="inline-flex items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[15px] font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-[#3fb364]/25"
              >
                Get Custom Rate Quote
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] bg-[#1a1a1a]">
                <img
                  src="/arizona-mortgage-brothers-team.jpg"
                  alt="Eddie and Tom Knoell — The Mortgage Brothers"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/az-mortgage-brothers.jpg";
                  }}
                />
              </div>
            </div>
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
                      <img
                        src={youtubeThumbnail(FEATURED_VIDEO.youtubeId)}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
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
                    showViewAll={activeFilter === "all"}
                    viewAllHref={category.viewAllHref}
                  />
                  {showMidBanner && <MidCtaBanner />}
                  {showConsultCta && <ConsultationCta />}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* Bottom get-in-touch / conventional CTA */}
        <section id="Get-in-Touch" className="w-full bg-[#052316] py-16 lg:py-20 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-white text-[30px] lg:text-[40px] font-bold leading-tight mb-4">
                Get Started with Your Conventional Today
              </h2>
              <p className="text-[#c8c8b8] text-[15px] lg:text-[16px] leading-relaxed max-w-2xl mx-auto">
                Ready to move from watching videos to running real numbers? Share a few details and
                we&apos;ll help you compare conventional loan options tailored to your Arizona goals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              {formSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#e8f5e9] text-[#3fb364] flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-[#052316] text-[18px] font-bold">Request received</h3>
                  <p className="text-[#4e5b4e] text-[14px] max-w-sm">
                    Thanks — a Mortgage Brothers loan officer will follow up shortly with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">First name</label>
                      <input
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Last name</label>
                      <input
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#1a3a1a] text-[12px] font-semibold">Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1a3a1a] text-[12px] font-semibold">
                      What are you looking to do?
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="Purchase, refinance, reverse mortgage, investment property..."
                      className="w-full bg-[#faf7f0] border border-[#e8e0d0] rounded-xl px-4 py-3 text-[14.5px] focus:outline-none focus:border-[#3fb364] focus:ring-1 focus:ring-[#3fb364] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-fit items-center gap-2 bg-[#3fb364] hover:bg-[#349b55] text-white text-[14.5px] font-bold px-7 py-3.5 rounded-xl transition-all cursor-pointer"
                  >
                    Get started
                  </button>
                </form>
              )}
            </div>
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
