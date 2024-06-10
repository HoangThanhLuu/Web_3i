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
  return (
    <div className={' w-full flex justify-center items-start '}>
      <div className="flex relative">
    <Image alt="slide" src={"/images/smartwork/p6.png"} className="m-auto h-[280px] md:h-[680px]" width={4903} height={0}></Image>
    <div className="absolute z-40 top-[30%] left-[12.6%]   capitalize">
      <div className="mb-6">
        <h2 className={`  transition-transform pb-6 tracking-wide font-bold  text-white sm:text-xl  md:text-2xl  lg:text-4xl !leading-[45px]`}>
        Hệ thống quản lý giáo dục <br /> Smart education 
        </h2>
        <p className=' text-sm   tracking-wide  text-white'>Hệ thống quản lý giáo dục (Education Management System - EMS) <br /> là một hệ thống tổ chức thông tin và quản lý các hoạt động liên <br /> quan đến giáo dục. Nó cung cấp một cơ sở dữ liệu tổ chức để lưu trữ <br /> và quản lý thông tin về học sinh, giáo viên, nội dung học tập, <br /> sự kiện giáo dục, và các khía cạnh khác của quá trình <br /> giảng dạy và học tập</p>
       </div>
        <button className='rounded-full  bg-neutral-200 hover:bg-white shadow-sm shadow-white text-black py-2 hover:shadow-md hover:shadow-white  px-6 duration-200 ease-in text-lg font-bold tracking-wide '>Đăng kí ngay</button>
      </div>

      <div className='bg-[url("/images/smartwork/p5.png")] absolute top-[30%] right-[12.6%] bg-cover bg-no-repeat w-[480px] h-[390px] z-10'></div>
      <div className='bg-[url("/images/smartwork/p7.png")] absolute top-[60%] right-[14%] bg-cover bg-no-repeat w-[125px] h-[255px] z-30'></div>
      <div className='bg-[url("/images/smartwork/p8.png")] absolute top-[50%] right-[44%] bg-cover bg-no-repeat w-[230px] h-[325px] z-20'></div>
    </div>
    
  </div>

  )
}

export default Hero