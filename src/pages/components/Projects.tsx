import Image from "next/image";
import blackstaff1 from "../../../public/assets/Blackstaff/1.png";
import blackstaff2 from "../../../public/assets/Blackstaff/2.png";
import blackstaff3 from "../../../public/assets/Blackstaff/3.png";

import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";
//@ts-nocheck
const Projects = () => {
  return (
    <section className="flex flex-col gap-12">
      {" "}
      <h1 className="col-span-7  flex  flex-col gap-8   font-[Abril-Fatface] text-4xl font-bold text-secondary dark:text-primaryLight lg:pb-12 lg:text-6xl">
        Gallery
      </h1>
      <section className="projects mx-4 ml-[0rem] min-w-full grid-cols-7 flex-col  gap-24 border-secondary  bg-primaryLight p-2 dark:bg-accent-2 lg:grid   lg:p-8 lg:dark:shadow-accent-3  ">
        <section className="col-span-7 flex max-w-full flex-col  gap-12 rounded-xl bg-primaryLight p-4 pr-4 dark:bg-secondary lg:shadow-2xl lg:shadow-secondary">
          <section
            className="  rounded-xl dark:bg-secondary lg:overflow-hidden lg:p-12 "
            tabIndex={0}
          >
            <section className="mb-24 flex flex-col gap-6  text-secondary dark:text-primaryLight">
              <h3 className="text-2xl font-semibold  lg:text-4xl">
                ESE-At-A-Glance
              </h3>
              <span className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem earum fugit cum. Suscipit tenetur ullam esse
                dolores unde voluptatibus animi eius doloribus sint sunt sequi
                commodi porro, harum odit obcaecati?
              </span>
            </section>
            <section className="flex flex-col  gap-16 ">
              <div
                className={
                  "flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-24"
                }
              >
                <div className="col-span-2">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={ESEAAG1}
                    /* eslint react/jsx-no-duplicate-props: off */
                    //@ts-ignore
                    className={"w-[75%] lg:w-full"}
                  ></Image>
                </div>
                <ul className="m-auto flex   bg-white px-8 text-center  lg:grid lg:grid-cols-3 lg:p-12 lg:text-center ">
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
              <div
                className={
                  "flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-24 "
                }
              >
                <div className="  lg:col-span-2 lg:col-start-2">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={ESEAAG2}
                    //@ts-ignore
                    className={"w-[75%] lg:w-full"}
                  ></Image>
                </div>
                <span className="m-auto flex   bg-white px-8 text-center  lg:grid lg:grid-cols-3 lg:p-12 lg:text-center ">
                  This is a small summary of the project
                </span>
              </div>
              <div
                className={
                  "flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-24"
                }
              >
                <div className="col-span-2 ">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={ESEAAG3}
                    //@ts-ignore
                    className={"w-[55%] lg:w-full"}
                  ></Image>
                </div>
                <span className="m-auto flex   bg-white px-8 text-center  lg:grid lg:grid-cols-3 lg:p-12 lg:text-center">
                  This is what I'm proud of
                </span>
              </div>
            </section>
            <section></section>
          </section>{" "}
        </section>
        <section className="col-span-7 flex flex-col gap-12  rounded-xl bg-primaryLight p-4 pr-4 dark:bg-secondary lg:shadow-2xl lg:shadow-secondary">
          <section
            className="  rounded-xl dark:bg-secondary lg:overflow-hidden lg:p-12 "
            tabIndex={0}
          >
            <section className="mb-24 flex flex-col gap-6 text-secondary dark:text-primaryLight">
              <h3 className="text-2xl font-semibold  lg:text-4xl">
                Blackstaff Spell Emporium
              </h3>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem earum fugit cum. Suscipit tenetur ullam esse
                dolores unde voluptatibus animi eius doloribus sint sunt sequi
                commodi porro, harum odit obcaecati?
              </span>
            </section>
            <section className="flex flex-col  lg:gap-16 ">
              <div className={"lg:grid lg:grid-cols-3 lg:gap-24"}>
                <div className="col-span-2">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={blackstaff1}
                  ></Image>
                </div>
                <ul className="bg-white  lg:grid lg:grid-cols-3 lg:p-12 lg:text-center ">
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul>
              </div>
              <div className={"lg:grid lg:grid-cols-3 lg:gap-24"}>
                <div className="lg:col-span-2 lg:col-start-2">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={blackstaff2}
                  ></Image>
                </div>
                <span className="bg-white px-16 py-8 lg:row-start-1 ">
                  This is a small summary of the project
                </span>
              </div>
              <div className={"lg:grid lg:grid-cols-3 lg:gap-24"}>
                <div className="col-span-2 ">
                  <Image
                    alt={"Home screen of ESE-at-a-glance"}
                    width={1200}
                    className="rounded-lg"
                    src={blackstaff3}
                  ></Image>
                </div>
                <span className="bg-white px-16 py-8">
                  This is what I'm proud of
                </span>
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
