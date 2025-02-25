import { ChevronDown, Globe } from "lucide-react";

import Button from "@/components/Button/Button";

import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-secondary/70 min:py-6 sticky top-0 z-10 w-full px-6 py-4 sm:px-8 sm:py-5 lg:pl-11 xl:pr-40 xl:pl-72">
      <div className="grad bg-image flex items-center justify-between">
        <MobileNav />
        <MainNav />
        <div className="flex items-center gap-6 lg:gap-10">
          <Button>Connect Wallet</Button>
          <div className="flex items-center gap-1 lg:gap-2">
            <Globe className="h-5 w-5 text-white lg:h-6 lg:w-6" />
            <ChevronDown className="h-5 w-5 text-white lg:h-6 lg:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
