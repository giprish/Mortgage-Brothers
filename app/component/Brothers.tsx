import React from "react";
import Image from "next/image";

const Brothers = () => {
  return (
    <section className="w-full bg-[#fcf9f3] py-20 lg:py-28 border-t border-[#e8e0d0]/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-3">
            THE BROTHERS
          </p>
          <h2
            className="text-[#08271B] text-[34px] lg:text-[44px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real people, advocating for you
          </h2>
          <div className="w-16 h-0.5 bg-[#b89a5a]/60 mx-auto mt-5"></div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
          
          {/* Eddie Knoell Card */}
          <div className="group bg-white border border-[#e8e0d0]/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
            {/* Image Container */}
            <div className="h-[360px] w-full overflow-hidden bg-[#2b3531] relative">
              <Image
                src="/Knoell.webp"
                alt="Eddie Knoell"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b3531]/40 via-transparent to-transparent z-10"></div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[#b89a5a] text-[11px] font-bold uppercase tracking-wider mb-2">
                  Managing Broker · NMLS #210317
                </span>
                <h3 
                  className="text-[#08271B] text-[24px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Eddie Knoell
                </h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-8">
                  Three decades matching Arizona buyers with the right loans — and telling them the truth when a deal isn&apos;t right.
                </p>
              </div>

              {/* Action Button */}
              <a
                href="tel:6028352171"
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
                <span>(602) 835-2171</span>
              </a>
            </div>
          </div>

          {/* Thomas Knoell Card */}
          <div className="group bg-white border border-[#e8e0d0]/60 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
            {/* Image Container */}
            <div className="h-[360px] w-full overflow-hidden bg-[#2b3531] relative">
              <Image
                src="/image.png"
                alt="Thomas Knoell"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b3531]/40 via-transparent to-transparent z-10"></div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[#b89a5a] text-[11px] font-bold uppercase tracking-wider mb-2">
                  Loan Officer · NMLS #166446
                </span>
                <h3 
                  className="text-[#08271B] text-[24px] font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Thomas Knoell
                </h3>
                <p className="text-[#4e5b4e] text-[14.5px] leading-relaxed mb-8">
                  Guides first-time buyers, veterans, and self-employed borrowers through every step of the mortgage process, without the jargon.
                </p>
              </div>

              {/* Action Button */}
              <a
                href="tel:6028352171"
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
                <span>(602) 835-2171</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brothers;
