"use client";
import map_menu from "../../../../public/images/menu/map_menu.jpg";
import map from "../../../../public/images/map/map.png";



import { Icon } from '@iconify/react';
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import Slider from "react-slick";
import auth_1 from '../../../../public/images/testimonials/auth-01.png'
import auth_2 from '../../../../public/images/testimonials/auth-02.png'
import auth_3 from '../../../../public/images/testimonials/auth-03.png'
import { FreeMode, Autoplay, Scrollbar, Mousewheel, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import Link from 'next/link';
const data = [
  { img: auth_1, from: 'Hanoi, Vietnam', name: 'Khách hàng B', descript: 'Các hoạt động tương tác như bài kiểm tra và thảo luận thực sự giúp tôi hiểu bài học hơn. Đây là một cách tuyệt vời để tăng cường sự tham gia.Giao diện người dùng của ứng dụng rất đẹp và dễ sử dụng. Tôi thích cách bạn tổ chức thông tin và làm cho việc học trở nên thú vị.' },
  { img: auth_2, from: 'Hanoi, Vietnam', name: 'Khách hàng A', descript: 'Giao diện người dùng của ứng dụng rất đẹp và dễ sử dụng. Tôi thích cách bạn tổ chức thông tin và làm cho việc học trở nên thú vị.Các hoạt động tương tác như bài kiểm tra và thảo luận thực sự giúp tôi hiểu bài học hơn. Đây là một cách tuyệt vời để tăng cường sự tham gia' },
  { img: auth_3, from: 'Hanoi, Vietnam', name: 'Khách hàng C', descript: 'Tôi đánh giá cao việc ứng dụng có thể sử dụng được trên điện thoại di động và máy tính bảng. Điều này giúp tôi có thể học bất cứ nơi nào và bất cứ khi nào.Giao diện người dùng của ứng dụng rất đẹp và dễ sử dụng. Tôi thích cách bạn tổ chức thông tin và làm cho việc học trở nên thú vị.' },
  { img: auth_1, from: 'Hanoi, Vietnam', name: 'Khách hàng D', descript: 'Tôi đánh giá cao việc ứng dụng có thể sử dụng được trên điện thoại di động và máy tính bảng. Điều này giúp tôi có thể học bất cứ nơi nào và bất cứ khi nào.Các hoạt động tương tác như bài kiểm tra và thảo luận thực sự giúp tôi hiểu bài học hơn. Đây là một cách tuyệt vời để tăng cường sự tham gia' },
  { img: auth_2, from: 'Hanoi, Vietnam', name: 'Khách hàng A', descript: 'Giao diện người dùng của ứng dụng rất đẹp và dễ sử dụng. Tôi thích cách bạn tổ chức thông tin và làm cho việc học trở nên thú vị.Các hoạt động tương tác như bài kiểm tra và thảo luận thực sự giúp tôi hiểu bài học hơn. Đây là một cách tuyệt vời để tăng cường sự tham gia' },
  { img: auth_3, from: 'Hanoi, Vietnam', name: 'Khách hàng C', descript: 'Tôi đánh giá cao việc ứng dụng có thể sử dụng được trên điện thoại di động và máy tính bảng. Điều này giúp tôi có thể học bất cứ nơi nào và bất cứ khi nào.Các hoạt động tương tác như bài kiểm tra và thảo luận thực sự giúp tôi hiểu bài học hơn. Đây là một cách tuyệt vời để tăng cường sự tham gia' },

]

const openCloseTime = [
  { name: 'Mon - Sat', time: '8:00am - 5:30pm' },
  { name: 'Sun', time: 'Close' },

]
const OpenTimes = ({ fontTitle }: { fontTitle?: string; }) => {




  const [swiperDirection, setSwiperDirection] = useState(true);
  console.log('swiperDirection', swiperDirection);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024; // Điều chỉnh ngưỡng cho kích thước màn hình lớn
      const direction = isLargeScreen ? true : false;
      setSwiperDirection(direction);
    };

    // Gọi hàm handleResize khi kích thước màn hình thay đổi
    window.addEventListener('resize', handleResize);

    // Gọi handleResize khi component được mount để đặt thiết lập ban đầu
    handleResize();

    // Xóa event listener khi component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full mt-4 xs:mt-8  '>
      <div className='px-[100px] mx-5 max-w-full flex flex-col  gap-3'>
        <div className="flex justify-start gap-2 items-center">
          {/* <Icon icon="ooui:feedback-ltr" className={"text-amber-950 text-[40px] sm:text-[50px] ease-linear duration-150 "} /> */}
          <div className={` font-bold text-xl sm:text-2xl `}> Khách Hàng Review</div>
        </div>
        <div className='flex md:flex-row flex-col gap-8 md:gap-3'>
          <div className='w-full md:w-[40%]   flex-flex-col sm:rounded-sm'>
            {/* <div className='flex gap-3 th-bd h-full p-4'> */}
            <Swiper
              speed={1000}
              slidesPerView={1}
              effect={'slide'}
              loop={true}
              pagination={{
                clickable: true,
              }}
              mousewheel={swiperDirection === true ? true : false}
              direction={swiperDirection ? 'vertical' : 'horizontal'}
              modules={[FreeMode, Autoplay, Mousewheel, A11y, EffectFade, EffectCreative, EffectCards, EffectCoverflow, Pagination, Scrollbar, Navigation]}
              className="container max-w-full shadow-lg sm:max-w-screen-xl h-[500px] group ease-linear duration-100 relative rounded-xl"
            >
              {data?.map((d, index) => (
                <SwiperSlide key={index} className="bg-[#eff1ee] border-[1px] border-gray-300 shadow-sm py-8 h-full ease-linear duration-100 rounded-xl">
                  <div className=' relative rounded-md p-4 th-fl flex-col gap-2' >
                    {/* <Image src={''} src={d.img} className="w-28 object-cover" width={2000} height={0}> */}
                    <Icon icon="mingcute:user-4-line" className="w-28 object-cover h-28" />
                    {/* </Image> */}
                    <div className='absolute text-4xl -top-5 text-yellow-500'>{<Icon icon="radix-icons:quote" />}</div>
                    <div className='font-bold text-lg sm:text-2xl'>{d.name}</div>
                    <div className=' text-xs text-[#222222d1] '>{d.from}</div>
                    <div className=' text-sm sm:text-sm font-medium  mt-4'>{d.descript}</div>
                  </div>
                  <Icon icon="noto:computer-mouse" className="bg-blue-300 p-1 rounded-full lg:block hidden absolute right-5 bottom-5 text-[40px]" />
                </SwiperSlide>
              ))
              }
            </Swiper >
          </div>
          {/* </div> */}
          <div className=' flex flex-col justify-between border-[1px] border-gray-300 shadow-lg bg-[#eff1ee] w-full md:w-[60%] rounded-xl'>
            <div className='flex w-full flex-col md:flex-row text-black gap-4  p-4 justify-between mb-4'>
              <div className=' p-2 rounded-tl-xl rounded-bl-xl '>
                <div className='  z-[1000]'>
                  <div className=' text-lg sm:text-2xl font-bold'>3i Software Company</div>
                  <div className=' underline text-xs sm:text-sm mt-4'>3i.com.vn</div>
                </div>
                <div className="pt-4  text-base font-medium    flex gap-2 flex-col justify-center items-start">
                  <div className="  flex  gap-4 items-center">
                    <div className=''><Icon icon="carbon:phone-filled" className='text-blue-500 text-base' /> </div>
                    <div className='text-[#222222D1] text-sm sm:text-sm font-semibold'>024328698</div>
                  </div>
                  <div className=" flex  gap-4 items-center">
                    <div className=''><Icon icon="bx:map" className='text-blue-500 text-base' /></div>
                    <div className='text-[#222222D1] text-sm sm:text-sm font-semibold'>Nhà B1-4, 85 Hạ Đình Khu đô thị Hạ Đình - Thanh Xuân - Hà Nội, Hà Nội, Việt Nam</div>
                  </div>
                  <div className="flex  gap-4 items-center">
                    <div className=''><Icon icon="ic:round-email" className='text-blue-500 text-base' /></div>
                    <div className='text-[#222222D1] text-sm sm:text-sm font-semibold'>Vietnamtopapp@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className=' rounded-xl'>
                <Link href="https://www.google.com/maps/place/C%C3%B4ng+ty+TNHH+C%C3%B4ng+ngh%E1%BB%87+v%C3%A0+truy%E1%BB%81n+th%C3%B4ng+3i/@20.9907569,105.8086529,18z/data=!4m6!3m5!1s0x3135ac945f577a01:0xdc160bfc73c6fafe!8m2!3d20.991062!4d105.809626!16s%2Fg%2F1jkxn753s?hl=vi-VN&entry=ttu">
                  {/* <Image alt='ddd' src={map} className='rounded-xl h-full' /> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0391682327977!2d105.8070510739328!3d20.991066989074717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac945f577a01%3A0xdc160bfc73c6fafe!2zQ8O0bmcgdHkgVE5ISCBDw7RuZyBuZ2jhu4cgdsOgIHRydXnhu4FuIHRow7RuZyAzaQ!5e0!3m2!1svi!2s!4v1706848180501!5m2!1svi!2s"  className='rounded-xl h-[350px] w-[500px]'></iframe>
                </Link>
              </div>
            </div>
            <div className='w-full flex  flex-col items-center gap-3'>
              <div className='th-fl w-fit gap-2  bg-black p-1 py-2 px-4 text-white rounded-full'>
                <div><Icon icon="bi:door-open-fill" className='text-[20px]' /></div>
                <div className='font-bold text-base '>Open-Hours</div>
              </div>
              <div className=' h-[1px] w-[90%] bg-gray-300'></div>
              <div className='flex flex-col justify-start items-start gap-2 p-1'>
                {openCloseTime?.map((o, i) => (
                  <div className='flex font-semibold justify-center items-center' key={i}>
                    <div className='min-w-[40px]  font-bold text-base sm:text-lg'>{o.name}</div>
                    <div className='mx-1'>  :  </div>
                    <div className='text-sm sm:text-base text-[#222222d1]'>{o.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>


    </div >)
}


export default OpenTimes