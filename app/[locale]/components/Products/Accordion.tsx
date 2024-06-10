import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Image from "next/image";
import { StaticImageData } from "next/image"
interface UsingType {
  gallery: StaticImageData[];
  title: string;
  imgContent: StaticImageData;
  content: string;
  ingredient: string[];
};
const Accordion = ({ using, img, descript, index }: { using?: UsingType | null, img: StaticImageData, descript: string, index: number }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  // const arrayAnswer = answer.split(', ');
  // console.log('arrayAnswer', arrayAnswer);

  return (
    <div className="w-full">
      <div onClick={() => setAccordionOpen(!accordionOpen)} className={'flex group rounded-full justify-between items-center ' + (index % 2 === 0 ? 'bg-slate-300 ' : 'bg-white ') + (using?.ingredient.length > 0 ? 'cursor-pointer' : '')}>
        <div className={"flex justify-start w-full py-1  pr-3 items-center gap-2 "}>
          <div className="mt-1.5">
            <Image alt={'alt'} src={img} className="min-w-[50px] sm:min-w-[70px] w-[30px] sm:w-[70px]" />
          </div>
          <div className="text-sm sm:text-base text-[#222222D1]">{descript}</div>
        </div>
        {using?.ingredient.length > 0 &&
          <div className='flex group-hover:scale-110 ease-linear duration-100 justify-center items-center px-3'>
            <div className='min-w-[78px] text-red-600'>
              xem thêm
            </div>
            <svg
              className="fill-red-600 shrink-0"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                  }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                  }`}
              />
            </svg>
          </div>
        }
      </div>
      {using?.title.length > 0 &&
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
          ${accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className='mt-2 mb-4 p-3w-full border-b-[4px] pb-8 ml-5 sm:ml-10 border-gray-400'>
              <div className='flex justify-start flex-wrap items-center text-lg sm:text-2xl text-black font-semibold gap-1'>
                Thư viện cửa
                <Icon icon="simple-line-icons:arrow-right" className='text-[10px] sm:text-[20px] font-bold' />
                {using?.title}
              </div>
              <div className=''>
                <div>
                  {using?.ingredient?.map((d, i) => (
                    <div key={i}>
                      <div className='text-sm text-[#222222D1] sm:text-base flex justify-start items-center font-semibold'>
                        <div><Icon className='text-[#29c591] text-[30px] sm:text-[40px]' icon="mdi:circle-small" /></div>
                        {d}
                      </div>

                    </div>
                  ))}
                </div>
                <div className='gap-4'>
                  {using?.gallery?.map((g, i) => (
                    <Image alt='' src={g} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Accordion