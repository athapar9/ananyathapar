"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import FadeUp from "../components/FadeUp";

const projects = [
  {
    title: "Dog Breed Classification",
    tech: ["Python", "YOLOv8", "ResNet50V2", "Xception", "TensorFlow"],
    points: [
      "Built and analyzed CNN pipelines on a 10,000-image dataset, boosting dog breed classification accuracy from 75% to 90% using top-k accuracy, loss curves, and confusion matrices",
    ],
    github: "https://github.com/ananyaaa-t/dog-breed-classification",
  },
  {
    title: "Reddit r/place Data Analysis",
    tech: ["Python", "Pandas", "DuckDB", "Polars", "PySpark", "SQL", "Apache Parquet"],
    points: [
      "Analyzed 21GB of data from the 2022 r/place event using advanced data processing tools to uncover user behavior, pixel placement trends, and the influence of highly active users across timeframes",
    ],
    github: "https://github.com/ananyaaa-t/Reddit-Analysis",
  },
  {
    title: "Potion Shop API",
    tech: ["Python", "FastAPI", "PostgreSQL", "Supabase", "SQLAlchemy", "REST", "Render"],
    points: [
      "Designed and deployed a cloud-hosted RESTful API simulating an online potion shop with 100k+ unique product combinations, managing inventory, pricing, and cart workflows for 1,500 concurrent simulated customers during a multi-week competition",
      "Engineered backend logic with SQLAlchemy and PostgreSQL to ensure low-latency, concurrency-safe operations under heavy load, supporting 24/7 high-traffic simulation cycles",
    ],
    github: "https://github.com/ananyaaa-t/Potion-Shop-API",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[900px] mx-auto px-4 sm:px-6 py-16">

        <FadeUp>
          <div className="flex flex-col w-full mb-8">
            <div className="flex items-center w-full mb-3">
              <h1
                className="text-3xl mr-4 whitespace-nowrap"
                style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontWeight: 500 }}
              >
                Projects
              </h1>
              <div className="flex-grow border-t border-[var(--border-color)]" />
            </div>
            <p
              className="text-sm italic"
              style={{ fontFamily: "var(--font-body)", color: "var(--secondary)", fontWeight: 300 }}
            >
              Fun fact: I coded this website myself with the help of lots of coffee ☕
            </p>
          </div>
        </FadeUp>

        <div className="space-y-6">
          {projects.map(({ title, tech, points, github }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div
                className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--background)] shadow-sm
                  transition-all duration-300 hover:scale-[1.015] hover:shadow-md cursor-pointer"
              >
                <h2
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                >
                  {title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: "var(--accent-light)",
                        color: "var(--accent)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside space-y-2 mb-5">
                  {points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors duration-200"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.82 1.11.82 2.24 0 1.616-.015 2.92-.015 3.315 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}