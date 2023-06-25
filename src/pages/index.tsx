import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import favicon from "../../public/favicon2.ico";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Technologies from "./components/Technologies";
import Unique from "./components/Unique";
//
const Page = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={` relative m-auto min-h-screen overflow-x-hidden  px-4 pb-16 pt-8 ${
        dark ? "bg-primary" : "bg-secondary"
      }  ${dark ? " dark" : ""}`}
    >
      <Head>
        <title>Brandon Schefstad</title>
        <link rel="icon" href={favicon.src} />
      </Head>

      <Nav dark={dark} setDark={setDark} />
      <div className=" flex flex-col gap-24  lg:px-24 xl:px-64 ">
        <Hero />
        <Unique />

        <Projects />
        <Technologies />

        {/* <Organizations /> */}
        <Socials />
      </div>
      <Link
        href="/#"
        className="dark:text-primaryLight absolute bottom-8 left-4 flex text-secondary underline"
      >
        <span className="text-center ">Return To Top</span>
      </Link>
    </div>
  );
};

export default Page;
