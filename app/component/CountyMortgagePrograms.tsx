import Link from "next/link";

type Program = {
  name: string;
  href: string;
  description: (countyName: string, fhaLimit: string) => string;
};

const programs: Program[] = [
  {
    name: "Conventional Loans",
    href: "/conventional-home-loans-arizona/",
    description: () =>
      "Low down payment options with competitive rates for qualified buyers.",
  },
  {
    name: "FHA Loans",
    href: "/fha-home-loans-arizona/",
    description: (countyName, fhaLimit) =>
      `3.5% down with flexible credit requirements. FHA limit in ${countyName}: ${fhaLimit}.`,
  },
  {
    name: "VA Loans",
    href: "/va-loans-arizona/",
    description: () =>
      "Zero down payment for eligible veterans and active-duty service members.",
  },
  {
    name: "Jumbo Loans",
    href: "/jumbo-loans-arizona/",
    description: () =>
      "Financing above the conforming limit for higher-priced properties.",
  },
  {
    name: "FHA Streamline",
    href: "/fha-streamline-refinance-arizona/",
    description: () =>
      "Simplified refinance for existing FHA borrowers with minimal paperwork.",
  },
  {
    name: "First-Time Buyer Programs",
    href: "/first-time-home-buyer-arizona-guide/",
    description: () =>
      "Programs designed to help first-time buyers get into a home with less money down.",
  },
  {
    name: "Reverse Mortgage",
    href: "/reverse-mortgage-arizona/",
    description: () =>
      "For homeowners 62+ who want to access their home equity without monthly payments.",
  },
  {
    name: "Refinancing",
    href: "/refinancing-arizona/",
    description: () =>
      "Lower your rate, reduce your term, or tap into your equity with a refinance.",
  },
];

type CountyMortgageProgramsProps = {
  countyName: string;
  fhaLimit: string;
  intro?: string;
};

export default function CountyMortgagePrograms({
  countyName,
  fhaLimit,
  intro,
}: CountyMortgageProgramsProps) {
  const introText =
    intro ??
    `We offer a full range of home loan options for ${countyName} residents — whether you are buying, refinancing, or tapping into your equity.`;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-brand-green-deep text-[28px] lg:text-[32px] font-playfair mb-6">
          Mortgage Programs Available in {countyName}
        </h2>
        <p className="text-brand-text-muted text-[15px] leading-[1.7] mb-8">
          {introText}
        </p>
        <ul className="space-y-2">
          {programs.map((program) => (
            <li key={program.href} className="flex gap-3 text-[15px] leading-[1.7]">
              <span
                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3fb364]"
                aria-hidden
              />
              <span className="text-brand-text-muted">
                <Link
                  href={program.href}
                  prefetch={false}
                  className="font-bold text-[#3fb364] no-underline hover:no-underline"
                >
                  {program.name}
                </Link>
                {" – "}
                {program.description(countyName, fhaLimit)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
