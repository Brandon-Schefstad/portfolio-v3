import Head from "next/head";
import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ToggleDisplay from "./components/ToggleDisplay";
//
const Page = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`relative m-auto min-h-screen overflow-x-hidden pl-9  lg:px-64 ${
        dark ? "bg-secondary" : "bg-primaryLight"
      }  ${dark ? " dark" : ""}`}
    >
      <Head>
        <title>Brandon Schefstad</title>
      </Head>
      <ToggleDisplay dark={dark} setDark={setDark} />
      <Nav />
      <Hero />

      <section className="mt-24 flex flex-col gap-32 pr-4 ">
        <Technologies />
        <Projects />
      </section>
    </div>
  );
};

export default Page;
