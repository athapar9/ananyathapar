import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";
import microsoftLogo from "../images/microsoftLogo.jpg";
import northropLogo from "../images/northropLogo.png";
import treesLogo from "../images/treesLogo.png";
import codedayLogo from "../images/codedayLogo.jpg";

const experiences = [
  {
    logo: microsoftLogo,
    company: "Microsoft",
    title: "Software Engineer, Azure Compute",
    duration: "2025 — Present",
    tech: ["C#", ".NET", "Azure", "TypeScript", "KQL"],
    bullets: [
      "Replaced inconsistent error handling across API endpoints with a modular exception architecture and centralized mapping system, cutting boilerplate code by 49% and standardizing responses across the codebase",
      "Built pause, resume, and cancel endpoints for cloud service rollouts, giving operators real-time control to halt misconfigured deployments mid-execution and prevent compliance incidents at scale",
      "Built an internal dashboard centralizing configuration visibility across 100+ resource providers, replacing daily manual checks and saving the team 250+ hours a year",
      "Brought CI reliability from 70% to 100% by consolidating four fragmented test fixtures into one framework, eliminating flakiness and enabling deterministic parallel execution",
    ],
  },
  {
    logo: microsoftLogo,
    company: "Microsoft",
    title: "Software Engineer Intern",
    duration: "Jun 2024 — Sep 2024",
    tech: ["C#", "TypeScript", "React", "FluentUI"],
    bullets: [
      "Designed and shipped a full-stack multi-tenant onboarding dashboard, partnering with PMs, UX, and the dev owner to define specs, giving 1,200+ Azure enterprise customers their first centralized view of onboarding status",
      "Built a feature flagging system from scratch so PMs could safely gate incomplete features and demo the product to stakeholders without exposing unfinished work to enterprise customers",
      "Presented a technical demo on VS Code Live Share to 60+ engineers org-wide to drive awareness of real-time collaborative coding tooling",
    ],
  },
  {
    logo: northropLogo,
    company: "Northrop Grumman",
    title: "Software Engineer Intern",
    duration: "Jun 2023 — Aug 2023",
    tech: ["Python", "Jenkins", "VBA"],
    bullets: [
      "Automated 45+ manual test procedures with Python, speeding up the CI/CD pipeline and freeing the test team to focus on harder problems",
      "Presented testing results and a new defect-focused test suite to 25+ engineers, including Software and Test leadership",
    ],
  },
  {
    logo: treesLogo,
    company: "Trees.app",
    title: "Software Development Intern",
    duration: "Jun 2022 — Sep 2022",
    tech: ["Python", "Flutter", "Dart", "PostgreSQL"],
    bullets: [
      "Improved API response efficiency by 35% through targeted refactoring",
      "Shipped a new daily challenge feature, driven by user data pulled from PostgreSQL, to boost daily engagement",
    ],
  }
];

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "Java", "SQL"],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React",
      "Next.js",
      "Node.js",
      ".NET",
      "REST APIs",
      "Docker",
      "Azure",
      "PostgreSQL",
      "Git",
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pt-14 pb-10">
        <FadeUp>
          <p className="eyebrow mb-3">Experience</p>
          <h1 className="font-display text-4xl text-[var(--ink)] mb-3">
            Work
          </h1>
        </FadeUp>

        <div className="flex flex-col gap-10 mb-20">
          {experiences.map(
            ({ logo, company, title, duration, tech, bullets }, i) => (
              <FadeUp key={company + title} delay={Math.min(i * 0.05, 0.2)}>
                <div className="border border-[var(--border-color)] rounded-2xl p-7 bg-[var(--surface)] hover:shadow-[0_12px_30px_rgba(20,24,27,0.06)] transition-shadow">
                  <div className="flex items-start gap-5">
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      width={48}
                      height={48}
                      className="object-contain rounded-md flex-shrink-0 mt-1"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <h2 className="font-display text-xl text-[var(--ink)]">
                          {company}
                        </h2>
                        <p className="eyebrow whitespace-nowrap">
                          {duration}
                        </p>
                      </div>
                      <p className="text-[var(--accent)] text-sm font-medium mb-4">
                        {title}
                      </p>

                      <ul className="space-y-2.5 text-[var(--ink-soft)] leading-relaxed mb-5">
                        {bullets.map((point, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-[var(--accent)] mt-[7px] flex-shrink-0">
                              <svg width="6" height="6" viewBox="0 0 6 6">
                                <circle cx="3" cy="3" r="3" fill="currentColor" />
                              </svg>
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {tech.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--accent-light)] text-[var(--accent)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          )}
        </div>

        <FadeUp delay={0.1}>
          <section className="grid sm:grid-cols-2 gap-10 border-t border-[var(--border-color)] pt-10 mb-16">
            <div>
              <p className="eyebrow mb-4">Education</p>
              <h2 className="font-display text-lg text-[var(--ink)] mb-1">
                California Polytechnic University
              </h2>
              <p className="text-sm text-[var(--ink-soft)] mb-3">
                San Luis Obispo, CA
              </p>
              <p className="text-[var(--ink-soft)] leading-relaxed text-[15px]">
                B.S. Computer Science, concentration in AI. Graduated
                June 2025.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Skills</p>
              <div className="flex flex-col gap-4">
                {skillGroups.map(({ label, items }) => (
                  <div key={label}>
                    <p className="text-sm text-[var(--ink-soft)] mb-2">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--accent-light)] text-[var(--accent)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
      <Footer />
    </div>
  );
}
