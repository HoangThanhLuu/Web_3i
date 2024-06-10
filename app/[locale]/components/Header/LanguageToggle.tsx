"use client";
import { useState, useEffect, useRef } from "react";
import JP from "country-flag-icons/react/3x2/JP";
import US from "country-flag-icons/react/3x2/US";
import VN from "country-flag-icons/react/3x2/VN";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

import { CiGlobe } from "react-icons/ci";

// import {setLoalstore} from'../../app/utils/common'

const LanguageToggle = (languageData, sticky) => {
  
  const [openDropDown, setOpenDropDown] = useState(false);
  const language = [
    {
      Code: 1,
      IOSCode: "vi",
      Name: "VietNammese",
    },
    {
      Code: 2,
      IOSCode: "en",
      Name: "English",
    },
    {
      Code: 3,
      IOSCode: "ja",
      Name: "Japanese",
    },
  ];

  const myElementRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        myElementRef.current &&
        !myElementRef.current.contains(event.target)
      ) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={myElementRef} className="relative">
      <button
        title="Change Language"
        onClick={() => setOpenDropDown(!openDropDown)}
        className="ml-2 mt-[3px] flex   cursor-pointer items-center justify-center gap-2 rounded-full text-black dark:text-white "
      >
        <VN title="Vietnamese" className="h-8 w-8" />
        <FaChevronDown
          size={13}
          fontWeight={800}
          className={`${
            openDropDown ? "rotate-180" : ""
          } transform duration-300 ${sticky ? "text-white" : "text-black"}`}
        />
      </button>
      <ul
        className={`absolute right-0 mt-2 min-w-[150px] rounded-b-sm border-t-[3px]  border-blue-500 bg-white p-3 text-left text-base transition-all duration-300 ease-in-out ${
          openDropDown
            ? "visible top-[115%] opacity-100"
            : "invisible top-[150%] opacity-0"
        }`}
      >
        {language.map((item, index) => {
          return (
            <li key={index} value={item.Code} className="mb-[5px]">
              <Link
                href="/"
                className="mb-[5px] flex cursor-pointer items-center justify-start gap-2 rounded-sm py-1 pe-1 ps-2 duration-100 ease-in hover:bg-blue-100"
                locale={item.IOSCode ? item.IOSCode : "vi"}
              >
                <>
                  {(item.IOSCode === "vi" && (
                    <VN title="Vietnamese" className="h-6 w-6" />
                  )) ||
                    (item.IOSCode === "en" && (
                      <US title="US" className="h-6 w-6" />
                    )) ||
                    (item.IOSCode === "ja" && (
                      <JP title="JP" className="h-6 w-6" />
                    ))}
                </>

                <span className="text-xs font-light uppercase tracking-wide text-black dark:text-white">
                  {item.Name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageToggle;
