import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";

interface BrandLogoProps {
  className?: string;
}

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
      <div className="w-fit h-20 flex justify-center items-center">
      <Link href="./" className={className}>
        <div className="p-2 bg-foreground/10 dark:bg-foreground/[.05] rounded-lg">
        <Image
          src="/images/favicon_io/logo.png"
          alt="Yasrib brand logo"
          width={40}
          height={40}
          style={{filter: 'brightness(0) saturate(100%) invert(12%) sepia(100%) saturate(6557%) hue-rotate(269deg) brightness(92%) contrast(123%)'}}
        />
        </div>
        </Link>
      </div>
  );
};

export default BrandLogo;
