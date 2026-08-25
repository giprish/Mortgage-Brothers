import React from "react";
import Image from "next/image";
import Link from "next/link";

const brothers = [
  {
    name: "Thomas Knoell",
    photo: "/home/thomas-knoell.jpg",
    role: "Co-Founder · Loan Officer",
    nmls: "NMLS ID #1618695",
    license: "AZ Loan Originator License #LO-0942229",
    bio: "Co-founder of Mortgage Brothers LLC and a leading expert in mortgage lending. Thomas's deep understanding of first-time buyer needs makes him a favorite among clients in Gilbert and Tucson.",
  },
  {
    name: "Eddie Knoell",
    photo: "/home/eddie-knoell.jpg",
    role: "Co-Founder · Managing Broker",
    nmls: "NMLS ID #210917",
    license: "AZ Loan Originator License #LO-0911422",
    bio: "Co-founder with decades of experience, Eddie has helped thousands of families navigate the mortgage process. His expertise simplifies the journey to homeownership for clients across Arizona.",
  },
];

const Brothers = () => {
  return (
    <section className="w-full bg-[#fcf9f3] pt-12 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 lg:pb-24 border-t border-[#e8e0d0]/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <p className="text-[#7a6638] text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
            The Brothers
          </p>
          <h2
            className="font-playfair text-[#08271B] text-[28px] lg:text-[40px] font-normal leading-tight mb-6"
            
          >
            Meet The Mortgage Brothers — Experts You Can Trust
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
            As third-generation Arizona natives, the Knoell family has been deeply rooted in
            Phoenix real estate for nearly a century, earning an excellent reputation for quality and
            trust. Both Eddie and Thomas are co-founders of Mortgage Brothers LLC and hold
            Nationwide Mortgage Licensing System (NMLS) IDs and Arizona Loan Originator Licenses,
            ensuring they meet all federal and state requirements for mortgage lending.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto mb-14">
          {brothers.map((person) => (
            <div
              key={person.name}
              className="group bg-white border border-[#e8e0d0]/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-[280px] sm:h-[360px] w-full overflow-hidden bg-[#2b3531] relative">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3531]/40 via-transparent to-transparent z-10"></div>
              </div>

              {/* Content Area */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col min-w-0">
                <span className="inline-block text-[#7a6638] text-[11px] font-bold uppercase tracking-wider mb-2">
                  {person.role}
                </span>
                <h3
                  className="text-[#08271B] text-[22px] sm:text-[24px] font-normal mb-2"
                  
                >
                  {person.name}
                </h3>
                <p className="text-[#5a6b52] text-[12px] sm:text-[12.5px] font-medium mb-4 leading-snug">
                  <span className="block sm:inline">{person.nmls}</span>
                  <span className="hidden sm:inline"> &bull; </span>
                  <span className="block sm:inline">{person.license}</span>
                </p>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about-us/"
            className="inline-block bg-[#2d8545] hover:bg-[#246d39] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200"
          >
            Get to Know Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brothers;
