"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

/**
 * Load pre-approval click interceptor right after hydration.
 * InteractionGate delayed this past the first click, so data-preapproval buttons did nothing.
 */
export default function DeferredPreApproval() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;
  return <PreApprovalProvider>{null}</PreApprovalProvider>;
}
