"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentType } from "react";

const SectionPlaceholder = ({ minHeight = 280 }: { minHeight?: number }) => (
  <div className="w-full bg-transparent" style={{ minHeight }} aria-hidden />
);

/**
 * Mounts a heavy client section only when near the viewport (or after idle).
 * Cuts early JS bootup / TBT on the homepage.
 */
function LazyWhenVisible({
  loader,
  minHeight,
  rootMargin = "200px",
}: {
  loader: () => Promise<{ default: ComponentType }>;
  minHeight: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ Comp, setComp ] = useState<ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    const el = ref.current;
    if (!el) return;

    const load = () => {
      loader().then((mod) => {
        if (!cancelled) setComp(() => mod.default);
      });
    };

    if (!("IntersectionObserver" in window)) {
      const t = globalThis.setTimeout(load, 2000);
      return () => {
        cancelled = true;
        globalThis.clearTimeout(t);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
    // loader is stable module import factory from call sites
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {Comp ? <Comp /> : <SectionPlaceholder minHeight={minHeight} />}
    </div>
  );
}

/** Client-only lazy sections — defers JS parse/hydration until near viewport. */
export function DeferredReviews() {
  return (
    <LazyWhenVisible
      minHeight={320}
      rootMargin="0px"
      loader={() => import("../Reviews")}
    />
  );
}

export function DeferredHomeCalculator() {
  return (
    <LazyWhenVisible
      minHeight={480}
      rootMargin="0px"
      loader={() => import("./HomeCalculator")}
    />
  );
}

export function DeferredPreApprovedForm() {
  return (
    <LazyWhenVisible
      minHeight={360}
      rootMargin="0px"
      loader={() => import("../PreApprovedForm")}
    />
  );
}

// Keep dynamic exports for any import sites that still expect next/dynamic shapes
export const DeferredReviewsDynamic = dynamic(() => import("../Reviews"), {
  ssr: false,
  loading: () => <SectionPlaceholder minHeight={320} />,
});
