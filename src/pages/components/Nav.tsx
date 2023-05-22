import { useState } from "react";

import ToggleDisplay from "./ToggleDisplay";

const Nav = ({ dark, setDark }: { dark: boolean; setDark: any }) => {
  /* eslint @typescript-eslint/no-unsafe-assignment:off */
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      id="nav"
      className="nav  gap:4 relative  mx-8 flex flex-col items-start gap-8 border-b-2 border-solid border-accent-1 pb-4 font-bold  text-secondary dark:border-accent-3  dark:text-secondary  sm:flex-row sm:items-end md:gap-12  lg:flex-row lg:gap-20 lg:px-32 lg:text-xl"
    >
      <ToggleDisplay dark={dark} setDark={setDark} />

      <section className=" text-md flex w-full items-end  justify-between px-0  tracking-wider sm:text-lg md:pr-12 lg:pr-24 xl:pr-32">
        <a
          tabIndex={0}
          href="mailto:bschefstad@gmail.com"
          className="rounded-xl border-2 border-solid bg-highlight  p-2 dark:border-highlight dark:bg-secondary  dark:text-highlight md:px-4 md:py-2"
        >
          Email Me
        </a>

        <div className="divider divider-horizontal"></div>
        <a
          tabIndex={0}
          href="./public/assets/Brandon Schefstad - Resume.pdf"
          className="rounded-xl border-2 border-solid bg-highlight  p-2 dark:border-highlight dark:bg-secondary  dark:text-highlight md:px-4 md:py-2"
        >
          See My Resume
        </a>
      </section>
    </section>
  );
};

export default Nav;
