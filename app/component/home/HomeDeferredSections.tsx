"use client";

import dynamic from "next/dynamic";

const SectionPlaceholder = ({ minHeight = 280 }: { minHeight?: number }) => (
  <div className="w-full bg-transparent" style={{ minHeight }} aria-hidden />
);

/** Client-only lazy sections — defers JS parse/hydration until after first paint. */
export const DeferredReviews = dynamic(() => import("../Reviews"), {
  ssr: false,
  loading: () => (
    <SectionPlaceholder minHeight={320} />
  ),
});

export const DeferredHomeCalculator = dynamic(() => import("./HomeCalculator"), {
  ssr: false,
  loading: () => <SectionPlaceholder minHeight={480} />,
});

export const DeferredPreApprovedForm = dynamic(() => import("../PreApprovedForm"), {
  ssr: false,
  loading: () => <SectionPlaceholder minHeight={360} />,
});
