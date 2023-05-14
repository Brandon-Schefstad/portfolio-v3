import { useState } from "react";
import ToggleDisplay from "./ToggleDisplay";

const Nav = ({ dark, setDark }: { dark: boolean; setDark: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className=" gap absolute left-0 top-8 flex w-screen px-8 text-secondary  dark:text-primaryLight lg:flex-row lg:px-32 lg:text-xl">
      <ToggleDisplay dark={dark} setDark={setDark} />
      <div className="divider divider-horizontal ml-8 w-[2px] bg-secondary dark:bg-primaryLight"></div>
      <ul className=" flex w-full items-center justify-between px-4 tracking-wider">
        <li onClick={() => setMenuOpen(!menuOpen)}>Menu</li>
        <li>Hire Me</li>
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
