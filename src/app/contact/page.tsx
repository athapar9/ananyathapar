import Header from "../components/header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header />
      <main className="w-full max-w-[700px] mx-auto px-6 sm:px-8 py-20 flex flex-col gap-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-serif font-medium mr-6 whitespace-nowrap text-[var(--accent)]">
            Contact Me
          </h1>
          <hr className="flex-grow border-[var(--border-color)] border-t" />
        </div>

        <p className="text-lg font-serif leading-relaxed">
          I’d love to hear from you! Whether you have a professional opportunity
          in mind, want to chat about tech, share cute dog stories (and
          pictures, of course!), or just want to say hi — feel free to reach out
          via email or LinkedIn.
        </p>

        <div className="space-y-8 max-w-xl w-full">
          <div className="flex flex-col gap-6">
            <a
              href="mailto:athapar24@gmail.com"
              className="group p-4 rounded-lg border border-[var(--border-color)] bg-[var(--background)] transition-shadow hover:shadow-lg flex flex-col sm:flex-row sm:items-center gap-2 cursor-pointer"
            >
              <span className="font-serif text-lg italic underline decoration-[var(--accent)] underline-offset-4 group-hover:text-[var(--accent)] transition-colors">
                athapar24@gmail.com
              </span>
              <span className="font-serif  text-sm sm:text-base text-[var(--foreground)] transition-colors">
                for
                <strong className=" font-semibold">
                  {" "}
                  professional inquiries.
                </strong>
              </span>
            </a>

            <a
              href="mailto:ananyathapar9@gmail.com"
              className="group p-4 rounded-lg border border-[var(--border-color)] bg-[var(--background)] transition-shadow hover:shadow-lg flex flex-col sm:flex-row sm:items-center gap-2 cursor-pointer"
            >
              <span className="font-serif text-lg  underline decoration-[var(--accent)] underline-offset-4 group-hover:text-[var(--accent)] transition-colors">
                ananyathapar9@gmail.com
              </span>
              <span className="font-serif  text-sm sm:text-base text-[var(--foreground)] transition-colors">
                for
                <strong className=" font-semibold"> social inquiries.</strong>
              </span>
            </a>
          </div>

          <hr className="border-t border-[var(--border-color)]" />

          <a
            href="https://www.linkedin.com/in/ananya-thapar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-2xl font-serif text-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-105 cursor-pointer max-w-md"
            style={{ minWidth: "300px" }}
            aria-label="LinkedIn profile"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.3c.5-.8 1.3-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v6.1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
