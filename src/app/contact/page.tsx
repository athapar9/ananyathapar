import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main className="flex-grow w-full max-w-[700px] mx-auto px-6 sm:px-8 py-16 flex flex-col gap-8">

        <FadeUp>
          <div className="flex items-center">
            <h1
              className="text-3xl mr-6 whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
            >
              Contact Me
            </h1>
            <hr className="flex-grow border-[var(--border-color)] border-t" />
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p
            className="text-base leading-[1.8]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            I&rsquo;d love to hear from you! Whether you have a professional opportunity in mind, want to chat
            about tech, share cute dog stories (and pictures, of course!), or just want to say hi — feel
            free to reach out via email or LinkedIn.
          </p>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="space-y-8 max-w-xl w-full">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:athapar24@gmail.com"
                className="group p-4 rounded-xl border border-[var(--border-color)] bg-[var(--background)]
                  transition-all duration-300 hover:shadow-md hover:border-[var(--accent)] hover:bg-[var(--accent-light)]
                  flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <span
                  className="text-base italic underline decoration-[var(--accent)] underline-offset-4 group-hover:text-[var(--accent-hover)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                >
                  athapar24@gmail.com
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  for <strong>professional inquiries.</strong>
                </span>
              </a>

              <a
                href="mailto:ananyathapar9@gmail.com"
                className="group p-4 rounded-xl border border-[var(--border-color)] bg-[var(--background)]
                  transition-all duration-300 hover:shadow-md hover:border-[var(--accent)] hover:bg-[var(--accent-light)]
                  flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <span
                  className="text-base underline decoration-[var(--accent)] underline-offset-4 group-hover:text-[var(--accent-hover)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
                >
                  ananyathapar9@gmail.com
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  for <strong>social inquiries.</strong>
                </span>
              </a>
            </div>

            <hr className="border-t border-[var(--border-color)]" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ananya-thapar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 transition-all duration-300 group"
              aria-label="LinkedIn profile"
            >
              <span
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-light)] transition-all duration-300"
                style={{ color: "var(--accent)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.3c.5-.8 1.3-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v6.1z" clipRule="evenodd" />
                </svg>
              </span>
              <span
                className="text-lg group-hover:text-[var(--accent-hover)] transition-colors"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 400 }}
              >
                Connect on LinkedIn
              </span>
            </a>
          </div>
        </FadeUp>
      </main>
      <Footer />
    </div>
  );
}