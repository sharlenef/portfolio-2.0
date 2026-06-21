import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Sharlene Fang",
  description:
    "QA Engineer by day, Product Designer by night. Learn about Sharlene Fang's experience, education, and what makes her tick.",
};

const experience = [
  {
    company: "Roku, Inc.",
    period: "2023 – Present",
    role: "QA Engineer · Writing python scripts for testing product software and creating/implementing AI tools.",
  },
  {
    company: "Stealth Startup",
    period: "2024 – 2025",
    role: "UX Designer · Collaborated with developers and researchers to create MVP prototype.",
  },
  {
    company: "Stealth Startup",
    period: "Summer 2022",
    role: "UX Designer · Researched and designed an MVP prototype.",
  },
];

const funFacts = [
  {
    title: "Challenge-Seeker",
    period: "Birth – Present",
    description:
      "From exploring new design styles to eating new flavors and conversing in a foreign language, I find thrill in trying new things and venturing into the unknown.",
    decoration: {
      src: "/about/croissant.png",
      alt: "Croissant keychain",
      className: "absolute -right-2 -top-4 w-12 rotate-[-10deg] sm:-right-6 sm:w-14",
    },
  },
  {
    title: "Professional Listener",
    period: "Birth – Present",
    description:
      "I'm always down to listen to others' stories and provide a listening ear. My empathetic nature helps me understand others' perspectives and provide support.",
  },
  {
    title: "Trinket Collector",
    period: "2020 – Present",
    description:
      "I love collecting keychains, figures, plushies, stickers, and comic books. Decorating my space with trinkets inspires me to be creative.",
    decoration: {
      src: "/about/figurine.png",
      alt: "Cat figurine",
      className: "absolute -right-1 top-6 w-8 sm:-right-2 sm:w-10",
    },
  },
  {
    title: "Idk what else to put",
    period: "2019 – Present",
    description: "lorem ipsum blah blah blah",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-xl font-medium text-neutral-900">
      {children}
    </h2>
  );
}

function EntryBlock({
  title,
  period,
  children,
}: {
  title: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <p className="font-sans text-sm sm:text-base text-neutral-900">
        <span className="font-medium">{title}</span>
        <span className="text-neutral-600"> · {period}</span>
      </p>
      <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        {/* Intro */}
        <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 w-full sm:pt-36">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 md:gap-16 items-start">
            <div className="relative aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 overflow-hidden rounded-lg">
              <Image
                src="/about/profile.jpg"
                alt="Sharlene Fang smiling in front of cherry blossom trees"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-sans text-3xl sm:text-4xl font-medium text-neutral-900 leading-snug">
                QA Engineer by day ☀️, Product Designer by night 🌙
              </h1>
              <div className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Hi again, Sharlene here! I&apos;m a QA Engineer from the San
                  Francisco Bay Area and a free-time product designer. I
                  graduated from the{" "}
                  <span className="font-medium text-neutral-900">
                    University of Washington
                  </span>{" "}
                  (Seattle) with a degree in{" "}
                  <span className="font-medium text-neutral-900">
                    Informatics with a focus in Human Centered Interaction
                  </span>
                  .
                </p>
                <p>
                  It was during my university days where I found my passion for
                  design. I love that through the UI/UX field, I can take my
                  passion of design and combine it with psychology and
                  technology to bring my art to life and innovate solutions to
                  improve the lives of others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience, Education & Fun stuff */}
        <section className="max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left column */}
            <div className="space-y-16">
              <div>
                <SectionHeading>Experience</SectionHeading>
                <div className="mt-8 space-y-8">
                  {experience.map((item) => (
                    <EntryBlock
                      key={`${item.company}-${item.period}`}
                      title={item.company}
                      period={item.period}
                    >
                      {item.role}
                    </EntryBlock>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading>Education</SectionHeading>
                <div className="mt-8 font-sans text-sm sm:text-base text-neutral-600 leading-relaxed space-y-1">
                  <p className="font-medium text-neutral-900">
                    University of Washington
                  </p>
                  <p>2019 – 2023</p>
                  <p>Informatics (Human Centered Interaction)</p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <SectionHeading>Fun stuff about me</SectionHeading>

              <div className="mt-8 space-y-8">
                {funFacts.map((fact) => (
                  <div key={fact.title} className="relative pr-12 sm:pr-16">
                    <EntryBlock title={fact.title} period={fact.period}>
                      {fact.description}
                    </EntryBlock>
                    {fact.decoration && (
                      <Image
                        src={fact.decoration.src}
                        alt={fact.decoration.alt}
                        width={56}
                        height={80}
                        className={fact.decoration.className}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
