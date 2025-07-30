import Image from "next/image";
import Header from "../components/header";
import ewi_advsor from "../images/EWI2025-007.jpg";
import ewi24 from "../images/ewi_24_3.jpg";
import ewi_speaking from "../images/EWI2025-089.jpg";
import swe_headshot from "../images/SWE_Headshots.jpg";

export default function Leadership() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col items-start justify-center font-serif">
        <section className="flex flex-col lg:flex-row items-start gap-12 mt-10 w-full">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[500px] flex-shrink-0">
            <Image
              src={ewi_advsor}
              alt="EWI Advisor Photo"
              className="rounded-xl shadow-md object-cover w-full h-auto col-span-1"
            />
            <Image
              src={ewi_speaking}
              alt="Speaking at EWI"
              className="rounded-xl shadow-md object-cover w-full h-auto col-span-1"
            />
            <div className="col-span-2 flex flex-col gap-4">
              <Image
                src={ewi24}
                alt="EWI 2024 Event"
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
              <Image
                src={swe_headshot}
                alt="SWE Headshot"
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow text-[1.125rem] font-serif text-foreground leading-relaxed max-w-full">
            <div className="flex items-center mb-6 w-full max-w-xl">
              <h1 className="text-3xl font-serif mr-4 whitespace-nowrap">
                Leadership & Impact
              </h1>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <p className="mb-4">
              In all my endeavors, I strive to build close, meaningful connections and foster inclusive, equitable communities — especially in tech and engineering spaces where systemic barriers persist. As more of an ambivert, I value both collaborative teamwork and one-on-one mentorship, creating environments where everyone feels seen and supported.
            </p>

            <p className="mb-4">
              As President of Cal Poly’s Society of Women Engineers (2024–2025), I led an 8-person executive board, a team of 40+ officers, and a 650+ member organization — one of the largest SWE collegiate sections in the nation.
            </p>

            <p className="mb-4">
              The section organizes over 100 events annually and partners with 40+ companies to support and retain women and nonbinary students in engineering. Our programming spans mentorship, industry networking, K–12 outreach, technical workshops, and DEI initiatives.
            </p>
            <p className="mb-4">
              Outside SWE, I’ve led mentorship programs through Women in Software & Hardware (WISH), spoken at equity-focused engineering events, and contributed to national initiatives like the Percentage Project to advance inclusion in STEM.
            </p>
            <div className="border-b border-gray-300 w-full max-w-xl mt-6" />
          </div>
        </section>
      </main>
    </div>
  );
}
