import React, { useState, useLayoutEffect } from 'react'
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Picture6 from "../../../../public/images/iwindoor/Picture6.png";
import ArcodionMetalearn from './ArcodionMetalearn';
import SectionTitle from '../Common/SectionTitle';
import { Icon } from '@iconify/react';
import meta from "../../../../public/images/metalearn/meta.png";
import p24 from "../../../../public/images/metalearn/p24.png"
import p25 from "../../../../public/images/metalearn/p25.png"
import p26 from "../../../../public/images/metalearn/p26.png"
import p27 from "../../../../public/images/metalearn/p27.png"
import p3 from "../../../../public/images/metalearn/p3.png"
import p4 from "../../../../public/images/metalearn/p4.png"
import p5 from "../../../../public/images/metalearn/p5.png"
import p6 from "../../../../public/images/metalearn/p6.png"
import p7 from "../../../../public/images/metalearn/p7.png"
import p8 from "../../../../public/images/metalearn/p8.png"
import p34 from "../../../../public/images/metalearn/p34.png"
import p35 from "../../../../public/images/metalearn/p35.png"
import p40 from "../../../../public/images/metalearn/p40.png"
import p41 from "../../../../public/images/metalearn/p41.png"
import p42 from "../../../../public/images/metalearn/p42.png"
import p43 from "../../../../public/images/metalearn/p43.png"
import p44 from "../../../../public/images/metalearn/p44.png"
import p45 from "../../../../public/images/metalearn/p45.png"
import p46 from "../../../../public/images/metalearn/p46.png"
import p47 from "../../../../public/images/metalearn/p47.png"
import p48 from "../../../../public/images/metalearn/p48.png"
import p49 from "../../../../public/images/metalearn/p49.png"
import p50 from "../../../../public/images/metalearn/p50.png"
import p51 from "../../../../public/images/metalearn/p51.png"
import Link from 'next/link';

