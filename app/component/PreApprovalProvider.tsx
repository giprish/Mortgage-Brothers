"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const JOTFORM_ID = "250065764860157";
const JOTFORM_SRC = `https://form.jotform.com/${JOTFORM_ID}`;

type PreApprovalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const PreApprovalContext = createContext<PreApprovalContextValue | null>(null);

export function usePreApprovalModal() {
  const ctx = useContext(PreApprovalContext);
  if (!ctx) {
    throw new Error("usePreApprovalModal must be used within PreApprovalProvider");
  }
  return ctx;
}

/** Optional hook that returns null outside the provider (for defensive use). */
export function usePreApprovalModalOptional() {
  return useContext(PreApprovalContext);
}

function isPreApprovalHref(href: string | null): boolean {
  if (!href) return false;
  try {
    // Absolute or relative hash targets
    if (href === "#get-pre-approved" || href === "/#get-pre-approved") return true;
    if (href.endsWith("#get-pre-approved")) return true;
    const url = new URL(href, "https://azmortgagebrothers.com");
    return url.hash === "#get-pre-approved";
  } catch {
    return false;
  }
}

export default function PreApprovalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldLoadForm, setShouldLoadForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const open = useCallback(() => {
    setIsOpen(true);
    setShouldLoadForm(true);
    setIsLoading(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    // Keep shouldLoadForm true so reopening is instant; iframe stays mounted but hidden.
    // To fully unload third-party resources on close, reset shouldLoadForm:
    setShouldLoadForm(false);
    setIsLoading(true);
  }, []);

  // Intercept all Get Pre-Approved / #get-pre-approved links sitewide.
  // Existing hrefs keep working; JotForm still loads only after this intentional open.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!isPreApprovalHref(href)) return;

      event.preventDefault();
      event.stopPropagation();
      open();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [open]);

  // JotForm submission completed → return home and close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("jotform.com")) return;

      if (
        event.data &&
        (event.data.action === "submission-completed" ||
          event.data === "submission-completed" ||
          (typeof event.data === "string" &&
            event.data.includes("submission-completed")))
      ) {
        close();
        window.location.href = "/";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen, close]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <PreApprovalContext.Provider value={{ open, close, isOpen }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-[#04160f]/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="preapproval-modal-title"
        >
          <div className="flex-shrink-0 bg-[#052316] border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[#3fb364] text-[10px] font-bold uppercase tracking-wider">
                Secure application
              </p>
              <h2
                id="preapproval-modal-title"
                className="text-white text-[15px] sm:text-[16px] font-semibold truncate"
              >
                Start Your Pre-Approval
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Website
            </button>
          </div>

          <div className="flex-1 relative bg-[#fcf9f3] min-h-0">
            {shouldLoadForm && isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#fcf9f3] p-6">
                <div className="w-12 h-12 border-4 border-[#3fb364]/20 border-t-[#3fb364] rounded-full animate-spin mb-4" />
                <p className="text-[#4e5b4e] text-[15px] font-medium animate-pulse">
                  Loading secure application form...
                </p>
              </div>
            )}

            {/* JotForm iframe mounts ONLY after intentional open */}
            {shouldLoadForm && (
              <iframe
                id={`JotFormIFrame-${JOTFORM_ID}`}
                title="Arizona Mortgage Pre-Approval Form"
                src={JOTFORM_SRC}
                className="absolute inset-0 w-full h-full border-0"
                allow="geolocation; microphone; camera; fullscreen"
                onLoad={() => setIsLoading(false)}
              />
            )}
          </div>
        </div>
      )}
    </PreApprovalContext.Provider>
  );
}
