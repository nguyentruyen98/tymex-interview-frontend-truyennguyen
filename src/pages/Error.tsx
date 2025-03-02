import { memo } from "react";
import { useNavigate } from "react-router";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { APP_ROUTES } from "@/constants";

const Error = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Text variant="title-7xl" color="gradient">
        Oops!
      </Text>
      <Text className="text-center" variant="title-lg">
        Something went wrong. Please try again later.
      </Text>
      <Button className="mt-10" onClick={() => navigate(APP_ROUTES.HOME)}>
        Back to Homepage
      </Button>
    </div>
  );
});

export default Error;
