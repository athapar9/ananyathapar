import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import FadeUp from "./components/FadeUp";
import headshot from "./images/Headshot_25.jpg";
import ewiPhoto from "./images/EWI2025-089.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-16">
        <section className="flex flex-col-reverse lg:flex-row items-start gap-16">

          {/* Text column */}
          <div className="flex-grow max-w-full lg:max-w-[600px]">
            <FadeUp>
              {/* Eyebrow label */}
              <p
                className="text-xs tracking-[0.18em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "var(--secondary)", fontWeight: 400 }}
              >
                Software Engineer · Microsoft
              </p>

              <div className="flex items-center mb-6">
                <h1
                  className="text-4xl mr-4 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
                >
                  Hey, I&apos;m Ananya!
                </h1>
                <div className="flex-grow border-t border-[var(--border-color)]" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                I&apos;m a Software Engineer for Azure Compute at Microsoft, where I build and improve systems that
                power cloud infrastructure at scale. I graduated in June 2025 from{" "}
                <a
                  href="https://www.calpoly.edu/major/computer-science"
                  className="underline decoration-[var(--accent)] underline-offset-4 transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  Cal Poly San Luis Obispo
                </a>
                , with a B.S. in Computer Science and a concentration in Artificial Intelligence.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                I love work that blends technical depth with human-centered design. I especially thrive on
                collaborating across disciplines, solving challenging problems, connecting with people, and
                seeing real-world impact from the projects I build.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                At the heart of everything I do is a drive to make a meaningful, lasting change in the
                projects I build, the communities I support, and the teams I&apos;m part of.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                In 2024–2025, I had the privilege of serving as President of{" "}
                <a
                  href="https://www.calpolyswe.com/"
                  className="underline decoration-[var(--accent)] underline-offset-4 transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  Cal Poly&apos;s Society of Women Engineers
                </a>
                , one of the largest SWE sections in the nation. Leading this incredible community deepened
                my passion for fostering inclusive environments where everyone can thrive.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Outside of work, I enjoy hiking, yoga, cooking with friends, exploring coffee spots, and
                curling up with my dog and a good book.
              </p>

              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Feel free to reach out if you want to chat about tech, product, or life beyond engineering!
              </p>

              <div className="border-t border-[var(--border-color)] w-full mt-8" />
            </FadeUp>
          </div>

          {/* Photo column */}
          <FadeUp delay={0.05} className="flex flex-col gap-5 w-full lg:w-[440px]">
            <div className="group relative w-full h-[520px] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <Image
                src={headshot}
                alt="Ananya's Headshot"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Senior Portrait · Cal Poly Class of 2025
              </div>
            </div>

            <div className="group relative w-full h-[360px] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <Image
                src={ewiPhoto}
                alt="Ananya speaking at Evening With Industry"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-sm px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Speaking at Evening With Industry 2025
              </div>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </div>
  );
}