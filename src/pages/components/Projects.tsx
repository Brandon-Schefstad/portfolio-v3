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
    <section className="flex flex-col gap-12">
      {" "}
      <h1 className=" col-span-7 ml-8  flex flex-col gap-8 font-heading  text-4xl font-bold text-secondary dark:text-primaryLight lg:pb-12 lg:text-6xl">
        Projects
      </h1>
      {/* ESEAAG */}
      \
      <ProjectCard
        title={"ESE-At-A-Glance"}
        problem={
          "All students with a disability in America are given case management services by the school. Part of this involves creating an IEP (Individualized Education Plan). This is a lengthy legal document detailing the student's current progress, accommodations, and future goals. Case managers (often teachers themselves) are responsible for communicating this IEP to all relevant personnel. This is very time-consuming, and it ate away at much of my time my first year teaching. I wanted to come up with a solution."
        }
        tech={["MongoDb", " React", "Express", "NodeJS", "Figma", "Tailwind"]}
        solution={
          "Using MERN stack, I developed a fullstack application where case managers can create student profiles, search the current database, and modify student accommodations. This allows the case manager to input information once. Other personnel can search for the data they need."
        }
        src1={ESEAAG1.src}
        src2={ESEAAG2.src}
        src3={ESEAAG3.src}
      />
      <ProjectCard
        title={"Blackstaff Spell Emporium"}
        problem={
          "My Dungeons and Dragons group wanted to incorporate a list of spells (roughly 900 of them) that only came in a pdf. The catch? The spells were organized in alphabetical order, and did not tell you which class could take it!   "
        }
        tech={["NextJS", "Typescript", "PrismaORM"]}
        solution={
          "This site organizes all of those spells by player class. This way users can more quickly identify what spells are avaialble to them without needing to scroll through the PDF back and forth.  Seeding the database involved initially parsing the PDF and cleaning up the resulting data. For cleanup I kept the data as a large JSON array, and used array methods to target the properties within each object. Then I developed a REST API endpoint that enters the data into a POSTGRESQL server. After the API was complete, I designed the frontend using Figma.  "
        }
        src1={blackstaff2.src}
        src2={blackstaff1.src}
        src3={blackstaff3.src}
      />
    </section>
  );
};

export default Projects;
