import React from "react";

export type StatItem = {
  value: string;
  label: string;
};

type StatsBannerProps = {
  stats: StatItem[];
};

/**
 * Standardized Stats Banner used across all website pages.
 * Ensures consistent width, equal column layout, and unified font size for all numbers.
 */
export default function StatsBanner({ stats }: StatsBannerProps) {
  const isTriple = stats.length === 3;
  const gridCols = isTriple
    ? "grid-cols-1 sm:grid-cols-3"
    : "grid-cols-2 lg:grid-cols-4";

  return (
    <section className="w-full bg-[#fcf9f3] py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className={`bg-[#08271B] border border-[#143d2b] rounded-2xl px-4 sm:px-8 py-8 lg:py-10 grid ${gridCols} gap-6 sm:gap-8 items-center justify-items-center text-center shadow-xl`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label + i}
              className="flex flex-col items-center justify-center text-center px-2 py-2 sm:py-3 w-full"
            >
              <div
                className="text-[#3fb364] text-[32px] sm:text-[38px] lg:text-[44px] font-bold leading-none mb-2.5 tracking-tight text-center w-full"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#c8c8b8] text-[12px] lg:text-[13.5px] font-medium uppercase tracking-wider leading-snug max-w-[210px] mx-auto text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
