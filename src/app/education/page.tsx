import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border-color)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-[var(--muted)]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          © {new Date().getFullYear()} Ananya Thapar
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Home
          </Link>
          <Link
            href="/work_experience"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Work
          </Link>
          <Link
            href="/projects"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Projects
          </Link>
          <Link
            href="/leadership"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Leadership
          </Link>
          <Link
            href="/education"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Education
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:athapar24@gmail.com"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Email"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
          <a
            href="https://github.com/ananyaaa-t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.3c.5-.8 1.3-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v6.1z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}