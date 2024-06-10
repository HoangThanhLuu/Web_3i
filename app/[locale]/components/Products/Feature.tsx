import { title } from "process";
import React from "react";
import { FaCodeCompare } from "react-icons/fa6";
import { GiShieldEchoes } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { SiSpeakerdeck } from "react-icons/si";
import hieusuat from "../../../../public/images/products/hieusuat.jpeg";
import capnhat from "../../../../public/images/products/capnhat.jpeg";
import baomat from "../../../../public/images/products/baomat.jpeg";
import tietkiem from "../../../../public/images/products/tietkiem.jpeg";
import Image from "next/image";
const Feature = ({ pageName }: { pageName: string }) => {
  return (
    <div className="relative lg:h-[300px] ">
      <div className="left-0 top-0 z-[1000] flex h-full w-full flex-col gap-8 bg-[#e7f6e2] lg:absolute lg:-translate-y-[200px] lg:bg-transparent">
        <div className=" bottom-40 flex flex-col items-center justify-center text-base font-medium text-[#3b3663]">
          Tính năng
          <div className="text-xl font-semibold md:text-3xl">
            Ưu điểm và lợi ích của
          </div>
          <div className="text-xl font-semibold md:text-3xl">{pageName}</div>
        </div>
        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="bottom-0 flex h-[350px] flex-col items-center justify-start gap-4 rounded-md border-[2px] border-gray-300 bg-white text-lg font-bold text-[rgb(59,54,99)] shadow-lg hover:scale-105 md:mt-[40px]">
            {/* <FaCodeCompare size={30}/> */}
            <Image
              width="350"
              height="200"
              className="h-[280px] rounded-tl-md rounded-tr-md"
              src={hieusuat}
              alt="ppp"
            />
            <div>Tăng Hiệu Suất Quản Lý</div>
          </div>
          <div className="bottom-0 flex h-[350px] -translate-y-[50px] flex-col items-center justify-start gap-4 rounded-md border-[2px] border-gray-300 bg-white text-lg font-bold text-[rgb(59,54,99)] shadow-lg hover:scale-105 md:mt-[40px]">
            {/* <FaCodeCompare size={30}/> */}
            <Image
              width="350"
              height="200"
              className="h-[280px]  rounded-tl-md rounded-tr-md"
              src={baomat}
              alt="ppp"
            />

            <div>Bảo Mật Thông Tin</div>
          </div>
          <div className="bottom-0 flex h-[350px] flex-col items-center justify-start gap-4 rounded-md border-[2px] border-gray-300 bg-white text-lg font-bold text-[rgb(59,54,99)] shadow-lg hover:scale-105 md:mt-[40px]">
            {/* <FaCodeCompare size={30}/> */}
            <Image
              width="350"
              height="350"
              src={tietkiem}
              className="h-[280px] rounded-tl-md rounded-tr-md"
              alt="ppp"
            />

            <div>Tiết Kiệm Thời Gian và Chi Phí</div>
          </div>
          <div className="bottom-0 flex h-[350px] -translate-y-[50px] flex-col items-center justify-start gap-4 rounded-md border-[2px] border-gray-300 bg-white text-lg font-bold text-[rgb(59,54,99)] shadow-lg hover:scale-105 md:mt-[40px]">
            {/* <FaCodeCompare size={30}/> */}
            <Image
              width="350"
              height="350"
              src={capnhat}
              className="h-[280px] rounded-tl-md rounded-tr-md"
              alt="ppp"
            />

            <div>Đồng Bộ Hóa và Cập Nhật Liên Tục</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
