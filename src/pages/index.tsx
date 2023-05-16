import Head from "next/head";
import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Technologies from "./components/Technologies";
//
const Page = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={` relative m-auto min-h-screen overflow-x-hidden  pb-16 pt-8  ${
        dark ? "bg-secondary" : "bg-primaryLight"
      }  ${dark ? " dark" : ""}`}
    >
      <Head>
        <title>Brandon Schefstad</title>
        <link rel="icon" href={"/favicon2.ico"} />
      </Head>

      <Nav dark={dark} setDark={setDark} />
      <div className="mb-8 lg:px-24 xl:px-64">
        <Hero />
        <section className="mt-36 flex flex-col gap-36  overflow-x-hidden  ">
          <Technologies />
          <Projects />
          <Socials />
        </section>
      </div>
      <a
        href="#"
        className="absolute bottom-8 left-8 flex text-secondary underline dark:text-primaryLight"
      >
        <span className="text-center ">Return To Top</span>
      </a>
    </div>
  );
};

export default Page;
