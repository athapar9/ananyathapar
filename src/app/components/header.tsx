"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work Experience", href: "/work_experience" },
    { label: "Projects", href: "/projects" },
    { label: "Leadership", href: "/leadership" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-[var(--border-color)] shadow-sm bg-[var(--background)]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12"
      >
        {/* Name / logo */}
        <div className="flex flex-1">
          <Link
            href="/"
            className="text-2xl font-[var(--font-heading)] text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Ananya Thapar
          </Link>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 items-center">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm tracking-wide transition-colors pb-0.5 ${
                isActive(href)
                  ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                  : "text-[var(--foreground)] hover:text-[var(--accent)]"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {label}
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[var(--border-color)]">
            <a
              href="https://github.com/ananyaaa-t"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.82 1.11.82 2.24 0 1.616-.015 2.92-.015 3.315 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-thapar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.3c.5-.8 1.3-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v6.1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </PopoverGroup>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md focus:outline-none text-[var(--foreground)]"
          >
            <span className="sr-only">Open mobile menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-50 relative">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[var(--background)] shadow-xl px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-xl text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
            >
              Ananya Thapar
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="space-y-5">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`block text-base transition-colors ${
                  isActive(href)
                    ? "text-[var(--accent)] font-normal"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-[var(--border-color)]">
            <a href="https://github.com/ananyaaa-t" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.82 1.11.82 2.24 0 1.616-.015 2.92-.015 3.315 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ananya-thapar/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.3c.5-.8 1.3-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v6.1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}