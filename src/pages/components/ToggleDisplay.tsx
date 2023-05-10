//@ts-nocheck
const ToggleDisplay = ({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section className=" sticky top-8 z-20 flex w-[9.5rem] flex-auto translate-x-[100%] rounded-full border-2 border-gray-500  bg-gray-100 px-4 py-2">
      {" "}
      <button
        aria-label="light mode toggle"
        role="switch"
        aria-checked={!dark}
        /* eslint @typescript-eslint/no-unsafe-call: 0*/
        /* eslint @typescript-eslint/no-unsafe-return: 0*/
        onClick={() => setDark(false)}
        className="pr-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="  relative rounded-full border-2 border-solid border-black bg-zinc-200 fill-zinc-600 stroke-zinc-600  pl-1 pt-1 active:top-1 active:shadow-none dark:border-black dark:bg-white dark:fill-yellow-400 dark:stroke-black dark:shadow-sm dark:shadow-black"
          width="38"
          height="38"
          fill="none"
        >
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            clip-path="url(#a)"
          >
            <path d="M12.934 17.321a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12.934 1.321v2M12.934 21.321v2M5.153 4.541l1.42 1.42M19.294 18.681l1.42 1.42M1.934 12.321h2M21.934 12.321h2M5.153 20.101l1.42-1.42M19.294 5.961l1.42-1.42" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.934.321h24v24h-24z" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        aria-label="dark mode toggle"
        role="switch"
        aria-checked={dark}
        /* eslint @typescript-eslint/no-unsafe-call: 0*/
        /* eslint @typescript-eslint/no-unsafe-return: 0*/
        onClick={() => setDark(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="shadow-bg- relative rounded-full border-2 border-solid border-black bg-white fill-yellow-400 stroke-black pl-1  pt-1 shadow-sm active:top-1 active:shadow-none dark:border-black dark:bg-zinc-200 dark:fill-zinc-600 dark:stroke-zinc-600"
          width="38"
          height="38"
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.933 13.111a9 9 0 1 1-9.79-9.79 7 7 0 0 0 9.79 9.79Z"
          />
        </svg>
      </button>
    </section>
  );
};

export default ToggleDisplay;
