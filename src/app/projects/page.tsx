import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";

const projects = [
  {
    title: "Closetful",
    problem:
      "Online shopping wishlists are scattered across dozens of tabs and stores, and re-sorting saved items by category is manual, tedious busywork.",
    impact:
      "Built a full-stack platform + Chrome extension letting users save products from any site with one click; items are auto-categorized via Gemini's structured output, and a DOM-level scraping approach in the extension bypasses bot protection that blocks server-side scraping on sites like Sephora.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Google Gemini",
      "Chrome Extension (Manifest V3)",
    ],
    github: "https://github.com/ananyaaa-t/closetful-web",
  },
  {
    title: "Braindump",
    problem:
      "Apple Notes offers too little structure for organizing thoughts, while Notion offers too much — most people just want a fast place to jot things down without folders, nested pages, or a block editor slowing them down.",
    impact:
      "Designed and shipped a native iOS notes app with a pastel, minimal aesthetic, integrating Apple's on-device FoundationModels framework to generate smart tags and summaries entirely offline — plus voice dictation, a soft-delete recovery flow, a home screen widget, and full VoiceOver accessibility support.",
    tech: ["Swift", "SwiftUI", "SwiftData", "FoundationModels", "WidgetKit"],
    github: "https://github.com/ananyaaa-t/braindump",
  },
  {
    title: "Git Fit",
    problem:
      "Fitness tracking apps tend to make logging a workout more tedious than the workout itself. We wanted something fast to use and social enough that people would actually stick with it.",
    impact:
      "Built the exercise management features end to end as part of a five-person team: workout and exercise CRUD, search and browse, and social follow features across the frontend and backend.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "REST APIs"],
    github: "https://github.com/ryanchansf/git-fit",
  },
  {
    title: "Potion Shop API",
    problem:
      "A multi-week competition required a backend that could handle thousands of simulated customers shopping concurrently without breaking on race conditions or going down under load.",
    impact:
      "Built and deployed a REST API supporting 100k+ product combinations and 1,500+ concurrent users, with concurrency-safe backend logic and an optimized schema for low-latency reads and writes under load.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy"],
    github: "https://github.com/ananyaaa-t/Potion-Shop-API",
  },
  {
    title: "Dog Breed Classifier",
    problem:
      "Dog breed classifiers struggle most with visually similar breeds when an accurate answer matters most",
    impact:
      "Took classification accuracy from 75% to 90% on a 10,000-image dataset by comparing CNN architectures and reading loss curves and confusion matrices to find exactly where the model was failing.",
    tech: ["Python", "YOLOv8", "ResNet50V2", "TensorFlow"],
    github: "https://github.com/ananyaaa-t/dog-breed-classification",
  },
  {
    title: "Reddit r/place Analysis",
    problem:
      "21GB of pixel-placement data from the 2022 r/place event held real signal about how large, anonymous crowds coordinate online, but it was too large to explore with standard tooling.",
    impact:
      "Built a processing pipeline across Pandas, DuckDB, Polars, and PySpark to surface user behavior patterns and the outsized influence a small number of highly active users had on the final canvas.",
    tech: ["Python", "DuckDB", "PySpark", "SQL"],
    github: "https://github.com/ananyaaa-t/Reddit-Analysis",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-6 pt-14 pb-10">
        <FadeUp>
          <p className="eyebrow mb-3">Selected work</p>
          <h1 className="font-display text-4xl text-[var(--ink)] mb-3">
            Projects
          </h1>
          <p className="text-[var(--ink-soft)] max-w-[560px] mb-12">
            Fun fact: I coded this website myself with the help of lots of
            coffee ☕
          </p>
        </FadeUp>

        <div className="flex flex-col gap-8">
          {projects.map(({ title, problem, impact, tech, github }, i) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h2 className="font-display text-2xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    {title}
                  </h2>
                  {github && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-2 text-[var(--ink-soft)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <path
                        fill="currentColor"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.82 1.11.82 2.24 0 1.616-.015 2.92-.015 3.315 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"
                      />
                    </svg>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="eyebrow mb-2">Problem</p>
                    <p className="text-[var(--ink-soft)] leading-relaxed text-[15px]">
                      {problem}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Impact</p>
                    <p className="text-[var(--ink-soft)] leading-relaxed text-[15px]">
                      {impact}
                    </p>
                  </div>
                </div>

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
              </>
            );

            const cardClass =
              "group block border border-[var(--border-color)] rounded-2xl p-7 bg-[var(--surface)] transition-all";

            return (
              <FadeUp key={title} delay={Math.min(i * 0.08, 0.2)}>
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} hover:shadow-[0_12px_30px_rgba(20,24,27,0.06)] hover:border-[var(--accent)]`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </FadeUp>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}