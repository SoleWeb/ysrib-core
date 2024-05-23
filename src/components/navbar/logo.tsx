import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";

interface BrandLogoProps {
  className?: string;
}

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <Link href="./" className={className}>
      <div className="pl-6 w-fit h-20 flex justify-center items-center">
        <Image
          src="/images/favicon_io/logo.png"
          alt="Yasrib brand logo"
          width={40}
          height={40}
          className="dark:invert"
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