const data = [

  {
    id: 1,
    img: [p24, p25],
    gallary: p42,
    title: 'Lớp học của tôi',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Tạo lớp học '
      },
      {
        img: Picture6,
        title: 'Đưa các học sinh đã kết nối tham gia vào lớp học'
      },
      {
        img: Picture6,
        title: 'Mỗi lớp học có bảng tin và hệ thống Q&A riêng'
      },
      {
        img: Picture6,
        title: ' Hệ thống list ra các lớp học sinh đã kết nối để tham gia'
      },
    ],
  },
  {
    id: 2,
    img: [p5, p6],
    gallary: p41,
    title: 'Dạy trực tuyến',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Giáo viên thiết lập tài khoản zoom trên hệ thống để tạo các lịch dạy trực tuyến cho lớp học của mình'
      },
      {
        img: Picture6,
        title: 'Hệ thống gửi thông báo cho học viên trước 5 phút để học viên chuẩn bị vào lớp'
      },
      {
        img: Picture6,
        title: 'Hệ thống cung cấp công cụ bảng vẽ để học sinh và giáo viên có thể vẽ và thao tác trực tuyến với nhau'
      }
    ],
  },
  {
    id: 3,
    img: [p24, p25],
    gallary: p51,
    title: 'Thi trực tuyến',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Giáo viên có thể tạo các cuộc thi cho lớp của mình'
      },
      {
        img: Picture6,
        title: 'Học sinh sử dụng tính năng này để làm đề thi trắc nghiệm online '
      },
    ],
  },
  {
    id: 4,
    img: [p5, p6],
    gallary: p40,
    title: 'Rèn luyện',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Giáo viên có thể giao nhiệm vụ rèn luyện cho học sinh sau buổi học'
      },
      {
        img: Picture6,
        title: 'Học sinh có thể rèn luyện theo yêu cầu'
      },
      {
        img: Picture6,
        title: 'Hệ thống nhắc nhở đánh giá kết quả của học viên thông qua làm đề thi hoặc câu hỏi trên app'
      }, {
        img: Picture6,
        title: 'Giáo viên có thể thấy kết quả rèn luyện của học viên trong khoảng thời gian nhất định và theo các nhiệm vụ rèn luyện'
      }, {
        img: Picture6,
        title: 'Kết quả được biểu diễn theo biểu đồ Gantt có thể được xuất ra file excel / pdf'
      },
    ],
  },
  {
    id: 5,
    img: [p5, p6],
    gallary: p43,
    title: 'Ngân hàng đề thi',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể tạo câu hỏi và đề thi riêng dựa trên dữ liệu của hệ thống'
      },
      {
        img: Picture6,
        title: 'Dữ liệu các đề thi có thể được chia sẻ hoặc bán'
      },
      {
        img: Picture6,
        title: 'Học sinh làm đề mà mình được giao'
      },
    ],
  },
  {
    id: 6,
    img: [p5, p6],
    gallary: p44,
    title: 'Ngân hàng quiz',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể tạo các loại quiz khác nhau trực tiếp trên app'
      },
      {
        img: Picture6,
        title: 'Dữ liệu câu hỏi có thể được chia sẻ hoặc bán'
      }
    ],
  },
  {
    id: 7,
    img: [p5, p6],
    gallary: p45,
    title: 'Tài liệu',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể sử dụng dữ liệu file sách'
      },
      {
        img: Picture6,
        title: 'Người dùng có thể search fulltext trong nội dung file'
      }
    ],
  },

  {
    id: 8,
    img: [p5, p6],
    gallary: p46,
    title: 'Khóa học',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể xem nội dung các khóa học (gồm video và text) offline'
      }
    ],
  },
  // {
  //   img: [p5, p6],
  //   gallary: Picture6,
  //   title: 'Blog',
  //   descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
  //   ingredient: [
  //     {
  //       img: Picture6,
  //       title: 'Người dùng có thể chia sẻ thông tin về cuộc sống và quan điểm cá nhân về từng môn học'
  //     }
  //   ],
  // },
  {
    id: 9,
    img: [p5, p6],
    gallary: p49,
    title: 'Bộ sưu tập',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể ghim các câu hỏi, đề thi, file mà mình quan tâm'
      }
    ],
  },
  {
    id: 10,
    img: [p5, p6],
    gallary: p50,
    title: 'Chấm thi offline',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Ứng dụng chụp ảnh giúp giáo viên chấm bài tự động, tiết kiệm thời gian và giảm sai sót'
      },
      {
        img: Picture6,
        title: 'Giáo viên có thể thống kê điểm của các sinh viên sau khi làm bài thi'
      }
    ],
  },

];
const data2 = [
  {
    img: [p24, p25],
    gallary: Picture6,
    title: 'Q&A',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể tham gia các cộng đồng hỏi đáp riêng của môn học tương ứng'
      }
    ],
  },
  {
    img: [p26, p27],
    gallary: Picture6,
    title: 'Chat',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể chat riêng trực tiếp với giáo viên'
      }
    ],
  },
  {
    img: [p3, p4],
    gallary: Picture6,
    title: 'Đăng ký',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Đăng ký tài khoản mới với vai trò là học sinh, giáo viên, quản trị viên'
      },
      {
        img: Picture6,
        title: 'Đăng nhập nhanh bằng tài khoản Facebook, Google, Apple '
      },
    ],
  },
  {
    img: [p5, p6],
    gallary: Picture6,
    title: 'Môn học của tôi',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Chọn môn học quan tâm từ hệ thống'
      },
      {
        img: Picture6,
        title: 'Hệ thống đưa dữ liệu tương ứng với môn học đã chọn (câu hỏi, đề thi, tài liệu, lớp học, khóa học liên quan…)'
      },
    ],
  },
  {
    img: [p7, p8],
    gallary: Picture6,
    title: 'Quản lý kết nối',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Kết nối với nhiều người dùng khác để tạo thành cộng đồng chia sẻ việc học'
      }
    ],
  },
  {
    img: [p34, p35],
    gallary: Picture6,
    title: 'Blog',
    descript: "Tính năng cho phép người dùng là giáo viên hoặc học sinh có thể tự tạo lớp học (khái niệm định danh để quản lý) sau đó đưa các user kết nối vào lớp học để hình thành lớp giảng dạy, mỗi lớp học sẽ có chức năng bảng tin riêng cho lớp đó và hệ thống Q&A chỉ dành cho lớp học đó. Khi các học sinh được assign với các lớp học thì hệ thống chỉ list ra các lớp học học sinh được kết nối để tham gia học ",
    ingredient: [
      {
        img: Picture6,
        title: 'Người dùng có thể chia sẻ thông tin về cuộc sống và quan điểm cá nhân về từng môn học'
      }
    ],
  },
]

