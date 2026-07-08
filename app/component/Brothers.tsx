import React from "react";

const Brothers = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#8a9a7a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            THE BROTHERS
          </p>
          <h2
            className="text-[#1a3a1a] text-[32px] lg:text-[40px] font-normal leading-[1.2]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real people, advocating for you
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Eddie Knoell Card */}
          <div className="bg-white border border-[#e8e0d0]/80 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-6 hover:shadow-lg hover:shadow-[#1a3a1a]/5 transition-all duration-300">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-[#f3ede0] border border-[#e5dccb] flex items-center justify-center flex-shrink-0">
              <span className="text-[#c39b62] text-[18px] font-semibold tracking-wide">
                EK
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3">
                  <h3 className="text-[#1a3a1a] text-[20px] font-bold leading-tight">
                    Eddie Knoell
                  </h3>
                  <span className="text-[#8a9a7a] text-[12px] font-medium uppercase tracking-wider">
                    Managing Broker · NMLS #210317
                  </span>
                </div>
                <p className="text-[#5a6a5a] text-[14px] leading-[1.65] mb-6">
                  Three decades matching Arizona buyers with the right loans — and telling them the truth when a deal isn&apos;t right.
                </p>
              </div>

              {/* Phone Link */}
              <a
                href="tel:6028352171"
                className="inline-flex items-center gap-2 text-[#1a3a1a] hover:text-[#50C878] text-[14px] font-semibold transition-colors duration-200 mt-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#b89a5a]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (602) 835-2171
              </a>
            </div>
          </div>

          {/* Thomas Knoell Card */}
          <div className="bg-white border border-[#e8e0d0]/80 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-6 hover:shadow-lg hover:shadow-[#1a3a1a]/5 transition-all duration-300">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-[#f3ede0] border border-[#e5dccb] flex items-center justify-center flex-shrink-0">
              <span className="text-[#c39b62] text-[18px] font-semibold tracking-wide">
                TK
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3">
                  <h3 className="text-[#1a3a1a] text-[20px] font-bold leading-tight">
                    Thomas Knoell
                  </h3>
                  <span className="text-[#8a9a7a] text-[12px] font-medium uppercase tracking-wider">
                    Loan Officer · NMLS #166446
                  </span>
                </div>
                <p className="text-[#5a6a5a] text-[14px] leading-[1.65] mb-6">
                  Guides first-time buyers, veterans, and self-employed borrowers through every step, without the jargon.
                </p>
              </div>

              {/* Phone Link */}
              <a
                href="tel:6028352171"
                className="inline-flex items-center gap-2 text-[#1a3a1a] hover:text-[#50C878] text-[14px] font-semibold transition-colors duration-200 mt-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#b89a5a]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (602) 835-2171
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brothers;
