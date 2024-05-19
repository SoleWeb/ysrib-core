"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme/themeToggle";

const NavbarHdrActions = () => {
  return (
    <div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="./">Home</Link>
                  <ThemeToggle />
                </div>
              </SheetDescription>
            </SheetHeader>
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
