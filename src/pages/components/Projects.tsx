import Image from "next/image";

import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";
import blackstaff1 from "../../../public/assets/blackstaff/1.png";
import blackstaff2 from "../../../public/assets/blackstaff/2.png";
import blackstaff3 from "../../../public/assets/blackstaff/3.png";
//@ts-nocheck
const Projects = () => {
  return (
    <section className="flex flex-col gap-20">
      {" "}
      <h1 className=" col-span-7 ml-8  flex flex-col   gap-8 text-4xl font-bold text-secondary dark:text-primaryLight lg:pb-12 lg:text-6xl">
        Projects
      </h1>
      <section className="projects lp-8  mx-4 grid-cols-7   flex-col  border-secondary  bg-primaryLight dark:bg-accent-2   lg:grid lg:dark:shadow-accent-3  ">
        <section className="col-span-7 flex max-w-full flex-col  gap-12 rounded-xl bg-primaryLight px-6  pt-12 shadow-lg shadow-secondary  dark:bg-secondary lg:shadow-2xl">
          <section
            className="  rounded-xl dark:bg-secondary lg:overflow-hidden lg:p-12 "
            tabIndex={0}
          >
            <section className="mb-24 flex flex-col gap-6   text-secondary dark:text-primaryLight">
              <h3 className="text-2xl font-semibold  lg:text-4xl">
                ESE-At-A-Glance
              </h3>
              <span className="mx-4">
                Full stack application for teachers of students with
                disabilities. Teachers can create student profiles to input
                their accommodations and IEP information
              </span>
              <ul className=" col-span-3 m-auto mt-4  grid w-full  grid-cols-3 gap-2  text-center text-xs text-black lg:grid lg:p-12 lg:text-center ">
                <li className="rounded-md bg-accent-2 py-2">ReactJS</li>
                <li className=" rounded-md bg-accent-2 py-2">Figma</li>
                <li className="rounded-md bg-accent-2 py-2">MongoDB</li>
                <li className="rounded-md bg-accent-2 py-2">NodeJS</li>
                <li className="rounded-md bg-accent-2 py-2">TailwindCSS</li>
                <li className=" rounded-md bg-accent-2 py-2">Express</li>
              </ul>
            </section>
            <section className="flex flex-col ">
              <div className={" flex flex-col gap-6   lg:gap-24"}>
                <h2 className="col-span-3  text-2xl font-semibold text-secondary">
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
              </div>
            </section>
            <section></section>
          </section>{" "}
        </section>
      </section>
      <section className="projects mx-4  grid-cols-7 flex-col   border-secondary  bg-primaryLight  dark:bg-accent-2 lg:grid   lg:p-8 lg:dark:shadow-accent-3  ">
        <section className="col-span-7 flex max-w-full flex-col  gap-12 rounded-xl bg-primaryLight p-6  shadow-lg shadow-secondary  dark:bg-secondary lg:shadow-2xl">
          <section
            className="  rounded-xl dark:bg-secondary lg:overflow-hidden lg:p-12 "
            tabIndex={0}
          >
            <section className="mb-24 flex flex-col gap-6  text-secondary dark:text-primaryLight">
              <h3 className="text-2xl font-semibold  lg:text-4xl">
                Blackstaff's Spell Emporium
              </h3>
              <span className="mx-4">
                Database of an extended list of Dungeons and Dragons spells.
              </span>
              <ul className="col-span-3 m-auto  grid w-full  grid-cols-3 gap-2  text-center text-xs text-black lg:grid lg:p-12 lg:text-center ">
                <li className="rounded-md bg-accent-2 pb-[2px]">Typescript</li>
                <li className="rounded-md bg-accent-2 pb-[2px]">React</li>
                <li className="rounded-md bg-accent-2 pb-[2px]">Prisma ORM</li>
                <li className="rounded-md bg-accent-2 pb-[2px]"></li>
                <li className="rounded-md bg-accent-2 pb-[2px]">TailwindCSS</li>
                <li className="rounded-md bg-accent-2 pb-[2px]">Express</li>
              </ul>
            </section>
            <section className="flex flex-col ">
              <div className={" flex flex-col gap-6   lg:gap-24"}>
                <h2 className="col-span-3  text-2xl font-semibold text-secondary">
                  Gallery
                </h2>
                <Image
                  alt={"Home screen of ESE-at-a-glance"}
                  width={1200}
                  className="rounded-lg"
                  src={blackstaff1}
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
                  src={blackstaff2}
                  //@ts-ignore
                  className={
                    " col-span-2 border-2 border-solid border-secondary lg:w-full"
                  }
                ></Image>
                <Image
                  alt={"Home screen of ESE-at-a-glance"}
                  width={1200}
                  className="rounded-lg"
                  src={blackstaff3}
                  //@ts-ignore
                  className={
                    "  col-span-2 border-2 border-solid border-secondary lg:w-full"
                  }
                ></Image>
              </div>
            </section>
            <section></section>
          </section>{" "}
        </section>
      </section>
    </section>
  );
};

export default Projects;
