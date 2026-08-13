"use client";

import { useState } from "react";
import Image from "next/image";

type YoutubeLiteEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  /** Use youtube-nocookie host when true (default). */
  nocookie?: boolean;
};

/**
 * Click-to-play YouTube facade — avoids loading ~500KB+ player JS until user intent.
 * Critical for Lighthouse FCP/LCP on pages that embed video below the fold.
 */
export default function YoutubeLiteEmbed({
  videoId,
  title,
  className = "",
  nocookie = true,
}: YoutubeLiteEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const host = nocookie ? "www.youtube-nocookie.com" : "www.youtube.com";
  const poster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://${host}/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        className={`absolute inset-0 w-full h-full border-0 ${className}`.trim()}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`absolute inset-0 w-full h-full group cursor-pointer border-0 p-0 bg-black ${className}`.trim()}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={poster}
        alt=""
        width={480}
        height={360}
        sizes="(max-width: 768px) 100vw, 640px"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" aria-hidden />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#2d8545] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
        aria-hidden
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
