import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import FadeUp from "./components/FadeUp";
import headshot from "./images/Headshot_25.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-20">
        
        <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <div className="max-w-[620px] space-y-8">
            
            {/* Eyebrow + Title block */}
            <FadeUp className="space-y-4">
              <p
                className="text-xs tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--secondary)",
                  fontWeight: 400,
                }}
              >
                Software Engineer · Microsoft
              </p>

              <div className="flex items-center gap-4">
                <h1
                  className="text-4xl leading-tight whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  Hey, I'm Ananya!
                </h1>

                <div className="flex-1 h-px bg-[var(--border-color)]" />
              </div>
            </FadeUp>

            {/* Body content */}
            <div className="space-y-5">
              
              <FadeUp delay={0.05}>
                <p className="text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  I'm a Software Engineer on the Azure Compute team at Microsoft,
                  working on systems that power cloud infrastructure at scale. I
                  graduated in June 2025 from{" "}
                  <a
                    href="https://www.calpoly.edu/major/computer-science"
                    className="underline decoration-[var(--accent)] underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Cal Poly San Luis Obispo
                  </a>
                  {" "}with a B.S. in Computer Science and a concentration in AI.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  I am passionate about building things that actually matter to people.
                  I'm happiest when I'm working across disciplines and shipping
                  something I'm proud of. I also spent my last year at Cal Poly as
                  President of{" "}
                  <a
                    href="https://www.calpolyswe.com/"
                    className="underline decoration-[var(--accent)] underline-offset-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Cal Poly SWE
                  </a>
                  .
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  At the heart of everything I do is a drive to build meaningful,
                  lasting impact in the projects I work on and the teams I join.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  Outside of work you can find me hiking, cooking with friends,
                  or curled up with my dog and a book.
                </p>
              </FadeUp>
            </div>

            {/* Divider (intentional end anchor) */}
            <FadeUp delay={0.25}>
              <div className="pt-2 border-t border-[var(--border-color)]" />
            </FadeUp>

          </div>

          {/* RIGHT COLUMN */}
          <FadeUp className="w-full lg:w-[360px]">
            <div className="relative aspect-[11/13] rounded-2xl overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
              <Image
                src={headshot}
                alt="Ananya's Headshot"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
          </FadeUp>

        </section>
      </main>
      <Footer />
    </div>
  );
}