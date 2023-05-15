import { useState } from "react";
import ToggleDisplay from "./ToggleDisplay";

const Nav = ({ dark, setDark }: { dark: boolean; setDark: any }) => {
  /* eslint @typescript-eslint/no-unsafe-assignment:off */
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className=" xl:px-30 absolute left-0 top-8 flex w-screen gap-4 px-8 text-secondary dark:text-primaryLight md:gap-12  lg:flex-row lg:gap-24 lg:px-32 lg:text-xl">
      <ToggleDisplay dark={dark} setDark={setDark} />
      <div className="divider divider-horizontal ml-8 w-[2px] bg-secondary dark:bg-primaryLight"></div>
      <ul className=" flex w-full items-center justify-between px-4 font-semibold tracking-wider md:pr-12 lg:pr-24 xl:pr-32">
        <li
          className="hover:cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <a
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setMenuOpen(!menuOpen);
              }
            }}
          >
            Menu
          </a>
        </li>
        <li className="hover:cursor-pointer">
          <a tabIndex={0}>Hire Me</a>
        </li>
      </ul>
      <section
        className={`top-16 ml-[-2rem] w-full bg-secondary ${
          menuOpen ? "absolute" : "hidden"
        }`}
      >
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </section>
    </section>
  );
};

export default Nav;
