import { Button } from "@mantine/core";
import ToggleableLink from "@/lib/components/ToggleableLink/ToggleableLink.tsx";

const UserPage = () => {
  return (
    <div>
      <ToggleableLink to={"/users/1"}>
        <Button variant={"light"}>Go To Detail</Button>
      </ToggleableLink>
    </div>
  );
};

export default UserPage;
