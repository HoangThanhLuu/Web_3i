import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";

const HeaderTools = ({ languageData }) => {
  const [userClose, setUserClose] = useState(false);

  const userToggleHandler = () => {
    setUserClose(!userClose);
  };

  const myElementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        myElementRef.current &&
        !myElementRef.current.contains(event.target)
      ) {
        setUserClose(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-[1000] flex items-center justify-end px-4 font-serif">
      <div ref={myElementRef}>
        
        {/* <div
          className={`ease absolute right-0 top-full rounded-md bg-[white] p-[15px] shadow-lg transition duration-300 2xl:static 2xl:flex 2xl:min-w-[280px] 2xl:bg-[transparent] 2xl:p-0 2xl:shadow-none ${
            userClose ? "opacity-100" : "hidden opacity-0"
          }`}
        >
          <Link href="/signup">
            <button className="ease-in-up w-full cursor-pointer rounded-md px-10 py-3 text-base font-bold text-black transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9">
              Đăng ký
            </button>
          </Link>
          <Link href="/signin">
            <button className="ease-in-up cursor-pointer rounded-md bg-[green] px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
              Đăng nhập
            </button>
          </Link>
        </div> */}
      </div>
      {/* <ThemeToggler /> */}
      
    </div>
  );
};

export default HeaderTools;
