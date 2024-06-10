"use client";
import { Icon } from '@iconify/react';
import React from "react";
import Link from "next/link";
import { BsFiletypeDocx, BsFilePpt, BsFileEarmarkExcel } from "react-icons/bs";
import { ItemDocumentProps } from "./Document";
interface DocumentItemProps {
  file: ItemDocumentProps
}

const DocumentItem: React.FC<DocumentItemProps> = ({ file }) => {
  return (

    <>
      {(file.code === "File" || file.code === "HDSD_IWINDOOR" || file.code === "KHI_001" || file.code === 'HDSD_BarTender_001') &&
        <Link href={`${process.env.BACKEND_URL}${file.value}`} className="">
          <li className={`sm:ml-1 hover:scale-[1.03] text-sm xl:text-base 5xl:text-lg font-medium text-[#000000c7] mt-2 sm:mt-0 ease-linear duration-100 p-2 xs:px-4 w-fullcursor-pointer flex justify-center items-center`}>
            <span className="inline-block mr-[7px] align-middle">
              {file.type === "CMA_TYPE20211029143540" ? <Icon fontSize={25} color='blue' icon="tabler:file-type-docx" /> : ''}
              {file.type === "CMA_TYPE20211103150450" ? <Icon icon="teenyicons:ppt-solid" fontSize={25} color='red' /> : ""}
              {file.type === "CMA_TYPE20211029143551" ? <Icon fontSize={25} color='green' icon="lucide:file-x" /> : ""}
            </span>
            <span className="align-middle  mx-1 ">{file.title}
              <span className="inline-block min-w-[77px] mr-[7px]">
                {file.type === "CMA_TYPE20211029143540" ? '(File Word)' : ''}
                {file.type === "CMA_TYPE20211103150450" ? '(File Powerpoint)' : ""}
                {file.type === "CMA_TYPE20211029143551" ? '(File Excel)' : ""}
              </span>
            </span>
          </li>
        </Link>
      }
    </>
  );
};

export default DocumentItem;
