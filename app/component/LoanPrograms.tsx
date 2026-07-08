import React from "react";

const loanCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Conventional",
    description: "Low down payments and flexible terms for well-qualified buyers.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    title: "FHA",
    description: "As little as 3.5% down, with room for lower credit scores.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "VA",
    description: "$0 down for veterans and active-duty service members.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M20 12a8 8 0 0 0-8-8v8h8z" />
        <path d="M2 20l3-3" />
        <path d="M7 17l-2 2" />
      </svg>
    ),
    title: "USDA",
    description: "100% financing for eligible rural and suburban Arizona homes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    title: "Jumbo",
    description: "Financing above conforming limits for higher-value homes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b89a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    title: "Refinance",
    description: "Lower your rate, shorten your term, or tap your equity.",
  },
];

const LoanPrograms = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
              WHAT WE OFFER
            </p>
            <h2
              className="text-[#1a3a1a] text-[32px] lg:text-[40px] font-normal leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore our loan programs
            </h2>
          </div>
          <a
            href="#compare"
            className="inline-flex items-center gap-1.5 text-[#1a8a3a] hover:text-[#15712e] text-[15px] font-medium transition-colors duration-200 group"
          >
            Compare all programs
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
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loanCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#e8e0d0] hover:border-[#b89a5a]/40 hover:shadow-lg hover:shadow-[#1a3a1a]/5 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-[#f5f0e8] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#eee8d8] transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#1a3a1a] text-[18px] font-semibold mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6b7a6b] text-[14px] leading-[1.6] mb-4">
                {card.description}
              </p>

              {/* Learn More - Parrot Green */}
              <a
                href={`#${card.title.toLowerCase()}`}
                className="inline-flex items-center gap-1.5 text-[#50C878] hover:text-[#3db565] text-[14px] font-medium transition-colors duration-200 group/link"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/link:translate-x-0.5 transition-transform duration-200"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanPrograms;
