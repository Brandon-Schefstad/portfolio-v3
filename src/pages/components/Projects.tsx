import blackstaff1 from "../../../public/assets/Blackstaff/1.png";
import blackstaff2 from "../../../public/assets/Blackstaff/2.png";
import blackstaff3 from "../../../public/assets/Blackstaff/3.png";
import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";

import ProjectCard from "./ProjectCard";
//@ts-nocheck
const Projects = () => {
  return (
    <section className="flex flex-col gap-4">
      {" "}
      <h1 className=" h2 dark:text-primaryLight   col-span-7 flex  flex-col  font-heading font-bold text-primary dark:text-secondary lg:pb-12 lg:text-6xl">
        Projects
      </h1>
      {/* ESEAAG */}
      <ProjectCard
        id={1}
        title={"Blackstaff Spell Emporium"}
        problem={
          "My Dungeons and Dragons group wanted to use an expanded list of spells, but the spells were listed in two sections which made researching very tedious and time-consuming.  "
        }
        tech={[
          "NextJS",
          "Typescript",
          "Prisma",
          "Figma",
          "PostgreSQL",
          "Vitest",
        ]}
        solution={
          "This site organizes all of those spells by character class. This way users can more quickly identify what spells are avaialble to their character without needing to scroll through 400 PDF pages.  Seeding the database involved initially parsing the PDF and cleaning up the resulting data through automated testing. I kept the data as a large array of JSON objects, and used array methods to target and modify the properties within each object. Then I developed a REST API endpoint that enters the data into a POSTGRESQL server. After the API was complete, I designed the frontend using Figma, connected frontend to backend, and used static site generation for a more snappy user experience.  "
        }
        src1={blackstaff2.src}
        src2={blackstaff1.src}
        src3={blackstaff3.src}
        liveLink={"https://blackstaff.vercel.app/"}
        repoLink={"https://github.com/Brandon-Schefstad/blackstaff-fullstack"}
      />
      <ProjectCard
        id={2}
        title={"ESE-At-A-Glance"}
        problem={
          "All students with a disability in America are given case management services by the school. Part of this involves creating an IEP (Individualized Education Plan). This is a lengthy legal document detailing the student's current progress, accommodations, and future goals. Case managers (often teachers themselves) are responsible for communicating this IEP to all relevant personnel. This is very time-consuming, and it ate away at much of my time my first year teaching. I wanted to come up with a solution."
        }
        tech={["MongoDb", "Express", "React", "NodeJS", "Figma", "Tailwind"]}
        solution={
          "Using MERN stack, I developed a fullstack application where case managers can create student profiles, search the current database, and modify student accommodations. This allows the case manager to input information once. Other personnel can search for the data they need."
        }
        src1={ESEAAG1.src}
        src2={ESEAAG2.src}
        src3={ESEAAG3.src}
        liveLink={"https://ese-at-a-glance.netlify.app/"}
        repoLink={"https://github.com/Brandon-Schefstad/ESEAtAGlance"}
      />
    </section>
  );
};

export default Projects;
