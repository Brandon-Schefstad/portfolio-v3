import Image from "next/image";

import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";
//@ts-nocheck
const Projects = () => {
  return (
    <section className="flex flex-col gap-12">
      {" "}
      <h1 className=" col-span-7 ml-8  flex flex-col gap-8 font-heading  text-4xl font-bold text-secondary dark:text-primaryLight lg:pb-12 lg:text-6xl">
        Projects
      </h1>
      <section className="projects mx-4 grid-cols-7 flex-col rounded-xl border-secondary  bg-primaryLight  p-8   shadow-lg shadow-secondary dark:bg-accent-3 dark:shadow-accent-2   ">
        <section
          className="  flex flex-col gap-16 rounded-xl  lg:overflow-hidden lg:p-12 "
          tabIndex={0}
        >
          <section className="flex flex-col gap-8  text-secondary dark:text-primaryLight   lg:col-span-7">
            <h3 className="text-2xl font-semibold underline  lg:text-4xl">
              ESE-At-A-Glance
            </h3>
            <section className="mx-4 tracking-tighter lg:text-xl lg:tracking-normal">
              <h4 className="my-4 text-xl lg:text-3xl">Problem Description</h4>
              <span>
                All students with a disability in America are given case
                management services by the school. Part of this involves
                creating an IEP (Individualized Education Plan). This is a
                lengthy legal document detailing the student's current progress,
                accommodations, and future goals. Case managers (often teachers
                themselves) are responsible for communicating this IEP to all
                relevant personnel. This is very time-consuming, and it ate away
                at much of my time my first year teaching. I wanted to come up
                with a solution.
              </span>
              <h4 className="my-4 text-xl lg:text-3xl">Tech Solution</h4>
              <span>
                Using MERN stack, I developed a fullstack application where case
                managers can create student profiles, search the current
                database, and modify student accommodations. This allows the
                case manager to input information once. Other personnel can
                search for the data they need.{" "}
              </span>
            </section>
            <ul className=" lg:tracking-norma  col-span-3 grid w-full grid-cols-3  gap-2 p-2  text-center  text-xs text-black lg:grid lg:gap-6 lg:p-12 lg:text-center  lg:text-xl">
              <li className="rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                MongoDB
              </li>
              <li className=" rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                Express
              </li>
              <li className="rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                ReactJS
              </li>
              <li className="rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                NodeJS
              </li>
              <li className=" rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                Figma
              </li>

              <li className="rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                TailwindCSS
              </li>
            </ul>

            <section className="flex flex-col gap-4 rounded-xl bg-accent-2 p-4  dark:bg-accent-3 dark:text-accent-1 lg:gap-16 lg:p-16">
              <h2 className=" col-span-3 font-heading  text-2xl font-semibold  lg:mt-[0rem]  lg:text-4xl ">
                Gallery
              </h2>
              <Image
                alt={"Home screen of ESE-at-a-glance"}
                width={1200}
                className="rounded-lg"
                src={ESEAAG1}
                /* eslint react/jsx-no-duplicate-props: off */
                //@ts-ignore
                className={
                  " col-span-2 border-2 border-solid border-secondary lg:w-full"
                }
              ></Image>
              <Image
                alt={"Home screen of ESE-at-a-glance"}
                width={1200}
                className="rounded-lg"
                src={ESEAAG2}
                //@ts-ignore
                className={
                  " col-span-2 border-2 border-solid border-secondary lg:w-full"
                }
              ></Image>
              <Image
                alt={"Home screen of ESE-at-a-glance"}
                width={1200}
                className="rounded-lg"
                src={ESEAAG3}
                //@ts-ignore
                className={
                  "  col-span-2 border-2 border-solid border-secondary lg:w-full"
                }
              ></Image>
            </section>
          </section>{" "}
        </section>
      </section>
    </section>
  );
};

export default Projects;
