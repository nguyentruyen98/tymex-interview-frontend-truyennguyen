import { Link, useLocation } from "react-router";

import Text from "@/components/Text/Text";
import { HEADER_MENU } from "@/constants";

const MainNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden gap-4 sm:flex sm:gap-7 lg:gap-12 xl:gap-[60px]">
      {HEADER_MENU.map(({ path, label }) => (
        <Link to={path} key={path}>
          <Text
            isAnimations
            variant="title-lg"
            color={pathname === path ? "gradient" : "primary"}
            style={pathname === path ? "underline" : "none"}
          >
            {label}
          </Text>
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
