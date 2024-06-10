"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import HeaderTools from "./HeaderTools";

import { GetMenuData, GetLanguage } from "../../apis/GetDataHome";
import NavToggle from "./NavToggle";

const Header = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [languageData, setLanguageData] = useState([]);

  const dataMenuFetch = async () => {
    try {
      const res = await GetMenuData();
      const resLanguage = await GetLanguage();
      setDataMenu(res.data);
      setLanguageData(resLanguage.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    dataMenuFetch();
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    if (window.innerWidth <= 1199) {
      setNavbarOpen(!navbarOpen);
      document.querySelector("body").classList.toggle("NavOpen");
    }
  };

  return (
    <>
      <header
        id="Header"
        className={`header left-0 top-0 z-40 max-lg:!fixed flex w-full items-center bg-transparent py-2 lg:px-[100px] max-lg:bg-white ${
          sticky
            ? "lg:!fixed lg:!z-[9999] lg:!bg-white lg:!bg-opacity-100 border-b-[1px] border-neutral-300 lg:backdrop-blur-sm lg:!transition lg:dark:!bg-[green] lg:dark:!bg-opacity-20"
            : "lg:absolute"
        } h-[${72}px] max-[450px]:h-[50px]`}
      >
        <div className="w-full px-[20px]">
          <div
            className={` relative -mx-4 flex items-center justify-between ${
              sticky ? "animate-fadeInUp" : "py-0"
            }`}
          >
            <div className="navbar-logo  flex   items-center justify-center gap-4">
              <Logo />

              <div className=" max-lg:hidden items-center justify-center gap-2 flex">
                <span className="text-[10px] lg:text-[16px] font-bold uppercase text-lime-500">
                  Information
                </span>
                <span className="text-[10px] lg:text-[16px] font-bold uppercase  text-pink-500">
                  Intelligent
                </span>
                <span className="text-[10px] lg:text-[16px] font-bold uppercase text-red-500">
                  Innovation
                </span>
              </div>
            </div>
            <div className="lg:hidden items-center justify-center gap-2 flex">
                <span className="text-[12px] lg:text-[16px] font-bold uppercase text-lime-500">
                  Information
                </span>
                <span className="text-[12px] lg:text-[16px] font-bold uppercase  text-pink-500">
                  Intelligent
                </span>
                <span className="text-[12px] lg:text-[16px] font-bold uppercase text-red-500">
                  Innovation
                </span>
              </div>
            <NavToggle sticky={sticky} navbarToggleHandler={navbarToggleHandler} navbarOpen={navbarOpen}/>
            <MainMenu
              sticky={sticky}
              dataMenu={dataMenu}
              navbarOpen={navbarOpen}
              navbarToggleHandler={navbarToggleHandler}
              languageData={languageData}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


