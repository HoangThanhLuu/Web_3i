"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import UnderBannerHome from "../UnderBannerHome";

interface IProps {
  urlImage: string;
}
const SliderElement = (props: IProps) => {
  const { urlImage } = props;
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 1000);
  },[]);

console.log("check animation",animation);

  return (
    <div className="relative flex">
      <Image
        alt="slide"
        src={`${urlImage}`}
        className="m-auto h-[50vh] md:h-full object-cover"
        width={4903}
        height={0}
      ></Image>
      <div className="absolute left-32 max-md:left-1/2 max-md:top-[150px] max-md:-translate-x-1/2 md:left-[184px] top-[20%] z-10   capitalize">
        <div className="flex flex-col lg:pl-4 lg:pr-8  text-gray-200 shadow-lg md:gap-6 md:py-4 ">
            <p className="max-lg:hidden pb-2 md:pb-4 text-lg tracking-wide text-white">
              Tạo đột phá với
            </p>
            <h1
              className={` ${
                animation
                  ? " tranform translate-y-0 opacity-100 duration-500"
                  : "tranform translate-y-full  opacity-0 duration-500  "
              }  max-lg:text-center pb-6 font-bold uppercase tracking-wide text-white transition-transform text-xl sm:text-3xl  md:text-4xl  lg:text-5xl`}
            >
              Chuyển đổi số
            </h1>
            <p
              className={`  max-lg:text-xs max-lg:text-justify text-base  ${
                animation
                  ? " transform translate-x-0 opacity-100 duration-500"
                  : "transform translate-x-full opacity-0 duration-500"
              } tracking-wide  text-white`}
            >
              Chúng tôi sử dụng các công nghệ kỹ thuật số để <br className="max-lg:hidden"/> tạo ra những
              bước tiến nhảy vọt trong việc cải thiện <br className="max-lg:hidden"/> năng suất lao động,
              tốc độ và hiệu quả.
            </p>
        </div>
      </div>
    <div className="absolute bottom-[10%]  lg:left-[13%] right-0 w-full">
    <UnderBannerHome />
    </div>

    </div>
  );
};

export default SliderElement;
