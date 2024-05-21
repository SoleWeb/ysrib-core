"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetLinkWithClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { ThemeToggle } from "../theme/themeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NavbarHdrActions = () => {
  const { theme } = useTheme();
  console.log(theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10">
                  <SheetLinkWithClose href="./">
                    Home
                  </SheetLinkWithClose>
                  <SheetLinkWithClose href="./#about-us">
                    About Us
                  </SheetLinkWithClose>
                </div>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetDescription className="w-full">
                <div className="flex items-center justify-center w-full text-lg">
                  <ThemeToggle showTheme={true} />
                </div>
              </SheetDescription>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex md:space-x-4">
        {/* <Button className="text-md" variant="ghost">
          Sign in
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button> */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavbarHdrActions;
