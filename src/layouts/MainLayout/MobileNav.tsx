import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";

import Text from "@/components/Text/Text";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HEADER_MENU } from "@/constants";
const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block h-5 w-5 sm:hidden" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="supports-[backdrop-filter]:bg-background/90 z-100 flex w-60 flex-col backdrop-blur"
      >
        <nav className="flex basis-full flex-col gap-4 font-medium">
          {HEADER_MENU.map(({ label, path }) => (
            <SheetClose asChild key={path}>
              <Link to={path} key={path}>
                <Text
                  variant="title-lg"
                  color={pathname === path ? "gradient" : "primary"}
                  style={pathname === path ? "underline" : "none"}
                >
                  {label}
                </Text>
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="flex flex-row justify-center gap-4 sm:justify-center">
          <Sun />
          <Moon />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
