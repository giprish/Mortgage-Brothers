"use client";

import Script from "next/script";
import { isGoogleTagsEnabled } from "@/lib/google-tags-enabled";

/** GTM + gtag via next/script afterInteractive (does not render <script> into the React tree). */
export default function GoogleTags() {
  if (!isGoogleTagsEnabled()) {
    return null;
  }

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF5LK3F');`}
      </Script>
      <Script
        id="google_gtagjs-js"
        src="https://www.googletagmanager.com/gtag/js?id=GT-NS9R5SN"
        strategy="afterInteractive"
      />
      <Script id="google_gtagjs-js-after" strategy="afterInteractive">
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
