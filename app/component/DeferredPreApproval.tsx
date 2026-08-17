"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { resolveFormKind, type FormKind } from "./formModalTargets";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Load site form modals (Pre-Approval / Quiz / Contact) after idle.
 * Form CTAs still open the modal on first click.
 * Do not setState during a normal page-link click — that cancels Next.js navigation.
 */
export default function DeferredPreApproval() {
  const [ready, setReady] = useState(false);
  const [pendingKind, setPendingKind] = useState<FormKind | null>(null);

  useEffect(() => {
    if (ready) return;

    let done = false;
    let idleId: number | null = null;
    let timeoutId: number | null = null;

    const cleanup = () => {
      document.removeEventListener("click", onClick, true);
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };

    const arm = (kind: FormKind | null) => {
      if (done) return;
      done = true;
      cleanup();
      setPendingKind(kind);
      setReady(true);
    };

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const kind = resolveFormKind(event.target);
      if (!kind) return;

      event.preventDefault();
      event.stopPropagation();
      arm(kind);
    };

    document.addEventListener("click", onClick, true);

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(() => arm(null), { timeout: 4000 });
    } else {
      timeoutId = window.setTimeout(() => arm(null), 2500);
    }

    return cleanup;
  }, [ready]);

  if (!ready) return null;
  return <PreApprovalProvider initialKind={pendingKind}>{null}</PreApprovalProvider>;
}
