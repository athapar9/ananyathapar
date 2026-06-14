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
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  Leadership
                </h1>
                <div className="flex-grow border-t border-[var(--border-color)]" />
              </div>
            </FadeUp>

            {/* Awards first */}
            <FadeUp delay={0.06}>
              <h2
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                Awards & Honors
              </h2>
              <ul className="space-y-3 list-none mb-8">
                <li className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
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
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    One of four recipients from a graduating class of 6,000+
                    engineers.
                  </p>
                </li>
                <li className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      Outstanding Collegiate Member
                    </span>{" "}
                    · Society of Women Engineers
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    National recognition for the top 20 student leaders across
                    all SWE collegiate sections.
                  </p>
                </li>
              </ul>
            </FadeUp>

            {/* Intro */}

            {/* President */}
            <FadeUp delay={0.14}>
              <h2
                className="text-xl mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                President, Cal Poly SWE
              </h2>
              <p
                className="mb-4 text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                I led Cal Poly SWE as it grew into the{" "}
                <strong>
                  third-largest collegiate SWE section in the country
                </strong>
                , serving 650+ students with a team of 40 officers. We ran 100+
                events a year, including Evening with Industry which hit a
                record 360 attendees. I managed an eight-member exec board and
                worked closely with university administration to secure funding
                and advocate for the club.
              </p>
              <p
                className="mb-5 text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                My biggest focus as president was making DEI a shared
                responsibility across the whole org, not just one team's job.
                Under my presidency we expanded the DEI Assistants initiative
                across all five cores, implemented demographic tracking to
                actually measure progress, and encouraged cross-core
                collaboration to embed DEI principles into all aspects of the
                organization.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <h3
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--secondary)",
                  fontWeight: 700,
                }}
              >
                Previous roles
              </h3>
            </FadeUp>
            <FadeUp delay={0.22}>
              <h2
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                Previous Roles in CPSWE
              </h2>
              <div className="space-y-4 mb-8">
                <div className="pl-4 border-l-2 border-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--accent)",
                    }}
                  >
                    Vice President of Membership
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Led a team of five across 25+ events, recruited 200+ new
                    members, and mentored five freshman reps through weekly
                    1:1s. All five became official officers the following year.
                    I also worked with the EE department to bring in
                    underrepresented women from a major that hadn't engaged much
                    with SWE before.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--accent)",
                    }}
                  >
                    Professional Development Chair
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Coordinated academic days across 10+ departments, ran resume
                    workshops and EWI prep sessions, and helped recruit 180+ new
                    members that year with 400+ students attending our showcase.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Additional involvement */}
            <FadeUp delay={0.26}>
              <h2
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                Additional Involvement
              </h2>
              <div className="space-y-4 mb-6">
                <div className="pl-4 border-l-2 border-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--accent)",
                    }}
                  >
                    <a
                      href="https://wishcalpoly.com/"
                      className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent-hover)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Women in Software and Hardware (WISH)
                    </a>{" "}
                    · Mentorship Officer
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Supported 30 underclasswomen in CS by connecting them with
                    experienced upperclassmen and organizing mentorship events.
                    One of my mentees went on to become a SWE officer herself.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-[var(--accent-light)]">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--accent)",
                    }}
                  >
                    <a
                      href="https://thepercentageproject.com/"
                      className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent-hover)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Percentage Project
                    </a>{" "}
                    · Cal Poly Representative
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Led survey distribution across Cal Poly engineering
                    students, reaching 100+ participants. The nationwide
                    initiative gathered data from 4,500+ students across 12
                    universities, with findings published to drive conversations
                    around DEI in engineering education.
                  </p>
                </div>
              </div>
              <div className="border-t border-[var(--border-color)] w-full mt-8" />
            </FadeUp>
          </div>

          {/* Photo column */}
          <FadeUp
            delay={0.05}
            className="flex flex-col gap-5 w-full lg:w-[460px]"
          >
            <div className="grid grid-cols-2 gap-4 w-full">
              <div
                className="group relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
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

              <div
                className="group relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
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

            <div
              className="group relative w-full rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={ewi24}
                alt="Cal Poly Society of Women Engineers Executive Board 2023-2024"
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CPSWE Executive Board 2023-2024
              </div>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </div>
  );
}
