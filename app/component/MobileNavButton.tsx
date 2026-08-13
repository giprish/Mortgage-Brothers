"use client";

import { useCallback, useState } from "react";

/**
 * Tiny client island — drawer JS is code-split and only fetched on first open.
 */
export default function MobileNavButton() {
  const [open, setOpen] = useState(false);
  const [Drawer, setDrawer] = useState<null | React.ComponentType<{ onClose: () => void }>>(
    null,
  );

  const openMenu = useCallback(async () => {
    if (!Drawer) {
      const mod = await import("./MobileNavDrawer");
      setDrawer(() => mod.default);
    }
    setOpen(true);
  }, [Drawer]);

  return (
    <>
      <button
        type="button"
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
        onClick={openMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3fb364"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {open && Drawer ? <Drawer onClose={() => setOpen(false)} /> : null}
    </>
  );
}
