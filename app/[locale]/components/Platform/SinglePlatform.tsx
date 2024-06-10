"use client";
import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SinglePlatform = ({ feature, href }: any) => {
  const router = useRouter();

  return (
    // <Link href={`${href}`} >
    <div className="h-[450px] w-full ">
      <div
        className="wow fadeInUp bong  group flex h-[90%] w-full flex-col rounded-lg bg-white p-[20px] duration-150 ease-in hover:bg-green-400 "
        data-wow-delay=".15s"
      >
        <div className="h-150 mb-10 flex w-auto items-center justify-center rounded-md bg-opacity-10 text-primary">
          <Image
            alt=""
            src={feature.img}
            className="h-[150px] w-auto md:w-72 xl:w-48"
          />
        </div>
        <h2 className="mb-5 text-center text-2xl font-bold  text-[#002968] dark:text-white">
          {feature.title}
        </h2>
        <p
          className={`text-center text-lg font-light leading-[1.6rem]  text-[#002968] dark:text-white `}
        >
          {feature.intro}
        </p>
        <div className=" mt-auto">
          <div className=" flex items-center justify-center gap-2 ">
            <Link
              href={href}
              className=" group/detail relative translate-x-[-10rem] transform opacity-0 duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
            >
              <div className="flex  items-center justify-center gap-2 rounded-full px-4 py-2  ring-1 ring-blue-500 duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 hover:ring-2 hover:ring-blue-500">
                <span className="text-sm font-normal uppercase text-blue-500 duration-300 ease-in-out group-hover/detail:text-blue-700">
                  Chi tiết
                </span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4  stroke-blue-500 duration-200  ease-in-out  group-hover/detail:stroke-blue-700 dark:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href={"/signup"}
              className=" relative translate-x-[-4rem] transform duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
            >
              <div className="flex   items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-2 ring-1   ring-blue-500 duration-300   ease-in-out hover:bg-blue-400  hover:shadow-sm hover:shadow-blue-400 hover:ring-blue-400">
                <span className=" text-sm font-normal uppercase text-white ">
                  Đăng kí
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default SinglePlatform;
