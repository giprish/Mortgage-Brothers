"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { resolveFormKind, type FormKind } from "./formModalTargets";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Load site form modals (Pre-Approval / Quiz / Contact) on first click.
 * If that click is a form CTA, open the matching modal immediately.
 */
export default function DeferredPreApproval() {
  const [ready, setReady] = useState(false);
  const [pendingKind, setPendingKind] = useState<FormKind | null>(null);

  useEffect(() => {
    if (ready) return;

    let done = false;
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

      const kind = resolveFormKind(event.target as Element | null);
      if (kind) {
        event.preventDefault();
        event.stopPropagation();
      }
      arm(kind);
    };

    const onKey = () => arm(null);

    document.addEventListener("click", onClick, true);
    window.addEventListener("keydown", onKey, { once: true });

    const cleanup = () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("keydown", onKey);
    };

    return cleanup;
  }, [ready]);

  if (!ready) return null;
  return <PreApprovalProvider initialKind={pendingKind}>{null}</PreApprovalProvider>;
}
