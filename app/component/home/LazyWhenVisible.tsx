"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

export default function LazyWhenVisible({
  load,
  minHeight,
  rootMargin = "0px",
}: {
  load: () => Promise<{ default: ComponentType }>;
  minHeight: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const loadRef = useRef(load);
  loadRef.current = load;
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        loadRef.current().then((mod) => setComp(() => mod.default));
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (Comp) return <Comp />;
  return (
    <div
      ref={ref}
      style={{ minHeight }}
      aria-hidden="true"
    />
  );
}
