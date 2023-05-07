const Hero = () => {
  return (
    <div className=" -z-0 flex min-h-full flex-col gap-16 bg-primary pt-32  text-secondary dark:bg-secondary dark:text-primary">
      <h1 className="title w-[50%] pl-8 font-[cormorant] text-6xl font-normal">
        Brandon Schefstad
      </h1>
      <section className="cta relative flex  min-h-[1000px] flex-col ">
        {/* <Image src={Pfp} alt="Brandon Schefstad laughing" className=""></Image> */}
        <section className=" absolute bottom-0 z-10  flex w-full flex-col justify-evenly gap-20 bg-white bg-opacity-30 px-6  py-16 font-bold">
          <section className="cta m-auto flex w-full justify-around ">
            <button className=" dark rounded-full border-2 border-solid border-secondary  bg-accent-3  px-4 py-2 dark:border-accent-3 dark:bg-secondary dark:text-accent-3">
              {" "}
              Contact Me
            </button>{" "}
            <button className="  rounded-full border-2 border-solid border-secondary bg-primary px-4 py-2 dark:border-primary dark:bg-secondary dark:text-primary ">
              View Resume{" "}
            </button>
          </section>
          <section className="intro flex flex-col gap-6 p-3 text-xl font-medium">
            <span>
              Software engineer, educator, and sentient trivia database.
            </span>
            <ul className="flex flex-col gap-2">
              <li className=" before:pr-4 before:content-['•']">
                Web Accessibility
              </li>
              <li className=" before:pr-4 before:content-['•']">
                Full-stack Engineering
              </li>
              <li className=" before:pr-4 before:content-['•']">
                Interdisciplinary Collaboration
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Hero;
