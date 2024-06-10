import React, { useState } from 'react'
import { Harm } from "@/public/Data/data";
import { Icon } from '@iconify/react';
import { Products } from "@/types/products";
import SectionTitle from '../Common/SectionTitle';
const ProductPrices = ({ pageName, fontTitle, dataProduct }: { dataProduct: Products, pageName: string, fontTitle: string }) => {
  const [curentPackage, setCurrentPackage] = useState("free")
  const [accordionOpen, setAccordionOpen] = useState(true);
  return (
    <section id='productPrice' className=' w-full mt-4'>
      <div className=' container max-w-full sm:max-w-screen-xl'>


        <div className="w-full">
          <div className={'  mr-2 flex group gap-1.5 justify-start cursor-pointer items-center '}>
            {/* <Icon className={"text-[35px] sm:text-[45px] ease-linear duration-150 text-amber-950 "} icon="fa6-solid:coins" /> */}
            <div className={` font-bold text-xl sm:text-2xl`}>Bảng Giá Sản Phẩm</div>
            {/* <Icon className={"text-[10px] sm:text-[16px] ease-linear duration-150 mt-1 text-amber-950 " + (accordionOpen ? 'rotate-90' : '')} icon="mdi:triangle" rotate={1} /> */}

          </div>
          <div
            className={`grid overflow-hidden grid-rows-[1fr] opacity-100 transition-all duration-300 ease-in-out text-slate-600 text-sm 
            ${accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden flex justify-start">
              <div className="py-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
                {dataProduct?.package?.map((d, i) => (
                  <div key={i} className="sm:mr-8 2xl:max-w-[358px] flex flex-col justify-start bg-white items-center rounded-2xl shadow-lg border-[1px] border-gray-300 " >
                    <div className="w-full  px-2 my-8">
                      <div className="th-fl mb-2 w-full rounded-lg bg-green-700 text-white px-2 py-6 text-xl font-bold">
                        {d.title}
                      </div>
                      <br />
                    </div>
                    <div className="">
                      <div className="th-fl flex-col">
                        <span style={{ fontWeight: "40px" }}>
                          Giá khi mua theo combo
                        </span>
                        <div id="text1">
                          <h2 className="pt-5 text-4xl font-semibold leading-loose text-orange">
                            {d.price} đ
                          </h2>
                        </div>
                        <div className='py-1'>
                          <span className="text-body-color">/user/tháng</span>
                        </div>
                      </div>
                      <button className="rounded-lg bg-green-700 text-white">
                        <a className="flex px-6">
                          <span className=" py-4 font-medium">ĐĂNG KÝ NGAY</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className='w-full'>
                      <div className="px-6 pt-4 flex flex-col pb-2">
                        {d?.benefit.map((f, i) => (
                          <span key={i} className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-[5px] px-3 py-2 text-sm font-semibold">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




        {/* </div> */}
      </div>
    </section>
  )
}

export default ProductPrices