import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" max-w-full  ">
      <Link
        href="/"
        className="header-logo flex w-full items-center justify-center " 

      >
        <Image
                    src="/images/logo/newlog.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className=" dark:hidden !w-[40px] !h-[40px] lg:!h-20 lg:!w-20 object-contain"
                />

      </Link>
    </div>
  );
};

export default Logo;
