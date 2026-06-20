import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";
import ewi_advisor from "../images/EWI2025-007.jpg";
import ewi24 from "../images/ewi_24_3.jpg";
import ewi_speaking from "../images/EWI2025-089.jpg";

const roles = [
  {
    title: "President",
    dates: "2024 — 2025",
    bullets: [
      "Led the third-largest collegiate SWE section nationally as President, managing 8 VPs and 42 officers to deliver 100+ annual events and grow membership to 650+ students",
    ],
  },
  {
    title: "Vice President of Membership",
    dates: "2023 — 2024",
    bullets: [
      "Recruited 200+ members as VP of Membership through multi-channel campaigns spanning orientation events, department visits, and community outreach, expanding SWE's reach across underrepresented engineering majors",
    ],
  },
  {
    title: "Professional Development Chair",
    dates: "2022 — 2023",
    bullets: [
      "Ran joint workshops across 10+ departments and led recruitment at a showcase that drew 300+ attendees",
    ],
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pt-14 pb-10">
        <FadeUp>
          <p className="eyebrow mb-3">Sep 2021 — Jun 2025</p>
          <h1 className="font-display text-4xl text-[var(--ink)] mb-2">
            Cal Poly Society of Women Engineers
          </h1>
          <p className="text-[var(--accent)] text-sm font-medium mb-6">
            President · VP of Membership · Professional Development Chair
          </p>
          <p className="text-[var(--ink-soft)] leading-relaxed max-w-[620px] mb-12">
            I spent four years in the organization, serving as president in my
            final year. Throughout that time, I focused on building a connected,
            supportive community and ensuring that value showed up consistently
            across every event. With 650+ members, it’s easy for individuals to
            feel anonymous, so I designed the structure to emphasize mentorship
            and direct relationships over top-down programming. The goal was to
            make sure people felt seen, supported, and genuinely part of the
            community because that’s what drives long-term engagement.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 mb-16">
          <FadeUp delay={0.05}>
            <div className="flex flex-col gap-7">
              {roles.map(({ title, dates, bullets }) => (
                <div
                  key={title}
                  className="border-l-2 border-[var(--border-color)] pl-5"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h2 className="font-display text-lg text-[var(--ink)]">
                      {title}
                    </h2>
                    <span className="eyebrow whitespace-nowrap text-xs">
                      {dates}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {bullets.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-[var(--ink-soft)] leading-relaxed text-[15px]"
                      >
                        <span className="text-[var(--accent)] mt-[7px] flex-shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3" fill="currentColor" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={ewi24}
                  alt="Cal Poly Society of Women Engineers Executive Board, 2023 to 2024"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={ewi_advisor}
                    alt="With my club advisor, Dr. Helene Finger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={ewi_speaking}
                    alt="Speaking at Evening With Industry 2025"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <section className="mb-16 border-t border-[var(--border-color)] pt-10">
            <p className="eyebrow mb-5">Awards</p>
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href="https://ceng.calpoly.edu/connection/2025/06/college-of-engineering-student-awards/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-5 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(43,36,32,0.06)] transition-all"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.6-4.1 6.1-.6L12 2z"
                      stroke="var(--accent)"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-xl text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors mb-1">
                    Outstanding Graduating Student
                  </p>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    Cal Poly College of Engineering. One of four students
                    selected from a graduating class of 6,000+ engineers.
                  </p>
                </div>
              </a>

              <div className="flex gap-4 p-5 rounded-xl border border-[var(--border-color)]">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6-4.6-4.1 6.1-.6L12 2z"
                      stroke="var(--accent)"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-xl text-[var(--accent)] mb-1">
                    Outstanding Collegiate Member
                  </p>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    Society of Women Engineers. One of 20 student leaders
                    recognized nationally for leadership and STEM outreach.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[var(--ink-soft)] leading-relaxed max-w-[640px] pb-4">
            Beyond SWE, I was a Mentorship Officer for{" "}
            <a
              href="https://wishcalpoly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              Women in Software and Hardware
            </a>{" "}
            and represented Cal Poly in{" "}
            <a
              href="https://thepercentageproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              The Percentage Project
            </a>
            , a national campaign improving experiences for underrepresented
            students in STEM.
          </p>
        </FadeUp>
      </main>
      <Footer />
    </div>
  );
}
