import { type NextPage } from "next";
import { api } from "~/utils/api";
import TestPage from "./TestPage";

const Page: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <TestPage />
    </>
  );
};

export default Page;
