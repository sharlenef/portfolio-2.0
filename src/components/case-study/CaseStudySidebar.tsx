"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type Section = {
  id: string;
  label: string;
};

export default function CaseStudySidebar({
  title,
  accentTextColor,
  sections,
}: {
  title: string;
  accentTextColor: string;
  sections: Section[];
}) {
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
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className="font-sans text-sm sm:text-base text-neutral-600 transition-colors hover:text-(--case-accent)"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
