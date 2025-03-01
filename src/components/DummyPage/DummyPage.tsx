import { memo } from "react";
import { useNavigate } from "react-router";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import { APP_ROUTES } from "@/constants";
import { withPageAnimation } from "@/hocs/withPageAnimation";

import { DummyPageProps } from "./DummyPage.type";

const DummyPage = memo(({ title }: DummyPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="mt-40 flex h-screen flex-col items-center">
      <Text variant="title-7xl" color="gradient">
        {`${title} page`}
      </Text>
      <Text variant="title-lg">
        This page is in progress, please come back later
      </Text>
      <Button className="mt-10" onClick={() => navigate(APP_ROUTES.HOME)}>
        Back to homepage
      </Button>
    </div>
  );
});

const DummyPageWithTransition = withPageAnimation(DummyPage);

export default DummyPageWithTransition;
