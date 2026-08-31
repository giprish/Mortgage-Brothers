/** Live contact-section copy for career / job pages. */
export const CAREER_CONTACT_PARAGRAPHS = [
  "We're excited about the possibility of you [joining The Mortgage Brothers Team](/realtorteam/). Whether you're ready to apply, have questions about [our open positions](/job-opportunities/), or simply want to learn more about building a career in the mortgage industry, we're here to help. Our dedicated recruitment team is committed to guiding you through every step of the process.",
  "[Reach out to us today](/contact-us/) and take the first step towards a rewarding career in mortgage lending. We look forward to connecting with you and exploring how your skills and aspirations align with the opportunities at The Mortgage Brothers Team.",
] as const;

export function careerContactParagraphsWithEddie(phoneDisplay: string): string[] {
  return [
    "We're excited about the possibility of you [joining The Mortgage Brothers Team](/realtorteam/). Whether you're ready to apply, have questions about [our open positions](/job-opportunities/), or simply want to learn more about building a career in the mortgage industry, we're here to help.",
    `Interested? If you are interested in any job opportunity please call ${phoneDisplay} and ask for Eddie Knoell.`,
    CAREER_CONTACT_PARAGRAPHS[1],
  ];
}

export const CAREER_FORM_CTA = {
  href: "#career-application-form",
  label: "Start Your Application",
} as const;
