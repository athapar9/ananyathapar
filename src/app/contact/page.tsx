import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[640px] mx-auto px-6 pt-16 pb-10">
        <FadeUp>
          <p className="eyebrow mb-3">Get in touch</p>
          <h1 className="font-display text-4xl text-[var(--ink)] mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-[var(--ink-soft)] leading-relaxed mb-12 max-w-[480px]">
            Open to product engineering conversations, opportunities, or
            just talking shop. Email is the fastest way to reach me.
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-col gap-4 mb-10">
            <a
              href="mailto:athapar24@gmail.com"
              className="group flex items-center justify-between p-5 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(20,24,27,0.06)] transition-all"
            >
              <div>
                <p className="font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  athapar24@gmail.com
                </p>
                <p className="text-sm text-[var(--ink-soft)] mt-0.5">
                  Professional inquiries
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--accent)]">
                &rarr;
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ananya-thapar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(20,24,27,0.06)] transition-all"
            >
              <div>
                <p className="font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  LinkedIn
                </p>
                <p className="text-sm text-[var(--ink-soft)] mt-0.5">
                  Connect or follow my work
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--accent)]">
                &rarr;
              </span>
            </a>

            <a
              href="https://github.com/ananyaaa-t"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(20,24,27,0.06)] transition-all"
            >
              <div>
                <p className="font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  GitHub
                </p>
                <p className="text-sm text-[var(--ink-soft)] mt-0.5">
                  Code and project history
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--accent)]">
                &rarr;
              </span>
            </a>
          </div>
        </FadeUp>
      </main>
      <Footer />
    </div>
  );
}
