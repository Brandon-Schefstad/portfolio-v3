import Image from "next/image";
import blackstaff1 from "../../../public/assets/Blackstaff/1.jpg";
import blackstaff2 from "../../../public/assets/Blackstaff/2.jpg";
import blackstaff3 from "../../../public/assets/Blackstaff/3.jpg";
import blackstaff4 from "../../../public/assets/Blackstaff/4.jpg";
import blackstaff5 from "../../../public/assets/Blackstaff/5.jpg";
import ESEAAG1 from "../../../public/assets/ESEAAG/1.png";
import ESEAAG2 from "../../../public/assets/ESEAAG/2.png";
import ESEAAG3 from "../../../public/assets/ESEAAG/3.png";

const Projects = () => {
  return (
    <section className=" projects ml-[-2.5rem] grid min-w-full grid-cols-7 gap-8 bg-secondary p-2 px-4 pt-16  ">
      <h1 className="col-span-7  flex  flex-col gap-8 pl-4  font-[Abril-Fatface] text-4xl font-bold text-primaryLight">
        Gallery
      </h1>
      <section className="col-span-7 flex flex-col gap-12 bg-accent-1 p-4 pr-4">
        <section className=" overflow-scroll  " tabIndex={0}>
          <section className="flex  gap-4">
            <Image
              alt={"Video"}
              width={700}
              height={700}
              className="rounded-lg"
              src={ESEAAG1}
            ></Image>
            <Image
              alt={"Video"}
              width={700}
              height={700}
              className="rounded-lg"
              src={ESEAAG2}
            ></Image>
            <Image
              alt={"Video"}
              width={700}
              height={700}
              className="rounded-lg"
              src={ESEAAG3}
            ></Image>{" "}
          </section>
          <section></section>
        </section>{" "}
        <section className="flex flex-col gap-6 text-primaryLight">
          <h3 className="text-2xl font-semibold">ESE-At-A-Glance</h3>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem earum fugit cum. Suscipit tenetur ullam esse dolores
            unde voluptatibus animi eius doloribus sint sunt sequi commodi
            porro, harum odit obcaecati?
          </span>
        </section>
      </section>
      <section className="col-span-7 flex flex-col gap-12 bg-accent-1 p-4 pr-4">
        <section className=" overflow-scroll  " tabIndex={0}>
          <section className="flex  gap-4">
            <Image
              alt={"Video"}
              width={350}
              className="rounded-lg"
              src={blackstaff1}
            ></Image>
            <Image
              alt={"Video"}
              width={350}
              className="rounded-lg"
              src={blackstaff2}
            ></Image>
            <Image
              alt={"Video"}
              width={350}
              className="rounded-lg"
              src={blackstaff3}
            ></Image>{" "}
            <Image
              alt={"Video"}
              width={350}
              className="rounded-lg"
              src={blackstaff4}
            ></Image>{" "}
            <Image
              alt={"Video"}
              width={350}
              className="rounded-lg"
              src={blackstaff5}
            ></Image>{" "}
          </section>
          <section></section>
        </section>{" "}
        <section className="flex flex-col gap-6 text-primaryLight">
          <h3 className="text-2xl font-semibold">ESE-At-A-Glance</h3>
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
