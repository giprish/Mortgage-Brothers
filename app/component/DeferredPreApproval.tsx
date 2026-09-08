"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { formKindFromHash, resolveFormKind, type FormKind } from "./formModalTargets";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Mount form modals only when needed:
 * - URL hash deep-link (#get-pre-approved, etc.)
 * - First click on a form CTA
 * Avoids pulling PreApproval JS onto every page's critical path (Lighthouse LCP/FCP).
 */
export default function DeferredPreApproval() {
  const [ready, setReady] = useState(false);
  const [pendingKind, setPendingKind] = useState<FormKind | null>(null);

  useEffect(() => {
    if (ready) return;

    let done = false;

    const cleanup = () => {
      document.removeEventListener("click", onClick, true);
    };

    const arm = (kind: FormKind | null) => {
      if (done) return;
      done = true;
      cleanup();
      const fromHash = formKindFromHash(window.location.hash);
      setPendingKind(kind ?? fromHash);
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

    // Only auto-mount when the URL already deep-links to a form.
    const fromHash = formKindFromHash(window.location.hash);
    if (fromHash) {
      arm(fromHash);
    }

    return cleanup;
  }, [ready]);

  if (!ready) return null;
  return <PreApprovalProvider initialKind={pendingKind}>{null}</PreApprovalProvider>;
}
