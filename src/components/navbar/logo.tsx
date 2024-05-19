import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href="./">
      <Image
        src="/images/logo/logoipsum-325.svg"
        alt="Yasrib brand logo"
        width={200}
        height={50}
      />
    </Link>
  );
};

export default BrandLogo;
