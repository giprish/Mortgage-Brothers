import React from "react";

const cities = [
  "Phoenix",
  "Scottsdale",
  "Mesa",
  "Gilbert",
  "Tempe",
  "Chandler",
  "Tucson",
  "Flagstaff",
];

const RootedInArizona = () => {
  return (
    <section className="w-full bg-[#f5f0e8] pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Divider line */}
        <div className="w-full h-px bg-[#d8d0c0] mb-0"></div>
      </div>

      <div className="w-full bg-[#f5f0e8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-xl ">
              {/* Subtitle */}
              <p className="text-[#b89a5a] text-[12px] font-semibold tracking-[0.14em] uppercase mb-4">
                ROOTED IN ARIZONA
              </p>

              {/* Heading */}
              <h2
                className="text-[#1a3a1a] text-[30px] lg:text-[38px] font-normal leading-[1.2] mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                70+ years in Phoenix real estate — and we still pick up the
                phone.
              </h2>

              {/* Description */}
              <p className="text-[#5a6a5a] text-[15px] leading-[1.75] mb-8 max-w-md">
                We live and work in the Valley. That local knowledge means
                realistic timelines, lenders who understand Arizona, and a
                broker who actually knows your neighborhood.
              </p>

              {/* City Tags */}
              <div className="flex flex-wrap gap-2.5">
                {cities.map((city, index) => (
                  <span
                    key={index}
                    className="bg-white border border-[#d8d0c0] text-[#1a3a1a] text-[13px] font-medium px-4 py-2 rounded-full hover:border-[#b89a5a] hover:bg-[#faf6ef] transition-all duration-200 cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="w-full lg:w-[340px] flex flex-col gap-4">
              {/* Main Stat */}
              <div className="bg-[#08271B] rounded-2xl p-7 border border-[#2d4a2d]">
                <div className="mb-1">
                  <span
                    className="text-[#50C878] text-[44px] font-semibold leading-none"
                  >
                    5,000+
                  </span>
                </div>
                <p className="text-[#8a9a7a] text-[14px]">
                  Arizona families helped home
                </p>
              </div>

              {/* Two small stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Google Reviews */}
                <div className="bg-white rounded-xl p-5 border border-[#e8e0d0]">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[#1a3a1a] text-[28px] font-semibold leading-none">
                      4.9
                    </span>
                    <span className="text-[#b89a5a] text-[14px] font-medium">
                      /5
                    </span>
                  </div>
                  <p className="text-[#8a9a7a] text-[12px] flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#b89a5a"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Google Reviews
                  </p>
                </div>

                {/* Average Close */}
                <div className="bg-white rounded-xl p-5 border border-[#e8e0d0]">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[#1a3a1a] text-[28px] font-semibold leading-none">
                      25
                    </span>
                    <span className="text-[#8a9a7a] text-[14px] font-medium">
                      days
                    </span>
                  </div>
                  <p className="text-[#8a9a7a] text-[12px]">Average close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootedInArizona;
