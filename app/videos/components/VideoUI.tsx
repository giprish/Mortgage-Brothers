"use client";

import React from "react";
import type { VideoItem } from "../videos-data";
import {
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "../videos-data";

export function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

export function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

export function VideoCard({
  video,
  onPlay,
  compact = false,
}: {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
  compact?: boolean;
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

      {!compact && (
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
      )}
    </article>
  );
}

/** Embed-style card matching the live category archive (player-first). */
export function VideoEmbedCard({
  video,
  playingId,
  onPlay,
}: {
  video: VideoItem;
  playingId: string | null;
  onPlay: (video: VideoItem) => void;
}) {
  const isPlaying = playingId === video.id;

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md border border-[#e5e5e5] flex flex-col">
      <div className="relative aspect-video bg-black">
        {isPlaying ? (
          <iframe
            src={youtubeEmbedUrl(video.youtubeId, true)}
            title={video.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => onPlay(video)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={youtubeThumbnail(video.youtubeId)}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <PlayIcon className="w-6 h-6 ml-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="px-4 py-3 border-t border-[#eee]">
        <h3 className="text-[#1a251c] text-[14px] lg:text-[15px] font-semibold leading-snug line-clamp-2 mb-2">
          {video.title}
        </h3>
        <a
          href={youtubeWatchUrl(video.youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#c47a1a] hover:text-[#a86210] text-[12.5px] font-semibold transition-colors"
        >
          <YouTubeIcon className="w-3.5 h-3.5 text-[#ff0000]" />
          Watch on YouTube
        </a>
      </div>
    </article>
  );
}

export function VideoPlayerModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
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
            <h3 className="text-white text-[15px] font-semibold truncate">{video.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
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
            key={video.youtubeId}
            src={youtubeEmbedUrl(video.youtubeId, true)}
            title={video.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="px-6 py-4 flex justify-end bg-[#04160f]">
          <a
            href={youtubeWatchUrl(video.youtubeId)}
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
  );
}
