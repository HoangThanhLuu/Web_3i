"use client";
import { useEffect, useState } from "react";
import { boolean } from "yup";
import { SiFacebook } from "react-icons/si";
import { BiComment } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { AiFillPrinter } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathName = usePathname()

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
    <div className="fixed bottom-6 right-[100px] z-[10000] hidden lg:block">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className={
            "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[green] text-black shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp " +
            (isVisible ? "mr-8" : "mr-0")
          }
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
    {pathName.includes("technology") && <div className="fixed bottom-6 left-[125px] z-0 hidden lg:block">
      {isVisible && (
        <div
        className="  flex flex-col items-center justify-center  gap-4"
        onClick={scrollToTop}
      >
        <Link href="" className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-3">
          <IoHome className="text-black text-sm" size={20} />
        </Link>
        <Link href="" className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-3">
          <SiFacebook  className="text-black text-sm" size={20} />
        </Link>
        <Link href="" className="border-b-[1px] border-neutral-300 flex flex-col items-center justify-center gap-2 py-2">
          <div className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-3 ">
          
          <BiComment  className="text-black text-sm" size={20} />
          </div>
         <p className="text-neutral-500 text-xs">0</p>
        </Link>
        <Link href="" className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-3">
          <AiFillPrinter   className="text-black text-sm" size={20} />
        </Link>
        <Link href="" className=" flex flex-col items-center justify-center gap-2 py-4 px-3  rounded-full ring-1 ring-neutral-300">
          <div className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-1 ">
          
          <IoAdd   className="text-black " size={12} />
          </div>
         <p className="text-neutral-500 text-xs">aA</p>
         <div className="h-fit w-fit rounded-full ring-1 ring-neutral-300 p-1 ">
          
          <RiSubtractLine   className="text-black " size={12} />
          </div>
        </Link>
      </div>
      )}
    </div>}
    </>
  );
}
