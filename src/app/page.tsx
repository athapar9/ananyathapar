import Image from "next/image";
import Header from "./components/header";
import headshot from "./images/Headshot_25.jpg";
import ewiPhoto from "./images/EWI2025-089.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-[1200px] mx-auto px-6 py-16">
        <section className="flex flex-col-reverse lg:flex-row items-start gap-20">
          <div className="flex-grow text-[18px] leading-[1.8] font-serif max-w-full lg:max-w-[600px]">
            <div className="flex items-center mb-8">
              <h1 className="text-[var(--accent)] text-3xl font-medium">
                Hey there, I’m Ananya!
              </h1>
              <div className="flex-grow border-t border-[color:var(--border-color)] ml-2" />
            </div>

            <p className="mb-5">
              I recently graduated in June 2025 from{" "}
              <a
                href="https://www.calpoly.edu/major/computer-science"
                className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition"
              >
                Cal Poly San Luis Obispo
              </a>
              , with a B.S. in Computer Science and a concentration in
              Artificial Intelligence. This September, I’m beyond excited to be
              joining Microsoft as a software engineer — but my passions go far
              beyond coding.
            </p>

            <p className="mb-5">
              I have a deep love for building things that are equal parts
              technical and human-centered, and I’m especially drawn to work
              that lets me collaborate across disciplines, connect with people,
              and see real-world impact.
            </p>

            <p className="mb-5">
              At the heart of everything I do is a drive to make a meaningful,
              lasting change in the projects I build, the communities I support,
              and the teams I’m part of.
            </p>

            <p className="mb-5">
              This year, I had the privilege of serving as President of{" "}
              <a
                href="https://www.calpolyswe.com/"
                className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition"
              >
                Cal Poly’s Society of Women Engineers
              </a>{" "}
              — one of the largest SWE sections in the nation. Leading this
              incredible community has deepened my passion for fostering
              inclusive environments where everyone can thrive and grow.
            </p>

            <p className="mb-5">
              In September, I’ll be relocating to Seattle, bringing my passion
              for innovation, collaboration, and inclusive leadership into this
              exciting next chapter.
            </p>

            <p className="mb-5">
              Outside of engineering, I love staying active — whether hiking,
              practicing yoga, or working out. Cooking with friends, discovering
              new coffee spots, and curling up with a good memoir or essay while
              cuddling with my dog are some of my favorite ways to unwind. I’m
              always learning and finding inspiration in the people and
              experiences around me.
            </p>

            <div className="border-t border-[color:var(--border-color)] w-full max-w-xl mt-8" />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-[480px]">
            <div className="group relative w-full h-[500px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              <Image
                src={headshot}
                alt="Ananya's Headshot"
                fill
                priority
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.4)] text-white text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Senior Portrait • Cal Poly Class of 2025
              </div>
            </div>

            <div className="group relative w-full h-[500px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              <Image
                src={ewiPhoto}
                alt="Ananya speaking at Evening With Industry"
                fill
                priority
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.4)] text-white text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Speaking at Evening With Industry 2025
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
