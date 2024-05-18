
import { Button } from "@/src/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/src/components/ui/sheet"
  
  import { AlignJustify } from "lucide-react";

  import Link from "next/link";


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
                                <Link
                                href="/"
                                >
                                    Sign in 
                                </Link>
                                <Link
                                href="/"
                                >
                                   Get Started
                                </Link>
                                <Link
                                href="/"
                                >
                                    Pricing
                                </Link>
                                <Link
                                href="/"
                                >
                                    Contact
                                </Link>
                                <Link
                                href="/"
                                >
                                   About
                                </Link>
                           
                       
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>


            <div className="hidden lg:flex md:space-x-4">
                <Button
                className="text-md"
                variant="ghost"
                >
                    Sign in
                </Button>
                <Button
                className="text-md bg-blue-500">
                    Get Started
                </Button>

            </div>
 

    </div> 
    );
}
 
export default NavbarHdrActions;