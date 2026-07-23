import React from "react";

const stats = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "5000+ Families Helped Across Arizona",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Average Closing Time: 25 Days",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#3fb364]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Rated 4.9/5 on Google Reviews",
    href: "https://maps.google.com/maps?cid=3674746044086552790",
  },
];

const HomeStatsBar = () => {
  return (
    <section className="w-full bg-white border-b border-[#e8e0d0]/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat) => {
            const inner = (
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <span className="text-[#08271B] text-[15px] lg:text-[16px] font-semibold leading-snug">
                  {stat.label}
                </span>
              </div>
            );

            return (
              <div key={stat.label} className="flex justify-center sm:justify-start">
                {stat.href ? (
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeStatsBar;
