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
    bio: "Co-founder of AZ Mortgage Brothers and a leading expert in mortgage lending. Thomas's deep understanding of first-time buyer needs makes him a favorite among clients in Gilbert and Tucson.",
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
    <section className="w-full bg-[#fcf9f3] py-20 lg:py-28 border-t border-[#e8e0d0]/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            The Brothers
          </p>
          <h2
            className="text-[#08271B] text-[32px] lg:text-[42px] font-normal leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet The Mortgage Brothers — Experts You Can Trust
          </h2>
          <p className="text-[#4e5b4e] text-[15.5px] leading-[1.75]">
            As third-generation Arizona natives, the Knoell family has been deeply rooted in
            Phoenix real estate for over 70 years, earning an excellent reputation for quality and
            trust. Both Eddie and Thomas are co-founders of AZ Mortgage Brothers and hold
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
              <div className="h-[360px] w-full overflow-hidden bg-[#2b3531] relative">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3531]/40 via-transparent to-transparent z-10"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <span className="inline-block text-[#b89a5a] text-[11px] font-bold uppercase tracking-wider mb-2">
                  {person.role}
                </span>
                <h3
                  className="text-[#08271B] text-[24px] font-normal mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {person.name}
                </h3>
                <p className="text-[#8a9a7a] text-[12.5px] font-medium mb-4">
                  {person.nmls} &bull; {person.license}
                </p>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-8">
                  {person.bio}
                </p>

                <a
                  href="tel:+16025352171"
                  className="inline-flex items-center gap-2 text-[#08271B] group-hover:text-[#3fb364] font-semibold text-[14.5px] transition-colors duration-200 mt-auto w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-[#fcf9f3] group-hover:bg-[#3fb364]/10 flex items-center justify-center transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#b89a5a] group-hover:text-[#3fb364] transition-colors duration-200"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>(602) 535-2171</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about-us/"
            className="inline-block bg-[#3fb364] hover:bg-[#349b55] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-200"
          >
            Get to Know Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brothers;
