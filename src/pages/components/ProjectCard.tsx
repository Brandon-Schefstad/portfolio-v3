import ImageModel from "./ImageModel";
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
  id,
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
  id: number;
}) => {
  const sources = [src1, src2, src3];
  return (
    <section
      key={id}
      className="projects relative  z-20 flex flex-col gap-8  border-secondary bg-accent-1 p-4 py-8 shadow-secondary  dark:bg-accent-3 dark:shadow-accent-2 lg:px-12   "
    >
      {" "}
      <h2 className="rounded-xl   text-3xl font-semibold text-accent-3 lg:px-14  lg:text-4xl">
        {title}
      </h2>
      <section
        className="  flex flex-col gap-16 rounded-xl  lg:overflow-hidden lg:p-12 "
        tabIndex={0}
      >
        <section className="flex flex-col gap-16 tracking-tight  text-secondary dark:text-primaryLight   lg:col-span-7">
          <section className="mx-2 flex flex-col gap-12 tracking-tighter lg:text-xl lg:tracking-normal">
            <section className="problem flex flex-col gap-4">
              <h3 className=" text-2xl font-bold tracking-wide lg:text-3xl">
                Problem
              </h3>
              <span className={"block bg-primaryLight p-3 leading-5"}>
                {problem}
              </span>
            </section>
            <section className="solution flex flex-col gap-4">
              <h3 className=" text-2xl  font-bold tracking-wide lg:text-3xl">
                Solution
              </h3>
              <span className={" block  bg-primaryLight p-3 leading-5"}>
                {" "}
                {solution}
              </span>
            </section>
            <section className="links flex flex-col gap-4  ">
              <h3 className="  text-2xl  font-bold tracking-wide lg:text-3xl">
                Links
              </h3>
              <section className="grid grid-cols-2 justify-start  gap-6 bg-primaryLight p-3 text-center text-base tracking-[0.005em] text-secondary md:w-1/2 ">
                <a
                  href={liveLink}
                  className=" rounded-xl bg-highlight px-4 py-2 font-bold  "
                >
                  Live Site
                </a>
                <a
                  href={repoLink}
                  className="rounded-xl  bg-highlight px-4 py-2 font-bold  "
                >
                  Repo
                </a>
              </section>{" "}
            </section>
            <section className="techStack flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-wide lg:text-3xl">
                Stack
              </h3>
              <ul className=" col-span-3 grid w-full  gap-2 bg-primaryLight p-3  text-center text-xs  tracking-[0.015em]  md:grid-cols-3  lg:grid lg:gap-6  lg:px-28  lg:text-center lg:text-xl">
                {tech ? (
                  tech.map((techTool, index) => {
                    return index % 2 === 0 ? (
                      <div className="grid grid-cols-2  justify-between gap-6">
                        <li
                          key={index}
                          className="rounded-md border-2  border-solid  border-secondary  bg-accent-1 py-2 font-bold text-secondary dark:bg-primaryLight dark:text-secondary"
                        >
                          {techTool}
                        </li>
                        {tech[index + 1] ? (
                          <li
                            key={index + 1}
                            className="rounded-md border-2  border-solid  border-secondary  bg-accent-1 py-2 font-bold text-secondary dark:bg-primaryLight dark:text-secondary"
                          >
                            {tech[index + 1]}
                          </li>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <></>
                    );
                  })
                ) : (
                  <></>
                )}
              </ul>
            </section>
          </section>

          <section className=" mx-2 flex flex-col gap-4 rounded-xl dark:text-accent-1  lg:gap-16 lg:p-16 xl:grid xl:grid-cols-2">
            <h2 className=" col-span-2 font-heading  text-2xl font-bold  lg:mt-[0rem]  lg:text-4xl ">
              Gallery
            </h2>
            {sources.map((src, i) => {
              return <ImageModel src={src} alt={"hello"} />;
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectCard;
