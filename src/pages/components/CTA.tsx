const CTA = () => {
  return (
    <section className="   z-10 col-span-2 flex flex-col bg-primaryLight   font-semibold  dark:bg-secondary  lg:justify-end ">
      <section className="cta    justify-evenly gap-4 py-4 lg:flex lg:flex-col lg:justify-start lg:justify-items-start lg:align-top">
        <a
          href="#_"
          className="group relative inline-block text-lg  text-white  lg:w-1/2 lg:text-center"
        >
          <span className="relative z-10 block overflow-hidden rounded-xl border-[3px]  border-solid border-black  px-5  py-3  font-semibold   leading-tight transition-colors duration-300  ease-out  hover:border-black active:translate-y-1  group-hover:text-primaryLight dark:bg-secondary ">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-accent-1 px-5 py-3  "></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondary transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">Contact Me</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
        <a
          href="#_"
          className="group relative inline-block text-lg text-white  lg:w-1/2 lg:text-center "
        >
          <span className="relative z-10 block overflow-hidden rounded-xl  border-[3px] border-solid  border-black  px-5  py-3  font-semibold  leading-tight transition-colors duration-300  ease-out  hover:border-black active:translate-y-1  group-hover:text-primaryLight dark:bg-secondary ">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-accent-1 px-5 py-3  "></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondary transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">View Resume</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </section>
    </section>
  );
};

export default CTA;
