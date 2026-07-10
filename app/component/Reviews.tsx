import React from "react";

const reviews = [
  {
    rating: 5,
    text: "They shopped our loan to a dozen lenders and saved us real money. Closed in three weeks flat.",
    author: "Marie & Luis G.",
    location: "Gilbert, AZ",
  },
  {
    rating: 5,
    text: "As a veteran, my VA loan felt complicated until Thomas walked me through it. Zero down, zero stress.",
    author: "Darnell W.",
    location: "Mesa, AZ",
  },
  {
    rating: 5,
    text: "Self-employed and figured I'd get turned down everywhere. Eddie found a lender who got it. Grateful.",
    author: "Priya S.",
    location: "Scottsdale, AZ",
  },
];

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#b89a5a"
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-16 lg:py-20 border-t border-[#e8e0d0]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2
              className="text-[#1a3a1a] text-[30px] lg:text-[38px] font-normal leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Arizona says about us
            </h2>
          </div>
          
          {/* Rating Badge */}
          <div className="flex items-center gap-2">
            <StarRating rating={5} size={18} />
            <span className="text-[#1a3a1a] text-[14px] font-semibold">
              4.8 on Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white border border-[#e8e0d0]/80 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#1a3a1a]/10 hover:border-brand-green-accent/40 active:scale-[0.98] active:translate-y-0 cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Stars */}
                <div className="mb-4">
                  <StarRating rating={rev.rating} size={14} />
                </div>
                {/* Quote */}
                <p
                  className="text-[#1a3a1a] text-[18px] lg:text-[20px] leading-[1.5] font-normal mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div>
                <p className="text-[#1a3a1a] text-[14px] font-bold">
                  {rev.author}
                </p>
                <p className="text-[#8a9a7a] text-[12px] font-medium uppercase tracking-wider mt-0.5">
                  {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
