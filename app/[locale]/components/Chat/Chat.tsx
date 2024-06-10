
import React, { useState } from "react";
import Image from "next/image";
import logo3i from "../../../../public/images/logo/logo3i.png";
import { Icon } from "@iconify/react";
interface ChatProps {
  handleCLickOpen: () => void;
  pageName: string;
}
const Chat: React.FC<ChatProps> = ({ handleCLickOpen, pageName }) => {
  const [startChat, setStartChat] = useState<boolean>(false);

  return (
    <>
      {!startChat && (
        <div className="fixed bottom-24 right-6 z-[1000] flex h-[400px] flex-col items-center justify-start rounded-lg bg-violet-600 shadow-md sm:w-[400px] md:w-[500px]">
          <div className="flex flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg p-10 text-center">
            <Image src={logo3i} width={30} height={30} alt="sss" />
            <div className="text-amber-500 text-lg font-medium">
              Bạn vui lòng điền vào biểu mẫu dưới đây để các nhân viên hỗ trợ
              tốt hơn{" "}
            </div>
          </div>
          <div className="z-[1000px] flex h-[280px] w-[96%] -translate-y-[20px] flex-col items-center justify-center gap-4 rounded-md border-[1px] border-green-400 bg-white p-4 shadow-xl">
            <input
              type="text"
              placeholder="*tên"
              className="h-[40px] w-[80%] rounded-sm border-[1px] border-gray-300  pl-4  outline-none"
            />
            <input
              type="text"
              placeholder="*số điện thoại"
              className="h-[40px] w-[80%] rounded-sm border-[1px] border-gray-300  pl-4  outline-none"
            />
            <button
              onClick={() => setStartChat(true)}
              className="rounded-lg bg-violet-700 px-10 py-2  text-white hover:scale-105"
            >
              {" "}
              Bắt đầu cuộc trò chuyện{" "}
            </button>
          </div>
        </div>
      )}
      {startChat && (
        <div className="fixed bottom-24 right-6 z-[1000] flex h-[400px] w-[500px] flex-col items-center justify-around rounded-lg border-[1px] border-gray-200 bg-gray-100 shadow-md">
          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-tl-lg rounded-tr-lg border-[1px] border-gray-200 bg-violet-600 p-4 text-center">
            <div className=" rounded-full border-[1px] border-gray-300 bg-gray-50 p-6">
              <Image
                src={logo3i}
                className=""
                width={20}
                height={20}
                alt="sss"
              />
            </div>
            <div className="text-lg font-semibold  text-white">
              đội ngũ support 3i
            </div>
          </div>
          <div className="h-[250px] w-full">
            <div className="mx-2 w-fit text-start ">
              <div className="th-bd rounded-lg bg-gray-300 px-4 py-2 mt-1 text-start">
                {" "}
                khách hàng đang quan tâm đến sản phẩm {pageName}{" "}
              </div>
            </div>
          </div>
          <form className=" flex min-h-[50px] w-full items-center justify-center gap-2 px-2">
            <Icon
              icon="material-symbols:image"
              className="h-10 w-10"
              color="#7c3aed"
            />
            <div className="flex h-[90%] w-full items-center justify-center rounded-full  border-[1px] border-gray-300 bg-[#f5f5f5] pl-4">
              <input
                placeholder="enter..."
                type="text"
                className="h-full w-full bg-[#f5f5f5] outline-none"
              />
              <Icon icon="mdi:emoticon" className="h-10 w-10" color="#7c3aed" />
            </div>
            <button>
              <Icon
                icon="material-symbols:send"
                className="h-10 w-10"
                color="#7c3aed"
              />
            </button>
          </form>
        </div>
      )}
      {/* <div
        onClick={handleCLickOpen}
        className="th-fl  fixed bottom-8 right-8 z-[1000] h-12 w-12 rounded-full bg-violet-600 shadow-2xl "
      >
        <Icon icon="iconoir:xmark" color="white" width={30} height={30} />
      </div> */}
      <div onClick={handleCLickOpen} className='w-12  fixed z-[1000] top-[100px] bottom-8 right-5 h-12  rounded-full th-fl cursor-pointer'>
        <Icon icon="iconoir:xmark" color='white' width={30} height={30} />
      </div>
    </>
  );
};

export default Chat;
