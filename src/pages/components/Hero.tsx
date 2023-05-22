import Image from "next/image";
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
    <div className="grid min-h-full gap-24 pl-4 pt-32 text-secondary  dark:text-primaryLight lg:grid lg:grid-cols-7 lg:pt-40">
      <section className="  lg:col-span-4 ">
        <h1 className=" pr-8  text-left font-heading text-5xl font-bold tracking-wide lg:pr-64 lg:text-left xl:text-6xl">
          Brandon Schefstad
        </h1>
        <section className=" mt-4 flex  gap-4  lg:mt-8  lg:text-xl ">
          <h2 className="  font-heading text-lg lg:text-3xl">
            {titles[index]}
          </h2>
          {/* {index != titles.length - 1 ? (
            <h2 className="  font-heading text-lg lg:text-3xl">
              {titles[index]}
            </h2>
          ) : (
            <a
              className=" font-heading text-lg lg:text-3xl"
              href="https://www.youtube.com"
            >
              {" "}
              {titles[index]}
            </a>
          )}{" "} */}
        </section>
      </section>

      <section
        className="row-start-3 self-center bg-secondary px-4 dark:bg-accent-2
       md:rounded-xl  lg:col-span-3 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:place-self-end lg:rounded-l-lg"
      >
        {" "}
        <Image
          src={Pfp}
          alt="Brandon Schefstad laughing"
          priority={true}
          className="  "
        ></Image>
      </section>
    </div>
  );
};

export default Hero;
