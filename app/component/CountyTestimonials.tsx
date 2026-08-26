"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export type CountyTestimonial = {
  name: string;
  quote: string;
  attribution: string;
};

type CountyTestimonialsProps = {
  testimonials: CountyTestimonial[];
  title?: string;
  /** Optional intro under the title (live page body copy). */
  description?: string;
};

const AUTO_ADVANCE_MS = 6000;

export default function CountyTestimonials({
  testimonials,
  title = "What Our Arizona Clients Are Saying",
  description,
}: CountyTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [count, paused]);

  if (count === 0) return null;

  const current = testimonials[index] ?? testimonials[0];

  const goPrev = () => setIndex((prev) => (prev - 1 + count) % count);
  const goNext = () => setIndex((prev) => (prev + 1) % count);

  return (
    <section className="no-content-visibility w-full py-14 sm:py-16 lg:py-20 bg-brand-cream-light border-y border-[#e8e0d0]/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-brand-green-accent text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
            Client Reviews
          </span>
          <h2 className="text-brand-green-deep text-section-title font-playfair font-normal">
            {title}
          </h2>
          {description ? (
            <p className="text-brand-text-muted text-[15px] sm:text-[15.5px] leading-[1.75] max-w-3xl mx-auto mt-4">
              {description}
            </p>
          ) : null}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl border border-[#e8e0d0]/50 shadow-sm px-10 sm:px-14 lg:px-16 py-10 sm:py-12 text-center min-h-[240px] flex flex-col items-center justify-center">
            <p className="text-brand-green-deep text-[17px] sm:text-[18px] font-semibold mb-4">
              {current.name}
            </p>
            <p className="text-brand-text-muted text-[15px] sm:text-[16px] leading-[1.7] italic max-w-2xl mb-5">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div
              className="flex gap-1 text-[#f5a623] mb-4"
              role="img"
              aria-label="5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-brand-text-muted text-[13px] sm:text-[14px]">
              {current.attribution}
            </p>
          </div>

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 w-10 h-10 rounded-full bg-white border border-[#e8e0d0]/60 text-brand-green-accent shadow-sm hover:bg-brand-cream-light transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 w-10 h-10 rounded-full bg-white border border-[#e8e0d0]/60 text-brand-green-accent shadow-sm hover:bg-brand-cream-light transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div
                className="flex items-center justify-center gap-2 mt-6"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {testimonials.map((t, i) => (
                  <button
                    key={`${t.name}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === index
                        ? "bg-brand-green-accent"
                        : "bg-[#d4d0c8] hover:bg-brand-green-accent/50"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/client-mortgage-reviews/"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore All Client Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
