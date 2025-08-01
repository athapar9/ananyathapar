import Image from "next/image";
import Header from "../components/header";
import ewi_advisor from "../images/EWI2025-007.jpg";
import ewi24 from "../images/ewi_24_3.jpg";
import ewi_speaking from "../images/EWI2025-089.jpg";

export default function Leadership() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col items-start justify-center font-serif">
        <section className="flex flex-col lg:flex-row items-start gap-12 mt-10 w-full">
          <div className="flex-grow text-[1.125rem] font-serif text-foreground leading-relaxed max-w-full">
            <div className="flex items-center mb-6 w-full max-w-xl">
              <h1 className="text-3xl text-[var(--accent)] font-serif mr-4 whitespace-nowrap">
                Leadership & Service in SWE
              </h1>
              <div className="flex-grow border-t border-[var(--border-color)] ml-4" />
            </div>

            <p className="mb-5">
              I’m passionate about advancing inclusive, equitable communities within engineering through collaborative leadership and cross-functional teamwork. As President of Cal Poly’s Society of Women Engineers (CPSWE) during the 2023–2024 academic year, I led a team of 40+ officers and oversaw the execution of more than 100 events annually, amplifying the visibility and impact of the College of Engineering.
            </p>

            <p className="mb-5">Some key accomplishments from my time leading CPSWE:</p>

            <ul className="list-disc ml-6 mb-5 space-y-2">
            <li>
            Provide direct leadership to an eight-member executive board and indirectly oversee a 40+ member officer team by facilitating communication, one-on-one check-ins, and leadership development
            </li>
              
              <li>
                Coauthoring CPSWE’s successful national award applications, earning the <strong>Boeing Multicultural Award</strong> and the <strong>Gold Section Collegiate Award</strong> at the WE24 Conference.
              </li>
              <li>
              Provide strategic oversight and guidance for CPSWE’s largest events, including networking events and corporate partnerships, contributing to the success of 360+ attendee events
              </li>
              <li>
              Drive outreach initiatives reaching <strong>6,000+</strong> students in underrepresented communities, expanding access to STEM opportunities.
              </li>
              <li>
              Lead and facilitate executive board meetings, officer meetings, and weekly advisor meetings, ensuring clear communication, goal alignment, and problem-solving
              </li>
              <li>
              Facilitated a partnership with Pasadena City community college to help them become a SWE affiliate, increasing accessibility and representation in engineering
              </li>
              <li>
              Champion diversity, equity, and inclusion (DEI) by integrating initiatives across all organizational cores, including launching DEI Assistants and bilingual outreach programs
              </li>
              <li>
              Organize and host weekly general meetings for 600+ members, collaborating with officers and 15+ corporate partners to ensure engaging and impactful programming
              </li>
            </ul>

            <h2 className="text-2xl font-serif mb-4">Previous Leadership Roles & Mentorship</h2>

            <p className="mb-4">
              Prior to my presidency, I served as Vice President of Member Relations, leading a team of five officers to organize 25+ academic, social, and professional events. I managed the Mentor/Mentee Program, supporting over 300 students, and personally mentored five freshman representatives who successfully became officers. As Professional Development Chair, I coordinated workshops and academic events involving 10 Cal Poly departments and organized club showcases that drew 400+ new students.
            </p>

            <p className="mb-5">
              Outside of SWE, I contributed as a mentorship officer for <a href="https://wishcalpoly.com/" className="underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)] transition">Women in Software and Hardware (WISH)</a>, guiding dozens of underclassmen—especially from underrepresented groups—in building community and leadership skills. Additionally, I represented Cal Poly in The Percentage Project, a national initiative focused on amplifying the voices of marginalized groups in STEM through data-driven advocacy.
            </p>

            <h2 className="text-2xl font-serif mb-4">Awards & Honors</h2>

            <p>
              <strong>Outstanding Graduating Student Award</strong> — one of four selected from over 6,000 engineering students at Cal Poly.
            </p>
            <p>
              <strong>SWE Outstanding Collegiate Member</strong> — nationally recognized among 20 recipients for leadership and impact.
            </p>

            <div className="border-b border-gray-300 w-full max-w-xl mt-6" />
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[500px] flex-shrink-0">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="group relative h-[250px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
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

              <div className="group relative h-[250px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
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

            <div className="group relative w-full h-[300px] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer">
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
