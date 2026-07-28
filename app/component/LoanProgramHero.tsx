import Link from "next/link";

type LoanProgramHeroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export default function LoanProgramHero({
  title,
  subtitle,
  imageSrc,
}: LoanProgramHeroProps) {
  return (
    <section className="relative w-full text-white min-h-[520px] lg:min-h-[640px] xl:min-h-[720px] flex items-center overflow-hidden">
      {/* Clean photo only — no baked-in text */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          backgroundPosition: "100% 50%",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      {/* Green gradient overlay matching original site */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgb(52, 69, 37) 0%, rgb(50, 94, 63) 20%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-[120px] pb-14 lg:pt-[140px] lg:pb-20 relative z-10">
        <div className="max-w-[720px]">
          <h1
            className="text-white text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          <h2 className="text-white/95 text-[17px] sm:text-[22px] lg:text-[26px] font-normal leading-[1.35] mb-8 max-w-[600px]">
            {subtitle}
          </h2>
          <Link
            href="/#get-pre-approved"
            className="inline-flex items-center gap-2.5 bg-[#3fb364] hover:bg-[#349b55] text-white text-[16px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg"
          >
            Start my preapproval
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </Link>
          <p className="text-white/70 text-[13px] mt-3 font-medium">
            3 min / no credit impact
          </p>
        </div>
      </div>
    </section>
  );
}
