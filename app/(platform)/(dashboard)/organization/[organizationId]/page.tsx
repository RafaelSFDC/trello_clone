import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { useId, orgId } = auth();
  return (
    <div>
      Organization: {orgId}
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganizationIdPage;
