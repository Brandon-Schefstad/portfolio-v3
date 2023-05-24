const OrganizationCard = ({
  orgName,
  orgContribution,
}: {
  orgName: string;
  orgContribution: string;
}) => {
  return (
    <section className="flex flex-col gap-6 rounded-xl bg-secondary p-6 text-primaryLight dark:bg-accent-2 dark:text-secondary lg:rounded-xl lg:bg-accent-2 lg:text-secondary">
      <h2 className={"text-3xl"}>{orgName}</h2>
      <span className="indent-6 text-lg">{orgContribution}</span>
    </section>
  );
};

export default OrganizationCard;
