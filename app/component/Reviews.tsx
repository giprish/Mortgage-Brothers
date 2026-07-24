"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    image: "/home/review-chris.png",
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn’t satisfied. I have been extremely happy with Eddie’s mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Emails were responded to on a daily basis and in a very quick manner. Every step of the process was done very professionally and friendly. I always hesitated to do a refinance because of the large amount of paperwork and meetings. But this didn’t happen that way. I highly recommend Eddie’s mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith, Avondale, Arizona",
  },
  {
    image: "/home/review-elizabeth.png",
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule. I can’t say enough good things about Eddie as a mortgage lender!",
    author: "Elizabeth Todd – H2 Realty, Phoenix, Arizona",
  },
  {
    image: "/home/review-marleen.png",
    text: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. As you know, I am a Realtor and have dealt with many mortgage people along my career. You are heads and shoulders beyond most I have worked with. Your communication skills are unique in this business. You were reassuring throughout this entire procedure. I just want you to know I will be proud to refer you to my family, friends and Clients.",
    author: "Marleen Kapanicas – Homesmart, Scottsdale, Arizona",
  },
  {
    image: "/home/review-milberry.png",
    text: "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern in the process. All questions were answered promptly and completely with the correct issues addressed without extra fanfare, like dealing with a trusted family member. Thanks again Eddie!!!",
    author: "Thomas and Carol Milberry, Queen Creek, Arizona 85242",
  },
  {
    image: "/home/review-nancy.png",
    text: "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he’s picked up the phone and called to let me know where we are in the process. He closes every deal and communicates through it well. He’s patient with the questions and great with every client I have sent his way.",
    author: "Nancy Perry – Solutions Real Estate, Avondale, Arizona",
  },
];

const StarRating = () => (
  <div className="flex justify-center gap-1 my-4" aria-label="5 star rating">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f5c518" stroke="none" aria-hidden>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + reviews.length) % reviews.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const review = reviews[active];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="text-[#333333] text-[26px] sm:text-[30px] lg:text-[34px] font-normal leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Are Saying
          </h2>
          <div className="w-14 h-[3px] bg-[#3fb364] mx-auto mb-6" />
          <p className="text-[#4e5b4e] text-[15px] lg:text-[16px] leading-relaxed">
            At The Mortgage Brothers, we take pride in helping families achieve their homeownership
            dreams. Here&apos;s what some of our satisfied clients have to say about their experience
            with us:
          </p>
        </div>

        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: "#f3f3f3",
            backgroundImage: "url('/home/arizona-mortgage-brothers-pattern-houses.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px auto",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-[#08271B]/50 hover:text-[#3fb364] transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-[#08271B]/50 hover:text-[#3fb364] transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="px-10 sm:px-16 lg:px-24 py-12 lg:py-14 text-center min-h-[320px] flex flex-col items-center justify-center">
            <p className="text-[#3a443a] text-[15px] sm:text-[16px] leading-[1.75] italic max-w-3xl">
              {review.text}
            </p>

            <StarRating />

            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md bg-[#e8e0d0]">
              <Image
                src={review.image}
                alt={review.author}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <p className="text-[#333333] text-[14.5px] sm:text-[15px] font-medium">
              {review.author}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2.5 pb-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to review ${index + 1}`}
                aria-current={index === active ? true : undefined}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                  index === active ? "bg-[#3fb364]" : "bg-[#c8c8c8] hover:bg-[#a8a8a8]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/client-mortgage-reviews/"
            className="inline-flex items-center gap-2 text-[#08271B] hover:text-[#3fb364] font-semibold text-[15px] transition-colors duration-200"
          >
            Read More Success Stories
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
