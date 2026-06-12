import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";
import ewi_advisor from "../images/EWI2025-007.jpg";
import ewi24 from "../images/ewi_24_3.jpg";
import ewi_speaking from "../images/EWI2025-089.jpg";

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-16">
        <section className="flex flex-col lg:flex-row items-start gap-16">

          {/* Text column */}
          <div className="flex-grow max-w-full lg:max-w-[600px]">
            <FadeUp>
              <div className="flex items-center mb-8">
                <h1
                  className="text-3xl mr-4 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
                >
                  Leadership
                </h1>
                <div className="flex-grow border-t border-[var(--border-color)]" />
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                I&apos;m passionate about building inclusive, equitable communities—spaces where everyone feels
                respected, appreciated, and above all, valued. During my time at Cal Poly, I pursued this
                mission through leadership, especially through my work as President of the Cal Poly Society
                of Women Engineers (CPSWE), one of the largest SWE collegiate sections nationwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
              >
                Cal Poly Society of Women Engineers
              </h2>
              <p className="mb-4 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                As President, I managed an <strong>eight-member executive board</strong> and supported{" "}
                <strong>40+ officers</strong> in executing over <strong>100 annual events</strong> for more
                than <strong>600 members</strong>. The structure resembled a tech organization — similar to a
                Group Engineering Manager role — overseeing multiple leads, aligning goals across teams, and
                fostering a shared mission.
              </p>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                I developed skills in strategic communication, one-on-one mentorship, conflict resolution,
                and leadership development. I learned to lead with empathy, drive cross-functional
                collaboration, and build a mission-driven culture. I also partnered with university
                administration to secure funding, advocate for club operations, and scale outreach and
                industry relationships.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <h3
                className="text-base mb-2 tracking-wide"
                style={{ fontFamily: "var(--font-body)", color: "var(--secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                Highlights
              </h3>
              <ul className="list-disc ml-5 mb-6 space-y-2">
                {[
                  <>Coauthored national award applications that earned CPSWE the <strong>Boeing Multicultural Award</strong> and the <strong>Gold Section Mission Award</strong> at WE24</>,
                  <>Led outreach that impacted <strong>6,000+ K–12 students</strong> through bilingual STEM activities and school programs</>,
                  <>Organized and facilitated weekly general meetings in partnership with SWE&apos;s five core teams and <strong>15+ corporate sponsors</strong></>,
                  <>Advanced DEI by overseeing creation of DEI Assistant roles, promoting cross-team collaboration, and embedding inclusive practices into officer training and event design</>,
                ].map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
              >
                Previous Roles in CPSWE
              </h2>
              <ul className="list-disc ml-5 mb-6 space-y-2">
                <li className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  <strong>Vice President of Member Relations</strong> — Led a team of 5 to coordinate 25+ events,
                  managed a 300+ person Mentor/Mentee Program, and mentored 5 freshman reps — all of whom became officers
                </li>
                <li className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                  <strong>Professional Development Chair</strong> — Ran joint workshops with 10+ departments and
                  led recruitment at a showcase that drew 300+ attendees
                </li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.24}>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
              >
                Additional Leadership & Mentorship
              </h2>
              <p className="mb-5 text-base leading-[1.8]" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Beyond CPSWE, I was involved in{" "}
                <a href="https://wishcalpoly.com/" className="underline decoration-[var(--accent)] underline-offset-4 transition-colors hover:text-[var(--accent)]" target="_blank" rel="noopener noreferrer">
                  Women in Software and Hardware (WISH)
                </a>{" "}
                and served as a Mentorship Officer. I also represented Cal Poly in{" "}
                <a href="https://thepercentageproject.com/" className="underline decoration-[var(--accent)] underline-offset-4 transition-colors hover:text-[var(--accent)]" target="_blank" rel="noopener noreferrer">
                  The Percentage Project
                </a>
                , a national campaign to spotlight and improve the experiences of underrepresented students in STEM.
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <h2
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
              >
                Awards & Honors
              </h2>
              <ul className="space-y-4 list-none">
                <li
                  className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-light)]"
                >
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    <a
                      href="https://ceng.calpoly.edu/connection/2025/06/college-of-engineering-student-awards/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent-hover)] underline underline-offset-4"
                      style={{ color: "var(--accent)" }}
                    >
                      Outstanding Graduating Student Award
                    </a>{" "}
                    · Cal Poly College of Engineering
                  </p>
                  <p className="text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--foreground)" }}>
                    Awarded to one of four students from a graduating class of over 6,000 engineers.
                  </p>
                </li>
                <li
                  className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-light)]"
                >
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    <span style={{ color: "var(--accent)" }}>Outstanding Collegiate Member</span>{" "}
                    · Society of Women Engineers
                  </p>
                  <p className="text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--foreground)" }}>
                    National recognition awarded to the top 20 student leaders across all SWE collegiate
                    sections for exemplary leadership and impact.
                  </p>
                </li>
              </ul>

              <div className="border-t border-[var(--border-color)] w-full mt-8" />
            </FadeUp>
          </div>

          {/* Photo column */}
          <FadeUp delay={0.05} className="flex flex-col gap-5 w-full lg:w-[460px]">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="group relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={ewi_advisor}
                  alt="Photo with my advisor, Dr. Helene Finger"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 220px"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  With my advisor, Dr. Helene Finger
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={ewi_speaking}
                  alt="Ananya speaking at Evening With Industry"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 220px"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Speaking at Evening With Industry 2025
                </div>
              </div>
            </div>

            <div className="group relative w-full rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer" style={{ aspectRatio: "4/3" }}>
              <Image
                src={ewi24}
                alt="Cal Poly Society of Women Engineers Executive Board 2023–2024"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CPSWE Executive Board 2023–2024
              </div>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </div>
  );
}