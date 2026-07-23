import React from "react";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    image: "/home/review-chris.png",
    text: "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Every step of the process was done very professionally and friendly. I highly recommend Eddie's mortgage team for your refinancing needs.",
    author: "Chris and Vicky Smith",
    location: "Avondale, Arizona",
  },
  {
    image: "/home/review-elizabeth.png",
    text: "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule. I can't say enough good things about Eddie as a mortgage lender!",
    author: "Elizabeth Todd",
    location: "H2 Realty, Phoenix, Arizona",
  },
  {
    image: "/home/review-marleen.png",
    text: "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. Your communication skills are unique in this business. I will be proud to refer you to my family, friends and clients.",
    author: "Marleen Kapanicas",
    location: "Homesmart, Scottsdale, Arizona",
  },
  {
    image: null,
    text: "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern in the process. All questions were answered promptly and completely with the correct issues addressed, like dealing with a trusted family member. Thanks again Eddie!!!",
    author: "Thomas and Carol Milberry",
    location: "Queen Creek, Arizona",
  },
  {
    image: "/home/review-nancy.png",
    text: "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he's picked up the phone and called to let me know where we are in the process. He closes every deal and communicates through it well. He's patient with the questions and great with every client I have sent his way.",
    author: "Nancy Perry",
    location: "Solutions Real Estate, Avondale, Arizona",
  },
];

const StarRating = ({ size = 14 }: { size?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#b89a5a" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-20 lg:py-24 border-t border-[#e8e0d0]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            Client Stories
          </p>
          <h2
            className="text-[#1a3a1a] text-[30px] lg:text-[38px] font-normal leading-[1.2] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Are Saying
          </h2>
          <p className="text-[#4e5b4e] text-[15px] leading-relaxed">
            At The Mortgage Brothers, we take pride in helping families achieve their
            homeownership dreams. Here&apos;s what some of our satisfied clients have to say
            about their experience with us.
          </p>
        </div>

        {/* Reviews horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-thin">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white border border-[#e8e0d0]/80 rounded-2xl p-6 lg:p-7 flex flex-col justify-between shrink-0 w-[300px] sm:w-[340px] snap-start hover:shadow-xl hover:shadow-[#1a3a1a]/10 transition-all duration-300"
            >
              <div>
                <div className="mb-4">
                  <StarRating />
                </div>
                <p className="text-[#3a443a] text-[14px] leading-[1.6] mb-6 line-clamp-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-[#08271B] flex items-center justify-center shrink-0 relative">
                  {rev.image ? (
                    <Image src={rev.image} alt={rev.author} fill className="object-cover" sizes="44px" />
                  ) : (
                    <span className="text-[#3fb364] text-[13px] font-bold">
                      {rev.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[#1a3a1a] text-[13.5px] font-bold">{rev.author}</p>
                  <p className="text-[#8a9a7a] text-[11.5px] font-medium uppercase tracking-wider mt-0.5">
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/client-mortgage-reviews/"
            className="inline-flex items-center gap-2 text-[#08271B] hover:text-[#3fb364] font-semibold text-[15px] transition-colors duration-200"
          >
            Read More Success Stories
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
