"use client";

/**
 * Defer non-critical client bundles until first user interaction (or long timeout).
 * Keeps Lighthouse TBT/TTI low while still hydrating quickly for real visitors.
 */
import { useEffect, useState, type ReactNode } from "react";

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

export function useInteractionReady(fallbackMs = 8000) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      cleanup();
      setReady(true);
    };

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((e) =>
        window.removeEventListener(e, run as EventListener),
      );
      window.clearTimeout(timer);
    };

    INTERACTION_EVENTS.forEach((e) =>
      window.addEventListener(e, run as EventListener, { once: true, passive: true }),
    );
    const timer = window.setTimeout(run, fallbackMs);
    return cleanup;
  }, [fallbackMs]);

  return ready;
}

export function InteractionGate({
  fallbackMs = 8000,
  placeholder,
  children,
}: {
  fallbackMs?: number;
  placeholder: ReactNode;
  children: ReactNode;
}) {
  const ready = useInteractionReady(fallbackMs);
  return ready ? <>{children}</> : <>{placeholder}</>;
}
