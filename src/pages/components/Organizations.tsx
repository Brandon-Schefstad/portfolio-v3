import { useState } from "react";
import OrganizationCard from "./OrganizationCard";

const Organizations = () => {
  const [currentOrg, setCurrentOrg] = useState(0);
  function getCurrentOrg(currentOrg: number): string {
    switch (currentOrg) {
      case 1:
        return "translate-x-[-33.333%]";
      case 2:
        return "translate-x-[-66.666%]";

      default:
        return "";
    }
  }
  return (
    <section className="flex flex-col gap-12">
      {" "}
      <h1 className=" col-span-7 ml-4  flex flex-col gap-8 font-heading   text-5xl font-bold text-secondary  dark:text-primaryLight lg:pb-12 lg:text-6xl">
        Volunteer Work
      </h1>
      <section className=" relative mx-4 overflow-x-hidden rounded-xl ">
        <section
          className={` ${getCurrentOrg(
            currentOrg
          )}  grid w-[300%] max-w-[300%] grid-cols-3 gap-4  bg-accent-2 p-2 transition-transform duration-[500ms] dark:bg-accent-1 md:max-w-full lg:bg-primaryLight`}
        >
          <OrganizationCard
            orgName={"Social Justice Hackathon"}
            orgContribution={
              " Co-led frontend team to develop a dashboard for Philadelphia citizens to research local judges. Two team members and I presented our work, limitations, and next steps in front of a panel of judges. We won first place! "
            }
          />

          <OrganizationCard
            orgName={"100Devs"}
            orgContribution={
              "Served as a peer mentor to other full stack developers, joined teams to create web applications, contracted work with freelance clients, and engaged in regular code reviews and stand ups. "
            }
          />
          <OrganizationCard
            orgName={"Code For Philadelphia"}
            orgContribution={
              "Provided support with React UI as a member on a full-stack team. Drafted onboarding and setup documentation for new group members."
            }
          />
        </section>
      </section>
      <section className="mt-[-1rem] flex justify-between px-8 text-secondary">
        <button
          onClick={() =>
            currentOrg < 0 ? setCurrentOrg(0) : setCurrentOrg(currentOrg - 1)
          }
          className={`btn ${currentOrg === 0 ? "btn-disabled" : ""} md:hidden`}
        >
          Left
        </button>
        <button
          onClick={() =>
            currentOrg == 2 ? setCurrentOrg(2) : setCurrentOrg(currentOrg + 1)
          }
          className={`btn ${currentOrg === 2 ? "btn-disabled" : ""} md:hidden`}
        >
          Right
        </button>
      </section>
    </section>
  );
};

export default Organizations;
