import Header from "../components/header";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1300px] mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-center mb-10">
          <h1 className="text-4xl font-serif text-foreground mr-6 whitespace-nowrap">
            Contact Me
          </h1>
          <hr className="flex-grow border-gray-300" />
        </div>

        <p className="text-xl font-serif text-foreground mb-8 leading-relaxed">
          I’d love to hear from you! Whether you have a professional opportunity in mind, 
          want to chat about tech, share cute dog stories (and pictures, of course!), 
          or just want to say hi — feel free to reach out via email or LinkedIn.
        </p>

        <div className="space-y-10 max-w-xl">
          <div className="font-serif text-foreground text-lg space-y-4">
            <p>
              <a
                href="mailto:athapar24@gmail.com"
                className="underline hover:text-primary"
              >
                <em>athapar24@gmail.com</em>
              </a>{" "}
              for <strong>professional inquiries</strong>.
            </p>
            <p>
              <a
                href="mailto:ananyathapar9@gmail.com"
                className="underline hover:text-primary"
              >
                <em>ananyathapar9@gmail.com</em>
              </a>{" "}
              for <strong>social inquiries</strong>.
            </p>
          </div>

          <hr className="border-t border-gray-300" />

          <a
            href="https://www.linkedin.com/in/ananya-thapar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-2xl font-serif text-foreground hover:text-primary transition-colors max-w-md"
            style={{ minWidth: "300px" }}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
