import Image from "next/image";
import Pfp from "../../../public/assets/pfp2a.jpg";
const Hero = () => {
  return (
    <div className=" -z-0 flex min-h-full flex-col gap-24 bg-primary pt-32  text-secondary dark:bg-secondary dark:text-primary">
      <h1 className="title w-[50%] pl-8 font-[cormorant] text-6xl font-normal">
        Brandon Schefstad
      </h1>
      <section className="cta  relative  flex min-h-[800px] flex-col items-end">
        <Image
          src={Pfp}
          alt="Brandon Schefstad laughing"
          className="w-[75%]"
        ></Image>
        <section className=" bottom-0 z-10  flex w-full flex-col justify-evenly gap-20 bg-white bg-opacity-30 py-16  font-semibold dark:bg-secondary">
          <section className="cta m-auto flex w-full justify-around py-4 dark:bg-primary">
            <a href="#_" className="group relative inline-block text-lg">
              <span className="relative z-10 block overflow-hidden  rounded-xl border-2  border-solid  border-secondary  px-5  py-3 font-medium leading-tight text-secondary transition-colors duration-300  ease-out  hover:border-black active:translate-y-1  group-hover:text-primary dark:bg-secondary ">
                <span className="absolute inset-0 h-full w-full rounded-lg bg-accent-2 px-5 py-3 "></span>
                <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondary transition-all duration-300 group-hover:-rotate-180"></span>
                <span className="relative">Contact Me</span>
              </span>
              <span
                className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            <a href="#_" className="group relative inline-block text-lg">
              <span className="relative z-10 block overflow-hidden  rounded-xl border-2  border-solid  border-secondary  px-5  py-3 font-medium leading-tight text-secondary transition-colors duration-300  ease-out  hover:border-black active:translate-y-1  group-hover:text-primary dark:bg-secondary ">
                <span className="absolute inset-0 h-full w-full rounded-lg bg-accent-2 px-5 py-3 "></span>
                <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondary transition-all duration-300 group-hover:-rotate-180"></span>
                <span className="relative">View Resume</span>
              </span>
              <span
                className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </section>
          <section className="intro flex flex-col gap-6 p-3 px-8 text-lg font-medium">
            <h2 className="font-[cormorant] text-3xl">About Me</h2>
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
