import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className="-z-0 flex min-h-full  flex-col gap-24   text-secondary dark:text-primaryLight lg:grid lg:grid-cols-5">
      <section className=" ml-8 lg:col-span-2 ">
        <h1 className=" text-left font-heading  text-5xl font-bold tracking-wide lg:text-left  xl:text-6xl">
          Hello! I am Brandon Schefstad
        </h1>
        <section className=" mt-4 flex justify-start gap-4 lg:m-auto lg:mt-8 lg:justify-start lg:text-xl ">
          <section className="grid min-w-[80%] grid-cols-8 gap-4 lg:min-w-[70%]">
            <button aria-label="refresh" onClick={() => getNewTitle(index)}>
              <FontAwesomeIcon
                icon={faRefresh}
                className="col-span-2 h-[75%] self-center pt-[4px] lg:m-auto"
              />
            </button>
            {index != titles.length - 1 ? (
              <h2 className=" col-span-6 font-heading text-lg">
                {titles[index]}
              </h2>
            ) : (
              <a
                className=" col-span-6 font-heading text-lg"
                href="youtube.com"
              >
                {" "}
                {titles[index]}
              </a>
            )}
          </section>
        </section>
      </section>

      <Image
        src={Pfp}
        alt="Brandon Schefstad laughing"
        className=" w-[80%] self-end rounded-l-lg lg:col-span-3 lg:row-span-2 lg:place-self-end "
      ></Image>
    </div>
  );
};

export default Hero;
