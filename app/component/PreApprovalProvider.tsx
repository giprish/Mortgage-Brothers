"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { resolveFormKind, type FormKind } from "./formModalTargets";

/**
 * Spinner that auto-hides after 2.5s using a DOM timer — immune to React
 * Strict Mode double-invoke and effect cancellation.
 */
function SpinnerOverlay({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = window.setTimeout(() => {
      if (el) el.style.display = "none";
    }, 2500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#fcf9f3] p-6 pointer-events-none"
    >
      <div className="w-12 h-12 border-4 border-[#3fb364]/20 border-t-[#3fb364] rounded-full animate-spin mb-4" />
      <p className="text-[#4e5b4e] text-[15px] font-medium animate-pulse">
        {label}
      </p>
    </div>
  );
}

const FORMS: Record<
  FormKind,
  {
    id: string;
    src: string;
    eyebrow: string;
    title: string;
    iframeTitle: string;
    loadingLabel: string;
  }
> = {
  preapproval: {
    id: "250065764860157",
    src: "https://form.jotform.com/250065764860157",
    eyebrow: "Secure application",
    title: "Start Your Pre-Approval",
    iframeTitle: "A - New All in One Form for purchase and refinances",
    loadingLabel: "Loading secure application form...",
  },
  quiz: {
    id: "250305896122151",
    src: "https://form.jotform.com/250305896122151",
    eyebrow: "Free credit check-in",
    title: "Credit Score Quiz",
    iframeTitle: "A - New Credit Score Quiz",
    loadingLabel: "Loading credit score quiz...",
  },
  contact: {
    id: "250026749097159",
    src: "https://form.jotform.com/250026749097159",
    eyebrow: "Get in touch",
    title: "Contact Us",
    iframeTitle: "New Contact Us Form",
    loadingLabel: "Loading contact form...",
  },
};

type FormModalContextValue = {
  open: (kind?: FormKind) => void;
  close: () => void;
  isOpen: boolean;
  kind: FormKind | null;
};

const FormModalContext = createContext<FormModalContextValue | null>(null);

export function usePreApprovalModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) {
    throw new Error("usePreApprovalModal must be used within PreApprovalProvider");
  }
  return {
    open: () => ctx.open("preapproval"),
    close: ctx.close,
    isOpen: ctx.isOpen && ctx.kind === "preapproval",
  };
}

export function usePreApprovalModalOptional() {
  const ctx = useContext(FormModalContext);
  if (!ctx) return null;
  return {
    open: () => ctx.open("preapproval"),
    close: ctx.close,
    isOpen: ctx.isOpen && ctx.kind === "preapproval",
  };
}

export default function PreApprovalProvider({
  children,
  initialKind = null,
}: {
  children: React.ReactNode;
  initialKind?: FormKind | null;
}) {
  const router = useRouter();
  const [kind, setKind] = useState<FormKind | null>(initialKind);
  const [mounted, setMounted] = useState<Set<FormKind>>(
    () => new Set(initialKind ? [initialKind] : [])
  );

  const isOpen = kind !== null;

  const open = useCallback((next: FormKind = "preapproval") => {
    setMounted((prev) => {
      if (prev.has(next)) return prev;
      const copy = new Set(prev);
      copy.add(next);
      return copy;
    });
    setKind(next);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (initialKind) {
      document.body.style.overflow = "hidden";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = useCallback(() => {
    setKind(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const next = resolveFormKind(event.target);
      if (!next) return;

      event.preventDefault();
      event.stopPropagation();
      open(next);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("jotform.com")) return;

      if (
        event.data &&
        (event.data.action === "submission-completed" ||
          event.data === "submission-completed" ||
          (typeof event.data === "string" && event.data.includes("submission-completed")))
      ) {
        close();
        if (kind === "preapproval") {
          router.push("/");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen, close, kind, router]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const formKinds = Object.keys(FORMS) as FormKind[];

  return (
    <FormModalContext.Provider value={{ open, close, isOpen, kind }}>
      {children}

      {formKinds.map((formKind) => {
        if (!mounted.has(formKind)) return null;
        const form = FORMS[formKind];
        const visible = isOpen && kind === formKind;

        return (
          <div
            key={formKind}
            className={
              visible
                ? "fixed inset-0 z-[200] flex flex-col bg-[#04160f]/70 backdrop-blur-sm"
                : "hidden"
            }
            role={visible ? "dialog" : undefined}
            aria-modal={visible ? true : undefined}
            aria-hidden={!visible}
            aria-labelledby={visible ? "site-form-modal-title" : undefined}
          >
            <div className="flex-shrink-0 bg-[#052316] border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[#3fb364] text-[10px] font-bold uppercase tracking-wider">
                  {form.eyebrow}
                </p>
                <h2
                  id={visible ? "site-form-modal-title" : undefined}
                  className="text-white text-[15px] sm:text-[16px] font-semibold truncate"
                >
                  {form.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                tabIndex={visible ? 0 : -1}
                aria-label={`Close ${form.title} dialog`}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/15 text-white text-[12px] sm:text-[13px] font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors cursor-pointer shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                <span className="sm:hidden">Back</span>
                <span className="hidden sm:inline">Back to Website</span>
              </button>
            </div>

            <div className="flex-1 relative bg-[#fcf9f3] min-h-0">
              {visible && (
                <SpinnerOverlay label={form.loadingLabel} />
              )}

              {visible && (
                <iframe
                  id={`JotFormIFrame-${form.id}`}
                  title={form.iframeTitle}
                  src={form.src}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  scrolling="yes"
                  onLoad={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </FormModalContext.Provider>
  );
}
