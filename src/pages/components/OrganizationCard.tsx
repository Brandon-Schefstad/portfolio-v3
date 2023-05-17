import React from "react";

const OrganizationCard = ({
  orgName,
  orgContribution,
}: {
  orgName: string;
  orgContribution: string;
}) => {
  return (
    <section className="flex flex-col gap-6 bg-secondary p-4 text-primaryLight dark:bg-accent-2 dark:text-secondary">
      <h2 className={"text-3xl"}>{orgName}</h2>
      <span className="indent-6 text-lg">{orgContribution}</span>
    </section>
  );
};

export default OrganizationCard;
