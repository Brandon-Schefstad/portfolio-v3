const Unique = () => {
  return (
    <>
      {" "}
      <section className="  flex  flex-col gap-6 rounded-xl bg-secondary  text-primary  dark:bg-primary dark:text-secondary  ">
        <h2 className=" h2  relative z-20 col-span-4 col-start-1 row-start-4   text-left   font-heading  font-bold tracking-wide  lg:py-8  xl:ml-[-1.5rem] xl:mt-[-7rem] xl:max-w-[44rem] xl:rounded-xl xl:pb-16  xl:text-center xl:text-5xl">
          What makes me unique?
        </h2>
        <section className=" body text-md lg:px-12 lg:pb-4 lg:text-xl">
          <ul className="flex flex-col gap-4">
            <li>
              <p>
                I have worked extensively in the public education system, both
                as a teacher and a sign language interpreter. From these
                experiences I have honed my communication, analytical, and time
                management skills. They also instilled in me a commitment to
                inclusivity and accessibility. Additionally, I am a full stack
                software engineer doing everything from UI design to developing
                REST API endpoints.
              </p>
            </li>
            <li>
              <p>
                To date I have combined these skills with a local hackathon team
                to win 1st place, develop two applications to solve real world
                problems, mentor other engineers, and much more.
              </p>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Unique;
