"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "About me", href: "#about" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-sm font-medium tracking-wide text-neutral-900 hover:opacity-70 transition-opacity"
        >
          Sharlene Fang
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-neutral-900 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-neutral-900 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-neutral-900 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-neutral-600"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm text-neutral-600"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
