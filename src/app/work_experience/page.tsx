"use client";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";
import microsoftLogo from "../images/microsoftLogo.jpg";
import northropLogo from "../images/northropLogo.png";
import treesLogo from "../images/treesLogo.png";

const experiences = [
  {
    logo: microsoftLogo,
    company: "Microsoft",
    title: "Software Engineer",
    duration: "September 2025 – Present",
    tech: [".NET", "C#", "Azure", "TypeScript", "KQL"],
    bullets: [
      "Built a cross-cloud parity dashboard for Azure aggregating data from 100+ resource providers across 4 environments using parallelized queries and batching to reduce latency, enabling visibility and eliminating manual validation workflows",
      "Resolved a 25% test failure rate by consolidating 4 fragmented suites into a unified cloud-based testing framework, restoring release confidence across the team",
      "Eliminated redundant error-handling across APIs by designing a modular exception architecture with a centralized mapping system, simplifying debugging and improving consistency and maintainability across endpoints",
    ],
  },
  {
    logo: microsoftLogo,
    company: "Microsoft",
    title: "Software Engineer Intern",
    duration: "June 2024 – September 2024",
    tech: [".NET", "C#", "React", "Node.js", "FluentUI", "TypeScript"],
    bullets: [
      "Developed a dynamic project management dashboard feature to streamline onboarding and multi-organization oversight for 1,200+ Azure Cloud customers, increasing productivity and reducing onboarding time",
      "Created a custom feature flagging system with C# and enhanced ARM templates to improve deployment speed, tracking, and maintenance",
      "Resolved critical accessibility issues, enhancing screen reader compatibility and keyboard navigation for better user experience",
    ],
  },
  {
    logo: northropLogo,
    company: "Northrop Grumman",
    title: "Software Engineer Intern",
    duration: "June 2023 – August 2023",
    tech: ["Python", "Jenkins", "VBA"],
    bullets: [
      "Developed Python-based automated testing scripts to validate 45+ requirements and enhanced CI/CD pipeline efficiency by automating legacy test procedures",
      "Conducted a technical presentation demonstrating successful testing processes and created a new series of tests to address identified defects; presented to 25+ people, including key individuals from Software and Test leadership",
      "Operated on an agile software development team including scrum, retrospectives, reviews, and demos",
    ],
  },
  {
    logo: treesLogo,
    company: "Trees.app",
    title: "Software Development Intern",
    duration: "June 2022 – September 2022",
    tech: ["PostgreSQL", "Python", "Flutter", "Dart", "JavaScript", "REST APIs"],
    bullets: [
      "Enhanced API efficiency by 35% through codebase refactoring and comprehensive documentation",
      "Streamlined operations and enhanced user engagement by optimizing machine learning endpoints",
      "Designed and developed a new daily challenge feature based on data retrieved from a PostgreSQL database",
    ],
  }
];

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1000px] mx-auto px-4 sm:px-6 py-16">
        <FadeUp>
          <div className="flex items-center mb-10">
            <h1
              className="text-3xl mr-4 whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
            >
              Work Experience
            </h1>
            <div className="flex-grow border-t border-[var(--border-color)]" />
          </div>
        </FadeUp>

        <div className="space-y-6">
          {experiences.map(({ logo, company, title, duration, tech, bullets }, i) => (
            <FadeUp key={`${company}-${title}`} delay={i * 0.07}>
              <div
                className="group border border-[var(--border-color)] bg-[var(--background)] p-6 rounded-2xl shadow-sm
                  transition-all duration-300 hover:scale-[1.015] hover:shadow-md cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <Image
                    src={logo}
                    alt={`${company} Logo`}
                    width={56}
                    height={56}
                    className="object-contain rounded-md flex-shrink-0 mt-1"
                  />

                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                      <h2
                        className="text-xl"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                      >
                        {company}
                      </h2>
                      <p
                        className="text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "var(--muted)", fontWeight: 300 }}
                      >
                        {duration}
                      </p>
                    </div>

                    <p
                      className="text-sm italic mb-3"
                      style={{ fontFamily: "var(--font-body)", color: "var(--secondary)", fontWeight: 400 }}
                    >
                      {title}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tech.map((stack) => (
                        <span
                          key={stack}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc list-inside space-y-2">
                      {bullets.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}