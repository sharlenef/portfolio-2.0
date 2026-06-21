"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

type Section = {
  id: string;
  label: string;
};

const SCROLL_OFFSET = 160;

export default function CaseStudySidebar({
  title,
  accentTextColor,
  sections,
}: {
  title: string;
  accentTextColor: string;
  sections: Section[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const updateActiveSection = () => {
      let current = sectionElements[0].id;

      for (const element of sectionElements) {
        if (element.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = element.id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  const accentStyle = {
    "--case-accent": accentTextColor,
  } as CSSProperties;

  return (
    <nav className="lg:sticky lg:top-28 lg:self-start" style={accentStyle}>
      <p
        className="font-sans text-xl font-bold mb-6"
        style={{ color: accentTextColor }}
      >
        {title}
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-3">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`inline-block font-sans text-sm sm:text-base transition-[color,transform] duration-200 ${
                  isActive
                    ? "translate-x-1.5 font-bold text-(--case-accent)"
                    : "translate-x-0 text-neutral-600 hover:text-(--case-accent)"
                }`}
              >
                {section.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
