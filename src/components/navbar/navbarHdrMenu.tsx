"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Logo from "./logo";
import { LinkDisabled } from "../alert";
import { toggle } from "@/utils/functions/toggle";

const components: { title: string; description: string; url: string }[] = [
  {
    title: "JSON-WEB",
    description: "A Java library that provides advancements for web based components",
    url: "#",
  },
  {
    title: "Yasrib UI",
    description: "Beautifully designed components that you can copy and paste into your JS apps.",
    url: "#",
  },
  {
    title: "Yasrib.css",
    description: "A CSS framework packed with advanced classes that can be composed to build any design, directly in your markup.",
    url: "#",
  },
];

export function NavbarHdr() {
  const [openLinkDisabledModal, setOpenLinkDisabledModal] = React.useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const ariaDisabled = e.currentTarget.getAttribute('aria-disabled')
    if (ariaDisabled === 'true') {
      e.preventDefault()
      setOpenLinkDisabledModal(true)
    }
  };
  return (
    <NavigationMenu>
      <LinkDisabled open={openLinkDisabledModal} onOpenChange={setOpenLinkDisabledModal}/>
      <NavigationMenuList className="hidden lg:flex lg:space-x-4">
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Yasrib Software
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Leveraging Open-Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Introduction">
                Learn about the basics of Yasrib.
              </ListItem>
              <ListItem title="Demo">
                How to use top notch packages in easiest way.
              </ListItem>
              <ListItem title="Community">
                Join the community and get help or support.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.url} disabled={component.url==='#'} onClick={handleClick}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="./" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium p-4">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="./#about-us" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium p-4">
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="./#contact" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium p-4">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {disabled?: boolean}
>(({ className, title, children, disabled, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          aria-disabled={disabled}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground" aria-disabled={disabled}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
      
    </li>
  );
});
ListItem.displayName = "ListItem";
