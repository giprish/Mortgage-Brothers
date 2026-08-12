"use client";

import dynamic from "next/dynamic";
import { InteractionGate } from "./InteractionGate";

const PreApprovalProvider = dynamic(() => import("./PreApprovalProvider"), {
  ssr: false,
});

export default function DeferredPreApproval() {
  return (
    <InteractionGate fallbackMs={12000} placeholder={null}>
      <PreApprovalProvider>{null}</PreApprovalProvider>
    </InteractionGate>
  );
}
