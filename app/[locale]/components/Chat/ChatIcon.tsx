"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Icon } from "@iconify/react";
import Chat from "./Chat";
import Link from "next/link";
import ChatMessger from "./ChatMessger";
import Image from "next/image";
import ChatFace from "./ChatFace";
import ShareIcon from "./ShareIcon";

const ChatIcon = ({ pageName }: { pageName: string }) => {
  const [openChat, setOpenchat] = useState<boolean>(false);
  const [openChatMess, setOpenchatMess] = useState<boolean>(false);
  const [openChatFace, setOpenchatFace] = useState<boolean>(false);
  const [height, setHeight] = useState<boolean>(false);

  const handleCLickOpen = (): void => {
    setOpenchat((prev) => !prev);
  };
  const handleCLickOpenMess = (): void => {
    setOpenchatMess((prev) => !prev);
    setOpenchat(false);
  };
  const handleCLickOpenFace = (): void => {
    setOpenchatFace((prev) => !prev);
    setOpenchat(false);
  };


  const [isTwoXl, setTwoXl] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1700 || window.innerWidth < 994) {
        setTwoXl(true)
      } else {
        setTwoXl(false)
      }
    };

    // Kích hoạt ngay lập tức khi component được render
    handleResize();

    // Lắng nghe sự kiện resize để cập nhật giá trị isMobile
    window.addEventListener('resize', handleResize);

    // Đảm bảo clear sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 
  const [supportClose, setsSpportClose] = useState(false);

  const userToggleHandler = () => {
    setsSpportClose(!supportClose);
  }

  const myElementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myElementRef.current && !myElementRef.current.contains(event.target)) {
        setsSpportClose(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>

      {!openChat && (
        <div className="flex md:w-full py-1 sm:py-0 items-start justify-center  bg-transparent lg:mt-[450px] lg:ml-52">
          <div className={" rounded-lg z-[1000] gap-0 flex justify-center items-center flex-col  "}>
            <div className="flex z-[1000] items-center justify-end px-4">
              <div ref={myElementRef}>
                <button
                  onClick={userToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="th-fl gap-0.5  lg:mr-[-3px] mr-0 lg:ml-0 ml-56 lg:mt-0 mt-36 cursor-pointer" 
                >
                  <Icon className="text-5xl" icon="ic:outline-support-agent" />

                  {isTwoXl && <div className="font-bold text-lg sm:text-xl hidden">Chat hỗ trợ</div>}
                  {!isTwoXl && <div className="font-bold text-lg sm:text-xl "></div>}
                  {/* {!isTwoXl && <div className="font-bold text-lg sm:text-xl ">Hỗ trợ</div>} */}
                </button>


                <div className={`2lg:min-w-[280px] absolute  lg:top-36  lg:flex-col lg:-right-32 -top-32 lg:p-[30px] lg:ml-0 ml-[60%] transition ease duration-300  rounded-md  2lg:static  2lg:bg-[transparent] bg-[transparent] 2lg:shadow-none shadow-none 2lg:p-0 2lg:flex ${supportClose ? "opacity-100" : "opacity-0 hidden"}`}>
                <div className="font-bold text-lg sm:text-xl block">Hỗ trợ</div>
                  {/* <div className={` max-h-[210px] flex-wrap lg:flex-nowrap  xs:min-w-min gap-2 lg:gap-1 xs:max-h-none flex lg:flex-col justify-center items-center ${userClose ? "opacity-100" : "opacity-0 hidden"}`}> */}
                  {/* whatsapp */}
                  {/* <div
                onClick={handleCLickOpenFace}
                className={
                  "th-fl  bottom-[80px] hover:scale-105 h-fit w-fit rounded-full    duration-100 ease-linear  "
                  // +(openIconChat ? "-translate-y-[20%]" : "-translate-y-0")
                }
              >
                <Icon
                  icon="uil:whatsapp-alt"
                  color="#47c554"
                  className=""
                  width={50}
                  height={50}
                />
              </div> */}

                  {/* telegram */}
                  {/* <div
                className={
                  " th-fl hover:scale-105 bottom-[80px] h-fit w-fit  rounded-full p-1  duration-100 ease-linear  "
                }
              >
                <a href="https://web.telegram.org/k/#777000">
                  <Icon icon="logos:telegram" color="blue" width={42} height={42} />
                </a>
              </div> */}

                  {/* skype */}
                  <div
                    className={
                      " th-fl  bottom-[80px] hover:scale-105 h-fit w-fit  rounded-full p-1  duration-100 ease-linear  "
                      // +(openIconChat ? "-translate-y-[60%]" : "-translate-y-0")
                    }
                  >
                    <a href="https://join.skype.com/invite/qzjdmqhAuVfe">
                      <Icon icon="logos:skype" color="white" width={38} height={42} />
                    </a>
                  </div>

                  {/* zalo */}
                  <div
                    className={
                      " th-fl bottom-[80px] hover:scale-105 h-fit w-fit  rounded-full p-1  duration-100 ease-linear  "
                      // +(openIconChat ? "-translate-y-[120%]" : "-translate-y-0")
                    }
                  >
                    <div className="rounded-full bg-[#0068ff] p-1">
                      <a href="https://chat.zalo.me/?utm_source=">
                        <Icon
                          icon="simple-icons:zalo"
                          color="white"
                          width={32}
                          height={34}
                        />
                      </a>
                    </div>
                  </div>

                  {/* instagram*/}
                  {/* <div
                className={
                  " th-fl bottom-[80px] hover:scale-105 h-fit w-fit  rounded-full p-1  duration-100 ease-linear  "
                  // +(openIconChat ? "-translate-y-[80%]" : "-translate-y-0")
                }
              >
                <a href="https://www.instagram.com/dangtruongdtm/">
                  <Icon
                    // className="w-[38px] h-[38px]"
                    icon="skill-icons:instagram"
                    color="white"
                    width={42}
                    height={42}
                  />
                </a>
              </div> */}

                  {/* messenger */}
                  <div
                    onClick={handleCLickOpenMess}
                    className={
                      " th-fl  bottom-[80px] hover:scale-105 h-fit w-fit  rounded-full p-1  duration-100 ease-linear  "
                      // +(openIconChat ? "-translate-y-[40%]" : "-translate-y-0")
                    }
                  >
                    <Icon icon="logos:messenger" color="white" width={40} height={42} />
                  </div>

                  {/* facebook */}
                  <div
                    onClick={handleCLickOpenFace}
                    className={
                      "th-fl  bottom-[80px] hover:scale-105 h-fit w-fit rounded-full  p-1  duration-100 ease-linear  "
                      // +(openIconChat ? "-translate-y-[20%]" : "-translate-y-0")
                    }
                  >
                    <Icon
                      icon="logos:facebook"
                      color="white"
                      className=""
                      width={40}
                      height={42}
                    />
                  </div>

                  {/* chat 3i */}
                  <div
                    onClick={handleCLickOpen}
                    className="hover:scale-105 first-line:shadow-2x th-fl h-12 w-12 rounded-full "
                  >
                    <Icon
                      icon="ic:baseline-message"
                      color="green"
                      width={44}
                      height={44}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <ThemeToggler /> */}
          </div>
          {/* <ShareIcon setTwoXl={setTwoXl} isTwoXl={isTwoXl} /> */}
          {/* </div> */}
        </div >
      )}
      {
        openChat && (
          <div className="flex flex-col">
            <Chat pageName={pageName} handleCLickOpen={handleCLickOpen} />
          </div>
        )
      }
      {
        openChatMess && (
          <div className="flex flex-col">
            <ChatMessger
              pageName={pageName}
              handleCLickOpenMess={handleCLickOpenMess}
            />
          </div>
        )
      }
      {
        openChatFace && (
          <div className="flex flex-col">
            <ChatFace
              pageName={pageName}
              handleCLickOpenFace={handleCLickOpenFace}
            />
          </div>
        )
      }
    </>
  );
};

export default ChatIcon;