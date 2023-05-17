import { useState } from "react";

import ToggleDisplay from "./ToggleDisplay";

const Nav = ({ dark, setDark }: { dark: boolean; setDark: any }) => {
  /* eslint @typescript-eslint/no-unsafe-assignment:off */
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      id="nav"
      className="nav  gap:4 relative  mx-8 flex flex-col items-start gap-8 border-b-2 border-solid border-accent-1 pb-4 text-secondary  dark:border-accent-3 dark:text-primaryLight sm:flex-row  sm:items-end md:gap-12  lg:flex-row lg:gap-24 lg:px-32 lg:text-xl"
    >
      <ToggleDisplay dark={dark} setDark={setDark} />

      <section className=" text-md flex w-full items-end  justify-between px-0 font-semibold tracking-wider sm:text-lg md:pr-12 lg:pr-24 xl:pr-32">
        <a tabIndex={0} href="mailto:bschefstad@gmail.com">
          Hire Me
        </a>

        <div className="divider divider-horizontal"></div>
        <span tabIndex={0} className="hover:cursor-pointer">
          <a href={"./Brandon Schefstad - Resume.pdf"}>See My Resume</a>
        </span>
      </section>
    </section>
  );
};

export default Nav;
