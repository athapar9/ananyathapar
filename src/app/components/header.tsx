"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work_experience" },
  { label: "Leadership", href: "/leadership" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border-color)]">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
        >
          Ananya Thapar
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[1.5px] bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2 5h16M2 10h16M2 15h16"
              stroke="var(--ink)"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] px-6 py-4 flex flex-col gap-4 bg-[var(--background)]">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === href
                  ? "text-[var(--accent)]"
                  : "text-[var(--ink-soft)]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
