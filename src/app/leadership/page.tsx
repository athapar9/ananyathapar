import Image from "next/image";
import Header from "../components/header";
import ewi_advisor from "../images/EWI2025-007.jpg";
import ewi24 from "../images/ewi_24_3.jpg";
import ewi_speaking from "../images/EWI2025-089.jpg";

export default function Leadership() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-[1200px] mx-auto px-6 py-10">
        <section className="flex flex-col lg:flex-row items-start gap-20">
          <div className="flex-grow text-[18px] leading-[1.8] font-serif max-w-full lg:max-w-[600px]">
            <div className="flex items-center mb-8">
              <h1 className="text-3xl text-[var(--accent)] font-medium mr-4 whitespace-nowrap">
                Leadership
              </h1>
              <div className="flex-grow border-t border-[var(--border-color)] ml-4" />
            </div>

            <p className="mb-5">
              I’m passionate about building inclusive, equitable
              communities—spaces where everyone feels respected, appreciated,
              and above all, valued. During my time at Cal Poly, I pursued this
              mission through leadership, especially through my work as
              President of the Cal Poly Society of Women Engineers (CPSWE), one
              of the largest SWE collegiate sections nationwide.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-[var(--accent)]">
              Cal Poly Society of Women Engineers
            </h2>
            <p className="mb-4">
              As President, I managed an{" "}
              <strong>eight-member executive board</strong> and supported{" "}
              <strong>40+ officers</strong> in executing over{" "}
              <strong>100 annual events</strong> for more than{" "}
              <strong>600 members</strong>. The structure resembled a tech
              organization— similar to a Group Engineering Manager
              role—overseeing multiple leads, aligning goals across teams,
              and fostering a shared mission.
            </p>

            <p className="mb-5">
              I developed skills in strategic communication, one-on-one
              mentorship, conflict resolution, and leadership development. I
              learned to lead with empathy, drive cross-functional
              collaboration, and build a mission-driven culture. I also
              partnered with university administration to secure funding,
              advocate for club operations, and scale outreach and industry
              relationships.
            </p>

            <h3 className="text-lg text-[var(--accent)] font-semibold mt-6 mb-2">
              Highlights
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>
                Coauthored national award applications that earned CPSWE the{" "}
                <strong>Boeing Multicultural Award</strong> and the{" "}
                <strong>Gold Section Mission Award</strong> at WE24
              </li>
              <li>
                Led outreach that impacted <strong>6,000+ K–12 students</strong>{" "}
                through bilingual STEM activities and school programs
              </li>
              <li>
                Organized and facilitated weekly general meetings in partnership
                with SWE’s five core teams and{" "}
                <strong>15+ corporate sponsors</strong>
              </li>
              <li>
                Advanced DEI by overseeing creation of DEI Assistant roles,
                promoting cross-team collaboration, and embedding inclusive
                practices into officer training and event design
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-[var(--accent)]">
              Previous Roles in CPSWE
            </h2>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>
                <strong>Vice President of Member Relations</strong> — Led a team
                of 5 to coordinate 25+ events, managed a 300+ person
                Mentor/Mentee Program, and mentored 5 freshman reps—all of whom
                became officers
              </li>
              <li>
                <strong>Professional Development Chair</strong> — Ran joint
                workshops with 10+ departments and led recruitment at a showcase
                that drew 300+ attendees
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-[var(--accent)]">
              Additional Leadership & Mentorship
            </h2>
            <p className="mb-5">
              Beyond CPSWE, I was invovled in {" "}
              <a
                href="https://wishcalpoly.com/"
                className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Women in Software and Hardware (WISH)
              </a>
              {" "} and served as a Mentorship Officer, supporting underclassmen in building community and confidence. I also
              represented Cal Poly in{" "}
              <a
                href="https://thepercentageproject.com/"
                className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Percentage Project
              </a>
              , a national campaign to spotlight and improve the experiences of
              underrepresented students in STEM.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-[var(--accent)]">
              Awards & Honors
            </h2>
            <ul className="space-y-4 list-none">
              <li>
                <p>
                  <span className="font-semibold">
                    
                    <a
                      href="https://ceng.calpoly.edu/connection/2025/06/college-of-engineering-student-awards/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)] underline"
                    >
                      Outstanding Graduating Student Award{" "}
                    </a>
                    - Cal Poly College of Engineering
                  </span>
                  
                </p>
                <ul className="list-disc ml-6 mt-1">
                  <li>
                    Awarded to one of four students from a graduating class of
                    over 6,000 engineers.
                  </li>
                </ul>
              </li>
              {/* <li>
                <p>
                  <strong>Outstanding Collegiate Member</strong>{" "}
                  <span className="font-semibold">
                    - Society of Women Engineers
                  </span>
                </p>
                <ul className="list-disc ml-6 mt-1">
                  <li>
                    National recognition awarded to the top 20 student leaders
                    across all SWE collegiate sections for exemplary leadership
                    and impact.
                  </li>
                </ul>
              </li> */}
            </ul>

            <div className="border-t border-[color:var(--border-color)] w-full max-w-xl mt-8" />
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-[480px]">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="group relative h-[450px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
                <Image
                  src={ewi_advisor}
                  alt="Photo with my advisor, Dr. Helene Finger"
                  fill
                  priority
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-105"
                  sizes="(max-width: 1024px) 100vw, 240px"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.4)] text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Photo with my advisor, Dr. Helene Finger
                </div>
              </div>

              <div className="group relative h-[450px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
                <Image
                  src={ewi_speaking}
                  alt="Ananya speaking at Evening With Industry"
                  fill
                  priority
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-105"
                  sizes="(max-width: 1024px) 100vw, 240px"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.4)] text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Speaking at Evening With Industry 2025
                </div>
              </div>
            </div>

            <div className="group relative w-full h-[400px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
              <Image
                src={ewi24}
                alt="Cal Poly Society of Women Engineers Executive Board 2023–2024"
                fill
                priority
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-105 group-hover:contrast-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.4)] text-white text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Cal Poly Society of Women Engineers Executive Board 2023–2024
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
