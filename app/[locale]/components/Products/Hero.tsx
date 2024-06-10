"use client"
import React, { useEffect, useState } from 'react'
import imgHeroProduct from '../../../../public/images/products/abc.jpeg'
import dsds from '../../../../public/images/products/vtcetdhdn.jpg'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import SectionTitle from '../Common/SectionTitle'
import Link from 'next/link'
import p1 from "../../../../public/images/smartwork/p1.png";
import p2 from "../../../../public/images/smartwork/p2.png";
import p3 from "../../../../public/images/smartwork/p3.png";
import FormRegist from '../Contact/FormRegist'
import SlideHero from './SlideHero'
import ChatIcon from '../Chat/ChatIcon'
import ShareIcon from '../Chat/ShareIcon'
import SliderElement from '../HomePageSlide/SliderElement'
export interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
const Hero = (
  {
    fontTitle,
    pageName,
    metaImage,
    description,
    slideHero
  }: {
    fontTitle: string,
    pageName: string,
    metaImage: string,
    description: string,
    slideHero: ItemDocumentProps[]
  }) => {
    console.log(fontTitle, pageName, description, slideHero);
    
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [open]);


  const [isFixed, setIsFixed] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerPosition = footer.offsetTop;
      if (window.innerWidth > 1200) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
      // Kiểm tra nếu scroll đến vị trí phía trên của footer
      if (window.pageYOffset >= footerPosition - window.innerHeight) {
        // Hủy bỏ position: fixed
        setIsFixed(false);
      } else {
        // Giữ nguyên position: fixed
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup sự kiện khi component bị unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // return <div className={' w-full flex justify-center items-start '}>
  //   <div
  //     className="flex relative"
  //     style={{ backgroundColor: '#00000036' }}
  //   >

  //     <div className="absolute z-40 top-[30%] left-[12.6%] capitalize">
  //       <div className="mb-6">
  //         <h2 className={`  transition-transform pb-6 tracking-wide font-bold  text-white sm:text-xl  md:text-2xl  lg:text-4xl !leading-[45px]`}>
  //         Hệ thống quản lý giáo dục <br /> Smart education 
  //         </h2>
  //         <p className=' text-sm   tracking-wide  text-white'>Hệ thống quản lý giáo dục (Education Management System - EMS) <br /> là một hệ thống tổ chức thông tin và quản lý các hoạt động liên <br /> quan đến giáo dục. Nó cung cấp một cơ sở dữ liệu tổ chức để lưu trữ <br /> và quản lý thông tin về học sinh, giáo viên, nội dung học tập, <br /> sự kiện giáo dục, và các khía cạnh khác của quá trình <br /> giảng dạy và học tập</p>
  //      </div>
  //     </div>

  //   </div>
  
  // </div>

  return <div className='relative mt-[72px] h-[400px] flex justify-center items-center text-white'>
    <div className="absolute bg-[url(/images/smartwork/p6.png)] m-auto left-0 top-0 w-[100%] h-[100%] z-[-1]"></div>
    <div className='bg-[url("/images/smartwork/p5.png")] absolute top-[30px] right-[12%] bg-cover bg-no-repeat w-[480px] h-[390px] z-[-1]'></div>
    <div className='bg-[url("/images/smartwork/p7.png")] absolute top-[60px] right-[14%] bg-cover bg-no-repeat w-[125px] h-[255px] z-[-1]'></div>
    <div className='bg-[url("/images/smartwork/p8.png")] absolute top-[50px] right-[44%] bg-cover bg-no-repeat w-[230px] h-[325px] z-[-1]'></div>

    <div
      className="p-[1rem] mt-4 bg-[#00000064] rounded mx-2 "
      style={{
        backdropFilter: 'blur(4px)',
        boxShadow: '0 8px 1rem #00000032',
        textAlign: 'center',
        maxWidth: '100%',
        width: '666px',
      }}
    >
      <h1>Hệ thống quản lý giáo dục</h1>
      <h1>Smart education</h1>
      <br />
      <p>
        Hệ thống quản lý giáo dục (Education Management System - EMS)
        là một hệ thống tổ chức thông tin và quản lý các hoạt động liên
        quan đến giáo dục. Nó cung cấp một cơ sở dữ liệu tổ chức để lưu trữ
        và quản lý thông tin về học sinh, giáo viên, nội dung học tập,
        sự kiện giáo dục, và các khía cạnh khác của quá trình
        giảng dạy và học tập
      </p>
      <br />

      <button className='rounded-full bg-teal-500 hover:bg-teal-300 shadow-sm text-black py-2 hover:shadow-md  px-6 duration-200 ease-in text-lg font-bold tracking-wide '>
        Đăng kí ngay
      </button>
    </div>
  </div>
}

export default Hero