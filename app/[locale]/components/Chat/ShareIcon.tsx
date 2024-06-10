
"use client"
import { Icon } from "@iconify/react";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  InstagramIcon
} from 'next-share'
const ShareIcon = ({ setTwoXl, isTwoXl }) => {
  const [openIconChat, setOpenIconChat] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setOpenIconChat(true);
  };
  const handleMouseLeave = () => {
    setOpenIconChat(false);
  };
  return (
    <>
      {/* nhỏ hơn 2xl */}
      {isTwoXl &&
        <div className="flex-col z-[1000] mt-4 lg:mt-10 flex justify-center items-center mb-2 lg:mb-0"
          onMouseLeave={handleMouseLeave} >
          <div onMouseEnter={handleMouseEnter} className="th-fl p-1 rounded-md gap-0.5">
            <Icon className="text-xl sm:text-2xl" icon="la:slideshare" />
            <div className="font-bold text-lg sm:text-xl">Chia sẻ</div>
          </div>
          <div className={`z-[100000000]  th-fl rounded-xl`}>
            <div className='rounded-lg gap-2 flex lg:flex-col  justify-center items-center'>
              <FacebookShareButton
                url={'https://www.3i.com.vn'}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
              >
                <FacebookIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
              </FacebookShareButton>

              {/* twitter */}
              <TwitterShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
              >
                <TwitterIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
              </TwitterShareButton>
              
              {/* whats app  */}
              <WhatsappShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
                separator=":: "
              >
                <WhatsappIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
              </WhatsappShareButton>

              {/* telegram */}
              <TelegramShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
              >
                <TelegramIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
              </TelegramShareButton>
            </div>
          </div>
        </div>}
        
      {/*  2xl */}
      {!isTwoXl && <div className=" flex-col z-[1000] flex justify-center items-start mb-2 lg:mb-0"
        onMouseLeave={handleMouseLeave} >
        <div onMouseEnter={handleMouseEnter} className="th-fl border-[2px] border-gray-400 p-1 rounded-md gap-0.5">
          <Icon className="text-[30px]" icon="la:slideshare" />
          <div className="font-bold text-xl">Share</div>
        </div>
        <div className={`z-[100000000] bg-gray-300 rounded-xl p-4 shadow-shadow-chat duration-200 left-1/2 -translate-x-1/2 ease-in ` + (openIconChat ? "absolute flex translate-y-[0.5rem] opacity-100" : "hidden translate-y-[2rem] opacity-0")}>
          <div className='rounded-lg gap-2 flex flex-wrap justify-center items-center'>
            <FacebookShareButton
              url={'https://www.3i.com.vn'}
              quote={'next-share is a social share buttons for your next React apps.'}
              hashtag={'#nextshare'}
            >
              <FacebookIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
            </FacebookShareButton>

            {/* twitter */}
            <TwitterShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
            >
              <TwitterIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
            </TwitterShareButton>

            {/* whats app  */}
            <WhatsappShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
              separator=":: "
            >
              <WhatsappIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
            </WhatsappShareButton>
            
            {/* telegram */}
            <TelegramShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
            >
              <TelegramIcon className="hover:scale-105 duration-100 ease-linear" size={44} round />
            </TelegramShareButton>
          </div>
        </div>
      </div>}
    </>

  )
}

export default ShareIcon