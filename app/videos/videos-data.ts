export type VideoItem = {
  id: string;
  title: string;
  youtubeId: string;
};

export type VideoCategory = {
  id: string;
  label: string;
  heading: string;
  /** Dedicated archive page path (with trailing slash). */
  viewAllHref?: string;
  videos: VideoItem[];
};

export const FEATURED_VIDEO: VideoItem = {
  id: "featured-meet-the-team",
  title: "The Mortgage Brothers — Phoenix Market Experts",
  youtubeId: "YqOa8IipIPU",
};

export const VIDEO_CATEGORIES: VideoCategory[] = [
  {
    id: "phoenix-market",
    label: "Phoenix Market & Real Estate Updates",
    heading: "Phoenix Market & Real Estate Updates",
    viewAllHref: "/videos/phoenix-market-and-real-estate-updates/",
    videos: [
      {
        id: "driving-rates",
        title: "What's REALLY Driving Mortgage Rates for the Next 12 Months?",
        youtubeId: "huG8oemh_Eg",
      },
      {
        id: "loan-limit-2025",
        title: "2025 Conventional Loan Limit Increase EXPOSED! What It Means for You",
        youtubeId: "2upZ94lZ4bU",
      },
      {
        id: "seller-comp",
        title: "Can Seller's Pay Buyer Agent Compensation? What about Concession limits?",
        youtubeId: "ze6P5PY8lo4",
      },
    ],
  },
  {
    id: "reverse-mortgage",
    label: "Reverse Mortgage",
    heading: "Reverse Mortgage",
    viewAllHref: "/videos/reverse-mortgage/",
    videos: [
      {
        id: "rm-4-questions",
        title: "Reverse Mortgage good for you? 4 Questions to ask",
        youtubeId: "y0hpl_nzD2A",
      },
      {
        id: "rm-agents",
        title:
          "What Arizona Real Estate Agents Need to Know About Helping Buyers Purchase With a Reverse Mortgage",
        youtubeId: "ZkreF2ge6g4",
      },
      {
        id: "rm-5-questions",
        title: "5 Questions You NEED to Ask Yourself before You Do a Reverse Mortgage",
        youtubeId: "hsT6DIHH5Wo",
      },
    ],
  },
  {
    id: "mortgage-rates",
    label: "Mortgage Rates Today",
    heading: "Mortgage Rates Today",
    viewAllHref: "/videos/mortgage-rates-today/",
    videos: [
      {
        id: "rates-truflation",
        title: "Mortgage Rates Today March 29th - What is Truflation?",
        youtubeId: "KGeG6zNygIc",
      },
      {
        id: "rates-fed-hike",
        title: "Mortgage Rates Today - How does the Fed Rate Hike and Bank Failures Affect Rates?",
        youtubeId: "zPol4VYmpY0",
      },
      {
        id: "rates-bank-failures",
        title: "Mortgage Rates Today March 15th 2023 - Bank Failures means lower rates",
        youtubeId: "hGnStDWhKOo",
      },
    ],
  },
  {
    id: "podcast",
    label: "The Mortgage Brothers Show — Podcast",
    heading: "Video Podcast for The Mortgage Brothers Show",
    viewAllHref: "/videos/video-podcast-for-the-mortgage-brothers-show/",
    videos: [
      {
        id: "rental-property-loans",
        title: "Rental Property Loans - 7 Questions To Find Out If Are Eligible",
        youtubeId: "ruhPN9UA0Jg",
      },
      {
        id: "lock-or-wait",
        title: "Should I Lock in My Mortgage Interest Rate OR Wait?",
        youtubeId: "3fU_reUbxww",
      },
      {
        id: "rm-podcast",
        title: "Reverse Mortgage good for you? 4 Questions to ask",
        youtubeId: "y0hpl_nzD2A",
      },
    ],
  },
  {
    id: "important-topics",
    label: "Important Mortgage & Home Loan Topics",
    heading: "Important Mortgage Home Loan Topics",
    viewAllHref: "/videos/important-mortgage-home-loan-topics/",
    videos: [
      {
        id: "mortgage-scams",
        title: "Beware of Mortgage Scams After Closing | How to Avoid Misleading Mail Offers",
        youtubeId: "lJiUAnMJ40w",
      },
      {
        id: "avm-alert",
        title: "AVM Alert - High Demand Market on Homebot",
        youtubeId: "gbYA09KJet0",
      },
      {
        id: "should-you-sell",
        title: "Should you Sell homebot video",
        youtubeId: "PqaGCoTzU4w",
      },
    ],
  },
  {
    id: "agent-tips",
    label: "Real Estate Agent Quick Tips",
    heading: "Real Estate Agent Quick Tips",
    viewAllHref: "/videos/real-estate-agent-quick-tips/",
    videos: [
      {
        id: "homebot-agents",
        title:
          "How Homebot Can Elevate Your Real Estate Business - Must Watch for Real Estate Agents",
        youtubeId: "l52SR2vugeU",
      },
      {
        id: "buydown-2-1",
        title: "2 1 Mortgage Buydown: Save Money on Your Home Loan",
        youtubeId: "naMaI8j5AxI",
      },
      {
        id: "agent-commitment",
        title: "Commitment To Arizona Real Estate Agents",
        youtubeId: "d50xIN-Z-vw",
      },
    ],
  },
  {
    id: "loan-products",
    label: "Mortgage Loan Products",
    heading: "Mortgage Loan Products",
    viewAllHref: "/videos/mortgage-loan-products/",
    videos: [
      {
        id: "manufactured-homes",
        title: "Manufactured Home Loans. Everything you need to know",
        youtubeId: "wtvq2EeUD2o",
      },
      {
        id: "fha-loans-video",
        title: "FHA loans and What You Need to Know",
        youtubeId: "6G3aczBQENM",
      },
      {
        id: "conventional-loans-video",
        title: "Conventional Loans and What You Need to Know",
        youtubeId: "09QabUCIJ_0",
      },
    ],
  },
  {
    id: "calculators",
    label: "Mortgage Calculators",
    heading: "Mortgage Calculators",
    videos: [
      {
        id: "calc-purchase",
        title: "Mortgage Calculator - Best Tips To Calculate Payments On Your Next Purchase",
        youtubeId: "QT-JXeza5OM",
      },
      {
        id: "calc-refi",
        title: "Refinance Mortgage Calculator - How to Calculate Payments",
        youtubeId: "fjicobr52zU",
      },
      {
        id: "calc-download",
        title: "Mortgage Calculator - Free Download for You",
        youtubeId: "55jk37k3hUM",
      },
    ],
  },
];

export function youtubeWatchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function youtubeEmbedUrl(youtubeId: string, autoplay = false) {
  return `https://www.youtube.com/embed/${youtubeId}?rel=0${autoplay ? "&autoplay=1" : ""}`;
}

export function youtubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}
