"use client";
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import dichvu2 from '../../../../public/images/services/dichvu2.png'
import dichvu3 from '../../../../public/images/services/dichvu3.png'
import dichvu4 from '../../../../public/images/services/dichvu4.png'
import dichvu5 from '../../../../public/images/services/dichvu5.png'
import dichvu6 from '../../../../public/images/services/dichvu6.png'
import dichvu7 from '../../../../public/images/services/dichvu7.png'
import dichvu8 from '../../../../public/images/services/dichvu8.png'
import dichvu from '../../../../public/images/services/dichvu.jpg'
import dichvu9 from '../../../../public/images/services/dichvu9.png'
import Image from 'next/image'
import { Swiper, SwiperSlide, } from "swiper/react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cube';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCube, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import shadows from '@mui/material/styles/shadows';
const Hero = ({ serviceItem }) => {
  const arrImg = [dichvu7, dichvu3, dichvu4, dichvu5, dichvu6, dichvu, dichvu8, dichvu9]
  return (
    <div className='w-full'>

      <Swiper
        speed={1000}
        slidesPerView={1}
        effect={'cube'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        cubeEffect={{ shadow: false }}
        scrollbar={false}
        freeMode={false}
        modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCube, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
        pagination={{
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} inline-block !w-2 !h-2 sm:!w-2 sm:!h-2 bg-gray-500 mx-2"></span>`
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // navigation={false}
        className=" group ease-linear !pb-1 sm:!pb-10  duration-100"
      >
        {arrImg?.map((project, index) => (
          <SwiperSlide key={index} className="ease-linear duration-100 ">
            <div className={"luster w-full  bg-opacity-40"} >
              <Image width={4000} height={0} className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-full w-full" src={project} alt='ooo' />
            </div>
          </SwiperSlide>
        ))
        }
        {/* <div
          className="
          swiper-button-prev 
          after:text-xl after:text-white z-[1000]
          w-[60px] h-[60px] th-fl rounded-full absolute  -left-2 bottom-3"
        >
          <Icon icon="ei:arrow-left" className='hidden text-[180px] sm:block text-[#3c91eb] ' />
        </div>
        <div
          className="swiper-button-next th-fl z-[1000] -right-2 bottom-3
           after:text-xl after:bg-white w-[60px] h-[60px] rounded-full 
           absolute   "
        >
          <Icon icon="ei:arrow-left" className='rotate-180 hidden text-[180px] sm:block text-[#3c91eb] ' />
        </div> */}
        <div className="swiper-pagination">

        </div>

      </Swiper >
      {/* <div className='container py-5 max-w-full sm:max-w-screen-xl'>
        <div className='flex justify-center items-center flex-col'>
          <div className='text-[#7aa127] text-xl font-semibold'>{serviceItem.title}</div>
          <div>{serviceItem.short_content}</div>
        </div>
      </div > */}
    </div >
  )
}

export default Hero