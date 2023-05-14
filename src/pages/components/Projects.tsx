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
      <section className="projects mx-4 grid-cols-7 flex-col rounded-xl border-secondary  bg-primaryLight  p-8   shadow-lg shadow-secondary dark:bg-secondary dark:shadow-blue-200  lg:grid  ">
        <section
          className="  flex flex-col gap-16 rounded-xl dark:bg-secondary lg:overflow-hidden lg:p-12 "
          tabIndex={0}
        >
          <section className="flex flex-col gap-8  text-secondary dark:text-primaryLight ">
            <h3 className="text-2xl font-semibold   underline lg:text-4xl">
              ESE-At-A-Glance
            </h3>
            <span className="mx-4 tracking-tighter">
              Full stack application for teachers of students with disabilities.
              Teachers can create student profiles to input their accommodations
              and IEP information
            </span>
            <ul className=" col-span-3  grid w-full  grid-cols-3 gap-2   p-2 text-center text-xs text-black lg:grid lg:p-12  lg:text-center">
              <li className="rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                ReactJS
              </li>
              <li className=" rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                Figma
              </li>
              <li className="rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                MongoDB
              </li>
              <li className="rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                NodeJS
              </li>
              <li className="rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                TailwindCSS
              </li>
              <li className=" rounded-md border-2 border-solid border-accent-1 bg-blue-200 py-2 font-bold text-accent-1">
                Express
              </li>
            </ul>

            <section className="flex flex-col gap-4 rounded-xl bg-secondary p-4 text-primaryLight dark:bg-accent-3 dark:text-secondary">
              <h2 className=" col-span-3 font-heading  text-2xl font-semibold ">
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
