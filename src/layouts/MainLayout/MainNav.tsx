import { Link } from "react-router";

import Text from "@/components/Text/Text";

const MainNav = () => {
  return (
    <div className="hidden gap-7 sm:flex lg:gap-12 xl:gap-[60px]">
      <Link to="/">
        <Text isAnimations variant="title-lg">
          Home
        </Text>
      </Link>
      <Link to="/about">
        <Text isAnimations variant="title-lg">
          About Us
        </Text>
      </Link>
      <Link to="/test">
        <Text isAnimations variant="title-lg">
          Our Team
        </Text>
      </Link>

      <Text isAnimations variant="title-lg" color="gradient" cursor="pointer">
        Marketplace
      </Text>
      <Text isAnimations variant="title-lg">
        Roadmap
      </Text>
      <Text isAnimations variant="title-lg">
        Whitepaper
      </Text>
    </div>
  );
};

export default MainNav;
