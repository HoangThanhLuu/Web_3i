import React, { useState } from 'react'
import Image from 'next/image'
import logo3i from '../../../../public/images/logo/logo3i.png'
import { Icon } from '@iconify/react';
interface ChatProps {
  handleCLickOpenFace: () => void;
  pageName: string
}
const ChatFace: React.FC<ChatProps> = ({ handleCLickOpenFace, pageName }) => {
  const [startChat, setStartChat] = useState<boolean>(false)

  return (
    <>
      < div className='border-[1px] px-6 py-8  border-gray-200 w-[95%] xs:w-[390px] h-[370px] flex flex-col justify-between items-center bg-white z-[1000] fixed bottom-24 right-2.5 xs:right-6  rounded-lg shadow-md'>
        {/* head */}
        <div className='flex justify-between w-full pr-8'>
          <Image src={logo3i} width={30} height={30} alt="sss" />
          <Icon icon="logos:facebook" className='text-[35px]' />

        </div>
        {/* message */}
        <div className="flex flex-col gap-8">
          <div className="text-3xl font-semibold">Chat with homepage support 3i</div>
          <div className="text-base">Chào mừng anh/chị đã truy cập đến website của 3i giải pháp công nghệ thông minh !
          </div>
        </div>
        {/* button */}
        <a href='https://www.facebook.com/profile.php?id=100068753502197' className="px-20 py-3 rounded-lg text-base font-semibold text-white bg-[#0a7cff] ">
          Đi đến Homepage 3i
        </a>
      </div >
      {/* <div onClick={handleCLickOpenFace} className='w-12  fixed z-[1000] bottom-8 right-8 h-12 bg-[#0a7cff] shadow-2xl rounded-full th-fl '>
        <Icon icon="iconoir:xmark" color='white' width={30} height={30} />
      </div> */}
      <div onClick={handleCLickOpenFace} className='w-12  fixed z-[1000] top-[130px] bottom-8 right-5 h-12  rounded-full th-fl cursor-pointer'>
        <Icon icon="iconoir:xmark" color='black' width={30} height={30} />
      </div>
    </>
  )
}

export default ChatFace