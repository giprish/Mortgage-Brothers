/** Canonical company NAP + license data — use everywhere for consistency. */

export const COMPANY = {
  legalName: "Mortgage Brothers LLC",
  brandName: "Arizona Mortgage Brothers",
  nmls: "1007154",
  nmlsDisplay: "NMLS #1007154",
  azLicense: "MB0922514",
  azLicenseDisplay: "AZ License #MB0922514",
  phoneDisplay: "(602) 535-2171",
  phoneTel: "+16025352171",
  phoneHref: "tel:+16025352171",
  addressLine1: "1599 East Orangewood Ave, Suite 200",
  addressLine2: "Phoenix, AZ 85020",
  addressFull: "1599 East Orangewood Ave, Suite 200, Phoenix, AZ 85020",
  addressMapsUrl: "https://goo.gl/maps/GVLYa",
  city: "Phoenix",
  state: "AZ",
  postalCode: "85020",
  streetAddress: "1599 East Orangewood Ave, Suite 200",
  siteUrl: "https://azmortgagebrothers.com",
  /** Optimized nav/footer logo (~11 KB vs ~169 KB legacy PNG) */
  logoSrc: "/home/mortgage-brothers-logo-green-new.png",
  logoSrcLegacy: "/home/mortgage-brothers-logo.png",
  nmlsConsumerAccessUrl:
    "https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=1007154",
  equalHousingLabel: "Equal Housing Lender",
  disclaimer:
    "Content on this website is provided for informational purposes only and does not constitute an offer to lend. Information presented may not reflect current rates, terms, or program availability. Please contact our loan officers for the most up-to-date information.",
} as const;

export const LOAN_OFFICERS = {
  eddie: {
    name: "Eddie Knoell",
    nmls: "210917",
    nmlsDisplay: "NMLS #210917",
    azLicense: "LO-0911422",
    azLicenseDisplay: "AZ License #LO-0911422",
    title: "Co-Founder · Managing Broker",
  },
  thomas: {
    name: "Thomas Knoell",
    nmls: "1618695",
    nmlsDisplay: "NMLS #1618695",
    azLicense: "LO-0942229",
    azLicenseDisplay: "AZ License #LO-0942229",
    title: "Co-Founder · Loan Officer",
  },
} as const;

/** Production Loan Programs nav (order matches live megamenu). */
export const LOAN_PROGRAM_LINKS = [
  { label: "Conventional Home Loans", href: "/conventional-home-loans-arizona/" },
  { label: "FHA Home Loans", href: "/fha-home-loans-arizona/" },
  { label: "FHA Streamline Refinance", href: "/fha-streamline-refinance-arizona/" },
  { label: "First-time Home Buyer Guide", href: "/first-time-home-buyer-arizona-guide/" },
  { label: "Jumbo Loans", href: "/jumbo-loans-arizona/" },
  { label: "Private Money Lender", href: "/private-money-lender-arizona/" },
  { label: "Mortgage Refinancing", href: "/refinancing-arizona/" },
  { label: "Reverse Mortgage", href: "/reverse-mortgage-arizona/" },
  { label: "Reverse Mortgage for a Home Purchase", href: "/reverse-mortgage-home-purchase-arizona/" },
  { label: "VA Loans", href: "/va-loans-arizona/" },
  { label: "Conventional vs FHA Loans", href: "/conventional-vs-fha-loans-arizona/" },
  { label: "Sell Home for Cash", href: "/sell-my-house-fast-arizona/" },
] as const;
