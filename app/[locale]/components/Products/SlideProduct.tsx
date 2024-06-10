"use client";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';

interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null;
}

const linkSlide = [
  {
    src: "https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-239517.jpg?ga=GA1.2.1333407797.1716630184&semt=ais_user",
    image: "/images/smartwork/p5.png"
  },
  {
    src: "https://img.freepik.com/premium-vector/data-connection-communication-network-information-security-abstract-vector_432516-3881.jpg",
    image: "/images/smartwork/p5.png"
  }
];

export default function SlideProduct({
  benafitImages,
  pageName
}: {
  benafitImages: ItemDocumentProps[],
  pageName: string
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveThumb(swiper.activeIndex);
  };

  return (
    <section id="projects" className="scroll-mt-28 w-screen px-[.2rem] pb-0 my-20">
      <div className='max-w-full 2xl:!pl-[8px] !pl-0 !pr-0 sm:!pr-4'>
        <Swiper
          speed={1000}
          slidesPerView={1}
          effect={'slide'}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          onSlideChange={handleSlideChange}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          scrollbar={false}
          freeMode={false}
          modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
          pagination={{
            type: 'bullets',
            clickable: true,
            renderBullet: (index, className) => `<span class="${className} inline-block !w-2 !h-2 sm:!w-6 sm:!h-6 bg-gray-500 mx-2"></span>`
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="group ease-linear !pb-1 sm:!pb-10 duration-100"
        >
          {benafitImages?.map((project, index) => {
            const slide = linkSlide[index];
            return slide ? (
              <SwiperSlide key={index} className="ease-linear duration-100 pb-[30px]">
                <div className={"luster w-full rounded-sm sm:rounded-xl bg-opacity-40 relative"}>
                  <Image
                    width={4000}
                    height={0}
                    className="w-full !h-[700px] border-[1px] border-gray-300 rounded-sm sm:rounded-xl"
                    src={slide.src}
                    alt={project.title}
                  />
                  <div
                    className="absolute top-[5%] right-[12.6%] bg-cover bg-no-repeat w-[750px] h-[630px] z-10"
                    style={{ backgroundImage: `url("${slide.image}")` }}
                  ></div>
                </div>
              </SwiperSlide>
            ) : null;
          })}
          <div className="swiper-button-prev after:text-xl after:text-white z-[1000] w-[60px] h-[60px] th-fl rounded-full absolute -left-2 bottom-3">
            <Icon icon="ei:arrow-left" className='hidden text-[180px] sm:block text-[#3c91eb]' />
          </div>
          <div className="swiper-button-next th-fl z-[1000] -right-2 bottom-3 after:text-xl after:bg-white w-[60px] h-[60px] rounded-full absolute">
            <Icon icon="ei:arrow-left" className='rotate-180 hidden text-[180px] sm:block text-[#3c91eb]' />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>

        <Swiper
          speed={1000}
          slidesPerView={5}
          effect={'cube'}
          loop={false}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={true}
          freeMode={true}
          modules={[FreeMode, Thumbs, Scrollbar]}
          className="group ease-linear duration-100"
        >
          {benafitImages?.map((project, index) => {
            const slide = linkSlide[index];
            return slide ? (
              <SwiperSlide key={index} className={"mt-2 sm:mt-4 mx-3 ease-linear duration-100 overflow-hidden pb-[30px]"}>
                <div
                  onClick={() => setActiveThumb(index)}
                  className={"luster w-full p-0.5 sm:p-1 rounded-sm sm:rounded-xl bg-[rgba(151,201,255,0.4)] bg-opacity-40 ease-linear duration-150 " + (index === activeThumb ? 'border-[2px] border-amber-950 scale-125 sm:scale-110' : '')}
                >
                  <Image
                    width={4000}
                    height={0}
                    className={"cursor-pointer w-full !h-[150px] rounded-sm sm:rounded-xl"}
                    src={slide.src}
                    alt={project.title}
                  />
                  <div
                    className='absolute top-[8%] right-[15%] bg-cover bg-no-repeat w-[160px] h-[130px] z-10'
                    style={{ backgroundImage: `url("${slide.image}")` }}
                  ></div>
                </div>
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </div>
    </section>
  );
}