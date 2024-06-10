"use client"
import React, { useEffect, useState } from 'react'
import Modal from '@/app/[locale]/components/Modals/Modal'
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { GetListCmsItem } from '@/app/[locale]/apis/GetDataLogin';
import { BsFiletypeDoc, BsFilePpt } from "react-icons/bs";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import DocumentFile from '@/app/[locale]/components/Products/DocumentFile';
const Page = ({ searchParams }) => {
  const search = useSearchParams()
  const objectData = search.get('data')
  const [listCmsItem, setListCmsItem] = useState<any>({});
  const cx = classNames.bind(style);
  console.log('listCmsItem', listCmsItem);

  useEffect(() => {
    const fetchData = async () => {
      setListCmsItem(await GetListCmsItem(objectData));
    };
    fetchData();
  }, [objectData]);

  const attachments = (
    <ul className="px-0 py-[15px]">
      {listCmsItem?.data?.Object[0]?.attachments.map((file) => (
        <li key={file.id} className="inline mr-[10px] pr-[10px] border-r-[1px] border-[#71bc42] last:border-r-0">
          <DocumentFile type={file.file_name} icon={BsFiletypeDoc} label={file.file_name} link={`${process.env.BACKEND_UR}${file.file_url}`} />
        </li>
      ))}
    </ul>
  )
  const bodyReactElement: React.ReactElement = <div dangerouslySetInnerHTML={{ __html: listCmsItem?.data?.Object[0]?.full_text }} />;
  const bodyContent = (<div className="max-w-[300px]">{bodyReactElement}</div>)
  return (
    <div
      className={`transition-all duration-300 ease-in w-full h-full md:animate-fadeInDown rounded-[10px]
    `}>
      <div className="container max-w-full sm:max-w-screen-xl translate w-full h-full lg:h-auto md:h-auto border-0 shadow-lg relative flex flex-col bg-white outline-none focus:outline-none md:max-h-[95vh] overflow-y-auto overflow-x-hidden">
        <div className="flex items-center p-6 justify-center border-b-[1px] border-b-[#f5f5f5]">
          <h2 className="text-lg font-medium text-[24px]">{`Chi tiết về ${listCmsItem?.data?.Object[0]?.title}`}</h2>
        </div>
        <div className={cx('relative', 'p-6', 'flex-auto', cx('abc'))}>{bodyContent}</div>
        {attachments}
        {/* {footer} */}
      </div>
    </div>
  )
}

export default Page