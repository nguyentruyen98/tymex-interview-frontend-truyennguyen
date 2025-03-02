import { ChevronDown, Globe, Moon, Sun } from "lucide-react";

import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-secondary/70 min:py-6 sticky top-0 z-100 w-full px-6 py-4 backdrop-blur sm:px-8 sm:py-5 lg:pl-11 xl:pr-40 xl:pl-72">
      <div className="grad bg-image flex items-center justify-between">
        <MobileNav />
        <MainNav />
        <div className="flex items-center gap-6 lg:gap-10">
          <Button>Connect Wallet</Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 lg:gap-2">
              <Globe size={100} className="h-5 w-5 text-white lg:h-6 lg:w-6" />
              <ChevronDown className="h-5 w-5 text-white lg:h-6 lg:w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-100">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <Moon size={300} />
                    <Text variant="header">Vietnamese</Text>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-white lg:h-6 lg:w-6" />
                    <Text variant="header">English</Text>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default Header;
