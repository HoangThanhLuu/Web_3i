"use client";
import { useEffect, useState } from "react";
import { boolean } from "yup";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

export default function ScrollToTopICon() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    <div className="fixed bottom-6 left-[42px] z-[10000] hidden lg:block">
      {isVisible && (
        // <div
        //   onClick={scrollToTop}
        //   aria-label="scroll to top"
        //   className={
        //     "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[green] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp " +
        //     (isVisible ? "mr-8" : "mr-0")
        //   }
        // >
        //   <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        //       </div>
        <div
          className="  flex flex-col items-center justify-center  gap-4"
          onClick={scrollToTop}
        >
          <Link href="" className="h-fit w-fit rounded-full bg-red-700 p-3">
            <IoHome className="text-white" size={18} />
          </Link>
          <Link href="" className="h-fit w-fit rounded-full bg-blue-700 p-3">
            <FaFacebookF className="text-white" size={18} />
          </Link>
          <Link href="" className="h-fit w-fit rounded-full bg-neutral-700 p-3">
            <IoMdMail className="text-white" size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}
