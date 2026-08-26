"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { formKindFromHash, resolveFormKind, type FormKind } from "./formModalTargets";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Mount form modals immediately on the client so Quiz / Pre-Approval can
 * prefetch in the background. First click still opens the matching modal.
 * Hash deep-links (#get-pre-approved) open the modal on load / new tab.
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
    // Prefer immediate open when the URL already deep-links to a form.
    const fromHash = formKindFromHash(window.location.hash);
    const timeoutId = window.setTimeout(() => arm(fromHash), 0);

    return () => {
      cleanup();
      window.clearTimeout(timeoutId);
    };
  }, [ready]);

  if (!ready) return null;
  return <PreApprovalProvider initialKind={pendingKind}>{null}</PreApprovalProvider>;
}
