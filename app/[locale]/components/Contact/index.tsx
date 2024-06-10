"use client"
import ChatIcon from "../Chat/ChatIcon";
import ShareIcon from "../Chat/ShareIcon";
import NewsLatterBox from "./NewsLatterBox";
import { useEffect, useRef } from "react";
const Contact = () => {


  return (
    <section
      id="contact"
      className="pb-[100px] w-full overflow-hidden "
    >
      <div className="container max-w-full sm:max-w-screen-xl flex flex-col xs:flex-row items-start justify-between xs:gap-4 lg:gap-0">
        <div className=" sm:px-4 xl:px-28">
          <NewsLatterBox />
        </div>
        {/* <div id="chat" className=" relative xs:w-[140px] z-[98] ease-linear duration-100 flex flex-col items-start">
          <ChatIcon pageName="" />
          <ShareIcon />
        </div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;
