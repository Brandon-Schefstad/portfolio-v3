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
    <div className="-z-0 flex min-h-full  flex-col gap-24   text-secondary dark:text-primaryLight lg:grid lg:grid-cols-7">
      <section className=" ml-8 lg:col-span-4 ">
        <h1 className=" pr-8  text-left font-heading text-5xl font-bold tracking-wide lg:pr-64 lg:text-left xl:text-6xl">
          Hello! I am Brandon Schefstad :)
        </h1>
        <section className=" mt-4 flex gap-8  lg:mt-8  lg:text-xl ">
          <button aria-label="refresh" onClick={() => getNewTitle(index)}>
            <FontAwesomeIcon
              icon={faRefresh}
              className="max-h-[25px] min-h-[20px]  pt-[4px] "
            />
          </button>
          {index != titles.length - 1 ? (
            <h2 className="  font-heading text-lg lg:text-3xl">
              {titles[index]}
            </h2>
          ) : (
            <a className=" font-heading text-lg lg:text-3xl" href="youtube.com">
              {" "}
              {titles[index]}
            </a>
          )}{" "}
        </section>
      </section>

      <Image
        src={Pfp}
        alt="Brandon Schefstad laughing"
        className=" self-center px-4  lg:col-span-3 lg:row-span-2 lg:place-self-end lg:rounded-l-lg "
      ></Image>
    </div>
  );
};

export default Hero;
