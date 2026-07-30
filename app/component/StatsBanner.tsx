import React from "react";

export type StatItem = {
  value: string;
  label: string;
};

type StatsBannerProps = {
  stats: StatItem[];
};

// Every value in a card shares one size; the card picks the largest size its
// longest value can hold on a single line.
const VALUE_SIZES = [
  "max-[360px]:text-[22px] text-[28px] sm:text-[36px] lg:text-[48px]",
  "max-[360px]:text-[19px] text-[24px] sm:text-[30px] lg:text-[40px]",
  "max-[360px]:text-[17px] text-[20px] sm:text-[25px] lg:text-[32px]",
];

function sizeTier(stats: StatItem[], isTriple: boolean) {
  const longest = Math.max(...stats.map((s) => s.value.length));
  // Three-across cards get wider cells, so they tolerate longer values.
  const limits = isTriple ? [11, 15] : [8, 11];
  if (longest <= limits[0]) return 0;
  if (longest <= limits[1]) return 1;
  return 2;
}

/**
 * Dark stat card used across the loan program pages, matching the stats row on the
 * realtor partner page. All values in a card share one size regardless of how long
 * each number is, and dividers follow the column count at each breakpoint.
 */
export default function StatsBanner({ stats }: StatsBannerProps) {
  const isTriple = stats.length === 3;
  const columns = isTriple
    ? "grid-cols-1 sm:grid-cols-3"
    : "grid-cols-2 lg:grid-cols-4";
  // Rows need breathing room until the grid collapses to a single row.
  const rowPadding = isTriple ? "py-5 sm:py-0" : "py-5 lg:py-0";
  const tier = sizeTier(stats, isTriple);

  return (
    <section className="w-full bg-[#fcf9f3] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className={`bg-[#08271B] rounded-2xl px-4 sm:px-8 py-8 sm:py-10 lg:py-12 grid ${columns}`}
        >
          {stats.map((stat, i) => {
            // Single-token figures must never break; worded values may wrap.
            const wrapping = /\s/.test(stat.value)
              ? "leading-[1.15]"
              : "leading-none whitespace-nowrap";

            // Vertical rules sit between columns, horizontal rules between rows.
            const divider = isTriple
              ? [
                  i > 0 ? "border-t sm:border-t-0" : "",
                  i > 0 ? "sm:border-l" : "",
                ]
              : [
                  i % 2 === 1 ? "border-l" : "",
                  i >= 2 ? "border-t lg:border-t-0" : "",
                  i > 0 ? "lg:border-l" : "",
                ];

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-1.5 sm:px-2 ${rowPadding} border-[#1a3a1a] ${divider
                  .filter(Boolean)
                  .join(" ")}`}
              >
                <span
                  className={`text-white font-bold ${VALUE_SIZES[tier]} ${wrapping}`}
                >
                  {stat.value}
                </span>
                <span className="text-[#c8c8b8] text-[12px] lg:text-[13px] font-medium uppercase tracking-wide leading-snug mt-2.5 max-w-[190px]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
