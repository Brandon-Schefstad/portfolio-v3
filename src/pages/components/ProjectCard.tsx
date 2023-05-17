import Image from "next/image";
const ProjectCard = ({
  src1,
  src2,
  src3,
  title,
  problem,
  solution,
  tech,
  liveLink,
  repoLink,
}: {
  src1: string;
  src2: string;
  src3: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  liveLink: string;
  repoLink: string;
}) => {
  return (
    <section className="projects mx-4 grid-cols-7 flex-col rounded-xl border-secondary bg-primaryLight  p-8  text-secondary  shadow-inner shadow-secondary dark:bg-accent-3 dark:text-accent-3 dark:shadow-accent-2   ">
      <section
        className="  flex flex-col gap-16 rounded-xl  lg:overflow-hidden lg:p-12 "
        tabIndex={0}
      >
        <section className="flex flex-col gap-8 tracking-tight  dark:text-primaryLight   lg:col-span-7">
          <h3 className="text-2xl  font-semibold underline  lg:text-4xl">
            {title}
          </h3>

          <section className="mx-2 flex flex-col gap-8 tracking-tighter lg:text-xl lg:tracking-normal">
            <section className="links">
              <h4 className="my-4 text-xl lg:text-3xl">Links</h4>
              <section className="grid grid-cols-2 justify-start gap-4 text-center text-base text-secondary">
                <a
                  href={liveLink}
                  className="pxl-4 rounded-xl bg-highlight py-2 font-bold "
                >
                  Live Site
                </a>
                <a
                  href={repoLink}
                  className="rounded-xl  bg-highlight px-4 py-2 font-bold "
                >
                  Repo
                </a>
              </section>{" "}
            </section>
            <section className="problem">
              <h4 className="my-4 text-xl lg:text-3xl">Problem Description</h4>
              <span>{problem}</span>
            </section>
            <section className="solution">
              <h4 className="my-4 text-xl lg:text-3xl">Tech Solution</h4>
              <span>{solution}</span>
            </section>
          </section>
          <ul className=" lg:tracking-norma  col-span-3 grid w-full grid-cols-3  gap-2 p-2  text-center  text-xs  lg:grid lg:gap-6 lg:p-12 lg:text-center  lg:text-xl">
            {tech ? (
              tech.map((techTool) => {
                return (
                  <li className="rounded-md border-2 border-solid border-accent-1 bg-accent-3 py-2 font-bold text-accent-1">
                    {techTool}
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
          <section className="flex flex-col gap-4 rounded-xl bg-accent-1 p-4  dark:bg-accent-3 dark:text-accent-1 lg:gap-16 lg:p-16">
            <h2 className=" col-span-3 font-heading  text-2xl font-semibold  lg:mt-[0rem]  lg:text-4xl ">
              Gallery
            </h2>
            <Image
              alt={"Home screen of ESE-at-a-glance"}
              width={1200}
              height={400}
              className="rounded-lg"
              src={src1}
              /* eslint react/jsx-no-duplicate-props: off */
              //@ts-ignore
              className={
                " col-span-2 border-2 border-solid border-secondary lg:w-full"
              }
            ></Image>
            <Image
              alt={"Home screen of ESE-at-a-glance"}
              width={1200}
              height={400}
              className="rounded-lg"
              src={src2}
              //@ts-ignore
              className={
                " col-span-2 border-2 border-solid border-secondary lg:w-full"
              }
            ></Image>
            <Image
              alt={"Home screen of ESE-at-a-glance"}
              width={1200}
              height={400}
              className="rounded-lg"
              src={src3}
              //@ts-ignore
              className={
                "  col-span-2 border-2 border-solid border-secondary lg:w-full"
              }
            ></Image>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectCard;
