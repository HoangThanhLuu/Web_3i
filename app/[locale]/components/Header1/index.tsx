"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Header/Logo";
import { LuMenu } from "react-icons/lu";
import MenuProduct from "../Products/MenuProduct";
const Header = () => {   
  interface Data {
    name:string
   }
  const data:Data[] = [
    {
      name:'sản phẩm'
    },
    {
      name:'tổng quan'
    },
    {
      name:'tính năng'
    },
  ]
  return (
      <header id="Header" className="h-[100px] w-full flex justify-start items-center">
          <Logo/>
          <div className=" w-7 h-7 relative rounded-lg">
            <LuMenu className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color="white"/>
          </div>
          <MenuProduct data={data} />
      </header>
  );
};

export default Header;