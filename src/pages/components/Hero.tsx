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
    <div className=" -z-0 flex min-h-full flex-col items-end gap-24  pt-32  text-secondary dark:text-primaryLight">
      <section className=" ">
        <h1 className="title m w-[50%] font-[cormorant] text-6xl font-normal">
          Brandon Schefstad
        </h1>
        <section className="p flex gap-4 ">
          <button onClick={() => getNewTitle(index)}>
            <FontAwesomeIcon icon={faRefresh} className="pt-[4px]" />
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
        className=" w-[80%] rounded-l-lg "
      ></Image>
    </div>
  );
};

export default Hero;
