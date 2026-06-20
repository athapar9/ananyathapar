import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import FadeUp from "./components/FadeUp";
import headshot from "./images/Headshot_25.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-[1100px] mx-auto px-6">
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center pt-16 pb-12 lg:pt-24 lg:pb-16">
          <FadeUp>
            <p className="eyebrow mb-5">Software Engineer · Microsoft</p>

            <h1 className="font-display text-[2.75rem] sm:text-[3.4rem] leading-[1.08] text-[var(--ink)] mb-7">
              Hey there,
              <br />
              I&apos;m Ananya.
            </h1>

            <div className="space-y-6 text-lg text-[var(--ink-soft)] leading-relaxed mb-9">
              <p>
                I'm a Software Engineer on the Azure Compute team at Microsoft,
                working on systems that power cloud infrastructure at scale.
                I&apos;m drawn to product engineering, developer tools, and
                experiences that make someone&apos;s work meaningfully easier.
                Outside of work you&apos;ll find me hiking, cooking with
                friends, or curled up with my dog and a good book.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:athapar24@gmail.com"
                className="px-6 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative w-full max-w-[360px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(20,24,27,0.12)]">
              <Image
                src={headshot}
                alt="Ananya Thapar"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
          </FadeUp>
        </section>

        <FadeUp delay={0.15}>
          <section className="grid sm:grid-cols-3 gap-8 pt-4 pb-24 border-t border-[var(--border-color)]">
            <div>
              <p className="eyebrow mb-3">Engineer</p>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                Cloud systems at Microsoft Azure Compute. I focus on building
                scalable data infrastructure and improving system reliability
                across large distributed environments. I care about designing
                clean, maintainable architecture and shipping changes that
                reduce friction for people that depend on these systems every
                day.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3">Leader</p>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                In my final year at Cal Poly, I served as President of the
                Society of Women Engineers, leading 42 officers and a community
                of 650+ members. It taught me that the best teams feel like
                communities, and I've carried that into everything I build and
                lead since.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3">Builder</p>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                I love building things people actually use by taking ideas from
                concept to shipped product, owning the full stack, and staying
                close enough to the user to know if it's actually working.
              </p>
            </div>
          </section>
        </FadeUp>
      </main>

      <Footer />
    </div>
  );
}
