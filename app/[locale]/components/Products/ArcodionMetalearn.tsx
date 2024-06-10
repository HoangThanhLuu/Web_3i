import React, { useState } from 'react'
import Image from 'next/image';
import { number } from 'yup';
const ArcodionMetalearn = ({ setOpen, isMobile, data2, d, index, setCurrentIndex, currentIndex }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(null);
  const handleCurrentIndex = () => {
    // setAccordionOpen(!accordionOpen)
    setCurrentIndex(index)
  }
  console.log('currentIndex', currentIndex, index);

  return (
    <div key={index} className="w-full">
      <div onClick={handleCurrentIndex} className={'flex cursor-pointer group rounded-full justify-between items-center'}>
        <div className='flex justify-start gap-4 items-center'>
          <svg
            className="fill-green-400 shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${(currentIndex === index) && "!rotate-180"
                }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${(currentIndex === index) && "!rotate-180"
                }`}
            />
          </svg>
          <div className='text-xl font-bold'>{d.title}</div>
        </div>
        <button onClick={() => setOpen(true)} className=' min-w-[120px] px-6 py-3 hover:bg-green-500 bg-green-50 hover:text-white ease-linear duration-100 text-xs text-green-800 rounded-md'>Watch video</button>

      </div>
      <div className='w-full min-h-[2px] bg-green-500 mb-8 mt-1'></div>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
      ${(currentIndex === index)
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className=" sm:ml-5 text-[#222222d1] overflow-hidden mb-3">
          <div>
            <div className="text-base sm:text-xl text-black font-bold">
              1. Khái niệm
            </div>
            <div className='textt-sm sm:text-lg ml-4'>{d.descript}</div>
          </div>
          <div className="flex ease-linear duration-200 flex-col gap-3 justify-center">
            <div className="text-base sm:text-xl text-black font-bold">
              2. Chức năng {d.title}
            </div>
            <div className='ml-4 flex flex-col justify-center gap-2 sm:gap-4'>
              {d.ingredient?.map((a, i) => (
                <div key={i} className={' flex w-full group  justify-between items-center '}>
                  <div className={"flex justify-start w-full py-1  pr-3 items-center gap-2 "}>
                    <div className="mt-1.5">
                      <Image alt={'alt'} src={a.img} className="min-w-[50px] sm:min-w-[50px] w-[50px] sm:w-[50px]" />
                    </div>
                    <div className="text-sm sm:text-lg font-semibold text-[#222222D1]">{a.title}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* <FAQ /> */}
          </div>
          {isMobile && <div className='flex w-full md:w-1/2'>
            <Image src={data2[currentIndex].img[0]} alt="video image" className='rounded-2xl w-1/2 mr-2' width={2000} height={2000} />
            <Image src={data2[currentIndex].img[1]} alt="video image" className='rounded-2xl w-1/2' width={2000} height={2000} />
          </div>}
        </div>
      </div>

    </div>
  )
}

export default ArcodionMetalearn