import Image from "next/image";
import Header from "../components/header";
import microsoftLogo from "../images/microsoftLogo.jpg";
import northropLogo from "../images/northropLogo.png";
import treesLogo from "../images/treesLogo.png";
import codedayLogo from "../images/codedayLogo.jpg";

export default function Work() {
  return (
    <div>
      <Header />
      <main className="w-full flex justify-center px-4 sm:px-6">
        <section className="w-full max-w-4xl mt-8">
          <div className="text-lg font-serif text-foreground leading-relaxed">
            <div className="flex items-center mb-8">
              <h1 className="text-3xl mr-4 whitespace-nowrap">
                Work Experience
              </h1>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Experience Cards */}
            <div className="space-y-10">
              {/* Microsoft */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start gap-4">
                  <Image
                    src={microsoftLogo}
                    alt="Microsoft Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-xl">Microsoft</h2>
                    <p className="italic text-base mb-2">
                      Software Engineer Intern
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      June 2024 – September 2024 ·{" "}
                      <span className="italic"> .NET Framework (C#), React, NodeJS, Azure Services, FluentUI, Typescript </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>
                      Developed a dynamic project management dashboard feature to streamline onboarding and multi-organization oversight for 1,200+ Azure Cloud customers, increasing productivity and reducing onboarding time
                      </li>
                      <li>
                      Created a custom feature flagging system with C# and enhanced ARM templates to improve deployment speed, tracking, and maintenance
                      </li>
                      <li>
                      Resolved critical accessibility issues, enhancing screen reader compatibility and keyboard navigation for better user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Northrop Grumman */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start gap-4">
                  <Image
                    src={northropLogo}
                    alt="Northrop Grumman Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-xl">Northrop Grumman</h2>
                    <p className="italic text-base mb-2">
                      Software Engineer Intern
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      June 2023 – August 2023 ·{" "}
                      <span className="italic">Python, Jenkins, VBA</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>
                      Developed Python-based automated testing scripts to validate 45+ requirements and enhanced CI/CD pipeline efficiency by automating legacy test procedures
                      </li>
                      <li>
                      Conducted a technical presentation demonstrating successful testing processes and created a new series of tests to address identified defects; presented to 25+ people, including key individuals from Software and Test leadership
                      </li>
                      <li>
                      Operated on an agile software development team including scrum, retrospectives, reviews, and demos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Trees.app */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start gap-4">
                  <Image
                    src={treesLogo}
                    alt="Trees.app Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-xl">Trees.app</h2>
                    <p className="italic text-base mb-2">
                      Software Development Intern
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      June 2022 – September 2022 ·{" "}
                      <span className="italic">
                        PostgreSQL, Python, Flutter, Dart, JavaScript, REST APIs 
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>
                      Enhanced API efficiency by 35% through codebase refactoring and comprehensive documentation
                      </li>
                      <li>
                      Streamlined operations and enhanced user engagement by optimizing machine learning endpoints
                      </li>
                      <li>
                      Designed and developed a new daily challenge feature based on data retrieved from a PostgreSQL database
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CodeDay Labs */}
              <div className="p-6 rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 transition">
                <div className="flex items-start gap-4">
                  <Image
                    src={codedayLogo}
                    alt="CodeDay Labs Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <h2 className="font-semibold text-xl">CodeDay Labs</h2>
                    <p className="italic text-base mb-2">Labs Intern</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      June 2021 – August 2021 ·{" "}
                      <span className="italic">HTML, JavaScript, CSS</span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>
                      Collaborated with fellow interns to develop an interactive website featuring 3 multiplayer game and drawing modes
                      </li>
                      <li>
                      Mentored by a Cornell University computer science undergraduate throughout the project
                      </li>
                      <li>
                      Designed dynamic, user-friendly web pages using HTML, JavaScript, and CSS to enhance UX/UI
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 w-full max-w-4xl mt-6" />
          </div>
        </section>
      </main>
    </div>
  );
}
