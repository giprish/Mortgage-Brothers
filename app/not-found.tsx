import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found - Arizona Home Loans | The Mortgage Brothers",
  description:
    "The page you're looking for doesn't exist or has been moved. Return home, explore our loan programs, or read the Mortgage Brothers blog.",
  robots: {
    index: false,
    follow: true,
  },
};

const shortcuts = [
  {
    href: "/",
    label: "Return Home",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="h-14 w-14 sm:h-16 sm:w-16"
      >
        <path
          d="M8 44h48v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-6z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M12 44V28h40v16"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M32 10 18 22v16h10V28h8v10h10V22L32 10z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/mortgage-loan-programs-arizona/",
    label: "Explore Our Services",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="h-14 w-14 sm:h-16 sm:w-16"
      >
        <rect
          x="14"
          y="8"
          width="36"
          height="48"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M32 22v20M26 27.5h8.5c3 0 5 1.7 5 4.2s-2 4.2-5 4.2H26"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 48h20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/blog/",
    label: "Explore Our Blog",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="h-14 w-14 sm:h-16 sm:w-16"
      >
        <path
          d="M10 14c6.5-3 13.5-3 22 1.5C40.5 11 47.5 11 54 14v36c-6.5-3-13.5-3-22 1.5C23.5 47 16.5 47 10 50V14z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M32 16v35.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#344525]">
      <Navbar />
      <main className="relative flex min-h-screen flex-1 flex-col pt-[64px] sm:pt-[72px]">
        <section className="relative flex min-h-[calc(100svh-64px)] flex-1 flex-col overflow-hidden sm:min-h-[calc(100svh-72px)]">
          <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden>
            <Image
              src="/home/az-mortgage-brothers-background.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            <Image
              src="/home/mortgage-blog.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-right mix-blend-multiply"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #344525 0%, rgb(50, 94, 63) 20%, rgba(255,255,255,0) 72%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-6 pb-10 pt-10 sm:px-10 sm:pb-14 sm:pt-14 lg:px-16 lg:pb-16 lg:pt-16">
            <div className="max-w-[40rem] lg:max-w-[42%]">
              <h1 className="text-[clamp(2.4rem,5.4vw,5.25rem)] font-bold leading-[1.08] tracking-tight text-white">
                Oops! Page Not Found
              </h1>
              <p className="mt-4 max-w-xl text-[clamp(1rem,2vw,1.65rem)] font-normal leading-snug text-white sm:mt-5">
                Error 404: It seems the page you&apos;re looking for doesn&apos;t exist
                or has been moved
              </p>
            </div>

            <nav
              aria-label="Helpful links"
              className="mt-16 grid w-full grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-8 lg:mt-24"
            >
              {shortcuts.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className="group flex flex-col items-center text-center text-white transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="mb-3 text-white transition-opacity duration-200 group-hover:opacity-80">
                    {item.icon}
                  </span>
                  <span className="text-[18px] font-normal sm:text-[20px] lg:text-[22px]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
