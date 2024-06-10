



"use client";
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
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
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import { FreeMode, Autoplay, Scrollbar, EffectCards, EffectCreative, EffectCube, Pagination, Navigation, EffectCoverflow, EffectFade, A11y } from "swiper/modules";
interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
export default function SlideHero({
  slideHero
}: {
  slideHero: ItemDocumentProps[]
}) {

  return (
    <section
      id="projects" className="w-full lg:w-[50%] lg:pb-10 fadeInUp hover:cursor-pointer">
      <Swiper
        speed={2000}
        slidesPerView={1}
        effect={'coverflow'}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        scrollbar={true}
        freeMode={false}
        modules={[FreeMode, Autoplay, A11y, EffectFade, EffectCreative, EffectCube, EffectCards, EffectCoverflow, Pagination, Scrollbar, Navigation]}
        pagination={{
          el: '.swiper-pagination', dynamicBullets: false, clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} bg-gray-500 !h-6 !w-6 !mr-2"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="container max-w-full sm:max-w-screen-xl group ease-linear !pb-6 duration-100"
      >
        {slideHero?.map((project, index) => (
          <SwiperSlide key={index} className="   ease-linear duration-100 rounded-xl">
            <div className={"luster w-full p-0.5 rounded-xl  bg-[rgba(151,201,255,0.4)] bg-opacity-40"} >
              <Image width={0} height={0} className="w-full rounded-xl" src={`${process.env.BACKEND_URL}${project.value}`} alt={project.title} />
            </div>
          </SwiperSlide>
        ))
        }
      </Swiper >

    </section >
  );
}

