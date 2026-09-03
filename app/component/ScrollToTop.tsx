"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SHOW_AFTER_VH = 1.5;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * SHOW_AFTER_VH;
      setVisible(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-[#08271B] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#0d3a28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb364] focus-visible:ring-offset-2 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" strokeWidth={2.5} />
    </button>
  );
}
