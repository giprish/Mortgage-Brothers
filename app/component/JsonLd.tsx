import { COMPANY, LOAN_OFFICERS } from "@/lib/company";
import { getConfiguredSiteUrl } from "@/lib/site-url";

const siteUrl = getConfiguredSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MortgageBroker", "LocalBusiness", "FinancialService"],
  "@id": `${siteUrl}/#organization`,
  name: COMPANY.brandName,
  legalName: COMPANY.legalName,
  url: siteUrl,
  telephone: COMPANY.phoneDisplay,
  image: `${siteUrl}/home/eddie-knoell.jpg`,
  logo: `${siteUrl}${COMPANY.logoSrc}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.streetAddress,
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    postalCode: COMPANY.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5085,
    longitude: -112.0465,
  },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "NMLS",
      value: COMPANY.nmls,
    },
    {
      "@type": "PropertyValue",
      name: "Arizona Mortgage Broker License",
      value: COMPANY.azLicense,
    },
  ],
  sameAs: [
    "https://www.facebook.com/azmortgagebrothers/",
    "https://x.com/azmortgagebros",
    "https://www.linkedin.com/company/azmortgagebrothers/",
    "https://www.youtube.com/@TheMortgageBrothersTeam",
    COMPANY.nmlsConsumerAccessUrl,
  ],
  employee: [
    {
      "@type": "Person",
      name: LOAN_OFFICERS.eddie.name,
      jobTitle: LOAN_OFFICERS.eddie.title,
      identifier: LOAN_OFFICERS.eddie.nmlsDisplay,
    },
    {
      "@type": "Person",
      name: LOAN_OFFICERS.thomas.name,
      jobTitle: LOAN_OFFICERS.thomas.title,
      identifier: LOAN_OFFICERS.thomas.nmlsDisplay,
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
