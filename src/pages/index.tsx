import Head from "next/head";
import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const Page = () => {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`min-h-screen ${dark ? "bg-secondary" : "bg-primary"}  ${
        dark ? " dark" : ""
      }`}
    >
      <section className=" sticky top-8 z-20 ml-8 flex gap-5">
        {" "}
        <button onClick={() => setDark(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" rounded-full border-2 border-solid border-secondary bg-secondary fill-primary stroke-primary  pl-1 pt-1 dark:border-black dark:bg-white dark:fill-primary dark:stroke-secondary"
            width="38"
            height="38"
            fill="none"
          >
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              clip-path="url(#a)"
            >
              <path d="M12.934 17.321a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12.934 1.321v2M12.934 21.321v2M5.153 4.541l1.42 1.42M19.294 18.681l1.42 1.42M1.934 12.321h2M21.934 12.321h2M5.153 20.101l1.42-1.42M19.294 5.961l1.42-1.42" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.934.321h24v24h-24z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button onClick={() => setDark(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full border-2 border-solid border-secondary bg-white fill-secondary stroke-secondary   pl-1  pt-1  dark:border-primary dark:bg-secondary dark:fill-primary  dark:stroke-primary"
            width="38"
            height="38"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21.933 13.111a9 9 0 1 1-9.79-9.79 7 7 0 0 0 9.79 9.79Z"
            />
          </svg>
        </button>
      </section>

      <Head>
        <title>Brandon Schefstad</title>
      </Head>
      <Nav />
      <Hero />
      <Technologies />
      <Projects />
    </div>
  );
};

export default Page;
