import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-lg text-center">
        {/* Headline */}
        <h1 className="font-sans text-3xl sm:text-4xl font-medium text-neutral-900 mb-4 leading-snug">
          Hey there, I&apos;m{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Sharlene</span>
            {/* Wavy underline */}
            <svg
              aria-hidden="true"
              className="hero-squiggle absolute -bottom-1 left-0 w-full"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
              height="6"
            >
              <path
                d="M0 3 Q12.5 0 25 3 Q37.5 6 50 3 Q62.5 0 75 3 Q87.5 6 100 3"
                fill="none"
                stroke="#F3B279"
                strokeWidth="2.5"
                pathLength="100"
              />
            </svg>
          </span>{" "}
          <span className="hero-wave" aria-hidden="true">
            👋
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
          I&apos;m an{" "}
          <em className="font-serif italic" style={{ color: "#419C44" }}>
            explorative
          </em>
          ,{" "}
          <em className="font-serif italic" style={{ color: "#D54B72" }}>
            passionate
          </em>
          , and{" "}
          <em className="font-serif italic" style={{ color: "#645CCD" }}>
            collaborative
          </em>{" "}
          UX &amp; product designer, based in San Francisco Bay Area,
          California 🌁
        </p>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <Link
          href="#works"
          aria-label="Scroll to works"
          className="text-neutral-400 hover:text-neutral-700 transition-colors animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
