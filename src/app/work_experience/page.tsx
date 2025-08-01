"use client";
import Image from "next/image";
import Header from "../components/header";
import microsoftLogo from "../images/microsoftLogo.jpg";
import northropLogo from "../images/northropLogo.png";
import treesLogo from "../images/treesLogo.png";
import codedayLogo from "../images/codedayLogo.jpg";

const experiences = [
  {
    logo: microsoftLogo,
    company: "Microsoft",
    title: "Software Engineer Intern",
    duration: "June 2024 – September 2024",
    tech: [".NET", "C#", "React", "Node.js", "Azure", "FluentUI", "TypeScript"],
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
    tech: [
      "PostgreSQL",
      "Python",
      "Flutter",
      "Dart",
      "JavaScript",
      "REST APIs",
    ],
    bullets: [
      "Enhanced API efficiency by 35% through codebase refactoring and comprehensive documentation",
      "Streamlined operations and enhanced user engagement by optimizing machine learning endpoints",
      "Designed and developed a new daily challenge feature based on data retrieved from a PostgreSQL database",
    ],
  },
  {
    logo: codedayLogo,
    company: "CodeDay Labs",
    title: "Labs Intern",
    duration: "June 2021 – August 2021",
    tech: ["HTML", "JavaScript", "CSS"],
    bullets: [
      "Collaborated with fellow interns to develop an interactive website featuring 3 multiplayer game and drawing modes",
      "Mentored by a Cornell University computer science undergraduate throughout the project",
      "Designed dynamic, user-friendly web pages using HTML, JavaScript, and CSS to enhance UX/UI",
    ],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-[1200px] mx-auto flex justify-center px-4 sm:px-6 py-5">
        <section className="w-full max-w-4xl mt-8">
          <div className="text-lg font-serif text-foreground leading-relaxed">
            <div className="flex items-center mb-8">
              <h1 className="text-3xl font-medium text-[var(--accent)]">
                Work Experience
              </h1>
              <div className="flex-grow border-t border-[var(--border-color)] ml-4" />
            </div>

            <div className="space-y-8">
              {experiences.map(
                ({ logo, company, title, duration, tech, bullets }) => (
                  <div
                    key={company}
                    className="group border border-[var(--border-color)] bg-[var(--background)] p-6 rounded-2xl shadow-sm cursor-pointer
                    transition-transform transition-shadow duration-300
                    hover:scale-[1.03] hover:shadow-lg"
                  >
                    <div className="flex items-start gap-5">
                      <Image
                        src={logo}
                        alt={`${company} Logo`}
                        width={60}
                        height={60}
                        className="object-contain rounded-md flex-shrink-0"
                      />

                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h2 className="text-xl font-semibold font-serif">
                            {company}
                          </h2>
                          <p className="text-sm italic mt-1 sm:mt-0 text-[var(--foreground)]/60">
                            {duration}
                          </p>
                        </div>
                        <p className="italic text-base mb-3">{title}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tech.map((stack, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded-md font-medium"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
                          {bullets.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="border-b border-[var(--border-color)] w-full mt-16" />
          </div>
        </section>
      </main>
    </div>
  );
}
