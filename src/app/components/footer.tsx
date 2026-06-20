export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] mt-24">
      <div className="mx-auto max-w-[1100px] px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="eyebrow">Ananya Thapar — Software Engineer</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ananya-thapar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ananyaaa-t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:athapar24@gmail.com"
            className="text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
