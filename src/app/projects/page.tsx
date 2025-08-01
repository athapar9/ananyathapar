import Header from "../components/header";

const projects = [
  {
    title: "Dog Breed Classification",
    tech: "Python, YOLOv8, ResNet50V2, Xception, TensorFlow",
    points: [
      "Built and analyzed CNN pipelines on a 10,000-image dataset, boosting dog breed classification accuracy from 75% to 90% using top-k accuracy, loss curves, and confusion matrices",
    ],
    github: "https://github.com/athapar9/dog-breed-classification",
  },
  {
    title: "Reddit r/place Data Analysis",
    tech: "Python, Pandas, DuckDB, Polars, PySpark, SQL, Apache Parquet",
    points: [
      "Analyzed 21GB of data from the 2022 r/place event using advanced data processing tools to uncover user behavior, pixel placement trends, and the influence of highly active users across timeframes",
    ],
    github: "https://github.com/athapar9/Reddit-Analysis",
  },
  {
    title: "Potion Shop API",
    tech: "Python, FastAPI, PostgreSQL, Supabase, SQLAlchemy, REST, Render",
    points: [
      "Designed and deployed a cloud-hosted RESTful API simulating an online potion shop with 100k+ unique product combinations, managing inventory, pricing, and cart workflows for 1,500 concurrent simulated customers during a multi-week competition",
      "Engineered backend logic with SQLAlchemy and PostgreSQL to ensure low-latency, concurrency-safe operations under heavy load, supporting 24/7 high-traffic simulation cycles",
    ],
    github: "https://github.com/athapar9/Potion-Shop-API",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-[900px] mx-auto px-4 sm:px-6 py-5 flex flex-col items-start justify-center mt-10">
        <section className="w-full">
          <div className="flex flex-col w-full mb-6">
            <div className="flex items-center w-full">
              <h1 className="text-3xl font-serif font-medium mr-4 text-[var(--accent)]">
                Projects
              </h1>
              <div className="flex-grow border-t border-[var(--border-color)] ml-4" />
            </div>
            <p className="mt-3 italic text-[var(--accent)] max-w-full text-center">
              Fun fact: I actually coded this website with the help of LOTS of
              coffee, of course :)
            </p>
          </div>

          <div className="space-y-8">
            {projects.map(({ title, tech, points, github }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--background)] shadow-sm 
                  hover:shadow-lg hover:scale-[1.03] transition-transform transition-shadow duration-300 cursor-pointer"
              >
                <h2 className="text-2xl font-serif font-semibold mb-2">
                  {title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.split(", ").map((item) => (
                    <span
                      key={item}
                      className="bg-[var(--accent)]/10 text-[var(--accent)] text-sm px-3 py-1 rounded-full font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside space-y-2 text-base leading-relaxed mb-4">
                  {points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub icon</title>
                    <path
                      fill="currentColor"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013-.405c1.02.005 2.045.137 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.922.435.375.82 1.11.82 2.24 0 1.616-.015 2.92-.015 3.315 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            ))}
          </div>

          <div className="border-b border-[var(--border-color)] w-full mt-12" />
        </section>
      </main>
    </div>
  );
}
