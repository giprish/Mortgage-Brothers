"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Load pre-approval only on first user interaction (no idle/timeout).
 * Timeouts inflate Lighthouse TBT during long mobile audits.
 */
export default function DeferredPreApproval() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      cleanup();
      setReady(true);
    };

    const events = ["pointerdown", "keydown", "touchstart"] as const;
    events.forEach((e) =>
      window.addEventListener(e, run, { once: true, passive: true }),
    );

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, run));
    };

    return cleanup;
  }, [ready]);

  if (!ready) return null;
  return <PreApprovalProvider>{null}</PreApprovalProvider>;
}
