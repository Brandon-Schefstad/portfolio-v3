import { useState } from "react";

import ToggleDisplay from "./ToggleDisplay";

const Nav = ({ dark, setDark }: { dark: boolean; setDark: any }) => {
  /* eslint @typescript-eslint/no-unsafe-assignment:off */
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className=" relative mx-8 grid  grid-flow-col-dense gap-4 border-b-2 border-solid  border-white pb-4 text-secondary dark:text-primaryLight md:flex md:gap-12  lg:flex-row lg:gap-24 lg:px-32 lg:text-xl">
      <ToggleDisplay dark={dark} setDark={setDark} />

      <section className=" flex w-full items-end justify-between  px-4 text-xs font-semibold tracking-wider md:pr-12 lg:pr-24 xl:pr-32">
        <span className="hover:cursor-pointer">
          <a tabIndex={0}>Hire Me</a>
        </span>
        <div className="divider divider-horizontal"></div>
        <span className="hover:cursor-pointer">
          <a tabIndex={0}>See My Resume</a>
        </span>
      </section>
    </section>
  );
};

export default Nav;
