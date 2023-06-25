import Link from "next/link";
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
      className="projects relative z-20  flex flex-col gap-2 bg-secondary  text-primary shadow-md shadow-secondary  dark:bg-primary  dark:text-secondary dark:shadow-primary lg:px-12   "
    >
      {" "}
      {/* TODO: Choose a font */}
      <h2 className=" project-header rounded-xl   font-semibold  lg:px-14  lg:text-4xl">
        {title}
      </h2>
      <section className="techStack flex flex-col ">
        <h3 className=" h3  font-bold tracking-wide lg:text-3xl">Stack</h3>
        <ul className=" bg-primaryLight  button-text-small col-span-3 grid w-full grid-cols-2  justify-between  gap-2 p-3 text-center text-xs  leading-5 tracking-[0.015em]  dark:bg-primary  md:grid-cols-3  lg:grid lg:gap-6  lg:px-28  lg:text-center lg:text-xl">
          {tech ? (
            tech.map((techTool, index) => {
              return index % 2 === 0 ? (
                <li
                  key={index}
                  className=" dark:bg-primaryLight  bg-primary py-2 font-bold tracking-wider text-secondary dark:text-secondary"
                >
                  {techTool}
                </li>
              ) : (
                <li
                  key={index}
                  className=" dark:bg-primaryLight  bg-primary py-2 font-bold tracking-wider text-secondary dark:text-secondary"
                >
                  {techTool}
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </section>
      <section className="problem flex flex-col ">
        <h3 className=" h3 font-bold tracking-wide lg:text-3xl">Problem</h3>
        <span
          className={"body bg-primaryLight block leading-5 dark:bg-primary"}
        >
          {problem}
        </span>
      </section>
      <section className="solution flex flex-col ">
        <h3 className=" h3   font-bold tracking-wide lg:text-3xl">Solution</h3>
        <span
          className={" body bg-primaryLight block leading-5 dark:bg-primary"}
        >
          {" "}
          {solution}
        </span>
      </section>
      <section className="links flex flex-col  ">
        <h3 className=" h3 font-bold tracking-wide lg:text-3xl">Links</h3>
        <section className="  grid grid-cols-2 justify-start gap-2   text-center text-base uppercase leading-5 tracking-wide text-primary dark:bg-secondary md:w-1/2 ">
          <Link
            href={liveLink}
            className=" button-text  bg-highlight rounded-md bg-accent  px-4 py-3 font-bold  "
          >
            Site
          </Link>
          <Link
            href={repoLink}
            className=" button-text  bg-highlight rounded-md  bg-accent px-4 py-3 font-bold  "
          >
            Repo
          </Link>
        </section>{" "}
      </section>
      <section className="  flex flex-col rounded-xl dark:text-primary  lg:gap-16 lg:p-16 xl:grid xl:grid-cols-2">
        <h3 className=" h3 col-span-2 font-heading   font-bold  lg:mt-[0rem]  lg:text-4xl ">
          Gallery
        </h3>
        {sources.map((src, i) => {
          return <ImageModel src={src} alt={"hello"} key={i} />;
        })}
      </section>
    </section>
  );
};

export default ProjectCard;
