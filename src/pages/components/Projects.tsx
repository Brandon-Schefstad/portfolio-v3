import Image from "next/image";
import blackstaff1 from "../../../public/assets/Blackstaff/1.png";
import blackstaff2 from "../../../public/assets/Blackstaff/2.png";
import blackstaff3 from "../../../public/assets/Blackstaff/3.png";

import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";

const Projects = () => {
  return (
    <section className="projects mx-4 ml-[-1.0rem] grid min-w-full grid-cols-7 gap-8 border-t-2 border-secondary bg-primaryLight p-2  pt-16  ">
      <h1 className="col-span-7  flex  flex-col gap-8 pl-4  font-[Abril-Fatface] text-4xl font-bold text-secondary">
        Gallery
      </h1>
      <section className="col-span-7 flex flex-col gap-12 bg-primaryLight p-4 pr-4">
        <section className=" overflow-scroll  " tabIndex={0}>
          <section className="flex  gap-4">
            <Image
              alt={"Home screen of ESE-at-a-glance"}
              width={1200}
              className="rounded-lg"
              src={ESEAAG1}
            ></Image>
            <Image
              alt={"Video"}
              width={1200}
              className="rounded-lg"
              src={ESEAAG2}
            ></Image>
            <Image
              alt={"Video"}
              width={1200}
              className="rounded-lg"
              src={ESEAAG3}
            ></Image>{" "}
          </section>
          <section></section>
        </section>{" "}
        <section className="flex flex-col gap-6 text-secondary">
          <h3 className="text-2xl font-semibold">ESE-At-A-Glance</h3>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem earum fugit cum. Suscipit tenetur ullam esse dolores
            unde voluptatibus animi eius doloribus sint sunt sequi commodi
            porro, harum odit obcaecati?
          </span>
        </section>
      </section>
      <section className="col-span-7 flex flex-col gap-12 bg-primaryLight p-4 pr-4 ">
        <section className=" overflow-scroll  " tabIndex={0}>
          <section className="flex  gap-4">
            <Image
              alt={"Video"}
              className="rounded-lg"
              src={blackstaff2}
            ></Image>
            <Image
              alt={"Video"}
              className="rounded-lg"
              src={blackstaff1}
            ></Image>
            <Image
              alt={"Video"}
              className="rounded-lg"
              src={blackstaff3}
            ></Image>{" "}
          </section>
          <section></section>
        </section>{" "}
        <section className="flex flex-col gap-6 text-secondary">
          <h3 className="text-2xl font-semibold">Blackstaff Spell Emporium</h3>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem earum fugit cum. Suscipit tenetur ullam esse dolores
            unde voluptatibus animi eius doloribus sint sunt sequi commodi
            porro, harum odit obcaecati?
          </span>
        </section>
      </section>
    </section>
  );
};

export default Projects;
