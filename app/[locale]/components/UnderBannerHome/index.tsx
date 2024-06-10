import React from "react";
import LittleFeature from "../Common/LittleFeature";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { IDataLittleFeature } from "@/types/feature";

function UnderBannerHome() {
  const data: IDataLittleFeature[] = [
    {
      icon: <BiSolidMessageSquareEdit fill={"#fff"} size={15} />,
      title: "Đăng kí",
      colorBg: "bg-blue-600",
      shadownColor: "shadow-blue-200",
      textHover: "group-hover:text-blue-600",
    },
    {
      icon: <IoNewspaper fill={"#fff"} size={15} />,
      title: "Tin tức",
      colorBg: "bg-orange-500",
      shadownColor: "shadow-orange-200",
      textHover: "group-hover:text-orange-500",
    },
    {
      icon: <FaPhoneVolume fill={"#fff"} size={15} />,
      title: "Hỗ trợ",
      colorBg: "bg-green-500",
      shadownColor: "shadow-green-200",
      textHover: "group-hover:text-green-500",
    },
  ];
  return (
    <section className="button w-full ">
      
        <LittleFeature data={data} />
      
    </section>
  );
}

export default UnderBannerHome;
