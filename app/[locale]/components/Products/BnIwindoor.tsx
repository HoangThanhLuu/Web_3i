"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
import Accordion from "./Accordion";

// import nhuocdiem from '../../../public/images/nhuocdiem.png'
import nhuocdiem from "../../../../public/images/nhuocdiem.png";
import uudiem from "../../../../public/images/uudiem.png";
import Picture1 from "../../../../public/images/iwindoor/Picture1.png";
import Picture2 from "../../../../public/images/iwindoor/Picture2.png";
import Picture3 from "../../../../public/images/iwindoor/Picture3.png";
import Picture4 from "../../../../public/images/iwindoor/Picture4.png";
import Picture5 from "../../../../public/images/iwindoor/Picture5.jpg";
import Picture6 from "../../../../public/images/iwindoor/Picture6.png";
import Picture7 from "../../../../public/images/iwindoor/Picture7.png";
import Picture8 from "../../../../public/images/iwindoor/Picture8.png";
import Picture9 from "../../../../public/images/iwindoor/Picture9.png";
import Picture10 from "../../../../public/images/iwindoor/Picture10.png";
import Picture11 from "../../../../public/images/iwindoor/Picture11.png";
import Picture12 from "../../../../public/images/iwindoor/Picture12.png";
import Picture13 from "../../../../public/images/iwindoor/Picture13.png";
import Picture14 from "../../../../public/images/iwindoor/Picture14.png";
import Picture15 from "../../../../public/images/iwindoor/Picture15.png";
import Picture16 from "../../../../public/images/iwindoor/Picture16.png";
import Picture17 from "../../../../public/images/iwindoor/Picture17.png";
import Picture18 from "../../../../public/images/iwindoor/Picture18.png";
import Picture19 from "../../../../public/images/iwindoor/Picture19.png";
import Picture20 from "../../../../public/images/iwindoor/Picture20.png";
import Picture21 from "../../../../public/images/iwindoor/Picture21.png";
import SlideProduct from "./SlideProduct";
import Link from "next/link";
export interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null;
}
const BnIwindoor = ({
  metaImage,
  dataFile,
}: {
  metaImage: string;
  dataFile?: ItemDocumentProps[];
}) => {
  // const [benafitImages, setBenafitImage] = useState([]);
  // useEffect(() => {
  //   const data = dataFile?.filter((d, i) => {
  //     return d.code === "benafitImage";
  //   });
  //   setBenafitImage(data);
  // }, [dataFile]);
  const data = [
    {
      img: Picture6,
      descript: "Hiển thị các Thư viện cửa đã được thêm vào phần mềm",
    },
    {
      img: Picture7,
      descript:
        "Tại menu Thư viện của và phụ kiện người dùng chọn 1 loại cửa hoặc phụ kiện để tìm kiếm thư viện đã được thêm",
    },
    {
      img: Picture8,
      descript:
        "Tìm kiếm Thư viện cửa và phụ kiện theo Loại dự án, Loại khung, Mở Trái/Phải, Mở Trong/ Ngoài,...",
    },
    {
      img: Picture9,
      descript: "Thêm mới mã cửa, loại cửa",
      using: {
        gallery: [Picture13],
        title: "Thêm mới thư viện cửa",
        content: "",
        imgContent: null,
        ingredient: [
          "Mã cửa/Phụ kiện",
          "Đường dẫn ảnh: Hình ảnh minh họa của thư viện cửa",
          "Đường dẫn Cad",
        ],
      },
    },
    {
      img: Picture10,
      descript:
        "Khối dữ liệu thành phần là chức năng sẽ thêm thành phần của cửa vào loại cửa được chọn.",
      using: {
        gallery: [Picture15],
        title: "Thêm khối dữ liệu thành phần",
        imgContent: Picture14,
        content:
          "Khối dữ liệu thành phần là chức năng sẽ thêm thành phần của cửa vào loại cửa được chọn.",
        ingredient: [
          "Mã thành phần",
          "Tên thành phần",
          "Đường dẫn ảnh: Ảnh minh họa của Khối dữ liệu",
          "Chọn obj: Chọn hình vẽ thực tế của thành phần",
        ],
      },
    },
  ];
  const data1 = [
    {
      img: Picture17,
      descript: "Nhập dữ liệu thông số của cửa vào Khối dữ liệu thành phần",
    },
    {
      img: Picture18,
      descript: " Chỉnh sửa lại các thông số của cửa mới thêm",
    },
    { img: Picture19, descript: "Import dữ liệu file excel vào phần mềm" },
    { img: Picture20, descript: "Lưu lại dữ liệu cửa" },
  ];
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    // <div className='w-full '>
    <div className="mt-10 w-full">
      <div className="w-full bg-[#f9f9f9] py-8">
        <div className="container flex max-w-full flex-col items-start sm:items-center justify-between duration-100 ease-linear sm:max-w-screen-xl md_p2:flex-row lg:items-center gap-4 ">
          <div className=" flex flex-col">
            <div>
              <div className="font-inter font-sans text-sm font-light tracking-[0.1rem] text-[#29c591] sm:text-base">
                Benefits that Iwindoor
                <br />
                products bring
              </div>
              <div className="mt-2 h-[2px] w-[150px] bg-[#29c591]"></div>
              <div className="mt-2 text-2xl font-bold">
                Lợi ích mà sản phẩm
                <br />
                Iwindoor mang lại
              </div>
            </div>
            <div className="  ml-2 mt-[10px] flex flex-col gap-2 text-sm font-[14px] text-[#222222D1] sm:text-base lg:mt-[30px] lg:gap-3">
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Số hóa bản vẽ
              </div>
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Tiết kiệm thời gian thỏa thuận và thời gian thiết kế
              </div>
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Độ chính xác cao
              </div>
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Kế thừa bản vẽ từ thư viện cửa
              </div>
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Lưu thông tin khách hàng
              </div>
              <div className="border-l-[3px] border-[#29c591] bg-slate-200 p-2 text-sm font-semibold shadow-md sm:text-lg">
                Tiết kiệm nhân sự
              </div>
            </div>
          </div>
          <Image
            src={uudiem}
            width={900}
            height={900}
            alt="ksksk"
            className="z-[1000] mt-[20px] h-[250px] w-[420px] border-[1px] border-gray-100 duration-100 ease-linear  sm:h-[400px] sm:w-[600px] sm:min-w-[600px] "
          />
        </div>
      </div>
      <div className="w-full  bg-gray-200 py-8">
        <div className="container flex justify-center max-w-full sm:mt-[50px] sm:max-w-screen-xl ">
          <div className="flex w-fit flex-col items-start lg:items-start">
            <div>
              <div className="font-inter font-sans text-sm font-light tracking-[0.1rem] text-[#29c591] sm:text-base">
                Actual process when
                <div className="">Do not use iwindoo software</div>
              </div>
              <div className="mt-2 h-[2px] w-[150px] bg-[#29c591]"></div>
              <div className=" mt-2 text-2xl font-bold ">
                Quy trình thực tế khi
                <div className="">không sử dụng phần mềm iwindoor</div>
              </div>
            </div>
            <div className="mt-[20px]  flex flex-col items-center justify-start gap-2 sm:gap-8 md_p2:flex-row lg:items-start">
              <Image
                src={nhuocdiem}
                width={900}
                height={900}
                alt="ksksk"
                className="z-[1000] h-[250px] w-[420px] border-[1px] border-gray-100 duration-100 ease-linear sm:h-[400px] sm:w-[600px] sm:min-w-[600px] "
              />
              <div className="ml-2 mt-[10px] flex flex-col gap-2 text-sm font-[14px] text-[#222222D1] sm:text-base lg:mt-[30px] lg:gap-3">
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Không số hóa bản vẽ
                </div>
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Cần độ chính xác , tỉ mỉ
                </div>
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Mất nhiều thời gian thiết kế và thỏa thuận với Khách Hàng
                </div>
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Chỉnh sửa bản vẽ dễ xảy ra sai sót
                </div>
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Không lưu thông tin khách hàng
                </div>
                <div className="border-l-[3px] border-rose-400 bg-slate-50 p-2 text-sm font-semibold shadow-md sm:text-lg">
                  Không kế thừa bản vẽ
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full th-fl'>
          <Link href='#productPrice'>
            <button className='hover:bg-green-700 ease-linear group duration-100 px-8 mt-8 th-fl gap-3 py-2.5 text-sm  sm:text-lg font-light text-center rounded-md text-white bg-green-600'>
              Đăng kí trải nghiệm
              <Icon icon="pajamas:arrow-right" className='ease-linear duration-100 group-hover:translate-x-2' />
            </button>
          </Link>
        </div>
      </div>
      {/* cac chuc nang */}
      <div className="w-full  bg-[#f9f9f9] py-8">
        <div className="container flex max-w-full flex-col justify-start gap-10 sm:max-w-screen-xl sm:gap-20  md:flex-row">
          <div className=" flex max-h-[350px] flex-col justify-between">
            <div className="relative">
              <div>
                {" "}
                <Icon
                  icon="gg:square"
                  className="text-start text-[140px] text-yellow-500"
                />
              </div>
              <span className="absolute bottom-3 left-[50px] w-[250px] text-5xl font-[50]">
                Chức năng
              </span>
            </div>
            <div className="ml-8 mt-8 h-1 w-[200px] bg-gradient-to-r from-red-500 to-yellow-500"></div>
            <div className="ml-8 mt-8 max-w-[400px] text-sm text-[#22222D1] sm:text-xl">
              Giải pháp 3i : Phần mềm iwindoor có đủ các chức năng cần thiết cho
              việc thiết kế, kế thừa, hiệu quả trong việc thiết kế hệ thống cửa
            </div>
          </div>
          <div className="mt-[20px] flex  sm:mt-[40px]">
            <div className=" flex flex-col gap-10 sm:gap-20">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Picture1}
                  width={900}
                  height={900}
                  alt="ksksk"
                  className="h-[80px] w-[80px]"
                />
                <div className="text-xl font-semibold sm:text-3xl">
                  Thư viện cửa
                </div>
                <Link href="#thuviencua">
                  <div className="text-sm font-light text-red-500 duration-100 ease-linear hover:scale-110 sm:text-lg">
                    xem thêm
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Picture3}
                  width={900}
                  height={900}
                  alt="ksksk"
                  className="h-[80px] w-[80px]"
                />
                <div className="text-center text-xl font-semibold sm:text-3xl">
                  Quản lý lịch sử thiết kế cửa{" "}
                </div>
                <Link href="#quanly">
                  <div className="text-sm font-light text-red-500 duration-100 ease-linear hover:scale-110 sm:text-lg">
                    xem thêm
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Picture4}
                  width={900}
                  height={900}
                  alt="ksksk"
                  className="h-[80px] w-[80px]"
                />
                <div className="text-center text-xl font-semibold sm:text-3xl">
                  Quản lý in bản vẽ{" "}
                </div>
                <Link href="#quanly">
                  <div className="text-sm font-light text-red-500 duration-100 ease-linear hover:scale-110 sm:text-lg">
                    xem thêm
                  </div>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col gap-10  sm:gap-20">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Picture2}
                  width={900}
                  height={900}
                  alt="ksksk"
                  className="h-[80px] w-[80px]"
                />
                <div className="text-center text-xl font-semibold sm:text-3xl">
                  Xây dựng bản thiết kế cửa{" "}
                </div>
                <Link href="#thuviencua">
                  <div className="text-sm font-light text-red-500 duration-100 ease-linear hover:scale-110 sm:text-lg">
                    xem thêm
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Picture5}
                  width={900}
                  height={900}
                  alt="ksksk"
                  className="h-[80px] w-[80px]"
                />
                <div className="text-center text-xl font-semibold sm:text-3xl">
                  Quản lý lịch sử
                </div>
                <Link href="#quanly">
                  <div className="text-sm font-light text-red-500 duration-100 ease-linear hover:scale-110 sm:text-lg">
                    xem thêm
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chuc nang chinh */}
      <div className="w-full bg-gray-200 py-[100px]">
        <div className="container max-w-full sm:max-w-screen-xl">
          <div
            id="thuviencua"
            className=" flex max-h-[350px] flex-col justify-between"
          >
            <div className="relative">
              <div>
                {" "}
                <Icon
                  icon="gg:square"
                  className="text-start text-[140px] text-yellow-500"
                />
              </div>
              <span className="absolute bottom-3 left-[50px] text-5xl font-[50]">
                Chức năng Chính
              </span>
            </div>
            <div className="ml-8 mt-8 h-1 w-[200px] bg-gradient-to-r from-red-500 to-yellow-500"></div>

            <section className="ml-8 mt-8 text-4xl font-bold">
              Thư viện cửa
            </section>
          </div>
          {/* section 1 */}
          <div className="mt-[40px] flex flex-col items-start justify-center gap-4 lg:flex-row lg:gap-2">
            <div className="flex flex-col justify-center lg:w-1/2">
              {data?.map((d, i) => (
                <div key={i}>
                  <Accordion
                    descript={d.descript}
                    img={d.img}
                    using={d.using}
                    index={i}
                  />
                </div>
              ))}
              {/* <FAQ /> */}
            </div>
            <div className="lg:w-1/2">
              <Image alt={"alt"} src={Picture11} className="" />
            </div>
          </div>
          {/* section 2 */}
          <div className="flex max-h-[350px] flex-col justify-between">
            <div className="ml-8 mt-8 text-4xl font-bold">
              Xây dựng bản thiết kế cửa
            </div>
          </div>
          <div className="mt-[40px] flex flex-col items-start justify-center gap-4 lg:flex-row lg:gap-2">
            <div className="flex flex-col justify-center lg:w-1/2">
              {data1?.map((d, i) => (
                <div key={i}>
                  <Accordion descript={d.descript} img={d.img} index={i} />
                </div>
              ))}
              {/* <FAQ /> */}
            </div>
            <div className="lg:w-1/2">
              <Image alt={"alt"} src={Picture21} className="" />
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      {/* <section id="quanly" className=" bg-[#f9f9f9] ">
        <div className="mb-auto container group max-w-full sm:max-w-screen-xl md:h-[100%] pt-3 sm:pt-10 pb-3 sm:px-10">
          <div className=" flex max-h-[350px] flex-col justify-between">
            <div className="relative">
              <div>
                {" "}
                <Icon
                  icon="gg:square"
                  className="text-start text-[140px] text-yellow-500"
                />
              </div>
              <span className="absolute bottom-3 left-[50px] text-5xl font-[50]">
                Chức năng Quản Lý
              </span>
            </div>
            <div className="ml-8 mt-8 mb-8 h-1 w-[200px] bg-gradient-to-r from-red-500 to-yellow-500"></div>
          </div>
        </div>
      </section> */}
    </div>
    // </div>
  );
};

export default BnIwindoor;
