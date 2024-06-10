"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./HomePageSlide.css";
import Sl2 from "@/public/images/HomeSlides/bia.png";
import Sl3 from "@/public/images/HomeSlides/slide2.png";
// import Sl7 from "@/public/images/HomeSlides/ei.png";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import './homepageslide.scss';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import SliderElement from "./SliderElement";


const dataSlide = [
  {
    feartureTitle:"Tạo đột phá với"
    ,
    title: (
      <>
        Chuyển đổi số 
      </>
    ),
    des: <>Chúng tôi sử dụng các công nghệ kỹ thuật số để <br /> tạo ra những bước tiến nhảy vọt trong việc cải thiện  <br />  năng suất lao động, tốc độ và hiệu quả. </>,
    url: "/images/HomeSlides/bannerDigital.jpg",
  },
  {
    feartureTitle:""
    ,
    title: <>Kết nối công nghệ toàn cầu</>,
    des: "Là một doanh nghiệp Việt Nam, chúng tôi tự hào là nơi gửi trọn niềm tin của nhiều đối tác trong và ngoài nước",
    url: "/images/HomeSlides/manual2.jpg",
  },
  {
    feartureTitle:""
    ,
    title: (
      <>
      Smartwork <br /> Phần mềm quản lí doanh nghiệp <br /> thông minh và toàn diện
      </>
    ),
    des: "Giúp doanh nghiệp quản lý các hoạt động của mình một cách hiệu quả và tiết kiệm thời gian",
    url: "/images/HomeSlides/digital2.jpg",
  },
];

export default function HomeSlides() {
  const [animateText, setAnimateTex] = useState<boolean>(false)
  const [animatePage, setAnimatePage] = useState<boolean>(false)

  console.log("check text", animateText);
  
  const CustomPrevArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => (
    <div className={`${className} custom-arrow custom-prev`} onClick= {() => {
      onClick()
      setAnimateTex(!animateText)
    }}>
      <FaChevronLeft   className="text-xl md:text-2xl lg:text-3xl font-bold hidden lg:block" />
    </div>
  );
  
  const CustomNextArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => (
    <div className={`${className} mr-8 custom-arrow custom-next`} onClick= {() => {
      onClick()
      setAnimateTex(!animateText)
    }}>
      <FaChevronRight className="text-xl md:text-2xl lg:text-3xl font-bold  hidden lg:block" />
    </div>
  );

  // useEffect(() => {},[])
  let settings = {

    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    fade: true,
    className: "slider variable-width",
    dots: false,

    // arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };


  const data = [Sl2, Sl3];
  return (
    <>
      <section id="features" className=" bg-[green]/[.03]">
        <div className="mb-auto h-[50vh] lg:h-full">
          <Slider {...settings}>
          {dataSlide.map((item,index) => <SliderElement key={index} urlImage={item.url}/>)}

          </Slider>
        </div>
      </section>
    </>
  );
}