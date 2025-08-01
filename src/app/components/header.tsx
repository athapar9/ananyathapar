"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-t border-gray-200 shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12"
      >
        <div className="flex flex-1">
          <Link
            href="/"
            className="text-2xl font-serif font-light text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Ananya Thapar
          </Link>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          {["Home", "Work Experience", "Projects", "Leadership", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`${item.toLowerCase().replace(/\s+/g, "_")}`}
                className="text-[var(--foreground)] hover:text-[var(--accent)] font-serif font-light hover:underline underline-offset-4 transition"
              >
                {item}
              </a>
            )
          )}
        </PopoverGroup>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md focus:outline-none"
          >
            <span className="sr-only">Open mobile menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden z-50 relative"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#fffaf0] shadow-xl px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="home" className="text-xl font-serif font-light ">
              Ananya Thapar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {[
              "Home",
              "Work Experience",
              "Projects",
              "Leadership",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase().replace(/\s+/g, "_")}`}
                className="block text-lg font-serif font-light hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
