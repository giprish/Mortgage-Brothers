"use client";

import Script from "next/script";
import { isGoogleTagsEnabled } from "@/lib/google-tags-enabled";
import { useInteractionReady } from "./InteractionGate";

/**
 * Defer GTM + gtag until first user interaction (or a long idle fallback).
 * Keeps ~500KB of tag JS off the LCP/FCP critical path for Lighthouse + real visits.
 */
export default function GoogleTags() {
  if (!isGoogleTagsEnabled()) {
    return null;
  }

  return <GoogleTagsDeferred />;
}

function GoogleTagsDeferred() {
  const ready = useInteractionReady(12_000);
  if (!ready) return null;

  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF5LK3F');`}
      </Script>
      <Script
        id="google_gtagjs-js"
        src="https://www.googletagmanager.com/gtag/js?id=GT-NS9R5SN"
        strategy="lazyOnload"
      />
      <Script id="google_gtagjs-js-after" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["azmortgagebrothers.com"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-NS9R5SN");
gtag("config", "AW-1015684940");
gtag("config", "G-CQ4C5WS1YT");
window._googlesitekit = window._googlesitekit || {}; window._googlesitekit.throttledEvents = []; window._googlesitekit.gtagEvent = (name, data) => { var key = JSON.stringify( { name, data } ); if ( !! window._googlesitekit.throttledEvents[ key ] ) { return; } window._googlesitekit.throttledEvents[ key ] = true; setTimeout( () => { delete window._googlesitekit.throttledEvents[ key ]; }, 5 ); gtag( "event", name, { ...data, event_source: "site-kit" } ); };`}
      </Script>
    </>
  );
}
