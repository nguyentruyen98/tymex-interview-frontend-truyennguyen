import { useNavigate } from "react-router";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { APP_ROUTES } from "@/constants";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-40 flex h-screen flex-col items-center">
      <Text variant="title-7xl" color="gradient">
        404
      </Text>
      <Text className="text-center" variant="title-lg">
        The page you are looking for is not found.
      </Text>
      <Button className="mt-10" onClick={() => navigate(APP_ROUTES.HOME)}>
        Back to Homepage
      </Button>
    </div>
  );
};

export default NotFound;
