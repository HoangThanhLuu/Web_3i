"use client";

import SectionTitle from "../Common/SectionTitle";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "public/platform/scss/platform.scss";

import Pl1 from "@/public/images/platform/workmanagement.png";
import Pl2 from "@/public/images/platform/hrm.png";
import Pl3 from "@/public/images/platform/projectmanagement.png";
import Pl4 from "@/public/images/platform/warehouse.png";
import Pl5 from "@/public/images/platform/download.png";
import Pl6 from "@/public/images/platform/contract.png";
import Pl7 from "@/public/images/platform/Quan-ly-nha-cung-cap.png";
import Pl8 from "@/public/images/platform/customer.png";
import Pl9 from "@/public/images/platform/finance.png";
import Pl10 from "@/public/images/platform/system.png";
import SinglePlatform from "../Platform/SinglePlatform";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import  { CustomArrowProps } from "react-slick";
import "./HomeCarouselLogo.scss"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "100",
        position: "absolute",
        top: "50%",
        right: "2%",
        font: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "100",
        position: "absolute",
        top: "50%",
        left: "1%",
        font: "30px",
      }}
      onClick={onClick}
    />
  );
}
export default function HomeCarouselLogo() {
    const CustomPrevArrow: React.FC<CustomArrowProps> = ({
        className,
        onClick,
      }) => (
        <div className={`${className} custom-arrow custom-prev !top-[40%] !left-[-7%]`} onClick= {onClick}>
          <GoChevronLeft    className="text-xl p-2 rounded-full ring-2 ring-neutral-500 md:text-2xl lg:text-3xl font-bold hidden lg:block text-neutral-500" />
        </div>
      );
      
      const CustomNextArrow: React.FC<CustomArrowProps> = ({
        className,
        onClick,
      }) => (
        <div className={`${className} mr-8 custom-arrow custom-next !top-[40%] !right-[-8%]`} onClick= {onClick}>
          <GoChevronRight  className="text-xl  p-2 rounded-full ring-2 ring-neutral-500 md:text-2xl lg:text-3xl font-bold  hidden lg:block text-neutral-500" />
        </div>
      );
    
  const data = {
    title: "Hệ điều hành doanh nghiệp",
    to: "platform",
    href: "/products/2706",
    children: [
      {
        img: Pl1,
        id: `2712`,
        title: `Điều hành việc`,
        intro:
          "Giao việc cho nhân viên. Báo cáo và duyệt tiến độ, theo dõi tiến trình công việc",
        colorIntro: "#992395",
      },
      {
        img: Pl2,
        id: `2714`,
        title: "Quản lý nhân sự",
        intro:
          "Quản lý thông tin nhân sự. Giám sát lịch làm việc, chấm công, tính lương...",
        colorIntro: "#693b05",
      },
      {
        img: Pl3,
        id: `2715`,
        title: `Quán lý dự án`,
        intro: "Quản lý thông tin dự án, giám sát tiến độ thực hiện dự án",
        colorIntro: "#575654",
      },
      {
        img: Pl4,
        id: `2716`,
        title: `Kho và bán hàng`,
        intro:
          "Theo dõi quá trình nhập xuất kho hàng tồn. Quản lý giá sản phẩm dịch vụ",
        colorIntro: "#04785d",
      },
      {
        img: Pl5,
        id: `2716`,
        title: `Quản lý tài sản`,
        intro:
          "Kiểm kê tài sản, giám sát việc cấp phát, mua sắm, sửa chữa tài sản",
        colorIntro: "#992395",
      },
      {
        img: Pl6,
        id: `2716`,
        title: `Hợp đồng & đơn hàng`,
        intro:
          "Quản lý hợp đồng bán, hợp đồng mua, đơn đặt hàng, theo dõi tiến độ hợp đồng",
        colorIntro: "#693b05",
      },
      {
        img: Pl7,
        id: `2716`,
        title: `Quản trị Nhà cung cấp`,
        intro:
          "Quản lý thông tin nhà cung cấp, quản trị liên hệ, bản đồ vị trí các nhà cung cấp",
        colorIntro: "#575654",
      },
      {
        img: Pl8,
        id: `2716`,
        title: `Quản trị khách hàng`,
        intro:
          "Quản lý thông tin khách hàng, quản trị liên hệ, sự kiện, bản đồ khách hàng",
        colorIntro: "#04785d",
      },
      {
        img: Pl9,
        id: `2716`,
        title: `Quản trị tài chính`,
        intro: "Kiểm soát tài chính, quỹ, theo dõi thu chi, cảnh báo tài chính",
        colorIntro: "#992395",
      },
      {
        img: Pl10,
        id: `2716`,
        title: `Quản trị hệ thống`,
        intro: "Cài đặt hệ thống, quản lý người dùng, phân quyền ứng dụng",
        colorIntro: "#8f5209",
      },
      {
        img: Pl7,
        id: `2716`,
        title: `Quản trị Nhà cung cấp`,
        intro:
          "Quản lý thông tin nhà cung cấp, quản trị liên hệ, bản đồ vị trí các nhà cung cấp",
        colorIntro: "#575654",
      },
      {
        img: Pl8,
        id: `2716`,
        title: `Quản trị khách hàng`,
        intro:
          "Quản lý thông tin khách hàng, quản trị liên hệ, sự kiện, bản đồ khách hàng",
        colorIntro: "#04785d",
      },
      {
        img: Pl9,
        id: `2716`,
        title: `Quản trị tài chính`,
        intro: "Kiểm soát tài chính, quỹ, theo dõi thu chi, cảnh báo tài chính",
        colorIntro: "#992395",
      },
      {
        img: Pl10,
        id: `2716`,
        title: `Quản trị hệ thống`,
        intro: "Cài đặt hệ thống, quản lý người dùng, phân quyền ứng dụng",
        colorIntro: "#8f5209",
      },
      {
        img: Pl7,
        id: `2716`,
        title: `Quản trị Nhà cung cấp`,
        intro:
          "Quản lý thông tin nhà cung cấp, quản trị liên hệ, bản đồ vị trí các nhà cung cấp",
        colorIntro: "#575654",
      },
      {
        img: Pl8,
        id: `2716`,
        title: `Quản trị khách hàng`,
        intro:
          "Quản lý thông tin khách hàng, quản trị liên hệ, sự kiện, bản đồ khách hàng",
        colorIntro: "#04785d",
      },
      {
        img: Pl9,
        id: `2716`,
        title: `Quản trị tài chính`,
        intro: "Kiểm soát tài chính, quỹ, theo dõi thu chi, cảnh báo tài chính",
        colorIntro: "#992395",
      },
      {
        img: Pl10,
        id: `2716`,
        title: `Quản trị hệ thống`,
        intro: "Cài đặt hệ thống, quản lý người dùng, phân quyền ứng dụng",
        colorIntro: "#8f5209",
      },
    ],
  };

  const logo = [
    {
      src : "/images/carousellogo/logo1.png"
  },
  {
    src : "/images/carousellogo/logo4.jpg"
},
{
  src : "/images/carousellogo/logo3.png"
},
{
  src : "/images/carousellogo/logo4.jpg"
},
{
  src : "/images/carousellogo/logo1.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
src : "/images/carousellogo/logo3.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
  src : "/images/carousellogo/logo1.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
src : "/images/carousellogo/logo3.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
  src : "/images/carousellogo/logo1.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
src : "/images/carousellogo/logo3.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
  src : "/images/carousellogo/logo1.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},
{
src : "/images/carousellogo/logo3.png"
},
{
src : "/images/carousellogo/logo4.jpg"
},

  ]
  let settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow:6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="features" className=" mt-10 mb-10 lg:mb-20">
        <div className="border-y-2 border-neutral-200 mb-10 ">
         <div className="px-10 md:px-[210px] py-4  ">
         
    <h4 className="text-[#002958] font-semibold text-xl mb-4">Đối tác</h4>
<Slider className="" {...settings} >
  {data.children.map((feature,index) => (
   <Image
   key={index}
    src={`${logo[index]?.src }`}
    alt="logo"
    width={20}
    height={20}
    className="rounded-lg !block !w-[155px] !h-[98px] object-cover"
    
    
    
/>
  ))}
</Slider>
         </div>
          {/* <SinglePlatform key={"1"} href={data.href} feature={data} /> */}
        </div>
      </section>
    </>
  );
}