const BnMetalearn = () => {
  const [isOpen, setOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(3);
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 994) {
        setWidth(3);
      } else if (window.innerWidth >= 575) {
        setWidth(2);
      } else {
        setWidth(1);
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [currentItem, setCurrentItem] = useState(data[0])

  const renderItems = () => {
    const result = [];
    for (let i = 0; i < data.length; i += width) {
      const group = data.slice(i, i + width); // Lấy group phần tử theo width
      const checkIsGroupOpen = group.find((f) => f.id === currentItem.id)
      result.push(
        <div key={i} className='text-red-600 gap-4 mb-4 sm:mb-12 flex flex-col'>
          <div className='flex justify-start items-center gap-8'>
            {group?.map((d, i) => (
              <div className={' w-1/3 flex-1 p-6 bg-white rounded-md shadow-shadow-chat ease-linear duration-500 ' + (d.id === currentItem.id ? '!bg-green-500 text-white ' : '')} key={i}>
                <Image alt=' ' src={d?.gallary} className='w-[130px] h-[130px]' />
                <div className='text-xl font-bold mt-8'>{d.title}</div>
                <div className={'text-sm text-[#222222d1] mt-3 ' + (d.id === currentItem.id ? ' !text-white ' : '')}>{d.descript}</div>
                <div className=' flex gap-4 mt-3 relative'>
                  {!(d.id === currentItem.id) && <button onClick={() => setCurrentItem(d)} className='px-6 py-3 bg-green-600 hover:bg-green-700 ease-linear duration-100 text-white text-sm rounded-md'>
                    See more
                  </button>}
                  {d.id === currentItem.id &&
                    <>
                      <button onClick={() => setCurrentItem(d)} className='opacity-0 px-6 py-3 bg-green-600 hover:bg-green-700 ease-linear duration-100 text-white text-sm rounded-md'>
                        See more
                      </button>
                      <div onClick={() => setCurrentItem(d)} className={'px-6  py-3 absolute -bottom-20 '}>
                        <Icon icon="mdi:arrow-down-bold" className='text-green-500' fontSize={70} />
                      </div>
                    </>

                  }
                  <button onClick={() => setOpen(true)} className='px-6 py-3 hover:bg-green-500 hover:text-white ease-linear duration-100 text-sm bg-green-50 text-green-800 rounded-md'>Watch video</button>
                </div>
              </div>
            ))}
          </div>
          {checkIsGroupOpen &&
            <div className='bg-[#eff1ee]  md:flex-row flex-col shadow-shadow-chat w-full flex items-start justify-between rounded-xl px-10 py-6 gap-4'>
              <div className="flex ease-linear duration-200 flex-col gap-4 sm;gap-12 justify-center lg:w-1/2">
                <div className="text-xl sm:text-3xl text-black font-bold">
                  Chức năng {currentItem.title}
                </div>
                <div className='flex flex-col justify-center gap-2 sm:gap-4'>
                  {currentItem.ingredient?.map((d, i) => (
                    <div key={i}>
                      <div className={'flex group bg-gray-300 rounded-full justify-between items-center '}>

                        <div className={"flex justify-start w-full py-1  pr-3 items-center gap-2 "}>
                          <div className="mt-1.5">
                            <Image alt={'alt'} src={d.img} className="min-w-[50px] sm:min-w-[70px] w-[30px] sm:w-[70px]" />
                          </div>
                          <div className="text-sm sm:text-lg font-semibold text-[#222222D1]">{d.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <FAQ /> */}
              </div>

              <div className='flex w-full md:w-1/2'>
                <Image src={currentItem.img[0]} alt="video image" className=' rounded-2xl w-1/2 mr-2' width={2000} height={2000} />
                <Image src={currentItem.img[1]} alt="video image" className=' rounded-2xl w-1/2' width={2000} height={2000} />
              </div>
            </div>
          }
        </div>
      );
    }
    return result;
  };





  return (
    <div className='w-full '>
      {/* main video */}
      <div className='bg-gray-200  py-[50px]'>
        <div className='container max-w-full sm:max-w-screen-xl'>
          <div className='rounded-xl bg-white'>
            <div
              className="wow  p-4 fadeInUp mx-auto overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40]  items-center justify-center rounded-2xl border-[1px] border-gray-300">
                <div className='flex justify-between gap-2'>
                  <Image src="/images/metalearn/meta.PNG" alt="video image" className='rounded-2xl flex-1 w-[24%]' width={2000} height={200} />
                  <Image src="/images/metalearn/meta.PNG" alt="video image" className='rounded-2xl flex-1 w-[24%]' width={2000} height={200} />
                  <Image src="/images/metalearn/meta.PNG" alt="video image" className='rounded-2xl flex-1 w-[24%]' width={2000} height={200} />
                  <Image src="/images/metalearn/meta.PNG" alt="video image" className='rounded-2xl flex-1 w-[24%]' width={2000} height={200} />
                </div>
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current "
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay={true}
              start={true}
              isOpen={isOpen}
              videoId="Ywp0qL9pc5s"
              onClose={() => setOpen(false)}
            />
          </div>
          <div className=''></div>
        </div>
      </div>
      {/* feature 1 */}
      <div className='bg-gray-200  py-[50px]'>
        <div className='container max-w-full sm:max-w-screen-xl'>
          <div className='w-full th-fl flex-col gap-4'>
            <div className='text-xl sm:text-4xl font-bold text-center p-1 sm:px-32'> Học Trực Tuyến - Liên Kết Tối Ưu, Tiện Lợi Mọi Lúc, Mọi Nơi</div>
            <div className='text-[#222222d1] text-xs sm:text-lg text-center px-6 sm:px-64'>Ứng dụng của chúng tôi là nơi hội tụ những tính năng tiện ích, mang đến trải nghiệm học trực tuyến linh hoạt và hiệu quả </div>

            <div className=' flex-col flex '>
              {renderItems()}
            </div>
          </div>
        </div>
      </div>
      {/* feature 2 */}
      <div className='bg-gray-100 py-[50px]'>
        <div className='container max-w-full sm:max-w-screen-xl'>
          <div className='rounded-xl w-full th-fl flex-col gap-4'>
            <div className='text-xl sm:text-4xl font-bold text-center p-1 sm:px-32'> Giao Tiếp và Kết Nối - Những Hành Động Tạo Nên Cộng Đồng Học Tập Chất Lượng</div>
            <div className='text-[#222222d1] text-xs sm:text-lg text-center px-6 sm:px-64'>Metalearn không chỉ đơn thuần là nơi học tập, mà còn là một không gian tương tác và chia sẻ giữa cộng đồng người học </div>
            <div className='bg-white md:flex-row flex-col shadow-shadow-chat w-full flex items-start justify-between rounded-xl p-8 gap-4'>
              <div className='w-full md:w-1/2 h-full mt-[5%]'>
                {data2.map((d, i) => (
                  <div key={i}><ArcodionMetalearn setOpen={setOpen} isMobile={isMobile} data2={data2} d={d} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} index={i} /></div>
                ))}
              </div>
              {!isMobile && <div className='flex w-full md:w-1/2 mt-[5%]'>
                <Image src={data2[currentIndex].img[0]} alt="video image" className='rounded-2xl w-1/2 mr-2' width={2000} height={2000} />
                <Image src={data2[currentIndex].img[1]} alt="video image" className='rounded-2xl w-1/2' width={2000} height={2000} />
              </div>}
            </div>
          </div>
        </div>
      </div>


      <div className='bg-[#f9f9f9]  py-[50px]'>
        <div className='container max-w-full sm:max-w-screen-xl'>
          <div className='w-full th-fl flex-col gap-4'>
            <div className='text-3xl font-bold text-center'> Title Title Title Title Title Title</div>
            <div className='text-[#222222d1] text-center px-5 sm:px-40'>descript descript descriptdescript descript descript descript descript descript descript descript descript </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BnMetalearn