import Image from "next/image";
import { useState } from "react";

const ImageModel = ({ src, alt }: { src: string; alt: string }) => {
  const [enlarged, setEnlarged] = useState(false);
  return (
    <button
      onClick={() => setEnlarged(!enlarged)}
      className=" border-2 border-solid border-secondary     "
    >
      <Image
        alt={"Home screen of ESE-at-a-glance"}
        width={1200}
        height={800}
        src={src}
      ></Image>
      {/* <section
        className={`${enlarged ? "absolute m-auto min-w-full " : "hidden"}`}
        onClick={() => setEnlarged(!enlarged)}
      >
        <Image
          alt={"Home screen of ESE-at-a-glance"}
          width={1200}
          height={800}
          src={src}
        ></Image>
      </section> */}
    </button>
  );
};

export default ImageModel;
