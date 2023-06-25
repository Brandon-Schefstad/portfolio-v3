import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Pfp from "../../../public/assets/pfp2a.jpg";

const Hero = () => {
  const [index, setIndex] = useState(0);
  function getNewTitle(index: number) {
    if (index >= titles.length - 1) {
      setIndex(0);
      console.log(index);
    } else {
      setIndex(index + 1);
    }
  }
  const titles = [
    "Web Accessibility",
    "FullStack Engineer",
    "Public Educator",
    "Sentient Trivia Database",
    "Having fun clicking?",
    "The.",
    "Suspense..",
    "Is...",
    "Worth....",
    "It.....",
    "Secret Cat Page :3",
  ];

  return (
    <div className="grid min-h-full gap-16   text-primary  dark:text-secondary lg:grid lg:grid-cols-7 lg:pt-40">
      <section className="  flex flex-col    lg:col-span-4 ">
        <h1 className=" h1 pr-8  text-left font-heading font-bold tracking-wide lg:pr-64 lg:text-left xl:text-6xl">
          Brandon Schefstad
        </h1>
        <section className="  flex   pl-[2px]  lg:mt-8  lg:text-xl ">
          <h2 className="body-light  font-heading text-lg lg:text-3xl">
            {titles[index]}
          </h2>
        </section>
      </section>
      <section
        className="self-center bg-secondary dark:bg-primary
       md:rounded-xl  lg:col-span-3 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:place-self-end lg:rounded-l-lg"
      >
        {" "}
        <Image
          src={Pfp}
          alt="Brandon Schefstad laughing"
          priority={true}
          className=""
        ></Image>
      </section>
      <section className=" button-text text-md mt-6 flex    justify-around gap-4 px-0 font-semibold  tracking-wider sm:text-lg md:pr-12 lg:pr-24 xl:pr-32">
        <Link
          tabIndex={0}
          href="mailto:bschefstad@gmail.com"
          className="dark:border-highlight  dark:text-highlight w-full rounded-md border-2 border-solid bg-accent  py-3  text-center dark:bg-primary dark:shadow-md  dark:shadow-accent md:px-4 md:py-2"
        >
          Email Me
        </Link>

        <Link
          tabIndex={0}
          href="./public/assets/Brandon Schefstad - Resume.pdf"
          className="dark:border-highlight  dark:text-highlight w-full rounded-md border-2 border-solid bg-accent  py-3  text-center dark:bg-primary dark:shadow-md  dark:shadow-accent md:px-4 md:py-2"
        >
          See Resume
        </Link>
      </section>
    </div>
  );
};

export default Hero;
