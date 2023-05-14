import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Pfp from "../../../public/assets/pfp2a.jpg";
import CTA from "./CTA";

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
    <div className=" -z-0 flex min-h-full flex-col  gap-24 pt-32  text-secondary  dark:text-primaryLight lg:grid lg:grid-cols-5 ">
      <section className=" lg:col-span-2 ">
        <h1 className="title m w-[50%] font-[Abril-Fatface] text-6xl font-bold  xl:text-8xl">
          Brandon Schefstad
        </h1>
        <section className="p flex gap-4 lg:m-auto  ">
          <button aria-label="refresh" onClick={() => getNewTitle(index)}>
            <FontAwesomeIcon icon={faRefresh} className="pt-[4px] lg:m-auto" />
          </button>
          {index != titles.length - 1 ? (
            <h2>{titles[index]}</h2>
          ) : (
            <a href="youtube.com"> {titles[index]}</a>
          )}
        </section>
      </section>

      <Image
        src={Pfp}
        alt="Brandon Schefstad laughing"
        className=" w-[80%] self-end rounded-l-lg lg:col-span-3 lg:row-span-2 lg:place-self-end "
      ></Image>
      <CTA />
    </div>
  );
};

export default Hero;
